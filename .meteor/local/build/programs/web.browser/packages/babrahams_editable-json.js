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
var Template = Package.templating.Template;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var ReactiveDict = Package['reactive-dict'].ReactiveDict;
var _ = Package.underscore._;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var EditableJSON, doUpdate, EditableJSONStore, EditableJSONInternal, key, parentElem, parentSiblingElem;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/babrahams_editable-json/packages/babrahams_editable-json //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {                                                       // 1
                                                                     // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/babrahams:editable-json/editable-json-common.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
if (_.isUndefined(EditableJSON)) {                                                                                     // 1
  EditableJSON = {};                                                                                                   // 2
}                                                                                                                      // 3
                                                                                                                       // 4
EditableJSON.collection = function (collectionName) {                                                                  // 5
  return EditableJSON.collection(collectionName);                                                                      // 6
}                                                                                                                      // 7
                                                                                                                       // 8
doUpdate = function (collectionName, _id, action) {                                                                    // 9
                                                                                                                       // 10
  var Collection = EditableJSON.collection(collectionName);                                                            // 11
  var updated = 0;                                                                                                     // 12
                                                                                                                       // 13
  try {                                                                                                                // 14
                                                                                                                       // 15
    if (!!Package['aldeed:simple-schema'] && !!Package['aldeed:collection2'] && _.isFunction(Collection.simpleSchema) && Collection._c2) {
                                                                                                                       // 17
      updated = Collection.update(_id, action, {                                                                       // 18
        filter: false,                                                                                                 // 19
        autoConvert: false,                                                                                            // 20
        removeEmptyStrings: false,                                                                                     // 21
        validate: false                                                                                                // 22
      });                                                                                                              // 23
                                                                                                                       // 24
    }                                                                                                                  // 25
                                                                                                                       // 26
    else {                                                                                                             // 27
                                                                                                                       // 28
      updated = Collection.update(_id, action);                                                                        // 29
                                                                                                                       // 30
    }                                                                                                                  // 31
                                                                                                                       // 32
  }                                                                                                                    // 33
                                                                                                                       // 34
  catch (err) {                                                                                                        // 35
    if (!(Meteor.isClient && action.$set && _.keys(action.$set)[0].indexOf('newField') > -1)) {                        // 36
      throw new Meteor.Error(err);                                                                                     // 37
    }                                                                                                                  // 38
  }                                                                                                                    // 39
                                                                                                                       // 40
  return updated;                                                                                                      // 41
}                                                                                                                      // 42
                                                                                                                       // 43
Meteor.methods({                                                                                                       // 44
                                                                                                                       // 45
  editableJSON_update: function (collectionName, _id, action) {                                                        // 46
                                                                                                                       // 47
    check(collectionName, String);                                                                                     // 48
    check(_id, String);                                                                                                // 49
    check(action, Object);                                                                                             // 50
                                                                                                                       // 51
    return doUpdate(collectionName, _id, action);                                                                      // 52
                                                                                                                       // 53
  }                                                                                                                    // 54
                                                                                                                       // 55
});                                                                                                                    // 56
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 66
}).call(this);                                                       // 67
                                                                     // 68
                                                                     // 69
                                                                     // 70
                                                                     // 71
                                                                     // 72
                                                                     // 73
(function () {                                                       // 74
                                                                     // 75
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/babrahams:editable-json/template.editable-json.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("editableJSON");                                                                                  // 2
Template["editableJSON"] = new Template("Template.editableJSON", (function() {                                         // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "editable-JSON"                                                                                           // 6
  }, HTML.DIV({                                                                                                        // 7
    "class": "editable-JSON-click-zone editable-JSON-top-level"                                                        // 8
  }, Blaze.If(function() {                                                                                             // 9
    return Spacebars.call(view.lookup("collection"));                                                                  // 10
  }, function() {                                                                                                      // 11
    return Spacebars.With(function() {                                                                                 // 12
      return Spacebars.call(view.lookup("document"));                                                                  // 13
    }, function() {                                                                                                    // 14
      return Spacebars.include(view.lookupTemplate("editable_JSON_object"));                                           // 15
    });                                                                                                                // 16
  }, function() {                                                                                                      // 17
    return Spacebars.With(function() {                                                                                 // 18
      return Spacebars.call(view.lookup("observe"));                                                                   // 19
    }, function() {                                                                                                    // 20
      return [ Blaze.View("lookup:watcher", function() {                                                               // 21
        return Spacebars.mustache(view.lookup("watcher"));                                                             // 22
      }), Spacebars.include(view.lookupTemplate("editable_JSON_object")) ];                                            // 23
    }, function() {                                                                                                    // 24
      return Spacebars.With(function() {                                                                               // 25
        return Spacebars.call(view.lookup("json"));                                                                    // 26
      }, function() {                                                                                                  // 27
        return Spacebars.include(view.lookupTemplate("editable_JSON_object"));                                         // 28
      }, function() {                                                                                                  // 29
        return Spacebars.include(view.lookupTemplate("editable_JSON_object"));                                         // 30
      });                                                                                                              // 31
    });                                                                                                                // 32
  })));                                                                                                                // 33
}));                                                                                                                   // 34
                                                                                                                       // 35
Template.__checkName("editable_JSON");                                                                                 // 36
Template["editable_JSON"] = new Template("Template.editable_JSON", (function() {                                       // 37
  var view = this;                                                                                                     // 38
  return Blaze.Each(function() {                                                                                       // 39
    return Spacebars.call(view.lookup("fields"));                                                                      // 40
  }, function() {                                                                                                      // 41
    return HTML.DIV({                                                                                                  // 42
      "class": "editable-JSON-click-zone"                                                                              // 43
    }, Spacebars.With(function() {                                                                                     // 44
      return Spacebars.call(view.lookup("field"));                                                                     // 45
    }, function() {                                                                                                    // 46
      return [ HTML.SPAN({                                                                                             // 47
        "class": function() {                                                                                          // 48
          return [ "editable-JSON-field ", Spacebars.mustache(view.lookup("_idClass")) ];                              // 49
        }                                                                                                              // 50
      }, '"', Spacebars.With(function() {                                                                              // 51
        return Spacebars.call(view.lookup("editingField"));                                                            // 52
      }, function() {                                                                                                  // 53
        return HTML.INPUT({                                                                                            // 54
          type: "text",                                                                                                // 55
          value: function() {                                                                                          // 56
            return Spacebars.mustache(view.lookup("."));                                                               // 57
          }                                                                                                            // 58
        });                                                                                                            // 59
      }, function() {                                                                                                  // 60
        return HTML.SPAN({                                                                                             // 61
          "class": "editable-JSON-field-text"                                                                          // 62
        }, Blaze.View("lookup:.", function() {                                                                         // 63
          return Spacebars.mustache(view.lookup("."));                                                                 // 64
        }));                                                                                                           // 65
      }), '":'), HTML.CharRef({                                                                                        // 66
        html: "&nbsp;",                                                                                                // 67
        str: " "                                                                                                       // 68
      }) ];                                                                                                            // 69
    }), Spacebars.With(function() {                                                                                    // 70
      return Spacebars.call(view.lookup("value"));                                                                     // 71
    }, function() {                                                                                                    // 72
      return Blaze.If(function() {                                                                                     // 73
        return Spacebars.call(view.lookup("isArray"));                                                                 // 74
      }, function() {                                                                                                  // 75
        return Blaze._TemplateWith(function() {                                                                        // 76
          return Spacebars.call(view.lookup("val"));                                                                   // 77
        }, function() {                                                                                                // 78
          return Spacebars.include(view.lookupTemplate("editable_JSON_array"));                                        // 79
        });                                                                                                            // 80
      }, function() {                                                                                                  // 81
        return Blaze.If(function() {                                                                                   // 82
          return Spacebars.call(view.lookup("isDate"));                                                                // 83
        }, function() {                                                                                                // 84
          return Blaze._TemplateWith(function() {                                                                      // 85
            return Spacebars.call(view.lookup("val"));                                                                 // 86
          }, function() {                                                                                              // 87
            return Spacebars.include(view.lookupTemplate("editable_JSON_date"));                                       // 88
          });                                                                                                          // 89
        }, function() {                                                                                                // 90
          return Blaze.If(function() {                                                                                 // 91
            return Spacebars.call(view.lookup("isString"));                                                            // 92
          }, function() {                                                                                              // 93
            return Blaze._TemplateWith(function() {                                                                    // 94
              return Spacebars.call(view.lookup("val"));                                                               // 95
            }, function() {                                                                                            // 96
              return Spacebars.include(view.lookupTemplate("editable_JSON_string"));                                   // 97
            });                                                                                                        // 98
          }, function() {                                                                                              // 99
            return Blaze.If(function() {                                                                               // 100
              return Spacebars.call(view.lookup("isBoolean"));                                                         // 101
            }, function() {                                                                                            // 102
              return Blaze._TemplateWith(function() {                                                                  // 103
                return Spacebars.call(view.lookup("val"));                                                             // 104
              }, function() {                                                                                          // 105
                return Spacebars.include(view.lookupTemplate("editable_JSON_boolean"));                                // 106
              });                                                                                                      // 107
            }, function() {                                                                                            // 108
              return Blaze.If(function() {                                                                             // 109
                return Spacebars.call(view.lookup("isObject"));                                                        // 110
              }, function() {                                                                                          // 111
                return Blaze._TemplateWith(function() {                                                                // 112
                  return Spacebars.call(view.lookup("val"));                                                           // 113
                }, function() {                                                                                        // 114
                  return Spacebars.include(view.lookupTemplate("editable_JSON_object"));                               // 115
                });                                                                                                    // 116
              }, function() {                                                                                          // 117
                return Blaze.If(function() {                                                                           // 118
                  return Spacebars.call(view.lookup("isNumber"));                                                      // 119
                }, function() {                                                                                        // 120
                  return Blaze._TemplateWith(function() {                                                              // 121
                    return Spacebars.call(view.lookup("val"));                                                         // 122
                  }, function() {                                                                                      // 123
                    return Spacebars.include(view.lookupTemplate("editable_JSON_number"));                             // 124
                  });                                                                                                  // 125
                }, function() {                                                                                        // 126
                  return Blaze.If(function() {                                                                         // 127
                    return Spacebars.call(view.lookup("isNull"));                                                      // 128
                  }, function() {                                                                                      // 129
                    return Blaze._TemplateWith(function() {                                                            // 130
                      return Spacebars.call(view.lookup("val"));                                                       // 131
                    }, function() {                                                                                    // 132
                      return Spacebars.include(view.lookupTemplate("editable_JSON_null"));                             // 133
                    });                                                                                                // 134
                  });                                                                                                  // 135
                });                                                                                                    // 136
              });                                                                                                      // 137
            });                                                                                                        // 138
          });                                                                                                          // 139
        });                                                                                                            // 140
      });                                                                                                              // 141
    }), Blaze.Unless(function() {                                                                                      // 142
      return Spacebars.dataMustache(view.lookup("last"), view.lookup(".."));                                           // 143
    }, function() {                                                                                                    // 144
      return ",";                                                                                                      // 145
    }));                                                                                                               // 146
  });                                                                                                                  // 147
}));                                                                                                                   // 148
                                                                                                                       // 149
