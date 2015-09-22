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
var ReactiveMap = Package['jagi:reactive-map'].ReactiveMap;
var _ = Package.underscore._;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var check = Package.check.check;
var Match = Package.check.Match;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var Validators, ValidationError, ValidatorDefinition, onInitModule, onInitClass, onInitInstance;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// packages/jagi_astronomy-validators/packages/jagi_astronomy-validators.js                         //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                    //
(function () {                                                                                      // 1
                                                                                                    // 2
///////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                           //     // 4
// packages/jagi:astronomy-validators/lib/module/global.js                                   //     // 5
//                                                                                           //     // 6
///////////////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                             //     // 8
Astro.validators = Validators = {};                                                          // 1   // 9
                                                                                             // 2   // 10
///////////////////////////////////////////////////////////////////////////////////////////////     // 11
                                                                                                    // 12
}).call(this);                                                                                      // 13
                                                                                                    // 14
                                                                                                    // 15
                                                                                                    // 16
                                                                                                    // 17
                                                                                                    // 18
                                                                                                    // 19
(function () {                                                                                      // 20
                                                                                                    // 21
///////////////////////////////////////////////////////////////////////////////////////////////     // 22
//                                                                                           //     // 23
// packages/jagi:astronomy-validators/lib/module/error.js                                    //     // 24
//                                                                                           //     // 25
///////////////////////////////////////////////////////////////////////////////////////////////     // 26
                                                                                             //     // 27
ValidationError = function(errors) {                                                         // 1   // 28
  this.errors = errors;                                                                      // 2   // 29
};                                                                                           // 3   // 30
                                                                                             // 4   // 31
///////////////////////////////////////////////////////////////////////////////////////////////     // 32
                                                                                                    // 33
}).call(this);                                                                                      // 34
                                                                                                    // 35
                                                                                                    // 36
                                                                                                    // 37
                                                                                                    // 38
                                                                                                    // 39
                                                                                                    // 40
(function () {                                                                                      // 41
                                                                                                    // 42
///////////////////////////////////////////////////////////////////////////////////////////////     // 43
//                                                                                           //     // 44
// packages/jagi:astronomy-validators/lib/module/utils.js                                    //     // 45
//                                                                                           //     // 46
///////////////////////////////////////////////////////////////////////////////////////////////     // 47
                                                                                             //     // 48
Astro.utils.validators = {                                                                   // 1   // 49
  findValidator: function(Class, validatorName) {                                            // 2   // 50
    return Astro.utils.class.findInClass(Class, function(Class) {                            // 3   // 51
      return Class.getValidator(validatorName);                                              // 4   // 52
    });                                                                                      // 5   // 53
  },                                                                                         // 6   // 54
                                                                                             // 7   // 55
  getAllValidators: function(Class) {                                                        // 8   // 56
    var validators = {};                                                                     // 9   // 57
                                                                                             // 10  // 58
    Astro.utils.class.eachClass(Class, function(Class) {                                     // 11  // 59
      _.extend(validators, Class.getValidators());                                           // 12  // 60
    });                                                                                      // 13  // 61
                                                                                             // 14  // 62
    return validators;                                                                       // 15  // 63
  }                                                                                          // 16  // 64
};                                                                                           // 17  // 65
                                                                                             // 18  // 66
///////////////////////////////////////////////////////////////////////////////////////////////     // 67
                                                                                                    // 68
}).call(this);                                                                                      // 69
                                                                                                    // 70
                                                                                                    // 71
                                                                                                    // 72
                                                                                                    // 73
                                                                                                    // 74
                                                                                                    // 75
(function () {                                                                                      // 76
                                                                                                    // 77
///////////////////////////////////////////////////////////////////////////////////////////////     // 78
//                                                                                           //     // 79
// packages/jagi:astronomy-validators/lib/module/validator_definition.js                     //     // 80
//                                                                                           //     // 81
///////////////////////////////////////////////////////////////////////////////////////////////     // 82
                                                                                             //     // 83
var checks = {                                                                               // 1   // 84
  validatorDefinition: function(validatorDefinition) {                                       // 2   // 85
    // Check if the validator definition is an object.                                       // 3   // 86
    if (!_.isObject(validatorDefinition)) {                                                  // 4   // 87
      throw new Error('Provide a validator definition');                                     // 5   // 88
    }                                                                                        // 6   // 89
                                                                                             // 7   // 90
    // Check if the validator name is provided.                                              // 8   // 91
    if (!_.has(validatorDefinition, 'name')) {                                               // 9   // 92
      throw new Error('Provide a validator name');                                           // 10  // 93
    }                                                                                        // 11  // 94
                                                                                             // 12  // 95
    // Check if the validator name is a string.                                              // 13  // 96
    if (!_.isString(validatorDefinition.name)) {                                             // 14  // 97
      throw new Error('The validator name has to be a string');                              // 15  // 98
    }                                                                                        // 16  // 99
                                                                                             // 17  // 100
    // Check if the validator with the given name already exists.                            // 18  // 101
    if (_.has(Validators, validatorDefinition.name)) {                                       // 19  // 102
      throw new Error('Validator with the name `' + validatorDefinition.name +               // 20  // 103
        '` is already defined');                                                             // 21  // 104
    }                                                                                        // 22  // 105
                                                                                             // 23  // 106
    // Check if the validation function is provided.                                         // 24  // 107
    if (!_.has(validatorDefinition, 'validate')) {                                           // 25  // 108
      throw new Error('Provide the `validate` function');                                    // 26  // 109
    }                                                                                        // 27  // 110
                                                                                             // 28  // 111
    // Check if the `validate` attribute is function.                                        // 29  // 112
    if (!_.isFunction(validatorDefinition.validate)) {                                       // 30  // 113
      throw new Error('The `validate` attribute has to be a function');                      // 31  // 114
    }                                                                                        // 32  // 115
  }                                                                                          // 33  // 116
};                                                                                           // 34  // 117
                                                                                             // 35  // 118
ValidatorDefinition = function(validatorDefinition) {                                        // 36  // 119
  checks.validatorDefinition(validatorDefinition);                                           // 37  // 120
                                                                                             // 38  // 121
  var self = this;                                                                           // 39  // 122
                                                                                             // 40  // 123
  self.name = validatorDefinition.name;                                                      // 41  // 124
  self.validate = validatorDefinition.validate;                                              // 42  // 125
                                                                                             // 43  // 126
  if (_.has(validatorDefinition, 'events')) {                                                // 44  // 127
    _.each(validatorDefinition.events, function(eventHandler, eventName) {                   // 45  // 128
      self.on(eventName, eventHandler);                                                      // 46  // 129
    });                                                                                      // 47  // 130
  }                                                                                          // 48  // 131
};                                                                                           // 49  // 132
                                                                                             // 50  // 133
Astro.Events.mixin(ValidatorDefinition.prototype);                                           // 51  // 134
                                                                                             // 52  // 135
///////////////////////////////////////////////////////////////////////////////////////////////     // 136
                                                                                                    // 137
}).call(this);                                                                                      // 138
                                                                                                    // 139
                                                                                                    // 140
                                                                                                    // 141
                                                                                                    // 142
                                                                                                    // 143
                                                                                                    // 144
(function () {                                                                                      // 145
                                                                                                    // 146
///////////////////////////////////////////////////////////////////////////////////////////////     // 147
//                                                                                           //     // 148
// packages/jagi:astronomy-validators/lib/module/validator.js                                //     // 149
//                                                                                           //     // 150
///////////////////////////////////////////////////////////////////////////////////////////////     // 151
                                                                                             //     // 152
Astro.createValidator = function(validatorDefinition) {                                      // 1   // 153
  var definition = new ValidatorDefinition(validatorDefinition);                             // 2   // 154
                                                                                             // 3   // 155
  var validatorGenerator = function(options, userMessage) {                                  // 4   // 156
    var validator = function(fieldValue, fieldName) {                                        // 5   // 157
      return validator.definition.validate.call(                                             // 6   // 158
        this,                                                                                // 7   // 159
        fieldValue,                                                                          // 8   // 160
        fieldName,                                                                           // 9   // 161
        options, // Validator options passed by user.                                        // 10  // 162
        validator // Parent validator.                                                       // 11  // 163
      );                                                                                     // 12  // 164
    };                                                                                       // 13  // 165
                                                                                             // 14  // 166
    _.extend(validator, {                                                                    // 15  // 167
      definition: definition,                                                                // 16  // 168
      options: options,                                                                      // 17  // 169
      message: userMessage                                                                   // 18  // 170
    });                                                                                      // 19  // 171
                                                                                             // 20  // 172
    return validator;                                                                        // 21  // 173
  };                                                                                         // 22  // 174
                                                                                             // 23  // 175
  // Validator is just a function with the "definition" property where all the               // 24  // 176
  // validator definition is stored.                                                         // 25  // 177
  Validators[definition.name] = validatorGenerator;                                          // 26  // 178
                                                                                             // 27  // 179
  // We also return created validator if someone would like not to use long                  // 28  // 180
  // default namespace which is e.g. `Validators.isString`.                                  // 29  // 181
  return validatorGenerator;                                                                 // 30  // 182
};                                                                                           // 31  // 183
                                                                                             // 32  // 184
///////////////////////////////////////////////////////////////////////////////////////////////     // 185
                                                                                                    // 186
}).call(this);                                                                                      // 187
                                                                                                    // 188
                                                                                                    // 189
                                                                                                    // 190
                                                                                                    // 191
                                                                                                    // 192
                                                                                                    // 193
