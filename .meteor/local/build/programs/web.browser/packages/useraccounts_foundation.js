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
var _ = Package.underscore._;
var AccountsTemplates = Package['useraccounts:core'].AccountsTemplates;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var Accounts = Package['accounts-base'].Accounts;
var AccountsClient = Package['accounts-base'].AccountsClient;
var T9n = Package['softwarerero:accounts-t9n'].T9n;
var HTML = Package.htmljs.HTML;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/useraccounts_foundation/packages/useraccounts_foundation.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
                                                                                                                       // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:foundation/lib/template.at_error.js                                                        //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("atError");                                                                                    // 2
Template["atError"] = new Template("Template.atError", (function() {                                                // 3
  var view = this;                                                                                                  // 4
  return HTML.DIV({                                                                                                 // 5
    "data-alert": "",                                                                                               // 6
    "class": "at-error alert-box alert radius"                                                                      // 7
  }, "\n    ", Blaze.Each(function() {                                                                              // 8
    return Spacebars.call(view.lookup("error"));                                                                    // 9
  }, function() {                                                                                                   // 10
    return [ "\n      ", HTML.P(Blaze.View("lookup:errorText", function() {                                         // 11
      return Spacebars.mustache(view.lookup("errorText"));                                                          // 12
    })), "\n    " ];                                                                                                // 13
  }), "\n  ");                                                                                                      // 14
}));                                                                                                                // 15
                                                                                                                    // 16
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 26
}).call(this);                                                                                                         // 27
                                                                                                                       // 28
                                                                                                                       // 29
                                                                                                                       // 30
                                                                                                                       // 31
                                                                                                                       // 32
                                                                                                                       // 33
(function () {                                                                                                         // 34
                                                                                                                       // 35
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:foundation/lib/at_error.js                                                                 //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
// Simply 'inherites' helpers from AccountsTemplates                                                                // 1
Template.atError.helpers(AccountsTemplates.atErrorHelpers);                                                         // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 45
}).call(this);                                                                                                         // 46
                                                                                                                       // 47
                                                                                                                       // 48
                                                                                                                       // 49
                                                                                                                       // 50
                                                                                                                       // 51
                                                                                                                       // 52
(function () {                                                                                                         // 53
                                                                                                                       // 54
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:foundation/lib/template.at_form.js                                                         //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("atForm");                                                                                     // 2
Template["atForm"] = new Template("Template.atForm", (function() {                                                  // 3
  var view = this;                                                                                                  // 4
  return Blaze.Unless(function() {                                                                                  // 5
    return Spacebars.call(view.lookup("hide"));                                                                     // 6
  }, function() {                                                                                                   // 7
    return [ "\n    ", HTML.DIV({                                                                                   // 8
      "class": "at-form"                                                                                            // 9
    }, "\n      ", Blaze.If(function() {                                                                            // 10
      return Spacebars.call(view.lookup("showTitle"));                                                              // 11
    }, function() {                                                                                                 // 12
      return [ "\n        ", Spacebars.include(view.lookupTemplate("atTitle")), "\n      " ];                       // 13
    }), "\n      ", Blaze.If(function() {                                                                           // 14
      return Spacebars.call(view.lookup("showOauthServices"));                                                      // 15
    }, function() {                                                                                                 // 16
      return [ "\n        ", Spacebars.include(view.lookupTemplate("atOauth")), "\n      " ];                       // 17
    }), "\n      ", Blaze.If(function() {                                                                           // 18
      return Spacebars.call(view.lookup("showServicesSeparator"));                                                  // 19
    }, function() {                                                                                                 // 20
      return [ "\n        ", Spacebars.include(view.lookupTemplate("atSep")), "\n      " ];                         // 21
    }), "\n      ", Blaze.If(function() {                                                                           // 22
      return Spacebars.call(view.lookup("showError"));                                                              // 23
    }, function() {                                                                                                 // 24
      return [ "\n        ", Spacebars.include(view.lookupTemplate("atError")), "\n      " ];                       // 25
    }), "\n      ", Blaze.If(function() {                                                                           // 26
      return Spacebars.call(view.lookup("showResult"));                                                             // 27
    }, function() {                                                                                                 // 28
      return [ "\n        ", Spacebars.include(view.lookupTemplate("atResult")), "\n      " ];                      // 29
    }), "\n      ", Blaze.If(function() {                                                                           // 30
      return Spacebars.call(view.lookup("showMessage"));                                                            // 31
    }, function() {                                                                                                 // 32
      return [ "\n        ", Spacebars.include(view.lookupTemplate("atMessage")), "\n      " ];                     // 33
    }), "\n      ", Blaze.If(function() {                                                                           // 34
      return Spacebars.call(view.lookup("showPwdForm"));                                                            // 35
    }, function() {                                                                                                 // 36
      return [ "\n        ", Spacebars.include(view.lookupTemplate("atPwdForm")), "\n      " ];                     // 37
    }), "\n      ", Blaze.If(function() {                                                                           // 38
      return Spacebars.call(view.lookup("showTermsLink"));                                                          // 39
    }, function() {                                                                                                 // 40
      return [ "\n        ", Spacebars.include(view.lookupTemplate("atTermsLink")), "\n      " ];                   // 41
    }), "\n      ", Blaze.If(function() {                                                                           // 42
      return Spacebars.call(view.lookup("showSignInLink"));                                                         // 43
    }, function() {                                                                                                 // 44
      return [ "\n        ", Spacebars.include(view.lookupTemplate("atSigninLink")), "\n      " ];                  // 45
    }), "\n      ", Blaze.If(function() {                                                                           // 46
      return Spacebars.call(view.lookup("showSignUpLink"));                                                         // 47
    }, function() {                                                                                                 // 48
      return [ "\n        ", Spacebars.include(view.lookupTemplate("atSignupLink")), "\n      " ];                  // 49
    }), "\n      ", Blaze.If(function() {                                                                           // 50
      return Spacebars.call(view.lookup("showResendVerificationEmailLink"));                                        // 51
    }, function() {                                                                                                 // 52
      return [ "\n        ", Spacebars.include(view.lookupTemplate("atResendVerificationEmailLink")), "\n      " ]; // 53
    }), "\n    "), "\n  " ];                                                                                        // 54
  });                                                                                                               // 55
}));                                                                                                                // 56
                                                                                                                    // 57
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 119
}).call(this);                                                                                                         // 120
                                                                                                                       // 121
                                                                                                                       // 122
                                                                                                                       // 123
                                                                                                                       // 124
                                                                                                                       // 125
                                                                                                                       // 126
