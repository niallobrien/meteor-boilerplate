//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var Template = Package.templating.Template;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var _ = Package.underscore._;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed_template-extension/packages/aldeed_template-extension.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
                                                                                                                       // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/aldeed:template-extension/template-extension.js                                                         //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
/* global Meteor, Template, _, Blaze, $, Tracker */                                                                 // 1
                                                                                                                    // 2
var hookTypes = ["created", "rendered", "destroyed"];                                                               // 3
var globalHooks = {created: [], rendered: [], destroyed: []};                                                       // 4
var templateHooks = {created: {}, rendered: {}, destroyed: {}};                                                     // 5
                                                                                                                    // 6
// Setup for multiple hooks support                                                                                 // 7
// We assume that no other code will be directly defining                                                           // 8
// a hook once the client has started.                                                                              // 9
Meteor.startup(function () {                                                                                        // 10
  Template.forEach(function (template) {                                                                            // 11
    defineAllHooks(template);                                                                                       // 12
  });                                                                                                               // 13
});                                                                                                                 // 14
                                                                                                                    // 15
Template.forEach = function (callback) {                                                                            // 16
  // for some reason we get the "body" template twice when looping, so                                              // 17
  // we track that and only call the callback once.                                                                 // 18
  var alreadyDidBody = false;                                                                                       // 19
  for (var t in Template) {                                                                                         // 20
    if (Template.hasOwnProperty(t)) {                                                                               // 21
      var tmpl = Template[t];                                                                                       // 22
      if (Blaze.isTemplate(tmpl)) {                                                                                 // 23
        if (tmpl.viewName === "body") {                                                                             // 24
          if (!alreadyDidBody) {                                                                                    // 25
            alreadyDidBody = true;                                                                                  // 26
            callback(tmpl);                                                                                         // 27
          }                                                                                                         // 28
        } else {                                                                                                    // 29
          callback(tmpl);                                                                                           // 30
        }                                                                                                           // 31
      }                                                                                                             // 32
    }                                                                                                               // 33
  }                                                                                                                 // 34
};                                                                                                                  // 35
                                                                                                                    // 36
Template.onCreated = function (callback) {                                                                          // 37
  globalHooks.created.push(callback);                                                                               // 38
};                                                                                                                  // 39
                                                                                                                    // 40
Template.onRendered = function (callback) {                                                                         // 41
  globalHooks.rendered.push(callback);                                                                              // 42
};                                                                                                                  // 43
                                                                                                                    // 44
Template.onDestroyed = function (callback) {                                                                        // 45
  globalHooks.destroyed.push(callback);                                                                             // 46
};                                                                                                                  // 47
                                                                                                                    // 48
Template.prototype.hooks = function (hooks) {                                                                       // 49
  var self = this;                                                                                                  // 50
                                                                                                                    // 51
  if (typeof hooks !== "object") {                                                                                  // 52
    throw new Error("hooks argument must be an object with created, rendered, and/or destroyed properties, each set to a function");
  }                                                                                                                 // 54
                                                                                                                    // 55
  var name = parseName(self.viewName);                                                                              // 56
                                                                                                                    // 57
  // Store a reference to the hooks so they can be called by our own                                                // 58
  // already defined callbacks                                                                                      // 59
  var i, type;                                                                                                      // 60
  for (i = hookTypes.length - 1; i >= 0; i--) {                                                                     // 61
    type = hookTypes[i];                                                                                            // 62
    if (typeof hooks[type] === "function") {                                                                        // 63
      templateHooks[type][name] = templateHooks[type][name] || [];                                                  // 64
      templateHooks[type][name].push(hooks[type]);                                                                  // 65
    }                                                                                                               // 66
  }                                                                                                                 // 67
};                                                                                                                  // 68
                                                                                                                    // 69
