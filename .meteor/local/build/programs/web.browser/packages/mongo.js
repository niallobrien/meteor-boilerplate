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
var Random = Package.random.Random;
var EJSON = Package.ejson.EJSON;
var _ = Package.underscore._;
var LocalCollection = Package.minimongo.LocalCollection;
var Minimongo = Package.minimongo.Minimongo;
var DDP = Package['ddp-client'].DDP;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var DiffSequence = Package['diff-sequence'].DiffSequence;
var MongoID = Package['mongo-id'].MongoID;
var check = Package.check.check;
var Match = Package.check.Match;

/* Package-scope variables */
var LocalCollectionDriver, Mongo;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/mongo/local_collection_driver.js                                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
LocalCollectionDriver = function () {                                                                                 // 1
  var self = this;                                                                                                    // 2
  self.noConnCollections = {};                                                                                        // 3
};                                                                                                                    // 4
                                                                                                                      // 5
var ensureCollection = function (name, collections) {                                                                 // 6
  if (!(name in collections))                                                                                         // 7
    collections[name] = new LocalCollection(name);                                                                    // 8
  return collections[name];                                                                                           // 9
};                                                                                                                    // 10
                                                                                                                      // 11
_.extend(LocalCollectionDriver.prototype, {                                                                           // 12
  open: function (name, conn) {                                                                                       // 13
    var self = this;                                                                                                  // 14
    if (!name)                                                                                                        // 15
      return new LocalCollection;                                                                                     // 16
    if (! conn) {                                                                                                     // 17
      return ensureCollection(name, self.noConnCollections);                                                          // 18
    }                                                                                                                 // 19
    if (! conn._mongo_livedata_collections)                                                                           // 20
      conn._mongo_livedata_collections = {};                                                                          // 21
    // XXX is there a way to keep track of a connection's collections without                                         // 22
    // dangling it off the connection object?                                                                         // 23
    return ensureCollection(name, conn._mongo_livedata_collections);                                                  // 24
  }                                                                                                                   // 25
});                                                                                                                   // 26
                                                                                                                      // 27
// singleton                                                                                                          // 28
LocalCollectionDriver = new LocalCollectionDriver;                                                                    // 29
                                                                                                                      // 30
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/mongo/collection.js                                                                                       //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// options.connection, if given, is a LivedataClient or LivedataServer                                                // 1
// XXX presently there is no way to destroy/clean up a Collection                                                     // 2
                                                                                                                      // 3
/**                                                                                                                   // 4
 * @summary Namespace for MongoDB-related items                                                                       // 5
 * @namespace                                                                                                         // 6
 */                                                                                                                   // 7
Mongo = {};                                                                                                           // 8
                                                                                                                      // 9
/**                                                                                                                   // 10
 * @summary Constructor for a Collection                                                                              // 11
 * @locus Anywhere                                                                                                    // 12
 * @instancename collection                                                                                           // 13
 * @class                                                                                                             // 14
 * @param {String} name The name of the collection.  If null, creates an unmanaged (unsynchronized) local collection.
 * @param {Object} [options]                                                                                          // 16
 * @param {Object} options.connection The server connection that will manage this collection. Uses the default connection if not specified.  Pass the return value of calling [`DDP.connect`](#ddp_connect) to specify a different server. Pass `null` to specify no connection. Unmanaged (`name` is null) collections cannot specify a connection.
 * @param {String} options.idGeneration The method of generating the `_id` fields of new documents in this collection.  Possible values:
                                                                                                                      // 19
 - **`'STRING'`**: random strings                                                                                     // 20
 - **`'MONGO'`**:  random [`Mongo.ObjectID`](#mongo_object_id) values                                                 // 21
                                                                                                                      // 22
The default id generation technique is `'STRING'`.                                                                    // 23
 * @param {Function} options.transform An optional transformation function. Documents will be passed through this function before being returned from `fetch` or `findOne`, and before being passed to callbacks of `observe`, `map`, `forEach`, `allow`, and `deny`. Transforms are *not* applied for the callbacks of `observeChanges` or to cursors returned from publish functions.
 */                                                                                                                   // 25
