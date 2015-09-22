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
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var Session = Package.session.Session;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var MeteorToysDict, JetSetter, currentSession;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/msavin_jetsetter/packages/msavin_jetsetter.js                                                    //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
(function () {                                                                                               // 1
                                                                                                             // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                     //    // 4
// packages/msavin:jetsetter/client/template.main.js                                                   //    // 5
//                                                                                                     //    // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                       //    // 8
                                                                                                       // 1  // 9
Template.__checkName("JetSetter");                                                                     // 2  // 10
Template["JetSetter"] = new Template("Template.JetSetter", (function() {                               // 3  // 11
  var view = this;                                                                                     // 4  // 12
  return Blaze.If(function() {                                                                         // 5  // 13
    return Spacebars.call(view.lookup("MeteorToys"));                                                  // 6  // 14
  }, function() {                                                                                      // 7  // 15
    return [ "\n\n		", HTML.DIV({                                                                      // 8  // 16
      id: "JetSetter",                                                                                 // 9  // 17
      "class": function() {                                                                            // 10
        return [ "MeteorToys ", Spacebars.mustache(view.lookup("expanded")) ];                         // 11
      }                                                                                                // 12
    }, "\n			\n			", Blaze.If(function() {                                                             // 13
      return Spacebars.call(view.lookup("MeteorToys_Pro"));                                            // 14
    }, function() {                                                                                    // 15
      return [ "\n				\n				", Spacebars.include(view.lookupTemplate("JetSetter_header_pro")), "\n				", Spacebars.include(view.lookupTemplate("JetSetter_create")), "\n				\n				", Blaze.Each(function() {
        return Spacebars.call(view.lookup("SessionItems"));                                            // 17
      }, function() {                                                                                  // 18
        return [ "\n					", Spacebars.include(view.lookupTemplate("JetSetter_row")), "\n				" ];       // 19
      }), "\n\n				", Blaze.If(function() {                                                            // 20
        return Spacebars.call(view.lookup("MeteorToys_Pro"));                                          // 21
      }, function() {                                                                                  // 22
        return " \n\n				";                                                                            // 23
      }), "\n\n			" ];                                                                                 // 24
    }, function() {                                                                                    // 25
      return [ "\n\n				", Spacebars.include(view.lookupTemplate("JetSetter_header")), "\n				", Spacebars.include(view.lookupTemplate("JetSetter_create")), "\n\n				", Blaze.Each(function() {
        return Spacebars.call(view.lookup("SessionItems"));                                            // 27
      }, function() {                                                                                  // 28
        return [ "\n					", Spacebars.include(view.lookupTemplate("JetSetter_row")), "\n				" ];       // 29
      }), "\n\n			" ];                                                                                 // 30
    }), "\n\n		"), "\n\n	" ];                                                                          // 31
  });                                                                                                  // 32
}));                                                                                                   // 33
                                                                                                       // 34
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 43
                                                                                                             // 44
}).call(this);                                                                                               // 45
                                                                                                             // 46
                                                                                                             // 47
                                                                                                             // 48
                                                                                                             // 49
                                                                                                             // 50
                                                                                                             // 51
(function () {                                                                                               // 52
                                                                                                             // 53
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 54
//                                                                                                     //    // 55
// packages/msavin:jetsetter/client/main.js                                                            //    // 56
//                                                                                                     //    // 57
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 58
                                                                                                       //    // 59
// Initialize Reactive-Dict                                                                            // 1  // 60
  MeteorToysDict = Package["meteortoys:toykit"].MeteorToysDict;                                        // 2  // 61
                                                                                                       // 3  // 62
Template.JetSetter.helpers({                                                                           // 4  // 63
    expanded: function () {                                                                            // 5  // 64
        var current = MeteorToysDict.get("JetSetter_current");                                         // 6  // 65
        if (current) {                                                                                 // 7  // 66
            return "JetSetter_expand"                                                                  // 8  // 67
        }                                                                                              // 9  // 68
    },                                                                                                 // 10
    SessionItems: function () {                                                                        // 11
                                                                                                       // 12
        var array = MeteorToysDict.get("JetSetter");                                                   // 13
        return array;                                                                                  // 14
    }                                                                                                  // 15
});                                                                                                    // 16
                                                                                                       // 17
                                                                                                       // 18
                                                                                                       // 19
// Start by observing                                                                                  // 20
Meteor.startup(function(){                                                                             // 21
                                                                                                       // 22
  // Load Meteor Toys                                                                                  // 23
    Meteor.defer(function () {                                                                         // 24
      Blaze.render(Template.JetSetter, document.body);                                                 // 25
    });                                                                                                // 26
                                                                                                       // 27
});                                                                                                    // 28
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 88
                                                                                                             // 89
}).call(this);                                                                                               // 90
                                                                                                             // 91
                                                                                                             // 92
                                                                                                             // 93
                                                                                                             // 94
                                                                                                             // 95
                                                                                                             // 96
