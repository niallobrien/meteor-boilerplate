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
var Mongo = Package.mongo.Mongo;
var EditableJSON = Package['babrahams:editable-json'].EditableJSON;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var MeteorToysDict, Mongol, originalSet, sessionKey, CollectionName, DocumentPosition, CurrentCollection, CollectionCount, CurrentDocument, DocumentID, ValidatedCurrentDocument, list, docID, docIndex, currentDoc, newPosition;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/msavin_mongol/packages/msavin_mongol.js                  //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {                                                       // 1
                                                                     // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin:mongol/lib/common.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
MeteorToysDict = Package["meteortoys:toykit"].MeteorToysDict;                                                          // 1
                                                                                                                       // 2
if (Mongol === undefined) {                                                                                            // 3
                                                                                                                       // 4
  // Create object and reserve name across the package                                                                 // 5
  Mongol = {};                                                                                                         // 6
                                                                                                                       // 7
}                                                                                                                      // 8
                                                                                                                       // 9
Mongol = {                                                                                                             // 10
  'colorize': function (json) {                                                                                        // 11
    // colorized the JSON objects                                                                                      // 12
    if (typeof json != 'string') {                                                                                     // 13
      json = JSON.stringify(json, undefined, 2);                                                                       // 14
    }                                                                                                                  // 15
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');                                    // 16
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
      var cls = 'Mongol_number';                                                                                       // 18
      if (/^"/.test(match)) {                                                                                          // 19
        if (/:$/.test(match)) {                                                                                        // 20
          cls = 'Mongol_key';                                                                                          // 21
        } else {                                                                                                       // 22
          cls = 'Mongol_string';                                                                                       // 23
        }                                                                                                              // 24
      } else if (/true|false/.test(match)) {                                                                           // 25
        cls = 'Mongol_boolean';                                                                                        // 26
      } else if (/null/.test(match)) {                                                                                 // 27
        cls = 'Mongol_null';                                                                                           // 28
      }                                                                                                                // 29
      return '<span class="' + cls + '">' + match + '</span>';                                                         // 30
    });                                                                                                                // 31
  },                                                                                                                   // 32
  'getDocumentUpdate': function (data) {                                                                               // 33
                                                                                                                       // 34
    var elementID = 'MongolDoc_' + data,                                                                               // 35
      newData = document.getElementById(elementID).textContent;                                                        // 36
                                                                                                                       // 37
    return newData;                                                                                                    // 38
                                                                                                                       // 39
  },                                                                                                                   // 40
  'error': function (data) {                                                                                           // 41
                                                                                                                       // 42
    switch (data) {                                                                                                    // 43
      case "json.parse":                                                                                               // 44
        alert("There is an error with your JSON syntax.\n\nNote: keys and string values need double quotes.");         // 45
        break;                                                                                                         // 46
      case "duplicate":                                                                                                // 47
        alert("Strange, there was an error duplicating your document.");                                               // 48
        break;                                                                                                         // 49
      case "remove":                                                                                                   // 50
        alert("Strange, there was an error removing your document.");                                                  // 51
        break;                                                                                                         // 52
      case "insert":                                                                                                   // 53
        alert("Strange, there was an error inserting your document.");                                                 // 54
        break;                                                                                                         // 55
      case "update":                                                                                                   // 56
        alert("There was an error updating your document. Please review your changes and try again.");                 // 57
        break;                                                                                                         // 58
      default:                                                                                                         // 59
        return "Unknown Error";                                                                                        // 60
        break;                                                                                                         // 61
    }                                                                                                                  // 62
                                                                                                                       // 63
  },                                                                                                                   // 64
  'parse': function (data) {                                                                                           // 65
    var newObject = false;                                                                                             // 66
                                                                                                                       // 67
    try {                                                                                                              // 68
      newObject = JSON.parse(data);                                                                                    // 69
    }                                                                                                                  // 70
                                                                                                                       // 71
    catch (error) {                                                                                                    // 72
      Mongol.error("json.parse");                                                                                      // 73
    }                                                                                                                  // 74
                                                                                                                       // 75
    return newObject;                                                                                                  // 76
                                                                                                                       // 77
  },                                                                                                                   // 78
  'setSubscriptionKeys': function () {                                                                                 // 79
                                                                                                                       // 80
      // var subscriptions  = Meteor.default_connection._subscriptions,                                                // 81
          // subKeys        = Object.keys(subscriptions);                                                              // 82
                                                                                                                       // 83
          // MeteorToysDict.set("MeteorToys_PubSub", subKeys)                                                          // 84
                                                                                                                       // 85
  },                                                                                                                   // 86
  'detectCollections': function () {                                                                                   // 87
    if (MeteorToysDict.get('Mongol') === undefined) {                                                                  // 88
        // Note: this returns the actual mongo collection name                                                         // 89
        var collections = _.map(Mongo.Collection.getAll(), function (collection) {                                     // 90
        return collection.name;                                                                                        // 91
      });                                                                                                              // 92
                                                                                                                       // 93
      var defaults = {                                                                                                 // 94
        'collections': collections,                                                                                    // 95
      };                                                                                                               // 96
                                                                                                                       // 97
      MeteorToysDict.set("Mongol", defaults);                                                                          // 98
                                                                                                                       // 99
    }                                                                                                                  // 100
  },                                                                                                                   // 101
  'hideCollection': function (collectionName) {                                                                        // 102
                                                                                                                       // 103
    var MongolConfig = MeteorToysDict.get("Mongol"),                                                                   // 104
        collections  = MongolConfig.collections;                                                                       // 105
                                                                                                                       // 106
    collections = _.without(collections, collectionName);                                                              // 107
    MongolConfig.collections = collections;                                                                            // 108
    MeteorToysDict.set("Mongol", MongolConfig);                                                                        // 109
                                                                                                                       // 110
  },                                                                                                                   // 111
  'hideVelocity': function () {                                                                                        // 112
    this.hideCollection('velocityTestFiles');                                                                          // 113
    this.hideCollection('velocityFixtureFiles');                                                                       // 114
    this.hideCollection('velocityTestReports');                                                                        // 115
    this.hideCollection('velocityAggregateReports');                                                                   // 116
    this.hideCollection('velocityLogs');                                                                               // 117
    this.hideCollection('velocityMirrors');                                                                            // 118
    this.hideCollection('velocityOptions');                                                                            // 119
  },                                                                                                                   // 120
  'hideMeteorToys': function () {                                                                                      // 121
    this.hideCollection("MeteorToys_Impersonate");                                                                     // 122
    this.hideCollection("MeteorToys_JetSetter");                                                                       // 123
    this.hideCollection("MeteorToys_Mongol");                                                                          // 124
    this.hideCollection("MeteorToys_AutoPub");                                                                         // 125
  },                                                                                                                   // 126
  'showCollection': function (collectionName) {                                                                        // 127
                                                                                                                       // 128
    // In case a collection does not get detected, like a local one                                                    // 129
    var MongolConfig = MeteorToysDict.get("Mongol"),                                                                   // 130
        collections  = MongolConfig.collections;                                                                       // 131
                                                                                                                       // 132
    collections.push(collectionName);                                                                                  // 133
                                                                                                                       // 134
    MeteorToysDict.set("Mongol", MongolConfig);                                                                        // 135
                                                                                                                       // 136
  },                                                                                                                   // 137
  'Collection': function (collectionName) {                                                                            // 138
                                                                                                                       // 139
                                                                                                                       // 140
    // Go through a variety of means of trying to return the correct collection                                        // 141
    return Mongo.Collection.get(collectionName)                                                                        // 142
      // This should automatically match all collections by default                                                    // 143
      // including namespaced collections                                                                              // 144
                                                                                                                       // 145
    || ((Meteor.isServer) ? eval(collectionName) : Meteor._get.apply(null,[window].concat(collectionName.split('.')))) // 146
    // For user defined collection names                                                                               // 147
    // in the form of Meteor's Mongo.Collection names as strings                                                       // 148
                                                                                                                       // 149
    || ((Meteor.isServer) ? eval(firstToUpper(collectionName)) : Meteor._get.apply(null,[window].concat(firstToUpper(collectionName).split('.'))))
    // For user defined collections where the user has typical upper-case collection names                             // 151
    // but they've put actual mongodb collection names into the Mongol config instead of Meteor's Mongo.Collection names as strings
                                                                                                                       // 153
    || null;                                                                                                           // 154
    // If the user has gone for unconventional casing of collection names,                                             // 155
    // they'll have to get them right (i.e. Meteor's Mongo.Collection names as string) in the Mongol config manually   // 156
                                                                                                                       // 157
    // Changes the first character of a string to upper case                                                           // 158
                                                                                                                       // 159
      function firstToUpper(text) {                                                                                    // 160
                                                                                                                       // 161
        return text.charAt(0).toUpperCase() + text.substr(1);                                                          // 162
                                                                                                                       // 163
      }                                                                                                                // 164
                                                                                                                       // 165
  },                                                                                                                   // 166
  'register': function(spec) {                                                                                         // 167
    originalSet = MeteorToysDict.get("Mongol_Extensions");                                                             // 168
    if (originalSet) {                                                                                                 // 169
      originalSet = [spec];                                                                                            // 170
    } else {                                                                                                           // 171
      originalSet.push(spec);                                                                                          // 172
    }                                                                                                                  // 173
                                                                                                                       // 174
  }                                                                                                                    // 175
}                                                                                                                      // 176
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 186
}).call(this);                                                       // 187
                                                                     // 188
                                                                     // 189
                                                                     // 190
                                                                     // 191
                                                                     // 192
                                                                     // 193
