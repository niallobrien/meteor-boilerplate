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
var _ = Package.underscore._;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var EJSON = Package.ejson.EJSON;

/* Package-scope variables */
var ReactiveDict;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////
//                                                                                      //
// packages/reactive-dict/reactive-dict.js                                              //
//                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////
                                                                                        //
// XXX come up with a serialization method which canonicalizes object key               // 1
// order, which would allow us to use objects as values for equals.                     // 2
var stringify = function (value) {                                                      // 3
  if (value === undefined)                                                              // 4
    return 'undefined';                                                                 // 5
  return EJSON.stringify(value);                                                        // 6
};                                                                                      // 7
var parse = function (serialized) {                                                     // 8
  if (serialized === undefined || serialized === 'undefined')                           // 9
    return undefined;                                                                   // 10
  return EJSON.parse(serialized);                                                       // 11
};                                                                                      // 12
                                                                                        // 13
var changed = function (v) {                                                            // 14
  v && v.changed();                                                                     // 15
};                                                                                      // 16
                                                                                        // 17
// XXX COMPAT WITH 0.9.1 : accept migrationData instead of dictName                     // 18
ReactiveDict = function (dictName) {                                                    // 19
  // this.keys: key -> value                                                            // 20
  if (dictName) {                                                                       // 21
    if (typeof dictName === 'string') {                                                 // 22
      // the normal case, argument is a string name.                                    // 23
      // _registerDictForMigrate will throw an error on duplicate name.                 // 24
      ReactiveDict._registerDictForMigrate(dictName, this);                             // 25
      this.keys = ReactiveDict._loadMigratedDict(dictName) || {};                       // 26
      this.name = dictName;                                                             // 27
    } else if (typeof dictName === 'object') {                                          // 28
      // back-compat case: dictName is actually migrationData                           // 29
      this.keys = dictName;                                                             // 30
    } else {                                                                            // 31
      throw new Error("Invalid ReactiveDict argument: " + dictName);                    // 32
    }                                                                                   // 33
  } else {                                                                              // 34
    // no name given; no migration will be performed                                    // 35
    this.keys = {};                                                                     // 36
  }                                                                                     // 37
                                                                                        // 38
  this.allDeps = new Tracker.Dependency;                                                // 39
  this.keyDeps = {}; // key -> Dependency                                               // 40
  this.keyValueDeps = {}; // key -> Dependency                                          // 41
};                                                                                      // 42
                                                                                        // 43