(function () {                                                                                               // 97
                                                                                                             // 98
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 99
//                                                                                                     //    // 100
// packages/msavin:jetsetter/client/functions.js                                                       //    // 101
//                                                                                                     //    // 102
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 103
                                                                                                       //    // 104
                                                                                                       // 1  // 105
// Initialize Dict                                                                                     // 2  // 106
MeteorToysDict = Package["meteortoys:toykit"].MeteorToysDict;                                          // 3  // 107
                                                                                                       // 4  // 108
JetSetter = {                                                                                          // 5  // 109
    getKeys: function () {                                                                             // 6  // 110
                                                                                                       // 7  // 111
        var keys = Object.getOwnPropertyNames(Session.keys);                                           // 8  // 112
        keys = JetSetter.arrayCleaner(keys, "Meteor.");                                                // 9  // 113
        MeteorToysDict.set("JetSetter", keys);                                                         // 10
                                                                                                       // 11
    },                                                                                                 // 12
    arrayCleaner: function(array, toRemove) {                                                          // 13
                                                                                                       // 14
        var length = toRemove.length;                                                                  // 15
                                                                                                       // 16
        for (var i = 0; i < array.length; i++) {                                                       // 17
            if(array[i].substr(0, length) === toRemove) {                                              // 18
                array.splice(i, 1);                                                                    // 19
                i--;                                                                                   // 20
            }                                                                                          // 21
        }                                                                                              // 22
                                                                                                       // 23
        return array;                                                                                  // 24
                                                                                                       // 25
    },                                                                                                 // 26
    'colorize': function (json) {                                                                      // 27
                                                                                                       // 28
      // Should merge this out of here and Mongol into ToyKit                                          // 29
                                                                                                       // 30
      // colorized the JSON objects                                                                    // 31
      if (typeof json != 'string') {                                                                   // 32
        json = JSON.stringify(json, undefined, 2);                                                     // 33
      }                                                                                                // 34
      json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');                  // 35
      return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
        var cls = 'Mongol_number';                                                                     // 37
        if (/^"/.test(match)) {                                                                        // 38
          if (/:$/.test(match)) {                                                                      // 39
            cls = 'Mongol_key';                                                                        // 40
          } else {                                                                                     // 41
            cls = 'Mongol_string';                                                                     // 42
          }                                                                                            // 43
        } else if (/true|false/.test(match)) {                                                         // 44
          cls = 'Mongol_boolean';                                                                      // 45
        } else if (/null/.test(match)) {                                                               // 46
          cls = 'Mongol_null';                                                                         // 47
        }                                                                                              // 48
        return '<span class="' + cls + '">' + match + '</span>';                                       // 49
      });                                                                                              // 50
                                                                                                       // 51
    },                                                                                                 // 52
}                                                                                                      // 53
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 158
                                                                                                             // 159
}).call(this);                                                                                               // 160
                                                                                                             // 161
                                                                                                             // 162
                                                                                                             // 163
                                                                                                             // 164
                                                                                                             // 165
                                                                                                             // 166