(function () {                                                                                                         // 127
                                                                                                                       // 128
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:foundation/lib/at_form.js                                                                  //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
// Simply 'inherites' helpers from AccountsTemplates                                                                // 1
Template.atForm.helpers(AccountsTemplates.atFormHelpers);                                                           // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 138
}).call(this);                                                                                                         // 139
                                                                                                                       // 140
                                                                                                                       // 141
                                                                                                                       // 142
                                                                                                                       // 143
                                                                                                                       // 144
                                                                                                                       // 145
(function () {                                                                                                         // 146
                                                                                                                       // 147
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:foundation/lib/template.at_input.js                                                        //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("atInput");                                                                                    // 2
Template["atInput"] = new Template("Template.atInput", (function() {                                                // 3
  var view = this;                                                                                                  // 4
  return Blaze._TemplateWith(function() {                                                                           // 5
    return {                                                                                                        // 6
      template: Spacebars.call(view.lookup("templateName"))                                                         // 7
    };                                                                                                              // 8
  }, function() {                                                                                                   // 9
    return Spacebars.include(function() {                                                                           // 10
      return Spacebars.call(Template.__dynamic);                                                                    // 11
    });                                                                                                             // 12
  });                                                                                                               // 13
}));                                                                                                                // 14
                                                                                                                    // 15
Template.__checkName("atTextInput");                                                                                // 16
Template["atTextInput"] = new Template("Template.atTextInput", (function() {                                        // 17
  var view = this;                                                                                                  // 18
  return HTML.DIV({                                                                                                 // 19
    "class": function() {                                                                                           // 20
      return [ "at-input row ", Blaze.If(function() {                                                               // 21
        return Spacebars.call(view.lookup("isValidating"));                                                         // 22
      }, function() {                                                                                               // 23
        return "validating";                                                                                        // 24
      }) ];                                                                                                         // 25
    }                                                                                                               // 26
  }, "\n    ", HTML.DIV({                                                                                           // 27
    "class": "large-12 columns"                                                                                     // 28
  }, "\n      ", Blaze.If(function() {                                                                              // 29
    return Spacebars.call(view.lookup("showLabels"));                                                               // 30
  }, function() {                                                                                                   // 31
    return [ "\n        ", HTML.LABEL({                                                                             // 32
      "class": function() {                                                                                         // 33
        return Blaze.If(function() {                                                                                // 34
          return Spacebars.call(view.lookup("hasError"));                                                           // 35
        }, function() {                                                                                             // 36
          return "error";                                                                                           // 37
        });                                                                                                         // 38
      },                                                                                                            // 39
      "for": function() {                                                                                           // 40
        return [ "at-field-", Spacebars.mustache(view.lookup("_id")) ];                                             // 41
      }                                                                                                             // 42
    }, "\n          ", Blaze.View("lookup:displayName", function() {                                                // 43
      return Spacebars.mustache(view.lookup("displayName"));                                                        // 44
    }), " ", Blaze.Unless(function() {                                                                              // 45
      return Spacebars.call(view.lookup("required"));                                                               // 46
    }, function() {                                                                                                 // 47
      return Blaze.View("lookup:optionalText", function() {                                                         // 48
        return Spacebars.mustache(view.lookup("optionalText"));                                                     // 49
      });                                                                                                           // 50
    }), "\n        "), "\n      " ];                                                                                // 51
  }), "\n      ", HTML.INPUT(HTML.Attrs({                                                                           // 52
    type: function() {                                                                                              // 53
      return Spacebars.mustache(view.lookup("type"));                                                               // 54
    },                                                                                                              // 55
    "class": function() {                                                                                           // 56
      return Blaze.If(function() {                                                                                  // 57
        return Spacebars.call(view.lookup("hasError"));                                                             // 58
      }, function() {                                                                                               // 59
        return "error";                                                                                             // 60
      });                                                                                                           // 61
    },                                                                                                              // 62
    id: function() {                                                                                                // 63
      return [ "at-field-", Spacebars.mustache(view.lookup("_id")) ];                                               // 64
    },                                                                                                              // 65
    name: function() {                                                                                              // 66
      return [ "at-field-", Spacebars.mustache(view.lookup("_id")) ];                                               // 67
    },                                                                                                              // 68
    placeholder: function() {                                                                                       // 69
      return Spacebars.mustache(view.lookup("placeholder"));                                                        // 70
    },                                                                                                              // 71
    "aria-label": function() {                                                                                      // 72
      return [ Spacebars.mustache(view.lookup("displayName")), " ", Blaze.Unless(function() {                       // 73
        return Spacebars.call(view.lookup("required"));                                                             // 74
      }, function() {                                                                                               // 75
        return Blaze.View("lookup:optionalText", function() {                                                       // 76
          return Spacebars.mustache(view.lookup("optionalText"));                                                   // 77
        });                                                                                                         // 78
      }) ];                                                                                                         // 79
    }                                                                                                               // 80
  }, function() {                                                                                                   // 81
    return Spacebars.attrMustache(view.lookup("disabled"));                                                         // 82
  })), "\n      ", Blaze.If(function() {                                                                            // 83
    return Spacebars.call(view.lookup("hasError"));                                                                 // 84
  }, function() {                                                                                                   // 85
    return [ "\n        ", HTML.SMALL({                                                                             // 86
      "class": "error"                                                                                              // 87
    }, Blaze.View("lookup:errorText", function() {                                                                  // 88
      return Spacebars.mustache(view.lookup("errorText"));                                                          // 89
    })), "\n      " ];                                                                                              // 90
  }), "\n    "), "\n  ");                                                                                           // 91
}));                                                                                                                // 92
                                                                                                                    // 93
Template.__checkName("atCheckboxInput");                                                                            // 94
Template["atCheckboxInput"] = new Template("Template.atCheckboxInput", (function() {                                // 95
  var view = this;                                                                                                  // 96
  return HTML.DIV({                                                                                                 // 97
    "class": "at-input row"                                                                                         // 98
  }, "\n    ", HTML.DIV({                                                                                           // 99
    "class": "large-12 columns"                                                                                     // 100
  }, "\n      ", HTML.INPUT(HTML.Attrs({                                                                            // 101
    type: function() {                                                                                              // 102
      return Spacebars.mustache(view.lookup("type"));                                                               // 103
    },                                                                                                              // 104
    id: function() {                                                                                                // 105
      return [ "at-field-", Spacebars.mustache(view.lookup("_id")) ];                                               // 106
    },                                                                                                              // 107
    name: function() {                                                                                              // 108
      return [ "at-field-", Spacebars.mustache(view.lookup("_id")) ];                                               // 109
    }                                                                                                               // 110
  }, function() {                                                                                                   // 111
    return Spacebars.attrMustache(view.lookup("disabled"));                                                         // 112
  })), "\n      ", HTML.LABEL({                                                                                     // 113
    "for": function() {                                                                                             // 114
      return [ "at-field-", Spacebars.mustache(view.lookup("_id")) ];                                               // 115
    }                                                                                                               // 116
  }, Blaze.View("lookup:displayName", function() {                                                                  // 117
    return Spacebars.mustache(view.lookup("displayName"));                                                          // 118
  })), "\n    "), "\n  ");                                                                                          // 119
}));                                                                                                                // 120
                                                                                                                    // 121
Template.__checkName("atSelectInput");                                                                              // 122
Template["atSelectInput"] = new Template("Template.atSelectInput", (function() {                                    // 123
  var view = this;                                                                                                  // 124
  return HTML.DIV({                                                                                                 // 125
    "class": "at-input row"                                                                                         // 126
  }, "\n    ", HTML.DIV({                                                                                           // 127
    "class": "large-12 columns"                                                                                     // 128
  }, "\n      ", HTML.LABEL({                                                                                       // 129
    "for": function() {                                                                                             // 130
      return [ "at-field-", Spacebars.mustache(view.lookup("_id")) ];                                               // 131
    }                                                                                                               // 132
  }, Blaze.View("lookup:displayName", function() {                                                                  // 133
    return Spacebars.mustache(view.lookup("displayName"));                                                          // 134
  }), "\n        ", HTML.SELECT({                                                                                   // 135
    id: function() {                                                                                                // 136
      return [ "at-field-", Spacebars.mustache(view.lookup("_id")) ];                                               // 137
    },                                                                                                              // 138
    name: function() {                                                                                              // 139
      return [ "at-field-", Spacebars.mustache(view.lookup("_id")) ];                                               // 140
    }                                                                                                               // 141
  }, "\n          ", Blaze.Each(function() {                                                                        // 142
    return Spacebars.call(view.lookup("values"));                                                                   // 143
  }, function() {                                                                                                   // 144
    return [ "\n            ", HTML.OPTION({                                                                        // 145
      value: function() {                                                                                           // 146
        return Spacebars.mustache(view.lookup("value"));                                                            // 147
      }                                                                                                             // 148
    }, Blaze.View("lookup:text", function() {                                                                       // 149
      return Spacebars.mustache(view.lookup("text"));                                                               // 150
    })), "\n          " ];                                                                                          // 151
  }), "\n        "), "\n      "), "\n    "), "\n  ");                                                               // 152
}));                                                                                                                // 153
                                                                                                                    // 154
Template.__checkName("atRadioInput");                                                                               // 155
Template["atRadioInput"] = new Template("Template.atRadioInput", (function() {                                      // 156
  var view = this;                                                                                                  // 157
  return [ HTML.DIV({                                                                                               // 158
    "class": "at-input row"                                                                                         // 159
  }, "\n    ", HTML.DIV({                                                                                           // 160
    "class": "large-12 columns"                                                                                     // 161
  }, "\n      ", HTML.LABEL(Blaze.View("lookup:displayName", function() {                                           // 162
    return Spacebars.mustache(view.lookup("displayName"));                                                          // 163
  })), "\n    "), "\n  "), "\n  ", Blaze.Each(function() {                                                          // 164
    return Spacebars.call(view.lookup("values"));                                                                   // 165
  }, function() {                                                                                                   // 166
    return [ "\n    ", HTML.DIV({                                                                                   // 167
      "class": "at-input row"                                                                                       // 168
    }, "\n      ", HTML.DIV({                                                                                       // 169
      "class": "large-12 columns"                                                                                   // 170
    }, "\n        ", HTML.INPUT({                                                                                   // 171
      id: function() {                                                                                              // 172
        return [ "at-field-", Spacebars.mustache(view.lookup("id")), "-choice-", Spacebars.mustache(view.lookup("value")) ];
      },                                                                                                            // 174
      type: "radio",                                                                                                // 175
      name: function() {                                                                                            // 176
        return [ "at-field-", Spacebars.mustache(view.lookup("id")) ];                                              // 177
      },                                                                                                            // 178
      value: function() {                                                                                           // 179
        return Spacebars.mustache(view.lookup("value"));                                                            // 180
      }                                                                                                             // 181
    }), "\n        ", HTML.LABEL(Blaze.View("lookup:text", function() {                                             // 182
      return Spacebars.mustache(view.lookup("text"));                                                               // 183
    })), "\n      "), "\n    "), "\n  " ];                                                                          // 184
  }) ];                                                                                                             // 185
}));                                                                                                                // 186
                                                                                                                    // 187
Template.__checkName("atHiddenInput");                                                                              // 188
Template["atHiddenInput"] = new Template("Template.atHiddenInput", (function() {                                    // 189
  var view = this;                                                                                                  // 190
  return HTML.INPUT({                                                                                               // 191
    type: "hidden",                                                                                                 // 192
    id: function() {                                                                                                // 193
      return [ "at-field-", Spacebars.mustache(view.lookup("_id")) ];                                               // 194
    },                                                                                                              // 195
    name: function() {                                                                                              // 196
      return [ "at-field-", Spacebars.mustache(view.lookup("_id")) ];                                               // 197
    }                                                                                                               // 198
  });                                                                                                               // 199
}));                                                                                                                // 200
                                                                                                                    // 201
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 356
}).call(this);                                                                                                         // 357
                                                                                                                       // 358
                                                                                                                       // 359
                                                                                                                       // 360
                                                                                                                       // 361
                                                                                                                       // 362
                                                                                                                       // 363