Mongo.Collection = function (name, options) {                                                                         // 26
  var self = this;                                                                                                    // 27
  if (! (self instanceof Mongo.Collection))                                                                           // 28
    throw new Error('use "new" to construct a Mongo.Collection');                                                     // 29
                                                                                                                      // 30
  if (!name && (name !== null)) {                                                                                     // 31
    Meteor._debug("Warning: creating anonymous collection. It will not be " +                                         // 32
                  "saved or synchronized over the network. (Pass null for " +                                         // 33
                  "the collection name to turn off this warning.)");                                                  // 34
    name = null;                                                                                                      // 35
  }                                                                                                                   // 36
                                                                                                                      // 37
  if (name !== null && typeof name !== "string") {                                                                    // 38
    throw new Error(                                                                                                  // 39
      "First argument to new Mongo.Collection must be a string or null");                                             // 40
  }                                                                                                                   // 41
                                                                                                                      // 42
  if (options && options.methods) {                                                                                   // 43
    // Backwards compatibility hack with original signature (which passed                                             // 44
    // "connection" directly instead of in options. (Connections must have a "methods"                                // 45
    // method.)                                                                                                       // 46
    // XXX remove before 1.0                                                                                          // 47
    options = {connection: options};                                                                                  // 48
  }                                                                                                                   // 49
  // Backwards compatibility: "connection" used to be called "manager".                                               // 50
  if (options && options.manager && !options.connection) {                                                            // 51
    options.connection = options.manager;                                                                             // 52
  }                                                                                                                   // 53
  options = _.extend({                                                                                                // 54
    connection: undefined,                                                                                            // 55
    idGeneration: 'STRING',                                                                                           // 56
    transform: null,                                                                                                  // 57
    _driver: undefined,                                                                                               // 58
    _preventAutopublish: false                                                                                        // 59
  }, options);                                                                                                        // 60
                                                                                                                      // 61
  switch (options.idGeneration) {                                                                                     // 62
  case 'MONGO':                                                                                                       // 63
    self._makeNewID = function () {                                                                                   // 64
      var src = name ? DDP.randomStream('/collection/' + name) : Random;                                              // 65
      return new Mongo.ObjectID(src.hexString(24));                                                                   // 66
    };                                                                                                                // 67
    break;                                                                                                            // 68
  case 'STRING':                                                                                                      // 69
  default:                                                                                                            // 70
    self._makeNewID = function () {                                                                                   // 71
      var src = name ? DDP.randomStream('/collection/' + name) : Random;                                              // 72
      return src.id();                                                                                                // 73
    };                                                                                                                // 74
    break;                                                                                                            // 75
  }                                                                                                                   // 76
                                                                                                                      // 77
  self._transform = LocalCollection.wrapTransform(options.transform);                                                 // 78
                                                                                                                      // 79
  if (! name || options.connection === null)                                                                          // 80
    // note: nameless collections never have a connection                                                             // 81
    self._connection = null;                                                                                          // 82
  else if (options.connection)                                                                                        // 83
    self._connection = options.connection;                                                                            // 84
  else if (Meteor.isClient)                                                                                           // 85
    self._connection = Meteor.connection;                                                                             // 86
  else                                                                                                                // 87
    self._connection = Meteor.server;                                                                                 // 88
                                                                                                                      // 89
  if (!options._driver) {                                                                                             // 90
    // XXX This check assumes that webapp is loaded so that Meteor.server !==                                         // 91
    // null. We should fully support the case of "want to use a Mongo-backed                                          // 92
    // collection from Node code without webapp", but we don't yet.                                                   // 93
    // #MeteorServerNull                                                                                              // 94
    if (name && self._connection === Meteor.server &&                                                                 // 95
        typeof MongoInternals !== "undefined" &&                                                                      // 96
        MongoInternals.defaultRemoteCollectionDriver) {                                                               // 97
      options._driver = MongoInternals.defaultRemoteCollectionDriver();                                               // 98
    } else {                                                                                                          // 99
      options._driver = LocalCollectionDriver;                                                                        // 100
    }                                                                                                                 // 101
  }                                                                                                                   // 102
                                                                                                                      // 103
  self._collection = options._driver.open(name, self._connection);                                                    // 104
  self._name = name;                                                                                                  // 105
  self._driver = options._driver;                                                                                     // 106
                                                                                                                      // 107
  if (self._connection && self._connection.registerStore) {                                                           // 108
    // OK, we're going to be a slave, replicating some remote                                                         // 109
    // database, except possibly with some temporary divergence while                                                 // 110
    // we have unacknowledged RPC's.                                                                                  // 111
    var ok = self._connection.registerStore(name, {                                                                   // 112
      // Called at the beginning of a batch of updates. batchSize is the number                                       // 113
      // of update calls to expect.                                                                                   // 114
      //                                                                                                              // 115
      // XXX This interface is pretty janky. reset probably ought to go back to                                       // 116
      // being its own function, and callers shouldn't have to calculate                                              // 117
      // batchSize. The optimization of not calling pause/remove should be                                            // 118
      // delayed until later: the first call to update() should buffer its                                            // 119
      // message, and then we can either directly apply it at endUpdate time if                                       // 120
      // it was the only update, or do pauseObservers/apply/apply at the next                                         // 121
      // update() if there's another one.                                                                             // 122
      beginUpdate: function (batchSize, reset) {                                                                      // 123
        // pause observers so users don't see flicker when updating several                                           // 124
        // objects at once (including the post-reconnect reset-and-reapply                                            // 125
        // stage), and so that a re-sorting of a query can take advantage of the                                      // 126
        // full _diffQuery moved calculation instead of applying change one at a                                      // 127
        // time.                                                                                                      // 128
        if (batchSize > 1 || reset)                                                                                   // 129
          self._collection.pauseObservers();                                                                          // 130
                                                                                                                      // 131
        if (reset)                                                                                                    // 132
          self._collection.remove({});                                                                                // 133
      },                                                                                                              // 134
                                                                                                                      // 135
      // Apply an update.                                                                                             // 136
      // XXX better specify this interface (not in terms of a wire message)?                                          // 137
      update: function (msg) {                                                                                        // 138
        var mongoId = MongoID.idParse(msg.id);                                                                        // 139
        var doc = self._collection.findOne(mongoId);                                                                  // 140
                                                                                                                      // 141
        // Is this a "replace the whole doc" message coming from the quiescence                                       // 142
        // of method writes to an object? (Note that 'undefined' is a valid                                           // 143
        // value meaning "remove it".)                                                                                // 144
        if (msg.msg === 'replace') {                                                                                  // 145
          var replace = msg.replace;                                                                                  // 146
          if (!replace) {                                                                                             // 147
            if (doc)                                                                                                  // 148
              self._collection.remove(mongoId);                                                                       // 149
          } else if (!doc) {                                                                                          // 150
            self._collection.insert(replace);                                                                         // 151
          } else {                                                                                                    // 152
            // XXX check that replace has no $ ops                                                                    // 153
            self._collection.update(mongoId, replace);                                                                // 154
          }                                                                                                           // 155
          return;                                                                                                     // 156
        } else if (msg.msg === 'added') {                                                                             // 157
          if (doc) {                                                                                                  // 158
            throw new Error("Expected not to find a document already present for an add");                            // 159
          }                                                                                                           // 160
          self._collection.insert(_.extend({_id: mongoId}, msg.fields));                                              // 161
        } else if (msg.msg === 'removed') {                                                                           // 162
          if (!doc)                                                                                                   // 163
            throw new Error("Expected to find a document already present for removed");                               // 164
          self._collection.remove(mongoId);                                                                           // 165
        } else if (msg.msg === 'changed') {                                                                           // 166
          if (!doc)                                                                                                   // 167
            throw new Error("Expected to find a document to change");                                                 // 168
          if (!_.isEmpty(msg.fields)) {                                                                               // 169
            var modifier = {};                                                                                        // 170
            _.each(msg.fields, function (value, key) {                                                                // 171
              if (value === undefined) {                                                                              // 172
                if (!modifier.$unset)                                                                                 // 173
                  modifier.$unset = {};                                                                               // 174
                modifier.$unset[key] = 1;                                                                             // 175
              } else {                                                                                                // 176
                if (!modifier.$set)                                                                                   // 177
                  modifier.$set = {};                                                                                 // 178
                modifier.$set[key] = value;                                                                           // 179
              }                                                                                                       // 180
            });                                                                                                       // 181
            self._collection.update(mongoId, modifier);                                                               // 182
          }                                                                                                           // 183
        } else {                                                                                                      // 184
          throw new Error("I don't know how to deal with this message");                                              // 185
        }                                                                                                             // 186
                                                                                                                      // 187
      },                                                                                                              // 188
                                                                                                                      // 189
      // Called at the end of a batch of updates.                                                                     // 190
      endUpdate: function () {                                                                                        // 191
        self._collection.resumeObservers();                                                                           // 192
      },                                                                                                              // 193
                                                                                                                      // 194
      // Called around method stub invocations to capture the original versions                                       // 195
      // of modified documents.                                                                                       // 196
      saveOriginals: function () {                                                                                    // 197
        self._collection.saveOriginals();                                                                             // 198
      },                                                                                                              // 199
      retrieveOriginals: function () {                                                                                // 200
        return self._collection.retrieveOriginals();                                                                  // 201
      },                                                                                                              // 202
                                                                                                                      // 203
      // Used to preserve current versions of documents across a store reset.                                         // 204
      getDoc: function(id) {                                                                                          // 205
        return self.findOne(id);                                                                                      // 206
      },                                                                                                              // 207
    });                                                                                                               // 208
                                                                                                                      // 209
    if (!ok)                                                                                                          // 210
      throw new Error("There is already a collection named '" + name + "'");                                          // 211
  }                                                                                                                   // 212
                                                                                                                      // 213
  self._defineMutationMethods();                                                                                      // 214
                                                                                                                      // 215
  // autopublish                                                                                                      // 216
  if (Package.autopublish && !options._preventAutopublish && self._connection                                         // 217
      && self._connection.publish) {                                                                                  // 218
    self._connection.publish(null, function () {                                                                      // 219
      return self.find();                                                                                             // 220
    }, {is_auto: true});                                                                                              // 221
  }                                                                                                                   // 222
};                                                                                                                    // 223
                                                                                                                      // 224
///                                                                                                                   // 225
/// Main collection API                                                                                               // 226
///                                                                                                                   // 227
                                                                                                                      // 228
                                                                                                                      // 229
