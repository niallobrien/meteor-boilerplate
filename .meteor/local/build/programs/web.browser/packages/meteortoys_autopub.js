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
var Mongo = Package.mongo.Mongo;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var MeteorToysDict;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// packages/meteortoys_autopub/packages/meteortoys_autopub.js                                                  //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
(function () {                                                                                                 // 1
                                                                                                               // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                       //    // 4
// packages/meteortoys:autopub/client/template.main.js                                                   //    // 5
//                                                                                                       //    // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                         //    // 8
                                                                                                         // 1  // 9
Template.__checkName("MeteorToys_autopub");                                                              // 2  // 10
Template["MeteorToys_autopub"] = new Template("Template.MeteorToys_autopub", (function() {               // 3  // 11
  var view = this;                                                                                       // 4  // 12
  return HTML.DIV({                                                                                      // 5  // 13
    "class": function() {                                                                                // 6  // 14
      return [ "MeteorToys_orb MeteorToys_button ", Spacebars.mustache(view.lookup("autopub_state")) ];  // 7  // 15
    },                                                                                                   // 8  // 16
    id: "MeteorToys_autopub",                                                                            // 9  // 17
    oncontextmenu: "return false;"                                                                       // 10
  }, HTML.Raw('	\n		<div class="MeteorToys_icon"></div>\n		<div class="MeteorToys_wrapper"></div>\n	')); // 11
}));                                                                                                     // 12
                                                                                                         // 13
///////////////////////////////////////////////////////////////////////////////////////////////////////////    // 22
                                                                                                               // 23
}).call(this);                                                                                                 // 24
                                                                                                               // 25
                                                                                                               // 26
                                                                                                               // 27
                                                                                                               // 28
                                                                                                               // 29
                                                                                                               // 30
