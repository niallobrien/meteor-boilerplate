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
var Accounts = Package['accounts-base'].Accounts;
var AccountsClient = Package['accounts-base'].AccountsClient;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var MeteorToysDict, userId;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/meteortoys_authenticate/packages/meteortoys_authenticate.js                                            //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
(function () {                                                                                                     // 1
                                                                                                                   // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                           //    // 4
// packages/meteortoys:authenticate/client/template.main.js                                                  //    // 5
//                                                                                                           //    // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                             //    // 8
                                                                                                             // 1  // 9
Template.__checkName("MeteorToys_accounts");                                                                 // 2  // 10
Template["MeteorToys_accounts"] = new Template("Template.MeteorToys_accounts", (function() {                 // 3  // 11
  var view = this;                                                                                           // 4  // 12
  return Blaze._TemplateWith(function() {                                                                    // 5  // 13
    return {                                                                                                 // 6  // 14
      name: Spacebars.call("MeteorToys_accounts")                                                            // 7  // 15
    };                                                                                                       // 8  // 16
  }, function() {                                                                                            // 9  // 17
    return Spacebars.include(view.lookupTemplate("MeteorToy"), function() {                                  // 10
      return [ "\n		", Spacebars.include(view.lookupTemplate("MeteorToys_accounts_header")), "\n		", Spacebars.include(view.lookupTemplate("MeteorToys_accounts_content")), "\n	" ];
    });                                                                                                      // 12
  });                                                                                                        // 13
}));                                                                                                         // 14
                                                                                                             // 15
Template.__checkName("MeteorToys_accounts_header");                                                          // 16
Template["MeteorToys_accounts_header"] = new Template("Template.MeteorToys_accounts_header", (function() {   // 17
  var view = this;                                                                                           // 18
  return HTML.DIV({                                                                                          // 19
    "class": "MeteorToys_accounts_header"                                                                    // 20
  }, "\n		", Blaze.If(function() {                                                                           // 21
    return Spacebars.call(view.lookup("currentUser"));                                                       // 22
  }, function() {                                                                                            // 23
    return [ "\n			", HTML.DIV({                                                                             // 24
      "class": "MeteorToys_sub_button"                                                                       // 25
    }, "Temporary Logout"), "\n		" ];                                                                        // 26
  }), HTML.Raw('\n		<div class="MeteorToys_name">Authenticate</div>\n	'));                                   // 27
}));                                                                                                         // 28
                                                                                                             // 29
Template.__checkName("MeteorToys_accounts_content");                                                         // 30
Template["MeteorToys_accounts_content"] = new Template("Template.MeteorToys_accounts_content", (function() { // 31
  var view = this;                                                                                           // 32
  return HTML.DIV({                                                                                          // 33
    "class": "MeteorToys_accounts_content"                                                                   // 34
  }, "\n		", Blaze.Each(function() {                                                                         // 35
    return Spacebars.call(view.lookup("account"));                                                           // 36
  }, function() {                                                                                            // 37
    return [ "\n			", Spacebars.include(view.lookupTemplate("MeteorToys_accounts_account")), "\n		" ];       // 38
  }, function() {                                                                                            // 39
    return [ "\n			", HTML.DIV({                                                                             // 40
      style: "padding-top: 4px"                                                                              // 41
    }, "\n				When you authenticate an account, they will be displayed here. Then, you'll be able to impersonate them with just a click.\n			"), "\n		" ];
  }), "\n	");                                                                                                // 43
}));                                                                                                         // 44
                                                                                                             // 45
Template.__checkName("MeteorToys_accounts_account");                                                         // 46
Template["MeteorToys_accounts_account"] = new Template("Template.MeteorToys_accounts_account", (function() { // 47
  var view = this;                                                                                           // 48
  return HTML.DIV({                                                                                          // 49
    "class": function() {                                                                                    // 50
      return [ "MeteorToys_row MeteorToys_row_hoverable ", Spacebars.mustache(view.lookup("active")) ];      // 51
    }                                                                                                        // 52
  }, "\n		", Blaze.If(function() {                                                                           // 53
    return Spacebars.call(view.lookup("active"));                                                            // 54
  }, function() {                                                                                            // 55
    return [ "\n			", HTML.DIV({                                                                             // 56
      "class": "MeteorToys_impersonate_check"                                                                // 57
    }, "\n				", HTML.CharRef({                                                                              // 58
      html: "&check;",                                                                                       // 59
      str: "✓"                                                                                               // 60
    }), "\n			"), "\n		" ];                                                                                  // 61
  }), "\n		", Blaze.View("lookup:identifier", function() {                                                   // 62
    return Spacebars.mustache(view.lookup("identifier"));                                                    // 63
  }), HTML.Raw("<br>\n		_id: "), Blaze.View("lookup:userID", function() {                                    // 64
    return Spacebars.mustache(view.lookup("userID"));                                                        // 65
  }), HTML.Raw("<br>\n	"));                                                                                  // 66
}));                                                                                                         // 67
                                                                                                             // 68
///////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 77
                                                                                                                   // 78
}).call(this);                                                                                                     // 79
                                                                                                                   // 80
                                                                                                                   // 81
                                                                                                                   // 82
                                                                                                                   // 83
                                                                                                                   // 84
                                                                                                                   // 85
