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

/* Package-scope variables */
var MeteorToysDict, MeteorToys_PubSub;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// packages/meteortoys_pub/packages/meteortoys_pub.js                                                          //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
(function () {                                                                                                 // 1
                                                                                                               // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                       //    // 4
// packages/meteortoys:pub/client/template.main.js                                                       //    // 5
//                                                                                                       //    // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                         //    // 8
                                                                                                         // 1  // 9
Template.__checkName("MeteorToys_sub");                                                                  // 2  // 10
Template["MeteorToys_sub"] = new Template("Template.MeteorToys_sub", (function() {                       // 3  // 11
  var view = this;                                                                                       // 4  // 12
  return Blaze._TemplateWith(function() {                                                                // 5  // 13
    return {                                                                                             // 6  // 14
      name: Spacebars.call("MeteorToys_sub")                                                             // 7  // 15
    };                                                                                                   // 8  // 16
  }, function() {                                                                                        // 9  // 17
    return Spacebars.include(view.lookupTemplate("MeteorToy"), function() {                              // 10
      return [ "\n		", Spacebars.include(view.lookupTemplate("MeteorToys_sub_new_header")), "\n		", Spacebars.include(view.lookupTemplate("MeteorToys_sub_new")), "\n	" ];
    });                                                                                                  // 12
  });                                                                                                    // 13
}));                                                                                                     // 14
                                                                                                         // 15
Template.__checkName("MeteorToys_sub_new_header");                                                       // 16
Template["MeteorToys_sub_new_header"] = new Template("Template.MeteorToys_sub_new_header", (function() { // 17
  var view = this;                                                                                       // 18
  return HTML.DIV({                                                                                      // 19
    "class": "MeteorToys_sub_header"                                                                     // 20
  }, "\n		", Blaze.If(function() {                                                                       // 21
    return Spacebars.call(view.lookup("target"));                                                        // 22
  }, function() {                                                                                        // 23
    return [ "\n			", HTML.DIV({                                                                         // 24
      "class": "MeteorToys_sub_button"                                                                   // 25
    }, "Cancel"), "\n		" ];                                                                              // 26
  }), HTML.Raw('\n		<div class="MeteorToys_name">Publications</div>\n	'));                               // 27
}));                                                                                                     // 28
                                                                                                         // 29
Template.__checkName("MeteorToys_sub_new");                                                              // 30
Template["MeteorToys_sub_new"] = new Template("Template.MeteorToys_sub_new", (function() {               // 31
  var view = this;                                                                                       // 32
  return HTML.DIV({                                                                                      // 33
    "class": "MeteorToys_sub_content"                                                                    // 34
  }, "\n		", Blaze.Unless(function() {                                                                   // 35
    return Spacebars.call(view.lookup("newTarget"));                                                     // 36
  }, function() {                                                                                        // 37
    return [ "\n			", Blaze.Each(function() {                                                            // 38
      return Spacebars.call(view.lookup("sub"));                                                         // 39
    }, function() {                                                                                      // 40
      return [ "\n				", HTML.DIV({                                                                      // 41
        "class": "MeteorToys_row MeteorToys_row_hoverable MeteorToys_row_sub"                            // 42
      }, "\n					", Blaze.View("lookup:.", function() {                                                  // 43
        return Spacebars.mustache(view.lookup("."));                                                     // 44
      }), HTML.CharRef({                                                                                 // 45
        html: "&nbsp;",                                                                                  // 46
        str: " "                                                                                         // 47
      }), "\n				"), "\n			" ];                                                                          // 48
    }), "\n		" ];                                                                                        // 49
  }, function() {                                                                                        // 50
    return [ "\n			", Spacebars.With(function() {                                                        // 51
      return Spacebars.call(view.lookup("newTarget"));                                                   // 52
    }, function() {                                                                                      // 53
      return [ "\n				", HTML.DIV({                                                                      // 54
        "class": "MeteorToys_row "                                                                       // 55
      }, "\n					", Blaze.View("lookup:name", function() {                                               // 56
        return Spacebars.mustache(view.lookup("name"));                                                  // 57
      }), "\n				"), "\n				", HTML.FORM("\n					", Blaze.Each(function() {                              // 58
        return Spacebars.call(view.lookup("params"));                                                    // 59
      }, function() {                                                                                    // 60
        return [ "\n						", HTML.DIV({                                                                  // 61
          "class": "MeteorToys_row"                                                                      // 62
        }, "\n							", HTML.INPUT({                                                                     // 63
          id: function() {                                                                               // 64
            return [ "MeteorToys_sub_param_", Spacebars.mustache(view.lookup(".")) ];                    // 65
          }                                                                                              // 66
        }), "\n							", HTML.DIV({                                                                      // 67
          "class": "MeteorToys_row_name"                                                                 // 68
        }, Blaze.View("lookup:.", function() {                                                           // 69
          return Spacebars.mustache(view.lookup("."));                                                   // 70
        })), "\n						"), "\n					" ];                                                                   // 71
      }), "\n					", HTML.INPUT({                                                                        // 72
        type: "submit",                                                                                  // 73
        value: "Subscribe"                                                                               // 74
      }), "\n				"), "\n			" ];                                                                          // 75
    }), "\n		" ];                                                                                        // 76
  }), "\n	");                                                                                            // 77
}));                                                                                                     // 78
                                                                                                         // 79
///////////////////////////////////////////////////////////////////////////////////////////////////////////    // 88
                                                                                                               // 89
}).call(this);                                                                                                 // 90
                                                                                                               // 91
                                                                                                               // 92
                                                                                                               // 93
                                                                                                               // 94
                                                                                                               // 95
                                                                                                               // 96