(function () {                                                                                      // 194
                                                                                                    // 195
///////////////////////////////////////////////////////////////////////////////////////////////     // 196
//                                                                                           //     // 197
// packages/jagi:astronomy-validators/lib/module/init_module.js                              //     // 198
//                                                                                           //     // 199
///////////////////////////////////////////////////////////////////////////////////////////////     // 200
                                                                                             //     // 201
var generateMessage = function(validator, fieldName, fieldValue) {                           // 1   // 202
  // Prepare an event object for the "validationerror" event.                                // 2   // 203
  var event = new Astro.Event('validationerror', {                                           // 3   // 204
    validator: _.has(validator, 'definition') ? validator.definition.name : '',              // 4   // 205
    value: fieldValue,                                                                       // 5   // 206
    field: fieldName,                                                                        // 6   // 207
    options: validator.options,                                                              // 7   // 208
    message: null,                                                                           // 8   // 209
  });                                                                                        // 9   // 210
  event.target = this;                                                                       // 10  // 211
                                                                                             // 11  // 212
  // Prepare variable for storing an error message.                                          // 12  // 213
  var errorMessage;                                                                          // 13  // 214
                                                                                             // 14  // 215
  // VALIDATION MESSAGE PASSED TO VALIDATOR.                                                 // 15  // 216
  if (_.isString(validator.message)) {                                                       // 16  // 217
    // If user passed a string message then use it.                                          // 17  // 218
    errorMessage = validator.message;                                                        // 18  // 219
  } else if (_.isFunction(validator.message)) {                                              // 19  // 220
    // If user passed a function message then run it as it would be an event.                // 20  // 221
    validator.message.call(this, event);                                                     // 21  // 222
    errorMessage = event.data.message;                                                       // 22  // 223
  }                                                                                          // 23  // 224
  if (errorMessage) {                                                                        // 24  // 225
    return errorMessage;                                                                     // 25  // 226
  }                                                                                          // 26  // 227
                                                                                             // 27  // 228
  // VALIDATION MESSAGE ON THE LEVEL OF THE CLASS OR IN THE GLOBAL SCOPE.                    // 28  // 229
  // If user haven't defined any custom validation message then check                        // 29  // 230
  // whether there are any "validationerror" events that could generate                      // 30  // 231
  // error message.                                                                          // 31  // 232
  this.constructor.emitEvent(event);                                                         // 32  // 233
  errorMessage = event.data.message;                                                         // 33  // 234
  if (errorMessage) {                                                                        // 34  // 235
    return errorMessage;                                                                     // 35  // 236
  }                                                                                          // 36  // 237
                                                                                             // 37  // 238
  // DEFAULT VALIDATOR MESSAGE.                                                              // 38  // 239
  // If in this place the "errorMessage" variable is still not set, then we                  // 39  // 240
  // have to look for the "validationerror" event in the validator's                         // 40  // 241
  // definition.                                                                             // 41  // 242
  if (                                                                                       // 42  // 243
    validator.definition &&                                                                  // 43  // 244
    _.isFunction(validator.definition.emit)                                                  // 44  // 245
  ) {                                                                                        // 45  // 246
    validator.definition.emit(event);                                                        // 46  // 247
    errorMessage = event.data.message;                                                       // 47  // 248
  }                                                                                          // 48  // 249
  if (errorMessage) {                                                                        // 49  // 250
    return errorMessage;                                                                     // 50  // 251
  }                                                                                          // 51  // 252
                                                                                             // 52  // 253
  // DEFAULT MESSAGE.                                                                        // 53  // 254
  errorMessage = 'The "' + fieldName + '" field\'s value is invalid';                        // 54  // 255
  return errorMessage;                                                                       // 55  // 256
};                                                                                           // 56  // 257
                                                                                             // 57  // 258
var validateList = function(validatorsList, patternOrFieldName) {                            // 58  // 259
  var doc = this;                                                                            // 59  // 260
  var Class = doc.constructor;                                                               // 60  // 261
                                                                                             // 61  // 262
  // Variable for storing fields names. When the second argument of the                      // 62  // 263
  // "validateList" function is pattern, then we have to take fields names out               // 63  // 264
  // of this pattern. If the argument is a single field name then we just put it             // 64  // 265
  // in the array.                                                                           // 65  // 266
  var fieldsNames;                                                                           // 66  // 267
  // Variable for storing information if the second argument is pattern or just              // 67  // 268
  // a field name.                                                                           // 68  // 269
  var isPattern = false;                                                                     // 69  // 270
  // Try finding the ".$" string which indicates that it's a pattern.                        // 70  // 271
  if (patternOrFieldName.indexOf('.$') !== -1) {                                             // 71  // 272
    // Get fields out of the pattern.                                                        // 72  // 273
    fieldsNames = Astro.utils.fields.getFieldsNamesFromPattern(                              // 73  // 274
      doc,                                                                                   // 74  // 275
      patternOrFieldName                                                                     // 75  // 276
    );                                                                                       // 76  // 277
    isPattern = true;                                                                        // 77  // 278
  } else {                                                                                   // 78  // 279
    fieldsNames = [patternOrFieldName];                                                      // 79  // 280
  }                                                                                          // 80  // 281
                                                                                             // 81  // 282
  // Loop through list of all fileds names and perform validation on each field.             // 82  // 283
  _.each(fieldsNames, function(fieldName) {                                                  // 83  // 284
    // Get the field's value.                                                                // 84  // 285
    var fieldValue = Astro.utils.fields.getValue(doc, fieldName);                            // 85  // 286
                                                                                             // 86  // 287
    // Loop through validators list and run each one.                                        // 87  // 288
    _.each(validatorsList, function(validator) {                                             // 88  // 289
      var isValid = validator.call(doc, fieldValue, fieldName);                              // 89  // 290
                                                                                             // 90  // 291
      if (!isValid) {                                                                        // 91  // 292
        // Prepare an object for storing error messages.                                     // 92  // 293
        var errors = [];                                                                     // 93  // 294
                                                                                             // 94  // 295
        // Add a validation error message for the given field.                               // 95  // 296
        errors.push({                                                                        // 96  // 297
          validator: validator,                                                              // 97  // 298
          patternOrFieldName: fieldName,                                                     // 98  // 299
          fieldValue: fieldValue                                                             // 99  // 300
        });                                                                                  // 100
                                                                                             // 101
        if (isPattern) {                                                                     // 102
          // Add a validation error message for the given pattern.                           // 103
          errors.push({                                                                      // 104
            validator: validator,                                                            // 105
            patternOrFieldName: patternOrFieldName,                                          // 106
            fieldValue: fieldValue                                                           // 107
          });                                                                                // 108
        }                                                                                    // 109
                                                                                             // 110
        // Throw errors.                                                                     // 111
        throw new ValidationError(errors);                                                   // 112
      } else {                                                                               // 113
        // Remove a validator error message if present.                                      // 114
        doc._errors.delete(fieldName);                                                       // 115
                                                                                             // 116
        if (isPattern) {                                                                     // 117
          doc._errors.delete(patternOrFieldName);                                            // 118
        }                                                                                    // 119
      }                                                                                      // 120
    });                                                                                      // 121
  });                                                                                        // 122
};                                                                                           // 123
                                                                                             // 124
var validateOne = function(patternOrFieldName) {                                             // 125
  var doc = this;                                                                            // 126
  var Class = doc.constructor;                                                               // 127
                                                                                             // 128
  var errors = [];                                                                           // 129
                                                                                             // 130
  try {                                                                                      // 131
    // Get validators only for the given field name.                                         // 132
    var validatorsList = Astro.utils.validators.findValidator(                               // 133
      Class,                                                                                 // 134
      patternOrFieldName                                                                     // 135
    );                                                                                       // 136
    // Validate field only if there are any validators.                                      // 137
    if (validatorsList) {                                                                    // 138
      validateList.call(doc, validatorsList, patternOrFieldName);                            // 139
    }                                                                                        // 140
  } catch (e) {                                                                              // 141
    if (e instanceof ValidationError) {                                                      // 142
      errors = errors.concat(e.errors);                                                      // 143
    }                                                                                        // 144
  }                                                                                          // 145
                                                                                             // 146
  return errors;                                                                             // 147
};                                                                                           // 148
                                                                                             // 149
var validateAll = function(stopOnFirst) {                                                    // 150
  if (_.isUndefined(stopOnFirst)) {                                                          // 151
    stopOnFirst = true;                                                                      // 152
  }                                                                                          // 153
                                                                                             // 154
  var doc = this;                                                                            // 155
  var Class = doc.constructor;                                                               // 156
                                                                                             // 157
  // Get list of the all validators for the given class and run validation.                  // 158
  var validatorsLists = Astro.utils.validators.getAllValidators(Class);                      // 159
                                                                                             // 160
  // Get validation order.                                                                   // 161
  var validationOrder = Class.getValidationOrder();                                          // 162
  if (validationOrder) {                                                                     // 163
    // Get keys of validators that are not present in validation order. We will              // 164
    // add them at the end of the validation order to ensure that all validators             // 165
    // have been invoked.                                                                    // 166
    var diff = _.difference(_.keys(validatorsLists), validationOrder);                       // 167
    // Add the rest of the validators at the end.                                            // 168
    if (diff.length > 0) {                                                                   // 169
      validationOrder = validationOrder.concat(diff);                                        // 170
    }                                                                                        // 171
  } else {                                                                                   // 172
    validationOrder = _.keys(validatorsLists);                                               // 173
  }                                                                                          // 174
                                                                                             // 175
  // Callect errors. If the "stopOnFirst" flag is set, then we stop collecting               // 176
  // errors after first error. Otherwise, we continue until we reach the last                // 177
  // validatorsList.                                                                         // 178
  var errors = [];                                                                           // 179
  _.every(validationOrder, function(patternOrFieldName) {                                    // 180
    try {                                                                                    // 181
      var validatorsList = validatorsLists[patternOrFieldName];                              // 182
      if (validatorsList) {                                                                  // 183
        validateList.call(doc, validatorsList, patternOrFieldName);                          // 184
      }                                                                                      // 185
    } catch (e) {                                                                            // 186
      if (e instanceof ValidationError) {                                                    // 187
        errors = errors.concat(e.errors);                                                    // 188
      }                                                                                      // 189
    }                                                                                        // 190
                                                                                             // 191
    if (stopOnFirst && errors.length > 0) {                                                  // 192
      return false;                                                                          // 193
    } else {                                                                                 // 194
      return true;                                                                           // 195
    }                                                                                        // 196
  });                                                                                        // 197
                                                                                             // 198
  return errors;                                                                             // 199
};                                                                                           // 200
                                                                                             // 201
var setErrors = function(errors) {                                                           // 202
  var doc = this;                                                                            // 203
                                                                                             // 204
  _.each(errors, function(error) {                                                           // 205
    var message = generateMessage.call(                                                      // 206
      doc,                                                                                   // 207
      error.validator,                                                                       // 208
      error.patternOrFieldName,                                                              // 209
      error.fieldValue                                                                       // 210
    );                                                                                       // 211
    doc._errors.set(error.patternOrFieldName, message);                                      // 212
  });                                                                                        // 213
};                                                                                           // 214
                                                                                             // 215
var methods = {                                                                              // 216
  validate: function() {                                                                     // 217
    var doc = this;                                                                          // 218
                                                                                             // 219
    var errors;                                                                              // 220
    if (arguments.length === 1) {                                                            // 221
      errors = validateOne.call(doc, arguments[0]);                                          // 222
    } else if (arguments.length === 0) {                                                     // 223
      errors = validateAll.call(doc);                                                        // 224
    }                                                                                        // 225
                                                                                             // 226
    setErrors.call(doc, errors);                                                             // 227
                                                                                             // 228
    return errors.length === 0;                                                              // 229
  },                                                                                         // 230
                                                                                             // 231
  validateAll: function() {                                                                  // 232
    var doc = this;                                                                          // 233
                                                                                             // 234
    var errors = validateAll.call(doc, false);                                               // 235
                                                                                             // 236
    setErrors.call(doc, errors);                                                             // 237
                                                                                             // 238
    return errors.length === 0;                                                              // 239
  },                                                                                         // 240
                                                                                             // 241
  getValidationError: function(fieldName) {                                                  // 242
    return this._errors.get(fieldName);                                                      // 243
  },                                                                                         // 244
                                                                                             // 245
  getValidationErrors: function() {                                                          // 246
    return this._errors.all();                                                               // 247
  },                                                                                         // 248
                                                                                             // 249
  hasValidationError: function(fieldName) {                                                  // 250
    return this._errors.has(fieldName);                                                      // 251
  },                                                                                         // 252
                                                                                             // 253
  hasValidationErrors: function() {                                                          // 254
    return this._errors.size() > 0;                                                          // 255
  },                                                                                         // 256
                                                                                             // 257
  throwValidationException: function() {                                                     // 258
    throw new Meteor.Error('validation-error', this.getValidationErrors());                  // 259
  },                                                                                         // 260
                                                                                             // 261
  catchValidationException: function(exception) {                                            // 262
    if (!(exception instanceof Meteor.Error) ||                                              // 263
      exception.error !== 'validation-error' ||                                              // 264
      !_.isObject(exception.reason)                                                          // 265
    ) {                                                                                      // 266
      return;                                                                                // 267
    }                                                                                        // 268
                                                                                             // 269
    this._errors.set(exception.reason);                                                      // 270
  }                                                                                          // 271
};                                                                                           // 272
                                                                                             // 273
var events = {                                                                               // 274
  toJsonValue: function(e) {                                                                 // 275
    var self = this;                                                                         // 276
                                                                                             // 277
    Tracker.nonreactive(function() {                                                         // 278
      e.data.errors = self._errors.all();                                                    // 279
    });                                                                                      // 280
  },                                                                                         // 281
                                                                                             // 282
  fromJsonValue: function(e) {                                                               // 283
    this._errors.set(e.data.errors);                                                         // 284
  }                                                                                          // 285
};                                                                                           // 286
                                                                                             // 287
onInitModule = function() {                                                                  // 288
  _.extend(Astro.BaseClass.prototype, methods);                                              // 289
                                                                                             // 290
  Astro.eventManager.on('toJsonValue', events.toJsonValue);                                  // 291
  Astro.eventManager.on('fromJsonValue', events.fromJsonValue);                              // 292
};                                                                                           // 293
                                                                                             // 294
///////////////////////////////////////////////////////////////////////////////////////////////     // 496
                                                                                                    // 497
}).call(this);                                                                                      // 498
                                                                                                    // 499
                                                                                                    // 500
                                                                                                    // 501
                                                                                                    // 502
                                                                                                    // 503
                                                                                                    // 504