(function () {                                                                                                     // 86
                                                                                                                   // 87
///////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 88
//                                                                                                           //    // 89
// packages/meteortoys:authenticate/client/main.js                                                           //    // 90
//                                                                                                           //    // 91
///////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 92
                                                                                                             //    // 93
// Todo                                                                                                      // 1  // 94
// - Switch to Tracker                                                                                       // 2  // 95
// - Fix document not loaded case                                                                            // 3  // 96
                                                                                                             // 4  // 97
                                                                                                             // 5  // 98
MeteorToysDict = Package["meteortoys:toykit"].MeteorToysDict;                                                // 6  // 99
                                                                                                             // 7  // 100
Template.MeteorToys_accounts_content.events({                                                                // 8  // 101
	'click .MeteorToys_row': function () {                                                                      // 9  // 102
		MeteorToysDict.set("MeteorToys_impersonate", false);                                                       // 10
		MeteorToysDict.set("MeteorToys_impersonate", this.userID);                                                 // 11
		MeteorToysDict.set("MeteorToys_current", null);                                                            // 12
	},                                                                                                          // 13
});                                                                                                          // 14
                                                                                                             // 15
Template.MeteorToys_accounts_header.events({                                                                 // 16
	'click .MeteorToys_sub_button': function () {                                                               // 17
		Meteor.connection.setUserId();                                                                             // 18
	}                                                                                                           // 19
});                                                                                                          // 20
Template.MeteorToys_accounts_content.helpers({                                                               // 21
	account: function () {                                                                                      // 22
		return Package["meteortoys:toykit"].MeteorToysData.Impersonate.find({}, {sort: {date: -1}});               // 23
	}                                                                                                           // 24
});                                                                                                          // 25
                                                                                                             // 26
Tracker.autorun(function () {                                                                                // 27
	                                                                                                            // 28
	userId = MeteorToysDict.get("MeteorToys_impersonate");                                                      // 29
	                                                                                                            // 30
	if (userId) {                                                                                               // 31
		Meteor.call("MeteorToys_impersonate", userId, function (e,r) {                                             // 32
			if (!e) {                                                                                                 // 33
				Meteor.connection.setUserId(userId);                                                                     // 34
			}                                                                                                         // 35
		});                                                                                                        // 36
	}                                                                                                           // 37
});                                                                                                          // 38
                                                                                                             // 39
Accounts.onLogin(function () {                                                                               // 40
	window.setTimeout(function() {                                                                              // 41
		Meteor.call("MeteorToys_impersonate_account", function (e, r) {                                            // 42
		});                                                                                                        // 43
	}, 2000);                                                                                                   // 44
});                                                                                                          // 45
                                                                                                             // 46
// Accounts.onLogout(function () {                                                                           // 47
// 	window.setTimeout(function() {                                                                           // 48
// 		Meteor.call("MeteorToys_impersonate_account", function (e, r) {                                         // 49
// 		});                                                                                                     // 50
// 	}, 2000);                                                                                                // 51
// });                                                                                                       // 52
                                                                                                             // 53
Template.MeteorToys_accounts_account.helpers({                                                               // 54
	active: function () {                                                                                       // 55
		if (MeteorToysDict.equals("MeteorToys_impersonate", this.userID)) {                                        // 56
                                                                                                             // 57
			return true                                                                                               // 58
		}                                                                                                          // 59
	}                                                                                                           // 60
});                                                                                                          // 61
///////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 155
                                                                                                                   // 156
}).call(this);                                                                                                     // 157
                                                                                                                   // 158
                                                                                                                   // 159
                                                                                                                   // 160
                                                                                                                   // 161
                                                                                                                   // 162
                                                                                                                   // 163
(function () {                                                                                                     // 164
                                                                                                                   // 165
///////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 166
//                                                                                                           //    // 167
// packages/meteortoys:authenticate/config/config.js                                                         //    // 168
//                                                                                                           //    // 169
///////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 170
                                                                                                             //    // 171
// Meteor.startup(function() {                                                                               // 1  // 172
	                                                                                                            // 2  // 173
// 	MeteorToys.registerPackage({                                                                             // 3  // 174
// 		"name": "PubSub",                                                                                       // 4  // 175
// 		"version": "0.1.0",                                                                                     // 5  // 176
// 		"template": "MeteorToys_pubsub"                                                                         // 6  // 177
// 	})                                                                                                       // 7  // 178
                                                                                                             // 8  // 179
// });                                                                                                       // 9  // 180
///////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 181
                                                                                                                   // 182
}).call(this);                                                                                                     // 183
                                                                                                                   // 184
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteortoys:authenticate'] = {};

})();
