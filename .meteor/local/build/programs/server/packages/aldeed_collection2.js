(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var _ = Package.underscore._;
var check = Package.check.check;
var Match = Package.check.Match;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;
var LocalCollection = Package.minimongo.LocalCollection;
var Minimongo = Package.minimongo.Minimongo;
var EJSON = Package.ejson.EJSON;

/* Package-scope variables */
var Mongo;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/aldeed_collection2/packages/aldeed_collection2.js        //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {                                                       // 1
                                                                     // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/aldeed:collection2/collection2.js                                                                        //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
/* global Meteor, _, SimpleSchema, Mongo:true, Match, Package, EJSON */                                              // 1
                                                                                                                     // 2
// Extend the schema options allowed by SimpleSchema                                                                 // 3
SimpleSchema.extendOptions({                                                                                         // 4
  index: Match.Optional(Match.OneOf(Number, String, Boolean)),                                                       // 5
  unique: Match.Optional(Boolean),                                                                                   // 6
  sparse: Match.Optional(Boolean),                                                                                   // 7
  denyInsert: Match.Optional(Boolean),                                                                               // 8
  denyUpdate: Match.Optional(Boolean)                                                                                // 9
});                                                                                                                  // 10
                                                                                                                     // 11
// Define some extra validation error messages                                                                       // 12
SimpleSchema.messages({                                                                                              // 13
  notUnique: "[label] must be unique",                                                                               // 14
  insertNotAllowed: "[label] cannot be set during an insert",                                                        // 15
  updateNotAllowed: "[label] cannot be set during an update"                                                         // 16
});                                                                                                                  // 17
                                                                                                                     // 18
/*                                                                                                                   // 19
 * Public API                                                                                                        // 20
 */                                                                                                                  // 21
                                                                                                                     // 22
// backwards compatibility                                                                                           // 23
if (typeof Mongo === "undefined") {                                                                                  // 24
  Mongo = {};                                                                                                        // 25
  Mongo.Collection = Meteor.Collection;                                                                              // 26
}                                                                                                                    // 27
                                                                                                                     // 28
/**                                                                                                                  // 29
 * Mongo.Collection.prototype.attachSchema                                                                           // 30
 * @param {SimpleSchema|Object} ss - SimpleSchema instance or a schema definition object                             // 31
 *    from which to create a new SimpleSchema instance                                                               // 32
 * @param {Object} [options]                                                                                         // 33
 * @param {Boolean} [options.transform=false] Set to `true` if your document must be passed                          // 34
 *    through the collection's transform to properly validate.                                                       // 35
 * @param {Boolean} [options.replace=false] Set to `true` to replace any existing schema instead of combining        // 36
 * @return {undefined}                                                                                               // 37
 *                                                                                                                   // 38
 * Use this method to attach a schema to a collection created by another package,                                    // 39
 * such as Meteor.users. It is most likely unsafe to call this method more than                                      // 40
 * once for a single collection, or to call this for a collection that had a                                         // 41
 * schema object passed to its constructor.                                                                          // 42
 */                                                                                                                  // 43
Mongo.Collection.prototype.attachSchema = function c2AttachSchema(ss, options) {                                     // 44
  var self = this;                                                                                                   // 45
  options = options || {};                                                                                           // 46
                                                                                                                     // 47
  if (!(ss instanceof SimpleSchema)) {                                                                               // 48
    ss = new SimpleSchema(ss);                                                                                       // 49
  }                                                                                                                  // 50
                                                                                                                     // 51
  self._c2 = self._c2 || {};                                                                                         // 52
                                                                                                                     // 53
  // If we've already attached one schema, we combine both into a new schema unless options.replace is `true`        // 54
  if (self._c2._simpleSchema && options.replace !== true) {                                                          // 55
    ss = new SimpleSchema([self._c2._simpleSchema, ss]);                                                             // 56
  }                                                                                                                  // 57
                                                                                                                     // 58
  // Track the schema in the collection                                                                              // 59
  self._c2._simpleSchema = ss;                                                                                       // 60
                                                                                                                     // 61
  if (self._collection instanceof LocalCollection) {                                                                 // 62
    self._collection._c2 = self._collection._c2 || {};                                                               // 63
    self._collection._c2._simpleSchema = ss;                                                                         // 64
  }                                                                                                                  // 65
                                                                                                                     // 66
  function ensureIndex(c, index, indexName, unique, sparse) {                                                        // 67
    Meteor.startup(function () {                                                                                     // 68
      c._collection._ensureIndex(index, {                                                                            // 69
        background: true,                                                                                            // 70
        name: indexName,                                                                                             // 71
        unique: unique,                                                                                              // 72
        sparse: sparse                                                                                               // 73
      });                                                                                                            // 74
    });                                                                                                              // 75
  }                                                                                                                  // 76
                                                                                                                     // 77
  function dropIndex(c, indexName) {                                                                                 // 78
    Meteor.startup(function () {                                                                                     // 79
      try {                                                                                                          // 80
        c._collection._dropIndex(indexName);                                                                         // 81
      } catch (err) {                                                                                                // 82
        // no index with that name, which is what we want                                                            // 83
      }                                                                                                              // 84
    });                                                                                                              // 85
  }                                                                                                                  // 86
                                                                                                                     // 87
  // Loop over fields definitions and ensure collection indexes (server side only)                                   // 88
  if (Meteor.isServer) {                                                                                             // 89
    _.each(ss.schema(), function(definition, fieldName) {                                                            // 90
      if ('index' in definition || definition.unique === true) {                                                     // 91
        var index = {}, indexValue;                                                                                  // 92
        // If they specified `unique: true` but not `index`,                                                         // 93
        // we assume `index: 1` to set up the unique index in mongo                                                  // 94
        if ('index' in definition) {                                                                                 // 95
          indexValue = definition.index;                                                                             // 96
          if (indexValue === true) {                                                                                 // 97
            indexValue = 1;                                                                                          // 98
          }                                                                                                          // 99
        } else {                                                                                                     // 100
          indexValue = 1;                                                                                            // 101
        }                                                                                                            // 102
        var indexName = 'c2_' + fieldName;                                                                           // 103
        // In the index object, we want object array keys without the ".$" piece                                     // 104
        var idxFieldName = fieldName.replace(/\.\$\./g, ".");                                                        // 105
        index[idxFieldName] = indexValue;                                                                            // 106
        var unique = !!definition.unique && (indexValue === 1 || indexValue === -1);                                 // 107
        var sparse = definition.sparse || false;                                                                     // 108
                                                                                                                     // 109
        // If unique and optional, force sparse to prevent errors                                                    // 110
        if (!sparse && unique && definition.optional) {                                                              // 111
          sparse = true;                                                                                             // 112
        }                                                                                                            // 113
                                                                                                                     // 114
        if (indexValue === false) {                                                                                  // 115
          dropIndex(self, indexName);                                                                                // 116
        } else {                                                                                                     // 117
          ensureIndex(self, index, indexName, unique, sparse);                                                       // 118
        }                                                                                                            // 119
      }                                                                                                              // 120
    });                                                                                                              // 121
  }                                                                                                                  // 122
                                                                                                                     // 123
  // Set up additional checks                                                                                        // 124
  ss.validator(function() {                                                                                          // 125
    var def = this.definition;                                                                                       // 126
    var val = this.value;                                                                                            // 127
    var op = this.operator;                                                                                          // 128
                                                                                                                     // 129
    if (def.denyInsert && val !== void 0 && !op) {                                                                   // 130
      // This is an insert of a defined value into a field where denyInsert=true                                     // 131
      return "insertNotAllowed";                                                                                     // 132
    }                                                                                                                // 133
                                                                                                                     // 134
    if (def.denyUpdate && op) {                                                                                      // 135
      // This is an insert of a defined value into a field where denyUpdate=true                                     // 136
      if (op !== "$set" || (op === "$set" && val !== void 0)) {                                                      // 137
        return "updateNotAllowed";                                                                                   // 138
      }                                                                                                              // 139
    }                                                                                                                // 140
                                                                                                                     // 141
    return true;                                                                                                     // 142
  });                                                                                                                // 143
                                                                                                                     // 144
  defineDeny(self, options);                                                                                         // 145
  keepInsecure(self);                                                                                                // 146
};                                                                                                                   // 147
                                                                                                                     // 148
_.each([Mongo.Collection, LocalCollection], function (obj) {                                                         // 149
  obj.prototype.simpleSchema = function () {                                                                         // 150
    var self = this;                                                                                                 // 151
    return self._c2 ? self._c2._simpleSchema : null;                                                                 // 152
  };                                                                                                                 // 153
});                                                                                                                  // 154
                                                                                                                     // 155
// Wrap DB write operation methods                                                                                   // 156
_.each(['insert', 'update'], function(methodName) {                                                                  // 157
    var _super = Mongo.Collection.prototype[methodName];                                                             // 158
    Mongo.Collection.prototype[methodName] = function() {                                                            // 159
        var self = this,                                                                                             // 160
            args = _.toArray(arguments);                                                                             // 161
        if (self._c2) {                                                                                              // 162
                                                                                                                     // 163
            var userId = null;                                                                                       // 164
            try { // https://github.com/aldeed/meteor-collection2/issues/175                                         // 165
                userId = Meteor.userId();                                                                            // 166
            } catch (err) {}                                                                                         // 167
                                                                                                                     // 168
            args = doValidate.call(                                                                                  // 169
              self,                                                                                                  // 170
              methodName,                                                                                            // 171
              args,                                                                                                  // 172
              true, // getAutoValues                                                                                 // 173
              userId,                                                                                                // 174
              Meteor.isServer // isFromTrustedCode                                                                   // 175
            );                                                                                                       // 176
            if (!args) {                                                                                             // 177
                // doValidate already called the callback or threw the error                                         // 178
                if (methodName === "insert") {                                                                       // 179
                    // insert should always return an ID to match core behavior                                      // 180
                    return self._makeNewID();                                                                        // 181
                } else {                                                                                             // 182
                    return;                                                                                          // 183
                }                                                                                                    // 184
            }                                                                                                        // 185
        }                                                                                                            // 186
        return _super.apply(self, args);                                                                             // 187
    };                                                                                                               // 188
});                                                                                                                  // 189
                                                                                                                     // 190
/*                                                                                                                   // 191
 * Private                                                                                                           // 192
 */                                                                                                                  // 193
                                                                                                                     // 194
function doValidate(type, args, getAutoValues, userId, isFromTrustedCode) {                                          // 195
  var self = this, doc, callback, error, options, isUpsert, selector, last, hasCallback;                             // 196
                                                                                                                     // 197
  var schema = self.simpleSchema();                                                                                  // 198
  var isLocalCollection = (self._connection === null);                                                               // 199
                                                                                                                     // 200
  if (!args.length) {                                                                                                // 201
    throw new Error(type + " requires an argument");                                                                 // 202
  }                                                                                                                  // 203
                                                                                                                     // 204
  // Gather arguments and cache the selector                                                                         // 205
  if (type === "insert") {                                                                                           // 206
    doc = args[0];                                                                                                   // 207
    options = args[1];                                                                                               // 208
    callback = args[2];                                                                                              // 209
                                                                                                                     // 210
    // The real insert doesn't take options                                                                          // 211
    if (typeof options === "function") {                                                                             // 212
      args = [doc, options];                                                                                         // 213
    } else if (typeof callback === "function") {                                                                     // 214
      args = [doc, callback];                                                                                        // 215
    } else {                                                                                                         // 216
      args = [doc];                                                                                                  // 217
    }                                                                                                                // 218
                                                                                                                     // 219
  } else if (type === "update") {                                                                                    // 220
    selector = args[0];                                                                                              // 221
    doc = args[1];                                                                                                   // 222
    options = args[2];                                                                                               // 223
    callback = args[3];                                                                                              // 224
  } else {                                                                                                           // 225
    throw new Error("invalid type argument");                                                                        // 226
  }                                                                                                                  // 227
                                                                                                                     // 228
  // Support missing options arg                                                                                     // 229
  if (!callback && typeof options === "function") {                                                                  // 230
    callback = options;                                                                                              // 231
    options = {};                                                                                                    // 232
  }                                                                                                                  // 233
  options = options || {};                                                                                           // 234
                                                                                                                     // 235
  last = args.length - 1;                                                                                            // 236
                                                                                                                     // 237
  hasCallback = (typeof args[last] === 'function');                                                                  // 238
                                                                                                                     // 239
  // If update was called with upsert:true, flag as an upsert                                                        // 240
  isUpsert = (type === "update" && options.upsert === true);                                                         // 241
                                                                                                                     // 242
  // On the server and for local collections, we allow passing `getAutoValues: false` to disable autoValue functions // 243
  if ((Meteor.isServer || isLocalCollection) && options.getAutoValues === false) {                                   // 244
    getAutoValues = false;                                                                                           // 245
  }                                                                                                                  // 246
                                                                                                                     // 247
  // Determine validation context                                                                                    // 248
  var validationContext = options.validationContext;                                                                 // 249
  if (validationContext) {                                                                                           // 250
    if (typeof validationContext === 'string') {                                                                     // 251
      validationContext = schema.namedContext(validationContext);                                                    // 252
    }                                                                                                                // 253
  } else {                                                                                                           // 254
    validationContext = schema.namedContext();                                                                       // 255
  }                                                                                                                  // 256
                                                                                                                     // 257
  // Add a default callback function if we're on the client and no callback was given                                // 258
  if (Meteor.isClient && !callback) {                                                                                // 259
    // Client can't block, so it can't report errors by exception,                                                   // 260
    // only by callback. If they forget the callback, give them a                                                    // 261
    // default one that logs the error, so they aren't totally                                                       // 262
    // baffled if their writes don't work because their database is                                                  // 263
    // down.                                                                                                         // 264
    callback = function(err) {                                                                                       // 265
      if (err) {                                                                                                     // 266
        Meteor._debug(type + " failed: " + (err.reason || err.stack));                                               // 267
      }                                                                                                              // 268
    };                                                                                                               // 269
  }                                                                                                                  // 270
                                                                                                                     // 271
  // If client validation is fine or is skipped but then something                                                   // 272
  // is found to be invalid on the server, we get that error back                                                    // 273
  // as a special Meteor.Error that we need to parse.                                                                // 274
  if (Meteor.isClient && hasCallback) {                                                                              // 275
    callback = args[last] = wrapCallbackForParsingServerErrors(validationContext, callback);                         // 276
  }                                                                                                                  // 277
                                                                                                                     // 278
  // Get the docId for passing in the autoValue/custom context                                                       // 279
  var docId;                                                                                                         // 280
  if (type === 'insert') {                                                                                           // 281
    docId = doc._id; // might be undefined                                                                           // 282
  } else if (type === "update" && selector) {                                                                        // 283
    docId = typeof selector === 'string' || selector instanceof Mongo.ObjectID ? selector : selector._id;            // 284
  }                                                                                                                  // 285
                                                                                                                     // 286
  // If _id has already been added, remove it temporarily if it's                                                    // 287
  // not explicitly defined in the schema.                                                                           // 288
  var cachedId;                                                                                                      // 289
  if (doc._id && !schema.allowsKey("_id")) {                                                                         // 290
    cachedId = doc._id;                                                                                              // 291
    delete doc._id;                                                                                                  // 292
  }                                                                                                                  // 293
                                                                                                                     // 294
  function doClean(docToClean, getAutoValues, filter, autoConvert, removeEmptyStrings, trimStrings) {                // 295
    // Clean the doc/modifier in place                                                                               // 296
    schema.clean(docToClean, {                                                                                       // 297
      filter: filter,                                                                                                // 298
      autoConvert: autoConvert,                                                                                      // 299
      getAutoValues: getAutoValues,                                                                                  // 300
      isModifier: (type !== "insert"),                                                                               // 301
      removeEmptyStrings: removeEmptyStrings,                                                                        // 302
      trimStrings: trimStrings,                                                                                      // 303
      extendAutoValueContext: _.extend({                                                                             // 304
        isInsert: (type === "insert"),                                                                               // 305
        isUpdate: (type === "update" && options.upsert !== true),                                                    // 306
        isUpsert: isUpsert,                                                                                          // 307
        userId: userId,                                                                                              // 308
        isFromTrustedCode: isFromTrustedCode,                                                                        // 309
        docId: docId,                                                                                                // 310
        isLocalCollection: isLocalCollection                                                                         // 311
      }, options.extendAutoValueContext || {})                                                                       // 312
    });                                                                                                              // 313
  }                                                                                                                  // 314
                                                                                                                     // 315
  // Preliminary cleaning on both client and server. On the server and for local                                     // 316
  // collections, automatic values will also be set at this point.                                                   // 317
  doClean(                                                                                                           // 318
    doc,                                                                                                             // 319
    getAutoValues,                                                                                                   // 320
    options.filter !== false,                                                                                        // 321
    options.autoConvert !== false,                                                                                   // 322
    options.removeEmptyStrings !== false,                                                                            // 323
    options.trimStrings !== false                                                                                    // 324
  );                                                                                                                 // 325
                                                                                                                     // 326
  // We clone before validating because in some cases we need to adjust the                                          // 327
  // object a bit before validating it. If we adjusted `doc` itself, our                                             // 328
  // changes would persist into the database.                                                                        // 329
  var docToValidate = {};                                                                                            // 330
  for (var prop in doc) {                                                                                            // 331
    // We omit prototype properties when cloning because they will not be valid                                      // 332
    // and mongo omits them when saving to the database anyway.                                                      // 333
    if (doc.hasOwnProperty(prop)) {                                                                                  // 334
      docToValidate[prop] = doc[prop];                                                                               // 335
    }                                                                                                                // 336
  }                                                                                                                  // 337
                                                                                                                     // 338
  // On the server, upserts are possible; SimpleSchema handles upserts pretty                                        // 339
  // well by default, but it will not know about the fields in the selector,                                         // 340
  // which are also stored in the database if an insert is performed. So we                                          // 341
  // will allow these fields to be considered for validation by adding them                                          // 342
  // to the $set in the modifier. This is no doubt prone to errors, but there                                        // 343
  // probably isn't any better way right now.                                                                        // 344
  if (Meteor.isServer && isUpsert && _.isObject(selector)) {                                                         // 345
    var set = docToValidate.$set || {};                                                                              // 346
    docToValidate.$set = _.clone(selector);                                                                          // 347
    _.extend(docToValidate.$set, set);                                                                               // 348
  }                                                                                                                  // 349
                                                                                                                     // 350
  // Set automatic values for validation on the client.                                                              // 351
  // On the server, we already updated doc with auto values, but on the client,                                      // 352
  // we will add them to docToValidate for validation purposes only.                                                 // 353
  // This is because we want all actual values generated on the server.                                              // 354
  if (Meteor.isClient && !isLocalCollection) {                                                                       // 355
    doClean(docToValidate, true, false, false, false, false);                                                        // 356
  }                                                                                                                  // 357
                                                                                                                     // 358
  // Validate doc                                                                                                    // 359
  var isValid;                                                                                                       // 360
  if (options.validate === false) {                                                                                  // 361
    isValid = true;                                                                                                  // 362
  } else {                                                                                                           // 363
    isValid = validationContext.validate(docToValidate, {                                                            // 364
      modifier: (type === "update" || type === "upsert"),                                                            // 365
      upsert: isUpsert,                                                                                              // 366
      extendedCustomContext: _.extend({                                                                              // 367
        isInsert: (type === "insert"),                                                                               // 368
        isUpdate: (type === "update" && options.upsert !== true),                                                    // 369
        isUpsert: isUpsert,                                                                                          // 370
        userId: userId,                                                                                              // 371
        isFromTrustedCode: isFromTrustedCode,                                                                        // 372
        docId: docId,                                                                                                // 373
        isLocalCollection: isLocalCollection                                                                         // 374
      }, options.extendedCustomContext || {})                                                                        // 375
    });                                                                                                              // 376
  }                                                                                                                  // 377
                                                                                                                     // 378
  if (isValid) {                                                                                                     // 379
    // Add the ID back                                                                                               // 380
    if (cachedId) {                                                                                                  // 381
      doc._id = cachedId;                                                                                            // 382
    }                                                                                                                // 383
                                                                                                                     // 384
    // Update the args to reflect the cleaned doc                                                                    // 385
    // XXX not sure this is necessary since we mutate                                                                // 386
    if (type === "insert") {                                                                                         // 387
      args[0] = doc;                                                                                                 // 388
    } else {                                                                                                         // 389
      args[1] = doc;                                                                                                 // 390
    }                                                                                                                // 391
                                                                                                                     // 392
    // If callback, set invalidKey when we get a mongo unique error                                                  // 393
    if (Meteor.isServer && hasCallback) {                                                                            // 394
      args[last] = wrapCallbackForParsingMongoValidationErrors(validationContext, args[last]);                       // 395
    }                                                                                                                // 396
                                                                                                                     // 397
    return args;                                                                                                     // 398
  } else {                                                                                                           // 399
    error = getErrorObject(validationContext);                                                                       // 400
    if (callback) {                                                                                                  // 401
      // insert/update/upsert pass `false` when there's an error, so we do that                                      // 402
      callback(error, false);                                                                                        // 403
    } else {                                                                                                         // 404
      throw error;                                                                                                   // 405
    }                                                                                                                // 406
  }                                                                                                                  // 407
}                                                                                                                    // 408
                                                                                                                     // 409
function getErrorObject(context) {                                                                                   // 410
  var message, invalidKeys = context.invalidKeys();                                                                  // 411
  if (invalidKeys.length) {                                                                                          // 412
    message = context.keyErrorMessage(invalidKeys[0].name);                                                          // 413
  } else {                                                                                                           // 414
    message = "Failed validation";                                                                                   // 415
  }                                                                                                                  // 416
  var error = new Error(message);                                                                                    // 417
  error.invalidKeys = invalidKeys;                                                                                   // 418
  error.validationContext = context;                                                                                 // 419
  // If on the server, we add a sanitized error, too, in case we're                                                  // 420
  // called from a method.                                                                                           // 421
  if (Meteor.isServer) {                                                                                             // 422
    error.sanitizedError = new Meteor.Error(400, message, EJSON.stringify(error.invalidKeys));                       // 423
  }                                                                                                                  // 424
  return error;                                                                                                      // 425
}                                                                                                                    // 426
                                                                                                                     // 427
function addUniqueError(context, errorMessage) {                                                                     // 428
  var name = errorMessage.split('c2_')[1].split(' ')[0];                                                             // 429
  var val = errorMessage.split('dup key:')[1].split('"')[1];                                                         // 430
  context.addInvalidKeys([{                                                                                          // 431
    name: name,                                                                                                      // 432
    type: 'notUnique',                                                                                               // 433
    value: val                                                                                                       // 434
  }]);                                                                                                               // 435
}                                                                                                                    // 436
                                                                                                                     // 437
function wrapCallbackForParsingMongoValidationErrors(validationContext, cb) {                                        // 438
  return function wrappedCallbackForParsingMongoValidationErrors(error) {                                            // 439
    var args = _.toArray(arguments);                                                                                 // 440
    if (error &&                                                                                                     // 441
        ((error.name === "MongoError" && error.code === 11001) || error.message.indexOf('MongoError: E11000' !== -1)) &&
        error.message.indexOf('c2_') !== -1) {                                                                       // 443
      addUniqueError(validationContext, error.message);                                                              // 444
      args[0] = getErrorObject(validationContext);                                                                   // 445
    }                                                                                                                // 446
    return cb.apply(this, args);                                                                                     // 447
  };                                                                                                                 // 448
}                                                                                                                    // 449
                                                                                                                     // 450
function wrapCallbackForParsingServerErrors(validationContext, cb) {                                                 // 451
  return function wrappedCallbackForParsingServerErrors(error) {                                                     // 452
    var args = _.toArray(arguments);                                                                                 // 453
    // Handle our own validation errors                                                                              // 454
    if (error instanceof Meteor.Error &&                                                                             // 455
        error.error === 400 &&                                                                                       // 456
        error.reason === "INVALID" &&                                                                                // 457
        typeof error.details === "string") {                                                                         // 458
      var invalidKeysFromServer = EJSON.parse(error.details);                                                        // 459
      validationContext.addInvalidKeys(invalidKeysFromServer);                                                       // 460
      args[0] = getErrorObject(validationContext);                                                                   // 461
    }                                                                                                                // 462
    // Handle Mongo unique index errors, which are forwarded to the client as 409 errors                             // 463
    else if (error instanceof Meteor.Error &&                                                                        // 464
             error.error === 409 &&                                                                                  // 465
             error.reason &&                                                                                         // 466
             error.reason.indexOf('E11000') !== -1 &&                                                                // 467
             error.reason.indexOf('c2_') !== -1) {                                                                   // 468
      addUniqueError(validationContext, error.reason);                                                               // 469
      args[0] = getErrorObject(validationContext);                                                                   // 470
    }                                                                                                                // 471
    return cb.apply(this, args);                                                                                     // 472
  };                                                                                                                 // 473
}                                                                                                                    // 474
                                                                                                                     // 475
var alreadyInsecured = {};                                                                                           // 476
function keepInsecure(c) {                                                                                           // 477
  // If insecure package is in use, we need to add allow rules that return                                           // 478
  // true. Otherwise, it would seemingly turn off insecure mode.                                                     // 479
  if (Package && Package.insecure && !alreadyInsecured[c._name]) {                                                   // 480
    c.allow({                                                                                                        // 481
      insert: function() {                                                                                           // 482
        return true;                                                                                                 // 483
      },                                                                                                             // 484
      update: function() {                                                                                           // 485
        return true;                                                                                                 // 486
      },                                                                                                             // 487
      remove: function () {                                                                                          // 488
        return true;                                                                                                 // 489
      },                                                                                                             // 490
      fetch: [],                                                                                                     // 491
      transform: null                                                                                                // 492
    });                                                                                                              // 493
    alreadyInsecured[c._name] = true;                                                                                // 494
  }                                                                                                                  // 495
  // If insecure package is NOT in use, then adding the two deny functions                                           // 496
  // does not have any effect on the main app's security paradigm. The                                               // 497
  // user will still be required to add at least one allow function of her                                           // 498
  // own for each operation for this collection. And the user may still add                                          // 499
  // additional deny functions, but does not have to.                                                                // 500
}                                                                                                                    // 501
                                                                                                                     // 502
var alreadyDefined = {};                                                                                             // 503
function defineDeny(c, options) {                                                                                    // 504
  if (!alreadyDefined[c._name]) {                                                                                    // 505
                                                                                                                     // 506
    var isLocalCollection = (c._connection === null);                                                                // 507
                                                                                                                     // 508
    // First define deny functions to extend doc with the results of clean                                           // 509
    // and autovalues. This must be done with "transform: null" or we would be                                       // 510
    // extending a clone of doc and therefore have no effect.                                                        // 511
    c.deny({                                                                                                         // 512
      insert: function(userId, doc) {                                                                                // 513
        var ss = c.simpleSchema();                                                                                   // 514
        // If _id has already been added, remove it temporarily if it's                                              // 515
        // not explicitly defined in the schema.                                                                     // 516
        var id;                                                                                                      // 517
        if (Meteor.isServer && doc._id && !ss.allowsKey("_id")) {                                                    // 518
          id = doc._id;                                                                                              // 519
          delete doc._id;                                                                                            // 520
        }                                                                                                            // 521
                                                                                                                     // 522
        // Referenced doc is cleaned in place                                                                        // 523
        ss.clean(doc, {                                                                                              // 524
          isModifier: false,                                                                                         // 525
          // We don't do these here because they are done on the client if desired                                   // 526
          filter: false,                                                                                             // 527
          autoConvert: false,                                                                                        // 528
          removeEmptyStrings: false,                                                                                 // 529
          trimStrings: false,                                                                                        // 530
          extendAutoValueContext: {                                                                                  // 531
            isInsert: true,                                                                                          // 532
            isUpdate: false,                                                                                         // 533
            isUpsert: false,                                                                                         // 534
            userId: userId,                                                                                          // 535
            isFromTrustedCode: false,                                                                                // 536
            docId: id,                                                                                               // 537
            isLocalCollection: isLocalCollection                                                                     // 538
          }                                                                                                          // 539
        });                                                                                                          // 540
                                                                                                                     // 541
        // Add the ID back                                                                                           // 542
        if (id) {                                                                                                    // 543
          doc._id = id;                                                                                              // 544
        }                                                                                                            // 545
                                                                                                                     // 546
        return false;                                                                                                // 547
      },                                                                                                             // 548
      update: function(userId, doc, fields, modifier) {                                                              // 549
        var ss = c.simpleSchema();                                                                                   // 550
        // Referenced modifier is cleaned in place                                                                   // 551
        ss.clean(modifier, {                                                                                         // 552
          isModifier: true,                                                                                          // 553
          // We don't do these here because they are done on the client if desired                                   // 554
          filter: false,                                                                                             // 555
          autoConvert: false,                                                                                        // 556
          removeEmptyStrings: false,                                                                                 // 557
          trimStrings: false,                                                                                        // 558
          extendAutoValueContext: {                                                                                  // 559
            isInsert: false,                                                                                         // 560
            isUpdate: true,                                                                                          // 561
            isUpsert: false,                                                                                         // 562
            userId: userId,                                                                                          // 563
            isFromTrustedCode: false,                                                                                // 564
            docId: doc && doc._id,                                                                                   // 565
            isLocalCollection: isLocalCollection                                                                     // 566
          }                                                                                                          // 567
        });                                                                                                          // 568
                                                                                                                     // 569
        return false;                                                                                                // 570
      },                                                                                                             // 571
      fetch: ['_id'],                                                                                                // 572
      transform: null                                                                                                // 573
    });                                                                                                              // 574
                                                                                                                     // 575
    // Second define deny functions to validate again on the server                                                  // 576
    // for client-initiated inserts and updates. These should be                                                     // 577
    // called after the clean/autovalue functions since we're adding                                                 // 578
    // them after. These must *not* have "transform: null" if options.transform is true because                      // 579
    // we need to pass the doc through any transforms to be sure                                                     // 580
    // that custom types are properly recognized for type validation.                                                // 581
    c.deny(_.extend({                                                                                                // 582
      insert: function(userId, doc) {                                                                                // 583
        // We pass the false options because we will have done them on client if desired                             // 584
        doValidate.call(                                                                                             // 585
          c,                                                                                                         // 586
          "insert",                                                                                                  // 587
          [                                                                                                          // 588
            doc,                                                                                                     // 589
            {                                                                                                        // 590
              trimStrings: false,                                                                                    // 591
              removeEmptyStrings: false,                                                                             // 592
              filter: false,                                                                                         // 593
              autoConvert: false                                                                                     // 594
            },                                                                                                       // 595
            function(error) {                                                                                        // 596
              if (error) {                                                                                           // 597
                throw new Meteor.Error(400, 'INVALID', EJSON.stringify(error.invalidKeys));                          // 598
              }                                                                                                      // 599
            }                                                                                                        // 600
          ],                                                                                                         // 601
          false, // getAutoValues                                                                                    // 602
          userId,                                                                                                    // 603
          false // isFromTrustedCode                                                                                 // 604
        );                                                                                                           // 605
                                                                                                                     // 606
        return false;                                                                                                // 607
      },                                                                                                             // 608
      update: function(userId, doc, fields, modifier) {                                                              // 609
        // NOTE: This will never be an upsert because client-side upserts                                            // 610
        // are not allowed once you define allow/deny functions.                                                     // 611
        // We pass the false options because we will have done them on client if desired                             // 612
        doValidate.call(                                                                                             // 613
          c,                                                                                                         // 614
          "update",                                                                                                  // 615
          [                                                                                                          // 616
            {_id: doc && doc._id},                                                                                   // 617
            modifier,                                                                                                // 618
            {                                                                                                        // 619
              trimStrings: false,                                                                                    // 620
              removeEmptyStrings: false,                                                                             // 621
              filter: false,                                                                                         // 622
              autoConvert: false                                                                                     // 623
            },                                                                                                       // 624
            function(error) {                                                                                        // 625
              if (error) {                                                                                           // 626
                throw new Meteor.Error(400, 'INVALID', EJSON.stringify(error.invalidKeys));                          // 627
              }                                                                                                      // 628
            }                                                                                                        // 629
          ],                                                                                                         // 630
          false, // getAutoValues                                                                                    // 631
          userId,                                                                                                    // 632
          false // isFromTrustedCode                                                                                 // 633
        );                                                                                                           // 634
                                                                                                                     // 635
        return false;                                                                                                // 636
      },                                                                                                             // 637
      fetch: ['_id']                                                                                                 // 638
    }, options.transform === true ? {} : {transform: null}));                                                        // 639
                                                                                                                     // 640
    // note that we've already done this collection so that we don't do it again                                     // 641
    // if attachSchema is called again                                                                               // 642
    alreadyDefined[c._name] = true;                                                                                  // 643
  }                                                                                                                  // 644
}                                                                                                                    // 645
                                                                                                                     // 646
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 656
}).call(this);                                                       // 657
                                                                     // 658
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['aldeed:collection2'] = {};

})();

//# sourceMappingURL=aldeed_collection2.js.map
