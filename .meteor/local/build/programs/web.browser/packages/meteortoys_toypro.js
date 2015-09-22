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
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Mongo = Package.mongo.Mongo;
var LocalCollection = Package.minimongo.LocalCollection;
var Minimongo = Package.minimongo.Minimongo;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var varName, items, self, MeteorToysDict, MeteorToys_Data;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/meteortoys_toypro/packages/meteortoys_toypro.js                                                          //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
(function () {                                                                                                       // 1
                                                                                                                     // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                             //    // 4
// packages/meteortoys:toypro/client/jetsetter/template.header.js                                              //    // 5
//                                                                                                             //    // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                               //    // 8
                                                                                                               // 1  // 9
Template.__checkName("JetSetter_header_pro");                                                                  // 2  // 10
Template["JetSetter_header_pro"] = new Template("Template.JetSetter_header_pro", (function() {                 // 3  // 11
  var view = this;                                                                                             // 4  // 12
  return Blaze._TemplateWith(function() {                                                                      // 5  // 13
    return {                                                                                                   // 6  // 14
      name: Spacebars.call("header2")                                                                          // 7  // 15
    };                                                                                                         // 8  // 16
  }, function() {                                                                                              // 9  // 17
    return Spacebars.include(view.lookupTemplate("JetSetter_Component"), function() {                          // 10
      return [ "\n\n		", HTML.STRONG("JetSetter Pro"), "\n		", HTML.DIV({                                      // 11
        "class": "JetSetter_editor"                                                                            // 12
      }, "\n			", HTML.DIV({                                                                                   // 13
        "class": "JetSetter_editor_header"                                                                     // 14
      }, "\n				", HTML.DIV({                                                                                  // 15
        "class": "JetSetter_editor_button JetSetter_button_drop"                                               // 16
      }, "\n					Add\n				"), "\n				Reactive Variables\n			"), "\n			", HTML.DIV({                            // 17
        "class": "JetSetter_editor_content",                                                                   // 18
        style: "padding-top: 4px"                                                                              // 19
      }, "\n				", Blaze.Each(function() {                                                                     // 20
        return Spacebars.call(view.lookup("ReactiveVar"));                                                     // 21
      }, function() {                                                                                          // 22
        return [ "\n					", HTML.DIV({                                                                         // 23
          "class": "MeteorToys_row"                                                                            // 24
        }, "\n						", HTML.DIV({                                                                              // 25
          "class": "MeteorToys_row_remove"                                                                     // 26
        }, HTML.CharRef({                                                                                      // 27
          html: "&times;",                                                                                     // 28
          str: "×"                                                                                             // 29
        })), "\n						", Blaze.View("lookup:name", function() {                                                // 30
          return Spacebars.mustache(view.lookup("name"));                                                      // 31
        }), "\n					"), "\n				" ];                                                                            // 32
      }, function() {                                                                                          // 33
        return [ "\n					You are not watching any", HTML.BR(), " reactive variables.\n					To watch,", HTML.BR(), ' simply press the "Add" button.\n				' ];
      }), "\n			"), "\n		"), "\n		\n	" ];                                                                      // 35
    });                                                                                                        // 36
  });                                                                                                          // 37
}));                                                                                                           // 38
                                                                                                               // 39
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 48
                                                                                                                     // 49
}).call(this);                                                                                                       // 50
                                                                                                                     // 51
                                                                                                                     // 52
                                                                                                                     // 53
                                                                                                                     // 54
                                                                                                                     // 55
                                                                                                                     // 56
