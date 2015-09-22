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
var _ = Package.underscore._;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var ReactiveDict = Package['reactive-dict'].ReactiveDict;
var ReactiveVar = Package['reactive-var'].ReactiveVar;

/* Package-scope variables */
var page, qs, Triggers, Router, Group, Route, FlowRouter;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/kadira_flow-router/packages/kadira_flow-router.js                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
(function () {                                                                                                        // 1
                                                                                                                      // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/kadira:flow-router/client.browserify.js                                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// shim for using process in browser                                                                                  // 10
                                                                                                                      // 11
var process = module.exports = {};                                                                                    // 12
var queue = [];                                                                                                       // 13
var draining = false;                                                                                                 // 14
var currentQueue;                                                                                                     // 15
var queueIndex = -1;                                                                                                  // 16
                                                                                                                      // 17
function cleanUpNextTick() {                                                                                          // 18
    draining = false;                                                                                                 // 19
    if (currentQueue.length) {                                                                                        // 20
        queue = currentQueue.concat(queue);                                                                           // 21
    } else {                                                                                                          // 22
        queueIndex = -1;                                                                                              // 23
    }                                                                                                                 // 24
    if (queue.length) {                                                                                               // 25
        drainQueue();                                                                                                 // 26
    }                                                                                                                 // 27
}                                                                                                                     // 28
                                                                                                                      // 29
function drainQueue() {                                                                                               // 30
    if (draining) {                                                                                                   // 31
        return;                                                                                                       // 32
    }                                                                                                                 // 33
    var timeout = setTimeout(cleanUpNextTick);                                                                        // 34
    draining = true;                                                                                                  // 35
                                                                                                                      // 36
    var len = queue.length;                                                                                           // 37
    while(len) {                                                                                                      // 38
        currentQueue = queue;                                                                                         // 39
        queue = [];                                                                                                   // 40
        while (++queueIndex < len) {                                                                                  // 41
            currentQueue[queueIndex].run();                                                                           // 42
        }                                                                                                             // 43
        queueIndex = -1;                                                                                              // 44
        len = queue.length;                                                                                           // 45
    }                                                                                                                 // 46
    currentQueue = null;                                                                                              // 47
    draining = false;                                                                                                 // 48
    clearTimeout(timeout);                                                                                            // 49
}                                                                                                                     // 50
                                                                                                                      // 51
process.nextTick = function (fun) {                                                                                   // 52
    var args = new Array(arguments.length - 1);                                                                       // 53
    if (arguments.length > 1) {                                                                                       // 54
        for (var i = 1; i < arguments.length; i++) {                                                                  // 55
            args[i - 1] = arguments[i];                                                                               // 56
        }                                                                                                             // 57
    }                                                                                                                 // 58
    queue.push(new Item(fun, args));                                                                                  // 59
    if (queue.length === 1 && !draining) {                                                                            // 60
        setTimeout(drainQueue, 0);                                                                                    // 61
    }                                                                                                                 // 62
};                                                                                                                    // 63
                                                                                                                      // 64
// v8 likes predictible objects                                                                                       // 65
function Item(fun, array) {                                                                                           // 66
    this.fun = fun;                                                                                                   // 67
    this.array = array;                                                                                               // 68
}                                                                                                                     // 69
Item.prototype.run = function () {                                                                                    // 70
    this.fun.apply(null, this.array);                                                                                 // 71
};                                                                                                                    // 72
process.title = 'browser';                                                                                            // 73
process.browser = true;                                                                                               // 74
process.env = {};                                                                                                     // 75
process.argv = [];                                                                                                    // 76
process.version = ''; // empty string to avoid regexp issues                                                          // 77
process.versions = {};                                                                                                // 78
                                                                                                                      // 79
function noop() {}                                                                                                    // 80
                                                                                                                      // 81
process.on = noop;                                                                                                    // 82
process.addListener = noop;                                                                                           // 83
process.once = noop;                                                                                                  // 84
process.off = noop;                                                                                                   // 85
process.removeListener = noop;                                                                                        // 86
process.removeAllListeners = noop;                                                                                    // 87
process.emit = noop;                                                                                                  // 88
                                                                                                                      // 89
process.binding = function (name) {                                                                                   // 90
    throw new Error('process.binding is not supported');                                                              // 91
};                                                                                                                    // 92
                                                                                                                      // 93
// TODO(shtylman)                                                                                                     // 94
process.cwd = function () { return '/' };                                                                             // 95
process.chdir = function (dir) {                                                                                      // 96
    throw new Error('process.chdir is not supported');                                                                // 97
};                                                                                                                    // 98
process.umask = function() { return 0; };                                                                             // 99
                                                                                                                      // 100
},{}],2:[function(require,module,exports){                                                                            // 101
(function (process){                                                                                                  // 102
  /* globals require, module */                                                                                       // 103
                                                                                                                      // 104
  'use strict';                                                                                                       // 105
                                                                                                                      // 106
  /**                                                                                                                 // 107
   * Module dependencies.                                                                                             // 108
   */                                                                                                                 // 109
                                                                                                                      // 110
  var pathtoRegexp = require('path-to-regexp');                                                                       // 111
                                                                                                                      // 112
  /**                                                                                                                 // 113
   * Module exports.                                                                                                  // 114
   */                                                                                                                 // 115
                                                                                                                      // 116
  module.exports = page;                                                                                              // 117
                                                                                                                      // 118
  /**                                                                                                                 // 119
   * Detect click event                                                                                               // 120
   */                                                                                                                 // 121
  var clickEvent = ('undefined' !== typeof document) && document.ontouchstart ? 'touchstart' : 'click';               // 122
                                                                                                                      // 123
  /**                                                                                                                 // 124
   * To work properly with the URL                                                                                    // 125
   * history.location generated polyfill in https://github.com/devote/HTML5-History-API                               // 126
   */                                                                                                                 // 127
                                                                                                                      // 128
  var location = ('undefined' !== typeof window) && (window.history.location || window.location);                     // 129
                                                                                                                      // 130
  /**                                                                                                                 // 131
   * Perform initial dispatch.                                                                                        // 132
   */                                                                                                                 // 133
                                                                                                                      // 134
  var dispatch = true;                                                                                                // 135
                                                                                                                      // 136
                                                                                                                      // 137
  /**                                                                                                                 // 138
   * Decode URL components (query string, pathname, hash).                                                            // 139
   * Accommodates both regular percent encoding and x-www-form-urlencoded format.                                     // 140
   */                                                                                                                 // 141
  var decodeURLComponents = true;                                                                                     // 142
                                                                                                                      // 143
  /**                                                                                                                 // 144
   * Base path.                                                                                                       // 145
   */                                                                                                                 // 146
                                                                                                                      // 147
  var base = '';                                                                                                      // 148
                                                                                                                      // 149
  /**                                                                                                                 // 150
   * Running flag.                                                                                                    // 151
   */                                                                                                                 // 152
                                                                                                                      // 153
  var running;                                                                                                        // 154
                                                                                                                      // 155
  /**                                                                                                                 // 156
   * HashBang option                                                                                                  // 157
   */                                                                                                                 // 158
                                                                                                                      // 159
  var hashbang = false;                                                                                               // 160
                                                                                                                      // 161
  /**                                                                                                                 // 162
   * Previous context, for capturing                                                                                  // 163
   * page exit events.                                                                                                // 164
   */                                                                                                                 // 165
                                                                                                                      // 166
  var prevContext;                                                                                                    // 167
                                                                                                                      // 168
  /**                                                                                                                 // 169
   * Register `path` with callback `fn()`,                                                                            // 170
   * or route `path`, or redirection,                                                                                 // 171
   * or `page.start()`.                                                                                               // 172
   *                                                                                                                  // 173
   *   page(fn);                                                                                                      // 174
   *   page('*', fn);                                                                                                 // 175
   *   page('/user/:id', load, user);                                                                                 // 176
   *   page('/user/' + user.id, { some: 'thing' });                                                                   // 177
   *   page('/user/' + user.id);                                                                                      // 178
   *   page('/from', '/to')                                                                                           // 179
   *   page();                                                                                                        // 180
   *                                                                                                                  // 181
   * @param {String|Function} path                                                                                    // 182
   * @param {Function} fn...                                                                                          // 183
   * @api public                                                                                                      // 184
   */                                                                                                                 // 185
                                                                                                                      // 186
  function page(path, fn) {                                                                                           // 187
    // <callback>                                                                                                     // 188
    if ('function' === typeof path) {                                                                                 // 189
      return page('*', path);                                                                                         // 190
    }                                                                                                                 // 191
                                                                                                                      // 192
    // route <path> to <callback ...>                                                                                 // 193
    if ('function' === typeof fn) {                                                                                   // 194
      var route = new Route(path);                                                                                    // 195
      for (var i = 1; i < arguments.length; ++i) {                                                                    // 196
        page.callbacks.push(route.middleware(arguments[i]));                                                          // 197
      }                                                                                                               // 198
      // show <path> with [state]                                                                                     // 199
    } else if ('string' === typeof path) {                                                                            // 200
      page['string' === typeof fn ? 'redirect' : 'show'](path, fn);                                                   // 201
      // start [options]                                                                                              // 202
    } else {                                                                                                          // 203
      page.start(path);                                                                                               // 204
    }                                                                                                                 // 205
  }                                                                                                                   // 206
                                                                                                                      // 207
  /**                                                                                                                 // 208
   * Callback functions.                                                                                              // 209
   */                                                                                                                 // 210
                                                                                                                      // 211
  page.callbacks = [];                                                                                                // 212
  page.exits = [];                                                                                                    // 213
                                                                                                                      // 214
  /**                                                                                                                 // 215
   * Current path being processed                                                                                     // 216
   * @type {String}                                                                                                   // 217
   */                                                                                                                 // 218
  page.current = '';                                                                                                  // 219
                                                                                                                      // 220
  /**                                                                                                                 // 221
   * Number of pages navigated to.                                                                                    // 222
   * @type {number}                                                                                                   // 223
   *                                                                                                                  // 224
   *     page.len == 0;                                                                                               // 225
   *     page('/login');                                                                                              // 226
   *     page.len == 1;                                                                                               // 227
   */                                                                                                                 // 228
                                                                                                                      // 229
  page.len = 0;                                                                                                       // 230
                                                                                                                      // 231
  /**                                                                                                                 // 232
   * Get or set basepath to `path`.                                                                                   // 233
   *                                                                                                                  // 234
   * @param {String} path                                                                                             // 235
   * @api public                                                                                                      // 236
   */                                                                                                                 // 237
                                                                                                                      // 238
  page.base = function(path) {                                                                                        // 239
    if (0 === arguments.length) return base;                                                                          // 240
    base = path;                                                                                                      // 241
  };                                                                                                                  // 242
                                                                                                                      // 243
  /**                                                                                                                 // 244
   * Bind with the given `options`.                                                                                   // 245
   *                                                                                                                  // 246
   * Options:                                                                                                         // 247
   *                                                                                                                  // 248
   *    - `click` bind to click events [true]                                                                         // 249
   *    - `popstate` bind to popstate [true]                                                                          // 250
   *    - `dispatch` perform initial dispatch [true]                                                                  // 251
   *                                                                                                                  // 252
   * @param {Object} options                                                                                          // 253
   * @api public                                                                                                      // 254
   */                                                                                                                 // 255
                                                                                                                      // 256
  page.start = function(options) {                                                                                    // 257
    options = options || {};                                                                                          // 258
    if (running) return;                                                                                              // 259
    running = true;                                                                                                   // 260
    if (false === options.dispatch) dispatch = false;                                                                 // 261
    if (false === options.decodeURLComponents) decodeURLComponents = false;                                           // 262
    if (false !== options.popstate) window.addEventListener('popstate', onpopstate, false);                           // 263
    if (false !== options.click) {                                                                                    // 264
      document.addEventListener(clickEvent, onclick, false);                                                          // 265
    }                                                                                                                 // 266
    if (true === options.hashbang) hashbang = true;                                                                   // 267
    if (!dispatch) return;                                                                                            // 268
    var url = (hashbang && ~location.hash.indexOf('#!')) ? location.hash.substr(2) + location.search : location.pathname + location.search + location.hash;
    page.replace(url, null, true, dispatch);                                                                          // 270
  };                                                                                                                  // 271
                                                                                                                      // 272
  /**                                                                                                                 // 273
   * Unbind click and popstate event handlers.                                                                        // 274
   *                                                                                                                  // 275
   * @api public                                                                                                      // 276
   */                                                                                                                 // 277
                                                                                                                      // 278
  page.stop = function() {                                                                                            // 279
    if (!running) return;                                                                                             // 280
    page.current = '';                                                                                                // 281
    page.len = 0;                                                                                                     // 282
    running = false;                                                                                                  // 283
    document.removeEventListener(clickEvent, onclick, false);                                                         // 284
    window.removeEventListener('popstate', onpopstate, false);                                                        // 285
  };                                                                                                                  // 286
                                                                                                                      // 287
  /**                                                                                                                 // 288
   * Show `path` with optional `state` object.                                                                        // 289
   *                                                                                                                  // 290
   * @param {String} path                                                                                             // 291
   * @param {Object} state                                                                                            // 292
   * @param {Boolean} dispatch                                                                                        // 293
   * @return {Context}                                                                                                // 294
   * @api public                                                                                                      // 295
   */                                                                                                                 // 296
                                                                                                                      // 297
  page.show = function(path, state, dispatch, push) {                                                                 // 298
    var ctx = new Context(path, state);                                                                               // 299
    page.current = ctx.path;                                                                                          // 300
    if (false !== dispatch) page.dispatch(ctx);                                                                       // 301
    if (false !== ctx.handled && false !== push) ctx.pushState();                                                     // 302
    return ctx;                                                                                                       // 303
  };                                                                                                                  // 304
                                                                                                                      // 305
  /**                                                                                                                 // 306
   * Goes back in the history                                                                                         // 307
   * Back should always let the current route push state and then go back.                                            // 308
   *                                                                                                                  // 309
   * @param {String} path - fallback path to go back if no more history exists, if undefined defaults to page.base    // 310
   * @param {Object} [state]                                                                                          // 311
   * @api public                                                                                                      // 312
   */                                                                                                                 // 313
                                                                                                                      // 314
  page.back = function(path, state) {                                                                                 // 315
    if (page.len > 0) {                                                                                               // 316
      // this may need more testing to see if all browsers                                                            // 317
      // wait for the next tick to go back in history                                                                 // 318
      history.back();                                                                                                 // 319
      page.len--;                                                                                                     // 320
    } else if (path) {                                                                                                // 321
      setTimeout(function() {                                                                                         // 322
        page.show(path, state);                                                                                       // 323
      });                                                                                                             // 324
    }else{                                                                                                            // 325
      setTimeout(function() {                                                                                         // 326
        page.show(base, state);                                                                                       // 327
      });                                                                                                             // 328
    }                                                                                                                 // 329
  };                                                                                                                  // 330
                                                                                                                      // 331
                                                                                                                      // 332
  /**                                                                                                                 // 333
   * Register route to redirect from one path to other                                                                // 334
   * or just redirect to another route                                                                                // 335
   *                                                                                                                  // 336
   * @param {String} from - if param 'to' is undefined redirects to 'from'                                            // 337
   * @param {String} [to]                                                                                             // 338
   * @api public                                                                                                      // 339
   */                                                                                                                 // 340
  page.redirect = function(from, to) {                                                                                // 341
    // Define route from a path to another                                                                            // 342
    if ('string' === typeof from && 'string' === typeof to) {                                                         // 343
      page(from, function(e) {                                                                                        // 344
        setTimeout(function() {                                                                                       // 345
          page.replace(to);                                                                                           // 346
        }, 0);                                                                                                        // 347
      });                                                                                                             // 348
    }                                                                                                                 // 349
                                                                                                                      // 350
    // Wait for the push state and replace it with another                                                            // 351
    if ('string' === typeof from && 'undefined' === typeof to) {                                                      // 352
      setTimeout(function() {                                                                                         // 353
        page.replace(from);                                                                                           // 354
      }, 0);                                                                                                          // 355
    }                                                                                                                 // 356
  };                                                                                                                  // 357
                                                                                                                      // 358
  /**                                                                                                                 // 359
   * Replace `path` with optional `state` object.                                                                     // 360
   *                                                                                                                  // 361
   * @param {String} path                                                                                             // 362
   * @param {Object} state                                                                                            // 363
   * @return {Context}                                                                                                // 364
   * @api public                                                                                                      // 365
   */                                                                                                                 // 366
                                                                                                                      // 367
                                                                                                                      // 368
  page.replace = function(path, state, init, dispatch) {                                                              // 369
    var ctx = new Context(path, state);                                                                               // 370
    page.current = ctx.path;                                                                                          // 371
    ctx.init = init;                                                                                                  // 372
    ctx.save(); // save before dispatching, which may redirect                                                        // 373
    if (false !== dispatch) page.dispatch(ctx);                                                                       // 374
    return ctx;                                                                                                       // 375
  };                                                                                                                  // 376
                                                                                                                      // 377
  /**                                                                                                                 // 378
   * Dispatch the given `ctx`.                                                                                        // 379
   *                                                                                                                  // 380
   * @param {Object} ctx                                                                                              // 381
   * @api private                                                                                                     // 382
   */                                                                                                                 // 383
                                                                                                                      // 384
  page.dispatch = function(ctx) {                                                                                     // 385
    var prev = prevContext,                                                                                           // 386
      i = 0,                                                                                                          // 387
      j = 0;                                                                                                          // 388
                                                                                                                      // 389
    prevContext = ctx;                                                                                                // 390
                                                                                                                      // 391
    function nextExit() {                                                                                             // 392
      var fn = page.exits[j++];                                                                                       // 393
      if (!fn) return nextEnter();                                                                                    // 394
      fn(prev, nextExit);                                                                                             // 395
    }                                                                                                                 // 396
                                                                                                                      // 397
    function nextEnter() {                                                                                            // 398
      var fn = page.callbacks[i++];                                                                                   // 399
                                                                                                                      // 400
      if (ctx.path !== page.current) {                                                                                // 401
        ctx.handled = false;                                                                                          // 402
        return;                                                                                                       // 403
      }                                                                                                               // 404
      if (!fn) return unhandled(ctx);                                                                                 // 405
      fn(ctx, nextEnter);                                                                                             // 406
    }                                                                                                                 // 407
                                                                                                                      // 408
    if (prev) {                                                                                                       // 409
      nextExit();                                                                                                     // 410
    } else {                                                                                                          // 411
      nextEnter();                                                                                                    // 412
    }                                                                                                                 // 413
  };                                                                                                                  // 414
                                                                                                                      // 415
  /**                                                                                                                 // 416
   * Unhandled `ctx`. When it's not the initial                                                                       // 417
   * popstate then redirect. If you wish to handle                                                                    // 418
   * 404s on your own use `page('*', callback)`.                                                                      // 419
   *                                                                                                                  // 420
   * @param {Context} ctx                                                                                             // 421
   * @api private                                                                                                     // 422
   */                                                                                                                 // 423
                                                                                                                      // 424
  function unhandled(ctx) {                                                                                           // 425
    if (ctx.handled) return;                                                                                          // 426
    var current;                                                                                                      // 427
                                                                                                                      // 428
    if (hashbang) {                                                                                                   // 429
      current = base + location.hash.replace('#!', '');                                                               // 430
    } else {                                                                                                          // 431
      current = location.pathname + location.search;                                                                  // 432
    }                                                                                                                 // 433
                                                                                                                      // 434
    if (current === ctx.canonicalPath) return;                                                                        // 435
    page.stop();                                                                                                      // 436
    ctx.handled = false;                                                                                              // 437
    location.href = ctx.canonicalPath;                                                                                // 438
  }                                                                                                                   // 439
                                                                                                                      // 440
  /**                                                                                                                 // 441
   * Register an exit route on `path` with                                                                            // 442
   * callback `fn()`, which will be called                                                                            // 443
   * on the previous context when a new                                                                               // 444
   * page is visited.                                                                                                 // 445
   */                                                                                                                 // 446
  page.exit = function(path, fn) {                                                                                    // 447
    if (typeof path === 'function') {                                                                                 // 448
      return page.exit('*', path);                                                                                    // 449
    }                                                                                                                 // 450
                                                                                                                      // 451
    var route = new Route(path);                                                                                      // 452
    for (var i = 1; i < arguments.length; ++i) {                                                                      // 453
      page.exits.push(route.middleware(arguments[i]));                                                                // 454
    }                                                                                                                 // 455
  };                                                                                                                  // 456
                                                                                                                      // 457
  /**                                                                                                                 // 458
   * Remove URL encoding from the given `str`.                                                                        // 459
   * Accommodates whitespace in both x-www-form-urlencoded                                                            // 460
   * and regular percent-encoded form.                                                                                // 461
   *                                                                                                                  // 462
   * @param {str} URL component to decode                                                                             // 463
   */                                                                                                                 // 464
  function decodeURLEncodedURIComponent(val) {                                                                        // 465
    if (typeof val !== 'string') { return val; }                                                                      // 466
    return decodeURLComponents ? decodeURIComponent(val.replace(/\+/g, ' ')) : val;                                   // 467
  }                                                                                                                   // 468
                                                                                                                      // 469
  /**                                                                                                                 // 470
   * Initialize a new "request" `Context`                                                                             // 471
   * with the given `path` and optional initial `state`.                                                              // 472
   *                                                                                                                  // 473
   * @param {String} path                                                                                             // 474
   * @param {Object} state                                                                                            // 475
   * @api public                                                                                                      // 476
   */                                                                                                                 // 477
                                                                                                                      // 478
  function Context(path, state) {                                                                                     // 479
    if ('/' === path[0] && 0 !== path.indexOf(base)) path = base + (hashbang ? '#!' : '') + path;                     // 480
    var i = path.indexOf('?');                                                                                        // 481
                                                                                                                      // 482
    this.canonicalPath = path;                                                                                        // 483
    this.path = path.replace(base, '') || '/';                                                                        // 484
    if (hashbang) this.path = this.path.replace('#!', '') || '/';                                                     // 485
                                                                                                                      // 486
    this.title = document.title;                                                                                      // 487
    this.state = state || {};                                                                                         // 488
    this.state.path = path;                                                                                           // 489
    this.querystring = ~i ? decodeURLEncodedURIComponent(path.slice(i + 1)) : '';                                     // 490
    this.pathname = decodeURLEncodedURIComponent(~i ? path.slice(0, i) : path);                                       // 491
    this.params = {};                                                                                                 // 492
                                                                                                                      // 493
    // fragment                                                                                                       // 494
    this.hash = '';                                                                                                   // 495
    if (!hashbang) {                                                                                                  // 496
      if (!~this.path.indexOf('#')) return;                                                                           // 497
      var parts = this.path.split('#');                                                                               // 498
      this.path = parts[0];                                                                                           // 499
      this.hash = decodeURLEncodedURIComponent(parts[1]) || '';                                                       // 500
      this.querystring = this.querystring.split('#')[0];                                                              // 501
    }                                                                                                                 // 502
  }                                                                                                                   // 503
                                                                                                                      // 504
  /**                                                                                                                 // 505
   * Expose `Context`.                                                                                                // 506
   */                                                                                                                 // 507
                                                                                                                      // 508
  page.Context = Context;                                                                                             // 509
                                                                                                                      // 510
  /**                                                                                                                 // 511
   * Push state.                                                                                                      // 512
   *                                                                                                                  // 513
   * @api private                                                                                                     // 514
   */                                                                                                                 // 515
                                                                                                                      // 516
  Context.prototype.pushState = function() {                                                                          // 517
    page.len++;                                                                                                       // 518
    history.pushState(this.state, this.title, hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
  };                                                                                                                  // 520
                                                                                                                      // 521
  /**                                                                                                                 // 522
   * Save the context state.                                                                                          // 523
   *                                                                                                                  // 524
   * @api public                                                                                                      // 525
   */                                                                                                                 // 526
                                                                                                                      // 527
  Context.prototype.save = function() {                                                                               // 528
    history.replaceState(this.state, this.title, hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
  };                                                                                                                  // 530
                                                                                                                      // 531
  /**                                                                                                                 // 532
   * Initialize `Route` with the given HTTP `path`,                                                                   // 533
   * and an array of `callbacks` and `options`.                                                                       // 534
   *                                                                                                                  // 535
   * Options:                                                                                                         // 536
   *                                                                                                                  // 537
   *   - `sensitive`    enable case-sensitive routes                                                                  // 538
   *   - `strict`       enable strict matching for trailing slashes                                                   // 539
   *                                                                                                                  // 540
   * @param {String} path                                                                                             // 541
   * @param {Object} options.                                                                                         // 542
   * @api private                                                                                                     // 543
   */                                                                                                                 // 544
                                                                                                                      // 545
  function Route(path, options) {                                                                                     // 546
    options = options || {};                                                                                          // 547
    this.path = (path === '*') ? '(.*)' : path;                                                                       // 548
    this.method = 'GET';                                                                                              // 549
    this.regexp = pathtoRegexp(this.path,                                                                             // 550
      this.keys = [],                                                                                                 // 551
      options.sensitive,                                                                                              // 552
      options.strict);                                                                                                // 553
  }                                                                                                                   // 554
                                                                                                                      // 555
  /**                                                                                                                 // 556
   * Expose `Route`.                                                                                                  // 557
   */                                                                                                                 // 558
                                                                                                                      // 559
  page.Route = Route;                                                                                                 // 560
                                                                                                                      // 561
  /**                                                                                                                 // 562
   * Return route middleware with                                                                                     // 563
   * the given callback `fn()`.                                                                                       // 564
   *                                                                                                                  // 565
   * @param {Function} fn                                                                                             // 566
   * @return {Function}                                                                                               // 567
   * @api public                                                                                                      // 568
   */                                                                                                                 // 569
                                                                                                                      // 570
  Route.prototype.middleware = function(fn) {                                                                         // 571
    var self = this;                                                                                                  // 572
    return function(ctx, next) {                                                                                      // 573
      if (self.match(ctx.path, ctx.params)) return fn(ctx, next);                                                     // 574
      next();                                                                                                         // 575
    };                                                                                                                // 576
  };                                                                                                                  // 577
                                                                                                                      // 578
  /**                                                                                                                 // 579
   * Check if this route matches `path`, if so                                                                        // 580
   * populate `params`.                                                                                               // 581
   *                                                                                                                  // 582
   * @param {String} path                                                                                             // 583
   * @param {Object} params                                                                                           // 584
   * @return {Boolean}                                                                                                // 585
   * @api private                                                                                                     // 586
   */                                                                                                                 // 587
                                                                                                                      // 588
  Route.prototype.match = function(path, params) {                                                                    // 589
    var keys = this.keys,                                                                                             // 590
      qsIndex = path.indexOf('?'),                                                                                    // 591
      pathname = ~qsIndex ? path.slice(0, qsIndex) : path,                                                            // 592
      m = this.regexp.exec(decodeURIComponent(pathname));                                                             // 593
                                                                                                                      // 594
    if (!m) return false;                                                                                             // 595
                                                                                                                      // 596
    for (var i = 1, len = m.length; i < len; ++i) {                                                                   // 597
      var key = keys[i - 1];                                                                                          // 598
      var val = decodeURLEncodedURIComponent(m[i]);                                                                   // 599
      if (val !== undefined || !(hasOwnProperty.call(params, key.name))) {                                            // 600
        params[key.name] = val;                                                                                       // 601
      }                                                                                                               // 602
    }                                                                                                                 // 603
                                                                                                                      // 604
    return true;                                                                                                      // 605
  };                                                                                                                  // 606
                                                                                                                      // 607
                                                                                                                      // 608
  /**                                                                                                                 // 609
   * Handle "populate" events.                                                                                        // 610
   */                                                                                                                 // 611
                                                                                                                      // 612
  var onpopstate = (function () {                                                                                     // 613
    var loaded = false;                                                                                               // 614
    if ('undefined' === typeof window) {                                                                              // 615
      return;                                                                                                         // 616
    }                                                                                                                 // 617
    if (document.readyState === 'complete') {                                                                         // 618
      loaded = true;                                                                                                  // 619
    } else {                                                                                                          // 620
      window.addEventListener('load', function() {                                                                    // 621
        setTimeout(function() {                                                                                       // 622
          loaded = true;                                                                                              // 623
        }, 0);                                                                                                        // 624
      });                                                                                                             // 625
    }                                                                                                                 // 626
    return function onpopstate(e) {                                                                                   // 627
      if (!loaded) return;                                                                                            // 628
      if (e.state) {                                                                                                  // 629
        var path = e.state.path;                                                                                      // 630
        page.replace(path, e.state);                                                                                  // 631
      } else {                                                                                                        // 632
        page.show(location.pathname + location.hash, undefined, undefined, false);                                    // 633
      }                                                                                                               // 634
    };                                                                                                                // 635
  })();                                                                                                               // 636
  /**                                                                                                                 // 637
   * Handle "click" events.                                                                                           // 638
   */                                                                                                                 // 639
                                                                                                                      // 640
  function onclick(e) {                                                                                               // 641
                                                                                                                      // 642
    if (1 !== which(e)) return;                                                                                       // 643
                                                                                                                      // 644
    if (e.metaKey || e.ctrlKey || e.shiftKey) return;                                                                 // 645
    if (e.defaultPrevented) return;                                                                                   // 646
                                                                                                                      // 647
                                                                                                                      // 648
                                                                                                                      // 649
    // ensure link                                                                                                    // 650
    var el = e.target;                                                                                                // 651
    while (el && 'A' !== el.nodeName) el = el.parentNode;                                                             // 652
    if (!el || 'A' !== el.nodeName) return;                                                                           // 653
                                                                                                                      // 654
                                                                                                                      // 655
                                                                                                                      // 656
    // Ignore if tag has                                                                                              // 657
    // 1. "download" attribute                                                                                        // 658
    // 2. rel="external" attribute                                                                                    // 659
    if (el.hasAttribute('download') || el.getAttribute('rel') === 'external') return;                                 // 660
                                                                                                                      // 661
    // ensure non-hash for the same path                                                                              // 662
    var link = el.getAttribute('href');                                                                               // 663
    if (!hashbang && el.pathname === location.pathname && (el.hash || '#' === link)) return;                          // 664
                                                                                                                      // 665
                                                                                                                      // 666
                                                                                                                      // 667
    // Check for mailto: in the href                                                                                  // 668
    if (link && link.indexOf('mailto:') > -1) return;                                                                 // 669
                                                                                                                      // 670
    // check target                                                                                                   // 671
    if (el.target) return;                                                                                            // 672
                                                                                                                      // 673
    // x-origin                                                                                                       // 674
    if (!sameOrigin(el.href)) return;                                                                                 // 675
                                                                                                                      // 676
                                                                                                                      // 677
                                                                                                                      // 678
    // rebuild path                                                                                                   // 679
    var path = el.pathname + el.search + (el.hash || '');                                                             // 680
                                                                                                                      // 681
    path = path[0] !== '/' ? '/' + path : path;                                                                       // 682
                                                                                                                      // 683
    // strip leading "/[drive letter]:" on NW.js on Windows                                                           // 684
    if (typeof process !== 'undefined' && path.match(/^\/[a-zA-Z]:\//)) {                                             // 685
      path = path.replace(/^\/[a-zA-Z]:\//, '/');                                                                     // 686
    }                                                                                                                 // 687
                                                                                                                      // 688
    // same page                                                                                                      // 689
    var orig = path;                                                                                                  // 690
                                                                                                                      // 691
    if (path.indexOf(base) === 0) {                                                                                   // 692
      path = path.substr(base.length);                                                                                // 693
    }                                                                                                                 // 694
                                                                                                                      // 695
    if (hashbang) path = path.replace('#!', '');                                                                      // 696
                                                                                                                      // 697
    if (base && orig === path) return;                                                                                // 698
                                                                                                                      // 699
    e.preventDefault();                                                                                               // 700
    page.show(orig);                                                                                                  // 701
  }                                                                                                                   // 702
                                                                                                                      // 703
  /**                                                                                                                 // 704
   * Event button.                                                                                                    // 705
   */                                                                                                                 // 706
                                                                                                                      // 707
  function which(e) {                                                                                                 // 708
    e = e || window.event;                                                                                            // 709
    return null === e.which ? e.button : e.which;                                                                     // 710
  }                                                                                                                   // 711
                                                                                                                      // 712
  /**                                                                                                                 // 713
   * Check if `href` is the same origin.                                                                              // 714
   */                                                                                                                 // 715
                                                                                                                      // 716
  function sameOrigin(href) {                                                                                         // 717
    var origin = location.protocol + '//' + location.hostname;                                                        // 718
    if (location.port) origin += ':' + location.port;                                                                 // 719
    return (href && (0 === href.indexOf(origin)));                                                                    // 720
  }                                                                                                                   // 721
                                                                                                                      // 722
  page.sameOrigin = sameOrigin;                                                                                       // 723
                                                                                                                      // 724
}).call(this,require('_process'))                                                                                     // 725
                                                                                                                      // 726
},{"_process":1,"path-to-regexp":3}],3:[function(require,module,exports){                                             // 727
var isArray = require('isarray');                                                                                     // 728
                                                                                                                      // 729
/**                                                                                                                   // 730
 * Expose `pathToRegexp`.                                                                                             // 731
 */                                                                                                                   // 732
module.exports = pathToRegexp;                                                                                        // 733
                                                                                                                      // 734
/**                                                                                                                   // 735
 * The main path matching regexp utility.                                                                             // 736
 *                                                                                                                    // 737
 * @type {RegExp}                                                                                                     // 738
 */                                                                                                                   // 739
var PATH_REGEXP = new RegExp([                                                                                        // 740
  // Match escaped characters that would otherwise appear in future matches.                                          // 741
  // This allows the user to escape special characters that won't transform.                                          // 742
  '(\\\\.)',                                                                                                          // 743
  // Match Express-style parameters and un-named parameters with a prefix                                             // 744
  // and optional suffixes. Matches appear as:                                                                        // 745
  //                                                                                                                  // 746
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?"]                                                          // 747
  // "/route(\\d+)" => [undefined, undefined, undefined, "\d+", undefined]                                            // 748
  '([\\/.])?(?:\\:(\\w+)(?:\\(((?:\\\\.|[^)])*)\\))?|\\(((?:\\\\.|[^)])*)\\))([+*?])?',                               // 749
  // Match regexp special characters that are always escaped.                                                         // 750
  '([.+*?=^!:${}()[\\]|\\/])'                                                                                         // 751
].join('|'), 'g');                                                                                                    // 752
                                                                                                                      // 753
/**                                                                                                                   // 754
 * Escape the capturing group by escaping special characters and meaning.                                             // 755
 *                                                                                                                    // 756
 * @param  {String} group                                                                                             // 757
 * @return {String}                                                                                                   // 758
 */                                                                                                                   // 759
function escapeGroup (group) {                                                                                        // 760
  return group.replace(/([=!:$\/()])/g, '\\$1');                                                                      // 761
}                                                                                                                     // 762
                                                                                                                      // 763
/**                                                                                                                   // 764
 * Attach the keys as a property of the regexp.                                                                       // 765
 *                                                                                                                    // 766
 * @param  {RegExp} re                                                                                                // 767
 * @param  {Array}  keys                                                                                              // 768
 * @return {RegExp}                                                                                                   // 769
 */                                                                                                                   // 770
function attachKeys (re, keys) {                                                                                      // 771
  re.keys = keys;                                                                                                     // 772
  return re;                                                                                                          // 773
}                                                                                                                     // 774
                                                                                                                      // 775
/**                                                                                                                   // 776
 * Get the flags for a regexp from the options.                                                                       // 777
 *                                                                                                                    // 778
 * @param  {Object} options                                                                                           // 779
 * @return {String}                                                                                                   // 780
 */                                                                                                                   // 781
function flags (options) {                                                                                            // 782
  return options.sensitive ? '' : 'i';                                                                                // 783
}                                                                                                                     // 784
                                                                                                                      // 785
/**                                                                                                                   // 786
 * Pull out keys from a regexp.                                                                                       // 787
 *                                                                                                                    // 788
 * @param  {RegExp} path                                                                                              // 789
 * @param  {Array}  keys                                                                                              // 790
 * @return {RegExp}                                                                                                   // 791
 */                                                                                                                   // 792
function regexpToRegexp (path, keys) {                                                                                // 793
  // Use a negative lookahead to match only capturing groups.                                                         // 794
  var groups = path.source.match(/\((?!\?)/g);                                                                        // 795
                                                                                                                      // 796
  if (groups) {                                                                                                       // 797
    for (var i = 0; i < groups.length; i++) {                                                                         // 798
      keys.push({                                                                                                     // 799
        name:      i,                                                                                                 // 800
        delimiter: null,                                                                                              // 801
        optional:  false,                                                                                             // 802
        repeat:    false                                                                                              // 803
      });                                                                                                             // 804
    }                                                                                                                 // 805
  }                                                                                                                   // 806
                                                                                                                      // 807
  return attachKeys(path, keys);                                                                                      // 808
}                                                                                                                     // 809
                                                                                                                      // 810
/**                                                                                                                   // 811
 * Transform an array into a regexp.                                                                                  // 812
 *                                                                                                                    // 813
 * @param  {Array}  path                                                                                              // 814
 * @param  {Array}  keys                                                                                              // 815
 * @param  {Object} options                                                                                           // 816
 * @return {RegExp}                                                                                                   // 817
 */                                                                                                                   // 818
function arrayToRegexp (path, keys, options) {                                                                        // 819
  var parts = [];                                                                                                     // 820
                                                                                                                      // 821
  for (var i = 0; i < path.length; i++) {                                                                             // 822
    parts.push(pathToRegexp(path[i], keys, options).source);                                                          // 823
  }                                                                                                                   // 824
                                                                                                                      // 825
  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));                                             // 826
  return attachKeys(regexp, keys);                                                                                    // 827
}                                                                                                                     // 828
                                                                                                                      // 829
/**                                                                                                                   // 830
 * Replace the specific tags with regexp strings.                                                                     // 831
 *                                                                                                                    // 832
 * @param  {String} path                                                                                              // 833
 * @param  {Array}  keys                                                                                              // 834
 * @return {String}                                                                                                   // 835
 */                                                                                                                   // 836
function replacePath (path, keys) {                                                                                   // 837
  var index = 0;                                                                                                      // 838
                                                                                                                      // 839
  function replace (_, escaped, prefix, key, capture, group, suffix, escape) {                                        // 840
    if (escaped) {                                                                                                    // 841
      return escaped;                                                                                                 // 842
    }                                                                                                                 // 843
                                                                                                                      // 844
    if (escape) {                                                                                                     // 845
      return '\\' + escape;                                                                                           // 846
    }                                                                                                                 // 847
                                                                                                                      // 848
    var repeat   = suffix === '+' || suffix === '*';                                                                  // 849
    var optional = suffix === '?' || suffix === '*';                                                                  // 850
                                                                                                                      // 851
    keys.push({                                                                                                       // 852
      name:      key || index++,                                                                                      // 853
      delimiter: prefix || '/',                                                                                       // 854
      optional:  optional,                                                                                            // 855
      repeat:    repeat                                                                                               // 856
    });                                                                                                               // 857
                                                                                                                      // 858
    prefix = prefix ? ('\\' + prefix) : '';                                                                           // 859
    capture = escapeGroup(capture || group || '[^' + (prefix || '\\/') + ']+?');                                      // 860
                                                                                                                      // 861
    if (repeat) {                                                                                                     // 862
      capture = capture + '(?:' + prefix + capture + ')*';                                                            // 863
    }                                                                                                                 // 864
                                                                                                                      // 865
    if (optional) {                                                                                                   // 866
      return '(?:' + prefix + '(' + capture + '))?';                                                                  // 867
    }                                                                                                                 // 868
                                                                                                                      // 869
    // Basic parameter support.                                                                                       // 870
    return prefix + '(' + capture + ')';                                                                              // 871
  }                                                                                                                   // 872
                                                                                                                      // 873
  return path.replace(PATH_REGEXP, replace);                                                                          // 874
}                                                                                                                     // 875
                                                                                                                      // 876
/**                                                                                                                   // 877
 * Normalize the given path string, returning a regular expression.                                                   // 878
 *                                                                                                                    // 879
 * An empty array can be passed in for the keys, which will hold the                                                  // 880
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will                                          // 881
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.                                        // 882
 *                                                                                                                    // 883
 * @param  {(String|RegExp|Array)} path                                                                               // 884
 * @param  {Array}                 [keys]                                                                             // 885
 * @param  {Object}                [options]                                                                          // 886
 * @return {RegExp}                                                                                                   // 887
 */                                                                                                                   // 888
function pathToRegexp (path, keys, options) {                                                                         // 889
  keys = keys || [];                                                                                                  // 890
                                                                                                                      // 891
  if (!isArray(keys)) {                                                                                               // 892
    options = keys;                                                                                                   // 893
    keys = [];                                                                                                        // 894
  } else if (!options) {                                                                                              // 895
    options = {};                                                                                                     // 896
  }                                                                                                                   // 897
                                                                                                                      // 898
  if (path instanceof RegExp) {                                                                                       // 899
    return regexpToRegexp(path, keys, options);                                                                       // 900
  }                                                                                                                   // 901
                                                                                                                      // 902
  if (isArray(path)) {                                                                                                // 903
    return arrayToRegexp(path, keys, options);                                                                        // 904
  }                                                                                                                   // 905
                                                                                                                      // 906
  var strict = options.strict;                                                                                        // 907
  var end = options.end !== false;                                                                                    // 908
  var route = replacePath(path, keys);                                                                                // 909
  var endsWithSlash = path.charAt(path.length - 1) === '/';                                                           // 910
                                                                                                                      // 911
  // In non-strict mode we allow a slash at the end of match. If the path to                                          // 912
  // match already ends with a slash, we remove it for consistency. The slash                                         // 913
  // is valid at the end of a path match, not in the middle. This is important                                        // 914
  // in non-ending mode, where "/test/" shouldn't match "/test//route".                                               // 915
  if (!strict) {                                                                                                      // 916
    route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?';                                           // 917
  }                                                                                                                   // 918
                                                                                                                      // 919
  if (end) {                                                                                                          // 920
    route += '$';                                                                                                     // 921
  } else {                                                                                                            // 922
    // In non-ending mode, we need the capturing groups to match as much as                                           // 923
    // possible by using a positive lookahead to the end or next path segment.                                        // 924
    route += strict && endsWithSlash ? '' : '(?=\\/|$)';                                                              // 925
  }                                                                                                                   // 926
                                                                                                                      // 927
  return attachKeys(new RegExp('^' + route, flags(options)), keys);                                                   // 928
}                                                                                                                     // 929
                                                                                                                      // 930
},{"isarray":4}],4:[function(require,module,exports){                                                                 // 931
module.exports = Array.isArray || function (arr) {                                                                    // 932
  return Object.prototype.toString.call(arr) == '[object Array]';                                                     // 933
};                                                                                                                    // 934
                                                                                                                      // 935
},{}],5:[function(require,module,exports){                                                                            // 936
module.exports = require('./lib/');                                                                                   // 937
                                                                                                                      // 938
},{"./lib/":6}],6:[function(require,module,exports){                                                                  // 939
// Load modules                                                                                                       // 940
                                                                                                                      // 941
var Stringify = require('./stringify');                                                                               // 942
var Parse = require('./parse');                                                                                       // 943
                                                                                                                      // 944
                                                                                                                      // 945
// Declare internals                                                                                                  // 946
                                                                                                                      // 947
var internals = {};                                                                                                   // 948
                                                                                                                      // 949
                                                                                                                      // 950
module.exports = {                                                                                                    // 951
    stringify: Stringify,                                                                                             // 952
    parse: Parse                                                                                                      // 953
};                                                                                                                    // 954
                                                                                                                      // 955
},{"./parse":7,"./stringify":8}],7:[function(require,module,exports){                                                 // 956
// Load modules                                                                                                       // 957
                                                                                                                      // 958
var Utils = require('./utils');                                                                                       // 959
                                                                                                                      // 960
                                                                                                                      // 961
// Declare internals                                                                                                  // 962
                                                                                                                      // 963
var internals = {                                                                                                     // 964
    delimiter: '&',                                                                                                   // 965
    depth: 5,                                                                                                         // 966
    arrayLimit: 20,                                                                                                   // 967
    parameterLimit: 1000,                                                                                             // 968
    strictNullHandling: false                                                                                         // 969
};                                                                                                                    // 970
                                                                                                                      // 971
                                                                                                                      // 972
internals.parseValues = function (str, options) {                                                                     // 973
                                                                                                                      // 974
    var obj = {};                                                                                                     // 975
    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);
                                                                                                                      // 977
    for (var i = 0, il = parts.length; i < il; ++i) {                                                                 // 978
        var part = parts[i];                                                                                          // 979
        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;                             // 980
                                                                                                                      // 981
        if (pos === -1) {                                                                                             // 982
            obj[Utils.decode(part)] = '';                                                                             // 983
                                                                                                                      // 984
            if (options.strictNullHandling) {                                                                         // 985
                obj[Utils.decode(part)] = null;                                                                       // 986
            }                                                                                                         // 987
        }                                                                                                             // 988
        else {                                                                                                        // 989
            var key = Utils.decode(part.slice(0, pos));                                                               // 990
            var val = Utils.decode(part.slice(pos + 1));                                                              // 991
                                                                                                                      // 992
            if (!Object.prototype.hasOwnProperty.call(obj, key)) {                                                    // 993
                obj[key] = val;                                                                                       // 994
            }                                                                                                         // 995
            else {                                                                                                    // 996
                obj[key] = [].concat(obj[key]).concat(val);                                                           // 997
            }                                                                                                         // 998
        }                                                                                                             // 999
    }                                                                                                                 // 1000
                                                                                                                      // 1001
    return obj;                                                                                                       // 1002
};                                                                                                                    // 1003
                                                                                                                      // 1004
                                                                                                                      // 1005
internals.parseObject = function (chain, val, options) {                                                              // 1006
                                                                                                                      // 1007
    if (!chain.length) {                                                                                              // 1008
        return val;                                                                                                   // 1009
    }                                                                                                                 // 1010
                                                                                                                      // 1011
    var root = chain.shift();                                                                                         // 1012
                                                                                                                      // 1013
    var obj;                                                                                                          // 1014
    if (root === '[]') {                                                                                              // 1015
        obj = [];                                                                                                     // 1016
        obj = obj.concat(internals.parseObject(chain, val, options));                                                 // 1017
    }                                                                                                                 // 1018
    else {                                                                                                            // 1019
        obj = Object.create(null);                                                                                    // 1020
        var cleanRoot = root[0] === '[' && root[root.length - 1] === ']' ? root.slice(1, root.length - 1) : root;     // 1021
        var index = parseInt(cleanRoot, 10);                                                                          // 1022
        var indexString = '' + index;                                                                                 // 1023
        if (!isNaN(index) &&                                                                                          // 1024
            root !== cleanRoot &&                                                                                     // 1025
            indexString === cleanRoot &&                                                                              // 1026
            index >= 0 &&                                                                                             // 1027
            (options.parseArrays &&                                                                                   // 1028
             index <= options.arrayLimit)) {                                                                          // 1029
                                                                                                                      // 1030
            obj = [];                                                                                                 // 1031
            obj[index] = internals.parseObject(chain, val, options);                                                  // 1032
        }                                                                                                             // 1033
        else {                                                                                                        // 1034
            obj[cleanRoot] = internals.parseObject(chain, val, options);                                              // 1035
        }                                                                                                             // 1036
    }                                                                                                                 // 1037
                                                                                                                      // 1038
    return obj;                                                                                                       // 1039
};                                                                                                                    // 1040
                                                                                                                      // 1041
                                                                                                                      // 1042
internals.parseKeys = function (key, val, options) {                                                                  // 1043
                                                                                                                      // 1044
    if (!key) {                                                                                                       // 1045
        return;                                                                                                       // 1046
    }                                                                                                                 // 1047
                                                                                                                      // 1048
    // Transform dot notation to bracket notation                                                                     // 1049
                                                                                                                      // 1050
    if (options.allowDots) {                                                                                          // 1051
        key = key.replace(/\.([^\.\[]+)/g, '[$1]');                                                                   // 1052
    }                                                                                                                 // 1053
                                                                                                                      // 1054
    // The regex chunks                                                                                               // 1055
                                                                                                                      // 1056
    var parent = /^([^\[\]]*)/;                                                                                       // 1057
    var child = /(\[[^\[\]]*\])/g;                                                                                    // 1058
                                                                                                                      // 1059
    // Get the parent                                                                                                 // 1060
                                                                                                                      // 1061
    var segment = parent.exec(key);                                                                                   // 1062
                                                                                                                      // 1063
    // Stash the parent if it exists                                                                                  // 1064
                                                                                                                      // 1065
    var keys = [];                                                                                                    // 1066
    if (segment[1]) {                                                                                                 // 1067
        keys.push(segment[1]);                                                                                        // 1068
    }                                                                                                                 // 1069
                                                                                                                      // 1070
    // Loop through children appending to the array until we hit depth                                                // 1071
                                                                                                                      // 1072
    var i = 0;                                                                                                        // 1073
    while ((segment = child.exec(key)) !== null && i < options.depth) {                                               // 1074
                                                                                                                      // 1075
        ++i;                                                                                                          // 1076
        keys.push(segment[1]);                                                                                        // 1077
    }                                                                                                                 // 1078
                                                                                                                      // 1079
    // If there's a remainder, just add whatever is left                                                              // 1080
                                                                                                                      // 1081
    if (segment) {                                                                                                    // 1082
        keys.push('[' + key.slice(segment.index) + ']');                                                              // 1083
    }                                                                                                                 // 1084
                                                                                                                      // 1085
    return internals.parseObject(keys, val, options);                                                                 // 1086
};                                                                                                                    // 1087
                                                                                                                      // 1088
                                                                                                                      // 1089
module.exports = function (str, options) {                                                                            // 1090
                                                                                                                      // 1091
    if (str === '' ||                                                                                                 // 1092
        str === null ||                                                                                               // 1093
        typeof str === 'undefined') {                                                                                 // 1094
                                                                                                                      // 1095
        return Object.create(null);                                                                                   // 1096
    }                                                                                                                 // 1097
                                                                                                                      // 1098
    options = options || {};                                                                                          // 1099
    options.delimiter = typeof options.delimiter === 'string' || Utils.isRegExp(options.delimiter) ? options.delimiter : internals.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : internals.depth;                              // 1101
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : internals.arrayLimit;          // 1102
    options.parseArrays = options.parseArrays !== false;                                                              // 1103
    options.allowDots = options.allowDots !== false;                                                                  // 1104
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : internals.parameterLimit;
    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : internals.strictNullHandling;
                                                                                                                      // 1107
                                                                                                                      // 1108
    var tempObj = typeof str === 'string' ? internals.parseValues(str, options) : str;                                // 1109
    var obj = Object.create(null);                                                                                    // 1110
                                                                                                                      // 1111
    // Iterate over the keys and setup the new object                                                                 // 1112
                                                                                                                      // 1113
    var keys = Object.keys(tempObj);                                                                                  // 1114
    for (var i = 0, il = keys.length; i < il; ++i) {                                                                  // 1115
        var key = keys[i];                                                                                            // 1116
        var newObj = internals.parseKeys(key, tempObj[key], options);                                                 // 1117
        obj = Utils.merge(obj, newObj);                                                                               // 1118
    }                                                                                                                 // 1119
                                                                                                                      // 1120
    return Utils.compact(obj);                                                                                        // 1121
};                                                                                                                    // 1122
                                                                                                                      // 1123
},{"./utils":9}],8:[function(require,module,exports){                                                                 // 1124
// Load modules                                                                                                       // 1125
                                                                                                                      // 1126
var Utils = require('./utils');                                                                                       // 1127
                                                                                                                      // 1128
                                                                                                                      // 1129
// Declare internals                                                                                                  // 1130
                                                                                                                      // 1131
var internals = {                                                                                                     // 1132
    delimiter: '&',                                                                                                   // 1133
    arrayPrefixGenerators: {                                                                                          // 1134
        brackets: function (prefix, key) {                                                                            // 1135
                                                                                                                      // 1136
            return prefix + '[]';                                                                                     // 1137
        },                                                                                                            // 1138
        indices: function (prefix, key) {                                                                             // 1139
                                                                                                                      // 1140
            return prefix + '[' + key + ']';                                                                          // 1141
        },                                                                                                            // 1142
        repeat: function (prefix, key) {                                                                              // 1143
                                                                                                                      // 1144
            return prefix;                                                                                            // 1145
        }                                                                                                             // 1146
    },                                                                                                                // 1147
    strictNullHandling: false                                                                                         // 1148
};                                                                                                                    // 1149
                                                                                                                      // 1150
                                                                                                                      // 1151
internals.stringify = function (obj, prefix, generateArrayPrefix, strictNullHandling, filter) {                       // 1152
                                                                                                                      // 1153
    if (typeof filter === 'function') {                                                                               // 1154
        obj = filter(prefix, obj);                                                                                    // 1155
    }                                                                                                                 // 1156
    else if (Utils.isBuffer(obj)) {                                                                                   // 1157
        obj = obj.toString();                                                                                         // 1158
    }                                                                                                                 // 1159
    else if (obj instanceof Date) {                                                                                   // 1160
        obj = obj.toISOString();                                                                                      // 1161
    }                                                                                                                 // 1162
    else if (obj === null) {                                                                                          // 1163
        if (strictNullHandling) {                                                                                     // 1164
            return Utils.encode(prefix);                                                                              // 1165
        }                                                                                                             // 1166
                                                                                                                      // 1167
        obj = '';                                                                                                     // 1168
    }                                                                                                                 // 1169
                                                                                                                      // 1170
    if (typeof obj === 'string' ||                                                                                    // 1171
        typeof obj === 'number' ||                                                                                    // 1172
        typeof obj === 'boolean') {                                                                                   // 1173
                                                                                                                      // 1174
        return [Utils.encode(prefix) + '=' + Utils.encode(obj)];                                                      // 1175
    }                                                                                                                 // 1176
                                                                                                                      // 1177
    var values = [];                                                                                                  // 1178
                                                                                                                      // 1179
    if (typeof obj === 'undefined') {                                                                                 // 1180
        return values;                                                                                                // 1181
    }                                                                                                                 // 1182
                                                                                                                      // 1183
    var objKeys = Array.isArray(filter) ? filter : Object.keys(obj);                                                  // 1184
    for (var i = 0, il = objKeys.length; i < il; ++i) {                                                               // 1185
        var key = objKeys[i];                                                                                         // 1186
                                                                                                                      // 1187
        if (Array.isArray(obj)) {                                                                                     // 1188
            values = values.concat(internals.stringify(obj[key], generateArrayPrefix(prefix, key), generateArrayPrefix, strictNullHandling, filter));
        }                                                                                                             // 1190
        else {                                                                                                        // 1191
            values = values.concat(internals.stringify(obj[key], prefix + '[' + key + ']', generateArrayPrefix, strictNullHandling, filter));
        }                                                                                                             // 1193
    }                                                                                                                 // 1194
                                                                                                                      // 1195
    return values;                                                                                                    // 1196
};                                                                                                                    // 1197
                                                                                                                      // 1198
                                                                                                                      // 1199
module.exports = function (obj, options) {                                                                            // 1200
                                                                                                                      // 1201
    options = options || {};                                                                                          // 1202
    var delimiter = typeof options.delimiter === 'undefined' ? internals.delimiter : options.delimiter;               // 1203
    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : internals.strictNullHandling;
    var objKeys;                                                                                                      // 1205
    var filter;                                                                                                       // 1206
    if (typeof options.filter === 'function') {                                                                       // 1207
        filter = options.filter;                                                                                      // 1208
        obj = filter('', obj);                                                                                        // 1209
    }                                                                                                                 // 1210
    else if (Array.isArray(options.filter)) {                                                                         // 1211
        objKeys = filter = options.filter;                                                                            // 1212
    }                                                                                                                 // 1213
                                                                                                                      // 1214
    var keys = [];                                                                                                    // 1215
                                                                                                                      // 1216
    if (typeof obj !== 'object' ||                                                                                    // 1217
        obj === null) {                                                                                               // 1218
                                                                                                                      // 1219
        return '';                                                                                                    // 1220
    }                                                                                                                 // 1221
                                                                                                                      // 1222
    var arrayFormat;                                                                                                  // 1223
    if (options.arrayFormat in internals.arrayPrefixGenerators) {                                                     // 1224
        arrayFormat = options.arrayFormat;                                                                            // 1225
    }                                                                                                                 // 1226
    else if ('indices' in options) {                                                                                  // 1227
        arrayFormat = options.indices ? 'indices' : 'repeat';                                                         // 1228
    }                                                                                                                 // 1229
    else {                                                                                                            // 1230
        arrayFormat = 'indices';                                                                                      // 1231
    }                                                                                                                 // 1232
                                                                                                                      // 1233
    var generateArrayPrefix = internals.arrayPrefixGenerators[arrayFormat];                                           // 1234
                                                                                                                      // 1235
    if (!objKeys) {                                                                                                   // 1236
        objKeys = Object.keys(obj);                                                                                   // 1237
    }                                                                                                                 // 1238
    for (var i = 0, il = objKeys.length; i < il; ++i) {                                                               // 1239
        var key = objKeys[i];                                                                                         // 1240
        keys = keys.concat(internals.stringify(obj[key], key, generateArrayPrefix, strictNullHandling, filter));      // 1241
    }                                                                                                                 // 1242
                                                                                                                      // 1243
    return keys.join(delimiter);                                                                                      // 1244
};                                                                                                                    // 1245
                                                                                                                      // 1246
},{"./utils":9}],9:[function(require,module,exports){                                                                 // 1247
// Load modules                                                                                                       // 1248
                                                                                                                      // 1249
                                                                                                                      // 1250
// Declare internals                                                                                                  // 1251
                                                                                                                      // 1252
var internals = {};                                                                                                   // 1253
internals.hexTable = new Array(256);                                                                                  // 1254
for (var i = 0; i < 256; ++i) {                                                                                       // 1255
    internals.hexTable[i] = '%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase();                               // 1256
}                                                                                                                     // 1257
                                                                                                                      // 1258
                                                                                                                      // 1259
exports.arrayToObject = function (source) {                                                                           // 1260
                                                                                                                      // 1261
    var obj = Object.create(null);                                                                                    // 1262
    for (var i = 0, il = source.length; i < il; ++i) {                                                                // 1263
        if (typeof source[i] !== 'undefined') {                                                                       // 1264
                                                                                                                      // 1265
            obj[i] = source[i];                                                                                       // 1266
        }                                                                                                             // 1267
    }                                                                                                                 // 1268
                                                                                                                      // 1269
    return obj;                                                                                                       // 1270
};                                                                                                                    // 1271
                                                                                                                      // 1272
                                                                                                                      // 1273
exports.merge = function (target, source) {                                                                           // 1274
                                                                                                                      // 1275
    if (!source) {                                                                                                    // 1276
        return target;                                                                                                // 1277
    }                                                                                                                 // 1278
                                                                                                                      // 1279
    if (typeof source !== 'object') {                                                                                 // 1280
        if (Array.isArray(target)) {                                                                                  // 1281
            target.push(source);                                                                                      // 1282
        }                                                                                                             // 1283
        else if (typeof target === 'object') {                                                                        // 1284
            target[source] = true;                                                                                    // 1285
        }                                                                                                             // 1286
        else {                                                                                                        // 1287
            target = [target, source];                                                                                // 1288
        }                                                                                                             // 1289
                                                                                                                      // 1290
        return target;                                                                                                // 1291
    }                                                                                                                 // 1292
                                                                                                                      // 1293
    if (typeof target !== 'object') {                                                                                 // 1294
        target = [target].concat(source);                                                                             // 1295
        return target;                                                                                                // 1296
    }                                                                                                                 // 1297
                                                                                                                      // 1298
    if (Array.isArray(target) &&                                                                                      // 1299
        !Array.isArray(source)) {                                                                                     // 1300
                                                                                                                      // 1301
        target = exports.arrayToObject(target);                                                                       // 1302
    }                                                                                                                 // 1303
                                                                                                                      // 1304
    var keys = Object.keys(source);                                                                                   // 1305
    for (var k = 0, kl = keys.length; k < kl; ++k) {                                                                  // 1306
        var key = keys[k];                                                                                            // 1307
        var value = source[key];                                                                                      // 1308
                                                                                                                      // 1309
        if (!target[key]) {                                                                                           // 1310
            target[key] = value;                                                                                      // 1311
        }                                                                                                             // 1312
        else {                                                                                                        // 1313
            target[key] = exports.merge(target[key], value);                                                          // 1314
        }                                                                                                             // 1315
    }                                                                                                                 // 1316
                                                                                                                      // 1317
    return target;                                                                                                    // 1318
};                                                                                                                    // 1319
                                                                                                                      // 1320
                                                                                                                      // 1321
exports.decode = function (str) {                                                                                     // 1322
                                                                                                                      // 1323
    try {                                                                                                             // 1324
        return decodeURIComponent(str.replace(/\+/g, ' '));                                                           // 1325
    } catch (e) {                                                                                                     // 1326
        return str;                                                                                                   // 1327
    }                                                                                                                 // 1328
};                                                                                                                    // 1329
                                                                                                                      // 1330
exports.encode = function (str) {                                                                                     // 1331
                                                                                                                      // 1332
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.               // 1333
    // It has been adapted here for stricter adherence to RFC 3986                                                    // 1334
    if (str.length === 0) {                                                                                           // 1335
        return str;                                                                                                   // 1336
    }                                                                                                                 // 1337
                                                                                                                      // 1338
    if (typeof str !== 'string') {                                                                                    // 1339
        str = '' + str;                                                                                               // 1340
    }                                                                                                                 // 1341
                                                                                                                      // 1342
    var out = '';                                                                                                     // 1343
    for (var i = 0, il = str.length; i < il; ++i) {                                                                   // 1344
        var c = str.charCodeAt(i);                                                                                    // 1345
                                                                                                                      // 1346
        if (c === 0x2D || // -                                                                                        // 1347
            c === 0x2E || // .                                                                                        // 1348
            c === 0x5F || // _                                                                                        // 1349
            c === 0x7E || // ~                                                                                        // 1350
            (c >= 0x30 && c <= 0x39) || // 0-9                                                                        // 1351
            (c >= 0x41 && c <= 0x5A) || // a-z                                                                        // 1352
            (c >= 0x61 && c <= 0x7A)) { // A-Z                                                                        // 1353
                                                                                                                      // 1354
            out += str[i];                                                                                            // 1355
            continue;                                                                                                 // 1356
        }                                                                                                             // 1357
                                                                                                                      // 1358
        if (c < 0x80) {                                                                                               // 1359
            out += internals.hexTable[c];                                                                             // 1360
            continue;                                                                                                 // 1361
        }                                                                                                             // 1362
                                                                                                                      // 1363
        if (c < 0x800) {                                                                                              // 1364
            out += internals.hexTable[0xC0 | (c >> 6)] + internals.hexTable[0x80 | (c & 0x3F)];                       // 1365
            continue;                                                                                                 // 1366
        }                                                                                                             // 1367
                                                                                                                      // 1368
        if (c < 0xD800 || c >= 0xE000) {                                                                              // 1369
            out += internals.hexTable[0xE0 | (c >> 12)] + internals.hexTable[0x80 | ((c >> 6) & 0x3F)] + internals.hexTable[0x80 | (c & 0x3F)];
            continue;                                                                                                 // 1371
        }                                                                                                             // 1372
                                                                                                                      // 1373
        ++i;                                                                                                          // 1374
        c = 0x10000 + (((c & 0x3FF) << 10) | (str.charCodeAt(i) & 0x3FF));                                            // 1375
        out += internals.hexTable[0xF0 | (c >> 18)] + internals.hexTable[0x80 | ((c >> 12) & 0x3F)] + internals.hexTable[0x80 | ((c >> 6) & 0x3F)] + internals.hexTable[0x80 | (c & 0x3F)];
    }                                                                                                                 // 1377
                                                                                                                      // 1378
    return out;                                                                                                       // 1379
};                                                                                                                    // 1380
                                                                                                                      // 1381
exports.compact = function (obj, refs) {                                                                              // 1382
                                                                                                                      // 1383
    if (typeof obj !== 'object' ||                                                                                    // 1384
        obj === null) {                                                                                               // 1385
                                                                                                                      // 1386
        return obj;                                                                                                   // 1387
    }                                                                                                                 // 1388
                                                                                                                      // 1389
    refs = refs || [];                                                                                                // 1390
    var lookup = refs.indexOf(obj);                                                                                   // 1391
    if (lookup !== -1) {                                                                                              // 1392
        return refs[lookup];                                                                                          // 1393
    }                                                                                                                 // 1394
                                                                                                                      // 1395
    refs.push(obj);                                                                                                   // 1396
                                                                                                                      // 1397
    if (Array.isArray(obj)) {                                                                                         // 1398
        var compacted = [];                                                                                           // 1399
                                                                                                                      // 1400
        for (var i = 0, il = obj.length; i < il; ++i) {                                                               // 1401
            if (typeof obj[i] !== 'undefined') {                                                                      // 1402
                compacted.push(obj[i]);                                                                               // 1403
            }                                                                                                         // 1404
        }                                                                                                             // 1405
                                                                                                                      // 1406
        return compacted;                                                                                             // 1407
    }                                                                                                                 // 1408
                                                                                                                      // 1409
    var keys = Object.keys(obj);                                                                                      // 1410
    for (i = 0, il = keys.length; i < il; ++i) {                                                                      // 1411
        var key = keys[i];                                                                                            // 1412
        obj[key] = exports.compact(obj[key], refs);                                                                   // 1413
    }                                                                                                                 // 1414
                                                                                                                      // 1415
    return obj;                                                                                                       // 1416
};                                                                                                                    // 1417
                                                                                                                      // 1418
                                                                                                                      // 1419
exports.isRegExp = function (obj) {                                                                                   // 1420
                                                                                                                      // 1421
    return Object.prototype.toString.call(obj) === '[object RegExp]';                                                 // 1422
};                                                                                                                    // 1423
                                                                                                                      // 1424
                                                                                                                      // 1425
exports.isBuffer = function (obj) {                                                                                   // 1426
                                                                                                                      // 1427
    if (obj === null ||                                                                                               // 1428
        typeof obj === 'undefined') {                                                                                 // 1429
                                                                                                                      // 1430
        return false;                                                                                                 // 1431
    }                                                                                                                 // 1432
                                                                                                                      // 1433
    return !!(obj.constructor &&                                                                                      // 1434
              obj.constructor.isBuffer &&                                                                             // 1435
              obj.constructor.isBuffer(obj));                                                                         // 1436
};                                                                                                                    // 1437
                                                                                                                      // 1438
},{}],10:[function(require,module,exports){                                                                           // 1439
page = require('page');                                                                                               // 1440
qs   = require('qs');                                                                                                 // 1441
                                                                                                                      // 1442
},{"page":2,"qs":5}]},{},[10])                                                                                        // 1443
//# sourceMappingURL=kadira:flow-router/client.browserify.js                                                          // 1444
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      // 1446
}).call(this);                                                                                                        // 1447
                                                                                                                      // 1448
                                                                                                                      // 1449
                                                                                                                      // 1450
                                                                                                                      // 1451
                                                                                                                      // 1452
                                                                                                                      // 1453
