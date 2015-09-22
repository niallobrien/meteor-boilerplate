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
var Accounts = Package['accounts-base'].Accounts;
var AccountsClient = Package['accounts-base'].AccountsClient;
var check = Package.check.check;
var Match = Package.check.Match;
var _ = Package.underscore._;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var ReactiveDict = Package['reactive-dict'].ReactiveDict;
var Template = Package.templating.Template;
var HTML = Package.htmljs.HTML;
var Spacebars = Package.spacebars.Spacebars;

/* Package-scope variables */
var capitalize, signedInAs, Field, STATE_PAT, ERRORS_PAT, INFO_PAT, INPUT_ICONS_PAT, ObjWithStringValues, TEXTS_PAT, CONFIG_PAT, FIELD_SUB_PAT, FIELD_PAT, AT, markIfMissing, options, AccountsTemplates;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/useraccounts_core/packages/useraccounts_core.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
                                                                                                                       // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:core/lib/utils.js                                                                          //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
capitalize = function(str) {                                                                                        // 1
  return str.charAt(0).toUpperCase() + str.slice(1);                                                                // 2
};                                                                                                                  // 3
                                                                                                                    // 4
signedInAs =  function() {                                                                                          // 5
  var user = Meteor.user();                                                                                         // 6
                                                                                                                    // 7
  if (user) {                                                                                                       // 8
    if (user.username) {                                                                                            // 9
      return user.username;                                                                                         // 10
    } else if (user.profile && user.profile.name) {                                                                 // 11
      return user.profile.name;                                                                                     // 12
    } else if (user.emails && user.emails[0]) {                                                                     // 13
      return user.emails[0].address;                                                                                // 14
    } else {                                                                                                        // 15
      return "Signed In";                                                                                           // 16
    }                                                                                                               // 17
  }                                                                                                                 // 18
};                                                                                                                  // 19
                                                                                                                    // 20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 30
}).call(this);                                                                                                         // 31
                                                                                                                       // 32
                                                                                                                       // 33
                                                                                                                       // 34
                                                                                                                       // 35
                                                                                                                       // 36
                                                                                                                       // 37
(function () {                                                                                                         // 38
                                                                                                                       // 39
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:core/lib/field.js                                                                          //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
// ---------------------------------------------------------------------------------                                // 1
// Field object                                                                                                     // 2
// ---------------------------------------------------------------------------------                                // 3
                                                                                                                    // 4
Field = function(field) {                                                                                           // 5
  check(field, FIELD_PAT);                                                                                          // 6
  _.defaults(this, field);                                                                                          // 7
                                                                                                                    // 8
  this.validating = new ReactiveVar(false);                                                                         // 9
  this.status = new ReactiveVar(null);                                                                              // 10
};                                                                                                                  // 11
                                                                                                                    // 12
if (Meteor.isClient) {                                                                                              // 13
  Field.prototype.clearStatus = function() {                                                                        // 14
    return this.status.set(null);                                                                                   // 15
  };                                                                                                                // 16
}                                                                                                                   // 17
                                                                                                                    // 18
if (Meteor.isServer) {                                                                                              // 19
  Field.prototype.clearStatus = function() {                                                                        // 20
    // Nothing to do server-side                                                                                    // 21
    return;                                                                                                         // 22
  };                                                                                                                // 23
}                                                                                                                   // 24
                                                                                                                    // 25
Field.prototype.fixValue = function(value) {                                                                        // 26
  if (this.type === "checkbox") {                                                                                   // 27
    return !!value;                                                                                                 // 28
  }                                                                                                                 // 29
                                                                                                                    // 30
  if (this.type === "select") {                                                                                     // 31
    // TODO: something working...                                                                                   // 32
    return value;                                                                                                   // 33
  }                                                                                                                 // 34
                                                                                                                    // 35
  if (this.type === "radio") {                                                                                      // 36
    // TODO: something working...                                                                                   // 37
    return value;                                                                                                   // 38
  }                                                                                                                 // 39
                                                                                                                    // 40
  // Possibly applies required transformations to the input value                                                   // 41
  if (this.trim) {                                                                                                  // 42
    value = value.trim();                                                                                           // 43
  }                                                                                                                 // 44
                                                                                                                    // 45
  if (this.lowercase) {                                                                                             // 46
    value = value.toLowerCase();                                                                                    // 47
  }                                                                                                                 // 48
                                                                                                                    // 49
  if (this.uppercase) {                                                                                             // 50
    value = value.toUpperCase();                                                                                    // 51
  }                                                                                                                 // 52
                                                                                                                    // 53
  if (!!this.transform) {                                                                                           // 54
    value = this.transform(value);                                                                                  // 55
  }                                                                                                                 // 56
                                                                                                                    // 57
  return value;                                                                                                     // 58
};                                                                                                                  // 59
                                                                                                                    // 60
if (Meteor.isClient) {                                                                                              // 61
  Field.prototype.getDisplayName = function(state) {                                                                // 62
    var displayName = this.displayName;                                                                             // 63
                                                                                                                    // 64
    if (_.isFunction(displayName)) {                                                                                // 65
      displayName = displayName();                                                                                  // 66
    } else if (_.isObject(displayName)) {                                                                           // 67
      displayName = displayName[state] || displayName["default"];                                                   // 68
    }                                                                                                               // 69
                                                                                                                    // 70
    if (!displayName) {                                                                                             // 71
      displayName = capitalize(this._id);                                                                           // 72
    }                                                                                                               // 73
                                                                                                                    // 74
    return displayName;                                                                                             // 75
  };                                                                                                                // 76
}                                                                                                                   // 77
                                                                                                                    // 78
if (Meteor.isClient) {                                                                                              // 79
  Field.prototype.getPlaceholder = function(state) {                                                                // 80
    var placeholder = this.placeholder;                                                                             // 81
                                                                                                                    // 82
    if (_.isObject(placeholder)) {                                                                                  // 83
      placeholder = placeholder[state] || placeholder["default"];                                                   // 84
    }                                                                                                               // 85
                                                                                                                    // 86
    if (!placeholder) {                                                                                             // 87
      placeholder = capitalize(this._id);                                                                           // 88
    }                                                                                                               // 89
                                                                                                                    // 90
    return placeholder;                                                                                             // 91
  };                                                                                                                // 92
}                                                                                                                   // 93
                                                                                                                    // 94
Field.prototype.getStatus = function() {                                                                            // 95
  return this.status.get();                                                                                         // 96
};                                                                                                                  // 97
                                                                                                                    // 98
if (Meteor.isClient) {                                                                                              // 99
  Field.prototype.getValue = function(tempalteInstance) {                                                           // 100
    if (this.type === "checkbox") {                                                                                 // 101
      return !!(tempalteInstance.$("#at-field-" + this._id + ":checked").val());                                    // 102
    }                                                                                                               // 103
                                                                                                                    // 104
    if (this.type === "radio") {                                                                                    // 105
      return tempalteInstance.$("[name=at-field-"+ this._id + "]:checked").val();                                   // 106
    }                                                                                                               // 107
                                                                                                                    // 108
    return tempalteInstance.$("#at-field-" + this._id).val();                                                       // 109
  };                                                                                                                // 110
}                                                                                                                   // 111
                                                                                                                    // 112
if (Meteor.isClient) {                                                                                              // 113
  Field.prototype.hasError = function() {                                                                           // 114
    return this.negativeValidation && this.status.get();                                                            // 115
  };                                                                                                                // 116
}                                                                                                                   // 117
                                                                                                                    // 118
if (Meteor.isClient) {                                                                                              // 119
  Field.prototype.hasIcon = function() {                                                                            // 120
    if (this.showValidating && this.isValidating()) {                                                               // 121
      return true;                                                                                                  // 122
    }                                                                                                               // 123
                                                                                                                    // 124
    if (this.negativeFeedback && this.hasError()) {                                                                 // 125
      return true;                                                                                                  // 126
    }                                                                                                               // 127
                                                                                                                    // 128
    if (this.positiveFeedback && this.hasSuccess()) {                                                               // 129
      return true;                                                                                                  // 130
    }                                                                                                               // 131
  };                                                                                                                // 132
}                                                                                                                   // 133
                                                                                                                    // 134
if (Meteor.isClient) {                                                                                              // 135
  Field.prototype.hasSuccess = function() {                                                                         // 136
    return this.positiveValidation && this.status.get() === false;                                                  // 137
  };                                                                                                                // 138
}                                                                                                                   // 139
                                                                                                                    // 140
if (Meteor.isClient)                                                                                                // 141
  Field.prototype.iconClass = function() {                                                                          // 142
    if (this.isValidating()) {                                                                                      // 143
      return AccountsTemplates.texts.inputIcons["isValidating"];                                                    // 144
    }                                                                                                               // 145
                                                                                                                    // 146
    if (this.hasError()) {                                                                                          // 147
      return AccountsTemplates.texts.inputIcons["hasError"];                                                        // 148
    }                                                                                                               // 149
                                                                                                                    // 150
    if (this.hasSuccess()) {                                                                                        // 151
      return AccountsTemplates.texts.inputIcons["hasSuccess"];                                                      // 152
    }                                                                                                               // 153
  };                                                                                                                // 154
                                                                                                                    // 155
if (Meteor.isClient) {                                                                                              // 156
  Field.prototype.isValidating = function() {                                                                       // 157
    return this.validating.get();                                                                                   // 158
  };                                                                                                                // 159
}                                                                                                                   // 160
                                                                                                                    // 161
if (Meteor.isClient) {                                                                                              // 162
  Field.prototype.setError = function(err) {                                                                        // 163
    check(err, Match.OneOf(String, undefined, Boolean));                                                            // 164
                                                                                                                    // 165
    if (err === false) {                                                                                            // 166
      return this.status.set(false);                                                                                // 167
    }                                                                                                               // 168
                                                                                                                    // 169
    return this.status.set(err || true);                                                                            // 170
  };                                                                                                                // 171
}                                                                                                                   // 172
                                                                                                                    // 173
if (Meteor.isServer) {                                                                                              // 174
  Field.prototype.setError = function(err) {                                                                        // 175
    // Nothing to do server-side                                                                                    // 176
    return;                                                                                                         // 177
  };                                                                                                                // 178
}                                                                                                                   // 179
                                                                                                                    // 180
if (Meteor.isClient) {                                                                                              // 181
  Field.prototype.setSuccess = function() {                                                                         // 182
    return this.status.set(false);                                                                                  // 183
  };                                                                                                                // 184
}                                                                                                                   // 185
                                                                                                                    // 186
if (Meteor.isServer) {                                                                                              // 187
  Field.prototype.setSuccess = function() {                                                                         // 188
    // Nothing to do server-side                                                                                    // 189
    return;                                                                                                         // 190
  };                                                                                                                // 191
}                                                                                                                   // 192
                                                                                                                    // 193
if (Meteor.isClient) {                                                                                              // 194
  Field.prototype.setValidating = function(state) {                                                                 // 195
    check(state, Boolean);                                                                                          // 196
    return this.validating.set(state);                                                                              // 197
  };                                                                                                                // 198
}                                                                                                                   // 199
                                                                                                                    // 200
if (Meteor.isServer) {                                                                                              // 201
  Field.prototype.setValidating = function(state) {                                                                 // 202
    // Nothing to do server-side                                                                                    // 203
    return;                                                                                                         // 204
  };                                                                                                                // 205
}                                                                                                                   // 206
                                                                                                                    // 207
if (Meteor.isClient) {                                                                                              // 208
  Field.prototype.setValue = function(tempalteInstance, value) {                                                    // 209
    if (this.type === "checkbox") {                                                                                 // 210
      tempalteInstance.$("#at-field-" + this._id).prop('checked', true);                                            // 211
      return;                                                                                                       // 212
    }                                                                                                               // 213
                                                                                                                    // 214
    if (this.type === "radio") {                                                                                    // 215
      tempalteInstance.$("[name=at-field-"+ this._id + "]").prop('checked', true);                                  // 216
      return;                                                                                                       // 217
    }                                                                                                               // 218
                                                                                                                    // 219
    tempalteInstance.$("#at-field-" + this._id).val(value);                                                         // 220
  };                                                                                                                // 221
}                                                                                                                   // 222
                                                                                                                    // 223
Field.prototype.validate = function(value, strict) {                                                                // 224
  check(value, Match.OneOf(undefined, String, Boolean));                                                            // 225
  this.setValidating(true);                                                                                         // 226
  this.clearStatus();                                                                                               // 227
                                                                                                                    // 228
  if (_.isUndefined(value) || value === '') {                                                                       // 229
    if (!!strict) {                                                                                                 // 230
      if (this.required) {                                                                                          // 231
        this.setError(AccountsTemplates.texts.requiredField);                                                       // 232
        this.setValidating(false);                                                                                  // 233
                                                                                                                    // 234
        return AccountsTemplates.texts.requiredField;                                                               // 235
      } else {                                                                                                      // 236
        this.setSuccess();                                                                                          // 237
        this.setValidating(false);                                                                                  // 238
                                                                                                                    // 239
        return false;                                                                                               // 240
      }                                                                                                             // 241
    } else {                                                                                                        // 242
      this.clearStatus();                                                                                           // 243
      this.setValidating(false);                                                                                    // 244
                                                                                                                    // 245
      return null;                                                                                                  // 246
    }                                                                                                               // 247
  }                                                                                                                 // 248
                                                                                                                    // 249
  var valueLength = value.length;                                                                                   // 250
  var minLength = this.minLength;                                                                                   // 251
  if (minLength && valueLength < minLength) {                                                                       // 252
    this.setError(AccountsTemplates.texts.minRequiredLength + ": " + minLength);                                    // 253
    this.setValidating(false);                                                                                      // 254
                                                                                                                    // 255
    return AccountsTemplates.texts.minRequiredLength + ": " + minLength;                                            // 256
  }                                                                                                                 // 257
                                                                                                                    // 258
  var maxLength = this.maxLength;                                                                                   // 259
  if (maxLength && valueLength > maxLength) {                                                                       // 260
    this.setError(AccountsTemplates.texts.maxAllowedLength + ": " + maxLength);                                     // 261
    this.setValidating(false);                                                                                      // 262
                                                                                                                    // 263
    return AccountsTemplates.texts.maxAllowedLength + ": " + maxLength;                                             // 264
  }                                                                                                                 // 265
                                                                                                                    // 266
  if (this.re && valueLength && !value.match(this.re)) {                                                            // 267
    this.setError(this.errStr);                                                                                     // 268
    this.setValidating(false);                                                                                      // 269
                                                                                                                    // 270
    return this.errStr;                                                                                             // 271
  }                                                                                                                 // 272
                                                                                                                    // 273
  if (this.func) {                                                                                                  // 274
    var result = this.func(value);                                                                                  // 275
    var err = result === true ? this.errStr || true : result;                                                       // 276
                                                                                                                    // 277
    if (_.isUndefined(result)) {                                                                                    // 278
      return err;                                                                                                   // 279
    }                                                                                                               // 280
                                                                                                                    // 281
    this.status.set(err);                                                                                           // 282
    this.setValidating(false);                                                                                      // 283
                                                                                                                    // 284
    return err;                                                                                                     // 285
  }                                                                                                                 // 286
                                                                                                                    // 287
  this.setSuccess();                                                                                                // 288
  this.setValidating(false);                                                                                        // 289
                                                                                                                    // 290
  return false;                                                                                                     // 291
};                                                                                                                  // 292
                                                                                                                    // 293
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 340
}).call(this);                                                                                                         // 341
                                                                                                                       // 342
                                                                                                                       // 343
                                                                                                                       // 344
                                                                                                                       // 345
                                                                                                                       // 346
                                                                                                                       // 347
