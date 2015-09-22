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
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/meteortoys_shell/packages/meteortoys_shell.js                                                    //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
(function () {                                                                                               // 1
                                                                                                             // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                     //    // 4
// packages/meteortoys:shell/client/template.main.js                                                   //    // 5
//                                                                                                     //    // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                       //    // 8
                                                                                                       // 1  // 9
Template.__checkName("MeteorToys_shell");                                                              // 2  // 10
Template["MeteorToys_shell"] = new Template("Template.MeteorToys_shell", (function() {                 // 3  // 11
  var view = this;                                                                                     // 4  // 12
  return Blaze._TemplateWith(function() {                                                              // 5  // 13
    return {                                                                                           // 6  // 14
      name: Spacebars.call("MeteorToys_shell")                                                         // 7  // 15
    };                                                                                                 // 8  // 16
  }, function() {                                                                                      // 9  // 17
    return Spacebars.include(view.lookupTemplate("MeteorToy"), function() {                            // 10
      return [ "\n		", Spacebars.include(view.lookupTemplate("MeteorToys_shell_header")), "\n		", Spacebars.include(view.lookupTemplate("MeteorToys_shell_content")), "\n	" ];
    });                                                                                                // 12
  });                                                                                                  // 13
}));                                                                                                   // 14
                                                                                                       // 15
Template.__checkName("MeteorToys_shell_header");                                                       // 16
Template["MeteorToys_shell_header"] = new Template("Template.MeteorToys_shell_header", (function() {   // 17
  var view = this;                                                                                     // 18
  return HTML.Raw('<div class="MeteorToys_shell_header">\n		<div class="MeteorToys_shell_button">Run</div>\n		<div class="MeteorToys_name">Shell</div>\n	</div>');
}));                                                                                                   // 20
                                                                                                       // 21
Template.__checkName("MeteorToys_shell_content");                                                      // 22
Template["MeteorToys_shell_content"] = new Template("Template.MeteorToys_shell_content", (function() { // 23
  var view = this;                                                                                     // 24
  return HTML.DIV({                                                                                    // 25
    "class": "MeteorToys_shell_content"                                                                // 26
  }, "\n		", Spacebars.include(view.lookupTemplate("MeteorToys_shell_input")), "\n	");                 // 27
}));                                                                                                   // 28
                                                                                                       // 29
Template.__checkName("MeteorToys_shell_input");                                                        // 30
Template["MeteorToys_shell_input"] = new Template("Template.MeteorToys_shell_input", (function() {     // 31
  var view = this;                                                                                     // 32
  return HTML.TEXTAREA({                                                                               // 33
    id: "MeteorToys_shell_input",                                                                      // 34
    tabindex: "-1",                                                                                    // 35
    placeholder: "Enter code here to run it as a method. Results will appear in console."              // 36
  });                                                                                                  // 37
}));                                                                                                   // 38
                                                                                                       // 39
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 48
                                                                                                             // 49
}).call(this);                                                                                               // 50
                                                                                                             // 51
                                                                                                             // 52
                                                                                                             // 53
                                                                                                             // 54
                                                                                                             // 55
                                                                                                             // 56
(function () {                                                                                               // 57
                                                                                                             // 58
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 59
//                                                                                                     //    // 60
// packages/meteortoys:shell/client/main.js                                                            //    // 61
//                                                                                                     //    // 62
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 63
                                                                                                       //    // 64
// JavaScript                                                                                          // 1  // 65
                                                                                                       // 2  // 66
Template.MeteorToys_shell_header.events({                                                              // 3  // 67
	'click .MeteorToys_shell_button': function (e, t) {                                                   // 4  // 68
		                                                                                                     // 5  // 69
		e.preventDefault();                                                                                  // 6  // 70
		                                                                                                     // 7  // 71
		var execute = String($("#MeteorToys_shell_input").val());                                            // 8  // 72
		                                                                                                     // 9  // 73
		Meteor.call("MeteorToys_Shell", execute, function (e,r) {                                            // 10
			if (e) {                                                                                            // 11
				alert("There was an error.");                                                                      // 12
				                                                                                                   // 13
				console.log("=====================================");                                              // 14
				console.log("Shell Error");                                                                        // 15
				console.log(e);                                                                                    // 16
				console.log("=====================================");                                              // 17
			} else {                                                                                            // 18
				console.log("=====================================");                                              // 19
				console.log("Meteor Toys ran the following method:");                                              // 20
				console.log("Method = function () { \n" + execute + "\n}");                                        // 21
				console.log("The results are");                                                                    // 22
				console.log(r);                                                                                    // 23
				console.log("=====================================");                                              // 24
				$("#MeteorToys_shell_input").val("");                                                              // 25
			}                                                                                                   // 26
		});                                                                                                  // 27
                                                                                                       // 28
		                                                                                                     // 29
                                                                                                       // 30
	}                                                                                                     // 31
});                                                                                                    // 32
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 97
                                                                                                             // 98
}).call(this);                                                                                               // 99
                                                                                                             // 100
                                                                                                             // 101
                                                                                                             // 102
                                                                                                             // 103
                                                                                                             // 104
                                                                                                             // 105
(function () {                                                                                               // 106
                                                                                                             // 107
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 108
//                                                                                                     //    // 109
// packages/meteortoys:shell/config/config.js                                                          //    // 110
//                                                                                                     //    // 111
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 112
                                                                                                       //    // 113
// Meteor.startup(function() {                                                                         // 1  // 114
	                                                                                                      // 2  // 115
// 	MeteorToys.registerPackage({                                                                       // 3  // 116
// 		"name": "PubSub",                                                                                 // 4  // 117
// 		"version": "0.1.0",                                                                               // 5  // 118
// 		"template": "MeteorToys_pubsub"                                                                   // 6  // 119
// 	})                                                                                                 // 7  // 120
                                                                                                       // 8  // 121
// });                                                                                                 // 9  // 122
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 123
                                                                                                             // 124
}).call(this);                                                                                               // 125
                                                                                                             // 126
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteortoys:shell'] = {};

})();
