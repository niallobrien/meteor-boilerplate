(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;

/* Package-scope variables */
var Map, Set;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/ecmascript-collections/collections.js                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
var collections = Npm.require("ecmascript-collections");             // 1
Map = collections.Map;                                               // 2
Set = collections.Set;                                               // 3
                                                                     // 4
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['ecmascript-collections'] = {
  Map: Map,
  Set: Set
};

})();

//# sourceMappingURL=ecmascript-collections.js.map