(function () {                                                                                                         // 348
                                                                                                                       // 349
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:core/lib/core.js                                                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
// ---------------------------------------------------------------------------------                                // 1
// Patterns for methods" parameters                                                                                 // 2
// ---------------------------------------------------------------------------------                                // 3
                                                                                                                    // 4
STATE_PAT = {                                                                                                       // 5
  changePwd: Match.Optional(String),                                                                                // 6
  enrollAccount: Match.Optional(String),                                                                            // 7
  forgotPwd: Match.Optional(String),                                                                                // 8
  resetPwd: Match.Optional(String),                                                                                 // 9
  signIn: Match.Optional(String),                                                                                   // 10
  signUp: Match.Optional(String),                                                                                   // 11
  verifyEmail: Match.Optional(String),                                                                              // 12
  resendVerificationEmail: Match.Optional(String),                                                                  // 13
};                                                                                                                  // 14
                                                                                                                    // 15
ERRORS_PAT = {                                                                                                      // 16
  accountsCreationDisabled: Match.Optional(String),                                                                 // 17
  cannotRemoveService: Match.Optional(String),                                                                      // 18
  captchaVerification: Match.Optional(String),                                                                      // 19
  loginForbidden: Match.Optional(String),                                                                           // 20
  mustBeLoggedIn: Match.Optional(String),                                                                           // 21
  pwdMismatch: Match.Optional(String),                                                                              // 22
  validationErrors: Match.Optional(String),                                                                         // 23
  verifyEmailFirst: Match.Optional(String),                                                                         // 24
};                                                                                                                  // 25
                                                                                                                    // 26
INFO_PAT = {                                                                                                        // 27
  emailSent: Match.Optional(String),                                                                                // 28
  emailVerified: Match.Optional(String),                                                                            // 29
  pwdChanged: Match.Optional(String),                                                                               // 30
  pwdReset: Match.Optional(String),                                                                                 // 31
  pwdSet: Match.Optional(String),                                                                                   // 32
  signUpVerifyEmail: Match.Optional(String),                                                                        // 33
  verificationEmailSent: Match.Optional(String),                                                                    // 34
};                                                                                                                  // 35
                                                                                                                    // 36
INPUT_ICONS_PAT = {                                                                                                 // 37
  hasError: Match.Optional(String),                                                                                 // 38
  hasSuccess: Match.Optional(String),                                                                               // 39
  isValidating: Match.Optional(String),                                                                             // 40
};                                                                                                                  // 41
                                                                                                                    // 42
ObjWithStringValues = Match.Where(function (x) {                                                                    // 43
  check(x, Object);                                                                                                 // 44
  _.each(_.values(x), function(value) {                                                                             // 45
      check(value, String);                                                                                         // 46
  });                                                                                                               // 47
  return true;                                                                                                      // 48
});                                                                                                                 // 49
                                                                                                                    // 50
TEXTS_PAT = {                                                                                                       // 51
  button: Match.Optional(STATE_PAT),                                                                                // 52
  errors: Match.Optional(ERRORS_PAT),                                                                               // 53
  info: Match.Optional(INFO_PAT),                                                                                   // 54
  inputIcons: Match.Optional(INPUT_ICONS_PAT),                                                                      // 55
  maxAllowedLength: Match.Optional(String),                                                                         // 56
  minRequiredLength: Match.Optional(String),                                                                        // 57
  navSignIn: Match.Optional(String),                                                                                // 58
  navSignOut: Match.Optional(String),                                                                               // 59
  optionalField: Match.Optional(String),                                                                            // 60
  pwdLink_link: Match.Optional(String),                                                                             // 61
  pwdLink_pre: Match.Optional(String),                                                                              // 62
  pwdLink_suff: Match.Optional(String),                                                                             // 63
  requiredField: Match.Optional(String),                                                                            // 64
  resendVerificationEmailLink_pre: Match.Optional(String),                                                          // 65
  resendVerificationEmailLink_link: Match.Optional(String),                                                         // 66
  resendVerificationEmailLink_suff: Match.Optional(String),                                                         // 67
  sep: Match.Optional(String),                                                                                      // 68
  signInLink_link: Match.Optional(String),                                                                          // 69
  signInLink_pre: Match.Optional(String),                                                                           // 70
  signInLink_suff: Match.Optional(String),                                                                          // 71
  signUpLink_link: Match.Optional(String),                                                                          // 72
  signUpLink_pre: Match.Optional(String),                                                                           // 73
  signUpLink_suff: Match.Optional(String),                                                                          // 74
  socialAdd: Match.Optional(String),                                                                                // 75
  socialConfigure: Match.Optional(String),                                                                          // 76
  socialIcons: Match.Optional(ObjWithStringValues),                                                                 // 77
  socialRemove: Match.Optional(String),                                                                             // 78
  socialSignIn: Match.Optional(String),                                                                             // 79
  socialSignUp: Match.Optional(String),                                                                             // 80
  socialWith: Match.Optional(String),                                                                               // 81
  termsAnd: Match.Optional(String),                                                                                 // 82
  termsPreamble: Match.Optional(String),                                                                            // 83
  termsPrivacy: Match.Optional(String),                                                                             // 84
  termsTerms: Match.Optional(String),                                                                               // 85
  title: Match.Optional(STATE_PAT),                                                                                 // 86
};                                                                                                                  // 87
                                                                                                                    // 88
// Configuration pattern to be checked with check                                                                   // 89
CONFIG_PAT = {                                                                                                      // 90
  // Behaviour                                                                                                      // 91
  confirmPassword: Match.Optional(Boolean),                                                                         // 92
  defaultState: Match.Optional(String),                                                                             // 93
  enablePasswordChange: Match.Optional(Boolean),                                                                    // 94
  enforceEmailVerification: Match.Optional(Boolean),                                                                // 95
  focusFirstInput: Match.Optional(Boolean),                                                                         // 96
  forbidClientAccountCreation: Match.Optional(Boolean),                                                             // 97
  lowercaseUsername: Match.Optional(Boolean),                                                                       // 98
  overrideLoginErrors: Match.Optional(Boolean),                                                                     // 99
  sendVerificationEmail: Match.Optional(Boolean),                                                                   // 100
  socialLoginStyle: Match.Optional(Match.OneOf("popup", "redirect")),                                               // 101
                                                                                                                    // 102
  // Appearance                                                                                                     // 103
  defaultLayout: Match.Optional(String),                                                                            // 104
  hideSignInLink: Match.Optional(Boolean),                                                                          // 105
  hideSignUpLink: Match.Optional(Boolean),                                                                          // 106
  showAddRemoveServices: Match.Optional(Boolean),                                                                   // 107
  showForgotPasswordLink: Match.Optional(Boolean),                                                                  // 108
  showResendVerificationEmailLink: Match.Optional(Boolean),                                                         // 109
  showLabels: Match.Optional(Boolean),                                                                              // 110
  showPlaceholders: Match.Optional(Boolean),                                                                        // 111
                                                                                                                    // 112
  // Client-side Validation                                                                                         // 113
  continuousValidation: Match.Optional(Boolean),                                                                    // 114
  negativeFeedback: Match.Optional(Boolean),                                                                        // 115
  negativeValidation: Match.Optional(Boolean),                                                                      // 116
  positiveFeedback: Match.Optional(Boolean),                                                                        // 117
  positiveValidation: Match.Optional(Boolean),                                                                      // 118
  showValidating: Match.Optional(Boolean),                                                                          // 119
                                                                                                                    // 120
  // Privacy Policy and Terms of Use                                                                                // 121
  privacyUrl: Match.Optional(String),                                                                               // 122
  termsUrl: Match.Optional(String),                                                                                 // 123
                                                                                                                    // 124
  // Redirects                                                                                                      // 125
  homeRoutePath: Match.Optional(String),                                                                            // 126
  redirectTimeout: Match.Optional(Number),                                                                          // 127
                                                                                                                    // 128
  // Hooks                                                                                                          // 129
  onLogoutHook: Match.Optional(Function),                                                                           // 130
  onSubmitHook: Match.Optional(Function),                                                                           // 131
  preSignUpHook: Match.Optional(Function),                                                                          // 132
                                                                                                                    // 133
  texts: Match.Optional(TEXTS_PAT),                                                                                 // 134
                                                                                                                    // 135
  //reCaptcha config                                                                                                // 136
  reCaptcha: Match.Optional({                                                                                       // 137
    data_type: Match.Optional(Match.OneOf("audio", "image")),                                                       // 138
    secretKey: Match.Optional(String),                                                                              // 139
    siteKey: Match.Optional(String),                                                                                // 140
    theme: Match.Optional(Match.OneOf("dark", "light")),                                                            // 141
  }),                                                                                                               // 142
                                                                                                                    // 143
  showReCaptcha: Match.Optional(Boolean),                                                                           // 144
};                                                                                                                  // 145
                                                                                                                    // 146
                                                                                                                    // 147
FIELD_SUB_PAT = {                                                                                                   // 148
  "default": Match.Optional(String),                                                                                // 149
  changePwd: Match.Optional(String),                                                                                // 150
  enrollAccount: Match.Optional(String),                                                                            // 151
  forgotPwd: Match.Optional(String),                                                                                // 152
  resetPwd: Match.Optional(String),                                                                                 // 153
  signIn: Match.Optional(String),                                                                                   // 154
  signUp: Match.Optional(String),                                                                                   // 155
};                                                                                                                  // 156
                                                                                                                    // 157
                                                                                                                    // 158
// Field pattern                                                                                                    // 159
FIELD_PAT = {                                                                                                       // 160
  _id: String,                                                                                                      // 161
  type: String,                                                                                                     // 162
  required: Match.Optional(Boolean),                                                                                // 163
  displayName: Match.Optional(Match.OneOf(String, Match.Where(_.isFunction), FIELD_SUB_PAT)),                       // 164
  placeholder: Match.Optional(Match.OneOf(String, FIELD_SUB_PAT)),                                                  // 165
  select: Match.Optional([{text: String, value: Match.Any}]),                                                       // 166
  minLength: Match.Optional(Match.Integer),                                                                         // 167
  maxLength: Match.Optional(Match.Integer),                                                                         // 168
  re: Match.Optional(RegExp),                                                                                       // 169
  func: Match.Optional(Match.Where(_.isFunction)),                                                                  // 170
  errStr: Match.Optional(String),                                                                                   // 171
                                                                                                                    // 172
  // Client-side Validation                                                                                         // 173
  continuousValidation: Match.Optional(Boolean),                                                                    // 174
  negativeFeedback: Match.Optional(Boolean),                                                                        // 175
  negativeValidation: Match.Optional(Boolean),                                                                      // 176
  positiveValidation: Match.Optional(Boolean),                                                                      // 177
  positiveFeedback: Match.Optional(Boolean),                                                                        // 178
                                                                                                                    // 179
  // Transforms                                                                                                     // 180
  trim: Match.Optional(Boolean),                                                                                    // 181
  lowercase: Match.Optional(Boolean),                                                                               // 182
  uppercase: Match.Optional(Boolean),                                                                               // 183
  transform: Match.Optional(Match.Where(_.isFunction)),                                                             // 184
                                                                                                                    // 185
  // Custom options                                                                                                 // 186
  options: Match.Optional(Object),                                                                                  // 187
  template: Match.Optional(String),                                                                                 // 188
};                                                                                                                  // 189
                                                                                                                    // 190
// -----------------------------------------------------------------------------                                    // 191
// AccountsTemplates object                                                                                         // 192
// -----------------------------------------------------------------------------                                    // 193
                                                                                                                    // 194
// -------------------                                                                                              // 195
// Client/Server stuff                                                                                              // 196
// -------------------                                                                                              // 197
                                                                                                                    // 198
// Constructor                                                                                                      // 199
AT = function() {                                                                                                   // 200
                                                                                                                    // 201
};                                                                                                                  // 202
                                                                                                                    // 203
AT.prototype.CONFIG_PAT = CONFIG_PAT;                                                                               // 204
                                                                                                                    // 205
/*                                                                                                                  // 206
  Each field object is represented by the following properties:                                                     // 207
    _id:         String   (required)  // A unique field"s id / name                                                 // 208
    type:        String   (required)  // Displayed input type                                                       // 209
    required:    Boolean  (optional)  // Specifies Whether to fail or not when field is left empty                  // 210
    displayName: String   (optional)  // The field"s name to be displayed as a label above the input element        // 211
    placeholder: String   (optional)  // The placeholder text to be displayed inside the input element              // 212
    minLength:   Integer  (optional)  // Possibly specifies the minimum allowed length                              // 213
    maxLength:   Integer  (optional)  // Possibly specifies the maximum allowed length                              // 214
    re:          RegExp   (optional)  // Regular expression for validation                                          // 215
    func:        Function (optional)  // Custom function for validation                                             // 216
    errStr:      String   (optional)  // Error message to be displayed in case re validation fails                  // 217
*/                                                                                                                  // 218
                                                                                                                    // 219
                                                                                                                    // 220
// Allowed input types                                                                                              // 221
AT.prototype.INPUT_TYPES = [                                                                                        // 222
  "checkbox",                                                                                                       // 223
  "email",                                                                                                          // 224
  "hidden",                                                                                                         // 225
  "password",                                                                                                       // 226
  "radio",                                                                                                          // 227
  "select",                                                                                                         // 228
  "tel",                                                                                                            // 229
  "text",                                                                                                           // 230
  "url",                                                                                                            // 231
];                                                                                                                  // 232
                                                                                                                    // 233
// Current configuration values                                                                                     // 234
AT.prototype.options = {                                                                                            // 235
  // Appearance                                                                                                     // 236
  //defaultLayout: undefined,                                                                                       // 237
  showAddRemoveServices: false,                                                                                     // 238
  showForgotPasswordLink: false,                                                                                    // 239
  showResendVerificationEmailLink: false,                                                                           // 240
  showLabels: true,                                                                                                 // 241
  showPlaceholders: true,                                                                                           // 242
                                                                                                                    // 243
  // Behaviour                                                                                                      // 244
  confirmPassword: true,                                                                                            // 245
  defaultState: "signIn",                                                                                           // 246
  enablePasswordChange: false,                                                                                      // 247
  focusFirstInput: true,                                                                                            // 248
  forbidClientAccountCreation: false,                                                                               // 249
  lowercaseUsername: false,                                                                                         // 250
  overrideLoginErrors: true,                                                                                        // 251
  sendVerificationEmail: false,                                                                                     // 252
  socialLoginStyle: "popup",                                                                                        // 253
                                                                                                                    // 254
  // Client-side Validation                                                                                         // 255
  //continuousValidation: false,                                                                                    // 256
  //negativeFeedback: false,                                                                                        // 257
  //negativeValidation: false,                                                                                      // 258
  //positiveValidation: false,                                                                                      // 259
  //positiveFeedback: false,                                                                                        // 260
  //showValidating: false,                                                                                          // 261
                                                                                                                    // 262
  // Privacy Policy and Terms of Use                                                                                // 263
  privacyUrl: undefined,                                                                                            // 264
  termsUrl: undefined,                                                                                              // 265
                                                                                                                    // 266
  // Hooks                                                                                                          // 267
  onSubmitHook: undefined,                                                                                          // 268
};                                                                                                                  // 269
                                                                                                                    // 270
AT.prototype.texts = {                                                                                              // 271
  button: {                                                                                                         // 272
    changePwd: "updateYourPassword",                                                                                // 273
    //enrollAccount: "createAccount",                                                                               // 274
    enrollAccount: "signUp",                                                                                        // 275
    forgotPwd: "emailResetLink",                                                                                    // 276
    resetPwd: "setPassword",                                                                                        // 277
    signIn: "signIn",                                                                                               // 278
    signUp: "signUp",                                                                                               // 279
    resendVerificationEmail: "Send email again",                                                                    // 280
  },                                                                                                                // 281
  errors: {                                                                                                         // 282
    accountsCreationDisabled: "Client side accounts creation is disabled!!!",                                       // 283
    cannotRemoveService: "Cannot remove the only active service!",                                                  // 284
    captchaVerification: "Captcha verification failed!",                                                            // 285
    loginForbidden: "error.accounts.Login forbidden",                                                               // 286
    mustBeLoggedIn: "error.accounts.Must be logged in",                                                             // 287
    pwdMismatch: "error.pwdsDontMatch",                                                                             // 288
    validationErrors: "Validation Errors",                                                                          // 289
    verifyEmailFirst: "Please verify your email first. Check the email and follow the link!",                       // 290
  },                                                                                                                // 291
  navSignIn: 'signIn',                                                                                              // 292
  navSignOut: 'signOut',                                                                                            // 293
  info: {                                                                                                           // 294
    emailSent: "info.emailSent",                                                                                    // 295
    emailVerified: "info.emailVerified",                                                                            // 296
    pwdChanged: "info.passwordChanged",                                                                             // 297
    pwdReset: "info.passwordReset",                                                                                 // 298
    pwdSet: "Password Set",                                                                                         // 299
    signUpVerifyEmail: "Successful Registration! Please check your email and follow the instructions.",             // 300
    verificationEmailSent: "A new email has been sent to you. If the email doesn't show up in your inbox, be sure to check your spam folder.",
  },                                                                                                                // 302
  inputIcons: {                                                                                                     // 303
    isValidating: "fa fa-spinner fa-spin",                                                                          // 304
    hasSuccess: "fa fa-check",                                                                                      // 305
    hasError: "fa fa-times",                                                                                        // 306
  },                                                                                                                // 307
  maxAllowedLength: "Maximum allowed length",                                                                       // 308
  minRequiredLength: "Minimum required length",                                                                     // 309
  optionalField: "optional",                                                                                        // 310
  pwdLink_pre: "",                                                                                                  // 311
  pwdLink_link: "forgotPassword",                                                                                   // 312
  pwdLink_suff: "",                                                                                                 // 313
  requiredField: "Required Field",                                                                                  // 314
  resendVerificationEmailLink_pre: "Verification email lost?",                                                      // 315
  resendVerificationEmailLink_link: "Send again",                                                                   // 316
  resendVerificationEmailLink_suff: "",                                                                             // 317
  sep: "OR",                                                                                                        // 318
  signInLink_pre: "ifYouAlreadyHaveAnAccount",                                                                      // 319
  signInLink_link: "signin",                                                                                        // 320
  signInLink_suff: "",                                                                                              // 321
  signUpLink_pre: "dontHaveAnAccount",                                                                              // 322
  signUpLink_link: "signUp",                                                                                        // 323
  signUpLink_suff: "",                                                                                              // 324
  socialAdd: "add",                                                                                                 // 325
  socialConfigure: "configure",                                                                                     // 326
  socialIcons: {                                                                                                    // 327
      "meteor-developer": "fa fa-rocket"                                                                            // 328
  },                                                                                                                // 329
  socialRemove: "remove",                                                                                           // 330
  socialSignIn: "signIn",                                                                                           // 331
  socialSignUp: "signUp",                                                                                           // 332
  socialWith: "with",                                                                                               // 333
  termsPreamble: "clickAgree",                                                                                      // 334
  termsPrivacy: "privacyPolicy",                                                                                    // 335
  termsAnd: "and",                                                                                                  // 336
  termsTerms: "terms",                                                                                              // 337
  title: {                                                                                                          // 338
    changePwd: "changePassword",                                                                                    // 339
    enrollAccount: "createAccount",                                                                                 // 340
    forgotPwd: "resetYourPassword",                                                                                 // 341
    resetPwd: "resetYourPassword",                                                                                  // 342
    signIn: "signIn",                                                                                               // 343
    signUp: "createAccount",                                                                                        // 344
    verifyEmail: "",                                                                                                // 345
    resendVerificationEmail: "Send the verification email again",                                                   // 346
  },                                                                                                                // 347
};                                                                                                                  // 348
                                                                                                                    // 349
AT.prototype.SPECIAL_FIELDS = [                                                                                     // 350
  "password_again",                                                                                                 // 351
  "username_and_email",                                                                                             // 352
];                                                                                                                  // 353
                                                                                                                    // 354
// SignIn / SignUp fields                                                                                           // 355
AT.prototype._fields = [                                                                                            // 356
  new Field({                                                                                                       // 357
    _id: "email",                                                                                                   // 358
    type: "email",                                                                                                  // 359
    required: true,                                                                                                 // 360
    lowercase: true,                                                                                                // 361
    trim: true,                                                                                                     // 362
    func: function(email) {                                                                                         // 363
        return !_.contains(email, '@');                                                                             // 364
    },                                                                                                              // 365
    errStr: 'Invalid email',                                                                                        // 366
  }),                                                                                                               // 367
  new Field({                                                                                                       // 368
    _id: "password",                                                                                                // 369
    type: "password",                                                                                               // 370
    required: true,                                                                                                 // 371
    minLength: 6,                                                                                                   // 372
    displayName: {                                                                                                  // 373
        "default": "password",                                                                                      // 374
        changePwd: "newPassword",                                                                                   // 375
        resetPwd: "newPassword",                                                                                    // 376
    },                                                                                                              // 377
    placeholder: {                                                                                                  // 378
        "default": "password",                                                                                      // 379
        changePwd: "newPassword",                                                                                   // 380
        resetPwd: "newPassword",                                                                                    // 381
    },                                                                                                              // 382
  }),                                                                                                               // 383
];                                                                                                                  // 384
                                                                                                                    // 385
                                                                                                                    // 386
AT.prototype._initialized = false;                                                                                  // 387
                                                                                                                    // 388
// Input type validation                                                                                            // 389
AT.prototype._isValidInputType = function(value) {                                                                  // 390
    return _.indexOf(this.INPUT_TYPES, value) !== -1;                                                               // 391
};                                                                                                                  // 392
                                                                                                                    // 393
AT.prototype.addField = function(field) {                                                                           // 394
    // Fields can be added only before initialization                                                               // 395
    if (this._initialized) {                                                                                        // 396
      throw new Error("AccountsTemplates.addField should strictly be called before AccountsTemplates.init!");       // 397
    }                                                                                                               // 398
                                                                                                                    // 399
    field = _.pick(field, _.keys(FIELD_PAT));                                                                       // 400
    check(field, FIELD_PAT);                                                                                        // 401
    // Checks there"s currently no field called field._id                                                           // 402
    if (_.indexOf(_.pluck(this._fields, "_id"), field._id) !== -1) {                                                // 403
      throw new Error("A field called " + field._id + " already exists!");                                          // 404
    }                                                                                                               // 405
    // Validates field.type                                                                                         // 406
    if (!this._isValidInputType(field.type)) {                                                                      // 407
      throw new Error("field.type is not valid!");                                                                  // 408
    }                                                                                                               // 409
    // Checks field.minLength is strictly positive                                                                  // 410
    if (typeof field.minLength !== "undefined" && field.minLength <= 0) {                                           // 411
      throw new Error("field.minLength should be greater than zero!");                                              // 412
    }                                                                                                               // 413
    // Checks field.maxLength is strictly positive                                                                  // 414
    if (typeof field.maxLength !== "undefined" && field.maxLength <= 0) {                                           // 415
      throw new Error("field.maxLength should be greater than zero!");                                              // 416
    }                                                                                                               // 417
    // Checks field.maxLength is greater than field.minLength                                                       // 418
    if (typeof field.minLength !== "undefined" && typeof field.minLength !== "undefined" && field.maxLength < field.minLength) {
      throw new Error("field.maxLength should be greater than field.maxLength!");                                   // 420
    }                                                                                                               // 421
                                                                                                                    // 422
    if (!(Meteor.isServer && _.contains(this.SPECIAL_FIELDS, field._id))) {                                         // 423
      this._fields.push(new Field(field));                                                                          // 424
    }                                                                                                               // 425
                                                                                                                    // 426
    return this._fields;                                                                                            // 427
};                                                                                                                  // 428
                                                                                                                    // 429
AT.prototype.addFields = function(fields) {                                                                         // 430
  var ok;                                                                                                           // 431
                                                                                                                    // 432
  try { // don"t bother with `typeof` - just access `length` and `catch`                                            // 433
    ok = fields.length > 0 && "0" in Object(fields);                                                                // 434
  } catch (e) {                                                                                                     // 435
    throw new Error("field argument should be an array of valid field objects!");                                   // 436
  }                                                                                                                 // 437
  if (ok) {                                                                                                         // 438
    _.map(fields, function(field) {                                                                                 // 439
      this.addField(field);                                                                                         // 440
    }, this);                                                                                                       // 441
  } else {                                                                                                          // 442
    throw new Error("field argument should be an array of valid field objects!");                                   // 443
  }                                                                                                                 // 444
                                                                                                                    // 445
  return this._fields;                                                                                              // 446
};                                                                                                                  // 447
                                                                                                                    // 448
AT.prototype.configure = function(config) {                                                                         // 449
  // Configuration options can be set only before initialization                                                    // 450
  if (this._initialized) {                                                                                          // 451
    throw new Error("Configuration options must be set before AccountsTemplates.init!");                            // 452
  }                                                                                                                 // 453
                                                                                                                    // 454
  // Updates the current configuration                                                                              // 455
  check(config, CONFIG_PAT);                                                                                        // 456
  var options = _.omit(config, "texts", "reCaptcha");                                                               // 457
  this.options = _.defaults(options, this.options);                                                                 // 458
                                                                                                                    // 459
  // Possibly sets up reCaptcha options                                                                             // 460
  var reCaptcha = config.reCaptcha;                                                                                 // 461
  if (reCaptcha) {                                                                                                  // 462
    // Updates the current button object                                                                            // 463
    this.options.reCaptcha = _.defaults(reCaptcha, this.options.reCaptcha || {});                                   // 464
  }                                                                                                                 // 465
                                                                                                                    // 466
  // Possibly sets up texts...                                                                                      // 467
  if (config.texts) {                                                                                               // 468
    var texts = config.texts;                                                                                       // 469
    var simpleTexts = _.omit(texts, "button", "errors", "info", "inputIcons", "socialIcons", "title");              // 470
                                                                                                                    // 471
    this.texts = _.defaults(simpleTexts, this.texts);                                                               // 472
                                                                                                                    // 473
    if (texts.button) {                                                                                             // 474
      // Updates the current button object                                                                          // 475
      this.texts.button = _.defaults(texts.button, this.texts.button);                                              // 476
    }                                                                                                               // 477
                                                                                                                    // 478
    if (texts.errors) {                                                                                             // 479
      // Updates the current errors object                                                                          // 480
      this.texts.errors = _.defaults(texts.errors, this.texts.errors);                                              // 481
    }                                                                                                               // 482
                                                                                                                    // 483
    if (texts.info) {                                                                                               // 484
      // Updates the current info object                                                                            // 485
      this.texts.info = _.defaults(texts.info, this.texts.info);                                                    // 486
    }                                                                                                               // 487
                                                                                                                    // 488
    if (texts.inputIcons) {                                                                                         // 489
      // Updates the current inputIcons object                                                                      // 490
      this.texts.inputIcons = _.defaults(texts.inputIcons, this.texts.inputIcons);                                  // 491
    }                                                                                                               // 492
                                                                                                                    // 493
    if (texts.socialIcons) {                                                                                        // 494
      // Updates the current socialIcons object                                                                     // 495
      this.texts.socialIcons = _.defaults(texts.socialIcons, this.texts.socialIcons);                               // 496
    }                                                                                                               // 497
                                                                                                                    // 498
    if (texts.title) {                                                                                              // 499
      // Updates the current title object                                                                           // 500
      this.texts.title = _.defaults(texts.title, this.texts.title);                                                 // 501
    }                                                                                                               // 502
  }                                                                                                                 // 503
};                                                                                                                  // 504
                                                                                                                    // 505
                                                                                                                    // 506
AT.prototype.configureRoute = function(route, options) {                                                            // 507
  console.warn('You now need a routing package like useraccounts:iron-routing or useraccounts:flow-routing to be able to configure routes!');
};                                                                                                                  // 509
                                                                                                                    // 510
                                                                                                                    // 511
AT.prototype.hasField = function(fieldId) {                                                                         // 512
  return !!this.getField(fieldId);                                                                                  // 513
};                                                                                                                  // 514
                                                                                                                    // 515
AT.prototype.getField = function(fieldId) {                                                                         // 516
  var field = _.filter(this._fields, function(field) {                                                              // 517
    return field._id === fieldId;                                                                                   // 518
  });                                                                                                               // 519
                                                                                                                    // 520
  return (field.length === 1) ? field[0] : undefined;                                                               // 521
};                                                                                                                  // 522
                                                                                                                    // 523
AT.prototype.getFields = function() {                                                                               // 524
    return this._fields;                                                                                            // 525
};                                                                                                                  // 526
                                                                                                                    // 527
AT.prototype.getFieldIds = function() {                                                                             // 528
    return _.pluck(this._fields, "_id");                                                                            // 529
};                                                                                                                  // 530
                                                                                                                    // 531
AT.prototype.getRoutePath = function(route) {                                                                       // 532
    return "#";                                                                                                     // 533
};                                                                                                                  // 534
                                                                                                                    // 535
AT.prototype.oauthServices = function() {                                                                           // 536
  // Extracts names of available services                                                                           // 537
  var names;                                                                                                        // 538
                                                                                                                    // 539
  if (Meteor.isServer) {                                                                                            // 540
    names = (Accounts.oauth && Accounts.oauth.serviceNames()) || [];                                                // 541
  } else {                                                                                                          // 542
    names = (Accounts.oauth && Accounts.loginServicesConfigured() && Accounts.oauth.serviceNames()) || [];          // 543
  }                                                                                                                 // 544
  // Extracts names of configured services                                                                          // 545
  var configuredServices = [];                                                                                      // 546
                                                                                                                    // 547
  if (Accounts.loginServiceConfiguration) {                                                                         // 548
    configuredServices = _.pluck(Accounts.loginServiceConfiguration.find().fetch(), "service");                     // 549
  }                                                                                                                 // 550
                                                                                                                    // 551
  // Builds a list of objects containing service name as _id and its configuration status                           // 552
  var services = _.map(names, function(name) {                                                                      // 553
    return {                                                                                                        // 554
      _id : name,                                                                                                   // 555
      configured: _.contains(configuredServices, name),                                                             // 556
    };                                                                                                              // 557
  });                                                                                                               // 558
                                                                                                                    // 559
  // Checks whether there is a UI to configure services...                                                          // 560
  // XXX: this only works with the accounts-ui package                                                              // 561
  var showUnconfigured = typeof Accounts._loginButtonsSession !== "undefined";                                      // 562
                                                                                                                    // 563
  // Filters out unconfigured services in case they"re not to be displayed                                          // 564
  if (!showUnconfigured) {                                                                                          // 565
    services = _.filter(services, function(service) {                                                               // 566
      return service.configured;                                                                                    // 567
    });                                                                                                             // 568
  }                                                                                                                 // 569
                                                                                                                    // 570
  // Sorts services by name                                                                                         // 571
  services = _.sortBy(services, function(service) {                                                                 // 572
    return service._id;                                                                                             // 573
  });                                                                                                               // 574
                                                                                                                    // 575
  return services;                                                                                                  // 576
};                                                                                                                  // 577
                                                                                                                    // 578
AT.prototype.removeField = function(fieldId) {                                                                      // 579
  // Fields can be removed only before initialization                                                               // 580
  if (this._initialized) {                                                                                          // 581
    throw new Error("AccountsTemplates.removeField should strictly be called before AccountsTemplates.init!");      // 582
  }                                                                                                                 // 583
  // Tries to look up the field with given _id                                                                      // 584
  var index = _.indexOf(_.pluck(this._fields, "_id"), fieldId);                                                     // 585
                                                                                                                    // 586
  if (index !== -1) {                                                                                               // 587
    return this._fields.splice(index, 1)[0];                                                                        // 588
  } else if (!(Meteor.isServer && _.contains(this.SPECIAL_FIELDS, fieldId))) {                                      // 589
    throw new Error("A field called " + fieldId + " does not exist!");                                              // 590
  }                                                                                                                 // 591
};                                                                                                                  // 592
                                                                                                                    // 593
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 950
}).call(this);                                                                                                         // 951
                                                                                                                       // 952
                                                                                                                       // 953
                                                                                                                       // 954
                                                                                                                       // 955
                                                                                                                       // 956
                                                                                                                       // 957