Template.__checkName("editable_JSON_array");                                                                           // 150
Template["editable_JSON_array"] = new Template("Template.editable_JSON_array", (function() {                           // 151
  var view = this;                                                                                                     // 152
  return [ Spacebars.With(function() {                                                                                 // 153
    return Spacebars.call(view.lookup("elements"));                                                                    // 154
  }, function() {                                                                                                      // 155
    return [ "[", HTML.DIV({                                                                                           // 156
      "class": "editable-JSON-indent"                                                                                  // 157
    }, Blaze.Each(function() {                                                                                         // 158
      return Spacebars.call(view.lookup("."));                                                                         // 159
    }, function() {                                                                                                    // 160
      return Blaze._TemplateWith(function() {                                                                          // 161
        return Spacebars.call(view.lookup("element"));                                                                 // 162
      }, function() {                                                                                                  // 163
        return Spacebars.include(view.lookupTemplate("editable_JSON"));                                                // 164
      });                                                                                                              // 165
    })), HTML.SPAN({                                                                                                   // 166
      "class": "editable-JSON-closer"                                                                                  // 167
    }, "]") ];                                                                                                         // 168
  }, function() {                                                                                                      // 169
    return HTML.SPAN({                                                                                                 // 170
      "class": "editableJSON-empty-object"                                                                             // 171
    }, "[]");                                                                                                          // 172
  }), Blaze.If(function() {                                                                                            // 173
    return Spacebars.call(Spacebars.dot(view.lookup(".."), "arrayComma"));                                             // 174
  }, function() {                                                                                                      // 175
    return ",";                                                                                                        // 176
  }) ];                                                                                                                // 177
}));                                                                                                                   // 178
                                                                                                                       // 179
Template.__checkName("editable_JSON_object");                                                                          // 180
Template["editable_JSON_object"] = new Template("Template.editable_JSON_object", (function() {                         // 181
  var view = this;                                                                                                     // 182
  return [ Blaze.If(function() {                                                                                       // 183
    return Spacebars.call(view.lookup("notEmpty"));                                                                    // 184
  }, function() {                                                                                                      // 185
    return [ "{", HTML.DIV({                                                                                           // 186
      "class": "editable-JSON-indent"                                                                                  // 187
    }, Blaze._TemplateWith(function() {                                                                                // 188
      return Spacebars.call(view.lookup("."));                                                                         // 189
    }, function() {                                                                                                    // 190
      return Spacebars.include(view.lookupTemplate("editable_JSON"));                                                  // 191
    })), HTML.SPAN({                                                                                                   // 192
      "class": "editable-JSON-closer"                                                                                  // 193
    }, "}") ];                                                                                                         // 194
  }, function() {                                                                                                      // 195
    return HTML.SPAN({                                                                                                 // 196
      "class": "editableJSON-empty-object"                                                                             // 197
    }, "{}");                                                                                                          // 198
  }), Blaze.If(function() {                                                                                            // 199
    return Spacebars.call(Spacebars.dot(view.lookup(".."), "arrayComma"));                                             // 200
  }, function() {                                                                                                      // 201
    return ",";                                                                                                        // 202
  }) ];                                                                                                                // 203
}));                                                                                                                   // 204
                                                                                                                       // 205
Template.__checkName("editable_JSON_string");                                                                          // 206
Template["editable_JSON_string"] = new Template("Template.editable_JSON_string", (function() {                         // 207
  var view = this;                                                                                                     // 208
  return [ HTML.SPAN({                                                                                                 // 209
    "class": function() {                                                                                              // 210
      return [ "editable-JSON-string ", Blaze.If(function() {                                                          // 211
        return Spacebars.call(view.lookup("_idField"));                                                                // 212
      }, function() {                                                                                                  // 213
        return "editable-JSON-_id-value";                                                                              // 214
      }) ];                                                                                                            // 215
    }                                                                                                                  // 216
  }, '"', Blaze.If(function() {                                                                                        // 217
    return Spacebars.call(view.lookup("editable_JSON_collection"));                                                    // 218
  }, function() {                                                                                                      // 219
    return Spacebars.With(function() {                                                                                 // 220
      return Spacebars.call(view.lookup("editable_JSON_getField"));                                                    // 221
    }, function() {                                                                                                    // 222
      return Blaze._TemplateWith(function() {                                                                          // 223
        return {                                                                                                       // 224
          value: Spacebars.call(view.lookup("..")),                                                                    // 225
          field: Spacebars.call(view.lookup(".")),                                                                     // 226
          collection: Spacebars.call(view.lookup("editable_JSON_collection"))                                          // 227
        };                                                                                                             // 228
      }, function() {                                                                                                  // 229
        return Spacebars.include(view.lookupTemplate("editableJSONInput"));                                            // 230
      });                                                                                                              // 231
    }, function() {                                                                                                    // 232
      return Blaze.View("lookup:.", function() {                                                                       // 233
        return Spacebars.mustache(view.lookup("."));                                                                   // 234
      });                                                                                                              // 235
    });                                                                                                                // 236
  }, function() {                                                                                                      // 237
    return Blaze.If(function() {                                                                                       // 238
      return Spacebars.call(view.lookup("_idField"));                                                                  // 239
    }, function() {                                                                                                    // 240
      return Blaze.View("lookup:.", function() {                                                                       // 241
        return Spacebars.mustache(view.lookup("."));                                                                   // 242
      });                                                                                                              // 243
    }, function() {                                                                                                    // 244
      return Blaze._TemplateWith(function() {                                                                          // 245
        return {                                                                                                       // 246
          value: Spacebars.call(view.lookup(".")),                                                                     // 247
          field: Spacebars.call(view.lookup("editable_JSON_getField"))                                                 // 248
        };                                                                                                             // 249
      }, function() {                                                                                                  // 250
        return Spacebars.include(view.lookupTemplate("editableJSONInput"));                                            // 251
      });                                                                                                              // 252
    });                                                                                                                // 253
  }), '"'), Blaze.If(function() {                                                                                      // 254
    return Spacebars.call(Spacebars.dot(view.lookup(".."), "arrayComma"));                                             // 255
  }, function() {                                                                                                      // 256
    return ",";                                                                                                        // 257
  }) ];                                                                                                                // 258
}));                                                                                                                   // 259
                                                                                                                       // 260