_.extend(ReactiveDict.prototype, {                                                      // 44
  // set() began as a key/value method, but we are now overloading it                   // 45
  // to take an object of key/value pairs, similar to backbone                          // 46
  // http://backbonejs.org/#Model-set                                                   // 47
                                                                                        // 48
  set: function (keyOrObject, value) {                                                  // 49
    var self = this;                                                                    // 50
                                                                                        // 51
    if ((typeof keyOrObject === 'object') && (value === undefined)) {                   // 52
      self._setObject(keyOrObject);                                                     // 53
      return;                                                                           // 54
    }                                                                                   // 55
    // the input isn't an object, so it must be a key                                   // 56
    // and we resume with the rest of the function                                      // 57
    var key = keyOrObject;                                                              // 58
                                                                                        // 59
    value = stringify(value);                                                           // 60
                                                                                        // 61
    var oldSerializedValue = 'undefined';                                               // 62
    if (_.has(self.keys, key)) oldSerializedValue = self.keys[key];                     // 63
    if (value === oldSerializedValue)                                                   // 64
      return;                                                                           // 65
    self.keys[key] = value;                                                             // 66
                                                                                        // 67
    self.allDeps.changed();                                                             // 68
    changed(self.keyDeps[key]);                                                         // 69
    if (self.keyValueDeps[key]) {                                                       // 70
      changed(self.keyValueDeps[key][oldSerializedValue]);                              // 71
      changed(self.keyValueDeps[key][value]);                                           // 72
    }                                                                                   // 73
  },                                                                                    // 74
                                                                                        // 75
  setDefault: function (key, value) {                                                   // 76
    var self = this;                                                                    // 77
    // for now, explicitly check for undefined, since there is no                       // 78
    // ReactiveDict.clear().  Later we might have a ReactiveDict.clear(), in which case
    // we should check if it has the key.                                               // 80
    if (self.keys[key] === undefined) {                                                 // 81
      self.set(key, value);                                                             // 82
    }                                                                                   // 83
  },                                                                                    // 84
                                                                                        // 85
  get: function (key) {                                                                 // 86
    var self = this;                                                                    // 87
    self._ensureKey(key);                                                               // 88
    self.keyDeps[key].depend();                                                         // 89
    return parse(self.keys[key]);                                                       // 90
  },                                                                                    // 91
                                                                                        // 92
  equals: function (key, value) {                                                       // 93
    var self = this;                                                                    // 94
                                                                                        // 95
    // Mongo.ObjectID is in the 'mongo' package                                         // 96
    var ObjectID = null;                                                                // 97
    if (Package.mongo) {                                                                // 98
      ObjectID = Package.mongo.Mongo.ObjectID;                                          // 99
    }                                                                                   // 100
                                                                                        // 101
    // We don't allow objects (or arrays that might include objects) for                // 102
    // .equals, because JSON.stringify doesn't canonicalize object key                  // 103
    // order. (We can make equals have the right return value by parsing the            // 104
    // current value and using EJSON.equals, but we won't have a canonical              // 105
    // element of keyValueDeps[key] to store the dependency.) You can still use         // 106
    // "EJSON.equals(reactiveDict.get(key), value)".                                    // 107
    //                                                                                  // 108
    // XXX we could allow arrays as long as we recursively check that there             // 109
    // are no objects                                                                   // 110
    if (typeof value !== 'string' &&                                                    // 111
        typeof value !== 'number' &&                                                    // 112
        typeof value !== 'boolean' &&                                                   // 113
        typeof value !== 'undefined' &&                                                 // 114
        !(value instanceof Date) &&                                                     // 115
        !(ObjectID && value instanceof ObjectID) &&                                     // 116
        value !== null) {                                                               // 117
      throw new Error("ReactiveDict.equals: value must be scalar");                     // 118
    }                                                                                   // 119
    var serializedValue = stringify(value);                                             // 120
                                                                                        // 121
    if (Tracker.active) {                                                               // 122
      self._ensureKey(key);                                                             // 123
                                                                                        // 124
      if (! _.has(self.keyValueDeps[key], serializedValue))                             // 125
        self.keyValueDeps[key][serializedValue] = new Tracker.Dependency;               // 126
                                                                                        // 127
      var isNew = self.keyValueDeps[key][serializedValue].depend();                     // 128
      if (isNew) {                                                                      // 129
        Tracker.onInvalidate(function () {                                              // 130
          // clean up [key][serializedValue] if it's now empty, so we don't             // 131
          // use O(n) memory for n = values seen ever                                   // 132
          if (! self.keyValueDeps[key][serializedValue].hasDependents())                // 133
            delete self.keyValueDeps[key][serializedValue];                             // 134
        });                                                                             // 135
      }                                                                                 // 136
    }                                                                                   // 137
                                                                                        // 138
    var oldValue = undefined;                                                           // 139
    if (_.has(self.keys, key)) oldValue = parse(self.keys[key]);                        // 140
    return EJSON.equals(oldValue, value);                                               // 141
  },                                                                                    // 142
                                                                                        // 143
  all: function() {                                                                     // 144
    this.allDeps.depend();                                                              // 145
    var ret = {};                                                                       // 146
    _.each(this.keys, function(value, key) {                                            // 147
      ret[key] = parse(value);                                                          // 148
    });                                                                                 // 149
    return ret;                                                                         // 150
  },                                                                                    // 151
                                                                                        // 152
  clear: function() {                                                                   // 153
    var self = this;                                                                    // 154
                                                                                        // 155
    var oldKeys = self.keys;                                                            // 156
    self.keys = {};                                                                     // 157
                                                                                        // 158
    self.allDeps.changed();                                                             // 159
                                                                                        // 160
    _.each(oldKeys, function(value, key) {                                              // 161
      changed(self.keyDeps[key]);                                                       // 162
      changed(self.keyValueDeps[key][value]);                                           // 163
      changed(self.keyValueDeps[key]['undefined']);                                     // 164
    });                                                                                 // 165
                                                                                        // 166
  },                                                                                    // 167
                                                                                        // 168
  _setObject: function (object) {                                                       // 169
    var self = this;                                                                    // 170
                                                                                        // 171
    _.each(object, function (value, key){                                               // 172
      self.set(key, value);                                                             // 173
    });                                                                                 // 174
  },                                                                                    // 175
                                                                                        // 176
  _ensureKey: function (key) {                                                          // 177
    var self = this;                                                                    // 178
    if (!(key in self.keyDeps)) {                                                       // 179
      self.keyDeps[key] = new Tracker.Dependency;                                       // 180
      self.keyValueDeps[key] = {};                                                      // 181
    }                                                                                   // 182
  },                                                                                    // 183
                                                                                        // 184
  // Get a JSON value that can be passed to the constructor to                          // 185
  // create a new ReactiveDict with the same contents as this one                       // 186
  _getMigrationData: function () {                                                      // 187
    // XXX sanitize and make sure it's JSONible?                                        // 188
    return this.keys;                                                                   // 189
  }                                                                                     // 190
});                                                                                     // 191
                                                                                        // 192