(function () {                                                                                                         // 364
                                                                                                                       // 365
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:foundation/lib/at_input.js                                                                 //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
_.each(AccountsTemplates.atInputRendered, function(callback){                                                       // 1
  Template.atInput.onRendered(callback);                                                                            // 2
  Template.atHiddenInput.onRendered(callback);                                                                      // 3
});                                                                                                                 // 4
                                                                                                                    // 5
// Simply 'inherites' helpers from AccountsTemplates                                                                // 6
Template.atInput.helpers(AccountsTemplates.atInputHelpers);                                                         // 7
                                                                                                                    // 8
// Simply 'inherites' events from AccountsTemplates                                                                 // 9
Template.atInput.events(AccountsTemplates.atInputEvents);                                                           // 10
                                                                                                                    // 11
// Simply 'inherites' helpers from AccountsTemplates                                                                // 12
Template.atTextInput.helpers(AccountsTemplates.atInputHelpers);                                                     // 13
                                                                                                                    // 14
// Simply 'inherites' helpers from AccountsTemplates                                                                // 15
Template.atCheckboxInput.helpers(AccountsTemplates.atInputHelpers);                                                 // 16
                                                                                                                    // 17
// Simply 'inherites' helpers from AccountsTemplates                                                                // 18
Template.atSelectInput.helpers(AccountsTemplates.atInputHelpers);                                                   // 19
                                                                                                                    // 20
// Simply 'inherites' helpers from AccountsTemplates                                                                // 21
Template.atRadioInput.helpers(AccountsTemplates.atInputHelpers);                                                    // 22
                                                                                                                    // 23
// Simply 'inherites' helpers from AccountsTemplates                                                                // 24
Template.atHiddenInput.helpers(AccountsTemplates.atInputHelpers);                                                   // 25
                                                                                                                    // 26
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 399
}).call(this);                                                                                                         // 400
                                                                                                                       // 401
                                                                                                                       // 402
                                                                                                                       // 403
                                                                                                                       // 404
                                                                                                                       // 405
                                                                                                                       // 406