_.extend(Mongo.Collection.prototype, {                                                                                // 230
                                                                                                                      // 231
  _getFindSelector: function (args) {                                                                                 // 232
    if (args.length == 0)                                                                                             // 233
      return {};                                                                                                      // 234
    else                                                                                                              // 235
      return args[0];                                                                                                 // 236
  },                                                                                                                  // 237
                                                                                                                      // 238
  _getFindOptions: function (args) {                                                                                  // 239
    var self = this;                                                                                                  // 240
    if (args.length < 2) {                                                                                            // 241
      return { transform: self._transform };                                                                          // 242
    } else {                                                                                                          // 243
      check(args[1], Match.Optional(Match.ObjectIncluding({                                                           // 244
        fields: Match.Optional(Match.OneOf(Object, undefined)),                                                       // 245
        sort: Match.Optional(Match.OneOf(Object, Array, undefined)),                                                  // 246
        limit: Match.Optional(Match.OneOf(Number, undefined)),                                                        // 247
        skip: Match.Optional(Match.OneOf(Number, undefined))                                                          // 248
     })));                                                                                                            // 249
                                                                                                                      // 250
      return _.extend({                                                                                               // 251
        transform: self._transform                                                                                    // 252
      }, args[1]);                                                                                                    // 253
    }                                                                                                                 // 254
  },                                                                                                                  // 255
                                                                                                                      // 256
  /**                                                                                                                 // 257
   * @summary Find the documents in a collection that match the selector.                                             // 258
   * @locus Anywhere                                                                                                  // 259
   * @method find                                                                                                     // 260
   * @memberOf Mongo.Collection                                                                                       // 261
   * @instance                                                                                                        // 262
   * @param {MongoSelector} [selector] A query describing the documents to find                                       // 263
   * @param {Object} [options]                                                                                        // 264
   * @param {MongoSortSpecifier} options.sort Sort order (default: natural order)                                     // 265
   * @param {Number} options.skip Number of results to skip at the beginning                                          // 266
   * @param {Number} options.limit Maximum number of results to return                                                // 267
   * @param {MongoFieldSpecifier} options.fields Dictionary of fields to return or exclude.                           // 268
   * @param {Boolean} options.reactive (Client only) Default `true`; pass `false` to disable reactivity               // 269
   * @param {Function} options.transform Overrides `transform` on the  [`Collection`](#collections) for this cursor.  Pass `null` to disable transformation.
   * @returns {Mongo.Cursor}                                                                                          // 271
   */                                                                                                                 // 272
  find: function (/* selector, options */) {                                                                          // 273
    // Collection.find() (return all docs) behaves differently                                                        // 274
    // from Collection.find(undefined) (return 0 docs).  so be                                                        // 275
    // careful about the length of arguments.                                                                         // 276
    var self = this;                                                                                                  // 277
    var argArray = _.toArray(arguments);                                                                              // 278
    return self._collection.find(self._getFindSelector(argArray),                                                     // 279
                                 self._getFindOptions(argArray));                                                     // 280
  },                                                                                                                  // 281
                                                                                                                      // 282
  /**                                                                                                                 // 283
   * @summary Finds the first document that matches the selector, as ordered by sort and skip options.                // 284
   * @locus Anywhere                                                                                                  // 285
   * @method findOne                                                                                                  // 286
   * @memberOf Mongo.Collection                                                                                       // 287
   * @instance                                                                                                        // 288
   * @param {MongoSelector} [selector] A query describing the documents to find                                       // 289
   * @param {Object} [options]                                                                                        // 290
   * @param {MongoSortSpecifier} options.sort Sort order (default: natural order)                                     // 291
   * @param {Number} options.skip Number of results to skip at the beginning                                          // 292
   * @param {MongoFieldSpecifier} options.fields Dictionary of fields to return or exclude.                           // 293
   * @param {Boolean} options.reactive (Client only) Default true; pass false to disable reactivity                   // 294
   * @param {Function} options.transform Overrides `transform` on the [`Collection`](#collections) for this cursor.  Pass `null` to disable transformation.
   * @returns {Object}                                                                                                // 296
   */                                                                                                                 // 297
  findOne: function (/* selector, options */) {                                                                       // 298
    var self = this;                                                                                                  // 299
    var argArray = _.toArray(arguments);                                                                              // 300
    return self._collection.findOne(self._getFindSelector(argArray),                                                  // 301
                                    self._getFindOptions(argArray));                                                  // 302
  }                                                                                                                   // 303
                                                                                                                      // 304
});                                                                                                                   // 305
                                                                                                                      // 306
Mongo.Collection._publishCursor = function (cursor, sub, collection) {                                                // 307
  var observeHandle = cursor.observeChanges({                                                                         // 308
    added: function (id, fields) {                                                                                    // 309
      sub.added(collection, id, fields);                                                                              // 310
    },                                                                                                                // 311
    changed: function (id, fields) {                                                                                  // 312
      sub.changed(collection, id, fields);                                                                            // 313
    },                                                                                                                // 314
    removed: function (id) {                                                                                          // 315
      sub.removed(collection, id);                                                                                    // 316
    }                                                                                                                 // 317
  });                                                                                                                 // 318
                                                                                                                      // 319
  // We don't call sub.ready() here: it gets called in livedata_server, after                                         // 320
  // possibly calling _publishCursor on multiple returned cursors.                                                    // 321
                                                                                                                      // 322
  // register stop callback (expects lambda w/ no args).                                                              // 323
  sub.onStop(function () {observeHandle.stop();});                                                                    // 324
};                                                                                                                    // 325
                                                                                                                      // 326
// protect against dangerous selectors.  falsey and {_id: falsey} are both                                            // 327
// likely programmer error, and not what you want, particularly for destructive                                       // 328
// operations.  JS regexps don't serialize over DDP but can be trivially                                              // 329
// replaced by $regex.                                                                                                // 330
Mongo.Collection._rewriteSelector = function (selector) {                                                             // 331
  // shorthand -- scalars match _id                                                                                   // 332
  if (LocalCollection._selectorIsId(selector))                                                                        // 333
    selector = {_id: selector};                                                                                       // 334
                                                                                                                      // 335
  if (_.isArray(selector)) {                                                                                          // 336
    // This is consistent with the Mongo console itself; if we don't do this                                          // 337
    // check passing an empty array ends up selecting all items                                                       // 338
    throw new Error("Mongo selector can't be an array.");                                                             // 339
  }                                                                                                                   // 340
                                                                                                                      // 341
  if (!selector || (('_id' in selector) && !selector._id))                                                            // 342
    // can't match anything                                                                                           // 343
    return {_id: Random.id()};                                                                                        // 344
                                                                                                                      // 345
  var ret = {};                                                                                                       // 346
  _.each(selector, function (value, key) {                                                                            // 347
    // Mongo supports both {field: /foo/} and {field: {$regex: /foo/}}                                                // 348
    if (value instanceof RegExp) {                                                                                    // 349
      ret[key] = convertRegexpToMongoSelector(value);                                                                 // 350
    } else if (value && value.$regex instanceof RegExp) {                                                             // 351
      ret[key] = convertRegexpToMongoSelector(value.$regex);                                                          // 352
      // if value is {$regex: /foo/, $options: ...} then $options                                                     // 353
      // override the ones set on $regex.                                                                             // 354
      if (value.$options !== undefined)                                                                               // 355
        ret[key].$options = value.$options;                                                                           // 356
    }                                                                                                                 // 357
    else if (_.contains(['$or','$and','$nor'], key)) {                                                                // 358
      // Translate lower levels of $and/$or/$nor                                                                      // 359
      ret[key] = _.map(value, function (v) {                                                                          // 360
        return Mongo.Collection._rewriteSelector(v);                                                                  // 361
      });                                                                                                             // 362
    } else {                                                                                                          // 363
      ret[key] = value;                                                                                               // 364
    }                                                                                                                 // 365
  });                                                                                                                 // 366
  return ret;                                                                                                         // 367
};                                                                                                                    // 368
                                                                                                                      // 369
// convert a JS RegExp object to a Mongo {$regex: ..., $options: ...}                                                 // 370
// selector                                                                                                           // 371
var convertRegexpToMongoSelector = function (regexp) {                                                                // 372
  check(regexp, RegExp); // safety belt                                                                               // 373
                                                                                                                      // 374
  var selector = {$regex: regexp.source};                                                                             // 375
  var regexOptions = '';                                                                                              // 376
  // JS RegExp objects support 'i', 'm', and 'g'. Mongo regex $options                                                // 377
  // support 'i', 'm', 'x', and 's'. So we support 'i' and 'm' here.                                                  // 378
  if (regexp.ignoreCase)                                                                                              // 379
    regexOptions += 'i';                                                                                              // 380
  if (regexp.multiline)                                                                                               // 381
    regexOptions += 'm';                                                                                              // 382
  if (regexOptions)                                                                                                   // 383
    selector.$options = regexOptions;                                                                                 // 384
                                                                                                                      // 385
  return selector;                                                                                                    // 386
};                                                                                                                    // 387
                                                                                                                      // 388
var throwIfSelectorIsNotId = function (selector, methodName) {                                                        // 389
  if (!LocalCollection._selectorIsIdPerhapsAsObject(selector)) {                                                      // 390
    throw new Meteor.Error(                                                                                           // 391
      403, "Not permitted. Untrusted code may only " + methodName +                                                   // 392
        " documents by ID.");                                                                                         // 393
  }                                                                                                                   // 394
};                                                                                                                    // 395
                                                                                                                      // 396