Template.__checkName("editable_JSON_boolean");                                                                         // 261
Template["editable_JSON_boolean"] = new Template("Template.editable_JSON_boolean", (function() {                       // 262
  var view = this;                                                                                                     // 263
  return [ HTML.SPAN({                                                                                                 // 264
    "class": "editable-JSON-boolean"                                                                                   // 265
  }, Blaze.View("lookup:boolean", function() {                                                                         // 266
    return Spacebars.mustache(view.lookup("boolean"));                                                                 // 267
  })), Blaze.If(function() {                                                                                           // 268
    return Spacebars.call(Spacebars.dot(view.lookup(".."), "arrayComma"));                                             // 269
  }, function() {                                                                                                      // 270
    return ",";                                                                                                        // 271
  }) ];                                                                                                                // 272
}));                                                                                                                   // 273
                                                                                                                       // 274
Template.__checkName("editable_JSON_date");                                                                            // 275
Template["editable_JSON_date"] = new Template("Template.editable_JSON_date", (function() {                             // 276
  var view = this;                                                                                                     // 277
  return [ HTML.SPAN({                                                                                                 // 278
    "class": "editable-JSON-date"                                                                                      // 279
  }, HTML.SPAN({                                                                                                       // 280
    "class": "editable-JSON-string"                                                                                    // 281
  }, '"', HTML.INPUT({                                                                                                 // 282
    type: "text",                                                                                                      // 283
    value: function() {                                                                                                // 284
      return Spacebars.mustache(view.lookup("date"));                                                                  // 285
    }                                                                                                                  // 286
  }), '"')), Blaze.If(function() {                                                                                     // 287
    return Spacebars.call(Spacebars.dot(view.lookup(".."), "arrayComma"));                                             // 288
  }, function() {                                                                                                      // 289
    return ",";                                                                                                        // 290
  }) ];                                                                                                                // 291
}));                                                                                                                   // 292
                                                                                                                       // 293
Template.__checkName("editable_JSON_number");                                                                          // 294
Template["editable_JSON_number"] = new Template("Template.editable_JSON_number", (function() {                         // 295
  var view = this;                                                                                                     // 296
  return [ HTML.SPAN({                                                                                                 // 297
    "class": "editable-JSON-number editable-text-trigger"                                                              // 298
  }, Blaze.If(function() {                                                                                             // 299
    return Spacebars.call(view.lookup("editable_JSON_collection"));                                                    // 300
  }, function() {                                                                                                      // 301
    return Spacebars.With(function() {                                                                                 // 302
      return Spacebars.call(view.lookup("editable_JSON_getField"));                                                    // 303
    }, function() {                                                                                                    // 304
      return Blaze._TemplateWith(function() {                                                                          // 305
        return {                                                                                                       // 306
          value: Spacebars.call(view.lookup("..")),                                                                    // 307
          field: Spacebars.call(view.lookup(".")),                                                                     // 308
          collection: Spacebars.call(view.lookup("editable_JSON_collection")),                                         // 309
          number: Spacebars.call(true)                                                                                 // 310
        };                                                                                                             // 311
      }, function() {                                                                                                  // 312
        return Spacebars.include(view.lookupTemplate("editableJSONInput"));                                            // 313
      });                                                                                                              // 314
    }, function() {                                                                                                    // 315
      return Blaze.View("lookup:.", function() {                                                                       // 316
        return Spacebars.mustache(view.lookup("."));                                                                   // 317
      });                                                                                                              // 318
    });                                                                                                                // 319
  }, function() {                                                                                                      // 320
    return Blaze._TemplateWith(function() {                                                                            // 321
      return {                                                                                                         // 322
        value: Spacebars.call(view.lookup(".")),                                                                       // 323
        field: Spacebars.call(view.lookup("editable_JSON_getField")),                                                  // 324
        number: Spacebars.call(true)                                                                                   // 325
      };                                                                                                               // 326
    }, function() {                                                                                                    // 327
      return Spacebars.include(view.lookupTemplate("editableJSONInput"));                                              // 328
    });                                                                                                                // 329
  })), Blaze.If(function() {                                                                                           // 330
    return Spacebars.call(Spacebars.dot(view.lookup(".."), "arrayComma"));                                             // 331
  }, function() {                                                                                                      // 332
    return ",";                                                                                                        // 333
  }) ];                                                                                                                // 334
}));                                                                                                                   // 335
                                                                                                                       // 336
Template.__checkName("editable_JSON_null");                                                                            // 337
Template["editable_JSON_null"] = new Template("Template.editable_JSON_null", (function() {                             // 338
  var view = this;                                                                                                     // 339
  return [ HTML.Raw('<span class="editable-JSON-null">null</span>'), Blaze.If(function() {                             // 340
    return Spacebars.call(Spacebars.dot(view.lookup(".."), "arrayComma"));                                             // 341
  }, function() {                                                                                                      // 342
    return ",";                                                                                                        // 343
  }) ];                                                                                                                // 344
}));                                                                                                                   // 345
                                                                                                                       // 346
Template.__checkName("editableJSONInput");                                                                             // 347
Template["editableJSONInput"] = new Template("Template.editableJSONInput", (function() {                               // 348
  var view = this;                                                                                                     // 349
  return Blaze.If(function() {                                                                                         // 350
    return Spacebars.call(view.lookup("editing"));                                                                     // 351
  }, function() {                                                                                                      // 352
    return HTML.INPUT({                                                                                                // 353
      type: "text",                                                                                                    // 354
      "class": "editable-JSON-input",                                                                                  // 355
      value: function() {                                                                                              // 356
        return Spacebars.mustache(view.lookup("value"));                                                               // 357
      }                                                                                                                // 358
    });                                                                                                                // 359
  }, function() {                                                                                                      // 360
    return HTML.SPAN({                                                                                                 // 361
      "class": "editable-JSON-edit"                                                                                    // 362
    }, Blaze.View("lookup:value", function() {                                                                         // 363
      return Spacebars.mustache(view.lookup("value"));                                                                 // 364
    }));                                                                                                               // 365
  });                                                                                                                  // 366
}));                                                                                                                   // 367
                                                                                                                       // 368
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 451
}).call(this);                                                       // 452
                                                                     // 453
                                                                     // 454
                                                                     // 455
                                                                     // 456
                                                                     // 457
                                                                     // 458