(function () {                                                                                                         // 958
                                                                                                                       // 959
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:core/lib/client.js                                                                         //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
/* global                                                                                                           // 1
  AT: false                                                                                                         // 2
*/                                                                                                                  // 3
"use strict";                                                                                                       // 4
                                                                                                                    // 5
// Allowed Internal (client-side) States                                                                            // 6
AT.prototype.STATES = [                                                                                             // 7
  "changePwd", // Change Password                                                                                   // 8
  "enrollAccount", // Account Enrollment                                                                            // 9
  "forgotPwd", // Forgot Password                                                                                   // 10
  "hide", // Nothing displayed                                                                                      // 11
  "resetPwd", // Reset Password                                                                                     // 12
  "signIn", // Sign In                                                                                              // 13
  "signUp", // Sign Up                                                                                              // 14
  "verifyEmail", // Email verification                                                                              // 15
  "resendVerificationEmail", // Resend verification email                                                           // 16
];                                                                                                                  // 17
                                                                                                                    // 18
AT.prototype._loginType = "";                                                                                       // 19
                                                                                                                    // 20
// Flag telling whether the whole form should appear disabled                                                       // 21
AT.prototype._disabled = false;                                                                                     // 22
                                                                                                                    // 23
// State validation                                                                                                 // 24
AT.prototype._isValidState = function(value) {                                                                      // 25
  return _.contains(this.STATES, value);                                                                            // 26
};                                                                                                                  // 27
                                                                                                                    // 28
// Flags used to avoid clearing errors and redirecting to previous route when                                       // 29
// signing in/up as a results of a call to ensureSignedIn                                                           // 30
AT.prototype.avoidRedirect = false;                                                                                 // 31
AT.prototype.avoidClearError = false;                                                                               // 32
                                                                                                                    // 33
// Token to be provided for routes like reset-password and enroll-account                                           // 34
AT.prototype.paramToken = null;                                                                                     // 35
                                                                                                                    // 36
AT.prototype.loginType = function () {                                                                              // 37
  return this._loginType;                                                                                           // 38
};                                                                                                                  // 39
                                                                                                                    // 40
AT.prototype.getparamToken = function() {                                                                           // 41
  return this.paramToken;                                                                                           // 42
};                                                                                                                  // 43
                                                                                                                    // 44
// Getter for current state                                                                                         // 45
AT.prototype.getState = function() {                                                                                // 46
  return this.state.form.get("state");                                                                              // 47
};                                                                                                                  // 48
                                                                                                                    // 49
// Getter for disabled state                                                                                        // 50
AT.prototype.disabled = function() {                                                                                // 51
  return this.state.form.equals("disabled", true) ? "disabled" : undefined;                                         // 52
};                                                                                                                  // 53
                                                                                                                    // 54
// Setter for disabled state                                                                                        // 55
AT.prototype.setDisabled = function(value) {                                                                        // 56
  check(value, Boolean);                                                                                            // 57
  return this.state.form.set("disabled", value);                                                                    // 58
};                                                                                                                  // 59
                                                                                                                    // 60
// Setter for current state                                                                                         // 61
AT.prototype.setState = function(state, callback) {                                                                 // 62
  check(state, String);                                                                                             // 63
                                                                                                                    // 64
  if (!this._isValidState(state)) {                                                                                 // 65
    throw new Meteor.Error(500, "Internal server error", "accounts-templates-core package got an invalid state value!");
  }                                                                                                                 // 67
                                                                                                                    // 68
  this.state.form.set("state", state);                                                                              // 69
  if (!this.avoidClearError) {                                                                                      // 70
    this.clearState();                                                                                              // 71
  }                                                                                                                 // 72
  this.avoidClearError = false;                                                                                     // 73
                                                                                                                    // 74
  if (_.isFunction(callback)) {                                                                                     // 75
    callback();                                                                                                     // 76
  }                                                                                                                 // 77
};                                                                                                                  // 78
                                                                                                                    // 79
AT.prototype.clearState = function() {                                                                              // 80
  _.each(this._fields, function(field) {                                                                            // 81
    field.clearStatus();                                                                                            // 82
  });                                                                                                               // 83
                                                                                                                    // 84
  var form = this.state.form;                                                                                       // 85
                                                                                                                    // 86
  form.set("error", null);                                                                                          // 87
  form.set("result", null);                                                                                         // 88
  form.set("message", null);                                                                                        // 89
                                                                                                                    // 90
  AccountsTemplates.setDisabled(false);                                                                             // 91
};                                                                                                                  // 92
                                                                                                                    // 93
AT.prototype.clearError = function() {                                                                              // 94
  this.state.form.set("error", null);                                                                               // 95
};                                                                                                                  // 96
                                                                                                                    // 97
AT.prototype.clearResult = function() {                                                                             // 98
  this.state.form.set("result", null);                                                                              // 99
};                                                                                                                  // 100
                                                                                                                    // 101
AT.prototype.clearMessage = function() {                                                                            // 102
  this.state.form.set("message", null);                                                                             // 103
};                                                                                                                  // 104
                                                                                                                    // 105
// Initialization                                                                                                   // 106
AT.prototype.init = function() {                                                                                    // 107
  console.warn("[AccountsTemplates] There is no more need to call AccountsTemplates.init()! Simply remove the call ;-)");
};                                                                                                                  // 109
                                                                                                                    // 110
AT.prototype._init = function() {                                                                                   // 111
  if (this._initialized) {                                                                                          // 112
    return;                                                                                                         // 113
  }                                                                                                                 // 114
                                                                                                                    // 115
  var usernamePresent = this.hasField("username");                                                                  // 116
  var emailPresent = this.hasField("email");                                                                        // 117
                                                                                                                    // 118
  if (usernamePresent && emailPresent) {                                                                            // 119
    this._loginType = "username_and_email";                                                                         // 120
  } else {                                                                                                          // 121
    this._loginType = usernamePresent ? "username" : "email";                                                       // 122
  }                                                                                                                 // 123
                                                                                                                    // 124
  if (this._loginType === "username_and_email") {                                                                   // 125
    // Possibly adds the field username_and_email in case                                                           // 126
    // it was not configured                                                                                        // 127
    if (!this.hasField("username_and_email")) {                                                                     // 128
      this.addField({                                                                                               // 129
        _id: "username_and_email",                                                                                  // 130
        type: "text",                                                                                               // 131
        displayName: "usernameOrEmail",                                                                             // 132
        placeholder: "usernameOrEmail",                                                                             // 133
        required: true,                                                                                             // 134
      });                                                                                                           // 135
    }                                                                                                               // 136
  }                                                                                                                 // 137
                                                                                                                    // 138
  // Only in case password confirmation is required                                                                 // 139
  if (this.options.confirmPassword) {                                                                               // 140
    // Possibly adds the field password_again in case                                                               // 141
    // it was not configured                                                                                        // 142
    if (!this.hasField("password_again")) {                                                                         // 143
      var pwdAgain = _.clone(this.getField("password"));                                                            // 144
                                                                                                                    // 145
      pwdAgain._id = "password_again";                                                                              // 146
      pwdAgain.displayName = {                                                                                      // 147
        "default": "passwordAgain",                                                                                 // 148
        changePwd: "newPasswordAgain",                                                                              // 149
        resetPwd: "newPasswordAgain",                                                                               // 150
      };                                                                                                            // 151
      pwdAgain.placeholder = {                                                                                      // 152
        "default": "passwordAgain",                                                                                 // 153
        changePwd: "newPasswordAgain",                                                                              // 154
        resetPwd: "newPasswordAgain",                                                                               // 155
      };                                                                                                            // 156
      this.addField(pwdAgain);                                                                                      // 157
    }                                                                                                               // 158
  } else {                                                                                                          // 159
    if (this.hasField("password_again")) {                                                                          // 160
      throw new Error("AccountsTemplates: a field password_again was added but confirmPassword is set to false!");  // 161
    }                                                                                                               // 162
  }                                                                                                                 // 163
                                                                                                                    // 164
  // Possibly adds the field current_password in case                                                               // 165
  // it was not configured                                                                                          // 166
  if (this.options.enablePasswordChange) {                                                                          // 167
    if (!this.hasField("current_password")) {                                                                       // 168
      this.addField({                                                                                               // 169
        _id: "current_password",                                                                                    // 170
        type: "password",                                                                                           // 171
        displayName: "currentPassword",                                                                             // 172
        placeholder: "currentPassword",                                                                             // 173
        required: true,                                                                                             // 174
      });                                                                                                           // 175
    }                                                                                                               // 176
  }                                                                                                                 // 177
                                                                                                                    // 178
  // Ensuser the right order of special fields                                                                      // 179
  var moveFieldAfter = function(fieldName, referenceFieldName) {                                                    // 180
    var fieldIds = AccountsTemplates.getFieldIds();                                                                 // 181
    var refFieldId = _.indexOf(fieldIds, referenceFieldName);                                                       // 182
    // In case the reference field is not present, just return...                                                   // 183
    if (refFieldId === -1) {                                                                                        // 184
      return;                                                                                                       // 185
    }                                                                                                               // 186
                                                                                                                    // 187
    var fieldId = _.indexOf(fieldIds, fieldName);                                                                   // 188
    // In case the sought field is not present, just return...                                                      // 189
    if (fieldId === -1) {                                                                                           // 190
      return;                                                                                                       // 191
    }                                                                                                               // 192
                                                                                                                    // 193
    if (fieldId !== -1 && fieldId !== (refFieldId + 1)) {                                                           // 194
      // removes the field                                                                                          // 195
      var field = AccountsTemplates._fields.splice(fieldId, 1)[0];                                                  // 196
      // push the field right after the reference field position                                                    // 197
      var newFieldIds = AccountsTemplates.getFieldIds();                                                            // 198
      var newReferenceFieldId = _.indexOf(newFieldIds, referenceFieldName);                                         // 199
      AccountsTemplates._fields.splice(newReferenceFieldId + 1, 0, field);                                          // 200
    }                                                                                                               // 201
  };                                                                                                                // 202
                                                                                                                    // 203
  // Ensuser the right order of special fields                                                                      // 204
  var moveFieldBefore = function(fieldName, referenceFieldName) {                                                   // 205
    var fieldIds = AccountsTemplates.getFieldIds();                                                                 // 206
    var refFieldId = _.indexOf(fieldIds, referenceFieldName);                                                       // 207
    // In case the reference field is not present, just return...                                                   // 208
    if (refFieldId === -1) {                                                                                        // 209
      return;                                                                                                       // 210
    }                                                                                                               // 211
                                                                                                                    // 212
    var fieldId = _.indexOf(fieldIds, fieldName);                                                                   // 213
    // In case the sought field is not present, just return...                                                      // 214
    if (fieldId === -1) {                                                                                           // 215
      return;                                                                                                       // 216
    }                                                                                                               // 217
                                                                                                                    // 218
    if (fieldId !== -1 && fieldId !== (refFieldId - 1)) {                                                           // 219
      // removes the field                                                                                          // 220
      var field = AccountsTemplates._fields.splice(fieldId, 1)[0];                                                  // 221
      // push the field right after the reference field position                                                    // 222
      var newFieldIds = AccountsTemplates.getFieldIds();                                                            // 223
      var newReferenceFieldId = _.indexOf(newFieldIds, referenceFieldName);                                         // 224
      AccountsTemplates._fields.splice(newReferenceFieldId, 0, field);                                              // 225
    }                                                                                                               // 226
  };                                                                                                                // 227
                                                                                                                    // 228
  // The final order should be something like:                                                                      // 229
  // - username                                                                                                     // 230
  // - email                                                                                                        // 231
  // - username_and_email                                                                                           // 232
  // - password                                                                                                     // 233
  // - password_again                                                                                               // 234
  //                                                                                                                // 235
  // ...so lets do it in reverse order...                                                                           // 236
  moveFieldAfter("username_and_email", "username");                                                                 // 237
  moveFieldAfter("username_and_email", "email");                                                                    // 238
  moveFieldBefore("current_password", "password");                                                                  // 239
  moveFieldAfter("password", "current_password");                                                                   // 240
  moveFieldAfter("password_again", "password");                                                                     // 241
                                                                                                                    // 242
                                                                                                                    // 243
  // Sets visibility condition and validation flags for each field                                                  // 244
  var gPositiveValidation = !!AccountsTemplates.options.positiveValidation;                                         // 245
  var gNegativeValidation = !!AccountsTemplates.options.negativeValidation;                                         // 246
  var gShowValidating = !!AccountsTemplates.options.showValidating;                                                 // 247
  var gContinuousValidation = !!AccountsTemplates.options.continuousValidation;                                     // 248
  var gNegativeFeedback = !!AccountsTemplates.options.negativeFeedback;                                             // 249
  var gPositiveFeedback = !!AccountsTemplates.options.positiveFeedback;                                             // 250
                                                                                                                    // 251
  _.each(this._fields, function(field) {                                                                            // 252
    // Visibility                                                                                                   // 253
    switch(field._id) {                                                                                             // 254
      case "current_password":                                                                                      // 255
        field.visible = ["changePwd"];                                                                              // 256
        break;                                                                                                      // 257
      case "email":                                                                                                 // 258
        field.visible = ["forgotPwd", "signUp", "resendVerificationEmail"];                                         // 259
        if (AccountsTemplates.loginType() === "email") {                                                            // 260
          field.visible.push("signIn");                                                                             // 261
        }                                                                                                           // 262
        break;                                                                                                      // 263
      case "password":                                                                                              // 264
        field.visible = ["changePwd", "enrollAccount", "resetPwd", "signIn", "signUp"];                             // 265
        break;                                                                                                      // 266
      case "password_again":                                                                                        // 267
        field.visible = ["changePwd", "enrollAccount", "resetPwd", "signUp"];                                       // 268
        break;                                                                                                      // 269
      case "username":                                                                                              // 270
        field.visible = ["signUp"];                                                                                 // 271
        if (AccountsTemplates.loginType() === "username") {                                                         // 272
          field.visible.push("signIn");                                                                             // 273
        }                                                                                                           // 274
        break;                                                                                                      // 275
      case "username_and_email":                                                                                    // 276
        field.visible = [];                                                                                         // 277
        if (AccountsTemplates.loginType() === "username_and_email") {                                               // 278
          field.visible.push("signIn");                                                                             // 279
        }                                                                                                           // 280
        break;                                                                                                      // 281
      default:                                                                                                      // 282
        field.visible = ["signUp"];                                                                                 // 283
    }                                                                                                               // 284
                                                                                                                    // 285
      // Validation                                                                                                 // 286
      var positiveValidation = field.positiveValidation;                                                            // 287
      if (_.isUndefined(positiveValidation)) {                                                                      // 288
        field.positiveValidation = gPositiveValidation;                                                             // 289
      }                                                                                                             // 290
                                                                                                                    // 291
      var negativeValidation = field.negativeValidation;                                                            // 292
      if (_.isUndefined(negativeValidation)) {                                                                      // 293
        field.negativeValidation = gNegativeValidation;                                                             // 294
      }                                                                                                             // 295
                                                                                                                    // 296
      field.validation = field.positiveValidation || field.negativeValidation;                                      // 297
      if (_.isUndefined(field.continuousValidation)) {                                                              // 298
        field.continuousValidation = gContinuousValidation;                                                         // 299
      }                                                                                                             // 300
                                                                                                                    // 301
      field.continuousValidation = field.validation && field.continuousValidation;                                  // 302
      if (_.isUndefined(field.negativeFeedback)) {                                                                  // 303
        field.negativeFeedback = gNegativeFeedback;                                                                 // 304
      }                                                                                                             // 305
                                                                                                                    // 306
      if (_.isUndefined(field.positiveFeedback)) {                                                                  // 307
        field.positiveFeedback = gPositiveFeedback;                                                                 // 308
      }                                                                                                             // 309
                                                                                                                    // 310
      field.feedback = field.negativeFeedback || field.positiveFeedback;                                            // 311
      // Validating icon                                                                                            // 312
      var showValidating = field.showValidating;                                                                    // 313
      if (_.isUndefined(showValidating)) {                                                                          // 314
        field.showValidating = gShowValidating;                                                                     // 315
      }                                                                                                             // 316
                                                                                                                    // 317
      // Custom Template                                                                                            // 318
      if (field.template) {                                                                                         // 319
        if (field.template in Template) {                                                                           // 320
          Template[field.template].helpers(AccountsTemplates.atInputHelpers);                                       // 321
        } else {                                                                                                    // 322
          console.warn(                                                                                             // 323
            "[UserAccounts] Warning no template " + field.template + " found!"                                      // 324
          );                                                                                                        // 325
        }                                                                                                           // 326
      }                                                                                                             // 327
  });                                                                                                               // 328
                                                                                                                    // 329
  // Initializes reactive states                                                                                    // 330
  var form = new ReactiveDict();                                                                                    // 331
                                                                                                                    // 332
  form.set("disabled", false);                                                                                      // 333
  form.set("state", "signIn");                                                                                      // 334
  form.set("result", null);                                                                                         // 335
  form.set("error", null);                                                                                          // 336
  form.set("message", null);                                                                                        // 337
  this.state = {                                                                                                    // 338
    form: form,                                                                                                     // 339
  };                                                                                                                // 340
                                                                                                                    // 341
  // Possibly subscribes to extended user data (to get the list of registered services...)                          // 342
  if (this.options.showAddRemoveServices) {                                                                         // 343
      Meteor.subscribe("userRegisteredServices");                                                                   // 344
  }                                                                                                                 // 345
                                                                                                                    // 346
  //Check that reCaptcha site keys are available and no secret keys visible                                         // 347
  if (this.options.showReCaptcha) {                                                                                 // 348
    var atSiteKey = null;                                                                                           // 349
    var atSecretKey = null;                                                                                         // 350
    var settingsSiteKey = null;                                                                                     // 351
    var settingsSecretKey = null;                                                                                   // 352
                                                                                                                    // 353
    if (AccountsTemplates.options.reCaptcha) {                                                                      // 354
      atSiteKey = AccountsTemplates.options.reCaptcha.siteKey;                                                      // 355
      atSecretKey = AccountsTemplates.options.reCaptcha.secretKey;                                                  // 356
    }                                                                                                               // 357
                                                                                                                    // 358
    if (Meteor.settings && Meteor.settings.public && Meteor.settings.public.reCaptcha) {                            // 359
      settingsSiteKey = Meteor.settings.public.reCaptcha.siteKey;                                                   // 360
      settingsSecretKey = Meteor.settings.public.reCaptcha.secretKey;                                               // 361
    }                                                                                                               // 362
                                                                                                                    // 363
    if (atSecretKey || settingsSecretKey) {                                                                         // 364
      //erase the secret key                                                                                        // 365
      if (atSecretKey) {                                                                                            // 366
          AccountsTemplates.options.reCaptcha.secretKey = null;                                                     // 367
      }                                                                                                             // 368
                                                                                                                    // 369
      if (settingsSecretKey) {                                                                                      // 370
          Meteor.settings.public.reCaptcha.secretKey = null;                                                        // 371
      }                                                                                                             // 372
                                                                                                                    // 373
      var loc = atSecretKey ? "User Accounts configuration!" : "Meteor settings!";                                  // 374
      throw new Meteor.Error(401, "User Accounts: DANGER - reCaptcha private key leaked to client from " + loc      // 375
      + " Provide the key in server settings ONLY.");                                                               // 376
    }                                                                                                               // 377
                                                                                                                    // 378
    if (!atSiteKey && !settingsSiteKey) {                                                                           // 379
      throw new Meteor.Error(401, "User Accounts: reCaptcha site key not found! Please provide it or set showReCaptcha to false.");
    }                                                                                                               // 381
  }                                                                                                                 // 382
                                                                                                                    // 383
  // Marks AccountsTemplates as initialized                                                                         // 384
  this._initialized = true;                                                                                         // 385
};                                                                                                                  // 386
                                                                                                                    // 387
AT.prototype.linkClick = function(route) {                                                                          // 388
  if (AccountsTemplates.disabled()) {                                                                               // 389
    return;                                                                                                         // 390
  }                                                                                                                 // 391
                                                                                                                    // 392
  AccountsTemplates.setState(route);                                                                                // 393
                                                                                                                    // 394
  if (AccountsTemplates.options.focusFirstInput) {                                                                  // 395
    var firstVisibleInput = _.find(this.getFields(), function(f) {                                                  // 396
      return _.contains(f.visible, route);                                                                          // 397
    });                                                                                                             // 398
                                                                                                                    // 399
    if (firstVisibleInput) {                                                                                        // 400
      $("input#at-field-" + firstVisibleInput._id).focus();                                                         // 401
    }                                                                                                               // 402
  }                                                                                                                 // 403
};                                                                                                                  // 404
                                                                                                                    // 405
AT.prototype.logout = function() {                                                                                  // 406
  var onLogoutHook = AccountsTemplates.options.onLogoutHook;                                                        // 407
                                                                                                                    // 408
  Meteor.logout(function() {                                                                                        // 409
    if (onLogoutHook) {                                                                                             // 410
      onLogoutHook();                                                                                               // 411
    }                                                                                                               // 412
  });                                                                                                               // 413
};                                                                                                                  // 414
                                                                                                                    // 415
AT.prototype.submitCallback = function(error, state, onSuccess) {                                                   // 416
  var onSubmitHook = AccountsTemplates.options.onSubmitHook;                                                        // 417
                                                                                                                    // 418
  if (onSubmitHook) {                                                                                               // 419
    onSubmitHook(error, state);                                                                                     // 420
  }                                                                                                                 // 421
                                                                                                                    // 422
  if (error) {                                                                                                      // 423
    if (_.isObject(error.details)) {                                                                                // 424
      // If error.details is an object, we may try to set fields errors from it                                     // 425
      _.each(error.details, function(error, fieldId) {                                                              // 426
          AccountsTemplates.getField(fieldId).setError(error);                                                      // 427
      });                                                                                                           // 428
    } else {                                                                                                        // 429
      var err = "error.accounts.Unknown error";                                                                     // 430
                                                                                                                    // 431
      if (error.reason) {                                                                                           // 432
        err = error.reason;                                                                                         // 433
      }                                                                                                             // 434
                                                                                                                    // 435
      if (err.substring(0, 15) !== "error.accounts.") {                                                             // 436
        err = "error.accounts." + err;                                                                              // 437
      }                                                                                                             // 438
                                                                                                                    // 439
      AccountsTemplates.state.form.set("error", [err]);                                                             // 440
    }                                                                                                               // 441
                                                                                                                    // 442
    AccountsTemplates.setDisabled(false);                                                                           // 443
    // Possibly resets reCaptcha form                                                                               // 444
    if (state === "signUp" && AccountsTemplates.options.showReCaptcha) {                                            // 445
      grecaptcha.reset();                                                                                           // 446
    }                                                                                                               // 447
  } else {                                                                                                          // 448
    if (onSuccess) {                                                                                                // 449
      onSuccess();                                                                                                  // 450
    }                                                                                                               // 451
                                                                                                                    // 452
    if (state) {                                                                                                    // 453
      AccountsTemplates.setDisabled(false);                                                                         // 454
    }                                                                                                               // 455
  }                                                                                                                 // 456
};                                                                                                                  // 457
                                                                                                                    // 458
AccountsTemplates = new AT();                                                                                       // 459
                                                                                                                    // 460
// Initialization                                                                                                   // 461
Meteor.startup(function() {                                                                                         // 462
  AccountsTemplates._init();                                                                                        // 463
});                                                                                                                 // 464
                                                                                                                    // 465
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 1432
}).call(this);                                                                                                         // 1433
                                                                                                                       // 1434
                                                                                                                       // 1435
                                                                                                                       // 1436
                                                                                                                       // 1437
                                                                                                                       // 1438
                                                                                                                       // 1439