(function () {                                                                                                       // 57
                                                                                                                     // 58
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 59
//                                                                                                             //    // 60
// packages/meteortoys:toypro/client/jetsetter/header.js                                                       //    // 61
//                                                                                                             //    // 62
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 63
                                                                                                               //    // 64
var _0x45de=["\x57\x68\x61\x74\x27\x73\x20\x69\x74\x20\x63\x61\x6C\x6C\x65\x64\x3F","\x69\x6E\x73\x65\x72\x74","\x4A\x65\x74\x53\x65\x74\x74\x65\x72","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x44\x61\x74\x61","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x5F\x69\x64","\x6E\x61\x6D\x65","\x66\x69\x6E\x64\x4F\x6E\x65","\x72\x65\x6D\x6F\x76\x65","\x65\x76\x65\x6E\x74\x73","\x4A\x65\x74\x53\x65\x74\x74\x65\x72\x5F\x68\x65\x61\x64\x65\x72\x5F\x70\x72\x6F","\x66\x69\x6E\x64","\x68\x65\x6C\x70\x65\x72\x73"];Template[_0x45de[10]][_0x45de[9]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4A\x65\x74\x53\x65\x74\x74\x65\x72\x5F\x65\x64\x69\x74\x6F\x72\x5F\x62\x75\x74\x74\x6F\x6E":function(){varName=prompt(_0x45de[0]);Package[_0x45de[4]][_0x45de[3]][_0x45de[2]][_0x45de[1]]({"\x6E\x61\x6D\x65":varName});},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x72\x6F\x77":function(){var _0x1d04x1=Package[_0x45de[4]][_0x45de[3]][_0x45de[2]][_0x45de[7]]({"\x6E\x61\x6D\x65":this[_0x45de[6]]})[_0x45de[5]];Package[_0x45de[4]][_0x45de[3]][_0x45de[2]][_0x45de[8]](_0x1d04x1);}});Template[_0x45de[10]][_0x45de[12]]({ReactiveVar:function(){return Package[_0x45de[4]][_0x45de[3]][_0x45de[2]][_0x45de[11]]()}});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 66
                                                                                                                     // 67
}).call(this);                                                                                                       // 68
                                                                                                                     // 69
                                                                                                                     // 70
                                                                                                                     // 71
                                                                                                                     // 72
                                                                                                                     // 73
                                                                                                                     // 74
(function () {                                                                                                       // 75
                                                                                                                     // 76
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 77
//                                                                                                             //    // 78
// packages/meteortoys:toypro/client/jetsetter/template.reactive.js                                            //    // 79
//                                                                                                             //    // 80
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 81
                                                                                                               //    // 82
                                                                                                               // 1  // 83
Template.__checkName("JetSetter_reactive");                                                                    // 2  // 84
Template["JetSetter_reactive"] = new Template("Template.JetSetter_reactive", (function() {                     // 3  // 85
  var view = this;                                                                                             // 4  // 86
  return [ Blaze.Each(function() {                                                                             // 5  // 87
    return Spacebars.call(view.lookup("reactor"));                                                             // 6  // 88
  }, function() {                                                                                              // 7  // 89
    return [ "\n		", HTML.STRONG(Blaze.View("lookup:..name", function() {                                      // 8  // 90
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "name"));                                      // 9  // 91
    })), HTML.BR(), "\n		", Blaze.Each(function() {                                                            // 10
      return Spacebars.call(view.lookup("item"));                                                              // 11
    }, function() {                                                                                            // 12
      return [ "\n				", Blaze.View("lookup:master", function() {                                              // 13
        return Spacebars.mustache(view.lookup("master"));                                                      // 14
      }), ": ", Blaze.View("lookup:.", function() {                                                            // 15
        return Spacebars.mustache(view.lookup("."));                                                           // 16
      }), HTML.BR(), "\n		" ];                                                                                 // 17
    }), "\n	" ];                                                                                               // 18
  }), "\n\n	", Spacebars.include(view.lookupTemplate("JetSetter_reactiveVar_header")), HTML.Raw("\n	<!-- {{> JetSetter_reactiveVar_row}} -->") ];
}));                                                                                                           // 20
                                                                                                               // 21
Template.__checkName("JetSetter_reactiveVar_header");                                                          // 22
Template["JetSetter_reactiveVar_header"] = new Template("Template.JetSetter_reactiveVar_header", (function() { // 23
  var view = this;                                                                                             // 24
  return Blaze._TemplateWith(function() {                                                                      // 25
    return {                                                                                                   // 26
      name: Spacebars.call(view.lookup("."))                                                                   // 27
    };                                                                                                         // 28
  }, function() {                                                                                              // 29
    return Spacebars.include(view.lookupTemplate("JetSetter_Component"), function() {                          // 30
      return [ "\n		\n		", HTML.DIV({                                                                          // 31
        "class": "MeteorToys_right"                                                                            // 32
      }, "\n			", HTML.STRONG("+"), "\n		"), "\n\n		", HTML.STRONG(Blaze.View("lookup:..name", function() {    // 33
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "name"));                                    // 34
      })), "\n\n\n\n	" ];                                                                                      // 35
    });                                                                                                        // 36
  });                                                                                                          // 37
}));                                                                                                           // 38
                                                                                                               // 39