(function () {                                                       // 194
                                                                     // 195
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin:mongol/client/row_header/template.header.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Mongol_header");                                                                                 // 2
Template["Mongol_header"] = new Template("Template.Mongol_header", (function() {                                       // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return {                                                                                                           // 6
      name: Spacebars.call("mongol_618")                                                                               // 7
    };                                                                                                                 // 8
  }, function() {                                                                                                      // 9
    return Spacebars.include(view.lookupTemplate("Mongol_Component"), function() {                                     // 10
      return [ "\n\n    ", HTML.STRONG("Mongol"), HTML.BR(), "\n    ", HTML.DIV({                                      // 11
        "class": "Mongol_contentView"                                                                                  // 12
      }, "\n    ", HTML.Comment("  "), "\n      ", HTML.DIV({                                                          // 13
        "class": "Mongol_docMenu",                                                                                     // 14
        style: "text-indent: 8px"                                                                                      // 15
      }, "\n        Meteor Toys\n      "), "\n      ", HTML.DIV({                                                      // 16
        "class": "Mongol_documentViewer "                                                                              // 17
      }, "\n", HTML.PRE("{ \n  ", HTML.SPAN({                                                                          // 18
        "class": "Mongol_key"                                                                                          // 19
      }, '"created_by"'), ': "', HTML.A({                                                                              // 20
        href: "http://maxsavin.com"                                                                                    // 21
      }, "Max Savin"), '",\n  ', HTML.SPAN({                                                                           // 22
        "class": "Mongol_key"                                                                                          // 23
      }, '"code_and_docs"'), ': "', HTML.A({                                                                           // 24
        href: "https://github.com/msavin/Mongol"                                                                       // 25
      }, "on GitHub"), '",\n  ', HTML.SPAN({                                                                           // 26
        "class": "Mongol_key"                                                                                          // 27
      }, '"license"'), ': "', HTML.A({                                                                                 // 28
        href: "https://github.com/MeteorToys/allthings/blob/master/LICENSE.md"                                         // 29
      }, "Meteor Toys License"), '",\n} , {\n  ', HTML.SPAN({                                                          // 30
        "class": "Mongol_key"                                                                                          // 31
      }, '"more_toys!"'), ': "', HTML.A({                                                                              // 32
        href: "http://bit.ly/1Lv1Ou4"                                                                                  // 33
      }, "Meteor Toys"), '"\n}\n'), "\n      "), "\n    ", HTML.Comment("  "), "\n    "), "\n\n  " ];                  // 34
    });                                                                                                                // 35
  });                                                                                                                  // 36
}));                                                                                                                   // 37
                                                                                                                       // 38
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 241
}).call(this);                                                       // 242
                                                                     // 243
                                                                     // 244
                                                                     // 245
                                                                     // 246
                                                                     // 247
                                                                     // 248
(function () {                                                       // 249
                                                                     // 250
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin:mongol/client/row_header/header.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 259
}).call(this);                                                       // 260
                                                                     // 261
                                                                     // 262
                                                                     // 263
                                                                     // 264
                                                                     // 265
                                                                     // 266
(function () {                                                       // 267
                                                                     // 268
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin:mongol/client/row_account/template.account.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Mongol_account");                                                                                // 2
Template["Mongol_account"] = new Template("Template.Mongol_account", (function() {                                     // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return {                                                                                                           // 6
      name: Spacebars.call("account_618")                                                                              // 7
    };                                                                                                                 // 8
  }, function() {                                                                                                      // 9
    return Spacebars.include(view.lookupTemplate("Mongol_Component"), function() {                                     // 10
      return [ "\n\n			", HTML.Comment(" Display sign in status "), "\n			", Blaze.If(function() {                     // 11
        return Spacebars.call(view.lookup("currentUser"));                                                             // 12
      }, function() {                                                                                                  // 13
        return [ "\n				", HTML.DIV({                                                                                  // 14
          "class": "Mongol_account_active"                                                                             // 15
        }), "\n			" ];                                                                                                 // 16
      }, function() {                                                                                                  // 17
        return [ "\n				", HTML.DIV({                                                                                  // 18
          "class": "Mongol_account_inactive"                                                                           // 19
        }), "\n			" ];                                                                                                 // 20
      }), "\n\n			", HTML.Comment(" Row Name "), "\n			", HTML.DIV({                                                   // 21
        "class": "Mongol_icon Mongol_icon_user"                                                                        // 22
      }), "\n			Account\n     \n        ", HTML.DIV({                                                                  // 23
        "class": "Mongol_contentView"                                                                                  // 24
      }, "\n\n			", HTML.Comment(" Document Viewer "), "\n			", Blaze.If(function() {                                  // 25
        return Spacebars.call(view.lookup("currentUser"));                                                             // 26
      }, function() {                                                                                                  // 27
        return [ "\n				", Spacebars.include(view.lookupTemplate("Mongol_accountViewer")), "\n			" ];                  // 28
      }, function() {                                                                                                  // 29
        return [ "\n				", Spacebars.include(view.lookupTemplate("Mongol_accountViewer_notSignedIn")), "\n			" ];      // 30
      }), "\n\n		"), "\n\n	" ];                                                                                        // 31
    });                                                                                                                // 32
  });                                                                                                                  // 33
}));                                                                                                                   // 34
                                                                                                                       // 35
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 311
}).call(this);                                                       // 312
                                                                     // 313
                                                                     // 314
                                                                     // 315
                                                                     // 316
                                                                     // 317
                                                                     // 318
(function () {                                                       // 319
                                                                     // 320
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin:mongol/client/row_account/account.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 329
}).call(this);                                                       // 330
                                                                     // 331
                                                                     // 332
                                                                     // 333
                                                                     // 334
                                                                     // 335
                                                                     // 336
(function () {                                                       // 337
                                                                     // 338
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin:mongol/client/row_account/template.accountViewer.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Mongol_accountViewer");                                                                          // 2
Template["Mongol_accountViewer"] = new Template("Template.Mongol_accountViewer", (function() {                         // 3
  var view = this;                                                                                                     // 4
  return [ Spacebars.include(view.lookupTemplate("Mongol_docControls")), "\n\n	", HTML.DIV({                           // 5
    "class": function() {                                                                                              // 6
      return [ "Mongol_documentViewer ", Spacebars.mustache(view.lookup("editStyle")) ];                               // 7
    },                                                                                                                 // 8
    id: "MongolDoc_account_618",                                                                                       // 9
    contenteditable: function() {                                                                                      // 10
      return Spacebars.mustache(view.lookup("editContent"));                                                           // 11
    }                                                                                                                  // 12
  }, "	\n		", HTML.PRE(Blaze.View("lookup:accountData", function() {                                                   // 13
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("accountData")));                                          // 14
  })), "\n	") ];                                                                                                       // 15
}));                                                                                                                   // 16
                                                                                                                       // 17
Template.__checkName("Mongol_accountViewer_notSignedIn");                                                              // 18
Template["Mongol_accountViewer_notSignedIn"] = new Template("Template.Mongol_accountViewer_notSignedIn", (function() { // 19
  var view = this;                                                                                                     // 20
  return HTML.Raw('<div class="Mongol_docMenu">\n			<div class="Mongol_docBar1" style="text-indent: 8px">\n				Not Signed In\n			</div>\n		</div>\n	<div class="Mongol_documentViewer">	\n		<!-- Nothing -->\n	</div>');
}));                                                                                                                   // 22
                                                                                                                       // 23
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 369
}).call(this);                                                       // 370
                                                                     // 371
                                                                     // 372
                                                                     // 373
                                                                     // 374
                                                                     // 375
                                                                     // 376
(function () {                                                       // 377
                                                                     // 378
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin:mongol/client/row_account/accountViewer.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.Mongol_accountViewer.helpers({                                                                                // 1
  accountData: function () {                                                                                           // 2
                                                                                                                       // 3
    var docCurrent  = Meteor.user(),                                                                                   // 4
        json_output = JSON.stringify(docCurrent, null, 2),                                                             // 5
        colorized   = Mongol.colorize(json_output);                                                                    // 6
    return colorized;                                                                                                  // 7
                                                                                                                       // 8
  },                                                                                                                   // 9
  editContent: function () {                                                                                           // 10
                                                                                                                       // 11
    var editMode = MeteorToysDict.get("Mongol_editMode");                                                              // 12
                                                                                                                       // 13
    if (editMode) {                                                                                                    // 14
      return "true";                                                                                                   // 15
    }                                                                                                                  // 16
                                                                                                                       // 17
  },                                                                                                                   // 18
  editStyle: function () {                                                                                             // 19
                                                                                                                       // 20
    var editMode = MeteorToysDict.get("Mongol_editMode");                                                              // 21
                                                                                                                       // 22
    if (editMode) {                                                                                                    // 23
      return "Mongol_editable";                                                                                        // 24
    }                                                                                                                  // 25
                                                                                                                       // 26
  },                                                                                                                   // 27
  usercode: function () {                                                                                              // 28
                                                                                                                       // 29
    return Meteor.userId();                                                                                            // 30
                                                                                                                       // 31
  },                                                                                                                   // 32
});                                                                                                                    // 33
                                                                                                                       // 34
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 420
}).call(this);                                                       // 421
                                                                     // 422
                                                                     // 423
                                                                     // 424
                                                                     // 425
                                                                     // 426
                                                                     // 427