(function () {                                                                                      // 505
                                                                                                    // 506
///////////////////////////////////////////////////////////////////////////////////////////////     // 507
//                                                                                           //     // 508
// packages/jagi:astronomy-validators/lib/module/init_class.js                               //     // 509
//                                                                                           //     // 510
///////////////////////////////////////////////////////////////////////////////////////////////     // 511
                                                                                             //     // 512
var checks = {                                                                               // 1   // 513
  fieldName: function(fieldName) {                                                           // 2   // 514
    if (!Match.test(fieldName, String)) {                                                    // 3   // 515
      throw new Error(                                                                       // 4   // 516
        'The validator\'s field name in the "' + this.getName() +                            // 5   // 517
        '" class schema has to be a string'                                                  // 6   // 518
      );                                                                                     // 7   // 519
    }                                                                                        // 8   // 520
  },                                                                                         // 9   // 521
                                                                                             // 10  // 522
  validator: function(fieldName, validator) {                                                // 11  // 523
    if (!Match.test(validator, Match.OneOf(Function, [Function]))) {                         // 12  // 524
      throw new Error(                                                                       // 13  // 525
        'The validator for the "' + fieldName +                                              // 14  // 526
        '" field in the "' + this.getName() +                                                // 15  // 527
        '" class schema has to be a function or an array of functions'                       // 16  // 528
      );                                                                                     // 17  // 529
    }                                                                                        // 18  // 530
  },                                                                                         // 19  // 531
                                                                                             // 20  // 532
  validators: function(validators) {                                                         // 21  // 533
    if (!Match.test(validators, Object)) {                                                   // 22  // 534
      throw new Error(                                                                       // 23  // 535
        'The validator functions definition in the "' + this.getName() +                     // 24  // 536
        '" class schema has to be an object'                                                 // 25  // 537
      );                                                                                     // 26  // 538
    }                                                                                        // 27  // 539
  },                                                                                         // 28  // 540
                                                                                             // 29  // 541
  validationOrder: function(validationOrder) {                                               // 30  // 542
    if (!Match.test(validationOrder, [String])) {                                            // 31  // 543
      throw new Error(                                                                       // 32  // 544
        'The validation order definition in the "' + this.getName() +                        // 33  // 545
        '" class schema has to be an array of strings'                                       // 34  // 546
      );                                                                                     // 35  // 547
    }                                                                                        // 36  // 548
  }                                                                                          // 37  // 549
};                                                                                           // 38  // 550
                                                                                             // 39  // 551
var methods = {                                                                              // 40  // 552
  hasValidator: function(fieldName) {                                                        // 41  // 553
    checks.fieldName.call(this, fieldName);                                                  // 42  // 554
                                                                                             // 43  // 555
    return _.has(this.schema.validators, fieldName);                                         // 44  // 556
  },                                                                                         // 45  // 557
                                                                                             // 46  // 558
  getValidator: function(fieldName) {                                                        // 47  // 559
    checks.fieldName.call(this, fieldName);                                                  // 48  // 560
                                                                                             // 49  // 561
    return this.schema.validators[fieldName];                                                // 50  // 562
  },                                                                                         // 51  // 563
                                                                                             // 52  // 564
  getValidators: function() {                                                                // 53  // 565
    return this.schema.validators;                                                           // 54  // 566
  },                                                                                         // 55  // 567
                                                                                             // 56  // 568
  addValidator: function(fieldName, validators) {                                            // 57  // 569
    // Check if field name had been provided and is a string.                                // 58  // 570
    checks.fieldName.call(this, fieldName);                                                  // 59  // 571
    // Check if validator is a function.                                                     // 60  // 572
    checks.validator.call(this, fieldName, validators);                                      // 61  // 573
                                                                                             // 62  // 574
    this.schema.validators[fieldName] = this.schema.validators[fieldName] || [];             // 63  // 575
    this.schema.validators[fieldName] = this.schema.validators[fieldName].                   // 64  // 576
    concat(validators);                                                                      // 65  // 577
  },                                                                                         // 66  // 578
                                                                                             // 67  // 579
  addValidators: function(validators) {                                                      // 68  // 580
    var self = this;                                                                         // 69  // 581
                                                                                             // 70  // 582
    // Validators data has to be an object.                                                  // 71  // 583
    checks.validators.call(self, validators);                                                // 72  // 584
                                                                                             // 73  // 585
    // Loop through list of validators data and add each one.                                // 74  // 586
    _.each(validators, function(validator, fieldName) {                                      // 75  // 587
      self.addValidator(fieldName, validator);                                               // 76  // 588
    });                                                                                      // 77  // 589
  },                                                                                         // 78  // 590
                                                                                             // 79  // 591
  setValidationOrder: function(validationOrder) {                                            // 80  // 592
    // Check validity of the validation order option.                                        // 81  // 593
    checks.validationOrder.call(this, validationOrder);                                      // 82  // 594
                                                                                             // 83  // 595
    this.schema.validationOrder = validationOrder;                                           // 84  // 596
  },                                                                                         // 85  // 597
                                                                                             // 86  // 598
  getValidationOrder: function() {                                                           // 87  // 599
    return this.schema.validationOrder;                                                      // 88  // 600
  }                                                                                          // 89  // 601
};                                                                                           // 90  // 602
                                                                                             // 91  // 603
var events = {                                                                               // 92  // 604
  afterset: function(e) {                                                                    // 93  // 605
    var fieldName = e.data.field;                                                            // 94  // 606
                                                                                             // 95  // 607
    // If a validator is defined for given field then clear error message for                // 96  // 608
    // that field.                                                                           // 97  // 609
    this._errors.delete(fieldName);                                                          // 98  // 610
  }                                                                                          // 99  // 611
};                                                                                           // 100
                                                                                             // 101
onInitClass = function(schemaDefinition) {                                                   // 102
  var Class = this;                                                                          // 103
                                                                                             // 104
  _.extend(Class, methods);                                                                  // 105
                                                                                             // 106
  // Add the "validators" attribute to the schema.                                           // 107
  Class.schema.validators = {};                                                              // 108
                                                                                             // 109
  // Add validators that are defined next to the field definition.                           // 110
  _.each(                                                                                    // 111
    schemaDefinition.fields,                                                                 // 112
    function(fieldDefinition, patternOrFieldName) {                                          // 113
      if (_.has(fieldDefinition, 'validators')) {                                            // 114
        Class.addValidator(patternOrFieldName, fieldDefinition.validators);                  // 115
      }                                                                                      // 116
    }                                                                                        // 117
  );                                                                                         // 118
                                                                                             // 119
  if (_.has(schemaDefinition, 'validators')) {                                               // 120
    Class.addValidators(schemaDefinition.validators);                                        // 121
                                                                                             // 122
    // Add "afterset" event to all classes having validators.                                // 123
    Class.addEvents(events);                                                                 // 124
  }                                                                                          // 125
                                                                                             // 126
  if (_.has(schemaDefinition, 'validationOrder')) {                                          // 127
    // Add the validation order option to the class.                                         // 128
    Class.setValidationOrder(schemaDefinition.validationOrder);                              // 129
  }                                                                                          // 130
};                                                                                           // 131
                                                                                             // 132
///////////////////////////////////////////////////////////////////////////////////////////////     // 645
                                                                                                    // 646
}).call(this);                                                                                      // 647
                                                                                                    // 648
                                                                                                    // 649
                                                                                                    // 650
                                                                                                    // 651
                                                                                                    // 652
                                                                                                    // 653