(function () {                                                                                               // 167
                                                                                                             // 168
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 169
//                                                                                                     //    // 170
// packages/msavin:jetsetter/client/row_create/template.JetSetter_create.js                            //    // 171
//                                                                                                     //    // 172
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 173
                                                                                                       //    // 174
                                                                                                       // 1  // 175
Template.__checkName("JetSetter_create");                                                              // 2  // 176
Template["JetSetter_create"] = new Template("Template.JetSetter_create", (function() {                 // 3  // 177
  var view = this;                                                                                     // 4  // 178
  return Blaze._TemplateWith(function() {                                                              // 5  // 179
    return {                                                                                           // 6  // 180
      name: Spacebars.call("create")                                                                   // 7  // 181
    };                                                                                                 // 8  // 182
  }, function() {                                                                                      // 9  // 183
    return Spacebars.include(view.lookupTemplate("JetSetter_Component"), function() {                  // 10
      return [ "\n		\n		\n		", HTML.DIV({                                                              // 11
        "class": "MeteorToys_right"                                                                    // 12
      }, "\n			", HTML.STRONG("+"), "\n		"), "\n		", HTML.STRONG("Session"), "\n\n		", HTML.DIV({      // 13
        "class": "JetSetter_editor"                                                                    // 14
      }, "\n			", HTML.DIV({                                                                           // 15
        "class": "JetSetter_editor_header"                                                             // 16
      }, "\n				", HTML.Comment(' <div class="JetSetter_create_name"></div> '), "\n				", HTML.INPUT({ // 17
        type: "text",                                                                                  // 18
        "class": "JetSetter_editor_title",                                                             // 19
        placeholder: "Enter Name"                                                                      // 20
      }), HTML.CharRef({                                                                               // 21
        html: "&nbsp;",                                                                                // 22
        str: " "                                                                                       // 23
      }), "\n				", HTML.DIV({                                                                         // 24
        "class": "JetSetter_editor_button JetSetter_button_new"                                        // 25
      }, "\n					Set"), "\n			"), "\n			", HTML.DIV({                                                  // 26
        "class": "JetSetter_editor_content JetSetter_editor_create",                                   // 27
        contenteditable: "true",                                                                       // 28
        style: "cursor: text"                                                                          // 29
      }, "\n			"), "\n		"), "\n\n	" ];                                                                 // 30
    });                                                                                                // 31
  });                                                                                                  // 32
}));                                                                                                   // 33
                                                                                                       // 34
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 209
                                                                                                             // 210
}).call(this);                                                                                               // 211
                                                                                                             // 212
                                                                                                             // 213
                                                                                                             // 214
                                                                                                             // 215
                                                                                                             // 216
                                                                                                             // 217
(function () {                                                                                               // 218
                                                                                                             // 219
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 220
//                                                                                                     //    // 221
// packages/msavin:jetsetter/client/row_create/JetSetter_create.js                                     //    // 222
//                                                                                                     //    // 223
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 224
                                                                                                       //    // 225
Template.JetSetter_create.events({                                                                     // 1  // 226
    'click .JetSetter_row': function () {                                                              // 2  // 227
        // Focus on input                                                                              // 3  // 228
        window.setTimeout(function() {                                                                 // 4  // 229
            $(".JetSetter_editor_title").focus();                                                      // 5  // 230
        }, 300);                                                                                       // 6  // 231
                                                                                                       // 7  // 232
    },                                                                                                 // 8  // 233
    'click .JetSetter_button_new': function () {                                                       // 9  // 234
                                                                                                       // 10
        // get values                                                                                  // 11
        var js_key    = $(".JetSetter_editor_title").val(),                                            // 12
            js_value  = $(".JetSetter_editor_create").text(),                                          // 13
            js_result = "jetsetter_empty_value";                                                       // 14
                                                                                                       // 15
        // ensure key has value                                                                        // 16
        if (!js_key) {                                                                                 // 17
            alert("Please enter a Session key");                                                       // 18
            return false;                                                                              // 19
        }                                                                                              // 20
                                                                                                       // 21
        // convert string to json                                                                      // 22
                                                                                                       // 23
        try {                                                                                          // 24
          js_result = JSON.parse(js_value);                                                            // 25
        } catch (error) {                                                                              // 26
          alert("There was an error with your input.");                                                // 27
          return false;                                                                                // 28
        }                                                                                              // 29
                                                                                                       // 30
        // run magic                                                                                   // 31
                                                                                                       // 32
        if (js_result === "jetsetter_empty_value") {                                                   // 33
            // do nothing                                                                              // 34
        } else {                                                                                       // 35
            // set session                                                                             // 36
            Session.set(js_key, js_result);                                                            // 37
                                                                                                       // 38
            // rerun key fetch to seem instant                                                         // 39
            JetSetter.getKeys()                                                                        // 40
                                                                                                       // 41
            // reset inputs                                                                            // 42
            $(".JetSetter_editor_title").val("")                                                       // 43
            $(".JetSetter_editor_create").text("")                                                     // 44
        }                                                                                              // 45
                                                                                                       // 46
    }                                                                                                  // 47
});                                                                                                    // 48
                                                                                                       // 49
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 275
                                                                                                             // 276
}).call(this);                                                                                               // 277
                                                                                                             // 278
                                                                                                             // 279
                                                                                                             // 280
                                                                                                             // 281
                                                                                                             // 282
                                                                                                             // 283
