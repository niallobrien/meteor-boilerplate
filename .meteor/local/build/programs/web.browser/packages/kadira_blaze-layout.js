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
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Template = Package.templating.Template;
var ReactiveDict = Package['reactive-dict'].ReactiveDict;
var _ = Package.underscore._;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var HTML = Package.htmljs.HTML;
var Spacebars = Package.spacebars.Spacebars;

/* Package-scope variables */
var BlazeLayout;

(function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// packages/kadira_blaze-layout/packages/kadira_blaze-layout.js                     //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
(function () {                                                                      // 1
                                                                                    // 2
///////////////////////////////////////////////////////////////////////////////     // 3
//                                                                           //     // 4
// packages/kadira:blaze-layout/lib/client/namespace.js                      //     // 5
//                                                                           //     // 6
///////////////////////////////////////////////////////////////////////////////     // 7
                                                                             //     // 8
BlazeLayout = {};                                                            // 1   // 9
///////////////////////////////////////////////////////////////////////////////     // 10
                                                                                    // 11
}).call(this);                                                                      // 12
                                                                                    // 13
                                                                                    // 14
                                                                                    // 15
                                                                                    // 16
                                                                                    // 17
                                                                                    // 18
(function () {                                                                      // 19
                                                                                    // 20
///////////////////////////////////////////////////////////////////////////////     // 21
//                                                                           //     // 22
// packages/kadira:blaze-layout/lib/client/layout.js                         //     // 23
//                                                                           //     // 24
///////////////////////////////////////////////////////////////////////////////     // 25
                                                                             //     // 26
var currentLayoutName = null;                                                // 1   // 27
var currentLayout = null;                                                    // 2   // 28
var currentRegions = new ReactiveDict();                                     // 3   // 29
var currentData;                                                             // 4   // 30
var _isReady = false;                                                        // 5   // 31
                                                                             // 6   // 32
BlazeLayout.setRoot = function(root) {                                       // 7   // 33
  BlazeLayout._root = root;                                                  // 8   // 34
};                                                                           // 9   // 35
                                                                             // 10  // 36
BlazeLayout.render = function render(layout, regions) {                      // 11  // 37
  regions = regions || {};                                                   // 12  // 38
  Meteor.startup(function() {                                                // 13  // 39
    // To make sure dom is loaded before we do rendering layout.             // 14  // 40
    // Related to issue #25                                                  // 15  // 41
    if(!_isReady) {                                                          // 16  // 42
      Meteor.defer(function() {                                              // 17  // 43
        _isReady = true;                                                     // 18  // 44
        BlazeLayout._render(layout, regions)                                 // 19  // 45
      });                                                                    // 20  // 46
    } else {                                                                 // 21  // 47
      BlazeLayout._render(layout, regions);                                  // 22  // 48
    }                                                                        // 23  // 49
  });                                                                        // 24  // 50
};                                                                           // 25  // 51
                                                                             // 26  // 52
BlazeLayout.reset = function reset() {                                       // 27  // 53
  var layout = currentLayout;                                                // 28  // 54
  if(layout) {                                                               // 29  // 55
    if(layout._domrange) {                                                   // 30  // 56
      // if it's rendered let's remove it right away                         // 31  // 57
      Blaze.remove(layout);                                                  // 32  // 58
    } else {                                                                 // 33  // 59
      // if not let's remove it when it rendered                             // 34  // 60
      layout.onViewReady(function() {                                        // 35  // 61
        Blaze.remove(layout);                                                // 36  // 62
      });                                                                    // 37  // 63
    }                                                                        // 38  // 64
                                                                             // 39  // 65
    currentLayout = null;                                                    // 40  // 66
    currentLayoutName = null;                                                // 41  // 67
    currentRegions = new ReactiveDict();                                     // 42  // 68
  }                                                                          // 43  // 69
};                                                                           // 44  // 70
                                                                             // 45  // 71
BlazeLayout._regionsToData = function _regionsToData(regions, data) {        // 46  // 72
  data = data || {};                                                         // 47  // 73
  _.each(regions, function(value, key) {                                     // 48  // 74
    currentRegions.set(key, value);                                          // 49  // 75
    data[key] = BlazeLayout._buildRegionGetter(key);                         // 50  // 76
  });                                                                        // 51  // 77
                                                                             // 52  // 78
  return data;                                                               // 53  // 79
};                                                                           // 54  // 80
                                                                             // 55  // 81
BlazeLayout._updateRegions = function _updateRegions(regions) {              // 56  // 82
  var needsRerender = false;                                                 // 57  // 83
  // unset removed regions from the exiting data                             // 58  // 84
  _.each(currentData, function(value, key) {                                 // 59  // 85
    if(regions[key] === undefined) {                                         // 60  // 86
      currentRegions.set(key, undefined);                                    // 61  // 87
      delete currentData[key];                                               // 62  // 88
    }                                                                        // 63  // 89
  });                                                                        // 64  // 90
                                                                             // 65  // 91
  _.each(regions, function(value, key) {                                     // 66  // 92
    // if this key does not yet exist then blaze                             // 67  // 93
    // has no idea about this key and it won't get the value of this key     // 68  // 94
    // so, we need to force a re-render                                      // 69  // 95
    if(currentData && currentData[key] === undefined) {                      // 70  // 96
      needsRerender = true;                                                  // 71  // 97
      // and, add the data function for this new key                         // 72  // 98
      currentData[key] = BlazeLayout._buildRegionGetter(key);                // 73  // 99
    }                                                                        // 74  // 100
    currentRegions.set(key, value);                                          // 75  // 101
  });                                                                        // 76  // 102
                                                                             // 77  // 103
  // force re-render if we need to                                           // 78  // 104
  if(currentLayout && needsRerender) {                                       // 79  // 105
    currentLayout.dataVar.dep.changed();                                     // 80  // 106
  }                                                                          // 81  // 107
};                                                                           // 82  // 108
                                                                             // 83  // 109
BlazeLayout._getRootDomNode = function _getRootDomNode() {                   // 84  // 110
  var root = BlazeLayout._root                                               // 85  // 111
  if(!root) {                                                                // 86  // 112
    root = $('<div id="__blaze-root"></div>');                               // 87  // 113
    $('body').append(root);                                                  // 88  // 114
    BlazeLayout.setRoot(root);                                               // 89  // 115
  }                                                                          // 90  // 116
                                                                             // 91  // 117
  // We need to use $(root) here because when calling BlazeLayout.setRoot(), // 92  // 118
  // there won't have any available DOM elements                             // 93  // 119
  // So, we need to defer that.                                              // 94  // 120
  var domNode = $(root).get(0);                                              // 95  // 121
  if(!domNode) {                                                             // 96  // 122
    throw new Error("Root element does not exist");                          // 97  // 123
  }                                                                          // 98  // 124
                                                                             // 99  // 125
  return domNode;                                                            // 100
};                                                                           // 101
                                                                             // 102
BlazeLayout._buildRegionGetter = function _buildRegionGetter(key) {          // 103
  return function() {                                                        // 104
    return currentRegions.get(key);                                          // 105
  };                                                                         // 106
};                                                                           // 107
                                                                             // 108
BlazeLayout._render = function _render(layout, regions) {                    // 109
  var rootDomNode = BlazeLayout._getRootDomNode();                           // 110
  if(currentLayoutName != layout) {                                          // 111
    // remove old view                                                       // 112
    BlazeLayout.reset();                                                     // 113
    currentData = BlazeLayout._regionsToData(regions);                       // 114
                                                                             // 115
    currentLayout = Blaze._TemplateWith(currentData, function() {            // 116
      return Spacebars.include(Template[layout]);                            // 117
    });                                                                      // 118
                                                                             // 119
    Blaze.render(currentLayout, rootDomNode);                                // 120
    currentLayoutName = layout;                                              // 121
  } else {                                                                   // 122
    BlazeLayout._updateRegions(regions);                                     // 123
  }                                                                          // 124
};                                                                           // 125
///////////////////////////////////////////////////////////////////////////////     // 152
                                                                                    // 153
}).call(this);                                                                      // 154
                                                                                    // 155
//////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['kadira:blaze-layout'] = {
  BlazeLayout: BlazeLayout
};

})();