Template.__checkName("JetSetter_reactiveVar_row");                                                             // 40
Template["JetSetter_reactiveVar_row"] = new Template("Template.JetSetter_reactiveVar_row", (function() {       // 41
  var view = this;                                                                                             // 42
  return Blaze._TemplateWith(function() {                                                                      // 43
    return {                                                                                                   // 44
      name: Spacebars.call(view.lookup("."))                                                                   // 45
    };                                                                                                         // 46
  }, function() {                                                                                              // 47
    return Spacebars.include(view.lookupTemplate("JetSetter_Component"), function() {                          // 48
      return [ "\n		", Blaze.View("lookup:.", function() {                                                     // 49
        return Spacebars.mustache(view.lookup("."));                                                           // 50
      }), HTML.SPAN({                                                                                          // 51
        "class": "JetSetter_fader"                                                                             // 52
      }, ": ", Blaze.View("lookup:value", function() {                                                         // 53
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("value")));                                    // 54
      })), "\n		", HTML.Comment(" {{> JetSetter_editor}} "), "\n	" ];                                          // 55
    });                                                                                                        // 56
  });                                                                                                          // 57
}));                                                                                                           // 58
                                                                                                               // 59
Template.__checkName("JetSetter_reactiveVar_editor");                                                          // 60
Template["JetSetter_reactiveVar_editor"] = new Template("Template.JetSetter_reactiveVar_editor", (function() { // 61
  var view = this;                                                                                             // 62
  return HTML.Raw('{editor}\n		<!-- <div class="JetSetter_editor">\n			\n			{{#if editing}}\n				<div class="JetSetter_editor_header">\n					<div class="JetSetter_editor_button JetSetter_button_save">Save</div>\n					<div class="JetSetter_editor_button JetSetter_button_cancel">Cancel</div>\n					Value \n				</div>\n				<div class="JetSetter_editor_content JetSetter_editor_content_editing" id="JetSetter_editor_{{this}}" contenteditable="true">\n					<pre>{{{content}}}</pre>\n				</div>\n			{{else}}\n				<div class="JetSetter_editor_header">\n					<div class="JetSetter_editor_button JetSetter_button_edit">Edit</div>\n					<div class="JetSetter_editor_button JetSetter_button_drop">Drop</div>\n					Value \n				</div>\n				<div class="JetSetter_editor_content">\n					<pre>{{{content}}}</pre>\n				</div>\n			{{/if}}\n		</div> -->');
}));                                                                                                           // 64
                                                                                                               // 65
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 148
                                                                                                                     // 149
}).call(this);                                                                                                       // 150
                                                                                                                     // 151
                                                                                                                     // 152
                                                                                                                     // 153
                                                                                                                     // 154
                                                                                                                     // 155
                                                                                                                     // 156
(function () {                                                                                                       // 157
                                                                                                                     // 158
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 159
//                                                                                                             //    // 160
// packages/meteortoys:toypro/client/jetsetter/reactive.js                                                     //    // 161
//                                                                                                             //    // 162
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 163
                                                                                                               //    // 164
var _0xec41=["\x66\x69\x6E\x64","\x4A\x65\x74\x53\x65\x74\x74\x65\x72","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x44\x61\x74\x61","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x6B\x65\x79\x73","\x6E\x61\x6D\x65","\x68\x65\x6C\x70\x65\x72\x73","\x4A\x65\x74\x53\x65\x74\x74\x65\x72\x5F\x72\x65\x61\x63\x74\x69\x76\x65"];Template[_0xec41[7]][_0xec41[6]]({reactor:function(){return Package[_0xec41[3]][_0xec41[2]][_0xec41[1]][_0xec41[0]]()},item:function(){items=window[this[_0xec41[5]]][_0xec41[4]];return Object[_0xec41[4]](items);},master:function(_0xbfe5x1,_0xbfe5x2){return _0xbfe5x2[_0xec41[5]]}});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 166
                                                                                                                     // 167
}).call(this);                                                                                                       // 168
                                                                                                                     // 169
                                                                                                                     // 170
                                                                                                                     // 171
                                                                                                                     // 172
                                                                                                                     // 173
                                                                                                                     // 174
