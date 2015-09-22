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
var Astro = Package['jagi:astronomy'].Astro;
var Astronomy = Package['jagi:astronomy'].Astronomy;
var _ = Package.underscore._;

/* Package-scope variables */
var onInitClass, onInitInstance;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// packages/jagi_astronomy-behaviors/packages/jagi_astronomy-behaviors.js              //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////
                                                                                       //
(function () {                                                                         // 1
                                                                                       // 2
//////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                              //     // 4
// packages/jagi:astronomy-behaviors/lib/module/global.js                       //     // 5
//                                                                              //     // 6
//////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                //     // 8
Astro.behaviors = {};                                                           // 1   // 9
                                                                                // 2   // 10
//////////////////////////////////////////////////////////////////////////////////     // 11
                                                                                       // 12
}).call(this);                                                                         // 13
                                                                                       // 14
                                                                                       // 15
                                                                                       // 16
                                                                                       // 17
                                                                                       // 18
                                                                                       // 19
(function () {                                                                         // 20
                                                                                       // 21
//////////////////////////////////////////////////////////////////////////////////     // 22
//                                                                              //     // 23
// packages/jagi:astronomy-behaviors/lib/module/utils.js                        //     // 24
//                                                                              //     // 25
//////////////////////////////////////////////////////////////////////////////////     // 26
                                                                                //     // 27
Astro.utils.behaviors = {                                                       // 1   // 28
  findBehavior: function(Class, behaviorName) {                                 // 2   // 29
    return Astro.utils.class.findInClass(Class, function(Class) {               // 3   // 30
      return Class.getBehavior(behaviorName);                                   // 4   // 31
    });                                                                         // 5   // 32
  }                                                                             // 6   // 33
};                                                                              // 7   // 34
                                                                                // 8   // 35
//////////////////////////////////////////////////////////////////////////////////     // 36
                                                                                       // 37
}).call(this);                                                                         // 38
                                                                                       // 39
                                                                                       // 40
                                                                                       // 41
                                                                                       // 42
                                                                                       // 43
                                                                                       // 44
(function () {                                                                         // 45
                                                                                       // 46
//////////////////////////////////////////////////////////////////////////////////     // 47
//                                                                              //     // 48
// packages/jagi:astronomy-behaviors/lib/module/behavior.js                     //     // 49
//                                                                              //     // 50
//////////////////////////////////////////////////////////////////////////////////     // 51
                                                                                //     // 52
var checks = {};                                                                // 1   // 53
                                                                                // 2   // 54
checks.behaviorDefinition = function(behaviorDefinition) {                      // 3   // 55
  // Check parameters validity.                                                 // 4   // 56
  if (!_.isObject(behaviorDefinition)) {                                        // 5   // 57
    throw new Error('The behavior definition has to be an object');             // 6   // 58
  }                                                                             // 7   // 59
                                                                                // 8   // 60
  // Check if behavior name is provided.                                        // 9   // 61
  if (!_.has(behaviorDefinition, 'name')) {                                     // 10  // 62
    throw new Error('The behavior name can not be empty');                      // 11  // 63
  }                                                                             // 12  // 64
                                                                                // 13  // 65
  // Check if behavior name is a string.                                        // 14  // 66
  if (!_.isString(behaviorDefinition.name)) {                                   // 15  // 67
    throw new Error('The behavior name has to be a string');                    // 16  // 68
  }                                                                             // 17  // 69
                                                                                // 18  // 70
  // Check if behavior with given name already exists.                          // 19  // 71
  if (_.has(Astro.behaviors, behaviorDefinition.name)) {                        // 20  // 72
    throw new Error(                                                            // 21  // 73
      'The behavior with the name "' +                                          // 22  // 74
      behaviorDefinition.name + '" is already defined'                          // 23  // 75
    );                                                                          // 24  // 76
  }                                                                             // 25  // 77
};                                                                              // 26  // 78
                                                                                // 27  // 79
Astro.createBehavior = function(behaviorDefinition) {                           // 28  // 80
  // Check validity of the behavior definition.                                 // 29  // 81
  checks.behaviorDefinition(behaviorDefinition);                                // 30  // 82
                                                                                // 31  // 83
  // Initialize a module if the "init" method had been defined.                 // 32  // 84
  if (_.isFunction(behaviorDefinition.init)) {                                  // 33  // 85
    behaviorDefinition.init();                                                  // 34  // 86
  }                                                                             // 35  // 87
                                                                                // 36  // 88
  // Add the behavior definition to the global list of behaviors.               // 37  // 89
  return Astro.behaviors[behaviorDefinition.name] = behaviorDefinition;         // 38  // 90
};                                                                              // 39  // 91
                                                                                // 40  // 92
//////////////////////////////////////////////////////////////////////////////////     // 93
                                                                                       // 94
}).call(this);                                                                         // 95
                                                                                       // 96
                                                                                       // 97
                                                                                       // 98
                                                                                       // 99
                                                                                       // 100
                                                                                       // 101
