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
var ReactiveDict = Package['reactive-dict'].ReactiveDict;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Mongo = Package.mongo.Mongo;
var LocalCollection = Package.minimongo.LocalCollection;
var Minimongo = Package.minimongo.Minimongo;
var Session = Package.session.Session;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var MeteorToysDict, em, pw, MeteorToys_ToyKit, MeteorToys_Parse, displayStatus, MeteorToysData;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/meteortoys_toykit/packages/meteortoys_toykit.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
                                                                                                                       // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/meteortoys:toykit/client/template.main.js                                                               //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("MeteorToys");                                                                                 // 2
Template["MeteorToys"] = new Template("Template.MeteorToys", (function() {                                          // 3
  var view = this;                                                                                                  // 4
  return Blaze.If(function() {                                                                                      // 5
    return Spacebars.call(view.lookup("MeteorToys_Pro"));                                                           // 6
  }, function() {                                                                                                   // 7
    return [ "\n		", Blaze.If(function() {                                                                          // 8
      return Spacebars.call(view.lookup("MeteorToys"));                                                             // 9
    }, function() {                                                                                                 // 10
      return [ "\n			", HTML.DIV({                                                                                  // 11
        "class": "MeteorToys_orbs"                                                                                  // 12
      }, "\n				", Spacebars.include(view.lookupTemplate("MeteorToys_accounts")), "\n				", Spacebars.include(view.lookupTemplate("MeteorToys_shell")), "\n				", Spacebars.include(view.lookupTemplate("MeteorToys_method")), "\n				", Spacebars.include(view.lookupTemplate("MeteorToys_autopub")), "\n				", Spacebars.include(view.lookupTemplate("MeteorToys_sub")), "\n				", Spacebars.include(view.lookupTemplate("MeteorToys_pubsub")), "\n				", Spacebars.include(view.lookupTemplate("MeteorToys_intercept")), "\n				", Spacebars.include(view.lookupTemplate("MeteorToys_status")), "\n				", Spacebars.include(view.lookupTemplate("MeteorToys_reload")), "\n				", Spacebars.include(view.lookupTemplate("MeteorToys_extension")), "\n			"), "\n\n		" ];
    }), "\n	" ];                                                                                                    // 14
  }, function() {                                                                                                   // 15
    return [ "\n		", Blaze.If(function() {                                                                          // 16
      return Spacebars.call(view.lookup("MeteorToys"));                                                             // 17
    }, function() {                                                                                                 // 18
      return [ "\n			", HTML.DIV({                                                                                  // 19
        "class": "MeteorToys_orbs"                                                                                  // 20
      }, "\n				", Blaze._TemplateWith(function() {                                                                 // 21
        return {                                                                                                    // 22
          template: Spacebars.call(view.lookup("all"))                                                              // 23
        };                                                                                                          // 24
      }, function() {                                                                                               // 25
        return Spacebars.include(function() {                                                                       // 26
          return Spacebars.call(Template.__dynamic);                                                                // 27
        });                                                                                                         // 28
      }), "\n				", Spacebars.include(view.lookupTemplate("MeteorToys_extension")), "\n			"), "\n		" ];             // 29
    }), "\n	" ];                                                                                                    // 30
  });                                                                                                               // 31
}));                                                                                                                // 32
                                                                                                                    // 33
Template.__checkName("MeteorToys_extension");                                                                       // 34
Template["MeteorToys_extension"] = new Template("Template.MeteorToys_extension", (function() {                      // 35
  var view = this;                                                                                                  // 36
  return Blaze.If(function() {                                                                                      // 37
    return Spacebars.call(view.lookup("hasMTSDK"));                                                                 // 38
  }, function() {                                                                                                   // 39
    return [ "\n	", Blaze._TemplateWith(function() {                                                                // 40
      return {                                                                                                      // 41
        name: Spacebars.call("MeteorToys_developer")                                                                // 42
      };                                                                                                            // 43
    }, function() {                                                                                                 // 44
      return Spacebars.include(view.lookupTemplate("MeteorToy"), function() {                                       // 45
        return [ "\n		", Spacebars.include(view.lookupTemplate("MeteorToysSDK")), "\n	" ];                          // 46
      });                                                                                                           // 47
    }), "\n	" ];                                                                                                    // 48
  });                                                                                                               // 49
}));                                                                                                                // 50
                                                                                                                    // 51