// 'insert' immediately returns the inserted document's new _id.                                                      // 397
// The others return values immediately if you are in a stub, an in-memory                                            // 398
// unmanaged collection, or a mongo-backed collection and you don't pass a                                            // 399
// callback. 'update' and 'remove' return the number of affected                                                      // 400
// documents. 'upsert' returns an object with keys 'numberAffected' and, if an                                        // 401
// insert happened, 'insertedId'.                                                                                     // 402
//                                                                                                                    // 403
// Otherwise, the semantics are exactly like other methods: they take                                                 // 404
// a callback as an optional last argument; if no callback is                                                         // 405
// provided, they block until the operation is complete, and throw an                                                 // 406
// exception if it fails; if a callback is provided, then they don't                                                  // 407
// necessarily block, and they call the callback when they finish with error and                                      // 408
// result arguments.  (The insert method provides the document ID as its result;                                      // 409
// update and remove provide the number of affected docs as the result; upsert                                        // 410
// provides an object with numberAffected and maybe insertedId.)                                                      // 411
//                                                                                                                    // 412
// On the client, blocking is impossible, so if a callback                                                            // 413
// isn't provided, they just return immediately and any error                                                         // 414
// information is lost.                                                                                               // 415
//                                                                                                                    // 416
// There's one more tweak. On the client, if you don't provide a                                                      // 417
// callback, then if there is an error, a message will be logged with                                                 // 418
// Meteor._debug.                                                                                                     // 419
//                                                                                                                    // 420
// The intent (though this is actually determined by the underlying                                                   // 421
// drivers) is that the operations should be done synchronously, not                                                  // 422
// generating their result until the database has acknowledged                                                        // 423
// them. In the future maybe we should provide a flag to turn this                                                    // 424
// off.                                                                                                               // 425
                                                                                                                      // 426
/**                                                                                                                   // 427
 * @summary Insert a document in the collection.  Returns its unique _id.                                             // 428
 * @locus Anywhere                                                                                                    // 429
 * @method  insert                                                                                                    // 430
 * @memberOf Mongo.Collection                                                                                         // 431
 * @instance                                                                                                          // 432
 * @param {Object} doc The document to insert. May not yet have an _id attribute, in which case Meteor will generate one for you.
 * @param {Function} [callback] Optional.  If present, called with an error object as the first argument and, if no error, the _id as the second.
 */                                                                                                                   // 435
                                                                                                                      // 436
/**                                                                                                                   // 437
 * @summary Modify one or more documents in the collection. Returns the number of affected documents.                 // 438
 * @locus Anywhere                                                                                                    // 439
 * @method update                                                                                                     // 440
 * @memberOf Mongo.Collection                                                                                         // 441
 * @instance                                                                                                          // 442
 * @param {MongoSelector} selector Specifies which documents to modify                                                // 443
 * @param {MongoModifier} modifier Specifies how to modify the documents                                              // 444
 * @param {Object} [options]                                                                                          // 445
 * @param {Boolean} options.multi True to modify all matching documents; false to only modify one of the matching documents (the default).
 * @param {Boolean} options.upsert True to insert a document if no matching documents are found.                      // 447
 * @param {Function} [callback] Optional.  If present, called with an error object as the first argument and, if no error, the number of affected documents as the second.
 */                                                                                                                   // 449
                                                                                                                      // 450
/**                                                                                                                   // 451
 * @summary Remove documents from the collection                                                                      // 452
 * @locus Anywhere                                                                                                    // 453
 * @method remove                                                                                                     // 454
 * @memberOf Mongo.Collection                                                                                         // 455
 * @instance                                                                                                          // 456
 * @param {MongoSelector} selector Specifies which documents to remove                                                // 457
 * @param {Function} [callback] Optional.  If present, called with an error object as its argument.                   // 458
 */                                                                                                                   // 459
                                                                                                                      // 460
_.each(["insert", "update", "remove"], function (name) {                                                              // 461
  Mongo.Collection.prototype[name] = function (/* arguments */) {                                                     // 462
    var self = this;                                                                                                  // 463
    var args = _.toArray(arguments);                                                                                  // 464
    var callback;                                                                                                     // 465
    var insertId;                                                                                                     // 466
    var ret;                                                                                                          // 467
                                                                                                                      // 468
    // Pull off any callback (or perhaps a 'callback' variable that was passed                                        // 469
    // in undefined, like how 'upsert' does it).                                                                      // 470
    if (args.length &&                                                                                                // 471
        (args[args.length - 1] === undefined ||                                                                       // 472
         args[args.length - 1] instanceof Function)) {                                                                // 473
      callback = args.pop();                                                                                          // 474
    }                                                                                                                 // 475
                                                                                                                      // 476
    if (name === "insert") {                                                                                          // 477
      if (!args.length)                                                                                               // 478
        throw new Error("insert requires an argument");                                                               // 479
      // shallow-copy the document and generate an ID                                                                 // 480
      args[0] = _.extend({}, args[0]);                                                                                // 481
      if ('_id' in args[0]) {                                                                                         // 482
        insertId = args[0]._id;                                                                                       // 483
        if (!insertId || !(typeof insertId === 'string'                                                               // 484
              || insertId instanceof Mongo.ObjectID))                                                                 // 485
          throw new Error("Meteor requires document _id fields to be non-empty strings or ObjectIDs");                // 486
      } else {                                                                                                        // 487
        var generateId = true;                                                                                        // 488
        // Don't generate the id if we're the client and the 'outermost' call                                         // 489
        // This optimization saves us passing both the randomSeed and the id                                          // 490
        // Passing both is redundant.                                                                                 // 491
        if (self._connection && self._connection !== Meteor.server) {                                                 // 492
          var enclosing = DDP._CurrentInvocation.get();                                                               // 493
          if (!enclosing) {                                                                                           // 494
            generateId = false;                                                                                       // 495
          }                                                                                                           // 496
        }                                                                                                             // 497
        if (generateId) {                                                                                             // 498
          insertId = args[0]._id = self._makeNewID();                                                                 // 499
        }                                                                                                             // 500
      }                                                                                                               // 501
    } else {                                                                                                          // 502
      args[0] = Mongo.Collection._rewriteSelector(args[0]);                                                           // 503
                                                                                                                      // 504
      if (name === "update") {                                                                                        // 505
        // Mutate args but copy the original options object. We need to add                                           // 506
        // insertedId to options, but don't want to mutate the caller's options                                       // 507
        // object. We need to mutate `args` because we pass `args` into the                                           // 508
        // driver below.                                                                                              // 509
        var options = args[2] = _.clone(args[2]) || {};                                                               // 510
        if (options && typeof options !== "function" && options.upsert) {                                             // 511
          // set `insertedId` if absent.  `insertedId` is a Meteor extension.                                         // 512
          if (options.insertedId) {                                                                                   // 513
            if (!(typeof options.insertedId === 'string'                                                              // 514
                  || options.insertedId instanceof Mongo.ObjectID))                                                   // 515
              throw new Error("insertedId must be string or ObjectID");                                               // 516
          } else if (! args[0]._id) {                                                                                 // 517
            options.insertedId = self._makeNewID();                                                                   // 518
          }                                                                                                           // 519
        }                                                                                                             // 520
      }                                                                                                               // 521
    }                                                                                                                 // 522
                                                                                                                      // 523
    // On inserts, always return the id that we generated; on all other                                               // 524
    // operations, just return the result from the collection.                                                        // 525
    var chooseReturnValueFromCollectionResult = function (result) {                                                   // 526
      if (name === "insert") {                                                                                        // 527
        if (!insertId && result) {                                                                                    // 528
          insertId = result;                                                                                          // 529
        }                                                                                                             // 530
        return insertId;                                                                                              // 531
      } else {                                                                                                        // 532
        return result;                                                                                                // 533
      }                                                                                                               // 534
    };                                                                                                                // 535
                                                                                                                      // 536
    var wrappedCallback;                                                                                              // 537
    if (callback) {                                                                                                   // 538
      wrappedCallback = function (error, result) {                                                                    // 539
        callback(error, ! error && chooseReturnValueFromCollectionResult(result));                                    // 540
      };                                                                                                              // 541
    }                                                                                                                 // 542
                                                                                                                      // 543
    // XXX see #MeteorServerNull                                                                                      // 544
    if (self._connection && self._connection !== Meteor.server) {                                                     // 545
      // just remote to another endpoint, propagate return value or                                                   // 546
      // exception.                                                                                                   // 547
                                                                                                                      // 548
      var enclosing = DDP._CurrentInvocation.get();                                                                   // 549
      var alreadyInSimulation = enclosing && enclosing.isSimulation;                                                  // 550
                                                                                                                      // 551
      if (Meteor.isClient && !wrappedCallback && ! alreadyInSimulation) {                                             // 552
        // Client can't block, so it can't report errors by exception,                                                // 553
        // only by callback. If they forget the callback, give them a                                                 // 554
        // default one that logs the error, so they aren't totally                                                    // 555
        // baffled if their writes don't work because their database is                                               // 556
        // down.                                                                                                      // 557
        // Don't give a default callback in simulation, because inside stubs we                                       // 558
        // want to return the results from the local collection immediately and                                       // 559
        // not force a callback.                                                                                      // 560
        wrappedCallback = function (err) {                                                                            // 561
          if (err)                                                                                                    // 562
            Meteor._debug(name + " failed: " + (err.reason || err.stack));                                            // 563
        };                                                                                                            // 564
      }                                                                                                               // 565
                                                                                                                      // 566
      if (!alreadyInSimulation && name !== "insert") {                                                                // 567
        // If we're about to actually send an RPC, we should throw an error if                                        // 568
        // this is a non-ID selector, because the mutation methods only allow                                         // 569
        // single-ID selectors. (If we don't throw here, we'll see flicker.)                                          // 570
        throwIfSelectorIsNotId(args[0], name);                                                                        // 571
      }                                                                                                               // 572
                                                                                                                      // 573
      ret = chooseReturnValueFromCollectionResult(                                                                    // 574
        self._connection.apply(self._prefix + name, args, {returnStubValue: true}, wrappedCallback)                   // 575
      );                                                                                                              // 576
                                                                                                                      // 577
    } else {                                                                                                          // 578
      // it's my collection.  descend into the collection object                                                      // 579
      // and propagate any exception.                                                                                 // 580
      args.push(wrappedCallback);                                                                                     // 581
      try {                                                                                                           // 582
        // If the user provided a callback and the collection implements this                                         // 583
        // operation asynchronously, then queryRet will be undefined, and the                                         // 584
        // result will be returned through the callback instead.                                                      // 585
        var queryRet = self._collection[name].apply(self._collection, args);                                          // 586
        ret = chooseReturnValueFromCollectionResult(queryRet);                                                        // 587
      } catch (e) {                                                                                                   // 588
        if (callback) {                                                                                               // 589
          callback(e);                                                                                                // 590
          return null;                                                                                                // 591
        }                                                                                                             // 592
        throw e;                                                                                                      // 593
      }                                                                                                               // 594
    }                                                                                                                 // 595
                                                                                                                      // 596
    // both sync and async, unless we threw an exception, return ret                                                  // 597
    // (new document ID for insert, num affected for update/remove, object with                                       // 598
    // numberAffected and maybe insertedId for upsert).                                                               // 599
    return ret;                                                                                                       // 600
  };                                                                                                                  // 601
});                                                                                                                   // 602
                                                                                                                      // 603