(function () {                                                                                                         // 407
                                                                                                                       // 408
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:foundation/lib/template.at_message.js                                                      //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("atMessage");                                                                                  // 2
Template["atMessage"] = new Template("Template.atMessage", (function() {                                            // 3
  var view = this;                                                                                                  // 4
  return HTML.DIV({                                                                                                 // 5
    "class": "at-message alert-box info radius"                                                                     // 6
  }, "\n    ", Blaze.View("lookup:message", function() {                                                            // 7
    return Spacebars.mustache(view.lookup("message"));                                                              // 8
  }), "\n  ");                                                                                                      // 9
}));                                                                                                                // 10
                                                                                                                    // 11
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 427
}).call(this);                                                                                                         // 428
                                                                                                                       // 429
                                                                                                                       // 430
                                                                                                                       // 431
                                                                                                                       // 432
                                                                                                                       // 433
                                                                                                                       // 434
(function () {                                                                                                         // 435
                                                                                                                       // 436
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:foundation/lib/at_message.js                                                               //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
// Simply 'inherites' helpers from AccountsTemplates                                                                // 1
Template.atMessage.helpers(AccountsTemplates.atMessageHelpers);                                                     // 2
                                                                                                                    // 3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 447
}).call(this);                                                                                                         // 448
                                                                                                                       // 449
                                                                                                                       // 450
                                                                                                                       // 451
                                                                                                                       // 452
                                                                                                                       // 453
                                                                                                                       // 454
(function () {                                                                                                         // 455
                                                                                                                       // 456
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:foundation/lib/template.at_nav_button.js                                                   //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("atNavButton");                                                                                // 2
Template["atNavButton"] = new Template("Template.atNavButton", (function() {                                        // 3
  var view = this;                                                                                                  // 4
  return HTML.LI({                                                                                                  // 5
    "class": "has-form"                                                                                             // 6
  }, "\n    ", HTML.A({                                                                                             // 7
    href: "#",                                                                                                      // 8
    id: "at-nav-button",                                                                                            // 9
    "class": "button"                                                                                               // 10
  }, Blaze.View("lookup:text", function() {                                                                         // 11
    return Spacebars.mustache(view.lookup("text"));                                                                 // 12
  })), "\n  ");                                                                                                     // 13
}));                                                                                                                // 14
                                                                                                                    // 15
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 479
}).call(this);                                                                                                         // 480
                                                                                                                       // 481
                                                                                                                       // 482
                                                                                                                       // 483
                                                                                                                       // 484
                                                                                                                       // 485
                                                                                                                       // 486
(function () {                                                                                                         // 487
                                                                                                                       // 488
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:foundation/lib/at_nav_button.js                                                            //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
// Simply 'inherites' helpers from AccountsTemplates                                                                // 1
Template.atNavButton.helpers(AccountsTemplates.atNavButtonHelpers);                                                 // 2
                                                                                                                    // 3
// Simply 'inherites' events from AccountsTemplates                                                                 // 4
Template.atNavButton.events(AccountsTemplates.atNavButtonEvents);                                                   // 5
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 501
}).call(this);                                                                                                         // 502
                                                                                                                       // 503
                                                                                                                       // 504
                                                                                                                       // 505
                                                                                                                       // 506
                                                                                                                       // 507
                                                                                                                       // 508
(function () {                                                                                                         // 509
                                                                                                                       // 510
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:foundation/lib/template.at_oauth.js                                                        //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("atOauth");                                                                                    // 2
Template["atOauth"] = new Template("Template.atOauth", (function() {                                                // 3
  var view = this;                                                                                                  // 4
  return HTML.DIV({                                                                                                 // 5
    "class": "at-oauth"                                                                                             // 6
  }, "\n    ", Blaze.Each(function() {                                                                              // 7
    return Spacebars.call(view.lookup("oauthService"));                                                             // 8
  }, function() {                                                                                                   // 9
    return [ "\n      ", Spacebars.include(view.lookupTemplate("atSocial")), "\n    " ];                            // 10
  }), "\n  ");                                                                                                      // 11
}));                                                                                                                // 12
                                                                                                                    // 13
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 531
}).call(this);                                                                                                         // 532
                                                                                                                       // 533
                                                                                                                       // 534
                                                                                                                       // 535
                                                                                                                       // 536
                                                                                                                       // 537
                                                                                                                       // 538
(function () {                                                                                                         // 539
                                                                                                                       // 540
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:foundation/lib/at_oauth.js                                                                 //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
// Simply 'inherites' helpers from AccountsTemplates                                                                // 1
Template.atOauth.helpers(AccountsTemplates.atOauthHelpers);                                                         // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 550
}).call(this);                                                                                                         // 551
                                                                                                                       // 552
                                                                                                                       // 553
                                                                                                                       // 554
                                                                                                                       // 555
                                                                                                                       // 556
                                                                                                                       // 557
(function () {                                                                                                         // 558
                                                                                                                       // 559
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:foundation/lib/template.at_pwd_form.js                                                     //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("atPwdForm");                                                                                  // 2
Template["atPwdForm"] = new Template("Template.atPwdForm", (function() {                                            // 3
  var view = this;                                                                                                  // 4
  return HTML.DIV({                                                                                                 // 5
    "class": "at-pwd-form"                                                                                          // 6
  }, "\n    ", HTML.FORM({                                                                                          // 7
    role: "form",                                                                                                   // 8
    id: "at-pwd-form",                                                                                              // 9
    novalidate: "",                                                                                                 // 10
    action: "#",                                                                                                    // 11
    method: "POST"                                                                                                  // 12
  }, "\n      ", Blaze.Each(function() {                                                                            // 13
    return Spacebars.call(view.lookup("fields"));                                                                   // 14
  }, function() {                                                                                                   // 15
    return [ "\n        ", Spacebars.include(view.lookupTemplate("atInput")), "\n      " ];                         // 16
  }), "\n      ", Blaze.If(function() {                                                                             // 17
    return Spacebars.call(view.lookup("showReCaptcha"));                                                            // 18
  }, function() {                                                                                                   // 19
    return [ "\n        ", Spacebars.include(view.lookupTemplate("atReCaptcha")), "\n      " ];                     // 20
  }), "\n      ", Blaze.If(function() {                                                                             // 21
    return Spacebars.call(view.lookup("showForgotPasswordLink"));                                                   // 22
  }, function() {                                                                                                   // 23
    return [ "\n        ", Spacebars.include(view.lookupTemplate("atPwdLink")), "\n      " ];                       // 24
  }), "\n      ", Spacebars.include(view.lookupTemplate("atPwdFormBtn")), "\n    "), "\n  ");                       // 25
}));                                                                                                                // 26
                                                                                                                    // 27
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 594
}).call(this);                                                                                                         // 595
                                                                                                                       // 596
                                                                                                                       // 597
                                                                                                                       // 598
                                                                                                                       // 599
                                                                                                                       // 600
                                                                                                                       // 601
