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

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/meteortoys_status/packages/meteortoys_status.js                                    //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
(function () {                                                                                 // 1
                                                                                               // 2
///////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                       //    // 4
// packages/meteortoys:status/client/template.main.js                                    //    // 5
//                                                                                       //    // 6
///////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                         //    // 8
                                                                                         // 1  // 9
Template.__checkName("MeteorToys_status");                                               // 2  // 10
Template["MeteorToys_status"] = new Template("Template.MeteorToys_status", (function() { // 3  // 11
  var view = this;                                                                       // 4  // 12
  return Blaze._TemplateWith(function() {                                                // 5  // 13
    return {                                                                             // 6  // 14
      name: Spacebars.call("MeteorToys_status"),                                         // 7  // 15
      type: Spacebars.call("button"),                                                    // 8  // 16
      empty: Spacebars.call(true)                                                        // 9  // 17
    };                                                                                   // 10
  }, function() {                                                                        // 11
    return Spacebars.include(view.lookupTemplate("MeteorToy"), function() {              // 12
      return [ "\n		", Blaze.If(function() {                                             // 13
        return Spacebars.call(view.lookup("online"));                                    // 14
      }, function() {                                                                    // 15
        return [ "\n			", HTML.DIV({                                                     // 16
          "class": "MeteorToys_icon MeteorToys_icon_online"                              // 17
        }), "\n		" ];                                                                    // 18
      }), "\n		", Blaze.If(function() {                                                  // 19
        return Spacebars.call(view.lookup("connecting"));                                // 20
      }, function() {                                                                    // 21
        return [ "\n			", HTML.DIV({                                                     // 22
          "class": "MeteorToys_icon MeteorToys_icon_connecting"                          // 23
        }), "\n		" ];                                                                    // 24
      }), "\n		", Blaze.If(function() {                                                  // 25
        return Spacebars.call(view.lookup("offline"));                                   // 26
      }, function() {                                                                    // 27
        return [ "\n			", HTML.DIV({                                                     // 28
          "class": "MeteorToys_icon MeteorToys_icon_offline"                             // 29
        }), "\n		" ];                                                                    // 30
      }), "\n	" ];                                                                       // 31
    });                                                                                  // 32
  });                                                                                    // 33
}));                                                                                     // 34
                                                                                         // 35
///////////////////////////////////////////////////////////////////////////////////////////    // 44
                                                                                               // 45
}).call(this);                                                                                 // 46
                                                                                               // 47
                                                                                               // 48
                                                                                               // 49
                                                                                               // 50
                                                                                               // 51
                                                                                               // 52
(function () {                                                                                 // 53
                                                                                               // 54
///////////////////////////////////////////////////////////////////////////////////////////    // 55
//                                                                                       //    // 56
// packages/meteortoys:status/client/main.js                                             //    // 57
//                                                                                       //    // 58
///////////////////////////////////////////////////////////////////////////////////////////    // 59
                                                                                         //    // 60
var _0x8191=["\x63\x6F\x6E\x6E\x65\x63\x74\x65\x64","\x73\x74\x61\x74\x75\x73","\x64\x69\x73\x63\x6F\x6E\x6E\x65\x63\x74","\x72\x65\x63\x6F\x6E\x6E\x65\x63\x74","\x65\x76\x65\x6E\x74\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x73\x74\x61\x74\x75\x73","\x6F\x66\x66\x6C\x69\x6E\x65","\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6E\x67","\x68\x65\x6C\x70\x65\x72\x73"];Template[_0x8191[5]][_0x8191[4]]({"\x63\x6C\x69\x63\x6B":function(_0xa215x1,_0xa215x2){if(Meteor[_0x8191[1]]()[_0x8191[0]]){Meteor[_0x8191[2]]()}else {Meteor[_0x8191[3]]()}}});Template[_0x8191[5]][_0x8191[8]]({online:function(){if(Meteor[_0x8191[1]]()[_0x8191[1]]===_0x8191[0]){return true}},offline:function(){if(Meteor[_0x8191[1]]()[_0x8191[1]]===_0x8191[6]){return true}},connecting:function(){if(Meteor[_0x8191[1]]()[_0x8191[1]]===_0x8191[7]){return true}}});
///////////////////////////////////////////////////////////////////////////////////////////    // 62
                                                                                               // 63
}).call(this);                                                                                 // 64
                                                                                               // 65
                                                                                               // 66
                                                                                               // 67
                                                                                               // 68
                                                                                               // 69
                                                                                               // 70
(function () {                                                                                 // 71
                                                                                               // 72
///////////////////////////////////////////////////////////////////////////////////////////    // 73
//                                                                                       //    // 74
// packages/meteortoys:status/config/config.js                                           //    // 75
//                                                                                       //    // 76
///////////////////////////////////////////////////////////////////////////////////////////    // 77
                                                                                         //    // 78
// Meteor.startup(function() {                                                           // 1  // 79
	                                                                                        // 2  // 80
// 	MeteorToys.registerPackage({                                                         // 3  // 81
// 		"name": "PubSub",                                                                   // 4  // 82
// 		"version": "0.1.0",                                                                 // 5  // 83
// 		"template": "MeteorToys_pubsub"                                                     // 6  // 84
// 	})                                                                                   // 7  // 85
                                                                                         // 8  // 86
// });                                                                                   // 9  // 87
///////////////////////////////////////////////////////////////////////////////////////////    // 88
                                                                                               // 89
}).call(this);                                                                                 // 90
                                                                                               // 91
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteortoys:status'] = {};

})();