Template.__checkName("MeteorToy");                                                                                  // 52
Template["MeteorToy"] = new Template("Template.MeteorToy", (function() {                                            // 53
  var view = this;                                                                                                  // 54
  return HTML.DIV({                                                                                                 // 55
    "class": function() {                                                                                           // 56
      return [ "MeteorToys_orb ", Spacebars.mustache(view.lookup("type")), " ", Spacebars.mustache(view.lookup("state")) ];
    },                                                                                                              // 58
    id: function() {                                                                                                // 59
      return Spacebars.mustache(view.lookup("name"));                                                               // 60
    }                                                                                                               // 61
  }, "\n		", Blaze.If(function() {                                                                                  // 62
    return Spacebars.call(view.lookup("empty"));                                                                    // 63
  }, function() {                                                                                                   // 64
    return [ "\n			", Blaze._InOuterTemplateScope(view, function() {                                                // 65
      return Spacebars.include(function() {                                                                         // 66
        return Spacebars.call(view.templateContentBlock);                                                           // 67
      });                                                                                                           // 68
    }), "\n		" ];                                                                                                   // 69
  }, function() {                                                                                                   // 70
    return [ "\n			", HTML.DIV({                                                                                    // 71
      "class": "MeteorToys_icon"                                                                                    // 72
    }), "\n			", HTML.DIV({                                                                                         // 73
      "class": "MeteorToys_orb_wrapper"                                                                             // 74
    }, "\n				", Blaze._InOuterTemplateScope(view, function() {                                                     // 75
      return Spacebars.include(function() {                                                                         // 76
        return Spacebars.call(view.templateContentBlock);                                                           // 77
      });                                                                                                           // 78
    }), "\n			"), "\n		" ];                                                                                         // 79
  }), "\n	");                                                                                                       // 80
}));                                                                                                                // 81
                                                                                                                    // 82
