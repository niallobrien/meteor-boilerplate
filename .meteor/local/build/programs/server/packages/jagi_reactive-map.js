(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var _ = Package.underscore._;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var EJSON = Package.ejson.EJSON;

/* Package-scope variables */
var ReactiveMap, serializedValue;

(function(){

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// packages/jagi_reactive-map/packages/jagi_reactive-map.js                 //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
(function () {                                                              // 1
                                                                            // 2
///////////////////////////////////////////////////////////////////////     // 3
//                                                                   //     // 4
// packages/jagi:reactive-map/lib/reactive_map.js                    //     // 5
//                                                                   //     // 6
///////////////////////////////////////////////////////////////////////     // 7
                                                                     //     // 8
var stringify = function(value) {                                    // 1   // 9
  if (value === undefined) {                                         // 2   // 10
    return 'undefined';                                              // 3   // 11
  }                                                                  // 4   // 12
  return EJSON.stringify(value);                                     // 5   // 13
};                                                                   // 6   // 14
                                                                     // 7   // 15
var parse = function(serialized) {                                   // 8   // 16
  if (serialized === undefined || serialized === 'undefined') {      // 9   // 17
    return undefined;                                                // 10  // 18
  }                                                                  // 11  // 19
  return EJSON.parse(serialized);                                    // 12  // 20
};                                                                   // 13  // 21
                                                                     // 14  // 22
var changed = function(v) {                                          // 15  // 23
  v && v.changed();                                                  // 16  // 24
};                                                                   // 17  // 25
                                                                     // 18  // 26
var ensureKey = function(key) {                                      // 19  // 27
  if (!_.has(this._keyDeps, key)) {                                  // 20  // 28
    this._keyDeps[key] = new Tracker.Dependency;                     // 21  // 29
    this._hasDeps[key] = new Tracker.Dependency;                     // 22  // 30
  }                                                                  // 23  // 31
};                                                                   // 24  // 32
                                                                     // 25  // 33
var setObject = function(object) {                                   // 26  // 34
  var self = this;                                                   // 27  // 35
                                                                     // 28  // 36
  _.each(object, function(value, key) {                              // 29  // 37
    self.set(key, value);                                            // 30  // 38
  });                                                                // 31  // 39
};                                                                   // 32  // 40
                                                                     // 33  // 41
ReactiveMap = function(dictName) {                                   // 34  // 42
  this._size = 0;                                                    // 35  // 43
  this._values = {};                                                 // 36  // 44
  this._sizeDeps = new Tracker.Dependency;                           // 37  // 45
  this._allDeps = new Tracker.Dependency;                            // 38  // 46
  this._keysDeps = new Tracker.Dependency;                           // 39  // 47
  this._valuesDeps = new Tracker.Dependency;                         // 40  // 48
  this._keyDeps = {};                                                // 41  // 49
  this._hasDeps = {};                                                // 42  // 50
};                                                                   // 43  // 51
                                                                     // 44  // 52
_.extend(ReactiveMap.prototype, {                                    // 45  // 53
  set: function(key, value) {                                        // 46  // 54
    if (_.isObject(key) && value === undefined) {                    // 47  // 55
      setObject.call(this, key);                                     // 48  // 56
      return;                                                        // 49  // 57
    }                                                                // 50  // 58
                                                                     // 51  // 59
    serializedValue = stringify(value);                              // 52  // 60
                                                                     // 53  // 61
    if (_.has(this._values, key)) {                                  // 54  // 62
      if (serializedValue === this._values[key]) {                   // 55  // 63
        return;                                                      // 56  // 64
      }                                                              // 57  // 65
      this._valuesDeps.changed();                                    // 58  // 66
    } else {                                                         // 59  // 67
      this._size++;                                                  // 60  // 68
      this._sizeDeps.changed();                                      // 61  // 69
      changed(this._hasDeps[key]);                                   // 62  // 70
      this._keysDeps.changed();                                      // 63  // 71
      this._valuesDeps.changed();                                    // 64  // 72
    }                                                                // 65  // 73
                                                                     // 66  // 74
    this._values[key] = serializedValue;                             // 67  // 75
                                                                     // 68  // 76
    this._allDeps.changed();                                         // 69  // 77
    changed(this._keyDeps[key]);                                     // 70  // 78
  },                                                                 // 71  // 79
                                                                     // 72  // 80
  get: function(key) {                                               // 73  // 81
    ensureKey.call(this, key);                                       // 74  // 82
    this._keyDeps[key].depend();                                     // 75  // 83
                                                                     // 76  // 84
    return parse(this._values[key]);                                 // 77  // 85
  },                                                                 // 78  // 86
                                                                     // 79  // 87
  has: function(key) {                                               // 80  // 88
    ensureKey.call(this, key);                                       // 81  // 89
    this._hasDeps[key].depend();                                     // 82  // 90
                                                                     // 83  // 91
    return _.has(this._values, key);                                 // 84  // 92
  },                                                                 // 85  // 93
                                                                     // 86  // 94
  delete: function(key) {                                            // 87  // 95
    if (!_.has(this._values, key)) {                                 // 88  // 96
      return;                                                        // 89  // 97
    }                                                                // 90  // 98
                                                                     // 91  // 99
    delete this._values[key];                                        // 92  // 100
    this._size--;                                                    // 93  // 101
                                                                     // 94  // 102
    changed(this._keyDeps[key]);                                     // 95  // 103
    changed(this._hasDeps[key]);                                     // 96  // 104
    this._sizeDeps.changed();                                        // 97  // 105
    this._allDeps.changed();                                         // 98  // 106
    this._keysDeps.changed();                                        // 99  // 107
    this._valuesDeps.changed();                                      // 100
  },                                                                 // 101
                                                                     // 102
  entries: function() {                                              // 103
    this._allDeps.depend();                                          // 104
                                                                     // 105
    var allValues = {};                                              // 106
                                                                     // 107
    _.each(this._values, function(value, key) {                      // 108
      allValues[key] = parse(value);                                 // 109
    });                                                              // 110
                                                                     // 111
    return allValues;                                                // 112
  },                                                                 // 113
                                                                     // 114
  keys: function() {                                                 // 115
    this._keysDeps.depend();                                         // 116
                                                                     // 117
    var keys = [];                                                   // 118
                                                                     // 119
    _.each(this._values, function(value, key) {                      // 120
      keys.push(key);                                                // 121
    });                                                              // 122
                                                                     // 123
    return keys;                                                     // 124
  },                                                                 // 125
                                                                     // 126
  values: function() {                                               // 127
    this._valuesDeps.depend();                                       // 128
                                                                     // 129
    var values = [];                                                 // 130
                                                                     // 131
    _.each(this._values, function(value, key) {                      // 132
      values.push(parse(value));                                     // 133
    });                                                              // 134
                                                                     // 135
    return values;                                                   // 136
  },                                                                 // 137
                                                                     // 138
  size: function() {                                                 // 139
    this._sizeDeps.depend();                                         // 140
                                                                     // 141
    return this._size;                                               // 142
  },                                                                 // 143
                                                                     // 144
  clear: function() {                                                // 145
    var self = this;                                                 // 146
                                                                     // 147
    var oldValues = this._values;                                    // 148
    this._values = {};                                               // 149
    this._size = 0;                                                  // 150
                                                                     // 151
    this._sizeDeps.changed();                                        // 152
    this._allDeps.changed();                                         // 153
    this._keysDeps.changed();                                        // 154
    this._valuesDeps.changed();                                      // 155
                                                                     // 156
    _.each(oldValues, function(value, key) {                         // 157
      changed(self._keyDeps[key]);                                   // 158
      changed(self._hasDeps[key]);                                   // 159
    });                                                              // 160
  }                                                                  // 161
});                                                                  // 162
                                                                     // 163
// Define aliases.                                                   // 164
ReactiveMap.prototype.all = ReactiveMap.prototype.entries;           // 165
                                                                     // 166
///////////////////////////////////////////////////////////////////////     // 175
                                                                            // 176
}).call(this);                                                              // 177
                                                                            // 178
//////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['jagi:reactive-map'] = {
  ReactiveMap: ReactiveMap
};

})();

//# sourceMappingURL=jagi_reactive-map.js.map