(function () {                                                                                      // 654
                                                                                                    // 655
///////////////////////////////////////////////////////////////////////////////////////////////     // 656
//                                                                                           //     // 657
// packages/jagi:astronomy-validators/lib/module/init_instance.js                            //     // 658
//                                                                                           //     // 659
///////////////////////////////////////////////////////////////////////////////////////////////     // 660
                                                                                             //     // 661
onInitInstance = function(attrs) {                                                           // 1   // 662
  this._errors = new ReactiveMap();                                                          // 2   // 663
};                                                                                           // 3   // 664
                                                                                             // 4   // 665
///////////////////////////////////////////////////////////////////////////////////////////////     // 666
                                                                                                    // 667
}).call(this);                                                                                      // 668
                                                                                                    // 669
                                                                                                    // 670
                                                                                                    // 671
                                                                                                    // 672
                                                                                                    // 673
                                                                                                    // 674
(function () {                                                                                      // 675
                                                                                                    // 676
///////////////////////////////////////////////////////////////////////////////////////////////     // 677
//                                                                                           //     // 678
// packages/jagi:astronomy-validators/lib/module/module.js                                   //     // 679
//                                                                                           //     // 680
///////////////////////////////////////////////////////////////////////////////////////////////     // 681
                                                                                             //     // 682
Astro.createModule({                                                                         // 1   // 683
  name: 'validators',                                                                        // 2   // 684
  init: onInitModule,                                                                        // 3   // 685
  events: {                                                                                  // 4   // 686
    initclass: onInitClass,                                                                  // 5   // 687
    initinstance: onInitInstance                                                             // 6   // 688
  }                                                                                          // 7   // 689
});                                                                                          // 8   // 690
                                                                                             // 9   // 691
///////////////////////////////////////////////////////////////////////////////////////////////     // 692
                                                                                                    // 693
}).call(this);                                                                                      // 694
                                                                                                    // 695
                                                                                                    // 696
                                                                                                    // 697
                                                                                                    // 698
                                                                                                    // 699
                                                                                                    // 700
(function () {                                                                                      // 701
                                                                                                    // 702
///////////////////////////////////////////////////////////////////////////////////////////////     // 703
//                                                                                           //     // 704
// packages/jagi:astronomy-validators/lib/validators/type/string.js                          //     // 705
//                                                                                           //     // 706
///////////////////////////////////////////////////////////////////////////////////////////////     // 707
                                                                                             //     // 708
Astro.createValidator({                                                                      // 1   // 709
  name: 'string',                                                                            // 2   // 710
  validate: _.isString,                                                                      // 3   // 711
  events: {                                                                                  // 4   // 712
    validationerror: function(e) {                                                           // 5   // 713
      var fieldName = e.data.field;                                                          // 6   // 714
                                                                                             // 7   // 715
      e.data.message = 'The "' + fieldName +                                                 // 8   // 716
        '" field\'s value has to be a string';                                               // 9   // 717
    }                                                                                        // 10  // 718
  }                                                                                          // 11  // 719
});                                                                                          // 12  // 720
                                                                                             // 13  // 721
///////////////////////////////////////////////////////////////////////////////////////////////     // 722
                                                                                                    // 723
}).call(this);                                                                                      // 724
                                                                                                    // 725
                                                                                                    // 726
                                                                                                    // 727
                                                                                                    // 728
                                                                                                    // 729
                                                                                                    // 730
(function () {                                                                                      // 731
                                                                                                    // 732
///////////////////////////////////////////////////////////////////////////////////////////////     // 733
//                                                                                           //     // 734
// packages/jagi:astronomy-validators/lib/validators/type/number.js                          //     // 735
//                                                                                           //     // 736
///////////////////////////////////////////////////////////////////////////////////////////////     // 737
                                                                                             //     // 738
Astro.createValidator({                                                                      // 1   // 739
  name: 'number',                                                                            // 2   // 740
  validate: function(value) {                                                                // 3   // 741
    return !_.isNaN(value) && _.isNumber(value);                                             // 4   // 742
  },                                                                                         // 5   // 743
  events: {                                                                                  // 6   // 744
    validationerror: function(e) {                                                           // 7   // 745
      var fieldName = e.data.field;                                                          // 8   // 746
                                                                                             // 9   // 747
      e.data.message = 'The "' + fieldName +                                                 // 10  // 748
        '" field\'s value has to be a number';                                               // 11  // 749
    }                                                                                        // 12  // 750
  }                                                                                          // 13  // 751
});                                                                                          // 14  // 752
                                                                                             // 15  // 753
///////////////////////////////////////////////////////////////////////////////////////////////     // 754
                                                                                                    // 755
}).call(this);                                                                                      // 756
                                                                                                    // 757
                                                                                                    // 758
                                                                                                    // 759
                                                                                                    // 760
                                                                                                    // 761
                                                                                                    // 762
(function () {                                                                                      // 763
                                                                                                    // 764
///////////////////////////////////////////////////////////////////////////////////////////////     // 765
//                                                                                           //     // 766
// packages/jagi:astronomy-validators/lib/validators/type/boolean.js                         //     // 767
//                                                                                           //     // 768
///////////////////////////////////////////////////////////////////////////////////////////////     // 769
                                                                                             //     // 770
Astro.createValidator({                                                                      // 1   // 771
  name: 'boolean',                                                                           // 2   // 772
  validate: _.isBoolean,                                                                     // 3   // 773
  events: {                                                                                  // 4   // 774
    validationerror: function(e) {                                                           // 5   // 775
      var fieldName = e.data.field;                                                          // 6   // 776
                                                                                             // 7   // 777
      e.data.message = 'The "' + fieldName +                                                 // 8   // 778
        '" field\'s value has to be a boolean';                                              // 9   // 779
    }                                                                                        // 10  // 780
  }                                                                                          // 11  // 781
});                                                                                          // 12  // 782
                                                                                             // 13  // 783
///////////////////////////////////////////////////////////////////////////////////////////////     // 784
                                                                                                    // 785
}).call(this);                                                                                      // 786
                                                                                                    // 787
                                                                                                    // 788
                                                                                                    // 789
                                                                                                    // 790
                                                                                                    // 791
                                                                                                    // 792
(function () {                                                                                      // 793
                                                                                                    // 794
///////////////////////////////////////////////////////////////////////////////////////////////     // 795
//                                                                                           //     // 796
// packages/jagi:astronomy-validators/lib/validators/type/array.js                           //     // 797
//                                                                                           //     // 798
///////////////////////////////////////////////////////////////////////////////////////////////     // 799
                                                                                             //     // 800
Astro.createValidator({                                                                      // 1   // 801
  name: 'array',                                                                             // 2   // 802
  validate: _.isArray,                                                                       // 3   // 803
  events: {                                                                                  // 4   // 804
    validationerror: function(e) {                                                           // 5   // 805
      var fieldName = e.data.field;                                                          // 6   // 806
                                                                                             // 7   // 807
      e.data.message = 'The "' + fieldName +                                                 // 8   // 808
        '" field\'s value has to be an array';                                               // 9   // 809
    }                                                                                        // 10  // 810
  }                                                                                          // 11  // 811
});                                                                                          // 12  // 812
                                                                                             // 13  // 813
///////////////////////////////////////////////////////////////////////////////////////////////     // 814
                                                                                                    // 815
}).call(this);                                                                                      // 816
                                                                                                    // 817
                                                                                                    // 818
                                                                                                    // 819
                                                                                                    // 820
                                                                                                    // 821
                                                                                                    // 822
