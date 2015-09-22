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
var MeteorToysDict, p;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/meteortoys_sub/packages/meteortoys_sub.js                                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
(function () {                                                                                                        // 1
                                                                                                                      // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                                             //     // 4
// packages/meteortoys:sub/client/template.main.js                                                             //     // 5
//                                                                                                             //     // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                                               //     // 8
                                                                                                               // 1   // 9
Template.__checkName("MeteorToys_pubsub");                                                                     // 2   // 10
Template["MeteorToys_pubsub"] = new Template("Template.MeteorToys_pubsub", (function() {                       // 3   // 11
  var view = this;                                                                                             // 4   // 12
  return Blaze._TemplateWith(function() {                                                                      // 5   // 13
    return {                                                                                                   // 6   // 14
      name: Spacebars.call("MeteorToys_pubsub")                                                                // 7   // 15
    };                                                                                                         // 8   // 16
  }, function() {                                                                                              // 9   // 17
    return Spacebars.include(view.lookupTemplate("MeteorToy"), function() {                                    // 10  // 18
      return [ "\n		", Blaze.Unless(function() {                                                               // 11  // 19
        return Spacebars.call(view.lookup("editing"));                                                         // 12  // 20
      }, function() {                                                                                          // 13  // 21
        return [ "\n			", Spacebars.include(view.lookupTemplate("MeteorToys_pubsub_header")), "\n			", Spacebars.include(view.lookupTemplate("MeteorToys_pubsub_content")), "\n		" ];
      }, function() {                                                                                          // 15  // 23
        return [ "\n			", Spacebars.include(view.lookupTemplate("MeteorToys_pubsub_new_header")), "\n			", Spacebars.include(view.lookupTemplate("MeteorToys_pubsub_new")), "\n		" ];
      }), "\n	" ];                                                                                             // 17  // 25
    });                                                                                                        // 18  // 26
  });                                                                                                          // 19  // 27
}));                                                                                                           // 20  // 28
                                                                                                               // 21  // 29
Template.__checkName("MeteorToys_pubsub_header");                                                              // 22  // 30
Template["MeteorToys_pubsub_header"] = new Template("Template.MeteorToys_pubsub_header", (function() {         // 23  // 31
  var view = this;                                                                                             // 24  // 32
  return HTML.Raw('<div class="MeteorToys_pubsub_header">\n		<!-- <div class="MeteorToys_pubsub_button">New</div> -->\n		<div class="MeteorToys_name">Subscriptions</div>\n	</div>');
}));                                                                                                           // 26  // 34
                                                                                                               // 27  // 35
Template.__checkName("MeteorToys_pubsub_new_header");                                                          // 28  // 36
Template["MeteorToys_pubsub_new_header"] = new Template("Template.MeteorToys_pubsub_new_header", (function() { // 29  // 37
  var view = this;                                                                                             // 30  // 38
  return HTML.Raw('<div class="MeteorToys_pubsub_header">\n		<div class="MeteorToys_pubsub_button">Cancel</div>\n		<div class="MeteorToys_name">Create New Subscription</div>\n	</div>');
}));                                                                                                           // 32  // 40
                                                                                                               // 33  // 41
Template.__checkName("MeteorToys_pubsub_content");                                                             // 34  // 42
Template["MeteorToys_pubsub_content"] = new Template("Template.MeteorToys_pubsub_content", (function() {       // 35  // 43
  var view = this;                                                                                             // 36  // 44
  return HTML.DIV({                                                                                            // 37  // 45
    "class": "MeteorToys_pubsub_content"                                                                       // 38  // 46
  }, "\n		", Blaze.Each(function() {                                                                           // 39  // 47
    return Spacebars.call(view.lookup("subscription"));                                                        // 40  // 48
  }, function() {                                                                                              // 41  // 49
    return [ "\n			", HTML.DIV({                                                                               // 42  // 50
      "class": "MeteorToys_row_expanded"                                                                       // 43  // 51
    }, "\n				", HTML.DIV({                                                                                    // 44  // 52
      "class": function() {                                                                                    // 45  // 53
        return [ "MeteorToys_pubsub_row_toggle MeteorToys_pubsub_row_toggle_", Spacebars.mustache(view.lookup("name")) ];
      }                                                                                                        // 47  // 55
    }, HTML.CharRef({                                                                                          // 48  // 56
      html: "&times;",                                                                                         // 49  // 57
      str: "×"                                                                                                 // 50  // 58
    })), "\n				", HTML.DIV({                                                                                  // 51  // 59
      "class": "MeteorToys_pubsub_row_name"                                                                    // 52  // 60
    }, Blaze.View("lookup:name", function() {                                                                  // 53  // 61
      return Spacebars.mustache(view.lookup("name"));                                                          // 54  // 62
    })), "\n				", Blaze.If(function() {                                                                       // 55  // 63
      return Spacebars.call(view.lookup("parameters"));                                                        // 56  // 64
    }, function() {                                                                                            // 57  // 65
      return [ "\n					Params: ", Blaze.View("lookup:parameters", function() {                                 // 58  // 66
        return Spacebars.mustache(view.lookup("parameters"));                                                  // 59  // 67
      }), "\n				" ];                                                                                          // 60  // 68
    }, function() {                                                                                            // 61  // 69
      return "\n					No Parameters\n				";                                                                     // 62  // 70
    }), "\n			"), "\n		" ];                                                                                    // 63  // 71
  }, function() {                                                                                              // 64  // 72
    return [ "\n			", HTML.DIV({                                                                               // 65  // 73
      style: "padding-top: 4px"                                                                                // 66  // 74
    }, "No subscriptions available"), "\n		" ];                                                                // 67  // 75
  }), "\n	");                                                                                                  // 68  // 76
}));                                                                                                           // 69  // 77
                                                                                                               // 70  // 78
Template.__checkName("MeteorToys_pubsub_new");                                                                 // 71  // 79
Template["MeteorToys_pubsub_new"] = new Template("Template.MeteorToys_pubsub_new", (function() {               // 72  // 80
  var view = this;                                                                                             // 73  // 81
  return HTML.DIV({                                                                                            // 74  // 82
    "class": "MeteorToys_pubsub_content"                                                                       // 75  // 83
  }, "\n		", Blaze.Unless(function() {                                                                         // 76  // 84
    return Spacebars.call(view.lookup("newTarget"));                                                           // 77  // 85
  }, function() {                                                                                              // 78  // 86
    return [ "\n			", Blaze.Each(function() {                                                                  // 79  // 87
      return Spacebars.call(view.lookup("sub"));                                                               // 80  // 88
    }, function() {                                                                                            // 81  // 89
      return [ "\n				", HTML.DIV({                                                                            // 82  // 90
        "class": "MeteorToys_row MeteorToys_row_sub"                                                           // 83  // 91
      }, "\n					", Blaze.View("lookup:.", function() {                                                        // 84  // 92
        return Spacebars.mustache(view.lookup("."));                                                           // 85  // 93
      }), HTML.CharRef({                                                                                       // 86  // 94
        html: "&nbsp;",                                                                                        // 87  // 95
        str: " "                                                                                               // 88  // 96
      }), "\n				"), "\n			" ];                                                                                // 89  // 97
    }), "\n		" ];                                                                                              // 90  // 98
  }, function() {                                                                                              // 91  // 99
    return [ "\n			", Spacebars.With(function() {                                                              // 92  // 100
      return Spacebars.call(view.lookup("newTarget"));                                                         // 93  // 101
    }, function() {                                                                                            // 94  // 102
      return [ "\n				", HTML.DIV({                                                                            // 95  // 103
        "class": "MeteorToys_row"                                                                              // 96  // 104
      }, "\n					Subscription: ", Blaze.View("lookup:name", function() {                                       // 97  // 105
        return Spacebars.mustache(view.lookup("name"));                                                        // 98  // 106
      }), "\n				"), "\n				", HTML.FORM("\n					", Blaze.Each(function() {                                    // 99  // 107
        return Spacebars.call(view.lookup("params"));                                                          // 100
      }, function() {                                                                                          // 101
        return [ "\n						", HTML.DIV({                                                                        // 102
          "class": "MeteorToys_row"                                                                            // 103
        }, "\n							", Blaze.View("lookup:.", function() {                                                    // 104
          return Spacebars.mustache(view.lookup("."));                                                         // 105
        }), "\n							", HTML.INPUT({                                                                          // 106
          id: function() {                                                                                     // 107
            return [ "MeteorToys_pubsub_param_", Spacebars.mustache(view.lookup(".")) ];                       // 108
          },                                                                                                   // 109
          tabindex: "-1"                                                                                       // 110
        }), "\n						"), "\n					" ];                                                                          // 111
      }), "\n					", HTML.INPUT({                                                                              // 112
        type: "submit",                                                                                        // 113
        value: "Start Subscription"                                                                            // 114
      }), "\n				"), "\n			" ];                                                                                // 115
    }), "\n		" ];                                                                                              // 116
  }), "\n	");                                                                                                  // 117
}));                                                                                                           // 118
                                                                                                               // 119
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 128
                                                                                                                      // 129
}).call(this);                                                                                                        // 130
                                                                                                                      // 131
                                                                                                                      // 132
                                                                                                                      // 133
                                                                                                                      // 134
                                                                                                                      // 135
                                                                                                                      // 136