(function () {                                                                                                         // 602
                                                                                                                       // 603
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:foundation/lib/at_pwd_form.js                                                              //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
// Simply 'inherites' helpers from AccountsTemplates                                                                // 1
Template.atPwdForm.helpers(AccountsTemplates.atPwdFormHelpers);                                                     // 2
                                                                                                                    // 3
// Simply 'inherites' events from AccountsTemplates                                                                 // 4
Template.atPwdForm.events(AccountsTemplates.atPwdFormEvents);                                                       // 5
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 616
}).call(this);                                                                                                         // 617
                                                                                                                       // 618
                                                                                                                       // 619
                                                                                                                       // 620
                                                                                                                       // 621
                                                                                                                       // 622
                                                                                                                       // 623
(function () {                                                                                                         // 624
                                                                                                                       // 625
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:foundation/lib/template.at_pwd_form_btn.js                                                 //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("atPwdFormBtn");                                                                               // 2
Template["atPwdFormBtn"] = new Template("Template.atPwdFormBtn", (function() {                                      // 3
  var view = this;                                                                                                  // 4
  return HTML.BUTTON({                                                                                              // 5
    type: "submit",                                                                                                 // 6
    "class": function() {                                                                                           // 7
      return [ "at-btn button ", Spacebars.mustache(view.lookup("submitDisabled")), " ", Spacebars.mustache(view.lookup("disabled")) ];
    },                                                                                                              // 9
    id: "at-btn"                                                                                                    // 10
  }, "\n    ", Blaze.View("lookup:buttonText", function() {                                                         // 11
    return Spacebars.mustache(view.lookup("buttonText"));                                                           // 12
  }), "\n  ");                                                                                                      // 13
}));                                                                                                                // 14
                                                                                                                    // 15
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 648
}).call(this);                                                                                                         // 649
                                                                                                                       // 650
                                                                                                                       // 651
                                                                                                                       // 652
                                                                                                                       // 653
                                                                                                                       // 654
                                                                                                                       // 655
(function () {                                                                                                         // 656
                                                                                                                       // 657
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:foundation/lib/at_pwd_form_btn.js                                                          //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
// Simply 'inherites' helpers from AccountsTemplates                                                                // 1
Template.atPwdFormBtn.helpers(AccountsTemplates.atPwdFormBtnHelpers);                                               // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 667
}).call(this);                                                                                                         // 668
                                                                                                                       // 669
                                                                                                                       // 670
                                                                                                                       // 671
                                                                                                                       // 672
                                                                                                                       // 673
                                                                                                                       // 674
(function () {                                                                                                         // 675
                                                                                                                       // 676
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:foundation/lib/template.at_pwd_link.js                                                     //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("atPwdLink");                                                                                  // 2
Template["atPwdLink"] = new Template("Template.atPwdLink", (function() {                                            // 3
  var view = this;                                                                                                  // 4
  return HTML.DIV({                                                                                                 // 5
    "class": "at-pwd-link"                                                                                          // 6
  }, "\n    ", HTML.P("\n      ", Blaze.View("lookup:preText", function() {                                         // 7
    return Spacebars.mustache(view.lookup("preText"));                                                              // 8
  }), "\n      ", HTML.A({                                                                                          // 9
    href: function() {                                                                                              // 10
      return Spacebars.mustache(view.lookup("forgotPwdLink"));                                                      // 11
    },                                                                                                              // 12
    id: "at-forgotPwd",                                                                                             // 13
    "class": function() {                                                                                           // 14
      return [ "at-link at-pwd ", Spacebars.mustache(view.lookup("disabled")) ];                                    // 15
    }                                                                                                               // 16
  }, Blaze.View("lookup:linkText", function() {                                                                     // 17
    return Spacebars.mustache(view.lookup("linkText"));                                                             // 18
  })), "\n      ", Blaze.View("lookup:suffText", function() {                                                       // 19
    return Spacebars.mustache(view.lookup("suffText"));                                                             // 20
  }), "\n    "), "\n  ");                                                                                           // 21
}));                                                                                                                // 22
                                                                                                                    // 23
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 707
}).call(this);                                                                                                         // 708
                                                                                                                       // 709
                                                                                                                       // 710
                                                                                                                       // 711
                                                                                                                       // 712
                                                                                                                       // 713
                                                                                                                       // 714
(function () {                                                                                                         // 715
                                                                                                                       // 716
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:foundation/lib/at_pwd_link.js                                                              //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
// Simply 'inherites' helpers from AccountsTemplates                                                                // 1
Template.atPwdLink.helpers(AccountsTemplates.atPwdLinkHelpers);                                                     // 2
                                                                                                                    // 3
// Simply 'inherites' events from AccountsTemplates                                                                 // 4
Template.atPwdLink.events(AccountsTemplates.atPwdLinkEvents);                                                       // 5
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 729
}).call(this);                                                                                                         // 730
                                                                                                                       // 731
                                                                                                                       // 732
                                                                                                                       // 733
                                                                                                                       // 734
                                                                                                                       // 735
                                                                                                                       // 736
(function () {                                                                                                         // 737
                                                                                                                       // 738
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:foundation/lib/template.at_reCaptcha.js                                                    //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("atReCaptcha");                                                                                // 2
Template["atReCaptcha"] = new Template("Template.atReCaptcha", (function() {                                        // 3
  var view = this;                                                                                                  // 4
  return HTML.DIV({                                                                                                 // 5
    "class": "g-recaptcha",                                                                                         // 6
    "data-sitekey": function() {                                                                                    // 7
      return Spacebars.mustache(view.lookup("key"));                                                                // 8
    },                                                                                                              // 9
    "data-theme": function() {                                                                                      // 10
      return Spacebars.mustache(view.lookup("theme"));                                                              // 11
    },                                                                                                              // 12
    "data-type": function() {                                                                                       // 13
      return Spacebars.mustache(view.lookup("data_type"));                                                          // 14
    }                                                                                                               // 15
  });                                                                                                               // 16
}));                                                                                                                // 17
                                                                                                                    // 18
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 764
}).call(this);                                                                                                         // 765
                                                                                                                       // 766
                                                                                                                       // 767
                                                                                                                       // 768
                                                                                                                       // 769
                                                                                                                       // 770
                                                                                                                       // 771