//////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////
//                                                                                      //
// packages/reactive-dict/migration.js                                                  //
//                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////
                                                                                        //
ReactiveDict._migratedDictData = {}; // name -> data                                    // 1
ReactiveDict._dictsToMigrate = {}; // name -> ReactiveDict                              // 2
                                                                                        // 3
ReactiveDict._loadMigratedDict = function (dictName) {                                  // 4
  if (_.has(ReactiveDict._migratedDictData, dictName))                                  // 5
    return ReactiveDict._migratedDictData[dictName];                                    // 6
                                                                                        // 7
  return null;                                                                          // 8
};                                                                                      // 9
                                                                                        // 10
ReactiveDict._registerDictForMigrate = function (dictName, dict) {                      // 11
  if (_.has(ReactiveDict._dictsToMigrate, dictName))                                    // 12
    throw new Error("Duplicate ReactiveDict name: " + dictName);                        // 13
                                                                                        // 14
  ReactiveDict._dictsToMigrate[dictName] = dict;                                        // 15
};                                                                                      // 16
                                                                                        // 17
if (Meteor.isClient && Package.reload) {                                                // 18
  // Put old migrated data into ReactiveDict._migratedDictData,                         // 19
  // where it can be accessed by ReactiveDict._loadMigratedDict.                        // 20
  var migrationData = Package.reload.Reload._migrationData('reactive-dict');            // 21
  if (migrationData && migrationData.dicts)                                             // 22
    ReactiveDict._migratedDictData = migrationData.dicts;                               // 23
                                                                                        // 24
  // On migration, assemble the data from all the dicts that have been                  // 25
  // registered.                                                                        // 26
  Package.reload.Reload._onMigrate('reactive-dict', function () {                       // 27
    var dictsToMigrate = ReactiveDict._dictsToMigrate;                                  // 28
    var dataToMigrate = {};                                                             // 29
                                                                                        // 30
    for (var dictName in dictsToMigrate)                                                // 31
      dataToMigrate[dictName] = dictsToMigrate[dictName]._getMigrationData();           // 32
                                                                                        // 33
    return [true, {dicts: dataToMigrate}];                                              // 34
  });                                                                                   // 35
}                                                                                       // 36
                                                                                        // 37
//////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['reactive-dict'] = {
  ReactiveDict: ReactiveDict
};

})();