(function () {                                                                                                        // 137
                                                                                                                      // 138
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 139
//                                                                                                             //     // 140
// packages/meteortoys:sub/client/main.js                                                                      //     // 141
//                                                                                                             //     // 142
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 143
                                                                                                               //     // 144
var _0x3519=["\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x44\x69\x63\x74","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x73\x75\x62\x5F\x65\x64\x69\x74\x69\x6E\x67","\x67\x65\x74","\x68\x65\x6C\x70\x65\x72\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x73\x75\x62","\x73\x65\x74","\x65\x76\x65\x6E\x74\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x73\x75\x62\x5F\x68\x65\x61\x64\x65\x72","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x73\x75\x62\x5F\x74\x61\x72\x67\x65\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x73\x75\x62\x5F\x6E\x65\x77\x5F\x68\x65\x61\x64\x65\x72","\x72\x65\x6E\x64\x65\x72\x65\x64","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x5F\x70\x75\x62\x6C\x69\x73\x68\x5F\x68\x61\x6E\x64\x6C\x65\x72\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x73\x75\x62\x5F\x6E\x61\x6D\x65\x73","\x63\x61\x6C\x6C","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x50\x75\x62\x53\x75\x62","\x6E\x61\x6D\x65","\x5F\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x73","\x64\x65\x66\x61\x75\x6C\x74\x5F\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","","\x70\x61\x72\x61\x6D\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x73\x75\x62\x5F\x63\x6F\x6E\x74\x65\x6E\x74","\x73\x74\x6F\x70","\x6F\x62\x73\x65\x72\x76\x65","\x50\x6F\x6C\x6C\x69\x6E\x67\x20\x65\x76\x65\x72\x79\x20\x33\x20\x73\x65\x63\x6F\x6E\x64\x73","\x4F\x62\x73\x65\x72\x76\x69\x6E\x67\x20\x43\x68\x61\x6E\x67\x65\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x73\x75\x62\x5F\x6E\x65\x77","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x5F\x70\x75\x62\x6C\x69\x73\x68\x5F\x64\x65\x74\x61\x69\x6C\x73","\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74","\x76\x61\x6C","\x23\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x73\x75\x62\x5F\x70\x61\x72\x61\x6D\x5F","\x70\x75\x73\x68","\x27","\x27\x2C","\x65\x61\x63\x68","\x61\x70\x70\x6C\x79","\x73\x75\x62\x73\x63\x72\x69\x62\x65","\x50\x75\x62\x53\x75\x62\x20\x6A\x75\x73\x74\x20\x65\x78\x65\x63\x75\x74\x65\x64\x3A","\x6C\x6F\x67","\x4D\x65\x74\x65\x6F\x72\x2E\x73\x75\x62\x73\x63\x72\x69\x62\x65\x28","\x73\x6C\x69\x63\x65","\x29","\x4D\x65\x74\x65\x6F\x72\x2E\x73\x75\x62\x73\x63\x72\x69\x62\x65\x28\x27","\x27\x29"];MeteorToysDict=Package[_0x3519[1]][_0x3519[0]];Template[_0x3519[5]][_0x3519[4]]({editing:function(){return MeteorToysDict[_0x3519[3]](_0x3519[2])}});Template[_0x3519[8]][_0x3519[7]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x73\x75\x62\x5F\x62\x75\x74\x74\x6F\x6E":function(){MeteorToysDict[_0x3519[6]](_0x3519[2],true)}});Template[_0x3519[10]][_0x3519[7]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x73\x75\x62\x5F\x62\x75\x74\x74\x6F\x6E":function(){MeteorToysDict[_0x3519[6]](_0x3519[2],false);MeteorToysDict[_0x3519[6]](_0x3519[9],false);}});Template[_0x3519[5]][_0x3519[11]]=function(){Meteor[_0x3519[14]](_0x3519[12],function(_0xfe2cx1,_0xfe2cx2){MeteorToysDict[_0x3519[6]](_0x3519[13],_0xfe2cx2)})};Template[_0x3519[21]][_0x3519[4]]({subscription:function(){var _0xfe2cx3=MeteorToysDict[_0x3519[3]](_0x3519[15]);return _0xfe2cx3;},name:function(){return Meteor[_0x3519[18]][_0x3519[17]][this][_0x3519[16]];var _0xfe2cx4=_0x3519[19];if(Meteor[_0x3519[18]][_0x3519[17]][this][_0x3519[16]]){_0xfe2cx4=Meteor[_0x3519[18]][_0x3519[17]][this][_0x3519[16]]};return _0xfe2cx4;},parameters:function(){p=Meteor[_0x3519[18]][_0x3519[17]][this][_0x3519[20]];return p;}});Template[_0x3519[21]][_0x3519[7]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x73\x75\x62\x5F\x72\x6F\x77\x5F\x74\x6F\x67\x67\x6C\x65":function(){Meteor[_0x3519[18]][_0x3519[17]][this][_0x3519[22]]()}});Template[_0x3519[8]][_0x3519[4]]({subType:function(){if(!Object[_0x3519[23]]){return _0x3519[24]}else {return _0x3519[25]}}});Template[_0x3519[26]][_0x3519[4]]({sub:function(){return MeteorToysDict[_0x3519[3]](_0x3519[13])},newTarget:function(){return MeteorToysDict[_0x3519[3]](_0x3519[9])}});Template[_0x3519[26]][_0x3519[7]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x72\x6F\x77\x5F\x73\x75\x62":function(){var _0xfe2cx5=String(this);Meteor[_0x3519[14]](_0x3519[27],_0xfe2cx5,function(_0xfe2cx1,_0xfe2cx2){MeteorToysDict[_0x3519[6]](_0x3519[9],{"\x6E\x61\x6D\x65":_0xfe2cx5,"\x70\x61\x72\x61\x6D\x73":_0xfe2cx2})});},"\x73\x75\x62\x6D\x69\x74":function(_0xfe2cx1,_0xfe2cx6){_0xfe2cx1[_0x3519[28]]();var _0xfe2cx7=MeteorToysDict[_0x3519[3]](_0x3519[9]),_0xfe2cx8=_0xfe2cx7[_0x3519[20]],_0xfe2cx5=_0xfe2cx7[_0x3519[16]],_0xfe2cx9=[_0xfe2cx7[_0x3519[16]]],_0xfe2cxa=_0x3519[19];if(_0xfe2cx8){jQuery[_0x3519[34]](_0xfe2cx8,function(_0xfe2cxb,_0xfe2cxc){var _0xfe2cxd=$(_0x3519[30]+_0xfe2cxc)[_0x3519[29]]();_0xfe2cx9[_0x3519[31]](_0xfe2cxd);_0xfe2cxa+=_0x3519[32]+_0xfe2cxd+_0x3519[33];});Meteor[_0x3519[36]][_0x3519[35]](Meteor,_0xfe2cx9);console[_0x3519[38]](_0x3519[37]);console[_0x3519[38]](_0x3519[39]+_0xfe2cxa[_0x3519[40]](0,-1)+_0x3519[41]);}else {Meteor[_0x3519[36]](_0xfe2cx5);console[_0x3519[38]](_0x3519[37]);console[_0x3519[38]](_0x3519[42]+_0xfe2cx5+_0x3519[43]);};MeteorToysDict[_0x3519[6]](_0x3519[9],false);MeteorToysDict[_0x3519[6]](_0x3519[2],false);}});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 146
                                                                                                                      // 147
}).call(this);                                                                                                        // 148
                                                                                                                      // 149
                                                                                                                      // 150
                                                                                                                      // 151
                                                                                                                      // 152
                                                                                                                      // 153
                                                                                                                      // 154
(function () {                                                                                                        // 155
                                                                                                                      // 156
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 157
//                                                                                                             //     // 158
// packages/meteortoys:sub/config/config.js                                                                    //     // 159
//                                                                                                             //     // 160
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 161
                                                                                                               //     // 162
// Meteor.startup(function() {                                                                                 // 1   // 163
	                                                                                                              // 2   // 164
// 	MeteorToys.registerPackage({                                                                               // 3   // 165
// 		"name": "PubSub",                                                                                         // 4   // 166
// 		"version": "0.1.0",                                                                                       // 5   // 167
// 		"template": "MeteorToys_pubsub"                                                                           // 6   // 168
// 	})                                                                                                         // 7   // 169
                                                                                                               // 8   // 170
// });                                                                                                         // 9   // 171
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 172
                                                                                                                      // 173
}).call(this);                                                                                                        // 174
                                                                                                                      // 175
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteortoys:sub'] = {};

})();