(function () {                                                                                                         // 772
                                                                                                                       // 773
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:foundation/lib/at_reCaptcha.js                                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
// Simply 'inherites' rendered callback from AccountsTemplates                                                      // 1
Template.atReCaptcha.rendered = AccountsTemplates.atReCaptchaRendered;                                              // 2
                                                                                                                    // 3
// Simply 'inherites' helpers from AccountsTemplates                                                                // 4
Template.atReCaptcha.helpers(AccountsTemplates.atReCaptchaHelpers);                                                 // 5
                                                                                                                    // 6
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 787
}).call(this);                                                                                                         // 788
                                                                                                                       // 789
                                                                                                                       // 790
                                                                                                                       // 791
                                                                                                                       // 792
                                                                                                                       // 793
                                                                                                                       // 794
(function () {                                                                                                         // 795
                                                                                                                       // 796
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:foundation/lib/template.at_result.js                                                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("atResult");                                                                                   // 2
Template["atResult"] = new Template("Template.atResult", (function() {                                              // 3
  var view = this;                                                                                                  // 4
  return HTML.DIV({                                                                                                 // 5
    "class": "at-result alert-box success radius"                                                                   // 6
  }, "\n    ", Blaze.View("lookup:result", function() {                                                             // 7
    return Spacebars.mustache(view.lookup("result"));                                                               // 8
  }), "\n  ");                                                                                                      // 9
}));                                                                                                                // 10
                                                                                                                    // 11
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 815
}).call(this);                                                                                                         // 816
                                                                                                                       // 817
                                                                                                                       // 818
                                                                                                                       // 819
                                                                                                                       // 820
                                                                                                                       // 821
                                                                                                                       // 822
(function () {                                                                                                         // 823
                                                                                                                       // 824
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:foundation/lib/at_result.js                                                                //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
// Simply 'inherites' helpers from AccountsTemplates                                                                // 1
Template.atResult.helpers(AccountsTemplates.atResultHelpers);                                                       // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 834
}).call(this);                                                                                                         // 835
                                                                                                                       // 836
                                                                                                                       // 837
                                                                                                                       // 838
                                                                                                                       // 839
                                                                                                                       // 840
                                                                                                                       // 841
(function () {                                                                                                         // 842
                                                                                                                       // 843
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:foundation/lib/template.at_sep.js                                                          //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("atSep");                                                                                      // 2
Template["atSep"] = new Template("Template.atSep", (function() {                                                    // 3
  var view = this;                                                                                                  // 4
  return HTML.DIV({                                                                                                 // 5
    "class": "at-sep"                                                                                               // 6
  }, "\n    ", HTML.DIV({                                                                                           // 7
    "class": "row"                                                                                                  // 8
  }, "\n      ", HTML.Raw('<div class="small-4 columns line-thru"></div>'), "\n      ", HTML.DIV({                  // 9
    "class": "small-4 columns"                                                                                      // 10
  }, HTML.STRONG(Blaze.View("lookup:sepText", function() {                                                          // 11
    return Spacebars.mustache(view.lookup("sepText"));                                                              // 12
  }))), "\n      ", HTML.Raw('<div class="small-4 columns line-thru"></div>'), "\n    "), "\n  ");                  // 13
}));                                                                                                                // 14
                                                                                                                    // 15
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 866
}).call(this);                                                                                                         // 867
                                                                                                                       // 868
                                                                                                                       // 869
                                                                                                                       // 870
                                                                                                                       // 871
                                                                                                                       // 872
                                                                                                                       // 873
(function () {                                                                                                         // 874
                                                                                                                       // 875
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:foundation/lib/at_sep.js                                                                   //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
// Simply 'inherites' helpers from AccountsTemplates                                                                // 1
Template.atSep.helpers(AccountsTemplates.atSepHelpers);                                                             // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 885
}).call(this);                                                                                                         // 886
                                                                                                                       // 887
                                                                                                                       // 888
                                                                                                                       // 889
                                                                                                                       // 890
                                                                                                                       // 891
                                                                                                                       // 892
(function () {                                                                                                         // 893
                                                                                                                       // 894
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:foundation/lib/template.at_signin_link.js                                                  //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("atSigninLink");                                                                               // 2
Template["atSigninLink"] = new Template("Template.atSigninLink", (function() {                                      // 3
  var view = this;                                                                                                  // 4
  return HTML.DIV({                                                                                                 // 5
    "class": "at-signin-link"                                                                                       // 6
  }, "\n    ", HTML.P("\n      ", Blaze.View("lookup:preText", function() {                                         // 7
    return Spacebars.mustache(view.lookup("preText"));                                                              // 8
  }), "\n      ", HTML.A({                                                                                          // 9
    href: function() {                                                                                              // 10
      return Spacebars.mustache(view.lookup("signInLink"));                                                         // 11
    },                                                                                                              // 12
    id: "at-signIn",                                                                                                // 13
    "class": function() {                                                                                           // 14
      return [ "at-link at-signin ", Spacebars.mustache(view.lookup("disabled")) ];                                 // 15
    }                                                                                                               // 16
  }, Blaze.View("lookup:linkText", function() {                                                                     // 17
    return Spacebars.mustache(view.lookup("linkText"));                                                             // 18
  })), "\n      ", Blaze.View("lookup:suffText", function() {                                                       // 19
    return Spacebars.mustache(view.lookup("suffText"));                                                             // 20
  }), "\n    "), "\n  ");                                                                                           // 21
}));                                                                                                                // 22
                                                                                                                    // 23
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 925
}).call(this);                                                                                                         // 926
                                                                                                                       // 927
                                                                                                                       // 928
                                                                                                                       // 929
                                                                                                                       // 930
                                                                                                                       // 931
                                                                                                                       // 932
(function () {                                                                                                         // 933
                                                                                                                       // 934
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:foundation/lib/at_signin_link.js                                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
// Simply 'inherites' helpers from AccountsTemplates                                                                // 1
Template.atSigninLink.helpers(AccountsTemplates.atSigninLinkHelpers);                                               // 2
                                                                                                                    // 3
// Simply 'inherites' events from AccountsTemplates                                                                 // 4
Template.atSigninLink.events(AccountsTemplates.atSigninLinkEvents);                                                 // 5
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 947
}).call(this);                                                                                                         // 948
                                                                                                                       // 949
                                                                                                                       // 950
                                                                                                                       // 951
                                                                                                                       // 952
                                                                                                                       // 953
                                                                                                                       // 954
