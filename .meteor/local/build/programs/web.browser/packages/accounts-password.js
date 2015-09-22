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
var SRP = Package.srp.SRP;
var SHA256 = Package.sha.SHA256;
var EJSON = Package.ejson.EJSON;
var DDP = Package['ddp-client'].DDP;
var check = Package.check.check;
var Match = Package.check.Match;
var _ = Package.underscore._;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// packages/accounts-password/password_client.js                                                              //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
// Attempt to log in with a password.                                                                         // 1
//                                                                                                            // 2
// @param selector {String|Object} One of the following:                                                      // 3
//   - {username: (username)}                                                                                 // 4
//   - {email: (email)}                                                                                       // 5
//   - a string which may be a username or email, depending on whether                                        // 6
//     it contains "@".                                                                                       // 7
// @param password {String}                                                                                   // 8
// @param callback {Function(error|undefined)}                                                                // 9
                                                                                                              // 10
/**                                                                                                           // 11
 * @summary Log the user in with a password.                                                                  // 12
 * @locus Client                                                                                              // 13
 * @param {Object | String} user                                                                              // 14
 *   Either a string interpreted as a username or an email; or an object with a                               // 15
 *   single key: `email`, `username` or `id`. Username or email match in a case                               // 16
 *   insensitive manner.                                                                                      // 17
 * @param {String} password The user's password.                                                              // 18
 * @param {Function} [callback] Optional callback.                                                            // 19
 *   Called with no arguments on success, or with a single `Error` argument                                   // 20
 *   on failure.                                                                                              // 21
 */                                                                                                           // 22
Meteor.loginWithPassword = function (selector, password, callback) {                                          // 23
  if (typeof selector === 'string')                                                                           // 24
    if (selector.indexOf('@') === -1)                                                                         // 25
      selector = {username: selector};                                                                        // 26
    else                                                                                                      // 27
      selector = {email: selector};                                                                           // 28
                                                                                                              // 29
  Accounts.callLoginMethod({                                                                                  // 30
    methodArguments: [{                                                                                       // 31
      user: selector,                                                                                         // 32
      password: Accounts._hashPassword(password)                                                              // 33
    }],                                                                                                       // 34
    userCallback: function (error, result) {                                                                  // 35
      if (error && error.error === 400 &&                                                                     // 36
          error.reason === 'old password format') {                                                           // 37
        // The "reason" string should match the error thrown in the                                           // 38
        // password login handler in password_server.js.                                                      // 39
                                                                                                              // 40
        // XXX COMPAT WITH 0.8.1.3                                                                            // 41
        // If this user's last login was with a previous version of                                           // 42
        // Meteor that used SRP, then the server throws this error to                                         // 43
        // indicate that we should try again. The error includes the                                          // 44
        // user's SRP identity. We provide a value derived from the                                           // 45
        // identity and the password to prove to the server that we know                                      // 46
        // the password without requiring a full SRP flow, as well as                                         // 47
        // SHA256(password), which the server bcrypts and stores in                                           // 48
        // place of the old SRP information for this user.                                                    // 49
        srpUpgradePath({                                                                                      // 50
          upgradeError: error,                                                                                // 51
          userSelector: selector,                                                                             // 52
          plaintextPassword: password                                                                         // 53
        }, callback);                                                                                         // 54
      }                                                                                                       // 55
      else if (error) {                                                                                       // 56
        callback && callback(error);                                                                          // 57
      } else {                                                                                                // 58
        callback && callback();                                                                               // 59
      }                                                                                                       // 60
    }                                                                                                         // 61
  });                                                                                                         // 62
};                                                                                                            // 63
                                                                                                              // 64
Accounts._hashPassword = function (password) {                                                                // 65
  return {                                                                                                    // 66
    digest: SHA256(password),                                                                                 // 67
    algorithm: "sha-256"                                                                                      // 68
  };                                                                                                          // 69
};                                                                                                            // 70
                                                                                                              // 71
// XXX COMPAT WITH 0.8.1.3                                                                                    // 72
// The server requested an upgrade from the old SRP password format,                                          // 73
// so supply the needed SRP identity to login. Options:                                                       // 74
//   - upgradeError: the error object that the server returned to tell                                        // 75
//     us to upgrade from SRP to bcrypt.                                                                      // 76
//   - userSelector: selector to retrieve the user object                                                     // 77
//   - plaintextPassword: the password as a string                                                            // 78
var srpUpgradePath = function (options, callback) {                                                           // 79
  var details;                                                                                                // 80
  try {                                                                                                       // 81
    details = EJSON.parse(options.upgradeError.details);                                                      // 82
  } catch (e) {}                                                                                              // 83
  if (!(details && details.format === 'srp')) {                                                               // 84
    callback && callback(                                                                                     // 85
      new Meteor.Error(400, "Password is old. Please reset your " +                                           // 86
                       "password."));                                                                         // 87
  } else {                                                                                                    // 88
    Accounts.callLoginMethod({                                                                                // 89
      methodArguments: [{                                                                                     // 90
        user: options.userSelector,                                                                           // 91
        srp: SHA256(details.identity + ":" + options.plaintextPassword),                                      // 92
        password: Accounts._hashPassword(options.plaintextPassword)                                           // 93
      }],                                                                                                     // 94
      userCallback: callback                                                                                  // 95
    });                                                                                                       // 96
  }                                                                                                           // 97
};                                                                                                            // 98
                                                                                                              // 99
                                                                                                              // 100