(function () {                                                                                      // 823
                                                                                                    // 824
///////////////////////////////////////////////////////////////////////////////////////////////     // 825
//                                                                                           //     // 826
// packages/jagi:astronomy-validators/lib/validators/type/object.js                          //     // 827
//                                                                                           //     // 828
///////////////////////////////////////////////////////////////////////////////////////////////     // 829
                                                                                             //     // 830
Astro.createValidator({                                                                      // 1   // 831
  name: 'object',                                                                            // 2   // 832
  validate: _.isObject,                                                                      // 3   // 833
  events: {                                                                                  // 4   // 834
    validationerror: function(e) {                                                           // 5   // 835
      var fieldName = e.data.field;                                                          // 6   // 836
                                                                                             // 7   // 837
      e.data.message = 'The "' + fieldName +                                                 // 8   // 838
        '" field\'s value has to be an object';                                              // 9   // 839
    }                                                                                        // 10  // 840
  }                                                                                          // 11  // 841
});                                                                                          // 12  // 842
                                                                                             // 13  // 843
///////////////////////////////////////////////////////////////////////////////////////////////     // 844
                                                                                                    // 845
}).call(this);                                                                                      // 846
                                                                                                    // 847
                                                                                                    // 848
                                                                                                    // 849
                                                                                                    // 850
                                                                                                    // 851
                                                                                                    // 852
(function () {                                                                                      // 853
                                                                                                    // 854
///////////////////////////////////////////////////////////////////////////////////////////////     // 855
//                                                                                           //     // 856
// packages/jagi:astronomy-validators/lib/validators/type/date.js                            //     // 857
//                                                                                           //     // 858
///////////////////////////////////////////////////////////////////////////////////////////////     // 859
                                                                                             //     // 860
Astro.createValidator({                                                                      // 1   // 861
  name: 'date',                                                                              // 2   // 862
  validate: _.isDate,                                                                        // 3   // 863
  events: {                                                                                  // 4   // 864
    validationerror: function(e) {                                                           // 5   // 865
      var fieldName = e.data.field;                                                          // 6   // 866
                                                                                             // 7   // 867
      e.data.message = 'The "' + fieldName +                                                 // 8   // 868
        '" field\'s value has to be a date';                                                 // 9   // 869
    }                                                                                        // 10  // 870
  }                                                                                          // 11  // 871
});                                                                                          // 12  // 872
                                                                                             // 13  // 873
///////////////////////////////////////////////////////////////////////////////////////////////     // 874
                                                                                                    // 875
}).call(this);                                                                                      // 876
                                                                                                    // 877
                                                                                                    // 878
                                                                                                    // 879
                                                                                                    // 880
                                                                                                    // 881
                                                                                                    // 882
(function () {                                                                                      // 883
                                                                                                    // 884
///////////////////////////////////////////////////////////////////////////////////////////////     // 885
//                                                                                           //     // 886
// packages/jagi:astronomy-validators/lib/validators/type/email.js                           //     // 887
//                                                                                           //     // 888
///////////////////////////////////////////////////////////////////////////////////////////////     // 889
                                                                                             //     // 890
Astro.createValidator({                                                                      // 1   // 891
  name: 'email',                                                                             // 2   // 892
  validate: function(fieldValue) {                                                           // 3   // 893
    // Create email regular expression.                                                      // 4   // 894
    var re = /^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,}$/i;                                 // 5   // 895
                                                                                             // 6   // 896
    return re.test(fieldValue);                                                              // 7   // 897
  },                                                                                         // 8   // 898
  events: {                                                                                  // 9   // 899
    validationerror: function(e) {                                                           // 10  // 900
      var fieldName = e.data.field;                                                          // 11  // 901
                                                                                             // 12  // 902
      e.data.message = 'The "' + fieldName +                                                 // 13  // 903
        '" field\'s value has to be an appropiate email address';                            // 14  // 904
    }                                                                                        // 15  // 905
  }                                                                                          // 16  // 906
});                                                                                          // 17  // 907
                                                                                             // 18  // 908
///////////////////////////////////////////////////////////////////////////////////////////////     // 909
                                                                                                    // 910
}).call(this);                                                                                      // 911
                                                                                                    // 912
                                                                                                    // 913
                                                                                                    // 914
                                                                                                    // 915
                                                                                                    // 916
                                                                                                    // 917
(function () {                                                                                      // 918
                                                                                                    // 919
///////////////////////////////////////////////////////////////////////////////////////////////     // 920
//                                                                                           //     // 921
// packages/jagi:astronomy-validators/lib/validators/existence/required.js                   //     // 922
//                                                                                           //     // 923
///////////////////////////////////////////////////////////////////////////////////////////////     // 924
                                                                                             //     // 925
Astro.createValidator({                                                                      // 1   // 926
  name: 'required',                                                                          // 2   // 927
  validate: function(fieldValue) {                                                           // 3   // 928
    return !_.isNull(fieldValue) && fieldValue !== '';                                       // 4   // 929
  },                                                                                         // 5   // 930
  events: {                                                                                  // 6   // 931
    validationerror: function(e) {                                                           // 7   // 932
      var fieldName = e.data.field;                                                          // 8   // 933
                                                                                             // 9   // 934
      e.data.message = 'The "' + fieldName +                                                 // 10  // 935
        '" field\'s value is required';                                                      // 11  // 936
    }                                                                                        // 12  // 937
  }                                                                                          // 13  // 938
});                                                                                          // 14  // 939
                                                                                             // 15  // 940
///////////////////////////////////////////////////////////////////////////////////////////////     // 941
                                                                                                    // 942
}).call(this);                                                                                      // 943
                                                                                                    // 944
                                                                                                    // 945
                                                                                                    // 946
                                                                                                    // 947
                                                                                                    // 948
                                                                                                    // 949
(function () {                                                                                      // 950
                                                                                                    // 951
///////////////////////////////////////////////////////////////////////////////////////////////     // 952
//                                                                                           //     // 953
// packages/jagi:astronomy-validators/lib/validators/existence/null.js                       //     // 954
//                                                                                           //     // 955
///////////////////////////////////////////////////////////////////////////////////////////////     // 956
                                                                                             //     // 957
Astro.createValidator({                                                                      // 1   // 958
  name: 'null',                                                                              // 2   // 959
  validate: _.isNull,                                                                        // 3   // 960
  events: {                                                                                  // 4   // 961
    validationerror: function(e) {                                                           // 5   // 962
      var fieldName = e.data.field;                                                          // 6   // 963
                                                                                             // 7   // 964
      e.data.message = 'The "' + fieldName +                                                 // 8   // 965
        '" field\'s value has to be null';                                                   // 9   // 966
    }                                                                                        // 10  // 967
  }                                                                                          // 11  // 968
});                                                                                          // 12  // 969
                                                                                             // 13  // 970
///////////////////////////////////////////////////////////////////////////////////////////////     // 971
                                                                                                    // 972
}).call(this);                                                                                      // 973
                                                                                                    // 974
                                                                                                    // 975
                                                                                                    // 976
                                                                                                    // 977
                                                                                                    // 978
                                                                                                    // 979
(function () {                                                                                      // 980
                                                                                                    // 981
///////////////////////////////////////////////////////////////////////////////////////////////     // 982
//                                                                                           //     // 983
// packages/jagi:astronomy-validators/lib/validators/existence/not_null.js                   //     // 984
//                                                                                           //     // 985
///////////////////////////////////////////////////////////////////////////////////////////////     // 986
                                                                                             //     // 987
Astro.createValidator({                                                                      // 1   // 988
  name: 'notNull',                                                                           // 2   // 989
  validate: function(fieldValue) {                                                           // 3   // 990
    return !_.isNull(fieldValue);                                                            // 4   // 991
  },                                                                                         // 5   // 992
  events: {                                                                                  // 6   // 993
    validationerror: function(e) {                                                           // 7   // 994
      var fieldName = e.data.field;                                                          // 8   // 995
                                                                                             // 9   // 996
      e.data.message = 'The "' + fieldName +                                                 // 10  // 997
        '" field\'s value can\'t be null';                                                   // 11  // 998
    }                                                                                        // 12  // 999
  }                                                                                          // 13  // 1000
});                                                                                          // 14  // 1001
                                                                                             // 15  // 1002
///////////////////////////////////////////////////////////////////////////////////////////////     // 1003
                                                                                                    // 1004
}).call(this);                                                                                      // 1005
                                                                                                    // 1006
                                                                                                    // 1007
                                                                                                    // 1008
                                                                                                    // 1009
                                                                                                    // 1010
                                                                                                    // 1011
(function () {                                                                                      // 1012
                                                                                                    // 1013
///////////////////////////////////////////////////////////////////////////////////////////////     // 1014
//                                                                                           //     // 1015
// packages/jagi:astronomy-validators/lib/validators/existence/has.js                        //     // 1016
//                                                                                           //     // 1017
///////////////////////////////////////////////////////////////////////////////////////////////     // 1018
                                                                                             //     // 1019
Astro.createValidator({                                                                      // 1   // 1020
  name: 'has',                                                                               // 2   // 1021
  validate: function(fieldValue, fieldName, propertyName) {                                  // 3   // 1022
    return _.has(fieldValue, propertyName);                                                  // 4   // 1023
  },                                                                                         // 5   // 1024
  events: {                                                                                  // 6   // 1025
    validationerror: function(e) {                                                           // 7   // 1026
      var fieldName = e.data.field;                                                          // 8   // 1027
      var propertyName = e.data.options;                                                     // 9   // 1028
                                                                                             // 10  // 1029
      e.data.message = 'The "' + fieldName +                                                 // 11  // 1030
        '" field\'s value has to have "' + propertyName + '" property';                      // 12  // 1031
    }                                                                                        // 13  // 1032
  }                                                                                          // 14  // 1033
});                                                                                          // 15  // 1034
                                                                                             // 16  // 1035
///////////////////////////////////////////////////////////////////////////////////////////////     // 1036
                                                                                                    // 1037
}).call(this);                                                                                      // 1038
                                                                                                    // 1039
                                                                                                    // 1040
                                                                                                    // 1041
                                                                                                    // 1042
                                                                                                    // 1043
                                                                                                    // 1044