(function () {                                                                                                        // 1454
                                                                                                                      // 1455
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/kadira:flow-router/client/triggers.js                                                                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// a set of utility functions for triggers                                                                            // 1
                                                                                                                      // 2
Triggers = {};                                                                                                        // 3
                                                                                                                      // 4
// Apply filters for a set of triggers                                                                                // 5
// @triggers - a set of triggers                                                                                      // 6
// @filter - filter with array fileds with `only` and `except`                                                        // 7
//           support only either `only` or `except`, but not both                                                     // 8
Triggers.applyFilters = function(triggers, filter) {                                                                  // 9
  if(!(triggers instanceof Array)) {                                                                                  // 10
    triggers = [triggers];                                                                                            // 11
  }                                                                                                                   // 12
                                                                                                                      // 13
  if(!filter) {                                                                                                       // 14
    return triggers;                                                                                                  // 15
  }                                                                                                                   // 16
                                                                                                                      // 17
  if(filter.only && filter.except) {                                                                                  // 18
    throw new Error("Triggers don't support only and except filters at once");                                        // 19
  }                                                                                                                   // 20
                                                                                                                      // 21
  if(filter.only && !(filter.only instanceof Array)) {                                                                // 22
    throw new Error("only filters needs to be an array");                                                             // 23
  }                                                                                                                   // 24
                                                                                                                      // 25
  if(filter.except && !(filter.except instanceof Array)) {                                                            // 26
    throw new Error("except filters needs to be an array");                                                           // 27
  }                                                                                                                   // 28
                                                                                                                      // 29
  if(filter.only) {                                                                                                   // 30
    return Triggers.createRouteBoundTriggers(triggers, filter.only);                                                  // 31
  }                                                                                                                   // 32
                                                                                                                      // 33
  if(filter.except) {                                                                                                 // 34
    return Triggers.createRouteBoundTriggers(triggers, filter.except, true);                                          // 35
  }                                                                                                                   // 36
                                                                                                                      // 37
  throw new Error("Provided a filter but not supported");                                                             // 38
};                                                                                                                    // 39
                                                                                                                      // 40
//  create triggers by bounding them to a set of route names                                                          // 41
//  @triggers - a set of triggers                                                                                     // 42
//  @names - list of route names to be bound (trigger runs only for these names)                                      // 43
//  @negate - negate the result (triggers won't run for above names)                                                  // 44
Triggers.createRouteBoundTriggers = function(triggers, names, negate) {                                               // 45
  var namesMap = {};                                                                                                  // 46
  _.each(names, function(name) {                                                                                      // 47
    namesMap[name] = true;                                                                                            // 48
  });                                                                                                                 // 49
                                                                                                                      // 50
  var filteredTriggers = _.map(triggers, function(originalTrigger) {                                                  // 51
    var modifiedTrigger = function(context, next) {                                                                   // 52
      var routeName = context.route.name;                                                                             // 53
      var matched = (namesMap[routeName])? 1: -1;                                                                     // 54
      matched = (negate)? matched * -1 : matched;                                                                     // 55
                                                                                                                      // 56
      if(matched === 1) {                                                                                             // 57
        originalTrigger(context, next);                                                                               // 58
      }                                                                                                               // 59
    };                                                                                                                // 60
    return modifiedTrigger;                                                                                           // 61
  });                                                                                                                 // 62
                                                                                                                      // 63
  return filteredTriggers;                                                                                            // 64
};                                                                                                                    // 65
                                                                                                                      // 66
//  run triggers and abort if redirected or callback stopped                                                          // 67
//  @triggers - a set of triggers                                                                                     // 68
//  @context - context we need to pass (it must have the route)                                                       // 69
//  @redirectFn - function which used to redirect                                                                     // 70
//  @after - called after if only all the triggers runs                                                               // 71
Triggers.runTriggers = function(triggers, context, redirectFn, after) {                                               // 72
  var abort = false;                                                                                                  // 73
  var inCurrentLoop = true;                                                                                           // 74
  var alreadyRedirected = false;                                                                                      // 75
                                                                                                                      // 76
  for(var lc=0; lc<triggers.length; lc++) {                                                                           // 77
    var trigger = triggers[lc];                                                                                       // 78
    trigger(context, doRedirect, doStop);                                                                             // 79
                                                                                                                      // 80
    if(abort) {                                                                                                       // 81
      return;                                                                                                         // 82
    }                                                                                                                 // 83
  }                                                                                                                   // 84
                                                                                                                      // 85
  // mark that, we've exceeds the currentEventloop for                                                                // 86
  // this set of triggers.                                                                                            // 87
  inCurrentLoop = false;                                                                                              // 88
  after();                                                                                                            // 89
                                                                                                                      // 90
  function doRedirect(url, params, queryParams) {                                                                     // 91
    if(alreadyRedirected) {                                                                                           // 92
      throw new Error("already redirected");                                                                          // 93
    }                                                                                                                 // 94
                                                                                                                      // 95
    if(!inCurrentLoop) {                                                                                              // 96
      throw new Error("redirect needs to be done in sync");                                                           // 97
    }                                                                                                                 // 98
                                                                                                                      // 99
    if(!url) {                                                                                                        // 100
      throw new Error("trigger redirect requires an URL");                                                            // 101
    }                                                                                                                 // 102
                                                                                                                      // 103
    abort = true;                                                                                                     // 104
    alreadyRedirected = true;                                                                                         // 105
    redirectFn(url, params, queryParams);                                                                             // 106
  }                                                                                                                   // 107
                                                                                                                      // 108
  function doStop() {                                                                                                 // 109
    abort = true;                                                                                                     // 110
  }                                                                                                                   // 111
};                                                                                                                    // 112
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      // 1575
}).call(this);                                                                                                        // 1576
                                                                                                                      // 1577
                                                                                                                      // 1578
                                                                                                                      // 1579
                                                                                                                      // 1580
                                                                                                                      // 1581
                                                                                                                      // 1582