(function () {                                                                                                         // 1440
                                                                                                                       // 1441
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:core/lib/templates_helpers/at_error.js                                                     //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
AT.prototype.atErrorHelpers = {                                                                                     // 1
    singleError: function() {                                                                                       // 2
        var errors = AccountsTemplates.state.form.get("error");                                                     // 3
        return errors && errors.length === 1;                                                                       // 4
    },                                                                                                              // 5
    error: function() {                                                                                             // 6
        return AccountsTemplates.state.form.get("error");                                                           // 7
    },                                                                                                              // 8
    errorText: function(){                                                                                          // 9
        var field, err;                                                                                             // 10
        if (this.field){                                                                                            // 11
            field = T9n.get(this.field, markIfMissing=false);                                                       // 12
            err = T9n.get(this.err, markIfMissing=false);                                                           // 13
        }                                                                                                           // 14
        else                                                                                                        // 15
            err = T9n.get(this.valueOf(), markIfMissing=false);                                                     // 16
                                                                                                                    // 17
        // Possibly removes initial prefix in case the key in not found inside t9n                                  // 18
        if (err.substring(0, 15) === "error.accounts.")                                                             // 19
            err = err.substring(15);                                                                                // 20
                                                                                                                    // 21
        if (field)                                                                                                  // 22
            return field + ": " + err;                                                                              // 23
        return err;                                                                                                 // 24
    },                                                                                                              // 25
};                                                                                                                  // 26
                                                                                                                    // 27
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 1476
}).call(this);                                                                                                         // 1477
                                                                                                                       // 1478
                                                                                                                       // 1479
                                                                                                                       // 1480
                                                                                                                       // 1481
                                                                                                                       // 1482
                                                                                                                       // 1483