(function () {                                                                                               // 284
                                                                                                             // 285
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 286
//                                                                                                     //    // 287
// packages/msavin:jetsetter/client/row_editor/template.JetSetter_editor.js                            //    // 288
//                                                                                                     //    // 289
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 290
                                                                                                       //    // 291
                                                                                                       // 1  // 292
Template.__checkName("JetSetter_editor");                                                              // 2  // 293
Template["JetSetter_editor"] = new Template("Template.JetSetter_editor", (function() {                 // 3  // 294
  var view = this;                                                                                     // 4  // 295
  return HTML.DIV({                                                                                    // 5  // 296
    "class": "JetSetter_editor"                                                                        // 6  // 297
  }, "\n		\n		", Blaze.If(function() {                                                                 // 7  // 298
    return Spacebars.call(view.lookup("editing"));                                                     // 8  // 299
  }, function() {                                                                                      // 9  // 300
    return [ "\n			", HTML.DIV({                                                                       // 10
      "class": "JetSetter_editor_header"                                                               // 11
    }, "\n				", HTML.DIV({                                                                            // 12
      "class": "JetSetter_editor_button JetSetter_button_save"                                         // 13
    }, "Save"), "\n				", HTML.DIV({                                                                   // 14
      "class": "JetSetter_editor_button JetSetter_button_cancel"                                       // 15
    }, "Cancel"), "\n				Value \n			"), "\n			", HTML.DIV({                                            // 16
      "class": "JetSetter_editor_content JetSetter_editor_content_editing",                            // 17
      id: function() {                                                                                 // 18
        return [ "JetSetter_editor_", Spacebars.mustache(view.lookup(".")) ];                          // 19
      },                                                                                               // 20
      contenteditable: "true"                                                                          // 21
    }, "\n				", HTML.PRE(Blaze.View("lookup:content", function() {                                    // 22
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("content")));                            // 23
    })), "\n			"), "\n		" ];                                                                           // 24
  }, function() {                                                                                      // 25
    return [ "\n			", HTML.DIV({                                                                       // 26
      "class": "JetSetter_editor_header"                                                               // 27
    }, "\n				", HTML.DIV({                                                                            // 28
      "class": "JetSetter_editor_button JetSetter_button_edit"                                         // 29
    }, "Edit"), "\n				", HTML.DIV({                                                                   // 30
      "class": "JetSetter_editor_button JetSetter_button_drop"                                         // 31
    }, "Drop"), "\n				Value \n			"), "\n			", HTML.DIV({                                              // 32
      "class": "JetSetter_editor_content"                                                              // 33
    }, "\n				", HTML.PRE(Blaze.View("lookup:content", function() {                                    // 34
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("content")));                            // 35
    })), "\n			"), "\n		" ];                                                                           // 36
  }), "\n\n	");                                                                                        // 37
}));                                                                                                   // 38
                                                                                                       // 39
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 331
                                                                                                             // 332
}).call(this);                                                                                               // 333
                                                                                                             // 334
                                                                                                             // 335
                                                                                                             // 336
                                                                                                             // 337
                                                                                                             // 338
                                                                                                             // 339