(function () {                                                                                                 // 31
                                                                                                               // 32
///////////////////////////////////////////////////////////////////////////////////////////////////////////    // 33
//                                                                                                       //    // 34
// packages/meteortoys:autopub/client/main.js                                                            //    // 35
//                                                                                                       //    // 36
///////////////////////////////////////////////////////////////////////////////////////////////////////////    // 37
                                                                                                         //    // 38
// Initialize Reactive-Dict                                                                              // 1  // 39
MeteorToysDict = Package["meteortoys:toykit"].MeteorToysDict;                                            // 2  // 40
                                                                                                         // 3  // 41
                                                                                                         // 4  // 42
// Check for the document                                                                                // 5  // 43
Tracker.autorun(function() {                                                                             // 6  // 44
	if (Package['meteortoys:toykit'].MeteorToysData["AutoPub"].find().count() === 1) {                      // 7  // 45
		MeteorToysDict.set("MeteorToys_autopublish_persistent", true);                                         // 8  // 46
	} else {                                                                                                // 9  // 47
		MeteorToysDict.set("MeteorToys_autopublish_persistent", false);                                        // 10
	}                                                                                                       // 11
});                                                                                                      // 12
                                                                                                         // 13
// Tracker for Subscription parameter                                                                    // 14
Tracker.autorun(function() {                                                                             // 15
	var persistent = MeteorToysDict.get("MeteorToys_autopublish_persistent");                               // 16
	var isolated   = MeteorToysDict.get("MeteorToys_autopublish_isolated");                                 // 17
	// console.log("X");                                                                                    // 18
	// console.log("P" + persistent);                                                                       // 19
	// console.log("I" + isolated);                                                                         // 20
                                                                                                         // 21
	if (persistent) {                                                                                       // 22
		MeteorToysDict.set("MeteorToys_autopublish", true);                                                    // 23
                                                                                                         // 24
	} else {                                                                                                // 25
                                                                                                         // 26
		if (isolated) {                                                                                        // 27
			MeteorToysDict.set("MeteorToys_autopublish", true);                                                   // 28
                                                                                                         // 29
		} else {                                                                                               // 30
			MeteorToysDict.set("MeteorToys_autopublish", false);                                                  // 31
                                                                                                         // 32
		}                                                                                                      // 33
                                                                                                         // 34
	}                                                                                                       // 35
                                                                                                         // 36
	// }                                                                                                    // 37
	// console.log('yo');                                                                                   // 38
                                                                                                         // 39
})                                                                                                       // 40
                                                                                                         // 41
//                                                                                                       // 42
Template.MeteorToys_autopub.events({                                                                     // 43
	'click': function (e, t) {                                                                              // 44
                                                                                                         // 45
 		if (e.ctrlKey || e.metaKey || e.shiftKey) {                                                           // 46
                                                                                                         // 47
			//                                                                                                    // 48
				Meteor.call("MeteorToys_autopub", function(e,r) {                                                    // 49
					if (e) {                                                                                            // 50
						alert("There has been an error enabling persistent AutoPub.")                                      // 51
					}                                                                                                   // 52
				});                                                                                                  // 53
			//                                                                                                    // 54
		} else {                                                                                               // 55
			//                                                                                                    // 56
				if (MeteorToysDict.get("MeteorToys_autopublish_isolated")) {                                         // 57
					MeteorToysDict.set("MeteorToys_autopublish_isolated", false);                                       // 58
				} else {                                                                                             // 59
					MeteorToysDict.set("MeteorToys_autopublish_isolated", true);                                        // 60
				}                                                                                                    // 61
			//                                                                                                    // 62
		}                                                                                                      // 63
                                                                                                         // 64
	}                                                                                                       // 65
});                                                                                                      // 66
                                                                                                         // 67
                                                                                                         // 68
Template.MeteorToys_autopub.helpers({                                                                    // 69
  autopub_state: function () {                                                                           // 70
                                                                                                         // 71
		if (MeteorToysDict.get("MeteorToys_autopublish_persistent")) {                                         // 72
			return "MeteorToys_AutoPub_persistent";                                                               // 73
		} else {                                                                                               // 74
				if (MeteorToysDict.get("MeteorToys_autopublish_isolated")) {                                         // 75
					return "MeteorToys_AutoPub_active";                                                                 // 76
				} else {                                                                                             // 77
						return "MeteorToys_AutoPub"                                                                        // 78
				}                                                                                                    // 79
		}                                                                                                      // 80
                                                                                                         // 81
  }                                                                                                      // 82
});                                                                                                      // 83
                                                                                                         // 84
///////////////////////////////////////////////////////////////////////////////////////////////////////////    // 123
                                                                                                               // 124
}).call(this);                                                                                                 // 125
                                                                                                               // 126
                                                                                                               // 127
                                                                                                               // 128
                                                                                                               // 129
                                                                                                               // 130
                                                                                                               // 131
(function () {                                                                                                 // 132
                                                                                                               // 133
///////////////////////////////////////////////////////////////////////////////////////////////////////////    // 134
//                                                                                                       //    // 135
// packages/meteortoys:autopub/config/config.js                                                          //    // 136
//                                                                                                       //    // 137
///////////////////////////////////////////////////////////////////////////////////////////////////////////    // 138
                                                                                                         //    // 139
// Meteor.startup(function() {                                                                           // 1  // 140
	                                                                                                        // 2  // 141
// 	MeteorToys.registerPackage({                                                                         // 3  // 142
// 		"name": "PubSub",                                                                                   // 4  // 143
// 		"version": "0.1.0",                                                                                 // 5  // 144
// 		"template": "MeteorToys_pubsub"                                                                     // 6  // 145
// 	})                                                                                                   // 7  // 146
                                                                                                         // 8  // 147
// });                                                                                                   // 9  // 148
///////////////////////////////////////////////////////////////////////////////////////////////////////////    // 149
                                                                                                               // 150
}).call(this);                                                                                                 // 151
                                                                                                               // 152
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteortoys:autopub'] = {};

})();