(function () {                                                                                                         // 1484
                                                                                                                       // 1485
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:core/lib/templates_helpers/at_form.js                                                      //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
AT.prototype.atFormHelpers = {                                                                                      // 1
    hide: function(){                                                                                               // 2
        var state = this.state || AccountsTemplates.getState();                                                     // 3
        return state === "hide";                                                                                    // 4
    },                                                                                                              // 5
    showTitle: function(next_state){                                                                                // 6
        var state = next_state || this.state || AccountsTemplates.getState();                                       // 7
        if (Meteor.userId() && state === "signIn")                                                                  // 8
          return false;                                                                                             // 9
        return !!AccountsTemplates.texts.title[state];                                                              // 10
    },                                                                                                              // 11
    showOauthServices: function(next_state){                                                                        // 12
        var state = next_state || this.state || AccountsTemplates.getState();                                       // 13
        if (!(state === "signIn" || state === "signUp"))                                                            // 14
            return false;                                                                                           // 15
        var services = AccountsTemplates.oauthServices();                                                           // 16
        if (!services.length)                                                                                       // 17
            return false;                                                                                           // 18
        if (Meteor.userId())                                                                                        // 19
            return AccountsTemplates.options.showAddRemoveServices;                                                 // 20
        return true;                                                                                                // 21
    },                                                                                                              // 22
    showServicesSeparator: function(next_state){                                                                    // 23
        var pwdService = Package["accounts-password"] !== undefined;                                                // 24
        var state = next_state || this.state || AccountsTemplates.getState();                                       // 25
        var rightState = (state === "signIn" || state === "signUp");                                                // 26
        return rightState && !Meteor.userId() && pwdService && AccountsTemplates.oauthServices().length;            // 27
    },                                                                                                              // 28
    showError: function(next_state) {                                                                               // 29
        return !!AccountsTemplates.state.form.get("error");                                                         // 30
    },                                                                                                              // 31
    showResult: function(next_state) {                                                                              // 32
        return !!AccountsTemplates.state.form.get("result");                                                        // 33
    },                                                                                                              // 34
    showMessage: function(next_state) {                                                                             // 35
        return !!AccountsTemplates.state.form.get("message");                                                       // 36
    },                                                                                                              // 37
    showPwdForm: function(next_state) {                                                                             // 38
        if (Package["accounts-password"] === undefined)                                                             // 39
            return false;                                                                                           // 40
        var state = next_state || this.state || AccountsTemplates.getState();                                       // 41
        if ((state === "verifyEmail") || (state === "signIn" && Meteor.userId()))                                   // 42
            return false;                                                                                           // 43
        return true;                                                                                                // 44
    },                                                                                                              // 45
    showSignInLink: function(next_state){                                                                           // 46
        if (AccountsTemplates.options.hideSignInLink)                                                               // 47
            return false;                                                                                           // 48
        var state = next_state || this.state || AccountsTemplates.getState();                                       // 49
        if (AccountsTemplates.options.forbidClientAccountCreation && state === "forgotPwd")                         // 50
            return true;                                                                                            // 51
        return state === "signUp";                                                                                  // 52
    },                                                                                                              // 53
    showSignUpLink: function(next_state){                                                                           // 54
        if  (AccountsTemplates.options.hideSignUpLink)                                                              // 55
            return false;                                                                                           // 56
        var state = next_state || this.state || AccountsTemplates.getState();                                       // 57
        return ((state === "signIn" && !Meteor.userId()) || state === "forgotPwd") && !AccountsTemplates.options.forbidClientAccountCreation;
    },                                                                                                              // 59
    showTermsLink: function(next_state){                                                                            // 60
        //TODO: Add privacyRoute and termsRoute as alternatives (the point of named routes is                       // 61
        // being able to change the url in one place only)                                                          // 62
        if (!!AccountsTemplates.options.privacyUrl || !!AccountsTemplates.options.termsUrl) {                       // 63
            var state = next_state || this.state || AccountsTemplates.getState();                                   // 64
            if (state === "signUp" || state === "enrollAccount" ) {                                                 // 65
              return true;                                                                                          // 66
            }                                                                                                       // 67
        }                                                                                                           // 68
        /*                                                                                                          // 69
        if (state === "signIn"){                                                                                    // 70
            var pwdService = Package["accounts-password"] !== undefined;                                            // 71
            if (!pwdService)                                                                                        // 72
                return true;                                                                                        // 73
        }                                                                                                           // 74
        */                                                                                                          // 75
        return false;                                                                                               // 76
    },                                                                                                              // 77
    showResendVerificationEmailLink: function(){                                                                    // 78
        var parentData = Template.currentData();                                                                    // 79
        var state = (parentData && parentData.state) || AccountsTemplates.getState();                               // 80
        return (state === "signIn" || state === "forgotPwd") && AccountsTemplates.options.showResendVerificationEmailLink;
    },                                                                                                              // 82
};                                                                                                                  // 83
                                                                                                                    // 84
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 1577
}).call(this);                                                                                                         // 1578
                                                                                                                       // 1579
                                                                                                                       // 1580
                                                                                                                       // 1581
                                                                                                                       // 1582
                                                                                                                       // 1583
                                                                                                                       // 1584