(function () {                                                                                               // 340
                                                                                                             // 341
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 342
//                                                                                                     //    // 343
// packages/msavin:jetsetter/client/row_editor/JetSetter_editor.js                                     //    // 344
//                                                                                                     //    // 345
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 346
                                                                                                       //    // 347
Template.JetSetter_editor.events({                                                                     // 1  // 348
	'click .JetSetter_button_edit': function () {                                                         // 2  // 349
		MeteorToysDict.set("JetSetter_settings_edit", true)                                                  // 3  // 350
	},                                                                                                    // 4  // 351
	'click .JetSetter_button_save': function () {                                                         // 5  // 352
		                                                                                                     // 6  // 353
		// data the data                                                                                     // 7  // 354
		var data = $("#JetSetter_editor_" + String(this)).text();                                            // 8  // 355
                                                                                                       // 9  // 356
		// Parse it                                                                                          // 10
                                                                                                       // 11
		var newObject = false;                                                                               // 12
                                                                                                       // 13
		try {                                                                                                // 14
		  newObject = JSON.parse(data);                                                                      // 15
		} catch (error) {                                                                                    // 16
		  var newObject = "JetSetter_failed_change"                                                          // 17
		  // alert("There was an error with your input.")                                                    // 18
		}                                                                                                    // 19
                                                                                                       // 20
		if (newObject === "JetSetter_failed_change") {                                                       // 21
			// Do nothing                                                                                       // 22
		} else {                                                                                             // 23
			Session.set(this, newObject)	                                                                       // 24
		}                                                                                                    // 25
                                                                                                       // 26
		MeteorToysDict.set("JetSetter_settings_edit", false);                                                // 27
                                                                                                       // 28
	},                                                                                                    // 29
	'click .JetSetter_button_cancel': function () {                                                       // 30
		MeteorToysDict.set("JetSetter_settings_edit", false)                                                 // 31
	},                                                                                                    // 32
	'click .JetSetter_editor': function (e, t) {                                                          // 33
		e.stopPropagation();                                                                                 // 34
	},                                                                                                    // 35
	'click .JetSetter_button_drop': function () {                                                         // 36
		                                                                                                     // 37
		MeteorToysDict.set("JetSetter_current", null)                                                        // 38
		currentSession = this;                                                                               // 39
                                                                                                       // 40
		window.setTimeout(function() {                                                                       // 41
			delete Session.keys[currentSession];                                                                // 42
			JetSetter.getKeys();                                                                                // 43
		}, 300);                                                                                             // 44
		                                                                                                     // 45
                                                                                                       // 46
	}                                                                                                     // 47
});                                                                                                    // 48
                                                                                                       // 49
Template.JetSetter_editor.helpers({                                                                    // 50
	content: function () {                                                                                // 51
		var value = Session.get(this);                                                                       // 52
		var stringed = JSON.stringify(value, undefined, 2);                                                  // 53
		return JetSetter.colorize(stringed);                                                                 // 54
	},                                                                                                    // 55
	editing: function () {                                                                                // 56
		return MeteorToysDict.get("JetSetter_settings_edit");                                                // 57
	}                                                                                                     // 58
});                                                                                                    // 59
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 407
                                                                                                             // 408
}).call(this);                                                                                               // 409
                                                                                                             // 410
                                                                                                             // 411
                                                                                                             // 412
                                                                                                             // 413
                                                                                                             // 414
                                                                                                             // 415