/**                                                                                                                   // 604
 * @summary Modify one or more documents in the collection, or insert one if no matching documents were found. Returns an object with keys `numberAffected` (the number of documents modified)  and `insertedId` (the unique _id of the document that was inserted, if any).
 * @locus Anywhere                                                                                                    // 606
 * @param {MongoSelector} selector Specifies which documents to modify                                                // 607
 * @param {MongoModifier} modifier Specifies how to modify the documents                                              // 608
 * @param {Object} [options]                                                                                          // 609
 * @param {Boolean} options.multi True to modify all matching documents; false to only modify one of the matching documents (the default).
 * @param {Function} [callback] Optional.  If present, called with an error object as the first argument and, if no error, the number of affected documents as the second.
 */                                                                                                                   // 612
Mongo.Collection.prototype.upsert = function (selector, modifier,                                                     // 613
                                               options, callback) {                                                   // 614
  var self = this;                                                                                                    // 615
  if (! callback && typeof options === "function") {                                                                  // 616
    callback = options;                                                                                               // 617
    options = {};                                                                                                     // 618
  }                                                                                                                   // 619
  return self.update(selector, modifier,                                                                              // 620
              _.extend({}, options, { _returnObject: true, upsert: true }),                                           // 621
              callback);                                                                                              // 622
};                                                                                                                    // 623
                                                                                                                      // 624
// We'll actually design an index API later. For now, we just pass through to                                         // 625
// Mongo's, but make it synchronous.                                                                                  // 626
Mongo.Collection.prototype._ensureIndex = function (index, options) {                                                 // 627
  var self = this;                                                                                                    // 628
  if (!self._collection._ensureIndex)                                                                                 // 629
    throw new Error("Can only call _ensureIndex on server collections");                                              // 630
  self._collection._ensureIndex(index, options);                                                                      // 631
};                                                                                                                    // 632
Mongo.Collection.prototype._dropIndex = function (index) {                                                            // 633
  var self = this;                                                                                                    // 634
  if (!self._collection._dropIndex)                                                                                   // 635
    throw new Error("Can only call _dropIndex on server collections");                                                // 636
  self._collection._dropIndex(index);                                                                                 // 637
};                                                                                                                    // 638
Mongo.Collection.prototype._dropCollection = function () {                                                            // 639
  var self = this;                                                                                                    // 640
  if (!self._collection.dropCollection)                                                                               // 641
    throw new Error("Can only call _dropCollection on server collections");                                           // 642
  self._collection.dropCollection();                                                                                  // 643
};                                                                                                                    // 644
Mongo.Collection.prototype._createCappedCollection = function (byteSize, maxDocuments) {                              // 645
  var self = this;                                                                                                    // 646
  if (!self._collection._createCappedCollection)                                                                      // 647
    throw new Error("Can only call _createCappedCollection on server collections");                                   // 648
  self._collection._createCappedCollection(byteSize, maxDocuments);                                                   // 649
};                                                                                                                    // 650
                                                                                                                      // 651
/**                                                                                                                   // 652
 * @summary Returns the [`Collection`](http://mongodb.github.io/node-mongodb-native/1.4/api-generated/collection.html) object corresponding to this collection from the [npm `mongodb` driver module](https://www.npmjs.com/package/mongodb) which is wrapped by `Mongo.Collection`.
 * @locus Server                                                                                                      // 654
 */                                                                                                                   // 655
Mongo.Collection.prototype.rawCollection = function () {                                                              // 656
  var self = this;                                                                                                    // 657
  if (! self._collection.rawCollection) {                                                                             // 658
    throw new Error("Can only call rawCollection on server collections");                                             // 659
  }                                                                                                                   // 660
  return self._collection.rawCollection();                                                                            // 661
};                                                                                                                    // 662
                                                                                                                      // 663
/**                                                                                                                   // 664
 * @summary Returns the [`Db`](http://mongodb.github.io/node-mongodb-native/1.4/api-generated/db.html) object corresponding to this collection's database connection from the [npm `mongodb` driver module](https://www.npmjs.com/package/mongodb) which is wrapped by `Mongo.Collection`.
 * @locus Server                                                                                                      // 666
 */                                                                                                                   // 667
Mongo.Collection.prototype.rawDatabase = function () {                                                                // 668
  var self = this;                                                                                                    // 669
  if (! (self._driver.mongo && self._driver.mongo.db)) {                                                              // 670
    throw new Error("Can only call rawDatabase on server collections");                                               // 671
  }                                                                                                                   // 672
  return self._driver.mongo.db;                                                                                       // 673
};                                                                                                                    // 674
                                                                                                                      // 675
                                                                                                                      // 676
/**                                                                                                                   // 677
 * @summary Create a Mongo-style `ObjectID`.  If you don't specify a `hexString`, the `ObjectID` will generated randomly (not using MongoDB's ID construction rules).
 * @locus Anywhere                                                                                                    // 679
 * @class                                                                                                             // 680
 * @param {String} [hexString] Optional.  The 24-character hexadecimal contents of the ObjectID to create             // 681
 */                                                                                                                   // 682
Mongo.ObjectID = MongoID.ObjectID;                                                                                    // 683
                                                                                                                      // 684
/**                                                                                                                   // 685
 * @summary To create a cursor, use find. To access the documents in a cursor, use forEach, map, or fetch.            // 686
 * @class                                                                                                             // 687
 * @instanceName cursor                                                                                               // 688
 */                                                                                                                   // 689
Mongo.Cursor = LocalCollection.Cursor;                                                                                // 690
                                                                                                                      // 691
/**                                                                                                                   // 692
 * @deprecated in 0.9.1                                                                                               // 693
 */                                                                                                                   // 694
Mongo.Collection.Cursor = Mongo.Cursor;                                                                               // 695
                                                                                                                      // 696
/**                                                                                                                   // 697
 * @deprecated in 0.9.1                                                                                               // 698
 */                                                                                                                   // 699
Mongo.Collection.ObjectID = Mongo.ObjectID;                                                                           // 700
                                                                                                                      // 701
