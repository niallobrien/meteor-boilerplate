(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var _ = Package.underscore._;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;

(function(){

////////////////////////////////////////////////////////////////////////////////////
//                                                                                //
// packages/dburles_collection-helpers/packages/dburles_collection-helpers.js     //
//                                                                                //
////////////////////////////////////////////////////////////////////////////////////
                                                                                  //
(function () {                                                                    // 1
                                                                                  // 2
//////////////////////////////////////////////////////////////////////////////    // 3
//                                                                          //    // 4
// packages/dburles:collection-helpers/collection-helpers.js                //    // 5
//                                                                          //    // 6
//////////////////////////////////////////////////////////////////////////////    // 7
                                                                            //    // 8
Mongo.Collection.prototype.helpers = function(helpers) {                    // 1  // 9
  var self = this;                                                          // 2  // 10
                                                                            // 3  // 11
  if (self._transform && ! self._helpers)                                   // 4  // 12
    throw new Meteor.Error("Can't apply helpers to '" +                     // 5  // 13
      self._name + "' a transform function already exists!");               // 6  // 14
                                                                            // 7  // 15
  if (! self._helpers) {                                                    // 8  // 16
    self._helpers = function Document(doc) { return _.extend(this, doc); }; // 9  // 17
    self._transform = function(doc) {                                       // 10
      return new self._helpers(doc);                                        // 11
    };                                                                      // 12
  }                                                                         // 13
                                                                            // 14
  _.each(helpers, function(helper, key) {                                   // 15
    self._helpers.prototype[key] = helper;                                  // 16
  });                                                                       // 17
};                                                                          // 18
                                                                            // 19
//////////////////////////////////////////////////////////////////////////////    // 28
                                                                                  // 29
}).call(this);                                                                    // 30
                                                                                  // 31
////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['dburles:collection-helpers'] = {};

})();

//# sourceMappingURL=dburles_collection-helpers.js.map