(function () {                                                                                               // 416
                                                                                                             // 417
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 418
//                                                                                                     //    // 419
// packages/msavin:jetsetter/client/row_header/template.JetSetter_header.js                            //    // 420
//                                                                                                     //    // 421
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 422
                                                                                                       //    // 423
                                                                                                       // 1  // 424
Template.__checkName("JetSetter_header");                                                              // 2  // 425
Template["JetSetter_header"] = new Template("Template.JetSetter_header", (function() {                 // 3  // 426
  var view = this;                                                                                     // 4  // 427
  return Blaze._TemplateWith(function() {                                                              // 5  // 428
    return {                                                                                           // 6  // 429
      name: Spacebars.call("header")                                                                   // 7  // 430
    };                                                                                                 // 8  // 431
  }, function() {                                                                                      // 9  // 432
    return Spacebars.include(view.lookupTemplate("JetSetter_Component"), function() {                  // 10
      return [ "\n		", HTML.STRONG("JetSetter"), "\n		", HTML.DIV({                                    // 11
        "class": "JetSetter_editor"                                                                    // 12
      }, "\n			", HTML.DIV({                                                                           // 13
        "class": "JetSetter_editor_header"                                                             // 14
      }, "\n				Meteor Toys\n			"), "\n			", HTML.DIV({                                                // 15
        "class": "JetSetter_editor_content"                                                            // 16
      }, "\n", HTML.PRE("{ \n  ", HTML.SPAN({                                                          // 17
        "class": "Mongol_key"                                                                          // 18
      }, '"created_by"'), ': "', HTML.A({                                                              // 19
        href: "http://maxsavin.com"                                                                    // 20
      }, "Max Savin"), '",\n  ', HTML.SPAN({                                                           // 21
        "class": "Mongol_key"                                                                          // 22
      }, '"code_and_docs"'), ': "', HTML.A({                                                           // 23
        href: "https://github.com/msavin/JetSetter"                                                    // 24
      }, "on GitHub"), '",\n  ', HTML.SPAN({                                                           // 25
        "class": "Mongol_key"                                                                          // 26
      }, '"license"'), ': "', HTML.A({                                                                 // 27
        href: "https://github.com/msavin/JetSetter/blob/master/documentation/LICENSE.md"               // 28
      }, "MIT"), '",\n} , {\n  ', HTML.SPAN({                                                          // 29
        "class": "Mongol_key"                                                                          // 30
      }, '"more_toys!"'), ': "', HTML.A({                                                              // 31
        href: "http://bit.ly/1Lv1Ou4"                                                                  // 32
      }, "Meteor Toys"), '"\n}\n'), "\n			"), "\n		"), "\n	" ];                                        // 33
    });                                                                                                // 34
  });                                                                                                  // 35
}));                                                                                                   // 36
                                                                                                       // 37
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 461
                                                                                                             // 462
}).call(this);                                                                                               // 463
                                                                                                             // 464
                                                                                                             // 465
                                                                                                             // 466
                                                                                                             // 467
                                                                                                             // 468
                                                                                                             // 469
(function () {                                                                                               // 470
                                                                                                             // 471
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 472
//                                                                                                     //    // 473
// packages/msavin:jetsetter/client/row_header/JetSetter_header.js                                     //    // 474
//                                                                                                     //    // 475
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 476
                                                                                                       //    // 477
                                                                                                       // 1  // 478
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 479
                                                                                                             // 480
}).call(this);                                                                                               // 481
                                                                                                             // 482
                                                                                                             // 483
                                                                                                             // 484
                                                                                                             // 485
                                                                                                             // 486
                                                                                                             // 487
(function () {                                                                                               // 488
                                                                                                             // 489
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 490
//                                                                                                     //    // 491
// packages/msavin:jetsetter/client/row_session/template.JetSetter_row.js                              //    // 492
//                                                                                                     //    // 493
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 494
                                                                                                       //    // 495
                                                                                                       // 1  // 496
Template.__checkName("JetSetter_row");                                                                 // 2  // 497
Template["JetSetter_row"] = new Template("Template.JetSetter_row", (function() {                       // 3  // 498
  var view = this;                                                                                     // 4  // 499
  return Blaze._TemplateWith(function() {                                                              // 5  // 500
    return {                                                                                           // 6  // 501
      name: Spacebars.call(view.lookup("."))                                                           // 7  // 502
    };                                                                                                 // 8  // 503
  }, function() {                                                                                      // 9  // 504
    return Spacebars.include(view.lookupTemplate("JetSetter_Component"), function() {                  // 10
      return [ "\n\n		", Blaze.View("lookup:.", function() {                                           // 11
        return Spacebars.mustache(view.lookup("."));                                                   // 12
      }), HTML.SPAN({                                                                                  // 13
        "class": "JetSetter_fader"                                                                     // 14
      }, ": ", Blaze.View("lookup:value", function() {                                                 // 15
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("value")));                            // 16
      })), "\n		", Spacebars.include(view.lookupTemplate("JetSetter_editor")), "\n\n	" ];              // 17
    });                                                                                                // 18
  });                                                                                                  // 19
}));                                                                                                   // 20
                                                                                                       // 21
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 517
                                                                                                             // 518
}).call(this);                                                                                               // 519
                                                                                                             // 520
                                                                                                             // 521
                                                                                                             // 522
                                                                                                             // 523
                                                                                                             // 524
                                                                                                             // 525