(function () {                                                                                                         // 1585
                                                                                                                       // 1586
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:core/lib/templates_helpers/at_input.js                                                     //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
AT.prototype.atInputRendered = [function(){                                                                         // 1
    var fieldId = this.data._id;                                                                                    // 2
                                                                                                                    // 3
    var parentData = Template.currentData();                                                                        // 4
    var state = (parentData && parentData.state) || AccountsTemplates.getState();                                   // 5
                                                                                                                    // 6
    if (AccountsTemplates.options.focusFirstInput) {                                                                // 7
      var firstVisibleInput = _.find(AccountsTemplates.getFields(), function(f){                                    // 8
        return _.contains(f.visible, state);                                                                        // 9
      });                                                                                                           // 10
                                                                                                                    // 11
      if (firstVisibleInput && firstVisibleInput._id === fieldId) {                                                 // 12
        this.$("input#at-field-" + fieldId).focus();                                                                // 13
      }                                                                                                             // 14
  }                                                                                                                 // 15
}];                                                                                                                 // 16
                                                                                                                    // 17
AT.prototype.atInputHelpers = {                                                                                     // 18
    disabled: function() {                                                                                          // 19
        return AccountsTemplates.disabled();                                                                        // 20
    },                                                                                                              // 21
    showLabels: function() {                                                                                        // 22
        return AccountsTemplates.options.showLabels;                                                                // 23
    },                                                                                                              // 24
    displayName: function() {                                                                                       // 25
        var parentData = Template.parentData();                                                                     // 26
        var state = (parentData && parentData.state) || AccountsTemplates.getState();                               // 27
        var displayName = this.getDisplayName(state);                                                               // 28
        return T9n.get(displayName, markIfMissing=false);                                                           // 29
    },                                                                                                              // 30
    optionalText: function(){                                                                                       // 31
        return "(" + T9n.get(AccountsTemplates.texts.optionalField, markIfMissing=false) + ")";                     // 32
    },                                                                                                              // 33
    templateName: function() {                                                                                      // 34
        if (this.template)                                                                                          // 35
            return this.template;                                                                                   // 36
        if (this.type === "checkbox")                                                                               // 37
            return "atCheckboxInput";                                                                               // 38
        if (this.type === "select")                                                                                 // 39
            return "atSelectInput";                                                                                 // 40
        if (this.type === "radio")                                                                                  // 41
            return "atRadioInput";                                                                                  // 42
        if (this.type === "hidden")                                                                                 // 43
            return "atHiddenInput";                                                                                 // 44
        return "atTextInput";                                                                                       // 45
    },                                                                                                              // 46
    values: function(){                                                                                             // 47
        var id = this._id;                                                                                          // 48
        return _.map(this.select, function(select){                                                                 // 49
            var s = _.clone(select);                                                                                // 50
            s._id = id + "-" + select.value;                                                                        // 51
            s.id = id;                                                                                              // 52
            return s;                                                                                               // 53
        });                                                                                                         // 54
    },                                                                                                              // 55
    errorText: function() {                                                                                         // 56
        var err = this.getStatus();                                                                                 // 57
        return T9n.get(err, markIfMissing=false);                                                                   // 58
    },                                                                                                              // 59
    placeholder: function() {                                                                                       // 60
        if (AccountsTemplates.options.showPlaceholders) {                                                           // 61
            var parentData = Template.parentData();                                                                 // 62
            var state = (parentData && parentData.state) || AccountsTemplates.getState();                           // 63
            var placeholder = this.getPlaceholder(state);                                                           // 64
            return T9n.get(placeholder, markIfMissing=false);                                                       // 65
        }                                                                                                           // 66
    },                                                                                                              // 67
};                                                                                                                  // 68
                                                                                                                    // 69
AT.prototype.atInputEvents = {                                                                                      // 70
    "focusin input": function(event, t){                                                                            // 71
        this.clearStatus();                                                                                         // 72
    },                                                                                                              // 73
    "focusout input": function(event, t){                                                                           // 74
        var fieldId = this._id;                                                                                     // 75
        var rawValue = this.getValue(t);                                                                            // 76
        var value = this.fixValue(rawValue);                                                                        // 77
        // Possibly updates the input value                                                                         // 78
        if (value !== rawValue) {                                                                                   // 79
            this.setValue(t, value);                                                                                // 80
        }                                                                                                           // 81
                                                                                                                    // 82
        // Client-side only validation                                                                              // 83
        if (!this.validation)                                                                                       // 84
            return;                                                                                                 // 85
        var parentData = Template.parentData();                                                                     // 86
        var state = (parentData && parentData.state) || AccountsTemplates.getState();                               // 87
        // No validation during signIn                                                                              // 88
        if (state === "signIn")                                                                                     // 89
            return;                                                                                                 // 90
        // Special case for password confirmation                                                                   // 91
        if (value && fieldId === "password_again"){                                                                 // 92
            if (value !== $("#at-field-password").val())                                                            // 93
                return this.setError(AccountsTemplates.texts.errors.pwdMismatch);                                   // 94
        }                                                                                                           // 95
        this.validate(value);                                                                                       // 96
    },                                                                                                              // 97
    "keyup input": function(event, t){                                                                              // 98
        // Client-side only continuous validation                                                                   // 99
        if (!this.continuousValidation)                                                                             // 100
            return;                                                                                                 // 101
        var parentData = Template.parentData();                                                                     // 102
        var state = (parentData && parentData.state) || AccountsTemplates.getState();                               // 103
        // No validation during signIn                                                                              // 104
        if (state === "signIn")                                                                                     // 105
            return;                                                                                                 // 106
        var fieldId = this._id;                                                                                     // 107
        var rawValue = this.getValue(t);                                                                            // 108
        var value = this.fixValue(rawValue);                                                                        // 109
        // Possibly updates the input value                                                                         // 110
        if (value !== rawValue) {                                                                                   // 111
            this.setValue(t, value);                                                                                // 112
        }                                                                                                           // 113
        // Special case for password confirmation                                                                   // 114
        if (value && fieldId === "password_again"){                                                                 // 115
            if (value !== $("#at-field-password").val())                                                            // 116
                return this.setError(AccountsTemplates.texts.errors.pwdMismatch);                                   // 117
        }                                                                                                           // 118
        this.validate(value);                                                                                       // 119
    },                                                                                                              // 120
};                                                                                                                  // 121
                                                                                                                    // 122
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 1716
}).call(this);                                                                                                         // 1717
                                                                                                                       // 1718
                                                                                                                       // 1719
                                                                                                                       // 1720
                                                                                                                       // 1721
                                                                                                                       // 1722
                                                                                                                       // 1723
(function () {                                                                                                         // 1724
                                                                                                                       // 1725
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:core/lib/templates_helpers/at_nav_button.js                                                //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
AT.prototype.atNavButtonHelpers = {                                                                                 // 1
    text: function(){                                                                                               // 2
        var key = Meteor.userId() ? AccountsTemplates.texts.navSignOut : AccountsTemplates.texts.navSignIn;         // 3
        return T9n.get(key, markIfMissing=false);                                                                   // 4
    }                                                                                                               // 5
};                                                                                                                  // 6
                                                                                                                    // 7
AT.prototype.atNavButtonEvents = {                                                                                  // 8
    'click #at-nav-button': function(event){                                                                        // 9
        event.preventDefault();                                                                                     // 10
        if (Meteor.userId())                                                                                        // 11
            AccountsTemplates.logout();                                                                             // 12
        else                                                                                                        // 13
            AccountsTemplates.linkClick("signIn");                                                                  // 14
    },                                                                                                              // 15
};                                                                                                                  // 16
                                                                                                                    // 17
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 1750
}).call(this);                                                                                                         // 1751
                                                                                                                       // 1752
                                                                                                                       // 1753
                                                                                                                       // 1754
                                                                                                                       // 1755
                                                                                                                       // 1756
                                                                                                                       // 1757
(function () {                                                                                                         // 1758
                                                                                                                       // 1759
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:core/lib/templates_helpers/at_oauth.js                                                     //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
AT.prototype.atOauthHelpers = {                                                                                     // 1
    oauthService: function() {                                                                                      // 2
        return AccountsTemplates.oauthServices();                                                                   // 3
    },                                                                                                              // 4
};                                                                                                                  // 5
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 1772
}).call(this);                                                                                                         // 1773
                                                                                                                       // 1774
                                                                                                                       // 1775
                                                                                                                       // 1776
                                                                                                                       // 1777
                                                                                                                       // 1778
                                                                                                                       // 1779
(function () {                                                                                                         // 1780
                                                                                                                       // 1781
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:core/lib/templates_helpers/at_pwd_form.js                                                  //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
AT.prototype.atPwdFormHelpers = {                                                                                   // 1
    disabled: function() {                                                                                          // 2
        return AccountsTemplates.disabled();                                                                        // 3
    },                                                                                                              // 4
    fields: function() {                                                                                            // 5
        var parentData = Template.currentData();                                                                    // 6
        var state = (parentData && parentData.state) || AccountsTemplates.getState();                               // 7
        return _.filter(AccountsTemplates.getFields(), function(s) {                                                // 8
            return _.contains(s.visible, state);                                                                    // 9
        });                                                                                                         // 10
    },                                                                                                              // 11
    showForgotPasswordLink: function() {                                                                            // 12
        var parentData = Template.currentData();                                                                    // 13
        var state = (parentData && parentData.state) || AccountsTemplates.getState();                               // 14
        return state === "signIn" && AccountsTemplates.options.showForgotPasswordLink;                              // 15
    },                                                                                                              // 16
    showReCaptcha: function() {                                                                                     // 17
      var parentData = Template.currentData();                                                                      // 18
      var state = (parentData && parentData.state) || AccountsTemplates.getState();                                 // 19
      return state === "signUp" && AccountsTemplates.options.showReCaptcha;                                         // 20
    },                                                                                                              // 21
};                                                                                                                  // 22
                                                                                                                    // 23
                                                                                                                    // 24
var toLowercaseUsername = function(value){                                                                          // 25
  return value.toLowerCase().replace(/\s+/gm, '');                                                                  // 26
};                                                                                                                  // 27
                                                                                                                    // 28
AT.prototype.atPwdFormEvents = {                                                                                    // 29
    // Form submit                                                                                                  // 30
    "submit #at-pwd-form": function(event, t) {                                                                     // 31
        event.preventDefault();                                                                                     // 32
        t.$("#at-btn").blur();                                                                                      // 33
                                                                                                                    // 34
        AccountsTemplates.setDisabled(true);                                                                        // 35
                                                                                                                    // 36
        var parentData = Template.currentData();                                                                    // 37
        var state = (parentData && parentData.state) || AccountsTemplates.getState();                               // 38
        var preValidation = (state !== "signIn");                                                                   // 39
                                                                                                                    // 40
        // Client-side pre-validation                                                                               // 41
        // Validates fields values                                                                                  // 42
        // NOTE: This is the only place where password validation can be enforced!                                  // 43
        var formData = {};                                                                                          // 44
        var someError = false;                                                                                      // 45
        var errList = [];                                                                                           // 46
        _.each(AccountsTemplates.getFields(), function(field){                                                      // 47
            // Considers only visible fields...                                                                     // 48
            if (!_.contains(field.visible, state))                                                                  // 49
                return;                                                                                             // 50
                                                                                                                    // 51
            var fieldId = field._id;                                                                                // 52
                                                                                                                    // 53
            var rawValue = field.getValue(t);                                                                       // 54
            var value = field.fixValue(rawValue);                                                                   // 55
            // Possibly updates the input value                                                                     // 56
            if (value !== rawValue) {                                                                               // 57
                field.setValue(t, value);                                                                           // 58
            }                                                                                                       // 59
            if (value !== undefined && value !== "") {                                                              // 60
                formData[fieldId] = value;                                                                          // 61
            }                                                                                                       // 62
                                                                                                                    // 63
            // Validates the field value only if current state is not "signIn"                                      // 64
            if (preValidation && field.getStatus() !== false){                                                      // 65
                var validationErr = field.validate(value, "strict");                                                // 66
                if (validationErr) {                                                                                // 67
                    if (field.negativeValidation)                                                                   // 68
                        field.setError(validationErr);                                                              // 69
                    else{                                                                                           // 70
                        var fId = T9n.get(field.getDisplayName(), markIfMissing=false);                             // 71
                        //errList.push(fId + ": " + err);                                                           // 72
                        errList.push({                                                                              // 73
                            field: field.getDisplayName(),                                                          // 74
                            err: validationErr                                                                      // 75
                        });                                                                                         // 76
                    }                                                                                               // 77
                    someError = true;                                                                               // 78
                }                                                                                                   // 79
                else                                                                                                // 80
                    field.setSuccess();                                                                             // 81
            }                                                                                                       // 82
        });                                                                                                         // 83
                                                                                                                    // 84
        // Clears error and result                                                                                  // 85
        AccountsTemplates.clearError();                                                                             // 86
        AccountsTemplates.clearResult();                                                                            // 87
        AccountsTemplates.clearMessage();                                                                           // 88
        // Possibly sets errors                                                                                     // 89
        if (someError){                                                                                             // 90
            if (errList.length)                                                                                     // 91
                AccountsTemplates.state.form.set("error", errList);                                                 // 92
            AccountsTemplates.setDisabled(false);                                                                   // 93
            //reset reCaptcha form                                                                                  // 94
            if (state === "signUp" && AccountsTemplates.options.showReCaptcha) {                                    // 95
                grecaptcha.reset();                                                                                 // 96
            }                                                                                                       // 97
            return;                                                                                                 // 98
        }                                                                                                           // 99
                                                                                                                    // 100
        // Extracts username, email, and pwds                                                                       // 101
        var current_password = formData.current_password;                                                           // 102
        var email = formData.email;                                                                                 // 103
        var password = formData.password;                                                                           // 104
        var password_again = formData.password_again;                                                               // 105
        var username = formData.username;                                                                           // 106
        var username_and_email = formData.username_and_email;                                                       // 107
        // Clears profile data removing username, email, and pwd                                                    // 108
        delete formData.current_password;                                                                           // 109
        delete formData.email;                                                                                      // 110
        delete formData.password;                                                                                   // 111
        delete formData.password_again;                                                                             // 112
        delete formData.username;                                                                                   // 113
        delete formData.username_and_email;                                                                         // 114
                                                                                                                    // 115
        if (AccountsTemplates.options.confirmPassword){                                                             // 116
            // Checks passwords for correct match                                                                   // 117
            if (password_again && password !== password_again){                                                     // 118
                var pwd_again = AccountsTemplates.getField("password_again");                                       // 119
                if (pwd_again.negativeValidation)                                                                   // 120
                    pwd_again.setError(AccountsTemplates.texts.errors.pwdMismatch);                                 // 121
                else                                                                                                // 122
                    AccountsTemplates.state.form.set("error", [{                                                    // 123
                        field: pwd_again.getDisplayName(),                                                          // 124
                        err: AccountsTemplates.texts.errors.pwdMismatch                                             // 125
                    }]);                                                                                            // 126
                AccountsTemplates.setDisabled(false);                                                               // 127
                //reset reCaptcha form                                                                              // 128
                if (state === "signUp" && AccountsTemplates.options.showReCaptcha) {                                // 129
                  grecaptcha.reset();                                                                               // 130
                }                                                                                                   // 131
                return;                                                                                             // 132
            }                                                                                                       // 133
        }                                                                                                           // 134
                                                                                                                    // 135
        // -------                                                                                                  // 136
        // Sign In                                                                                                  // 137
        // -------                                                                                                  // 138
        if (state === "signIn") {                                                                                   // 139
            var pwdOk = !!password;                                                                                 // 140
            var userOk = true;                                                                                      // 141
            var loginSelector;                                                                                      // 142
            if (email) {                                                                                            // 143
                if (AccountsTemplates.options.lowercaseUsername) {                                                  // 144
                  email = toLowercaseUsername(email);                                                               // 145
                }                                                                                                   // 146
                                                                                                                    // 147
                loginSelector = {email: email};                                                                     // 148
            }                                                                                                       // 149
            else if (username) {                                                                                    // 150
                if (AccountsTemplates.options.lowercaseUsername) {                                                  // 151
                  username = toLowercaseUsername(username);                                                         // 152
                }                                                                                                   // 153
                loginSelector = {username: username};                                                               // 154
            }                                                                                                       // 155
            else if (username_and_email) {                                                                          // 156
                if (AccountsTemplates.options.lowercaseUsername) {                                                  // 157
                  username_and_email = toLowercaseUsername(username_and_email);                                     // 158
                }                                                                                                   // 159
                loginSelector = username_and_email;                                                                 // 160
            }                                                                                                       // 161
            else                                                                                                    // 162
                userOk = false;                                                                                     // 163
                                                                                                                    // 164
            // Possibly exits if not both 'password' and 'username' are non-empty...                                // 165
            if (!pwdOk || !userOk){                                                                                 // 166
                AccountsTemplates.state.form.set("error", [AccountsTemplates.texts.errors.loginForbidden]);         // 167
                AccountsTemplates.setDisabled(false);                                                               // 168
                return;                                                                                             // 169
            }                                                                                                       // 170
                                                                                                                    // 171
                                                                                                                    // 172
            return Meteor.loginWithPassword(loginSelector, password, function(error) {                              // 173
                AccountsTemplates.submitCallback(error, state);                                                     // 174
            });                                                                                                     // 175
        }                                                                                                           // 176
                                                                                                                    // 177
        // -------                                                                                                  // 178
        // Sign Up                                                                                                  // 179
        // -------                                                                                                  // 180
        if (state === "signUp") {                                                                                   // 181
            // Possibly gets reCaptcha response                                                                     // 182
            if (AccountsTemplates.options.showReCaptcha) {                                                          // 183
              formData.reCaptchaResponse = grecaptcha.getResponse();                                                // 184
            }                                                                                                       // 185
                                                                                                                    // 186
            var hash = Accounts._hashPassword(password);                                                            // 187
            var options = {                                                                                         // 188
                username: username,                                                                                 // 189
                email: email,                                                                                       // 190
                password: hash,                                                                                     // 191
                profile: formData,                                                                                  // 192
            };                                                                                                      // 193
                                                                                                                    // 194
            // Call preSignUpHook, if any...                                                                        // 195
            var preSignUpHook = AccountsTemplates.options.preSignUpHook;                                            // 196
            if (preSignUpHook) {                                                                                    // 197
              preSignUpHook(password, options);                                                                     // 198
            }                                                                                                       // 199
                                                                                                                    // 200
            return Meteor.call("ATCreateUserServer", options, function(error){                                      // 201
                AccountsTemplates.submitCallback(error, undefined, function(){                                      // 202
                    if (AccountsTemplates.options.sendVerificationEmail && AccountsTemplates.options.enforceEmailVerification){
                        AccountsTemplates.submitCallback(error, state, function () {                                // 204
                            AccountsTemplates.state.form.set("result", AccountsTemplates.texts.info.signUpVerifyEmail);
                            // Cleans up input fields' content                                                      // 206
                            _.each(AccountsTemplates.getFields(), function(field){                                  // 207
                                // Considers only visible fields...                                                 // 208
                                if (!_.contains(field.visible, state))                                              // 209
                                    return;                                                                         // 210
                                                                                                                    // 211
                                var elem = t.$("#at-field-" + field._id);                                           // 212
                                                                                                                    // 213
                                // Naïve reset                                                                      // 214
                                if (field.type === "checkbox") elem.prop('checked', false);                         // 215
                                else elem.val("");                                                                  // 216
                                                                                                                    // 217
                            });                                                                                     // 218
                            AccountsTemplates.setDisabled(false);                                                   // 219
                            AccountsTemplates.avoidRedirect = true;                                                 // 220
                        });                                                                                         // 221
                    }                                                                                               // 222
                    else {                                                                                          // 223
                        var loginSelector;                                                                          // 224
                                                                                                                    // 225
                        if (email) {                                                                                // 226
                            if (AccountsTemplates.options.lowercaseUsername) {                                      // 227
                              email = toLowercaseUsername(email);                                                   // 228
                            }                                                                                       // 229
                                                                                                                    // 230
                            loginSelector = {email: email};                                                         // 231
                        }                                                                                           // 232
                        else if (username) {                                                                        // 233
                            if (AccountsTemplates.options.lowercaseUsername) {                                      // 234
                              username = toLowercaseUsername(username);                                             // 235
                            }                                                                                       // 236
                            loginSelector = {username: username};                                                   // 237
                        }                                                                                           // 238
                        else {                                                                                      // 239
                            if (AccountsTemplates.options.lowercaseUsername) {                                      // 240
                              username_and_email = toLowercaseUsername(username_and_email);                         // 241
                            }                                                                                       // 242
                            loginSelector = username_and_email;                                                     // 243
                        }                                                                                           // 244
                                                                                                                    // 245
                        Meteor.loginWithPassword(loginSelector, password, function(error) {                         // 246
                            AccountsTemplates.submitCallback(error, state, function(){                              // 247
                                AccountsTemplates.setState("signIn");                                               // 248
                            });                                                                                     // 249
                        });                                                                                         // 250
                    }                                                                                               // 251
                });                                                                                                 // 252
            });                                                                                                     // 253
        }                                                                                                           // 254
                                                                                                                    // 255
        //----------------                                                                                          // 256
        // Forgot Password                                                                                          // 257
        //----------------                                                                                          // 258
        if (state === "forgotPwd"){                                                                                 // 259
            return Accounts.forgotPassword({                                                                        // 260
                email: email                                                                                        // 261
            }, function(error) {                                                                                    // 262
                AccountsTemplates.submitCallback(error, state, function(){                                          // 263
                    AccountsTemplates.state.form.set("result", AccountsTemplates.texts.info.emailSent);             // 264
                    t.$("#at-field-email").val("");                                                                 // 265
                });                                                                                                 // 266
            });                                                                                                     // 267
        }                                                                                                           // 268
                                                                                                                    // 269
        //--------------------------------                                                                          // 270
        // Reset Password / Enroll Account                                                                          // 271
        //--------------------------------                                                                          // 272
        if (state === "resetPwd" || state === "enrollAccount") {                                                    // 273
            var paramToken = AccountsTemplates.getparamToken();                                                     // 274
            return Accounts.resetPassword(paramToken, password, function(error) {                                   // 275
                AccountsTemplates.submitCallback(error, state, function(){                                          // 276
                    var pwd_field_id;                                                                               // 277
                    if (state === "resetPwd")                                                                       // 278
                        AccountsTemplates.state.form.set("result", AccountsTemplates.texts.info.pwdReset);          // 279
                    else // Enroll Account                                                                          // 280
                        AccountsTemplates.state.form.set("result", AccountsTemplates.texts.info.pwdSet);            // 281
                    t.$("#at-field-password").val("");                                                              // 282
                    if (AccountsTemplates.options.confirmPassword)                                                  // 283
                        t.$("#at-field-password_again").val("");                                                    // 284
                });                                                                                                 // 285
            });                                                                                                     // 286
        }                                                                                                           // 287
                                                                                                                    // 288
        //----------------                                                                                          // 289
        // Change Password                                                                                          // 290
        //----------------                                                                                          // 291
        if (state === "changePwd"){                                                                                 // 292
            return Accounts.changePassword(current_password, password, function(error) {                            // 293
                AccountsTemplates.submitCallback(error, state, function(){                                          // 294
                    AccountsTemplates.state.form.set("result", AccountsTemplates.texts.info.pwdChanged);            // 295
                    t.$("#at-field-current_password").val("");                                                      // 296
                    t.$("#at-field-password").val("");                                                              // 297
                    if (AccountsTemplates.options.confirmPassword)                                                  // 298
                        t.$("#at-field-password_again").val("");                                                    // 299
                });                                                                                                 // 300
            });                                                                                                     // 301
        }                                                                                                           // 302
                                                                                                                    // 303
        //----------------                                                                                          // 304
        // Resend Verification E-mail                                                                               // 305
        //----------------                                                                                          // 306
        if (state === "resendVerificationEmail"){                                                                   // 307
            return Meteor.call("ATResendVerificationEmail", email, function (error) {                               // 308
                AccountsTemplates.submitCallback(error, state, function(){                                          // 309
                    AccountsTemplates.state.form.set("result", AccountsTemplates.texts.info.verificationEmailSent); // 310
                    t.$("#at-field-email").val("");                                                                 // 311
                                                                                                                    // 312
                    AccountsTemplates.avoidRedirect = true;                                                         // 313
                });                                                                                                 // 314
            });                                                                                                     // 315
        }                                                                                                           // 316
    },                                                                                                              // 317
};                                                                                                                  // 318
                                                                                                                    // 319
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 2108
}).call(this);                                                                                                         // 2109
                                                                                                                       // 2110
                                                                                                                       // 2111
                                                                                                                       // 2112
                                                                                                                       // 2113
                                                                                                                       // 2114
                                                                                                                       // 2115
