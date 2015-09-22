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
var check = Package.check.check;
var Match = Package.check.Match;
var Template = Package.templating.Template;
var _ = Package.underscore._;
var ActiveRoute = Package['zimme:active-route'].ActiveRoute;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var __coffeescriptShare;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// packages/arillo_flow-router-helpers/packages/arillo_flow-router-helpers.js                            //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
(function () {                                                                                           // 1
                                                                                                         // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                    //
// packages/arillo:flow-router-helpers/client/helpers.coffee.js                                       //
//                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                      //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var currentRouteName, func, helpers, isSubReady, name, param, pathFor, queryParam, subsReady, urlFor,    // 10
  __slice = [].slice,                                                                                    // 11
  __hasProp = {}.hasOwnProperty;                                                                         // 12
                                                                                                         // 13
subsReady = function() {                                                                                 // 14
  var subs;                                                                                              // 15
  subs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];                                        // 16
  if (subs.length === 1) {                                                                               // 17
    return FlowRouter.subsReady();                                                                       // 18
  }                                                                                                      // 19
  subs = subs.slice(0, subs.length - 1);                                                                 // 20
  return _.reduce(subs, function(memo, sub) {                                                            // 21
    return memo && FlowRouter.subsReady(sub);                                                            // 22
  }, true);                                                                                              // 23
};                                                                                                       // 24
                                                                                                         // 25
pathFor = function(path, view) {                                                                         // 26
  var query, _ref;                                                                                       // 27
  if (!path) {                                                                                           // 28
    throw new Error('no path defined');                                                                  // 29
  }                                                                                                      // 30
  if (((_ref = path.hash) != null ? _ref.route : void 0) != null) {                                      // 31
    view = path;                                                                                         // 32
    path = view.hash.route;                                                                              // 33
    delete view.hash.route;                                                                              // 34
  }                                                                                                      // 35
  query = view.hash.query ? FlowRouter._qs.parse(view.hash.query) : {};                                  // 36
  return FlowRouter.path(path, view.hash, query);                                                        // 37
};                                                                                                       // 38
                                                                                                         // 39
urlFor = function(path, view) {                                                                          // 40
  var relativePath;                                                                                      // 41
  relativePath = pathFor(path, view);                                                                    // 42
  return Meteor.absoluteUrl(relativePath.substr(1));                                                     // 43
};                                                                                                       // 44
                                                                                                         // 45
param = function(name) {                                                                                 // 46
  return FlowRouter.getParam(name);                                                                      // 47
};                                                                                                       // 48
                                                                                                         // 49
queryParam = function(key) {                                                                             // 50
  return FlowRouter.getQueryParam(key);                                                                  // 51
};                                                                                                       // 52
                                                                                                         // 53
currentRouteName = function() {                                                                          // 54
  return FlowRouter.getRouteName();                                                                      // 55
};                                                                                                       // 56
                                                                                                         // 57
isSubReady = function(sub) {                                                                             // 58
  if (sub) {                                                                                             // 59
    return FlowRouter.subsReady(sub);                                                                    // 60
  }                                                                                                      // 61
  return FlowRouter.subsReady();                                                                         // 62
};                                                                                                       // 63
                                                                                                         // 64
helpers = {                                                                                              // 65
  subsReady: subsReady,                                                                                  // 66
  pathFor: pathFor,                                                                                      // 67
  urlFor: urlFor,                                                                                        // 68
  param: param,                                                                                          // 69
  queryParam: queryParam,                                                                                // 70
  currentRouteName: currentRouteName,                                                                    // 71
  isSubReady: isSubReady                                                                                 // 72
};                                                                                                       // 73
                                                                                                         // 74
for (name in helpers) {                                                                                  // 75
  if (!__hasProp.call(helpers, name)) continue;                                                          // 76
  func = helpers[name];                                                                                  // 77
  Template.registerHelper(name, func);                                                                   // 78
}                                                                                                        // 79
////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         // 81
}).call(this);                                                                                           // 82
                                                                                                         // 83
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['arillo:flow-router-helpers'] = {};

})();