(function () {                                                                                                       // 175
                                                                                                                     // 176
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 177
//                                                                                                             //    // 178
// packages/meteortoys:toypro/client/mongol/template.header.js                                                 //    // 179
//                                                                                                             //    // 180
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 181
                                                                                                               //    // 182
                                                                                                               // 1  // 183
Template.__checkName("Mongol_header_pro");                                                                     // 2  // 184
Template["Mongol_header_pro"] = new Template("Template.Mongol_header_pro", (function() {                       // 3  // 185
  var view = this;                                                                                             // 4  // 186
  return Blaze._TemplateWith(function() {                                                                      // 5  // 187
    return {                                                                                                   // 6  // 188
      name: Spacebars.call("cmongol_618")                                                                      // 7  // 189
    };                                                                                                         // 8  // 190
  }, function() {                                                                                              // 9  // 191
    return Spacebars.include(view.lookupTemplate("Mongol_Component"), function() {                             // 10
      return [ "\n	  ", HTML.STRONG("Mongol Pro"), HTML.BR(), "\n	  ", HTML.DIV({                              // 11
        "class": "Mongol_contentView"                                                                          // 12
      }, "\n	    ", HTML.Comment("  "), "\n	    ", HTML.DIV({                                                  // 13
        "class": "Mongol_docMenu",                                                                             // 14
        style: "text-indent: 8px"                                                                              // 15
      }, "\n	      Reset a Collection\n	    "), "\n	    ", HTML.DIV({                                          // 16
        "class": "Mongol_documentViewer ",                                                                     // 17
        style: "padding-top: 0px"                                                                              // 18
      }, "\n	      ", HTML.DIV({                                                                               // 19
        "class": "MeteorToys_row Mongol_Impersonation MeteorToys_row_hoverable",                               // 20
        style: "margin-top: 0px"                                                                               // 21
      }, "\n	      	Impersonate\n	      "), "\n	      ", Blaze.Each(function() {                               // 22
        return Spacebars.call(view.lookup("collection"));                                                      // 23
      }, function() {                                                                                          // 24
        return [ "\n	      ", HTML.DIV({                                                                       // 25
          "class": "MeteorToys_row MeteorToys_row_reset MeteorToys_row_hoverable",                             // 26
          style: "margin-top: 0px"                                                                             // 27
        }, "\n	      	", Blaze.View("lookup:.", function() {                                                   // 28
          return Spacebars.mustache(view.lookup("."));                                                         // 29
        }), " \n	      "), "\n	      " ];                                                                      // 30
      }), "\n	    "), "\n	  "), "\n	" ];                                                                       // 31
    });                                                                                                        // 32
  });                                                                                                          // 33
}));                                                                                                           // 34
                                                                                                               // 35
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 218
                                                                                                                     // 219
}).call(this);                                                                                                       // 220
                                                                                                                     // 221
                                                                                                                     // 222
                                                                                                                     // 223
                                                                                                                     // 224
                                                                                                                     // 225
                                                                                                                     // 226