Template.__checkName("MeteorToys_basic");                                                                           // 83
Template["MeteorToys_basic"] = new Template("Template.MeteorToys_basic", (function() {                              // 84
  var view = this;                                                                                                  // 85
  return Blaze._TemplateWith(function() {                                                                           // 86
    return {                                                                                                        // 87
      name: Spacebars.call("MeteorToys_basic")                                                                      // 88
    };                                                                                                              // 89
  }, function() {                                                                                                   // 90
    return Spacebars.include(view.lookupTemplate("MeteorToy"), function() {                                         // 91
      return [ "\n		", HTML.DIV({                                                                                   // 92
        "class": "MeteorToys_sub_header"                                                                            // 93
      }, "\n			", HTML.DIV({                                                                                        // 94
        "class": "MeteorToys_name"                                                                                  // 95
      }, "Activate Meteor Toys"), "\n		"), "\n		", HTML.DIV({                                                       // 96
        "class": "MeteorToys_sub_content"                                                                           // 97
      }, "\n\n		", HTML.FORM("\n\n			", HTML.DIV({                                                                  // 98
        "class": "MeteorToys_row"                                                                                   // 99
      }, "\n				", HTML.INPUT({                                                                                     // 100
        id: "meteortoyscadf"                                                                                        // 101
      }), "\n				", HTML.DIV({                                                                                      // 102
        "class": "MeteorToys_row_name"                                                                              // 103
      }, "Email"), "\n			"), "\n\n			", HTML.DIV({                                                                  // 104
        "class": "MeteorToys_row"                                                                                   // 105
      }, "\n				", HTML.INPUT({                                                                                     // 106
        id: "meteortoyspass"                                                                                        // 107
      }), "\n				", HTML.DIV({                                                                                      // 108
        "class": "MeteorToys_row_name"                                                                              // 109
      }, "Serial"), "\n			"), "\n\n\n				", HTML.INPUT({                                                            // 110
        type: "submit",                                                                                             // 111
        value: "Activate",                                                                                          // 112
        style: "margin-top: -4px"                                                                                   // 113
      }), "\n\n				", HTML.BR(), HTML.BR(), HTML.BR(), HTML.BR(), HTML.BR(), HTML.BR(), HTML.BR(), HTML.BR(), "\n				", HTML.DIV({
        style: "height:10px;"                                                                                       // 115
      }), "\n				Experience the next level", HTML.BR(), " of Mongol and JetSetter. ", HTML.BR(), "\n				", HTML.A({ // 116
        href: "http://bit.ly/1FqdsPM"                                                                               // 117
      }, "See Meteor Toys ", HTML.CharRef({                                                                         // 118
        html: "&raquo;",                                                                                            // 119
        str: "»"                                                                                                    // 120
      })), "\n\n\n		"), "\n		"), "\n	" ];                                                                           // 121
    });                                                                                                             // 122
  });                                                                                                               // 123
}));                                                                                                                // 124
                                                                                                                    // 125
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 135
}).call(this);                                                                                                         // 136
                                                                                                                       // 137
                                                                                                                       // 138
                                                                                                                       // 139
                                                                                                                       // 140
                                                                                                                       // 141
                                                                                                                       // 142