(function () {                                                                                                         // 955
                                                                                                                       // 956
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:foundation/lib/template.at_signup_link.js                                                  //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("atSignupLink");                                                                               // 2
Template["atSignupLink"] = new Template("Template.atSignupLink", (function() {                                      // 3
  var view = this;                                                                                                  // 4
  return HTML.DIV({                                                                                                 // 5
    "class": "at-signup-link"                                                                                       // 6
  }, "\n    ", HTML.P("\n      ", Blaze.View("lookup:preText", function() {                                         // 7
    return Spacebars.mustache(view.lookup("preText"));                                                              // 8
  }), "\n      ", HTML.A({                                                                                          // 9
    href: function() {                                                                                              // 10
      return Spacebars.mustache(view.lookup("signUpLink"));                                                         // 11
    },                                                                                                              // 12
    id: "at-signUp",                                                                                                // 13
    "class": function() {                                                                                           // 14
      return [ "at-link at-signup ", Spacebars.mustache(view.lookup("disabled")) ];                                 // 15
    }                                                                                                               // 16
  }, Blaze.View("lookup:linkText", function() {                                                                     // 17
    return Spacebars.mustache(view.lookup("linkText"));                                                             // 18
  })), "\n      ", Blaze.View("lookup:suffText", function() {                                                       // 19
    return Spacebars.mustache(view.lookup("suffText"));                                                             // 20
  }), "\n    "), "\n  ");                                                                                           // 21
}));                                                                                                                // 22
                                                                                                                    // 23
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 987
}).call(this);                                                                                                         // 988
                                                                                                                       // 989
                                                                                                                       // 990
                                                                                                                       // 991
                                                                                                                       // 992
                                                                                                                       // 993
                                                                                                                       // 994
(function () {                                                                                                         // 995
                                                                                                                       // 996
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:foundation/lib/at_signup_link.js                                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
// Simply 'inherites' helpers from AccountsTemplates                                                                // 1
Template.atSignupLink.helpers(AccountsTemplates.atSignupLinkHelpers);                                               // 2
                                                                                                                    // 3
// Simply 'inherites' events from AccountsTemplates                                                                 // 4
Template.atSignupLink.events(AccountsTemplates.atSignupLinkEvents);                                                 // 5
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 1009
}).call(this);                                                                                                         // 1010
                                                                                                                       // 1011
                                                                                                                       // 1012
                                                                                                                       // 1013
                                                                                                                       // 1014
                                                                                                                       // 1015
                                                                                                                       // 1016
(function () {                                                                                                         // 1017
                                                                                                                       // 1018
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:foundation/lib/template.at_social.js                                                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("atSocial");                                                                                   // 2
Template["atSocial"] = new Template("Template.atSocial", (function() {                                              // 3
  var view = this;                                                                                                  // 4
  return HTML.BUTTON({                                                                                              // 5
    "class": function() {                                                                                           // 6
      return [ "button at-social-btn ", Spacebars.mustache(view.lookup("disabled")) ];                              // 7
    },                                                                                                              // 8
    id: function() {                                                                                                // 9
      return [ "at-", Spacebars.mustache(view.lookup("name")) ];                                                    // 10
    },                                                                                                              // 11
    name: function() {                                                                                              // 12
      return Spacebars.mustache(view.lookup("name"));                                                               // 13
    }                                                                                                               // 14
  }, "\n    ", HTML.I({                                                                                             // 15
    "class": function() {                                                                                           // 16
      return Spacebars.mustache(view.lookup("iconClass"));                                                          // 17
    }                                                                                                               // 18
  }), " ", Blaze.View("lookup:buttonText", function() {                                                             // 19
    return Spacebars.mustache(view.lookup("buttonText"));                                                           // 20
  }), "\n  ");                                                                                                      // 21
}));                                                                                                                // 22
                                                                                                                    // 23
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 1049
}).call(this);                                                                                                         // 1050
                                                                                                                       // 1051
                                                                                                                       // 1052
                                                                                                                       // 1053
                                                                                                                       // 1054
                                                                                                                       // 1055
                                                                                                                       // 1056
(function () {                                                                                                         // 1057
                                                                                                                       // 1058
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:foundation/lib/at_social.js                                                                //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
// Simply 'inherites' helpers from AccountsTemplates                                                                // 1
Template.atSocial.helpers(AccountsTemplates.atSocialHelpers);                                                       // 2
                                                                                                                    // 3
// Simply 'inherites' events from AccountsTemplates                                                                 // 4
Template.atSocial.events(AccountsTemplates.atSocialEvents);                                                         // 5
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 1071
}).call(this);                                                                                                         // 1072
                                                                                                                       // 1073
                                                                                                                       // 1074
                                                                                                                       // 1075
                                                                                                                       // 1076
                                                                                                                       // 1077
                                                                                                                       // 1078
(function () {                                                                                                         // 1079
                                                                                                                       // 1080
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:foundation/lib/template.at_terms_link.js                                                   //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("atTermsLink");                                                                                // 2
Template["atTermsLink"] = new Template("Template.atTermsLink", (function() {                                        // 3
  var view = this;                                                                                                  // 4
  return HTML.DIV({                                                                                                 // 5
    "class": "at-terms-link at-wrap"                                                                                // 6
  }, "\n    ", HTML.P("\n      ", Blaze.View("lookup:text", function() {                                            // 7
    return Spacebars.mustache(view.lookup("text"));                                                                 // 8
  }), "\n      ", Blaze.If(function() {                                                                             // 9
    return Spacebars.call(view.lookup("privacyUrl"));                                                               // 10
  }, function() {                                                                                                   // 11
    return [ "\n        ", HTML.A({                                                                                 // 12
      href: function() {                                                                                            // 13
        return Spacebars.mustache(view.lookup("privacyUrl"));                                                       // 14
      },                                                                                                            // 15
      "class": function() {                                                                                         // 16
        return Spacebars.mustache(view.lookup("disabled"));                                                         // 17
      }                                                                                                             // 18
    }, Blaze.View("lookup:privacyLinkText", function() {                                                            // 19
      return Spacebars.mustache(view.lookup("privacyLinkText"));                                                    // 20
    })), "\n      " ];                                                                                              // 21
  }), "\n      ", Blaze.If(function() {                                                                             // 22
    return Spacebars.call(view.lookup("showTermsAnd"));                                                             // 23
  }, function() {                                                                                                   // 24
    return [ "\n        ", Blaze.View("lookup:and", function() {                                                    // 25
      return Spacebars.mustache(view.lookup("and"));                                                                // 26
    }), "\n      " ];                                                                                               // 27
  }), "\n      ", Blaze.If(function() {                                                                             // 28
    return Spacebars.call(view.lookup("termsUrl"));                                                                 // 29
  }, function() {                                                                                                   // 30
    return [ "\n        ", HTML.A({                                                                                 // 31
      href: function() {                                                                                            // 32
        return Spacebars.mustache(view.lookup("termsUrl"));                                                         // 33
      },                                                                                                            // 34
      "class": function() {                                                                                         // 35
        return Spacebars.mustache(view.lookup("disabled"));                                                         // 36
      }                                                                                                             // 37
    }, Blaze.View("lookup:termsLinkText", function() {                                                              // 38
      return Spacebars.mustache(view.lookup("termsLinkText"));                                                      // 39
    })), "\n      " ];                                                                                              // 40
  }), "\n    "), "\n  ");                                                                                           // 41
}));                                                                                                                // 42
                                                                                                                    // 43
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 1131
}).call(this);                                                                                                         // 1132
                                                                                                                       // 1133
                                                                                                                       // 1134
                                                                                                                       // 1135
                                                                                                                       // 1136
                                                                                                                       // 1137
                                                                                                                       // 1138