(function () {                                                                                                       // 227
                                                                                                                     // 228
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 229
//                                                                                                             //    // 230
// packages/meteortoys:toypro/client/mongol/header.js                                                          //    // 231
//                                                                                                             //    // 232
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 233
                                                                                                               //    // 234
var _0x94d3=["\x54\x68\x69\x73\x20\x77\x69\x6C\x6C\x20\x70\x65\x72\x6D\x61\x6E\x65\x6E\x74\x6C\x79\x20\x72\x65\x6D\x6F\x76\x65\x20\x61\x6C\x6C\x20\x74\x68\x65\x20\x64\x6F\x63\x75\x6D\x65\x6E\x74\x73\x20\x69\x6E\x20","\x2E","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x72\x65\x73\x65\x74\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E","\x53\x6F\x72\x72\x79\x2C\x20\x74\x68\x65\x72\x65\x20\x77\x61\x73\x20\x61\x6E\x20\x65\x72\x72\x6F\x72\x20\x72\x65\x6D\x6F\x76\x69\x6E\x67\x20","\x63\x61\x6C\x6C","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x49\x6D\x70\x65\x72\x73\x6F\x6E\x61\x74\x65","\x54\x68\x69\x73\x20\x77\x69\x6C\x6C\x20\x72\x65\x73\x65\x74\x20\x79\x6F\x75\x72\x20\x49\x6D\x70\x65\x72\x73\x6F\x6E\x61\x74\x65\x20\x6C\x69\x73\x74","\x65\x76\x65\x6E\x74\x73","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x68\x65\x61\x64\x65\x72\x5F\x70\x72\x6F","\x4D\x6F\x6E\x67\x6F\x6C","\x67\x65\x74","\x63\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E\x73","\x68\x65\x6C\x70\x65\x72\x73"];Template[_0x94d3[8]][_0x94d3[7]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x72\x6F\x77\x5F\x72\x65\x73\x65\x74":function(){self=String(this);if(confirm(_0x94d3[0]+self+_0x94d3[1])){Meteor[_0x94d3[4]](_0x94d3[2],self,function(_0x4e42x1,_0x4e42x2){if(_0x4e42x1){alert(_0x94d3[3]+self+_0x94d3[1])}})};},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x49\x6D\x70\x65\x72\x73\x6F\x6E\x61\x74\x69\x6F\x6E":function(){self=_0x94d3[5];if(confirm(_0x94d3[6])){Meteor[_0x94d3[4]](_0x94d3[2],self,function(_0x4e42x1,_0x4e42x2){if(_0x4e42x1){alert(_0x94d3[3]+self+_0x94d3[1])}})};}});Template[_0x94d3[8]][_0x94d3[12]]({collection:function(){var _0x4e42x3=MeteorToysDict[_0x94d3[10]](_0x94d3[9]);return _0x4e42x3[_0x94d3[11]];}});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 236
                                                                                                                     // 237
}).call(this);                                                                                                       // 238
                                                                                                                     // 239
                                                                                                                     // 240
                                                                                                                     // 241
                                                                                                                     // 242
                                                                                                                     // 243
                                                                                                                     // 244
