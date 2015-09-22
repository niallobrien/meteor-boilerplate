(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var check = Package.check.check;
var Match = Package.check.Match;
var ReactiveDict = Package['reactive-dict'].ReactiveDict;
var _ = Package.underscore._;

/* Package-scope variables */
var __coffeescriptShare, ActiveRoute;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/zimme_active-route/packages/zimme_active-route.js                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
(function () {                                                                                                        // 1
                                                                                                                      // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/zimme:active-route/lib/activeroute.coffee.js                                                           //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var checkArgument, checkRouterPackages, errorMessages, fr, ir, test;                                                  // 10
                                                                                                                      // 11
fr = ir = null;                                                                                                       // 12
                                                                                                                      // 13
checkArgument = function(arg) {                                                                                       // 14
  var error;                                                                                                          // 15
  try {                                                                                                               // 16
    return check(arg, Match.OneOf(RegExp, String));                                                                   // 17
  } catch (_error) {                                                                                                  // 18
    error = _error;                                                                                                   // 19
    throw new Error(errorMessages.invalidArgument);                                                                   // 20
  }                                                                                                                   // 21
};                                                                                                                    // 22
                                                                                                                      // 23
checkRouterPackages = function() {                                                                                    // 24
  var _ref;                                                                                                           // 25
  fr = (_ref = Package['kadira:flow-router']) != null ? _ref : Package['meteorhacks:flow-router'];                    // 26
  ir = Package['iron:router'];                                                                                        // 27
  if (!(ir || fr)) {                                                                                                  // 28
    throw new Error(errorMessages.noSupportedRouter);                                                                 // 29
  }                                                                                                                   // 30
};                                                                                                                    // 31
                                                                                                                      // 32
errorMessages = {                                                                                                     // 33
  noSupportedRouter: 'No supported router installed. Please install ' + 'iron:router or meteorhacks:flow-router.',    // 34
  invalidArgument: 'Invalid argument, must be String or RegExp.'                                                      // 35
};                                                                                                                    // 36
                                                                                                                      // 37
share.config = new ReactiveDict('activeRouteConfig');                                                                 // 38
                                                                                                                      // 39
share.config.setDefault({                                                                                             // 40
  activeClass: 'active',                                                                                              // 41
  caseSensitive: true,                                                                                                // 42
  disabledClass: 'disabled'                                                                                           // 43
});                                                                                                                   // 44
                                                                                                                      // 45
test = function(value, pattern) {                                                                                     // 46
  var result;                                                                                                         // 47
  if (!value) {                                                                                                       // 48
    return false;                                                                                                     // 49
  }                                                                                                                   // 50
  if (Match.test(pattern, RegExp)) {                                                                                  // 51
    result = value.search(pattern);                                                                                   // 52
    result = result > -1;                                                                                             // 53
  } else if (Match.test(pattern, String)) {                                                                           // 54
    if (share.config.equals('caseSensitive', false)) {                                                                // 55
      value = value.toLowerCase();                                                                                    // 56
      pattern = pattern.toLowerCase();                                                                                // 57
    }                                                                                                                 // 58
    result = value === pattern;                                                                                       // 59
  }                                                                                                                   // 60
  return result != null ? result : result = false;                                                                    // 61
};                                                                                                                    // 62
                                                                                                                      // 63
ActiveRoute = {                                                                                                       // 64
  config: function() {                                                                                                // 65
    return this.configure.apply(this, arguments);                                                                     // 66
  },                                                                                                                  // 67
  configure: function(options) {                                                                                      // 68
    if (Meteor.isServer) {                                                                                            // 69
      return;                                                                                                         // 70
    }                                                                                                                 // 71
    share.config.set(options);                                                                                        // 72
  },                                                                                                                  // 73
  name: function(routeName) {                                                                                         // 74
    var currentRouteName, _ref, _ref1;                                                                                // 75
    checkRouterPackages();                                                                                            // 76
    if (Meteor.isServer) {                                                                                            // 77
      return;                                                                                                         // 78
    }                                                                                                                 // 79
    checkArgument(routeName);                                                                                         // 80
    if (ir) {                                                                                                         // 81
      currentRouteName = (_ref = ir.Router.current()) != null ? (_ref1 = _ref.route) != null ? typeof _ref1.getName === "function" ? _ref1.getName() : void 0 : void 0 : void 0;
    }                                                                                                                 // 83
    if (fr) {                                                                                                         // 84
      if (currentRouteName == null) {                                                                                 // 85
        currentRouteName = fr.FlowRouter.getRouteName();                                                              // 86
      }                                                                                                               // 87
    }                                                                                                                 // 88
    return test(currentRouteName, routeName);                                                                         // 89
  },                                                                                                                  // 90
  path: function(path) {                                                                                              // 91
    var controller, currentPath;                                                                                      // 92
    checkRouterPackages();                                                                                            // 93
    if (Meteor.isServer) {                                                                                            // 94
      return;                                                                                                         // 95
    }                                                                                                                 // 96
    checkArgument(path);                                                                                              // 97
    if (ir) {                                                                                                         // 98
      controller = ir.Router.current();                                                                               // 99
      if (controller != null ? controller.route : void 0) {                                                           // 100
        currentPath = controller != null ? controller.location.get().path : void 0;                                   // 101
      }                                                                                                               // 102
    }                                                                                                                 // 103
    if (fr) {                                                                                                         // 104
      fr.FlowRouter.watchPathChange();                                                                                // 105
      if (currentPath == null) {                                                                                      // 106
        currentPath = fr.FlowRouter.current().path;                                                                   // 107
      }                                                                                                               // 108
    }                                                                                                                 // 109
    return test(currentPath, path);                                                                                   // 110
  }                                                                                                                   // 111
};                                                                                                                    // 112
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      // 114
}).call(this);                                                                                                        // 115
                                                                                                                      // 116
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['zimme:active-route'] = {
  ActiveRoute: ActiveRoute
};

})();

//# sourceMappingURL=zimme_active-route.js.map