(function () {                                                                                                         // 2116
                                                                                                                       // 2117
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:core/lib/templates_helpers/at_pwd_form_btn.js                                              //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
AT.prototype.atPwdFormBtnHelpers = {                                                                                // 1
    submitDisabled: function(){                                                                                     // 2
        var disable = _.chain(AccountsTemplates.getFields())                                                        // 3
            .map(function(field){                                                                                   // 4
                return field.hasError() || field.isValidating();                                                    // 5
            })                                                                                                      // 6
            .some()                                                                                                 // 7
            .value()                                                                                                // 8
        ;                                                                                                           // 9
        if (disable)                                                                                                // 10
            return "disabled";                                                                                      // 11
    },                                                                                                              // 12
    buttonText: function() {                                                                                        // 13
        var parentData = Template.currentData();                                                                    // 14
        var state = (parentData && parentData.state) || AccountsTemplates.getState();                               // 15
        return T9n.get(AccountsTemplates.texts.button[state], markIfMissing=false);                                 // 16
    },                                                                                                              // 17
};                                                                                                                  // 18
                                                                                                                    // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 2144
}).call(this);                                                                                                         // 2145
                                                                                                                       // 2146
                                                                                                                       // 2147
                                                                                                                       // 2148
                                                                                                                       // 2149
                                                                                                                       // 2150
                                                                                                                       // 2151
(function () {                                                                                                         // 2152
                                                                                                                       // 2153
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:core/lib/templates_helpers/at_pwd_link.js                                                  //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
AT.prototype.atPwdLinkHelpers = {                                                                                   // 1
    disabled: function() {                                                                                          // 2
        return AccountsTemplates.disabled();                                                                        // 3
    },                                                                                                              // 4
    forgotPwdLink: function(){                                                                                      // 5
        return AccountsTemplates.getRoutePath("forgotPwd");                                                         // 6
    },                                                                                                              // 7
    preText: function(){                                                                                            // 8
        return T9n.get(AccountsTemplates.texts.pwdLink_pre, markIfMissing=false);                                   // 9
    },                                                                                                              // 10
    linkText: function(){                                                                                           // 11
        return T9n.get(AccountsTemplates.texts.pwdLink_link, markIfMissing=false);                                  // 12
    },                                                                                                              // 13
    suffText: function(){                                                                                           // 14
        return T9n.get(AccountsTemplates.texts.pwdLink_suff, markIfMissing=false);                                  // 15
    },                                                                                                              // 16
};                                                                                                                  // 17
                                                                                                                    // 18
AT.prototype.atPwdLinkEvents = {                                                                                    // 19
    "click #at-forgotPwd": function(event, t) {                                                                     // 20
        event.preventDefault();                                                                                     // 21
        AccountsTemplates.linkClick("forgotPwd");                                                                   // 22
    },                                                                                                              // 23
};                                                                                                                  // 24
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 2185
}).call(this);                                                                                                         // 2186
                                                                                                                       // 2187
                                                                                                                       // 2188
                                                                                                                       // 2189
                                                                                                                       // 2190
                                                                                                                       // 2191
                                                                                                                       // 2192
(function () {                                                                                                         // 2193
                                                                                                                       // 2194
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:core/lib/templates_helpers/at_reCaptcha.js                                                 //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
AT.prototype.atReCaptchaRendered = function() {                                                                     // 1
    $.getScript('//www.google.com/recaptcha/api.js');                                                               // 2
};                                                                                                                  // 3
                                                                                                                    // 4
AT.prototype.atReCaptchaHelpers = {                                                                                 // 5
    key: function() {                                                                                               // 6
        if (AccountsTemplates.options.reCaptcha && AccountsTemplates.options.reCaptcha.siteKey)                     // 7
            return AccountsTemplates.options.reCaptcha.siteKey;                                                     // 8
        return Meteor.settings.public.reCaptcha.siteKey;                                                            // 9
    },                                                                                                              // 10
                                                                                                                    // 11
    theme: function() {                                                                                             // 12
        return AccountsTemplates.options.reCaptcha && AccountsTemplates.options.reCaptcha.theme;                    // 13
    },                                                                                                              // 14
                                                                                                                    // 15
    data_type: function() {                                                                                         // 16
        return AccountsTemplates.options.reCaptcha && AccountsTemplates.options.reCaptcha.data_type;                // 17
    },                                                                                                              // 18
};                                                                                                                  // 19
                                                                                                                    // 20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 2222
}).call(this);                                                                                                         // 2223
                                                                                                                       // 2224
                                                                                                                       // 2225
                                                                                                                       // 2226
                                                                                                                       // 2227
                                                                                                                       // 2228
                                                                                                                       // 2229
(function () {                                                                                                         // 2230
                                                                                                                       // 2231
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:core/lib/templates_helpers/at_resend_verification_email_link.js                            //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
AT.prototype.atResendVerificationEmailLinkHelpers = {                                                               // 1
    disabled: function () {                                                                                         // 2
        return AccountsTemplates.disabled();                                                                        // 3
    },                                                                                                              // 4
    resendVerificationEmailLink: function () {                                                                      // 5
        return AccountsTemplates.getRoutePath("resendVerificationEmail");                                           // 6
    },                                                                                                              // 7
    preText: function(){                                                                                            // 8
        return T9n.get(AccountsTemplates.texts.resendVerificationEmailLink_pre, markIfMissing=false);               // 9
    },                                                                                                              // 10
    linkText: function(){                                                                                           // 11
        return T9n.get(AccountsTemplates.texts.resendVerificationEmailLink_link, markIfMissing=false);              // 12
    },                                                                                                              // 13
    suffText: function(){                                                                                           // 14
        return T9n.get(AccountsTemplates.texts.resendVerificationEmailLink_suff, markIfMissing=false);              // 15
    },                                                                                                              // 16
};                                                                                                                  // 17
                                                                                                                    // 18
AT.prototype.atResendVerificationEmailLinkEvents = {                                                                // 19
    "click #at-resend-verification-email": function(event, t) {                                                     // 20
        event.preventDefault();                                                                                     // 21
        AccountsTemplates.linkClick('resendVerificationEmail');                                                     // 22
    },                                                                                                              // 23
};                                                                                                                  // 24
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 2263
}).call(this);                                                                                                         // 2264
                                                                                                                       // 2265
                                                                                                                       // 2266
                                                                                                                       // 2267
                                                                                                                       // 2268
                                                                                                                       // 2269
                                                                                                                       // 2270
(function () {                                                                                                         // 2271
                                                                                                                       // 2272
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:core/lib/templates_helpers/at_result.js                                                    //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
AT.prototype.atResultHelpers = {                                                                                    // 1
    result: function() {                                                                                            // 2
        var resultText = AccountsTemplates.state.form.get("result");                                                // 3
        if (resultText)                                                                                             // 4
            return T9n.get(resultText, markIfMissing=false);                                                        // 5
    },                                                                                                              // 6
};                                                                                                                  // 7
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 2287
}).call(this);                                                                                                         // 2288
                                                                                                                       // 2289
                                                                                                                       // 2290
                                                                                                                       // 2291
                                                                                                                       // 2292
                                                                                                                       // 2293
                                                                                                                       // 2294
(function () {                                                                                                         // 2295
                                                                                                                       // 2296
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:core/lib/templates_helpers/at_sep.js                                                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
AT.prototype.atSepHelpers = {                                                                                       // 1
    sepText: function(){                                                                                            // 2
        return T9n.get(AccountsTemplates.texts.sep, markIfMissing=false);                                           // 3
    },                                                                                                              // 4
};                                                                                                                  // 5
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 2309
}).call(this);                                                                                                         // 2310
                                                                                                                       // 2311
                                                                                                                       // 2312
                                                                                                                       // 2313
                                                                                                                       // 2314
                                                                                                                       // 2315
                                                                                                                       // 2316
(function () {                                                                                                         // 2317
                                                                                                                       // 2318
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:core/lib/templates_helpers/at_signin_link.js                                               //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
AT.prototype.atSigninLinkHelpers = {                                                                                // 1
    disabled: function() {                                                                                          // 2
        return AccountsTemplates.disabled();                                                                        // 3
    },                                                                                                              // 4
    signInLink: function(){                                                                                         // 5
        return AccountsTemplates.getRoutePath("signIn");                                                            // 6
    },                                                                                                              // 7
    preText: function(){                                                                                            // 8
        return T9n.get(AccountsTemplates.texts.signInLink_pre, markIfMissing=false);                                // 9
    },                                                                                                              // 10
    linkText: function(){                                                                                           // 11
        return T9n.get(AccountsTemplates.texts.signInLink_link, markIfMissing=false);                               // 12
    },                                                                                                              // 13
    suffText: function(){                                                                                           // 14
        return T9n.get(AccountsTemplates.texts.signInLink_suff, markIfMissing=false);                               // 15
    },                                                                                                              // 16
};                                                                                                                  // 17
                                                                                                                    // 18
AT.prototype.atSigninLinkEvents = {                                                                                 // 19
    "click #at-signIn": function(event, t) {                                                                        // 20
        event.preventDefault();                                                                                     // 21
        AccountsTemplates.linkClick("signIn");                                                                      // 22
    },                                                                                                              // 23
};                                                                                                                  // 24
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 2350
}).call(this);                                                                                                         // 2351
                                                                                                                       // 2352
                                                                                                                       // 2353
                                                                                                                       // 2354
                                                                                                                       // 2355
                                                                                                                       // 2356
                                                                                                                       // 2357
