(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var WebApp = Package.webapp.WebApp;
var main = Package.webapp.main;
var WebAppInternals = Package.webapp.WebAppInternals;

/* Package-scope variables */
var BrowserPolicy;

(function(){

////////////////////////////////////////////////////////////////////////////
//                                                                        //
// packages/browser-policy-common/browser-policy-common.js                //
//                                                                        //
////////////////////////////////////////////////////////////////////////////
                                                                          //
BrowserPolicy = {};                                                       // 1
                                                                          // 2
var inTest = false;                                                       // 3
                                                                          // 4
BrowserPolicy._runningTest = function () {                                // 5
  return inTest;                                                          // 6
};                                                                        // 7
                                                                          // 8
BrowserPolicy._setRunningTest = function () {                             // 9
  inTest = true;                                                          // 10
};                                                                        // 11
                                                                          // 12
WebApp.connectHandlers.use(function (req, res, next) {                    // 13
  // Never set headers inside tests because they could break other tests.
  if (BrowserPolicy._runningTest())                                       // 15
    return next();                                                        // 16
                                                                          // 17
  var xFrameOptions = BrowserPolicy.framing &&                            // 18
        BrowserPolicy.framing._constructXFrameOptions();                  // 19
  var csp = BrowserPolicy.content &&                                      // 20
        BrowserPolicy.content._constructCsp();                            // 21
  if (xFrameOptions) {                                                    // 22
    res.setHeader("X-Frame-Options", xFrameOptions);                      // 23
  }                                                                       // 24
  if (csp) {                                                              // 25
    res.setHeader("Content-Security-Policy", csp);                        // 26
  }                                                                       // 27
  next();                                                                 // 28
});                                                                       // 29
                                                                          // 30
// We use `rawConnectHandlers` to set X-Content-Type-Options on all       // 31
// requests, including static files.                                      // 32
// XXX We should probably use `rawConnectHandlers` for X-Frame-Options    // 33
// and Content-Security-Policy too, but let's make sure that doesn't      // 34
// break anything first (e.g. the OAuth popup flow won't work well with   // 35
// a CSP that disallows inline scripts).                                  // 36
WebApp.rawConnectHandlers.use(function (req, res, next) {                 // 37
  if (BrowserPolicy._runningTest())                                       // 38
    return next();                                                        // 39
                                                                          // 40
  var contentTypeOptions = BrowserPolicy.content &&                       // 41
        BrowserPolicy.content._xContentTypeOptions();                     // 42
  if (contentTypeOptions) {                                               // 43
    res.setHeader("X-Content-Type-Options", contentTypeOptions);          // 44
  }                                                                       // 45
  next();                                                                 // 46
});                                                                       // 47
                                                                          // 48
////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['browser-policy-common'] = {
  BrowserPolicy: BrowserPolicy
};

})();

//# sourceMappingURL=browser-policy-common.js.map
