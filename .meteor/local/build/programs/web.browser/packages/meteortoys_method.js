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
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var Template = Package.templating.Template;
var Mongo = Package.mongo.Mongo;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var MeteorToysDict, i;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/meteortoys_method/packages/meteortoys_method.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
                                                                                                                       // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                               //    // 4
// packages/meteortoys:method/client/template.main.js                                                            //    // 5
//                                                                                                               //    // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                                 //    // 8
                                                                                                                 // 1  // 9
Template.__checkName("MeteorToys_method");                                                                       // 2  // 10
Template["MeteorToys_method"] = new Template("Template.MeteorToys_method", (function() {                         // 3  // 11
  var view = this;                                                                                               // 4  // 12
  return Blaze._TemplateWith(function() {                                                                        // 5  // 13
    return {                                                                                                     // 6  // 14
      name: Spacebars.call("MeteorToys_method")                                                                  // 7  // 15
    };                                                                                                           // 8  // 16
  }, function() {                                                                                                // 9  // 17
    return Spacebars.include(view.lookupTemplate("MeteorToy"), function() {                                      // 10
      return [ "\n		", Blaze.If(function() {                                                                     // 11
        return Spacebars.call(view.lookup("hasTarget"));                                                         // 12
      }, function() {                                                                                            // 13
        return [ "\n			", Spacebars.include(view.lookupTemplate("MeteorToys_method_header_new")), "\n			", Spacebars.include(view.lookupTemplate("MeteorToys_method_content_new")), "\n		" ];
      }, function() {                                                                                            // 15
        return [ "\n			", Spacebars.include(view.lookupTemplate("MeteorToys_method_header")), "\n			", Spacebars.include(view.lookupTemplate("MeteorToys_method_content")), "\n		" ];
      }), "\n	" ];                                                                                               // 17
    });                                                                                                          // 18
  });                                                                                                            // 19
}));                                                                                                             // 20
                                                                                                                 // 21
Template.__checkName("MeteorToys_method_header");                                                                // 22
Template["MeteorToys_method_header"] = new Template("Template.MeteorToys_method_header", (function() {           // 23
  var view = this;                                                                                               // 24
  return HTML.Raw('<div class="MeteorToys_method_header">\n		<div class="MeteorToys_name">Call a Method: </div>\n	</div>');
}));                                                                                                             // 26
                                                                                                                 // 27
Template.__checkName("MeteorToys_method_content");                                                               // 28
Template["MeteorToys_method_content"] = new Template("Template.MeteorToys_method_content", (function() {         // 29
  var view = this;                                                                                               // 30
  return HTML.DIV({                                                                                              // 31
    "class": "MeteorToys_method_content"                                                                         // 32
  }, "\n		", Blaze.Each(function() {                                                                             // 33
    return Spacebars.call(view.lookup("method"));                                                                // 34
  }, function() {                                                                                                // 35
    return [ "\n			", Spacebars.include(view.lookupTemplate("MeteorToys_method_method")), "\n		" ];              // 36
  }), "\n	");                                                                                                    // 37
}));                                                                                                             // 38
                                                                                                                 // 39
Template.__checkName("MeteorToys_method_method");                                                                // 40
Template["MeteorToys_method_method"] = new Template("Template.MeteorToys_method_method", (function() {           // 41
  var view = this;                                                                                               // 42
  return HTML.DIV({                                                                                              // 43
    "class": "MeteorToys_row MeteorToys_row_hoverable"                                                           // 44
  }, "\n		", Blaze.View("lookup:.", function() {                                                                 // 45
    return Spacebars.mustache(view.lookup("."));                                                                 // 46
  }), "\n	");                                                                                                    // 47
}));                                                                                                             // 48
                                                                                                                 // 49
Template.__checkName("MeteorToys_method_header_new");                                                            // 50
Template["MeteorToys_method_header_new"] = new Template("Template.MeteorToys_method_header_new", (function() {   // 51
  var view = this;                                                                                               // 52
  return HTML.Raw('<div class="MeteorToys_method_header">\n		<div class="MeteorToys_method_button">Cancel</div>\n		<div class="MeteorToys_name">Call a Method: </div>\n	</div>');
}));                                                                                                             // 54
                                                                                                                 // 55