(function () {                                                       // 428
                                                                     // 429
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin:mongol/client/row_collection_notFound/template.notFound.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Mongol_collection_notFound");                                                                    // 2
Template["Mongol_collection_notFound"] = new Template("Template.Mongol_collection_notFound", (function() {             // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return {                                                                                                           // 6
      name: Spacebars.call("no_collections")                                                                           // 7
    };                                                                                                                 // 8
  }, function() {                                                                                                      // 9
    return Spacebars.include(view.lookupTemplate("Mongol_Component"), function() {                                     // 10
      return [ "\n\n    ", HTML.DIV({                                                                                  // 11
        "class": "Mongol_icon Mongol_icon_collection"                                                                  // 12
      }), "No Collections", HTML.BR(), "\n    ", HTML.DIV({                                                            // 13
        "class": "Mongol_contentView"                                                                                  // 14
      }, "\n    ", HTML.Comment("  "), "\n      ", HTML.DIV({                                                          // 15
        "class": "Mongol_docMenu",                                                                                     // 16
        style: "text-indent: 8px"                                                                                      // 17
      }, "\n        None Detected\n      "), "\n      ", HTML.DIV({                                                    // 18
        "class": "Mongol_documentViewer "                                                                              // 19
      }, "\n\n        If you think this is an error,", HTML.BR(), "\n        please report it on ", HTML.A({           // 20
        href: "https://github.com/msavin/Mongol",                                                                      // 21
        style: "color: #cc0000"                                                                                        // 22
      }, "GitHub"), ".\n        \n      "), "\n    ", HTML.Comment("  "), "\n    "), "\n\n  " ];                       // 23
    });                                                                                                                // 24
  });                                                                                                                  // 25
}));                                                                                                                   // 26
                                                                                                                       // 27
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 464
}).call(this);                                                       // 465
                                                                     // 466
                                                                     // 467
                                                                     // 468
                                                                     // 469
                                                                     // 470
                                                                     // 471
(function () {                                                       // 472
                                                                     // 473
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin:mongol/client/row_collection_notFound/notFound.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 482
}).call(this);                                                       // 483
                                                                     // 484
                                                                     // 485
                                                                     // 486
                                                                     // 487
                                                                     // 488
                                                                     // 489
(function () {                                                       // 490
                                                                     // 491
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin:mongol/client/row_collection/template.collections.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Mongol_collection");                                                                             // 2
Template["Mongol_collection"] = new Template("Template.Mongol_collection", (function() {                               // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return {                                                                                                           // 6
      name: Spacebars.call(view.lookup("."))                                                                           // 7
    };                                                                                                                 // 8
  }, function() {                                                                                                      // 9
    return Spacebars.include(view.lookupTemplate("Mongol_Component"), function() {                                     // 10
      return [ "\n	\n		", HTML.Comment(" Collection Count "), "\n		", HTML.DIV({                                       // 11
        "class": "Mongol_counter"                                                                                      // 12
      }, "\n			", Blaze.If(function() {                                                                                // 13
        return Spacebars.call(view.lookup("collectionCount"));                                                         // 14
      }, function() {                                                                                                  // 15
        return [ "\n			", HTML.SPAN({                                                                                  // 16
          "class": "MongolHide"                                                                                        // 17
        }, Blaze.View("lookup:currentPosition", function() {                                                           // 18
          return Spacebars.mustache(view.lookup("currentPosition"));                                                   // 19
        }), "/") ];                                                                                                    // 20
      }), Blaze.View("lookup:collectionCount", function() {                                                            // 21
        return Spacebars.mustache(view.lookup("collectionCount"));                                                     // 22
      }), "\n		"), "\n\n		", HTML.Comment(" Collection Name "), "\n		", HTML.DIV({                                     // 23
        "class": "Mongol_row_name"                                                                                     // 24
      }, HTML.DIV({                                                                                                    // 25
        "class": "Mongol_icon Mongol_icon_collection"                                                                  // 26
      }), Blaze.View("lookup:.", function() {                                                                          // 27
        return Spacebars.mustache(view.lookup("."));                                                                   // 28
      })), "\n    	    \n		", HTML.Comment(" Document Viewer "), "\n		", HTML.DIV({                                    // 29
        "class": "Mongol_contentView"                                                                                  // 30
      }, "\n			", Spacebars.include(view.lookupTemplate("Mongol_docViewer")), "\n		"), "\n		\n	" ];                    // 31
    });                                                                                                                // 32
  });                                                                                                                  // 33
}));                                                                                                                   // 34
                                                                                                                       // 35
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 534
}).call(this);                                                       // 535
                                                                     // 536
                                                                     // 537
                                                                     // 538
                                                                     // 539
                                                                     // 540
                                                                     // 541
(function () {                                                       // 542
                                                                     // 543
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin:mongol/client/row_collection/collections.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.Mongol_collection.events({                                                                                    // 1
  'click': function () {                                                                                               // 2
                                                                                                                       // 3
    var targetCollection = String(this),                                                                               // 4
        sessionKey       = "Mongol_" + targetCollection;                                                               // 5
                                                                                                                       // 6
    if (MeteorToysDict.equals("Mongol_currentCollection", targetCollection)) {                                         // 7
                                                                                                                       // 8
      // do nothing                                                                                                    // 9
                                                                                                                       // 10
    } else {                                                                                                           // 11
                                                                                                                       // 12
      // If the collection doesn't have an index key set,                                                              // 13
      // start it from the first document                                                                              // 14
                                                                                                                       // 15
      if (!MeteorToysDict.get(sessionKey)) {                                                                           // 16
        MeteorToysDict.set(sessionKey, 0);                                                                             // 17
      }                                                                                                                // 18
                                                                                                                       // 19
    }                                                                                                                  // 20
                                                                                                                       // 21
  },                                                                                                                   // 22
});                                                                                                                    // 23
                                                                                                                       // 24
Template.Mongol_collection.helpers({                                                                                   // 25
  collectionCount: function () {                                                                                       // 26
                                                                                                                       // 27
    var collectionName = String(this);                                                                                 // 28
    var collectionVar = Mongol.Collection(collectionName);                                                             // 29
                                                                                                                       // 30
    var count = collectionVar && collectionVar.find().count() || 0;                                                    // 31
                                                                                                                       // 32
    return count;                                                                                                      // 33
                                                                                                                       // 34
  },                                                                                                                   // 35
  currentPosition: function () {                                                                                       // 36
                                                                                                                       // 37
    var targetCollection = String(this);                                                                               // 38
    var sessionKey = "Mongol_" + targetCollection;                                                                     // 39
                                                                                                                       // 40
    var current = MeteorToysDict.get(sessionKey);                                                                      // 41
    var count = current + 1;                                                                                           // 42
                                                                                                                       // 43
    return count;                                                                                                      // 44
                                                                                                                       // 45
  }                                                                                                                    // 46
});                                                                                                                    // 47
                                                                                                                       // 48
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 599
}).call(this);                                                       // 600
                                                                     // 601
                                                                     // 602
                                                                     // 603
                                                                     // 604
                                                                     // 605
                                                                     // 606
(function () {                                                       // 607
                                                                     // 608
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin:mongol/client/doc_editor/template.docViewer.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Mongol_docViewer");                                                                              // 2
Template["Mongol_docViewer"] = new Template("Template.Mongol_docViewer", (function() {                                 // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("notEmpty"));                                                                    // 6
  }, function() {                                                                                                      // 7
    return [ "\n    ", Spacebars.include(view.lookupTemplate("Mongol_docControls")), "\n    ", Spacebars.With(function() {
      return Spacebars.call(view.lookup("activeDocument"));                                                            // 9
    }, function() {                                                                                                    // 10
      return [ "\n      ", Blaze.If(function() {                                                                       // 11
        return Spacebars.call(view.lookup("editStyle"));                                                               // 12
      }, function() {                                                                                                  // 13
        return [ "\n        ", HTML.DIV({                                                                              // 14
          "class": function() {                                                                                        // 15
            return [ "Mongol_documentViewer ", Spacebars.mustache(view.lookup("editStyle")) ];                         // 16
          },                                                                                                           // 17
          id: function() {                                                                                             // 18
            return [ "MongolDoc_", Spacebars.mustache(view.lookup("..")) ];                                            // 19
          },                                                                                                           // 20
          contenteditable: function() {                                                                                // 21
            return Spacebars.mustache(view.lookup("editContent"));                                                     // 22
          }                                                                                                            // 23
        }, "  \n          ", HTML.PRE(Blaze.View("lookup:documentJSON", function() {                                   // 24
          return Spacebars.makeRaw(Spacebars.mustache(view.lookup("documentJSON")));                                   // 25
        })), "\n        "), "\n      " ];                                                                              // 26
      }, function() {                                                                                                  // 27
        return [ "\n        ", HTML.DIV({                                                                              // 28
          "class": function() {                                                                                        // 29
            return [ "Mongol_documentViewer ", Spacebars.mustache(view.lookup("editStyle")) ];                         // 30
          },                                                                                                           // 31
          id: function() {                                                                                             // 32
            return [ "MongolDoc_", Spacebars.mustache(view.lookup("..")) ];                                            // 33
          },                                                                                                           // 34
          contenteditable: function() {                                                                                // 35
            return Spacebars.mustache(view.lookup("editContent"));                                                     // 36
          }                                                                                                            // 37
        }, "  \n          ", Blaze.If(function() {                                                                     // 38
          return Spacebars.call(view.lookup("noInlineEditing"));                                                       // 39
        }, function() {                                                                                                // 40
          return [ "\n            ", HTML.PRE(Blaze.View("lookup:documentJSON", function() {                           // 41
            return Spacebars.makeRaw(Spacebars.mustache(view.lookup("documentJSON")));                                 // 42
          })), "\n          " ];                                                                                       // 43
        }, function() {                                                                                                // 44
          return [ "\n            ", Blaze._TemplateWith(function() {                                                  // 45
            return {                                                                                                   // 46
              document: Spacebars.call(view.lookup(".")),                                                              // 47
              collection: Spacebars.call(view.lookup(".."))                                                            // 48
            };                                                                                                         // 49
          }, function() {                                                                                              // 50
            return Spacebars.include(view.lookupTemplate("editableJSON"));                                             // 51
          }), "\n          " ];                                                                                        // 52
        }), "\n        "), "\n      " ];                                                                               // 53
      }), "\n    " ];                                                                                                  // 54
    }, function() {                                                                                                    // 55
      return [ "\n      ", HTML.DIV({                                                                                  // 56
        "class": "Mongol_documentViewer",                                                                              // 57
        id: function() {                                                                                               // 58
          return [ "MongolDoc_", Spacebars.mustache(view.lookup(".")) ];                                               // 59
        }                                                                                                              // 60
      }, "  \n        ", HTML.PRE("No document found"), "\n      "), "\n    " ];                                       // 61
    }), "\n  " ];                                                                                                      // 62
  }, function() {                                                                                                      // 63
    return [ "\n    ", Spacebars.include(view.lookupTemplate("Mongol_docInsert")), "\n  " ];                           // 64
  });                                                                                                                  // 65
}));                                                                                                                   // 66
                                                                                                                       // 67
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 683
}).call(this);                                                       // 684
                                                                     // 685
                                                                     // 686
                                                                     // 687
                                                                     // 688
                                                                     // 689
                                                                     // 690
