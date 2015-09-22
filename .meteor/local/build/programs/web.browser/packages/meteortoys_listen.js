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
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var MeteorToysDict, count;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/meteortoys_listen/packages/meteortoys_listen.js                                                          //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
(function () {                                                                                                       // 1
                                                                                                                     // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                             //    // 4
// packages/meteortoys:listen/client/template.main.js                                                          //    // 5
//                                                                                                             //    // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                               //    // 8
                                                                                                               // 1  // 9
Template.__checkName("MeteorToys_intercept");                                                                  // 2  // 10
Template["MeteorToys_intercept"] = new Template("Template.MeteorToys_intercept", (function() {                 // 3  // 11
  var view = this;                                                                                             // 4  // 12
  return Blaze._TemplateWith(function() {                                                                      // 5  // 13
    return {                                                                                                   // 6  // 14
      name: Spacebars.call("MeteorToys_intercept")                                                             // 7  // 15
    };                                                                                                         // 8  // 16
  }, function() {                                                                                              // 9  // 17
    return Spacebars.include(view.lookupTemplate("MeteorToy"), function() {                                    // 10
      return [ "\n		", Spacebars.include(view.lookupTemplate("MeteorToys_intercept_header")), "\n		", Spacebars.include(view.lookupTemplate("MeteorToys_intercept_content")), "\n	" ];
    });                                                                                                        // 12
  });                                                                                                          // 13
}));                                                                                                           // 14
                                                                                                               // 15
Template.__checkName("MeteorToys_intercept_header");                                                           // 16
Template["MeteorToys_intercept_header"] = new Template("Template.MeteorToys_intercept_header", (function() {   // 17
  var view = this;                                                                                             // 18
  return HTML.DIV({                                                                                            // 19
    "class": "MeteorToys_intercept_header"                                                                     // 20
  }, "\n		", Blaze.Unless(function() {                                                                         // 21
    return Spacebars.call(view.lookup("running"));                                                             // 22
  }, function() {                                                                                              // 23
    return [ "\n			", HTML.DIV({                                                                               // 24
      "class": "MeteorToys_intercept_button MeteorToys_intercept_start"                                        // 25
    }, "Start"), "\n		" ];                                                                                     // 26
  }, function() {                                                                                              // 27
    return [ "\n			", HTML.DIV({                                                                               // 28
      "class": "MeteorToys_intercept_button MeteorToys_intercept_stop"                                         // 29
    }, "Stop"), "\n		" ];                                                                                      // 30
  }), HTML.Raw('\n		<div class="MeteorToys_name">Listen</div>\n	'));                                           // 31
}));                                                                                                           // 32
                                                                                                               // 33
Template.__checkName("MeteorToys_intercept_content");                                                          // 34
Template["MeteorToys_intercept_content"] = new Template("Template.MeteorToys_intercept_content", (function() { // 35
  var view = this;                                                                                             // 36
  return HTML.DIV({                                                                                            // 37
    "class": "MeteorToys_intercept_content"                                                                    // 38
  }, "\n		", Blaze.Unless(function() {                                                                         // 39
    return Spacebars.call(view.lookup("running"));                                                             // 40
  }, function() {                                                                                              // 41
    return "\n			Not running.\n		";                                                                            // 42
  }, function() {                                                                                              // 43
    return [ "\n			", HTML.SPAN({                                                                              // 44
      style: "color: #A6E22D"                                                                                  // 45
    }, HTML.CharRef({                                                                                          // 46
      html: "&#x25BC;",                                                                                        // 47
      str: "▼"                                                                                                 // 48
    })), " ", Blaze.View("lookup:downCount", function() {                                                      // 49
      return Spacebars.mustache(view.lookup("downCount"));                                                     // 50
    }), HTML.BR(), "\n			", HTML.SPAN({                                                                        // 51
      style: "color: #EB4C16"                                                                                  // 52
    }, HTML.CharRef({                                                                                          // 53
      html: "&#x25B2;",                                                                                        // 54
      str: "▲"                                                                                                 // 55
    })), " ", Blaze.View("lookup:upCount", function() {                                                        // 56
      return Spacebars.mustache(view.lookup("upCount"));                                                       // 57
    }), HTML.BR(), "\n			", HTML.BR(), "\n			Open console for details.\n\n		" ];                               // 58
  }), "\n	");                                                                                                  // 59
}));                                                                                                           // 60
                                                                                                               // 61
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 70
                                                                                                                     // 71
}).call(this);                                                                                                       // 72
                                                                                                                     // 73
                                                                                                                     // 74
                                                                                                                     // 75
                                                                                                                     // 76
                                                                                                                     // 77
                                                                                                                     // 78