Template.__checkName("MeteorToys_method_content_new");                                                           // 56
Template["MeteorToys_method_content_new"] = new Template("Template.MeteorToys_method_content_new", (function() { // 57
  var view = this;                                                                                               // 58
  return HTML.DIV({                                                                                              // 59
    "class": "MeteorToys_method_content"                                                                         // 60
  }, "\n		", HTML.FORM("\n			", HTML.DIV({                                                                       // 61
    "class": "MeteorToys_row"                                                                                    // 62
  }, Blaze.View("lookup:name", function() {                                                                      // 63
    return Spacebars.mustache(view.lookup("name"));                                                              // 64
  })), "\n			", Blaze.Each(function() {                                                                          // 65
    return Spacebars.call(view.lookup("param"));                                                                 // 66
  }, function() {                                                                                                // 67
    return [ "\n				", HTML.DIV({                                                                                // 68
      "class": "MeteorToys_row"                                                                                  // 69
    }, "\n					\n					", HTML.INPUT({                                                                            // 70
      id: function() {                                                                                           // 71
        return [ "MeteorToys_method_", Spacebars.mustache(view.lookup(".")) ];                                   // 72
      }                                                                                                          // 73
    }), "\n					", HTML.DIV({                                                                                    // 74
      "class": "MeteorToys_row_name"                                                                             // 75
    }, Blaze.View("lookup:.", function() {                                                                       // 76
      return Spacebars.mustache(view.lookup("."));                                                               // 77
    })), "\n				"), "\n			" ];                                                                                   // 78
  }), "\n			", HTML.Raw('<input type="submit" value="Call">'), "\n		"), HTML.Raw("\n		<br><br>Note: use double strings instead of single strings if entering objects or arrays\n\n	"));
}));                                                                                                             // 80
                                                                                                                 // 81
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 90
                                                                                                                       // 91
}).call(this);                                                                                                         // 92
                                                                                                                       // 93
                                                                                                                       // 94
                                                                                                                       // 95
                                                                                                                       // 96
                                                                                                                       // 97
                                                                                                                       // 98
