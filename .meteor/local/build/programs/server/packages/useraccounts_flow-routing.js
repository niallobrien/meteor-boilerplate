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
var AccountsServer = Package['accounts-base'].AccountsServer;
var T9n = Package['softwarerero:accounts-t9n'].T9n;

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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['useraccounts:flow-routing'] = {};

})();

//# sourceMappingURL=useraccounts_flow-routing.js.map
