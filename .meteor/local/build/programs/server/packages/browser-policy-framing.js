(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var _ = Package.underscore._;
var BrowserPolicy = Package['browser-policy-common'].BrowserPolicy;

(function(){

//////////////////////////////////////////////////////////////////////////////////
//                                                                              //
// packages/browser-policy-framing/browser-policy-framing.js                    //
//                                                                              //
//////////////////////////////////////////////////////////////////////////////////
                                                                                //
// By adding this package, you get a default policy where only web pages on the
// same origin as your app can frame your app.                                  // 2
//                                                                              // 3
// For controlling which origins can frame this app,                            // 4
// BrowserPolicy.framing.disallow()                                             // 5
// BrowserPolicy.framing.restrictToOrigin(origin)                               // 6
// BrowserPolicy.framing.allowByAnyOrigin()                                     // 7
                                                                                // 8
var defaultXFrameOptions = "SAMEORIGIN";                                        // 9
var xFrameOptions = defaultXFrameOptions;                                       // 10
                                                                                // 11
BrowserPolicy.framing = {};                                                     // 12
                                                                                // 13
_.extend(BrowserPolicy.framing, {                                               // 14
  // Exported for tests and browser-policy-common.                              // 15
  _constructXFrameOptions: function () {                                        // 16
    return xFrameOptions;                                                       // 17
  },                                                                            // 18
  _reset: function () {                                                         // 19
    xFrameOptions = defaultXFrameOptions;                                       // 20
  },                                                                            // 21
                                                                                // 22
  disallow: function () {                                                       // 23
    xFrameOptions = "DENY";                                                     // 24
  },                                                                            // 25
  // ALLOW-FROM not supported in Chrome or Safari.                              // 26
  restrictToOrigin: function (origin) {                                         // 27
    // Trying to specify two allow-from throws to prevent users from            // 28
    // accidentally overwriting an allow-from origin when they think they are   // 29
    // adding multiple origins.                                                 // 30
    if (xFrameOptions && xFrameOptions.indexOf("ALLOW-FROM") === 0)             // 31
      throw new Error("You can only specify one origin that is allowed to" +    // 32
                      " frame this app.");                                      // 33
    xFrameOptions = "ALLOW-FROM " + origin;                                     // 34
  },                                                                            // 35
  allowAll: function () {                                                       // 36
    xFrameOptions = null;                                                       // 37
  }                                                                             // 38
});                                                                             // 39
                                                                                // 40
//////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['browser-policy-framing'] = {};

})();

//# sourceMappingURL=browser-policy-framing.js.map