(function () {                                                                         // 102
                                                                                       // 103
//////////////////////////////////////////////////////////////////////////////////     // 104
//                                                                              //     // 105
// packages/jagi:astronomy-behaviors/lib/module/init_class.js                   //     // 106
//                                                                              //     // 107
//////////////////////////////////////////////////////////////////////////////////     // 108
                                                                                //     // 109
var checks = {};                                                                // 1   // 110
                                                                                // 2   // 111
checks.behaviorName = function(behaviorName) {                                  // 3   // 112
  if (!_.isString(behaviorName)) {                                              // 4   // 113
    throw new Error(                                                            // 5   // 114
      'The behavior name in the "' + this.getName() +                           // 6   // 115
      '" class schema has to be a string'                                       // 7   // 116
    );                                                                          // 8   // 117
  }                                                                             // 9   // 118
};                                                                              // 10  // 119
                                                                                // 11  // 120
checks.exists = function(behaviorName) {                                        // 12  // 121
  if (!_.has(Astro.behaviors, behaviorName)) {                                  // 13  // 122
    throw new Error(                                                            // 14  // 123
      'The "' + behaviorName + '" behavior in "' + this.getName() +             // 15  // 124
      '" class schema does not exist'                                           // 16  // 125
    );                                                                          // 17  // 126
  }                                                                             // 18  // 127
};                                                                              // 19  // 128
                                                                                // 20  // 129
checks.behaviorData = function(behaviorName, behaviorData) {                    // 21  // 130
  if (!_.isObject(behaviorData)) {                                              // 22  // 131
    throw new Error(                                                            // 23  // 132
      'The behavior data in "' + this.getName() +                               // 24  // 133
      '" class schema has to be an object'                                      // 25  // 134
    );                                                                          // 26  // 135
  }                                                                             // 27  // 136
};                                                                              // 28  // 137
                                                                                // 29  // 138
checks.added = function(behaviorName) {                                         // 30  // 139
  if (Astro.utils.behaviors.findBehavior(this, behaviorName)) {                 // 31  // 140
    throw new Error(                                                            // 32  // 141
      'The "' + behaviorName + '" behavior in the "' +                          // 33  // 142
      this.getName() + '" class schema had already been added'                  // 34  // 143
    );                                                                          // 35  // 144
  }                                                                             // 36  // 145
};                                                                              // 37  // 146
                                                                                // 38  // 147
var methods = {};                                                               // 39  // 148
                                                                                // 40  // 149
methods.hasBehavior = function(behaviorName) {                                  // 41  // 150
  // Check if the behavior name has been provided                               // 42  // 151
  checks.behaviorName.call(this, behaviorName);                                 // 43  // 152
                                                                                // 44  // 153
  return _.has(this.schema.behaviors, behaviorName);                            // 45  // 154
};                                                                              // 46  // 155
                                                                                // 47  // 156
methods.getBehavior = function(behaviorName) {                                  // 48  // 157
  // Check if the behavior name has been provided                               // 49  // 158
  checks.behaviorName.call(this, behaviorName);                                 // 50  // 159
                                                                                // 51  // 160
  return this.schema.behaviors[behaviorName];                                   // 52  // 161
};                                                                              // 53  // 162
                                                                                // 54  // 163
methods.getBehaviors = function() {                                             // 55  // 164
  return this.schema.behaviors;                                                 // 56  // 165
};                                                                              // 57  // 166
                                                                                // 58  // 167
methods.addBehavior = function(behaviorName, behaviorData) {                    // 59  // 168
  behaviorData = behaviorData || {};                                            // 60  // 169
                                                                                // 61  // 170
  // Check if the behavior name has been provided                               // 62  // 171
  checks.behaviorName.call(this, behaviorName);                                 // 63  // 172
  // Check if the given bahavior exists.                                        // 64  // 173
  checks.exists.call(this, behaviorName);                                       // 65  // 174
  // Check if the behavior data is an object.                                   // 66  // 175
  checks.behaviorData.call(this, behaviorName, behaviorData);                   // 67  // 176
  // Check if the given behavior is already added to this or parent classes.    // 68  // 177
  checks.added.call(this, behaviorName);                                        // 69  // 178
                                                                                // 70  // 179
  // Add behavior copy to behaviors list of given schema under the key equal    // 71  // 180
  // to behavior type.                                                          // 72  // 181
  this.schema.behaviors[behaviorName] = behaviorData;                           // 73  // 182
                                                                                // 74  // 183
  // Get behavior definition.                                                   // 75  // 184
  var behavior = Astro.behaviors[behaviorName];                                 // 76  // 185
  // Trigger "addbehavior" event.                                               // 77  // 186
  if (behavior.events && behavior.events.addbehavior) {                         // 78  // 187
    behavior.events.addbehavior.call(this, behaviorData);                       // 79  // 188
  }                                                                             // 80  // 189
};                                                                              // 81  // 190
                                                                                // 82  // 191
methods.addBehaviors = function(behaviors) {                                    // 83  // 192
  if (_.isArray(behaviors)) {                                                   // 84  // 193
                                                                                // 85  // 194
    _.each(behaviors, function(behaviorName) {                                  // 86  // 195
      this.addBehavior(behaviorName);                                           // 87  // 196
    }, this);                                                                   // 88  // 197
                                                                                // 89  // 198
  } else if (_.isObject(behaviors)) {                                           // 90  // 199
                                                                                // 91  // 200
    _.each(behaviors, function(behavior, behaviorName) {                        // 92  // 201
      this.addBehavior(behaviorName, behavior);                                 // 93  // 202
    }, this);                                                                   // 94  // 203
                                                                                // 95  // 204
  } else {                                                                      // 96  // 205
                                                                                // 97  // 206
    // Behaviors data has to be an object or an array.                          // 98  // 207
    throw new Error(                                                            // 99  // 208
      'The behavior data in the "' + this.getName() +                           // 100
      '" class schema has to ' +                                                // 101
      'be an object or an array'                                                // 102
    );                                                                          // 103
                                                                                // 104
  }                                                                             // 105
};                                                                              // 106
                                                                                // 107
onInitClass = function(schemaDefinition) {                                      // 108
  var Class = this;                                                             // 109
                                                                                // 110
  _.extend(Class, methods);                                                     // 111
                                                                                // 112
  // Add the "behaviors" attribute to the schema.                               // 113
  Class.schema.behaviors = {};                                                  // 114
                                                                                // 115
  if (_.has(schemaDefinition, 'behaviors')) {                                   // 116
    Class.addBehaviors(schemaDefinition.behaviors);                             // 117
                                                                                // 118
    // Trigger on "initclass" event if it is provided. We do it here because we // 119
    // are already in the process of execution "initclass" events, so adding it // 120
    // to class would have no effect.                                           // 121
    _.each(Class.getBehaviors(), function(behaviorData, behaviorName) {         // 122
      var behavior = Astro.behaviors[behaviorName];                             // 123
      if (behavior.events && behavior.events.initclass) {                       // 124
        behavior.events.initclass.call(Class, schemaDefinition);                // 125
      }                                                                         // 126
    });                                                                         // 127
  }                                                                             // 128
};                                                                              // 129
                                                                                // 130
//////////////////////////////////////////////////////////////////////////////////     // 240
                                                                                       // 241
}).call(this);                                                                         // 242
                                                                                       // 243
                                                                                       // 244
                                                                                       // 245
                                                                                       // 246
                                                                                       // 247
                                                                                       // 248
