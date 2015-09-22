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
var check = Package.check.check;
var Match = Package.check.Match;
var BlazeLayout = Package['kadira:blaze-layout'].BlazeLayout;
var FlowRouter = Package['kadira:flow-router'].FlowRouter;
var _ = Package.underscore._;
var AccountsTemplates = Package['useraccounts:core'].AccountsTemplates;
var Accounts = Package['accounts-base'].Accounts;
var AccountsClient = Package['accounts-base'].AccountsClient;
var T9n = Package['softwarerero:accounts-t9n'].T9n;
var Template = Package.templating.Template;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/useraccounts_flow-routing/packages/useraccounts_flow-routing.js                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
(function () {                                                                                                        // 1
                                                                                                                      // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                                             //     // 4
// packages/useraccounts:flow-routing/lib/core.js                                                              //     // 5
//                                                                                                             //     // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                                               //     // 8
/* global                                                                                                      // 1   // 9
  AccountsTemplates: false,                                                                                    // 2   // 10
  BlazeLayout: false,                                                                                          // 3   // 11
  FlowRouter: false                                                                                            // 4   // 12
*/                                                                                                             // 5   // 13
'use strict';                                                                                                  // 6   // 14
                                                                                                               // 7   // 15
// ---------------------------------------------------------------------------------                           // 8   // 16
                                                                                                               // 9   // 17
// Patterns for methods" parameters                                                                            // 10  // 18
                                                                                                               // 11  // 19
// ---------------------------------------------------------------------------------                           // 12  // 20
                                                                                                               // 13  // 21
// Add new configuration options                                                                               // 14  // 22
_.extend(AccountsTemplates.CONFIG_PAT, {                                                                       // 15  // 23
  defaultTemplate: Match.Optional(String),                                                                     // 16  // 24
  defaultLayoutRegions: Match.Optional(Object),                                                                // 17  // 25
  defaultContentRegion: Match.Optional(String),                                                                // 18  // 26
  renderLayout: Match.Optional(Object),                                                                        // 19  // 27
  contentRange: Match.Optional(String),                                                                        // 20  // 28
});                                                                                                            // 21  // 29
                                                                                                               // 22  // 30
// Route configuration pattern to be checked with check                                                        // 23  // 31
var ROUTE_PAT = {                                                                                              // 24  // 32
  name: Match.Optional(String),                                                                                // 25  // 33
  path: Match.Optional(String),                                                                                // 26  // 34
  template: Match.Optional(String),                                                                            // 27  // 35
  layoutTemplate: Match.Optional(String),                                                                      // 28  // 36
  renderLayout: Match.Optional(Object),                                                                        // 29  // 37
  contentRange: Match.Optional(String),                                                                        // 30  // 38
  redirect: Match.Optional(Match.OneOf(String, Match.Where(_.isFunction))),                                    // 31  // 39
};                                                                                                             // 32  // 40
                                                                                                               // 33  // 41
/*                                                                                                             // 34  // 42
  Routes configuration can be done by calling AccountsTemplates.configureRoute with the route name and the     // 35  // 43
  following options in a separate object. E.g. AccountsTemplates.configureRoute("gingIn", option);             // 36  // 44
    name:           String (optional). A unique route"s name to be passed to iron-router                       // 37  // 45
    path:           String (optional). A unique route"s path to be passed to iron-router                       // 38  // 46
    template:       String (optional). The name of the template to be rendered                                 // 39  // 47
    layoutTemplate: String (optional). The name of the layout to be used                                       // 40  // 48
    redirect:       String (optional). The name of the route (or its path) where to redirect after form submit // 41  // 49
*/                                                                                                             // 42  // 50
                                                                                                               // 43  // 51
                                                                                                               // 44  // 52
// Allowed routes along with theirs default configuration values                                               // 45  // 53
AccountsTemplates.ROUTE_DEFAULT = {                                                                            // 46  // 54
  changePwd:      { name: "atChangePwd",      path: "/change-password"},                                       // 47  // 55
  enrollAccount:  { name: "atEnrollAccount",  path: "/enroll-account"},                                        // 48  // 56
  ensureSignedIn: { name: "atEnsureSignedIn", path: null},                                                     // 49  // 57
  forgotPwd:      { name: "atForgotPwd",      path: "/forgot-password"},                                       // 50  // 58
  resetPwd:       { name: "atResetPwd",       path: "/reset-password"},                                        // 51  // 59
  signIn:         { name: "atSignIn",         path: "/sign-in"},                                               // 52  // 60
  signUp:         { name: "atSignUp",         path: "/sign-up"},                                               // 53  // 61
  verifyEmail:    { name: "atVerifyEmail",    path: "/verify-email"},                                          // 54  // 62
  resendVerificationEmail: { name: "atResendVerificationEmail", path: "/send-again"}                           // 55  // 63
};                                                                                                             // 56  // 64
                                                                                                               // 57  // 65
                                                                                                               // 58  // 66
// Current configuration values                                                                                // 59  // 67
AccountsTemplates.options.defaultLayoutRegions = {};                                                           // 60  // 68
// Redirects                                                                                                   // 61  // 69
AccountsTemplates.options.homeRoutePath = "/";                                                                 // 62  // 70
AccountsTemplates.options.redirectTimeout = 2000; // 2 seconds                                                 // 63  // 71
                                                                                                               // 64  // 72
// Known routes used to filter out previous path for redirects...                                              // 65  // 73
AccountsTemplates.knownRoutes = [];                                                                            // 66  // 74
                                                                                                               // 67  // 75
// Configured routes                                                                                           // 68  // 76
AccountsTemplates.routes = {};                                                                                 // 69  // 77
                                                                                                               // 70  // 78
AccountsTemplates.configureRoute = function(route, options) {                                                  // 71  // 79
  check(route, String);                                                                                        // 72  // 80
  check(options, Match.OneOf(undefined, Match.ObjectIncluding(ROUTE_PAT)));                                    // 73  // 81
  options = _.clone(options);                                                                                  // 74  // 82
  // Route Configuration can be done only before initialization                                                // 75  // 83
  if (this._initialized) {                                                                                     // 76  // 84
    throw new Error("Route Configuration can be done only before AccountsTemplates.init!");                    // 77  // 85
  }                                                                                                            // 78  // 86
  // Only allowed routes can be configured                                                                     // 79  // 87
  if (!(route in this.ROUTE_DEFAULT)) {                                                                        // 80  // 88
    throw new Error("Unknown Route!");                                                                         // 81  // 89
  }                                                                                                            // 82  // 90
  // Allow route configuration only once                                                                       // 83  // 91
  if (route in this.routes) {                                                                                  // 84  // 92
    throw new Error("Route already configured!");                                                              // 85  // 93
  }                                                                                                            // 86  // 94
                                                                                                               // 87  // 95
  // Possibly adds a initial / to the provided path                                                            // 88  // 96
  if (options && options.path && options.path[0] !== "/") {                                                    // 89  // 97
    options.path = "/" + options.path;                                                                         // 90  // 98
  }                                                                                                            // 91  // 99
                                                                                                               // 92  // 100
  // Updates the current configuration                                                                         // 93  // 101
  options = _.defaults(options || {}, this.ROUTE_DEFAULT[route]);                                              // 94  // 102
                                                                                                               // 95  // 103
  // Store route options                                                                                       // 96  // 104
  this.routes[route] = options;                                                                                // 97  // 105
                                                                                                               // 98  // 106
  // Known routes are used to filter out previous path for redirects...                                        // 99  // 107
  AccountsTemplates.knownRoutes.push(options.name);                                                            // 100
                                                                                                               // 101
  if (Meteor.isServer) {                                                                                       // 102
    // Configures "reset password" email link                                                                  // 103
    if (route === "resetPwd") {                                                                                // 104
      var resetPwdPath = options.path.substr(1);                                                               // 105
      Accounts.urls.resetPassword = function(token) {                                                          // 106
        return Meteor.absoluteUrl(resetPwdPath + "/" + token);                                                 // 107
      };                                                                                                       // 108
    }                                                                                                          // 109
    // Configures "enroll account" email link                                                                  // 110
    if (route === "enrollAccount") {                                                                           // 111
      var enrollAccountPath = options.path.substr(1);                                                          // 112
      Accounts.urls.enrollAccount = function(token) {                                                          // 113
        return Meteor.absoluteUrl(enrollAccountPath + "/" + token);                                            // 114
      };                                                                                                       // 115
    }                                                                                                          // 116
    // Configures "verify email" email link                                                                    // 117
    if (route === "verifyEmail") {                                                                             // 118
      var verifyEmailPath = options.path.substr(1);                                                            // 119
      Accounts.urls.verifyEmail = function(token) {                                                            // 120
        return Meteor.absoluteUrl(verifyEmailPath + "/" + token);                                              // 121
      };                                                                                                       // 122
    }                                                                                                          // 123
  }                                                                                                            // 124
                                                                                                               // 125
  if (route === "ensureSignedIn") {                                                                            // 126
    return;                                                                                                    // 127
  }                                                                                                            // 128
  if (route === "changePwd" && !AccountsTemplates.options.enablePasswordChange) {                              // 129
    throw new Error("changePwd route configured but enablePasswordChange set to false!");                      // 130
  }                                                                                                            // 131
  if (route === "forgotPwd" && !AccountsTemplates.options.showForgotPasswordLink) {                            // 132
    throw new Error("forgotPwd route configured but showForgotPasswordLink set to false!");                    // 133
  }                                                                                                            // 134
  if (route === "signUp" && AccountsTemplates.options.forbidClientAccountCreation) {                           // 135
    throw new Error("signUp route configured but forbidClientAccountCreation set to true!");                   // 136
  }                                                                                                            // 137
                                                                                                               // 138
  // fullPageAtForm template unless user specified a different site-wide default                               // 139
  var defaultTemplate = AccountsTemplates.options.defaultTemplate || "fullPageAtForm";                         // 140
  // Determines the default layout to be used in case no specific one is                                       // 141
  // specified for single routes                                                                               // 142
  var defaultLayout = AccountsTemplates.options.defaultLayout;                                                 // 143
  var defaultLayoutRegions = AccountsTemplates.options.defaultLayoutRegions;                                   // 144
  var defaultContentRegion = AccountsTemplates.options.defaultContentRegion;                                   // 145
                                                                                                               // 146
  var name = options.name; // Default provided...                                                              // 147
  var path = options.path; // Default provided...                                                              // 148
  var template = options.template || defaultTemplate;                                                          // 149
  var layoutTemplate = options.layoutTemplate || defaultLayout;                                                // 150
  var contentRegion = options.contentRegion || defaultContentRegion;                                           // 151
  var layoutRegions = _.clone(options.layoutRegions || defaultLayoutRegions || {});                            // 152
  layoutRegions[contentRegion] = template;                                                                     // 153
                                                                                                               // 154
  // Possibly adds token parameter                                                                             // 155
  if (_.contains(["enrollAccount", "resetPwd", "verifyEmail"], route)) {                                       // 156
    path += "/:paramToken";                                                                                    // 157
    if (route === "verifyEmail") {                                                                             // 158
      FlowRouter.route(path, {                                                                                 // 159
        name: name,                                                                                            // 160
        triggersEnter: [                                                                                       // 161
          function() {                                                                                         // 162
            AccountsTemplates.setState(route);                                                                 // 163
            AccountsTemplates.setDisabled(true);                                                               // 164
          }                                                                                                    // 165
        ],                                                                                                     // 166
        action: function(params) {                                                                             // 167
          BlazeLayout.render(layoutTemplate, layoutRegions);                                                   // 168
                                                                                                               // 169
          var token = params.paramToken;                                                                       // 170
          Accounts.verifyEmail(token, function(error) {                                                        // 171
            AccountsTemplates.setDisabled(false);                                                              // 172
            AccountsTemplates.submitCallback(error, route, function() {                                        // 173
              AccountsTemplates.state.form.set("result", AccountsTemplates.texts.info.emailVerified);          // 174
            });                                                                                                // 175
          });                                                                                                  // 176
        }                                                                                                      // 177
      });                                                                                                      // 178
    } else {                                                                                                   // 179
      FlowRouter.route(path, {                                                                                 // 180
        name: name,                                                                                            // 181
        triggersEnter: [                                                                                       // 182
          function() {                                                                                         // 183
            AccountsTemplates.setState(route);                                                                 // 184
          }                                                                                                    // 185
        ],                                                                                                     // 186
        action: function(params) {                                                                             // 187
          BlazeLayout.render(layoutTemplate, layoutRegions);                                                   // 188
        }                                                                                                      // 189
      });                                                                                                      // 190
    }                                                                                                          // 191
  } else {                                                                                                     // 192
    FlowRouter.route(path, {                                                                                   // 193
      name: name,                                                                                              // 194
      triggersEnter: [                                                                                         // 195
        function() {                                                                                           // 196
          var redirect = false;                                                                                // 197
          if (route === 'changePwd') {                                                                         // 198
            if (!Meteor.loggingIn() && !Meteor.userId()) {                                                     // 199
              redirect = true;                                                                                 // 200
            }                                                                                                  // 201
          } else if (Meteor.userId()) {                                                                        // 202
            redirect = true;                                                                                   // 203
          }                                                                                                    // 204
          if (redirect) {                                                                                      // 205
            AccountsTemplates.postSubmitRedirect(route);                                                       // 206
          } else {                                                                                             // 207
            AccountsTemplates.setState(route);                                                                 // 208
          }                                                                                                    // 209
        }                                                                                                      // 210
      ],                                                                                                       // 211
      action: function() {                                                                                     // 212
        BlazeLayout.render(layoutTemplate, layoutRegions);                                                     // 213
      }                                                                                                        // 214
    });                                                                                                        // 215
  }                                                                                                            // 216
};                                                                                                             // 217
                                                                                                               // 218
                                                                                                               // 219
AccountsTemplates.getRouteName = function(route) {                                                             // 220
  if (route in this.routes) {                                                                                  // 221
    return this.routes[route].name;                                                                            // 222
  }                                                                                                            // 223
  return null;                                                                                                 // 224
};                                                                                                             // 225
                                                                                                               // 226
AccountsTemplates.getRoutePath = function(route) {                                                             // 227
  if (route in this.routes) {                                                                                  // 228
    return this.routes[route].path;                                                                            // 229
  }                                                                                                            // 230
  return "#";                                                                                                  // 231
};                                                                                                             // 232
                                                                                                               // 233
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 242
                                                                                                                      // 243
}).call(this);                                                                                                        // 244
                                                                                                                      // 245
                                                                                                                      // 246
                                                                                                                      // 247
                                                                                                                      // 248
                                                                                                                      // 249
                                                                                                                      // 250