(function () {                                                                                               // 526
                                                                                                             // 527
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 528
//                                                                                                     //    // 529
// packages/msavin:jetsetter/client/row_session/JetSetter_row.js                                       //    // 530
//                                                                                                     //    // 531
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 532
                                                                                                       //    // 533
                                                                                                       // 1  // 534
Template.JetSetter_row.helpers({                                                                       // 2  // 535
    value: function () {                                                                               // 3  // 536
        var value = Session.get(this);                                                                 // 4  // 537
        var stringed = JSON.stringify(value, undefined, 0);                                            // 5  // 538
        return stringed;                                                                               // 6  // 539
   }                                                                                                   // 7  // 540
});                                                                                                    // 8  // 541
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 542
                                                                                                             // 543
}).call(this);                                                                                               // 544
                                                                                                             // 545
                                                                                                             // 546
                                                                                                             // 547
                                                                                                             // 548
                                                                                                             // 549
                                                                                                             // 550
(function () {                                                                                               // 551
                                                                                                             // 552
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 553
//                                                                                                     //    // 554
// packages/msavin:jetsetter/client/_component/template.component.js                                   //    // 555
//                                                                                                     //    // 556
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 557
                                                                                                       //    // 558
                                                                                                       // 1  // 559
Template.__checkName("JetSetter_Component");                                                           // 2  // 560
Template["JetSetter_Component"] = new Template("Template.JetSetter_Component", (function() {           // 3  // 561
  var view = this;                                                                                     // 4  // 562
  return HTML.DIV({                                                                                    // 5  // 563
    "class": function() {                                                                              // 6  // 564
      return [ "JetSetter_row ", Spacebars.mustache(view.lookup("expand")) ];                          // 7  // 565
    },                                                                                                 // 8  // 566
    id: function() {                                                                                   // 9  // 567
      return [ "JetSetter_", Spacebars.mustache(view.lookup("name")) ];                                // 10
    }                                                                                                  // 11
  }, "\n		", Blaze._InOuterTemplateScope(view, function() {                                            // 12
    return Spacebars.include(function() {                                                              // 13
      return Spacebars.call(view.templateContentBlock);                                                // 14
    });                                                                                                // 15
  }), "\n	");                                                                                          // 16
}));                                                                                                   // 17
                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 577
                                                                                                             // 578
}).call(this);                                                                                               // 579
                                                                                                             // 580
                                                                                                             // 581
                                                                                                             // 582
                                                                                                             // 583
                                                                                                             // 584
                                                                                                             // 585
(function () {                                                                                               // 586
                                                                                                             // 587
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 588
//                                                                                                     //    // 589
// packages/msavin:jetsetter/client/_component/component.js                                            //    // 590
//                                                                                                     //    // 591
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 592
                                                                                                       //    // 593
Template.JetSetter_Component.helpers({                                                                 // 1  // 594
	expand: function () {                                                                                 // 2  // 595
	                                                                                                      // 3  // 596
	    var current = String(MeteorToysDict.get("JetSetter_current"));                                    // 4  // 597
	    var item    = "JetSetter_" + String(this.name);                                                   // 5  // 598
                                                                                                       // 6  // 599
	    if (current === item) {                                                                           // 7  // 600
	        return "JetSetter_row_expand";                                                                // 8  // 601
	    }                                                                                                 // 9  // 602
                                                                                                       // 10
	}                                                                                                     // 11
});                                                                                                    // 12
                                                                                                       // 13
Template.JetSetter_Component.events({                                                                  // 14
	'click .JetSetter_row': function () {                                                                 // 15
                                                                                                       // 16
		var current = String(MeteorToysDict.get("JetSetter_current"));                                       // 17
		var target  = "JetSetter_" + String(this.name);                                                      // 18
                                                                                                       // 19
		if (current === target) {                                                                            // 20
			MeteorToysDict.set("JetSetter_current", null);                                                      // 21
		} else {                                                                                             // 22
			MeteorToysDict.set("JetSetter_current", target);                                                    // 23
		}                                                                                                    // 24
		                                                                                                     // 25
	},                                                                                                    // 26
	'click .JetSetter_editor': function (e, t) {                                                          // 27
	    e.stopPropagation();                                                                              // 28
	}                                                                                                     // 29
});                                                                                                    // 30
                                                                                                       // 31
                                                                                                       // 32
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 626
                                                                                                             // 627
}).call(this);                                                                                               // 628
                                                                                                             // 629
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['msavin:jetsetter'] = {
  JetSetter: JetSetter
};

})();
