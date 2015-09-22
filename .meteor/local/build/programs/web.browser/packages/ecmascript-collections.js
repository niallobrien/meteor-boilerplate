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
var Map, Set, __g, __e;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// packages/ecmascript-collections/.npm/package/node_modules/ecmascript-collections/client.js                 //
// This file is in bare mode and is not in its own closure.                                                   //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
/******/ (function(modules) { // webpackBootstrap                                                             // 1
/******/ 	// The module cache                                                                                 // 2
/******/ 	var installedModules = {};                                                                          // 3
                                                                                                              // 4
/******/ 	// The require function                                                                             // 5
/******/ 	function __webpack_require__(moduleId) {                                                            // 6
                                                                                                              // 7
/******/ 		// Check if module is in cache                                                                     // 8
/******/ 		if(installedModules[moduleId])                                                                     // 9
/******/ 			return installedModules[moduleId].exports;                                                        // 10
                                                                                                              // 11
/******/ 		// Create a new module (and put it into the cache)                                                 // 12
/******/ 		var module = installedModules[moduleId] = {                                                        // 13
/******/ 			exports: {},                                                                                      // 14
/******/ 			id: moduleId,                                                                                     // 15
/******/ 			loaded: false                                                                                     // 16
/******/ 		};                                                                                                 // 17
                                                                                                              // 18
/******/ 		// Execute the module function                                                                     // 19
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);               // 20
                                                                                                              // 21
/******/ 		// Flag the module as loaded                                                                       // 22
/******/ 		module.loaded = true;                                                                              // 23
                                                                                                              // 24
/******/ 		// Return the exports of the module                                                                // 25
/******/ 		return module.exports;                                                                             // 26
/******/ 	}                                                                                                   // 27
                                                                                                              // 28
                                                                                                              // 29
/******/ 	// expose the modules object (__webpack_modules__)                                                  // 30
/******/ 	__webpack_require__.m = modules;                                                                    // 31
                                                                                                              // 32
/******/ 	// expose the module cache                                                                          // 33
/******/ 	__webpack_require__.c = installedModules;                                                           // 34
                                                                                                              // 35
/******/ 	// __webpack_public_path__                                                                          // 36
/******/ 	__webpack_require__.p = "";                                                                         // 37
                                                                                                              // 38
/******/ 	// Load entry module and return exports                                                             // 39
/******/ 	return __webpack_require__(0);                                                                      // 40
/******/ })                                                                                                   // 41
/************************************************************************/                                    // 42
/******/ ([                                                                                                   // 43
/* 0 */                                                                                                       // 44
/***/ function(module, exports, __webpack_require__) {                                                        // 45
                                                                                                              // 46
	__webpack_require__(1);                                                                                      // 47
                                                                                                              // 48
	exports.Map = __webpack_require__(51);                                                                       // 49
	exports.Set = __webpack_require__(60);                                                                       // 50
                                                                                                              // 51
	if (typeof window === "object") {                                                                            // 52
	  Map = exports.Map;                                                                                         // 53
	  Set = exports.Set;                                                                                         // 54
	}                                                                                                            // 55
                                                                                                              // 56
                                                                                                              // 57
/***/ },                                                                                                      // 58
/* 1 */                                                                                                       // 59
/***/ function(module, exports, __webpack_require__) {                                                        // 60
                                                                                                              // 61
	__webpack_require__(2);                                                                                      // 62
	__webpack_require__(24);                                                                                     // 63
	__webpack_require__(37);                                                                                     // 64
	__webpack_require__(38);                                                                                     // 65
	__webpack_require__(40);                                                                                     // 66
	__webpack_require__(45);                                                                                     // 67
	__webpack_require__(47);                                                                                     // 68
	__webpack_require__(48);                                                                                     // 69
	__webpack_require__(50);                                                                                     // 70
	module.exports = __webpack_require__(10).Array;                                                              // 71
                                                                                                              // 72
/***/ },                                                                                                      // 73
/* 2 */                                                                                                       // 74
/***/ function(module, exports, __webpack_require__) {                                                        // 75
                                                                                                              // 76
	'use strict';                                                                                                // 77
	var $at  = __webpack_require__(3)(true);                                                                     // 78
                                                                                                              // 79
	// 21.1.3.27 String.prototype[@@iterator]()                                                                  // 80
	__webpack_require__(6)(String, 'String', function(iterated){                                                 // 81
	  this._t = String(iterated); // target                                                                      // 82
	  this._i = 0;                // next index                                                                  // 83
	// 21.1.5.2.1 %StringIteratorPrototype%.next()                                                               // 84
	}, function(){                                                                                               // 85
	  var O     = this._t                                                                                        // 86
	    , index = this._i                                                                                        // 87
	    , point;                                                                                                 // 88
	  if(index >= O.length)return {value: undefined, done: true};                                                // 89
	  point = $at(O, index);                                                                                     // 90
	  this._i += point.length;                                                                                   // 91
	  return {value: point, done: false};                                                                        // 92
	});                                                                                                          // 93
                                                                                                              // 94
/***/ },                                                                                                      // 95
/* 3 */                                                                                                       // 96
/***/ function(module, exports, __webpack_require__) {                                                        // 97
                                                                                                              // 98
	// true  -> String#at                                                                                        // 99
	// false -> String#codePointAt                                                                               // 100
	var toInteger = __webpack_require__(4)                                                                       // 101
	  , defined   = __webpack_require__(5);                                                                      // 102
	module.exports = function(TO_STRING){                                                                        // 103
	  return function(that, pos){                                                                                // 104
	    var s = String(defined(that))                                                                            // 105
	      , i = toInteger(pos)                                                                                   // 106
	      , l = s.length                                                                                         // 107
	      , a, b;                                                                                                // 108
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;                                                    // 109
	    a = s.charCodeAt(i);                                                                                     // 110
	    return a < 0xd800 || a > 0xdbff || i + 1 === l                                                           // 111
	      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff                                                    // 112
	        ? TO_STRING ? s.charAt(i) : a                                                                        // 113
	        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;                       // 114
	  };                                                                                                         // 115
	};                                                                                                           // 116
                                                                                                              // 117
/***/ },                                                                                                      // 118
/* 4 */                                                                                                       // 119
/***/ function(module, exports) {                                                                             // 120
                                                                                                              // 121
	// 7.1.4 ToInteger                                                                                           // 122
	var ceil  = Math.ceil                                                                                        // 123
	  , floor = Math.floor;                                                                                      // 124
	module.exports = function(it){                                                                               // 125
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);                                                  // 126
	};                                                                                                           // 127
                                                                                                              // 128
/***/ },                                                                                                      // 129
/* 5 */                                                                                                       // 130
/***/ function(module, exports) {                                                                             // 131
                                                                                                              // 132
	// 7.2.1 RequireObjectCoercible(argument)                                                                    // 133
	module.exports = function(it){                                                                               // 134
	  if(it == undefined)throw TypeError("Can't call method on  " + it);                                         // 135
	  return it;                                                                                                 // 136
	};                                                                                                           // 137
                                                                                                              // 138
/***/ },                                                                                                      // 139
/* 6 */                                                                                                       // 140
/***/ function(module, exports, __webpack_require__) {                                                        // 141
                                                                                                              // 142
	'use strict';                                                                                                // 143
	var LIBRARY         = __webpack_require__(7)                                                                 // 144
	  , $def            = __webpack_require__(8)                                                                 // 145
	  , $redef          = __webpack_require__(16)                                                                // 146
	  , hide            = __webpack_require__(11)                                                                // 147
	  , has             = __webpack_require__(18)                                                                // 148
	  , SYMBOL_ITERATOR = __webpack_require__(19)('iterator')                                                    // 149
	  , Iterators       = __webpack_require__(21)                                                                // 150
	  , BUGGY           = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`             // 151
	  , FF_ITERATOR     = '@@iterator'                                                                           // 152
	  , KEYS            = 'keys'                                                                                 // 153
	  , VALUES          = 'values';                                                                              // 154
	var returnThis = function(){ return this; };                                                                 // 155
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){                            // 156
	  __webpack_require__(22)(Constructor, NAME, next);                                                          // 157
	  var createMethod = function(kind){                                                                         // 158
	    switch(kind){                                                                                            // 159
	      case KEYS: return function keys(){ return new Constructor(this, kind); };                              // 160
	      case VALUES: return function values(){ return new Constructor(this, kind); };                          // 161
	    } return function entries(){ return new Constructor(this, kind); };                                      // 162
	  };                                                                                                         // 163
	  var TAG      = NAME + ' Iterator'                                                                          // 164
	    , proto    = Base.prototype                                                                              // 165
	    , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]                   // 166
	    , _default = _native || createMethod(DEFAULT)                                                            // 167
	    , methods, key;                                                                                          // 168
	  // Fix native                                                                                              // 169
	  if(_native){                                                                                               // 170
	    var IteratorPrototype = __webpack_require__(12).getProto(_default.call(new Base));                       // 171
	    // Set @@toStringTag to native iterators                                                                 // 172
	    __webpack_require__(23)(IteratorPrototype, TAG, true);                                                   // 173
	    // FF fix                                                                                                // 174
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, SYMBOL_ITERATOR, returnThis);             // 175
	  }                                                                                                          // 176
	  // Define iterator                                                                                         // 177
	  if(!LIBRARY || FORCE)hide(proto, SYMBOL_ITERATOR, _default);                                               // 178
	  // Plug for library                                                                                        // 179
	  Iterators[NAME] = _default;                                                                                // 180
	  Iterators[TAG]  = returnThis;                                                                              // 181
	  if(DEFAULT){                                                                                               // 182
	    methods = {                                                                                              // 183
	      keys:    IS_SET            ? _default : createMethod(KEYS),                                            // 184
	      values:  DEFAULT == VALUES ? _default : createMethod(VALUES),                                          // 185
	      entries: DEFAULT != VALUES ? _default : createMethod('entries')                                        // 186
	    };                                                                                                       // 187
	    if(FORCE)for(key in methods){                                                                            // 188
	      if(!(key in proto))$redef(proto, key, methods[key]);                                                   // 189
	    } else $def($def.P + $def.F * BUGGY, NAME, methods);                                                     // 190
	  }                                                                                                          // 191
	};                                                                                                           // 192
                                                                                                              // 193
/***/ },                                                                                                      // 194
/* 7 */                                                                                                       // 195
/***/ function(module, exports) {                                                                             // 196
                                                                                                              // 197
	module.exports = false;                                                                                      // 198
                                                                                                              // 199
/***/ },                                                                                                      // 200
/* 8 */                                                                                                       // 201
/***/ function(module, exports, __webpack_require__) {                                                        // 202
                                                                                                              // 203
	var global     = __webpack_require__(9)                                                                      // 204
	  , core       = __webpack_require__(10)                                                                     // 205
	  , hide       = __webpack_require__(11)                                                                     // 206
	  , $redef     = __webpack_require__(16)                                                                     // 207
	  , PROTOTYPE  = 'prototype';                                                                                // 208
	var ctx = function(fn, that){                                                                                // 209
	  return function(){                                                                                         // 210
	    return fn.apply(that, arguments);                                                                        // 211
	  };                                                                                                         // 212
	};                                                                                                           // 213
	var $def = function(type, name, source){                                                                     // 214
	  var key, own, out, exp                                                                                     // 215
	    , isGlobal = type & $def.G                                                                               // 216
	    , isProto  = type & $def.P                                                                               // 217
	    , target   = isGlobal ? global : type & $def.S                                                           // 218
	        ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]                              // 219
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});                                          // 220
	  if(isGlobal)source = name;                                                                                 // 221
	  for(key in source){                                                                                        // 222
	    // contains in native                                                                                    // 223
	    own = !(type & $def.F) && target && key in target;                                                       // 224
	    // export native or passed                                                                               // 225
	    out = (own ? target : source)[key];                                                                      // 226
	    // bind timers to global for call from export context                                                    // 227
	    if(type & $def.B && own)exp = ctx(out, global);                                                          // 228
	    else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;                          // 229
	    // extend global                                                                                         // 230
	    if(target && !own)$redef(target, key, out);                                                              // 231
	    // export                                                                                                // 232
	    if(exports[key] != out)hide(exports, key, exp);                                                          // 233
	    if(isProto)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;                                 // 234
	  }                                                                                                          // 235
	};                                                                                                           // 236
	global.core = core;                                                                                          // 237
	// type bitmap                                                                                               // 238
	$def.F = 1;  // forced                                                                                       // 239
	$def.G = 2;  // global                                                                                       // 240
	$def.S = 4;  // static                                                                                       // 241
	$def.P = 8;  // proto                                                                                        // 242
	$def.B = 16; // bind                                                                                         // 243
	$def.W = 32; // wrap                                                                                         // 244
	module.exports = $def;                                                                                       // 245
                                                                                                              // 246
/***/ },                                                                                                      // 247
/* 9 */                                                                                                       // 248
/***/ function(module, exports) {                                                                             // 249
                                                                                                              // 250
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028                                      // 251
	var UNDEFINED = 'undefined';                                                                                 // 252
	var global = module.exports = typeof window != UNDEFINED && window.Math == Math                              // 253
	  ? window : typeof self != UNDEFINED && self.Math == Math ? self : Function('return this')();               // 254
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef                                      // 255
                                                                                                              // 256
/***/ },                                                                                                      // 257
/* 10 */                                                                                                      // 258
/***/ function(module, exports) {                                                                             // 259
                                                                                                              // 260
	var core = module.exports = {};                                                                              // 261
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef                                        // 262
                                                                                                              // 263
/***/ },                                                                                                      // 264
/* 11 */                                                                                                      // 265
/***/ function(module, exports, __webpack_require__) {                                                        // 266
                                                                                                              // 267
	var $          = __webpack_require__(12)                                                                     // 268
	  , createDesc = __webpack_require__(13);                                                                    // 269
	module.exports = __webpack_require__(14) ? function(object, key, value){                                     // 270
	  return $.setDesc(object, key, createDesc(1, value));                                                       // 271
	} : function(object, key, value){                                                                            // 272
	  object[key] = value;                                                                                       // 273
	  return object;                                                                                             // 274
	};                                                                                                           // 275
                                                                                                              // 276
/***/ },                                                                                                      // 277
/* 12 */                                                                                                      // 278
/***/ function(module, exports) {                                                                             // 279
                                                                                                              // 280
	var $Object = Object;                                                                                        // 281
	module.exports = {                                                                                           // 282
	  create:     $Object.create,                                                                                // 283
	  getProto:   $Object.getPrototypeOf,                                                                        // 284
	  isEnum:     {}.propertyIsEnumerable,                                                                       // 285
	  getDesc:    $Object.getOwnPropertyDescriptor,                                                              // 286
	  setDesc:    $Object.defineProperty,                                                                        // 287
	  setDescs:   $Object.defineProperties,                                                                      // 288
	  getKeys:    $Object.keys,                                                                                  // 289
	  getNames:   $Object.getOwnPropertyNames,                                                                   // 290
	  getSymbols: $Object.getOwnPropertySymbols,                                                                 // 291
	  each:       [].forEach                                                                                     // 292
	};                                                                                                           // 293
                                                                                                              // 294
/***/ },                                                                                                      // 295
/* 13 */                                                                                                      // 296
/***/ function(module, exports) {                                                                             // 297
                                                                                                              // 298
	module.exports = function(bitmap, value){                                                                    // 299
	  return {                                                                                                   // 300
	    enumerable  : !(bitmap & 1),                                                                             // 301
	    configurable: !(bitmap & 2),                                                                             // 302
	    writable    : !(bitmap & 4),                                                                             // 303
	    value       : value                                                                                      // 304
	  };                                                                                                         // 305
	};                                                                                                           // 306
                                                                                                              // 307
/***/ },                                                                                                      // 308
/* 14 */                                                                                                      // 309
/***/ function(module, exports, __webpack_require__) {                                                        // 310
                                                                                                              // 311
	// Thank's IE8 for his funny defineProperty                                                                  // 312
	module.exports = !__webpack_require__(15)(function(){                                                        // 313
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;                              // 314
	});                                                                                                          // 315
                                                                                                              // 316
/***/ },                                                                                                      // 317
/* 15 */                                                                                                      // 318
/***/ function(module, exports) {                                                                             // 319
                                                                                                              // 320
	module.exports = function(exec){                                                                             // 321
	  try {                                                                                                      // 322
	    return !!exec();                                                                                         // 323
	  } catch(e){                                                                                                // 324
	    return true;                                                                                             // 325
	  }                                                                                                          // 326
	};                                                                                                           // 327
                                                                                                              // 328
/***/ },                                                                                                      // 329
/* 16 */                                                                                                      // 330
/***/ function(module, exports, __webpack_require__) {                                                        // 331
                                                                                                              // 332
	// add fake Function#toString                                                                                // 333
	// for correct work wrapped methods / constructors with methods like LoDash isNative                         // 334
	var global    = __webpack_require__(9)                                                                       // 335
	  , hide      = __webpack_require__(11)                                                                      // 336
	  , SRC       = __webpack_require__(17)('src')                                                               // 337
	  , TO_STRING = 'toString'                                                                                   // 338
	  , $toString = Function[TO_STRING]                                                                          // 339
	  , TPL       = ('' + $toString).split(TO_STRING);                                                           // 340
                                                                                                              // 341
	__webpack_require__(10).inspectSource = function(it){                                                        // 342
	  return $toString.call(it);                                                                                 // 343
	};                                                                                                           // 344
                                                                                                              // 345
	(module.exports = function(O, key, val, safe){                                                               // 346
	  if(typeof val == 'function'){                                                                              // 347
	    hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));                                            // 348
	    if(!('name' in val))val.name = key;                                                                      // 349
	  }                                                                                                          // 350
	  if(O === global){                                                                                          // 351
	    O[key] = val;                                                                                            // 352
	  } else {                                                                                                   // 353
	    if(!safe)delete O[key];                                                                                  // 354
	    hide(O, key, val);                                                                                       // 355
	  }                                                                                                          // 356
	})(Function.prototype, TO_STRING, function toString(){                                                       // 357
	  return typeof this == 'function' && this[SRC] || $toString.call(this);                                     // 358
	});                                                                                                          // 359
                                                                                                              // 360
/***/ },                                                                                                      // 361
/* 17 */                                                                                                      // 362
/***/ function(module, exports) {                                                                             // 363
                                                                                                              // 364
	var id = 0                                                                                                   // 365
	  , px = Math.random();                                                                                      // 366
	module.exports = function(key){                                                                              // 367
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));                     // 368
	};                                                                                                           // 369
                                                                                                              // 370
/***/ },                                                                                                      // 371
/* 18 */                                                                                                      // 372
/***/ function(module, exports) {                                                                             // 373
                                                                                                              // 374
	var hasOwnProperty = {}.hasOwnProperty;                                                                      // 375
	module.exports = function(it, key){                                                                          // 376
	  return hasOwnProperty.call(it, key);                                                                       // 377
	};                                                                                                           // 378
                                                                                                              // 379
/***/ },                                                                                                      // 380
/* 19 */                                                                                                      // 381
/***/ function(module, exports, __webpack_require__) {                                                        // 382
                                                                                                              // 383
	var store  = __webpack_require__(20)('wks')                                                                  // 384
	  , Symbol = __webpack_require__(9).Symbol;                                                                  // 385
	module.exports = function(name){                                                                             // 386
	  return store[name] || (store[name] =                                                                       // 387
	    Symbol && Symbol[name] || (Symbol || __webpack_require__(17))('Symbol.' + name));                        // 388
	};                                                                                                           // 389
                                                                                                              // 390
/***/ },                                                                                                      // 391
/* 20 */                                                                                                      // 392
/***/ function(module, exports, __webpack_require__) {                                                        // 393
                                                                                                              // 394
	var global = __webpack_require__(9)                                                                          // 395
	  , SHARED = '__core-js_shared__'                                                                            // 396
	  , store  = global[SHARED] || (global[SHARED] = {});                                                        // 397
	module.exports = function(key){                                                                              // 398
	  return store[key] || (store[key] = {});                                                                    // 399
	};                                                                                                           // 400
                                                                                                              // 401
/***/ },                                                                                                      // 402
/* 21 */                                                                                                      // 403
/***/ function(module, exports) {                                                                             // 404
                                                                                                              // 405
	module.exports = {};                                                                                         // 406
                                                                                                              // 407
/***/ },                                                                                                      // 408
/* 22 */                                                                                                      // 409
/***/ function(module, exports, __webpack_require__) {                                                        // 410
                                                                                                              // 411
	'use strict';                                                                                                // 412
	var $ = __webpack_require__(12)                                                                              // 413
	  , IteratorPrototype = {};                                                                                  // 414
                                                                                                              // 415
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()                                                              // 416
	__webpack_require__(11)(IteratorPrototype, __webpack_require__(19)('iterator'), function(){ return this; });
                                                                                                              // 418
	module.exports = function(Constructor, NAME, next){                                                          // 419
	  Constructor.prototype = $.create(IteratorPrototype, {next: __webpack_require__(13)(1,next)});              // 420
	  __webpack_require__(23)(Constructor, NAME + ' Iterator');                                                  // 421
	};                                                                                                           // 422
                                                                                                              // 423
/***/ },                                                                                                      // 424
/* 23 */                                                                                                      // 425
/***/ function(module, exports, __webpack_require__) {                                                        // 426
                                                                                                              // 427
	var has  = __webpack_require__(18)                                                                           // 428
	  , hide = __webpack_require__(11)                                                                           // 429
	  , TAG  = __webpack_require__(19)('toStringTag');                                                           // 430
                                                                                                              // 431
	module.exports = function(it, tag, stat){                                                                    // 432
	  if(it && !has(it = stat ? it : it.prototype, TAG))hide(it, TAG, tag);                                      // 433
	};                                                                                                           // 434
                                                                                                              // 435
/***/ },                                                                                                      // 436
/* 24 */                                                                                                      // 437
/***/ function(module, exports, __webpack_require__) {                                                        // 438
                                                                                                              // 439
	'use strict';                                                                                                // 440
	var ctx         = __webpack_require__(25)                                                                    // 441
	  , $def        = __webpack_require__(8)                                                                     // 442
	  , toObject    = __webpack_require__(27)                                                                    // 443
	  , call        = __webpack_require__(28)                                                                    // 444
	  , isArrayIter = __webpack_require__(31)                                                                    // 445
	  , toLength    = __webpack_require__(32)                                                                    // 446
	  , getIterFn   = __webpack_require__(33);                                                                   // 447
	$def($def.S + $def.F * !__webpack_require__(36)(function(iter){ Array.from(iter); }), 'Array', {             // 448
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)                                  // 449
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){                                // 450
	    var O       = toObject(arrayLike)                                                                        // 451
	      , C       = typeof this == 'function' ? this : Array                                                   // 452
	      , mapfn   = arguments[1]                                                                               // 453
	      , mapping = mapfn !== undefined                                                                        // 454
	      , index   = 0                                                                                          // 455
	      , iterFn  = getIterFn(O)                                                                               // 456
	      , length, result, step, iterator;                                                                      // 457
	    if(mapping)mapfn = ctx(mapfn, arguments[2], 2);                                                          // 458
	    // if object isn't iterable or it's array with default iterator - use simple case                        // 459
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){                                         // 460
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){               // 461
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;             // 462
	      }                                                                                                      // 463
	    } else {                                                                                                 // 464
	      for(result = new C(length = toLength(O.length)); length > index; index++){                             // 465
	        result[index] = mapping ? mapfn(O[index], index) : O[index];                                         // 466
	      }                                                                                                      // 467
	    }                                                                                                        // 468
	    result.length = index;                                                                                   // 469
	    return result;                                                                                           // 470
	  }                                                                                                          // 471
	});                                                                                                          // 472
                                                                                                              // 473
/***/ },                                                                                                      // 474
/* 25 */                                                                                                      // 475
/***/ function(module, exports, __webpack_require__) {                                                        // 476
                                                                                                              // 477
	// optional / simple context binding                                                                         // 478
	var aFunction = __webpack_require__(26);                                                                     // 479
	module.exports = function(fn, that, length){                                                                 // 480
	  aFunction(fn);                                                                                             // 481
	  if(that === undefined)return fn;                                                                           // 482
	  switch(length){                                                                                            // 483
	    case 1: return function(a){                                                                              // 484
	      return fn.call(that, a);                                                                               // 485
	    };                                                                                                       // 486
	    case 2: return function(a, b){                                                                           // 487
	      return fn.call(that, a, b);                                                                            // 488
	    };                                                                                                       // 489
	    case 3: return function(a, b, c){                                                                        // 490
	      return fn.call(that, a, b, c);                                                                         // 491
	    };                                                                                                       // 492
	  } return function(/* ...args */){                                                                          // 493
	      return fn.apply(that, arguments);                                                                      // 494
	    };                                                                                                       // 495
	};                                                                                                           // 496
                                                                                                              // 497
/***/ },                                                                                                      // 498
/* 26 */                                                                                                      // 499
/***/ function(module, exports) {                                                                             // 500
                                                                                                              // 501
	module.exports = function(it){                                                                               // 502
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');                                    // 503
	  return it;                                                                                                 // 504
	};                                                                                                           // 505
                                                                                                              // 506
/***/ },                                                                                                      // 507
/* 27 */                                                                                                      // 508
/***/ function(module, exports, __webpack_require__) {                                                        // 509
                                                                                                              // 510
	// 7.1.13 ToObject(argument)                                                                                 // 511
	var defined = __webpack_require__(5);                                                                        // 512
	module.exports = function(it){                                                                               // 513
	  return Object(defined(it));                                                                                // 514
	};                                                                                                           // 515
                                                                                                              // 516
/***/ },                                                                                                      // 517
/* 28 */                                                                                                      // 518
/***/ function(module, exports, __webpack_require__) {                                                        // 519
                                                                                                              // 520
	// call something on iterator step with safe closing on error                                                // 521
	var anObject = __webpack_require__(29);                                                                      // 522
	module.exports = function(iterator, fn, value, entries){                                                     // 523
	  try {                                                                                                      // 524
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);                                           // 525
	  // 7.4.6 IteratorClose(iterator, completion)                                                               // 526
	  } catch(e){                                                                                                // 527
	    var ret = iterator['return'];                                                                            // 528
	    if(ret !== undefined)anObject(ret.call(iterator));                                                       // 529
	    throw e;                                                                                                 // 530
	  }                                                                                                          // 531
	};                                                                                                           // 532
                                                                                                              // 533
/***/ },                                                                                                      // 534
/* 29 */                                                                                                      // 535
/***/ function(module, exports, __webpack_require__) {                                                        // 536
                                                                                                              // 537
	var isObject = __webpack_require__(30);                                                                      // 538
	module.exports = function(it){                                                                               // 539
	  if(!isObject(it))throw TypeError(it + ' is not an object!');                                               // 540
	  return it;                                                                                                 // 541
	};                                                                                                           // 542
                                                                                                              // 543
/***/ },                                                                                                      // 544
/* 30 */                                                                                                      // 545
/***/ function(module, exports) {                                                                             // 546
                                                                                                              // 547
	// http://jsperf.com/core-js-isobject                                                                        // 548
	module.exports = function(it){                                                                               // 549
	  return it !== null && (typeof it == 'object' || typeof it == 'function');                                  // 550
	};                                                                                                           // 551
                                                                                                              // 552
/***/ },                                                                                                      // 553
/* 31 */                                                                                                      // 554
/***/ function(module, exports, __webpack_require__) {                                                        // 555
                                                                                                              // 556
	// check on default Array iterator                                                                           // 557
	var Iterators = __webpack_require__(21)                                                                      // 558
	  , ITERATOR  = __webpack_require__(19)('iterator');                                                         // 559
	module.exports = function(it){                                                                               // 560
	  return (Iterators.Array || Array.prototype[ITERATOR]) === it;                                              // 561
	};                                                                                                           // 562
                                                                                                              // 563
/***/ },                                                                                                      // 564
/* 32 */                                                                                                      // 565
/***/ function(module, exports, __webpack_require__) {                                                        // 566
                                                                                                              // 567
	// 7.1.15 ToLength                                                                                           // 568
	var toInteger = __webpack_require__(4)                                                                       // 569
	  , min       = Math.min;                                                                                    // 570
	module.exports = function(it){                                                                               // 571
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991            // 572
	};                                                                                                           // 573
                                                                                                              // 574
/***/ },                                                                                                      // 575
/* 33 */                                                                                                      // 576
/***/ function(module, exports, __webpack_require__) {                                                        // 577
                                                                                                              // 578
	var classof   = __webpack_require__(34)                                                                      // 579
	  , ITERATOR  = __webpack_require__(19)('iterator')                                                          // 580
	  , Iterators = __webpack_require__(21);                                                                     // 581
	module.exports = __webpack_require__(10).getIteratorMethod = function(it){                                   // 582
	  if(it != undefined)return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];                      // 583
	};                                                                                                           // 584
                                                                                                              // 585
/***/ },                                                                                                      // 586
/* 34 */                                                                                                      // 587
/***/ function(module, exports, __webpack_require__) {                                                        // 588
                                                                                                              // 589
	// getting tag from 19.1.3.6 Object.prototype.toString()                                                     // 590
	var cof = __webpack_require__(35)                                                                            // 591
	  , TAG = __webpack_require__(19)('toStringTag')                                                             // 592
	  // ES3 wrong here                                                                                          // 593
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';                                             // 594
                                                                                                              // 595
	module.exports = function(it){                                                                               // 596
	  var O, T, B;                                                                                               // 597
	  return it === undefined ? 'Undefined' : it === null ? 'Null'                                               // 598
	    // @@toStringTag case                                                                                    // 599
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T                                                     // 600
	    // builtinTag case                                                                                       // 601
	    : ARG ? cof(O)                                                                                           // 602
	    // ES3 arguments fallback                                                                                // 603
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;                           // 604
	};                                                                                                           // 605
                                                                                                              // 606
/***/ },                                                                                                      // 607
/* 35 */                                                                                                      // 608
/***/ function(module, exports) {                                                                             // 609
                                                                                                              // 610
	var toString = {}.toString;                                                                                  // 611
                                                                                                              // 612
	module.exports = function(it){                                                                               // 613
	  return toString.call(it).slice(8, -1);                                                                     // 614
	};                                                                                                           // 615
                                                                                                              // 616
/***/ },                                                                                                      // 617
/* 36 */                                                                                                      // 618
/***/ function(module, exports, __webpack_require__) {                                                        // 619
                                                                                                              // 620
	var SYMBOL_ITERATOR = __webpack_require__(19)('iterator')                                                    // 621
	  , SAFE_CLOSING    = false;                                                                                 // 622
	try {                                                                                                        // 623
	  var riter = [7][SYMBOL_ITERATOR]();                                                                        // 624
	  riter['return'] = function(){ SAFE_CLOSING = true; };                                                      // 625
	  Array.from(riter, function(){ throw 2; });                                                                 // 626
	} catch(e){ /* empty */ }                                                                                    // 627
	module.exports = function(exec){                                                                             // 628
	  if(!SAFE_CLOSING)return false;                                                                             // 629
	  var safe = false;                                                                                          // 630
	  try {                                                                                                      // 631
	    var arr  = [7]                                                                                           // 632
	      , iter = arr[SYMBOL_ITERATOR]();                                                                       // 633
	    iter.next = function(){ safe = true; };                                                                  // 634
	    arr[SYMBOL_ITERATOR] = function(){ return iter; };                                                       // 635
	    exec(arr);                                                                                               // 636
	  } catch(e){ /* empty */ }                                                                                  // 637
	  return safe;                                                                                               // 638
	};                                                                                                           // 639
                                                                                                              // 640
/***/ },                                                                                                      // 641
/* 37 */                                                                                                      // 642
/***/ function(module, exports, __webpack_require__) {                                                        // 643
                                                                                                              // 644
	'use strict';                                                                                                // 645
	var $def = __webpack_require__(8);                                                                           // 646
                                                                                                              // 647
	// WebKit Array.of isn't generic                                                                             // 648
	$def($def.S + $def.F * __webpack_require__(15)(function(){                                                   // 649
	  function F(){}                                                                                             // 650
	  return !(Array.of.call(F) instanceof F);                                                                   // 651
	}), 'Array', {                                                                                               // 652
	  // 22.1.2.3 Array.of( ...items)                                                                            // 653
	  of: function of(/* ...args */){                                                                            // 654
	    var index  = 0                                                                                           // 655
	      , length = arguments.length                                                                            // 656
	      , result = new (typeof this == 'function' ? this : Array)(length);                                     // 657
	    while(length > index)result[index] = arguments[index++];                                                 // 658
	    result.length = length;                                                                                  // 659
	    return result;                                                                                           // 660
	  }                                                                                                          // 661
	});                                                                                                          // 662
                                                                                                              // 663
/***/ },                                                                                                      // 664
/* 38 */                                                                                                      // 665
/***/ function(module, exports, __webpack_require__) {                                                        // 666
                                                                                                              // 667
	__webpack_require__(39)(Array);                                                                              // 668
                                                                                                              // 669
/***/ },                                                                                                      // 670
/* 39 */                                                                                                      // 671
/***/ function(module, exports, __webpack_require__) {                                                        // 672
                                                                                                              // 673
	'use strict';                                                                                                // 674
	var $       = __webpack_require__(12)                                                                        // 675
	  , SPECIES = __webpack_require__(19)('species');                                                            // 676
	module.exports = function(C){                                                                                // 677
	  if(__webpack_require__(14) && !(SPECIES in C))$.setDesc(C, SPECIES, {                                      // 678
	    configurable: true,                                                                                      // 679
	    get: function(){ return this; }                                                                          // 680
	  });                                                                                                        // 681
	};                                                                                                           // 682
                                                                                                              // 683
/***/ },                                                                                                      // 684
/* 40 */                                                                                                      // 685
/***/ function(module, exports, __webpack_require__) {                                                        // 686
                                                                                                              // 687
	'use strict';                                                                                                // 688
	var setUnscope = __webpack_require__(41)                                                                     // 689
	  , step       = __webpack_require__(42)                                                                     // 690
	  , Iterators  = __webpack_require__(21)                                                                     // 691
	  , toIObject  = __webpack_require__(43);                                                                    // 692
                                                                                                              // 693
	// 22.1.3.4 Array.prototype.entries()                                                                        // 694
	// 22.1.3.13 Array.prototype.keys()                                                                          // 695
	// 22.1.3.29 Array.prototype.values()                                                                        // 696
	// 22.1.3.30 Array.prototype[@@iterator]()                                                                   // 697
	__webpack_require__(6)(Array, 'Array', function(iterated, kind){                                             // 698
	  this._t = toIObject(iterated); // target                                                                   // 699
	  this._i = 0;                   // next index                                                               // 700
	  this._k = kind;                // kind                                                                     // 701
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()                                                                // 702
	}, function(){                                                                                               // 703
	  var O     = this._t                                                                                        // 704
	    , kind  = this._k                                                                                        // 705
	    , index = this._i++;                                                                                     // 706
	  if(!O || index >= O.length){                                                                               // 707
	    this._t = undefined;                                                                                     // 708
	    return step(1);                                                                                          // 709
	  }                                                                                                          // 710
	  if(kind == 'keys'  )return step(0, index);                                                                 // 711
	  if(kind == 'values')return step(0, O[index]);                                                              // 712
	  return step(0, [index, O[index]]);                                                                         // 713
	}, 'values');                                                                                                // 714
                                                                                                              // 715
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)                                       // 716
	Iterators.Arguments = Iterators.Array;                                                                       // 717
                                                                                                              // 718
	setUnscope('keys');                                                                                          // 719
	setUnscope('values');                                                                                        // 720
	setUnscope('entries');                                                                                       // 721
                                                                                                              // 722
/***/ },                                                                                                      // 723
/* 41 */                                                                                                      // 724
/***/ function(module, exports, __webpack_require__) {                                                        // 725
                                                                                                              // 726
	// 22.1.3.31 Array.prototype[@@unscopables]                                                                  // 727
	var UNSCOPABLES = __webpack_require__(19)('unscopables');                                                    // 728
	if(!(UNSCOPABLES in []))__webpack_require__(11)(Array.prototype, UNSCOPABLES, {});                           // 729
	module.exports = function(key){                                                                              // 730
	  [][UNSCOPABLES][key] = true;                                                                               // 731
	};                                                                                                           // 732
                                                                                                              // 733
/***/ },                                                                                                      // 734
/* 42 */                                                                                                      // 735
/***/ function(module, exports) {                                                                             // 736
                                                                                                              // 737
	module.exports = function(done, value){                                                                      // 738
	  return {value: value, done: !!done};                                                                       // 739
	};                                                                                                           // 740
                                                                                                              // 741
/***/ },                                                                                                      // 742
/* 43 */                                                                                                      // 743
/***/ function(module, exports, __webpack_require__) {                                                        // 744
                                                                                                              // 745
	// to indexed object, toObject with fallback for non-array-like ES3 strings                                  // 746
	var IObject = __webpack_require__(44)                                                                        // 747
	  , defined = __webpack_require__(5);                                                                        // 748
	module.exports = function(it){                                                                               // 749
	  return IObject(defined(it));                                                                               // 750
	};                                                                                                           // 751
                                                                                                              // 752
/***/ },                                                                                                      // 753
/* 44 */                                                                                                      // 754
/***/ function(module, exports, __webpack_require__) {                                                        // 755
                                                                                                              // 756
	// indexed object, fallback for non-array-like ES3 strings                                                   // 757
	var cof = __webpack_require__(35);                                                                           // 758
	module.exports = 0 in Object('z') ? Object : function(it){                                                   // 759
	  return cof(it) == 'String' ? it.split('') : Object(it);                                                    // 760
	};                                                                                                           // 761
                                                                                                              // 762
/***/ },                                                                                                      // 763
/* 45 */                                                                                                      // 764
/***/ function(module, exports, __webpack_require__) {                                                        // 765
                                                                                                              // 766
	'use strict';                                                                                                // 767
	var $def     = __webpack_require__(8)                                                                        // 768
	  , toObject = __webpack_require__(27)                                                                       // 769
	  , toIndex  = __webpack_require__(46)                                                                       // 770
	  , toLength = __webpack_require__(32);                                                                      // 771
	$def($def.P, 'Array', {                                                                                      // 772
	  // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)                                   // 773
	  copyWithin: function copyWithin(target/* = 0 */, start /* = 0, end = @length */){                          // 774
	    var O     = toObject(this)                                                                               // 775
	      , len   = toLength(O.length)                                                                           // 776
	      , to    = toIndex(target, len)                                                                         // 777
	      , from  = toIndex(start, len)                                                                          // 778
	      , end   = arguments[2]                                                                                 // 779
	      , fin   = end === undefined ? len : toIndex(end, len)                                                  // 780
	      , count = Math.min(fin - from, len - to)                                                               // 781
	      , inc   = 1;                                                                                           // 782
	    if(from < to && to < from + count){                                                                      // 783
	      inc  = -1;                                                                                             // 784
	      from = from + count - 1;                                                                               // 785
	      to   = to   + count - 1;                                                                               // 786
	    }                                                                                                        // 787
	    while(count-- > 0){                                                                                      // 788
	      if(from in O)O[to] = O[from];                                                                          // 789
	      else delete O[to];                                                                                     // 790
	      to   += inc;                                                                                           // 791
	      from += inc;                                                                                           // 792
	    } return O;                                                                                              // 793
	  }                                                                                                          // 794
	});                                                                                                          // 795
	__webpack_require__(41)('copyWithin');                                                                       // 796
                                                                                                              // 797
/***/ },                                                                                                      // 798
/* 46 */                                                                                                      // 799
/***/ function(module, exports, __webpack_require__) {                                                        // 800
                                                                                                              // 801
	var toInteger = __webpack_require__(4)                                                                       // 802
	  , max       = Math.max                                                                                     // 803
	  , min       = Math.min;                                                                                    // 804
	module.exports = function(index, length){                                                                    // 805
	  index = toInteger(index);                                                                                  // 806
	  return index < 0 ? max(index + length, 0) : min(index, length);                                            // 807
	};                                                                                                           // 808
                                                                                                              // 809
/***/ },                                                                                                      // 810
/* 47 */                                                                                                      // 811
/***/ function(module, exports, __webpack_require__) {                                                        // 812
                                                                                                              // 813
	'use strict';                                                                                                // 814
	var $def     = __webpack_require__(8)                                                                        // 815
	  , toObject = __webpack_require__(27)                                                                       // 816
	  , toIndex  = __webpack_require__(46)                                                                       // 817
	  , toLength = __webpack_require__(32);                                                                      // 818
	$def($def.P, 'Array', {                                                                                      // 819
	  // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)                                      // 820
	  fill: function fill(value /*, start = 0, end = @length */){                                                // 821
	    var O      = toObject(this, true)                                                                        // 822
	      , length = toLength(O.length)                                                                          // 823
	      , index  = toIndex(arguments[1], length)                                                               // 824
	      , end    = arguments[2]                                                                                // 825
	      , endPos = end === undefined ? length : toIndex(end, length);                                          // 826
	    while(endPos > index)O[index++] = value;                                                                 // 827
	    return O;                                                                                                // 828
	  }                                                                                                          // 829
	});                                                                                                          // 830
	__webpack_require__(41)('fill');                                                                             // 831
                                                                                                              // 832
/***/ },                                                                                                      // 833
/* 48 */                                                                                                      // 834
/***/ function(module, exports, __webpack_require__) {                                                        // 835
                                                                                                              // 836
	'use strict';                                                                                                // 837
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)                                             // 838
	var KEY    = 'find'                                                                                          // 839
	  , $def   = __webpack_require__(8)                                                                          // 840
	  , forced = true                                                                                            // 841
	  , $find  = __webpack_require__(49)(5);                                                                     // 842
	// Shouldn't skip holes                                                                                      // 843
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });                                                   // 844
	$def($def.P + $def.F * forced, 'Array', {                                                                    // 845
	  find: function find(callbackfn/*, that = undefined */){                                                    // 846
	    return $find(this, callbackfn, arguments[1]);                                                            // 847
	  }                                                                                                          // 848
	});                                                                                                          // 849
	__webpack_require__(41)(KEY);                                                                                // 850
                                                                                                              // 851
/***/ },                                                                                                      // 852
/* 49 */                                                                                                      // 853
/***/ function(module, exports, __webpack_require__) {                                                        // 854
                                                                                                              // 855
	// 0 -> Array#forEach                                                                                        // 856
	// 1 -> Array#map                                                                                            // 857
	// 2 -> Array#filter                                                                                         // 858
	// 3 -> Array#some                                                                                           // 859
	// 4 -> Array#every                                                                                          // 860
	// 5 -> Array#find                                                                                           // 861
	// 6 -> Array#findIndex                                                                                      // 862
	var ctx      = __webpack_require__(25)                                                                       // 863
	  , IObject  = __webpack_require__(44)                                                                       // 864
	  , toObject = __webpack_require__(27)                                                                       // 865
	  , toLength = __webpack_require__(32);                                                                      // 866
	module.exports = function(TYPE){                                                                             // 867
	  var IS_MAP        = TYPE == 1                                                                              // 868
	    , IS_FILTER     = TYPE == 2                                                                              // 869
	    , IS_SOME       = TYPE == 3                                                                              // 870
	    , IS_EVERY      = TYPE == 4                                                                              // 871
	    , IS_FIND_INDEX = TYPE == 6                                                                              // 872
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX;                                                            // 873
	  return function($this, callbackfn, that){                                                                  // 874
	    var O      = toObject($this)                                                                             // 875
	      , self   = IObject(O)                                                                                  // 876
	      , f      = ctx(callbackfn, that, 3)                                                                    // 877
	      , length = toLength(self.length)                                                                       // 878
	      , index  = 0                                                                                           // 879
	      , result = IS_MAP ? Array(length) : IS_FILTER ? [] : undefined                                         // 880
	      , val, res;                                                                                            // 881
	    for(;length > index; index++)if(NO_HOLES || index in self){                                              // 882
	      val = self[index];                                                                                     // 883
	      res = f(val, index, O);                                                                                // 884
	      if(TYPE){                                                                                              // 885
	        if(IS_MAP)result[index] = res;            // map                                                     // 886
	        else if(res)switch(TYPE){                                                                            // 887
	          case 3: return true;                    // some                                                    // 888
	          case 5: return val;                     // find                                                    // 889
	          case 6: return index;                   // findIndex                                               // 890
	          case 2: result.push(val);               // filter                                                  // 891
	        } else if(IS_EVERY)return false;          // every                                                   // 892
	      }                                                                                                      // 893
	    }                                                                                                        // 894
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;                                     // 895
	  };                                                                                                         // 896
	};                                                                                                           // 897
                                                                                                              // 898
/***/ },                                                                                                      // 899
/* 50 */                                                                                                      // 900
/***/ function(module, exports, __webpack_require__) {                                                        // 901
                                                                                                              // 902
	'use strict';                                                                                                // 903
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)                                        // 904
	var KEY    = 'findIndex'                                                                                     // 905
	  , $def   = __webpack_require__(8)                                                                          // 906
	  , forced = true                                                                                            // 907
	  , $find  = __webpack_require__(49)(6);                                                                     // 908
	// Shouldn't skip holes                                                                                      // 909
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });                                                   // 910
	$def($def.P + $def.F * forced, 'Array', {                                                                    // 911
	  findIndex: function findIndex(callbackfn/*, that = undefined */){                                          // 912
	    return $find(this, callbackfn, arguments[1]);                                                            // 913
	  }                                                                                                          // 914
	});                                                                                                          // 915
	__webpack_require__(41)(KEY);                                                                                // 916
                                                                                                              // 917
/***/ },                                                                                                      // 918
/* 51 */                                                                                                      // 919
/***/ function(module, exports, __webpack_require__) {                                                        // 920
                                                                                                              // 921
	__webpack_require__(52);                                                                                     // 922
	__webpack_require__(2);                                                                                      // 923
	__webpack_require__(53);                                                                                     // 924
	__webpack_require__(54);                                                                                     // 925
	module.exports = __webpack_require__(10).Map;                                                                // 926
                                                                                                              // 927
/***/ },                                                                                                      // 928
/* 52 */                                                                                                      // 929
/***/ function(module, exports, __webpack_require__) {                                                        // 930
                                                                                                              // 931
	'use strict';                                                                                                // 932
	// 19.1.3.6 Object.prototype.toString()                                                                      // 933
	var classof = __webpack_require__(34)                                                                        // 934
	  , test    = {};                                                                                            // 935
	test[__webpack_require__(19)('toStringTag')] = 'z';                                                          // 936
	if(test + '' != '[object z]'){                                                                               // 937
	  __webpack_require__(16)(Object.prototype, 'toString', function toString(){                                 // 938
	    return '[object ' + classof(this) + ']';                                                                 // 939
	  }, true);                                                                                                  // 940
	}                                                                                                            // 941
                                                                                                              // 942
/***/ },                                                                                                      // 943
/* 53 */                                                                                                      // 944
/***/ function(module, exports, __webpack_require__) {                                                        // 945
                                                                                                              // 946
	__webpack_require__(40);                                                                                     // 947
	var global      = __webpack_require__(9)                                                                     // 948
	  , hide        = __webpack_require__(11)                                                                    // 949
	  , Iterators   = __webpack_require__(21)                                                                    // 950
	  , ITERATOR    = __webpack_require__(19)('iterator')                                                        // 951
	  , NL          = global.NodeList                                                                            // 952
	  , HTC         = global.HTMLCollection                                                                      // 953
	  , NLProto     = NL && NL.prototype                                                                         // 954
	  , HTCProto    = HTC && HTC.prototype                                                                       // 955
	  , ArrayValues = Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;                           // 956
	if(NL && !(ITERATOR in NLProto))hide(NLProto, ITERATOR, ArrayValues);                                        // 957
	if(HTC && !(ITERATOR in HTCProto))hide(HTCProto, ITERATOR, ArrayValues);                                     // 958
                                                                                                              // 959
/***/ },                                                                                                      // 960
/* 54 */                                                                                                      // 961
/***/ function(module, exports, __webpack_require__) {                                                        // 962
                                                                                                              // 963
	'use strict';                                                                                                // 964
	var strong = __webpack_require__(55);                                                                        // 965
                                                                                                              // 966
	// 23.1 Map Objects                                                                                          // 967
	__webpack_require__(59)('Map', function(get){                                                                // 968
	  return function Map(){ return get(this, arguments[0]); };                                                  // 969
	}, {                                                                                                         // 970
	  // 23.1.3.6 Map.prototype.get(key)                                                                         // 971
	  get: function get(key){                                                                                    // 972
	    var entry = strong.getEntry(this, key);                                                                  // 973
	    return entry && entry.v;                                                                                 // 974
	  },                                                                                                         // 975
	  // 23.1.3.9 Map.prototype.set(key, value)                                                                  // 976
	  set: function set(key, value){                                                                             // 977
	    return strong.def(this, key === 0 ? 0 : key, value);                                                     // 978
	  }                                                                                                          // 979
	}, strong, true);                                                                                            // 980
                                                                                                              // 981
/***/ },                                                                                                      // 982
/* 55 */                                                                                                      // 983
/***/ function(module, exports, __webpack_require__) {                                                        // 984
                                                                                                              // 985
	'use strict';                                                                                                // 986
	var $            = __webpack_require__(12)                                                                   // 987
	  , hide         = __webpack_require__(11)                                                                   // 988
	  , ctx          = __webpack_require__(25)                                                                   // 989
	  , species      = __webpack_require__(39)                                                                   // 990
	  , strictNew    = __webpack_require__(56)                                                                   // 991
	  , defined      = __webpack_require__(5)                                                                    // 992
	  , forOf        = __webpack_require__(57)                                                                   // 993
	  , step         = __webpack_require__(42)                                                                   // 994
	  , ID           = __webpack_require__(17)('id')                                                             // 995
	  , $has         = __webpack_require__(18)                                                                   // 996
	  , isObject     = __webpack_require__(30)                                                                   // 997
	  , isExtensible = Object.isExtensible || isObject                                                           // 998
	  , SUPPORT_DESC = __webpack_require__(14)                                                                   // 999
	  , SIZE         = SUPPORT_DESC ? '_s' : 'size'                                                              // 1000
	  , id           = 0;                                                                                        // 1001
                                                                                                              // 1002
	var fastKey = function(it, create){                                                                          // 1003
	  // return primitive with prefix                                                                            // 1004
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;             // 1005
	  if(!$has(it, ID)){                                                                                         // 1006
	    // can't set id to frozen object                                                                         // 1007
	    if(!isExtensible(it))return 'F';                                                                         // 1008
	    // not necessary to add id                                                                               // 1009
	    if(!create)return 'E';                                                                                   // 1010
	    // add missing object id                                                                                 // 1011
	    hide(it, ID, ++id);                                                                                      // 1012
	  // return object id with prefix                                                                            // 1013
	  } return 'O' + it[ID];                                                                                     // 1014
	};                                                                                                           // 1015
                                                                                                              // 1016
	var getEntry = function(that, key){                                                                          // 1017
	  // fast case                                                                                               // 1018
	  var index = fastKey(key), entry;                                                                           // 1019
	  if(index !== 'F')return that._i[index];                                                                    // 1020
	  // frozen object case                                                                                      // 1021
	  for(entry = that._f; entry; entry = entry.n){                                                              // 1022
	    if(entry.k == key)return entry;                                                                          // 1023
	  }                                                                                                          // 1024
	};                                                                                                           // 1025
                                                                                                              // 1026
	module.exports = {                                                                                           // 1027
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){                                                    // 1028
	    var C = wrapper(function(that, iterable){                                                                // 1029
	      strictNew(that, C, NAME);                                                                              // 1030
	      that._i = $.create(null); // index                                                                     // 1031
	      that._f = undefined;      // first entry                                                               // 1032
	      that._l = undefined;      // last entry                                                                // 1033
	      that[SIZE] = 0;           // size                                                                      // 1034
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);                                   // 1035
	    });                                                                                                      // 1036
	    __webpack_require__(58)(C.prototype, {                                                                   // 1037
	      // 23.1.3.1 Map.prototype.clear()                                                                      // 1038
	      // 23.2.3.2 Set.prototype.clear()                                                                      // 1039
	      clear: function clear(){                                                                               // 1040
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){                       // 1041
	          entry.r = true;                                                                                    // 1042
	          if(entry.p)entry.p = entry.p.n = undefined;                                                        // 1043
	          delete data[entry.i];                                                                              // 1044
	        }                                                                                                    // 1045
	        that._f = that._l = undefined;                                                                       // 1046
	        that[SIZE] = 0;                                                                                      // 1047
	      },                                                                                                     // 1048
	      // 23.1.3.3 Map.prototype.delete(key)                                                                  // 1049
	      // 23.2.3.4 Set.prototype.delete(value)                                                                // 1050
	      'delete': function(key){                                                                               // 1051
	        var that  = this                                                                                     // 1052
	          , entry = getEntry(that, key);                                                                     // 1053
	        if(entry){                                                                                           // 1054
	          var next = entry.n                                                                                 // 1055
	            , prev = entry.p;                                                                                // 1056
	          delete that._i[entry.i];                                                                           // 1057
	          entry.r = true;                                                                                    // 1058
	          if(prev)prev.n = next;                                                                             // 1059
	          if(next)next.p = prev;                                                                             // 1060
	          if(that._f == entry)that._f = next;                                                                // 1061
	          if(that._l == entry)that._l = prev;                                                                // 1062
	          that[SIZE]--;                                                                                      // 1063
	        } return !!entry;                                                                                    // 1064
	      },                                                                                                     // 1065
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)                                     // 1066
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)                                     // 1067
	      forEach: function forEach(callbackfn /*, that = undefined */){                                         // 1068
	        var f = ctx(callbackfn, arguments[1], 3)                                                             // 1069
	          , entry;                                                                                           // 1070
	        while(entry = entry ? entry.n : this._f){                                                            // 1071
	          f(entry.v, entry.k, this);                                                                         // 1072
	          // revert to the last existing entry                                                               // 1073
	          while(entry && entry.r)entry = entry.p;                                                            // 1074
	        }                                                                                                    // 1075
	      },                                                                                                     // 1076
	      // 23.1.3.7 Map.prototype.has(key)                                                                     // 1077
	      // 23.2.3.7 Set.prototype.has(value)                                                                   // 1078
	      has: function has(key){                                                                                // 1079
	        return !!getEntry(this, key);                                                                        // 1080
	      }                                                                                                      // 1081
	    });                                                                                                      // 1082
	    if(SUPPORT_DESC)$.setDesc(C.prototype, 'size', {                                                         // 1083
	      get: function(){                                                                                       // 1084
	        return defined(this[SIZE]);                                                                          // 1085
	      }                                                                                                      // 1086
	    });                                                                                                      // 1087
	    return C;                                                                                                // 1088
	  },                                                                                                         // 1089
	  def: function(that, key, value){                                                                           // 1090
	    var entry = getEntry(that, key)                                                                          // 1091
	      , prev, index;                                                                                         // 1092
	    // change existing entry                                                                                 // 1093
	    if(entry){                                                                                               // 1094
	      entry.v = value;                                                                                       // 1095
	    // create new entry                                                                                      // 1096
	    } else {                                                                                                 // 1097
	      that._l = entry = {                                                                                    // 1098
	        i: index = fastKey(key, true), // <- index                                                           // 1099
	        k: key,                        // <- key                                                             // 1100
	        v: value,                      // <- value                                                           // 1101
	        p: prev = that._l,             // <- previous entry                                                  // 1102
	        n: undefined,                  // <- next entry                                                      // 1103
	        r: false                       // <- removed                                                         // 1104
	      };                                                                                                     // 1105
	      if(!that._f)that._f = entry;                                                                           // 1106
	      if(prev)prev.n = entry;                                                                                // 1107
	      that[SIZE]++;                                                                                          // 1108
	      // add to index                                                                                        // 1109
	      if(index !== 'F')that._i[index] = entry;                                                               // 1110
	    } return that;                                                                                           // 1111
	  },                                                                                                         // 1112
	  getEntry: getEntry,                                                                                        // 1113
	  setStrong: function(C, NAME, IS_MAP){                                                                      // 1114
	    // add .keys, .values, .entries, [@@iterator]                                                            // 1115
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11                    // 1116
	    __webpack_require__(6)(C, NAME, function(iterated, kind){                                                // 1117
	      this._t = iterated;  // target                                                                         // 1118
	      this._k = kind;      // kind                                                                           // 1119
	      this._l = undefined; // previous                                                                       // 1120
	    }, function(){                                                                                           // 1121
	      var that  = this                                                                                       // 1122
	        , kind  = that._k                                                                                    // 1123
	        , entry = that._l;                                                                                   // 1124
	      // revert to the last existing entry                                                                   // 1125
	      while(entry && entry.r)entry = entry.p;                                                                // 1126
	      // get next entry                                                                                      // 1127
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){                                     // 1128
	        // or finish the iteration                                                                           // 1129
	        that._t = undefined;                                                                                 // 1130
	        return step(1);                                                                                      // 1131
	      }                                                                                                      // 1132
	      // return step by kind                                                                                 // 1133
	      if(kind == 'keys'  )return step(0, entry.k);                                                           // 1134
	      if(kind == 'values')return step(0, entry.v);                                                           // 1135
	      return step(0, [entry.k, entry.v]);                                                                    // 1136
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);                                                       // 1137
                                                                                                              // 1138
	    // add [@@species], 23.1.2.2, 23.2.2.2                                                                   // 1139
	    species(C);                                                                                              // 1140
	    species(__webpack_require__(10)[NAME]); // for wrapper                                                   // 1141
	  }                                                                                                          // 1142
	};                                                                                                           // 1143
                                                                                                              // 1144
/***/ },                                                                                                      // 1145
/* 56 */                                                                                                      // 1146
/***/ function(module, exports) {                                                                             // 1147
                                                                                                              // 1148
	module.exports = function(it, Constructor, name){                                                            // 1149
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");                       // 1150
	  return it;                                                                                                 // 1151
	};                                                                                                           // 1152
                                                                                                              // 1153
/***/ },                                                                                                      // 1154
/* 57 */                                                                                                      // 1155
/***/ function(module, exports, __webpack_require__) {                                                        // 1156
                                                                                                              // 1157
	var ctx         = __webpack_require__(25)                                                                    // 1158
	  , call        = __webpack_require__(28)                                                                    // 1159
	  , isArrayIter = __webpack_require__(31)                                                                    // 1160
	  , anObject    = __webpack_require__(29)                                                                    // 1161
	  , toLength    = __webpack_require__(32)                                                                    // 1162
	  , getIterFn   = __webpack_require__(33);                                                                   // 1163
	module.exports = function(iterable, entries, fn, that){                                                      // 1164
	  var iterFn = getIterFn(iterable)                                                                           // 1165
	    , f      = ctx(fn, that, entries ? 2 : 1)                                                                // 1166
	    , index  = 0                                                                                             // 1167
	    , length, step, iterator;                                                                                // 1168
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');                            // 1169
	  // fast case for arrays with default iterator                                                              // 1170
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){                   // 1171
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);                          // 1172
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){                            // 1173
	    call(iterator, f, step.value, entries);                                                                  // 1174
	  }                                                                                                          // 1175
	};                                                                                                           // 1176
                                                                                                              // 1177
/***/ },                                                                                                      // 1178
/* 58 */                                                                                                      // 1179
/***/ function(module, exports, __webpack_require__) {                                                        // 1180
                                                                                                              // 1181
	var $redef = __webpack_require__(16);                                                                        // 1182
	module.exports = function(target, src){                                                                      // 1183
	  for(var key in src)$redef(target, key, src[key]);                                                          // 1184
	  return target;                                                                                             // 1185
	};                                                                                                           // 1186
                                                                                                              // 1187
/***/ },                                                                                                      // 1188
/* 59 */                                                                                                      // 1189
/***/ function(module, exports, __webpack_require__) {                                                        // 1190
                                                                                                              // 1191
	'use strict';                                                                                                // 1192
	var global     = __webpack_require__(9)                                                                      // 1193
	  , $def       = __webpack_require__(8)                                                                      // 1194
	  , forOf      = __webpack_require__(57)                                                                     // 1195
	  , strictNew  = __webpack_require__(56);                                                                    // 1196
                                                                                                              // 1197
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){                                  // 1198
	  var Base  = global[NAME]                                                                                   // 1199
	    , C     = Base                                                                                           // 1200
	    , ADDER = IS_MAP ? 'set' : 'add'                                                                         // 1201
	    , proto = C && C.prototype                                                                               // 1202
	    , O     = {};                                                                                            // 1203
	  var fixMethod = function(KEY){                                                                             // 1204
	    var fn = proto[KEY];                                                                                     // 1205
	    __webpack_require__(16)(proto, KEY,                                                                      // 1206
	      KEY == 'delete' ? function(a){ return fn.call(this, a === 0 ? 0 : a); }                                // 1207
	      : KEY == 'has' ? function has(a){ return fn.call(this, a === 0 ? 0 : a); }                             // 1208
	      : KEY == 'get' ? function get(a){ return fn.call(this, a === 0 ? 0 : a); }                             // 1209
	      : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }                       // 1210
	      : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }                                // 1211
	    );                                                                                                       // 1212
	  };                                                                                                         // 1213
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !__webpack_require__(15)(function(){            // 1214
	    new C().entries().next();                                                                                // 1215
	  }))){                                                                                                      // 1216
	    // create collection constructor                                                                         // 1217
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);                                                 // 1218
	    __webpack_require__(58)(C.prototype, methods);                                                           // 1219
	  } else {                                                                                                   // 1220
	    var inst  = new C                                                                                        // 1221
	      , chain = inst[ADDER](IS_WEAK ? {} : -0, 1)                                                            // 1222
	      , buggyZero;                                                                                           // 1223
	    // wrap for init collections from iterable                                                               // 1224
	    if(!__webpack_require__(36)(function(iter){ new C(iter); })){ // eslint-disable-line no-new              // 1225
	      C = wrapper(function(target, iterable){                                                                // 1226
	        strictNew(target, C, NAME);                                                                          // 1227
	        var that = new Base;                                                                                 // 1228
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);                                 // 1229
	        return that;                                                                                         // 1230
	      });                                                                                                    // 1231
	      C.prototype = proto;                                                                                   // 1232
	      proto.constructor = C;                                                                                 // 1233
	    }                                                                                                        // 1234
	    IS_WEAK || inst.forEach(function(val, key){                                                              // 1235
	      buggyZero = 1 / key === -Infinity;                                                                     // 1236
	    });                                                                                                      // 1237
	    // fix converting -0 key to +0                                                                           // 1238
	    if(buggyZero){                                                                                           // 1239
	      fixMethod('delete');                                                                                   // 1240
	      fixMethod('has');                                                                                      // 1241
	      IS_MAP && fixMethod('get');                                                                            // 1242
	    }                                                                                                        // 1243
	    // + fix .add & .set for chaining                                                                        // 1244
	    if(buggyZero || chain !== inst)fixMethod(ADDER);                                                         // 1245
	    // weak collections should not contains .clear method                                                    // 1246
	    if(IS_WEAK && proto.clear)delete proto.clear;                                                            // 1247
	  }                                                                                                          // 1248
                                                                                                              // 1249
	  __webpack_require__(23)(C, NAME);                                                                          // 1250
                                                                                                              // 1251
	  O[NAME] = C;                                                                                               // 1252
	  $def($def.G + $def.W + $def.F * (C != Base), O);                                                           // 1253
                                                                                                              // 1254
	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);                                                             // 1255
                                                                                                              // 1256
	  return C;                                                                                                  // 1257
	};                                                                                                           // 1258
                                                                                                              // 1259
/***/ },                                                                                                      // 1260
/* 60 */                                                                                                      // 1261
/***/ function(module, exports, __webpack_require__) {                                                        // 1262
                                                                                                              // 1263
	__webpack_require__(52);                                                                                     // 1264
	__webpack_require__(2);                                                                                      // 1265
	__webpack_require__(53);                                                                                     // 1266
	__webpack_require__(61);                                                                                     // 1267
	module.exports = __webpack_require__(10).Set;                                                                // 1268
                                                                                                              // 1269
/***/ },                                                                                                      // 1270
/* 61 */                                                                                                      // 1271
/***/ function(module, exports, __webpack_require__) {                                                        // 1272
                                                                                                              // 1273
	'use strict';                                                                                                // 1274
	var strong = __webpack_require__(55);                                                                        // 1275
                                                                                                              // 1276
	// 23.2 Set Objects                                                                                          // 1277
	__webpack_require__(59)('Set', function(get){                                                                // 1278
	  return function Set(){ return get(this, arguments[0]); };                                                  // 1279
	}, {                                                                                                         // 1280
	  // 23.2.3.1 Set.prototype.add(value)                                                                       // 1281
	  add: function add(value){                                                                                  // 1282
	    return strong.def(this, value = value === 0 ? 0 : value, value);                                         // 1283
	  }                                                                                                          // 1284
	}, strong);                                                                                                  // 1285
                                                                                                              // 1286
/***/ }                                                                                                       // 1287
/******/ ]);                                                                                                  // 1288


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['ecmascript-collections'] = {
  Map: Map,
  Set: Set
};

})();