(function () {                                                       // 691
                                                                     // 692
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin:mongol/client/doc_editor/docViewer.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.Mongol_docViewer.helpers({                                                                                    // 1
  activeDocument: function () {                                                                                        // 2
    var collectionName = String(this);                                                                                 // 3
    var currentCollection = Mongol.Collection(collectionName);                                                         // 4
    var documents = currentCollection.find({}, {transform: null}).fetch();                                             // 5
    var sessionKey = "Mongol_" + String(this);                                                                         // 6
    var docNumber = MeteorToysDict.get(sessionKey);                                                                    // 7
    var docCurrent = documents[docNumber];                                                                             // 8
    return docCurrent;                                                                                                 // 9
  },                                                                                                                   // 10
  documentJSON: function () {                                                                                          // 11
    var docCurrent = this;                                                                                             // 12
    var json_output = JSON.stringify(docCurrent, null, 2), colorize;                                                   // 13
                                                                                                                       // 14
    if (!(json_output === undefined)) {                                                                                // 15
      colorize = Mongol.colorize(json_output);                                                                         // 16
    } else {                                                                                                           // 17
      colorize = json_output;                                                                                          // 18
    }                                                                                                                  // 19
                                                                                                                       // 20
    return colorize;                                                                                                   // 21
                                                                                                                       // 22
  },                                                                                                                   // 23
  editContent: function () {                                                                                           // 24
                                                                                                                       // 25
    var editMode = MeteorToysDict.get("Mongol_editMode");                                                              // 26
                                                                                                                       // 27
    if (editMode) {                                                                                                    // 28
      return "true";                                                                                                   // 29
    }                                                                                                                  // 30
                                                                                                                       // 31
  },                                                                                                                   // 32
  editStyle: function () {                                                                                             // 33
                                                                                                                       // 34
    var editMode = MeteorToysDict.get("Mongol_editMode");                                                              // 35
                                                                                                                       // 36
    if (editMode) {                                                                                                    // 37
      return "Mongol_editable";                                                                                        // 38
    }                                                                                                                  // 39
                                                                                                                       // 40
  },                                                                                                                   // 41
  notEmpty: function () {                                                                                              // 42
    var documentCount = Mongol.Collection(String(this)) && Mongol.Collection(String(this)).find().count() || 0;        // 43
    if (documentCount >= 1) {                                                                                          // 44
      return true;                                                                                                     // 45
    }                                                                                                                  // 46
  },                                                                                                                   // 47
  noInlineEditing: function () {                                                                                       // 48
    return MeteorToysDict.get('Mongol_noInlineEditing');                                                               // 49
  }                                                                                                                    // 50
});                                                                                                                    // 51
                                                                                                                       // 52
// Will possibly be used in augmented document udpate UI                                                               // 53
/*Template.Mongol_docViewer.events({                                                                                   // 54
                                                                                                                       // 55
  'click .Mongol_string' : function (evt,tmpl) {                                                                       // 56
    var field = $(evt.target).prevAll(".Mongol_key:first").text().slice(1,-2);                                         // 57
    MeteorToysDict.set('Mongol_inlineEdit',true);                                                                      // 58
    Tracker.flush();                                                                                                   // 59
    // Do something to trigger the editable text element                                                               // 60
  }                                                                                                                    // 61
                                                                                                                       // 62
});*/                                                                                                                  // 63
                                                                                                                       // 64
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 764
}).call(this);                                                       // 765
                                                                     // 766
                                                                     // 767
                                                                     // 768
                                                                     // 769
                                                                     // 770
                                                                     // 771
(function () {                                                       // 772
                                                                     // 773
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin:mongol/client/doc_insert/template.docInsert.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Mongol_docInsert");                                                                              // 2
Template["Mongol_docInsert"] = new Template("Template.Mongol_docInsert", (function() {                                 // 3
  var view = this;                                                                                                     // 4
  return [ HTML.Raw('<div class="Mongol_docMenu">\n		<div class="Mongol_docMenu_insert" style="float: right">Insert</div>\n		&nbsp;Create the First Document\n	</div>\n\n	'), HTML.DIV({
    "class": "Mongol_documentViewer ",                                                                                 // 6
    id: function() {                                                                                                   // 7
      return [ "Mongol_", Spacebars.mustache(view.lookup(".")), "_newEntry" ];                                         // 8
    },                                                                                                                 // 9
    tabindex: "-1",                                                                                                    // 10
    contenteditable: "true"                                                                                            // 11
  }, "	\n", HTML.Raw("<pre>{\n\n}</pre>"), "\n\n	") ];                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 795
}).call(this);                                                       // 796
                                                                     // 797
                                                                     // 798
                                                                     // 799
                                                                     // 800
                                                                     // 801
                                                                     // 802
(function () {                                                       // 803
                                                                     // 804
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin:mongol/client/doc_insert/docInsert.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.Mongol_docInsert.events({                                                                                     // 1
  'click .Mongol_docMenu_insert': function () {                                                                        // 2
                                                                                                                       // 3
    var CollectionName = String(this),                                                                                 // 4
        newDataID      = "Mongol_" + String(this) + "_newEntry",                                                       // 5
        newData        = document.getElementById(newDataID).textContent,                                               // 6
        newObject      = Mongol.parse(newData);                                                                        // 7
                                                                                                                       // 8
    if (newObject) {                                                                                                   // 9
      Meteor.call('Mongol_insert', CollectionName, newObject, function (error, result) {                               // 10
        if (!error) {                                                                                                  // 11
          sessionKey = "Mongol_" + CollectionName;                                                                     // 12
          MeteorToysDict.set(sessionKey, 0);                                                                           // 13
        } else {                                                                                                       // 14
          Mongol.error("insert");                                                                                      // 15
        }                                                                                                              // 16
      });                                                                                                              // 17
    }                                                                                                                  // 18
                                                                                                                       // 19
  }                                                                                                                    // 20
});                                                                                                                    // 21
                                                                                                                       // 22
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 834
}).call(this);                                                       // 835
                                                                     // 836
                                                                     // 837
                                                                     // 838
                                                                     // 839
                                                                     // 840
                                                                     // 841
(function () {                                                       // 842
                                                                     // 843
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin:mongol/client/_component/template.component.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Mongol_Component");                                                                              // 2
Template["Mongol_Component"] = new Template("Template.Mongol_Component", (function() {                                 // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": function() {                                                                                              // 6
      return [ "Mongol_row ", Spacebars.mustache(view.lookup("active")) ];                                             // 7
    },                                                                                                                 // 8
    id: function() {                                                                                                   // 9
      return [ "Mongol_c", Spacebars.mustache(view.lookup("name")) ];                                                  // 10
    }                                                                                                                  // 11
  }, "\n		", Blaze._InOuterTemplateScope(view, function() {                                                            // 12
    return Spacebars.include(function() {                                                                              // 13
      return Spacebars.call(view.templateContentBlock);                                                                // 14
    });                                                                                                                // 15
  }), "\n	");                                                                                                          // 16
}));                                                                                                                   // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 869
}).call(this);                                                       // 870
                                                                     // 871
                                                                     // 872
                                                                     // 873
                                                                     // 874
                                                                     // 875
                                                                     // 876