///                                                                                                                   // 702
/// Remote methods and access control.                                                                                // 703
///                                                                                                                   // 704
                                                                                                                      // 705
// Restrict default mutators on collection. allow() and deny() take the                                               // 706
// same options:                                                                                                      // 707
//                                                                                                                    // 708
// options.insert {Function(userId, doc)}                                                                             // 709
//   return true to allow/deny adding this document                                                                   // 710
//                                                                                                                    // 711
// options.update {Function(userId, docs, fields, modifier)}                                                          // 712
//   return true to allow/deny updating these documents.                                                              // 713
//   `fields` is passed as an array of fields that are to be modified                                                 // 714
//                                                                                                                    // 715
// options.remove {Function(userId, docs)}                                                                            // 716
//   return true to allow/deny removing these documents                                                               // 717
//                                                                                                                    // 718
// options.fetch {Array}                                                                                              // 719
//   Fields to fetch for these validators. If any call to allow or deny                                               // 720
//   does not have this option then all fields are loaded.                                                            // 721
//                                                                                                                    // 722
// allow and deny can be called multiple times. The validators are                                                    // 723
// evaluated as follows:                                                                                              // 724
// - If neither deny() nor allow() has been called on the collection,                                                 // 725
//   then the request is allowed if and only if the "insecure" smart                                                  // 726
//   package is in use.                                                                                               // 727
// - Otherwise, if any deny() function returns true, the request is denied.                                           // 728
// - Otherwise, if any allow() function returns true, the request is allowed.                                         // 729
// - Otherwise, the request is denied.                                                                                // 730
//                                                                                                                    // 731
// Meteor may call your deny() and allow() functions in any order, and may not                                        // 732
// call all of them if it is able to make a decision without calling them all                                         // 733
// (so don't include side effects).                                                                                   // 734
                                                                                                                      // 735
(function () {                                                                                                        // 736
  var addValidator = function(allowOrDeny, options) {                                                                 // 737
    // validate keys                                                                                                  // 738
    var VALID_KEYS = ['insert', 'update', 'remove', 'fetch', 'transform'];                                            // 739
    _.each(_.keys(options), function (key) {                                                                          // 740
      if (!_.contains(VALID_KEYS, key))                                                                               // 741
        throw new Error(allowOrDeny + ": Invalid key: " + key);                                                       // 742
    });                                                                                                               // 743
                                                                                                                      // 744
    var self = this;                                                                                                  // 745
    self._restricted = true;                                                                                          // 746
                                                                                                                      // 747
    _.each(['insert', 'update', 'remove'], function (name) {                                                          // 748
      if (options[name]) {                                                                                            // 749
        if (!(options[name] instanceof Function)) {                                                                   // 750
          throw new Error(allowOrDeny + ": Value for `" + name + "` must be a function");                             // 751
        }                                                                                                             // 752
                                                                                                                      // 753
        // If the transform is specified at all (including as 'null') in this                                         // 754
        // call, then take that; otherwise, take the transform from the                                               // 755
        // collection.                                                                                                // 756
        if (options.transform === undefined) {                                                                        // 757
          options[name].transform = self._transform;  // already wrapped                                              // 758
        } else {                                                                                                      // 759
          options[name].transform = LocalCollection.wrapTransform(                                                    // 760
            options.transform);                                                                                       // 761
        }                                                                                                             // 762
                                                                                                                      // 763
        self._validators[name][allowOrDeny].push(options[name]);                                                      // 764
      }                                                                                                               // 765
    });                                                                                                               // 766
                                                                                                                      // 767
    // Only update the fetch fields if we're passed things that affect                                                // 768
    // fetching. This way allow({}) and allow({insert: f}) don't result in                                            // 769
    // setting fetchAllFields                                                                                         // 770
    if (options.update || options.remove || options.fetch) {                                                          // 771
      if (options.fetch && !(options.fetch instanceof Array)) {                                                       // 772
        throw new Error(allowOrDeny + ": Value for `fetch` must be an array");                                        // 773
      }                                                                                                               // 774
      self._updateFetch(options.fetch);                                                                               // 775
    }                                                                                                                 // 776
  };                                                                                                                  // 777
                                                                                                                      // 778
  /**                                                                                                                 // 779
   * @summary Allow users to write directly to this collection from client code, subject to limitations you define.   // 780
   * @locus Server                                                                                                    // 781
   * @param {Object} options                                                                                          // 782
   * @param {Function} options.insert,update,remove Functions that look at a proposed modification to the database and return true if it should be allowed.
   * @param {String[]} options.fetch Optional performance enhancement. Limits the fields that will be fetched from the database for inspection by your `update` and `remove` functions.
   * @param {Function} options.transform Overrides `transform` on the  [`Collection`](#collections).  Pass `null` to disable transformation.
   */                                                                                                                 // 786
  Mongo.Collection.prototype.allow = function(options) {                                                              // 787
    addValidator.call(this, 'allow', options);                                                                        // 788
  };                                                                                                                  // 789
                                                                                                                      // 790
  /**                                                                                                                 // 791
   * @summary Override `allow` rules.                                                                                 // 792
   * @locus Server                                                                                                    // 793
   * @param {Object} options                                                                                          // 794
   * @param {Function} options.insert,update,remove Functions that look at a proposed modification to the database and return true if it should be denied, even if an [allow](#allow) rule says otherwise.
   * @param {String[]} options.fetch Optional performance enhancement. Limits the fields that will be fetched from the database for inspection by your `update` and `remove` functions.
   * @param {Function} options.transform Overrides `transform` on the  [`Collection`](#collections).  Pass `null` to disable transformation.
   */                                                                                                                 // 798
  Mongo.Collection.prototype.deny = function(options) {                                                               // 799
    addValidator.call(this, 'deny', options);                                                                         // 800
  };                                                                                                                  // 801
})();                                                                                                                 // 802
                                                                                                                      // 803
                                                                                                                      // 804
