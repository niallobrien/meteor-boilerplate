(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;
var _ = Package.underscore._;
var LocalCollection = Package.minimongo.LocalCollection;
var Minimongo = Package.minimongo.Minimongo;
var Random = Package.random.Random;

/* Package-scope variables */
var rulesByCollection, addFuncForAll, ensureCreated, ensureDefaultAllow, ensureSecureDeny, Security;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/ongoworks_security/packages/ongoworks_security.js                                                     //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
(function () {                                                                                                    // 1
                                                                                                                  // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                                         //     // 4
// packages/ongoworks:security/security-util.js                                                            //     // 5
//                                                                                                         //     // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                                           //     // 8
/* global _, rulesByCollection:true, addFuncForAll:true, ensureCreated:true, ensureDefaultAllow:true */    // 1   // 9
                                                                                                           // 2   // 10
rulesByCollection = {};                                                                                    // 3   // 11
                                                                                                           // 4   // 12
var created = {                                                                                            // 5   // 13
  allow: {                                                                                                 // 6   // 14
    insert: {},                                                                                            // 7   // 15
    update: {},                                                                                            // 8   // 16
    remove: {},                                                                                            // 9   // 17
    download: {} // for use with CollectionFS packages                                                     // 10  // 18
  },                                                                                                       // 11  // 19
  deny: {                                                                                                  // 12  // 20
    insert: {},                                                                                            // 13  // 21
    update: {},                                                                                            // 14  // 22
    remove: {},                                                                                            // 15  // 23
    download: {} // for use with CollectionFS packages                                                     // 16  // 24
  }                                                                                                        // 17  // 25
};                                                                                                         // 18  // 26
                                                                                                           // 19  // 27
/**                                                                                                        // 20  // 28
 * Adds the given function as an allow or deny function for all specified collections and types.           // 21  // 29
 * @param {Array(Mongo.Collection)} collections Array of Mongo.Collection instances                        // 22  // 30
 * @param {String}                  allowOrDeny "allow" or "deny"                                          // 23  // 31
 * @param {Array(String)}           types       Array of types ("insert", "update", "remove")              // 24  // 32
 * @param {Array(String)|null}      fetch       `fetch` property to use                                    // 25  // 33
 * @param {Function}                func        The function                                               // 26  // 34
 */                                                                                                        // 27  // 35
addFuncForAll = function addFuncForAll(collections, allowOrDeny, types, fetch, func) {                     // 28  // 36
  // We always disable transformation, but we transform for specific                                       // 29  // 37
  // rules upon running our deny function if requested.                                                    // 30  // 38
  var rules = {transform: null};                                                                           // 31  // 39
  if (_.isArray(fetch)) {                                                                                  // 32  // 40
    rules.fetch = fetch;                                                                                   // 33  // 41
  }                                                                                                        // 34  // 42
  _.each(types, function (t) {                                                                             // 35  // 43
    rules[t] = func;                                                                                       // 36  // 44
  });                                                                                                      // 37  // 45
  _.each(collections, function (c) {                                                                       // 38  // 46
    c[allowOrDeny](rules);                                                                                 // 39  // 47
  });                                                                                                      // 40  // 48
};                                                                                                         // 41  // 49
                                                                                                           // 42  // 50
/**                                                                                                        // 43  // 51
 * Creates the allow or deny function for the given collections if not already created. This ensures that this package only ever creates up to one allow and one deny per collection.
 * @param   {String}                  allowOrDeny "allow" or "deny"                                        // 45  // 53
 * @param   {Array(Mongo.Collection)} collections An array of collections                                  // 46  // 54
 * @param   {Array(String)}           types       An array of types ("insert", "update", "remove")         // 47  // 55
 * @param   {Array(String)|null}      fetch       `fetch` property to use                                  // 48  // 56
 * @param   {Function}                func        The function                                             // 49  // 57
 */                                                                                                        // 50  // 58
ensureCreated = function ensureCreated(allowOrDeny, collections, types, fetch, func) {                     // 51  // 59
  _.each(types, function (t) {                                                                             // 52  // 60
    collections = _.reject(collections, function (c) {                                                     // 53  // 61
      return _.has(created[allowOrDeny][t], c._name);                                                      // 54  // 62
    });                                                                                                    // 55  // 63
    addFuncForAll(collections, allowOrDeny, [t], null, func);                                              // 56  // 64
    // mark that we've defined function for collection-type combo                                          // 57  // 65
    _.each(collections, function (c) {                                                                     // 58  // 66
      created[allowOrDeny][t][c._name] = true;                                                             // 59  // 67
    });                                                                                                    // 60  // 68
  });                                                                                                      // 61  // 69
};                                                                                                         // 62  // 70
                                                                                                           // 63  // 71
/**                                                                                                        // 64  // 72
 * Sets up default allow functions for the collections and types.                                          // 65  // 73
 * @param   {Array(Mongo.Collection)} collections Array of Mongo.Collection instances                      // 66  // 74
 * @param   {Array(String)}           types       Array of types ("insert", "update", "remove")            // 67  // 75
 */                                                                                                        // 68  // 76
ensureDefaultAllow = function ensureDefaultAllow(collections, types) {                                     // 69  // 77
  ensureCreated("allow", collections, types, [], function () {                                             // 70  // 78
    return true;                                                                                           // 71  // 79
  });                                                                                                      // 72  // 80
};                                                                                                         // 73  // 81
                                                                                                           // 74  // 82
/////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 83
                                                                                                                  // 84
}).call(this);                                                                                                    // 85
                                                                                                                  // 86
                                                                                                                  // 87
                                                                                                                  // 88
                                                                                                                  // 89
                                                                                                                  // 90
                                                                                                                  // 91
(function () {                                                                                                    // 92
                                                                                                                  // 93
/////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 94
//                                                                                                         //     // 95
// packages/ongoworks:security/security-deny.js                                                            //     // 96
//                                                                                                         //     // 97
/////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 98
                                                                                                           //     // 99
/*                                                                                                         // 1   // 100
 * A single deny function runs all the deny functions registered by this package, allowing us to have      // 2   // 101
 * an OR relationship among multiple security rule chains.                                                 // 3   // 102
 */                                                                                                        // 4   // 103
                                                                                                           // 5   // 104
ensureSecureDeny = function ensureSecureDeny(collections, types) {                                         // 6   // 105
  _.each(types, function (t) {                                                                             // 7   // 106
    _.each(collections, function (collection) {                                                            // 8   // 107
      var collectionName = collection._name;                                                               // 9   // 108
      ensureCreated("deny", [collection], [t], null, function () {                                         // 10  // 109
        var args = _.toArray(arguments);                                                                   // 11  // 110
        var rules = rulesByCollection[collectionName] || [];                                               // 12  // 111
                                                                                                           // 13  // 112
        // select only those rules that apply to this operation type                                       // 14  // 113
        rules = _.select(rules, function (rule) {                                                          // 15  // 114
          return _.contains(rule._types, t);                                                               // 16  // 115
        });                                                                                                // 17  // 116
                                                                                                           // 18  // 117
        // Loop through all defined rules for this collection. There is an OR relationship among           // 19  // 118
        // all rules for the collection, so if any do NOT return true, we allow.                           // 20  // 119
        return _.every(rules, function (rule) {                                                            // 21  // 120
          return rule.deny(t, collection, args);                                                           // 22  // 121
        });                                                                                                // 23  // 122
      });                                                                                                  // 24  // 123
    });                                                                                                    // 25  // 124
  });                                                                                                      // 26  // 125
};                                                                                                         // 27  // 126
                                                                                                           // 28  // 127
/////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 128
                                                                                                                  // 129
}).call(this);                                                                                                    // 130
                                                                                                                  // 131
                                                                                                                  // 132
                                                                                                                  // 133
                                                                                                                  // 134
                                                                                                                  // 135
                                                                                                                  // 136
(function () {                                                                                                    // 137
                                                                                                                  // 138
/////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 139
//                                                                                                         //     // 140
// packages/ongoworks:security/security-api.js                                                             //     // 141
//                                                                                                         //     // 142
/////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 143
                                                                                                           //     // 144
// The `Security` object is exported and provides the package API                                          // 1   // 145
Security = {                                                                                               // 2   // 146
  Rule: function SecurityRuleConstructor(types) {                                                          // 3   // 147
    var self = this;                                                                                       // 4   // 148
                                                                                                           // 5   // 149
    if (!_.isArray(types)) {                                                                               // 6   // 150
      types = [types];                                                                                     // 7   // 151
    }                                                                                                      // 8   // 152
    self._types = types;                                                                                   // 9   // 153
    self._restrictions = [];                                                                               // 10  // 154
  },                                                                                                       // 11  // 155
  // the starting point of the chain                                                                       // 12  // 156
  permit: function permit(types) {                                                                         // 13  // 157
    return new Security.Rule(types);                                                                       // 14  // 158
  },                                                                                                       // 15  // 159
  defineMethod: function securityDefineMethod(name, definition) {                                          // 16  // 160
    // Check whether a rule with the given name already exists; can't overwrite                            // 17  // 161
    if (Security.Rule.prototype[name]) {                                                                   // 18  // 162
      throw new Error('A security method with the name "' + name + '" has already been defined');          // 19  // 163
    }                                                                                                      // 20  // 164
    // Make sure the definition argument is an object that has a `deny` property                           // 21  // 165
    if (!definition || !definition.deny) {                                                                 // 22  // 166
      throw new Error('Security.defineMethod requires a "deny" function');                                 // 23  // 167
    }                                                                                                      // 24  // 168
    // Wrap transform, if provided                                                                         // 25  // 169
    if (definition.transform) {                                                                            // 26  // 170
      definition.transform = LocalCollection.wrapTransform(definition.transform);                          // 27  // 171
    }                                                                                                      // 28  // 172
    Security.Rule.prototype[name] = function (arg) {                                                       // 29  // 173
      var self = this;                                                                                     // 30  // 174
      self._restrictions.push({                                                                            // 31  // 175
        definition: definition,                                                                            // 32  // 176
        arg: arg                                                                                           // 33  // 177
      });                                                                                                  // 34  // 178
      return self;                                                                                         // 35  // 179
    };                                                                                                     // 36  // 180
  }                                                                                                        // 37  // 181
};                                                                                                         // 38  // 182
                                                                                                           // 39  // 183
// Security.Rule prototypes                                                                                // 40  // 184
Security.Rule.prototype.collections = function (collections) {                                             // 41  // 185
  var self = this;                                                                                         // 42  // 186
  // Make sure the `collections` argument is either a `Mongo.Collection` instance or                       // 43  // 187
  // an array of them. If it's a single collection, convert it to a one-item array.                        // 44  // 188
  if (!_.isArray(collections)) {                                                                           // 45  // 189
    if (collections instanceof Mongo.Collection) {                                                         // 46  // 190
      collections = [collections];                                                                         // 47  // 191
    } else {                                                                                               // 48  // 192
      throw new Error("The collections argument must be a Mongo.Collection instance or an array of them"); // 49  // 193
    }                                                                                                      // 50  // 194
  }                                                                                                        // 51  // 195
                                                                                                           // 52  // 196
  self._collections = collections;                                                                         // 53  // 197
                                                                                                           // 54  // 198
  // Keep list keyed by collection name                                                                    // 55  // 199
  _.each(collections, function (collection) {                                                              // 56  // 200
    var n = collection._name;                                                                              // 57  // 201
    rulesByCollection[n] = rulesByCollection[n] || [];                                                     // 58  // 202
    rulesByCollection[n].push(self);                                                                       // 59  // 203
  });                                                                                                      // 60  // 204
                                                                                                           // 61  // 205
  return self;                                                                                             // 62  // 206
};                                                                                                         // 63  // 207
                                                                                                           // 64  // 208
Security.Rule.prototype.apply = function () {                                                              // 65  // 209
  var self = this;                                                                                         // 66  // 210
                                                                                                           // 67  // 211
  if (!self._collections || !self._types) {                                                                // 68  // 212
    throw new Error("At a minimum, you must call permit and collections methods for a security rule.");    // 69  // 213
  }                                                                                                        // 70  // 214
                                                                                                           // 71  // 215
  // If we haven't yet done so, set up a default, permissive `allow` function for all of                   // 72  // 216
  // the given collections and types. We control all security through `deny` functions only, but           // 73  // 217
  // there must first be at least one `allow` function for each collection or all writes                   // 74  // 218
  // will be denied.                                                                                       // 75  // 219
  ensureDefaultAllow(self._collections, self._types);                                                      // 76  // 220
                                                                                                           // 77  // 221
  // We need a combined `fetch` array. The `fetch` is optional and can be either an array                  // 78  // 222
  // or a function that takes the argument passed to the restriction method and returns an array.          // 79  // 223
  // TODO for now we can't set fetch accurately; maybe need to adjust API so that we "apply" only          // 80  // 224
  // after we've defined all rules                                                                         // 81  // 225
  //var fetch = [];                                                                                        // 82  // 226
  //_.each(self._restrictions, function (restriction) {                                                    // 83  // 227
  //  if (_.isArray(restriction.definition.fetch)) {                                                       // 84  // 228
  //    fetch = fetch.concat(restriction.definition.fetch);                                                // 85  // 229
  //  } else if (typeof restriction.definition.fetch === "function") {                                     // 86  // 230
  //    fetch = fetch.concat(restriction.definition.fetch(restriction.arg));                               // 87  // 231
  //  }                                                                                                    // 88  // 232
  //});                                                                                                    // 89  // 233
                                                                                                           // 90  // 234
  ensureSecureDeny(self._collections, self._types);                                                        // 91  // 235
                                                                                                           // 92  // 236
};                                                                                                         // 93  // 237
                                                                                                           // 94  // 238
Security.Rule.prototype.deny = function (type, collection, args) {                                         // 95  // 239
  var self = this;                                                                                         // 96  // 240
  // Loop through all defined restrictions. Restrictions are additive for this chained                     // 97  // 241
  // rule, so if any deny function returns true, this function should return true.                         // 98  // 242
  return _.any(self._restrictions, function (restriction) {                                                // 99  // 243
    var doc, transform = restriction.definition.transform;                                                 // 100
                                                                                                           // 101
    // If transform is a function, apply that                                                              // 102
    if (typeof transform === 'function') {                                                                 // 103
      if (type === 'insert') {                                                                             // 104
        doc = EJSON.clone(args[1]);                                                                        // 105
        // The wrapped transform requires an _id, but we                                                   // 106
        // don't have access to the generatedId from Meteor API,                                           // 107
        // so we'll fudge one and then remove it.                                                          // 108
        doc._id = Random.id();                                                                             // 109
      } else {                                                                                             // 110
        doc = args[1];                                                                                     // 111
      }                                                                                                    // 112
      args[1] = transform(doc);                                                                            // 113
      if (type === 'insert') {                                                                             // 114
        delete args[1]._id;                                                                                // 115
      }                                                                                                    // 116
    }                                                                                                      // 117
                                                                                                           // 118
    // If not transform: null, apply the collection transform                                              // 119
    else if (transform !== null && typeof collection._transform === 'function') {                          // 120
      if (type === 'insert') {                                                                             // 121
        doc = EJSON.clone(args[1]);                                                                        // 122
        // The wrapped transform requires an _id, but we                                                   // 123
        // don't have access to the generatedId from Meteor API,                                           // 124
        // so we'll fudge one and then remove it.                                                          // 125
        doc._id = Random.id();                                                                             // 126
      } else {                                                                                             // 127
        doc = args[1];                                                                                     // 128
      }                                                                                                    // 129
      args[1] = collection._transform(doc);                                                                // 130
      if (type === 'insert') {                                                                             // 131
        delete args[1]._id;                                                                                // 132
      }                                                                                                    // 133
    }                                                                                                      // 134
                                                                                                           // 135
    return restriction.definition.deny.apply(this, [type, restriction.arg].concat(args));                  // 136
  });                                                                                                      // 137
};                                                                                                         // 138
                                                                                                           // 139
Mongo.Collection.prototype.permit = function (types) {                                                     // 140
  return Security.permit(types).collections(this);                                                         // 141
};                                                                                                         // 142
                                                                                                           // 143
/////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 288
                                                                                                                  // 289
}).call(this);                                                                                                    // 290
                                                                                                                  // 291
                                                                                                                  // 292
                                                                                                                  // 293
                                                                                                                  // 294
                                                                                                                  // 295
                                                                                                                  // 296
(function () {                                                                                                    // 297
                                                                                                                  // 298
/////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 299
//                                                                                                         //     // 300
// packages/ongoworks:security/security-rules.js                                                           //     // 301
//                                                                                                         //     // 302
/////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 303
                                                                                                           //     // 304
/*                                                                                                         // 1   // 305
 * This file defines built-in restriction methods                                                          // 2   // 306
 */                                                                                                        // 3   // 307
                                                                                                           // 4   // 308
/*                                                                                                         // 5   // 309
 * No one                                                                                                  // 6   // 310
 */                                                                                                        // 7   // 311
                                                                                                           // 8   // 312
Security.defineMethod("never", {                                                                           // 9   // 313
  fetch: [],                                                                                               // 10  // 314
  transform: null,                                                                                         // 11  // 315
  deny: function () {                                                                                      // 12  // 316
    return true;                                                                                           // 13  // 317
  }                                                                                                        // 14  // 318
});                                                                                                        // 15  // 319
                                                                                                           // 16  // 320
/*                                                                                                         // 17  // 321
 * Logged In                                                                                               // 18  // 322
 */                                                                                                        // 19  // 323
                                                                                                           // 20  // 324
Security.defineMethod("ifLoggedIn", {                                                                      // 21  // 325
  fetch: [],                                                                                               // 22  // 326
  transform: null,                                                                                         // 23  // 327
  deny: function (type, arg, userId) {                                                                     // 24  // 328
    return !userId;                                                                                        // 25  // 329
  }                                                                                                        // 26  // 330
});                                                                                                        // 27  // 331
                                                                                                           // 28  // 332
/*                                                                                                         // 29  // 333
 * Specific User ID                                                                                        // 30  // 334
 */                                                                                                        // 31  // 335
                                                                                                           // 32  // 336
Security.defineMethod("ifHasUserId", {                                                                     // 33  // 337
  fetch: [],                                                                                               // 34  // 338
  transform: null,                                                                                         // 35  // 339
  deny: function (type, arg, userId) {                                                                     // 36  // 340
    return userId !== arg;                                                                                 // 37  // 341
  }                                                                                                        // 38  // 342
});                                                                                                        // 39  // 343
                                                                                                           // 40  // 344
/*                                                                                                         // 41  // 345
 * Specific Roles                                                                                          // 42  // 346
 */                                                                                                        // 43  // 347
                                                                                                           // 44  // 348
/*                                                                                                         // 45  // 349
 * alanning:roles support                                                                                  // 46  // 350
 */                                                                                                        // 47  // 351
if (Package && Package["alanning:roles"]) {                                                                // 48  // 352
                                                                                                           // 49  // 353
  var Roles = Package["alanning:roles"].Roles;                                                             // 50  // 354
                                                                                                           // 51  // 355
  Security.defineMethod("ifHasRole", {                                                                     // 52  // 356
    fetch: [],                                                                                             // 53  // 357
    transform: null,                                                                                       // 54  // 358
    deny: function (type, arg, userId) {                                                                   // 55  // 359
      if (!arg) {                                                                                          // 56  // 360
        throw new Error('ifHasRole security rule method requires an argument');                            // 57  // 361
      }                                                                                                    // 58  // 362
      if (arg.role) {                                                                                      // 59  // 363
        return !Roles.userIsInRole(userId, arg.role, arg.group);                                           // 60  // 364
      } else {                                                                                             // 61  // 365
        return !Roles.userIsInRole(userId, arg);                                                           // 62  // 366
      }                                                                                                    // 63  // 367
    }                                                                                                      // 64  // 368
  });                                                                                                      // 65  // 369
                                                                                                           // 66  // 370
}                                                                                                          // 67  // 371
                                                                                                           // 68  // 372
/*                                                                                                         // 69  // 373
 * nicolaslopezj:roles support                                                                             // 70  // 374
 * Note: doesn't support groups                                                                            // 71  // 375
 */                                                                                                        // 72  // 376
if (Package && Package["nicolaslopezj:roles"]) {                                                           // 73  // 377
                                                                                                           // 74  // 378
  var Roles = Package["nicolaslopezj:roles"].Roles;                                                        // 75  // 379
                                                                                                           // 76  // 380
  Security.defineMethod("ifHasRole", {                                                                     // 77  // 381
    fetch: [],                                                                                             // 78  // 382
    transform: null,                                                                                       // 79  // 383
    deny: function (type, arg, userId) {                                                                   // 80  // 384
      if (!arg) {                                                                                          // 81  // 385
        throw new Error('ifHasRole security rule method requires an argument');                            // 82  // 386
      }                                                                                                    // 83  // 387
      return !Roles.userHasRole(userId, arg);                                                              // 84  // 388
    }                                                                                                      // 85  // 389
  });                                                                                                      // 86  // 390
                                                                                                           // 87  // 391
}                                                                                                          // 88  // 392
                                                                                                           // 89  // 393
/*                                                                                                         // 90  // 394
 * Specific Properties                                                                                     // 91  // 395
 */                                                                                                        // 92  // 396
                                                                                                           // 93  // 397
Security.defineMethod("onlyProps", {                                                                       // 94  // 398
  fetch: [],                                                                                               // 95  // 399
  transform: null,                                                                                         // 96  // 400
  deny: function (type, arg, userId, doc, fieldNames) {                                                    // 97  // 401
    if (!_.isArray(arg)) {                                                                                 // 98  // 402
      arg = [arg];                                                                                         // 99  // 403
    }                                                                                                      // 100
                                                                                                           // 101
    fieldNames = fieldNames || _.keys(doc);                                                                // 102
                                                                                                           // 103
    return !_.every(fieldNames, function (fieldName) {                                                     // 104
      return _.contains(arg, fieldName);                                                                   // 105
    });                                                                                                    // 106
  }                                                                                                        // 107
});                                                                                                        // 108
                                                                                                           // 109
Security.defineMethod("exceptProps", {                                                                     // 110
  fetch: [],                                                                                               // 111
  transform: null,                                                                                         // 112
  deny: function (type, arg, userId, doc, fieldNames) {                                                    // 113
    if (!_.isArray(arg)) {                                                                                 // 114
      arg = [arg];                                                                                         // 115
    }                                                                                                      // 116
                                                                                                           // 117
    fieldNames = fieldNames || _.keys(doc);                                                                // 118
                                                                                                           // 119
    return _.any(fieldNames, function (fieldName) {                                                        // 120
      return _.contains(arg, fieldName);                                                                   // 121
    });                                                                                                    // 122
  }                                                                                                        // 123
});                                                                                                        // 124
                                                                                                           // 125
/////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 430
                                                                                                                  // 431
}).call(this);                                                                                                    // 432
                                                                                                                  // 433
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['ongoworks:security'] = {
  Security: Security
};

})();

//# sourceMappingURL=ongoworks_security.js.map