(function () {                                                                                                         // 143
                                                                                                                       // 144
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/meteortoys:toykit/client/main.js                                                                        //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _0xfe85=["\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x64\x69\x73\x70\x6C\x61\x79","\x67\x65\x74","\x72\x65\x67\x69\x73\x74\x65\x72\x48\x65\x6C\x70\x65\x72","\x74\x79\x70\x65","\x62\x75\x74\x74\x6F\x6E","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x62\x75\x74\x74\x6F\x6E","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x63\x75\x72\x72\x65\x6E\x74","\x6E\x61\x6D\x65","\x65\x71\x75\x61\x6C\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6F\x72\x62\x5F\x61\x63\x74\x69\x76\x65","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6F\x72\x62\x5F\x63\x6F\x6E\x64\x65\x6E\x73\x65\x64","\x68\x65\x6C\x70\x65\x72\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x73\x64\x6B","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x65\x78\x74\x65\x6E\x73\x69\x6F\x6E","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x61\x75\x74\x6F\x70\x75\x62","\x73\x65\x74","\x68\x61\x73\x43\x6C\x61\x73\x73","\x23","\x73\x74\x6F\x70\x50\x72\x6F\x70\x61\x67\x61\x74\x69\x6F\x6E","\x65\x76\x65\x6E\x74\x73","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x61\x6C\x6C\x74\x68\x69\x6E\x67\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x62\x61\x73\x69\x63","\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74","\x76\x61\x6C","\x23\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x63\x61\x64\x66","\x23\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x70\x61\x73\x73","","\x50\x6C\x65\x61\x73\x65\x20\x65\x6E\x74\x65\x72\x20\x61\x6E\x20\x65\x6D\x61\x69\x6C","\x50\x6C\x65\x61\x73\x65\x20\x65\x6E\x74\x65\x72\x20\x61\x20\x6C\x69\x63\x65\x6E\x73\x65","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x76\x65\x72\x69\x66\x79\x44\x6F\x63","\x72\x65\x6C\x6F\x61\x64","\x5F\x72\x65\x6C\x6F\x61\x64","\x54\x68\x61\x6E\x6B\x73\x20\x66\x6F\x72\x20\x62\x75\x79\x69\x6E\x67\x20\x4D\x65\x74\x65\x6F\x72\x20\x54\x6F\x79\x73\x21","\x49\x6E\x76\x61\x6C\x69\x64\x20\x43\x72\x65\x64\x65\x6E\x74\x69\x61\x6C\x73\x2E\x20\x50\x6C\x65\x61\x73\x65\x20\x74\x72\x79\x20\x61\x67\x61\x69\x6E\x2E","\x63\x61\x6C\x6C"];MeteorToysDict= new ReactiveDict(_0xfe85[0]);UI[_0xfe85[3]](_0xfe85[0],function(){return MeteorToysDict[_0xfe85[2]](_0xfe85[1])});Template[_0xfe85[13]][_0xfe85[12]]({type:function(){if(this[_0xfe85[4]]===_0xfe85[5]){return _0xfe85[6]}},state:function(){if(MeteorToysDict[_0xfe85[9]](_0xfe85[7],this[_0xfe85[8]])){return _0xfe85[10]}else {return _0xfe85[11]}}});Template[_0xfe85[15]][_0xfe85[12]]({"\x68\x61\x73\x4D\x54\x53\x44\x4B":function(){if(Package[_0xfe85[14]]){return true}}});Template[_0xfe85[13]][_0xfe85[21]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6F\x72\x62":function(){if(this[_0xfe85[8]]===_0xfe85[16]){return false};if(MeteorToysDict[_0xfe85[2]](_0xfe85[7])===this[_0xfe85[8]]){MeteorToysDict[_0xfe85[17]](_0xfe85[7],false)}else {MeteorToysDict[_0xfe85[17]](_0xfe85[7],this[_0xfe85[8]])};},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6F\x72\x62\x5F\x77\x72\x61\x70\x70\x65\x72":function(_0x2f62x1,_0x2f62x2){if($(_0xfe85[19]+this[_0xfe85[8]])[_0xfe85[18]](_0xfe85[10])){_0x2f62x1[_0xfe85[20]]()}},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x61\x6D\x65":function(){MeteorToysDict[_0xfe85[17]](_0xfe85[7],false)}});Template[_0xfe85[0]][_0xfe85[12]]({all:function(){if(Package[_0xfe85[22]]){return _0xfe85[23]}}});Template[_0xfe85[23]][_0xfe85[21]]({"\x73\x75\x62\x6D\x69\x74":function(_0x2f62x3,_0x2f62x2){_0x2f62x3[_0xfe85[24]]();em=$(_0xfe85[26])[_0xfe85[25]](),pw=$(_0xfe85[27])[_0xfe85[25]]();if(em===_0xfe85[28]){alert(_0xfe85[29]);return false;};if(pw===_0xfe85[28]){alert(_0xfe85[30]);return false;};Meteor[_0xfe85[36]](_0xfe85[31],em,pw,function(_0x2f62x3,_0x2f62x4){if(_0x2f62x4){Meteor[_0xfe85[33]][_0xfe85[32]]();alert(_0xfe85[34]);}else {alert(_0xfe85[35])}});}});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 153
}).call(this);                                                                                                         // 154
                                                                                                                       // 155
                                                                                                                       // 156
                                                                                                                       // 157
                                                                                                                       // 158
                                                                                                                       // 159
                                                                                                                       // 160