Mongo.Collection.prototype._defineMutationMethods = function() {                                                      // 805
  var self = this;                                                                                                    // 806
                                                                                                                      // 807
  // set to true once we call any allow or deny methods. If true, use                                                 // 808
  // allow/deny semantics. If false, use insecure mode semantics.                                                     // 809
  self._restricted = false;                                                                                           // 810
                                                                                                                      // 811
  // Insecure mode (default to allowing writes). Defaults to 'undefined' which                                        // 812
  // means insecure iff the insecure package is loaded. This property can be                                          // 813
  // overriden by tests or packages wishing to change insecure mode behavior of                                       // 814
  // their collections.                                                                                               // 815
  self._insecure = undefined;                                                                                         // 816
                                                                                                                      // 817
  self._validators = {                                                                                                // 818
    insert: {allow: [], deny: []},                                                                                    // 819
    update: {allow: [], deny: []},                                                                                    // 820
    remove: {allow: [], deny: []},                                                                                    // 821
    upsert: {allow: [], deny: []}, // dummy arrays; can't set these!                                                  // 822
    fetch: [],                                                                                                        // 823
    fetchAllFields: false                                                                                             // 824
  };                                                                                                                  // 825
                                                                                                                      // 826
  if (!self._name)                                                                                                    // 827
    return; // anonymous collection                                                                                   // 828
                                                                                                                      // 829
  // XXX Think about method namespacing. Maybe methods should be                                                      // 830
  // "Meteor:Mongo:insert/NAME"?                                                                                      // 831
  self._prefix = '/' + self._name + '/';                                                                              // 832
                                                                                                                      // 833
  // mutation methods                                                                                                 // 834
  if (self._connection) {                                                                                             // 835
    var m = {};                                                                                                       // 836
                                                                                                                      // 837
    _.each(['insert', 'update', 'remove'], function (method) {                                                        // 838
      m[self._prefix + method] = function (/* ... */) {                                                               // 839
        // All the methods do their own validation, instead of using check().                                         // 840
        check(arguments, [Match.Any]);                                                                                // 841
        var args = _.toArray(arguments);                                                                              // 842
        try {                                                                                                         // 843
          // For an insert, if the client didn't specify an _id, generate one                                         // 844
          // now; because this uses DDP.randomStream, it will be consistent with                                      // 845
          // what the client generated. We generate it now rather than later so                                       // 846
          // that if (eg) an allow/deny rule does an insert to the same                                               // 847
          // collection (not that it really should), the generated _id will                                           // 848
          // still be the first use of the stream and will be consistent.                                             // 849
          //                                                                                                          // 850
          // However, we don't actually stick the _id onto the document yet,                                          // 851
          // because we want allow/deny rules to be able to differentiate                                             // 852
          // between arbitrary client-specified _id fields and merely                                                 // 853
          // client-controlled-via-randomSeed fields.                                                                 // 854
          var generatedId = null;                                                                                     // 855
          if (method === "insert" && !_.has(args[0], '_id')) {                                                        // 856
            generatedId = self._makeNewID();                                                                          // 857
          }                                                                                                           // 858
                                                                                                                      // 859
          if (this.isSimulation) {                                                                                    // 860
            // In a client simulation, you can do any mutation (even with a                                           // 861
            // complex selector).                                                                                     // 862
            if (generatedId !== null)                                                                                 // 863
              args[0]._id = generatedId;                                                                              // 864
            return self._collection[method].apply(                                                                    // 865
              self._collection, args);                                                                                // 866
          }                                                                                                           // 867
                                                                                                                      // 868
          // This is the server receiving a method call from the client.                                              // 869
                                                                                                                      // 870
          // We don't allow arbitrary selectors in mutations from the client: only                                    // 871
          // single-ID selectors.                                                                                     // 872
          if (method !== 'insert')                                                                                    // 873
            throwIfSelectorIsNotId(args[0], method);                                                                  // 874
                                                                                                                      // 875
          if (self._restricted) {                                                                                     // 876
            // short circuit if there is no way it will pass.                                                         // 877
            if (self._validators[method].allow.length === 0) {                                                        // 878
              throw new Meteor.Error(                                                                                 // 879
                403, "Access denied. No allow validators set on restricted " +                                        // 880
                  "collection for method '" + method + "'.");                                                         // 881
            }                                                                                                         // 882
                                                                                                                      // 883
            var validatedMethodName =                                                                                 // 884
                  '_validated' + method.charAt(0).toUpperCase() + method.slice(1);                                    // 885
            args.unshift(this.userId);                                                                                // 886
            method === 'insert' && args.push(generatedId);                                                            // 887
            return self[validatedMethodName].apply(self, args);                                                       // 888
          } else if (self._isInsecure()) {                                                                            // 889
            if (generatedId !== null)                                                                                 // 890
              args[0]._id = generatedId;                                                                              // 891
            // In insecure mode, allow any mutation (with a simple selector).                                         // 892
            // XXX This is kind of bogus.  Instead of blindly passing whatever                                        // 893
            //     we get from the network to this function, we should actually                                       // 894
            //     know the correct arguments for the function and pass just                                          // 895
            //     them.  For example, if you have an extraneous extra null                                           // 896
            //     argument and this is Mongo on the server, the .wrapAsync'd                                         // 897
            //     functions like update will get confused and pass the                                               // 898
            //     "fut.resolver()" in the wrong slot, where _update will never                                       // 899
            //     invoke it. Bam, broken DDP connection.  Probably should just                                       // 900
            //     take this whole method and write it three times, invoking                                          // 901
            //     helpers for the common code.                                                                       // 902
            return self._collection[method].apply(self._collection, args);                                            // 903
          } else {                                                                                                    // 904
            // In secure mode, if we haven't called allow or deny, then nothing                                       // 905
            // is permitted.                                                                                          // 906
            throw new Meteor.Error(403, "Access denied");                                                             // 907
          }                                                                                                           // 908
        } catch (e) {                                                                                                 // 909
          if (e.name === 'MongoError' || e.name === 'MinimongoError') {                                               // 910
            throw new Meteor.Error(409, e.toString());                                                                // 911
          } else {                                                                                                    // 912
            throw e;                                                                                                  // 913
          }                                                                                                           // 914
        }                                                                                                             // 915
      };                                                                                                              // 916
    });                                                                                                               // 917
    // Minimongo on the server gets no stubs; instead, by default                                                     // 918
    // it wait()s until its result is ready, yielding.                                                                // 919
    // This matches the behavior of macromongo on the server better.                                                  // 920
    // XXX see #MeteorServerNull                                                                                      // 921
    if (Meteor.isClient || self._connection === Meteor.server)                                                        // 922
      self._connection.methods(m);                                                                                    // 923
  }                                                                                                                   // 924
};                                                                                                                    // 925
                                                                                                                      // 926
                                                                                                                      // 927
Mongo.Collection.prototype._updateFetch = function (fields) {                                                         // 928
  var self = this;                                                                                                    // 929
                                                                                                                      // 930
  if (!self._validators.fetchAllFields) {                                                                             // 931
    if (fields) {                                                                                                     // 932
      self._validators.fetch = _.union(self._validators.fetch, fields);                                               // 933
    } else {                                                                                                          // 934
      self._validators.fetchAllFields = true;                                                                         // 935
      // clear fetch just to make sure we don't accidentally read it                                                  // 936
      self._validators.fetch = null;                                                                                  // 937
    }                                                                                                                 // 938
  }                                                                                                                   // 939
};                                                                                                                    // 940
                                                                                                                      // 941
Mongo.Collection.prototype._isInsecure = function () {                                                                // 942
  var self = this;                                                                                                    // 943
  if (self._insecure === undefined)                                                                                   // 944
    return !!Package.insecure;                                                                                        // 945
  return self._insecure;                                                                                              // 946
};                                                                                                                    // 947
                                                                                                                      // 948
var docToValidate = function (validator, doc, generatedId) {                                                          // 949
  var ret = doc;                                                                                                      // 950
  if (validator.transform) {                                                                                          // 951
    ret = EJSON.clone(doc);                                                                                           // 952
    // If you set a server-side transform on your collection, then you don't get                                      // 953
    // to tell the difference between "client specified the ID" and "server                                           // 954
    // generated the ID", because transforms expect to get _id.  If you want to                                       // 955
    // do that check, you can do it with a specific                                                                   // 956
    // `C.allow({insert: f, transform: null})` validator.                                                             // 957
    if (generatedId !== null) {                                                                                       // 958
      ret._id = generatedId;                                                                                          // 959
    }                                                                                                                 // 960
    ret = validator.transform(ret);                                                                                   // 961
  }                                                                                                                   // 962
  return ret;                                                                                                         // 963
};                                                                                                                    // 964
                                                                                                                      // 965
Mongo.Collection.prototype._validatedInsert = function (userId, doc,                                                  // 966
                                                         generatedId) {                                               // 967
  var self = this;                                                                                                    // 968
                                                                                                                      // 969
  // call user validators.                                                                                            // 970
  // Any deny returns true means denied.                                                                              // 971
  if (_.any(self._validators.insert.deny, function(validator) {                                                       // 972
    return validator(userId, docToValidate(validator, doc, generatedId));                                             // 973
  })) {                                                                                                               // 974
    throw new Meteor.Error(403, "Access denied");                                                                     // 975
  }                                                                                                                   // 976
  // Any allow returns true means proceed. Throw error if they all fail.                                              // 977
  if (_.all(self._validators.insert.allow, function(validator) {                                                      // 978
    return !validator(userId, docToValidate(validator, doc, generatedId));                                            // 979
  })) {                                                                                                               // 980
    throw new Meteor.Error(403, "Access denied");                                                                     // 981
  }                                                                                                                   // 982
                                                                                                                      // 983
  // If we generated an ID above, insert it now: after the validation, but                                            // 984
  // before actually inserting.                                                                                       // 985
  if (generatedId !== null)                                                                                           // 986
    doc._id = generatedId;                                                                                            // 987
                                                                                                                      // 988
  self._collection.insert.call(self._collection, doc);                                                                // 989
};                                                                                                                    // 990
                                                                                                                      // 991
var transformDoc = function (validator, doc) {                                                                        // 992
  if (validator.transform)                                                                                            // 993
    return validator.transform(doc);                                                                                  // 994
  return doc;                                                                                                         // 995
};                                                                                                                    // 996
                                                                                                                      // 997