Template.prototype.replaces = function (replacedTemplateName) {                                                     // 70
  var self = this;                                                                                                  // 71
  var name = parseName(self.viewName);                                                                              // 72
                                                                                                                    // 73
  var replaceRender = function (templateName) {                                                                     // 74
    var replacedTemplate = Template[templateName];                                                                  // 75
                                                                                                                    // 76
    if (!replacedTemplate) {                                                                                        // 77
      console.warn("Can't replace template " + templateName + " because it hasn't been defined yet.");              // 78
      return;                                                                                                       // 79
    }                                                                                                               // 80
                                                                                                                    // 81
    replacedTemplate.renderFunction = Template[name].renderFunction;                                                // 82
  };                                                                                                                // 83
                                                                                                                    // 84
  // Allow this method to be called with an array or a string                                                       // 85
  if (_.isArray(replacedTemplateName)) {                                                                            // 86
    // If called with array, iterate over the template names                                                        // 87
    _.each(replacedTemplateName, function (templateName) {                                                          // 88
      replaceRender(templateName);                                                                                  // 89
    });                                                                                                             // 90
  } else {                                                                                                          // 91
    replaceRender(replacedTemplateName);                                                                            // 92
  }                                                                                                                 // 93
};                                                                                                                  // 94
                                                                                                                    // 95
Template.prototype.inheritsHelpersFrom = function (otherTemplateName) {                                             // 96
  var self = this;                                                                                                  // 97
  var name = parseName(self.viewName);                                                                              // 98
  var thisTemplate = Template[name];                                                                                // 99
                                                                                                                    // 100
  var inheritHelpers = function (templateName) {                                                                    // 101
    var otherTemplate = Template[templateName];                                                                     // 102
    if (!otherTemplate) {                                                                                           // 103
      console.warn("Can't inherit helpers from template " + templateName + " because it hasn't been defined yet."); // 104
      return;                                                                                                       // 105
    }                                                                                                               // 106
                                                                                                                    // 107
    if (otherTemplate.__helpers) {                                                                                  // 108
      thisTemplate.__helpers = $.extend({}, thisTemplate.__helpers, otherTemplate.__helpers);                       // 109
    }                                                                                                               // 110
                                                                                                                    // 111
    else {                                                                                                          // 112
      // backwards compatibility; pre-0.9.4 Meteor                                                                  // 113
      for (var h in otherTemplate) {                                                                                // 114
        if (otherTemplate.hasOwnProperty(h) && (h.slice(0, 2) !== "__") && h !== "viewName" && h !== "renderFunction") {
          thisTemplate[h] = otherTemplate[h];                                                                       // 116
        }                                                                                                           // 117
      }                                                                                                             // 118
    }                                                                                                               // 119
  };                                                                                                                // 120
                                                                                                                    // 121
  //Accept an array as otherTemplateName argument                                                                   // 122
  if (_.isArray(otherTemplateName)) {                                                                               // 123
    _.each(otherTemplateName, function (name) {                                                                     // 124
      inheritHelpers(name);                                                                                         // 125
    });                                                                                                             // 126
  } else { //otherTemplateName is a string                                                                          // 127
    inheritHelpers(otherTemplateName);                                                                              // 128
  }                                                                                                                 // 129
};                                                                                                                  // 130
                                                                                                                    // 131
Template.prototype.inheritsEventsFrom = function (otherTemplateName) {                                              // 132
  var self = this;                                                                                                  // 133
                                                                                                                    // 134
  var name = parseName(self.viewName);                                                                              // 135
                                                                                                                    // 136
  var inheritEvents = function (templateName) {                                                                     // 137
    // Check for existence of templateName template                                                                 // 138
    var otherTemplate = Template[templateName];                                                                     // 139
    if (!otherTemplate) {                                                                                           // 140
      console.warn("Can't inherit events from template " + templateName + " because it hasn't been defined yet.");  // 141
      return;                                                                                                       // 142
    }                                                                                                               // 143
    // Inherit events                                                                                               // 144
    _.each(otherTemplate.__eventMaps, function (event) {                                                            // 145
      Template[name].__eventMaps.push(event);                                                                       // 146
    });                                                                                                             // 147
  };                                                                                                                // 148
                                                                                                                    // 149
  //Accept an array as otherTemplateName argument                                                                   // 150
  if (_.isArray(otherTemplateName)) {                                                                               // 151
    _.each(otherTemplateName, function (name) {                                                                     // 152
      inheritEvents(name);                                                                                          // 153
    });                                                                                                             // 154
  } else { //otherTemplateName is a string                                                                          // 155
    inheritEvents(otherTemplateName);                                                                               // 156
  }                                                                                                                 // 157
};                                                                                                                  // 158
                                                                                                                    // 159