(function () {                                                       // 877
                                                                     // 878
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin:mongol/client/_component/component.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.Mongol_Component.events({                                                                                     // 1
	'click .Mongol_row': function () {                                                                                    // 2
		if (MeteorToysDict.equals("Mongol_currentCollection", this.name)) {                                                  // 3
		  MeteorToysDict.set("Mongol_currentCollection", null);                                                              // 4
		} else {                                                                                                             // 5
		  MeteorToysDict.set("Mongol_currentCollection", this.name);                                                         // 6
		}                                                                                                                    // 7
                                                                                                                       // 8
		MeteorToysDict.set("Mongol_editMode", false);                                                                        // 9
	},                                                                                                                    // 10
	'click .Mongol_contentView': function (e) {                                                                           // 11
		e.stopPropagation();                                                                                                 // 12
  	}                                                                                                                   // 13
});                                                                                                                    // 14
                                                                                                                       // 15
Template.Mongol_Component.helpers({                                                                                    // 16
  active: function () {                                                                                                // 17
    if (MeteorToysDict.equals("Mongol_currentCollection", this.name)) {                                                // 18
      return "Mongol_row_expand";                                                                                      // 19
    }                                                                                                                  // 20
  }                                                                                                                    // 21
});                                                                                                                    // 22
                                                                                                                       // 23
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 909
}).call(this);                                                       // 910
                                                                     // 911
                                                                     // 912
                                                                     // 913
                                                                     // 914
                                                                     // 915
                                                                     // 916
(function () {                                                       // 917
                                                                     // 918
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin:mongol/client/row_subscriptions/template.subscriptions.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Mongol_subscriptions");                                                                          // 2
Template["Mongol_subscriptions"] = new Template("Template.Mongol_subscriptions", (function() {                         // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return {                                                                                                           // 6
      name: Spacebars.call("subscriptions_618")                                                                        // 7
    };                                                                                                                 // 8
  }, function() {                                                                                                      // 9
    return Spacebars.include(view.lookupTemplate("Mongol_Component"), function() {                                     // 10
      return [ "\n\n		\n        ", HTML.DIV({                                                                          // 11
        "class": "Mongol_toggle_selected_collection"                                                                   // 12
      }, "\n			", HTML.Comment(" Name "), "\n			", HTML.DIV({                                                          // 13
        "class": "Mongol_icon Mongol_icon_sub"                                                                         // 14
      }), "Subscriptions\n        "), "\n\n		", HTML.DIV({                                                             // 15
        "class": "Mongol_contentView"                                                                                  // 16
      }, "\n		", HTML.DIV({                                                                                            // 17
        "class": "Mongol_docMenu",                                                                                     // 18
        style: "text-indent: 8px"                                                                                      // 19
      }, "\n			", Blaze.View("lookup:subType", function() {                                                            // 20
        return Spacebars.mustache(view.lookup("subType"));                                                             // 21
      }), "\n		"), "\n		", HTML.Comment(" Document Viewer "), "\n		", HTML.DIV({                                       // 22
        "class": "Mongol_documentViewer "                                                                              // 23
      }, "\n			", Blaze.Each(function() {                                                                              // 24
        return Spacebars.call(view.lookup("subscription"));                                                            // 25
      }, function() {                                                                                                  // 26
        return [ "\n				", HTML.DIV({                                                                                  // 27
          "class": "Mongol_subscription"                                                                               // 28
        }, "\n					", HTML.DIV({                                                                                       // 29
          "class": "Mongol_subscription_toggle"                                                                        // 30
        }, HTML.CharRef({                                                                                              // 31
          html: "&times;",                                                                                             // 32
          str: "×"                                                                                                     // 33
        })), "\n					", HTML.DIV({                                                                                     // 34
          "class": "Mongol_subscription_name"                                                                          // 35
        }, Blaze.View("lookup:name", function() {                                                                      // 36
          return Spacebars.mustache(view.lookup("name"));                                                              // 37
        })), "\n					Params: ", Blaze.View("lookup:params", function() {                                               // 38
          return Spacebars.mustache(view.lookup("params"));                                                            // 39
        }), " \n				"), "\n			" ];                                                                                     // 40
      }, function() {                                                                                                  // 41
        return "\n				No subscriptions available\n			";                                                                // 42
      }), "\n		"), "\n		", HTML.Comment("  "), "\n	"), "\n		\n\n	" ];                                                  // 43
    });                                                                                                                // 44
  });                                                                                                                  // 45
}));                                                                                                                   // 46
                                                                                                                       // 47
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 973
}).call(this);                                                       // 974
                                                                     // 975
                                                                     // 976
                                                                     // 977
                                                                     // 978
                                                                     // 979
                                                                     // 980
(function () {                                                       // 981
                                                                     // 982
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin:mongol/client/row_subscriptions/subscriptions.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.Mongol_subscriptions.helpers({                                                                                // 1
  subscription: function () {                                                                                          // 2
                                                                                                                       // 3
    var subscriptionIDs = MeteorToysDict.get("MeteorToys_PubSub")                                                      // 4
    return subscriptionIDs;                                                                                            // 5
                                                                                                                       // 6
  },                                                                                                                   // 7
  name: function () {                                                                                                  // 8
    var subName = Meteor.default_connection._subscriptions[this] && Meteor.default_connection._subscriptions[this].name;
    return subName;                                                                                                    // 10
  },                                                                                                                   // 11
  params: function () {                                                                                                // 12
    var p = Meteor.default_connection._subscriptions[this] && Meteor.default_connection._subscriptions[this].params    // 13
                                                                                                                       // 14
    if (p && p.length > 0) {                                                                                           // 15
      return p;                                                                                                        // 16
    } else {                                                                                                           // 17
      return "none";                                                                                                   // 18
    }                                                                                                                  // 19
  },                                                                                                                   // 20
  subType: function () {                                                                                               // 21
                                                                                                                       // 22
    if (!Object.observe) {                                                                                             // 23
      return "Polling every 3 seconds"                                                                                 // 24
    } else {                                                                                                           // 25
      return "Observing Changes";                                                                                      // 26
    }                                                                                                                  // 27
                                                                                                                       // 28
  }                                                                                                                    // 29
});                                                                                                                    // 30
                                                                                                                       // 31
                                                                                                                       // 32
Template.Mongol_subscriptions.events({                                                                                 // 33
  'click .Mongol_subscription_toggle': function () {                                                                   // 34
    Meteor.default_connection._subscriptions[this].stop()                                                              // 35
  }                                                                                                                    // 36
});                                                                                                                    // 37
                                                                                                                       // 38
                                                                                                                       // 39
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 1029
}).call(this);                                                       // 1030
                                                                     // 1031
                                                                     // 1032
                                                                     // 1033
                                                                     // 1034
                                                                     // 1035
                                                                     // 1036
(function () {                                                       // 1037
                                                                     // 1038
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin:mongol/client/template.main.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Mongol");                                                                                        // 2
Template["Mongol"] = new Template("Template.Mongol", (function() {                                                     // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("MeteorToys"));                                                                  // 6
  }, function() {                                                                                                      // 7
    return [ "\n		\n		", HTML.DIV({                                                                                    // 8
      id: "Mongol",                                                                                                    // 9
      "class": function() {                                                                                            // 10
        return [ Spacebars.mustache(view.lookup("active")), " MeteorToys" ];                                           // 11
      }                                                                                                                // 12
    }, "\n			\n			", Blaze.If(function() {                                                                             // 13
      return Spacebars.call(view.lookup("MeteorToys_Pro"));                                                            // 14
    }, function() {                                                                                                    // 15
      return [ "\n			\n				", Spacebars.include(view.lookupTemplate("Mongol_header_pro")), "\n				", Spacebars.include(view.lookupTemplate("Mongol_account")), "\n\n				", Blaze.Each(function() {
        return Spacebars.call(view.lookup("Mongol_collections"));                                                      // 17
      }, function() {                                                                                                  // 18
        return [ "\n					", Spacebars.include(view.lookupTemplate("Mongol_collection")), "\n				" ];                   // 19
      }, function() {                                                                                                  // 20
        return [ "\n					", Spacebars.include(view.lookupTemplate("Mongol_collection_notFound")), "\n				" ];          // 21
      }), "\n\n				", Blaze.If(function() {                                                                            // 22
        return Spacebars.call(view.lookup("Mongol_isExtended"));                                                       // 23
      }, function() {                                                                                                  // 24
        return [ "\n					", Spacebars.include(view.lookupTemplate("Mongol_extensions")), "\n				" ];                   // 25
      }), "\n				", Spacebars.include(view.lookupTemplate("Mongol_trash")), "\n\n			" ];                               // 26
    }, function() {                                                                                                    // 27
      return [ "\n\n				", Spacebars.include(view.lookupTemplate("Mongol_header")), "\n				", Spacebars.include(view.lookupTemplate("Mongol_account")), "\n				", Spacebars.include(view.lookupTemplate("Mongol_subscriptions")), "\n\n				", Blaze.Each(function() {
        return Spacebars.call(view.lookup("Mongol_collections"));                                                      // 29
      }, function() {                                                                                                  // 30
        return [ "\n					", Spacebars.include(view.lookupTemplate("Mongol_collection")), "\n				" ];                   // 31
      }, function() {                                                                                                  // 32
        return [ "\n					", Spacebars.include(view.lookupTemplate("Mongol_collection_notFound")), "\n				" ];          // 33
      }), "\n\n				", Blaze.If(function() {                                                                            // 34
        return Spacebars.call(view.lookup("Mongol_isExtended"));                                                       // 35
      }, function() {                                                                                                  // 36
        return [ "\n					", Spacebars.include(view.lookupTemplate("Mongol_extensions")), "\n				" ];                   // 37
      }), "\n\n			" ];                                                                                                 // 38
    }), "\n\n		"), "\n		\n	" ];                                                                                        // 39
  });                                                                                                                  // 40
}));                                                                                                                   // 41
                                                                                                                       // 42
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 1088
}).call(this);                                                       // 1089
                                                                     // 1090
                                                                     // 1091
                                                                     // 1092
                                                                     // 1093
                                                                     // 1094
                                                                     // 1095