(function () {                                                                                                       // 79
                                                                                                                     // 80
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 81
//                                                                                                             //    // 82
// packages/meteortoys:listen/client/main.js                                                                   //    // 83
//                                                                                                             //    // 84
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 85
                                                                                                               //    // 86
var _0xae07=["\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x44\x69\x63\x74","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x69\x6E\x74\x65\x72\x63\x65\x70\x74","\x73\x65\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x69\x6E\x74\x65\x72\x63\x65\x70\x74\x65\x64","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x69\x6E\x74\x65\x72\x63\x65\x70\x74\x5F\x64\x6F\x77\x6E","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x69\x6E\x74\x65\x72\x63\x65\x70\x74\x5F\x75\x70","\x6F\x6E","\x6F\x66\x66","\x65\x76\x65\x6E\x74\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x69\x6E\x74\x65\x72\x63\x65\x70\x74\x5F\x68\x65\x61\x64\x65\x72","\x65\x71\x75\x61\x6C\x73","\x68\x65\x6C\x70\x65\x72\x73","\x67\x65\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x69\x6E\x74\x65\x72\x63\x65\x70\x74\x5F\x63\x6F\x6E\x74\x65\x6E\x74","\x5F\x73\x65\x6E\x64","\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x4F\x55\x54\x20","\x6C\x6F\x67","\x63\x61\x6C\x6C","\x6D\x65\x73\x73\x61\x67\x65","\x49\x4E\x20\x20","\x70\x61\x72\x73\x65","\x5F\x73\x74\x72\x65\x61\x6D","\x61\x75\x74\x6F\x72\x75\x6E","\x4D\x65\x74\x65\x6F\x72\x20\x54\x6F\x79\x73\x20\x69\x6E\x74\x65\x72\x63\x65\x70\x74\x20\x73\x74\x61\x72\x74\x65\x64\x20\x61\x74\x20","\x4D\x65\x74\x65\x6F\x72\x20\x54\x6F\x79\x73\x20\x69\x6E\x74\x65\x72\x63\x65\x70\x74\x20\x73\x74\x6F\x70\x70\x65\x64\x20\x61\x74\x20"];MeteorToysDict=Package[_0xae07[1]][_0xae07[0]];MeteorToysDict[_0xae07[3]](_0xae07[2],false);MeteorToysDict[_0xae07[3]](_0xae07[4],false);MeteorToysDict[_0xae07[3]](_0xae07[5],0);MeteorToysDict[_0xae07[3]](_0xae07[6],0);Template[_0xae07[10]][_0xae07[9]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x69\x6E\x74\x65\x72\x63\x65\x70\x74\x5F\x73\x74\x61\x72\x74":function(){MeteorToysDict[_0xae07[3]](_0xae07[2],_0xae07[7])},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x69\x6E\x74\x65\x72\x63\x65\x70\x74\x5F\x73\x74\x6F\x70":function(){MeteorToysDict[_0xae07[3]](_0xae07[2],_0xae07[8])}});Template[_0xae07[10]][_0xae07[12]]({running:function(){if(MeteorToysDict[_0xae07[11]](_0xae07[2],_0xae07[7])){return true}}});Template[_0xae07[14]][_0xae07[12]]({running:function(){if(MeteorToysDict[_0xae07[11]](_0xae07[2],_0xae07[7])){return true}},downCount:function(){return MeteorToysDict[_0xae07[13]](_0xae07[5])},upCount:function(){return MeteorToysDict[_0xae07[13]](_0xae07[6])}});var MeteorToysIntercept=function(){var _0x7564x2=Meteor[_0xae07[16]][_0xae07[15]];Meteor[_0xae07[16]][_0xae07[15]]=function(_0x7564x3){if(MeteorToysDict[_0xae07[11]](_0xae07[2],_0xae07[7])){console[_0xae07[18]](_0xae07[17],_0x7564x3);count=MeteorToysDict[_0xae07[13]](_0xae07[6])+1;MeteorToysDict[_0xae07[3]](_0xae07[6],count);};_0x7564x2[_0xae07[19]](this,_0x7564x3);};Meteor[_0xae07[16]][_0xae07[23]][_0xae07[7]](_0xae07[20],function(_0x7564x4){if(MeteorToysDict[_0xae07[11]](_0xae07[2],_0xae07[7])){console[_0xae07[18]](_0xae07[21],JSON[_0xae07[22]](_0x7564x4));count=MeteorToysDict[_0xae07[13]](_0xae07[5])+1;MeteorToysDict[_0xae07[3]](_0xae07[5],count);}});MeteorToysDict[_0xae07[11]](_0xae07[4],true);};Tracker[_0xae07[24]](function(){if(MeteorToysDict[_0xae07[11]](_0xae07[2],_0xae07[7])){if(MeteorToysDict[_0xae07[11]](_0xae07[4],false)){MeteorToysIntercept()}}});Tracker[_0xae07[24]](function(){if(MeteorToysDict[_0xae07[11]](_0xae07[2],_0xae07[7])){console[_0xae07[18]](_0xae07[25]+Date())};if(MeteorToysDict[_0xae07[11]](_0xae07[2],_0xae07[8])){console[_0xae07[18]](_0xae07[26]+Date())};});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 88
                                                                                                                     // 89
}).call(this);                                                                                                       // 90
                                                                                                                     // 91
                                                                                                                     // 92
                                                                                                                     // 93
                                                                                                                     // 94
                                                                                                                     // 95
                                                                                                                     // 96
(function () {                                                                                                       // 97
                                                                                                                     // 98
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 99
//                                                                                                             //    // 100
// packages/meteortoys:listen/config/config.js                                                                 //    // 101
//                                                                                                             //    // 102
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 103
                                                                                                               //    // 104
// Meteor.startup(function() {                                                                                 // 1  // 105
	                                                                                                              // 2  // 106
// 	MeteorToys.registerPackage({                                                                               // 3  // 107
// 		"name": "PubSub",                                                                                         // 4  // 108
// 		"version": "0.1.0",                                                                                       // 5  // 109
// 		"template": "MeteorToys_pubsub"                                                                           // 6  // 110
// 	})                                                                                                         // 7  // 111
                                                                                                               // 8  // 112
// });                                                                                                         // 9  // 113
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 114
                                                                                                                     // 115
}).call(this);                                                                                                       // 116
                                                                                                                     // 117
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteortoys:listen'] = {};

})();