(function () {                                                                                                         // 99
                                                                                                                       // 100
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 101
//                                                                                                               //    // 102
// packages/meteortoys:method/client/main.js                                                                     //    // 103
//                                                                                                               //    // 104
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 105
                                                                                                                 //    // 106
                                                                                                                 // 1  // 107
// Initialize Reactive-Dict                                                                                      // 2  // 108
MeteorToysDict = Package["meteortoys:toykit"].MeteorToysDict;                                                    // 3  // 109
                                                                                                                 // 4  // 110
// JavaScript                                                                                                    // 5  // 111
                                                                                                                 // 6  // 112
Template.MeteorToys_method_header_new.events({                                                                   // 7  // 113
	'click .MeteorToys_method_button': function (e, t) {                                                            // 8  // 114
		MeteorToysDict.set("MeteorToys_method_target", false)                                                          // 9  // 115
	}                                                                                                               // 10
});                                                                                                              // 11
                                                                                                                 // 12
Template.MeteorToys_method.helpers({                                                                             // 13
	hasTarget: function () {                                                                                        // 14
		return MeteorToysDict.get("MeteorToys_method_target");                                                         // 15
	}                                                                                                               // 16
});                                                                                                              // 17
                                                                                                                 // 18
Template.MeteorToys_method_content.helpers({                                                                     // 19
	method: function () {                                                                                           // 20
		return MeteorToysDict.get("MeteorToys_method_methods");                                                        // 21
	}                                                                                                               // 22
});                                                                                                              // 23
                                                                                                                 // 24
Template.MeteorToys_method_content_new.helpers({                                                                 // 25
	name: function () {                                                                                             // 26
		return MeteorToysDict.get("MeteorToys_method_target");                                                         // 27
	},                                                                                                              // 28
	param: function () {                                                                                            // 29
		return MeteorToysDict.get("MeteorToys_method_target_params");                                                  // 30
	}                                                                                                               // 31
});                                                                                                              // 32
Template.MeteorToys_method_method.events({                                                                       // 33
	'click .MeteorToys_row': function () {                                                                          // 34
		var target = String(this)                                                                                      // 35
		                                                                                                               // 36
		Meteor.call("MeteorToy_method_details", target, function (e, r) {                                              // 37
			if (e) {                                                                                                      // 38
				alert("There was an error.")                                                                                 // 39
			} else {                                                                                                      // 40
				MeteorToysDict.set("MeteorToys_method_target", target);                                                      // 41
				MeteorToysDict.set("MeteorToys_method_target_params", r);                                                    // 42
			}                                                                                                             // 43
		});                                                                                                            // 44
	}                                                                                                               // 45
});                                                                                                              // 46
                                                                                                                 // 47
Tracker.autorun(function () {                                                                                    // 48
	if (MeteorToysDict.get("MeteorToys_display")) {                                                                 // 49
		Meteor.call("MeteorToys_method_handlers", function (e, r) {                                                    // 50
			if (!e) {                                                                                                     // 51
				MeteorToysDict.set("MeteorToys_method_methods", r)                                                           // 52
			}                                                                                                             // 53
		})                                                                                                             // 54
	}                                                                                                               // 55
	                                                                                                                // 56
});                                                                                                              // 57
                                                                                                                 // 58
Template.MeteorToys_method_content_new.events({                                                                  // 59
	'submit': function (e) {                                                                                        // 60
                                                                                                                 // 61
		e.preventDefault()                                                                                             // 62
		                                                                                                               // 63
		var params  = MeteorToysDict.get("MeteorToys_method_target_params"),                                           // 64
		    name    = MeteorToysDict.get("MeteorToys_method_target"),                                                  // 65
		    details = [name],                                                                                          // 66
		    pstring = "";                                                                                              // 67
                                                                                                                 // 68
		if (params) {                                                                                                  // 69
                                                                                                                 // 70
		  jQuery.each(params, function (key, val) {                                                                    // 71
		    var item = $("#MeteorToys_method_" + val).val();                                                           // 72
		    var vari = Package["meteortoys:toykit"].MeteorToys_Parse(item)                                             // 73
		    details.push(vari);                                                                                        // 74
		    pstring += "'" + item + "',";                                                                              // 75
		  })                                                                                                           // 76
                                                                                                                 // 77
		  var chicken = function (e, r) {                                                                              // 78
                                                                                                                 // 79
		  	console.log("=== Ran method call for: " + name + " ===")                                                    // 80
		  	if (e) {                                                                                                    // 81
		  		console.log("Error:")                                                                                      // 82
		  		console.log(e)                                                                                             // 83
		  	}                                                                                                           // 84
		  	if (r) {                                                                                                    // 85
		  		console.log("Result:")                                                                                     // 86
		  		console.log(r)                                                                                             // 87
		  	}                                                                                                           // 88
                                                                                                                 // 89
		  	var original  = "=============================",                                                            // 90
		  		processor = function (original, name) {                                                                    // 91
		  		                                                                                                           // 92
			  		for (i = 0; i < name.length; i++) {                                                                       // 93
			  		    original += "=";                                                                                      // 94
			  		}                                                                                                         // 95
                                                                                                                 // 96
			  		return original;                                                                                          // 97
		  		},                                                                                                         // 98
		  		result = processor(original, name);                                                                        // 99
                                                                                                                 // 100
		  	console.log(result)                                                                                         // 101
		  }                                                                                                            // 102
		  details.push(chicken);                                                                                       // 103
		  Meteor.call.apply(Meteor, details);                                                                          // 104
		  // console.log("PubSub just executed:");                                                                     // 105
		  // console.log("Meteor.subscribe(" + pstring.slice(0, - 1) + ")");                                           // 106
                                                                                                                 // 107
		} else {                                                                                                       // 108
                                                                                                                 // 109
		  Meteor.call(name, function (e, r) {                                                                          // 110
		  	console.log("=== Ran method call for: " + name + " ===")                                                    // 111
		  	if (e) {                                                                                                    // 112
		  		console.log("Error:")                                                                                      // 113
		  		console.log(e)                                                                                             // 114
		  	}                                                                                                           // 115
                                                                                                                 // 116
		  	if (r) {                                                                                                    // 117
		  		console.log("Result:")                                                                                     // 118
		  		console.log(r)                                                                                             // 119
		  	}                                                                                                           // 120
		  	  	var original  = "=============================",                                                         // 121
		  	  		processor = function (original, name) {                                                                 // 122
		  	  		                                                                                                        // 123
		  		  		for (i = 0; i < name.length; i++) {                                                                    // 124
		  		  		    original += "=";                                                                                   // 125
		  		  		}                                                                                                      // 126
                                                                                                                 // 127
		  		  		return original;                                                                                       // 128
		  	  		},                                                                                                      // 129
		  	  		result = processor(original, name);                                                                     // 130
                                                                                                                 // 131
		  	  	console.log(result)                                                                                      // 132
		  });                                                                                                          // 133
                                                                                                                 // 134
		  // console.log("PubSub just executed:");                                                                     // 135
		  // console.log("Meteor.subscribe('" + name + "')");                                                          // 136
                                                                                                                 // 137
		}                                                                                                              // 138
                                                                                                                 // 139
		MeteorToysDict.set("MeteorToys_method_target", false);                                                         // 140
		MeteorToysDict.set("MeteorToys_method_target_params", false);                                                  // 141
                                                                                                                 // 142
	}                                                                                                               // 143
});                                                                                                              // 144
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 251
                                                                                                                       // 252
}).call(this);                                                                                                         // 253
                                                                                                                       // 254
                                                                                                                       // 255
                                                                                                                       // 256
                                                                                                                       // 257
                                                                                                                       // 258
                                                                                                                       // 259
(function () {                                                                                                         // 260
                                                                                                                       // 261
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 262
//                                                                                                               //    // 263
// packages/meteortoys:method/config/config.js                                                                   //    // 264
//                                                                                                               //    // 265
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 266
                                                                                                                 //    // 267
// Meteor.startup(function() {                                                                                   // 1  // 268
	                                                                                                                // 2  // 269
// 	MeteorToys.registerPackage({                                                                                 // 3  // 270
// 		"name": "PubSub",                                                                                           // 4  // 271
// 		"version": "0.1.0",                                                                                         // 5  // 272
// 		"template": "MeteorToys_pubsub"                                                                             // 6  // 273
// 	})                                                                                                           // 7  // 274
                                                                                                                 // 8  // 275
// });                                                                                                           // 9  // 276
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 277
                                                                                                                       // 278
}).call(this);                                                                                                         // 279
                                                                                                                       // 280
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteortoys:method'] = {};

})();