(function () {                                                                                      // 1045
                                                                                                    // 1046
///////////////////////////////////////////////////////////////////////////////////////////////     // 1047
//                                                                                           //     // 1048
// packages/jagi:astronomy-validators/lib/validators/size/length.js                          //     // 1049
//                                                                                           //     // 1050
///////////////////////////////////////////////////////////////////////////////////////////////     // 1051
                                                                                             //     // 1052
Astro.createValidator({                                                                      // 1   // 1053
  name: 'length',                                                                            // 2   // 1054
  validate: function(fieldValue, fieldName, length) {                                        // 3   // 1055
    if (!fieldValue) {                                                                       // 4   // 1056
      return false;                                                                          // 5   // 1057
    }                                                                                        // 6   // 1058
                                                                                             // 7   // 1059
    return fieldValue.length === length;                                                     // 8   // 1060
  },                                                                                         // 9   // 1061
  events: {                                                                                  // 10  // 1062
    validationerror: function(e) {                                                           // 11  // 1063
      var fieldName = e.data.field;                                                          // 12  // 1064
      var length = e.data.options;                                                           // 13  // 1065
                                                                                             // 14  // 1066
      e.data.message = 'The "' + fieldName +                                                 // 15  // 1067
        '" field\'s value length has to be ' + length;                                       // 16  // 1068
    }                                                                                        // 17  // 1069
  }                                                                                          // 18  // 1070
});                                                                                          // 19  // 1071
                                                                                             // 20  // 1072
///////////////////////////////////////////////////////////////////////////////////////////////     // 1073
                                                                                                    // 1074
}).call(this);                                                                                      // 1075
                                                                                                    // 1076
                                                                                                    // 1077
                                                                                                    // 1078
                                                                                                    // 1079
                                                                                                    // 1080
                                                                                                    // 1081
(function () {                                                                                      // 1082
                                                                                                    // 1083
///////////////////////////////////////////////////////////////////////////////////////////////     // 1084
//                                                                                           //     // 1085
// packages/jagi:astronomy-validators/lib/validators/size/min_length.js                      //     // 1086
//                                                                                           //     // 1087
///////////////////////////////////////////////////////////////////////////////////////////////     // 1088
                                                                                             //     // 1089
Astro.createValidator({                                                                      // 1   // 1090
  name: 'minLength',                                                                         // 2   // 1091
  validate: function(fieldValue, fieldName, minLength) {                                     // 3   // 1092
    if (!fieldValue) {                                                                       // 4   // 1093
      return false;                                                                          // 5   // 1094
    }                                                                                        // 6   // 1095
                                                                                             // 7   // 1096
    return fieldValue.length >= minLength;                                                   // 8   // 1097
  },                                                                                         // 9   // 1098
  events: {                                                                                  // 10  // 1099
    validationerror: function(e) {                                                           // 11  // 1100
      var fieldName = e.data.field;                                                          // 12  // 1101
      var minLength = e.data.options;                                                        // 13  // 1102
                                                                                             // 14  // 1103
      e.data.message = 'The "' + fieldName +                                                 // 15  // 1104
        '" field\'s value length has to be at least ' + minLength;                           // 16  // 1105
    }                                                                                        // 17  // 1106
  }                                                                                          // 18  // 1107
});                                                                                          // 19  // 1108
                                                                                             // 20  // 1109
///////////////////////////////////////////////////////////////////////////////////////////////     // 1110
                                                                                                    // 1111
}).call(this);                                                                                      // 1112
                                                                                                    // 1113
                                                                                                    // 1114
                                                                                                    // 1115
                                                                                                    // 1116
                                                                                                    // 1117
                                                                                                    // 1118
(function () {                                                                                      // 1119
                                                                                                    // 1120
///////////////////////////////////////////////////////////////////////////////////////////////     // 1121
//                                                                                           //     // 1122
// packages/jagi:astronomy-validators/lib/validators/size/max_length.js                      //     // 1123
//                                                                                           //     // 1124
///////////////////////////////////////////////////////////////////////////////////////////////     // 1125
                                                                                             //     // 1126
Astro.createValidator({                                                                      // 1   // 1127
  name: 'maxLength',                                                                         // 2   // 1128
  validate: function(fieldValue, fieldName, maxLength) {                                     // 3   // 1129
    if (_.isNull(fieldValue) || _.isUndefined(fieldValue) || !_.has(fieldValue, 'length')) { // 4   // 1130
      return false;                                                                          // 5   // 1131
    }                                                                                        // 6   // 1132
                                                                                             // 7   // 1133
    return fieldValue.length <= maxLength;                                                   // 8   // 1134
  },                                                                                         // 9   // 1135
  events: {                                                                                  // 10  // 1136
    validationerror: function(e) {                                                           // 11  // 1137
      var fieldName = e.data.field;                                                          // 12  // 1138
      var maxLength = e.data.options;                                                        // 13  // 1139
                                                                                             // 14  // 1140
      e.data.message = 'The "' + fieldName +                                                 // 15  // 1141
        '" field\'s value length has to be at most ' + maxLength;                            // 16  // 1142
    }                                                                                        // 17  // 1143
  }                                                                                          // 18  // 1144
});                                                                                          // 19  // 1145
                                                                                             // 20  // 1146
///////////////////////////////////////////////////////////////////////////////////////////////     // 1147
                                                                                                    // 1148
}).call(this);                                                                                      // 1149
                                                                                                    // 1150
                                                                                                    // 1151
                                                                                                    // 1152
                                                                                                    // 1153
                                                                                                    // 1154
                                                                                                    // 1155
(function () {                                                                                      // 1156
                                                                                                    // 1157
///////////////////////////////////////////////////////////////////////////////////////////////     // 1158
//                                                                                           //     // 1159
// packages/jagi:astronomy-validators/lib/validators/size/gt.js                              //     // 1160
//                                                                                           //     // 1161
///////////////////////////////////////////////////////////////////////////////////////////////     // 1162
                                                                                             //     // 1163
Astro.createValidator({                                                                      // 1   // 1164
  name: 'gt',                                                                                // 2   // 1165
  validate: function(fieldValue, fieldName, compareValue) {                                  // 3   // 1166
    if (_.isFunction(compareValue)) {                                                        // 4   // 1167
      compareValue = compareValue.call(this);                                                // 5   // 1168
    }                                                                                        // 6   // 1169
                                                                                             // 7   // 1170
    return fieldValue > compareValue;                                                        // 8   // 1171
  },                                                                                         // 9   // 1172
  events: {                                                                                  // 10  // 1173
    validationerror: function(e) {                                                           // 11  // 1174
      var fieldName = e.data.field;                                                          // 12  // 1175
      var compareValue = e.data.options;                                                     // 13  // 1176
                                                                                             // 14  // 1177
      if (_.isFunction(compareValue)) {                                                      // 15  // 1178
        compareValue = compareValue.call(this);                                              // 16  // 1179
      }                                                                                      // 17  // 1180
                                                                                             // 18  // 1181
      e.data.message = 'The "' + fieldName +                                                 // 19  // 1182
        '" field\'s value has to be greater than "' + compareValue + '"';                    // 20  // 1183
    }                                                                                        // 21  // 1184
  }                                                                                          // 22  // 1185
});                                                                                          // 23  // 1186
                                                                                             // 24  // 1187
///////////////////////////////////////////////////////////////////////////////////////////////     // 1188
                                                                                                    // 1189
}).call(this);                                                                                      // 1190
                                                                                                    // 1191
                                                                                                    // 1192
                                                                                                    // 1193
                                                                                                    // 1194
                                                                                                    // 1195
                                                                                                    // 1196
(function () {                                                                                      // 1197
                                                                                                    // 1198
///////////////////////////////////////////////////////////////////////////////////////////////     // 1199
//                                                                                           //     // 1200
// packages/jagi:astronomy-validators/lib/validators/size/gte.js                             //     // 1201
//                                                                                           //     // 1202
///////////////////////////////////////////////////////////////////////////////////////////////     // 1203
                                                                                             //     // 1204
Astro.createValidator({                                                                      // 1   // 1205
  name: 'gte',                                                                               // 2   // 1206
  validate: function(fieldValue, fieldName, compareValue) {                                  // 3   // 1207
    if (_.isFunction(compareValue)) {                                                        // 4   // 1208
      compareValue = compareValue.call(this);                                                // 5   // 1209
    }                                                                                        // 6   // 1210
                                                                                             // 7   // 1211
    return fieldValue >= compareValue;                                                       // 8   // 1212
  },                                                                                         // 9   // 1213
  events: {                                                                                  // 10  // 1214
    validationerror: function(e) {                                                           // 11  // 1215
      var fieldName = e.data.field;                                                          // 12  // 1216
      var compareValue = e.data.options;                                                     // 13  // 1217
                                                                                             // 14  // 1218
      if (_.isFunction(compareValue)) {                                                      // 15  // 1219
        compareValue = compareValue.call(this);                                              // 16  // 1220
      }                                                                                      // 17  // 1221
                                                                                             // 18  // 1222
      e.data.message = 'The "' + fieldName +                                                 // 19  // 1223
        '" field\'s value has to be greater than or equal "' +                               // 20  // 1224
        compareValue + '"';                                                                  // 21  // 1225
    }                                                                                        // 22  // 1226
  }                                                                                          // 23  // 1227
});                                                                                          // 24  // 1228
                                                                                             // 25  // 1229
///////////////////////////////////////////////////////////////////////////////////////////////     // 1230
                                                                                                    // 1231
}).call(this);                                                                                      // 1232
                                                                                                    // 1233
                                                                                                    // 1234
                                                                                                    // 1235
                                                                                                    // 1236
                                                                                                    // 1237
                                                                                                    // 1238