(function () {                                                                                                       // 245
                                                                                                                     // 246
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 247
//                                                                                                             //    // 248
// packages/meteortoys:toypro/client/mongol/template.trash.js                                                  //    // 249
//                                                                                                             //    // 250
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 251
                                                                                                               //    // 252
                                                                                                               // 1  // 253
Template.__checkName("Mongol_trash");                                                                          // 2  // 254
Template["Mongol_trash"] = new Template("Template.Mongol_trash", (function() {                                 // 3  // 255
  var view = this;                                                                                             // 4  // 256
  return Blaze._TemplateWith(function() {                                                                      // 5  // 257
    return {                                                                                                   // 6  // 258
      name: Spacebars.call("trash")                                                                            // 7  // 259
    };                                                                                                         // 8  // 260
  }, function() {                                                                                              // 9  // 261
    return Spacebars.include(view.lookupTemplate("Mongol_Component"), function() {                             // 10
      return [ "\n	  \n		", HTML.DIV({                                                                         // 11
        "class": "Mongol_counter"                                                                              // 12
      }, "\n			", Blaze.If(function() {                                                                        // 13
        return Spacebars.call(view.lookup("collectionCount"));                                                 // 14
      }, function() {                                                                                          // 15
        return [ "\n				", HTML.SPAN({                                                                         // 16
          "class": "MongolHide"                                                                                // 17
        }, Blaze.View("lookup:currentPosition", function() {                                                   // 18
          return Spacebars.mustache(view.lookup("currentPosition"));                                           // 19
        }), "/") ];                                                                                            // 20
      }), Blaze.View("lookup:collectionCount", function() {                                                    // 21
        return Spacebars.mustache(view.lookup("collectionCount"));                                             // 22
      }), "\n		"), "\n\n		", HTML.DIV({                                                                        // 23
        "class": "Mongol_row_name"                                                                             // 24
      }, "Trash"), "\n\n		", Blaze.If(function() {                                                             // 25
        return Spacebars.call(view.lookup("collectionCount"));                                                 // 26
      }, function() {                                                                                          // 27
        return [ "\n			", Spacebars.include(view.lookupTemplate("Mongol_trash_viewer")), "\n		" ];             // 28
      }, function() {                                                                                          // 29
        return [ "\n			", Spacebars.include(view.lookupTemplate("Mongol_trash_empty")), "\n		" ];              // 30
      }), "\n\n	" ];                                                                                           // 31
    });                                                                                                        // 32
  });                                                                                                          // 33
}));                                                                                                           // 34
                                                                                                               // 35
Template.__checkName("Mongol_trash_menu");                                                                     // 36
Template["Mongol_trash_menu"] = new Template("Template.Mongol_trash_menu", (function() {                       // 37
  var view = this;                                                                                             // 38
  return HTML.DIV({                                                                                            // 39
    "class": "Mongol_docMenu"                                                                                  // 40
  }, HTML.Raw('\n		<div class="Mongol_m_edit">Restore</div>\n		'), HTML.DIV({                                  // 41
    "class": function() {                                                                                      // 42
      return [ Spacebars.mustache(view.lookup("disable_right")), " Mongol_m_right" ];                          // 43
    }                                                                                                          // 44
  }, HTML.Raw("&rsaquo;")), "\n		", HTML.DIV({                                                                 // 45
    "class": function() {                                                                                      // 46
      return [ Spacebars.mustache(view.lookup("disable_left")), " Mongol_m_left" ];                            // 47
    }                                                                                                          // 48
  }, HTML.Raw("&lsaquo;")), "\n	");                                                                            // 49
}));                                                                                                           // 50
                                                                                                               // 51
Template.__checkName("Mongol_trash_viewer");                                                                   // 52
Template["Mongol_trash_viewer"] = new Template("Template.Mongol_trash_viewer", (function() {                   // 53
  var view = this;                                                                                             // 54
  return HTML.DIV({                                                                                            // 55
    "class": "Mongol_contentView"                                                                              // 56
  }, "\n		", Spacebars.include(view.lookupTemplate("Mongol_trash_menu")), "\n	    ", HTML.DIV({                // 57
    "class": "Mongol_documentViewer"                                                                           // 58
  }, "\n", HTML.PRE("From ", Blaze.View("lookup:collectionName", function() {                                  // 59
    return Spacebars.mustache(view.lookup("collectionName"));                                                  // 60
  }), " ", Blaze.View("lookup:currentDocument", function() {                                                   // 61
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("currentDocument")));                              // 62
  })), "\n	    "), "\n	");                                                                                     // 63
}));                                                                                                           // 64
                                                                                                               // 65
Template.__checkName("Mongol_trash_empty");                                                                    // 66
Template["Mongol_trash_empty"] = new Template("Template.Mongol_trash_empty", (function() {                     // 67
  var view = this;                                                                                             // 68
  return HTML.Raw('<div class="Mongol_contentView">\n		<div class="Mongol_docMenu" style="text-indent: 8px">Empty</div>\n		<div class="Mongol_documentViewer">When you remove documents, <br>they will appear here. </div>\n	</div>');
}));                                                                                                           // 70
                                                                                                               // 71
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 324
                                                                                                                     // 325
}).call(this);                                                                                                       // 326
                                                                                                                     // 327
                                                                                                                     // 328
                                                                                                                     // 329
                                                                                                                     // 330
                                                                                                                     // 331
                                                                                                                     // 332
