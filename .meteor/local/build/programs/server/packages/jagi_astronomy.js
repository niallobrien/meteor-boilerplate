(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;
var LocalCollection = Package.minimongo.LocalCollection;
var Minimongo = Package.minimongo.Minimongo;
var _ = Package.underscore._;
var EJSON = Package.ejson.EJSON;

/* Package-scope variables */
var Astronomy, Astro, defaultConstructor, eventsOnInitModule, eventsOnInitClass, typesOnInitModule, indexesOnInitClass, fieldsOnInitModule, fieldsOnInitClass, methodsOnInitClass, ejsonOnInitModule;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// packages/jagi_astronomy/packages/jagi_astronomy.js                                      //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
(function () {                                                                             // 1
                                                                                           // 2
//////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                  //     // 4
// packages/jagi:astronomy/lib/core/global.js                                       //     // 5
//                                                                                  //     // 6
//////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                    //     // 8
Astronomy = {};                                                                     // 1   // 9
Astro = Astronomy;                                                                  // 2   // 10
                                                                                    // 3   // 11
Astro.modules = {};                                                                 // 4   // 12
Astro.classes = {};                                                                 // 5   // 13
                                                                                    // 6   // 14
//////////////////////////////////////////////////////////////////////////////////////     // 15
                                                                                           // 16
}).call(this);                                                                             // 17
                                                                                           // 18
                                                                                           // 19
                                                                                           // 20
                                                                                           // 21
                                                                                           // 22
                                                                                           // 23
(function () {                                                                             // 24
                                                                                           // 25
//////////////////////////////////////////////////////////////////////////////////////     // 26
//                                                                                  //     // 27
// packages/jagi:astronomy/lib/core/config.js                                       //     // 28
//                                                                                  //     // 29
//////////////////////////////////////////////////////////////////////////////////////     // 30
                                                                                    //     // 31
Astro.config = {                                                                    // 1   // 32
  supportLegacyBrowsers: true                                                       // 2   // 33
};                                                                                  // 3   // 34
                                                                                    // 4   // 35
//////////////////////////////////////////////////////////////////////////////////////     // 36
                                                                                           // 37
}).call(this);                                                                             // 38
                                                                                           // 39
                                                                                           // 40
                                                                                           // 41
                                                                                           // 42
                                                                                           // 43
                                                                                           // 44
(function () {                                                                             // 45
                                                                                           // 46
//////////////////////////////////////////////////////////////////////////////////////     // 47
//                                                                                  //     // 48
// packages/jagi:astronomy/lib/core/utils.js                                        //     // 49
//                                                                                  //     // 50
//////////////////////////////////////////////////////////////////////////////////////     // 51
                                                                                    //     // 52
Astro.utils = {};                                                                   // 1   // 53
                                                                                    // 2   // 54
Astro.utils.class = {};                                                             // 3   // 55
                                                                                    // 4   // 56
Astro.utils.class.eachClass = function(Class, predicate, context) {                 // 5   // 57
  do {                                                                              // 6   // 58
    if (context) {                                                                  // 7   // 59
      predicate.call(context, Class);                                               // 8   // 60
    } else {                                                                        // 9   // 61
      predicate(Class);                                                             // 10  // 62
    }                                                                               // 11  // 63
  } while (Class = Class.getParent());                                              // 12  // 64
};                                                                                  // 13  // 65
                                                                                    // 14  // 66
Astro.utils.class.everyClass = function(Class, predicate, context) {                // 15  // 67
  do {                                                                              // 16  // 68
    if (context) {                                                                  // 17  // 69
      if (!predicate.call(context, Class)) {                                        // 18  // 70
        return false;                                                               // 19  // 71
      }                                                                             // 20  // 72
    } else {                                                                        // 21  // 73
      if (!predicate(Class)) {                                                      // 22  // 74
        return false;                                                               // 23  // 75
      }                                                                             // 24  // 76
    }                                                                               // 25  // 77
  } while (Class = Class.getParent());                                              // 26  // 78
                                                                                    // 27  // 79
  return true;                                                                      // 28  // 80
};                                                                                  // 29  // 81
                                                                                    // 30  // 82
Astro.utils.class.findClass = function(Class, predicate, context) {                 // 31  // 83
  do {                                                                              // 32  // 84
    if (context) {                                                                  // 33  // 85
      if (predicate.call(context, Class)) {                                         // 34  // 86
        return Class;                                                               // 35  // 87
      }                                                                             // 36  // 88
    } else {                                                                        // 37  // 89
      if (predicate(Class)) {                                                       // 38  // 90
        return Class;                                                               // 39  // 91
      }                                                                             // 40  // 92
    }                                                                               // 41  // 93
  } while (Class = Class.getParent());                                              // 42  // 94
};                                                                                  // 43  // 95
                                                                                    // 44  // 96
Astro.utils.class.findInClass = function(Class, predicate, context) {               // 45  // 97
  do {                                                                              // 46  // 98
    var value;                                                                      // 47  // 99
    if (context) {                                                                  // 48  // 100
      value = predicate.call(context, Class);                                       // 49  // 101
    } else {                                                                        // 50  // 102
      value = predicate(Class);                                                     // 51  // 103
    }                                                                               // 52  // 104
    if (value) {                                                                    // 53  // 105
      return value;                                                                 // 54  // 106
    }                                                                               // 55  // 107
  } while (Class = Class.getParent());                                              // 56  // 108
};                                                                                  // 57  // 109
                                                                                    // 58  // 110
Astro.utils.class.transform = function(className) {                                 // 59  // 111
  return function(doc) {                                                            // 60  // 112
    var transformClassName = className;                                             // 61  // 113
    // If there is "_type" attribute in the document, then look for class with      // 62  // 114
    // name equal to this attribute value. The "_type" attribute is the name        // 63  // 115
    // of the child class. Stored document is instance of this class.               // 64  // 116
    if (doc._type && _.has(Astro.classes, doc._type)) {                             // 65  // 117
      // Child class exists, so we will use this class for creating instance.       // 66  // 118
      transformClassName = doc._type;                                               // 67  // 119
    }                                                                               // 68  // 120
    // If document has "_type" attribute and we haven't found class for that        // 69  // 121
    // name we will use parent class name stored in the "transformClassName" param. // 70  // 122
                                                                                    // 71  // 123
    // Get class from classes list, create instance and return.                     // 72  // 124
    var Class = Astro.classes[transformClassName];                                  // 73  // 125
    if (Class) {                                                                    // 74  // 126
      doc = new Class(doc);                                                         // 75  // 127
      doc._isNew = false;                                                           // 76  // 128
    }                                                                               // 77  // 129
                                                                                    // 78  // 130
    // Return plain object, if class does have not been defined.                    // 79  // 131
    return doc;                                                                     // 80  // 132
  };                                                                                // 81  // 133
};                                                                                  // 82  // 134
                                                                                    // 83  // 135
//////////////////////////////////////////////////////////////////////////////////////     // 136
                                                                                           // 137
}).call(this);                                                                             // 138
                                                                                           // 139
                                                                                           // 140
                                                                                           // 141
                                                                                           // 142
                                                                                           // 143
                                                                                           // 144
(function () {                                                                             // 145
                                                                                           // 146
//////////////////////////////////////////////////////////////////////////////////////     // 147
//                                                                                  //     // 148
// packages/jagi:astronomy/lib/core/events.js                                       //     // 149
//                                                                                  //     // 150
//////////////////////////////////////////////////////////////////////////////////////     // 151
                                                                                    //     // 152
Astro.Events = function() {};                                                       // 1   // 153
                                                                                    // 2   // 154
_.extend(Astro.Events.prototype, {                                                  // 3   // 155
  on: function(eventName, eventHandler) {                                           // 4   // 156
    this._events = this._events || {};                                              // 5   // 157
                                                                                    // 6   // 158
    eventName = eventName.toLowerCase();                                            // 7   // 159
                                                                                    // 8   // 160
    this._events[eventName] = this._events[eventName] || [];                        // 9   // 161
                                                                                    // 10  // 162
    // Add event only if it's not already on the events list.                       // 11  // 163
    if (!_.contains(this._events[eventName], eventHandler)) {                       // 12  // 164
      this._events[eventName].push(eventHandler);                                   // 13  // 165
    }                                                                               // 14  // 166
  },                                                                                // 15  // 167
                                                                                    // 16  // 168
  off: function(eventName, eventHandler) {                                          // 17  // 169
    this._events = this._events || {};                                              // 18  // 170
                                                                                    // 19  // 171
    eventName = eventName.toLowerCase();                                            // 20  // 172
                                                                                    // 21  // 173
    if (arguments.length === 1) {                                                   // 22  // 174
      // Remove all event handlers for given event name.                            // 23  // 175
      delete this._events[eventName];                                               // 24  // 176
    } else if (arguments.length === 2) {                                            // 25  // 177
      // Remove only one event handler (the passed one) from the events list.       // 26  // 178
      var index = _.indexOf(this._events[eventName], eventHandler);                 // 27  // 179
      if (index >= 0) {                                                             // 28  // 180
        this._events[eventName].splice(index, 1);                                   // 29  // 181
      }                                                                             // 30  // 182
    }                                                                               // 31  // 183
  },                                                                                // 32  // 184
                                                                                    // 33  // 185
  emit: function(event) {                                                           // 34  // 186
    this._events = this._events || {};                                              // 35  // 187
                                                                                    // 36  // 188
    var eventName = event.type;                                                     // 37  // 189
    var target = event.target;                                                      // 38  // 190
                                                                                    // 39  // 191
    return _.every(this._events[eventName], function(eventHandler) {                // 40  // 192
      if (target) {                                                                 // 41  // 193
        eventHandler.call(target, event);                                           // 42  // 194
      } else {                                                                      // 43  // 195
        eventHandler(event);                                                        // 44  // 196
      }                                                                             // 45  // 197
      return !event.stopped;                                                        // 46  // 198
    });                                                                             // 47  // 199
  },                                                                                // 48  // 200
                                                                                    // 49  // 201
  each: function(eventName, callback, target) {                                     // 50  // 202
    _.each(this._events[eventName], function(eventHandler) {                        // 51  // 203
      if (target) {                                                                 // 52  // 204
        callback.call(target, eventHandler);                                        // 53  // 205
      } else {                                                                      // 54  // 206
        callback(eventHandler);                                                     // 55  // 207
      }                                                                             // 56  // 208
    });                                                                             // 57  // 209
  },                                                                                // 58  // 210
                                                                                    // 59  // 211
  every: function(eventName, callback, target) {                                    // 60  // 212
    _.every(this._events[eventName], function(eventHandler) {                       // 61  // 213
      if (target) {                                                                 // 62  // 214
        return callback.call(target, eventHandler);                                 // 63  // 215
      } else {                                                                      // 64  // 216
        return callback(eventHandler);                                              // 65  // 217
      }                                                                             // 66  // 218
    });                                                                             // 67  // 219
  }                                                                                 // 68  // 220
});                                                                                 // 69  // 221
                                                                                    // 70  // 222
Astro.Events.mixin = function(obj) {                                                // 71  // 223
  if (_.isFunction(obj)) {                                                          // 72  // 224
    _.each(Astro.Events.prototype, function(method, methodName) {                   // 73  // 225
      obj.prototype[methodName] = method;                                           // 74  // 226
    });                                                                             // 75  // 227
  } else {                                                                          // 76  // 228
    _.each(Astro.Events.prototype, function(method, methodName) {                   // 77  // 229
      obj[methodName] = method;                                                     // 78  // 230
    });                                                                             // 79  // 231
  }                                                                                 // 80  // 232
};                                                                                  // 81  // 233
                                                                                    // 82  // 234
//////////////////////////////////////////////////////////////////////////////////////     // 235
                                                                                           // 236
}).call(this);                                                                             // 237
                                                                                           // 238
                                                                                           // 239
                                                                                           // 240
                                                                                           // 241
                                                                                           // 242
                                                                                           // 243
(function () {                                                                             // 244
                                                                                           // 245
//////////////////////////////////////////////////////////////////////////////////////     // 246
//                                                                                  //     // 247
// packages/jagi:astronomy/lib/core/event.js                                        //     // 248
//                                                                                  //     // 249
//////////////////////////////////////////////////////////////////////////////////////     // 250
                                                                                    //     // 251
Astro.Event = function(type, data) {                                                // 1   // 252
  this.type = type;                                                                 // 2   // 253
  this.data = data;                                                                 // 3   // 254
};                                                                                  // 4   // 255
                                                                                    // 5   // 256
_.extend(Astro.Event.prototype, {                                                   // 6   // 257
  type: null,                                                                       // 7   // 258
  data: null,                                                                       // 8   // 259
  stopped: false,                                                                   // 9   // 260
  defaultPrevented: false,                                                          // 10  // 261
                                                                                    // 11  // 262
  stopPropagation: function() {                                                     // 12  // 263
    this.stopped = true;                                                            // 13  // 264
  },                                                                                // 14  // 265
                                                                                    // 15  // 266
  preventDefault: function() {                                                      // 16  // 267
    this.defaultPrevented = true;                                                   // 17  // 268
  }                                                                                 // 18  // 269
});                                                                                 // 19  // 270
                                                                                    // 20  // 271
//////////////////////////////////////////////////////////////////////////////////////     // 272
                                                                                           // 273
}).call(this);                                                                             // 274
                                                                                           // 275
                                                                                           // 276
                                                                                           // 277
                                                                                           // 278
                                                                                           // 279
                                                                                           // 280
(function () {                                                                             // 281
                                                                                           // 282
//////////////////////////////////////////////////////////////////////////////////////     // 283
//                                                                                  //     // 284
// packages/jagi:astronomy/lib/core/base_class.js                                   //     // 285
//                                                                                  //     // 286
//////////////////////////////////////////////////////////////////////////////////////     // 287
                                                                                    //     // 288
Astro.BaseClass = function() {};                                                    // 1   // 289
                                                                                    // 2   // 290
//////////////////////////////////////////////////////////////////////////////////////     // 291
                                                                                           // 292
}).call(this);                                                                             // 293
                                                                                           // 294
                                                                                           // 295
                                                                                           // 296
                                                                                           // 297
                                                                                           // 298
                                                                                           // 299
(function () {                                                                             // 300
                                                                                           // 301
//////////////////////////////////////////////////////////////////////////////////////     // 302
//                                                                                  //     // 303
// packages/jagi:astronomy/lib/core/schema.js                                       //     // 304
//                                                                                  //     // 305
//////////////////////////////////////////////////////////////////////////////////////     // 306
                                                                                    //     // 307
var checks = {                                                                      // 1   // 308
  schemaDefinition: function(schemaDefinition) {                                    // 2   // 309
    // Check whether definition is object.                                          // 3   // 310
    if (!_.isObject(schemaDefinition)) {                                            // 4   // 311
      throw new Error('The class definition has to be an object');                  // 5   // 312
    }                                                                               // 6   // 313
                                                                                    // 7   // 314
    // Check if class name is provided.                                             // 8   // 315
    if (!_.has(schemaDefinition, 'name')) {                                         // 9   // 316
      throw new Error('The class name has to be provided');                         // 10  // 317
    }                                                                               // 11  // 318
                                                                                    // 12  // 319
    // Check if class name is a string.                                             // 13  // 320
    if (!_.isString(schemaDefinition.name)) {                                       // 14  // 321
      throw new Error('The class name has to be a string');                         // 15  // 322
    }                                                                               // 16  // 323
                                                                                    // 17  // 324
    // Check if a class with the given name already exists.                         // 18  // 325
    if (_.has(Astro.classes, schemaDefinition.name)) {                              // 19  // 326
      throw new Error(                                                              // 20  // 327
        'The class with the name "' + schemaDefinition.name +                       // 21  // 328
        '" is already defined'                                                      // 22  // 329
      );                                                                            // 23  // 330
    }                                                                               // 24  // 331
                                                                                    // 25  // 332
    // If collection is provided, then check its validity.                          // 26  // 333
    if (                                                                            // 27  // 334
      _.has(schemaDefinition, 'collection') &&                                      // 28  // 335
      !(schemaDefinition.collection instanceof Mongo.Collection)                    // 29  // 336
    ) {                                                                             // 30  // 337
      throw new Error(                                                              // 31  // 338
        'The collection has to be an instance of the "Mongo.Collection"'            // 32  // 339
      );                                                                            // 33  // 340
    }                                                                               // 34  // 341
                                                                                    // 35  // 342
    // If a class to extend from is provided than check if its prototype is         // 36  // 343
    // an instance of the "Astro.BaseClass" class.                                  // 37  // 344
    if (_.has(schemaDefinition, 'parentClassName')) {                               // 38  // 345
      var Class = Astro.classes[schemaDefinition.parentClassName];                  // 39  // 346
      if (!Class) {                                                                 // 40  // 347
        throw new Error('The class to extend from does not exist');                 // 41  // 348
      }                                                                             // 42  // 349
      if (!(Class.prototype instanceof Astro.BaseClass)) {                          // 43  // 350
        throw new Error('The class to extend from is not valid');                   // 44  // 351
      }                                                                             // 45  // 352
    }                                                                               // 46  // 353
                                                                                    // 47  // 354
    // If class constructor is provided, then check its validity.                   // 48  // 355
    if (                                                                            // 49  // 356
      _.has(schemaDefinition, 'init') &&                                            // 50  // 357
      !_.isFunction(schemaDefinition.init)                                          // 51  // 358
    ) {                                                                             // 52  // 359
      throw new Error('The class constructor has to be a function');                // 53  // 360
    }                                                                               // 54  // 361
  }                                                                                 // 55  // 362
};                                                                                  // 56  // 363
                                                                                    // 57  // 364
Astro.Schema = function(schemaDefinition) {                                         // 58  // 365
  checks.schemaDefinition(schemaDefinition);                                        // 59  // 366
                                                                                    // 60  // 367
  this.className = schemaDefinition.name;                                           // 61  // 368
                                                                                    // 62  // 369
  // Set collection for schema.                                                     // 63  // 370
  if (_.has(schemaDefinition, 'collection')) {                                      // 64  // 371
    this.collection = schemaDefinition.collection;                                  // 65  // 372
                                                                                    // 66  // 373
    // If there is not "transform" property then set it to true by default.         // 67  // 374
    if (!_.has(schemaDefinition, 'transform')) {                                    // 68  // 375
      schemaDefinition.transform = true;                                            // 69  // 376
    }                                                                               // 70  // 377
                                                                                    // 71  // 378
    // Set document transformation, if "transform" flag is set.                     // 72  // 379
    if (schemaDefinition.transform) {                                               // 73  // 380
      this.collection._transform = LocalCollection.wrapTransform(                   // 74  // 381
        Astro.utils.class.transform(this.className)                                 // 75  // 382
      );                                                                            // 76  // 383
    }                                                                               // 77  // 384
  }                                                                                 // 78  // 385
                                                                                    // 79  // 386
  // Set the class to extend from.                                                  // 80  // 387
  if (_.has(schemaDefinition, 'parentClassName')) {                                 // 81  // 388
    this.parentClassName = schemaDefinition.parentClassName;                        // 82  // 389
  }                                                                                 // 83  // 390
                                                                                    // 84  // 391
  // Set class constructor.                                                         // 85  // 392
  this.init = function() {                                                          // 86  // 393
    // Call init (constructor) method if provided by user.                          // 87  // 394
    if (_.isFunction(schemaDefinition.init)) {                                      // 88  // 395
      schemaDefinition.init.apply(this, arguments);                                 // 89  // 396
    }                                                                               // 90  // 397
  };                                                                                // 91  // 398
};                                                                                  // 92  // 399
                                                                                    // 93  // 400
//////////////////////////////////////////////////////////////////////////////////////     // 401
                                                                                           // 402
}).call(this);                                                                             // 403
                                                                                           // 404
                                                                                           // 405
                                                                                           // 406
                                                                                           // 407
                                                                                           // 408
                                                                                           // 409
(function () {                                                                             // 410
                                                                                           // 411
//////////////////////////////////////////////////////////////////////////////////////     // 412
//                                                                                  //     // 413
// packages/jagi:astronomy/lib/core/module.js                                       //     // 414
//                                                                                  //     // 415
//////////////////////////////////////////////////////////////////////////////////////     // 416
                                                                                    //     // 417
var checks = {                                                                      // 1   // 418
  moduleDefinition: function(moduleDefinition) {                                    // 2   // 419
    // Check parameters validity.                                                   // 3   // 420
    if (!_.isObject(moduleDefinition)) {                                            // 4   // 421
      throw new Error('The module definition has to be an object');                 // 5   // 422
    }                                                                               // 6   // 423
                                                                                    // 7   // 424
    // Check if module name is provided.                                            // 8   // 425
    if (!_.has(moduleDefinition, 'name')) {                                         // 9   // 426
      throw new Error('The module name has to be provided');                        // 10  // 427
    }                                                                               // 11  // 428
                                                                                    // 12  // 429
    // Check if module name is a string.                                            // 13  // 430
    if (!_.isString(moduleDefinition.name)) {                                       // 14  // 431
      throw new Error('The module name has to be a string');                        // 15  // 432
    }                                                                               // 16  // 433
                                                                                    // 17  // 434
    // Check if module with given name already exists.                              // 18  // 435
    if (_.has(Astro.modules, moduleDefinition.name)) {                              // 19  // 436
      throw new Error(                                                              // 20  // 437
        'The module with the name "' + moduleDefinition.name +                      // 21  // 438
        '" is already defined'                                                      // 22  // 439
      );                                                                            // 23  // 440
    }                                                                               // 24  // 441
  }                                                                                 // 25  // 442
};                                                                                  // 26  // 443
                                                                                    // 27  // 444
Astro.createModule = function(moduleDefinition) {                                   // 28  // 445
  // Check validity of the module definition.                                       // 29  // 446
  checks.moduleDefinition(moduleDefinition);                                        // 30  // 447
                                                                                    // 31  // 448
  // Initialize a module if the "init" method had been defined.                     // 32  // 449
  if (_.isFunction(moduleDefinition.init)) {                                        // 33  // 450
    moduleDefinition.init();                                                        // 34  // 451
  }                                                                                 // 35  // 452
                                                                                    // 36  // 453
  // Add module events to global events list.                                       // 37  // 454
  if (_.has(moduleDefinition, 'events')) {                                          // 38  // 455
    _.each(moduleDefinition.events, function(eventHandler, eventName) {             // 39  // 456
      Astro.eventManager.on(eventName, eventHandler);                               // 40  // 457
    });                                                                             // 41  // 458
  }                                                                                 // 42  // 459
                                                                                    // 43  // 460
  // Add the module definition to the global list of modules.                       // 44  // 461
  return Astro.modules[moduleDefinition.name] = moduleDefinition;                   // 45  // 462
};                                                                                  // 46  // 463
                                                                                    // 47  // 464
//////////////////////////////////////////////////////////////////////////////////////     // 465
                                                                                           // 466
}).call(this);                                                                             // 467
                                                                                           // 468
                                                                                           // 469
                                                                                           // 470
                                                                                           // 471
                                                                                           // 472
                                                                                           // 473
(function () {                                                                             // 474
                                                                                           // 475
//////////////////////////////////////////////////////////////////////////////////////     // 476
//                                                                                  //     // 477
// packages/jagi:astronomy/lib/core/constructor.js                                  //     // 478
//                                                                                  //     // 479
//////////////////////////////////////////////////////////////////////////////////////     // 480
                                                                                    //     // 481
defaultConstructor = function(attrs) {                                              // 1   // 482
  var doc = this;                                                                   // 2   // 483
  var Class = doc.constructor;                                                      // 3   // 484
  attrs = attrs || {};                                                              // 4   // 485
                                                                                    // 5   // 486
  // Create "_values" property when legacy browsers support is turned on.           // 6   // 487
  if (!Astro.config.supportLegacyBrowsers) {                                        // 7   // 488
    doc._values = {};                                                               // 8   // 489
  }                                                                                 // 9   // 490
                                                                                    // 10  // 491
  // Set values of all fields.                                                      // 11  // 492
  Astro.utils.fields.setAllValues(doc, attrs);                                      // 12  // 493
                                                                                    // 13  // 494
  // Create the "_original" property inside the document for storing original       // 14  // 495
  // object's values (before any modifications). Thanks to it, we can compare       // 15  // 496
  // "_original" values with the current values and decide what fields have been    // 16  // 497
  // modified. Now, let's copy current values to the original property but only     // 17  // 498
  // if there is the "_id" property. Otherwise we only copy the "_id" property.     // 18  // 499
  // Thanks to that, if there is no "_id" property, then we can set fields of       // 19  // 500
  // the new document on the initiation stage. If there is the "_id" property       // 20  // 501
  // it means that we are fetching document from the collection.                    // 21  // 502
  if (_.isString(attrs._id)) {                                                      // 22  // 503
    doc._original = EJSON.clone(Astro.utils.fields.getAllValues(doc));              // 23  // 504
  } else {                                                                          // 24  // 505
    doc._original = {                                                               // 25  // 506
      _id: attrs._id                                                                // 26  // 507
    };                                                                              // 27  // 508
  }                                                                                 // 28  // 509
                                                                                    // 29  // 510
  // Set the "_isNew" flag indicating if an object had been persisted in the        // 30  // 511
  // collection.                                                                    // 31  // 512
  doc._isNew = true;                                                                // 32  // 513
};                                                                                  // 33  // 514
                                                                                    // 34  // 515
//////////////////////////////////////////////////////////////////////////////////////     // 516
                                                                                           // 517
}).call(this);                                                                             // 518
                                                                                           // 519
                                                                                           // 520
                                                                                           // 521
                                                                                           // 522
                                                                                           // 523
                                                                                           // 524
(function () {                                                                             // 525
                                                                                           // 526
//////////////////////////////////////////////////////////////////////////////////////     // 527
//                                                                                  //     // 528
// packages/jagi:astronomy/lib/core/class.js                                        //     // 529
//                                                                                  //     // 530
//////////////////////////////////////////////////////////////////////////////////////     // 531
                                                                                    //     // 532
var methods = {                                                                     // 1   // 533
  extend: function(schemaDefinition) {                                              // 2   // 534
    // Remove the "transform" attribute if it's provided. We don't want to          // 3   // 535
    // override already set the collection's transform function.                    // 4   // 536
    delete schemaDefinition.transform;                                              // 5   // 537
                                                                                    // 6   // 538
    // Add the class from which we want to extend.                                  // 7   // 539
    schemaDefinition.parentClassName = this.getName();                              // 8   // 540
                                                                                    // 9   // 541
    // If a collection in the parent class was provided, then we want to use this   // 10  // 542
    // collection in the child class.                                               // 11  // 543
    var Collection = this.getCollection();                                          // 12  // 544
    if (Collection) {                                                               // 13  // 545
      schemaDefinition.collection = Collection;                                     // 14  // 546
    }                                                                               // 15  // 547
                                                                                    // 16  // 548
    return Astro.Class(schemaDefinition);                                           // 17  // 549
  },                                                                                // 18  // 550
                                                                                    // 19  // 551
  getParent: function() {                                                           // 20  // 552
    return Astro.classes[this.schema.parentClassName];                              // 21  // 553
  },                                                                                // 22  // 554
                                                                                    // 23  // 555
  getName: function() {                                                             // 24  // 556
    return this.schema.className;                                                   // 25  // 557
  },                                                                                // 26  // 558
                                                                                    // 27  // 559
  getCollection: function() {                                                       // 28  // 560
    return this.schema.collection;                                                  // 29  // 561
  },                                                                                // 30  // 562
                                                                                    // 31  // 563
  getConstructor: function() {                                                      // 32  // 564
    return this.schema.init;                                                        // 33  // 565
  }                                                                                 // 34  // 566
};                                                                                  // 35  // 567
                                                                                    // 36  // 568
Astro.createClass = Astro.Class = function(schemaDefinition) {                      // 37  // 569
  var Class = function Class() {                                                    // 38  // 570
    if (!(this instanceof Class)) {                                                 // 39  // 571
      throw new Error('Use "new" keyword to create an instance');                   // 40  // 572
    }                                                                               // 41  // 573
                                                                                    // 42  // 574
    var self = this;                                                                // 43  // 575
    var args = arguments;                                                           // 44  // 576
                                                                                    // 45  // 577
    // Call default constructor.                                                    // 46  // 578
    defaultConstructor.apply(self, args);                                           // 47  // 579
                                                                                    // 48  // 580
    // Call global constructors by triggering the "initinstance" event. These       // 49  // 581
    // constructors are mainly defined by modules and behaviors.                    // 50  // 582
    Astro.eventManager.each('initinstance', function(eventHandler) {                // 51  // 583
      eventHandler.apply(self, args);                                               // 52  // 584
    });                                                                             // 53  // 585
                                                                                    // 54  // 586
    // Call user defined constructor.                                               // 55  // 587
    self.constructor.getConstructor().apply(self, args);                            // 56  // 588
  };                                                                                // 57  // 589
                                                                                    // 58  // 590
  // Extend class object with some helper methods.                                  // 59  // 591
  _.extend(Class, methods);                                                         // 60  // 592
                                                                                    // 61  // 593
  // Initialize a schema and store it in the class object.                          // 62  // 594
  Class.schema = new Astro.Schema(schemaDefinition);                                // 63  // 595
                                                                                    // 64  // 596
  // Add given class to list of all defined classes.                                // 65  // 597
  Astro.classes[Class.getName()] = Class;                                           // 66  // 598
                                                                                    // 67  // 599
  // Extend.                                                                        // 68  // 600
  var ParentClass = Class.getParent();                                              // 69  // 601
  // Extend another model class if provided.                                        // 70  // 602
  if (ParentClass) {                                                                // 71  // 603
    Class.prototype = Object.create(ParentClass.prototype);                         // 72  // 604
  } else {                                                                          // 73  // 605
    // Class.prototype = Object.create(Astro.BaseClass.prototype);                  // 74  // 606
    Class.prototype = Object.create(Astro.BaseClass.prototype);                     // 75  // 607
  }                                                                                 // 76  // 608
  Class.prototype.constructor = Class;                                              // 77  // 609
                                                                                    // 78  // 610
  // Setup class using "initclass" event handlers.                                  // 79  // 611
  Astro.eventManager.each('initclass', function(eventHandler) {                     // 80  // 612
    eventHandler.call(Class, schemaDefinition);                                     // 81  // 613
  });                                                                               // 82  // 614
                                                                                    // 83  // 615
  return Class;                                                                     // 84  // 616
};                                                                                  // 85  // 617
                                                                                    // 86  // 618
//////////////////////////////////////////////////////////////////////////////////////     // 619
                                                                                           // 620
}).call(this);                                                                             // 621
                                                                                           // 622
                                                                                           // 623
                                                                                           // 624
                                                                                           // 625
                                                                                           // 626
                                                                                           // 627
(function () {                                                                             // 628
                                                                                           // 629
//////////////////////////////////////////////////////////////////////////////////////     // 630
//                                                                                  //     // 631
// packages/jagi:astronomy/lib/modules/events/init_module.js                        //     // 632
//                                                                                  //     // 633
//////////////////////////////////////////////////////////////////////////////////////     // 634
                                                                                    //     // 635
eventsOnInitModule = function() {                                                   // 1   // 636
  // Allow storing events in the global "Astronomy.eventManager" object.            // 2   // 637
  Astro.eventManager = {};                                                          // 3   // 638
  Astro.Events.mixin(Astro.eventManager);                                           // 4   // 639
                                                                                    // 5   // 640
  // Allow storing events in every schema.                                          // 6   // 641
  Astro.Events.mixin(Astro.Schema);                                                 // 7   // 642
};                                                                                  // 8   // 643
                                                                                    // 9   // 644
//////////////////////////////////////////////////////////////////////////////////////     // 645
                                                                                           // 646
}).call(this);                                                                             // 647
                                                                                           // 648
                                                                                           // 649
                                                                                           // 650
                                                                                           // 651
                                                                                           // 652
                                                                                           // 653
(function () {                                                                             // 654
                                                                                           // 655
//////////////////////////////////////////////////////////////////////////////////////     // 656
//                                                                                  //     // 657
// packages/jagi:astronomy/lib/modules/events/init_class.js                         //     // 658
//                                                                                  //     // 659
//////////////////////////////////////////////////////////////////////////////////////     // 660
                                                                                    //     // 661
var checks = {                                                                      // 1   // 662
  eventName: function(eventName) {                                                  // 2   // 663
    if (!_.isString(eventName)) {                                                   // 3   // 664
      throw new Error(                                                              // 4   // 665
        'The event name in the "' + this.getName() +                                // 5   // 666
        '" class schema has to be a string'                                         // 6   // 667
      );                                                                            // 7   // 668
    }                                                                               // 8   // 669
  },                                                                                // 9   // 670
                                                                                    // 10  // 671
  eventHandler: function(eventName, eventHandler) {                                 // 11  // 672
    if (!_.isFunction(eventHandler)) {                                              // 12  // 673
      throw new Error(                                                              // 13  // 674
        'The event handler for the "' + eventName + '" event in the "' +            // 14  // 675
        this.getName() + '" class schema has to be a function'                      // 15  // 676
      );                                                                            // 16  // 677
    }                                                                               // 17  // 678
  },                                                                                // 18  // 679
                                                                                    // 19  // 680
  events: function(events) {                                                        // 20  // 681
    if (!_.isObject(events)) {                                                      // 21  // 682
      throw new Error(                                                              // 22  // 683
        'The list of events in the "' + this.getName() +                            // 23  // 684
        '" class schema has to be an object'                                        // 24  // 685
      );                                                                            // 25  // 686
    }                                                                               // 26  // 687
  }                                                                                 // 27  // 688
};                                                                                  // 28  // 689
                                                                                    // 29  // 690
var methods = {                                                                     // 30  // 691
  addEvent: function(eventName, eventHandler) {                                     // 31  // 692
    // Check if event name is a string.                                             // 32  // 693
    checks.eventName.call(this, eventName);                                         // 33  // 694
    // Check if event handler is a function.                                        // 34  // 695
    checks.eventHandler.call(this, eventName, eventHandler);                        // 35  // 696
                                                                                    // 36  // 697
    this.schema.on(eventName, eventHandler);                                        // 37  // 698
  },                                                                                // 38  // 699
                                                                                    // 39  // 700
  addEvents: function(events) {                                                     // 40  // 701
    // Check if events definition.                                                  // 41  // 702
    checks.events.call(this, events);                                               // 42  // 703
                                                                                    // 43  // 704
    _.each(events, function(eventHandler, eventName) {                              // 44  // 705
      this.addEvent(eventName, eventHandler);                                       // 45  // 706
    }, this);                                                                       // 46  // 707
  },                                                                                // 47  // 708
                                                                                    // 48  // 709
  removeEvent: function(eventName, eventHandler) {                                  // 49  // 710
    // Check if event name is a string.                                             // 50  // 711
    checks.eventName.call(this, eventName);                                         // 51  // 712
                                                                                    // 52  // 713
    if (arguments.length === 1) {                                                   // 53  // 714
                                                                                    // 54  // 715
      this.schema.off(eventName);                                                   // 55  // 716
                                                                                    // 56  // 717
      // When the event handler is provided.                                        // 57  // 718
    } else if (arguments.length === 2) {                                            // 58  // 719
                                                                                    // 59  // 720
      // Check if event handler is a function.                                      // 60  // 721
      checks.eventHandler.call(this, eventName, eventHandler);                      // 61  // 722
                                                                                    // 62  // 723
      this.schema.off(eventName, eventHandler);                                     // 63  // 724
                                                                                    // 64  // 725
    }                                                                               // 65  // 726
  },                                                                                // 66  // 727
                                                                                    // 67  // 728
  emitEvent: function(event) {                                                      // 68  // 729
    if (!event) {                                                                   // 69  // 730
      return;                                                                       // 70  // 731
    }                                                                               // 71  // 732
                                                                                    // 72  // 733
    var Class = this;                                                               // 73  // 734
    var eventName = event.type;                                                     // 74  // 735
    var target = event.target;                                                      // 75  // 736
                                                                                    // 76  // 737
    Astro.utils.class.everyClass(Class, function(Class) {                           // 77  // 738
      if (Class.schema._events && _.has(Class.schema._events, eventName)) {         // 78  // 739
        return Class.schema.emit(event);                                            // 79  // 740
      } else {                                                                      // 80  // 741
        return true;                                                                // 81  // 742
      }                                                                             // 82  // 743
    });                                                                             // 83  // 744
                                                                                    // 84  // 745
    if (!event.stopped) {                                                           // 85  // 746
      return Astro.eventManager.emit(event);                                        // 86  // 747
    }                                                                               // 87  // 748
                                                                                    // 88  // 749
    return !event.stopped;                                                          // 89  // 750
  }                                                                                 // 90  // 751
};                                                                                  // 91  // 752
                                                                                    // 92  // 753
eventsOnInitClass = function(schemaDefinition) {                                    // 93  // 754
  var Class = this;                                                                 // 94  // 755
                                                                                    // 95  // 756
  _.extend(Class, methods);                                                         // 96  // 757
                                                                                    // 97  // 758
  // Add events from the schema definition.                                         // 98  // 759
  if (_.has(schemaDefinition, 'events')) {                                          // 99  // 760
    Class.addEvents(schemaDefinition.events);                                       // 100
  }                                                                                 // 101
};                                                                                  // 102
                                                                                    // 103
//////////////////////////////////////////////////////////////////////////////////////     // 765
                                                                                           // 766
}).call(this);                                                                             // 767
                                                                                           // 768
                                                                                           // 769
                                                                                           // 770
                                                                                           // 771
                                                                                           // 772
                                                                                           // 773
(function () {                                                                             // 774
                                                                                           // 775
//////////////////////////////////////////////////////////////////////////////////////     // 776
//                                                                                  //     // 777
// packages/jagi:astronomy/lib/modules/events/module.js                             //     // 778
//                                                                                  //     // 779
//////////////////////////////////////////////////////////////////////////////////////     // 780
                                                                                    //     // 781
Astro.createModule({                                                                // 1   // 782
  name: 'events',                                                                   // 2   // 783
  init: eventsOnInitModule,                                                         // 3   // 784
  events: {                                                                         // 4   // 785
    initclass: eventsOnInitClass                                                    // 5   // 786
  }                                                                                 // 6   // 787
});                                                                                 // 7   // 788
                                                                                    // 8   // 789
//////////////////////////////////////////////////////////////////////////////////////     // 790
                                                                                           // 791
}).call(this);                                                                             // 792
                                                                                           // 793
                                                                                           // 794
                                                                                           // 795
                                                                                           // 796
                                                                                           // 797
                                                                                           // 798
(function () {                                                                             // 799
                                                                                           // 800
//////////////////////////////////////////////////////////////////////////////////////     // 801
//                                                                                  //     // 802
// packages/jagi:astronomy/lib/modules/types/global.js                              //     // 803
//                                                                                  //     // 804
//////////////////////////////////////////////////////////////////////////////////////     // 805
                                                                                    //     // 806
Astro.types = {};                                                                   // 1   // 807
                                                                                    // 2   // 808
//////////////////////////////////////////////////////////////////////////////////////     // 809
                                                                                           // 810
}).call(this);                                                                             // 811
                                                                                           // 812
                                                                                           // 813
                                                                                           // 814
                                                                                           // 815
                                                                                           // 816
                                                                                           // 817
(function () {                                                                             // 818
                                                                                           // 819
//////////////////////////////////////////////////////////////////////////////////////     // 820
//                                                                                  //     // 821
// packages/jagi:astronomy/lib/modules/types/utils.js                               //     // 822
//                                                                                  //     // 823
//////////////////////////////////////////////////////////////////////////////////////     // 824
                                                                                    //     // 825
Astro.utils.types = {};                                                             // 1   // 826
                                                                                    // 2   // 827
Astro.utils.types.castValue = function(type, value) {                               // 3   // 828
  // We only cast value if the type was provided.                                   // 4   // 829
  if (!_.isNull(type) && !_.isUndefined(value) && !_.isNull(value)) {               // 5   // 830
    value = Astro.types[type](value);                                               // 6   // 831
  }                                                                                 // 7   // 832
                                                                                    // 8   // 833
  return value;                                                                     // 9   // 834
};                                                                                  // 10  // 835
                                                                                    // 11  // 836
//////////////////////////////////////////////////////////////////////////////////////     // 837
                                                                                           // 838
}).call(this);                                                                             // 839
                                                                                           // 840
                                                                                           // 841
                                                                                           // 842
                                                                                           // 843
                                                                                           // 844
                                                                                           // 845
(function () {                                                                             // 846
                                                                                           // 847
//////////////////////////////////////////////////////////////////////////////////////     // 848
//                                                                                  //     // 849
// packages/jagi:astronomy/lib/modules/types/type.js                                //     // 850
//                                                                                  //     // 851
//////////////////////////////////////////////////////////////////////////////////////     // 852
                                                                                    //     // 853
Astro.createType = function(typeDefinition) {                                       // 1   // 854
  // Check if the type definition is an object.                                     // 2   // 855
  if (!_.isObject(typeDefinition)) {                                                // 3   // 856
    throw new Error('Provide a type definition');                                   // 4   // 857
  }                                                                                 // 5   // 858
  // Check if the type name is provided.                                            // 6   // 859
  if (!_.has(typeDefinition, 'name')) {                                             // 7   // 860
    throw new Error('Provide a type name');                                         // 8   // 861
  }                                                                                 // 9   // 862
  // Check if the type name is a string.                                            // 10  // 863
  if (!_.isString(typeDefinition.name)) {                                           // 11  // 864
    throw new Error('The type name has to be a string');                            // 12  // 865
  }                                                                                 // 13  // 866
  // Check if the type with the given name already exists.                          // 14  // 867
  if (_.has(Astro.types, typeDefinition.name)) {                                    // 15  // 868
    throw new Error('Type with the name "' + typeDefinition.name +                  // 16  // 869
      '" is already defined');                                                      // 17  // 870
  }                                                                                 // 18  // 871
  // Check if the casting function is provided.                                     // 19  // 872
  if (!_.has(typeDefinition, 'cast')) {                                             // 20  // 873
    throw new Error('Provide the "cast" function');                                 // 21  // 874
  }                                                                                 // 22  // 875
  // Check if the "cast" attribute is function.                                     // 23  // 876
  if (!_.isFunction(typeDefinition.cast)) {                                         // 24  // 877
    throw new Error('The "cast" attribute has to be a function');                   // 25  // 878
  }                                                                                 // 26  // 879
                                                                                    // 27  // 880
  Astro.types[typeDefinition.name] = typeDefinition.cast;                           // 28  // 881
};                                                                                  // 29  // 882
                                                                                    // 30  // 883
//////////////////////////////////////////////////////////////////////////////////////     // 884
                                                                                           // 885
}).call(this);                                                                             // 886
                                                                                           // 887
                                                                                           // 888
                                                                                           // 889
                                                                                           // 890
                                                                                           // 891
                                                                                           // 892
(function () {                                                                             // 893
                                                                                           // 894
//////////////////////////////////////////////////////////////////////////////////////     // 895
//                                                                                  //     // 896
// packages/jagi:astronomy/lib/modules/types/init_module.js                         //     // 897
//                                                                                  //     // 898
//////////////////////////////////////////////////////////////////////////////////////     // 899
                                                                                    //     // 900
typesOnInitModule = function() {                                                    // 1   // 901
  Astro.createType({                                                                // 2   // 902
    name: 'string',                                                                 // 3   // 903
    cast: function(value) {                                                         // 4   // 904
      return String(value);                                                         // 5   // 905
    }                                                                               // 6   // 906
  });                                                                               // 7   // 907
                                                                                    // 8   // 908
  Astro.createType({                                                                // 9   // 909
    name: 'number',                                                                 // 10  // 910
    cast: function(value) {                                                         // 11  // 911
      return Number(value);                                                         // 12  // 912
    }                                                                               // 13  // 913
  });                                                                               // 14  // 914
                                                                                    // 15  // 915
  Astro.createType({                                                                // 16  // 916
    name: 'boolean',                                                                // 17  // 917
    cast: function(value) {                                                         // 18  // 918
      return Boolean(value);                                                        // 19  // 919
    }                                                                               // 20  // 920
  });                                                                               // 21  // 921
                                                                                    // 22  // 922
  Astro.createType({                                                                // 23  // 923
    name: 'object',                                                                 // 24  // 924
    cast: function(value) {                                                         // 25  // 925
      return new value.constructor(value);                                          // 26  // 926
    }                                                                               // 27  // 927
  });                                                                               // 28  // 928
                                                                                    // 29  // 929
  Astro.createType({                                                                // 30  // 930
    name: 'array',                                                                  // 31  // 931
    cast: function(value) {                                                         // 32  // 932
      if (_.isArray(value)) {                                                       // 33  // 933
        return value;                                                               // 34  // 934
      }                                                                             // 35  // 935
                                                                                    // 36  // 936
      return [value];                                                               // 37  // 937
    }                                                                               // 38  // 938
  });                                                                               // 39  // 939
                                                                                    // 40  // 940
  Astro.createType({                                                                // 41  // 941
    name: 'date',                                                                   // 42  // 942
    cast: function(value) {                                                         // 43  // 943
      if (_.isString(value)) {                                                      // 44  // 944
        var date = Date.parse(value);                                               // 45  // 945
        if (!_.isNaN(date)) {                                                       // 46  // 946
          return new Date(date);                                                    // 47  // 947
        } else {                                                                    // 48  // 948
          return null;                                                              // 49  // 949
        }                                                                           // 50  // 950
      } else if (_.isNumber(value)) {                                               // 51  // 951
        return new Date(value);                                                     // 52  // 952
      } else {                                                                      // 53  // 953
        return value;                                                               // 54  // 954
      }                                                                             // 55  // 955
    }                                                                               // 56  // 956
  });                                                                               // 57  // 957
};                                                                                  // 58  // 958
                                                                                    // 59  // 959
//////////////////////////////////////////////////////////////////////////////////////     // 960
                                                                                           // 961
}).call(this);                                                                             // 962
                                                                                           // 963
                                                                                           // 964
                                                                                           // 965
                                                                                           // 966
                                                                                           // 967
                                                                                           // 968
(function () {                                                                             // 969
                                                                                           // 970
//////////////////////////////////////////////////////////////////////////////////////     // 971
//                                                                                  //     // 972
// packages/jagi:astronomy/lib/modules/types/module.js                              //     // 973
//                                                                                  //     // 974
//////////////////////////////////////////////////////////////////////////////////////     // 975
                                                                                    //     // 976
Astro.createModule({                                                                // 1   // 977
  name: 'types',                                                                    // 2   // 978
  init: typesOnInitModule                                                           // 3   // 979
});                                                                                 // 4   // 980
                                                                                    // 5   // 981
//////////////////////////////////////////////////////////////////////////////////////     // 982
                                                                                           // 983
}).call(this);                                                                             // 984
                                                                                           // 985
                                                                                           // 986
                                                                                           // 987
                                                                                           // 988
                                                                                           // 989
                                                                                           // 990
(function () {                                                                             // 991
                                                                                           // 992
//////////////////////////////////////////////////////////////////////////////////////     // 993
//                                                                                  //     // 994
// packages/jagi:astronomy/lib/modules/indexes/init_class.js                        //     // 995
//                                                                                  //     // 996
//////////////////////////////////////////////////////////////////////////////////////     // 997
                                                                                    //     // 998
var checks = {                                                                      // 1   // 999
  indexName: function(indexName) {                                                  // 2   // 1000
    if (!_.isString(indexName)) {                                                   // 3   // 1001
      throw new Error(                                                              // 4   // 1002
        'The index name in the "' + this.getName() +                                // 5   // 1003
        '" class schema has to be a string'                                         // 6   // 1004
      );                                                                            // 7   // 1005
    }                                                                               // 8   // 1006
  },                                                                                // 9   // 1007
};                                                                                  // 10  // 1008
                                                                                    // 11  // 1009
var methods = {                                                                     // 12  // 1010
  addIndex: function(indexName, indexDefinition) {                                  // 13  // 1011
    if (!Meteor.isServer) {                                                         // 14  // 1012
      return;                                                                       // 15  // 1013
    }                                                                               // 16  // 1014
                                                                                    // 17  // 1015
    // Check if the index name is a string.                                         // 18  // 1016
    checks.indexName.call(this, indexName);                                         // 19  // 1017
                                                                                    // 20  // 1018
    var Collection = this.getCollection();                                          // 21  // 1019
                                                                                    // 22  // 1020
    // Add index definition to the schema.                                          // 23  // 1021
    this.schema.indexes[indexName] = indexDefinition;                               // 24  // 1022
                                                                                    // 25  // 1023
    // Set the index name.                                                          // 26  // 1024
    var options = _.extend({}, indexDefinition.options);                            // 27  // 1025
    options.name = indexName;                                                       // 28  // 1026
                                                                                    // 29  // 1027
    Collection._ensureIndex(indexDefinition.fields, options);                       // 30  // 1028
  },                                                                                // 31  // 1029
                                                                                    // 32  // 1030
  addIndexes: function(indexesDefinition) {                                         // 33  // 1031
    if (!Meteor.isServer) {                                                         // 34  // 1032
      return;                                                                       // 35  // 1033
    }                                                                               // 36  // 1034
                                                                                    // 37  // 1035
    _.each(                                                                         // 38  // 1036
      indexesDefinition,                                                            // 39  // 1037
      function(indexDefinition, indexName) {                                        // 40  // 1038
        this.addIndex(                                                              // 41  // 1039
          indexName,                                                                // 42  // 1040
          indexDefinition                                                           // 43  // 1041
        );                                                                          // 44  // 1042
      },                                                                            // 45  // 1043
      this                                                                          // 46  // 1044
    );                                                                              // 47  // 1045
  },                                                                                // 48  // 1046
                                                                                    // 49  // 1047
  removeIndex: function(indexName) {                                                // 50  // 1048
    if (!Meteor.isServer) {                                                         // 51  // 1049
      return;                                                                       // 52  // 1050
    }                                                                               // 53  // 1051
                                                                                    // 54  // 1052
    // Check if the index name is a string.                                         // 55  // 1053
    checks.indexName.call(this, indexName);                                         // 56  // 1054
                                                                                    // 57  // 1055
    var Collection = this.getCollection();                                          // 58  // 1056
                                                                                    // 59  // 1057
    // Remove an index definition from the schema.                                  // 60  // 1058
    delete this.schema.indexes[indexName];                                          // 61  // 1059
                                                                                    // 62  // 1060
    Collection._dropIndex(indexName);                                               // 63  // 1061
  }                                                                                 // 64  // 1062
};                                                                                  // 65  // 1063
                                                                                    // 66  // 1064
indexesOnInitClass = function(schemaDefinition) {                                   // 67  // 1065
  // checks.schemaDefinition.call(this, schemaDefinition);                          // 68  // 1066
                                                                                    // 69  // 1067
  var Class = this;                                                                 // 70  // 1068
                                                                                    // 71  // 1069
  // Add index methods to the class.                                                // 72  // 1070
  _.extend(Class, methods);                                                         // 73  // 1071
                                                                                    // 74  // 1072
  // Add the "indexes" attribute to the schema.                                     // 75  // 1073
  Class.schema.indexes = {};                                                        // 76  // 1074
                                                                                    // 77  // 1075
  // Add indexes from the schema definition.                                        // 78  // 1076
  if (_.has(schemaDefinition, 'indexes') && Meteor.isServer) {                      // 79  // 1077
    Class.addIndexes(schemaDefinition.indexes);                                     // 80  // 1078
  }                                                                                 // 81  // 1079
                                                                                    // 82  // 1080
  // Add indexes that are defined next to the field definition.                     // 83  // 1081
  _.each(                                                                           // 84  // 1082
    schemaDefinition.fields,                                                        // 85  // 1083
    function(fieldDefinition, patternOrFieldName) {                                 // 86  // 1084
      if (_.has(fieldDefinition, 'index')) {                                        // 87  // 1085
        var indexDefinition = {                                                     // 88  // 1086
          fields: {}                                                                // 89  // 1087
        };                                                                          // 90  // 1088
        indexDefinition.fields[patternOrFieldName] = fieldDefinition.index;         // 91  // 1089
        Class.addIndex(patternOrFieldName, indexDefinition);                        // 92  // 1090
      }                                                                             // 93  // 1091
    }                                                                               // 94  // 1092
  );                                                                                // 95  // 1093
};                                                                                  // 96  // 1094
                                                                                    // 97  // 1095
//////////////////////////////////////////////////////////////////////////////////////     // 1096
                                                                                           // 1097
}).call(this);                                                                             // 1098
                                                                                           // 1099
                                                                                           // 1100
                                                                                           // 1101
                                                                                           // 1102
                                                                                           // 1103
                                                                                           // 1104
(function () {                                                                             // 1105
                                                                                           // 1106
//////////////////////////////////////////////////////////////////////////////////////     // 1107
//                                                                                  //     // 1108
// packages/jagi:astronomy/lib/modules/indexes/module.js                            //     // 1109
//                                                                                  //     // 1110
//////////////////////////////////////////////////////////////////////////////////////     // 1111
                                                                                    //     // 1112
Astro.createModule({                                                                // 1   // 1113
  name: 'indexes',                                                                  // 2   // 1114
  events: {                                                                         // 3   // 1115
    initclass: indexesOnInitClass                                                   // 4   // 1116
  }                                                                                 // 5   // 1117
});                                                                                 // 6   // 1118
                                                                                    // 7   // 1119
//////////////////////////////////////////////////////////////////////////////////////     // 1120
                                                                                           // 1121
}).call(this);                                                                             // 1122
                                                                                           // 1123
                                                                                           // 1124
                                                                                           // 1125
                                                                                           // 1126
                                                                                           // 1127
                                                                                           // 1128
(function () {                                                                             // 1129
                                                                                           // 1130
//////////////////////////////////////////////////////////////////////////////////////     // 1131
//                                                                                  //     // 1132
// packages/jagi:astronomy/lib/modules/fields/utils.js                              //     // 1133
//                                                                                  //     // 1134
//////////////////////////////////////////////////////////////////////////////////////     // 1135
                                                                                    //     // 1136
Astro.utils.fields = {                                                              // 1   // 1137
  isPattern: function(name) {                                                       // 2   // 1138
    return name.indexOf('.') !== -1;                                                // 3   // 1139
  },                                                                                // 4   // 1140
                                                                                    // 5   // 1141
  getDefinition: function(Class, fieldNameOrPattern) {                              // 6   // 1142
    // If there is no parent class, then we look for a definition in this class     // 7   // 1143
    // only.                                                                        // 8   // 1144
    if (!Class.getParent()) {                                                       // 9   // 1145
      return Class.schema.fields[fieldNameOrPattern];                               // 10  // 1146
    }                                                                               // 11  // 1147
                                                                                    // 12  // 1148
    // Find field definition for the "fieldNameOrPattern" in this and parent        // 13  // 1149
    // classes.                                                                     // 14  // 1150
    return Astro.utils.class.findInClass(Class, function(Class) {                   // 15  // 1151
      return Class.schema.fields[fieldNameOrPattern];                               // 16  // 1152
    });                                                                             // 17  // 1153
  },                                                                                // 18  // 1154
                                                                                    // 19  // 1155
  getDefaultValue: function(Class, fieldNameOrPattern) {                            // 20  // 1156
    var self = this;                                                                // 21  // 1157
                                                                                    // 22  // 1158
    // Prepare variable for storing a default value.                                // 23  // 1159
    var value;                                                                      // 24  // 1160
                                                                                    // 25  // 1161
    // Look for a field's definition.                                               // 26  // 1162
    var fieldDefinition = self.getDefinition(Class, fieldNameOrPattern);            // 27  // 1163
                                                                                    // 28  // 1164
    // We look for the default value only if there is a field definition.           // 29  // 1165
    if (fieldDefinition) {                                                          // 30  // 1166
      value = EJSON.clone(fieldDefinition.default);                                 // 31  // 1167
    } else if (self.isPattern(fieldNameOrPattern)) {                                // 32  // 1168
      var segments = fieldNameOrPattern.split('.');                                 // 33  // 1169
      var replaced = false;                                                         // 34  // 1170
      _.each(segments, function(segment, index) {                                   // 35  // 1171
        if (/^\d+$/.test(segment)) {                                                // 36  // 1172
          segments[index] = '$';                                                    // 37  // 1173
          replaced = true;                                                          // 38  // 1174
        }                                                                           // 39  // 1175
      });                                                                           // 40  // 1176
      if (replaced) {                                                               // 41  // 1177
        fieldDefinition = self.getDefinition(Class, segments.join('.'));            // 42  // 1178
        if (fieldDefinition) {                                                      // 43  // 1179
          value = EJSON.clone(fieldDefinition.default);                             // 44  // 1180
        }                                                                           // 45  // 1181
      }                                                                             // 46  // 1182
    }                                                                               // 47  // 1183
                                                                                    // 48  // 1184
    return value;                                                                   // 49  // 1185
  },                                                                                // 50  // 1186
                                                                                    // 51  // 1187
  castValue: function(Class, fieldNameOrPattern, value) {                           // 52  // 1188
    var self = this;                                                                // 53  // 1189
                                                                                    // 54  // 1190
    var fieldDefinition = self.getDefinition(Class, fieldNameOrPattern);            // 55  // 1191
                                                                                    // 56  // 1192
    if (fieldDefinition) {                                                          // 57  // 1193
      value = Astro.utils.types.castValue(fieldDefinition.type, value);             // 58  // 1194
    } else if (self.isPattern(fieldNameOrPattern)) {                                // 59  // 1195
      var segments = fieldNameOrPattern.split('.');                                 // 60  // 1196
      var replaced = false;                                                         // 61  // 1197
      _.each(segments, function(segment, index) {                                   // 62  // 1198
        if (/^\d+$/.test(segment)) {                                                // 63  // 1199
          segments[index] = '$';                                                    // 64  // 1200
          replaced = true;                                                          // 65  // 1201
        }                                                                           // 66  // 1202
      });                                                                           // 67  // 1203
      if (replaced) {                                                               // 68  // 1204
        fieldDefinition = self.getDefinition(Class, segments.join('.'));            // 69  // 1205
        if (fieldDefinition) {                                                      // 70  // 1206
          value = Astro.utils.types.castValue(fieldDefinition.type, value);         // 71  // 1207
        }                                                                           // 72  // 1208
      }                                                                             // 73  // 1209
    }                                                                               // 74  // 1210
                                                                                    // 75  // 1211
    return value;                                                                   // 76  // 1212
  },                                                                                // 77  // 1213
                                                                                    // 78  // 1214
  getAllFieldsNames: function(Class) {                                              // 79  // 1215
    // If there is no parent class, then we only look for a fields names in this    // 80  // 1216
    // class only.                                                                  // 81  // 1217
    if (!Class.getParent()) {                                                       // 82  // 1218
      return Class.schema.fieldsNames;                                              // 83  // 1219
    }                                                                               // 84  // 1220
                                                                                    // 85  // 1221
    // Get list of all fields defined in this and parent classes.                   // 86  // 1222
    var fieldsNames = [];                                                           // 87  // 1223
    Astro.utils.class.eachClass(Class, function(Class) {                            // 88  // 1224
      fieldsNames = fieldsNames.concat(Class.schema.fieldsNames);                   // 89  // 1225
    });                                                                             // 90  // 1226
    return _.uniq(fieldsNames);                                                     // 91  // 1227
  },                                                                                // 92  // 1228
                                                                                    // 93  // 1229
  getFieldsNamesFromPattern: function(doc, pattern) {                               // 94  // 1230
    var values = Astro.config.supportLegacyBrowsers ? doc : doc._values;            // 95  // 1231
                                                                                    // 96  // 1232
    // If it isn't nested pattern so it has to be regular field name. In that       // 97  // 1233
    // case we just return this field name as an array with a single element.       // 98  // 1234
    if (!this.isPattern(pattern)) {                                                 // 99  // 1235
      return [pattern];                                                             // 100
    }                                                                               // 101
                                                                                    // 102
    // Variable for storing fields' names that match the pattern.                   // 103
    var fieldsNames = [];                                                           // 104
                                                                                    // 105
    // First split pattern by the "." sign.                                         // 106
    var segments = pattern.split('.');                                              // 107
                                                                                    // 108
    // Recursive function for finding fields names.                                 // 109
    var find = function(value, segmentIndex, fieldName) {                           // 110
      // If we reached the end of a nested data, then we don't try to find the      // 111
      // field name.                                                                // 112
      if (_.isUndefined(value)) {                                                   // 113
        return;                                                                     // 114
      }                                                                             // 115
                                                                                    // 116
      // Check if we haven't reached the last segment.                              // 117
      if (segmentIndex < segments.length) {                                         // 118
        var segment = segments[segmentIndex];                                       // 119
                                                                                    // 120
        // We reached a segment indicating that we are dealing with array.          // 121
        if (segment === '$') {                                                      // 122
          // We have to make sure that value is an array, if it's not then we       // 123
          // stop looking for this field name.                                      // 124
          if (!_.isArray(value)) {                                                  // 125
            return;                                                                 // 126
          }                                                                         // 127
                                                                                    // 128
          // Recursively look for fields names in the array.                        // 129
          _.each(value, function(arrayElement, arrayIndex) {                        // 130
            find(arrayElement, segmentIndex + 1, fieldName + '.' +                  // 131
              arrayIndex);                                                          // 132
          });                                                                       // 133
        } else {                                                                    // 134
          // Concatenate segment to compose field name.                             // 135
          fieldName = fieldName + '.' + segment;                                    // 136
          // Recursively try to compose field name with the next segment.           // 137
          find(value[segment], segmentIndex + 1, fieldName);                        // 138
        }                                                                           // 139
      } else {                                                                      // 140
        // If we reached the last segment then we can add composed field name.      // 141
        fieldsNames.push(fieldName.slice(1));                                       // 142
      }                                                                             // 143
    };                                                                              // 144
                                                                                    // 145
    find(values, 0, '');                                                            // 146
                                                                                    // 147
    return fieldsNames;                                                             // 148
  },                                                                                // 149
                                                                                    // 150
  resolvePattern: function(doc, pattern, callback) {                                // 151
    var self = this;                                                                // 152
    var Class = doc.constructor;                                                    // 153
    var values = Astro.config.supportLegacyBrowsers ? doc : doc._values;            // 154
                                                                                    // 155
    // First split the pattern by the "." sign.                                     // 156
    var segments = pattern.split('.');                                              // 157
    var lastIndex = segments.length - 1;                                            // 158
                                                                                    // 159
    // Recursive function for setting value of the nested field.                    // 160
    var next = function(object, segmentIndex) {                                     // 161
      // Get a segment under the given index.                                       // 162
      var segment = segments[segmentIndex];                                         // 163
                                                                                    // 164
      // We don't support the "$" segment here. If you want to set or get           // 165
      // multiple fields in (from) the array, you have to use the                   // 166
      // "getFieldsNamesFromPattern" function and then call the "resolvePattern"    // 167
      // function on each field.                                                    // 168
      if (segment === '$') {                                                        // 169
        return;                                                                     // 170
      }                                                                             // 171
                                                                                    // 172
      // Compose pattern from the segments up to the current one.                   // 173
      var nextPattern = segments.slice(0, segmentIndex + 1).join('.');              // 174
                                                                                    // 175
      // Check if there is a field definition for the given segment. We do this     // 176
      // check only for the first segments. Any subobject can have structure,       // 177
      // types that don't have to be defined.                                       // 178
      if (segmentIndex === 0) {                                                     // 179
        var fieldDefinition = self.getDefinition(Class, segment);                   // 180
        // If there is no field definition for the first segment, then we stop      // 181
        // execution.                                                               // 182
        if (!fieldDefinition) {                                                     // 183
          return;                                                                   // 184
        }                                                                           // 185
      }                                                                             // 186
                                                                                    // 187
      // Set the value, if we reached a one before the last segment.                // 188
      if (segmentIndex === lastIndex) {                                             // 189
        callback(object, segment, nextPattern);                                     // 190
      } else {                                                                      // 191
        // Check one more time if a value of the current segment is object, so      // 192
        // we can get deeper.                                                       // 193
        if (_.isObject(object[segment])) {                                          // 194
          next(object[segment], segmentIndex + 1);                                  // 195
        } else {                                                                    // 196
          return;                                                                   // 197
        }                                                                           // 198
      }                                                                             // 199
    };                                                                              // 200
                                                                                    // 201
    // Set the value on the field(s) using recursion.                               // 202
    next(values, 0);                                                                // 203
  },                                                                                // 204
                                                                                    // 205
  getAllValues: function(doc, options) {                                            // 206
    var self = this;                                                                // 207
    var Class = doc.constructor;                                                    // 208
                                                                                    // 209
    return self.getValues(                                                          // 210
      doc,                                                                          // 211
      self.getAllFieldsNames(Class),                                                // 212
      options                                                                       // 213
    );                                                                              // 214
  },                                                                                // 215
                                                                                    // 216
  getValues: function(doc, fieldsNamesOrPatterns, options) {                        // 217
    var self = this;                                                                // 218
    var values = {};                                                                // 219
                                                                                    // 220
    _.each(fieldsNamesOrPatterns, function(fieldNameOrPattern) {                    // 221
      values[fieldNameOrPattern] = self.getValue(                                   // 222
        doc,                                                                        // 223
        fieldNameOrPattern,                                                         // 224
        options                                                                     // 225
      );                                                                            // 226
    });                                                                             // 227
                                                                                    // 228
    return values;                                                                  // 229
  },                                                                                // 230
                                                                                    // 231
  getValue: function(doc, fieldNameOrPattern, options) {                            // 232
    var self = this;                                                                // 233
    var Class = doc.constructor;                                                    // 234
                                                                                    // 235
    // Set default options of the function. By default, we cast value being get     // 236
    // and get default value is none had been provided.                             // 237
    options = _.extend({                                                            // 238
      cast: true,                                                                   // 239
      default: true                                                                 // 240
    }, options);                                                                    // 241
                                                                                    // 242
    var value;                                                                      // 243
                                                                                    // 244
    self.resolvePattern(                                                            // 245
      doc,                                                                          // 246
      fieldNameOrPattern,                                                           // 247
      function(object, segment) {                                                   // 248
        // Get value.                                                               // 249
        value = object[segment];                                                    // 250
                                                                                    // 251
        if (_.isUndefined(value) && options.default) {                              // 252
          // If the value is undefined, then try getting a default value.           // 253
          value = self.getDefaultValue(Class, fieldNameOrPattern);                  // 254
          // Assign default value.                                                  // 255
          if (!_.isUndefined(value)) {                                              // 256
            object[segment] = value;                                                // 257
          }                                                                         // 258
        } else if (options.cast) {                                                  // 259
          // Try casting the value to the proper type.                              // 260
          value = self.castValue(Class, fieldNameOrPattern, value);                 // 261
        }                                                                           // 262
      }                                                                             // 263
    );                                                                              // 264
                                                                                    // 265
    return value;                                                                   // 266
  },                                                                                // 267
                                                                                    // 268
  setAllValues: function(doc, values, options) {                                    // 269
    var self = this;                                                                // 270
    var Class = doc.constructor;                                                    // 271
                                                                                    // 272
    var names = self.getAllFieldsNames(Class);                                      // 273
    _.each(names, function(name) {                                                  // 274
      if (!_.has(values, name)) {                                                   // 275
        values[name] = self.getDefaultValue(Class, name);                           // 276
      }                                                                             // 277
    });                                                                             // 278
                                                                                    // 279
    self.setValues(doc, values, options);                                           // 280
  },                                                                                // 281
                                                                                    // 282
  setValues: function(doc, values, options) {                                       // 283
    var self = this;                                                                // 284
                                                                                    // 285
    _.each(values, function(value, name) {                                          // 286
      self.setValue(doc, name, value, options);                                     // 287
    });                                                                             // 288
  },                                                                                // 289
                                                                                    // 290
  setValue: function(doc, fieldNameOrPattern, value, options) {                     // 291
    var self = this;                                                                // 292
    var Class = doc.constructor;                                                    // 293
                                                                                    // 294
    // Set default options of the function. By default, we cast value being set     // 295
    // and set default value is none had been provided.                             // 296
    options = _.extend({                                                            // 297
      cast: true,                                                                   // 298
      default: true                                                                 // 299
    }, options);                                                                    // 300
                                                                                    // 301
    self.resolvePattern(                                                            // 302
      doc,                                                                          // 303
      fieldNameOrPattern,                                                           // 304
      function(object, segment) {                                                   // 305
        if (_.isUndefined(value) && options.default) {                              // 306
          // If the value is undefined, then try getting a default value.           // 307
          value = self.getDefaultValue(Class, fieldNameOrPattern);                  // 308
        } else if (options.cast) {                                                  // 309
          // Try casting the value to the proper type.                              // 310
          value = self.castValue(Class, fieldNameOrPattern, value);                 // 311
        }                                                                           // 312
                                                                                    // 313
        // Assign value.                                                            // 314
        if (!_.isUndefined(value)) {                                                // 315
          object[segment] = value;                                                  // 316
        }                                                                           // 317
      }                                                                             // 318
    );                                                                              // 319
  }                                                                                 // 320
};                                                                                  // 321
                                                                                    // 322
//////////////////////////////////////////////////////////////////////////////////////     // 1459
                                                                                           // 1460
}).call(this);                                                                             // 1461
                                                                                           // 1462
                                                                                           // 1463
                                                                                           // 1464
                                                                                           // 1465
                                                                                           // 1466
                                                                                           // 1467
(function () {                                                                             // 1468
                                                                                           // 1469
//////////////////////////////////////////////////////////////////////////////////////     // 1470
//                                                                                  //     // 1471
// packages/jagi:astronomy/lib/modules/fields/init_module.js                        //     // 1472
//                                                                                  //     // 1473
//////////////////////////////////////////////////////////////////////////////////////     // 1474
                                                                                    //     // 1475
var setOne = function(name, value) {                                                // 1   // 1476
  var doc = this;                                                                   // 2   // 1477
  var Class = doc.constructor;                                                      // 3   // 1478
                                                                                    // 4   // 1479
  // Deny changing the "_id" property.                                              // 5   // 1480
  if (name === '_id' && Astro.utils.fields.getValue(doc, '_id')) {                  // 6   // 1481
    return;                                                                         // 7   // 1482
  }                                                                                 // 8   // 1483
                                                                                    // 9   // 1484
  // Trigger the "beforeset" event handlers for every schema.                       // 10  // 1485
  var event = new Astro.Event('beforeset', {                                        // 11  // 1486
    field: name,                                                                    // 12  // 1487
    value: value                                                                    // 13  // 1488
  });                                                                               // 14  // 1489
  event.target = doc;                                                               // 15  // 1490
  doc.constructor.emitEvent(event);                                                 // 16  // 1491
                                                                                    // 17  // 1492
  // Cast the value to the proper type and set it on the document.                  // 18  // 1493
  Astro.utils.fields.setValue(doc, name, value);                                    // 19  // 1494
                                                                                    // 20  // 1495
  // Trigger the "afterset" event handlers for every schema.                        // 21  // 1496
  var event = new Astro.Event('afterset', {                                         // 22  // 1497
    field: name,                                                                    // 23  // 1498
    value: value                                                                    // 24  // 1499
  });                                                                               // 25  // 1500
  event.target = doc;                                                               // 26  // 1501
  doc.constructor.emitEvent(event);                                                 // 27  // 1502
};                                                                                  // 28  // 1503
                                                                                    // 29  // 1504
var setMany = function(values) {                                                    // 30  // 1505
  var doc = this;                                                                   // 31  // 1506
                                                                                    // 32  // 1507
  // Set multiple fields.                                                           // 33  // 1508
  _.each(values, function(value, name) {                                            // 34  // 1509
    setOne.call(doc, name, value);                                                  // 35  // 1510
  });                                                                               // 36  // 1511
};                                                                                  // 37  // 1512
                                                                                    // 38  // 1513
var getOne = function(name) {                                                       // 39  // 1514
  var doc = this;                                                                   // 40  // 1515
  var Class = doc.constructor;                                                      // 41  // 1516
                                                                                    // 42  // 1517
  // Trigger the "beforeget" event handlers for every schema.                       // 43  // 1518
  var event = new Astro.Event('beforeget', {                                        // 44  // 1519
    field: name                                                                     // 45  // 1520
  });                                                                               // 46  // 1521
  event.target = doc;                                                               // 47  // 1522
  Class.emitEvent(event);                                                           // 48  // 1523
                                                                                    // 49  // 1524
  // Get current or default field's value.                                          // 50  // 1525
  var value = Astro.utils.fields.getValue(doc, name);                               // 51  // 1526
                                                                                    // 52  // 1527
  // Trigger the "afterget" event handlers for every schema.                        // 53  // 1528
  var event = new Astro.Event('afterget', {                                         // 54  // 1529
    field: name                                                                     // 55  // 1530
  });                                                                               // 56  // 1531
  event.target = doc;                                                               // 57  // 1532
  Class.emitEvent(event);                                                           // 58  // 1533
                                                                                    // 59  // 1534
  return value;                                                                     // 60  // 1535
};                                                                                  // 61  // 1536
                                                                                    // 62  // 1537
var getMany = function(names) {                                                     // 63  // 1538
  var doc = this;                                                                   // 64  // 1539
  var values = {};                                                                  // 65  // 1540
                                                                                    // 66  // 1541
  _.each(names, function(name) {                                                    // 67  // 1542
    var value = doc.get(name);                                                      // 68  // 1543
    values[name] = value;                                                           // 69  // 1544
  });                                                                               // 70  // 1545
                                                                                    // 71  // 1546
  return values;                                                                    // 72  // 1547
};                                                                                  // 73  // 1548
                                                                                    // 74  // 1549
var getAll = function() {                                                           // 75  // 1550
  var doc = this;                                                                   // 76  // 1551
  var Class = doc.constructor;                                                      // 77  // 1552
                                                                                    // 78  // 1553
  // Get list of fields and their values.                                           // 79  // 1554
  return doc.get(Astro.utils.fields.getAllFieldsNames(Class));                      // 80  // 1555
};                                                                                  // 81  // 1556
                                                                                    // 82  // 1557
var methods = {                                                                     // 83  // 1558
  set: function(fieldNameOrPattern, fieldValue) {                                   // 84  // 1559
    var doc = this;                                                                 // 85  // 1560
                                                                                    // 86  // 1561
    if (arguments.length === 1 && _.isObject(fieldNameOrPattern)) {                 // 87  // 1562
                                                                                    // 88  // 1563
      setMany.call(doc, fieldNameOrPattern);                                        // 89  // 1564
                                                                                    // 90  // 1565
    } else if (arguments.length === 2 && _.isString(fieldNameOrPattern)) {          // 91  // 1566
                                                                                    // 92  // 1567
      if (fieldNameOrPattern.indexOf('$') === -1) {                                 // 93  // 1568
                                                                                    // 94  // 1569
        setOne.call(doc, fieldNameOrPattern, fieldValue);                           // 95  // 1570
                                                                                    // 96  // 1571
      } else {                                                                      // 97  // 1572
                                                                                    // 98  // 1573
        var fieldsNames = Astro.utils.fields.getFieldsNamesFromPattern(             // 99  // 1574
          doc,                                                                      // 100
          fieldNameOrPattern                                                        // 101
        );                                                                          // 102
        var fieldsValues = {};                                                      // 103
        _.each(fieldsNames, function(fieldNameOrPattern) {                          // 104
          fieldsValues[fieldNameOrPattern] = fieldValue;                            // 105
        });                                                                         // 106
        return setMany.call(doc, fieldsValues);                                     // 107
                                                                                    // 108
      }                                                                             // 109
                                                                                    // 110
    }                                                                               // 111
  },                                                                                // 112
                                                                                    // 113
  get: function(fieldNameOrPattern) {                                               // 114
    var doc = this;                                                                 // 115
                                                                                    // 116
    if (arguments.length === 0) {                                                   // 117
                                                                                    // 118
      return getAll.call(doc);                                                      // 119
                                                                                    // 120
    } else if (arguments.length === 1) {                                            // 121
                                                                                    // 122
      if (_.isArray(fieldNameOrPattern)) {                                          // 123
                                                                                    // 124
        return getMany.call(doc, fieldNameOrPattern);                               // 125
                                                                                    // 126
      } else if (_.isString(fieldNameOrPattern)) {                                  // 127
                                                                                    // 128
        if (fieldNameOrPattern.indexOf('$') === -1) {                               // 129
          return getOne.call(doc, fieldNameOrPattern);                              // 130
        } else {                                                                    // 131
          var fieldsNames = Astro.utils.fields.getFieldsNamesFromPattern(           // 132
            doc,                                                                    // 133
            fieldNameOrPattern                                                      // 134
          );                                                                        // 135
          return getMany.call(doc, fieldsNames);                                    // 136
        }                                                                           // 137
                                                                                    // 138
      }                                                                             // 139
                                                                                    // 140
    }                                                                               // 141
  },                                                                                // 142
                                                                                    // 143
  getModified: function(old) {                                                      // 144
    old = old || false;                                                             // 145
    var doc = this;                                                                 // 146
    var Class = doc.constructor;                                                    // 147
                                                                                    // 148
    var modified = {};                                                              // 149
                                                                                    // 150
    // Get the current values of all fields but "_id" (we can't change id).         // 151
    var fieldsValues = _.omit(Astro.utils.fields.getAllValues(doc), '_id');         // 152
                                                                                    // 153
    _.each(fieldsValues, function(fieldValue, fieldName) {                          // 154
      // If a value differs from the value in the "_original" object then it means  // 155
      // that fields was modified from the last save.                               // 156
      if (!EJSON.equals(doc._original[fieldName], fieldValue)) {                    // 157
        // Decide if we want to take new or old value.                              // 158
        if (old) {                                                                  // 159
          modified[fieldName] = doc._original[fieldName];                           // 160
        } else {                                                                    // 161
          modified[fieldName] = fieldValue;                                         // 162
        }                                                                           // 163
      }                                                                             // 164
    });                                                                             // 165
                                                                                    // 166
    return modified;                                                                // 167
  },                                                                                // 168
                                                                                    // 169
  save: function(callback) {                                                        // 170
    var doc = this;                                                                 // 171
    // Get collection for given class or parent class.                              // 172
    var Collection = doc.constructor.getCollection();                               // 173
    if (!Collection) {                                                              // 174
      throw new Error('There is no collection to save to');                         // 175
    }                                                                               // 176
                                                                                    // 177
    // Trigger "beforesave" event handlers on the current and parent classes.       // 178
    var event = new Astro.Event('beforesave');                                      // 179
    event.target = doc;                                                             // 180
    doc.constructor.emitEvent(event);                                               // 181
    // If user prevented default operation, then we have to stop here.              // 182
    if (event.defaultPrevented) {                                                   // 183
      return;                                                                       // 184
    }                                                                               // 185
                                                                                    // 186
    // Trigger "beforeinsert" or "beforeupdate" event handlers on the current       // 187
    // and parent classes.                                                          // 188
    event = new Astro.Event(doc._isNew ? 'beforeinsert' : 'beforeupdate');          // 189
    event.target = doc;                                                             // 190
    doc.constructor.emitEvent(event);                                               // 191
    // If user prevented default operation, then we have to stop here.              // 192
    if (event.defaultPrevented) {                                                   // 193
      return;                                                                       // 194
    }                                                                               // 195
                                                                                    // 196
    // Get values to update or insert.                                              // 197
    var values;                                                                     // 198
    if (doc._isNew) {                                                               // 199
      values = Astro.utils.fields.getAllValues(doc);                                // 200
    } else {                                                                        // 201
      values = doc.getModified();                                                   // 202
    }                                                                               // 203
                                                                                    // 204
    // Get the "_id" field's value.                                                 // 205
    var id = Astro.utils.fields.getValue(doc, '_id');                               // 206
    // Remove the "_id" field, if its value is empty (null) or a document is        // 207
    // already stored in the collection (we can't change id).                       // 208
    if (!values._id || !doc._isNew) {                                               // 209
      values = _.omit(values, '_id');                                               // 210
    }                                                                               // 211
                                                                                    // 212
    // Check if there are any values to update or insert. If there are no modified  // 213
    // fields, we shouldn't do anything.                                            // 214
    if (_.size(values) === 0) {                                                     // 215
      return;                                                                       // 216
    }                                                                               // 217
                                                                                    // 218
    // Add callback to arguments list if provided.                                  // 219
    var args = [];                                                                  // 220
    if (callback) {                                                                 // 221
      args.push(callback);                                                          // 222
    }                                                                               // 223
                                                                                    // 224
    var result;                                                                     // 225
    if (doc._isNew) {                                                               // 226
      // Add values to insert into the list of arguments passed to the "insert"     // 227
      // method.                                                                    // 228
      args.unshift(values);                                                         // 229
      // Insert document.                                                           // 230
      result = Collection.insert.apply(Collection, args);                           // 231
      Astro.utils.fields.setValue(doc, '_id', result);                              // 232
    } else {                                                                        // 233
      // Add selector and modifier at the beginning of the arguments list. Right    // 234
      // now in the array is a callback function (if provided).                     // 235
      args.unshift({ // Selector.                                                   // 236
        _id: id                                                                     // 237
      }, { // Modifier.                                                             // 238
        $set: values                                                                // 239
      });                                                                           // 240
      // Update document.                                                           // 241
      result = Collection.update.apply(Collection, args);                           // 242
    }                                                                               // 243
                                                                                    // 244
    // Copy all values to the "_original" property so that we are starting with     // 245
    // the clean object without modifications (there is no diff between current     // 246
    // values and "_original").                                                     // 247
    doc._original = EJSON.clone(Astro.utils.fields.getAllValues(doc));              // 248
                                                                                    // 249
    // Trigger "afterinsert" or "afterupdate" event handlers on the current and     // 250
    // parent classes.                                                              // 251
    var event = new Astro.Event(doc._isNew ? 'afterinsert' : 'afterupdate');        // 252
    event.target = doc;                                                             // 253
    doc.constructor.emitEvent(event);                                               // 254
    // Trigger "aftersave" event handlers on the current and parent classes.        // 255
    var event = new Astro.Event('aftersave');                                       // 256
    event.target = doc;                                                             // 257
    doc.constructor.emitEvent(event);                                               // 258
                                                                                    // 259
    // Change the "_isNew" flag to "false". Now the document is not new, it has     // 260
    // just been saved.                                                             // 261
    doc._isNew = false;                                                             // 262
                                                                                    // 263
    // Return result of executing Mongo query.                                      // 264
    return result;                                                                  // 265
  },                                                                                // 266
                                                                                    // 267
  remove: function(callback) {                                                      // 268
    var doc = this;                                                                 // 269
    // Get collection for given class or parent class.                              // 270
    var Collection = doc.constructor.getCollection();                               // 271
    if (!Collection) {                                                              // 272
      throw new Error('There is no collection to remove from');                     // 273
    }                                                                               // 274
                                                                                    // 275
    // Remove only when document has the "_id" field (it's persisted).              // 276
    var id = Astro.utils.fields.getValue(doc, '_id');                               // 277
    if (!id) {                                                                      // 278
      return;                                                                       // 279
    }                                                                               // 280
                                                                                    // 281
    // Trigger "beforeremove" event handlers on the current and parent classes.     // 282
    var event = new Astro.Event('beforeremove');                                    // 283
    event.target = doc;                                                             // 284
    doc.constructor.emitEvent(event);                                               // 285
                                                                                    // 286
    // If user prevented default operation, then we have to stop here.              // 287
    if (event.defaultPrevented) {                                                   // 288
      return;                                                                       // 289
    }                                                                               // 290
                                                                                    // 291
    // Add selector to arguments list.                                              // 292
    var args = [];                                                                  // 293
    args.push({                                                                     // 294
      _id: id                                                                       // 295
    });                                                                             // 296
    // Add callback to arguments list if provided.                                  // 297
    if (callback) {                                                                 // 298
      args.push(callback);                                                          // 299
    }                                                                               // 300
                                                                                    // 301
    // Remove document and save result.                                             // 302
    var result = Collection.remove.apply(Collection, args);                         // 303
                                                                                    // 304
    // Trigger "afterremove" event handlers on the current and parent classes.      // 305
    var event = new Astro.Event('afterremove');                                     // 306
    event.target = doc;                                                             // 307
    doc.constructor.emitEvent(event);                                               // 308
                                                                                    // 309
    // Clear "_id" attribute and "_original" object, so that user can save          // 310
    // document one more time.                                                      // 311
    Astro.utils.fields.setValue(doc, '_id', null);                                  // 312
    doc._original = {};                                                             // 313
                                                                                    // 314
    // Return result of removing document.                                          // 315
    return result;                                                                  // 316
  },                                                                                // 317
                                                                                    // 318
  reload: function() {                                                              // 319
    var doc = this;                                                                 // 320
    // Get collection for given class or parent class.                              // 321
    var Collection = doc.constructor.getCollection();                               // 322
    if (!Collection) {                                                              // 323
      throw new Error('There is no collection to reload the document from');        // 324
    }                                                                               // 325
                                                                                    // 326
    // The document has to be already saved in the collection.                      // 327
    var id = Astro.utils.fields.getValue(doc, '_id');                               // 328
    if (id) {                                                                       // 329
      // Get new values from collection without the transformation.                 // 330
      var attrs = Collection.findOne(id, {                                          // 331
        transform: null                                                             // 332
      });                                                                           // 333
                                                                                    // 334
      // Init instance with the new values from the collection.                     // 335
      defaultConstructor.call(doc, attrs);                                          // 336
                                                                                    // 337
      // Set the "_isNew" flag back to false.                                       // 338
      doc._isNew = false;                                                           // 339
    }                                                                               // 340
  },                                                                                // 341
                                                                                    // 342
  copy: function(save) {                                                            // 343
    var doc = this;                                                                 // 344
    save = save || false;                                                           // 345
                                                                                    // 346
    // Use EJSON to clone object.                                                   // 347
    var copy = EJSON.clone(doc);                                                    // 348
                                                                                    // 349
    // Remove the "_id" value and set the "_isNew" flag to false so that it will    // 350
    // save the object as a new document instead updating the old one.              // 351
    Astro.utils.fields.setValue(copy, '_id', null);                                 // 352
    copy._original._id = null;                                                      // 353
    copy._isNew = true;                                                             // 354
                                                                                    // 355
    if (save) {                                                                     // 356
      copy.save();                                                                  // 357
    }                                                                               // 358
                                                                                    // 359
    return copy;                                                                    // 360
  }                                                                                 // 361
};                                                                                  // 362
                                                                                    // 363
fieldsOnInitModule = function() {                                                   // 364
  _.extend(Astro.BaseClass.prototype, methods);                                     // 365
};                                                                                  // 366
                                                                                    // 367
//////////////////////////////////////////////////////////////////////////////////////     // 1843
                                                                                           // 1844
}).call(this);                                                                             // 1845
                                                                                           // 1846
                                                                                           // 1847
                                                                                           // 1848
                                                                                           // 1849
                                                                                           // 1850
                                                                                           // 1851
(function () {                                                                             // 1852
                                                                                           // 1853
//////////////////////////////////////////////////////////////////////////////////////     // 1854
//                                                                                  //     // 1855
// packages/jagi:astronomy/lib/modules/fields/init_class.js                         //     // 1856
//                                                                                  //     // 1857
//////////////////////////////////////////////////////////////////////////////////////     // 1858
                                                                                    //     // 1859
var checks = {                                                                      // 1   // 1860
  schemaDefinition: function(schemaDefinition) {                                    // 2   // 1861
    // Check if fields definition is provided.                                      // 3   // 1862
    if (!_.has(schemaDefinition, 'fields')) {                                       // 4   // 1863
      throw new Error('The fields definition has to be provided');                  // 5   // 1864
    }                                                                               // 6   // 1865
                                                                                    // 7   // 1866
    // Check if the amount of fields is at least 1.                                 // 8   // 1867
    if (_.size(schemaDefinition.fields) === 0 && !this.getParent()) {               // 9   // 1868
      throw new Error('At least one field has to be defined');                      // 10  // 1869
    }                                                                               // 11  // 1870
  },                                                                                // 12  // 1871
                                                                                    // 13  // 1872
  fieldNameOrPattern: function(fieldNameOrPattern) {                                // 14  // 1873
    if (!_.isString(fieldNameOrPattern)) {                                          // 15  // 1874
      throw new Error(                                                              // 16  // 1875
        'The field name or pattern in the "' + this.getName() +                     // 17  // 1876
        '" class schema has to be a string'                                         // 18  // 1877
      );                                                                            // 19  // 1878
    }                                                                               // 20  // 1879
  },                                                                                // 21  // 1880
                                                                                    // 22  // 1881
  exists: function(fieldNameOrPattern) {                                            // 23  // 1882
    if (_.has(this.schema.fields, fieldNameOrPattern)) {                            // 24  // 1883
      throw new Error(                                                              // 25  // 1884
        'The "' + fieldNameOrPattern +                                              // 26  // 1885
        '" field name or pattern had already been defined in the "' +               // 27  // 1886
        this.getName() + '" class schema'                                           // 28  // 1887
      );                                                                            // 29  // 1888
    }                                                                               // 30  // 1889
  }                                                                                 // 31  // 1890
};                                                                                  // 32  // 1891
                                                                                    // 33  // 1892
var methods = {                                                                     // 34  // 1893
  hasField: function(fieldNameOrPattern) {                                          // 35  // 1894
    // Check if the field name had been provided and is a string.                   // 36  // 1895
    checks.fieldNameOrPattern.call(this, fieldNameOrPattern);                       // 37  // 1896
                                                                                    // 38  // 1897
    return _.has(this.schema.fields, fieldNameOrPattern);                           // 39  // 1898
  },                                                                                // 40  // 1899
                                                                                    // 41  // 1900
  getField: function(fieldNameOrPattern) {                                          // 42  // 1901
    // Check if the field name had been provided and is a string.                   // 43  // 1902
    checks.fieldNameOrPattern.call(this, fieldNameOrPattern);                       // 44  // 1903
                                                                                    // 45  // 1904
    return this.schema.fields[fieldNameOrPattern];                                  // 46  // 1905
  },                                                                                // 47  // 1906
                                                                                    // 48  // 1907
  getFields: function() {                                                           // 49  // 1908
    return this.schema.fields;                                                      // 50  // 1909
  },                                                                                // 51  // 1910
                                                                                    // 52  // 1911
  addField: function(fieldNameOrPattern, fieldDefinition) {                         // 53  // 1912
    // Check if the field name had been provided and is a string.                   // 54  // 1913
    checks.fieldNameOrPattern.call(this, fieldNameOrPattern);                       // 55  // 1914
    // Check if the field with the given name had already been defined.             // 56  // 1915
    checks.exists.call(this, fieldNameOrPattern);                                   // 57  // 1916
                                                                                    // 58  // 1917
    var destFieldDefinition = {                                                     // 59  // 1918
      type: null,                                                                   // 60  // 1919
      default: null                                                                 // 61  // 1920
    };                                                                              // 62  // 1921
                                                                                    // 63  // 1922
    if (_.isUndefined(fieldDefinition) || _.isNull(fieldDefinition)) {              // 64  // 1923
                                                                                    // 65  // 1924
      // If "fieldDefinition" is an "undefined" or "null" then take default         // 66  // 1925
      // field's definition.                                                        // 67  // 1926
                                                                                    // 68  // 1927
    } else if (_.isString(fieldDefinition)) {                                       // 69  // 1928
                                                                                    // 70  // 1929
      // If "fieldDefinition" is a "string" then set it as a type if given type     // 71  // 1930
      // exists.                                                                    // 72  // 1931
      destFieldDefinition.type = fieldDefinition;                                   // 73  // 1932
                                                                                    // 74  // 1933
    } else if (_.isObject(fieldDefinition)) {                                       // 75  // 1934
                                                                                    // 76  // 1935
      // If "fieldDefinition" is an "object" then pick the "type" and "default"     // 77  // 1936
      // attributes.                                                                // 78  // 1937
      destFieldDefinition.type = fieldDefinition.type || null;                      // 79  // 1938
      if (!_.isUndefined(fieldDefinition.default)) {                                // 80  // 1939
        destFieldDefinition.default = fieldDefinition.default                       // 81  // 1940
      }                                                                             // 82  // 1941
                                                                                    // 83  // 1942
    } else {                                                                        // 84  // 1943
      throw new Error(                                                              // 85  // 1944
        'The field definition in the "' + this.getName() +                          // 86  // 1945
        '" class schema has to be a string, an object or left empty'                // 87  // 1946
      );                                                                            // 88  // 1947
    }                                                                               // 89  // 1948
                                                                                    // 90  // 1949
    // Check whether given field type exists.                                       // 91  // 1950
    if (                                                                            // 92  // 1951
      destFieldDefinition.type !== null &&                                          // 93  // 1952
      !_.has(Astro.types, destFieldDefinition.type)                                 // 94  // 1953
    ) {                                                                             // 95  // 1954
      throw new Error(                                                              // 96  // 1955
        'The "' + destFieldDefinition.type +                                        // 97  // 1956
        '" field type for "' + fieldNameOrPattern +                                 // 98  // 1957
        '" field in the "' + this.getName() +                                       // 99  // 1958
        '" class schema does not exist'                                             // 100
      );                                                                            // 101
    }                                                                               // 102
                                                                                    // 103
    // Add field definition to the schema.                                          // 104
    this.schema.fields[fieldNameOrPattern] = destFieldDefinition;                   // 105
                                                                                    // 106
    // Add name to the appropriate group.                                           // 107
    if (Astro.utils.fields.isPattern(fieldNameOrPattern)) {                         // 108
      this.schema.fieldsPatterns.push(fieldNameOrPattern);                          // 109
    } else {                                                                        // 110
      this.schema.fieldsNames.push(fieldNameOrPattern);                             // 111
                                                                                    // 112
      // If we don't support legacy browsers, then define getter and setter.        // 113
      if (!Astro.config.supportLegacyBrowsers) {                                    // 114
        Object.defineProperty(this.prototype, fieldNameOrPattern, {                 // 115
          get: function() {                                                         // 116
            return this.get(fieldNameOrPattern);                                    // 117
          },                                                                        // 118
          set: function(value) {                                                    // 119
            this.set(fieldNameOrPattern, value);                                    // 120
          }                                                                         // 121
        });                                                                         // 122
      }                                                                             // 123
    }                                                                               // 124
  },                                                                                // 125
                                                                                    // 126
  addFields: function(fieldsNamesOrPatterns) {                                      // 127
    if (_.isArray(fieldsNamesOrPatterns)) {                                         // 128
                                                                                    // 129
      _.each(fieldsNamesOrPatterns, function(fieldNameOrPattern) {                  // 130
        this.addField(fieldNameOrPattern);                                          // 131
      }, this);                                                                     // 132
                                                                                    // 133
    } else if (_.isObject(fieldsNamesOrPatterns)) {                                 // 134
                                                                                    // 135
      _.each(                                                                       // 136
        fieldsNamesOrPatterns,                                                      // 137
        function(fieldDefinition, fieldNameOrPattern) {                             // 138
          this.addField(                                                            // 139
            fieldNameOrPattern,                                                     // 140
            fieldsNamesOrPatterns[fieldNameOrPattern]                               // 141
          );                                                                        // 142
        },                                                                          // 143
        this                                                                        // 144
      );                                                                            // 145
                                                                                    // 146
    } else {                                                                        // 147
                                                                                    // 148
      // Fields definition has to be an object or an array.                         // 149
      throw new Error(                                                              // 150
        'The fields definition in the "' + this.getName() +                         // 151
        '" class schema has to be an array or an object'                            // 152
      );                                                                            // 153
                                                                                    // 154
    }                                                                               // 155
  }                                                                                 // 156
};                                                                                  // 157
                                                                                    // 158
fieldsOnInitClass = function(schemaDefinition) {                                    // 159
  checks.schemaDefinition.call(this, schemaDefinition);                             // 160
                                                                                    // 161
  var Class = this;                                                                 // 162
                                                                                    // 163
  // Add fields methods to the class.                                               // 164
  _.extend(Class, methods);                                                         // 165
                                                                                    // 166
  // Add the "fields" attribute to the schema.                                      // 167
  Class.schema.fields = {};                                                         // 168
  // Add the "fieldsNames" attribute to the schema.                                 // 169
  Class.schema.fieldsNames = [];                                                    // 170
  // Add the "fieldsPatterns" attribute to the schema.                              // 171
  Class.schema.fieldsPatterns = [];                                                 // 172
                                                                                    // 173
  // Add mandatory "_id" field.                                                     // 174
  Class.addField('_id', {                                                           // 175
    type: 'string',                                                                 // 176
    default: undefined                                                              // 177
  });                                                                               // 178
                                                                                    // 179
  // Add field for storing child class name.                                        // 180
  if (Class.getParent()) {                                                          // 181
    Class.addField('_type', {                                                       // 182
      type: 'string',                                                               // 183
      default: Class.getName()                                                      // 184
    });                                                                             // 185
  }                                                                                 // 186
                                                                                    // 187
  // Add fields from the schema definition.                                         // 188
  Class.addFields(schemaDefinition.fields);                                         // 189
};                                                                                  // 190
                                                                                    // 191
//////////////////////////////////////////////////////////////////////////////////////     // 2051
                                                                                           // 2052
}).call(this);                                                                             // 2053
                                                                                           // 2054
                                                                                           // 2055
                                                                                           // 2056
                                                                                           // 2057
                                                                                           // 2058
                                                                                           // 2059
(function () {                                                                             // 2060
                                                                                           // 2061
//////////////////////////////////////////////////////////////////////////////////////     // 2062
//                                                                                  //     // 2063
// packages/jagi:astronomy/lib/modules/fields/module.js                             //     // 2064
//                                                                                  //     // 2065
//////////////////////////////////////////////////////////////////////////////////////     // 2066
                                                                                    //     // 2067
Astro.createModule({                                                                // 1   // 2068
  name: 'fields',                                                                   // 2   // 2069
  init: fieldsOnInitModule,                                                         // 3   // 2070
  events: {                                                                         // 4   // 2071
    initclass: fieldsOnInitClass                                                    // 5   // 2072
  }                                                                                 // 6   // 2073
});                                                                                 // 7   // 2074
                                                                                    // 8   // 2075
//////////////////////////////////////////////////////////////////////////////////////     // 2076
                                                                                           // 2077
}).call(this);                                                                             // 2078
                                                                                           // 2079
                                                                                           // 2080
                                                                                           // 2081
                                                                                           // 2082
                                                                                           // 2083
                                                                                           // 2084
(function () {                                                                             // 2085
                                                                                           // 2086
//////////////////////////////////////////////////////////////////////////////////////     // 2087
//                                                                                  //     // 2088
// packages/jagi:astronomy/lib/modules/methods/init_class.js                        //     // 2089
//                                                                                  //     // 2090
//////////////////////////////////////////////////////////////////////////////////////     // 2091
                                                                                    //     // 2092
var checks = {};                                                                    // 1   // 2093
                                                                                    // 2   // 2094
checks.methodName = function(methodName) {                                          // 3   // 2095
  if (!_.isString(methodName)) {                                                    // 4   // 2096
    throw new Error(                                                                // 5   // 2097
      'The method name in the "' + this.getName() +                                 // 6   // 2098
      '" class schema has to be a string'                                           // 7   // 2099
    );                                                                              // 8   // 2100
  }                                                                                 // 9   // 2101
};                                                                                  // 10  // 2102
                                                                                    // 11  // 2103
checks.method = function(methodName, method) {                                      // 12  // 2104
  if (!_.isFunction(method)) {                                                      // 13  // 2105
    throw new Error(                                                                // 14  // 2106
      'The "' + methodName + '" method in the "' + this.getName() +                 // 15  // 2107
      '" class schema has to be a function'                                         // 16  // 2108
    );                                                                              // 17  // 2109
  }                                                                                 // 18  // 2110
};                                                                                  // 19  // 2111
                                                                                    // 20  // 2112
checks.methods = function(methods) {                                                // 21  // 2113
  if (!_.isObject(methods)) {                                                       // 22  // 2114
    throw new Error(                                                                // 23  // 2115
      'The methods definition in the "' + this.getName() +                          // 24  // 2116
      '" class schema has to be an object'                                          // 25  // 2117
    );                                                                              // 26  // 2118
  }                                                                                 // 27  // 2119
};                                                                                  // 28  // 2120
                                                                                    // 29  // 2121
var methods = {};                                                                   // 30  // 2122
                                                                                    // 31  // 2123
methods.hasMethod = function(methodName) {                                          // 32  // 2124
  // Check if the method name is a string.                                          // 33  // 2125
  checks.methodName.call(this, methodName);                                         // 34  // 2126
                                                                                    // 35  // 2127
  return _.has(this.schema.methods, methodName);                                    // 36  // 2128
};                                                                                  // 37  // 2129
                                                                                    // 38  // 2130
methods.getMethod = function(methodName) {                                          // 39  // 2131
  // Check if the method name is a string.                                          // 40  // 2132
  checks.methodName.call(this, methodName);                                         // 41  // 2133
                                                                                    // 42  // 2134
  return this.schema.methods[methodName];                                           // 43  // 2135
};                                                                                  // 44  // 2136
                                                                                    // 45  // 2137
methods.getMethods = function() {                                                   // 46  // 2138
  return this.schema.methods;                                                       // 47  // 2139
};                                                                                  // 48  // 2140
                                                                                    // 49  // 2141
methods.addMethod = function(methodName, method) {                                  // 50  // 2142
  // Check if the method name is a string.                                          // 51  // 2143
  checks.methodName.call(this, methodName);                                         // 52  // 2144
  // Check if method is a function.                                                 // 53  // 2145
  checks.method.call(this, methodName, method);                                     // 54  // 2146
                                                                                    // 55  // 2147
  this.schema.methods[methodName] = method;                                         // 56  // 2148
  this.prototype[methodName] = method;                                              // 57  // 2149
};                                                                                  // 58  // 2150
                                                                                    // 59  // 2151
methods.addMethods = function(methods) {                                            // 60  // 2152
  checks.methods.call(this, methods);                                               // 61  // 2153
                                                                                    // 62  // 2154
  _.each(methods, function(method, methodName) {                                    // 63  // 2155
    this.addMethod(methodName, method);                                             // 64  // 2156
  }, this);                                                                         // 65  // 2157
};                                                                                  // 66  // 2158
                                                                                    // 67  // 2159
methodsOnInitClass = function(schemaDefinition) {                                   // 68  // 2160
  var Class = this;                                                                 // 69  // 2161
                                                                                    // 70  // 2162
  _.extend(Class, methods);                                                         // 71  // 2163
                                                                                    // 72  // 2164
  // Add the "methods" attribute to the schema.                                     // 73  // 2165
  Class.schema.methods = {};                                                        // 74  // 2166
                                                                                    // 75  // 2167
  if (_.has(schemaDefinition, 'methods')) {                                         // 76  // 2168
    Class.addMethods(schemaDefinition.methods);                                     // 77  // 2169
  }                                                                                 // 78  // 2170
};                                                                                  // 79  // 2171
                                                                                    // 80  // 2172
//////////////////////////////////////////////////////////////////////////////////////     // 2173
                                                                                           // 2174
}).call(this);                                                                             // 2175
                                                                                           // 2176
                                                                                           // 2177
                                                                                           // 2178
                                                                                           // 2179
                                                                                           // 2180
                                                                                           // 2181
(function () {                                                                             // 2182
                                                                                           // 2183
//////////////////////////////////////////////////////////////////////////////////////     // 2184
//                                                                                  //     // 2185
// packages/jagi:astronomy/lib/modules/methods/module.js                            //     // 2186
//                                                                                  //     // 2187
//////////////////////////////////////////////////////////////////////////////////////     // 2188
                                                                                    //     // 2189
Astro.createModule({                                                                // 1   // 2190
  name: 'methods',                                                                  // 2   // 2191
  events: {                                                                         // 3   // 2192
    initclass: methodsOnInitClass                                                   // 4   // 2193
  }                                                                                 // 5   // 2194
});                                                                                 // 6   // 2195
                                                                                    // 7   // 2196
//////////////////////////////////////////////////////////////////////////////////////     // 2197
                                                                                           // 2198
}).call(this);                                                                             // 2199
                                                                                           // 2200
                                                                                           // 2201
                                                                                           // 2202
                                                                                           // 2203
                                                                                           // 2204
                                                                                           // 2205
(function () {                                                                             // 2206
                                                                                           // 2207
//////////////////////////////////////////////////////////////////////////////////////     // 2208
//                                                                                  //     // 2209
// packages/jagi:astronomy/lib/modules/ejson/init_module.js                         //     // 2210
//                                                                                  //     // 2211
//////////////////////////////////////////////////////////////////////////////////////     // 2212
                                                                                    //     // 2213
var methods = {                                                                     // 1   // 2214
  typeName: function() {                                                            // 2   // 2215
    return 'Astronomy';                                                             // 3   // 2216
  },                                                                                // 4   // 2217
                                                                                    // 5   // 2218
  toJSONValue: function(args) {                                                     // 6   // 2219
    var doc = this;                                                                 // 7   // 2220
    var Class = doc.constructor;                                                    // 8   // 2221
                                                                                    // 9   // 2222
    var json = {                                                                    // 10  // 2223
      class: Class.getName(),                                                       // 11  // 2224
      original: EJSON.stringify(doc._original),                                     // 12  // 2225
      values: EJSON.stringify(                                                      // 13  // 2226
        Astro.utils.fields.getAllValues(doc, {                                      // 14  // 2227
          cast: false,                                                              // 15  // 2228
          default: false                                                            // 16  // 2229
        })                                                                          // 17  // 2230
      ),                                                                            // 18  // 2231
      isNew: doc._isNew                                                             // 19  // 2232
    };                                                                              // 20  // 2233
                                                                                    // 21  // 2234
    var event = new Astro.Event('tojsonvalue', json);                               // 22  // 2235
    event.target = doc;                                                             // 23  // 2236
    Astro.eventManager.emit(event);                                                 // 24  // 2237
                                                                                    // 25  // 2238
    return json;                                                                    // 26  // 2239
  }                                                                                 // 27  // 2240
};                                                                                  // 28  // 2241
                                                                                    // 29  // 2242
ejsonOnInitModule = function() {                                                    // 30  // 2243
  EJSON.addType('Astronomy', function(json) {                                       // 31  // 2244
    var Class = Astro.classes[json.class];                                          // 32  // 2245
    var doc = new Class();                                                          // 33  // 2246
    doc._original = EJSON.parse(json.original);                                     // 34  // 2247
    _.extend(doc, EJSON.parse(json.values));                                        // 35  // 2248
    doc._isNew = json.isNew;                                                        // 36  // 2249
                                                                                    // 37  // 2250
    var event = new Astro.Event('fromjsonvalue', json);                             // 38  // 2251
    event.target = doc;                                                             // 39  // 2252
    Astro.eventManager.emit(event);                                                 // 40  // 2253
                                                                                    // 41  // 2254
    return doc;                                                                     // 42  // 2255
  });                                                                               // 43  // 2256
                                                                                    // 44  // 2257
  _.extend(Astro.BaseClass.prototype, methods);                                     // 45  // 2258
};                                                                                  // 46  // 2259
                                                                                    // 47  // 2260
//////////////////////////////////////////////////////////////////////////////////////     // 2261
                                                                                           // 2262
}).call(this);                                                                             // 2263
                                                                                           // 2264
                                                                                           // 2265
                                                                                           // 2266
                                                                                           // 2267
                                                                                           // 2268
                                                                                           // 2269
(function () {                                                                             // 2270
                                                                                           // 2271
//////////////////////////////////////////////////////////////////////////////////////     // 2272
//                                                                                  //     // 2273
// packages/jagi:astronomy/lib/modules/ejson/module.js                              //     // 2274
//                                                                                  //     // 2275
//////////////////////////////////////////////////////////////////////////////////////     // 2276
                                                                                    //     // 2277
Astro.createModule({                                                                // 1   // 2278
  name: 'ejson',                                                                    // 2   // 2279
  init: ejsonOnInitModule                                                           // 3   // 2280
});                                                                                 // 4   // 2281
                                                                                    // 5   // 2282
//////////////////////////////////////////////////////////////////////////////////////     // 2283
                                                                                           // 2284
}).call(this);                                                                             // 2285
                                                                                           // 2286
/////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['jagi:astronomy'] = {
  Astro: Astro,
  Astronomy: Astronomy
};

})();

//# sourceMappingURL=jagi_astronomy.js.map
