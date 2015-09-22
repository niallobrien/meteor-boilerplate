(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var Astro = Package['jagi:astronomy'].Astro;
var Astronomy = Package['jagi:astronomy'].Astronomy;
var _ = Package.underscore._;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;

/* Package-scope variables */
var relationsOnInitModule, relationsOnInitClass, relationsOnInitInstance;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                        //
// packages/jagi_astronomy-relations/packages/jagi_astronomy-relations.js                 //
//                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////
                                                                                          //
(function () {                                                                            // 1
                                                                                          // 2
/////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                 //     // 4
// packages/jagi:astronomy-relations/lib/module/init_module.js                     //     // 5
//                                                                                 //     // 6
/////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                   //     // 8
var methods = {};                                                                  // 1   // 9
                                                                                   // 2   // 10
methods.setRelated = function(relationName, value) {};                             // 3   // 11
                                                                                   // 4   // 12
methods.getRelated = function(relationName) {                                      // 5   // 13
  // If there is already a reference to the relation object(s) stored in the       // 6   // 14
  // "_references" object then we can take it without looking in collection.       // 7   // 15
  if (_.has(this._references, relationName)) {                                     // 8   // 16
    return this._references[relationName];                                         // 9   // 17
  }                                                                                // 10  // 18
                                                                                   // 11  // 19
  // Look for the relation definition in this and parent classes.                  // 12  // 20
  var relation = Astro.utils.class.findInClass(this.constructor, function(Class) { // 13  // 21
    return Class.getRelation(relationName);                                        // 14  // 22
  });                                                                              // 15  // 23
  if (!relation) {                                                                 // 16  // 24
    return;                                                                        // 17  // 25
  }                                                                                // 18  // 26
                                                                                   // 19  // 27
  // Get a collection defined in the relation.                                     // 20  // 28
  var ForeignClass = Astro.classes[relation.class];                                // 21  // 29
  var ForeignCollection = ForeignClass.getCollection();                            // 22  // 30
                                                                                   // 23  // 31
  // Prepare selector to select only these documents that much the relation.       // 24  // 32
  var selector = {};                                                               // 25  // 33
  selector[relation.foreign] = this.get(relation.local);                           // 26  // 34
                                                                                   // 27  // 35
  // Get a related object.                                                         // 28  // 36
  var related;                                                                     // 29  // 37
  if (relation.type === 'one') {                                                   // 30  // 38
    related = ForeignCollection.findOne(selector);                                 // 31  // 39
  } else if (relation.type === 'many') {                                           // 32  // 40
    related = ForeignCollection.find(selector);                                    // 33  // 41
  }                                                                                // 34  // 42
                                                                                   // 35  // 43
  // Assing the related object to the "_references" object for further use.        // 36  // 44
  return this._references[relationName] = related;                                 // 37  // 45
};                                                                                 // 38  // 46
                                                                                   // 39  // 47
relationsOnInitModule = function() {                                               // 40  // 48
  _.extend(Astro.BaseClass.prototype, methods);                                    // 41  // 49
};                                                                                 // 42  // 50
                                                                                   // 43  // 51
/////////////////////////////////////////////////////////////////////////////////////     // 52
                                                                                          // 53
}).call(this);                                                                            // 54
                                                                                          // 55
                                                                                          // 56
                                                                                          // 57
                                                                                          // 58
                                                                                          // 59
                                                                                          // 60
(function () {                                                                            // 61
                                                                                          // 62
/////////////////////////////////////////////////////////////////////////////////////     // 63
//                                                                                 //     // 64
// packages/jagi:astronomy-relations/lib/module/init_class.js                      //     // 65
//                                                                                 //     // 66
/////////////////////////////////////////////////////////////////////////////////////     // 67
                                                                                   //     // 68
var checks = {};                                                                   // 1   // 69
                                                                                   // 2   // 70
checks.relationName = function(relationName) {                                     // 3   // 71
  // Check if the field name had been provided and is a string.                    // 4   // 72
  if (!_.isString(relationName)) {                                                 // 5   // 73
    throw new Error(                                                               // 6   // 74
      'The relation name in the "' + this.getName() +                              // 7   // 75
      '" class schema has to be a string'                                          // 8   // 76
    );                                                                             // 9   // 77
  }                                                                                // 10  // 78
};                                                                                 // 11  // 79
                                                                                   // 12  // 80
checks.definitions = function(relationsDefinition) {                               // 13  // 81
  if (!_.isObject(relationsDefinition)) {                                          // 14  // 82
    // Relations definition has to be an object.                                   // 15  // 83
    throw new Error(                                                               // 16  // 84
      'The relations definition in the "' + this.getName() +                       // 17  // 85
      '" class schema has to be an object'                                         // 18  // 86
    );                                                                             // 19  // 87
  }                                                                                // 20  // 88
};                                                                                 // 21  // 89
                                                                                   // 22  // 90
checks.definition = function(relationName, relationDefinition) {                   // 23  // 91
  if (!_.isObject(relationDefinition)) {                                           // 24  // 92
    // Relation definition has to be an object.                                    // 25  // 93
    throw new Error(                                                               // 26  // 94
      'The relation definition for the "' + relationName +                         // 27  // 95
      '" relation in the "' + this.getName() +                                     // 28  // 96
      '" class schema has to be an object'                                         // 29  // 97
    );                                                                             // 30  // 98
  }                                                                                // 31  // 99
                                                                                   // 32  // 100
  if (relationDefinition.type !== 'one' && relationDefinition.type !== 'many') {   // 33  // 101
    // Relation type should be one of two values: "one" or "many".                 // 34  // 102
    throw new Error(                                                               // 35  // 103
      'The relation type for the "' + relationName +                               // 36  // 104
      '" relation in the "' + this.getName() +                                     // 37  // 105
      '" class schema should be "one" or "many"'                                   // 38  // 106
    );                                                                             // 39  // 107
  }                                                                                // 40  // 108
};                                                                                 // 41  // 109
                                                                                   // 42  // 110
var methods = {};                                                                  // 43  // 111
                                                                                   // 44  // 112
methods.hasRelation = function(relationName) {                                     // 45  // 113
  checks.relationName.call(this, relationName);                                    // 46  // 114
                                                                                   // 47  // 115
  return _.has(this.schema.relations, relationName);                               // 48  // 116
};                                                                                 // 49  // 117
                                                                                   // 50  // 118
methods.getRelation = function(relationName) {                                     // 51  // 119
  checks.relationName.call(this, relationName);                                    // 52  // 120
                                                                                   // 53  // 121
  return this.schema.relations[relationName];                                      // 54  // 122
};                                                                                 // 55  // 123
                                                                                   // 56  // 124
methods.getRelations = function() {                                                // 57  // 125
  return this.schema.relations;                                                    // 58  // 126
};                                                                                 // 59  // 127
                                                                                   // 60  // 128
methods.addRelations = function(relationsDefinition) {                             // 61  // 129
  checks.definitions.call(this, relationsDefinition);                              // 62  // 130
                                                                                   // 63  // 131
  _.each(relationsDefinition, function(relationDefinition, relationName) {         // 64  // 132
    this.addRelation(relationName, relationsDefinition[relationName]);             // 65  // 133
  }, this);                                                                        // 66  // 134
};                                                                                 // 67  // 135
                                                                                   // 68  // 136
                                                                                   // 69  // 137
methods.addRelation = function(relationName, relationDefinition) {                 // 70  // 138
  // Do params checking. The params checking can throw an error.                   // 71  // 139
  checks.relationName.call(this, relationName);                                    // 72  // 140
  // If the relation already exists then just break. When adding relation, we also try to add an opposit relation to the foreign schema. It could cause circular method execution. It's why we have to stop execution.
  if (this.hasRelation(relationName)) {                                            // 74  // 142
    return;                                                                        // 75  // 143
  }                                                                                // 76  // 144
  checks.definition.call(this, relationName, relationDefinition);                  // 77  // 145
                                                                                   // 78  // 146
  // Define setter and getter for the relation.                                    // 79  // 147
  Object.defineProperty(this.prototype, relationName, {                            // 80  // 148
    get: function() {                                                              // 81  // 149
      return this.getRelated(relationName);                                        // 82  // 150
    },                                                                             // 83  // 151
    set: function(value) {                                                         // 84  // 152
      this.setRelated(relationName, value);                                        // 85  // 153
    }                                                                              // 86  // 154
  });                                                                              // 87  // 155
                                                                                   // 88  // 156
  // Add relation definition to the schema.                                        // 89  // 157
  this.schema.relations[relationName] = relationDefinition;                        // 90  // 158
};                                                                                 // 91  // 159
                                                                                   // 92  // 160
relationsOnInitClass = function(schemaDefinition) {                                // 93  // 161
  var Class = this;                                                                // 94  // 162
                                                                                   // 95  // 163
  _.extend(Class, methods);                                                        // 96  // 164
                                                                                   // 97  // 165
  // Add the "relations" attribute to the schema.                                  // 98  // 166
  Class.schema.relations = {};                                                     // 99  // 167
                                                                                   // 100
  if (_.has(schemaDefinition, 'relations')) {                                      // 101
    Class.addRelations(schemaDefinition.relations);                                // 102
  }                                                                                // 103
};                                                                                 // 104
                                                                                   // 105
/////////////////////////////////////////////////////////////////////////////////////     // 174
                                                                                          // 175
}).call(this);                                                                            // 176
                                                                                          // 177
                                                                                          // 178
                                                                                          // 179
                                                                                          // 180
                                                                                          // 181
                                                                                          // 182
(function () {                                                                            // 183
                                                                                          // 184
/////////////////////////////////////////////////////////////////////////////////////     // 185
//                                                                                 //     // 186
// packages/jagi:astronomy-relations/lib/module/init_instance.js                   //     // 187
//                                                                                 //     // 188
/////////////////////////////////////////////////////////////////////////////////////     // 189
                                                                                   //     // 190
relationsOnInitInstance = function() {                                             // 1   // 191
  // Object for storing references of related objects.                             // 2   // 192
  this._references = {};                                                           // 3   // 193
};                                                                                 // 4   // 194
                                                                                   // 5   // 195
/////////////////////////////////////////////////////////////////////////////////////     // 196
                                                                                          // 197
}).call(this);                                                                            // 198
                                                                                          // 199
                                                                                          // 200
                                                                                          // 201
                                                                                          // 202
                                                                                          // 203
                                                                                          // 204
(function () {                                                                            // 205
                                                                                          // 206
/////////////////////////////////////////////////////////////////////////////////////     // 207
//                                                                                 //     // 208
// packages/jagi:astronomy-relations/lib/module/module.js                          //     // 209
//                                                                                 //     // 210
/////////////////////////////////////////////////////////////////////////////////////     // 211
                                                                                   //     // 212
Astro.createModule({                                                               // 1   // 213
  name: 'relations',                                                               // 2   // 214
  init: relationsOnInitModule,                                                     // 3   // 215
  events: {                                                                        // 4   // 216
    initclass: relationsOnInitClass,                                               // 5   // 217
    initinstance: relationsOnInitInstance                                          // 6   // 218
  }                                                                                // 7   // 219
});                                                                                // 8   // 220
                                                                                   // 9   // 221
/////////////////////////////////////////////////////////////////////////////////////     // 222
                                                                                          // 223
}).call(this);                                                                            // 224
                                                                                          // 225
////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['jagi:astronomy-relations'] = {};

})();

//# sourceMappingURL=jagi_astronomy-relations.js.map