(function () {                                                                                      // 1239
                                                                                                    // 1240
///////////////////////////////////////////////////////////////////////////////////////////////     // 1241
//                                                                                           //     // 1242
// packages/jagi:astronomy-validators/lib/validators/size/lt.js                              //     // 1243
//                                                                                           //     // 1244
///////////////////////////////////////////////////////////////////////////////////////////////     // 1245
                                                                                             //     // 1246
Astro.createValidator({                                                                      // 1   // 1247
  name: 'lt',                                                                                // 2   // 1248
  validate: function(fieldValue, fieldName, compareValue) {                                  // 3   // 1249
    if (_.isFunction(compareValue)) {                                                        // 4   // 1250
      compareValue = compareValue.call(this);                                                // 5   // 1251
    }                                                                                        // 6   // 1252
                                                                                             // 7   // 1253
    return fieldValue < compareValue;                                                        // 8   // 1254
  },                                                                                         // 9   // 1255
  events: {                                                                                  // 10  // 1256
    validationerror: function(e) {                                                           // 11  // 1257
      var fieldName = e.data.field;                                                          // 12  // 1258
      var compareValue = e.data.options;                                                     // 13  // 1259
                                                                                             // 14  // 1260
      if (_.isFunction(compareValue)) {                                                      // 15  // 1261
        compareValue = compareValue.call(this);                                              // 16  // 1262
      }                                                                                      // 17  // 1263
                                                                                             // 18  // 1264
      e.data.message = 'The "' + fieldName +                                                 // 19  // 1265
        '" field\'s value has to be less than "' + compareValue + '"';                       // 20  // 1266
    }                                                                                        // 21  // 1267
  }                                                                                          // 22  // 1268
});                                                                                          // 23  // 1269
                                                                                             // 24  // 1270
///////////////////////////////////////////////////////////////////////////////////////////////     // 1271
                                                                                                    // 1272
}).call(this);                                                                                      // 1273
                                                                                                    // 1274
                                                                                                    // 1275
                                                                                                    // 1276
                                                                                                    // 1277
                                                                                                    // 1278
                                                                                                    // 1279
(function () {                                                                                      // 1280
                                                                                                    // 1281
///////////////////////////////////////////////////////////////////////////////////////////////     // 1282
//                                                                                           //     // 1283
// packages/jagi:astronomy-validators/lib/validators/size/lte.js                             //     // 1284
//                                                                                           //     // 1285
///////////////////////////////////////////////////////////////////////////////////////////////     // 1286
                                                                                             //     // 1287
Astro.createValidator({                                                                      // 1   // 1288
  name: 'lte',                                                                               // 2   // 1289
  validate: function(fieldValue, fieldName, compareValue) {                                  // 3   // 1290
    if (_.isFunction(compareValue)) {                                                        // 4   // 1291
      compareValue = compareValue.call(this);                                                // 5   // 1292
    }                                                                                        // 6   // 1293
                                                                                             // 7   // 1294
    return fieldValue <= compareValue;                                                       // 8   // 1295
  },                                                                                         // 9   // 1296
  events: {                                                                                  // 10  // 1297
    validationerror: function(e) {                                                           // 11  // 1298
      var fieldName = e.data.field;                                                          // 12  // 1299
      var compareValue = e.data.options;                                                     // 13  // 1300
                                                                                             // 14  // 1301
      if (_.isFunction(compareValue)) {                                                      // 15  // 1302
        compareValue = compareValue.call(this);                                              // 16  // 1303
      }                                                                                      // 17  // 1304
                                                                                             // 18  // 1305
      e.data.message = 'The "' + fieldName +                                                 // 19  // 1306
        '" field\'s value has to be less than or equal "' + compareValue +                   // 20  // 1307
        '"';                                                                                 // 21  // 1308
    }                                                                                        // 22  // 1309
  }                                                                                          // 23  // 1310
});                                                                                          // 24  // 1311
                                                                                             // 25  // 1312
///////////////////////////////////////////////////////////////////////////////////////////////     // 1313
                                                                                                    // 1314
}).call(this);                                                                                      // 1315
                                                                                                    // 1316
                                                                                                    // 1317
                                                                                                    // 1318
                                                                                                    // 1319
                                                                                                    // 1320
                                                                                                    // 1321
(function () {                                                                                      // 1322
                                                                                                    // 1323
///////////////////////////////////////////////////////////////////////////////////////////////     // 1324
//                                                                                           //     // 1325
// packages/jagi:astronomy-validators/lib/validators/comparison/choice.js                    //     // 1326
//                                                                                           //     // 1327
///////////////////////////////////////////////////////////////////////////////////////////////     // 1328
                                                                                             //     // 1329
Astro.createValidator({                                                                      // 1   // 1330
  name: 'choice',                                                                            // 2   // 1331
  validate: function(fieldValue, fieldName, choices) {                                       // 3   // 1332
    return _.contains(choices, fieldValue);                                                  // 4   // 1333
  },                                                                                         // 5   // 1334
  events: {                                                                                  // 6   // 1335
    validationerror: function(e) {                                                           // 7   // 1336
      var fieldName = e.data.field;                                                          // 8   // 1337
      var choices = e.data.options;                                                          // 9   // 1338
                                                                                             // 10  // 1339
      e.data.message = 'The "' + fieldName +                                                 // 11  // 1340
        '" field\'s value has to be one of "' + choices.join('", "') +                       // 12  // 1341
        '"';                                                                                 // 13  // 1342
    }                                                                                        // 14  // 1343
  }                                                                                          // 15  // 1344
});                                                                                          // 16  // 1345
                                                                                             // 17  // 1346
///////////////////////////////////////////////////////////////////////////////////////////////     // 1347
                                                                                                    // 1348
}).call(this);                                                                                      // 1349
                                                                                                    // 1350
                                                                                                    // 1351
                                                                                                    // 1352
                                                                                                    // 1353
                                                                                                    // 1354
                                                                                                    // 1355
(function () {                                                                                      // 1356
                                                                                                    // 1357
///////////////////////////////////////////////////////////////////////////////////////////////     // 1358
//                                                                                           //     // 1359
// packages/jagi:astronomy-validators/lib/validators/comparison/unique.js                    //     // 1360
//                                                                                           //     // 1361
///////////////////////////////////////////////////////////////////////////////////////////////     // 1362
                                                                                             //     // 1363
Astro.createValidator({                                                                      // 1   // 1364
  name: 'unique',                                                                            // 2   // 1365
  validate: function(fieldValue, fieldName) {                                                // 3   // 1366
    var Collection = this.constructor.getCollection();                                       // 4   // 1367
                                                                                             // 5   // 1368
    // If a Class is not related with any collection then document is unique.                // 6   // 1369
    if (!Collection) {                                                                       // 7   // 1370
      return true;                                                                           // 8   // 1371
    }                                                                                        // 9   // 1372
                                                                                             // 10  // 1373
    // The unique validator is used only during insert operation. If the "_id"               // 11  // 1374
    // fields is present, then object is being updated not inserted.                         // 12  // 1375
    if (this._id) {                                                                          // 13  // 1376
      return true;                                                                           // 14  // 1377
    }                                                                                        // 15  // 1378
                                                                                             // 16  // 1379
    // Prepare selector.                                                                     // 17  // 1380
    var selector = {};                                                                       // 18  // 1381
    selector[fieldName] = fieldValue;                                                        // 19  // 1382
                                                                                             // 20  // 1383
    // Check if a record with the given field value exists.                                  // 21  // 1384
    return _.isUndefined(Collection.findOne(selector));                                      // 22  // 1385
  },                                                                                         // 23  // 1386
  events: {                                                                                  // 24  // 1387
    validationerror: function(e) {                                                           // 25  // 1388
      var fieldName = e.data.field;                                                          // 26  // 1389
                                                                                             // 27  // 1390
      e.data.message = 'The "' + fieldName +                                                 // 28  // 1391
        '" field\'s value has to be unique';                                                 // 29  // 1392
    }                                                                                        // 30  // 1393
  }                                                                                          // 31  // 1394
});                                                                                          // 32  // 1395
                                                                                             // 33  // 1396
///////////////////////////////////////////////////////////////////////////////////////////////     // 1397
                                                                                                    // 1398
}).call(this);                                                                                      // 1399
                                                                                                    // 1400
                                                                                                    // 1401
                                                                                                    // 1402
                                                                                                    // 1403
                                                                                                    // 1404
                                                                                                    // 1405
