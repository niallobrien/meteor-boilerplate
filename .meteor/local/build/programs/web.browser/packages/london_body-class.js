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
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var HTML = Package.htmljs.HTML;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/london_body-class/packages/london_body-class.js                                            //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
(function () {                                                                                         // 1
                                                                                                       // 2
///////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                               //    // 4
// packages/london:body-class/london:body-class.js                                               //    // 5
//                                                                                               //    // 6
///////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                 //    // 8
/*                                                                                               // 1  // 9
```                                                                                              // 2  // 10
Meteor ================================================                                          // 3  // 11
                                                                                                 // 4  // 12
'||     .|''''|, '||\   ||` '||'''|. .|''''|, '||\   ||`                                         // 5  // 13
 ||     ||    ||  ||\\  ||   ||   || ||    ||  ||\\  ||                                          // 6  // 14
 ||     ||    ||  || \\ ||   ||   || ||    ||  || \\ ||                                          // 7  // 15
 ||     ||    ||  ||  \\||   ||   || ||    ||  ||  \\||                                          // 8  // 16
.||...| `|....|' .||   \||. .||...|' `|....|' .||   \||.                                         // 9  // 17
                                                                                                 // 10
 ============================================ body-class                                         // 11
```                                                                                              // 12
                                                                                                 // 13
Giving you `Blaze.addBodyClass` for **live live live** reactive class names on the body element. // 14
                                                                                                 // 15
Usage: `Blaze.addBodyClass(fn)`                                                                  // 16
                                                                                                 // 17
Example:                                                                                         // 18
                                                                                                 // 19
```javascript                                                                                    // 20
                                                                                                 // 21
Session.setDefault('state', 'alpha')                                                             // 22
                                                                                                 // 23
Blaze.addBodyClass(function() {                                                                  // 24
  return Session.get('state')                                                                    // 25
})                                                                                               // 26
                                                                                                 // 27
```                                                                                              // 28
results in `<body class="alpha">`                                                                // 29
                                                                                                 // 30
- If `iron:router` is present, the current route is automatically added as a body class.         // 31
- Calling addBodyClass multiple times is fine. They all end up as additional body classes.       // 32
- Duplicate classes are removed by virtue of using jQuery `addClass` to do the dirty work.       // 33
                                                                                                 // 34
by: @olizilla for meteor-london                                                                  // 35
*/                                                                                               // 36
                                                                                                 // 37
Blaze.addBodyClass = function (fn) {                                                             // 38
  if($.isArray(fn)) {                                                                            // 39
    return fn.forEach(Blaze.addBodyClass)                                                        // 40
  }                                                                                              // 41
  if(typeof fn !== 'function') {                                                                 // 42
    return Meteor.startup(function () { $('body').addClass(fn) })                                // 43
  }                                                                                              // 44
                                                                                                 // 45
  Meteor.startup(function () {                                                                   // 46
    Deps.autorun(function () {                                                                   // 47
      $('body')                                                                                  // 48
        .removeClass(fn._prev)                                                                   // 49
        .addClass(fn._prev = fn())                                                               // 50
    })                                                                                           // 51
  })                                                                                             // 52
}                                                                                                // 53
if(Package['iron:router']) {                                                                     // 54
  Meteor.startup(function () {                                                                   // 55
    Blaze.addBodyClass(function () {                                                             // 56
      return Router.current() && Router.current().route.getName()                                // 57
    })                                                                                           // 58
  })                                                                                             // 59
}                                                                                                // 60
if(Package['meteorhacks:flow-router']) {                                                         // 61
  Meteor.startup(function () {                                                                   // 62
    Blaze.addBodyClass(function () {                                                             // 63
      return FlowRouter.getRouteName()                                                           // 64
    })                                                                                           // 65
  })                                                                                             // 66
}                                                                                                // 67
                                                                                                 // 68
///////////////////////////////////////////////////////////////////////////////////////////////////    // 77
                                                                                                       // 78
}).call(this);                                                                                         // 79
                                                                                                       // 80
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['london:body-class'] = {};

})();