// Attempt to log in as a new user.                                                                           // 101
                                                                                                              // 102
/**                                                                                                           // 103
 * @summary Create a new user.                                                                                // 104
 * @locus Anywhere                                                                                            // 105
 * @param {Object} options                                                                                    // 106
 * @param {String} options.username A unique name for this user.                                              // 107
 * @param {String} options.email The user's email address.                                                    // 108
 * @param {String} options.password The user's password. This is __not__ sent in plain text over the wire.    // 109
 * @param {Object} options.profile The user's profile, typically including the `name` field.                  // 110
 * @param {Function} [callback] Client only, optional callback. Called with no arguments on success, or with a single `Error` argument on failure.
 */                                                                                                           // 112
Accounts.createUser = function (options, callback) {                                                          // 113
  options = _.clone(options); // we'll be modifying options                                                   // 114
                                                                                                              // 115
  if (typeof options.password !== 'string')                                                                   // 116
    throw new Error("options.password must be a string");                                                     // 117
  if (!options.password) {                                                                                    // 118
    callback(new Meteor.Error(400, "Password may not be empty"));                                             // 119
    return;                                                                                                   // 120
  }                                                                                                           // 121
                                                                                                              // 122
  // Replace password with the hashed password.                                                               // 123
  options.password = Accounts._hashPassword(options.password);                                                // 124
                                                                                                              // 125
  Accounts.callLoginMethod({                                                                                  // 126
    methodName: 'createUser',                                                                                 // 127
    methodArguments: [options],                                                                               // 128
    userCallback: callback                                                                                    // 129
  });                                                                                                         // 130
};                                                                                                            // 131
                                                                                                              // 132
// Change password. Must be logged in.                                                                        // 133
//                                                                                                            // 134
// @param oldPassword {String|null} By default servers no longer allow                                        // 135
//   changing password without the old password, but they could so we                                         // 136
//   support passing no password to the server and letting it decide.                                         // 137
// @param newPassword {String}                                                                                // 138
// @param callback {Function(error|undefined)}                                                                // 139
                                                                                                              // 140
/**                                                                                                           // 141
 * @summary Change the current user's password. Must be logged in.                                            // 142
 * @locus Client                                                                                              // 143
 * @param {String} oldPassword The user's current password. This is __not__ sent in plain text over the wire.
 * @param {String} newPassword A new password for the user. This is __not__ sent in plain text over the wire.
 * @param {Function} [callback] Optional callback. Called with no arguments on success, or with a single `Error` argument on failure.
 */                                                                                                           // 147
Accounts.changePassword = function (oldPassword, newPassword, callback) {                                     // 148
  if (!Meteor.user()) {                                                                                       // 149
    callback && callback(new Error("Must be logged in to change password."));                                 // 150
    return;                                                                                                   // 151
  }                                                                                                           // 152
                                                                                                              // 153
  check(newPassword, String);                                                                                 // 154
  if (!newPassword) {                                                                                         // 155
    callback(new Meteor.Error(400, "Password may not be empty"));                                             // 156
    return;                                                                                                   // 157
  }                                                                                                           // 158
                                                                                                              // 159
  Accounts.connection.apply(                                                                                  // 160
    'changePassword',                                                                                         // 161
    [oldPassword ? Accounts._hashPassword(oldPassword) : null,                                                // 162
     Accounts._hashPassword(newPassword)],                                                                    // 163
    function (error, result) {                                                                                // 164
      if (error || !result) {                                                                                 // 165
        if (error && error.error === 400 &&                                                                   // 166
            error.reason === 'old password format') {                                                         // 167
          // XXX COMPAT WITH 0.8.1.3                                                                          // 168
          // The server is telling us to upgrade from SRP to bcrypt, as                                       // 169
          // in Meteor.loginWithPassword.                                                                     // 170
          srpUpgradePath({                                                                                    // 171
            upgradeError: error,                                                                              // 172
            userSelector: { id: Meteor.userId() },                                                            // 173
            plaintextPassword: oldPassword                                                                    // 174
          }, function (err) {                                                                                 // 175
            if (err) {                                                                                        // 176
              callback && callback(err);                                                                      // 177
            } else {                                                                                          // 178
              // Now that we've successfully migrated from srp to                                             // 179
              // bcrypt, try changing the password again.                                                     // 180
              Accounts.changePassword(oldPassword, newPassword, callback);                                    // 181
            }                                                                                                 // 182
          });                                                                                                 // 183
        } else {                                                                                              // 184
          // A normal error, not an error telling us to upgrade to bcrypt                                     // 185
          callback && callback(                                                                               // 186
            error || new Error("No result from changePassword."));                                            // 187
        }                                                                                                     // 188
      } else {                                                                                                // 189
        callback && callback();                                                                               // 190
      }                                                                                                       // 191
    }                                                                                                         // 192
  );                                                                                                          // 193
};                                                                                                            // 194
                                                                                                              // 195