(function () {                                                                                      // 1406
                                                                                                    // 1407
///////////////////////////////////////////////////////////////////////////////////////////////     // 1408
//                                                                                           //     // 1409
// packages/jagi:astronomy-validators/lib/validators/comparison/equal.js                     //     // 1410
//                                                                                           //     // 1411
///////////////////////////////////////////////////////////////////////////////////////////////     // 1412
                                                                                             //     // 1413
Astro.createValidator({                                                                      // 1   // 1414
  name: 'equal',                                                                             // 2   // 1415
  validate: function(fieldValue, fieldName, compareValue) {                                  // 3   // 1416
    if (_.isFunction(compareValue)) {                                                        // 4   // 1417
      compareValue = compareValue.call(this);                                                // 5   // 1418
    }                                                                                        // 6   // 1419
                                                                                             // 7   // 1420
    return fieldValue === compareValue;                                                      // 8   // 1421
  },                                                                                         // 9   // 1422
  events: {                                                                                  // 10  // 1423
    validationerror: function(e) {                                                           // 11  // 1424
      var fieldName = e.data.field;                                                          // 12  // 1425
      var compareValue = e.data.options;                                                     // 13  // 1426
                                                                                             // 14  // 1427
      if (_.isFunction(compareValue)) {                                                      // 15  // 1428
        compareValue = compareValue.call(this);                                              // 16  // 1429
      }                                                                                      // 17  // 1430
                                                                                             // 18  // 1431
      e.data.message = 'The "' + fieldName +                                                 // 19  // 1432
        '" field\'s value has to be equal "' + compareValue + '"';                           // 20  // 1433
    }                                                                                        // 21  // 1434
  }                                                                                          // 22  // 1435
});                                                                                          // 23  // 1436
                                                                                             // 24  // 1437
///////////////////////////////////////////////////////////////////////////////////////////////     // 1438
                                                                                                    // 1439
}).call(this);                                                                                      // 1440
                                                                                                    // 1441
                                                                                                    // 1442
                                                                                                    // 1443
                                                                                                    // 1444
                                                                                                    // 1445
                                                                                                    // 1446
(function () {                                                                                      // 1447
                                                                                                    // 1448
///////////////////////////////////////////////////////////////////////////////////////////////     // 1449
//                                                                                           //     // 1450
// packages/jagi:astronomy-validators/lib/validators/comparison/equal_to.js                  //     // 1451
//                                                                                           //     // 1452
///////////////////////////////////////////////////////////////////////////////////////////////     // 1453
                                                                                             //     // 1454
Astro.createValidator({                                                                      // 1   // 1455
  name: 'equalTo',                                                                           // 2   // 1456
  validate: function(fieldValue, fieldName, compareFieldName) {                              // 3   // 1457
    var compareValue = this.get(compareFieldName);                                           // 4   // 1458
                                                                                             // 5   // 1459
    return fieldValue === compareValue;                                                      // 6   // 1460
  },                                                                                         // 7   // 1461
  events: {                                                                                  // 8   // 1462
    validationerror: function(e) {                                                           // 9   // 1463
      var fieldName = e.data.field;                                                          // 10  // 1464
      var compareValue = e.data.options;                                                     // 11  // 1465
                                                                                             // 12  // 1466
      if (_.isFunction(compareValue)) {                                                      // 13  // 1467
        compareValue = compareValue.call(this);                                              // 14  // 1468
      }                                                                                      // 15  // 1469
                                                                                             // 16  // 1470
      e.data.message = 'The "' + fieldName + '" and "' + compareValue +                      // 17  // 1471
        '" field\'s values have to be equal';                                                // 18  // 1472
    }                                                                                        // 19  // 1473
  }                                                                                          // 20  // 1474
});                                                                                          // 21  // 1475
                                                                                             // 22  // 1476
///////////////////////////////////////////////////////////////////////////////////////////////     // 1477
                                                                                                    // 1478
}).call(this);                                                                                      // 1479
                                                                                                    // 1480
                                                                                                    // 1481
                                                                                                    // 1482
                                                                                                    // 1483
                                                                                                    // 1484
                                                                                                    // 1485
(function () {                                                                                      // 1486
                                                                                                    // 1487
///////////////////////////////////////////////////////////////////////////////////////////////     // 1488
//                                                                                           //     // 1489
// packages/jagi:astronomy-validators/lib/validators/comparison/regexp.js                    //     // 1490
//                                                                                           //     // 1491
///////////////////////////////////////////////////////////////////////////////////////////////     // 1492
                                                                                             //     // 1493
Astro.createValidator({                                                                      // 1   // 1494
  name: 'regexp',                                                                            // 2   // 1495
  validate: function(fieldValue, fieldName, pattern) {                                       // 3   // 1496
    return pattern.test(fieldValue);                                                         // 4   // 1497
  },                                                                                         // 5   // 1498
  events: {                                                                                  // 6   // 1499
    validationerror: function(e) {                                                           // 7   // 1500
      var fieldName = e.data.field;                                                          // 8   // 1501
      var pattern = e.data.options.toString();                                               // 9   // 1502
                                                                                             // 10  // 1503
      e.data.message = 'The "' + fieldName +                                                 // 11  // 1504
        '" field\'s value has to match "' + pattern +                                        // 12  // 1505
        '" regular expression';                                                              // 13  // 1506
    }                                                                                        // 14  // 1507
  }                                                                                          // 15  // 1508
});                                                                                          // 16  // 1509
                                                                                             // 17  // 1510
///////////////////////////////////////////////////////////////////////////////////////////////     // 1511
                                                                                                    // 1512
}).call(this);                                                                                      // 1513
                                                                                                    // 1514
                                                                                                    // 1515
                                                                                                    // 1516
                                                                                                    // 1517
                                                                                                    // 1518
                                                                                                    // 1519
(function () {                                                                                      // 1520
                                                                                                    // 1521
///////////////////////////////////////////////////////////////////////////////////////////////     // 1522
//                                                                                           //     // 1523
// packages/jagi:astronomy-validators/lib/validators/logical/and.js                          //     // 1524
//                                                                                           //     // 1525
///////////////////////////////////////////////////////////////////////////////////////////////     // 1526
                                                                                             //     // 1527
Astro.createValidator({                                                                      // 1   // 1528
  name: 'and',                                                                               // 2   // 1529
  validate: function(fieldValue, fieldName, validators) {                                    // 3   // 1530
    var error;                                                                               // 4   // 1531
    var doc = this;                                                                          // 5   // 1532
                                                                                             // 6   // 1533
    var isValid = _.every(validators, function(validator, index) {                           // 7   // 1534
      try {                                                                                  // 8   // 1535
        var isValid = validator.call(doc, fieldValue, fieldName);                            // 9   // 1536
        if (!isValid && !error) {                                                            // 10  // 1537
          error = new ValidationError([{                                                     // 11  // 1538
            validator: validator,                                                            // 12  // 1539
            patternOrFieldName: fieldName,                                                   // 13  // 1540
            fieldValue: fieldValue,                                                          // 14  // 1541
            name: validator.definition.name                                                  // 15  // 1542
          }]);                                                                               // 16  // 1543
        }                                                                                    // 17  // 1544
        return isValid;                                                                      // 18  // 1545
      } catch (e) {                                                                          // 19  // 1546
        if (!error) {                                                                        // 20  // 1547
          error = e;                                                                         // 21  // 1548
        }                                                                                    // 22  // 1549
        return false;                                                                        // 23  // 1550
      }                                                                                      // 24  // 1551
    });                                                                                      // 25  // 1552
                                                                                             // 26  // 1553
    if (!isValid && error) {                                                                 // 27  // 1554
      throw error;                                                                           // 28  // 1555
    }                                                                                        // 29  // 1556
                                                                                             // 30  // 1557
    return isValid;                                                                          // 31  // 1558
  }                                                                                          // 32  // 1559
});                                                                                          // 33  // 1560
                                                                                             // 34  // 1561
///////////////////////////////////////////////////////////////////////////////////////////////     // 1562
                                                                                                    // 1563
}).call(this);                                                                                      // 1564
                                                                                                    // 1565
                                                                                                    // 1566
                                                                                                    // 1567
                                                                                                    // 1568
                                                                                                    // 1569
                                                                                                    // 1570
(function () {                                                                                      // 1571
                                                                                                    // 1572
///////////////////////////////////////////////////////////////////////////////////////////////     // 1573
//                                                                                           //     // 1574
// packages/jagi:astronomy-validators/lib/validators/logical/or.js                           //     // 1575
//                                                                                           //     // 1576
///////////////////////////////////////////////////////////////////////////////////////////////     // 1577
                                                                                             //     // 1578
Astro.createValidator({                                                                      // 1   // 1579
  name: 'or',                                                                                // 2   // 1580
  validate: function(fieldValue, fieldName, validators) {                                    // 3   // 1581
    var error;                                                                               // 4   // 1582
    var doc = this;                                                                          // 5   // 1583
                                                                                             // 6   // 1584
    var isValid = _.some(validators, function(validator, index) {                            // 7   // 1585
      try {                                                                                  // 8   // 1586
        var isValid = validator.call(doc, fieldValue, fieldName);                            // 9   // 1587
        if (!isValid && !error) {                                                            // 10  // 1588
          error = new ValidationError([{                                                     // 11  // 1589
            validator: validator,                                                            // 12  // 1590
            patternOrFieldName: fieldName,                                                   // 13  // 1591
            fieldValue: fieldValue,                                                          // 14  // 1592
            name: validator.definition.name                                                  // 15  // 1593
          }]);                                                                               // 16  // 1594
        }                                                                                    // 17  // 1595
        return isValid;                                                                      // 18  // 1596
      } catch (e) {                                                                          // 19  // 1597
        if (!error) {                                                                        // 20  // 1598
          error = e;                                                                         // 21  // 1599
        }                                                                                    // 22  // 1600
        return false;                                                                        // 23  // 1601
      }                                                                                      // 24  // 1602
    });                                                                                      // 25  // 1603
                                                                                             // 26  // 1604
    if (!isValid && error) {                                                                 // 27  // 1605
      throw error;                                                                           // 28  // 1606
    }                                                                                        // 29  // 1607
                                                                                             // 30  // 1608
    return isValid;                                                                          // 31  // 1609
  }                                                                                          // 32  // 1610
});                                                                                          // 33  // 1611
                                                                                             // 34  // 1612
///////////////////////////////////////////////////////////////////////////////////////////////     // 1613
                                                                                                    // 1614
}).call(this);                                                                                      // 1615
                                                                                                    // 1616
//////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['jagi:astronomy-validators'] = {
  Validators: Validators
};

})();
