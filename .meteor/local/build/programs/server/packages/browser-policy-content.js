(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var _ = Package.underscore._;
var BrowserPolicy = Package['browser-policy-common'].BrowserPolicy;
var WebApp = Package.webapp.WebApp;
var main = Package.webapp.main;
var WebAppInternals = Package.webapp.WebAppInternals;

(function(){

///////////////////////////////////////////////////////////////////////////////////
//                                                                               //
// packages/browser-policy-content/browser-policy-content.js                     //
//                                                                               //
///////////////////////////////////////////////////////////////////////////////////
                                                                                 //
// By adding this package, you get the following default policy:                 // 1
// No eval or other string-to-code, and content can only be loaded from the      // 2
// same origin as the app (except for XHRs and websocket connections, which can  // 3
// go to any origin). Browsers will also be told not to sniff content types      // 4
// away from declared content types (X-Content-Type-Options: nosniff).           // 5
//                                                                               // 6
// Apps should call BrowserPolicy.content.disallowInlineScripts() if they are    // 7
// not using any inline script tags and are willing to accept an extra round     // 8
// trip on page load.                                                            // 9
//                                                                               // 10
// BrowserPolicy.content functions for tweaking CSP:                             // 11
// allowInlineScripts()                                                          // 12
// disallowInlineScripts(): adds extra round-trip to page load time              // 13
// allowInlineStyles()                                                           // 14
// disallowInlineStyles()                                                        // 15
// allowEval()                                                                   // 16
// disallowEval()                                                                // 17
//                                                                               // 18
// For each type of content (script, object, image, media, font, connect,        // 19
// style), there are the following functions:                                    // 20
// allow<content type>Origin(origin): allows the type of content to be loaded    // 21
// from the given origin                                                         // 22
// allow<content type>DataUrl(): allows the content to be loaded from data: URLs
// allow<content type>SameOrigin(): allows the content to be loaded from the     // 24
// same origin                                                                   // 25
// disallow<content type>(): disallows this type of content all together (can't  // 26
// be called for script)                                                         // 27
//                                                                               // 28
// The following functions allow you to set rules for all types of content at    // 29
// once:                                                                         // 30
// allowAllContentOrigin(origin)                                                 // 31
// allowAllContentDataUrl()                                                      // 32
// allowAllContentSameOrigin()                                                   // 33
// disallowAllContent()                                                          // 34
//                                                                               // 35
// You can allow content type sniffing by calling                                // 36
// `BrowserPolicy.content.allowContentTypeSniffing()`.                           // 37
                                                                                 // 38
var cspSrcs;                                                                     // 39
var cachedCsp; // Avoid constructing the header out of cspSrcs when possible.    // 40
                                                                                 // 41
// CSP keywords have to be single-quoted.                                        // 42
var keywords = {                                                                 // 43
  unsafeInline: "'unsafe-inline'",                                               // 44
  unsafeEval: "'unsafe-eval'",                                                   // 45
  self: "'self'",                                                                // 46
  none: "'none'"                                                                 // 47
};                                                                               // 48
                                                                                 // 49
// If false, we set the X-Content-Type-Options header to 'nosniff'.              // 50
var contentSniffingAllowed = false;                                              // 51
                                                                                 // 52
BrowserPolicy.content = {};                                                      // 53
                                                                                 // 54
var parseCsp = function (csp) {                                                  // 55
  var policies = csp.split("; ");                                                // 56
  cspSrcs = {};                                                                  // 57
  _.each(policies, function (policy) {                                           // 58
    if (policy[policy.length - 1] === ";")                                       // 59
      policy = policy.substring(0, policy.length - 1);                           // 60
    var srcs = policy.split(" ");                                                // 61
    var directive = srcs[0];                                                     // 62
    if (_.indexOf(srcs, keywords.none) !== -1)                                   // 63
      cspSrcs[directive] = null;                                                 // 64
    else                                                                         // 65
      cspSrcs[directive] = srcs.slice(1);                                        // 66
  });                                                                            // 67
                                                                                 // 68
  if (cspSrcs["default-src"] === undefined)                                      // 69
    throw new Error("Content Security Policies used with " +                     // 70
                    "browser-policy must specify a default-src.");               // 71
                                                                                 // 72
  // Copy default-src sources to other directives.                               // 73
  _.each(cspSrcs, function (sources, directive) {                                // 74
    cspSrcs[directive] = _.union(sources || [], cspSrcs["default-src"] || []);   // 75
  });                                                                            // 76
};                                                                               // 77
                                                                                 // 78
var removeCspSrc = function (directive, src) {                                   // 79
  cspSrcs[directive] = _.without(cspSrcs[directive] || [], src);                 // 80
};                                                                               // 81
                                                                                 // 82
// Prepare for a change to cspSrcs. Ensure that we have a key in the dictionary  // 83
// and clear any cached CSP.                                                     // 84
var prepareForCspDirective = function (directive) {                              // 85
  cspSrcs = cspSrcs || {};                                                       // 86
  cachedCsp = null;                                                              // 87
  if (! _.has(cspSrcs, directive))                                               // 88
    cspSrcs[directive] = _.clone(cspSrcs["default-src"]);                        // 89
};                                                                               // 90
                                                                                 // 91
// Add `src` to the list of allowed sources for `directive`, with the            // 92
// following modifications if `src` is an origin:                                // 93
// - If `src` does not have a protocol specified, then add both                  // 94
//   http://<src> and https://<src>. This is to mask differing                   // 95
//   cross-browser behavior; some browsers interpret an origin without a         // 96
//   protocol as http://<src> and some interpret it as both http://<src>         // 97
//   and https://<src>                                                           // 98
// - Trim trailing slashes from `src`, since some browsers interpret             // 99
//   "foo.com/" as "foo.com" and some don't.                                     // 100
var addSourceForDirective = function (directive, src) {                          // 101
  if (_.contains(_.values(keywords), src)) {                                     // 102
    cspSrcs[directive].push(src);                                                // 103
  } else {                                                                       // 104
    src = src.toLowerCase();                                                     // 105
                                                                                 // 106
    // Trim trailing slashes.                                                    // 107
    src = src.replace(/\/+$/, '');                                               // 108
                                                                                 // 109
    var toAdd = [];                                                              // 110
    // If there is no protocol, add both http:// and https://.                   // 111
    if (! /^([a-z0-9.+-]+:)/.test(src)) {                                        // 112
      toAdd.push("http://" + src);                                               // 113
      toAdd.push("https://" + src);                                              // 114
    } else {                                                                     // 115
      toAdd.push(src);                                                           // 116
    }                                                                            // 117
    _.each(toAdd, function (s) {                                                 // 118
      cspSrcs[directive].push(s);                                                // 119
    });                                                                          // 120
  }                                                                              // 121
};                                                                               // 122
                                                                                 // 123
var setDefaultPolicy = function () {                                             // 124
  // By default, unsafe inline scripts and styles are allowed, since we expect   // 125
  // many apps will use them for analytics, etc. Unsafe eval is disallowed, and  // 126
  // the only allowable content source is the same origin or data, except for    // 127
  // connect which allows anything (since meteor.com apps make websocket         // 128
  // connections to a lot of different origins).                                 // 129
  BrowserPolicy.content.setPolicy("default-src 'self'; " +                       // 130
                                  "script-src 'self' 'unsafe-inline'; " +        // 131
                                  "connect-src *; " +                            // 132
                                  "img-src data: 'self'; " +                     // 133
                                  "style-src 'self' 'unsafe-inline';");          // 134
  contentSniffingAllowed = false;                                                // 135
};                                                                               // 136
                                                                                 // 137
var setWebAppInlineScripts = function (value) {                                  // 138
  if (! BrowserPolicy._runningTest())                                            // 139
    WebAppInternals.setInlineScriptsAllowed(value);                              // 140
};                                                                               // 141
                                                                                 // 142
_.extend(BrowserPolicy.content, {                                                // 143
  allowContentTypeSniffing: function () {                                        // 144
    contentSniffingAllowed = true;                                               // 145
  },                                                                             // 146
  // Exported for tests and browser-policy-common.                               // 147
  _constructCsp: function () {                                                   // 148
    if (! cspSrcs || _.isEmpty(cspSrcs))                                         // 149
      return null;                                                               // 150
                                                                                 // 151
    if (cachedCsp)                                                               // 152
      return cachedCsp;                                                          // 153
                                                                                 // 154
    var header = _.map(cspSrcs, function (srcs, directive) {                     // 155
      srcs = srcs || [];                                                         // 156
      if (_.isEmpty(srcs))                                                       // 157
        srcs = [keywords.none];                                                  // 158
      var directiveCsp = _.uniq(srcs).join(" ");                                 // 159
      return directive + " " + directiveCsp + ";";                               // 160
    });                                                                          // 161
                                                                                 // 162
    header = header.join(" ");                                                   // 163
    cachedCsp = header;                                                          // 164
    return header;                                                               // 165
  },                                                                             // 166
  _reset: function () {                                                          // 167
    cachedCsp = null;                                                            // 168
    setDefaultPolicy();                                                          // 169
  },                                                                             // 170
                                                                                 // 171
  setPolicy: function (csp) {                                                    // 172
    cachedCsp = null;                                                            // 173
    parseCsp(csp);                                                               // 174
    setWebAppInlineScripts(                                                      // 175
      BrowserPolicy.content._keywordAllowed("script-src", keywords.unsafeInline)
    );                                                                           // 177
  },                                                                             // 178
                                                                                 // 179
  _keywordAllowed: function (directive, keyword) {                               // 180
    return (cspSrcs[directive] &&                                                // 181
            _.indexOf(cspSrcs[directive], keyword) !== -1);                      // 182
  },                                                                             // 183
                                                                                 // 184
  // Helpers for creating content security policies                              // 185
                                                                                 // 186
  allowInlineScripts: function () {                                              // 187
    prepareForCspDirective("script-src");                                        // 188
    cspSrcs["script-src"].push(keywords.unsafeInline);                           // 189
    setWebAppInlineScripts(true);                                                // 190
  },                                                                             // 191
  disallowInlineScripts: function () {                                           // 192
    prepareForCspDirective("script-src");                                        // 193
    removeCspSrc("script-src", keywords.unsafeInline);                           // 194
    setWebAppInlineScripts(false);                                               // 195
  },                                                                             // 196
  allowEval: function () {                                                       // 197
    prepareForCspDirective("script-src");                                        // 198
    cspSrcs["script-src"].push(keywords.unsafeEval);                             // 199
  },                                                                             // 200
  disallowEval: function () {                                                    // 201
    prepareForCspDirective("script-src");                                        // 202
    removeCspSrc("script-src", keywords.unsafeEval);                             // 203
  },                                                                             // 204
  allowInlineStyles: function () {                                               // 205
    prepareForCspDirective("style-src");                                         // 206
    cspSrcs["style-src"].push(keywords.unsafeInline);                            // 207
  },                                                                             // 208
  disallowInlineStyles: function () {                                            // 209
    prepareForCspDirective("style-src");                                         // 210
    removeCspSrc("style-src", keywords.unsafeInline);                            // 211
  },                                                                             // 212
                                                                                 // 213
  // Functions for setting defaults                                              // 214
  allowSameOriginForAll: function () {                                           // 215
    BrowserPolicy.content.allowOriginForAll(keywords.self);                      // 216
  },                                                                             // 217
  allowDataUrlForAll: function () {                                              // 218
    BrowserPolicy.content.allowOriginForAll("data:");                            // 219
  },                                                                             // 220
  allowOriginForAll: function (origin) {                                         // 221
    prepareForCspDirective("default-src");                                       // 222
    _.each(_.keys(cspSrcs), function (directive) {                               // 223
      addSourceForDirective(directive, origin);                                  // 224
    });                                                                          // 225
  },                                                                             // 226
  disallowAll: function () {                                                     // 227
    cachedCsp = null;                                                            // 228
    cspSrcs = {                                                                  // 229
      "default-src": []                                                          // 230
    };                                                                           // 231
    setWebAppInlineScripts(false);                                               // 232
  },                                                                             // 233
                                                                                 // 234
  _xContentTypeOptions: function () {                                            // 235
    if (! contentSniffingAllowed) {                                              // 236
      return "nosniff";                                                          // 237
    }                                                                            // 238
  }                                                                              // 239
});                                                                              // 240
                                                                                 // 241
// allow<Resource>Origin, allow<Resource>Data, allow<Resource>self, and          // 242
// disallow<Resource> methods for each type of resource.                         // 243
_.each(["script", "object", "img", "media",                                      // 244
        "font", "connect", "style", "frame"],                                    // 245
       function (resource) {                                                     // 246
         var directive = resource + "-src";                                      // 247
         var methodResource;                                                     // 248
         if (resource !== "img") {                                               // 249
           methodResource = resource.charAt(0).toUpperCase() +                   // 250
             resource.slice(1);                                                  // 251
         } else {                                                                // 252
           methodResource = "Image";                                             // 253
         }                                                                       // 254
         var allowMethodName = "allow" + methodResource + "Origin";              // 255
         var disallowMethodName = "disallow" + methodResource;                   // 256
         var allowDataMethodName = "allow" + methodResource + "DataUrl";         // 257
         var allowSelfMethodName = "allow" + methodResource + "SameOrigin";      // 258
                                                                                 // 259
         var disallow = function () {                                            // 260
           cachedCsp = null;                                                     // 261
           cspSrcs[directive] = [];                                              // 262
         };                                                                      // 263
                                                                                 // 264
         BrowserPolicy.content[allowMethodName] = function (src) {               // 265
           prepareForCspDirective(directive);                                    // 266
           addSourceForDirective(directive, src);                                // 267
         };                                                                      // 268
         if (resource === "script") {                                            // 269
           BrowserPolicy.content[disallowMethodName] = function () {             // 270
             disallow();                                                         // 271
             setWebAppInlineScripts(false);                                      // 272
           };                                                                    // 273
         } else {                                                                // 274
           BrowserPolicy.content[disallowMethodName] = disallow;                 // 275
         }                                                                       // 276
         BrowserPolicy.content[allowDataMethodName] = function () {              // 277
           prepareForCspDirective(directive);                                    // 278
           cspSrcs[directive].push("data:");                                     // 279
         };                                                                      // 280
         BrowserPolicy.content[allowSelfMethodName] = function () {              // 281
           prepareForCspDirective(directive);                                    // 282
           cspSrcs[directive].push(keywords.self);                               // 283
         };                                                                      // 284
       });                                                                       // 285
                                                                                 // 286
                                                                                 // 287
setDefaultPolicy();                                                              // 288
                                                                                 // 289
///////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['browser-policy-content'] = {};

})();

//# sourceMappingURL=browser-policy-content.js.map