Template.prototype.inheritsHooksFrom = function (otherTemplateName) {                                               // 160
  var self = this;                                                                                                  // 161
  var name = parseName(self.viewName);                                                                              // 162
                                                                                                                    // 163
  var inheritHooks = function(templateName) {                                                                       // 164
    // Check for existence of templateName template                                                                 // 165
    var otherTemplate = Template[templateName];                                                                     // 166
    if (!otherTemplate) {                                                                                           // 167
      console.warn("Can't inherit hooks from template " + templateName + " because it hasn't been defined yet.");   // 168
      return;                                                                                                       // 169
    }                                                                                                               // 170
    // For this to work properly, need to ensure that we've run                                                     // 171
    // defineAllHooks for both templates already                                                                    // 172
    defineAllHooks(otherTemplate);                                                                                  // 173
    defineAllHooks(self);                                                                                           // 174
                                                                                                                    // 175
    // For each hookType check if there are existing templateHooks for templateName                                 // 176
    _.each(hookTypes, function (type) {                                                                             // 177
      var hooks = templateHooks[type][templateName];                                                                // 178
      // For each existing hook for templateName                                                                    // 179
      _.each(hooks, function (hook) {                                                                               // 180
        // Initialize the target template's templateHooks array                                                     // 181
        templateHooks[type][name] = templateHooks[type][name] || [];                                                // 182
        // Add hook                                                                                                 // 183
        templateHooks[type][name].push(hook);                                                                       // 184
      });                                                                                                           // 185
    });                                                                                                             // 186
  };                                                                                                                // 187
                                                                                                                    // 188
  //Accept an array as otherTemplateName argument                                                                   // 189
  if (_.isArray(otherTemplateName)) {                                                                               // 190
    _.each(otherTemplateName, function (name) {                                                                     // 191
      inheritHooks(name);                                                                                           // 192
    });                                                                                                             // 193
  } else { //otherTemplateName is a string                                                                          // 194
    inheritHooks(otherTemplateName);                                                                                // 195
  }                                                                                                                 // 196
};                                                                                                                  // 197
                                                                                                                    // 198
Template.prototype.copyAs = function (newTemplateName) {                                                            // 199
  var self = this, result = [];                                                                                     // 200
                                                                                                                    // 201
  var createNewTemplate = function (templateName) {                                                                 // 202
    var newTemplate =                                                                                               // 203
    Template[templateName] = new Template('Template.' + templateName, self.renderFunction);                         // 204
                                                                                                                    // 205
    var name = parseName(self.viewName);                                                                            // 206
    newTemplate.inheritsHelpersFrom(name);                                                                          // 207
    newTemplate.inheritsEventsFrom(name);                                                                           // 208
    newTemplate.inheritsHooksFrom(name);                                                                            // 209
                                                                                                                    // 210
    return newTemplate;                                                                                             // 211
  };                                                                                                                // 212
                                                                                                                    // 213
  //Check if newTemplateName is an array                                                                            // 214
  if (_.isArray(newTemplateName)) {                                                                                 // 215
    _.each(newTemplateName, function (name) {                                                                       // 216
      var template = createNewTemplate(name);                                                                       // 217
      //Push newly created template into array that we'll return                                                    // 218
      result.push(template);                                                                                        // 219
    });                                                                                                             // 220
    return result;                                                                                                  // 221
  } else { //newTemplateName is a string                                                                            // 222
    var template = createNewTemplate(newTemplateName);                                                              // 223
    //return newly created array                                                                                    // 224
    return template;                                                                                                // 225
  }                                                                                                                 // 226
};                                                                                                                  // 227
                                                                                                                    // 228