(function () {                                                       // 1096
                                                                     // 1097
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin:mongol/client/main.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Meteor.startup(function() {                                                                                            // 1
                                                                                                                       // 2
  // Load Mongol                                                                                                       // 3
    Meteor.defer(function () {                                                                                         // 4
      Blaze.render(Template.Mongol, document.body);                                                                    // 5
    });                                                                                                                // 6
                                                                                                                       // 7
  // Detect collections                                                                                                // 8
    Mongol.detectCollections();                                                                                        // 9
                                                                                                                       // 10
  // Initialize Reactive-Dict                                                                                          // 11
    MeteorToysDict = Package["meteortoys:toykit"].MeteorToysDict;                                                      // 12
                                                                                                                       // 13
  // Hide background collections                                                                                       // 14
    Mongol.hideVelocity();                                                                                             // 15
    Mongol.hideMeteorToys();                                                                                           // 16
                                                                                                                       // 17
  // For use outside of Mongol package scope:                                                                          // 18
  // Package["msavin:mongol"].Mongol.hideCollection("mongoName");                                                      // 19
  // Package["msavin:mongol"].Mongol.showCollection("localCollection");                                                // 20
                                                                                                                       // 21
});                                                                                                                    // 22
                                                                                                                       // 23
Template.Mongol.helpers({                                                                                              // 24
  Mongol_collections: function () {                                                                                    // 25
    // returns Mongo names of collections                                                                              // 26
    var    MongolConfig = MeteorToysDict.get("Mongol");                                                                // 27
    return MongolConfig && _.without(MongolConfig.collections, null) || [];                                            // 28
  },                                                                                                                   // 29
  active: function () {                                                                                                // 30
    var MongolCollection = MeteorToysDict.get("Mongol_currentCollection");                                             // 31
    if (MongolCollection) {                                                                                            // 32
      return "Mongol_expand";                                                                                          // 33
    }                                                                                                                  // 34
  },                                                                                                                   // 35
  Mongol_isExtended: function () {                                                                                     // 36
    return Package["meteortoys:mongolkit"];                                                                            // 37
  }                                                                                                                    // 38
});                                                                                                                    // 39
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 1144
}).call(this);                                                       // 1145
                                                                     // 1146
                                                                     // 1147
                                                                     // 1148
                                                                     // 1149
                                                                     // 1150
                                                                     // 1151
(function () {                                                       // 1152
                                                                     // 1153
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin:mongol/client/doc_controls/template.docControls.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Mongol_docControls");                                                                            // 2
Template["Mongol_docControls"] = new Template("Template.Mongol_docControls", (function() {                             // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("active"));                                                                      // 6
  }, function() {                                                                                                      // 7
    return [ "\n		\n		", HTML.DIV({                                                                                    // 8
      "class": function() {                                                                                            // 9
        return [ "Mongol_docMenu ", Spacebars.mustache(view.lookup("Mongol_docMenu_editing")) ];                       // 10
      }                                                                                                                // 11
    }, "\n			", Blaze.If(function() {                                                                                  // 12
      return Spacebars.call(view.lookup("account"));                                                                   // 13
    }, function() {                                                                                                    // 14
      return [ "\n				", HTML.DIV({                                                                                    // 15
        "class": "Mongol_docBar1"                                                                                      // 16
      }, "\n					", Blaze.If(function() {                                                                              // 17
        return Spacebars.call(view.lookup("editing"));                                                                 // 18
      }, function() {                                                                                                  // 19
        return [ "\n						", HTML.DIV({                                                                                // 20
          "class": "Mongol_edit_title"                                                                                 // 21
        }, "Update Document"), "\n						", HTML.DIV({                                                                  // 22
          "class": "Mongol_edit_save"                                                                                  // 23
        }, "Save"), "\n						", HTML.DIV({                                                                             // 24
          "class": "Mongol_edit_cancel"                                                                                // 25
        }, "Cancel"), "\n					" ];                                                                                     // 26
      }, function() {                                                                                                  // 27
        return [ "	\n						\n                        ", HTML.Comment("For some reason, the method in place does not work for this\n                        Commenting out for now"), "\n                        ", HTML.DIV({
          "class": "Mongol_m_edit Mongol_m_updateAccount"                                                              // 29
        }, "Update"), "\n						\n						", HTML.Comment(" &nbsp;Currently Read-Only "), "\n						", HTML.DIV({          // 30
          "class": "Mongol_m_signout"                                                                                  // 31
        }, "Sign Out"), "\n                        \n					" ];                                                         // 32
      }), "\n				"), "\n			" ];                                                                                        // 33
    }, function() {                                                                                                    // 34
      return [ "\n				", HTML.DIV({                                                                                    // 35
        "class": "Mongol_docBar1"                                                                                      // 36
      }, "\n					", Blaze.If(function() {                                                                              // 37
        return Spacebars.call(view.lookup("editing"));                                                                 // 38
      }, function() {                                                                                                  // 39
        return [ "\n						", HTML.DIV({                                                                                // 40
          "class": "Mongol_edit_title"                                                                                 // 41
        }, "Update Document"), "\n						", HTML.DIV({                                                                  // 42
          "class": "Mongol_edit_save"                                                                                  // 43
        }, "Save"), "\n						", HTML.DIV({                                                                             // 44
          "class": "Mongol_edit_cancel"                                                                                // 45
        }, "Cancel"), "\n					" ];                                                                                     // 46
      }, function() {                                                                                                  // 47
        return [ "\n						", HTML.DIV({                                                                                // 48
          "class": "Mongol_m_edit"                                                                                     // 49
        }, "Update"), "\n						", HTML.DIV({                                                                           // 50
          "class": "Mongol_m_new"                                                                                      // 51
        }, "Duplicate"), "\n						", HTML.DIV({                                                                        // 52
          "class": "Mongol_m_delete"                                                                                   // 53
        }, "Remove"), "\n						", HTML.DIV({                                                                           // 54
          "class": function() {                                                                                        // 55
            return [ Spacebars.mustache(view.lookup("disable")), " Mongol_m_right" ];                                  // 56
          }                                                                                                            // 57
        }, HTML.CharRef({                                                                                              // 58
          html: "&rsaquo;",                                                                                            // 59
          str: "›"                                                                                                     // 60
        })), "\n						", HTML.DIV({                                                                                    // 61
          "class": function() {                                                                                        // 62
            return [ Spacebars.mustache(view.lookup("disable")), " Mongol_m_left" ];                                   // 63
          }                                                                                                            // 64
        }, HTML.CharRef({                                                                                              // 65
          html: "&lsaquo;",                                                                                            // 66
          str: "‹"                                                                                                     // 67
        })), "\n					" ];                                                                                              // 68
      }), "\n				"), "\n			" ];                                                                                        // 69
    }), "	\n		"), "\n\n	" ];                                                                                           // 70
  }, function() {                                                                                                      // 71
    return [ "\n\n		", HTML.DIV({                                                                                      // 72
      "class": "Mongol_docMenu"                                                                                        // 73
    }, "\n			", HTML.DIV({                                                                                             // 74
      "class": "Mongol_docBar1"                                                                                        // 75
    }, "\n				", HTML.CharRef({                                                                                        // 76
      html: "&nbsp;",                                                                                                  // 77
      str: " "                                                                                                         // 78
    }), "\n			"), "\n		"), "\n\n	" ];                                                                                  // 79
  });                                                                                                                  // 80
}));                                                                                                                   // 81
                                                                                                                       // 82
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 1243
}).call(this);                                                       // 1244
                                                                     // 1245
                                                                     // 1246
                                                                     // 1247
                                                                     // 1248
                                                                     // 1249
                                                                     // 1250
