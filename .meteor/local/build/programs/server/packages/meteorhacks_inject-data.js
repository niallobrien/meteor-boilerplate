(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var EJSON = Package.ejson.EJSON;
var _ = Package.underscore._;

/* Package-scope variables */
var InjectData;

(function(){

//////////////////////////////////////////////////////////////////////////////////
//                                                                              //
// packages/meteorhacks_inject-data/packages/meteorhacks_inject-data.js         //
//                                                                              //
//////////////////////////////////////////////////////////////////////////////////
                                                                                //
(function () {                                                                  // 1
                                                                                // 2
////////////////////////////////////////////////////////////////////////////    // 3
//                                                                        //    // 4
// packages/meteorhacks:inject-data/lib/namespace.js                      //    // 5
//                                                                        //    // 6
////////////////////////////////////////////////////////////////////////////    // 7
                                                                          //    // 8
InjectData = {};                                                          // 1  // 9
////////////////////////////////////////////////////////////////////////////    // 10
                                                                                // 11
}).call(this);                                                                  // 12
                                                                                // 13
                                                                                // 14
                                                                                // 15
                                                                                // 16
                                                                                // 17
                                                                                // 18
(function () {                                                                  // 19
                                                                                // 20
////////////////////////////////////////////////////////////////////////////    // 21
//                                                                        //    // 22
// packages/meteorhacks:inject-data/lib/utils.js                          //    // 23
//                                                                        //    // 24
////////////////////////////////////////////////////////////////////////////    // 25
                                                                          //    // 26
InjectData._encode = function(ejson) {                                    // 1  // 27
  var ejsonString = EJSON.stringify(ejson);                               // 2  // 28
  return encodeURIComponent(ejsonString);                                 // 3  // 29
};                                                                        // 4  // 30
                                                                          // 5  // 31
InjectData._decode = function(encodedEjson) {                             // 6  // 32
  var decodedEjsonString = decodeURIComponent(encodedEjson);              // 7  // 33
  if(!decodedEjsonString) return null;                                    // 8  // 34
                                                                          // 9  // 35
  return EJSON.parse(decodedEjsonString);                                 // 10
};                                                                        // 11
                                                                          // 12
////////////////////////////////////////////////////////////////////////////    // 39
                                                                                // 40
}).call(this);                                                                  // 41
                                                                                // 42
                                                                                // 43
                                                                                // 44
                                                                                // 45
                                                                                // 46
                                                                                // 47
(function () {                                                                  // 48
                                                                                // 49
////////////////////////////////////////////////////////////////////////////    // 50
//                                                                        //    // 51
// packages/meteorhacks:inject-data/lib/server.js                         //    // 52
//                                                                        //    // 53
////////////////////////////////////////////////////////////////////////////    // 54
                                                                          //    // 55
var http = Npm.require('http');                                           // 1  // 56
                                                                          // 2  // 57
var templateText = Assets.getText('lib/inject.html');                     // 3  // 58
var injectDataTemplate = _.template(templateText);                        // 4  // 59
                                                                          // 5  // 60
// custome API                                                            // 6  // 61
http.OutgoingMessage.prototype.pushData = function pushData(key, value) { // 7  // 62
  if(!this._injectPayload) {                                              // 8  // 63
    this._injectPayload = {};                                             // 9  // 64
  }                                                                       // 10
                                                                          // 11
  this._injectPayload[key] = value;                                       // 12
};                                                                        // 13
                                                                          // 14
http.OutgoingMessage.prototype.getData = function getData(key) {          // 15
  if(this._injectPayload) {                                               // 16
    return _.clone(this._injectPayload[key]);                             // 17
  } else {                                                                // 18
    return null;                                                          // 19
  }                                                                       // 20
};                                                                        // 21
                                                                          // 22
// overrides                                                              // 23
var originalWrite = http.OutgoingMessage.prototype.write;                 // 24
http.OutgoingMessage.prototype.write = function(chunk, encoding) {        // 25
  var condition =                                                         // 26
    this._injectPayload && !this._injected &&                             // 27
    encoding === undefined &&                                             // 28
    /<!DOCTYPE html>/.test(chunk);                                        // 29
                                                                          // 30
  if(condition) {                                                         // 31
    // if cors headers included if may cause some security holes          // 32
    // so we simply turn off injecting if we detect an cors header        // 33
    // read more: http://goo.gl/eGwb4e                                    // 34
    if(this._headers['access-control-allow-origin']) {                    // 35
      var warnMessage =                                                   // 36
        'warn: injecting data turned off due to CORS headers. ' +         // 37
        'read more: http://goo.gl/eGwb4e';                                // 38
                                                                          // 39
      console.warn(warnMessage);                                          // 40
      originalWrite.call(this, chunk, encoding);                          // 41
      return;                                                             // 42
    }                                                                     // 43
                                                                          // 44
    // inject data                                                        // 45
    var data = InjectData._encode(this._injectPayload);                   // 46
    var injectHtml = injectDataTemplate({data: data});                    // 47
                                                                          // 48
    // if this is a buffer, convert it to string                          // 49
    chunk = chunk.toString();                                             // 50
    chunk = chunk.replace('<script', injectHtml + '<script');             // 51
                                                                          // 52
    this._injected = true;                                                // 53
  }                                                                       // 54
                                                                          // 55
  originalWrite.call(this, chunk, encoding);                              // 56
};                                                                        // 57
////////////////////////////////////////////////////////////////////////////    // 113
                                                                                // 114
}).call(this);                                                                  // 115
                                                                                // 116
//////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteorhacks:inject-data'] = {
  InjectData: InjectData
};

})();

//# sourceMappingURL=meteorhacks_inject-data.js.map
