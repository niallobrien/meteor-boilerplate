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
var EJSON = Package.ejson.EJSON;
var _ = Package.underscore._;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;

/* Package-scope variables */
var InjectData;

(function(){

/////////////////////////////////////////////////////////////////////////////
//                                                                         //
// packages/meteorhacks_inject-data/packages/meteorhacks_inject-data.js    //
//                                                                         //
/////////////////////////////////////////////////////////////////////////////
                                                                           //
(function () {                                                             // 1
                                                                           // 2
///////////////////////////////////////////////////////////////////////    // 3
//                                                                   //    // 4
// packages/meteorhacks:inject-data/lib/namespace.js                 //    // 5
//                                                                   //    // 6
///////////////////////////////////////////////////////////////////////    // 7
                                                                     //    // 8
InjectData = {};                                                     // 1  // 9
///////////////////////////////////////////////////////////////////////    // 10
                                                                           // 11
}).call(this);                                                             // 12
                                                                           // 13
                                                                           // 14
                                                                           // 15
                                                                           // 16
                                                                           // 17
                                                                           // 18
(function () {                                                             // 19
                                                                           // 20
///////////////////////////////////////////////////////////////////////    // 21
//                                                                   //    // 22
// packages/meteorhacks:inject-data/lib/utils.js                     //    // 23
//                                                                   //    // 24
///////////////////////////////////////////////////////////////////////    // 25
                                                                     //    // 26
InjectData._encode = function(ejson) {                               // 1  // 27
  var ejsonString = EJSON.stringify(ejson);                          // 2  // 28
  return encodeURIComponent(ejsonString);                            // 3  // 29
};                                                                   // 4  // 30
                                                                     // 5  // 31
InjectData._decode = function(encodedEjson) {                        // 6  // 32
  var decodedEjsonString = decodeURIComponent(encodedEjson);         // 7  // 33
  if(!decodedEjsonString) return null;                               // 8  // 34
                                                                     // 9  // 35
  return EJSON.parse(decodedEjsonString);                            // 10
};                                                                   // 11
                                                                     // 12
///////////////////////////////////////////////////////////////////////    // 39
                                                                           // 40
}).call(this);                                                             // 41
                                                                           // 42
                                                                           // 43
                                                                           // 44
                                                                           // 45
                                                                           // 46
                                                                           // 47
(function () {                                                             // 48
                                                                           // 49
///////////////////////////////////////////////////////////////////////    // 50
//                                                                   //    // 51
// packages/meteorhacks:inject-data/lib/client.js                    //    // 52
//                                                                   //    // 53
///////////////////////////////////////////////////////////////////////    // 54
                                                                     //    // 55
Meteor.startup(function() {                                          // 1  // 56
  var dom = $('script[type="text/inject-data"]', document);          // 2  // 57
  var injectedDataString = $.trim(dom.text());                       // 3  // 58
  InjectData._data = InjectData._decode(injectedDataString) || {};   // 4  // 59
});                                                                  // 5  // 60
                                                                     // 6  // 61
InjectData.getData = function(key, callback) {                       // 7  // 62
  Meteor.startup(function() {                                        // 8  // 63
    callback(InjectData._data[key]);                                 // 9  // 64
  });                                                                // 10
};                                                                   // 11
///////////////////////////////////////////////////////////////////////    // 67
                                                                           // 68
}).call(this);                                                             // 69
                                                                           // 70
/////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteorhacks:inject-data'] = {
  InjectData: InjectData
};

})();