(function () {                                                                         // 249
                                                                                       // 250
//////////////////////////////////////////////////////////////////////////////////     // 251
//                                                                              //     // 252
// packages/jagi:astronomy-behaviors/lib/module/init_instance.js                //     // 253
//                                                                              //     // 254
//////////////////////////////////////////////////////////////////////////////////     // 255
                                                                                //     // 256
onInitInstance = function(attrs) {                                              // 1   // 257
  var Class = this.constructor;                                                 // 2   // 258
  var behaviors = Class.getBehaviors();                                         // 3   // 259
                                                                                // 4   // 260
  _.each(behaviors, function(behaviorData, behaviorName) {                      // 5   // 261
    var behavior = Astro.behaviors[behaviorName];                               // 6   // 262
    if (behavior.events && behavior.events.initinstance) {                      // 7   // 263
      behavior.events.initinstance.call(Class, attrs);                          // 8   // 264
    }                                                                           // 9   // 265
  });                                                                           // 10  // 266
};                                                                              // 11  // 267
                                                                                // 12  // 268
//////////////////////////////////////////////////////////////////////////////////     // 269
                                                                                       // 270
}).call(this);                                                                         // 271
                                                                                       // 272
                                                                                       // 273
                                                                                       // 274
                                                                                       // 275
                                                                                       // 276
                                                                                       // 277
(function () {                                                                         // 278
                                                                                       // 279
//////////////////////////////////////////////////////////////////////////////////     // 280
//                                                                              //     // 281
// packages/jagi:astronomy-behaviors/lib/module/module.js                       //     // 282
//                                                                              //     // 283
//////////////////////////////////////////////////////////////////////////////////     // 284
                                                                                //     // 285
Astro.createModule({                                                            // 1   // 286
  name: 'behaviors',                                                            // 2   // 287
  events: {                                                                     // 3   // 288
    initclass: onInitClass,                                                     // 4   // 289
    initinstance: onInitInstance                                                // 5   // 290
  }                                                                             // 6   // 291
});                                                                             // 7   // 292
                                                                                // 8   // 293
//////////////////////////////////////////////////////////////////////////////////     // 294
                                                                                       // 295
}).call(this);                                                                         // 296
                                                                                       // 297
/////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['jagi:astronomy-behaviors'] = {};

})();