(function () {                                                                                                         // 2358
                                                                                                                       // 2359
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:core/lib/templates_helpers/at_signup_link.js                                               //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
AT.prototype.atSignupLinkHelpers = {                                                                                // 1
    disabled: function() {                                                                                          // 2
        return AccountsTemplates.disabled();                                                                        // 3
    },                                                                                                              // 4
    signUpLink: function(){                                                                                         // 5
        return AccountsTemplates.getRoutePath("signUp");                                                            // 6
    },                                                                                                              // 7
    preText: function(){                                                                                            // 8
        return T9n.get(AccountsTemplates.texts.signUpLink_pre, markIfMissing=false);                                // 9
    },                                                                                                              // 10
    linkText: function(){                                                                                           // 11
        return T9n.get(AccountsTemplates.texts.signUpLink_link, markIfMissing=false);                               // 12
    },                                                                                                              // 13
    suffText: function(){                                                                                           // 14
        return T9n.get(AccountsTemplates.texts.signUpLink_suff, markIfMissing=false);                               // 15
    },                                                                                                              // 16
};                                                                                                                  // 17
                                                                                                                    // 18
AT.prototype.atSignupLinkEvents = {                                                                                 // 19
    "click #at-signUp": function(event, t) {                                                                        // 20
        event.preventDefault();                                                                                     // 21
        AccountsTemplates.linkClick('signUp');                                                                      // 22
    },                                                                                                              // 23
};                                                                                                                  // 24
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 2391
}).call(this);                                                                                                         // 2392
                                                                                                                       // 2393
                                                                                                                       // 2394
                                                                                                                       // 2395
                                                                                                                       // 2396
                                                                                                                       // 2397
                                                                                                                       // 2398
(function () {                                                                                                         // 2399
                                                                                                                       // 2400
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:core/lib/templates_helpers/at_social.js                                                    //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
AT.prototype.atSocialHelpers = {                                                                                    // 1
    disabled: function() {                                                                                          // 2
        if (AccountsTemplates.disabled())                                                                           // 3
            return "disabled";                                                                                      // 4
        var user = Meteor.user();                                                                                   // 5
        if (user){                                                                                                  // 6
            var numServices = 0;                                                                                    // 7
            if (user.services)                                                                                      // 8
                numServices = _.keys(user.services).length; // including "resume"                                   // 9
            if (numServices === 2 && user.services[this._id])                                                       // 10
                return "disabled";                                                                                  // 11
        }                                                                                                           // 12
    },                                                                                                              // 13
    name: function(){                                                                                               // 14
        return this._id;                                                                                            // 15
    },                                                                                                              // 16
    iconClass: function() {                                                                                         // 17
        var ic = AccountsTemplates.texts.socialIcons[this._id];                                                     // 18
        if (!ic)                                                                                                    // 19
            ic = "fa fa-" + this._id;                                                                               // 20
        return ic;                                                                                                  // 21
    },                                                                                                              // 22
    buttonText: function() {                                                                                        // 23
        var service = this;                                                                                         // 24
        var serviceName = this._id;                                                                                 // 25
        if (serviceName === "meteor-developer")                                                                     // 26
            serviceName = "meteor";                                                                                 // 27
        serviceName = capitalize(serviceName);                                                                      // 28
        if (!service.configured)                                                                                    // 29
            return T9n.get(AccountsTemplates.texts.socialConfigure, markIfMissing=false) + " " + serviceName;       // 30
        var showAddRemove = AccountsTemplates.options.showAddRemoveServices;                                        // 31
        var user = Meteor.user();                                                                                   // 32
        if (user && showAddRemove){                                                                                 // 33
            if (user.services && user.services[this._id]){                                                          // 34
                var numServices = _.keys(user.services).length; // including "resume"                               // 35
                if (numServices === 2)                                                                              // 36
                    return serviceName;                                                                             // 37
                else                                                                                                // 38
                    return T9n.get(AccountsTemplates.texts.socialRemove, markIfMissing=false) + " " + serviceName;  // 39
            } else                                                                                                  // 40
                    return T9n.get(AccountsTemplates.texts.socialAdd, markIfMissing=false) + " " + serviceName;     // 41
        }                                                                                                           // 42
        var parentData = Template.parentData();                                                                     // 43
        var state = (parentData && parentData.state) || AccountsTemplates.getState();                               // 44
        var prefix = state === "signIn" ?                                                                           // 45
            T9n.get(AccountsTemplates.texts.socialSignIn, markIfMissing=false) :                                    // 46
            T9n.get(AccountsTemplates.texts.socialSignUp, markIfMissing=false);                                     // 47
        return prefix + " " + T9n.get(AccountsTemplates.texts.socialWith, markIfMissing=false) + " " + serviceName; // 48
    },                                                                                                              // 49
};                                                                                                                  // 50
                                                                                                                    // 51
AT.prototype.atSocialEvents = {                                                                                     // 52
    "click button": function(event, t) {                                                                            // 53
        event.preventDefault();                                                                                     // 54
        event.currentTarget.blur();                                                                                 // 55
        if (AccountsTemplates.disabled())                                                                           // 56
            return;                                                                                                 // 57
        var user = Meteor.user();                                                                                   // 58
        if (user && user.services && user.services[this._id]){                                                      // 59
            var numServices = _.keys(user.services).length; // including "resume"                                   // 60
            if (numServices === 2)                                                                                  // 61
                return;                                                                                             // 62
            else{                                                                                                   // 63
                AccountsTemplates.setDisabled(true);                                                                // 64
                Meteor.call("ATRemoveService", this._id, function(error){                                           // 65
                    AccountsTemplates.setDisabled(false);                                                           // 66
                });                                                                                                 // 67
            }                                                                                                       // 68
        } else {                                                                                                    // 69
            AccountsTemplates.setDisabled(true);                                                                    // 70
            var parentData = Template.parentData();                                                                 // 71
            var state = (parentData && parentData.state) || AccountsTemplates.getState();                           // 72
            var serviceName = this._id;                                                                             // 73
            var methodName;                                                                                         // 74
            if (serviceName === 'meteor-developer')                                                                 // 75
                methodName = "loginWithMeteorDeveloperAccount";                                                     // 76
            else                                                                                                    // 77
                methodName = "loginWith" + capitalize(serviceName);                                                 // 78
            var loginWithService = Meteor[methodName];                                                              // 79
            options = {                                                                                             // 80
                loginStyle: AccountsTemplates.options.socialLoginStyle,                                             // 81
            };                                                                                                      // 82
            if (Accounts.ui) {                                                                                      // 83
                if (Accounts.ui._options.requestPermissions[serviceName]) {                                         // 84
                    options.requestPermissions = Accounts.ui._options.requestPermissions[serviceName];              // 85
                }                                                                                                   // 86
                if (Accounts.ui._options.requestOfflineToken[serviceName]) {                                        // 87
                    options.requestOfflineToken = Accounts.ui._options.requestOfflineToken[serviceName];            // 88
                }                                                                                                   // 89
            }                                                                                                       // 90
            loginWithService(options, function(err) {                                                               // 91
                AccountsTemplates.setDisabled(false);                                                               // 92
                if (err && err instanceof Accounts.LoginCancelledError) {                                           // 93
                    // do nothing                                                                                   // 94
                }                                                                                                   // 95
                else if (err && err instanceof ServiceConfiguration.ConfigError) {                                  // 96
                    if (Accounts._loginButtonsSession)                                                              // 97
                        return Accounts._loginButtonsSession.configureService(serviceName);                         // 98
                }                                                                                                   // 99
                else                                                                                                // 100
                    AccountsTemplates.submitCallback(err, state);                                                   // 101
            });                                                                                                     // 102
        }                                                                                                           // 103
    },                                                                                                              // 104
};                                                                                                                  // 105
                                                                                                                    // 106
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 2514
}).call(this);                                                                                                         // 2515
                                                                                                                       // 2516
                                                                                                                       // 2517
                                                                                                                       // 2518
                                                                                                                       // 2519
                                                                                                                       // 2520
                                                                                                                       // 2521
(function () {                                                                                                         // 2522
                                                                                                                       // 2523
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:core/lib/templates_helpers/at_terms_link.js                                                //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
AT.prototype.atTermsLinkHelpers = {                                                                                 // 1
    disabled: function() {                                                                                          // 2
        return AccountsTemplates.disabled();                                                                        // 3
    },                                                                                                              // 4
    text: function(){                                                                                               // 5
        return T9n.get(AccountsTemplates.texts.termsPreamble, markIfMissing=false);                                 // 6
    },                                                                                                              // 7
    privacyUrl: function(){                                                                                         // 8
        return AccountsTemplates.options.privacyUrl;                                                                // 9
    },                                                                                                              // 10
    privacyLinkText: function(){                                                                                    // 11
        return T9n.get(AccountsTemplates.texts.termsPrivacy, markIfMissing=false);                                  // 12
    },                                                                                                              // 13
    showTermsAnd: function(){                                                                                       // 14
        return !!AccountsTemplates.options.privacyUrl && !!AccountsTemplates.options.termsUrl;                      // 15
    },                                                                                                              // 16
    and: function(){                                                                                                // 17
        return T9n.get(AccountsTemplates.texts.termsAnd, markIfMissing=false);                                      // 18
    },                                                                                                              // 19
    termsUrl: function(){                                                                                           // 20
        return AccountsTemplates.options.termsUrl;                                                                  // 21
    },                                                                                                              // 22
    termsLinkText: function(){                                                                                      // 23
        return T9n.get(AccountsTemplates.texts.termsTerms, markIfMissing=false);                                    // 24
    },                                                                                                              // 25
};                                                                                                                  // 26
                                                                                                                    // 27
AT.prototype.atTermsLinkEvents = {                                                                                  // 28
    "click a": function(event) {                                                                                    // 29
        if (AccountsTemplates.disabled())                                                                           // 30
            event.preventDefault();                                                                                 // 31
    },                                                                                                              // 32
};                                                                                                                  // 33
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 2564
}).call(this);                                                                                                         // 2565
                                                                                                                       // 2566
                                                                                                                       // 2567
                                                                                                                       // 2568
                                                                                                                       // 2569
                                                                                                                       // 2570
                                                                                                                       // 2571
(function () {                                                                                                         // 2572
                                                                                                                       // 2573
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:core/lib/templates_helpers/at_title.js                                                     //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
AT.prototype.atTitleHelpers = {                                                                                     // 1
  title: function() {                                                                                               // 2
    var parentData = Template.currentData();                                                                        // 3
    var state = (parentData && parentData.state) || AccountsTemplates.getState();                                   // 4
    return T9n.get(AccountsTemplates.texts.title[state], markIfMissing = false);                                    // 5
  },                                                                                                                // 6
};                                                                                                                  // 7
                                                                                                                    // 8
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 2589
}).call(this);                                                                                                         // 2590
                                                                                                                       // 2591
                                                                                                                       // 2592
                                                                                                                       // 2593
                                                                                                                       // 2594
                                                                                                                       // 2595
                                                                                                                       // 2596
(function () {                                                                                                         // 2597
                                                                                                                       // 2598
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:core/lib/templates_helpers/at_message.js                                                   //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
AT.prototype.atMessageHelpers = {                                                                                   // 1
    message: function() {                                                                                           // 2
        var messageText = AccountsTemplates.state.form.get("message");                                              // 3
        if (messageText)                                                                                            // 4
            return T9n.get(messageText, markIfMissing=false);                                                       // 5
    },                                                                                                              // 6
};                                                                                                                  // 7
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 2613
}).call(this);                                                                                                         // 2614
                                                                                                                       // 2615
                                                                                                                       // 2616
                                                                                                                       // 2617
                                                                                                                       // 2618
                                                                                                                       // 2619
                                                                                                                       // 2620
(function () {                                                                                                         // 2621
                                                                                                                       // 2622
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:core/lib/templates_helpers/template.ensure_signed_in.js                                    //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("ensureSignedIn");                                                                             // 2
Template["ensureSignedIn"] = new Template("Template.ensureSignedIn", (function() {                                  // 3
  var view = this;                                                                                                  // 4
  return Blaze.If(function() {                                                                                      // 5
    return Spacebars.call(view.lookup("signedIn"));                                                                 // 6
  }, function() {                                                                                                   // 7
    return [ "\n    ", Blaze._TemplateWith(function() {                                                             // 8
      return {                                                                                                      // 9
        template: Spacebars.call(view.lookup("template"))                                                           // 10
      };                                                                                                            // 11
    }, function() {                                                                                                 // 12
      return Spacebars.include(function() {                                                                         // 13
        return Spacebars.call(Template.__dynamic);                                                                  // 14
      });                                                                                                           // 15
    }), "\n  " ];                                                                                                   // 16
  }, function() {                                                                                                   // 17
    return [ "\n    ", Blaze.If(function() {                                                                        // 18
      return Spacebars.call(view.lookup("auth"));                                                                   // 19
    }, function() {                                                                                                 // 20
      return [ "\n      ", Blaze._TemplateWith(function() {                                                         // 21
        return {                                                                                                    // 22
          template: Spacebars.call(view.lookup("auth"))                                                             // 23
        };                                                                                                          // 24
      }, function() {                                                                                               // 25
        return Spacebars.include(function() {                                                                       // 26
          return Spacebars.call(Template.__dynamic);                                                                // 27
        });                                                                                                         // 28
      }), "\n    " ];                                                                                               // 29
    }, function() {                                                                                                 // 30
      return [ "\n      ", Spacebars.include(view.lookupTemplate("fullPageAtForm")), "\n    " ];                    // 31
    }), "\n  " ];                                                                                                   // 32
  });                                                                                                               // 33
}));                                                                                                                // 34
                                                                                                                    // 35
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 2665
}).call(this);                                                                                                         // 2666
                                                                                                                       // 2667
                                                                                                                       // 2668
                                                                                                                       // 2669
                                                                                                                       // 2670
                                                                                                                       // 2671
                                                                                                                       // 2672
(function () {                                                                                                         // 2673
                                                                                                                       // 2674
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:core/lib/templates_helpers/ensure_signed_in.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.ensureSignedIn.helpers({                                                                                   // 2
  signedIn: function () {                                                                                           // 3
    if (!Meteor.user()) {                                                                                           // 4
      AccountsTemplates.setState(AccountsTemplates.options.defaultState, function(){                                // 5
        var err = AccountsTemplates.texts.errors.mustBeLoggedIn;                                                    // 6
        AccountsTemplates.state.form.set('error', [err]);                                                           // 7
      });                                                                                                           // 8
      return false;                                                                                                 // 9
    } else {                                                                                                        // 10
      AccountsTemplates.clearError();                                                                               // 11
      return true;                                                                                                  // 12
    }                                                                                                               // 13
  }                                                                                                                 // 14
});                                                                                                                 // 15
                                                                                                                    // 16
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 2698
}).call(this);                                                                                                         // 2699
                                                                                                                       // 2700
                                                                                                                       // 2701
                                                                                                                       // 2702
                                                                                                                       // 2703
                                                                                                                       // 2704
                                                                                                                       // 2705
(function () {                                                                                                         // 2706
                                                                                                                       // 2707
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:core/lib/methods.js                                                                        //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
/* global                                                                                                           // 1
  AccountsTemplates: false                                                                                          // 2
*/                                                                                                                  // 3
"use strict";                                                                                                       // 4
                                                                                                                    // 5
Meteor.methods({                                                                                                    // 6
  ATRemoveService: function(serviceName) {                                                                          // 7
    check(serviceName, String);                                                                                     // 8
                                                                                                                    // 9
    var userId = this.userId;                                                                                       // 10
                                                                                                                    // 11
    if (userId) {                                                                                                   // 12
      var user = Meteor.users.findOne(userId);                                                                      // 13
      var numServices = _.keys(user.services).length; // including "resume"                                         // 14
      var unset = {};                                                                                               // 15
                                                                                                                    // 16
      if (numServices === 2) {                                                                                      // 17
        throw new Meteor.Error(403, AccountsTemplates.texts.errors.cannotRemoveService, {});                        // 18
      }                                                                                                             // 19
                                                                                                                    // 20
      unset["services." + serviceName] = "";                                                                        // 21
      Meteor.users.update(userId, {$unset: unset});                                                                 // 22
    }                                                                                                               // 23
  },                                                                                                                // 24
});                                                                                                                 // 25
                                                                                                                    // 26
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 2741
}).call(this);                                                                                                         // 2742
                                                                                                                       // 2743
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['useraccounts:core'] = {
  AccountsTemplates: AccountsTemplates
};

})();