(function () {                                                                                                 // 97
                                                                                                               // 98
///////////////////////////////////////////////////////////////////////////////////////////////////////////    // 99
//                                                                                                       //    // 100
// packages/meteortoys:pub/client/main.js                                                                //    // 101
//                                                                                                       //    // 102
///////////////////////////////////////////////////////////////////////////////////////////////////////////    // 103
                                                                                                         //    // 104
var _0xf036=["\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x44\x69\x63\x74","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x73\x75\x62\x5F\x65\x64\x69\x74\x69\x6E\x67","\x73\x65\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x73\x75\x62\x5F\x74\x61\x72\x67\x65\x74","\x65\x76\x65\x6E\x74\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x73\x75\x62\x5F\x6E\x65\x77\x5F\x68\x65\x61\x64\x65\x72","\x67\x65\x74","\x68\x65\x6C\x70\x65\x72\x73","\x72\x65\x6E\x64\x65\x72\x65\x64","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x73\x75\x62","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x5F\x70\x75\x62\x6C\x69\x73\x68\x5F\x68\x61\x6E\x64\x6C\x65\x72\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x73\x75\x62\x5F\x6E\x61\x6D\x65\x73","\x63\x61\x6C\x6C","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x73\x75\x62\x5F\x6E\x65\x77","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x5F\x70\x75\x62\x6C\x69\x73\x68\x5F\x64\x65\x74\x61\x69\x6C\x73","\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74","\x70\x61\x72\x61\x6D\x73","\x6E\x61\x6D\x65","","\x76\x61\x6C","\x23\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x73\x75\x62\x5F\x70\x61\x72\x61\x6D\x5F","\x70\x75\x73\x68","\x27","\x27\x2C","\x65\x61\x63\x68","\x61\x70\x70\x6C\x79","\x73\x75\x62\x73\x63\x72\x69\x62\x65"];MeteorToysDict=Package[_0xf036[1]][_0xf036[0]];Template[_0xf036[6]][_0xf036[5]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x73\x75\x62\x5F\x62\x75\x74\x74\x6F\x6E":function(){MeteorToysDict[_0xf036[3]](_0xf036[2],false);MeteorToysDict[_0xf036[3]](_0xf036[4],false);}});Template[_0xf036[6]][_0xf036[8]]({target:function(){return MeteorToysDict[_0xf036[7]](_0xf036[4])}});Template[_0xf036[10]][_0xf036[9]]=function(){Meteor[_0xf036[13]](_0xf036[11],function(_0xc4d1x1,_0xc4d1x2){MeteorToysDict[_0xf036[3]](_0xf036[12],_0xc4d1x2)})};Template[_0xf036[14]][_0xf036[8]]({sub:function(){return MeteorToysDict[_0xf036[7]](_0xf036[12])},newTarget:function(){return MeteorToysDict[_0xf036[7]](_0xf036[4])}});Template[_0xf036[14]][_0xf036[5]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x72\x6F\x77\x5F\x73\x75\x62":function(){var _0xc4d1x3=String(this);Meteor[_0xf036[13]](_0xf036[15],_0xc4d1x3,function(_0xc4d1x1,_0xc4d1x2){MeteorToysDict[_0xf036[3]](_0xf036[4],{"\x6E\x61\x6D\x65":_0xc4d1x3,"\x70\x61\x72\x61\x6D\x73":_0xc4d1x2})});},"\x73\x75\x62\x6D\x69\x74":function(_0xc4d1x1,_0xc4d1x4){_0xc4d1x1[_0xf036[16]]();var _0xc4d1x5=MeteorToysDict[_0xf036[7]](_0xf036[4]),_0xc4d1x6=_0xc4d1x5[_0xf036[17]],_0xc4d1x3=_0xc4d1x5[_0xf036[18]],_0xc4d1x7=[_0xc4d1x5[_0xf036[18]]],_0xc4d1x8=_0xf036[19];if(_0xc4d1x6){jQuery[_0xf036[25]](_0xc4d1x6,function(_0xc4d1x9,_0xc4d1xa){var _0xc4d1xb=$(_0xf036[21]+_0xc4d1xa)[_0xf036[20]]();var _0xc4d1xc=Package[_0xf036[1]].MeteorToys_Parse(_0xc4d1xb);_0xc4d1x7[_0xf036[22]](_0xc4d1xc);_0xc4d1x8+=_0xf036[23]+_0xc4d1xb+_0xf036[24];});Meteor[_0xf036[27]][_0xf036[26]](Meteor,_0xc4d1x7);}else {Meteor[_0xf036[27]](_0xc4d1x3)};MeteorToysDict[_0xf036[3]](_0xf036[4],false);MeteorToysDict[_0xf036[3]](_0xf036[2],false);}});
///////////////////////////////////////////////////////////////////////////////////////////////////////////    // 106
                                                                                                               // 107
}).call(this);                                                                                                 // 108
                                                                                                               // 109
                                                                                                               // 110
                                                                                                               // 111
                                                                                                               // 112
                                                                                                               // 113
                                                                                                               // 114
(function () {                                                                                                 // 115
                                                                                                               // 116
///////////////////////////////////////////////////////////////////////////////////////////////////////////    // 117
//                                                                                                       //    // 118
// packages/meteortoys:pub/config/config.js                                                              //    // 119
//                                                                                                       //    // 120
///////////////////////////////////////////////////////////////////////////////////////////////////////////    // 121
                                                                                                         //    // 122
// Meteor.startup(function() {                                                                           // 1  // 123
	                                                                                                        // 2  // 124
// 	MeteorToys.registerPackage({                                                                         // 3  // 125
// 		"name": "PubSub",                                                                                   // 4  // 126
// 		"version": "0.1.0",                                                                                 // 5  // 127
// 		"template": "MeteorToys_pubsub"                                                                     // 6  // 128
// 	})                                                                                                   // 7  // 129
                                                                                                         // 8  // 130
// });                                                                                                   // 9  // 131
///////////////////////////////////////////////////////////////////////////////////////////////////////////    // 132
                                                                                                               // 133
}).call(this);                                                                                                 // 134
                                                                                                               // 135
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteortoys:pub'] = {
  MeteorToys_PubSub: MeteorToys_PubSub
};

})();