(function () {                                                       // 459
                                                                     // 460
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/babrahams:editable-json/editable-json-client.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
if (_.isUndefined(EditableJSON)) {                                                                                     // 1
  EditableJSON = {};                                                                                                   // 2
}                                                                                                                      // 3
                                                                                                                       // 4
// Call back queues                                                                                                    // 5
EditableJSON._afterUpdateCallbacks = [];                                                                               // 6
EditableJSON._onUnpublishedFieldAddedCallbacks = [];                                                                   // 7
                                                                                                                       // 8
EditableJSON._runCallbacks = function () {                                                                             // 9
  // arguments should be:                                                                                              // 10
  // arguments[0] = EditableJSON._afterUpdateCallbacks; // i.e. the array of callback functions to call                // 11
  // arguments[1] = context; // i.e. the thing that will be `this` in the function that gets called                    // 12
  // arguments[2 ...] = arguments; // i.e. the arguments of the function that will be called                           // 13
  var args = Array.prototype.slice.call(arguments);                                                                    // 14
  var callbackArray = args.shift();                                                                                    // 15
  var context = args.shift();                                                                                          // 16
  _.each(callbackArray, function (c) {                                                                                 // 17
    if (_.isUndefined(c.store) || c.store === args[0]) {                                                               // 18
      if (_.isFunction(c.callback)) {                                                                                  // 19
        c.callback.apply(context,args);                                                                                // 20
      }                                                                                                                // 21
      else {                                                                                                           // 22
        console.log("Callbacks must be a functions. A " + (typeof c.callback) + " was passed instead.");               // 23
      }                                                                                                                // 24
    }                                                                                                                  // 25
  });                                                                                                                  // 26
}                                                                                                                      // 27
                                                                                                                       // 28
EditableJSON.onUnpublishedFieldAdded = function (callback, store) {                                                    // 29
  EditableJSON._onUnpublishedFieldAddedCallbacks.push({callback: callback, store: store});                             // 30
};                                                                                                                     // 31
                                                                                                                       // 32
EditableJSON.afterUpdate = function (callback, store) {                                                                // 33
  EditableJSON._afterUpdateCallbacks.push({callback: callback, store: store});                                         // 34
};                                                                                                                     // 35
                                                                                                                       // 36
// Internal methods                                                                                                    // 37
// Shouldn't be called from app or package code                                                                        // 38
                                                                                                                       // 39
EditableJSONStore = new ReactiveDict();                                                                                // 40
                                                                                                                       // 41
EditableJSONInternal = {};                                                                                             // 42
                                                                                                                       // 43
EditableJSONInternal.timer = null;                                                                                     // 44
                                                                                                                       // 45
EditableJSONInternal.resize = function (elem) {                                                                        // 46
  var el = $(elem);                                                                                                    // 47
  EditableJSONInternal.editing_key_press.fakeEl.text(el.val());                                                        // 48
  var width = EditableJSONInternal.editing_key_press.fakeEl.width() + 8;                                               // 49
  el.width(width);                                                                                                     // 50
  el.css('min-width',width);                                                                                           // 51
}                                                                                                                      // 52
                                                                                                                       // 53
EditableJSONInternal.editing_key_press = function (elem,noDelay) {                                                     // 54
  if (EditableJSONInternal.editing_key_press.fakeEl === undefined) {                                                   // 55
    EditableJSONInternal.editing_key_press.fakeEl = $('<span class="editable-JSON-input">').hide().appendTo(document.body);
  }                                                                                                                    // 57
  if (noDelay) {                                                                                                       // 58
    var input = elem.find('input');                                                                                    // 59
    EditableJSONInternal.resize(input);                                                                                // 60
    input.select();                                                                                                    // 61
  }                                                                                                                    // 62
  else {                                                                                                               // 63
    Meteor.defer(function () {                                                                                         // 64
      EditableJSONInternal.resize(elem);                                                                               // 65
    });                                                                                                                // 66
  }                                                                                                                    // 67
}                                                                                                                      // 68
                                                                                                                       // 69
EditableJSONInternal.getContext = function () {                                                                        // 70
  var jsonTemplateData = Template && Template.parentData(function (data) { return _.isObject(data) && data.document; });
  var data = jsonTemplateData && jsonTemplateData.document;                                                            // 72
  return data || {};                                                                                                   // 73
}                                                                                                                      // 74
                                                                                                                       // 75
EditableJSONInternal.getField = function () {                                                                          // 76
  var field = Blaze._parentData(1).fld;                                                                                // 77
  return (!(EditableJSON.disableIdField && field === '_id')) && field;                                                 // 78
}                                                                                                                      // 79
                                                                                                                       // 80
EditableJSONInternal.getPath = function () {                                                                           // 81
  var path = Blaze._parentData(1).path;                                                                                // 82
  if (!_.isUndefined(path)) {                                                                                          // 83
    return path;                                                                                                       // 84
  }                                                                                                                    // 85
  var path = Blaze._parentData(2).path;                                                                                // 86
  if (!_.isUndefined(path)) {                                                                                          // 87
    return path;                                                                                                       // 88
  }                                                                                                                    // 89
  var path = Blaze._parentData(3).path;                                                                                // 90
  if (!_.isUndefined(path)) {                                                                                          // 91
    return path;                                                                                                       // 92
  }                                                                                                                    // 93
}                                                                                                                      // 94
                                                                                                                       // 95
EditableJSONInternal.makeEmptyType = function (item) {                                                                 // 96
  var tests = [                                                                                                        // 97
    [_.isDate(item), new Date()],                                                                                      // 98
    [_.isArray(item), []],                                                                                             // 99
    [_.isObject(item), {}],                                                                                            // 100
    [_.isNull(item), null],                                                                                            // 101
    [_.isBoolean(item), false],                                                                                        // 102
    [_.isNumber(item), 0]                                                                                              // 103
  ]                                                                                                                    // 104
  var pass = _.find(tests, function (t) {                                                                              // 105
    return t[0];                                                                                                       // 106
  });                                                                                                                  // 107
  if (pass) {                                                                                                          // 108
    return pass[1];                                                                                                    // 109
  }                                                                                                                    // 110
  return '';                                                                                                           // 111
}                                                                                                                      // 112
                                                                                                                       // 113
EditableJSONInternal.changeValueType = function (item) {                                                               // 114
  var tests = [                                                                                                        // 115
    [_.isArray(item), []],                                                                                             // 116
    [_.isObject(item) && !(_.isArray(item) || _.isDate(item)), {}],                                                    // 117
    [_.isNumber(item), 0],                                                                                             // 118
    [_.isBoolean(item), false],                                                                                        // 119
    [_.isDate(item), new Date()],                                                                                      // 120
    [_.isNull(item), null],                                                                                            // 121
    [_.isString(item), '']                                                                                             // 122
  ]                                                                                                                    // 123
  var index = 0;                                                                                                       // 124
  var oldType = _.find(tests, function (t) {                                                                           // 125
    if (t[0] && (_.isEqual(item, t[1]) || index === 3 || index === 4)) { //  && (_.isEqual(item, t[1]) || index === 0 || index === 4)
      return true;                                                                                                     // 127
    }                                                                                                                  // 128
    index++;                                                                                                           // 129
  });                                                                                                                  // 130
  if (oldType) {                                                                                                       // 131
    var ind = (index < (tests.length - 1)) ? (index + 1) : 0;                                                          // 132
    return tests[ind][1];                                                                                              // 133
  }                                                                                                                    // 134
  return undefined;                                                                                                    // 135
}                                                                                                                      // 136
                                                                                                                       // 137
EditableJSONInternal.deep = function (obj, keys, value) {                                                              // 138
                                                                                                                       // 139
  var root;                                                                                                            // 140
  var i = 0;                                                                                                           // 141
  var n = keys.length;                                                                                                 // 142
                                                                                                                       // 143
  // Set deep value                                                                                                    // 144
  if (arguments.length > 2) {                                                                                          // 145
                                                                                                                       // 146
    root = obj;                                                                                                        // 147
    n--;                                                                                                               // 148
                                                                                                                       // 149
    while (i < n) {                                                                                                    // 150
      key = keys[i++];                                                                                                 // 151
      obj = obj[key] = _.isObject(obj[key]) ? obj[key] : {};                                                           // 152
    }                                                                                                                  // 153
                                                                                                                       // 154
    obj[keys[i]] = value;                                                                                              // 155
                                                                                                                       // 156
    value = root;                                                                                                      // 157
                                                                                                                       // 158
  // Get deep value                                                                                                    // 159
  } else {                                                                                                             // 160
    while ((obj = obj[keys[i++]]) != null && i < n) {};                                                                // 161
    value = i < n ? void 0 : obj;                                                                                      // 162
  }                                                                                                                    // 163
                                                                                                                       // 164
  return value;                                                                                                        // 165
                                                                                                                       // 166
}                                                                                                                      // 167
                                                                                                                       // 168
/*var test = {                                                                                                         // 169
  a: [                                                                                                                 // 170
    {b: {c: "d"}},                                                                                                     // 171
    {e: "f"}                                                                                                           // 172
  ],                                                                                                                   // 173
  g: "h",                                                                                                              // 174
  i: {"j.k" : {l: "m"}}                                                                                                // 175
}                                                                                                                      // 176
EditableJSONInternal.deep(test, ['a','0','b', 'c'], 'w');                                                              // 177
EditableJSONInternal.deep(test, ['a', '0', 'e'], 'x');                                                                 // 178
EditableJSONInternal.deep(test, ['g'], 'y');                                                                           // 179
EditableJSONInternal.deep(test, ['i','j.k','l'], 'z');                                                                 // 180
console.log(test);*/                                                                                                   // 181
                                                                                                                       // 182
EditableJSONInternal.update = function (tmpl, modifier, action, callback, callbackArguments) {                         // 183
  var collectionName = tmpl.get('collection');                                                                         // 184
  if (!action) {                                                                                                       // 185
    var action = {};                                                                                                   // 186
    var mod = {};                                                                                                      // 187
    mod[modifier.field] = modifier.value;                                                                              // 188
    action[modifier.action] = mod;                                                                                     // 189
  }                                                                                                                    // 190
  // Only make a change if the new value doesn't match the existing one                                                // 191
                                                                                                                       // 192
  if (collectionName) {                                                                                                // 193
    // Validate -- make sure the change isn't on the id field                                                          // 194
    // And make sure we're not modifying the same field twice                                                          // 195
    var okay = true;                                                                                                   // 196
    var conflict = false;                                                                                              // 197
    var modFields = [];                                                                                                // 198
    _.each(action, function (modifier, action) {                                                                       // 199
      if (_.has(modifier,'_id')) {                                                                                     // 200
        okay = false;                                                                                                  // 201
      }                                                                                                                // 202
      var field = _.keys(modifier)[0];                                                                                 // 203
      if (!_.contains(modFields, field)) {                                                                             // 204
        // The following prevents all errors, but is too restrictive                                                   // 205
        // && !_.find(modFields,function (f){ return field.indexOf(f) !== -1; })                                       // 206
        modFields.push(field);                                                                                         // 207
      }                                                                                                                // 208
      else {                                                                                                           // 209
        conflict = true;                                                                                               // 210
      }                                                                                                                // 211
    });                                                                                                                // 212
    if (!okay) {                                                                                                       // 213
      if (EditableJSON.disableIdField) {                                                                               // 214
        console.log("You can't change the _id field.");                                                                // 215
      }                                                                                                                // 216
      return;                                                                                                          // 217
    }                                                                                                                  // 218
    if (conflict) {                                                                                                    // 219
      console.log("You can't use conflicting modifiers.");                                                             // 220
      return;                                                                                                          // 221
    }                                                                                                                  // 222
    var doc = EditableJSONInternal.getContext();                                                                       // 223
                                                                                                                       // 224
    // If it's a local collection, we don't bother with the call, we just update locally                               // 225
    var collection = EditableJSON.collection(collectionName);                                                          // 226
    if (collection && !collection._name) {                                                                             // 227
      var res = doUpdate(collectionName, doc._id, action);                                                             // 228
      if (res) {                                                                                                       // 229
        var mutatedDoc = EditableJSON.collection(collectionName).findOne({_id: doc._id});                              // 230
        EditableJSON._runCallbacks(EditableJSON._afterUpdateCallbacks, mutatedDoc, collectionName, action, doc, res);  
      }                                                                                                                // 232
      return;                                                                                                          // 233
    }                                                                                                                  // 234
                                                                                                                       // 235
    Meteor.call('editableJSON_update', collectionName, doc._id, action, function (err, res) {                          // 236
      if (err) {                                                                                                       // 237
        console.log("You can't use conflicting modifiers."); // We're making a big assumption here in giving this message -- TODO -- actually check the message
        console.log(err);                                                                                              // 239
      }                                                                                                                // 240
      else {                                                                                                           // 241
        if (_.isFunction(callback)) {                                                                                  // 242
          callback.apply(null,callbackArguments);                                                                      // 243
        }                                                                                                              // 244
        if (res) {                                                                                                     // 245
          var mutatedDoc = EditableJSON.collection(collectionName).findOne({_id: doc._id});                            // 246
          EditableJSON._runCallbacks(EditableJSON._afterUpdateCallbacks, mutatedDoc, collectionName, action, doc, res);
        }                                                                                                              // 248
      }                                                                                                                // 249
    });                                                                                                                // 250
  }                                                                                                                    // 251
  else {                                                                                                               // 252
    var JSONbefore = EditableJSONStore.get('editableJSON' + EditableJSONInternal.store(tmpl.get('store')));            // 253
    var JSONafter = EditableJSONStore.get('editableJSON' + EditableJSONInternal.store(tmpl.get('store')));             // 254
    var path = modifier.path;                                                                                          // 255
    var unsetPath = modifier.unsetPath;                                                                                // 256
    _.each(action, function (modifier, action) {                                                                       // 257
      var fieldName = _.keys(modifier)[0];                                                                             // 258
      var value = modifier[fieldName];                                                                                 // 259
      switch (action) {                                                                                                // 260
        case '$set' :                                                                                                  // 261
          JSONafter = EditableJSONInternal.deep(JSONafter, path, value);                                               // 262
          break;                                                                                                       // 263
        case '$unset' :                                                                                                // 264
          JSONafter = EditableJSONInternal.deep(JSONafter, unsetPath, undefined);                                      // 265
          break;                                                                                                       // 266
        case '$push' :                                                                                                 // 267
          var arr = EditableJSONInternal.deep(JSONafter, path);                                                        // 268
          arr.push(value);                                                                                             // 269
          JSONafter = EditableJSONInternal.deep(JSONafter, path, arr);                                                 // 270
          break;                                                                                                       // 271
        case '$pull' :                                                                                                 // 272
          var arr = EditableJSONInternal.deep(JSONafter, path);                                                        // 273
          arr = _.reduce(arr, function (memo, item) {                                                                  // 274
            if (!_.isEqual(value, item)) {                                                                             // 275
              memo.push(item);                                                                                         // 276
            }                                                                                                          // 277
            return memo;                                                                                               // 278
          },[]);                                                                                                       // 279
          JSONafter = EditableJSONInternal.deep(JSONafter, path, arr);                                                 // 280
          break;                                                                                                       // 281
      }                                                                                                                // 282
                                                                                                                       // 283
    });                                                                                                                // 284
    EditableJSONStore.set('editableJSON' + EditableJSONInternal.store(tmpl.get('store')), JSONafter);                  // 285
    if (_.isFunction(callback)) {                                                                                      // 286
      callback.apply(null,callbackArguments);                                                                          // 287
    }                                                                                                                  // 288
    EditableJSON._runCallbacks(EditableJSON._afterUpdateCallbacks, JSONafter, tmpl.get('store'), action, JSONbefore, 1);
  }                                                                                                                    // 290
}                                                                                                                      // 291
                                                                                                                       // 292
EditableJSONInternal.handleDoubleClick = function (evt, tmpl) {                                                        // 293
  evt.stopPropagation();                                                                                               // 294
  evt.stopImmediatePropagation();                                                                                      // 295
  var editingField = tmpl.get('editingField');                                                                         // 296
  if (editingField) {                                                                                                  // 297
    editingField.set(null);                                                                                            // 298
  }                                                                                                                    // 299
  Tracker.flush();                                                                                                     // 300
  /*console.log("tmpl.data:",tmpl.data); // tmpl.data has the whole data context, including the field we want          // 301
  console.log("this:", this); // this.value has an object with fld (full path through object), field (deepest field) and val, which is the value for the field*/
  // Need to check on type of this.value.val and decide if we're adding to an array or an object                       // 303
  var self = this;                                                                                                     // 304
  var type = (_.isArray(self.value.val)) ? 'array' : ((_.isObject(self.value.val) && !_.isDate(self.value.val)) ? 'object' : null);
  var target = tmpl.$(evt.target);                                                                                     // 306
  if ((target.hasClass('editableJSON-empty-object') && !target.parent().hasClass('editable-JSON-top-level') ) || !type) {
    if (evt.type === 'click') {                                                                                        // 308
      return;                                                                                                          // 309
    }                                                                                                                  // 310
    if (!localStorage.editableJSONdblclickMessage) {                                                                   // 311
      localStorage.editableJSONdblclickMessage = true;                                                                 // 312
      alert('Double click on "empty" values to change their type.\n\nClick to the right of objects and arrays to add fields.');
    }                                                                                                                  // 314
    // Change field type                                                                                               // 315
    var newValue = EditableJSONInternal.changeValueType(self.value.val);                                               // 316
    if (!_.isUndefined(newValue)) {                                                                                    // 317
      // It passed the empty/null/zero/'' test, so we switch its type                                                  // 318
      var modifier = {                                                                                                 // 319
        field: self.value.fld,                                                                                         // 320
        value: newValue,                                                                                               // 321
        action: "$set",                                                                                                // 322
        path: self.value.path                                                                                          // 323
      };                                                                                                               // 324
      EditableJSONInternal.update(tmpl, modifier);                                                                     // 325
    }                                                                                                                  // 326
    return;                                                                                                            // 327
  }                                                                                                                    // 328
  // Okay, we're not changing a value type with the double click, we're adding a field instead                         // 329
  var sample = (type === 'array') ? self.value.val[0] : _.values(self.value.val)[0];                                   // 330
  var newValue = EditableJSONInternal.makeEmptyType(sample);                                                           // 331
  var fieldName = _.keys(self.value.val)[0] || 'newField';                                                             // 332
                                                                                                                       // 333
  // We now add a new field                                                                                            // 334
  var number = '';                                                                                                     // 335
  while (type === 'object' && !_.isUndefined(self.value.val[fieldName + number])) {                                    // 336
    number++;                                                                                                          // 337
  }                                                                                                                    // 338
  var newFieldName = fieldName + number;                                                                               // 339
  var path = self.value && self.value.path || [];                                                                      // 340
  if (type === 'object') {                                                                                             // 341
    path = path.concat([newFieldName]);                                                                                // 342
  }                                                                                                                    // 343
  var modifier = {                                                                                                     // 344
    field: self.value.fld + (self.value.fld && ((type === 'object') ? '.' : '') || '') + ((type === 'object') ? (newFieldName) : ''),
    value: newValue,                                                                                                   // 346
    action: (type === 'array') ? "$push" : "$set",                                                                     // 347
    path: path                                                                                                         // 348
  }                                                                                                                    // 349
                                                                                                                       // 350
  EditableJSONInternal.update(tmpl, modifier, undefined, function (tmpl, evt, newFieldName) {                          // 351
    // Check for unpublished fields                                                                                    // 352
    Tracker.flush();                                                                                                   // 353
    var self = this;                                                                                                   // 354
    Meteor.defer(function () {                                                                                         // 355
      var newFieldElem = tmpl.$(evt.target).find('.editable-JSON-field-text').filter(function () { return $(this).text() === newFieldName; });
      if (tmpl.data.collection && !newFieldElem.length) {                                                              // 357
        EditableJSON._runCallbacks(EditableJSON._onUnpublishedFieldAddedCallbacks, this, tmpl.get('collection') || tmpl.get('store'), newFieldName, newValue);
      }                                                                                                                // 359
      else {                                                                                                           // 360
        // Make the new automatically field selected for editing                                                       // 361
        newFieldElem.trigger('click');                                                                                 // 362
      }                                                                                                                // 363
    });                                                                                                                // 364
  }, [tmpl, evt, newFieldName]);                                                                                       // 365
}                                                                                                                      // 366
                                                                                                                       // 367
EditableJSONInternal.store = function (storeName) {                                                                    // 368
  return (storeName) ? '.' + storeName : '';                                                                           // 369
}                                                                                                                      // 370
                                                                                                                       // 371
EditableJSONInternal.tabToNextField = function (elem, original) {                                                      // 372
  // Trigger a click on the next field                                                                                 // 373
  if (!elem.length) {                                                                                                  // 374
    // Go a level higher and search again                                                                              // 375
    parentElem = original.parent().closest('.editable-JSON-click-zone');                                               // 376
    parentSiblingElem = parentElem.next();                                                                             // 377
    if (parentElem.length) {                                                                                           // 378
      if (parentSiblingElem.length) {                                                                                  // 379
        // Try to find next .editable-JSON-field                                                                       // 380
        elem = parentSiblingElem.find('.editable-JSON-field');                                                         // 381
        if (!elem.length) {                                                                                            // 382
          EditableJSONInternal.tabToNextField(elem, parentSiblingElem);                                                // 383
        }                                                                                                              // 384
      }                                                                                                                // 385
      else {                                                                                                           // 386
        EditableJSONInternal.tabToNextField(parentSiblingElem, parentElem);                                            // 387
      }                                                                                                                // 388
    }                                                                                                                  // 389
  }                                                                                                                    // 390
  if (elem.length) {                                                                                                   // 391
    if (elem.eq(0).closest('.editable-JSON')) {                                                                        // 392
      elem.eq(0).trigger('click');                                                                                     // 393
    }                                                                                                                  // 394
  }                                                                                                                    // 395
}                                                                                                                      // 396
                                                                                                                       // 397
EditableJSON.retrieve = function (storeName) {                                                                         // 398
  return EditableJSONStore.get('editableJSON' + EditableJSONInternal.store(storeName));                                // 399
}                                                                                                                      // 400
                                                                                                                       // 401
Template.editableJSON.onCreated(function () {                                                                          // 402
  var self = this;                                                                                                     // 403
  self.editingField = new ReactiveVar();                                                                               // 404
  if (self.data && self.data.collection) {                                                                             // 405
    self.autorun(function () {                                                                                         // 406
      var Collection = EditableJSON.collection(self.data.collection);                                                  // 407
      var doc = Collection && Collection.find().count() && self.data.document; // Collection.find().count() is the reactivity trigger
      self.collection = self.data.collection;                                                                          // 409
      self.document = doc || {};                                                                                       // 410
    });                                                                                                                // 411
    return;                                                                                                            // 412
  }                                                                                                                    // 413
  else if (self.data && self.data.store) {                                                                             // 414
    self.store = self.data.store;                                                                                      // 415
  }                                                                                                                    // 416
  var explicitData = (!_.isUndefined(self.data.observe)) ? self.data.observe : self.data.json;                         // 417
  var initialValue = (!_.isUndefined(explicitData)) ? explicitData : (((self.store) ? self.parent().data : self.data) || {});
  EditableJSONStore.set('editableJSON' + EditableJSONInternal.store(self.store), initialValue);                        // 419
  if (self.data.observe) {                                                                                             // 420
    self.watcher = new Tracker.Dependency;                                                                             // 421
    this.autorun(function () {                                                                                         // 422
      // watcher is watching for external changes                                                                      // 423
      self.watcher.depend();                                                                                           // 424
      Meteor.defer(function () {                                                                                       // 425
        var newJSON = (!_.isUndefined(self.data.observe)) ? self.data.observe : (((self.store) ? self.parent().data : self.data) || {});
        EditableJSONStore.set('editableJSON' + EditableJSONInternal.store(self.store), newJSON);                       // 427
      });                                                                                                              // 428
    });                                                                                                                // 429
  }                                                                                                                    // 430
});                                                                                                                    // 431
                                                                                                                       // 432
Template.editableJSON.helpers({                                                                                        // 433
  watcher: function () {                                                                                               // 434
    Template.instance().watcher.changed();                                                                             // 435
  },                                                                                                                   // 436
  json: function () {                                                                                                  // 437
    return this.json || Template.instance().data;                                                                      // 438
  }                                                                                                                    // 439
});                                                                                                                    // 440
                                                                                                                       // 441
Template.editableJSON.events({                                                                                         // 442
  'dblclick .editable-JSON-click-zone, click .editable-JSON-click-zone' : function (evt, tmpl) {                       // 443
    // We need to fake a data context to allow addition of top level fields                                            // 444
    var context = {                                                                                                    // 445
      field: '',                                                                                                       // 446
      value: {                                                                                                         // 447
        val: this.document || this.json || this.observe || tmpl.data,                                                  // 448
        field: '',                                                                                                     // 449
        fld: ''                                                                                                        // 450
      }                                                                                                                // 451
    }                                                                                                                  // 452
    EditableJSONInternal.handleDoubleClick.call(context, evt, tmpl);                                                   // 453
  }                                                                                                                    // 454
});                                                                                                                    // 455
                                                                                                                       // 456
Template.editable_JSON.helpers({                                                                                       // 457
  fields: function () {                                                                                                // 458
    var self = this;                                                                                                   // 459
    var index = -1;                                                                                                    // 460
    var arrayComma = self.arrayComma || false;                                                                         // 461
    if (_.has(self,'____val')) {                                                                                       // 462
      index = self.arrIndex - 1;                                                                                       // 463
      delete self.arrIndex;                                                                                            // 464
      delete self.arrayComma;                                                                                          // 465
    }                                                                                                                  // 466
    var fields = _.map(self, function (value, field) {                                                                 // 467
      index++;                                                                                                         // 468
      var parent = null;                                                                                               // 469
      var number = 2;                                                                                                  // 470
      while (Blaze._parentData(number) && Blaze._parentData(number)._id === undefined && Blaze._parentData(number).fld === undefined) {
        number++;                                                                                                      // 472
      }                                                                                                                // 473
      parent = Blaze._parentData(number);                                                                              // 474
      var currentField = (field !== '____val') ? field : index;                                                        // 475
      var fld = (parent && parent.fld) ? parent.fld + ((currentField !== undefined) ? '.' + currentField : '') : currentField;
      var parentPath = parent && parent.path || [];                                                                    // 477
      var path = (currentField !== undefined) ? parentPath.concat([currentField]) : parentPath;                        // 478
      return {                                                                                                         // 479
        field:(field !== '____val') ? currentField : null,                                                             // 480
        value:{val: value, fld: fld, path: path, field: currentField, arrayComma: arrayComma},                         // 481
        index:index                                                                                                    // 482
      };                                                                                                               // 483
    });                                                                                                                // 484
    return fields;                                                                                                     // 485
  },                                                                                                                   // 486
  value: function () {                                                                                                 // 487
    return (_.isObject(this.value) && _.has(this.value, '____val')) ? this.value.____val : this.value;                 // 488
  },                                                                                                                   // 489
  isArray: function () {                                                                                               // 490
    return _.isArray(this.val);                                                                                        // 491
  },                                                                                                                   // 492
  isObject: function () {                                                                                              // 493
    return _.isObject(this.val);                                                                                       // 494
  },                                                                                                                   // 495
  isString: function () {                                                                                              // 496
    return _.isString(this.val);                                                                                       // 497
  },                                                                                                                   // 498
  isBoolean: function () {                                                                                             // 499
    return _.isBoolean(this.val);                                                                                      // 500
  },                                                                                                                   // 501
  isDate: function () {                                                                                                // 502
    return _.isDate(this.val);                                                                                         // 503
  },                                                                                                                   // 504
  isNumber: function () {                                                                                              // 505
    return _.isNumber(this.val);                                                                                       // 506
  },                                                                                                                   // 507
  isNull : function () {                                                                                               // 508
    return _.isNull(this.val);                                                                                         // 509
  },                                                                                                                   // 510
  last: function (obj) {                                                                                               // 511
    return (obj.____val !== undefined) || _.size(obj) === (this.index + 1);                                            // 512
  },                                                                                                                   // 513
  editingField : function () {                                                                                         // 514
    var fieldName = this.toString()                                                                                    // 515
    var fldData = Template.parentData(function (data) { return data && data.fld; });                                   // 516
    var fld = fldData && (fldData.fld + '.' + fieldName) || fieldName;                                                 // 517
    var template = Blaze._templateInstance();                                                                          // 518
    var editingField = template.get('editingField');                                                                   // 519
    return editingField && (editingField.get() === fld) && fieldName;                                                  // 520
  },                                                                                                                   // 521
  _idClass: function () {                                                                                              // 522
    return (String(this) === "_id") ? "editable-JSON-_id-field" : "";                                                  // 523
  }                                                                                                                    // 524
});                                                                                                                    // 525
                                                                                                                       // 526
Template.editable_JSON.events({                                                                                        // 527
  'click .editable-JSON-field' : function (evt, tmpl) {                                                                // 528
    evt.stopPropagation();                                                                                             // 529
    tmpl.$(evt.target).find('.editable-JSON-field-text').trigger('click');                                             // 530
  },                                                                                                                   // 531
  'click .editable-JSON-field-text' : function (evt,tmpl) {                                                            // 532
    evt.stopPropagation();                                                                                             // 533
    var fieldName = this.toString();                                                                                   // 534
    if (fieldName === '_id') {                                                                                         // 535
      return;                                                                                                          // 536
    }                                                                                                                  // 537
    var elem = $(evt.target).closest('.editable-JSON-field');                                                          // 538
    var fldData = Template.parentData(function (data) { return data && data.fld; });                                   // 539
    var field = fldData && (fldData.fld + '.' + fieldName) || fieldName;                                               // 540
    if (evt.type === 'click') {                                                                                        // 541
    var editingField = tmpl.get('editingField');                                                                       // 542
      if (editingField) {                                                                                              // 543
        editingField.set(field);                                                                                       // 544
        Tracker.flush();                                                                                               // 545
        EditableJSONInternal.editing_key_press(elem,true);                                                             // 546
      }                                                                                                                // 547
    }                                                                                                                  // 548
  },                                                                                                                   // 549
  'dblclick .editable-JSON-click-zone, click .editable-JSON-click-zone' : function (evt, tmpl) {                       // 550
    EditableJSONInternal.handleDoubleClick.call(this, evt, tmpl);                                                      // 551
  },                                                                                                                   // 552
  'keydown .editable-JSON-field input, focusout .editable-JSON-field input' : function (evt, tmpl) {                   // 553
    evt.stopPropagation();                                                                                             // 554
    var charCode = evt.which || evt.keyCode;                                                                           // 555
    if (evt.type === 'keydown') {                                                                                      // 556
      if (charCode === 27) {                                                                                           // 557
        var editingField = tmpl.get('editingField');                                                                   // 558
        editingField.set(null);                                                                                        // 559
        return;                                                                                                        // 560
      }                                                                                                                // 561
      if (charCode === 9) {                                                                                            // 562
        evt.preventDefault();                                                                                          // 563
        // As much as we'd just like to look in this template, we need to go further up the tree, so no tmpl.$ here    // 564
        var elem = $(evt.target).parent().nextAll("span, .editable-JSON-indent").first().find("span.editable-JSON-field-text, span.editable-JSON-edit");
        EditableJSONInternal.tabToNextField(elem, $(evt.target));                                                      // 566
        return;                                                                                                        // 567
      }                                                                                                                // 568
      if (charCode !== 13) {                                                                                           // 569
        EditableJSONInternal.editing_key_press($(evt.target));                                                         // 570
        return;                                                                                                        // 571
      }                                                                                                                // 572
    }                                                                                                                  // 573
    var editingField = tmpl.get('editingField');                                                                       // 574
    var currentFieldName = editingField.get();                                                                         // 575
    if (!currentFieldName) {                                                                                           // 576
      return;                                                                                                          // 577
    }                                                                                                                  // 578
    var parentFieldName = _.initial(currentFieldName.split('.'));                                                      // 579
    var editedFieldName = $(evt.currentTarget).val();                                                                  // 580
    var rejoinedParentFieldName = parentFieldName.join('.');                                                           // 581
    var newFieldName = ((rejoinedParentFieldName) ? rejoinedParentFieldName + '.' : '') + editedFieldName;             // 582
    if (newFieldName !== currentFieldName) {                                                                           // 583
      var modifier1 = {};                                                                                              // 584
      modifier1[currentFieldName] = 1;                                                                                 // 585
      var action = {                                                                                                   // 586
        "$unset" : modifier1                                                                                           // 587
      };                                                                                                               // 588
      if (editedFieldName) {                                                                                           // 589
        var modifier2 = {};                                                                                            // 590
        modifier2[newFieldName] = tmpl.data[String(this)];                                                             // 591
        action["$set"] = modifier2;                                                                                    // 592
      }                                                                                                                // 593
      EditableJSONInternal.update(tmpl, {path: (EditableJSONInternal.getPath() || []).concat([editedFieldName]), unsetPath: (EditableJSONInternal.getPath() || []).concat([String(this)])}, action, function () {
        editingField.set(null);                                                                                        // 595
      });                                                                                                              // 596
    }                                                                                                                  // 597
    else {                                                                                                             // 598
      editingField.set(null);                                                                                          // 599
    }                                                                                                                  // 600
  }                                                                                                                    // 601
});                                                                                                                    // 602
                                                                                                                       // 603
Template.editable_JSON_object.helpers({                                                                                // 604
  notEmpty: function () {                                                                                              // 605
    return !_.isEmpty(this);                                                                                           // 606
  }                                                                                                                    // 607
});                                                                                                                    // 608
                                                                                                                       // 609
Template.editable_JSON_array.helpers({                                                                                 // 610
  elements: function () {                                                                                              // 611
    var self = this;                                                                                                   // 612
    var lastIndex = self.length - 1;                                                                                   // 613
    var elements = _.map(this, function (value, index) {                                                               // 614
      var arrayComma = (index !== lastIndex) ? true : false;                                                           // 615
      return {element:{____val: value, arrIndex: index, arrayComma: arrayComma}, index: index};                        // 616
    });                                                                                                                // 617
    return elements;                                                                                                   // 618
  },                                                                                                                   // 619
  last: function (arr) {                                                                                               // 620
    return arr.length === (this.index + 1);                                                                            // 621
  }                                                                                                                    // 622
});                                                                                                                    // 623
                                                                                                                       // 624
Template.editable_JSON_string.helpers({                                                                                // 625
  _idField: function () {                                                                                              // 626
    var parentData = Template.parentData(1);                                                                           // 627
    return parentData && parentData.fld && parentData.fld === '_id';                                                   // 628
  }                                                                                                                    // 629
});                                                                                                                    // 630
                                                                                                                       // 631
Template.editable_JSON_string.events({                                                                                 // 632
  'click .editable-JSON-string' : function (evt, tmpl) {                                                               // 633
    evt.stopPropagation();                                                                                             // 634
    tmpl.$(evt.target).find('.editable-JSON-edit').trigger('click');                                                   // 635
  }                                                                                                                    // 636
});                                                                                                                    // 637
                                                                                                                       // 638
Template.editable_JSON_number.events({                                                                                 // 639
  'click .editable-JSON-number' : function (evt, tmpl) {                                                               // 640
    evt.stopPropagation();                                                                                             // 641
    tmpl.$(evt.target).find('.editable-JSON-edit').trigger('click');                                                   // 642
  }                                                                                                                    // 643
});                                                                                                                    // 644
                                                                                                                       // 645
Template.editable_JSON_date.helpers({                                                                                  // 646
  date: function () {                                                                                                  // 647
    return this.toISOString();                                                                                         // 648
  }                                                                                                                    // 649
});                                                                                                                    // 650
                                                                                                                       // 651
Template.editable_JSON_date.events({                                                                                   // 652
  'change input' : function (evt, tmpl) {                                                                              // 653
     var currentDate = new Date(this);                                                                                 // 654
     var newDate = new Date(tmpl.$('input').val());                                                                    // 655
     if (currentDate.getTime() !== newDate.getTime()) {                                                                // 656
       var field = EditableJSONInternal.getField();                                                                    // 657
       var modifier = {                                                                                                // 658
         field: field,                                                                                                 // 659
         value: newDate,                                                                                               // 660
         action: "$set",                                                                                               // 661
         path: EditableJSONInternal.getPath()                                                                          // 662
       }                                                                                                               // 663
       EditableJSONInternal.update(tmpl, modifier);                                                                    // 664
    }                                                                                                                  // 665
  }                                                                                                                    // 666
});                                                                                                                    // 667
                                                                                                                       // 668
Template.editable_JSON_boolean.helpers({                                                                               // 669
  boolean: function () {                                                                                               // 670
    return (this.valueOf() == true) ? 'true' : 'false';                                                                // 671
  }                                                                                                                    // 672
});                                                                                                                    // 673
                                                                                                                       // 674
Template.editable_JSON_boolean.events({                                                                                // 675
  'click .editable-JSON-boolean' : function (evt,tmpl) {                                                               // 676
    evt.stopPropagation();                                                                                             // 677
    var field = EditableJSONInternal.getField();                                                                       // 678
    var modifier = {                                                                                                   // 679
      field: field,                                                                                                    // 680
      value: !this.valueOf(),                                                                                          // 681
      action: "$set",                                                                                                  // 682
      path: EditableJSONInternal.getPath()                                                                             // 683
    };                                                                                                                 // 684
    EditableJSONInternal.update(tmpl,modifier);                                                                        // 685
  }                                                                                                                    // 686
});                                                                                                                    // 687
                                                                                                                       // 688
Blaze.registerHelper('editable_JSON_getField', function () {                                                           // 689
  return EditableJSONInternal.getField();                                                                              // 690
});                                                                                                                    // 691
                                                                                                                       // 692
Blaze.registerHelper('editable_JSON_getContext', function () {                                                         // 693
  return EditableJSONInternal.getContext();                                                                            // 694
});                                                                                                                    // 695
                                                                                                                       // 696
Blaze.registerHelper('editable_JSON_collection', function () {                                                         // 697
  var template = Blaze._templateInstance();                                                                            // 698
  var collection = template.get('collection');                                                                         // 699
  return collection;                                                                                                   // 700
});                                                                                                                    // 701
                                                                                                                       // 702
Template.editableJSONInput.created = function () {                                                                     // 703
  this.editing = new ReactiveVar(false);                                                                               // 704
}                                                                                                                      // 705
                                                                                                                       // 706
Template.editableJSONInput.helpers({                                                                                   // 707
  editing: function () {                                                                                               // 708
    return Blaze._templateInstance().editing.get();                                                                    // 709
  }                                                                                                                    // 710
});                                                                                                                    // 711
                                                                                                                       // 712
Template.editableJSONInput.events({                                                                                    // 713
  'click .editable-JSON-edit' : function (evt, tmpl) {                                                                 // 714
    evt.stopPropagation();                                                                                             // 715
    if (EditableJSON.disableIdField && String(this) === '_id') {                                                       // 716
      return;                                                                                                          // 717
    }                                                                                                                  // 718
    var parent = $(evt.target).parent();                                                                               // 719
    tmpl.editing.set(true);                                                                                            // 720
    Tracker.flush();                                                                                                   // 721
    EditableJSONInternal.editing_key_press(parent, true);                                                              // 722
  },                                                                                                                   // 723
  'keydown input' : function (evt, tmpl) {                                                                             // 724
    var charCode = evt.which || evt.keyCode;                                                                           // 725
    if (charCode === 27) {                                                                                             // 726
      tmpl.editing.set(false);                                                                                         // 727
    }                                                                                                                  // 728
    if (charCode === 9) {                                                                                              // 729
      evt.preventDefault();                                                                                            // 730
      // Trigger a click on the next field                                                                             // 731
      // As much as we'd just like to look only in this template, we need to go further up the tree, so no tmpl.$ here // 732
      var elem = $(evt.target).closest('.editable-JSON-click-zone').next(".editable-JSON-click-zone").find("span.editable-JSON-field-text, span.editable-JSON-edit");
      EditableJSONInternal.tabToNextField(elem, $(evt.target));                                                        // 734
    }                                                                                                                  // 735
    if (charCode === 8 || charCode === 46) {                                                                           // 736
      // If this is an array and the field is empty, remove the field from the array                                   // 737
      var tellTaleNode = (!_.isUndefined(Template.parentData(5)["____val"]) && Template.parentData(5)) || (!_.isUndefined(Template.parentData(4)["____val"]) && Template.parentData(4));
      var currentVal = tmpl.$(evt.target).val();                                                                       // 739
      if (tellTaleNode && currentVal === '') {                                                                         // 740
        var arrayNode = Template.parentData(function (d) { return _.isArray(d.val) && d.fld; });                       // 741
        var modifier = {                                                                                               // 742
          field: arrayNode.fld,                                                                                        // 743
          value: this.value,                                                                                           // 744
          action: "$pull",                                                                                             // 745
          path: arrayNode.path                                                                                         // 746
        };                                                                                                             // 747
        EditableJSONInternal.update(tmpl, modifier, null, function () {                                                // 748
          // We need an editing key press because the element will have changed                                        // 749
          Meteor.defer(function () {                                                                                   // 750
            EditableJSONInternal.editing_key_press($(document.activeElement));                                         // 751
          });                                                                                                          // 752
        });                                                                                                            // 753
        // Disable the delete key for a couple of seconds                                                              // 754
        // So that user won't be sent back a page after deleting an array field                                        // 755
        // if they keep pressing delete                                                                                // 756
        var disableKeypress = function(e) {                                                                            // 757
          var charCode = e.which || evt.keyCode;                                                                       // 758
          if (charCode === 8 || charCode === 45) {                                                                     // 759
            e.preventDefault();                                                                                        // 760
          }                                                                                                            // 761
        }                                                                                                              // 762
        $(document).on('keypress', disableKeypress);                                                                   // 763
        Meteor.setTimeout(function () {                                                                                // 764
          $(document).off('keypress', disableKeypress);                                                                // 765
        }, 2000);                                                                                                      // 766
      }                                                                                                                // 767
    }                                                                                                                  // 768
    if (charCode !== 13) {                                                                                             // 769
      EditableJSONInternal.editing_key_press(tmpl.$(evt.target));                                                      // 770
    }                                                                                                                  // 771
  },                                                                                                                   // 772
  'keyup input, focusout input' : function (evt, tmpl) {                                                               // 773
    if (evt.type === 'keyup') {                                                                                        // 774
      var charCode = evt.which || evt.keyCode;                                                                         // 775
      if (charCode !== 13) {                                                                                           // 776
        return;                                                                                                        // 777
      }                                                                                                                // 778
    }                                                                                                                  // 779
    var elem = tmpl.$(evt.target);                                                                                     // 780
    var value = elem.val();                                                                                            // 781
    if (this.number) {                                                                                                 // 782
      if (!/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(value)) {                                                     // 783
        // If it's not a number, just revert the value and return                                                      // 784
        elem.val(tmpl.data.value || 0);                                                                                // 785
        return;                                                                                                        // 786
      }                                                                                                                // 787
      else {                                                                                                           // 788
        value = parseFloat(value);                                                                                     // 789
        if (_.isNaN(value)) {                                                                                          // 790
          value = 0;                                                                                                   // 791
        }                                                                                                              // 792
      }                                                                                                                // 793
    }                                                                                                                  // 794
    if (value !== this.value) {                                                                                        // 795
      var modifier = {                                                                                                 // 796
        field: this.field,                                                                                             // 797
        value: value,                                                                                                  // 798
        action: "$set",                                                                                                // 799
        path: EditableJSONInternal.getPath()                                                                           // 800
      };                                                                                                               // 801
      EditableJSONInternal.update(tmpl, modifier, null, function () {                                                  // 802
        tmpl.editing.set(false);                                                                                       // 803
      });                                                                                                              // 804
    }                                                                                                                  // 805
    else {                                                                                                             // 806
      tmpl.editing.set(false);                                                                                         // 807
    }                                                                                                                  // 808
  }                                                                                                                    // 809
});                                                                                                                    // 810
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 1278
}).call(this);                                                       // 1279
                                                                     // 1280
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['babrahams:editable-json'] = {
  EditableJSON: EditableJSON
};

})();
