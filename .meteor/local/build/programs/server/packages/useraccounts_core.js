(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var Accounts = Package['accounts-base'].Accounts;
var AccountsServer = Package['accounts-base'].AccountsServer;
var check = Package.check.check;
var Match = Package.check.Match;
var _ = Package.underscore._;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var HTTP = Package.http.HTTP;
var HTTPInternals = Package.http.HTTPInternals;

/* Package-scope variables */
var Field, STATE_PAT, ERRORS_PAT, INFO_PAT, INPUT_ICONS_PAT, ObjWithStringValues, TEXTS_PAT, CONFIG_PAT, FIELD_SUB_PAT, FIELD_PAT, AT, AccountsTemplates;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/useraccounts_core/packages/useraccounts_core.js                                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
(function () {                                                                                                        // 1
                                                                                                                      // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                                             //     // 4
// packages/useraccounts:core/lib/field.js                                                                     //     // 5
//                                                                                                             //     // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                                               //     // 8
// ---------------------------------------------------------------------------------                           // 1   // 9
// Field object                                                                                                // 2   // 10
// ---------------------------------------------------------------------------------                           // 3   // 11
                                                                                                               // 4   // 12
Field = function(field) {                                                                                      // 5   // 13
  check(field, FIELD_PAT);                                                                                     // 6   // 14
  _.defaults(this, field);                                                                                     // 7   // 15
                                                                                                               // 8   // 16
  this.validating = new ReactiveVar(false);                                                                    // 9   // 17
  this.status = new ReactiveVar(null);                                                                         // 10  // 18
};                                                                                                             // 11  // 19
                                                                                                               // 12  // 20
if (Meteor.isClient) {                                                                                         // 13  // 21
  Field.prototype.clearStatus = function() {                                                                   // 14  // 22
    return this.status.set(null);                                                                              // 15  // 23
  };                                                                                                           // 16  // 24
}                                                                                                              // 17  // 25
                                                                                                               // 18  // 26
if (Meteor.isServer) {                                                                                         // 19  // 27
  Field.prototype.clearStatus = function() {                                                                   // 20  // 28
    // Nothing to do server-side                                                                               // 21  // 29
    return;                                                                                                    // 22  // 30
  };                                                                                                           // 23  // 31
}                                                                                                              // 24  // 32
                                                                                                               // 25  // 33
Field.prototype.fixValue = function(value) {                                                                   // 26  // 34
  if (this.type === "checkbox") {                                                                              // 27  // 35
    return !!value;                                                                                            // 28  // 36
  }                                                                                                            // 29  // 37
                                                                                                               // 30  // 38
  if (this.type === "select") {                                                                                // 31  // 39
    // TODO: something working...                                                                              // 32  // 40
    return value;                                                                                              // 33  // 41
  }                                                                                                            // 34  // 42
                                                                                                               // 35  // 43
  if (this.type === "radio") {                                                                                 // 36  // 44
    // TODO: something working...                                                                              // 37  // 45
    return value;                                                                                              // 38  // 46
  }                                                                                                            // 39  // 47
                                                                                                               // 40  // 48
  // Possibly applies required transformations to the input value                                              // 41  // 49
  if (this.trim) {                                                                                             // 42  // 50
    value = value.trim();                                                                                      // 43  // 51
  }                                                                                                            // 44  // 52
                                                                                                               // 45  // 53
  if (this.lowercase) {                                                                                        // 46  // 54
    value = value.toLowerCase();                                                                               // 47  // 55
  }                                                                                                            // 48  // 56
                                                                                                               // 49  // 57
  if (this.uppercase) {                                                                                        // 50  // 58
    value = value.toUpperCase();                                                                               // 51  // 59
  }                                                                                                            // 52  // 60
                                                                                                               // 53  // 61
  if (!!this.transform) {                                                                                      // 54  // 62
    value = this.transform(value);                                                                             // 55  // 63
  }                                                                                                            // 56  // 64
                                                                                                               // 57  // 65
  return value;                                                                                                // 58  // 66
};                                                                                                             // 59  // 67
                                                                                                               // 60  // 68
if (Meteor.isClient) {                                                                                         // 61  // 69
  Field.prototype.getDisplayName = function(state) {                                                           // 62  // 70
    var displayName = this.displayName;                                                                        // 63  // 71
                                                                                                               // 64  // 72
    if (_.isFunction(displayName)) {                                                                           // 65  // 73
      displayName = displayName();                                                                             // 66  // 74
    } else if (_.isObject(displayName)) {                                                                      // 67  // 75
      displayName = displayName[state] || displayName["default"];                                              // 68  // 76
    }                                                                                                          // 69  // 77
                                                                                                               // 70  // 78
    if (!displayName) {                                                                                        // 71  // 79
      displayName = capitalize(this._id);                                                                      // 72  // 80
    }                                                                                                          // 73  // 81
                                                                                                               // 74  // 82
    return displayName;                                                                                        // 75  // 83
  };                                                                                                           // 76  // 84
}                                                                                                              // 77  // 85
                                                                                                               // 78  // 86
if (Meteor.isClient) {                                                                                         // 79  // 87
  Field.prototype.getPlaceholder = function(state) {                                                           // 80  // 88
    var placeholder = this.placeholder;                                                                        // 81  // 89
                                                                                                               // 82  // 90
    if (_.isObject(placeholder)) {                                                                             // 83  // 91
      placeholder = placeholder[state] || placeholder["default"];                                              // 84  // 92
    }                                                                                                          // 85  // 93
                                                                                                               // 86  // 94
    if (!placeholder) {                                                                                        // 87  // 95
      placeholder = capitalize(this._id);                                                                      // 88  // 96
    }                                                                                                          // 89  // 97
                                                                                                               // 90  // 98
    return placeholder;                                                                                        // 91  // 99
  };                                                                                                           // 92  // 100
}                                                                                                              // 93  // 101
                                                                                                               // 94  // 102
Field.prototype.getStatus = function() {                                                                       // 95  // 103
  return this.status.get();                                                                                    // 96  // 104
};                                                                                                             // 97  // 105
                                                                                                               // 98  // 106
if (Meteor.isClient) {                                                                                         // 99  // 107
  Field.prototype.getValue = function(tempalteInstance) {                                                      // 100
    if (this.type === "checkbox") {                                                                            // 101
      return !!(tempalteInstance.$("#at-field-" + this._id + ":checked").val());                               // 102
    }                                                                                                          // 103
                                                                                                               // 104
    if (this.type === "radio") {                                                                               // 105
      return tempalteInstance.$("[name=at-field-"+ this._id + "]:checked").val();                              // 106
    }                                                                                                          // 107
                                                                                                               // 108
    return tempalteInstance.$("#at-field-" + this._id).val();                                                  // 109
  };                                                                                                           // 110
}                                                                                                              // 111
                                                                                                               // 112
if (Meteor.isClient) {                                                                                         // 113
  Field.prototype.hasError = function() {                                                                      // 114
    return this.negativeValidation && this.status.get();                                                       // 115
  };                                                                                                           // 116
}                                                                                                              // 117
                                                                                                               // 118
if (Meteor.isClient) {                                                                                         // 119
  Field.prototype.hasIcon = function() {                                                                       // 120
    if (this.showValidating && this.isValidating()) {                                                          // 121
      return true;                                                                                             // 122
    }                                                                                                          // 123
                                                                                                               // 124
    if (this.negativeFeedback && this.hasError()) {                                                            // 125
      return true;                                                                                             // 126
    }                                                                                                          // 127
                                                                                                               // 128
    if (this.positiveFeedback && this.hasSuccess()) {                                                          // 129
      return true;                                                                                             // 130
    }                                                                                                          // 131
  };                                                                                                           // 132
}                                                                                                              // 133
                                                                                                               // 134
if (Meteor.isClient) {                                                                                         // 135
  Field.prototype.hasSuccess = function() {                                                                    // 136
    return this.positiveValidation && this.status.get() === false;                                             // 137
  };                                                                                                           // 138
}                                                                                                              // 139
                                                                                                               // 140
if (Meteor.isClient)                                                                                           // 141
  Field.prototype.iconClass = function() {                                                                     // 142
    if (this.isValidating()) {                                                                                 // 143
      return AccountsTemplates.texts.inputIcons["isValidating"];                                               // 144
    }                                                                                                          // 145
                                                                                                               // 146
    if (this.hasError()) {                                                                                     // 147
      return AccountsTemplates.texts.inputIcons["hasError"];                                                   // 148
    }                                                                                                          // 149
                                                                                                               // 150
    if (this.hasSuccess()) {                                                                                   // 151
      return AccountsTemplates.texts.inputIcons["hasSuccess"];                                                 // 152
    }                                                                                                          // 153
  };                                                                                                           // 154
                                                                                                               // 155
if (Meteor.isClient) {                                                                                         // 156
  Field.prototype.isValidating = function() {                                                                  // 157
    return this.validating.get();                                                                              // 158
  };                                                                                                           // 159
}                                                                                                              // 160
                                                                                                               // 161
if (Meteor.isClient) {                                                                                         // 162
  Field.prototype.setError = function(err) {                                                                   // 163
    check(err, Match.OneOf(String, undefined, Boolean));                                                       // 164
                                                                                                               // 165
    if (err === false) {                                                                                       // 166
      return this.status.set(false);                                                                           // 167
    }                                                                                                          // 168
                                                                                                               // 169
    return this.status.set(err || true);                                                                       // 170
  };                                                                                                           // 171
}                                                                                                              // 172
                                                                                                               // 173
if (Meteor.isServer) {                                                                                         // 174
  Field.prototype.setError = function(err) {                                                                   // 175
    // Nothing to do server-side                                                                               // 176
    return;                                                                                                    // 177
  };                                                                                                           // 178
}                                                                                                              // 179
                                                                                                               // 180
if (Meteor.isClient) {                                                                                         // 181
  Field.prototype.setSuccess = function() {                                                                    // 182
    return this.status.set(false);                                                                             // 183
  };                                                                                                           // 184
}                                                                                                              // 185
                                                                                                               // 186
if (Meteor.isServer) {                                                                                         // 187
  Field.prototype.setSuccess = function() {                                                                    // 188
    // Nothing to do server-side                                                                               // 189
    return;                                                                                                    // 190
  };                                                                                                           // 191
}                                                                                                              // 192
                                                                                                               // 193
if (Meteor.isClient) {                                                                                         // 194
  Field.prototype.setValidating = function(state) {                                                            // 195
    check(state, Boolean);                                                                                     // 196
    return this.validating.set(state);                                                                         // 197
  };                                                                                                           // 198
}                                                                                                              // 199
                                                                                                               // 200
if (Meteor.isServer) {                                                                                         // 201
  Field.prototype.setValidating = function(state) {                                                            // 202
    // Nothing to do server-side                                                                               // 203
    return;                                                                                                    // 204
  };                                                                                                           // 205
}                                                                                                              // 206
                                                                                                               // 207
if (Meteor.isClient) {                                                                                         // 208
  Field.prototype.setValue = function(tempalteInstance, value) {                                               // 209
    if (this.type === "checkbox") {                                                                            // 210
      tempalteInstance.$("#at-field-" + this._id).prop('checked', true);                                       // 211
      return;                                                                                                  // 212
    }                                                                                                          // 213
                                                                                                               // 214
    if (this.type === "radio") {                                                                               // 215
      tempalteInstance.$("[name=at-field-"+ this._id + "]").prop('checked', true);                             // 216
      return;                                                                                                  // 217
    }                                                                                                          // 218
                                                                                                               // 219
    tempalteInstance.$("#at-field-" + this._id).val(value);                                                    // 220
  };                                                                                                           // 221
}                                                                                                              // 222
                                                                                                               // 223
Field.prototype.validate = function(value, strict) {                                                           // 224
  check(value, Match.OneOf(undefined, String, Boolean));                                                       // 225
  this.setValidating(true);                                                                                    // 226
  this.clearStatus();                                                                                          // 227
                                                                                                               // 228
  if (_.isUndefined(value) || value === '') {                                                                  // 229
    if (!!strict) {                                                                                            // 230
      if (this.required) {                                                                                     // 231
        this.setError(AccountsTemplates.texts.requiredField);                                                  // 232
        this.setValidating(false);                                                                             // 233
                                                                                                               // 234
        return AccountsTemplates.texts.requiredField;                                                          // 235
      } else {                                                                                                 // 236
        this.setSuccess();                                                                                     // 237
        this.setValidating(false);                                                                             // 238
                                                                                                               // 239
        return false;                                                                                          // 240
      }                                                                                                        // 241
    } else {                                                                                                   // 242
      this.clearStatus();                                                                                      // 243
      this.setValidating(false);                                                                               // 244
                                                                                                               // 245
      return null;                                                                                             // 246
    }                                                                                                          // 247
  }                                                                                                            // 248
                                                                                                               // 249
  var valueLength = value.length;                                                                              // 250
  var minLength = this.minLength;                                                                              // 251
  if (minLength && valueLength < minLength) {                                                                  // 252
    this.setError(AccountsTemplates.texts.minRequiredLength + ": " + minLength);                               // 253
    this.setValidating(false);                                                                                 // 254
                                                                                                               // 255
    return AccountsTemplates.texts.minRequiredLength + ": " + minLength;                                       // 256
  }                                                                                                            // 257
                                                                                                               // 258
  var maxLength = this.maxLength;                                                                              // 259
  if (maxLength && valueLength > maxLength) {                                                                  // 260
    this.setError(AccountsTemplates.texts.maxAllowedLength + ": " + maxLength);                                // 261
    this.setValidating(false);                                                                                 // 262
                                                                                                               // 263
    return AccountsTemplates.texts.maxAllowedLength + ": " + maxLength;                                        // 264
  }                                                                                                            // 265
                                                                                                               // 266
  if (this.re && valueLength && !value.match(this.re)) {                                                       // 267
    this.setError(this.errStr);                                                                                // 268
    this.setValidating(false);                                                                                 // 269
                                                                                                               // 270
    return this.errStr;                                                                                        // 271
  }                                                                                                            // 272
                                                                                                               // 273
  if (this.func) {                                                                                             // 274
    var result = this.func(value);                                                                             // 275
    var err = result === true ? this.errStr || true : result;                                                  // 276
                                                                                                               // 277
    if (_.isUndefined(result)) {                                                                               // 278
      return err;                                                                                              // 279
    }                                                                                                          // 280
                                                                                                               // 281
    this.status.set(err);                                                                                      // 282
    this.setValidating(false);                                                                                 // 283
                                                                                                               // 284
    return err;                                                                                                // 285
  }                                                                                                            // 286
                                                                                                               // 287
  this.setSuccess();                                                                                           // 288
  this.setValidating(false);                                                                                   // 289
                                                                                                               // 290
  return false;                                                                                                // 291
};                                                                                                             // 292
                                                                                                               // 293
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 302
                                                                                                                      // 303
}).call(this);                                                                                                        // 304
                                                                                                                      // 305
                                                                                                                      // 306
                                                                                                                      // 307
                                                                                                                      // 308
                                                                                                                      // 309
                                                                                                                      // 310
(function () {                                                                                                        // 311
                                                                                                                      // 312
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 313
//                                                                                                             //     // 314
// packages/useraccounts:core/lib/core.js                                                                      //     // 315
//                                                                                                             //     // 316
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 317
                                                                                                               //     // 318
// ---------------------------------------------------------------------------------                           // 1   // 319
// Patterns for methods" parameters                                                                            // 2   // 320
// ---------------------------------------------------------------------------------                           // 3   // 321
                                                                                                               // 4   // 322
STATE_PAT = {                                                                                                  // 5   // 323
  changePwd: Match.Optional(String),                                                                           // 6   // 324
  enrollAccount: Match.Optional(String),                                                                       // 7   // 325
  forgotPwd: Match.Optional(String),                                                                           // 8   // 326
  resetPwd: Match.Optional(String),                                                                            // 9   // 327
  signIn: Match.Optional(String),                                                                              // 10  // 328
  signUp: Match.Optional(String),                                                                              // 11  // 329
  verifyEmail: Match.Optional(String),                                                                         // 12  // 330
  resendVerificationEmail: Match.Optional(String),                                                             // 13  // 331
};                                                                                                             // 14  // 332
                                                                                                               // 15  // 333
ERRORS_PAT = {                                                                                                 // 16  // 334
  accountsCreationDisabled: Match.Optional(String),                                                            // 17  // 335
  cannotRemoveService: Match.Optional(String),                                                                 // 18  // 336
  captchaVerification: Match.Optional(String),                                                                 // 19  // 337
  loginForbidden: Match.Optional(String),                                                                      // 20  // 338
  mustBeLoggedIn: Match.Optional(String),                                                                      // 21  // 339
  pwdMismatch: Match.Optional(String),                                                                         // 22  // 340
  validationErrors: Match.Optional(String),                                                                    // 23  // 341
  verifyEmailFirst: Match.Optional(String),                                                                    // 24  // 342
};                                                                                                             // 25  // 343
                                                                                                               // 26  // 344
INFO_PAT = {                                                                                                   // 27  // 345
  emailSent: Match.Optional(String),                                                                           // 28  // 346
  emailVerified: Match.Optional(String),                                                                       // 29  // 347
  pwdChanged: Match.Optional(String),                                                                          // 30  // 348
  pwdReset: Match.Optional(String),                                                                            // 31  // 349
  pwdSet: Match.Optional(String),                                                                              // 32  // 350
  signUpVerifyEmail: Match.Optional(String),                                                                   // 33  // 351
  verificationEmailSent: Match.Optional(String),                                                               // 34  // 352
};                                                                                                             // 35  // 353
                                                                                                               // 36  // 354
INPUT_ICONS_PAT = {                                                                                            // 37  // 355
  hasError: Match.Optional(String),                                                                            // 38  // 356
  hasSuccess: Match.Optional(String),                                                                          // 39  // 357
  isValidating: Match.Optional(String),                                                                        // 40  // 358
};                                                                                                             // 41  // 359
                                                                                                               // 42  // 360
ObjWithStringValues = Match.Where(function (x) {                                                               // 43  // 361
  check(x, Object);                                                                                            // 44  // 362
  _.each(_.values(x), function(value) {                                                                        // 45  // 363
      check(value, String);                                                                                    // 46  // 364
  });                                                                                                          // 47  // 365
  return true;                                                                                                 // 48  // 366
});                                                                                                            // 49  // 367
                                                                                                               // 50  // 368
TEXTS_PAT = {                                                                                                  // 51  // 369
  button: Match.Optional(STATE_PAT),                                                                           // 52  // 370
  errors: Match.Optional(ERRORS_PAT),                                                                          // 53  // 371
  info: Match.Optional(INFO_PAT),                                                                              // 54  // 372
  inputIcons: Match.Optional(INPUT_ICONS_PAT),                                                                 // 55  // 373
  maxAllowedLength: Match.Optional(String),                                                                    // 56  // 374
  minRequiredLength: Match.Optional(String),                                                                   // 57  // 375
  navSignIn: Match.Optional(String),                                                                           // 58  // 376
  navSignOut: Match.Optional(String),                                                                          // 59  // 377
  optionalField: Match.Optional(String),                                                                       // 60  // 378
  pwdLink_link: Match.Optional(String),                                                                        // 61  // 379
  pwdLink_pre: Match.Optional(String),                                                                         // 62  // 380
  pwdLink_suff: Match.Optional(String),                                                                        // 63  // 381
  requiredField: Match.Optional(String),                                                                       // 64  // 382
  resendVerificationEmailLink_pre: Match.Optional(String),                                                     // 65  // 383
  resendVerificationEmailLink_link: Match.Optional(String),                                                    // 66  // 384
  resendVerificationEmailLink_suff: Match.Optional(String),                                                    // 67  // 385
  sep: Match.Optional(String),                                                                                 // 68  // 386
  signInLink_link: Match.Optional(String),                                                                     // 69  // 387
  signInLink_pre: Match.Optional(String),                                                                      // 70  // 388
  signInLink_suff: Match.Optional(String),                                                                     // 71  // 389
  signUpLink_link: Match.Optional(String),                                                                     // 72  // 390
  signUpLink_pre: Match.Optional(String),                                                                      // 73  // 391
  signUpLink_suff: Match.Optional(String),                                                                     // 74  // 392
  socialAdd: Match.Optional(String),                                                                           // 75  // 393
  socialConfigure: Match.Optional(String),                                                                     // 76  // 394
  socialIcons: Match.Optional(ObjWithStringValues),                                                            // 77  // 395
  socialRemove: Match.Optional(String),                                                                        // 78  // 396
  socialSignIn: Match.Optional(String),                                                                        // 79  // 397
  socialSignUp: Match.Optional(String),                                                                        // 80  // 398
  socialWith: Match.Optional(String),                                                                          // 81  // 399
  termsAnd: Match.Optional(String),                                                                            // 82  // 400
  termsPreamble: Match.Optional(String),                                                                       // 83  // 401
  termsPrivacy: Match.Optional(String),                                                                        // 84  // 402
  termsTerms: Match.Optional(String),                                                                          // 85  // 403
  title: Match.Optional(STATE_PAT),                                                                            // 86  // 404
};                                                                                                             // 87  // 405
                                                                                                               // 88  // 406
// Configuration pattern to be checked with check                                                              // 89  // 407
CONFIG_PAT = {                                                                                                 // 90  // 408
  // Behaviour                                                                                                 // 91  // 409
  confirmPassword: Match.Optional(Boolean),                                                                    // 92  // 410
  defaultState: Match.Optional(String),                                                                        // 93  // 411
  enablePasswordChange: Match.Optional(Boolean),                                                               // 94  // 412
  enforceEmailVerification: Match.Optional(Boolean),                                                           // 95  // 413
  focusFirstInput: Match.Optional(Boolean),                                                                    // 96  // 414
  forbidClientAccountCreation: Match.Optional(Boolean),                                                        // 97  // 415
  lowercaseUsername: Match.Optional(Boolean),                                                                  // 98  // 416
  overrideLoginErrors: Match.Optional(Boolean),                                                                // 99  // 417
  sendVerificationEmail: Match.Optional(Boolean),                                                              // 100
  socialLoginStyle: Match.Optional(Match.OneOf("popup", "redirect")),                                          // 101
                                                                                                               // 102
  // Appearance                                                                                                // 103
  defaultLayout: Match.Optional(String),                                                                       // 104
  hideSignInLink: Match.Optional(Boolean),                                                                     // 105
  hideSignUpLink: Match.Optional(Boolean),                                                                     // 106
  showAddRemoveServices: Match.Optional(Boolean),                                                              // 107
  showForgotPasswordLink: Match.Optional(Boolean),                                                             // 108
  showResendVerificationEmailLink: Match.Optional(Boolean),                                                    // 109
  showLabels: Match.Optional(Boolean),                                                                         // 110
  showPlaceholders: Match.Optional(Boolean),                                                                   // 111
                                                                                                               // 112
  // Client-side Validation                                                                                    // 113
  continuousValidation: Match.Optional(Boolean),                                                               // 114
  negativeFeedback: Match.Optional(Boolean),                                                                   // 115
  negativeValidation: Match.Optional(Boolean),                                                                 // 116
  positiveFeedback: Match.Optional(Boolean),                                                                   // 117
  positiveValidation: Match.Optional(Boolean),                                                                 // 118
  showValidating: Match.Optional(Boolean),                                                                     // 119
                                                                                                               // 120
  // Privacy Policy and Terms of Use                                                                           // 121
  privacyUrl: Match.Optional(String),                                                                          // 122
  termsUrl: Match.Optional(String),                                                                            // 123
                                                                                                               // 124
  // Redirects                                                                                                 // 125
  homeRoutePath: Match.Optional(String),                                                                       // 126
  redirectTimeout: Match.Optional(Number),                                                                     // 127
                                                                                                               // 128
  // Hooks                                                                                                     // 129
  onLogoutHook: Match.Optional(Function),                                                                      // 130
  onSubmitHook: Match.Optional(Function),                                                                      // 131
  preSignUpHook: Match.Optional(Function),                                                                     // 132
                                                                                                               // 133
  texts: Match.Optional(TEXTS_PAT),                                                                            // 134
                                                                                                               // 135
  //reCaptcha config                                                                                           // 136
  reCaptcha: Match.Optional({                                                                                  // 137
    data_type: Match.Optional(Match.OneOf("audio", "image")),                                                  // 138
    secretKey: Match.Optional(String),                                                                         // 139
    siteKey: Match.Optional(String),                                                                           // 140
    theme: Match.Optional(Match.OneOf("dark", "light")),                                                       // 141
  }),                                                                                                          // 142
                                                                                                               // 143
  showReCaptcha: Match.Optional(Boolean),                                                                      // 144
};                                                                                                             // 145
                                                                                                               // 146
                                                                                                               // 147
FIELD_SUB_PAT = {                                                                                              // 148
  "default": Match.Optional(String),                                                                           // 149
  changePwd: Match.Optional(String),                                                                           // 150
  enrollAccount: Match.Optional(String),                                                                       // 151
  forgotPwd: Match.Optional(String),                                                                           // 152
  resetPwd: Match.Optional(String),                                                                            // 153
  signIn: Match.Optional(String),                                                                              // 154
  signUp: Match.Optional(String),                                                                              // 155
};                                                                                                             // 156
                                                                                                               // 157
                                                                                                               // 158
// Field pattern                                                                                               // 159
FIELD_PAT = {                                                                                                  // 160
  _id: String,                                                                                                 // 161
  type: String,                                                                                                // 162
  required: Match.Optional(Boolean),                                                                           // 163
  displayName: Match.Optional(Match.OneOf(String, Match.Where(_.isFunction), FIELD_SUB_PAT)),                  // 164
  placeholder: Match.Optional(Match.OneOf(String, FIELD_SUB_PAT)),                                             // 165
  select: Match.Optional([{text: String, value: Match.Any}]),                                                  // 166
  minLength: Match.Optional(Match.Integer),                                                                    // 167
  maxLength: Match.Optional(Match.Integer),                                                                    // 168
  re: Match.Optional(RegExp),                                                                                  // 169
  func: Match.Optional(Match.Where(_.isFunction)),                                                             // 170
  errStr: Match.Optional(String),                                                                              // 171
                                                                                                               // 172
  // Client-side Validation                                                                                    // 173
  continuousValidation: Match.Optional(Boolean),                                                               // 174
  negativeFeedback: Match.Optional(Boolean),                                                                   // 175
  negativeValidation: Match.Optional(Boolean),                                                                 // 176
  positiveValidation: Match.Optional(Boolean),                                                                 // 177
  positiveFeedback: Match.Optional(Boolean),                                                                   // 178
                                                                                                               // 179
  // Transforms                                                                                                // 180
  trim: Match.Optional(Boolean),                                                                               // 181
  lowercase: Match.Optional(Boolean),                                                                          // 182
  uppercase: Match.Optional(Boolean),                                                                          // 183
  transform: Match.Optional(Match.Where(_.isFunction)),                                                        // 184
                                                                                                               // 185
  // Custom options                                                                                            // 186
  options: Match.Optional(Object),                                                                             // 187
  template: Match.Optional(String),                                                                            // 188
};                                                                                                             // 189
                                                                                                               // 190
// -----------------------------------------------------------------------------                               // 191
// AccountsTemplates object                                                                                    // 192
// -----------------------------------------------------------------------------                               // 193
                                                                                                               // 194
// -------------------                                                                                         // 195
// Client/Server stuff                                                                                         // 196
// -------------------                                                                                         // 197
                                                                                                               // 198
// Constructor                                                                                                 // 199
AT = function() {                                                                                              // 200
                                                                                                               // 201
};                                                                                                             // 202
                                                                                                               // 203
AT.prototype.CONFIG_PAT = CONFIG_PAT;                                                                          // 204
                                                                                                               // 205
/*                                                                                                             // 206
  Each field object is represented by the following properties:                                                // 207
    _id:         String   (required)  // A unique field"s id / name                                            // 208
    type:        String   (required)  // Displayed input type                                                  // 209
    required:    Boolean  (optional)  // Specifies Whether to fail or not when field is left empty             // 210
    displayName: String   (optional)  // The field"s name to be displayed as a label above the input element   // 211
    placeholder: String   (optional)  // The placeholder text to be displayed inside the input element         // 212
    minLength:   Integer  (optional)  // Possibly specifies the minimum allowed length                         // 213
    maxLength:   Integer  (optional)  // Possibly specifies the maximum allowed length                         // 214
    re:          RegExp   (optional)  // Regular expression for validation                                     // 215
    func:        Function (optional)  // Custom function for validation                                        // 216
    errStr:      String   (optional)  // Error message to be displayed in case re validation fails             // 217
*/                                                                                                             // 218
                                                                                                               // 219
                                                                                                               // 220
// Allowed input types                                                                                         // 221
AT.prototype.INPUT_TYPES = [                                                                                   // 222
  "checkbox",                                                                                                  // 223
  "email",                                                                                                     // 224
  "hidden",                                                                                                    // 225
  "password",                                                                                                  // 226
  "radio",                                                                                                     // 227
  "select",                                                                                                    // 228
  "tel",                                                                                                       // 229
  "text",                                                                                                      // 230
  "url",                                                                                                       // 231
];                                                                                                             // 232
                                                                                                               // 233
// Current configuration values                                                                                // 234
AT.prototype.options = {                                                                                       // 235
  // Appearance                                                                                                // 236
  //defaultLayout: undefined,                                                                                  // 237
  showAddRemoveServices: false,                                                                                // 238
  showForgotPasswordLink: false,                                                                               // 239
  showResendVerificationEmailLink: false,                                                                      // 240
  showLabels: true,                                                                                            // 241
  showPlaceholders: true,                                                                                      // 242
                                                                                                               // 243
  // Behaviour                                                                                                 // 244
  confirmPassword: true,                                                                                       // 245
  defaultState: "signIn",                                                                                      // 246
  enablePasswordChange: false,                                                                                 // 247
  focusFirstInput: true,                                                                                       // 248
  forbidClientAccountCreation: false,                                                                          // 249
  lowercaseUsername: false,                                                                                    // 250
  overrideLoginErrors: true,                                                                                   // 251
  sendVerificationEmail: false,                                                                                // 252
  socialLoginStyle: "popup",                                                                                   // 253
                                                                                                               // 254
  // Client-side Validation                                                                                    // 255
  //continuousValidation: false,                                                                               // 256
  //negativeFeedback: false,                                                                                   // 257
  //negativeValidation: false,                                                                                 // 258
  //positiveValidation: false,                                                                                 // 259
  //positiveFeedback: false,                                                                                   // 260
  //showValidating: false,                                                                                     // 261
                                                                                                               // 262
  // Privacy Policy and Terms of Use                                                                           // 263
  privacyUrl: undefined,                                                                                       // 264
  termsUrl: undefined,                                                                                         // 265
                                                                                                               // 266
  // Hooks                                                                                                     // 267
  onSubmitHook: undefined,                                                                                     // 268
};                                                                                                             // 269
                                                                                                               // 270
AT.prototype.texts = {                                                                                         // 271
  button: {                                                                                                    // 272
    changePwd: "updateYourPassword",                                                                           // 273
    //enrollAccount: "createAccount",                                                                          // 274
    enrollAccount: "signUp",                                                                                   // 275
    forgotPwd: "emailResetLink",                                                                               // 276
    resetPwd: "setPassword",                                                                                   // 277
    signIn: "signIn",                                                                                          // 278
    signUp: "signUp",                                                                                          // 279
    resendVerificationEmail: "Send email again",                                                               // 280
  },                                                                                                           // 281
  errors: {                                                                                                    // 282
    accountsCreationDisabled: "Client side accounts creation is disabled!!!",                                  // 283
    cannotRemoveService: "Cannot remove the only active service!",                                             // 284
    captchaVerification: "Captcha verification failed!",                                                       // 285
    loginForbidden: "error.accounts.Login forbidden",                                                          // 286
    mustBeLoggedIn: "error.accounts.Must be logged in",                                                        // 287
    pwdMismatch: "error.pwdsDontMatch",                                                                        // 288
    validationErrors: "Validation Errors",                                                                     // 289
    verifyEmailFirst: "Please verify your email first. Check the email and follow the link!",                  // 290
  },                                                                                                           // 291
  navSignIn: 'signIn',                                                                                         // 292
  navSignOut: 'signOut',                                                                                       // 293
  info: {                                                                                                      // 294
    emailSent: "info.emailSent",                                                                               // 295
    emailVerified: "info.emailVerified",                                                                       // 296
    pwdChanged: "info.passwordChanged",                                                                        // 297
    pwdReset: "info.passwordReset",                                                                            // 298
    pwdSet: "Password Set",                                                                                    // 299
    signUpVerifyEmail: "Successful Registration! Please check your email and follow the instructions.",        // 300
    verificationEmailSent: "A new email has been sent to you. If the email doesn't show up in your inbox, be sure to check your spam folder.",
  },                                                                                                           // 302
  inputIcons: {                                                                                                // 303
    isValidating: "fa fa-spinner fa-spin",                                                                     // 304
    hasSuccess: "fa fa-check",                                                                                 // 305
    hasError: "fa fa-times",                                                                                   // 306
  },                                                                                                           // 307
  maxAllowedLength: "Maximum allowed length",                                                                  // 308
  minRequiredLength: "Minimum required length",                                                                // 309
  optionalField: "optional",                                                                                   // 310
  pwdLink_pre: "",                                                                                             // 311
  pwdLink_link: "forgotPassword",                                                                              // 312
  pwdLink_suff: "",                                                                                            // 313
  requiredField: "Required Field",                                                                             // 314
  resendVerificationEmailLink_pre: "Verification email lost?",                                                 // 315
  resendVerificationEmailLink_link: "Send again",                                                              // 316
  resendVerificationEmailLink_suff: "",                                                                        // 317
  sep: "OR",                                                                                                   // 318
  signInLink_pre: "ifYouAlreadyHaveAnAccount",                                                                 // 319
  signInLink_link: "signin",                                                                                   // 320
  signInLink_suff: "",                                                                                         // 321
  signUpLink_pre: "dontHaveAnAccount",                                                                         // 322
  signUpLink_link: "signUp",                                                                                   // 323
  signUpLink_suff: "",                                                                                         // 324
  socialAdd: "add",                                                                                            // 325
  socialConfigure: "configure",                                                                                // 326
  socialIcons: {                                                                                               // 327
      "meteor-developer": "fa fa-rocket"                                                                       // 328
  },                                                                                                           // 329
  socialRemove: "remove",                                                                                      // 330
  socialSignIn: "signIn",                                                                                      // 331
  socialSignUp: "signUp",                                                                                      // 332
  socialWith: "with",                                                                                          // 333
  termsPreamble: "clickAgree",                                                                                 // 334
  termsPrivacy: "privacyPolicy",                                                                               // 335
  termsAnd: "and",                                                                                             // 336
  termsTerms: "terms",                                                                                         // 337
  title: {                                                                                                     // 338
    changePwd: "changePassword",                                                                               // 339
    enrollAccount: "createAccount",                                                                            // 340
    forgotPwd: "resetYourPassword",                                                                            // 341
    resetPwd: "resetYourPassword",                                                                             // 342
    signIn: "signIn",                                                                                          // 343
    signUp: "createAccount",                                                                                   // 344
    verifyEmail: "",                                                                                           // 345
    resendVerificationEmail: "Send the verification email again",                                              // 346
  },                                                                                                           // 347
};                                                                                                             // 348
                                                                                                               // 349
AT.prototype.SPECIAL_FIELDS = [                                                                                // 350
  "password_again",                                                                                            // 351
  "username_and_email",                                                                                        // 352
];                                                                                                             // 353
                                                                                                               // 354
// SignIn / SignUp fields                                                                                      // 355
AT.prototype._fields = [                                                                                       // 356
  new Field({                                                                                                  // 357
    _id: "email",                                                                                              // 358
    type: "email",                                                                                             // 359
    required: true,                                                                                            // 360
    lowercase: true,                                                                                           // 361
    trim: true,                                                                                                // 362
    func: function(email) {                                                                                    // 363
        return !_.contains(email, '@');                                                                        // 364
    },                                                                                                         // 365
    errStr: 'Invalid email',                                                                                   // 366
  }),                                                                                                          // 367
  new Field({                                                                                                  // 368
    _id: "password",                                                                                           // 369
    type: "password",                                                                                          // 370
    required: true,                                                                                            // 371
    minLength: 6,                                                                                              // 372
    displayName: {                                                                                             // 373
        "default": "password",                                                                                 // 374
        changePwd: "newPassword",                                                                              // 375
        resetPwd: "newPassword",                                                                               // 376
    },                                                                                                         // 377
    placeholder: {                                                                                             // 378
        "default": "password",                                                                                 // 379
        changePwd: "newPassword",                                                                              // 380
        resetPwd: "newPassword",                                                                               // 381
    },                                                                                                         // 382
  }),                                                                                                          // 383
];                                                                                                             // 384
                                                                                                               // 385
                                                                                                               // 386
AT.prototype._initialized = false;                                                                             // 387
                                                                                                               // 388
// Input type validation                                                                                       // 389
AT.prototype._isValidInputType = function(value) {                                                             // 390
    return _.indexOf(this.INPUT_TYPES, value) !== -1;                                                          // 391
};                                                                                                             // 392
                                                                                                               // 393
AT.prototype.addField = function(field) {                                                                      // 394
    // Fields can be added only before initialization                                                          // 395
    if (this._initialized) {                                                                                   // 396
      throw new Error("AccountsTemplates.addField should strictly be called before AccountsTemplates.init!");  // 397
    }                                                                                                          // 398
                                                                                                               // 399
    field = _.pick(field, _.keys(FIELD_PAT));                                                                  // 400
    check(field, FIELD_PAT);                                                                                   // 401
    // Checks there"s currently no field called field._id                                                      // 402
    if (_.indexOf(_.pluck(this._fields, "_id"), field._id) !== -1) {                                           // 403
      throw new Error("A field called " + field._id + " already exists!");                                     // 404
    }                                                                                                          // 405
    // Validates field.type                                                                                    // 406
    if (!this._isValidInputType(field.type)) {                                                                 // 407
      throw new Error("field.type is not valid!");                                                             // 408
    }                                                                                                          // 409
    // Checks field.minLength is strictly positive                                                             // 410
    if (typeof field.minLength !== "undefined" && field.minLength <= 0) {                                      // 411
      throw new Error("field.minLength should be greater than zero!");                                         // 412
    }                                                                                                          // 413
    // Checks field.maxLength is strictly positive                                                             // 414
    if (typeof field.maxLength !== "undefined" && field.maxLength <= 0) {                                      // 415
      throw new Error("field.maxLength should be greater than zero!");                                         // 416
    }                                                                                                          // 417
    // Checks field.maxLength is greater than field.minLength                                                  // 418
    if (typeof field.minLength !== "undefined" && typeof field.minLength !== "undefined" && field.maxLength < field.minLength) {
      throw new Error("field.maxLength should be greater than field.maxLength!");                              // 420
    }                                                                                                          // 421
                                                                                                               // 422
    if (!(Meteor.isServer && _.contains(this.SPECIAL_FIELDS, field._id))) {                                    // 423
      this._fields.push(new Field(field));                                                                     // 424
    }                                                                                                          // 425
                                                                                                               // 426
    return this._fields;                                                                                       // 427
};                                                                                                             // 428
                                                                                                               // 429
AT.prototype.addFields = function(fields) {                                                                    // 430
  var ok;                                                                                                      // 431
                                                                                                               // 432
  try { // don"t bother with `typeof` - just access `length` and `catch`                                       // 433
    ok = fields.length > 0 && "0" in Object(fields);                                                           // 434
  } catch (e) {                                                                                                // 435
    throw new Error("field argument should be an array of valid field objects!");                              // 436
  }                                                                                                            // 437
  if (ok) {                                                                                                    // 438
    _.map(fields, function(field) {                                                                            // 439
      this.addField(field);                                                                                    // 440
    }, this);                                                                                                  // 441
  } else {                                                                                                     // 442
    throw new Error("field argument should be an array of valid field objects!");                              // 443
  }                                                                                                            // 444
                                                                                                               // 445
  return this._fields;                                                                                         // 446
};                                                                                                             // 447
                                                                                                               // 448
AT.prototype.configure = function(config) {                                                                    // 449
  // Configuration options can be set only before initialization                                               // 450
  if (this._initialized) {                                                                                     // 451
    throw new Error("Configuration options must be set before AccountsTemplates.init!");                       // 452
  }                                                                                                            // 453
                                                                                                               // 454
  // Updates the current configuration                                                                         // 455
  check(config, CONFIG_PAT);                                                                                   // 456
  var options = _.omit(config, "texts", "reCaptcha");                                                          // 457
  this.options = _.defaults(options, this.options);                                                            // 458
                                                                                                               // 459
  // Possibly sets up reCaptcha options                                                                        // 460
  var reCaptcha = config.reCaptcha;                                                                            // 461
  if (reCaptcha) {                                                                                             // 462
    // Updates the current button object                                                                       // 463
    this.options.reCaptcha = _.defaults(reCaptcha, this.options.reCaptcha || {});                              // 464
  }                                                                                                            // 465
                                                                                                               // 466
  // Possibly sets up texts...                                                                                 // 467
  if (config.texts) {                                                                                          // 468
    var texts = config.texts;                                                                                  // 469
    var simpleTexts = _.omit(texts, "button", "errors", "info", "inputIcons", "socialIcons", "title");         // 470
                                                                                                               // 471
    this.texts = _.defaults(simpleTexts, this.texts);                                                          // 472
                                                                                                               // 473
    if (texts.button) {                                                                                        // 474
      // Updates the current button object                                                                     // 475
      this.texts.button = _.defaults(texts.button, this.texts.button);                                         // 476
    }                                                                                                          // 477
                                                                                                               // 478
    if (texts.errors) {                                                                                        // 479
      // Updates the current errors object                                                                     // 480
      this.texts.errors = _.defaults(texts.errors, this.texts.errors);                                         // 481
    }                                                                                                          // 482
                                                                                                               // 483
    if (texts.info) {                                                                                          // 484
      // Updates the current info object                                                                       // 485
      this.texts.info = _.defaults(texts.info, this.texts.info);                                               // 486
    }                                                                                                          // 487
                                                                                                               // 488
    if (texts.inputIcons) {                                                                                    // 489
      // Updates the current inputIcons object                                                                 // 490
      this.texts.inputIcons = _.defaults(texts.inputIcons, this.texts.inputIcons);                             // 491
    }                                                                                                          // 492
                                                                                                               // 493
    if (texts.socialIcons) {                                                                                   // 494
      // Updates the current socialIcons object                                                                // 495
      this.texts.socialIcons = _.defaults(texts.socialIcons, this.texts.socialIcons);                          // 496
    }                                                                                                          // 497
                                                                                                               // 498
    if (texts.title) {                                                                                         // 499
      // Updates the current title object                                                                      // 500
      this.texts.title = _.defaults(texts.title, this.texts.title);                                            // 501
    }                                                                                                          // 502
  }                                                                                                            // 503
};                                                                                                             // 504
                                                                                                               // 505
                                                                                                               // 506
AT.prototype.configureRoute = function(route, options) {                                                       // 507
  console.warn('You now need a routing package like useraccounts:iron-routing or useraccounts:flow-routing to be able to configure routes!');
};                                                                                                             // 509
                                                                                                               // 510
                                                                                                               // 511
AT.prototype.hasField = function(fieldId) {                                                                    // 512
  return !!this.getField(fieldId);                                                                             // 513
};                                                                                                             // 514
                                                                                                               // 515
AT.prototype.getField = function(fieldId) {                                                                    // 516
  var field = _.filter(this._fields, function(field) {                                                         // 517
    return field._id === fieldId;                                                                              // 518
  });                                                                                                          // 519
                                                                                                               // 520
  return (field.length === 1) ? field[0] : undefined;                                                          // 521
};                                                                                                             // 522
                                                                                                               // 523
AT.prototype.getFields = function() {                                                                          // 524
    return this._fields;                                                                                       // 525
};                                                                                                             // 526
                                                                                                               // 527
AT.prototype.getFieldIds = function() {                                                                        // 528
    return _.pluck(this._fields, "_id");                                                                       // 529
};                                                                                                             // 530
                                                                                                               // 531
AT.prototype.getRoutePath = function(route) {                                                                  // 532
    return "#";                                                                                                // 533
};                                                                                                             // 534
                                                                                                               // 535
AT.prototype.oauthServices = function() {                                                                      // 536
  // Extracts names of available services                                                                      // 537
  var names;                                                                                                   // 538
                                                                                                               // 539
  if (Meteor.isServer) {                                                                                       // 540
    names = (Accounts.oauth && Accounts.oauth.serviceNames()) || [];                                           // 541
  } else {                                                                                                     // 542
    names = (Accounts.oauth && Accounts.loginServicesConfigured() && Accounts.oauth.serviceNames()) || [];     // 543
  }                                                                                                            // 544
  // Extracts names of configured services                                                                     // 545
  var configuredServices = [];                                                                                 // 546
                                                                                                               // 547
  if (Accounts.loginServiceConfiguration) {                                                                    // 548
    configuredServices = _.pluck(Accounts.loginServiceConfiguration.find().fetch(), "service");                // 549
  }                                                                                                            // 550
                                                                                                               // 551
  // Builds a list of objects containing service name as _id and its configuration status                      // 552
  var services = _.map(names, function(name) {                                                                 // 553
    return {                                                                                                   // 554
      _id : name,                                                                                              // 555
      configured: _.contains(configuredServices, name),                                                        // 556
    };                                                                                                         // 557
  });                                                                                                          // 558
                                                                                                               // 559
  // Checks whether there is a UI to configure services...                                                     // 560
  // XXX: this only works with the accounts-ui package                                                         // 561
  var showUnconfigured = typeof Accounts._loginButtonsSession !== "undefined";                                 // 562
                                                                                                               // 563
  // Filters out unconfigured services in case they"re not to be displayed                                     // 564
  if (!showUnconfigured) {                                                                                     // 565
    services = _.filter(services, function(service) {                                                          // 566
      return service.configured;                                                                               // 567
    });                                                                                                        // 568
  }                                                                                                            // 569
                                                                                                               // 570
  // Sorts services by name                                                                                    // 571
  services = _.sortBy(services, function(service) {                                                            // 572
    return service._id;                                                                                        // 573
  });                                                                                                          // 574
                                                                                                               // 575
  return services;                                                                                             // 576
};                                                                                                             // 577
                                                                                                               // 578
AT.prototype.removeField = function(fieldId) {                                                                 // 579
  // Fields can be removed only before initialization                                                          // 580
  if (this._initialized) {                                                                                     // 581
    throw new Error("AccountsTemplates.removeField should strictly be called before AccountsTemplates.init!"); // 582
  }                                                                                                            // 583
  // Tries to look up the field with given _id                                                                 // 584
  var index = _.indexOf(_.pluck(this._fields, "_id"), fieldId);                                                // 585
                                                                                                               // 586
  if (index !== -1) {                                                                                          // 587
    return this._fields.splice(index, 1)[0];                                                                   // 588
  } else if (!(Meteor.isServer && _.contains(this.SPECIAL_FIELDS, fieldId))) {                                 // 589
    throw new Error("A field called " + fieldId + " does not exist!");                                         // 590
  }                                                                                                            // 591
};                                                                                                             // 592
                                                                                                               // 593
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 912
                                                                                                                      // 913
}).call(this);                                                                                                        // 914
                                                                                                                      // 915
                                                                                                                      // 916
                                                                                                                      // 917
                                                                                                                      // 918
                                                                                                                      // 919
                                                                                                                      // 920
(function () {                                                                                                        // 921
                                                                                                                      // 922
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 923
//                                                                                                             //     // 924
// packages/useraccounts:core/lib/server.js                                                                    //     // 925
//                                                                                                             //     // 926
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 927
                                                                                                               //     // 928
/* global                                                                                                      // 1   // 929
  AT: false,                                                                                                   // 2   // 930
  AccountsTemplates: false                                                                                     // 3   // 931
*/                                                                                                             // 4   // 932
"use strict";                                                                                                  // 5   // 933
                                                                                                               // 6   // 934
// Initialization                                                                                              // 7   // 935
AT.prototype.init = function() {                                                                               // 8   // 936
  console.warn("[AccountsTemplates] There is no more need to call AccountsTemplates.init()! Simply remove the call ;-)");
};                                                                                                             // 10  // 938
                                                                                                               // 11  // 939
AT.prototype._init = function() {                                                                              // 12  // 940
  if (this._initialized) {                                                                                     // 13  // 941
    return;                                                                                                    // 14  // 942
  }                                                                                                            // 15  // 943
                                                                                                               // 16  // 944
  // Checks there is at least one account service installed                                                    // 17  // 945
  if (!Package["accounts-password"] && (!Accounts.oauth || Accounts.oauth.serviceNames().length === 0)) {      // 18  // 946
    throw Error("AccountsTemplates: You must add at least one account service!");                              // 19  // 947
  }                                                                                                            // 20  // 948
                                                                                                               // 21  // 949
  // A password field is strictly required                                                                     // 22  // 950
  var password = this.getField("password");                                                                    // 23  // 951
  if (!password) {                                                                                             // 24  // 952
    throw Error("A password field is strictly required!");                                                     // 25  // 953
  }                                                                                                            // 26  // 954
                                                                                                               // 27  // 955
  if (password.type !== "password") {                                                                          // 28  // 956
    throw Error("The type of password field should be password!");                                             // 29  // 957
  }                                                                                                            // 30  // 958
                                                                                                               // 31  // 959
  // Then we can have "username" or "email" or even both of them                                               // 32  // 960
  // but at least one of the two is strictly required                                                          // 33  // 961
  var username = this.getField("username");                                                                    // 34  // 962
  var email = this.getField("email");                                                                          // 35  // 963
                                                                                                               // 36  // 964
  if (!username && !email) {                                                                                   // 37  // 965
    throw Error("At least one field out of username and email is strictly required!");                         // 38  // 966
  }                                                                                                            // 39  // 967
                                                                                                               // 40  // 968
  if (username && !username.required) {                                                                        // 41  // 969
    throw Error("The username field should be required!");                                                     // 42  // 970
  }                                                                                                            // 43  // 971
                                                                                                               // 44  // 972
  if (email) {                                                                                                 // 45  // 973
    if (email.type !== "email") {                                                                              // 46  // 974
      throw Error("The type of email field should be email!");                                                 // 47  // 975
    }                                                                                                          // 48  // 976
                                                                                                               // 49  // 977
    if (username) {                                                                                            // 50  // 978
      // username and email                                                                                    // 51  // 979
      if (username.type !== "text") {                                                                          // 52  // 980
        throw Error("The type of username field should be text when email field is present!");                 // 53  // 981
      }                                                                                                        // 54  // 982
    } else {                                                                                                   // 55  // 983
      // email only                                                                                            // 56  // 984
      if (!email.required) {                                                                                   // 57  // 985
        throw Error("The email field should be required when username is not present!");                       // 58  // 986
      }                                                                                                        // 59  // 987
    }                                                                                                          // 60  // 988
  } else {                                                                                                     // 61  // 989
    // username only                                                                                           // 62  // 990
    if (username.type !== "text" && username.type !== "tel") {                                                 // 63  // 991
      throw Error("The type of username field should be text or tel!");                                        // 64  // 992
    }                                                                                                          // 65  // 993
  }                                                                                                            // 66  // 994
                                                                                                               // 67  // 995
  // Possibly publish more user data in order to be able to show add/remove                                    // 68  // 996
  // buttons for 3rd-party services                                                                            // 69  // 997
  if (this.options.showAddRemoveServices) {                                                                    // 70  // 998
    // Publish additional current user info to get the list of registered services                             // 71  // 999
    // XXX TODO: use                                                                                           // 72  // 1000
    // Accounts.addAutopublishFields({                                                                         // 73  // 1001
    //   forLoggedInUser: ['services.facebook'],                                                               // 74  // 1002
    //   forOtherUsers: [],                                                                                    // 75  // 1003
    // })                                                                                                      // 76  // 1004
    // ...adds only user.services.*.id                                                                         // 77  // 1005
    Meteor.publish("userRegisteredServices", function() {                                                      // 78  // 1006
      var userId = this.userId;                                                                                // 79  // 1007
      return Meteor.users.find(userId, {fields: {services: 1}});                                               // 80  // 1008
      /*                                                                                                       // 81  // 1009
      if (userId) {                                                                                            // 82  // 1010
        var user = Meteor.users.findOne(userId);                                                               // 83  // 1011
        var services_id = _.chain(user.services)                                                               // 84  // 1012
          .keys()                                                                                              // 85  // 1013
          .reject(function(service) {return service === "resume";})                                            // 86  // 1014
          .map(function(service) {return "services." + service + ".id";})                                      // 87  // 1015
          .value();                                                                                            // 88  // 1016
        var projection = {};                                                                                   // 89  // 1017
        _.each(services_id, function(key) {projection[key] = 1;});                                             // 90  // 1018
        return Meteor.users.find(userId, {fields: projection});                                                // 91  // 1019
      }                                                                                                        // 92  // 1020
      */                                                                                                       // 93  // 1021
    });                                                                                                        // 94  // 1022
  }                                                                                                            // 95  // 1023
                                                                                                               // 96  // 1024
  // Security stuff                                                                                            // 97  // 1025
  if (this.options.overrideLoginErrors) {                                                                      // 98  // 1026
    Accounts.validateLoginAttempt(function(attempt) {                                                          // 99  // 1027
      if (attempt.error) {                                                                                     // 100
        var reason = attempt.error.reason;                                                                     // 101
        if (reason === "User not found" || reason === "Incorrect password") {                                  // 102
          throw new Meteor.Error(403, AccountsTemplates.texts.errors.loginForbidden);                          // 103
        }                                                                                                      // 104
      }                                                                                                        // 105
      return attempt.allowed;                                                                                  // 106
    });                                                                                                        // 107
  }                                                                                                            // 108
                                                                                                               // 109
  if (this.options.sendVerificationEmail && this.options.enforceEmailVerification) {                           // 110
    Accounts.validateLoginAttempt(function(attempt) {                                                          // 111
      if (!attempt.allowed) {                                                                                  // 112
        return false;                                                                                          // 113
      }                                                                                                        // 114
                                                                                                               // 115
      if (attempt.type !== "password" || attempt.methodName !== "login") {                                     // 116
        return attempt.allowed;                                                                                // 117
      }                                                                                                        // 118
                                                                                                               // 119
      var user = attempt.user;                                                                                 // 120
      if (!user) {                                                                                             // 121
        return attempt.allowed;                                                                                // 122
      }                                                                                                        // 123
                                                                                                               // 124
      var ok = true;                                                                                           // 125
      var loginEmail = attempt.methodArguments[0].user.email;                                                  // 126
      if (loginEmail) {                                                                                        // 127
        var email = _.filter(user.emails, function(obj) {                                                      // 128
          return obj.address === loginEmail;                                                                   // 129
        });                                                                                                    // 130
        if (!email.length || !email[0].verified) {                                                             // 131
          ok = false;                                                                                          // 132
        }                                                                                                      // 133
      } else {                                                                                                 // 134
        // we got the username, lets check there's at lease one verified email                                 // 135
        var emailVerified = _.chain(user.emails)                                                               // 136
        .pluck('verified')                                                                                     // 137
        .any()                                                                                                 // 138
        .value();                                                                                              // 139
                                                                                                               // 140
        if (!emailVerified) {                                                                                  // 141
          ok = false;                                                                                          // 142
        }                                                                                                      // 143
      }                                                                                                        // 144
      if (!ok) {                                                                                               // 145
        throw new Meteor.Error(401, AccountsTemplates.texts.errors.verifyEmailFirst);                          // 146
      }                                                                                                        // 147
                                                                                                               // 148
      return attempt.allowed;                                                                                  // 149
    });                                                                                                        // 150
  }                                                                                                            // 151
                                                                                                               // 152
  //Check that reCaptcha secret keys are available                                                             // 153
  if (this.options.showReCaptcha) {                                                                            // 154
    var atSecretKey = AccountsTemplates.options.reCaptcha && AccountsTemplates.options.reCaptcha.secretKey;    // 155
    var settingsSecretKey = Meteor.settings.reCaptcha && Meteor.settings.reCaptcha.secretKey;                  // 156
                                                                                                               // 157
    if (!atSecretKey && !settingsSecretKey) {                                                                  // 158
      throw new Meteor.Error(401, "User Accounts: reCaptcha secret key not found! Please provide it or set showReCaptcha to false." );
    }                                                                                                          // 160
  }                                                                                                            // 161
                                                                                                               // 162
  // Marks AccountsTemplates as initialized                                                                    // 163
  this._initialized = true;                                                                                    // 164
};                                                                                                             // 165
                                                                                                               // 166
AccountsTemplates = new AT();                                                                                  // 167
                                                                                                               // 168
// Client side account creation is disabled by default:                                                        // 169
// the methos ATCreateUserServer is used instead!                                                              // 170
// to actually disable client side account creation use:                                                       // 171
//                                                                                                             // 172
//    AccountsTemplates.config({                                                                               // 173
//        forbidClientAccountCreation: true                                                                    // 174
//    });                                                                                                      // 175
                                                                                                               // 176
Accounts.config({                                                                                              // 177
  forbidClientAccountCreation: true                                                                            // 178
});                                                                                                            // 179
                                                                                                               // 180
// Initialization                                                                                              // 181
Meteor.startup(function() {                                                                                    // 182
  AccountsTemplates._init();                                                                                   // 183
});                                                                                                            // 184
                                                                                                               // 185
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 1114
                                                                                                                      // 1115
}).call(this);                                                                                                        // 1116
                                                                                                                      // 1117
                                                                                                                      // 1118
                                                                                                                      // 1119
                                                                                                                      // 1120
                                                                                                                      // 1121
                                                                                                                      // 1122
(function () {                                                                                                        // 1123
                                                                                                                      // 1124
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 1125
//                                                                                                             //     // 1126
// packages/useraccounts:core/lib/methods.js                                                                   //     // 1127
//                                                                                                             //     // 1128
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 1129
                                                                                                               //     // 1130
/* global                                                                                                      // 1   // 1131
  AccountsTemplates: false                                                                                     // 2   // 1132
*/                                                                                                             // 3   // 1133
"use strict";                                                                                                  // 4   // 1134
                                                                                                               // 5   // 1135
Meteor.methods({                                                                                               // 6   // 1136
  ATRemoveService: function(serviceName) {                                                                     // 7   // 1137
    check(serviceName, String);                                                                                // 8   // 1138
                                                                                                               // 9   // 1139
    var userId = this.userId;                                                                                  // 10  // 1140
                                                                                                               // 11  // 1141
    if (userId) {                                                                                              // 12  // 1142
      var user = Meteor.users.findOne(userId);                                                                 // 13  // 1143
      var numServices = _.keys(user.services).length; // including "resume"                                    // 14  // 1144
      var unset = {};                                                                                          // 15  // 1145
                                                                                                               // 16  // 1146
      if (numServices === 2) {                                                                                 // 17  // 1147
        throw new Meteor.Error(403, AccountsTemplates.texts.errors.cannotRemoveService, {});                   // 18  // 1148
      }                                                                                                        // 19  // 1149
                                                                                                               // 20  // 1150
      unset["services." + serviceName] = "";                                                                   // 21  // 1151
      Meteor.users.update(userId, {$unset: unset});                                                            // 22  // 1152
    }                                                                                                          // 23  // 1153
  },                                                                                                           // 24  // 1154
});                                                                                                            // 25  // 1155
                                                                                                               // 26  // 1156
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 1157
                                                                                                                      // 1158
}).call(this);                                                                                                        // 1159
                                                                                                                      // 1160
                                                                                                                      // 1161
                                                                                                                      // 1162
                                                                                                                      // 1163
                                                                                                                      // 1164
                                                                                                                      // 1165
(function () {                                                                                                        // 1166
                                                                                                                      // 1167
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 1168
//                                                                                                             //     // 1169
// packages/useraccounts:core/lib/server_methods.js                                                            //     // 1170
//                                                                                                             //     // 1171
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 1172
                                                                                                               //     // 1173
/* global                                                                                                      // 1   // 1174
  AccountsTemplates                                                                                            // 2   // 1175
*/                                                                                                             // 3   // 1176
"use strict";                                                                                                  // 4   // 1177
                                                                                                               // 5   // 1178
Meteor.methods({                                                                                               // 6   // 1179
  ATCreateUserServer: function(options) {                                                                      // 7   // 1180
    if (AccountsTemplates.options.forbidClientAccountCreation) {                                               // 8   // 1181
      throw new Meteor.Error(403, AccountsTemplates.texts.errors.accountsCreationDisabled);                    // 9   // 1182
    }                                                                                                          // 10  // 1183
                                                                                                               // 11  // 1184
    // createUser() does more checking.                                                                        // 12  // 1185
    check(options, Object);                                                                                    // 13  // 1186
    var allFieldIds = AccountsTemplates.getFieldIds();                                                         // 14  // 1187
                                                                                                               // 15  // 1188
    // Picks-up whitelisted fields for profile                                                                 // 16  // 1189
    var profile = options.profile;                                                                             // 17  // 1190
    profile = _.pick(profile, allFieldIds);                                                                    // 18  // 1191
    profile = _.omit(profile, "username", "email", "password");                                                // 19  // 1192
                                                                                                               // 20  // 1193
    // Validates fields" value                                                                                 // 21  // 1194
    var signupInfo = _.clone(profile);                                                                         // 22  // 1195
    if (options.username) {                                                                                    // 23  // 1196
      signupInfo.username = options.username;                                                                  // 24  // 1197
                                                                                                               // 25  // 1198
      if (AccountsTemplates.options.lowercaseUsername) {                                                       // 26  // 1199
        signupInfo.username = signupInfo.username.trim().replace(/\s+/gm, ' ');                                // 27  // 1200
        options.profile.name = signupInfo.username;                                                            // 28  // 1201
        signupInfo.username = signupInfo.username.toLowerCase().replace(/\s+/gm, '');                          // 29  // 1202
        options.username = signupInfo.username;                                                                // 30  // 1203
      }                                                                                                        // 31  // 1204
    }                                                                                                          // 32  // 1205
                                                                                                               // 33  // 1206
    if (options.email) {                                                                                       // 34  // 1207
      signupInfo.email = options.email;                                                                        // 35  // 1208
                                                                                                               // 36  // 1209
      if (AccountsTemplates.options.lowercaseUsername) {                                                       // 37  // 1210
        signupInfo.email = signupInfo.email.toLowerCase().replace(/\s+/gm, '');                                // 38  // 1211
        options.email = signupInfo.email;                                                                      // 39  // 1212
      }                                                                                                        // 40  // 1213
    }                                                                                                          // 41  // 1214
                                                                                                               // 42  // 1215
    if (options.password) {                                                                                    // 43  // 1216
      signupInfo.password = options.password;                                                                  // 44  // 1217
    }                                                                                                          // 45  // 1218
                                                                                                               // 46  // 1219
    var validationErrors = {};                                                                                 // 47  // 1220
    var someError = false;                                                                                     // 48  // 1221
                                                                                                               // 49  // 1222
    // Validates fields values                                                                                 // 50  // 1223
    _.each(AccountsTemplates.getFields(), function(field) {                                                    // 51  // 1224
      var fieldId = field._id;                                                                                 // 52  // 1225
      var value = signupInfo[fieldId];                                                                         // 53  // 1226
                                                                                                               // 54  // 1227
      if (fieldId === "password") {                                                                            // 55  // 1228
        // Can"t Pick-up password here                                                                         // 56  // 1229
        // NOTE: at this stage the password is already encripted,                                              // 57  // 1230
        //       so there is no way to validate it!!!                                                          // 58  // 1231
        check(value, Object);                                                                                  // 59  // 1232
        return;                                                                                                // 60  // 1233
      }                                                                                                        // 61  // 1234
                                                                                                               // 62  // 1235
      var validationErr = field.validate(value, "strict");                                                     // 63  // 1236
      if (validationErr) {                                                                                     // 64  // 1237
        validationErrors[fieldId] = validationErr;                                                             // 65  // 1238
        someError = true;                                                                                      // 66  // 1239
      }                                                                                                        // 67  // 1240
    });                                                                                                        // 68  // 1241
                                                                                                               // 69  // 1242
    if (AccountsTemplates.options.showReCaptcha) {                                                             // 70  // 1243
      var secretKey = null;                                                                                    // 71  // 1244
                                                                                                               // 72  // 1245
      if (AccountsTemplates.options.reCaptcha && AccountsTemplates.options.reCaptcha.secretKey) {              // 73  // 1246
        secretKey = AccountsTemplates.options.reCaptcha.secretKey;                                             // 74  // 1247
      } else {                                                                                                 // 75  // 1248
        secretKey = Meteor.settings.reCaptcha.secretKey;                                                       // 76  // 1249
      }                                                                                                        // 77  // 1250
                                                                                                               // 78  // 1251
      var apiResponse = HTTP.post("https://www.google.com/recaptcha/api/siteverify", {                         // 79  // 1252
        params: {                                                                                              // 80  // 1253
          secret: secretKey,                                                                                   // 81  // 1254
          response: options.profile.reCaptchaResponse,                                                         // 82  // 1255
          remoteip: this.connection.clientAddress,                                                             // 83  // 1256
        }                                                                                                      // 84  // 1257
      }).data;                                                                                                 // 85  // 1258
                                                                                                               // 86  // 1259
      if (!apiResponse.success) {                                                                              // 87  // 1260
        throw new Meteor.Error(403, AccountsTemplates.texts.errors.captchaVerification,                        // 88  // 1261
          apiResponse['error-codes'] ? apiResponse['error-codes'].join(", ") : "Unknown Error.");              // 89  // 1262
      }                                                                                                        // 90  // 1263
    }                                                                                                          // 91  // 1264
                                                                                                               // 92  // 1265
    if (someError) {                                                                                           // 93  // 1266
      throw new Meteor.Error(403, AccountsTemplates.texts.errors.validationErrors, validationErrors);          // 94  // 1267
    }                                                                                                          // 95  // 1268
                                                                                                               // 96  // 1269
    // Possibly removes the profile field                                                                      // 97  // 1270
    if (_.isEmpty(options.profile)) {                                                                          // 98  // 1271
      delete options.profile;                                                                                  // 99  // 1272
    }                                                                                                          // 100
                                                                                                               // 101
    // Create user. result contains id and token.                                                              // 102
    var userId = Accounts.createUser(options);                                                                 // 103
    // safety belt. createUser is supposed to throw on error. send 500 error                                   // 104
    // instead of sending a verification email with empty userid.                                              // 105
    if (! userId) {                                                                                            // 106
      throw new Error("createUser failed to insert new user");                                                 // 107
    }                                                                                                          // 108
                                                                                                               // 109
    // Send a email address verification email in case the context permits it                                  // 110
    // and the specific configuration flag was set to true                                                     // 111
    if (options.email && AccountsTemplates.options.sendVerificationEmail) {                                    // 112
      Accounts.sendVerificationEmail(userId, options.email);                                                   // 113
    }                                                                                                          // 114
  },                                                                                                           // 115
                                                                                                               // 116
  // Resend a user's verification e-mail                                                                       // 117
  ATResendVerificationEmail: function (email) {                                                                // 118
    check(email, String);                                                                                      // 119
                                                                                                               // 120
    var user = Meteor.users.findOne({ "emails.address": email });                                              // 121
                                                                                                               // 122
    // Send the standard error back to the client if no user exist with this e-mail                            // 123
    if (!user) {                                                                                               // 124
      throw new Meteor.Error(403, "User not found");                                                           // 125
    }                                                                                                          // 126
                                                                                                               // 127
    try {                                                                                                      // 128
      Accounts.sendVerificationEmail(user._id);                                                                // 129
    } catch (error) {                                                                                          // 130
      // Handle error when email already verified                                                              // 131
      // https://github.com/dwinston/send-verification-email-bug                                               // 132
      throw new Meteor.Error(403, "Already verified");                                                         // 133
    }                                                                                                          // 134
  },                                                                                                           // 135
});                                                                                                            // 136
                                                                                                               // 137
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 1311
                                                                                                                      // 1312
}).call(this);                                                                                                        // 1313
                                                                                                                      // 1314
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['useraccounts:core'] = {
  AccountsTemplates: AccountsTemplates
};

})();

//# sourceMappingURL=useraccounts_core.js.map