(function () {                                                                                                         // 1139
                                                                                                                       // 1140
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:foundation/lib/at_terms_link.js                                                            //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
// Simply 'inherites' helpers from AccountsTemplates                                                                // 1
Template.atTermsLink.helpers(AccountsTemplates.atTermsLinkHelpers);                                                 // 2
                                                                                                                    // 3
// Simply 'inherites' events from AccountsTemplates                                                                 // 4
Template.atTermsLink.events(AccountsTemplates.atTermsLinkEvents);                                                   // 5
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 1153
}).call(this);                                                                                                         // 1154
                                                                                                                       // 1155
                                                                                                                       // 1156
                                                                                                                       // 1157
                                                                                                                       // 1158
                                                                                                                       // 1159
                                                                                                                       // 1160
(function () {                                                                                                         // 1161
                                                                                                                       // 1162
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:foundation/lib/template.at_resend_verification_email_link.js                               //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("atResendVerificationEmailLink");                                                              // 2
Template["atResendVerificationEmailLink"] = new Template("Template.atResendVerificationEmailLink", (function() {    // 3
  var view = this;                                                                                                  // 4
  return HTML.DIV({                                                                                                 // 5
    "class": "at-resend-verification-email-link at-wrap"                                                            // 6
  }, "\n    ", HTML.P("\n      ", Blaze.View("lookup:preText", function() {                                         // 7
    return Spacebars.mustache(view.lookup("preText"));                                                              // 8
  }), "\n      ", HTML.A({                                                                                          // 9
    href: function() {                                                                                              // 10
      return Spacebars.mustache(view.lookup("resendVerificationEmailLink"));                                        // 11
    },                                                                                                              // 12
    id: "at-resend-verification-email",                                                                             // 13
    "class": function() {                                                                                           // 14
      return [ "at-link at-resend-verification-email ", Spacebars.mustache(view.lookup("disabled")) ];              // 15
    }                                                                                                               // 16
  }, Blaze.View("lookup:linkText", function() {                                                                     // 17
    return Spacebars.mustache(view.lookup("linkText"));                                                             // 18
  })), "\n      ", Blaze.View("lookup:suffText", function() {                                                       // 19
    return Spacebars.mustache(view.lookup("suffText"));                                                             // 20
  }), "\n    "), "\n  ");                                                                                           // 21
}));                                                                                                                // 22
                                                                                                                    // 23
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 1193
}).call(this);                                                                                                         // 1194
                                                                                                                       // 1195
                                                                                                                       // 1196
                                                                                                                       // 1197
                                                                                                                       // 1198
                                                                                                                       // 1199
                                                                                                                       // 1200
(function () {                                                                                                         // 1201
                                                                                                                       // 1202
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:foundation/lib/at_resend_verification_email_link.js                                        //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
// Simply 'inherites' helpers from AccountsTemplates                                                                // 1
Template.atResendVerificationEmailLink.helpers(AccountsTemplates.atResendVerificationEmailLinkHelpers);             // 2
                                                                                                                    // 3
// Simply 'inherites' events from AccountsTemplates                                                                 // 4
Template.atResendVerificationEmailLink.events(AccountsTemplates.atResendVerificationEmailLinkEvents);               // 5
                                                                                                                    // 6
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 1216
}).call(this);                                                                                                         // 1217
                                                                                                                       // 1218
                                                                                                                       // 1219
                                                                                                                       // 1220
                                                                                                                       // 1221
                                                                                                                       // 1222
                                                                                                                       // 1223
(function () {                                                                                                         // 1224
                                                                                                                       // 1225
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:foundation/lib/template.at_title.js                                                        //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("atTitle");                                                                                    // 2
Template["atTitle"] = new Template("Template.atTitle", (function() {                                                // 3
  var view = this;                                                                                                  // 4
  return HTML.DIV({                                                                                                 // 5
    "class": "at-title"                                                                                             // 6
  }, "\n    ", HTML.H3(Blaze.View("lookup:title", function() {                                                      // 7
    return Spacebars.mustache(view.lookup("title"));                                                                // 8
  })), "\n  ");                                                                                                     // 9
}));                                                                                                                // 10
                                                                                                                    // 11
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 1244
}).call(this);                                                                                                         // 1245
                                                                                                                       // 1246
                                                                                                                       // 1247
                                                                                                                       // 1248
                                                                                                                       // 1249
                                                                                                                       // 1250
                                                                                                                       // 1251
(function () {                                                                                                         // 1252
                                                                                                                       // 1253
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:foundation/lib/at_title.js                                                                 //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
// Simply 'inherites' helpers from AccountsTemplates                                                                // 1
Template.atTitle.helpers(AccountsTemplates.atTitleHelpers);                                                         // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 1263
}).call(this);                                                                                                         // 1264
                                                                                                                       // 1265
                                                                                                                       // 1266
                                                                                                                       // 1267
                                                                                                                       // 1268
                                                                                                                       // 1269
                                                                                                                       // 1270
(function () {                                                                                                         // 1271
                                                                                                                       // 1272
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/useraccounts:foundation/lib/template.full_page_at_form.js                                               //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("fullPageAtForm");                                                                             // 2
Template["fullPageAtForm"] = new Template("Template.fullPageAtForm", (function() {                                  // 3
  var view = this;                                                                                                  // 4
  return HTML.DIV({                                                                                                 // 5
    "class": "row"                                                                                                  // 6
  }, "\n    ", HTML.DIV({                                                                                           // 7
    "class": "small-12 medium-6 large-4 medium-centered large-centered columns"                                     // 8
  }, "\n      ", Spacebars.include(view.lookupTemplate("atForm")), "\n    "), "\n  ");                              // 9
}));                                                                                                                // 10
                                                                                                                    // 11
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 1291
}).call(this);                                                                                                         // 1292
                                                                                                                       // 1293
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['useraccounts:foundation'] = {};

})();
