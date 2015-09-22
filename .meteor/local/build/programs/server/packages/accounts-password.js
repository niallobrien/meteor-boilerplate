(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var NpmModuleBcrypt = Package['npm-bcrypt'].NpmModuleBcrypt;
var Accounts = Package['accounts-base'].Accounts;
var AccountsServer = Package['accounts-base'].AccountsServer;
var SRP = Package.srp.SRP;
var SHA256 = Package.sha.SHA256;
var EJSON = Package.ejson.EJSON;
var DDP = Package['ddp-client'].DDP;
var DDPServer = Package['ddp-server'].DDPServer;
var Email = Package.email.Email;
var EmailInternals = Package.email.EmailInternals;
var Random = Package.random.Random;
var check = Package.check.check;
var Match = Package.check.Match;
var _ = Package.underscore._;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                 //
// packages/accounts-password/email_templates.js                                                   //
//                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                   //
/**                                                                                                // 1
 * @summary Options to customize emails sent from the Accounts system.                             // 2
 * @locus Server                                                                                   // 3
 */                                                                                                // 4
Accounts.emailTemplates = {                                                                        // 5
  from: "Meteor Accounts <no-reply@meteor.com>",                                                   // 6
  siteName: Meteor.absoluteUrl().replace(/^https?:\/\//, '').replace(/\/$/, ''),                   // 7
                                                                                                   // 8
  resetPassword: {                                                                                 // 9
    subject: function(user) {                                                                      // 10
      return "How to reset your password on " + Accounts.emailTemplates.siteName;                  // 11
    },                                                                                             // 12
    text: function(user, url) {                                                                    // 13
      var greeting = (user.profile && user.profile.name) ?                                         // 14
            ("Hello " + user.profile.name + ",") : "Hello,";                                       // 15
      return greeting + "\n"                                                                       // 16
        + "\n"                                                                                     // 17
        + "To reset your password, simply click the link below.\n"                                 // 18
        + "\n"                                                                                     // 19
        + url + "\n"                                                                               // 20
        + "\n"                                                                                     // 21
        + "Thanks.\n";                                                                             // 22
    }                                                                                              // 23
  },                                                                                               // 24
  verifyEmail: {                                                                                   // 25
    subject: function(user) {                                                                      // 26
      return "How to verify email address on " + Accounts.emailTemplates.siteName;                 // 27
    },                                                                                             // 28
    text: function(user, url) {                                                                    // 29
      var greeting = (user.profile && user.profile.name) ?                                         // 30
            ("Hello " + user.profile.name + ",") : "Hello,";                                       // 31
      return greeting + "\n"                                                                       // 32
        + "\n"                                                                                     // 33
        + "To verify your account email, simply click the link below.\n"                           // 34
        + "\n"                                                                                     // 35
        + url + "\n"                                                                               // 36
        + "\n"                                                                                     // 37
        + "Thanks.\n";                                                                             // 38
    }                                                                                              // 39
  },                                                                                               // 40
  enrollAccount: {                                                                                 // 41
    subject: function(user) {                                                                      // 42
      return "An account has been created for you on " + Accounts.emailTemplates.siteName;         // 43
    },                                                                                             // 44
    text: function(user, url) {                                                                    // 45
      var greeting = (user.profile && user.profile.name) ?                                         // 46
            ("Hello " + user.profile.name + ",") : "Hello,";                                       // 47
      return greeting + "\n"                                                                       // 48
        + "\n"                                                                                     // 49
        + "To start using the service, simply click the link below.\n"                             // 50
        + "\n"                                                                                     // 51
        + url + "\n"                                                                               // 52
        + "\n"                                                                                     // 53
        + "Thanks.\n";                                                                             // 54
    }                                                                                              // 55
  }                                                                                                // 56
};                                                                                                 // 57
                                                                                                   // 58
/////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                 //
// packages/accounts-password/password_server.js                                                   //
//                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                   //
/// BCRYPT                                                                                         // 1
                                                                                                   // 2
var bcrypt = NpmModuleBcrypt;                                                                      // 3
var bcryptHash = Meteor.wrapAsync(bcrypt.hash);                                                    // 4
var bcryptCompare = Meteor.wrapAsync(bcrypt.compare);                                              // 5
                                                                                                   // 6
// User records have a 'services.password.bcrypt' field on them to hold                            // 7
// their hashed passwords (unless they have a 'services.password.srp'                              // 8
// field, in which case they will be upgraded to bcrypt the next time                              // 9
// they log in).                                                                                   // 10
//                                                                                                 // 11
// When the client sends a password to the server, it can either be a                              // 12
// string (the plaintext password) or an object with keys 'digest' and                             // 13
// 'algorithm' (must be "sha-256" for now). The Meteor client always sends                         // 14
// password objects { digest: *, algorithm: "sha-256" }, but DDP clients                           // 15
// that don't have access to SHA can just send plaintext passwords as                              // 16
// strings.                                                                                        // 17
//                                                                                                 // 18
// When the server receives a plaintext password as a string, it always                            // 19
// hashes it with SHA256 before passing it into bcrypt. When the server                            // 20
// receives a password as an object, it asserts that the algorithm is                              // 21
// "sha-256" and then passes the digest to bcrypt.                                                 // 22
                                                                                                   // 23
                                                                                                   // 24
Accounts._bcryptRounds = 10;                                                                       // 25
                                                                                                   // 26
// Given a 'password' from the client, extract the string that we should                           // 27
// bcrypt. 'password' can be one of:                                                               // 28
//  - String (the plaintext password)                                                              // 29
//  - Object with 'digest' and 'algorithm' keys. 'algorithm' must be "sha-256".                    // 30
//                                                                                                 // 31
var getPasswordString = function (password) {                                                      // 32
  if (typeof password === "string") {                                                              // 33
    password = SHA256(password);                                                                   // 34
  } else { // 'password' is an object                                                              // 35
    if (password.algorithm !== "sha-256") {                                                        // 36
      throw new Error("Invalid password hash algorithm. " +                                        // 37
                      "Only 'sha-256' is allowed.");                                               // 38
    }                                                                                              // 39
    password = password.digest;                                                                    // 40
  }                                                                                                // 41
  return password;                                                                                 // 42
};                                                                                                 // 43
                                                                                                   // 44
// Use bcrypt to hash the password for storage in the database.                                    // 45
// `password` can be a string (in which case it will be run through                                // 46
// SHA256 before bcrypt) or an object with properties `digest` and                                 // 47
// `algorithm` (in which case we bcrypt `password.digest`).                                        // 48
//                                                                                                 // 49
var hashPassword = function (password) {                                                           // 50
  password = getPasswordString(password);                                                          // 51
  return bcryptHash(password, Accounts._bcryptRounds);                                             // 52
};                                                                                                 // 53
                                                                                                   // 54
// Check whether the provided password matches the bcrypt'ed password in                           // 55
// the database user record. `password` can be a string (in which case                             // 56
// it will be run through SHA256 before bcrypt) or an object with                                  // 57
// properties `digest` and `algorithm` (in which case we bcrypt                                    // 58
// `password.digest`).                                                                             // 59
//                                                                                                 // 60
Accounts._checkPassword = function (user, password) {                                              // 61
  var result = {                                                                                   // 62
    userId: user._id                                                                               // 63
  };                                                                                               // 64
                                                                                                   // 65
  password = getPasswordString(password);                                                          // 66
                                                                                                   // 67
  if (! bcryptCompare(password, user.services.password.bcrypt)) {                                  // 68
    result.error = new Meteor.Error(403, "Incorrect password");                                    // 69
  }                                                                                                // 70
                                                                                                   // 71
  return result;                                                                                   // 72
};                                                                                                 // 73
var checkPassword = Accounts._checkPassword;                                                       // 74
                                                                                                   // 75
///                                                                                                // 76
/// LOGIN                                                                                          // 77
///                                                                                                // 78
                                                                                                   // 79
Accounts._findUserByQuery = function (query) {                                                     // 80
  var user = null;                                                                                 // 81
                                                                                                   // 82
  if (query.id) {                                                                                  // 83
    user = Meteor.users.findOne({ _id: query.id });                                                // 84
  } else {                                                                                         // 85
    var fieldName;                                                                                 // 86
    var fieldValue;                                                                                // 87
    if (query.username) {                                                                          // 88
      fieldName = 'username';                                                                      // 89
      fieldValue = query.username;                                                                 // 90
    } else if (query.email) {                                                                      // 91
      fieldName = 'emails.address';                                                                // 92
      fieldValue = query.email;                                                                    // 93
    } else {                                                                                       // 94
      throw new Error("shouldn't happen (validation missed something)");                           // 95
    }                                                                                              // 96
    var selector = {};                                                                             // 97
    selector[fieldName] = fieldValue;                                                              // 98
    user = Meteor.users.findOne(selector);                                                         // 99
    // If user is not found, try a case insensitive lookup                                         // 100
    if (!user) {                                                                                   // 101
      selector = selectorForFastCaseInsensitiveLookup(fieldName, fieldValue);                      // 102
      var candidateUsers = Meteor.users.find(selector).fetch();                                    // 103
      // No match if multiple candidates are found                                                 // 104
      if (candidateUsers.length === 1) {                                                           // 105
        user = candidateUsers[0];                                                                  // 106
      }                                                                                            // 107
    }                                                                                              // 108
  }                                                                                                // 109
                                                                                                   // 110
  return user;                                                                                     // 111
};                                                                                                 // 112
                                                                                                   // 113
/**                                                                                                // 114
 * @summary Finds the user with the specified username.                                            // 115
 * First tries to match username case sensitively; if that fails, it                               // 116
 * tries case insensitively; but if more than one user matches the case                            // 117
 * insensitive search, it returns null.                                                            // 118
 * @locus Server                                                                                   // 119
 * @param {String} username The username to look for                                               // 120
 * @returns {Object} A user if found, else null                                                    // 121
 */                                                                                                // 122
Accounts.findUserByUsername = function (username) {                                                // 123
  return Accounts._findUserByQuery({                                                               // 124
    username: username                                                                             // 125
  });                                                                                              // 126
};                                                                                                 // 127
                                                                                                   // 128
/**                                                                                                // 129
 * @summary Finds the user with the specified email.                                               // 130
 * First tries to match email case sensitively; if that fails, it                                  // 131
 * tries case insensitively; but if more than one user matches the case                            // 132
 * insensitive search, it returns null.                                                            // 133
 * @locus Server                                                                                   // 134
 * @param {String} email The email address to look for                                             // 135
 * @returns {Object} A user if found, else null                                                    // 136
 */                                                                                                // 137
Accounts.findUserByEmail = function (email) {                                                      // 138
  return Accounts._findUserByQuery({                                                               // 139
    email: email                                                                                   // 140
  });                                                                                              // 141
};                                                                                                 // 142
                                                                                                   // 143
// Generates a MongoDB selector that can be used to perform a fast case                            // 144
// insensitive lookup for the given fieldName and string. Since MongoDB does                       // 145
// not support case insensitive indexes, and case insensitive regex queries                        // 146
// are slow, we construct a set of prefix selectors for all permutations of                        // 147
// the first 4 characters ourselves. We first attempt to matching against                          // 148
// these, and because 'prefix expression' regex queries do use indexes (see                        // 149
// http://docs.mongodb.org/v2.6/reference/operator/query/regex/#index-use),                        // 150
// this has been found to greatly improve performance (from 1200ms to 5ms in a                     // 151
// test with 1.000.000 users).                                                                     // 152
var selectorForFastCaseInsensitiveLookup = function (fieldName, string) {                          // 153
  // Performance seems to improve up to 4 prefix characters                                        // 154
  var prefix = string.substring(0, Math.min(string.length, 4));                                    // 155
  var orClause = _.map(generateCasePermutationsForString(prefix),                                  // 156
    function (prefixPermutation) {                                                                 // 157
      var selector = {};                                                                           // 158
      selector[fieldName] =                                                                        // 159
        new RegExp('^' + Meteor._escapeRegExp(prefixPermutation));                                 // 160
      return selector;                                                                             // 161
    });                                                                                            // 162
  var caseInsensitiveClause = {};                                                                  // 163
  caseInsensitiveClause[fieldName] =                                                               // 164
    new RegExp('^' + Meteor._escapeRegExp(string) + '$', 'i')                                      // 165
  return {$and: [{$or: orClause}, caseInsensitiveClause]};                                         // 166
}                                                                                                  // 167
                                                                                                   // 168
// Generates permutations of all case variations of a given string.                                // 169
var generateCasePermutationsForString = function (string) {                                        // 170
  var permutations = [''];                                                                         // 171
  for (var i = 0; i < string.length; i++) {                                                        // 172
    var ch = string.charAt(i);                                                                     // 173
    permutations = _.flatten(_.map(permutations, function (prefix) {                               // 174
      var lowerCaseChar = ch.toLowerCase();                                                        // 175
      var upperCaseChar = ch.toUpperCase();                                                        // 176
      // Don't add unneccesary permutations when ch is not a letter                                // 177
      if (lowerCaseChar === upperCaseChar) {                                                       // 178
        return [prefix + ch];                                                                      // 179
      } else {                                                                                     // 180
        return [prefix + lowerCaseChar, prefix + upperCaseChar];                                   // 181
      }                                                                                            // 182
    }));                                                                                           // 183
  }                                                                                                // 184
  return permutations;                                                                             // 185
}                                                                                                  // 186
                                                                                                   // 187
var checkForCaseInsensitiveDuplicates = function (fieldName, displayName, fieldValue, ownUserId) {
  // Some tests need the ability to add users with the same case insensitive                       // 189
  // value, hence the _skipCaseInsensitiveChecksForTest check                                      // 190
  var skipCheck = _.has(Accounts._skipCaseInsensitiveChecksForTest, fieldValue);                   // 191
                                                                                                   // 192
  if (fieldValue && !skipCheck) {                                                                  // 193
    var matchedUsers = Meteor.users.find(                                                          // 194
      selectorForFastCaseInsensitiveLookup(fieldName, fieldValue)).fetch();                        // 195
                                                                                                   // 196
    if (matchedUsers.length > 0 &&                                                                 // 197
        // If we don't have a userId yet, any match we find is a duplicate                         // 198
        (!ownUserId ||                                                                             // 199
        // Otherwise, check to see if there are multiple matches or a match                        // 200
        // that is not us                                                                          // 201
        (matchedUsers.length > 1 || matchedUsers[0]._id !== ownUserId))) {                         // 202
      throw new Meteor.Error(403, displayName + " already exists.");                               // 203
    }                                                                                              // 204
  }                                                                                                // 205
};                                                                                                 // 206
                                                                                                   // 207
// XXX maybe this belongs in the check package                                                     // 208
var NonEmptyString = Match.Where(function (x) {                                                    // 209
  check(x, String);                                                                                // 210
  return x.length > 0;                                                                             // 211
});                                                                                                // 212
                                                                                                   // 213
var userQueryValidator = Match.Where(function (user) {                                             // 214
  check(user, {                                                                                    // 215
    id: Match.Optional(NonEmptyString),                                                            // 216
    username: Match.Optional(NonEmptyString),                                                      // 217
    email: Match.Optional(NonEmptyString)                                                          // 218
  });                                                                                              // 219
  if (_.keys(user).length !== 1)                                                                   // 220
    throw new Match.Error("User property must have exactly one field");                            // 221
  return true;                                                                                     // 222
});                                                                                                // 223
                                                                                                   // 224
var passwordValidator = Match.OneOf(                                                               // 225
  String,                                                                                          // 226
  { digest: String, algorithm: String }                                                            // 227
);                                                                                                 // 228
                                                                                                   // 229
// Handler to login with a password.                                                               // 230
//                                                                                                 // 231
// The Meteor client sets options.password to an object with keys                                  // 232
// 'digest' (set to SHA256(password)) and 'algorithm' ("sha-256").                                 // 233
//                                                                                                 // 234
// For other DDP clients which don't have access to SHA, the handler                               // 235
// also accepts the plaintext password in options.password as a string.                            // 236
//                                                                                                 // 237
// (It might be nice if servers could turn the plaintext password                                  // 238
// option off. Or maybe it should be opt-in, not opt-out?                                          // 239
// Accounts.config option?)                                                                        // 240
//                                                                                                 // 241
// Note that neither password option is secure without SSL.                                        // 242
//                                                                                                 // 243
Accounts.registerLoginHandler("password", function (options) {                                     // 244
  if (! options.password || options.srp)                                                           // 245
    return undefined; // don't handle                                                              // 246
                                                                                                   // 247
  check(options, {                                                                                 // 248
    user: userQueryValidator,                                                                      // 249
    password: passwordValidator                                                                    // 250
  });                                                                                              // 251
                                                                                                   // 252
                                                                                                   // 253
  var user = Accounts._findUserByQuery(options.user);                                              // 254
  if (!user)                                                                                       // 255
    throw new Meteor.Error(403, "User not found");                                                 // 256
                                                                                                   // 257
  if (!user.services || !user.services.password ||                                                 // 258
      !(user.services.password.bcrypt || user.services.password.srp))                              // 259
    throw new Meteor.Error(403, "User has no password set");                                       // 260
                                                                                                   // 261
  if (!user.services.password.bcrypt) {                                                            // 262
    if (typeof options.password === "string") {                                                    // 263
      // The client has presented a plaintext password, and the user is                            // 264
      // not upgraded to bcrypt yet. We don't attempt to tell the client                           // 265
      // to upgrade to bcrypt, because it might be a standalone DDP                                // 266
      // client doesn't know how to do such a thing.                                               // 267
      var verifier = user.services.password.srp;                                                   // 268
      var newVerifier = SRP.generateVerifier(options.password, {                                   // 269
        identity: verifier.identity, salt: verifier.salt});                                        // 270
                                                                                                   // 271
      if (verifier.verifier !== newVerifier.verifier) {                                            // 272
        return {                                                                                   // 273
          userId: user._id,                                                                        // 274
          error: new Meteor.Error(403, "Incorrect password")                                       // 275
        };                                                                                         // 276
      }                                                                                            // 277
                                                                                                   // 278
      return {userId: user._id};                                                                   // 279
    } else {                                                                                       // 280
      // Tell the client to use the SRP upgrade process.                                           // 281
      throw new Meteor.Error(400, "old password format", EJSON.stringify({                         // 282
        format: 'srp',                                                                             // 283
        identity: user.services.password.srp.identity                                              // 284
      }));                                                                                         // 285
    }                                                                                              // 286
  }                                                                                                // 287
                                                                                                   // 288
  return checkPassword(                                                                            // 289
    user,                                                                                          // 290
    options.password                                                                               // 291
  );                                                                                               // 292
});                                                                                                // 293
                                                                                                   // 294
// Handler to login using the SRP upgrade path. To use this login                                  // 295
// handler, the client must provide:                                                               // 296
//   - srp: H(identity + ":" + password)                                                           // 297
//   - password: a string or an object with properties 'digest' and 'algorithm'                    // 298
//                                                                                                 // 299
// We use `options.srp` to verify that the client knows the correct                                // 300
// password without doing a full SRP flow. Once we've checked that, we                             // 301
// upgrade the user to bcrypt and remove the SRP information from the                              // 302
// user document.                                                                                  // 303
//                                                                                                 // 304
// The client ends up using this login handler after trying the normal                             // 305
// login handler (above), which throws an error telling the client to                              // 306
// try the SRP upgrade path.                                                                       // 307
//                                                                                                 // 308
// XXX COMPAT WITH 0.8.1.3                                                                         // 309
Accounts.registerLoginHandler("password", function (options) {                                     // 310
  if (!options.srp || !options.password)                                                           // 311
    return undefined; // don't handle                                                              // 312
                                                                                                   // 313
  check(options, {                                                                                 // 314
    user: userQueryValidator,                                                                      // 315
    srp: String,                                                                                   // 316
    password: passwordValidator                                                                    // 317
  });                                                                                              // 318
                                                                                                   // 319
  var user = Accounts._findUserByQuery(options.user);                                              // 320
  if (!user)                                                                                       // 321
    throw new Meteor.Error(403, "User not found");                                                 // 322
                                                                                                   // 323
  // Check to see if another simultaneous login has already upgraded                               // 324
  // the user record to bcrypt.                                                                    // 325
  if (user.services && user.services.password && user.services.password.bcrypt)                    // 326
    return checkPassword(user, options.password);                                                  // 327
                                                                                                   // 328
  if (!(user.services && user.services.password && user.services.password.srp))                    // 329
    throw new Meteor.Error(403, "User has no password set");                                       // 330
                                                                                                   // 331
  var v1 = user.services.password.srp.verifier;                                                    // 332
  var v2 = SRP.generateVerifier(                                                                   // 333
    null,                                                                                          // 334
    {                                                                                              // 335
      hashedIdentityAndPassword: options.srp,                                                      // 336
      salt: user.services.password.srp.salt                                                        // 337
    }                                                                                              // 338
  ).verifier;                                                                                      // 339
  if (v1 !== v2)                                                                                   // 340
    return {                                                                                       // 341
      userId: user._id,                                                                            // 342
      error: new Meteor.Error(403, "Incorrect password")                                           // 343
    };                                                                                             // 344
                                                                                                   // 345
  // Upgrade to bcrypt on successful login.                                                        // 346
  var salted = hashPassword(options.password);                                                     // 347
  Meteor.users.update(                                                                             // 348
    user._id,                                                                                      // 349
    {                                                                                              // 350
      $unset: { 'services.password.srp': 1 },                                                      // 351
      $set: { 'services.password.bcrypt': salted }                                                 // 352
    }                                                                                              // 353
  );                                                                                               // 354
                                                                                                   // 355
  return {userId: user._id};                                                                       // 356
});                                                                                                // 357
                                                                                                   // 358
                                                                                                   // 359
///                                                                                                // 360
/// CHANGING                                                                                       // 361
///                                                                                                // 362
                                                                                                   // 363
/**                                                                                                // 364
 * @summary Change a user's username. Use this instead of updating the                             // 365
 * database directly. The operation will fail if there is an existing user                         // 366
 * with a username only differing in case.                                                         // 367
 * @locus Server                                                                                   // 368
 * @param {String} userId The ID of the user to update.                                            // 369
 * @param {String} newUsername A new username for the user.                                        // 370
 */                                                                                                // 371
Accounts.setUsername = function (userId, newUsername) {                                            // 372
  check(userId, NonEmptyString);                                                                   // 373
  check(newUsername, NonEmptyString);                                                              // 374
                                                                                                   // 375
  var user = Meteor.users.findOne(userId);                                                         // 376
  if (!user)                                                                                       // 377
    throw new Meteor.Error(403, "User not found");                                                 // 378
                                                                                                   // 379
  var oldUsername = user.username;                                                                 // 380
                                                                                                   // 381
  // Perform a case insensitive check fro duplicates before update                                 // 382
  checkForCaseInsensitiveDuplicates('username', 'Username', newUsername, user._id);                // 383
                                                                                                   // 384
  Meteor.users.update({_id: user._id}, {$set: {username: newUsername}});                           // 385
                                                                                                   // 386
  // Perform another check after update, in case a matching user has been                          // 387
  // inserted in the meantime                                                                      // 388
  try {                                                                                            // 389
    checkForCaseInsensitiveDuplicates('username', 'Username', newUsername, user._id);              // 390
  } catch (ex) {                                                                                   // 391
    // Undo update if the check fails                                                              // 392
    Meteor.users.update({_id: user._id}, {$set: {username: oldUsername}});                         // 393
    throw ex;                                                                                      // 394
  }                                                                                                // 395
};                                                                                                 // 396
                                                                                                   // 397
// Let the user change their own password if they know the old                                     // 398
// password. `oldPassword` and `newPassword` should be objects with keys                           // 399
// `digest` and `algorithm` (representing the SHA256 of the password).                             // 400
//                                                                                                 // 401
// XXX COMPAT WITH 0.8.1.3                                                                         // 402
// Like the login method, if the user hasn't been upgraded from SRP to                             // 403
// bcrypt yet, then this method will throw an 'old password format'                                // 404
// error. The client should call the SRP upgrade login handler and then                            // 405
// retry this method again.                                                                        // 406
//                                                                                                 // 407
// UNLIKE the login method, there is no way to avoid getting SRP upgrade                           // 408
// errors thrown. The reasoning for this is that clients using this                                // 409
// method directly will need to be updated anyway because we no longer                             // 410
// support the SRP flow that they would have been doing to use this                                // 411
// method previously.                                                                              // 412
Meteor.methods({changePassword: function (oldPassword, newPassword) {                              // 413
  check(oldPassword, passwordValidator);                                                           // 414
  check(newPassword, passwordValidator);                                                           // 415
                                                                                                   // 416
  if (!this.userId)                                                                                // 417
    throw new Meteor.Error(401, "Must be logged in");                                              // 418
                                                                                                   // 419
  var user = Meteor.users.findOne(this.userId);                                                    // 420
  if (!user)                                                                                       // 421
    throw new Meteor.Error(403, "User not found");                                                 // 422
                                                                                                   // 423
  if (!user.services || !user.services.password ||                                                 // 424
      (!user.services.password.bcrypt && !user.services.password.srp))                             // 425
    throw new Meteor.Error(403, "User has no password set");                                       // 426
                                                                                                   // 427
  if (! user.services.password.bcrypt) {                                                           // 428
    throw new Meteor.Error(400, "old password format", EJSON.stringify({                           // 429
      format: 'srp',                                                                               // 430
      identity: user.services.password.srp.identity                                                // 431
    }));                                                                                           // 432
  }                                                                                                // 433
                                                                                                   // 434
  var result = checkPassword(user, oldPassword);                                                   // 435
  if (result.error)                                                                                // 436
    throw result.error;                                                                            // 437
                                                                                                   // 438
  var hashed = hashPassword(newPassword);                                                          // 439
                                                                                                   // 440
  // It would be better if this removed ALL existing tokens and replaced                           // 441
  // the token for the current connection with a new one, but that would                           // 442
  // be tricky, so we'll settle for just replacing all tokens other than                           // 443
  // the one for the current connection.                                                           // 444
  var currentToken = Accounts._getLoginToken(this.connection.id);                                  // 445
  Meteor.users.update(                                                                             // 446
    { _id: this.userId },                                                                          // 447
    {                                                                                              // 448
      $set: { 'services.password.bcrypt': hashed },                                                // 449
      $pull: {                                                                                     // 450
        'services.resume.loginTokens': { hashedToken: { $ne: currentToken } }                      // 451
      },                                                                                           // 452
      $unset: { 'services.password.reset': 1 }                                                     // 453
    }                                                                                              // 454
  );                                                                                               // 455
                                                                                                   // 456
  return {passwordChanged: true};                                                                  // 457
}});                                                                                               // 458
                                                                                                   // 459
                                                                                                   // 460
// Force change the users password.                                                                // 461
                                                                                                   // 462
/**                                                                                                // 463
 * @summary Forcibly change the password for a user.                                               // 464
 * @locus Server                                                                                   // 465
 * @param {String} userId The id of the user to update.                                            // 466
 * @param {String} newPassword A new password for the user.                                        // 467
 * @param {Object} [options]                                                                       // 468
 * @param {Object} options.logout Logout all current connections with this userId (default: true)  // 469
 */                                                                                                // 470
Accounts.setPassword = function (userId, newPlaintextPassword, options) {                          // 471
  options = _.extend({logout: true}, options);                                                     // 472
                                                                                                   // 473
  var user = Meteor.users.findOne(userId);                                                         // 474
  if (!user)                                                                                       // 475
    throw new Meteor.Error(403, "User not found");                                                 // 476
                                                                                                   // 477
  var update = {                                                                                   // 478
    $unset: {                                                                                      // 479
      'services.password.srp': 1, // XXX COMPAT WITH 0.8.1.3                                       // 480
      'services.password.reset': 1                                                                 // 481
    },                                                                                             // 482
    $set: {'services.password.bcrypt': hashPassword(newPlaintextPassword)}                         // 483
  };                                                                                               // 484
                                                                                                   // 485
  if (options.logout) {                                                                            // 486
    update.$unset['services.resume.loginTokens'] = 1;                                              // 487
  }                                                                                                // 488
                                                                                                   // 489
  Meteor.users.update({_id: user._id}, update);                                                    // 490
};                                                                                                 // 491
                                                                                                   // 492
                                                                                                   // 493
///                                                                                                // 494
/// RESETTING VIA EMAIL                                                                            // 495
///                                                                                                // 496
                                                                                                   // 497
// Method called by a user to request a password reset email. This is                              // 498
// the start of the reset process.                                                                 // 499
Meteor.methods({forgotPassword: function (options) {                                               // 500
  check(options, {email: String});                                                                 // 501
                                                                                                   // 502
  var user = Meteor.users.findOne({"emails.address": options.email});                              // 503
  if (!user)                                                                                       // 504
    throw new Meteor.Error(403, "User not found");                                                 // 505
                                                                                                   // 506
  Accounts.sendResetPasswordEmail(user._id, options.email);                                        // 507
}});                                                                                               // 508
                                                                                                   // 509
// send the user an email with a link that when opened allows the user                             // 510
// to set a new password, without the old password.                                                // 511
                                                                                                   // 512
/**                                                                                                // 513
 * @summary Send an email with a link the user can use to reset their password.                    // 514
 * @locus Server                                                                                   // 515
 * @param {String} userId The id of the user to send email to.                                     // 516
 * @param {String} [email] Optional. Which address of the user's to send the email to. This address must be in the user's `emails` list. Defaults to the first email in the list.
 */                                                                                                // 518
Accounts.sendResetPasswordEmail = function (userId, email) {                                       // 519
  // Make sure the user exists, and email is one of their addresses.                               // 520
  var user = Meteor.users.findOne(userId);                                                         // 521
  if (!user)                                                                                       // 522
    throw new Error("Can't find user");                                                            // 523
  // pick the first email if we weren't passed an email.                                           // 524
  if (!email && user.emails && user.emails[0])                                                     // 525
    email = user.emails[0].address;                                                                // 526
  // make sure we have a valid email                                                               // 527
  if (!email || !_.contains(_.pluck(user.emails || [], 'address'), email))                         // 528
    throw new Error("No such email for user.");                                                    // 529
                                                                                                   // 530
  var token = Random.secret();                                                                     // 531
  var when = new Date();                                                                           // 532
  var tokenRecord = {                                                                              // 533
    token: token,                                                                                  // 534
    email: email,                                                                                  // 535
    when: when                                                                                     // 536
  };                                                                                               // 537
  Meteor.users.update(userId, {$set: {                                                             // 538
    "services.password.reset": tokenRecord                                                         // 539
  }});                                                                                             // 540
  // before passing to template, update user object with new token                                 // 541
  Meteor._ensure(user, 'services', 'password').reset = tokenRecord;                                // 542
                                                                                                   // 543
  var resetPasswordUrl = Accounts.urls.resetPassword(token);                                       // 544
                                                                                                   // 545
  var options = {                                                                                  // 546
    to: email,                                                                                     // 547
    from: Accounts.emailTemplates.resetPassword.from                                               // 548
      ? Accounts.emailTemplates.resetPassword.from(user)                                           // 549
      : Accounts.emailTemplates.from,                                                              // 550
    subject: Accounts.emailTemplates.resetPassword.subject(user)                                   // 551
  };                                                                                               // 552
                                                                                                   // 553
  if (typeof Accounts.emailTemplates.resetPassword.text === 'function') {                          // 554
    options.text =                                                                                 // 555
      Accounts.emailTemplates.resetPassword.text(user, resetPasswordUrl);                          // 556
  }                                                                                                // 557
                                                                                                   // 558
  if (typeof Accounts.emailTemplates.resetPassword.html === 'function')                            // 559
    options.html =                                                                                 // 560
      Accounts.emailTemplates.resetPassword.html(user, resetPasswordUrl);                          // 561
                                                                                                   // 562
  if (typeof Accounts.emailTemplates.headers === 'object') {                                       // 563
    options.headers = Accounts.emailTemplates.headers;                                             // 564
  }                                                                                                // 565
                                                                                                   // 566
  Email.send(options);                                                                             // 567
};                                                                                                 // 568
                                                                                                   // 569
// send the user an email informing them that their account was created, with                      // 570
// a link that when opened both marks their email as verified and forces them                      // 571
// to choose their password. The email must be one of the addresses in the                         // 572
// user's emails field, or undefined to pick the first email automatically.                        // 573
//                                                                                                 // 574
// This is not called automatically. It must be called manually if you                             // 575
// want to use enrollment emails.                                                                  // 576
                                                                                                   // 577
/**                                                                                                // 578
 * @summary Send an email with a link the user can use to set their initial password.              // 579
 * @locus Server                                                                                   // 580
 * @param {String} userId The id of the user to send email to.                                     // 581
 * @param {String} [email] Optional. Which address of the user's to send the email to. This address must be in the user's `emails` list. Defaults to the first email in the list.
 */                                                                                                // 583
Accounts.sendEnrollmentEmail = function (userId, email) {                                          // 584
  // XXX refactor! This is basically identical to sendResetPasswordEmail.                          // 585
                                                                                                   // 586
  // Make sure the user exists, and email is in their addresses.                                   // 587
  var user = Meteor.users.findOne(userId);                                                         // 588
  if (!user)                                                                                       // 589
    throw new Error("Can't find user");                                                            // 590
  // pick the first email if we weren't passed an email.                                           // 591
  if (!email && user.emails && user.emails[0])                                                     // 592
    email = user.emails[0].address;                                                                // 593
  // make sure we have a valid email                                                               // 594
  if (!email || !_.contains(_.pluck(user.emails || [], 'address'), email))                         // 595
    throw new Error("No such email for user.");                                                    // 596
                                                                                                   // 597
  var token = Random.secret();                                                                     // 598
  var when = new Date();                                                                           // 599
  var tokenRecord = {                                                                              // 600
    token: token,                                                                                  // 601
    email: email,                                                                                  // 602
    when: when                                                                                     // 603
  };                                                                                               // 604
  Meteor.users.update(userId, {$set: {                                                             // 605
    "services.password.reset": tokenRecord                                                         // 606
  }});                                                                                             // 607
                                                                                                   // 608
  // before passing to template, update user object with new token                                 // 609
  Meteor._ensure(user, 'services', 'password').reset = tokenRecord;                                // 610
                                                                                                   // 611
  var enrollAccountUrl = Accounts.urls.enrollAccount(token);                                       // 612
                                                                                                   // 613
  var options = {                                                                                  // 614
    to: email,                                                                                     // 615
    from: Accounts.emailTemplates.enrollAccount.from                                               // 616
      ? Accounts.emailTemplates.enrollAccount.from(user)                                           // 617
      : Accounts.emailTemplates.from,                                                              // 618
    subject: Accounts.emailTemplates.enrollAccount.subject(user)                                   // 619
  };                                                                                               // 620
                                                                                                   // 621
  if (typeof Accounts.emailTemplates.enrollAccount.text === 'function') {                          // 622
    options.text =                                                                                 // 623
      Accounts.emailTemplates.enrollAccount.text(user, enrollAccountUrl);                          // 624
  }                                                                                                // 625
                                                                                                   // 626
  if (typeof Accounts.emailTemplates.enrollAccount.html === 'function')                            // 627
    options.html =                                                                                 // 628
      Accounts.emailTemplates.enrollAccount.html(user, enrollAccountUrl);                          // 629
                                                                                                   // 630
  if (typeof Accounts.emailTemplates.headers === 'object') {                                       // 631
    options.headers = Accounts.emailTemplates.headers;                                             // 632
  }                                                                                                // 633
                                                                                                   // 634
  Email.send(options);                                                                             // 635
};                                                                                                 // 636
                                                                                                   // 637
                                                                                                   // 638
// Take token from sendResetPasswordEmail or sendEnrollmentEmail, change                           // 639
// the users password, and log them in.                                                            // 640
Meteor.methods({resetPassword: function (token, newPassword) {                                     // 641
  var self = this;                                                                                 // 642
  return Accounts._loginMethod(                                                                    // 643
    self,                                                                                          // 644
    "resetPassword",                                                                               // 645
    arguments,                                                                                     // 646
    "password",                                                                                    // 647
    function () {                                                                                  // 648
      check(token, String);                                                                        // 649
      check(newPassword, passwordValidator);                                                       // 650
                                                                                                   // 651
      var user = Meteor.users.findOne({                                                            // 652
        "services.password.reset.token": token});                                                  // 653
      if (!user)                                                                                   // 654
        throw new Meteor.Error(403, "Token expired");                                              // 655
      var email = user.services.password.reset.email;                                              // 656
      if (!_.include(_.pluck(user.emails || [], 'address'), email))                                // 657
        return {                                                                                   // 658
          userId: user._id,                                                                        // 659
          error: new Meteor.Error(403, "Token has invalid email address")                          // 660
        };                                                                                         // 661
                                                                                                   // 662
      var hashed = hashPassword(newPassword);                                                      // 663
                                                                                                   // 664
      // NOTE: We're about to invalidate tokens on the user, who we might be                       // 665
      // logged in as. Make sure to avoid logging ourselves out if this                            // 666
      // happens. But also make sure not to leave the connection in a state                        // 667
      // of having a bad token set if things fail.                                                 // 668
      var oldToken = Accounts._getLoginToken(self.connection.id);                                  // 669
      Accounts._setLoginToken(user._id, self.connection, null);                                    // 670
      var resetToOldToken = function () {                                                          // 671
        Accounts._setLoginToken(user._id, self.connection, oldToken);                              // 672
      };                                                                                           // 673
                                                                                                   // 674
      try {                                                                                        // 675
        // Update the user record by:                                                              // 676
        // - Changing the password to the new one                                                  // 677
        // - Forgetting about the reset token that was just used                                   // 678
        // - Verifying their email, since they got the password reset via email.                   // 679
        var affectedRecords = Meteor.users.update(                                                 // 680
          {                                                                                        // 681
            _id: user._id,                                                                         // 682
            'emails.address': email,                                                               // 683
            'services.password.reset.token': token                                                 // 684
          },                                                                                       // 685
          {$set: {'services.password.bcrypt': hashed,                                              // 686
                  'emails.$.verified': true},                                                      // 687
           $unset: {'services.password.reset': 1,                                                  // 688
                    'services.password.srp': 1}});                                                 // 689
        if (affectedRecords !== 1)                                                                 // 690
          return {                                                                                 // 691
            userId: user._id,                                                                      // 692
            error: new Meteor.Error(403, "Invalid email")                                          // 693
          };                                                                                       // 694
      } catch (err) {                                                                              // 695
        resetToOldToken();                                                                         // 696
        throw err;                                                                                 // 697
      }                                                                                            // 698
                                                                                                   // 699
      // Replace all valid login tokens with new ones (changing                                    // 700
      // password should invalidate existing sessions).                                            // 701
      Accounts._clearAllLoginTokens(user._id);                                                     // 702
                                                                                                   // 703
      return {userId: user._id};                                                                   // 704
    }                                                                                              // 705
  );                                                                                               // 706
}});                                                                                               // 707
                                                                                                   // 708
///                                                                                                // 709
/// EMAIL VERIFICATION                                                                             // 710
///                                                                                                // 711
                                                                                                   // 712
                                                                                                   // 713
// send the user an email with a link that when opened marks that                                  // 714
// address as verified                                                                             // 715
                                                                                                   // 716
/**                                                                                                // 717
 * @summary Send an email with a link the user can use verify their email address.                 // 718
 * @locus Server                                                                                   // 719
 * @param {String} userId The id of the user to send email to.                                     // 720
 * @param {String} [email] Optional. Which address of the user's to send the email to. This address must be in the user's `emails` list. Defaults to the first unverified email in the list.
 */                                                                                                // 722
Accounts.sendVerificationEmail = function (userId, address) {                                      // 723
  // XXX Also generate a link using which someone can delete this                                  // 724
  // account if they own said address but weren't those who created                                // 725
  // this account.                                                                                 // 726
                                                                                                   // 727
  // Make sure the user exists, and address is one of their addresses.                             // 728
  var user = Meteor.users.findOne(userId);                                                         // 729
  if (!user)                                                                                       // 730
    throw new Error("Can't find user");                                                            // 731
  // pick the first unverified address if we weren't passed an address.                            // 732
  if (!address) {                                                                                  // 733
    var email = _.find(user.emails || [],                                                          // 734
                       function (e) { return !e.verified; });                                      // 735
    address = (email || {}).address;                                                               // 736
  }                                                                                                // 737
  // make sure we have a valid address                                                             // 738
  if (!address || !_.contains(_.pluck(user.emails || [], 'address'), address))                     // 739
    throw new Error("No such email address for user.");                                            // 740
                                                                                                   // 741
                                                                                                   // 742
  var tokenRecord = {                                                                              // 743
    token: Random.secret(),                                                                        // 744
    address: address,                                                                              // 745
    when: new Date()};                                                                             // 746
  Meteor.users.update(                                                                             // 747
    {_id: userId},                                                                                 // 748
    {$push: {'services.email.verificationTokens': tokenRecord}});                                  // 749
                                                                                                   // 750
  // before passing to template, update user object with new token                                 // 751
  Meteor._ensure(user, 'services', 'email');                                                       // 752
  if (!user.services.email.verificationTokens) {                                                   // 753
    user.services.email.verificationTokens = [];                                                   // 754
  }                                                                                                // 755
  user.services.email.verificationTokens.push(tokenRecord);                                        // 756
                                                                                                   // 757
  var verifyEmailUrl = Accounts.urls.verifyEmail(tokenRecord.token);                               // 758
                                                                                                   // 759
  var options = {                                                                                  // 760
    to: address,                                                                                   // 761
    from: Accounts.emailTemplates.verifyEmail.from                                                 // 762
      ? Accounts.emailTemplates.verifyEmail.from(user)                                             // 763
      : Accounts.emailTemplates.from,                                                              // 764
    subject: Accounts.emailTemplates.verifyEmail.subject(user)                                     // 765
  };                                                                                               // 766
                                                                                                   // 767
  if (typeof Accounts.emailTemplates.verifyEmail.text === 'function') {                            // 768
    options.text =                                                                                 // 769
      Accounts.emailTemplates.verifyEmail.text(user, verifyEmailUrl);                              // 770
  }                                                                                                // 771
                                                                                                   // 772
  if (typeof Accounts.emailTemplates.verifyEmail.html === 'function')                              // 773
    options.html =                                                                                 // 774
      Accounts.emailTemplates.verifyEmail.html(user, verifyEmailUrl);                              // 775
                                                                                                   // 776
  if (typeof Accounts.emailTemplates.headers === 'object') {                                       // 777
    options.headers = Accounts.emailTemplates.headers;                                             // 778
  }                                                                                                // 779
                                                                                                   // 780
  Email.send(options);                                                                             // 781
};                                                                                                 // 782
                                                                                                   // 783
// Take token from sendVerificationEmail, mark the email as verified,                              // 784
// and log them in.                                                                                // 785
Meteor.methods({verifyEmail: function (token) {                                                    // 786
  var self = this;                                                                                 // 787
  return Accounts._loginMethod(                                                                    // 788
    self,                                                                                          // 789
    "verifyEmail",                                                                                 // 790
    arguments,                                                                                     // 791
    "password",                                                                                    // 792
    function () {                                                                                  // 793
      check(token, String);                                                                        // 794
                                                                                                   // 795
      var user = Meteor.users.findOne(                                                             // 796
        {'services.email.verificationTokens.token': token});                                       // 797
      if (!user)                                                                                   // 798
        throw new Meteor.Error(403, "Verify email link expired");                                  // 799
                                                                                                   // 800
      var tokenRecord = _.find(user.services.email.verificationTokens,                             // 801
                               function (t) {                                                      // 802
                                 return t.token == token;                                          // 803
                               });                                                                 // 804
      if (!tokenRecord)                                                                            // 805
        return {                                                                                   // 806
          userId: user._id,                                                                        // 807
          error: new Meteor.Error(403, "Verify email link expired")                                // 808
        };                                                                                         // 809
                                                                                                   // 810
      var emailsRecord = _.find(user.emails, function (e) {                                        // 811
        return e.address == tokenRecord.address;                                                   // 812
      });                                                                                          // 813
      if (!emailsRecord)                                                                           // 814
        return {                                                                                   // 815
          userId: user._id,                                                                        // 816
          error: new Meteor.Error(403, "Verify email link is for unknown address")                 // 817
        };                                                                                         // 818
                                                                                                   // 819
      // By including the address in the query, we can use 'emails.$' in the                       // 820
      // modifier to get a reference to the specific object in the emails                          // 821
      // array. See                                                                                // 822
      // http://www.mongodb.org/display/DOCS/Updating/#Updating-The%24positionaloperator)          // 823
      // http://www.mongodb.org/display/DOCS/Updating#Updating-%24pull                             // 824
      Meteor.users.update(                                                                         // 825
        {_id: user._id,                                                                            // 826
         'emails.address': tokenRecord.address},                                                   // 827
        {$set: {'emails.$.verified': true},                                                        // 828
         $pull: {'services.email.verificationTokens': {address: tokenRecord.address}}});           // 829
                                                                                                   // 830
      return {userId: user._id};                                                                   // 831
    }                                                                                              // 832
  );                                                                                               // 833
}});                                                                                               // 834
                                                                                                   // 835
/**                                                                                                // 836
 * @summary Add an email address for a user. Use this instead of directly                          // 837
 * updating the database. The operation will fail if there is a different user                     // 838
 * with an email only differing in case. If the specified user has an existing                     // 839
 * email only differing in case however, we replace it.                                            // 840
 * @locus Server                                                                                   // 841
 * @param {String} userId The ID of the user to update.                                            // 842
 * @param {String} newEmail A new email address for the user.                                      // 843
 * @param {Boolean} [verified] Optional - whether the new email address should                     // 844
 * be marked as verified. Defaults to false.                                                       // 845
 */                                                                                                // 846
Accounts.addEmail = function (userId, newEmail, verified) {                                        // 847
  check(userId, NonEmptyString);                                                                   // 848
  check(newEmail, NonEmptyString);                                                                 // 849
  check(verified, Match.Optional(Boolean));                                                        // 850
                                                                                                   // 851
  if (_.isUndefined(verified)) {                                                                   // 852
    verified = false;                                                                              // 853
  }                                                                                                // 854
                                                                                                   // 855
  var user = Meteor.users.findOne(userId);                                                         // 856
  if (!user)                                                                                       // 857
    throw new Meteor.Error(403, "User not found");                                                 // 858
                                                                                                   // 859
  // Allow users to change their own email to a version with a different case                      // 860
                                                                                                   // 861
  // We don't have to call checkForCaseInsensitiveDuplicates to do a case                          // 862
  // insensitive check across all emails in the database here because: (1) if                      // 863
  // there is no case-insensitive duplicate between this user and other users,                     // 864
  // then we are OK and (2) if this would create a conflict with other users                       // 865
  // then there would already be a case-insensitive duplicate and we can't fix                     // 866
  // that in this code anyway.                                                                     // 867
  var caseInsensitiveRegExp =                                                                      // 868
    new RegExp('^' + Meteor._escapeRegExp(newEmail) + '$', 'i');                                   // 869
                                                                                                   // 870
  var didUpdateOwnEmail = _.any(user.emails, function(email, index) {                              // 871
    if (caseInsensitiveRegExp.test(email.address)) {                                               // 872
      Meteor.users.update({                                                                        // 873
        _id: user._id,                                                                             // 874
        'emails.address': email.address                                                            // 875
      }, {$set: {                                                                                  // 876
        'emails.$.address': newEmail,                                                              // 877
        'emails.$.verified': verified                                                              // 878
      }});                                                                                         // 879
      return true;                                                                                 // 880
    }                                                                                              // 881
                                                                                                   // 882
    return false;                                                                                  // 883
  });                                                                                              // 884
                                                                                                   // 885
  // In the other updates below, we have to do another call to                                     // 886
  // checkForCaseInsensitiveDuplicates to make sure that no conflicting values                     // 887
  // were added to the database in the meantime. We don't have to do this for                      // 888
  // the case where the user is updating their email address to one that is the                    // 889
  // same as before, but only different because of capitalization. Read the                        // 890
  // big comment above to understand why.                                                          // 891
                                                                                                   // 892
  if (didUpdateOwnEmail) {                                                                         // 893
    return;                                                                                        // 894
  }                                                                                                // 895
                                                                                                   // 896
  // Perform a case insensitive check for duplicates before update                                 // 897
  checkForCaseInsensitiveDuplicates('emails.address', 'Email', newEmail, user._id);                // 898
                                                                                                   // 899
  Meteor.users.update({                                                                            // 900
    _id: user._id                                                                                  // 901
  }, {                                                                                             // 902
    $addToSet: {                                                                                   // 903
      emails: {                                                                                    // 904
        address: newEmail,                                                                         // 905
        verified: verified                                                                         // 906
      }                                                                                            // 907
    }                                                                                              // 908
  });                                                                                              // 909
                                                                                                   // 910
  // Perform another check after update, in case a matching user has been                          // 911
  // inserted in the meantime                                                                      // 912
  try {                                                                                            // 913
    checkForCaseInsensitiveDuplicates('emails.address', 'Email', newEmail, user._id);              // 914
  } catch (ex) {                                                                                   // 915
    // Undo update if the check fails                                                              // 916
    Meteor.users.update({_id: user._id},                                                           // 917
      {$pull: {emails: {address: newEmail}}});                                                     // 918
    throw ex;                                                                                      // 919
  }                                                                                                // 920
}                                                                                                  // 921
                                                                                                   // 922
/**                                                                                                // 923
 * @summary Remove an email address for a user. Use this instead of updating                       // 924
 * the database directly.                                                                          // 925
 * @locus Server                                                                                   // 926
 * @param {String} userId The ID of the user to update.                                            // 927
 * @param {String} email The email address to remove.                                              // 928
 */                                                                                                // 929
Accounts.removeEmail = function (userId, email) {                                                  // 930
  check(userId, NonEmptyString);                                                                   // 931
  check(email, NonEmptyString);                                                                    // 932
                                                                                                   // 933
  var user = Meteor.users.findOne(userId);                                                         // 934
  if (!user)                                                                                       // 935
    throw new Meteor.Error(403, "User not found");                                                 // 936
                                                                                                   // 937
  Meteor.users.update({_id: user._id},                                                             // 938
    {$pull: {emails: {address: email}}});                                                          // 939
}                                                                                                  // 940
                                                                                                   // 941
///                                                                                                // 942
/// CREATING USERS                                                                                 // 943
///                                                                                                // 944
                                                                                                   // 945
// Shared createUser function called from the createUser method, both                              // 946
// if originates in client or server code. Calls user provided hooks,                              // 947
// does the actual user insertion.                                                                 // 948
//                                                                                                 // 949
// returns the user id                                                                             // 950
var createUser = function (options) {                                                              // 951
  // Unknown keys allowed, because a onCreateUserHook can take arbitrary                           // 952
  // options.                                                                                      // 953
  check(options, Match.ObjectIncluding({                                                           // 954
    username: Match.Optional(String),                                                              // 955
    email: Match.Optional(String),                                                                 // 956
    password: Match.Optional(passwordValidator)                                                    // 957
  }));                                                                                             // 958
                                                                                                   // 959
  var username = options.username;                                                                 // 960
  var email = options.email;                                                                       // 961
  if (!username && !email)                                                                         // 962
    throw new Meteor.Error(400, "Need to set a username or email");                                // 963
                                                                                                   // 964
  var user = {services: {}};                                                                       // 965
  if (options.password) {                                                                          // 966
    var hashed = hashPassword(options.password);                                                   // 967
    user.services.password = { bcrypt: hashed };                                                   // 968
  }                                                                                                // 969
                                                                                                   // 970
  if (username)                                                                                    // 971
    user.username = username;                                                                      // 972
  if (email)                                                                                       // 973
    user.emails = [{address: email, verified: false}];                                             // 974
                                                                                                   // 975
  // Perform a case insensitive check before insert                                                // 976
  checkForCaseInsensitiveDuplicates('username', 'Username', username);                             // 977
  checkForCaseInsensitiveDuplicates('emails.address', 'Email', email);                             // 978
                                                                                                   // 979
  var userId = Accounts.insertUserDoc(options, user);                                              // 980
  // Perform another check after insert, in case a matching user has been                          // 981
  // inserted in the meantime                                                                      // 982
  try {                                                                                            // 983
    checkForCaseInsensitiveDuplicates('username', 'Username', username, userId);                   // 984
    checkForCaseInsensitiveDuplicates('emails.address', 'Email', email, userId);                   // 985
  } catch (ex) {                                                                                   // 986
    // Remove inserted user if the check fails                                                     // 987
    Meteor.users.remove(userId);                                                                   // 988
    throw ex;                                                                                      // 989
  }                                                                                                // 990
  return userId;                                                                                   // 991
};                                                                                                 // 992
                                                                                                   // 993
// method for create user. Requests come from the client.                                          // 994
Meteor.methods({createUser: function (options) {                                                   // 995
  var self = this;                                                                                 // 996
  return Accounts._loginMethod(                                                                    // 997
    self,                                                                                          // 998
    "createUser",                                                                                  // 999
    arguments,                                                                                     // 1000
    "password",                                                                                    // 1001
    function () {                                                                                  // 1002
      // createUser() above does more checking.                                                    // 1003
      check(options, Object);                                                                      // 1004
      if (Accounts._options.forbidClientAccountCreation)                                           // 1005
        return {                                                                                   // 1006
          error: new Meteor.Error(403, "Signups forbidden")                                        // 1007
        };                                                                                         // 1008
                                                                                                   // 1009
      // Create user. result contains id and token.                                                // 1010
      var userId = createUser(options);                                                            // 1011
      // safety belt. createUser is supposed to throw on error. send 500 error                     // 1012
      // instead of sending a verification email with empty userid.                                // 1013
      if (! userId)                                                                                // 1014
        throw new Error("createUser failed to insert new user");                                   // 1015
                                                                                                   // 1016
      // If `Accounts._options.sendVerificationEmail` is set, register                             // 1017
      // a token to verify the user's primary email, and send it to                                // 1018
      // that address.                                                                             // 1019
      if (options.email && Accounts._options.sendVerificationEmail)                                // 1020
        Accounts.sendVerificationEmail(userId, options.email);                                     // 1021
                                                                                                   // 1022
      // client gets logged in as the new user afterwards.                                         // 1023
      return {userId: userId};                                                                     // 1024
    }                                                                                              // 1025
  );                                                                                               // 1026
}});                                                                                               // 1027
                                                                                                   // 1028
// Create user directly on the server.                                                             // 1029
//                                                                                                 // 1030
// Unlike the client version, this does not log you in as this user                                // 1031
// after creation.                                                                                 // 1032
//                                                                                                 // 1033
// returns userId or throws an error if it can't create                                            // 1034
//                                                                                                 // 1035
// XXX add another argument ("server options") that gets sent to onCreateUser,                     // 1036
// which is always empty when called from the createUser method? eg, "admin:                       // 1037
// true", which we want to prevent the client from setting, but which a custom                     // 1038
// method calling Accounts.createUser could set?                                                   // 1039
//                                                                                                 // 1040
Accounts.createUser = function (options, callback) {                                               // 1041
  options = _.clone(options);                                                                      // 1042
                                                                                                   // 1043
  // XXX allow an optional callback?                                                               // 1044
  if (callback) {                                                                                  // 1045
    throw new Error("Accounts.createUser with callback not supported on the server yet.");         // 1046
  }                                                                                                // 1047
                                                                                                   // 1048
  return createUser(options);                                                                      // 1049
};                                                                                                 // 1050
                                                                                                   // 1051
///                                                                                                // 1052
/// PASSWORD-SPECIFIC INDEXES ON USERS                                                             // 1053
///                                                                                                // 1054
Meteor.users._ensureIndex('services.email.verificationTokens.token',                               // 1055
                          {unique: 1, sparse: 1});                                                 // 1056
Meteor.users._ensureIndex('services.password.reset.token',                                         // 1057
                          {unique: 1, sparse: 1});                                                 // 1058
                                                                                                   // 1059
/////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['accounts-password'] = {};

})();

//# sourceMappingURL=accounts-password.js.map