(function () {                                                                                                        // 251
                                                                                                                      // 252
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 253
//                                                                                                             //     // 254
// packages/useraccounts:flow-routing/lib/client/client.js                                                     //     // 255
//                                                                                                             //     // 256
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 257
                                                                                                               //     // 258
/* global                                                                                                      // 1   // 259
  AccountsTemplates: false,                                                                                    // 2   // 260
  BlazeLayout: false,                                                                                          // 3   // 261
  grecaptcha: false,                                                                                           // 4   // 262
  FlowRouter: false,                                                                                           // 5   // 263
  $: false                                                                                                     // 6   // 264
*/                                                                                                             // 7   // 265
'use strict';                                                                                                  // 8   // 266
                                                                                                               // 9   // 267
                                                                                                               // 10  // 268
// Previous path used for redirect after form submit                                                           // 11  // 269
AccountsTemplates._prevPath = null;                                                                            // 12  // 270
                                                                                                               // 13  // 271
// Possibly keeps reference to the handle for the timed out redirect                                           // 14  // 272
// set on some routes                                                                                          // 15  // 273
AccountsTemplates.timedOutRedirect = null;                                                                     // 16  // 274
                                                                                                               // 17  // 275
                                                                                                               // 18  // 276
AccountsTemplates.clearState = function() {                                                                    // 19  // 277
  _.each(this._fields, function(field) {                                                                       // 20  // 278
    field.clearStatus();                                                                                       // 21  // 279
  });                                                                                                          // 22  // 280
  var form = this.state.form;                                                                                  // 23  // 281
  form.set('error', null);                                                                                     // 24  // 282
  form.set('result', null);                                                                                    // 25  // 283
  form.set('message', null);                                                                                   // 26  // 284
                                                                                                               // 27  // 285
  AccountsTemplates.setDisabled(false);                                                                        // 28  // 286
                                                                                                               // 29  // 287
  // Possibly clears timed out redirects                                                                       // 30  // 288
  if (AccountsTemplates.timedOutRedirect !== null) {                                                           // 31  // 289
    Meteor.clearTimeout(AccountsTemplates.timedOutRedirect);                                                   // 32  // 290
    AccountsTemplates.timedOutRedirect = null;                                                                 // 33  // 291
  }                                                                                                            // 34  // 292
};                                                                                                             // 35  // 293
                                                                                                               // 36  // 294
AccountsTemplates.getparamToken = function() {                                                                 // 37  // 295
  return FlowRouter.getParam('paramToken');                                                                    // 38  // 296
};                                                                                                             // 39  // 297
                                                                                                               // 40  // 298
// Getter for previous route's path                                                                            // 41  // 299
AccountsTemplates.getPrevPath = function() {                                                                   // 42  // 300
  return this._prevPath;                                                                                       // 43  // 301
};                                                                                                             // 44  // 302
                                                                                                               // 45  // 303
// Setter for previous route's path                                                                            // 46  // 304
AccountsTemplates.setPrevPath = function(newPath) {                                                            // 47  // 305
  check(newPath, String);                                                                                      // 48  // 306
  this._prevPath = newPath;                                                                                    // 49  // 307
};                                                                                                             // 50  // 308
                                                                                                               // 51  // 309
AccountsTemplates.ensureSignedIn = function(context, redirect) {                                               // 52  // 310
  if (!Meteor.userId()) {                                                                                      // 53  // 311
    // if we're not already on an AT route                                                                     // 54  // 312
    if (!_.contains(AccountsTemplates.knownRoutes, context.route.name)) {                                      // 55  // 313
                                                                                                               // 56  // 314
      AccountsTemplates.setState(AccountsTemplates.options.defaultState, function() {                          // 57  // 315
        var err = AccountsTemplates.texts.errors.mustBeLoggedIn;                                               // 58  // 316
        AccountsTemplates.state.form.set("error", [err]);                                                      // 59  // 317
      });                                                                                                      // 60  // 318
                                                                                                               // 61  // 319
      // redirect settings                                                                                     // 62  // 320
      AccountsTemplates.avoidDefaultRedirect = true;                                                           // 63  // 321
      AccountsTemplates.avoidClearError = true;                                                                // 64  // 322
      AccountsTemplates.redirectToPrevPath = true;                                                             // 65  // 323
                                                                                                               // 66  // 324
      // redirect to defined sign-in route and then redirect back                                              // 67  // 325
      // to original route after successful sign in                                                            // 68  // 326
      var signInRouteName = AccountsTemplates.getRouteName('signIn');                                          // 69  // 327
      if (signInRouteName) {                                                                                   // 70  // 328
        redirect(signInRouteName);                                                                             // 71  // 329
      }                                                                                                        // 72  // 330
      else {                                                                                                   // 73  // 331
        throw Error('[ensureSignedIn] no signIn route configured!');                                           // 74  // 332
      }                                                                                                        // 75  // 333
    }                                                                                                          // 76  // 334
  }                                                                                                            // 77  // 335
};                                                                                                             // 78  // 336
                                                                                                               // 79  // 337
// Stores previous path on path change...                                                                      // 80  // 338
FlowRouter.triggers.exit([                                                                                     // 81  // 339
  function(context) {                                                                                          // 82  // 340
    var routeName = context.route.name;                                                                        // 83  // 341
    var knownRoute = _.contains(AccountsTemplates.knownRoutes, routeName);                                     // 84  // 342
    if (!knownRoute) {                                                                                         // 85  // 343
      AccountsTemplates.setPrevPath(context.path);                                                             // 86  // 344
    }                                                                                                          // 87  // 345
  }                                                                                                            // 88  // 346
]);                                                                                                            // 89  // 347
                                                                                                               // 90  // 348
AccountsTemplates.linkClick = function(route) {                                                                // 91  // 349
  if (AccountsTemplates.disabled()) {                                                                          // 92  // 350
    return;                                                                                                    // 93  // 351
  }                                                                                                            // 94  // 352
  var path = AccountsTemplates.getRoutePath(route);                                                            // 95  // 353
  if (path === '#' || path === FlowRouter.current().path) {                                                    // 96  // 354
    AccountsTemplates.setState(route);                                                                         // 97  // 355
  } else {                                                                                                     // 98  // 356
    Meteor.defer(function() {                                                                                  // 99  // 357
      FlowRouter.go(path);                                                                                     // 100
    });                                                                                                        // 101
  }                                                                                                            // 102
                                                                                                               // 103
  if (AccountsTemplates.options.focusFirstInput) {                                                             // 104
    var firstVisibleInput = _.find(this.getFields(), function(f) {                                             // 105
      return _.contains(f.visible, route);                                                                     // 106
    });                                                                                                        // 107
    if (firstVisibleInput) {                                                                                   // 108
      $('input#at-field-' + firstVisibleInput._id).focus();                                                    // 109
    }                                                                                                          // 110
  }                                                                                                            // 111
};                                                                                                             // 112
                                                                                                               // 113
AccountsTemplates.logout = function() {                                                                        // 114
  var onLogoutHook = AccountsTemplates.options.onLogoutHook;                                                   // 115
  var homeRoutePath = AccountsTemplates.options.homeRoutePath;                                                 // 116
  Meteor.logout(function() {                                                                                   // 117
    if (onLogoutHook) {                                                                                        // 118
      onLogoutHook();                                                                                          // 119
    } else if (homeRoutePath) {                                                                                // 120
      FlowRouter.redirect(homeRoutePath);                                                                      // 121
    }                                                                                                          // 122
  });                                                                                                          // 123
};                                                                                                             // 124
                                                                                                               // 125
AccountsTemplates.postSubmitRedirect = function(route) {                                                       // 126
  if (AccountsTemplates.avoidDefaultRedirect) {                                                                // 127
    AccountsTemplates.avoidDefaultRedirect = false;                                                            // 128
    if (AccountsTemplates.redirectToPrevPath) {                                                                // 129
      FlowRouter.redirect(AccountsTemplates.getPrevPath());                                                    // 130
    }                                                                                                          // 131
  } else {                                                                                                     // 132
    var nextPath = AccountsTemplates.routes[route] && AccountsTemplates.routes[route].redirect;                // 133
    if (nextPath) {                                                                                            // 134
      if (_.isFunction(nextPath)) {                                                                            // 135
        nextPath();                                                                                            // 136
      } else {                                                                                                 // 137
        FlowRouter.go(nextPath);                                                                               // 138
      }                                                                                                        // 139
    } else {                                                                                                   // 140
      var previousPath = AccountsTemplates.getPrevPath();                                                      // 141
      if (previousPath && FlowRouter.current().path !== previousPath) {                                        // 142
        FlowRouter.go(previousPath);                                                                           // 143
      } else {                                                                                                 // 144
        var homeRoutePath = AccountsTemplates.options.homeRoutePath;                                           // 145
        if (homeRoutePath) {                                                                                   // 146
          FlowRouter.go(homeRoutePath);                                                                        // 147
        }                                                                                                      // 148
      }                                                                                                        // 149
    }                                                                                                          // 150
  }                                                                                                            // 151
};                                                                                                             // 152
                                                                                                               // 153
AccountsTemplates.submitCallback = function(error, state, onSuccess) {                                         // 154
                                                                                                               // 155
  var onSubmitHook = AccountsTemplates.options.onSubmitHook;                                                   // 156
  if (onSubmitHook) {                                                                                          // 157
    onSubmitHook(error, state);                                                                                // 158
  }                                                                                                            // 159
                                                                                                               // 160
  if (error) {                                                                                                 // 161
    if (_.isObject(error.details)) {                                                                           // 162
      // If error.details is an object, we may try to set fields errors from it                                // 163
      _.each(error.details, function(error, fieldId) {                                                         // 164
        AccountsTemplates.getField(fieldId).setError(error);                                                   // 165
      });                                                                                                      // 166
    } else {                                                                                                   // 167
      var err = 'error.accounts.Unknown error';                                                                // 168
      if (error.reason) {                                                                                      // 169
        err = error.reason;                                                                                    // 170
      }                                                                                                        // 171
      if (err.substring(0, 15) !== 'error.accounts.') {                                                        // 172
        err = 'error.accounts.' + err;                                                                         // 173
      }                                                                                                        // 174
      AccountsTemplates.state.form.set('error', [err]);                                                        // 175
    }                                                                                                          // 176
    AccountsTemplates.setDisabled(false);                                                                      // 177
    // Possibly resets reCaptcha form                                                                          // 178
    if (state === 'signUp' && AccountsTemplates.options.showReCaptcha) {                                       // 179
      grecaptcha.reset();                                                                                      // 180
    }                                                                                                          // 181
  } else {                                                                                                     // 182
    if (onSuccess) {                                                                                           // 183
      onSuccess();                                                                                             // 184
    }                                                                                                          // 185
                                                                                                               // 186
    if (_.contains(['enrollAccount', 'forgotPwd', 'resetPwd', 'verifyEmail'], state)) {                        // 187
      var redirectTimeout = AccountsTemplates.options.redirectTimeout;                                         // 188
      if (redirectTimeout > 0) {                                                                               // 189
        AccountsTemplates.timedOutRedirect = Meteor.setTimeout(function() {                                    // 190
          AccountsTemplates.timedOutRedirect = null;                                                           // 191
          AccountsTemplates.setDisabled(false);                                                                // 192
          AccountsTemplates.postSubmitRedirect(state);                                                         // 193
        }, redirectTimeout);                                                                                   // 194
      }                                                                                                        // 195
    } else if (state) {                                                                                        // 196
      AccountsTemplates.setDisabled(false);                                                                    // 197
      AccountsTemplates.postSubmitRedirect(state);                                                             // 198
    }                                                                                                          // 199
  }                                                                                                            // 200
};                                                                                                             // 201
                                                                                                               // 202
// Initialization                                                                                              // 203
if (FlowRouter && FlowRouter.initialize) {                                                                     // 204
  // In order for ensureSignIn triggers to work,                                                               // 205
  // AccountsTemplates must be initialized before FlowRouter                                                   // 206
  // (this is now true since useraccounts:core is being executed first...)                                     // 207
  var oldInitialize = FlowRouter.initialize;                                                                   // 208
  FlowRouter.initialize = function() {                                                                         // 209
    AccountsTemplates._init();                                                                                 // 210
    oldInitialize.apply(this, arguments);                                                                      // 211
  };                                                                                                           // 212
}                                                                                                              // 213
                                                                                                               // 214
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 473
                                                                                                                      // 474
}).call(this);                                                                                                        // 475
                                                                                                                      // 476
                                                                                                                      // 477
                                                                                                                      // 478
                                                                                                                      // 479
                                                                                                                      // 480
                                                                                                                      // 481