// Simulate a mongo `update` operation while validating that the access                                               // 998
// control rules set by calls to `allow/deny` are satisfied. If all                                                   // 999
// pass, rewrite the mongo operation to use $in to set the list of                                                    // 1000
// document ids to change ##ValidatedChange                                                                           // 1001
Mongo.Collection.prototype._validatedUpdate = function(                                                               // 1002
    userId, selector, mutator, options) {                                                                             // 1003
  var self = this;                                                                                                    // 1004
                                                                                                                      // 1005
  check(mutator, Object);                                                                                             // 1006
                                                                                                                      // 1007
  options = _.clone(options) || {};                                                                                   // 1008
                                                                                                                      // 1009
  if (!LocalCollection._selectorIsIdPerhapsAsObject(selector))                                                        // 1010
    throw new Error("validated update should be of a single ID");                                                     // 1011
                                                                                                                      // 1012
  // We don't support upserts because they don't fit nicely into allow/deny                                           // 1013
  // rules.                                                                                                           // 1014
  if (options.upsert)                                                                                                 // 1015
    throw new Meteor.Error(403, "Access denied. Upserts not " +                                                       // 1016
                           "allowed in a restricted collection.");                                                    // 1017
                                                                                                                      // 1018
  var noReplaceError = "Access denied. In a restricted collection you can only" +                                     // 1019
        " update documents, not replace them. Use a Mongo update operator, such " +                                   // 1020
        "as '$set'.";                                                                                                 // 1021
                                                                                                                      // 1022
  // compute modified fields                                                                                          // 1023
  var fields = [];                                                                                                    // 1024
  if (_.isEmpty(mutator)) {                                                                                           // 1025
    throw new Meteor.Error(403, noReplaceError);                                                                      // 1026
  }                                                                                                                   // 1027
  _.each(mutator, function (params, op) {                                                                             // 1028
    if (op.charAt(0) !== '$') {                                                                                       // 1029
      throw new Meteor.Error(403, noReplaceError);                                                                    // 1030
    } else if (!_.has(ALLOWED_UPDATE_OPERATIONS, op)) {                                                               // 1031
      throw new Meteor.Error(                                                                                         // 1032
        403, "Access denied. Operator " + op + " not allowed in a restricted collection.");                           // 1033
    } else {                                                                                                          // 1034
      _.each(_.keys(params), function (field) {                                                                       // 1035
        // treat dotted fields as if they are replacing their                                                         // 1036
        // top-level part                                                                                             // 1037
        if (field.indexOf('.') !== -1)                                                                                // 1038
          field = field.substring(0, field.indexOf('.'));                                                             // 1039
                                                                                                                      // 1040
        // record the field we are trying to change                                                                   // 1041
        if (!_.contains(fields, field))                                                                               // 1042
          fields.push(field);                                                                                         // 1043
      });                                                                                                             // 1044
    }                                                                                                                 // 1045
  });                                                                                                                 // 1046
                                                                                                                      // 1047
  var findOptions = {transform: null};                                                                                // 1048
  if (!self._validators.fetchAllFields) {                                                                             // 1049
    findOptions.fields = {};                                                                                          // 1050
    _.each(self._validators.fetch, function(fieldName) {                                                              // 1051
      findOptions.fields[fieldName] = 1;                                                                              // 1052
    });                                                                                                               // 1053
  }                                                                                                                   // 1054
                                                                                                                      // 1055
  var doc = self._collection.findOne(selector, findOptions);                                                          // 1056
  if (!doc)  // none satisfied!                                                                                       // 1057
    return 0;                                                                                                         // 1058
                                                                                                                      // 1059
  // call user validators.                                                                                            // 1060
  // Any deny returns true means denied.                                                                              // 1061
  if (_.any(self._validators.update.deny, function(validator) {                                                       // 1062
    var factoriedDoc = transformDoc(validator, doc);                                                                  // 1063
    return validator(userId,                                                                                          // 1064
                     factoriedDoc,                                                                                    // 1065
                     fields,                                                                                          // 1066
                     mutator);                                                                                        // 1067
  })) {                                                                                                               // 1068
    throw new Meteor.Error(403, "Access denied");                                                                     // 1069
  }                                                                                                                   // 1070
  // Any allow returns true means proceed. Throw error if they all fail.                                              // 1071
  if (_.all(self._validators.update.allow, function(validator) {                                                      // 1072
    var factoriedDoc = transformDoc(validator, doc);                                                                  // 1073
    return !validator(userId,                                                                                         // 1074
                      factoriedDoc,                                                                                   // 1075
                      fields,                                                                                         // 1076
                      mutator);                                                                                       // 1077
  })) {                                                                                                               // 1078
    throw new Meteor.Error(403, "Access denied");                                                                     // 1079
  }                                                                                                                   // 1080
                                                                                                                      // 1081
  options._forbidReplace = true;                                                                                      // 1082
                                                                                                                      // 1083
  // Back when we supported arbitrary client-provided selectors, we actually                                          // 1084
  // rewrote the selector to include an _id clause before passing to Mongo to                                         // 1085
  // avoid races, but since selector is guaranteed to already just be an ID, we                                       // 1086
  // don't have to any more.                                                                                          // 1087
                                                                                                                      // 1088
  return self._collection.update.call(                                                                                // 1089
    self._collection, selector, mutator, options);                                                                    // 1090
};                                                                                                                    // 1091
                                                                                                                      // 1092
// Only allow these operations in validated updates. Specifically                                                     // 1093
// whitelist operations, rather than blacklist, so new complex                                                        // 1094
// operations that are added aren't automatically allowed. A complex                                                  // 1095
// operation is one that does more than just modify its target                                                        // 1096
// field. For now this contains all update operations except '$rename'.                                               // 1097
// http://docs.mongodb.org/manual/reference/operators/#update                                                         // 1098
var ALLOWED_UPDATE_OPERATIONS = {                                                                                     // 1099
  $inc:1, $set:1, $unset:1, $addToSet:1, $pop:1, $pullAll:1, $pull:1,                                                 // 1100
  $pushAll:1, $push:1, $bit:1                                                                                         // 1101
};                                                                                                                    // 1102
                                                                                                                      // 1103
// Simulate a mongo `remove` operation while validating access control                                                // 1104
// rules. See #ValidatedChange                                                                                        // 1105
Mongo.Collection.prototype._validatedRemove = function(userId, selector) {                                            // 1106
  var self = this;                                                                                                    // 1107
                                                                                                                      // 1108
  var findOptions = {transform: null};                                                                                // 1109
  if (!self._validators.fetchAllFields) {                                                                             // 1110
    findOptions.fields = {};                                                                                          // 1111
    _.each(self._validators.fetch, function(fieldName) {                                                              // 1112
      findOptions.fields[fieldName] = 1;                                                                              // 1113
    });                                                                                                               // 1114
  }                                                                                                                   // 1115
                                                                                                                      // 1116
  var doc = self._collection.findOne(selector, findOptions);                                                          // 1117
  if (!doc)                                                                                                           // 1118
    return 0;                                                                                                         // 1119
                                                                                                                      // 1120
  // call user validators.                                                                                            // 1121
  // Any deny returns true means denied.                                                                              // 1122
  if (_.any(self._validators.remove.deny, function(validator) {                                                       // 1123
    return validator(userId, transformDoc(validator, doc));                                                           // 1124
  })) {                                                                                                               // 1125
    throw new Meteor.Error(403, "Access denied");                                                                     // 1126
  }                                                                                                                   // 1127
  // Any allow returns true means proceed. Throw error if they all fail.                                              // 1128
  if (_.all(self._validators.remove.allow, function(validator) {                                                      // 1129
    return !validator(userId, transformDoc(validator, doc));                                                          // 1130
  })) {                                                                                                               // 1131
    throw new Meteor.Error(403, "Access denied");                                                                     // 1132
  }                                                                                                                   // 1133
                                                                                                                      // 1134
  // Back when we supported arbitrary client-provided selectors, we actually                                          // 1135
  // rewrote the selector to {_id: {$in: [ids that we found]}} before passing to                                      // 1136
  // Mongo to avoid races, but since selector is guaranteed to already just be                                        // 1137
  // an ID, we don't have to any more.                                                                                // 1138
                                                                                                                      // 1139
  return self._collection.remove.call(self._collection, selector);                                                    // 1140
};                                                                                                                    // 1141
                                                                                                                      // 1142
/**                                                                                                                   // 1143
 * @deprecated in 0.9.1                                                                                               // 1144
 */                                                                                                                   // 1145
Meteor.Collection = Mongo.Collection;                                                                                 // 1146
                                                                                                                      // 1147
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package.mongo = {
  Mongo: Mongo
};

})();
