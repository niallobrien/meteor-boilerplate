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

/* Package-scope variables */
var Promise;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/promise/.npm/package/node_modules/meteor-promise/promise.bundle.js                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
/******/ (function(modules) { // webpackBootstrap                                                                    // 1
/******/ 	// The module cache                                                                                        // 2
/******/ 	var installedModules = {};                                                                                 // 3
                                                                                                                     // 4
/******/ 	// The require function                                                                                    // 5
/******/ 	function __webpack_require__(moduleId) {                                                                   // 6
                                                                                                                     // 7
/******/ 		// Check if module is in cache                                                                            // 8
/******/ 		if(installedModules[moduleId])                                                                            // 9
/******/ 			return installedModules[moduleId].exports;                                                               // 10
                                                                                                                     // 11
/******/ 		// Create a new module (and put it into the cache)                                                        // 12
/******/ 		var module = installedModules[moduleId] = {                                                               // 13
/******/ 			exports: {},                                                                                             // 14
/******/ 			id: moduleId,                                                                                            // 15
/******/ 			loaded: false                                                                                            // 16
/******/ 		};                                                                                                        // 17
                                                                                                                     // 18
/******/ 		// Execute the module function                                                                            // 19
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);                      // 20
                                                                                                                     // 21
/******/ 		// Flag the module as loaded                                                                              // 22
/******/ 		module.loaded = true;                                                                                     // 23
                                                                                                                     // 24
/******/ 		// Return the exports of the module                                                                       // 25
/******/ 		return module.exports;                                                                                    // 26
/******/ 	}                                                                                                          // 27
                                                                                                                     // 28
                                                                                                                     // 29
/******/ 	// expose the modules object (__webpack_modules__)                                                         // 30
/******/ 	__webpack_require__.m = modules;                                                                           // 31
                                                                                                                     // 32
/******/ 	// expose the module cache                                                                                 // 33
/******/ 	__webpack_require__.c = installedModules;                                                                  // 34
                                                                                                                     // 35
/******/ 	// __webpack_public_path__                                                                                 // 36
/******/ 	__webpack_require__.p = "";                                                                                // 37
                                                                                                                     // 38
/******/ 	// Load entry module and return exports                                                                    // 39
/******/ 	return __webpack_require__(0);                                                                             // 40
/******/ })                                                                                                          // 41
/************************************************************************/                                           // 42
/******/ ([                                                                                                          // 43
/* 0 */                                                                                                              // 44
/***/ function(module, exports, __webpack_require__) {                                                               // 45
                                                                                                                     // 46
	// See https://github.com/then/promise#usage for an explanation of why we                                           // 47
	// require promise/domains here.                                                                                    // 48
	var MeteorPromise = __webpack_require__(1);                                                                         // 49
                                                                                                                     // 50
	var es6PromiseThen = MeteorPromise.prototype.then;                                                                  // 51
	MeteorPromise.prototype.then = function (onResolved, onRejected) {                                                  // 52
	  if (typeof Meteor === "object" &&                                                                                 // 53
	      typeof Meteor.bindEnvironment === "function") {                                                               // 54
	    return es6PromiseThen.call(                                                                                     // 55
	      this,                                                                                                         // 56
	      onResolved && Meteor.bindEnvironment(onResolved, raise),                                                      // 57
	      onRejected && Meteor.bindEnvironment(onRejected, raise)                                                       // 58
	    );                                                                                                              // 59
	  }                                                                                                                 // 60
	  return es6PromiseThen.call(this, onResolved, onRejected);                                                         // 61
	};                                                                                                                  // 62
                                                                                                                     // 63
	function raise(exception) {                                                                                         // 64
	  throw exception;                                                                                                  // 65
	}                                                                                                                   // 66
                                                                                                                     // 67
	Promise = MeteorPromise;                                                                                            // 68
                                                                                                                     // 69
                                                                                                                     // 70
/***/ },                                                                                                             // 71
/* 1 */                                                                                                              // 72
/***/ function(module, exports, __webpack_require__) {                                                               // 73
                                                                                                                     // 74
	'use strict';                                                                                                       // 75
                                                                                                                     // 76
	module.exports = __webpack_require__(2);                                                                            // 77
	__webpack_require__(3);                                                                                             // 78
	__webpack_require__(4);                                                                                             // 79
	__webpack_require__(5);                                                                                             // 80
	__webpack_require__(6);                                                                                             // 81
                                                                                                                     // 82
                                                                                                                     // 83
/***/ },                                                                                                             // 84
/* 2 */                                                                                                              // 85
/***/ function(module, exports, __webpack_require__) {                                                               // 86
                                                                                                                     // 87
	'use strict';                                                                                                       // 88
                                                                                                                     // 89
	var asap = __webpack_require__(7);                                                                                  // 90
                                                                                                                     // 91
	function noop() {}                                                                                                  // 92
                                                                                                                     // 93
	// States:                                                                                                          // 94
	//                                                                                                                  // 95
	// 0 - pending                                                                                                      // 96
	// 1 - fulfilled with _value                                                                                        // 97
	// 2 - rejected with _value                                                                                         // 98
	// 3 - adopted the state of another promise, _value                                                                 // 99
	//                                                                                                                  // 100
	// once the state is no longer pending (0) it is immutable                                                          // 101
                                                                                                                     // 102
	// All `_` prefixed properties will be reduced to `_{random number}`                                                // 103
	// at build time to obfuscate them and discourage their use.                                                        // 104
	// We don't use symbols or Object.defineProperty to fully hide them                                                 // 105
	// because the performance isn't good enough.                                                                       // 106
                                                                                                                     // 107
                                                                                                                     // 108
	// to avoid using try/catch inside critical functions, we                                                           // 109
	// extract them to here.                                                                                            // 110
	var LAST_ERROR = null;                                                                                              // 111
	var IS_ERROR = {};                                                                                                  // 112
	function getThen(obj) {                                                                                             // 113
	  try {                                                                                                             // 114
	    return obj.then;                                                                                                // 115
	  } catch (ex) {                                                                                                    // 116
	    LAST_ERROR = ex;                                                                                                // 117
	    return IS_ERROR;                                                                                                // 118
	  }                                                                                                                 // 119
	}                                                                                                                   // 120
                                                                                                                     // 121
	function tryCallOne(fn, a) {                                                                                        // 122
	  try {                                                                                                             // 123
	    return fn(a);                                                                                                   // 124
	  } catch (ex) {                                                                                                    // 125
	    LAST_ERROR = ex;                                                                                                // 126
	    return IS_ERROR;                                                                                                // 127
	  }                                                                                                                 // 128
	}                                                                                                                   // 129
	function tryCallTwo(fn, a, b) {                                                                                     // 130
	  try {                                                                                                             // 131
	    fn(a, b);                                                                                                       // 132
	  } catch (ex) {                                                                                                    // 133
	    LAST_ERROR = ex;                                                                                                // 134
	    return IS_ERROR;                                                                                                // 135
	  }                                                                                                                 // 136
	}                                                                                                                   // 137
                                                                                                                     // 138
	module.exports = Promise;                                                                                           // 139
                                                                                                                     // 140
	function Promise(fn) {                                                                                              // 141
	  if (typeof this !== 'object') {                                                                                   // 142
	    throw new TypeError('Promises must be constructed via new');                                                    // 143
	  }                                                                                                                 // 144
	  if (typeof fn !== 'function') {                                                                                   // 145
	    throw new TypeError('not a function');                                                                          // 146
	  }                                                                                                                 // 147
	  this._37 = 0;                                                                                                     // 148
	  this._12 = null;                                                                                                  // 149
	  this._59 = [];                                                                                                    // 150
	  if (fn === noop) return;                                                                                          // 151
	  doResolve(fn, this);                                                                                              // 152
	}                                                                                                                   // 153
	Promise._99 = noop;                                                                                                 // 154
                                                                                                                     // 155
	Promise.prototype.then = function(onFulfilled, onRejected) {                                                        // 156
	  if (this.constructor !== Promise) {                                                                               // 157
	    return safeThen(this, onFulfilled, onRejected);                                                                 // 158
	  }                                                                                                                 // 159
	  var res = new Promise(noop);                                                                                      // 160
	  handle(this, new Handler(onFulfilled, onRejected, res));                                                          // 161
	  return res;                                                                                                       // 162
	};                                                                                                                  // 163
                                                                                                                     // 164
	function safeThen(self, onFulfilled, onRejected) {                                                                  // 165
	  return new self.constructor(function (resolve, reject) {                                                          // 166
	    var res = new Promise(noop);                                                                                    // 167
	    res.then(resolve, reject);                                                                                      // 168
	    handle(self, new Handler(onFulfilled, onRejected, res));                                                        // 169
	  });                                                                                                               // 170
	};                                                                                                                  // 171
	function handle(self, deferred) {                                                                                   // 172
	  while (self._37 === 3) {                                                                                          // 173
	    self = self._12;                                                                                                // 174
	  }                                                                                                                 // 175
	  if (self._37 === 0) {                                                                                             // 176
	    self._59.push(deferred);                                                                                        // 177
	    return;                                                                                                         // 178
	  }                                                                                                                 // 179
	  asap(function() {                                                                                                 // 180
	    var cb = self._37 === 1 ? deferred.onFulfilled : deferred.onRejected;                                           // 181
	    if (cb === null) {                                                                                              // 182
	      if (self._37 === 1) {                                                                                         // 183
	        resolve(deferred.promise, self._12);                                                                        // 184
	      } else {                                                                                                      // 185
	        reject(deferred.promise, self._12);                                                                         // 186
	      }                                                                                                             // 187
	      return;                                                                                                       // 188
	    }                                                                                                               // 189
	    var ret = tryCallOne(cb, self._12);                                                                             // 190
	    if (ret === IS_ERROR) {                                                                                         // 191
	      reject(deferred.promise, LAST_ERROR);                                                                         // 192
	    } else {                                                                                                        // 193
	      resolve(deferred.promise, ret);                                                                               // 194
	    }                                                                                                               // 195
	  });                                                                                                               // 196
	}                                                                                                                   // 197
	function resolve(self, newValue) {                                                                                  // 198
	  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
	  if (newValue === self) {                                                                                          // 200
	    return reject(                                                                                                  // 201
	      self,                                                                                                         // 202
	      new TypeError('A promise cannot be resolved with itself.')                                                    // 203
	    );                                                                                                              // 204
	  }                                                                                                                 // 205
	  if (                                                                                                              // 206
	    newValue &&                                                                                                     // 207
	    (typeof newValue === 'object' || typeof newValue === 'function')                                                // 208
	  ) {                                                                                                               // 209
	    var then = getThen(newValue);                                                                                   // 210
	    if (then === IS_ERROR) {                                                                                        // 211
	      return reject(self, LAST_ERROR);                                                                              // 212
	    }                                                                                                               // 213
	    if (                                                                                                            // 214
	      then === self.then &&                                                                                         // 215
	      newValue instanceof Promise                                                                                   // 216
	    ) {                                                                                                             // 217
	      self._37 = 3;                                                                                                 // 218
	      self._12 = newValue;                                                                                          // 219
	      finale(self);                                                                                                 // 220
	      return;                                                                                                       // 221
	    } else if (typeof then === 'function') {                                                                        // 222
	      doResolve(then.bind(newValue), self);                                                                         // 223
	      return;                                                                                                       // 224
	    }                                                                                                               // 225
	  }                                                                                                                 // 226
	  self._37 = 1;                                                                                                     // 227
	  self._12 = newValue;                                                                                              // 228
	  finale(self);                                                                                                     // 229
	}                                                                                                                   // 230
                                                                                                                     // 231
	function reject(self, newValue) {                                                                                   // 232
	  self._37 = 2;                                                                                                     // 233
	  self._12 = newValue;                                                                                              // 234
	  finale(self);                                                                                                     // 235
	}                                                                                                                   // 236
	function finale(self) {                                                                                             // 237
	  for (var i = 0; i < self._59.length; i++) {                                                                       // 238
	    handle(self, self._59[i]);                                                                                      // 239
	  }                                                                                                                 // 240
	  self._59 = null;                                                                                                  // 241
	}                                                                                                                   // 242
                                                                                                                     // 243
	function Handler(onFulfilled, onRejected, promise){                                                                 // 244
	  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;                                        // 245
	  this.onRejected = typeof onRejected === 'function' ? onRejected : null;                                           // 246
	  this.promise = promise;                                                                                           // 247
	}                                                                                                                   // 248
                                                                                                                     // 249
	/**                                                                                                                 // 250
	 * Take a potentially misbehaving resolver function and make sure                                                   // 251
	 * onFulfilled and onRejected are only called once.                                                                 // 252
	 *                                                                                                                  // 253
	 * Makes no guarantees about asynchrony.                                                                            // 254
	 */                                                                                                                 // 255
	function doResolve(fn, promise) {                                                                                   // 256
	  var done = false;                                                                                                 // 257
	  var res = tryCallTwo(fn, function (value) {                                                                       // 258
	    if (done) return;                                                                                               // 259
	    done = true;                                                                                                    // 260
	    resolve(promise, value);                                                                                        // 261
	  }, function (reason) {                                                                                            // 262
	    if (done) return;                                                                                               // 263
	    done = true;                                                                                                    // 264
	    reject(promise, reason);                                                                                        // 265
	  })                                                                                                                // 266
	  if (!done && res === IS_ERROR) {                                                                                  // 267
	    done = true;                                                                                                    // 268
	    reject(promise, LAST_ERROR);                                                                                    // 269
	  }                                                                                                                 // 270
	}                                                                                                                   // 271
                                                                                                                     // 272
                                                                                                                     // 273
/***/ },                                                                                                             // 274
/* 3 */                                                                                                              // 275
/***/ function(module, exports, __webpack_require__) {                                                               // 276
                                                                                                                     // 277
	'use strict';                                                                                                       // 278
                                                                                                                     // 279
	var Promise = __webpack_require__(2);                                                                               // 280
                                                                                                                     // 281
	module.exports = Promise;                                                                                           // 282
	Promise.prototype.done = function (onFulfilled, onRejected) {                                                       // 283
	  var self = arguments.length ? this.then.apply(this, arguments) : this;                                            // 284
	  self.then(null, function (err) {                                                                                  // 285
	    setTimeout(function () {                                                                                        // 286
	      throw err;                                                                                                    // 287
	    }, 0);                                                                                                          // 288
	  });                                                                                                               // 289
	};                                                                                                                  // 290
                                                                                                                     // 291
                                                                                                                     // 292
/***/ },                                                                                                             // 293
/* 4 */                                                                                                              // 294
/***/ function(module, exports, __webpack_require__) {                                                               // 295
                                                                                                                     // 296
	'use strict';                                                                                                       // 297
                                                                                                                     // 298
	var Promise = __webpack_require__(2);                                                                               // 299
                                                                                                                     // 300
	module.exports = Promise;                                                                                           // 301
	Promise.prototype['finally'] = function (f) {                                                                       // 302
	  return this.then(function (value) {                                                                               // 303
	    return Promise.resolve(f()).then(function () {                                                                  // 304
	      return value;                                                                                                 // 305
	    });                                                                                                             // 306
	  }, function (err) {                                                                                               // 307
	    return Promise.resolve(f()).then(function () {                                                                  // 308
	      throw err;                                                                                                    // 309
	    });                                                                                                             // 310
	  });                                                                                                               // 311
	};                                                                                                                  // 312
                                                                                                                     // 313
                                                                                                                     // 314
/***/ },                                                                                                             // 315
/* 5 */                                                                                                              // 316
/***/ function(module, exports, __webpack_require__) {                                                               // 317
                                                                                                                     // 318
	'use strict';                                                                                                       // 319
                                                                                                                     // 320
	//This file contains the ES6 extensions to the core Promises/A+ API                                                 // 321
                                                                                                                     // 322
	var Promise = __webpack_require__(2);                                                                               // 323
                                                                                                                     // 324
	module.exports = Promise;                                                                                           // 325
                                                                                                                     // 326
	/* Static Functions */                                                                                              // 327
                                                                                                                     // 328
	var TRUE = valuePromise(true);                                                                                      // 329
	var FALSE = valuePromise(false);                                                                                    // 330
	var NULL = valuePromise(null);                                                                                      // 331
	var UNDEFINED = valuePromise(undefined);                                                                            // 332
	var ZERO = valuePromise(0);                                                                                         // 333
	var EMPTYSTRING = valuePromise('');                                                                                 // 334
                                                                                                                     // 335
	function valuePromise(value) {                                                                                      // 336
	  var p = new Promise(Promise._99);                                                                                 // 337
	  p._37 = 1;                                                                                                        // 338
	  p._12 = value;                                                                                                    // 339
	  return p;                                                                                                         // 340
	}                                                                                                                   // 341
	Promise.resolve = function (value) {                                                                                // 342
	  if (value instanceof Promise) return value;                                                                       // 343
                                                                                                                     // 344
	  if (value === null) return NULL;                                                                                  // 345
	  if (value === undefined) return UNDEFINED;                                                                        // 346
	  if (value === true) return TRUE;                                                                                  // 347
	  if (value === false) return FALSE;                                                                                // 348
	  if (value === 0) return ZERO;                                                                                     // 349
	  if (value === '') return EMPTYSTRING;                                                                             // 350
                                                                                                                     // 351
	  if (typeof value === 'object' || typeof value === 'function') {                                                   // 352
	    try {                                                                                                           // 353
	      var then = value.then;                                                                                        // 354
	      if (typeof then === 'function') {                                                                             // 355
	        return new Promise(then.bind(value));                                                                       // 356
	      }                                                                                                             // 357
	    } catch (ex) {                                                                                                  // 358
	      return new Promise(function (resolve, reject) {                                                               // 359
	        reject(ex);                                                                                                 // 360
	      });                                                                                                           // 361
	    }                                                                                                               // 362
	  }                                                                                                                 // 363
	  return valuePromise(value);                                                                                       // 364
	};                                                                                                                  // 365
                                                                                                                     // 366
	Promise.all = function (arr) {                                                                                      // 367
	  var args = Array.prototype.slice.call(arr);                                                                       // 368
                                                                                                                     // 369
	  return new Promise(function (resolve, reject) {                                                                   // 370
	    if (args.length === 0) return resolve([]);                                                                      // 371
	    var remaining = args.length;                                                                                    // 372
	    function res(i, val) {                                                                                          // 373
	      if (val && (typeof val === 'object' || typeof val === 'function')) {                                          // 374
	        if (val instanceof Promise && val.then === Promise.prototype.then) {                                        // 375
	          while (val._37 === 3) {                                                                                   // 376
	            val = val._12;                                                                                          // 377
	          }                                                                                                         // 378
	          if (val._37 === 1) return res(i, val._12);                                                                // 379
	          if (val._37 === 2) reject(val._12);                                                                       // 380
	          val.then(function (val) {                                                                                 // 381
	            res(i, val);                                                                                            // 382
	          }, reject);                                                                                               // 383
	          return;                                                                                                   // 384
	        } else {                                                                                                    // 385
	          var then = val.then;                                                                                      // 386
	          if (typeof then === 'function') {                                                                         // 387
	            var p = new Promise(then.bind(val));                                                                    // 388
	            p.then(function (val) {                                                                                 // 389
	              res(i, val);                                                                                          // 390
	            }, reject);                                                                                             // 391
	            return;                                                                                                 // 392
	          }                                                                                                         // 393
	        }                                                                                                           // 394
	      }                                                                                                             // 395
	      args[i] = val;                                                                                                // 396
	      if (--remaining === 0) {                                                                                      // 397
	        resolve(args);                                                                                              // 398
	      }                                                                                                             // 399
	    }                                                                                                               // 400
	    for (var i = 0; i < args.length; i++) {                                                                         // 401
	      res(i, args[i]);                                                                                              // 402
	    }                                                                                                               // 403
	  });                                                                                                               // 404
	};                                                                                                                  // 405
                                                                                                                     // 406
	Promise.reject = function (value) {                                                                                 // 407
	  return new Promise(function (resolve, reject) {                                                                   // 408
	    reject(value);                                                                                                  // 409
	  });                                                                                                               // 410
	};                                                                                                                  // 411
                                                                                                                     // 412
	Promise.race = function (values) {                                                                                  // 413
	  return new Promise(function (resolve, reject) {                                                                   // 414
	    values.forEach(function(value){                                                                                 // 415
	      Promise.resolve(value).then(resolve, reject);                                                                 // 416
	    });                                                                                                             // 417
	  });                                                                                                               // 418
	};                                                                                                                  // 419
                                                                                                                     // 420
	/* Prototype Methods */                                                                                             // 421
                                                                                                                     // 422
	Promise.prototype['catch'] = function (onRejected) {                                                                // 423
	  return this.then(null, onRejected);                                                                               // 424
	};                                                                                                                  // 425
                                                                                                                     // 426
                                                                                                                     // 427
/***/ },                                                                                                             // 428
/* 6 */                                                                                                              // 429
/***/ function(module, exports, __webpack_require__) {                                                               // 430
                                                                                                                     // 431
	'use strict';                                                                                                       // 432
                                                                                                                     // 433
	// This file contains then/promise specific extensions that are only useful                                         // 434
	// for node.js interop                                                                                              // 435
                                                                                                                     // 436
	var Promise = __webpack_require__(2);                                                                               // 437
	var asap = __webpack_require__(7);                                                                                  // 438
                                                                                                                     // 439
	module.exports = Promise;                                                                                           // 440
                                                                                                                     // 441
	/* Static Functions */                                                                                              // 442
                                                                                                                     // 443
	Promise.denodeify = function (fn, argumentCount) {                                                                  // 444
	  argumentCount = argumentCount || Infinity;                                                                        // 445
	  return function () {                                                                                              // 446
	    var self = this;                                                                                                // 447
	    var args = Array.prototype.slice.call(arguments, 0,                                                             // 448
	        argumentCount > 0 ? argumentCount : 0);                                                                     // 449
	    return new Promise(function (resolve, reject) {                                                                 // 450
	      args.push(function (err, res) {                                                                               // 451
	        if (err) reject(err);                                                                                       // 452
	        else resolve(res);                                                                                          // 453
	      })                                                                                                            // 454
	      var res = fn.apply(self, args);                                                                               // 455
	      if (res &&                                                                                                    // 456
	        (                                                                                                           // 457
	          typeof res === 'object' ||                                                                                // 458
	          typeof res === 'function'                                                                                 // 459
	        ) &&                                                                                                        // 460
	        typeof res.then === 'function'                                                                              // 461
	      ) {                                                                                                           // 462
	        resolve(res);                                                                                               // 463
	      }                                                                                                             // 464
	    })                                                                                                              // 465
	  }                                                                                                                 // 466
	}                                                                                                                   // 467
	Promise.nodeify = function (fn) {                                                                                   // 468
	  return function () {                                                                                              // 469
	    var args = Array.prototype.slice.call(arguments);                                                               // 470
	    var callback =                                                                                                  // 471
	      typeof args[args.length - 1] === 'function' ? args.pop() : null;                                              // 472
	    var ctx = this;                                                                                                 // 473
	    try {                                                                                                           // 474
	      return fn.apply(this, arguments).nodeify(callback, ctx);                                                      // 475
	    } catch (ex) {                                                                                                  // 476
	      if (callback === null || typeof callback == 'undefined') {                                                    // 477
	        return new Promise(function (resolve, reject) {                                                             // 478
	          reject(ex);                                                                                               // 479
	        });                                                                                                         // 480
	      } else {                                                                                                      // 481
	        asap(function () {                                                                                          // 482
	          callback.call(ctx, ex);                                                                                   // 483
	        })                                                                                                          // 484
	      }                                                                                                             // 485
	    }                                                                                                               // 486
	  }                                                                                                                 // 487
	}                                                                                                                   // 488
                                                                                                                     // 489
	Promise.prototype.nodeify = function (callback, ctx) {                                                              // 490
	  if (typeof callback != 'function') return this;                                                                   // 491
                                                                                                                     // 492
	  this.then(function (value) {                                                                                      // 493
	    asap(function () {                                                                                              // 494
	      callback.call(ctx, null, value);                                                                              // 495
	    });                                                                                                             // 496
	  }, function (err) {                                                                                               // 497
	    asap(function () {                                                                                              // 498
	      callback.call(ctx, err);                                                                                      // 499
	    });                                                                                                             // 500
	  });                                                                                                               // 501
	}                                                                                                                   // 502
                                                                                                                     // 503
                                                                                                                     // 504
/***/ },                                                                                                             // 505
/* 7 */                                                                                                              // 506
/***/ function(module, exports, __webpack_require__) {                                                               // 507
                                                                                                                     // 508
	"use strict";                                                                                                       // 509
                                                                                                                     // 510
	// rawAsap provides everything we need except exception management.                                                 // 511
	var rawAsap = __webpack_require__(8);                                                                               // 512
	// RawTasks are recycled to reduce GC churn.                                                                        // 513
	var freeTasks = [];                                                                                                 // 514
	// We queue errors to ensure they are thrown in right order (FIFO).                                                 // 515
	// Array-as-queue is good enough here, since we are just dealing with exceptions.                                   // 516
	var pendingErrors = [];                                                                                             // 517
	var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);                                          // 518
                                                                                                                     // 519
	function throwFirstError() {                                                                                        // 520
	    if (pendingErrors.length) {                                                                                     // 521
	        throw pendingErrors.shift();                                                                                // 522
	    }                                                                                                               // 523
	}                                                                                                                   // 524
                                                                                                                     // 525
	/**                                                                                                                 // 526
	 * Calls a task as soon as possible after returning, in its own event, with priority                                // 527
	 * over other events like animation, reflow, and repaint. An error thrown from an                                   // 528
	 * event will not interrupt, nor even substantially slow down the processing of                                     // 529
	 * other events, but will be rather postponed to a lower priority event.                                            // 530
	 * @param {{call}} task A callable object, typically a function that takes no                                       // 531
	 * arguments.                                                                                                       // 532
	 */                                                                                                                 // 533
	module.exports = asap;                                                                                              // 534
	function asap(task) {                                                                                               // 535
	    var rawTask;                                                                                                    // 536
	    if (freeTasks.length) {                                                                                         // 537
	        rawTask = freeTasks.pop();                                                                                  // 538
	    } else {                                                                                                        // 539
	        rawTask = new RawTask();                                                                                    // 540
	    }                                                                                                               // 541
	    rawTask.task = task;                                                                                            // 542
	    rawAsap(rawTask);                                                                                               // 543
	}                                                                                                                   // 544
                                                                                                                     // 545
	// We wrap tasks with recyclable task objects.  A task object implements                                            // 546
	// `call`, just like a function.                                                                                    // 547
	function RawTask() {                                                                                                // 548
	    this.task = null;                                                                                               // 549
	}                                                                                                                   // 550
                                                                                                                     // 551
	// The sole purpose of wrapping the task is to catch the exception and recycle                                      // 552
	// the task object after its single use.                                                                            // 553
	RawTask.prototype.call = function () {                                                                              // 554
	    try {                                                                                                           // 555
	        this.task.call();                                                                                           // 556
	    } catch (error) {                                                                                               // 557
	        if (asap.onerror) {                                                                                         // 558
	            // This hook exists purely for testing purposes.                                                        // 559
	            // Its name will be periodically randomized to break any code that                                      // 560
	            // depends on its existence.                                                                            // 561
	            asap.onerror(error);                                                                                    // 562
	        } else {                                                                                                    // 563
	            // In a web browser, exceptions are not fatal. However, to avoid                                        // 564
	            // slowing down the queue of pending tasks, we rethrow the error in a                                   // 565
	            // lower priority turn.                                                                                 // 566
	            pendingErrors.push(error);                                                                              // 567
	            requestErrorThrow();                                                                                    // 568
	        }                                                                                                           // 569
	    } finally {                                                                                                     // 570
	        this.task = null;                                                                                           // 571
	        freeTasks[freeTasks.length] = this;                                                                         // 572
	    }                                                                                                               // 573
	};                                                                                                                  // 574
                                                                                                                     // 575
                                                                                                                     // 576
/***/ },                                                                                                             // 577
/* 8 */                                                                                                              // 578
/***/ function(module, exports, __webpack_require__) {                                                               // 579
                                                                                                                     // 580
	/* WEBPACK VAR INJECTION */(function(global) {"use strict";                                                         // 581
                                                                                                                     // 582
	// Use the fastest means possible to execute a task in its own turn, with                                           // 583
	// priority over other events including IO, animation, reflow, and redraw                                           // 584
	// events in browsers.                                                                                              // 585
	//                                                                                                                  // 586
	// An exception thrown by a task will permanently interrupt the processing of                                       // 587
	// subsequent tasks. The higher level `asap` function ensures that if an                                            // 588
	// exception is thrown by a task, that the task queue will continue flushing as                                     // 589
	// soon as possible, but if you use `rawAsap` directly, you are responsible to                                      // 590
	// either ensure that no exceptions are thrown from your task, or to manually                                       // 591
	// call `rawAsap.requestFlush` if an exception is thrown.                                                           // 592
	module.exports = rawAsap;                                                                                           // 593
	function rawAsap(task) {                                                                                            // 594
	    if (!queue.length) {                                                                                            // 595
	        requestFlush();                                                                                             // 596
	        flushing = true;                                                                                            // 597
	    }                                                                                                               // 598
	    // Equivalent to push, but avoids a function call.                                                              // 599
	    queue[queue.length] = task;                                                                                     // 600
	}                                                                                                                   // 601
                                                                                                                     // 602
	var queue = [];                                                                                                     // 603
	// Once a flush has been requested, no further calls to `requestFlush` are                                          // 604
	// necessary until the next `flush` completes.                                                                      // 605
	var flushing = false;                                                                                               // 606
	// `requestFlush` is an implementation-specific method that attempts to kick                                        // 607
	// off a `flush` event as quickly as possible. `flush` will attempt to exhaust                                      // 608
	// the event queue before yielding to the browser's own event loop.                                                 // 609
	var requestFlush;                                                                                                   // 610
	// The position of the next task to execute in the task queue. This is                                              // 611
	// preserved between calls to `flush` so that it can be resumed if                                                  // 612
	// a task throws an exception.                                                                                      // 613
	var index = 0;                                                                                                      // 614
	// If a task schedules additional tasks recursively, the task queue can grow                                        // 615
	// unbounded. To prevent memory exhaustion, the task queue will periodically                                        // 616
	// truncate already-completed tasks.                                                                                // 617
	var capacity = 1024;                                                                                                // 618
                                                                                                                     // 619
	// The flush function processes all tasks that have been scheduled with                                             // 620
	// `rawAsap` unless and until one of those tasks throws an exception.                                               // 621
	// If a task throws an exception, `flush` ensures that its state will remain                                        // 622
	// consistent and will resume where it left off when called again.                                                  // 623
	// However, `flush` does not make any arrangements to be called again if an                                         // 624
	// exception is thrown.                                                                                             // 625
	function flush() {                                                                                                  // 626
	    while (index < queue.length) {                                                                                  // 627
	        var currentIndex = index;                                                                                   // 628
	        // Advance the index before calling the task. This ensures that we will                                     // 629
	        // begin flushing on the next task the task throws an error.                                                // 630
	        index = index + 1;                                                                                          // 631
	        queue[currentIndex].call();                                                                                 // 632
	        // Prevent leaking memory for long chains of recursive calls to `asap`.                                     // 633
	        // If we call `asap` within tasks scheduled by `asap`, the queue will                                       // 634
	        // grow, but to avoid an O(n) walk for every task we execute, we don't                                      // 635
	        // shift tasks off the queue after they have been executed.                                                 // 636
	        // Instead, we periodically shift 1024 tasks off the queue.                                                 // 637
	        if (index > capacity) {                                                                                     // 638
	            // Manually shift all values starting at the index back to the                                          // 639
	            // beginning of the queue.                                                                              // 640
	            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {                        // 641
	                queue[scan] = queue[scan + index];                                                                  // 642
	            }                                                                                                       // 643
	            queue.length -= index;                                                                                  // 644
	            index = 0;                                                                                              // 645
	        }                                                                                                           // 646
	    }                                                                                                               // 647
	    queue.length = 0;                                                                                               // 648
	    index = 0;                                                                                                      // 649
	    flushing = false;                                                                                               // 650
	}                                                                                                                   // 651
                                                                                                                     // 652
	// `requestFlush` is implemented using a strategy based on data collected from                                      // 653
	// every available SauceLabs Selenium web driver worker at time of writing.                                         // 654
	// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593           // 655
                                                                                                                     // 656
	// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that                                        // 657
	// have WebKitMutationObserver but not un-prefixed MutationObserver.                                                // 658
	// Must use `global` instead of `window` to work in both frames and web                                             // 659
	// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.                                                 // 660
	var BrowserMutationObserver = global.MutationObserver || global.WebKitMutationObserver;                             // 661
                                                                                                                     // 662
	// MutationObservers are desirable because they have high priority and work                                         // 663
	// reliably everywhere they are implemented.                                                                        // 664
	// They are implemented in all modern browsers.                                                                     // 665
	//                                                                                                                  // 666
	// - Android 4-4.3                                                                                                  // 667
	// - Chrome 26-34                                                                                                   // 668
	// - Firefox 14-29                                                                                                  // 669
	// - Internet Explorer 11                                                                                           // 670
	// - iPad Safari 6-7.1                                                                                              // 671
	// - iPhone Safari 7-7.1                                                                                            // 672
	// - Safari 6-7                                                                                                     // 673
	if (typeof BrowserMutationObserver === "function") {                                                                // 674
	    requestFlush = makeRequestCallFromMutationObserver(flush);                                                      // 675
                                                                                                                     // 676
	// MessageChannels are desirable because they give direct access to the HTML                                        // 677
	// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera                                     // 678
	// 11-12, and in web workers in many engines.                                                                       // 679
	// Although message channels yield to any queued rendering and IO tasks, they                                       // 680
	// would be better than imposing the 4ms delay of timers.                                                           // 681
	// However, they do not work reliably in Internet Explorer or Safari.                                               // 682
                                                                                                                     // 683
	// Internet Explorer 10 is the only browser that has setImmediate but does                                          // 684
	// not have MutationObservers.                                                                                      // 685
	// Although setImmediate yields to the browser's renderer, it would be                                              // 686
	// preferrable to falling back to setTimeout since it does not have                                                 // 687
	// the minimum 4ms penalty.                                                                                         // 688
	// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and                                      // 689
	// Desktop to a lesser extent) that renders both setImmediate and                                                   // 690
	// MessageChannel useless for the purposes of ASAP.                                                                 // 691
	// https://github.com/kriskowal/q/issues/396                                                                        // 692
                                                                                                                     // 693
	// Timers are implemented universally.                                                                              // 694
	// We fall back to timers in workers in most engines, and in foreground                                             // 695
	// contexts in the following browsers.                                                                              // 696
	// However, note that even this simple case requires nuances to operate in a                                        // 697
	// broad spectrum of browsers.                                                                                      // 698
	//                                                                                                                  // 699
	// - Firefox 3-13                                                                                                   // 700
	// - Internet Explorer 6-9                                                                                          // 701
	// - iPad Safari 4.3                                                                                                // 702
	// - Lynx 2.8.7                                                                                                     // 703
	} else {                                                                                                            // 704
	    requestFlush = makeRequestCallFromTimer(flush);                                                                 // 705
	}                                                                                                                   // 706
                                                                                                                     // 707
	// `requestFlush` requests that the high priority event queue be flushed as                                         // 708
	// soon as possible.                                                                                                // 709
	// This is useful to prevent an error thrown in a task from stalling the event                                      // 710
	// queue if the exception handled by Node.js’s                                                                      // 711
	// `process.on("uncaughtException")` or by a domain.                                                                // 712
	rawAsap.requestFlush = requestFlush;                                                                                // 713
                                                                                                                     // 714
	// To request a high priority event, we induce a mutation observer by toggling                                      // 715
	// the text of a text node between "1" and "-1".                                                                    // 716
	function makeRequestCallFromMutationObserver(callback) {                                                            // 717
	    var toggle = 1;                                                                                                 // 718
	    var observer = new BrowserMutationObserver(callback);                                                           // 719
	    var node = document.createTextNode("");                                                                         // 720
	    observer.observe(node, {characterData: true});                                                                  // 721
	    return function requestCall() {                                                                                 // 722
	        toggle = -toggle;                                                                                           // 723
	        node.data = toggle;                                                                                         // 724
	    };                                                                                                              // 725
	}                                                                                                                   // 726
                                                                                                                     // 727
	// The message channel technique was discovered by Malte Ubl and was the                                            // 728
	// original foundation for this library.                                                                            // 729
	// http://www.nonblocking.io/2011/06/windownexttick.html                                                            // 730
                                                                                                                     // 731
	// Safari 6.0.5 (at least) intermittently fails to create message ports on a                                        // 732
	// page's first load. Thankfully, this version of Safari supports                                                   // 733
	// MutationObservers, so we don't need to fall back in that case.                                                   // 734
                                                                                                                     // 735
	// function makeRequestCallFromMessageChannel(callback) {                                                           // 736
	//     var channel = new MessageChannel();                                                                          // 737
	//     channel.port1.onmessage = callback;                                                                          // 738
	//     return function requestCall() {                                                                              // 739
	//         channel.port2.postMessage(0);                                                                            // 740
	//     };                                                                                                           // 741
	// }                                                                                                                // 742
                                                                                                                     // 743
	// For reasons explained above, we are also unable to use `setImmediate`                                            // 744
	// under any circumstances.                                                                                         // 745
	// Even if we were, there is another bug in Internet Explorer 10.                                                   // 746
	// It is not sufficient to assign `setImmediate` to `requestFlush` because                                          // 747
	// `setImmediate` must be called *by name* and therefore must be wrapped in a                                       // 748
	// closure.                                                                                                         // 749
	// Never forget.                                                                                                    // 750
                                                                                                                     // 751
	// function makeRequestCallFromSetImmediate(callback) {                                                             // 752
	//     return function requestCall() {                                                                              // 753
	//         setImmediate(callback);                                                                                  // 754
	//     };                                                                                                           // 755
	// }                                                                                                                // 756
                                                                                                                     // 757
	// Safari 6.0 has a problem where timers will get lost while the user is                                            // 758
	// scrolling. This problem does not impact ASAP because Safari 6.0 supports                                         // 759
	// mutation observers, so that implementation is used instead.                                                      // 760
	// However, if we ever elect to use timers in Safari, the prevalent work-around                                     // 761
	// is to add a scroll event listener that calls for a flush.                                                        // 762
                                                                                                                     // 763
	// `setTimeout` does not call the passed callback if the delay is less than                                         // 764
	// approximately 7 in web workers in Firefox 8 through 18, and sometimes not                                        // 765
	// even then.                                                                                                       // 766
                                                                                                                     // 767
	function makeRequestCallFromTimer(callback) {                                                                       // 768
	    return function requestCall() {                                                                                 // 769
	        // We dispatch a timeout with a specified delay of 0 for engines that                                       // 770
	        // can reliably accommodate that request. This will usually be snapped                                      // 771
	        // to a 4 milisecond delay, but once we're flushing, there's no delay                                       // 772
	        // between events.                                                                                          // 773
	        var timeoutHandle = setTimeout(handleTimer, 0);                                                             // 774
	        // However, since this timer gets frequently dropped in Firefox                                             // 775
	        // workers, we enlist an interval handle that will try to fire                                              // 776
	        // an event 20 times per second until it succeeds.                                                          // 777
	        var intervalHandle = setInterval(handleTimer, 50);                                                          // 778
                                                                                                                     // 779
	        function handleTimer() {                                                                                    // 780
	            // Whichever timer succeeds will cancel both timers and                                                 // 781
	            // execute the callback.                                                                                // 782
	            clearTimeout(timeoutHandle);                                                                            // 783
	            clearInterval(intervalHandle);                                                                          // 784
	            callback();                                                                                             // 785
	        }                                                                                                           // 786
	    };                                                                                                              // 787
	}                                                                                                                   // 788
                                                                                                                     // 789
	// This is for `asap.js` only.                                                                                      // 790
	// Its name will be periodically randomized to break any code that depends on                                       // 791
	// its existence.                                                                                                   // 792
	rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;                                                        // 793
                                                                                                                     // 794
	// ASAP was originally a nextTick shim included in Q. This was factored out                                         // 795
	// into this ASAP package. It was later adapted to RSVP which made further                                          // 796
	// amendments. These decisions, particularly to marginalize MessageChannel and                                      // 797
	// to capture the MutationObserver implementation in a closure, were integrated                                     // 798
	// back into ASAP proper.                                                                                           // 799
	// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js                // 800
                                                                                                                     // 801
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))                                        // 802
                                                                                                                     // 803
/***/ }                                                                                                              // 804
/******/ ]);                                                                                                         // 805
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package.promise = {
  Promise: Promise
};

})();