(function () {                                                                                                        // 482
                                                                                                                      // 483
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 484
//                                                                                                             //     // 485
// packages/useraccounts:flow-routing/lib/client/templates_helpers/at_input.js                                 //     // 486
//                                                                                                             //     // 487
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 488
                                                                                                               //     // 489
/* global                                                                                                      // 1   // 490
  AccountsTemplates: false,                                                                                    // 2   // 491
  FlowRouter: false                                                                                            // 3   // 492
*/                                                                                                             // 4   // 493
'use strict';                                                                                                  // 5   // 494
                                                                                                               // 6   // 495
AccountsTemplates.atInputRendered.push(function(){                                                             // 7   // 496
  var fieldId = this.data._id;                                                                                 // 8   // 497
  var queryKey = this.data.options && this.data.options.queryKey || fieldId;                                   // 9   // 498
  var inputQueryVal = FlowRouter.getQueryParam(queryKey);                                                      // 10  // 499
  if (inputQueryVal) {                                                                                         // 11  // 500
    this.$("input#at-field-" + fieldId).val(inputQueryVal);                                                    // 12  // 501
  }                                                                                                            // 13  // 502
});                                                                                                            // 14  // 503
                                                                                                               // 15  // 504
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 505
                                                                                                                      // 506
}).call(this);                                                                                                        // 507
                                                                                                                      // 508
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['useraccounts:flow-routing'] = {};

})();