(function () {                                                                                                         // 161
                                                                                                                       // 162
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/meteortoys:toykit/client/functions.js                                                                   //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
// Start by observing                                                                                               // 1
Meteor.startup(function(){                                                                                          // 2
  MeteorToys_ToyKit.hotKeys();                                                                                      // 3
                                                                                                                    // 4
  // Load Meteor Toys                                                                                               // 5
    Meteor.defer(function () {                                                                                      // 6
      Blaze.render(Template.MeteorToys, document.body);                                                             // 7
    });                                                                                                             // 8
                                                                                                                    // 9
  // Check authentication status                                                                                    // 10
  Meteor.call("MeteorToys", function (e, r) {                                                                       // 11
    MeteorToysDict.set("MeteorToys_Authenticated", r);                                                              // 12
  });                                                                                                               // 13
                                                                                                                    // 14
});                                                                                                                 // 15
                                                                                                                    // 16
MeteorToys_ToyKit = {                                                                                               // 17
  observe: function () {                                                                                            // 18
                                                                                                                    // 19
    // first load                                                                                                   // 20
    MeteorToys_ToyKit.runPubSub();                                                                                  // 21
    MeteorToys_ToyKit.runJetSetter();                                                                               // 22
                                                                                                                    // 23
    // start                                                                                                        // 24
    if (!Object.observe) {                                                                                          // 25
      setInterval(function(){                                                                                       // 26
        MeteorToys_ToyKit.runPubSub();                                                                              // 27
        MeteorToys_ToyKit.runJetSetter();                                                                           // 28
      }, 3000);                                                                                                     // 29
    } else {                                                                                                        // 30
      Object.observe(Meteor.default_connection._subscriptions, function() {                                         // 31
        MeteorToys_ToyKit.runPubSub();                                                                              // 32
      })                                                                                                            // 33
      Object.observe(Session.keys, function () {                                                                    // 34
        MeteorToys_ToyKit.runJetSetter();                                                                           // 35
      })                                                                                                            // 36
    }                                                                                                               // 37
    // end                                                                                                          // 38
  },                                                                                                                // 39
  hotKeys: function () {                                                                                            // 40
    // start                                                                                                        // 41
    $(document).keydown(function (e) {                                                                              // 42
      if (e.keyCode === 77 && e.ctrlKey) {                                                                          // 43
        MeteorToys_ToyKit.toggleDisplay();                                                                          // 44
      }                                                                                                             // 45
    });                                                                                                             // 46
    // end                                                                                                          // 47
  },                                                                                                                // 48
  toggleDisplay: function () {                                                                                      // 49
                                                                                                                    // 50
    var displayStatus = MeteorToysDict.get("MeteorToys_display");                                                   // 51
                                                                                                                    // 52
    // Start Toy Processes                                                                                          // 53
    // Break this out into seperate function later                                                                  // 54
    if (typeof displayStatus  === 'undefined') {                                                                    // 55
      MeteorToys_ToyKit.observe();                                                                                  // 56
    }                                                                                                               // 57
                                                                                                                    // 58
    if (displayStatus) {                                                                                            // 59
      MeteorToysDict.set("MeteorToys_display", false);                                                              // 60
    } else {                                                                                                        // 61
      MeteorToysDict.set("MeteorToys_display", true);                                                               // 62
    }                                                                                                               // 63
                                                                                                                    // 64
  },                                                                                                                // 65
  runJetSetter: function () {                                                                                       // 66
    if (Package["msavin:jetsetter"]) {                                                                              // 67
      Package["msavin:jetsetter"].JetSetter.getKeys();                                                              // 68
    }                                                                                                               // 69
  },                                                                                                                // 70
  runPubSub: function () {                                                                                          // 71
    if (Package["msavin:sub"] || Package["msavin:mongol"]) {                                                        // 72
                                                                                                                    // 73
      var subscriptions  = Meteor.default_connection._subscriptions,                                                // 74
          subKeys        = Object.keys(subscriptions);                                                              // 75
                                                                                                                    // 76
      MeteorToysDict.set("MeteorToys_PubSub", subKeys);                                                             // 77
                                                                                                                    // 78
    }                                                                                                               // 79
  }                                                                                                                 // 80
}                                                                                                                   // 81
                                                                                                                    // 82
                                                                                                                    // 83
// Public Function                                                                                                  // 84
                                                                                                                    // 85
MeteorToys_Parse = function (data) {                                                                                // 86
  var newObject = false;                                                                                            // 87
                                                                                                                    // 88
  try {                                                                                                             // 89
    newObject = JSON.parse(data);                                                                                   // 90
                                                                                                                    // 91
  } catch (error) {                                                                                                 // 92
    newObject = String(data)                                                                                        // 93
  }                                                                                                                 // 94
                                                                                                                    // 95
  return newObject;                                                                                                 // 96
}                                                                                                                   // 97
                                                                                                                    // 98
// Fix for Hot Reload                                                                                               // 99
                                                                                                                    // 100
displayStatus = MeteorToysDict.get("MeteorToys_display");                                                           // 101
                                                                                                                    // 102
if (typeof displayStatus  === 'undefined') {                                                                        // 103
                                                                                                                    // 104
} else {                                                                                                            // 105
  MeteorToysDict.set("MeteorToys_PubSub", null);                                                                    // 106
  MeteorToys_ToyKit.observe();                                                                                      // 107
                                                                                                                    // 108
}                                                                                                                   // 109
                                                                                                                    // 110
Tracker.autorun(function () {                                                                                       // 111
  Meteor.subscribe("MeteorToys", MeteorToysDict.get("MeteorToys_autopublish"));                                     // 112
});                                                                                                                 // 113
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 283
}).call(this);                                                                                                         // 284
                                                                                                                       // 285
                                                                                                                       // 286
                                                                                                                       // 287
                                                                                                                       // 288
                                                                                                                       // 289
                                                                                                                       // 290
