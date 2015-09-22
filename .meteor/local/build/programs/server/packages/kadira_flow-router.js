(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var _ = Package.underscore._;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var ReactiveDict = Package['reactive-dict'].ReactiveDict;
var ReactiveVar = Package['reactive-var'].ReactiveVar;

/* Package-scope variables */
var Router, Group, Route, FlowRouter, FastRender;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// packages/kadira_flow-router/packages/kadira_flow-router.js                              //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
(function () {                                                                             // 1
                                                                                           // 2
//////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                  //     // 4
// packages/kadira:flow-router/server/router.js                                     //     // 5
//                                                                                  //     // 6
//////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                    //     // 8
var Qs = Npm.require('qs');                                                         // 1   // 9
                                                                                    // 2   // 10
Router = function () {                                                              // 3   // 11
  this._routes = [];                                                                // 4   // 12
  this._routesMap = {};                                                             // 5   // 13
  this.subscriptions = Function.prototype;                                          // 6   // 14
                                                                                    // 7   // 15
  // holds onRoute callbacks                                                        // 8   // 16
  this._onRouteCallbacks = [];                                                      // 9   // 17
};                                                                                  // 10  // 18
                                                                                    // 11  // 19
Router.prototype.route = function(pathDef, options) {                               // 12  // 20
  if (!/^\/.*/.test(pathDef)) {                                                     // 13  // 21
    var message = "route's path must start with '/'";                               // 14  // 22
    throw new Error(message);                                                       // 15  // 23
  }                                                                                 // 16  // 24
                                                                                    // 17  // 25
  options = options || {};                                                          // 18  // 26
  var route = new Route(this, pathDef, options);                                    // 19  // 27
  this._routes.push(route);                                                         // 20  // 28
                                                                                    // 21  // 29
  if (options.name) {                                                               // 22  // 30
    this._routesMap[options.name] = route;                                          // 23  // 31
  }                                                                                 // 24  // 32
                                                                                    // 25  // 33
  this._triggerRouteRegister(route);                                                // 26  // 34
  return route;                                                                     // 27  // 35
};                                                                                  // 28  // 36
                                                                                    // 29  // 37
Router.prototype.group = function(options) {                                        // 30  // 38
  return new Group(this, options);                                                  // 31  // 39
};                                                                                  // 32  // 40
                                                                                    // 33  // 41
Router.prototype.path = function(pathDef, fields, queryParams) {                    // 34  // 42
  if (this._routesMap[pathDef]) {                                                   // 35  // 43
    pathDef = this._routesMap[pathDef].path;                                        // 36  // 44
  }                                                                                 // 37  // 45
                                                                                    // 38  // 46
  fields = fields || {};                                                            // 39  // 47
  var regExp = /(:[\w\(\)\\\+\*\.\?]+)+/g;                                          // 40  // 48
  var path = pathDef.replace(regExp, function(key) {                                // 41  // 49
    var firstRegexpChar = key.indexOf("(");                                         // 42  // 50
    // get the content behind : and (\\d+/)                                         // 43  // 51
    key = key.substring(1, (firstRegexpChar > 0)? firstRegexpChar: undefined);      // 44  // 52
    // remove +?*                                                                   // 45  // 53
    key = key.replace(/[\+\*\?]+/g, "");                                            // 46  // 54
                                                                                    // 47  // 55
    return fields[key] || "";                                                       // 48  // 56
  });                                                                               // 49  // 57
                                                                                    // 50  // 58
  path = path.replace(/\/\/+/g, "/"); // Replace multiple slashes with single slash // 51  // 59
                                                                                    // 52  // 60
  // remove trailing slash                                                          // 53  // 61
  // but keep the root slash if it's the only one                                   // 54  // 62
  path = path.match(/^\/{1}$/) ? path: path.replace(/\/$/, "");                     // 55  // 63
                                                                                    // 56  // 64
  var strQueryParams = Qs.stringify(queryParams || {});                             // 57  // 65
  if(strQueryParams) {                                                              // 58  // 66
    path += "?" + strQueryParams;                                                   // 59  // 67
  }                                                                                 // 60  // 68
                                                                                    // 61  // 69
  return path;                                                                      // 62  // 70
};                                                                                  // 63  // 71
                                                                                    // 64  // 72
Router.prototype.onRouteRegister = function(cb) {                                   // 65  // 73
  this._onRouteCallbacks.push(cb);                                                  // 66  // 74
};                                                                                  // 67  // 75
                                                                                    // 68  // 76
Router.prototype._triggerRouteRegister = function(currentRoute) {                   // 69  // 77
  // We should only need to send a safe set of fields on the route                  // 70  // 78
  // object.                                                                        // 71  // 79
  // This is not to hide what's inside the route object, but to show                // 72  // 80
  // these are the public APIs                                                      // 73  // 81
  var routePublicApi = _.pick(currentRoute, 'name', 'pathDef', 'path');             // 74  // 82
  var omittingOptionFields = [                                                      // 75  // 83
    'triggersEnter', 'triggersExit', 'action', 'subscriptions', 'name'              // 76  // 84
  ];                                                                                // 77  // 85
  routePublicApi.options = _.omit(currentRoute.options, omittingOptionFields);      // 78  // 86
                                                                                    // 79  // 87
  _.each(this._onRouteCallbacks, function(cb) {                                     // 80  // 88
    cb(routePublicApi);                                                             // 81  // 89
  });                                                                               // 82  // 90
};                                                                                  // 83  // 91
                                                                                    // 84  // 92
                                                                                    // 85  // 93
Router.prototype.go = function() {                                                  // 86  // 94
  // client only                                                                    // 87  // 95
};                                                                                  // 88  // 96
                                                                                    // 89  // 97
                                                                                    // 90  // 98
Router.prototype.current = function() {                                             // 91  // 99
  // client only                                                                    // 92  // 100
};                                                                                  // 93  // 101
                                                                                    // 94  // 102
                                                                                    // 95  // 103
Router.prototype.triggers = {                                                       // 96  // 104
  enter: function() {                                                               // 97  // 105
    // client only                                                                  // 98  // 106
  },                                                                                // 99  // 107
  exit: function() {                                                                // 100
    // client only                                                                  // 101
  }                                                                                 // 102
};                                                                                  // 103
                                                                                    // 104
Router.prototype.middleware = function() {                                          // 105
  // client only                                                                    // 106
};                                                                                  // 107
                                                                                    // 108
                                                                                    // 109
Router.prototype.getState = function() {                                            // 110
  // client only                                                                    // 111
};                                                                                  // 112
                                                                                    // 113
                                                                                    // 114
Router.prototype.getAllStates = function() {                                        // 115
  // client only                                                                    // 116
};                                                                                  // 117
                                                                                    // 118
                                                                                    // 119
Router.prototype.setState = function() {                                            // 120
  // client only                                                                    // 121
};                                                                                  // 122
                                                                                    // 123
                                                                                    // 124
Router.prototype.removeState = function() {                                         // 125
  // client only                                                                    // 126
};                                                                                  // 127
                                                                                    // 128
                                                                                    // 129
Router.prototype.clearStates = function() {                                         // 130
  // client only                                                                    // 131
};                                                                                  // 132
                                                                                    // 133
                                                                                    // 134
Router.prototype.ready = function() {                                               // 135
  // client only                                                                    // 136
};                                                                                  // 137
                                                                                    // 138
                                                                                    // 139
Router.prototype.initialize = function() {                                          // 140
  // client only                                                                    // 141
};                                                                                  // 142
                                                                                    // 143
Router.prototype.wait = function() {                                                // 144
  // client only                                                                    // 145
};                                                                                  // 146
                                                                                    // 147
//////////////////////////////////////////////////////////////////////////////////////     // 156
                                                                                           // 157
}).call(this);                                                                             // 158
                                                                                           // 159
                                                                                           // 160
                                                                                           // 161
                                                                                           // 162
                                                                                           // 163
                                                                                           // 164
(function () {                                                                             // 165
                                                                                           // 166
//////////////////////////////////////////////////////////////////////////////////////     // 167
//                                                                                  //     // 168
// packages/kadira:flow-router/server/group.js                                      //     // 169
//                                                                                  //     // 170
//////////////////////////////////////////////////////////////////////////////////////     // 171
                                                                                    //     // 172
Group = function(router, options) {                                                 // 1   // 173
  options = options || {};                                                          // 2   // 174
  this.prefix = options.prefix || '';                                               // 3   // 175
                                                                                    // 4   // 176
  this._router = router;                                                            // 5   // 177
};                                                                                  // 6   // 178
                                                                                    // 7   // 179
Group.prototype.route = function(pathDef, options) {                                // 8   // 180
  pathDef = this.prefix + pathDef;                                                  // 9   // 181
  return this._router.route(pathDef, options);                                      // 10  // 182
};                                                                                  // 11  // 183
                                                                                    // 12  // 184
Group.prototype.group = function(options) {                                         // 13  // 185
  var group = new Group(this._router, options);                                     // 14  // 186
  group.parent = this;                                                              // 15  // 187
                                                                                    // 16  // 188
  return group;                                                                     // 17  // 189
};                                                                                  // 18  // 190
                                                                                    // 19  // 191
//////////////////////////////////////////////////////////////////////////////////////     // 192
                                                                                           // 193
}).call(this);                                                                             // 194
                                                                                           // 195
                                                                                           // 196
                                                                                           // 197
                                                                                           // 198
                                                                                           // 199
                                                                                           // 200
(function () {                                                                             // 201
                                                                                           // 202
//////////////////////////////////////////////////////////////////////////////////////     // 203
//                                                                                  //     // 204
// packages/kadira:flow-router/server/route.js                                      //     // 205
//                                                                                  //     // 206
//////////////////////////////////////////////////////////////////////////////////////     // 207
                                                                                    //     // 208
Route = function(router, pathDef, options) {                                        // 1   // 209
  options = options || {};                                                          // 2   // 210
  this.options = options;                                                           // 3   // 211
  this.name = options.name;                                                         // 4   // 212
  this.pathDef = pathDef;                                                           // 5   // 213
                                                                                    // 6   // 214
  // Route.path is deprecated and will be removed in 3.0                            // 7   // 215
  this.path = pathDef;                                                              // 8   // 216
                                                                                    // 9   // 217
  this.action = options.action || Function.prototype;                               // 10  // 218
  this.subscriptions = options.subscriptions || Function.prototype;                 // 11  // 219
  this._subsMap = {};                                                               // 12  // 220
};                                                                                  // 13  // 221
                                                                                    // 14  // 222
                                                                                    // 15  // 223
Route.prototype.register = function(name, sub, options) {                           // 16  // 224
  this._subsMap[name] = sub;                                                        // 17  // 225
};                                                                                  // 18  // 226
                                                                                    // 19  // 227
                                                                                    // 20  // 228
Route.prototype.subscription = function(name) {                                     // 21  // 229
  return this._subsMap[name];                                                       // 22  // 230
};                                                                                  // 23  // 231
                                                                                    // 24  // 232
                                                                                    // 25  // 233
Route.prototype.middleware = function(middleware) {                                 // 26  // 234
                                                                                    // 27  // 235
};                                                                                  // 28  // 236
                                                                                    // 29  // 237
//////////////////////////////////////////////////////////////////////////////////////     // 238
                                                                                           // 239
}).call(this);                                                                             // 240
                                                                                           // 241
                                                                                           // 242
                                                                                           // 243
                                                                                           // 244
                                                                                           // 245
                                                                                           // 246
(function () {                                                                             // 247
                                                                                           // 248
//////////////////////////////////////////////////////////////////////////////////////     // 249
//                                                                                  //     // 250
// packages/kadira:flow-router/server/_init.js                                      //     // 251
//                                                                                  //     // 252
//////////////////////////////////////////////////////////////////////////////////////     // 253
                                                                                    //     // 254
// Export Router Instance                                                           // 1   // 255
FlowRouter = new Router();                                                          // 2   // 256
FlowRouter.Router = Router;                                                         // 3   // 257
FlowRouter.Route = Route;                                                           // 4   // 258
                                                                                    // 5   // 259
//////////////////////////////////////////////////////////////////////////////////////     // 260
                                                                                           // 261
}).call(this);                                                                             // 262
                                                                                           // 263
                                                                                           // 264
                                                                                           // 265
                                                                                           // 266
                                                                                           // 267
                                                                                           // 268
(function () {                                                                             // 269
                                                                                           // 270
//////////////////////////////////////////////////////////////////////////////////////     // 271
//                                                                                  //     // 272
// packages/kadira:flow-router/server/plugins/fast_render.js                        //     // 273
//                                                                                  //     // 274
//////////////////////////////////////////////////////////////////////////////////////     // 275
                                                                                    //     // 276
if(!Package['meteorhacks:fast-render']) {                                           // 1   // 277
  return;                                                                           // 2   // 278
}                                                                                   // 3   // 279
                                                                                    // 4   // 280
FastRender = Package['meteorhacks:fast-render'].FastRender;                         // 5   // 281
                                                                                    // 6   // 282
// hack to run after eveything else on startup                                      // 7   // 283
Meteor.startup(function () {                                                        // 8   // 284
  Meteor.startup(function () {                                                      // 9   // 285
    setupFastRender();                                                              // 10  // 286
  });                                                                               // 11  // 287
});                                                                                 // 12  // 288
                                                                                    // 13  // 289
function setupFastRender () {                                                       // 14  // 290
  _.each(FlowRouter._routes, function (route) {                                     // 15  // 291
    FastRender.route(route.pathDef, function (routeParams, path) {                  // 16  // 292
      var self = this;                                                              // 17  // 293
                                                                                    // 18  // 294
      // anyone using Meteor.subscribe for something else?                          // 19  // 295
      var original = Meteor.subscribe;                                              // 20  // 296
      Meteor.subscribe = function () {                                              // 21  // 297
        return _.toArray(arguments);                                                // 22  // 298
      };                                                                            // 23  // 299
                                                                                    // 24  // 300
      route._subsMap = {};                                                          // 25  // 301
      FlowRouter.subscriptions.call(route, path);                                   // 26  // 302
      if(route.subscriptions) {                                                     // 27  // 303
        var queryParams = routeParams.query;                                        // 28  // 304
        var params = _.omit(routeParams, 'query');                                  // 29  // 305
        route.subscriptions(params, queryParams);                                   // 30  // 306
      }                                                                             // 31  // 307
      _.each(route._subsMap, function (args) {                                      // 32  // 308
        self.subscribe.apply(self, args);                                           // 33  // 309
      });                                                                           // 34  // 310
                                                                                    // 35  // 311
      // restore Meteor.subscribe, ... on server side                               // 36  // 312
      Meteor.subscribe = original;                                                  // 37  // 313
    });                                                                             // 38  // 314
  });                                                                               // 39  // 315
}                                                                                   // 40  // 316
                                                                                    // 41  // 317
//////////////////////////////////////////////////////////////////////////////////////     // 318
                                                                                           // 319
}).call(this);                                                                             // 320
                                                                                           // 321
/////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['kadira:flow-router'] = {
  FlowRouter: FlowRouter
};

})();

//# sourceMappingURL=kadira_flow-router.js.map