(function () {                                                       // 1251
                                                                     // 1252
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin:mongol/client/doc_controls/docControls.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
// needs to be re-thought                                                                                              // 2
                                                                                                                       // 3
// Strip out functions in case documents have had methods added to them                                                // 4
                                                                                                                       // 5
Mongol.validateDocument = function (doc) {                                                                             // 6
  var validatedDoc = {};                                                                                               // 7
  _.each(doc, function (val, key) {                                                                                    // 8
    if (_.isFunction(val)) {                                                                                           // 9
      return;                                                                                                          // 10
    }                                                                                                                  // 11
    validatedDoc[key] = val;                                                                                           // 12
  });                                                                                                                  // 13
  return validatedDoc;                                                                                                 // 14
}                                                                                                                      // 15
                                                                                                                       // 16
Mongol.inlineEditingTimer = null;                                                                                      // 17
                                                                                                                       // 18
Mongol.resetInlineEditingTimer = function() {                                                                          // 19
  if (Mongol.inlineEditingTimer) {                                                                                     // 20
	Meteor.clearTimeout(Mongol.inlineEditingTimer);                                                                       // 21
  }                                                                                                                    // 22
  MeteorToysDict.set('Mongol_noInlineEditing', true);                                                                  // 23
  Mongol.inlineEditingTimer = Meteor.setTimeout(function () {                                                          // 24
    MeteorToysDict.set('Mongol_noInlineEditing', false);                                                               // 25
  },300);                                                                                                              // 26
}                                                                                                                      // 27
                                                                                                                       // 28
Template.Mongol_docControls.events({                                                                                   // 29
  'click .Mongol_m_new': function() {                                                                                  // 30
                                                                                                                       // 31
    CollectionName    = MeteorToysDict.get("Mongol_currentCollection"),                                                // 32
    DocumentPosition  = MeteorToysDict.get("Mongol_" + String(this)),                                                  // 33
    CurrentCollection = Mongol.Collection(CollectionName).find({}, {transform: null}).fetch(),                         // 34
    CollectionCount   = Mongol.Collection(CollectionName).find().count(),                                              // 35
    CurrentDocument   = CurrentCollection[DocumentPosition],                                                           // 36
    DocumentID        = CurrentDocument._id,                                                                           // 37
    sessionKey        = "Mongol_" + String(this),                                                                      // 38
    ValidatedCurrentDocument = Mongol.validateDocument(CurrentDocument);                                               // 39
                                                                                                                       // 40
    Meteor.call("Mongol_duplicate", CollectionName, ValidatedCurrentDocument._id, function(error, result) {            // 41
      if (!error) {                                                                                                    // 42
                                                                                                                       // 43
        if (Mongol.Collection(CollectionName).findOne(result)) {                                                       // 44
                                                                                                                       // 45
          // Get position of new document                                                                              // 46
          list  = Mongol.Collection(CollectionName).find({}, {transform: null}).fetch(),                               // 47
          docID = result,                                                                                              // 48
          currentDoc;                                                                                                  // 49
                                                                                                                       // 50
          docIndex = _.map(list, function(obj, index) {                                                                // 51
            if (obj._id === docID) {                                                                                   // 52
              currentDoc = index;                                                                                      // 53
            }                                                                                                          // 54
          })                                                                                                           // 55
                                                                                                                       // 56
          MeteorToysDict.set(sessionKey, Number(currentDoc));                                                          // 57
        }                                                                                                              // 58
                                                                                                                       // 59
      } else {                                                                                                         // 60
        Mongol.error("duplicate");                                                                                     // 61
      }                                                                                                                // 62
    });                                                                                                                // 63
                                                                                                                       // 64
                                                                                                                       // 65
                                                                                                                       // 66
  },                                                                                                                   // 67
  'click .Mongol_m_edit': function() {                                                                                 // 68
    MeteorToysDict.set("Mongol_editMode", true);                                                                       // 69
  },                                                                                                                   // 70
  'click .Mongol_m_delete': function() {                                                                               // 71
                                                                                                                       // 72
    var CollectionName = MeteorToysDict.get("Mongol_currentCollection"),                                               // 73
      sessionKey = "Mongol_" + String(this);                                                                           // 74
    DocumentPosition = MeteorToysDict.get(sessionKey),                                                                 // 75
      CurrentCollection = Mongol.Collection(CollectionName).find({}, {transform: null}).fetch(),                       // 76
      CollectionCount = Mongol.Collection(CollectionName).find().count();                                              // 77
                                                                                                                       // 78
    var CurrentDocument = CurrentCollection[DocumentPosition],                                                         // 79
      DocumentID = CurrentDocument._id;                                                                                // 80
                                                                                                                       // 81
                                                                                                                       // 82
                                                                                                                       // 83
    Meteor.call('Mongol_remove', CollectionName, DocumentID, function(error, result) {                                 // 84
                                                                                                                       // 85
      if (!error) {                                                                                                    // 86
        // Log the action                                                                                              // 87
        console.log("Removed " + DocumentID + " from " + CollectionName + ". Back-up below:");                         // 88
        console.log(CurrentDocument);                                                                                  // 89
                                                                                                                       // 90
        // Adjust the position                                                                                         // 91
        if (DocumentPosition >= CollectionCount - 1) {                                                                 // 92
          newPosition = DocumentPosition - 1;                                                                          // 93
          MeteorToysDict.set(sessionKey, newPosition);                                                                 // 94
        }                                                                                                              // 95
                                                                                                                       // 96
        if (MeteorToysDict.get(sessionKey) === -1) {                                                                   // 97
          MeteorToysDict.set(sessionKey, 0);                                                                           // 98
        }                                                                                                              // 99
                                                                                                                       // 100
                                                                                                                       // 101
      } else {                                                                                                         // 102
        Mongol.error("remove");                                                                                        // 103
      }                                                                                                                // 104
                                                                                                                       // 105
    });                                                                                                                // 106
                                                                                                                       // 107
                                                                                                                       // 108
                                                                                                                       // 109
  },                                                                                                                   // 110
  'click .Mongol_m_right': function(e,t) {                                                                             // 111
    // Verify that the button is not disabled                                                                          // 112
    if (!t.$('.Mongol_m_right').hasClass('Mongol_m_disabled')) {                                                       // 113
                                                                                                                       // 114
      // Disable inline editing for 0.3s for quick flick to next doc                                                   // 115
      Mongol.resetInlineEditingTimer();                                                                                // 116
	                                                                                                                      // 117
      // Grab the key                                                                                                  // 118
                                                                                                                       // 119
      var sessionKey = "Mongol_" + String(this);                                                                       // 120
      var CurrentDocument = MeteorToysDict.get(sessionKey);                                                            // 121
      var collectionName = String(this);                                                                               // 122
      var collectionVar = Mongol.Collection(collectionName);                                                           // 123
      var collectionCount = collectionVar.find().count() - 1;                                                          // 124
                                                                                                                       // 125
      if (CurrentDocument > collectionCount) {                                                                         // 126
        MeteorToysDict.set(sessionKey, 0)                                                                              // 127
        return;                                                                                                        // 128
      }                                                                                                                // 129
                                                                                                                       // 130
      if (collectionCount === CurrentDocument) {                                                                       // 131
        // Go back to document 1                                                                                       // 132
        MeteorToysDict.set(sessionKey, 0);                                                                             // 133
      } else {                                                                                                         // 134
        // Go to next document                                                                                         // 135
        var MongolDocNumber = MeteorToysDict.get(sessionKey) + 1;                                                      // 136
        MeteorToysDict.set(sessionKey, MongolDocNumber);                                                               // 137
      }                                                                                                                // 138
                                                                                                                       // 139
    }                                                                                                                  // 140
  },                                                                                                                   // 141
  'click .Mongol_m_left': function(e,t) {                                                                              // 142
                                                                                                                       // 143
    // Verify that the button is not disabled                                                                          // 144
    if (!t.$('.Mongol_m_left').hasClass('Mongol_m_disabled')) {                                                        // 145
                                                                                                                       // 146
      // Disable inline editing for 0.3s for quick flick to next doc                                                   // 147
      Mongol.resetInlineEditingTimer();                                                                                // 148
                                                                                                                       // 149
      // Grab the key                                                                                                  // 150
      sessionKey = "Mongol_" + String(this);                                                                           // 151
      // Get the document count                                                                                        // 152
      var CurrentDocument = MeteorToysDict.get(sessionKey);                                                            // 153
      var collectionName  = String(this);                                                                              // 154
      var collectionVar   = Mongol.Collection(collectionName);                                                         // 155
      var collectionCount = collectionVar.find().count() - 1;                                                          // 156
                                                                                                                       // 157
      if (CurrentDocument > collectionCount) {                                                                         // 158
        MeteorToysDict.set(sessionKey, collectionCount)                                                                // 159
        return;                                                                                                        // 160
      }                                                                                                                // 161
                                                                                                                       // 162
      if (MeteorToysDict.get(sessionKey) === 0) {                                                                      // 163
                                                                                                                       // 164
                                                                                                                       // 165
        // Set the key to last                                                                                         // 166
        MeteorToysDict.set(sessionKey, collectionCount)                                                                // 167
      } else {                                                                                                         // 168
        var MongolDocNumber = MeteorToysDict.get(sessionKey) - 1;                                                      // 169
        MeteorToysDict.set(sessionKey, MongolDocNumber);                                                               // 170
      }                                                                                                                // 171
                                                                                                                       // 172
    }                                                                                                                  // 173
                                                                                                                       // 174
  },                                                                                                                   // 175
  'click .Mongol_edit_save': function() {                                                                              // 176
                                                                                                                       // 177
    // Get current document to get its current state                                                                   // 178
    // We need to send this to the server so we know which fields are up for change                                    // 179
    // when applying the diffing algorithm                                                                             // 180
                                                                                                                       // 181
    var collectionName = (MeteorToysDict.equals("Mongol_currentCollection", "account_618")) ? "users" : String(this);  // 182
                                                                                                                       // 183
    if (MeteorToysDict.equals("Mongol_currentCollection", "account_618")) {                                            // 184
      var newData = Mongol.getDocumentUpdate("account_618");                                                           // 185
      var newObject = Mongol.parse(newData);                                                                           // 186
      var oldObject = Meteor.user();                                                                                   // 187
      // console.log(targetCollection);                                                                                // 188
      // console.log(newData);                                                                                         // 189
      // console.log(newObject);                                                                                       // 190
    } else {                                                                                                           // 191
      var sessionKey = "Mongol_" + collectionName;                                                                     // 192
      DocumentPosition = MeteorToysDict.get(sessionKey),                                                               // 193
        CurrentCollection = Mongol.Collection(collectionName).find({}, {transform: null}).fetch();                     // 194
      var newData = Mongol.getDocumentUpdate(collectionName);                                                          // 195
      var newObject = Mongol.parse(newData);                                                                           // 196
      var oldObject = CurrentCollection[DocumentPosition];                                                             // 197
    }                                                                                                                  // 198
                                                                                                                       // 199
    if (newObject) {                                                                                                   // 200
      Meteor.call("Mongol_update", collectionName, newObject, Mongol.validateDocument(oldObject), function(error, result) {
        if (!error) {                                                                                                  // 202
          MeteorToysDict.set('Mongol_editMode', null);                                                                 // 203
                                                                                                                       // 204
        } else {                                                                                                       // 205
          Mongol.error('update')                                                                                       // 206
        }                                                                                                              // 207
      });                                                                                                              // 208
    }                                                                                                                  // 209
  },                                                                                                                   // 210
  'click .Mongol_edit_cancel': function() {                                                                            // 211
    MeteorToysDict.set('Mongol_editMode', null);                                                                       // 212
  },                                                                                                                   // 213
  'click .Mongol_m_signout': function() {                                                                              // 214
    Meteor.logout();                                                                                                   // 215
  },                                                                                                                   // 216
});                                                                                                                    // 217
                                                                                                                       // 218
                                                                                                                       // 219
Template.Mongol_docControls.helpers({                                                                                  // 220
  disable: function() {                                                                                                // 221
    var sessionKey = "Mongol_" + String(this);                                                                         // 222
    var CurrentDocument = MeteorToysDict.get(sessionKey);                                                              // 223
    var collectionName = String(this);                                                                                 // 224
    var collectionVar = Mongol.Collection(collectionName);                                                             // 225
    var collectionCount = collectionVar.find().count();                                                                // 226
                                                                                                                       // 227
    if (CurrentDocument >= 1) {                                                                                        // 228
      return;                                                                                                          // 229
    }                                                                                                                  // 230
                                                                                                                       // 231
    if (collectionCount === 1) {                                                                                       // 232
      return "Mongol_m_disabled";                                                                                      // 233
    }                                                                                                                  // 234
                                                                                                                       // 235
  },                                                                                                                   // 236
  editing: function() {                                                                                                // 237
    var editing = MeteorToysDict.get('Mongol_editMode');                                                               // 238
    return editing;                                                                                                    // 239
  },                                                                                                                   // 240
  editing_class: function() {                                                                                          // 241
    var edit = MeteorToysDict.get('Mongol_editMode');                                                                  // 242
    if (edit) {                                                                                                        // 243
      return "Mongol_m_wrapper_expand"                                                                                 // 244
    }                                                                                                                  // 245
  },                                                                                                                   // 246
  Mongol_docMenu_editing: function() {                                                                                 // 247
    var editMode = MeteorToysDict.get("Mongol_editMode");                                                              // 248
                                                                                                                       // 249
    if (editMode) {                                                                                                    // 250
      return "Mongol_docMenu_editing";                                                                                 // 251
    }                                                                                                                  // 252
                                                                                                                       // 253
  },                                                                                                                   // 254
  active: function() {                                                                                                 // 255
                                                                                                                       // 256
    var current = MeteorToysDict.get("Mongol_currentCollection");                                                      // 257
                                                                                                                       // 258
    // return true if collection name matches                                                                          // 259
    if (current === String(this)) {                                                                                    // 260
      return true;                                                                                                     // 261
    }                                                                                                                  // 262
                                                                                                                       // 263
    // return true if it's a user account                                                                              // 264
    if (current === "account_618") {                                                                                   // 265
      return true;                                                                                                     // 266
    }                                                                                                                  // 267
                                                                                                                       // 268
  },                                                                                                                   // 269
  account: function() {                                                                                                // 270
                                                                                                                       // 271
    var currentCollection = MeteorToysDict.get("Mongol_currentCollection");                                            // 272
    if (currentCollection === "account_618") {                                                                         // 273
      return true                                                                                                      // 274
    } else {                                                                                                           // 275
      return false                                                                                                     // 276
    }                                                                                                                  // 277
  },                                                                                                                   // 278
                                                                                                                       // 279
});                                                                                                                    // 280
                                                                                                                       // 281
// Will possibly be used in augmented document udpate UI                                                               // 282
/*Template.Mongol_docViewer.events({                                                                                   // 283
'click .Mongol_string' : function (evt,tmpl) {                                                                         // 284
var field = $(evt.target).prevAll(".Mongol_key:first").text().slice(1,-2);                                             // 285
MeteorToysDict.set('Mongol_inlineEdit',true);                                                                          // 286
Tracker.flush();                                                                                                       // 287
// Do something to trigger the editable text element                                                                   // 288
}                                                                                                                      // 289
});*/                                                                                                                  // 290
                                                                                                                       // 291
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 1551
}).call(this);                                                       // 1552
                                                                     // 1553
                                                                     // 1554
                                                                     // 1555
                                                                     // 1556
                                                                     // 1557
                                                                     // 1558