(function () {                                                                                                        // 1583
                                                                                                                      // 1584
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/kadira:flow-router/client/router.js                                                                       //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Router = function () {                                                                                                // 1
  var self = this;                                                                                                    // 2
  this.globals = [];                                                                                                  // 3
  this.subscriptions = Function.prototype;                                                                            // 4
                                                                                                                      // 5
  this._tracker = this._buildTracker();                                                                               // 6
  this._current = {};                                                                                                 // 7
                                                                                                                      // 8
  // tracks the current path change                                                                                   // 9
  this._onEveryPath = new Tracker.Dependency();                                                                       // 10
                                                                                                                      // 11
  this._globalRoute = new Route(this);                                                                                // 12
                                                                                                                      // 13
  // holds onRoute callbacks                                                                                          // 14
  this._onRouteCallbacks = [];                                                                                        // 15
                                                                                                                      // 16
  // if _askedToWait is true. We don't automatically start the router                                                 // 17
  // in Meteor.startup callback. (see client/_init.js)                                                                // 18
  // Instead user need to call `.initialize()                                                                         // 19
  this._askedToWait = false;                                                                                          // 20
  this._initialized = false;                                                                                          // 21
  this._triggersEnter = [];                                                                                           // 22
  this._triggersExit = [];                                                                                            // 23
  this._routes = [];                                                                                                  // 24
  this._routesMap = {};                                                                                               // 25
  this._updateCallbacks();                                                                                            // 26
  this.notFound = this.notfound = null;                                                                               // 27
  // indicate it's okay (or not okay) to run the tracker                                                              // 28
  // when doing subscriptions                                                                                         // 29
  // using a number and increment it help us to support FlowRouter.go()                                               // 30
  // and legitimate reruns inside tracker on the same event loop.                                                     // 31
  // this is a solution for #145                                                                                      // 32
  this.safeToRun = 0;                                                                                                 // 33
                                                                                                                      // 34
  // this is a chain contains a list of old routes                                                                    // 35
  // most of the time, there is only one old route                                                                    // 36
  // but when it's the time for a trigger redirect we've a chain                                                      // 37
  this._oldRouteChain = [];                                                                                           // 38
                                                                                                                      // 39
  this.env = {                                                                                                        // 40
    replaceState: new Meteor.EnvironmentVariable(),                                                                   // 41
    reload: new Meteor.EnvironmentVariable(),                                                                         // 42
    trailingSlash: new Meteor.EnvironmentVariable()                                                                   // 43
  };                                                                                                                  // 44
                                                                                                                      // 45
  // redirect function used inside triggers                                                                           // 46
  this._redirectFn = function(pathDef, fields, queryParams) {                                                         // 47
    self.withReplaceState(function() {                                                                                // 48
      var path = FlowRouter.path(pathDef, fields, queryParams);                                                       // 49
      self._page.redirect(path);                                                                                      // 50
    });                                                                                                               // 51
  };                                                                                                                  // 52
  this._initTriggersAPI();                                                                                            // 53
};                                                                                                                    // 54
                                                                                                                      // 55
Router.prototype.route = function(pathDef, options, group) {                                                          // 56
  if (!/^\/.*/.test(pathDef)) {                                                                                       // 57
    var message = "route's path must start with '/'";                                                                 // 58
    throw new Error(message);                                                                                         // 59
  }                                                                                                                   // 60
                                                                                                                      // 61
  options = options || {};                                                                                            // 62
  var self = this;                                                                                                    // 63
  var route = new Route(this, pathDef, options, group);                                                               // 64
                                                                                                                      // 65
  // calls when the page route being activates                                                                        // 66
  route._actionHandle = function (context, next) {                                                                    // 67
    var oldRoute = self._current.route;                                                                               // 68
    self._oldRouteChain.push(oldRoute);                                                                               // 69
                                                                                                                      // 70
    var queryParams = self._qs.parse(context.querystring);                                                            // 71
    // _qs.parse() gives us a object without prototypes,                                                              // 72
    // created with Object.create(null)                                                                               // 73
    // Meteor's check doesn't play nice with it.                                                                      // 74
    // So, we need to fix it by cloning it.                                                                           // 75
    // see more: https://github.com/meteorhacks/flow-router/issues/164                                                // 76
    queryParams = JSON.parse(JSON.stringify(queryParams));                                                            // 77
                                                                                                                      // 78
    self._current = {                                                                                                 // 79
      path: context.path,                                                                                             // 80
      context: context,                                                                                               // 81
      params: context.params,                                                                                         // 82
      queryParams: queryParams,                                                                                       // 83
      route: route,                                                                                                   // 84
      oldRoute: oldRoute                                                                                              // 85
    };                                                                                                                // 86
                                                                                                                      // 87
    // we need to invalidate if all the triggers have been completed                                                  // 88
    // if not that means, we've been redirected to another path                                                       // 89
    // then we don't need to invalidate                                                                               // 90
    var afterAllTriggersRan = function() {                                                                            // 91
      self._invalidateTracker();                                                                                      // 92
    };                                                                                                                // 93
                                                                                                                      // 94
    var triggers = self._triggersEnter.concat(route._triggersEnter);                                                  // 95
    Triggers.runTriggers(                                                                                             // 96
      triggers,                                                                                                       // 97
      self._current,                                                                                                  // 98
      self._redirectFn,                                                                                               // 99
      afterAllTriggersRan                                                                                             // 100
    );                                                                                                                // 101
  };                                                                                                                  // 102
                                                                                                                      // 103
  // calls when you exit from the page js route                                                                       // 104
  route._exitHandle = function(context, next) {                                                                       // 105
    var triggers = self._triggersExit.concat(route._triggersExit);                                                    // 106
    Triggers.runTriggers(                                                                                             // 107
      triggers,                                                                                                       // 108
      self._current,                                                                                                  // 109
      self._redirectFn,                                                                                               // 110
      next                                                                                                            // 111
    );                                                                                                                // 112
  };                                                                                                                  // 113
                                                                                                                      // 114
  this._routes.push(route);                                                                                           // 115
  if (options.name) {                                                                                                 // 116
    this._routesMap[options.name] = route;                                                                            // 117
  }                                                                                                                   // 118
                                                                                                                      // 119
  this._updateCallbacks();                                                                                            // 120
  this._triggerRouteRegister(route);                                                                                  // 121
                                                                                                                      // 122
  return route;                                                                                                       // 123
};                                                                                                                    // 124
                                                                                                                      // 125
Router.prototype.group = function(options) {                                                                          // 126
  return new Group(this, options);                                                                                    // 127
};                                                                                                                    // 128
                                                                                                                      // 129
Router.prototype.path = function(pathDef, fields, queryParams) {                                                      // 130
  if (this._routesMap[pathDef]) {                                                                                     // 131
    pathDef = this._routesMap[pathDef].pathDef;                                                                       // 132
  }                                                                                                                   // 133
                                                                                                                      // 134
  fields = fields || {};                                                                                              // 135
  var regExp = /(:[\w\(\)\\\+\*\.\?]+)+/g;                                                                            // 136
  var path = pathDef.replace(regExp, function(key) {                                                                  // 137
    var firstRegexpChar = key.indexOf("(");                                                                           // 138
    // get the content behind : and (\\d+/)                                                                           // 139
    key = key.substring(1, (firstRegexpChar > 0)? firstRegexpChar: undefined);                                        // 140
    // remove +?*                                                                                                     // 141
    key = key.replace(/[\+\*\?]+/g, "");                                                                              // 142
                                                                                                                      // 143
    // this is to allow page js to keep the custom characters as it is                                                // 144
    // we need to encode 2 times otherwise "/" char does not work properly                                            // 145
    // So, in that case, when I includes "/" it will think it's a part of the                                         // 146
    // route. encoding 2times fixes it                                                                                // 147
    return encodeURIComponent(encodeURIComponent(fields[key] || ""));                                                 // 148
  });                                                                                                                 // 149
                                                                                                                      // 150
  path = path.replace(/\/\/+/g, "/"); // Replace multiple slashes with single slash                                   // 151
                                                                                                                      // 152
  // remove trailing slash                                                                                            // 153
  // but keep the root slash if it's the only one                                                                     // 154
  path = path.match(/^\/{1}$/) ? path: path.replace(/\/$/, "");                                                       // 155
                                                                                                                      // 156
  // explictly asked to add a trailing slash                                                                          // 157
  if(this.env.trailingSlash.get() && _.last(path) !== "/") {                                                          // 158
    path += "/";                                                                                                      // 159
  }                                                                                                                   // 160
                                                                                                                      // 161
  var strQueryParams = this._qs.stringify(queryParams || {});                                                         // 162
  if(strQueryParams) {                                                                                                // 163
    path += "?" + strQueryParams;                                                                                     // 164
  }                                                                                                                   // 165
                                                                                                                      // 166
  return path;                                                                                                        // 167
};                                                                                                                    // 168
                                                                                                                      // 169
Router.prototype.go = function(pathDef, fields, queryParams) {                                                        // 170
  var path = this.path(pathDef, fields, queryParams);                                                                 // 171
                                                                                                                      // 172
  var useReplaceState = this.env.replaceState.get();                                                                  // 173
  if(useReplaceState) {                                                                                               // 174
    this._page.replace(path);                                                                                         // 175
  } else {                                                                                                            // 176
    this._page(path);                                                                                                 // 177
  }                                                                                                                   // 178
};                                                                                                                    // 179
                                                                                                                      // 180
Router.prototype.reload = function() {                                                                                // 181
  var self = this;                                                                                                    // 182
                                                                                                                      // 183
  self.env.reload.withValue(true, function() {                                                                        // 184
    self._page.replace(self._current.path);                                                                           // 185
  });                                                                                                                 // 186
};                                                                                                                    // 187
                                                                                                                      // 188
Router.prototype.redirect = function(path) {                                                                          // 189
  this._page.redirect(path);                                                                                          // 190
};                                                                                                                    // 191
                                                                                                                      // 192
Router.prototype.setParams = function(newParams) {                                                                    // 193
  if(!this._current.route) {return false;}                                                                            // 194
                                                                                                                      // 195
  var pathDef = this._current.route.pathDef;                                                                          // 196
  var existingParams = this._current.params;                                                                          // 197
  var params = {};                                                                                                    // 198
  _.each(_.keys(existingParams), function(key) {                                                                      // 199
    params[key] = existingParams[key];                                                                                // 200
  });                                                                                                                 // 201
                                                                                                                      // 202
  params = _.extend(params, newParams);                                                                               // 203
  var queryParams = this._current.queryParams;                                                                        // 204
                                                                                                                      // 205
  this.go(pathDef, params, queryParams);                                                                              // 206
  return true;                                                                                                        // 207
};                                                                                                                    // 208
                                                                                                                      // 209
Router.prototype.setQueryParams = function(newParams) {                                                               // 210
  if(!this._current.route) {return false;}                                                                            // 211
                                                                                                                      // 212
  var queryParams = _.clone(this._current.queryParams);                                                               // 213
  _.extend(queryParams, newParams);                                                                                   // 214
                                                                                                                      // 215
  for (var k in queryParams) {                                                                                        // 216
    if (queryParams[k] === null || queryParams[k] === undefined) {                                                    // 217
      delete queryParams[k];                                                                                          // 218
    }                                                                                                                 // 219
  }                                                                                                                   // 220
                                                                                                                      // 221
  var pathDef = this._current.route.pathDef;                                                                          // 222
  var params = this._current.params;                                                                                  // 223
  this.go(pathDef, params, queryParams);                                                                              // 224
  return true;                                                                                                        // 225
};                                                                                                                    // 226
                                                                                                                      // 227
// .current is not reactive                                                                                           // 228
// This is by design. use .getParam() instead                                                                         // 229
// If you really need to watch the path change, use .watchPathChange()                                                // 230
Router.prototype.current = function() {                                                                               // 231
  return this._current;                                                                                               // 232
};                                                                                                                    // 233
                                                                                                                      // 234
// Implementing Reactive APIs                                                                                         // 235
var reactiveApis = [                                                                                                  // 236
  'getParam', 'getQueryParam',                                                                                        // 237
  'getRouteName', 'watchPathChange'                                                                                   // 238
];                                                                                                                    // 239
reactiveApis.forEach(function(api) {                                                                                  // 240
  Router.prototype[api] = function(arg1) {                                                                            // 241
    // when this is calling, there may not be any route initiated                                                     // 242
    // so we need to handle it                                                                                        // 243
    var currentRoute = this._current.route;                                                                           // 244
    if(!currentRoute) {                                                                                               // 245
      this._onEveryPath.depend();                                                                                     // 246
      return;                                                                                                         // 247
    }                                                                                                                 // 248
                                                                                                                      // 249
    // currently, there is only one argument. If we've more let's add more args                                       // 250
    // this is not clean code, but better in performance                                                              // 251
    return currentRoute[api].call(currentRoute, arg1);                                                                // 252
  };                                                                                                                  // 253
});                                                                                                                   // 254
                                                                                                                      // 255
Router.prototype.subsReady = function() {                                                                             // 256
  var callback = null;                                                                                                // 257
  var args = _.toArray(arguments);                                                                                    // 258
                                                                                                                      // 259
  if (typeof _.last(args) === "function") {                                                                           // 260
    callback = args.pop();                                                                                            // 261
  }                                                                                                                   // 262
                                                                                                                      // 263
  var currentRoute = this.current().route;                                                                            // 264
  var globalRoute = this._globalRoute;                                                                                // 265
                                                                                                                      // 266
  // we need to depend for every route change and                                                                     // 267
  // rerun subscriptions to check the ready state                                                                     // 268
  this._onEveryPath.depend();                                                                                         // 269
                                                                                                                      // 270
  if(!currentRoute) {                                                                                                 // 271
    return false;                                                                                                     // 272
  }                                                                                                                   // 273
                                                                                                                      // 274
  var subscriptions;                                                                                                  // 275
  if(args.length === 0) {                                                                                             // 276
    subscriptions = _.values(globalRoute.getAllSubscriptions());                                                      // 277
    subscriptions = subscriptions.concat(_.values(currentRoute.getAllSubscriptions()));                               // 278
  } else {                                                                                                            // 279
    subscriptions = _.map(args, function(subName) {                                                                   // 280
      return globalRoute.getSubscription(subName) || currentRoute.getSubscription(subName);                           // 281
    });                                                                                                               // 282
  }                                                                                                                   // 283
                                                                                                                      // 284
  var isReady = function() {                                                                                          // 285
    var ready =  _.every(subscriptions, function(sub) {                                                               // 286
      return sub && sub.ready();                                                                                      // 287
    });                                                                                                               // 288
                                                                                                                      // 289
    return ready;                                                                                                     // 290
  };                                                                                                                  // 291
                                                                                                                      // 292
  if (callback) {                                                                                                     // 293
    Tracker.autorun(function(c) {                                                                                     // 294
      if (isReady()) {                                                                                                // 295
        callback();                                                                                                   // 296
        c.stop();                                                                                                     // 297
      }                                                                                                               // 298
    });                                                                                                               // 299
  } else {                                                                                                            // 300
    return isReady();                                                                                                 // 301
  }                                                                                                                   // 302
};                                                                                                                    // 303
                                                                                                                      // 304
Router.prototype.withReplaceState = function(fn) {                                                                    // 305
  return this.env.replaceState.withValue(true, fn);                                                                   // 306
};                                                                                                                    // 307
                                                                                                                      // 308
Router.prototype.withTrailingSlash = function(fn) {                                                                   // 309
  return this.env.trailingSlash.withValue(true, fn);                                                                  // 310
};                                                                                                                    // 311
                                                                                                                      // 312
Router.prototype._notfoundRoute = function(context) {                                                                 // 313
  this._current = {                                                                                                   // 314
    path: context.path,                                                                                               // 315
    context: context,                                                                                                 // 316
    params: [],                                                                                                       // 317
    queryParams: {},                                                                                                  // 318
  };                                                                                                                  // 319
                                                                                                                      // 320
  // XXX this.notfound kept for backwards compatibility                                                               // 321
  this.notFound = this.notFound || this.notfound;                                                                     // 322
  if(!this.notFound) {                                                                                                // 323
    console.error("There is no route for the path:", context.path);                                                   // 324
    return;                                                                                                           // 325
  }                                                                                                                   // 326
                                                                                                                      // 327
  this._current.route = new Route(this, "*", this.notFound);                                                          // 328
  this._invalidateTracker();                                                                                          // 329
};                                                                                                                    // 330
                                                                                                                      // 331
Router.prototype.initialize = function(options) {                                                                     // 332
  options = options || {};                                                                                            // 333
                                                                                                                      // 334
  if(this._initialized) {                                                                                             // 335
    throw new Error("FlowRouter is already initialized");                                                             // 336
  }                                                                                                                   // 337
                                                                                                                      // 338
  var self = this;                                                                                                    // 339
  this._updateCallbacks();                                                                                            // 340
                                                                                                                      // 341
  // Implementing idempotent routing                                                                                  // 342
  // by overriding page.js`s "show" method.                                                                           // 343
  // Why?                                                                                                             // 344
  // It is impossible to bypass exit triggers,                                                                        // 345
  // becuase they execute before the handler and                                                                      // 346
  // can not know what the next path is, inside exit trigger.                                                         // 347
  //                                                                                                                  // 348
  // we need override both show, replace to make this work                                                            // 349
  // since we use redirect when we are talking about withReplaceState                                                 // 350
  _.each(['show', 'replace'], function(fnName) {                                                                      // 351
    var original = self._page[fnName];                                                                                // 352
    self._page[fnName] = function(path, state, dispatch, push) {                                                      // 353
      var reload = self.env.reload.get();                                                                             // 354
      if (!reload && self._current.path === path) {                                                                   // 355
        return;                                                                                                       // 356
      }                                                                                                               // 357
                                                                                                                      // 358
      original.call(this, path, state, dispatch, push);                                                               // 359
    };                                                                                                                // 360
  });                                                                                                                 // 361
                                                                                                                      // 362
  // this is very ugly part of pagejs and it does decoding few times                                                  // 363
  // in unpredicatable manner. See #168                                                                               // 364
  // this is the default behaviour and we need keep it like that                                                      // 365
  // we are doing a hack. see .path()                                                                                 // 366
  this._page({decodeURLComponents: true, hashbang: !!options.hashbang});                                              // 367
  this._initialized = true;                                                                                           // 368
};                                                                                                                    // 369
                                                                                                                      // 370
Router.prototype._buildTracker = function() {                                                                         // 371
  var self = this;                                                                                                    // 372
                                                                                                                      // 373
  // main autorun function                                                                                            // 374
  var tracker = Tracker.autorun(function () {                                                                         // 375
    if(!self._current || !self._current.route) {                                                                      // 376
      return;                                                                                                         // 377
    }                                                                                                                 // 378
                                                                                                                      // 379
    // see the definition of `this._processingContexts`                                                               // 380
    var currentContext = self._current;                                                                               // 381
    var route = currentContext.route;                                                                                 // 382
    var path = currentContext.path;                                                                                   // 383
                                                                                                                      // 384
    if(self.safeToRun === 0) {                                                                                        // 385
      var message =                                                                                                   // 386
        "You can't use reactive data sources like Session" +                                                          // 387
        " inside the `.subscriptions` method!";                                                                       // 388
      throw new Error(message);                                                                                       // 389
    }                                                                                                                 // 390
                                                                                                                      // 391
    // We need to run subscriptions inside a Tracker                                                                  // 392
    // to stop subs when switching between routes                                                                     // 393
    // But we don't need to run this tracker with                                                                     // 394
    // other reactive changes inside the .subscription method                                                         // 395
    // We tackle this with the `safeToRun` variable                                                                   // 396
    self._globalRoute.clearSubscriptions();                                                                           // 397
    self.subscriptions.call(self._globalRoute, path);                                                                 // 398
    route.callSubscriptions(currentContext);                                                                          // 399
                                                                                                                      // 400
    // otherwise, computations inside action will trigger to re-run                                                   // 401
    // this computation. which we do not need.                                                                        // 402
    Tracker.nonreactive(function() {                                                                                  // 403
      var isRouteChange = currentContext.oldRoute !== currentContext.route;                                           // 404
      var isFirstRoute = !currentContext.oldRoute;                                                                    // 405
      // first route is not a route change                                                                            // 406
      if(isFirstRoute) {                                                                                              // 407
        isRouteChange = false;                                                                                        // 408
      }                                                                                                               // 409
                                                                                                                      // 410
      // Clear oldRouteChain just before calling the action                                                           // 411
      // We still need to get a copy of the oldestRoute first                                                         // 412
      // It's very important to get the oldest route and registerRouteClose() it                                      // 413
      // See: https://github.com/kadirahq/flow-router/issues/314                                                      // 414
      var oldestRoute = self._oldRouteChain[0];                                                                       // 415
      self._oldRouteChain = [];                                                                                       // 416
                                                                                                                      // 417
      currentContext.route.registerRouteChange(currentContext, isRouteChange);                                        // 418
      route.callAction(currentContext);                                                                               // 419
                                                                                                                      // 420
      Tracker.afterFlush(function() {                                                                                 // 421
        self._onEveryPath.changed();                                                                                  // 422
        if(isRouteChange) {                                                                                           // 423
          // We need to trigger that route (definition itself) has changed.                                           // 424
          // So, we need to re-run all the register callbacks to current route                                        // 425
          // This is pretty important, otherwise tracker                                                              // 426
          // can't identify new route's items                                                                         // 427
                                                                                                                      // 428
          // We also need to afterFlush, otherwise this will re-run                                                   // 429
          // helpers on templates which are marked for destroying                                                     // 430
          if(oldestRoute) {                                                                                           // 431
            oldestRoute.registerRouteClose();                                                                         // 432
          }                                                                                                           // 433
        }                                                                                                             // 434
      });                                                                                                             // 435
    });                                                                                                               // 436
                                                                                                                      // 437
    self.safeToRun--;                                                                                                 // 438
  });                                                                                                                 // 439
                                                                                                                      // 440
  return tracker;                                                                                                     // 441
};                                                                                                                    // 442
                                                                                                                      // 443
Router.prototype._invalidateTracker = function() {                                                                    // 444
  var self = this;                                                                                                    // 445
  this.safeToRun++;                                                                                                   // 446
  this._tracker.invalidate();                                                                                         // 447
  // After the invalidation we need to flush to make changes imediately                                               // 448
  // otherwise, we have face some issues context mix-maches and so on.                                                // 449
  // But there are some cases we can't flush. So we need to ready for that.                                           // 450
                                                                                                                      // 451
  // we clearly know, we can't flush inside an autorun                                                                // 452
  // this may leads some issues on flow-routing                                                                       // 453
  // we may need to do some warning                                                                                   // 454
  if(!Tracker.currentComputation) {                                                                                   // 455
    // Still there are some cases where we can't flush                                                                // 456
    //  eg:- when there is a flush currently                                                                          // 457
    // But we've no public API or hacks to get that state                                                             // 458
    // So, this is the only solution                                                                                  // 459
    try {                                                                                                             // 460
      Tracker.flush();                                                                                                // 461
    } catch(ex) {                                                                                                     // 462
      // only handling "while flushing" errors                                                                        // 463
      if(!/Tracker\.flush while flushing/.test(ex.message)) {                                                         // 464
        return;                                                                                                       // 465
      }                                                                                                               // 466
                                                                                                                      // 467
      // XXX: fix this with a proper solution by removing subscription mgt.                                           // 468
      // from the router. Then we don't need to run invalidate using a tracker                                        // 469
                                                                                                                      // 470
      // this happens when we are trying to invoke a route change                                                     // 471
      // with inside a route chnage. (eg:- Template.onCreated)                                                        // 472
      // Since we use page.js and tracker, we don't have much control                                                 // 473
      // over this process.                                                                                           // 474
      // only solution is to defer route execution.                                                                   // 475
                                                                                                                      // 476
      // It's possible to have more than one path want to defer                                                       // 477
      // But, we only need to pick the last one.                                                                      // 478
      // self._nextPath = self._current.path;                                                                         // 479
      Meteor.defer(function() {                                                                                       // 480
        var path = self._nextPath;                                                                                    // 481
        if(!path) {                                                                                                   // 482
          return;                                                                                                     // 483
        }                                                                                                             // 484
                                                                                                                      // 485
        delete self._nextPath;                                                                                        // 486
        self.env.reload.withValue(true, function() {                                                                  // 487
          self.go(path);                                                                                              // 488
        });                                                                                                           // 489
      });                                                                                                             // 490
    }                                                                                                                 // 491
  }                                                                                                                   // 492
};                                                                                                                    // 493
                                                                                                                      // 494
Router.prototype._updateCallbacks = function () {                                                                     // 495
  var self = this;                                                                                                    // 496
                                                                                                                      // 497
  self._page.callbacks = [];                                                                                          // 498
  self._page.exits = [];                                                                                              // 499
                                                                                                                      // 500
  _.each(self._routes, function(route) {                                                                              // 501
    self._page(route.pathDef, route._actionHandle);                                                                   // 502
    self._page.exit(route.pathDef, route._exitHandle);                                                                // 503
  });                                                                                                                 // 504
                                                                                                                      // 505
  self._page("*", function(context) {                                                                                 // 506
    self._notfoundRoute(context);                                                                                     // 507
  });                                                                                                                 // 508
};                                                                                                                    // 509
                                                                                                                      // 510
Router.prototype._initTriggersAPI = function() {                                                                      // 511
  var self = this;                                                                                                    // 512
  this.triggers = {                                                                                                   // 513
    enter: function(triggers, filter) {                                                                               // 514
      triggers = Triggers.applyFilters(triggers, filter);                                                             // 515
      if(triggers.length) {                                                                                           // 516
        self._triggersEnter = self._triggersEnter.concat(triggers);                                                   // 517
      }                                                                                                               // 518
    },                                                                                                                // 519
                                                                                                                      // 520
    exit: function(triggers, filter) {                                                                                // 521
      triggers = Triggers.applyFilters(triggers, filter);                                                             // 522
      if(triggers.length) {                                                                                           // 523
        self._triggersExit = self._triggersExit.concat(triggers);                                                     // 524
      }                                                                                                               // 525
    }                                                                                                                 // 526
  };                                                                                                                  // 527
};                                                                                                                    // 528
                                                                                                                      // 529
Router.prototype.wait = function() {                                                                                  // 530
  if(this._initialized) {                                                                                             // 531
    throw new Error("can't wait after FlowRouter has been initialized");                                              // 532
  }                                                                                                                   // 533
                                                                                                                      // 534
  this._askedToWait = true;                                                                                           // 535
};                                                                                                                    // 536
                                                                                                                      // 537
Router.prototype.onRouteRegister = function(cb) {                                                                     // 538
  this._onRouteCallbacks.push(cb);                                                                                    // 539
};                                                                                                                    // 540
                                                                                                                      // 541
Router.prototype._triggerRouteRegister = function(currentRoute) {                                                     // 542
  // We should only need to send a safe set of fields on the route                                                    // 543
  // object.                                                                                                          // 544
  // This is not to hide what's inside the route object, but to show                                                  // 545
  // these are the public APIs                                                                                        // 546
  var routePublicApi = _.pick(currentRoute, 'name', 'pathDef', 'path');                                               // 547
  var omittingOptionFields = [                                                                                        // 548
    'triggersEnter', 'triggersExit', 'action', 'subscriptions', 'name'                                                // 549
  ];                                                                                                                  // 550
  routePublicApi.options = _.omit(currentRoute.options, omittingOptionFields);                                        // 551
                                                                                                                      // 552
  _.each(this._onRouteCallbacks, function(cb) {                                                                       // 553
    cb(routePublicApi);                                                                                               // 554
  });                                                                                                                 // 555
};                                                                                                                    // 556
                                                                                                                      // 557
Router.prototype._page = page;                                                                                        // 558
Router.prototype._qs = qs;                                                                                            // 559
                                                                                                                      // 560
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      // 2152
}).call(this);                                                                                                        // 2153
                                                                                                                      // 2154
                                                                                                                      // 2155
                                                                                                                      // 2156
                                                                                                                      // 2157
                                                                                                                      // 2158
                                                                                                                      // 2159