// Allow easy access to a template instance field when you do not know exactly                                      // 229
// on which instance (this, or parent, or parent's parent, ...) a field is defined.                                 // 230
// This allows easy restructuring of templates in HTML, moving things to included                                   // 231
// templates without having to change everywhere in the code instance levels.                                       // 232
// It also allows different structures of templates, when once template is included                                 // 233
// at one level, and some other time at another. Levels do not matter anymore, just                                 // 234
// that the field exists somewhere.                                                                                 // 235
Blaze.TemplateInstance.prototype.get = function (fieldName) {                                                       // 236
  var template = this;                                                                                              // 237
                                                                                                                    // 238
  while (template) {                                                                                                // 239
    if (fieldName in template) {                                                                                    // 240
      return template[fieldName];                                                                                   // 241
    }                                                                                                               // 242
    template = template.parent(1, true);                                                                            // 243
  }                                                                                                                 // 244
};                                                                                                                  // 245
                                                                                                                    // 246
// Access parent template instance. "height" is the number of levels beyond the                                     // 247
// current template instance to look. By default block helper template instances                                    // 248
// are skipped, but if "includeBlockHelpers" is set to true, they are not.                                          // 249
// See https://github.com/meteor/meteor/issues/3071                                                                 // 250
Blaze.TemplateInstance.prototype.parent = function(height, includeBlockHelpers) {                                   // 251
  // If height is null or undefined, we default to 1, the first parent.                                             // 252
  if (height == null) {                                                                                             // 253
    height = 1;                                                                                                     // 254
  }                                                                                                                 // 255
                                                                                                                    // 256
  var i = 0;                                                                                                        // 257
  var template = this;                                                                                              // 258
  while (i < height && template) {                                                                                  // 259
    var view = parentView(template.view, includeBlockHelpers);                                                      // 260
    // We skip contentBlock views which are injected by Meteor when using                                           // 261
    // block helpers (in addition to block helper view). This matches more                                          // 262
    // the visual structure of templates and not the internal implementation.                                       // 263
    while (view && (!view.template || view.name === '(contentBlock)')) {                                            // 264
      view = parentView(view, includeBlockHelpers);                                                                 // 265
    }                                                                                                               // 266
    if (!view) {                                                                                                    // 267
      return null;                                                                                                  // 268
    }                                                                                                               // 269
    // Body view has template field, but not templateInstance,                                                      // 270
    // which more or less signals that we reached the top.                                                          // 271
    template = typeof view.templateInstance === 'function' ? view.templateInstance() : null;                        // 272
    i++;                                                                                                            // 273
  }                                                                                                                 // 274
  return template;                                                                                                  // 275
};                                                                                                                  // 276
                                                                                                                    // 277
// Allow to specify a function to test parent data for at various                                                   // 278
// levels, instead of specifying a fixed number of levels to traverse.                                              // 279
var originalParentData = Blaze._parentData;                                                                         // 280
Blaze._parentData = function (height, _functionWrapped) {                                                           // 281
  // If height is not a function, simply call original implementation.                                              // 282
  if (typeof height !== 'function') {                                                                               // 283
    return originalParentData(height, _functionWrapped);                                                            // 284
  }                                                                                                                 // 285
                                                                                                                    // 286
  var theWith = Blaze.getView('with');                                                                              // 287
  var test = function () {                                                                                          // 288
    return height(theWith.dataVar.get());                                                                           // 289
  };                                                                                                                // 290
  while (theWith) {                                                                                                 // 291
    if (Tracker.nonreactive(test)) break;                                                                           // 292
    theWith = Blaze.getView(theWith, 'with');                                                                       // 293
  }                                                                                                                 // 294
                                                                                                                    // 295
  // _functionWrapped is internal and will not be                                                                   // 296
  // specified with non numeric height, so we ignore it.                                                            // 297
  if (!theWith) return null;                                                                                        // 298
  // This registers a Tracker dependency.                                                                           // 299
  return theWith.dataVar.get();                                                                                     // 300
};                                                                                                                  // 301
                                                                                                                    // 302