(function () {                                                       // 1559
                                                                     // 1560
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin:mongol/client/extensions/template.extensions.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Mongol_extensions");                                                                             // 2
Template["Mongol_extensions"] = new Template("Template.Mongol_extensions", (function() {                               // 3
  var view = this;                                                                                                     // 4
  return Blaze.Each(function() {                                                                                       // 5
    return Spacebars.call(view.lookup("extension"));                                                                   // 6
  }, function() {                                                                                                      // 7
    return [ "\n		", Spacebars.include(view.lookupTemplate("Mongol_extension")), "\n	" ];                              // 8
  });                                                                                                                  // 9
}));                                                                                                                   // 10
                                                                                                                       // 11
Template.__checkName("Mongol_extension");                                                                              // 12
Template["Mongol_extension"] = new Template("Template.Mongol_extension", (function() {                                 // 13
  var view = this;                                                                                                     // 14
  return Blaze._TemplateWith(function() {                                                                              // 15
    return {                                                                                                           // 16
      name: Spacebars.call("extension")                                                                                // 17
    };                                                                                                                 // 18
  }, function() {                                                                                                      // 19
    return Spacebars.include(view.lookupTemplate("Mongol_Component"), function() {                                     // 20
      return [ "\n		", HTML.DIV({                                                                                      // 21
        "class": "Mongol_counter"                                                                                      // 22
      }, Blaze._TemplateWith(function() {                                                                              // 23
        return {                                                                                                       // 24
          template: Spacebars.call(view.lookup("indicatorTemplate"))                                                   // 25
        };                                                                                                             // 26
      }, function() {                                                                                                  // 27
        return Spacebars.include(function() {                                                                          // 28
          return Spacebars.call(Template.__dynamic);                                                                   // 29
        });                                                                                                            // 30
      })), "\n		", HTML.DIV({                                                                                          // 31
        "class": "Mongol_icon Mongol_icon_extension"                                                                   // 32
      }), Blaze.View("lookup:name", function() {                                                                       // 33
        return Spacebars.mustache(view.lookup("name"));                                                                // 34
      }), "\n		", HTML.DIV({                                                                                           // 35
        "class": "Mongol_contentView"                                                                                  // 36
      }, "\n			", HTML.DIV({                                                                                           // 37
        "class": "Mongol_docMenu"                                                                                      // 38
      }, "\n			  ", Blaze._TemplateWith(function() {                                                                   // 39
        return {                                                                                                       // 40
          template: Spacebars.call(view.lookup("menuTemplate"))                                                        // 41
        };                                                                                                             // 42
      }, function() {                                                                                                  // 43
        return Spacebars.include(function() {                                                                          // 44
          return Spacebars.call(Template.__dynamic);                                                                   // 45
        });                                                                                                            // 46
      }), "\n			"), "\n			", HTML.DIV({                                                                                // 47
        "class": "Mongol_documentViewer "                                                                              // 48
      }, "\n				", Blaze._TemplateWith(function() {                                                                    // 49
        return {                                                                                                       // 50
          template: Spacebars.call(view.lookup("bodyTemplate"))                                                        // 51
        };                                                                                                             // 52
      }, function() {                                                                                                  // 53
        return Spacebars.include(function() {                                                                          // 54
          return Spacebars.call(Template.__dynamic);                                                                   // 55
        });                                                                                                            // 56
      }), "\n			"), "\n		"), "\n	" ];                                                                                  // 57
    });                                                                                                                // 58
  });                                                                                                                  // 59
}));                                                                                                                   // 60
                                                                                                                       // 61
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 1629
}).call(this);                                                       // 1630
                                                                     // 1631
                                                                     // 1632
                                                                     // 1633
                                                                     // 1634
                                                                     // 1635
                                                                     // 1636
(function () {                                                       // 1637
                                                                     // 1638
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin:mongol/client/extensions/extensions.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.Mongol_extension.helpers({                                                                                    // 1
	'indicatorTemplate': function() {                                                                                     // 2
		return "MongolKitIndicator_" + this.name;                                                                            // 3
	},                                                                                                                    // 4
	'menuTemplate': function() {                                                                                          // 5
		return "MongolKitMenu_" + this.name;                                                                                 // 6
	},                                                                                                                    // 7
	'bodyTemplate': function() {                                                                                          // 8
		return "MongolKitBody_" + this.name;                                                                                 // 9
	}                                                                                                                     // 10
})                                                                                                                     // 11
                                                                                                                       // 12
Template.Mongol_extensions.helpers({                                                                                   // 13
	'extension': function() {                                                                                             // 14
		if (Package["meteortoys:mongolkit"]) {                                                                               // 15
			return [{'name':'SDK'}];                                                                                            // 16
		}                                                                                                                    // 17
	}                                                                                                                     // 18
})                                                                                                                     // 19
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 1665
}).call(this);                                                       // 1666
                                                                     // 1667
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['msavin:mongol'] = {
  Mongol: Mongol
};

})();