(function () {                                                                                                        // 2160
                                                                                                                      // 2161
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/kadira:flow-router/client/group.js                                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Group = function(router, options, parent) {                                                                           // 1
  options = options || {};                                                                                            // 2
                                                                                                                      // 3
  if (options.prefix && !/^\/.*/.test(options.prefix)) {                                                              // 4
    var message = "group's prefix must start with '/'";                                                               // 5
    throw new Error(message);                                                                                         // 6
  }                                                                                                                   // 7
                                                                                                                      // 8
  this._router = router;                                                                                              // 9
  this.prefix = options.prefix || '';                                                                                 // 10
  this.name = options.name;                                                                                           // 11
                                                                                                                      // 12
  this._triggersEnter = options.triggersEnter || [];                                                                  // 13
  this._triggersExit = options.triggersExit || [];                                                                    // 14
  this._subscriptions = options.subscriptions || Function.prototype;                                                  // 15
                                                                                                                      // 16
  this.parent = parent;                                                                                               // 17
  if (this.parent) {                                                                                                  // 18
    this.prefix = parent.prefix + this.prefix;                                                                        // 19
                                                                                                                      // 20
    this._triggersEnter = parent._triggersEnter.concat(this._triggersEnter);                                          // 21
    this._triggersExit = this._triggersExit.concat(parent._triggersExit);                                             // 22
  }                                                                                                                   // 23
};                                                                                                                    // 24
                                                                                                                      // 25
Group.prototype.route = function(pathDef, options, group) {                                                           // 26
  options = options || {};                                                                                            // 27
                                                                                                                      // 28
  if (!/^\/.*/.test(pathDef)) {                                                                                       // 29
    var message = "route's path must start with '/'";                                                                 // 30
    throw new Error(message);                                                                                         // 31
  }                                                                                                                   // 32
                                                                                                                      // 33
  group = group || this;                                                                                              // 34
  pathDef = this.prefix + pathDef;                                                                                    // 35
                                                                                                                      // 36
  var triggersEnter = options.triggersEnter || [];                                                                    // 37
  options.triggersEnter = this._triggersEnter.concat(triggersEnter);                                                  // 38
                                                                                                                      // 39
  var triggersExit = options.triggersExit || [];                                                                      // 40
  options.triggersExit = triggersExit.concat(this._triggersExit);                                                     // 41
                                                                                                                      // 42
  return this._router.route(pathDef, options, group);                                                                 // 43
};                                                                                                                    // 44
                                                                                                                      // 45
Group.prototype.group = function(options) {                                                                           // 46
  return new Group(this._router, options, this);                                                                      // 47
};                                                                                                                    // 48
                                                                                                                      // 49
Group.prototype.callSubscriptions = function(current) {                                                               // 50
  if (this.parent) {                                                                                                  // 51
    this.parent.callSubscriptions(current);                                                                           // 52
  }                                                                                                                   // 53
                                                                                                                      // 54
  this._subscriptions.call(current.route, current.params, current.queryParams);                                       // 55
};                                                                                                                    // 56
                                                                                                                      // 57
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      // 2226
}).call(this);                                                                                                        // 2227
                                                                                                                      // 2228
                                                                                                                      // 2229
                                                                                                                      // 2230
                                                                                                                      // 2231
                                                                                                                      // 2232
                                                                                                                      // 2233