Template.parentData = Blaze._parentData;                                                                            // 303
                                                                                                                    // 304
/* PRIVATE */                                                                                                       // 305
                                                                                                                    // 306
function defineHook(template, type) {                                                                               // 307
  // see if there's an existing callback set directly on the template instance                                      // 308
  var orig = template[type];                                                                                        // 309
                                                                                                                    // 310
  // Basically scraping callbacks set directly on instance and saving                                               // 311
  // in templateHooks                                                                                               // 312
  if (typeof orig === 'function') {                                                                                 // 313
    var name = parseName(template.viewName);                                                                        // 314
    templateHooks[type][name] = templateHooks[type][name] || [];                                                    // 315
    templateHooks[type][name].push(orig);                                                                           // 316
  }                                                                                                                 // 317
                                                                                                                    // 318
  // set our own callback directly on the template instance                                                         // 319
  template[type] = function templateExtensionMasterHook() {                                                         // 320
    // call all defined global hooks                                                                                // 321
    runGlobalHooks(type, this, arguments);                                                                          // 322
    // call all defined hooks for this template instance                                                            // 323
    runTemplateHooks(type, this, arguments);                                                                        // 324
  };                                                                                                                // 325
                                                                                                                    // 326
  template._hasTemplateExtensionMasterHook = true;                                                                  // 327
}                                                                                                                   // 328
                                                                                                                    // 329
function defineAllHooks(template) {                                                                                 // 330
  // For each hookType, define the hooks for this template.                                                         // 331
  // Since we might call this multiple times from startup code                                                      // 332
  // and other functions, make sure we do it only once.                                                             // 333
  // Doing it twice would create an infinite loop of self-calling                                                   // 334
  // hooks.                                                                                                         // 335
  if (!template._hasTemplateExtensionMasterHook) {                                                                  // 336
    _.each(hookTypes, function (type) {                                                                             // 337
      defineHook(template, type);                                                                                   // 338
    });                                                                                                             // 339
  }                                                                                                                 // 340
}                                                                                                                   // 341
                                                                                                                    // 342
function parentView(view, includeBlockHelpers) {                                                                    // 343
  if (includeBlockHelpers) {                                                                                        // 344
    return view.originalParentView || view.parentView;                                                              // 345
  }                                                                                                                 // 346
  else {                                                                                                            // 347
    return view.parentView;                                                                                         // 348
  }                                                                                                                 // 349
}                                                                                                                   // 350
                                                                                                                    // 351
function parseName(name) {                                                                                          // 352
  if (!name) {                                                                                                      // 353
    return;                                                                                                         // 354
  }                                                                                                                 // 355
  // post 0.9.1 kludge to get template name from viewName                                                           // 356
  var prefix = 'Template.';                                                                                         // 357
  if (name.indexOf(prefix) === 0) {                                                                                 // 358
    return name.slice(prefix.length);                                                                               // 359
  }                                                                                                                 // 360
  return name;                                                                                                      // 361
}                                                                                                                   // 362
                                                                                                                    // 363
function runGlobalHooks(type, template, args) {                                                                     // 364
  var i, h = globalHooks[type], hl = h.length;                                                                      // 365
  for (i = 0; i < hl; i++) {                                                                                        // 366
    h[i].apply(template, args);                                                                                     // 367
  }                                                                                                                 // 368
}                                                                                                                   // 369
                                                                                                                    // 370
function runTemplateHooks(type, template, args) {                                                                   // 371
  var i, name = parseName(template.viewName) || parseName(template.view.name), h = templateHooks[type][name];       // 372
  var hl = h ? h.length : 0;                                                                                        // 373
  for (i = 0; i < hl; i++) {                                                                                        // 374
    h[i].apply(template, args);                                                                                     // 375
  }                                                                                                                 // 376
}                                                                                                                   // 377
                                                                                                                    // 378
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 388
}).call(this);                                                                                                         // 389
                                                                                                                       // 390
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['aldeed:template-extension'] = {};

})();
