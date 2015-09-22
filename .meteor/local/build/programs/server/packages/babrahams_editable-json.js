(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var _ = Package.underscore._;

/* Package-scope variables */
var EditableJSON, doUpdate;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                    //
// packages/babrahams_editable-json/packages/babrahams_editable-json.js                               //
//                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                      //
(function () {                                                                                        // 1
                                                                                                      // 2
//////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                              //    // 4
// packages/babrahams:editable-json/editable-json-common.js                                     //    // 5
//                                                                                              //    // 6
//////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                //    // 8
if (_.isUndefined(EditableJSON)) {                                                              // 1  // 9
  EditableJSON = {};                                                                            // 2  // 10
}                                                                                               // 3  // 11
                                                                                                // 4  // 12
EditableJSON.collection = function (collectionName) {                                           // 5  // 13
  return EditableJSON.collection(collectionName);                                               // 6  // 14
}                                                                                               // 7  // 15
                                                                                                // 8  // 16
doUpdate = function (collectionName, _id, action) {                                             // 9  // 17
                                                                                                // 10
  var Collection = EditableJSON.collection(collectionName);                                     // 11
  var updated = 0;                                                                              // 12
                                                                                                // 13
  try {                                                                                         // 14
                                                                                                // 15
    if (!!Package['aldeed:simple-schema'] && !!Package['aldeed:collection2'] && _.isFunction(Collection.simpleSchema) && Collection._c2) {
                                                                                                // 17
      updated = Collection.update(_id, action, {                                                // 18
        filter: false,                                                                          // 19
        autoConvert: false,                                                                     // 20
        removeEmptyStrings: false,                                                              // 21
        validate: false                                                                         // 22
      });                                                                                       // 23
                                                                                                // 24
    }                                                                                           // 25
                                                                                                // 26
    else {                                                                                      // 27
                                                                                                // 28
      updated = Collection.update(_id, action);                                                 // 29
                                                                                                // 30
    }                                                                                           // 31
                                                                                                // 32
  }                                                                                             // 33
                                                                                                // 34
  catch (err) {                                                                                 // 35
    if (!(Meteor.isClient && action.$set && _.keys(action.$set)[0].indexOf('newField') > -1)) { // 36
      throw new Meteor.Error(err);                                                              // 37
    }                                                                                           // 38
  }                                                                                             // 39
                                                                                                // 40
  return updated;                                                                               // 41
}                                                                                               // 42
                                                                                                // 43
Meteor.methods({                                                                                // 44
                                                                                                // 45
  editableJSON_update: function (collectionName, _id, action) {                                 // 46
                                                                                                // 47
    check(collectionName, String);                                                              // 48
    check(_id, String);                                                                         // 49
    check(action, Object);                                                                      // 50
                                                                                                // 51
    return doUpdate(collectionName, _id, action);                                               // 52
                                                                                                // 53
  }                                                                                             // 54
                                                                                                // 55
});                                                                                             // 56
//////////////////////////////////////////////////////////////////////////////////////////////////    // 65
                                                                                                      // 66
}).call(this);                                                                                        // 67
                                                                                                      // 68
////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['babrahams:editable-json'] = {
  EditableJSON: EditableJSON
};

})();

//# sourceMappingURL=babrahams_editable-json.js.map