(function () {                                                                                                        // 2234
                                                                                                                      // 2235
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/kadira:flow-router/client/route.js                                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Route = function(router, pathDef, options, group) {                                                                   // 1
  options = options || {};                                                                                            // 2
                                                                                                                      // 3
  this.options = options;                                                                                             // 4
  this.pathDef = pathDef                                                                                              // 5
                                                                                                                      // 6
  // Route.path is deprecated and will be removed in 3.0                                                              // 7
  this.path = pathDef;                                                                                                // 8
                                                                                                                      // 9
  if (options.name) {                                                                                                 // 10
    this.name = options.name;                                                                                         // 11
  }                                                                                                                   // 12
                                                                                                                      // 13
  this._action = options.action || Function.prototype;                                                                // 14
  this._subscriptions = options.subscriptions || Function.prototype;                                                  // 15
  this._triggersEnter = options.triggersEnter || [];                                                                  // 16
  this._triggersExit = options.triggersExit || [];                                                                    // 17
  this._subsMap = {};                                                                                                 // 18
  this._router = router;                                                                                              // 19
                                                                                                                      // 20
  this._params = new ReactiveDict();                                                                                  // 21
  this._queryParams = new ReactiveDict();                                                                             // 22
  this._routeCloseDep = new Tracker.Dependency();                                                                     // 23
                                                                                                                      // 24
  // tracks the changes in the URL                                                                                    // 25
  this._pathChangeDep = new Tracker.Dependency();                                                                     // 26
                                                                                                                      // 27
  this.group = group;                                                                                                 // 28
};                                                                                                                    // 29
                                                                                                                      // 30
Route.prototype.clearSubscriptions = function() {                                                                     // 31
  this._subsMap = {};                                                                                                 // 32
};                                                                                                                    // 33
                                                                                                                      // 34
Route.prototype.register = function(name, sub, options) {                                                             // 35
  this._subsMap[name] = sub;                                                                                          // 36
};                                                                                                                    // 37
                                                                                                                      // 38
                                                                                                                      // 39
Route.prototype.getSubscription = function(name) {                                                                    // 40
  return this._subsMap[name];                                                                                         // 41
};                                                                                                                    // 42
                                                                                                                      // 43
                                                                                                                      // 44
Route.prototype.getAllSubscriptions = function() {                                                                    // 45
  return this._subsMap;                                                                                               // 46
};                                                                                                                    // 47
                                                                                                                      // 48
Route.prototype.callAction = function(current) {                                                                      // 49
  var self = this;                                                                                                    // 50
  self._action(current.params, current.queryParams);                                                                  // 51
};                                                                                                                    // 52
                                                                                                                      // 53
Route.prototype.callSubscriptions = function(current) {                                                               // 54
  this.clearSubscriptions();                                                                                          // 55
  if (this.group) {                                                                                                   // 56
    this.group.callSubscriptions(current);                                                                            // 57
  }                                                                                                                   // 58
                                                                                                                      // 59
  this._subscriptions(current.params, current.queryParams);                                                           // 60
};                                                                                                                    // 61
                                                                                                                      // 62
Route.prototype.getRouteName = function() {                                                                           // 63
  this._routeCloseDep.depend();                                                                                       // 64
  return this.name;                                                                                                   // 65
};                                                                                                                    // 66
                                                                                                                      // 67
Route.prototype.getParam = function(key) {                                                                            // 68
  this._routeCloseDep.depend();                                                                                       // 69
  return this._params.get(key);                                                                                       // 70
};                                                                                                                    // 71
                                                                                                                      // 72
Route.prototype.getQueryParam = function(key) {                                                                       // 73
  this._routeCloseDep.depend();                                                                                       // 74
  return this._queryParams.get(key);                                                                                  // 75
};                                                                                                                    // 76
                                                                                                                      // 77
Route.prototype.watchPathChange = function() {                                                                        // 78
  this._pathChangeDep.depend();                                                                                       // 79
};                                                                                                                    // 80
                                                                                                                      // 81
Route.prototype.registerRouteClose = function() {                                                                     // 82
  this._params = new ReactiveDict();                                                                                  // 83
  this._queryParams = new ReactiveDict();                                                                             // 84
  this._routeCloseDep.changed();                                                                                      // 85
  this._pathChangeDep.changed();                                                                                      // 86
};                                                                                                                    // 87
                                                                                                                      // 88
Route.prototype.registerRouteChange = function(currentContext, routeChanging) {                                       // 89
  // register params                                                                                                  // 90
  var params = currentContext.params;                                                                                 // 91
  this._updateReactiveDict(this._params, params);                                                                     // 92
                                                                                                                      // 93
  // register query params                                                                                            // 94
  var queryParams = currentContext.queryParams;                                                                       // 95
  this._updateReactiveDict(this._queryParams, queryParams);                                                           // 96
                                                                                                                      // 97
  // if the route is changing, we need to defer triggering path changing                                              // 98
  // if we did this, old route's path watchers will detect this                                                       // 99
  // Real issue is, above watcher will get removed with the new route                                                 // 100
  // So, we don't need to trigger it now                                                                              // 101
  // We are doing it on the route close event. So, if they exists they'll                                             // 102
  // get notify that                                                                                                  // 103
  if(!routeChanging) {                                                                                                // 104
    this._pathChangeDep.changed();                                                                                    // 105
  }                                                                                                                   // 106
};                                                                                                                    // 107
                                                                                                                      // 108
Route.prototype._updateReactiveDict = function(dict, newValues) {                                                     // 109
  var currentKeys = _.keys(newValues);                                                                                // 110
  var oldKeys = _.keys(dict.keyDeps);                                                                                 // 111
                                                                                                                      // 112
  // set new values                                                                                                   // 113
  //  params is an array. So, _.each(params) does not works                                                           // 114
  //  to iterate params                                                                                               // 115
  _.each(currentKeys, function(key) {                                                                                 // 116
    dict.set(key, newValues[key]);                                                                                    // 117
  });                                                                                                                 // 118
                                                                                                                      // 119
  // remove keys which does not exisits here                                                                          // 120
  var removedKeys = _.difference(oldKeys, currentKeys);                                                               // 121
  _.each(removedKeys, function(key) {                                                                                 // 122
    dict.set(key, undefined);                                                                                         // 123
  });                                                                                                                 // 124
};                                                                                                                    // 125
                                                                                                                      // 126
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      // 2369
}).call(this);                                                                                                        // 2370
                                                                                                                      // 2371
                                                                                                                      // 2372
                                                                                                                      // 2373
                                                                                                                      // 2374
                                                                                                                      // 2375
                                                                                                                      // 2376
(function () {                                                                                                        // 2377
                                                                                                                      // 2378
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/kadira:flow-router/client/_init.js                                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// Export Router Instance                                                                                             // 1
FlowRouter = new Router();                                                                                            // 2
FlowRouter.Router = Router;                                                                                           // 3
FlowRouter.Route = Route;                                                                                             // 4
                                                                                                                      // 5
// Initialize FlowRouter                                                                                              // 6
Meteor.startup(function () {                                                                                          // 7
  if(!FlowRouter._askedToWait) {                                                                                      // 8
    FlowRouter.initialize();                                                                                          // 9
  }                                                                                                                   // 10
});                                                                                                                   // 11
                                                                                                                      // 12
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      // 2398
}).call(this);                                                                                                        // 2399
                                                                                                                      // 2400
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['kadira:flow-router'] = {
  FlowRouter: FlowRouter
};

})();
