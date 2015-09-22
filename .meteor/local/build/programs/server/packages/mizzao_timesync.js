(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var WebApp = Package.webapp.WebApp;
var main = Package.webapp.main;
var WebAppInternals = Package.webapp.WebAppInternals;

(function(){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/mizzao_timesync/packages/mizzao_timesync.js                               //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
(function () {                                                                        // 1
                                                                                      // 2
//////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                              //    // 4
// packages/mizzao:timesync/timesync-server.js                                  //    // 5
//                                                                              //    // 6
//////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                //    // 8
// Use rawConnectHandlers so we get a response as quickly as possible           // 1  // 9
// https://github.com/meteor/meteor/blob/devel/packages/webapp/webapp_server.js // 2  // 10
                                                                                // 3  // 11
WebApp.rawConnectHandlers.use("/_timesync",                                     // 4  // 12
  function(req, res, next) {                                                    // 5  // 13
    // Never ever cache this, otherwise weird times are shown on reload         // 6  // 14
    // http://stackoverflow.com/q/18811286/586086                               // 7  // 15
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");      // 8  // 16
    res.setHeader("Pragma", "no-cache");                                        // 9  // 17
    res.setHeader("Expires", 0);                                                // 10
                                                                                // 11
    // Avoid MIME type warnings in browsers                                     // 12
    res.setHeader("Content-Type", "text/plain");                                // 13
                                                                                // 14
    // Cordova lives in meteor.local, so it does CORS                           // 15
    if (req.headers && req.headers.origin === 'http://meteor.local') {          // 16
      res.setHeader('Access-Control-Allow-Origin', 'http://meteor.local');      // 17
    }                                                                           // 18
                                                                                // 19
    res.end(Date.now().toString());                                             // 20
  }                                                                             // 21
);                                                                              // 22
                                                                                // 23
//////////////////////////////////////////////////////////////////////////////////    // 32
                                                                                      // 33
}).call(this);                                                                        // 34
                                                                                      // 35
////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['mizzao:timesync'] = {};

})();

//# sourceMappingURL=mizzao_timesync.js.map