// Sends an email to a user with a link that can be used to reset                                             // 196
// their password                                                                                             // 197
//                                                                                                            // 198
// @param options {Object}                                                                                    // 199
//   - email: (email)                                                                                         // 200
// @param callback (optional) {Function(error|undefined)}                                                     // 201
                                                                                                              // 202
/**                                                                                                           // 203
 * @summary Request a forgot password email.                                                                  // 204
 * @locus Client                                                                                              // 205
 * @param {Object} options                                                                                    // 206
 * @param {String} options.email The email address to send a password reset link.                             // 207
 * @param {Function} [callback] Optional callback. Called with no arguments on success, or with a single `Error` argument on failure.
 */                                                                                                           // 209
Accounts.forgotPassword = function(options, callback) {                                                       // 210
  if (!options.email)                                                                                         // 211
    throw new Error("Must pass options.email");                                                               // 212
  Accounts.connection.call("forgotPassword", options, callback);                                              // 213
};                                                                                                            // 214
                                                                                                              // 215
// Resets a password based on a token originally created by                                                   // 216
// Accounts.forgotPassword, and then logs in the matching user.                                               // 217
//                                                                                                            // 218
// @param token {String}                                                                                      // 219
// @param newPassword {String}                                                                                // 220
// @param callback (optional) {Function(error|undefined)}                                                     // 221
                                                                                                              // 222
/**                                                                                                           // 223
 * @summary Reset the password for a user using a token received in email. Logs the user in afterwards.       // 224
 * @locus Client                                                                                              // 225
 * @param {String} token The token retrieved from the reset password URL.                                     // 226
 * @param {String} newPassword A new password for the user. This is __not__ sent in plain text over the wire.
 * @param {Function} [callback] Optional callback. Called with no arguments on success, or with a single `Error` argument on failure.
 */                                                                                                           // 229
Accounts.resetPassword = function(token, newPassword, callback) {                                             // 230
  check(token, String);                                                                                       // 231
  check(newPassword, String);                                                                                 // 232
                                                                                                              // 233
  if (!newPassword) {                                                                                         // 234
    callback(new Meteor.Error(400, "Password may not be empty"));                                             // 235
    return;                                                                                                   // 236
  }                                                                                                           // 237
                                                                                                              // 238
  Accounts.callLoginMethod({                                                                                  // 239
    methodName: 'resetPassword',                                                                              // 240
    methodArguments: [token, Accounts._hashPassword(newPassword)],                                            // 241
    userCallback: callback});                                                                                 // 242
};                                                                                                            // 243
                                                                                                              // 244
// Verifies a user's email address based on a token originally                                                // 245
// created by Accounts.sendVerificationEmail                                                                  // 246
//                                                                                                            // 247
// @param token {String}                                                                                      // 248
// @param callback (optional) {Function(error|undefined)}                                                     // 249
                                                                                                              // 250
/**                                                                                                           // 251
 * @summary Marks the user's email address as verified. Logs the user in afterwards.                          // 252
 * @locus Client                                                                                              // 253
 * @param {String} token The token retrieved from the verification URL.                                       // 254
 * @param {Function} [callback] Optional callback. Called with no arguments on success, or with a single `Error` argument on failure.
 */                                                                                                           // 256
Accounts.verifyEmail = function(token, callback) {                                                            // 257
  if (!token)                                                                                                 // 258
    throw new Error("Need to pass token");                                                                    // 259
                                                                                                              // 260
  Accounts.callLoginMethod({                                                                                  // 261
    methodName: 'verifyEmail',                                                                                // 262
    methodArguments: [token],                                                                                 // 263
    userCallback: callback});                                                                                 // 264
};                                                                                                            // 265
                                                                                                              // 266
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['accounts-password'] = {};

})();