(function () {                                                                                                       // 333
                                                                                                                     // 334
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 335
//                                                                                                             //    // 336
// packages/meteortoys:toypro/client/mongol/trash.js                                                           //    // 337
//                                                                                                             //    // 338
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 339
                                                                                                               //    // 340
var _0x7947=["\x4D\x6F\x6E\x67\x6F\x6C\x5F\x54\x72\x61\x73\x68\x5F\x43\x6F\x75\x6E\x74","\x67\x65\x74","\x73\x65\x74","\x65\x76\x65\x6E\x74\x73","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x74\x72\x61\x73\x68","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x4D\x6F\x6E\x67\x6F\x6C","\x4D\x6F\x6E\x67\x6F\x6C","\x6D\x73\x61\x76\x69\x6E\x3A\x6D\x6F\x6E\x67\x6F\x6C","\x63\x6F\x75\x6E\x74","\x66\x69\x6E\x64","\x54\x72\x61\x73\x68\x5F\x43\x6F\x75\x6E\x74","\x4D\x6F\x6E\x67\x6F\x6C\x5F","\x68\x65\x6C\x70\x65\x72\x73","\x66\x65\x74\x63\x68","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x6F\x72\x69\x67\x69\x6E","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x64\x61\x74\x65","\x63\x6F\x6C\x6F\x72\x69\x7A\x65","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x74\x72\x61\x73\x68\x5F\x76\x69\x65\x77\x65\x72","\x5F\x69\x64","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x69\x6E\x73\x65\x72\x74","\x54\x68\x65\x72\x65\x20\x77\x61\x73\x20\x61\x6E\x20\x65\x72\x72\x6F\x72\x20\x72\x65\x73\x74\x6F\x72\x69\x6E\x67\x20\x79\x6F\x75\x72\x20\x64\x6F\x63\x75\x6D\x65\x6E\x74\x2E","\x63\x61\x6C\x6C","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x72\x65\x6D\x6F\x76\x65","\x54\x68\x65\x72\x65\x20\x77\x61\x73\x20\x61\x6E\x20\x65\x72\x72\x6F\x72\x20\x72\x65\x6D\x6F\x76\x69\x6E\x67\x20\x64\x6F\x63\x75\x6D\x65\x6E\x74\x20\x66\x72\x6F\x6D\x20\x74\x72\x61\x73\x68\x2C","\x63\x6C\x69\x63\x6B","\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x6D\x5F\x6C\x65\x66\x74","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x6D\x5F\x64\x69\x73\x61\x62\x6C\x65\x64","\x68\x61\x73\x43\x6C\x61\x73\x73","\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x6D\x5F\x72\x69\x67\x68\x74","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x74\x72\x61\x73\x68\x5F\x6D\x65\x6E\x75"];Template[_0x7947[4]][_0x7947[3]]({"\x63\x6C\x69\x63\x6B":function(){if(!MeteorToysDict[_0x7947[1]](_0x7947[0])){MeteorToysDict[_0x7947[2]](_0x7947[0],0)}}});Template[_0x7947[4]][_0x7947[12]]({collectionCount:function(){var _0x1596x1=_0x7947[5];var _0x1596x2=Package[_0x7947[7]][_0x7947[6]].Collection(_0x1596x1);var _0x1596x3=_0x1596x2&&_0x1596x2[_0x7947[9]]()[_0x7947[8]]()||0;return _0x1596x3;},currentPosition:function(){var _0x1596x4=_0x7947[10];var _0x1596x5=_0x7947[11]+_0x1596x4;var _0x1596x6=MeteorToysDict[_0x7947[1]](_0x1596x5);var _0x1596x3=_0x1596x6+1;return _0x1596x3;}});Template[_0x7947[17]][_0x7947[12]]({currentDocument:function(){var _0x1596x1=_0x7947[5],_0x1596x7=MeteorToysDict[_0x7947[1]](_0x7947[0]),_0x1596x8=Package[_0x7947[7]][_0x7947[6]].Collection(_0x7947[5])[_0x7947[9]]()[_0x7947[13]]()[_0x1596x7];if(_0x1596x8){delete _0x1596x8[_0x7947[14]];delete _0x1596x8[_0x7947[15]];var _0x1596x9=Package[_0x7947[7]][_0x7947[6]][_0x7947[16]](_0x1596x8);return _0x1596x9;};},collectionName:function(){var _0x1596x1=_0x7947[5],_0x1596x7=MeteorToysDict[_0x7947[1]](_0x7947[0]),_0x1596x8=Package[_0x7947[7]][_0x7947[6]].Collection(_0x7947[5])[_0x7947[9]]()[_0x7947[13]]()[_0x1596x7];if(_0x1596x8){return _0x1596x8[_0x7947[14]]};}});Template[_0x7947[29]][_0x7947[3]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x6D\x5F\x65\x64\x69\x74":function(){var _0x1596x1=_0x7947[5],_0x1596x7=MeteorToysDict[_0x7947[1]](_0x7947[0]),_0x1596x8=Package[_0x7947[7]][_0x7947[6]].Collection(_0x7947[5])[_0x7947[9]]()[_0x7947[13]]()[_0x1596x7];var _0x1596x4=_0x1596x8[_0x7947[14]];var _0x1596xa=_0x1596x8[_0x7947[18]];delete _0x1596x8[_0x7947[14]];delete _0x1596x8[_0x7947[15]];delete _0x1596x8[_0x7947[18]];Meteor[_0x7947[21]](_0x7947[19],_0x1596x4,_0x1596x8,function(_0x1596xb,_0x1596xc){if(_0x1596xb){alert(_0x7947[20])}});Meteor[_0x7947[21]](_0x7947[22],_0x7947[5],_0x1596xa,true,function(_0x1596xb,_0x1596xc){if(_0x1596xb){alert(_0x7947[23])}});var _0x1596x5=_0x7947[0];var _0x1596xd=MeteorToysDict[_0x7947[1]](_0x1596x5);var _0x1596x2=Package[_0x7947[7]][_0x7947[6]].Collection(_0x7947[5]);var _0x1596xe=_0x1596x2[_0x7947[9]]()[_0x7947[8]]()-1;if(_0x1596xe===_0x1596xd){$(_0x7947[25])[_0x7947[24]]()};},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x6D\x5F\x72\x69\x67\x68\x74":function(){if(!$(_0x7947[28])[_0x7947[27]](_0x7947[26])){var _0x1596x5=_0x7947[0];var _0x1596xd=MeteorToysDict[_0x7947[1]](_0x1596x5);var _0x1596x2=Package[_0x7947[7]][_0x7947[6]].Collection(_0x7947[5]);var _0x1596xe=_0x1596x2[_0x7947[9]]()[_0x7947[8]]()-1;if(_0x1596xd>_0x1596xe){MeteorToysDict[_0x7947[2]](_0x1596x5,0);return ;};if(_0x1596xe===_0x1596xd){MeteorToysDict[_0x7947[2]](_0x1596x5,0)}else {var _0x1596xf=MeteorToysDict[_0x7947[1]](_0x1596x5)+1;MeteorToysDict[_0x7947[2]](_0x1596x5,_0x1596xf);};}},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x6D\x5F\x6C\x65\x66\x74":function(){if(!$(_0x7947[25])[_0x7947[27]](_0x7947[26])){var _0x1596x5=_0x7947[0];var _0x1596xd=MeteorToysDict[_0x7947[1]](_0x1596x5);var _0x1596x2=Package[_0x7947[7]][_0x7947[6]].Collection(_0x7947[5]);var _0x1596xe=_0x1596x2[_0x7947[9]]()[_0x7947[8]]()-1;if(_0x1596xd>_0x1596xe){MeteorToysDict[_0x7947[2]](_0x1596x5,_0x1596xe);return ;};if(MeteorToysDict[_0x7947[1]](_0x1596x5)===0){MeteorToysDict[_0x7947[2]](_0x1596x5,_0x1596xe)}else {var _0x1596xf=MeteorToysDict[_0x7947[1]](_0x1596x5)-1;MeteorToysDict[_0x7947[2]](_0x1596x5,_0x1596xf);};}}});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 342
                                                                                                                     // 343
}).call(this);                                                                                                       // 344
                                                                                                                     // 345
                                                                                                                     // 346
                                                                                                                     // 347
                                                                                                                     // 348
                                                                                                                     // 349
                                                                                                                     // 350
(function () {                                                                                                       // 351
                                                                                                                     // 352
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 353
//                                                                                                             //    // 354
// packages/meteortoys:toypro/client/main.js                                                                   //    // 355
//                                                                                                             //    // 356
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 357
                                                                                                               //    // 358
var _0xad6d=["\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x44\x69\x63\x74","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x50\x72\x6F","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x41\x75\x74\x68\x65\x6E\x74\x69\x63\x61\x74\x65\x64","\x67\x65\x74","\x72\x65\x67\x69\x73\x74\x65\x72\x48\x65\x6C\x70\x65\x72"];MeteorToysDict=Package[_0xad6d[1]][_0xad6d[0]];UI[_0xad6d[5]](_0xad6d[2],function(_0xb8c6x1){return MeteorToysDict[_0xad6d[4]](_0xad6d[3])});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 360
                                                                                                                     // 361
}).call(this);                                                                                                       // 362
                                                                                                                     // 363
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteortoys:toypro'] = {
  MeteorToys_Data: MeteorToys_Data
};

})();