(function () {                                                                                                         // 291
                                                                                                                       // 292
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/meteortoys:toykit/lib/collections.js                                                                    //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _0x3f8a=["\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x49\x6D\x70\x65\x72\x73\x6F\x6E\x61\x74\x65","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x4A\x65\x74\x53\x65\x74\x74\x65\x72","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x4D\x6F\x6E\x67\x6F\x6C","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x41\x75\x74\x6F\x50\x75\x62","\x61\x6C\x6C\x6F\x77","\x49\x6D\x70\x65\x72\x73\x6F\x6E\x61\x74\x65","\x4A\x65\x74\x53\x65\x74\x74\x65\x72","\x4D\x6F\x6E\x67\x6F\x6C","\x41\x75\x74\x6F\x50\x75\x62","\x69\x73\x53\x65\x72\x76\x65\x72","\x63\x72\x65\x64\x65\x6E\x74\x69\x61\x6C\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x43\x72\x65\x64\x65\x6E\x74\x69\x61\x6C\x73"];MeteorToysData={"\x49\x6D\x70\x65\x72\x73\x6F\x6E\x61\x74\x65": new Mongo.Collection(_0x3f8a[0]),"\x4A\x65\x74\x53\x65\x74\x74\x65\x72": new Mongo.Collection(_0x3f8a[1]),"\x4D\x6F\x6E\x67\x6F\x6C": new Mongo.Collection(_0x3f8a[2]),"\x41\x75\x74\x6F\x50\x75\x62": new Mongo.Collection(_0x3f8a[3])};MeteorToysData[_0x3f8a[5]][_0x3f8a[4]]({insert:function(){return true},remove:function(){return true},update:function(){return true}});MeteorToysData[_0x3f8a[6]][_0x3f8a[4]]({insert:function(){return true},remove:function(){return true},update:function(){return true}});MeteorToysData[_0x3f8a[7]][_0x3f8a[4]]({insert:function(){return true},remove:function(){return true},update:function(){return true}});MeteorToysData[_0x3f8a[8]][_0x3f8a[4]]({insert:function(){return true},remove:function(){return true},update:function(){return true}});if(Meteor[_0x3f8a[9]]){MeteorToysData[_0x3f8a[10]]= new Mongo.Collection(_0x3f8a[11])};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 301
}).call(this);                                                                                                         // 302
                                                                                                                       // 303
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteortoys:toykit'] = {
  MeteorToysData: MeteorToysData,
  MeteorToys_Parse: MeteorToys_Parse,
  MeteorToysDict: MeteorToysDict
};

})();
