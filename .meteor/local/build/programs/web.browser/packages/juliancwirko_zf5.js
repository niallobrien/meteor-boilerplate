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
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/juliancwirko_zf5/packages/juliancwirko_zf5.js            //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {                                                       // 1
                                                                     // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/juliancwirko:zf5/js/vendor/modernizr.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*!                                                                                                                    // 1
 * Modernizr v2.8.3                                                                                                    // 2
 * www.modernizr.com                                                                                                   // 3
 *                                                                                                                     // 4
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton                                                                   // 5
 * Available under the BSD and MIT licenses: www.modernizr.com/license/                                                // 6
 */                                                                                                                    // 7
window.Modernizr=function(a,b,c){function d(a){t.cssText=a}function e(a,b){return d(x.join(a+";")+(b||""))}function f(a,b){return typeof a===b}function g(a,b){return!!~(""+a).indexOf(b)}function h(a,b){for(var d in a){var e=a[d];if(!g(e,"-")&&t[e]!==c)return"pfx"==b?e:!0}return!1}function i(a,b,d){for(var e in a){var g=b[a[e]];if(g!==c)return d===!1?a[e]:f(g,"function")?g.bind(d||b):g}return!1}function j(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+z.join(d+" ")+d).split(" ");return f(b,"string")||f(b,"undefined")?h(e,b):(e=(a+" "+A.join(d+" ")+d).split(" "),i(e,b,c))}function k(){o.input=function(c){for(var d=0,e=c.length;e>d;d++)E[c[d]]=!!(c[d]in u);return E.list&&(E.list=!(!b.createElement("datalist")||!a.HTMLDataListElement)),E}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),o.inputtypes=function(a){for(var d,e,f,g=0,h=a.length;h>g;g++)u.setAttribute("type",e=a[g]),d="text"!==u.type,d&&(u.value=v,u.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(e)&&u.style.WebkitAppearance!==c?(q.appendChild(u),f=b.defaultView,d=f.getComputedStyle&&"textfield"!==f.getComputedStyle(u,null).WebkitAppearance&&0!==u.offsetHeight,q.removeChild(u)):/^(search|tel)$/.test(e)||(d=/^(url|email)$/.test(e)?u.checkValidity&&u.checkValidity()===!1:u.value!=v)),D[a[g]]=!!d;return D}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var l,m,n="2.8.3",o={},p=!0,q=b.documentElement,r="modernizr",s=b.createElement(r),t=s.style,u=b.createElement("input"),v=":)",w={}.toString,x=" -webkit- -moz- -o- -ms- ".split(" "),y="Webkit Moz O ms",z=y.split(" "),A=y.toLowerCase().split(" "),B={svg:"http://www.w3.org/2000/svg"},C={},D={},E={},F=[],G=F.slice,H=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:r+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',r,'">',a,"</style>"].join(""),j.id=r,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=q.style.overflow,q.style.overflow="hidden",q.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),q.style.overflow=i),!!g},I=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return H("@media "+b+" { #"+r+" { position: absolute; } }",function(b){d="absolute"==(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle).position}),d},J=function(){function a(a,e){e=e||b.createElement(d[a]||"div"),a="on"+a;var g=a in e;return g||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(a,""),g=f(e[a],"function"),f(e[a],"undefined")||(e[a]=c),e.removeAttribute(a))),e=null,g}var d={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return a}(),K={}.hasOwnProperty;m=f(K,"undefined")||f(K.call,"undefined")?function(a,b){return b in a&&f(a.constructor.prototype[b],"undefined")}:function(a,b){return K.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=G.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(G.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(G.call(arguments)))};return d}),C.flexbox=function(){return j("flexWrap")},C.flexboxlegacy=function(){return j("boxDirection")},C.canvas=function(){var a=b.createElement("canvas");return!(!a.getContext||!a.getContext("2d"))},C.canvastext=function(){return!(!o.canvas||!f(b.createElement("canvas").getContext("2d").fillText,"function"))},C.webgl=function(){return!!a.WebGLRenderingContext},C.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:H(["@media (",x.join("touch-enabled),("),r,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=9===a.offsetTop}),c},C.geolocation=function(){return"geolocation"in navigator},C.postmessage=function(){return!!a.postMessage},C.websqldatabase=function(){return!!a.openDatabase},C.indexedDB=function(){return!!j("indexedDB",a)},C.hashchange=function(){return J("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},C.history=function(){return!(!a.history||!history.pushState)},C.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},C.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},C.rgba=function(){return d("background-color:rgba(150,255,150,.5)"),g(t.backgroundColor,"rgba")},C.hsla=function(){return d("background-color:hsla(120,40%,100%,.5)"),g(t.backgroundColor,"rgba")||g(t.backgroundColor,"hsla")},C.multiplebgs=function(){return d("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(t.background)},C.backgroundsize=function(){return j("backgroundSize")},C.borderimage=function(){return j("borderImage")},C.borderradius=function(){return j("borderRadius")},C.boxshadow=function(){return j("boxShadow")},C.textshadow=function(){return""===b.createElement("div").style.textShadow},C.opacity=function(){return e("opacity:.55"),/^0.55$/.test(t.opacity)},C.cssanimations=function(){return j("animationName")},C.csscolumns=function(){return j("columnCount")},C.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return d((a+"-webkit- ".split(" ").join(b+a)+x.join(c+a)).slice(0,-a.length)),g(t.backgroundImage,"gradient")},C.cssreflections=function(){return j("boxReflect")},C.csstransforms=function(){return!!j("transform")},C.csstransforms3d=function(){var a=!!j("perspective");return a&&"webkitPerspective"in q.style&&H("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=9===b.offsetLeft&&3===b.offsetHeight}),a},C.csstransitions=function(){return j("transition")},C.fontface=function(){var a;return H('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&0===g.indexOf(d.split(" ")[0])}),a},C.generatedcontent=function(){var a;return H(["#",r,"{font:0/0 a}#",r,':after{content:"',v,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},C.video=function(){var a=b.createElement("video"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(d){}return c},C.audio=function(){var a=b.createElement("audio"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(d){}return c},C.localstorage=function(){try{return localStorage.setItem(r,r),localStorage.removeItem(r),!0}catch(a){return!1}},C.sessionstorage=function(){try{return sessionStorage.setItem(r,r),sessionStorage.removeItem(r),!0}catch(a){return!1}},C.webworkers=function(){return!!a.Worker},C.applicationcache=function(){return!!a.applicationCache},C.svg=function(){return!!b.createElementNS&&!!b.createElementNS(B.svg,"svg").createSVGRect},C.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==B.svg},C.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(w.call(b.createElementNS(B.svg,"animate")))},C.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(w.call(b.createElementNS(B.svg,"clipPath")))};for(var L in C)m(C,L)&&(l=L.toLowerCase(),o[l]=C[L](),F.push((o[l]?"":"no-")+l));return o.input||k(),o.addTest=function(a,b){if("object"==typeof a)for(var d in a)m(a,d)&&o.addTest(d,a[d]);else{if(a=a.toLowerCase(),o[a]!==c)return o;b="function"==typeof b?b():b,"undefined"!=typeof p&&p&&(q.className+=" "+(b?"":"no-")+a),o[a]=b}return o},d(""),s=u=null,function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=s.elements;return"string"==typeof a?a.split(" "):a}function e(a){var b=r[a[p]];return b||(b={},q++,a[p]=q,r[q]=b),b}function f(a,c,d){if(c||(c=b),k)return c.createElement(a);d||(d=e(c));var f;return f=d.cache[a]?d.cache[a].cloneNode():o.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!f.canHaveChildren||n.test(a)||f.tagUrn?f:d.frag.appendChild(f)}function g(a,c){if(a||(a=b),k)return a.createDocumentFragment();c=c||e(a);for(var f=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)f.createElement(h[g]);return f}function h(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?f(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function i(a){a||(a=b);var d=e(a);return!s.shivCSS||j||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||h(a,d),a}var j,k,l="3.7.0",m=a.html5||{},n=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,o=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",q=0,r={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",j="hidden"in a,k=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){j=!0,k=!0}}();var s={elements:m.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:l,shivCSS:m.shivCSS!==!1,supportsUnknownElements:k,shivMethods:m.shivMethods!==!1,type:"default",shivDocument:i,createElement:f,createDocumentFragment:g};a.html5=s,i(b)}(this,b),o._version=n,o._prefixes=x,o._domPrefixes=A,o._cssomPrefixes=z,o.mq=I,o.hasEvent=J,o.testProp=function(a){return h([a])},o.testAllProps=j,o.testStyles=H,o.prefixed=function(a,b,c){return b?j(a,b,c):j(a,"pfx")},q.className=q.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(p?" js "+F.join(" "):""),o}(this,this.document);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 18
}).call(this);                                                       // 19
                                                                     // 20
                                                                     // 21
                                                                     // 22
                                                                     // 23
                                                                     // 24
                                                                     // 25
(function () {                                                       // 26
                                                                     // 27
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/juliancwirko:zf5/js/foundation.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*                                                                                                                     // 1
 * Foundation Responsive Library                                                                                       // 2
 * http://foundation.zurb.com                                                                                          // 3
 * Copyright 2014, ZURB                                                                                                // 4
 * Free to use under the MIT license.                                                                                  // 5
 * http://www.opensource.org/licenses/mit-license.php                                                                  // 6
*/                                                                                                                     // 7
                                                                                                                       // 8
(function ($, window, document, undefined) {                                                                           // 9
  'use strict';                                                                                                        // 10
                                                                                                                       // 11
  var header_helpers = function (class_array) {                                                                        // 12
    var i = class_array.length;                                                                                        // 13
    var head = $('head');                                                                                              // 14
                                                                                                                       // 15
    while (i--) {                                                                                                      // 16
      if (head.has('.' + class_array[i]).length === 0) {                                                               // 17
        head.append('<meta class="' + class_array[i] + '" />');                                                        // 18
      }                                                                                                                // 19
    }                                                                                                                  // 20
  };                                                                                                                   // 21
                                                                                                                       // 22
  header_helpers([                                                                                                     // 23
    'foundation-mq-small',                                                                                             // 24
    'foundation-mq-small-only',                                                                                        // 25
    'foundation-mq-medium',                                                                                            // 26
    'foundation-mq-medium-only',                                                                                       // 27
    'foundation-mq-large',                                                                                             // 28
    'foundation-mq-large-only',                                                                                        // 29
    'foundation-mq-xlarge',                                                                                            // 30
    'foundation-mq-xlarge-only',                                                                                       // 31
    'foundation-mq-xxlarge',                                                                                           // 32
    'foundation-data-attribute-namespace']);                                                                           // 33
                                                                                                                       // 34
  // Enable FastClick if present                                                                                       // 35
                                                                                                                       // 36
  $(function () {                                                                                                      // 37
    if (typeof FastClick !== 'undefined') {                                                                            // 38
      // Don't attach to body if undefined                                                                             // 39
      if (typeof document.body !== 'undefined') {                                                                      // 40
        FastClick.attach(document.body);                                                                               // 41
      }                                                                                                                // 42
    }                                                                                                                  // 43
  });                                                                                                                  // 44
                                                                                                                       // 45
  // private Fast Selector wrapper,                                                                                    // 46
  // returns jQuery object. Only use where                                                                             // 47
  // getElementById is not available.                                                                                  // 48
  var S = function (selector, context) {                                                                               // 49
    if (typeof selector === 'string') {                                                                                // 50
      if (context) {                                                                                                   // 51
        var cont;                                                                                                      // 52
        if (context.jquery) {                                                                                          // 53
          cont = context[0];                                                                                           // 54
          if (!cont) {                                                                                                 // 55
            return context;                                                                                            // 56
          }                                                                                                            // 57
        } else {                                                                                                       // 58
          cont = context;                                                                                              // 59
        }                                                                                                              // 60
        return $(cont.querySelectorAll(selector));                                                                     // 61
      }                                                                                                                // 62
                                                                                                                       // 63
      return $(document.querySelectorAll(selector));                                                                   // 64
    }                                                                                                                  // 65
                                                                                                                       // 66
    return $(selector, context);                                                                                       // 67
  };                                                                                                                   // 68
                                                                                                                       // 69
  // Namespace functions.                                                                                              // 70
                                                                                                                       // 71
  var attr_name = function (init) {                                                                                    // 72
    var arr = [];                                                                                                      // 73
    if (!init) {                                                                                                       // 74
      arr.push('data');                                                                                                // 75
    }                                                                                                                  // 76
    if (this.namespace.length > 0) {                                                                                   // 77
      arr.push(this.namespace);                                                                                        // 78
    }                                                                                                                  // 79
    arr.push(this.name);                                                                                               // 80
                                                                                                                       // 81
    return arr.join('-');                                                                                              // 82
  };                                                                                                                   // 83
                                                                                                                       // 84
  var add_namespace = function (str) {                                                                                 // 85
    var parts = str.split('-'),                                                                                        // 86
        i = parts.length,                                                                                              // 87
        arr = [];                                                                                                      // 88
                                                                                                                       // 89
    while (i--) {                                                                                                      // 90
      if (i !== 0) {                                                                                                   // 91
        arr.push(parts[i]);                                                                                            // 92
      } else {                                                                                                         // 93
        if (this.namespace.length > 0) {                                                                               // 94
          arr.push(this.namespace, parts[i]);                                                                          // 95
        } else {                                                                                                       // 96
          arr.push(parts[i]);                                                                                          // 97
        }                                                                                                              // 98
      }                                                                                                                // 99
    }                                                                                                                  // 100
                                                                                                                       // 101
    return arr.reverse().join('-');                                                                                    // 102
  };                                                                                                                   // 103
                                                                                                                       // 104
  // Event binding and data-options updating.                                                                          // 105
                                                                                                                       // 106
  var bindings = function (method, options) {                                                                          // 107
    var self = this,                                                                                                   // 108
        bind = function(){                                                                                             // 109
          var $this = S(this),                                                                                         // 110
              should_bind_events = !$this.data(self.attr_name(true) + '-init');                                        // 111
          $this.data(self.attr_name(true) + '-init', $.extend({}, self.settings, (options || method), self.data_options($this)));
                                                                                                                       // 113
          if (should_bind_events) {                                                                                    // 114
            self.events(this);                                                                                         // 115
          }                                                                                                            // 116
        };                                                                                                             // 117
                                                                                                                       // 118
    if (S(this.scope).is('[' + this.attr_name() +']')) {                                                               // 119
      bind.call(this.scope);                                                                                           // 120
    } else {                                                                                                           // 121
      S('[' + this.attr_name() +']', this.scope).each(bind);                                                           // 122
    }                                                                                                                  // 123
    // # Patch to fix #5043 to move this *after* the if/else clause in order for Backbone and similar frameworks to have improved control over event binding and data-options updating.
    if (typeof method === 'string') {                                                                                  // 125
      return this[method].call(this, options);                                                                         // 126
    }                                                                                                                  // 127
                                                                                                                       // 128
  };                                                                                                                   // 129
                                                                                                                       // 130
  var single_image_loaded = function (image, callback) {                                                               // 131
    function loaded () {                                                                                               // 132
      callback(image[0]);                                                                                              // 133
    }                                                                                                                  // 134
                                                                                                                       // 135
    function bindLoad () {                                                                                             // 136
      this.one('load', loaded);                                                                                        // 137
                                                                                                                       // 138
      if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {                                                              // 139
        var src = this.attr( 'src' ),                                                                                  // 140
            param = src.match( /\?/ ) ? '&' : '?';                                                                     // 141
                                                                                                                       // 142
        param += 'random=' + (new Date()).getTime();                                                                   // 143
        this.attr('src', src + param);                                                                                 // 144
      }                                                                                                                // 145
    }                                                                                                                  // 146
                                                                                                                       // 147
    if (!image.attr('src')) {                                                                                          // 148
      loaded();                                                                                                        // 149
      return;                                                                                                          // 150
    }                                                                                                                  // 151
                                                                                                                       // 152
    if (image[0].complete || image[0].readyState === 4) {                                                              // 153
      loaded();                                                                                                        // 154
    } else {                                                                                                           // 155
      bindLoad.call(image);                                                                                            // 156
    }                                                                                                                  // 157
  };                                                                                                                   // 158
                                                                                                                       // 159
  /*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
                                                                                                                       // 161
  window.matchMedia || (window.matchMedia = function() {                                                               // 162
      "use strict";                                                                                                    // 163
                                                                                                                       // 164
      // For browsers that support matchMedium api such as IE 9 and webkit                                             // 165
      var styleMedia = (window.styleMedia || window.media);                                                            // 166
                                                                                                                       // 167
      // For those that don't support matchMedium                                                                      // 168
      if (!styleMedia) {                                                                                               // 169
          var style       = document.createElement('style'),                                                           // 170
              script      = document.getElementsByTagName('script')[0],                                                // 171
              info        = null;                                                                                      // 172
                                                                                                                       // 173
          style.type  = 'text/css';                                                                                    // 174
          style.id    = 'matchmediajs-test';                                                                           // 175
                                                                                                                       // 176
          script.parentNode.insertBefore(style, script);                                                               // 177
                                                                                                                       // 178
          // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers              // 179
          info = ('getComputedStyle' in window) && window.getComputedStyle(style, null) || style.currentStyle;         // 180
                                                                                                                       // 181
          styleMedia = {                                                                                               // 182
              matchMedium: function(media) {                                                                           // 183
                  var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';                             // 184
                                                                                                                       // 185
                  // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers              // 186
                  if (style.styleSheet) {                                                                              // 187
                      style.styleSheet.cssText = text;                                                                 // 188
                  } else {                                                                                             // 189
                      style.textContent = text;                                                                        // 190
                  }                                                                                                    // 191
                                                                                                                       // 192
                  // Test if media query is true or false                                                              // 193
                  return info.width === '1px';                                                                         // 194
              }                                                                                                        // 195
          };                                                                                                           // 196
      }                                                                                                                // 197
                                                                                                                       // 198
      return function(media) {                                                                                         // 199
          return {                                                                                                     // 200
              matches: styleMedia.matchMedium(media || 'all'),                                                         // 201
              media: media || 'all'                                                                                    // 202
          };                                                                                                           // 203
      };                                                                                                               // 204
  }());                                                                                                                // 205
                                                                                                                       // 206
  /*                                                                                                                   // 207
   * jquery.requestAnimationFrame                                                                                      // 208
   * https://github.com/gnarf37/jquery-requestAnimationFrame                                                           // 209
   * Requires jQuery 1.8+                                                                                              // 210
   *                                                                                                                   // 211
   * Copyright (c) 2012 Corey Frang                                                                                    // 212
   * Licensed under the MIT license.                                                                                   // 213
   */                                                                                                                  // 214
                                                                                                                       // 215
  (function(jQuery) {                                                                                                  // 216
                                                                                                                       // 217
                                                                                                                       // 218
  // requestAnimationFrame polyfill adapted from Erik Möller                                                           // 219
  // fixes from Paul Irish and Tino Zijdel                                                                             // 220
  // http://paulirish.com/2011/requestanimationframe-for-smart-animating/                                              // 221
  // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating                          // 222
                                                                                                                       // 223
  var animating,                                                                                                       // 224
      lastTime = 0,                                                                                                    // 225
      vendors = ['webkit', 'moz'],                                                                                     // 226
      requestAnimationFrame = window.requestAnimationFrame,                                                            // 227
      cancelAnimationFrame = window.cancelAnimationFrame,                                                              // 228
      jqueryFxAvailable = 'undefined' !== typeof jQuery.fx;                                                            // 229
                                                                                                                       // 230
  for (; lastTime < vendors.length && !requestAnimationFrame; lastTime++) {                                            // 231
    requestAnimationFrame = window[ vendors[lastTime] + 'RequestAnimationFrame' ];                                     // 232
    cancelAnimationFrame = cancelAnimationFrame ||                                                                     // 233
      window[ vendors[lastTime] + 'CancelAnimationFrame' ] ||                                                          // 234
      window[ vendors[lastTime] + 'CancelRequestAnimationFrame' ];                                                     // 235
  }                                                                                                                    // 236
                                                                                                                       // 237
  function raf() {                                                                                                     // 238
    if (animating) {                                                                                                   // 239
      requestAnimationFrame(raf);                                                                                      // 240
                                                                                                                       // 241
      if (jqueryFxAvailable) {                                                                                         // 242
        jQuery.fx.tick();                                                                                              // 243
      }                                                                                                                // 244
    }                                                                                                                  // 245
  }                                                                                                                    // 246
                                                                                                                       // 247
  if (requestAnimationFrame) {                                                                                         // 248
    // use rAF                                                                                                         // 249
    window.requestAnimationFrame = requestAnimationFrame;                                                              // 250
    window.cancelAnimationFrame = cancelAnimationFrame;                                                                // 251
                                                                                                                       // 252
    if (jqueryFxAvailable) {                                                                                           // 253
      jQuery.fx.timer = function (timer) {                                                                             // 254
        if (timer() && jQuery.timers.push(timer) && !animating) {                                                      // 255
          animating = true;                                                                                            // 256
          raf();                                                                                                       // 257
        }                                                                                                              // 258
      };                                                                                                               // 259
                                                                                                                       // 260
      jQuery.fx.stop = function () {                                                                                   // 261
        animating = false;                                                                                             // 262
      };                                                                                                               // 263
    }                                                                                                                  // 264
  } else {                                                                                                             // 265
    // polyfill                                                                                                        // 266
    window.requestAnimationFrame = function (callback) {                                                               // 267
      var currTime = new Date().getTime(),                                                                             // 268
        timeToCall = Math.max(0, 16 - (currTime - lastTime)),                                                          // 269
        id = window.setTimeout(function () {                                                                           // 270
          callback(currTime + timeToCall);                                                                             // 271
        }, timeToCall);                                                                                                // 272
      lastTime = currTime + timeToCall;                                                                                // 273
      return id;                                                                                                       // 274
    };                                                                                                                 // 275
                                                                                                                       // 276
    window.cancelAnimationFrame = function (id) {                                                                      // 277
      clearTimeout(id);                                                                                                // 278
    };                                                                                                                 // 279
                                                                                                                       // 280
  }                                                                                                                    // 281
                                                                                                                       // 282
  }( $ ));                                                                                                             // 283
                                                                                                                       // 284
  function removeQuotes (string) {                                                                                     // 285
    if (typeof string === 'string' || string instanceof String) {                                                      // 286
      string = string.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, '');                                                    // 287
    }                                                                                                                  // 288
                                                                                                                       // 289
    return string;                                                                                                     // 290
  }                                                                                                                    // 291
                                                                                                                       // 292
  window.Foundation = {                                                                                                // 293
    name : 'Foundation',                                                                                               // 294
                                                                                                                       // 295
    version : '5.5.2',                                                                                                 // 296
                                                                                                                       // 297
    media_queries : {                                                                                                  // 298
      'small'       : S('.foundation-mq-small').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),     // 299
      'small-only'  : S('.foundation-mq-small-only').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'medium'      : S('.foundation-mq-medium').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),    // 301
      'medium-only' : S('.foundation-mq-medium-only').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'large'       : S('.foundation-mq-large').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),     // 303
      'large-only'  : S('.foundation-mq-large-only').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'xlarge'      : S('.foundation-mq-xlarge').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),    // 305
      'xlarge-only' : S('.foundation-mq-xlarge-only').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'xxlarge'     : S('.foundation-mq-xxlarge').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, '')    // 307
    },                                                                                                                 // 308
                                                                                                                       // 309
    stylesheet : $('<style></style>').appendTo('head')[0].sheet,                                                       // 310
                                                                                                                       // 311
    global : {                                                                                                         // 312
      namespace : undefined                                                                                            // 313
    },                                                                                                                 // 314
                                                                                                                       // 315
    init : function (scope, libraries, method, options, response) {                                                    // 316
      var args = [scope, method, options, response],                                                                   // 317
          responses = [];                                                                                              // 318
                                                                                                                       // 319
      // check RTL                                                                                                     // 320
      this.rtl = /rtl/i.test(S('html').attr('dir'));                                                                   // 321
                                                                                                                       // 322
      // set foundation global scope                                                                                   // 323
      this.scope = scope || this.scope;                                                                                // 324
                                                                                                                       // 325
      this.set_namespace();                                                                                            // 326
                                                                                                                       // 327
      if (libraries && typeof libraries === 'string' && !/reflow/i.test(libraries)) {                                  // 328
        if (this.libs.hasOwnProperty(libraries)) {                                                                     // 329
          responses.push(this.init_lib(libraries, args));                                                              // 330
        }                                                                                                              // 331
      } else {                                                                                                         // 332
        for (var lib in this.libs) {                                                                                   // 333
          responses.push(this.init_lib(lib, libraries));                                                               // 334
        }                                                                                                              // 335
      }                                                                                                                // 336
                                                                                                                       // 337
      S(window).load(function () {                                                                                     // 338
        S(window)                                                                                                      // 339
          .trigger('resize.fndtn.clearing')                                                                            // 340
          .trigger('resize.fndtn.dropdown')                                                                            // 341
          .trigger('resize.fndtn.equalizer')                                                                           // 342
          .trigger('resize.fndtn.interchange')                                                                         // 343
          .trigger('resize.fndtn.joyride')                                                                             // 344
          .trigger('resize.fndtn.magellan')                                                                            // 345
          .trigger('resize.fndtn.topbar')                                                                              // 346
          .trigger('resize.fndtn.slider');                                                                             // 347
      });                                                                                                              // 348
                                                                                                                       // 349
      return scope;                                                                                                    // 350
    },                                                                                                                 // 351
                                                                                                                       // 352
    init_lib : function (lib, args) {                                                                                  // 353
      if (this.libs.hasOwnProperty(lib)) {                                                                             // 354
        this.patch(this.libs[lib]);                                                                                    // 355
                                                                                                                       // 356
        if (args && args.hasOwnProperty(lib)) {                                                                        // 357
            if (typeof this.libs[lib].settings !== 'undefined') {                                                      // 358
              $.extend(true, this.libs[lib].settings, args[lib]);                                                      // 359
            } else if (typeof this.libs[lib].defaults !== 'undefined') {                                               // 360
              $.extend(true, this.libs[lib].defaults, args[lib]);                                                      // 361
            }                                                                                                          // 362
          return this.libs[lib].init.apply(this.libs[lib], [this.scope, args[lib]]);                                   // 363
        }                                                                                                              // 364
                                                                                                                       // 365
        args = args instanceof Array ? args : new Array(args);                                                         // 366
        return this.libs[lib].init.apply(this.libs[lib], args);                                                        // 367
      }                                                                                                                // 368
                                                                                                                       // 369
      return function () {};                                                                                           // 370
    },                                                                                                                 // 371
                                                                                                                       // 372
    patch : function (lib) {                                                                                           // 373
      lib.scope = this.scope;                                                                                          // 374
      lib.namespace = this.global.namespace;                                                                           // 375
      lib.rtl = this.rtl;                                                                                              // 376
      lib['data_options'] = this.utils.data_options;                                                                   // 377
      lib['attr_name'] = attr_name;                                                                                    // 378
      lib['add_namespace'] = add_namespace;                                                                            // 379
      lib['bindings'] = bindings;                                                                                      // 380
      lib['S'] = this.utils.S;                                                                                         // 381
    },                                                                                                                 // 382
                                                                                                                       // 383
    inherit : function (scope, methods) {                                                                              // 384
      var methods_arr = methods.split(' '),                                                                            // 385
          i = methods_arr.length;                                                                                      // 386
                                                                                                                       // 387
      while (i--) {                                                                                                    // 388
        if (this.utils.hasOwnProperty(methods_arr[i])) {                                                               // 389
          scope[methods_arr[i]] = this.utils[methods_arr[i]];                                                          // 390
        }                                                                                                              // 391
      }                                                                                                                // 392
    },                                                                                                                 // 393
                                                                                                                       // 394
    set_namespace : function () {                                                                                      // 395
                                                                                                                       // 396
      // Description:                                                                                                  // 397
      //    Don't bother reading the namespace out of the meta tag                                                     // 398
      //    if the namespace has been set globally in javascript                                                       // 399
      //                                                                                                               // 400
      // Example:                                                                                                      // 401
      //    Foundation.global.namespace = 'my-namespace';                                                              // 402
      // or make it an empty string:                                                                                   // 403
      //    Foundation.global.namespace = '';                                                                          // 404
      //                                                                                                               // 405
      //                                                                                                               // 406
                                                                                                                       // 407
      // If the namespace has not been set (is undefined), try to read it out of the meta element.                     // 408
      // Otherwise use the globally defined namespace, even if it's empty ('')                                         // 409
      var namespace = ( this.global.namespace === undefined ) ? $('.foundation-data-attribute-namespace').css('font-family') : this.global.namespace;
                                                                                                                       // 411
      // Finally, if the namsepace is either undefined or false, set it to an empty string.                            // 412
      // Otherwise use the namespace value.                                                                            // 413
      this.global.namespace = ( namespace === undefined || /false/i.test(namespace) ) ? '' : namespace;                // 414
    },                                                                                                                 // 415
                                                                                                                       // 416
    libs : {},                                                                                                         // 417
                                                                                                                       // 418
    // methods that can be inherited in libraries                                                                      // 419
    utils : {                                                                                                          // 420
                                                                                                                       // 421
      // Description:                                                                                                  // 422
      //    Fast Selector wrapper returns jQuery object. Only use where getElementById                                 // 423
      //    is not available.                                                                                          // 424
      //                                                                                                               // 425
      // Arguments:                                                                                                    // 426
      //    Selector (String): CSS selector describing the element(s) to be                                            // 427
      //    returned as a jQuery object.                                                                               // 428
      //                                                                                                               // 429
      //    Scope (String): CSS selector describing the area to be searched. Default                                   // 430
      //    is document.                                                                                               // 431
      //                                                                                                               // 432
      // Returns:                                                                                                      // 433
      //    Element (jQuery Object): jQuery object containing elements matching the                                    // 434
      //    selector within the scope.                                                                                 // 435
      S : S,                                                                                                           // 436
                                                                                                                       // 437
      // Description:                                                                                                  // 438
      //    Executes a function a max of once every n milliseconds                                                     // 439
      //                                                                                                               // 440
      // Arguments:                                                                                                    // 441
      //    Func (Function): Function to be throttled.                                                                 // 442
      //                                                                                                               // 443
      //    Delay (Integer): Function execution threshold in milliseconds.                                             // 444
      //                                                                                                               // 445
      // Returns:                                                                                                      // 446
      //    Lazy_function (Function): Function with throttling applied.                                                // 447
      throttle : function (func, delay) {                                                                              // 448
        var timer = null;                                                                                              // 449
                                                                                                                       // 450
        return function () {                                                                                           // 451
          var context = this, args = arguments;                                                                        // 452
                                                                                                                       // 453
          if (timer == null) {                                                                                         // 454
            timer = setTimeout(function () {                                                                           // 455
              func.apply(context, args);                                                                               // 456
              timer = null;                                                                                            // 457
            }, delay);                                                                                                 // 458
          }                                                                                                            // 459
        };                                                                                                             // 460
      },                                                                                                               // 461
                                                                                                                       // 462
      // Description:                                                                                                  // 463
      //    Executes a function when it stops being invoked for n seconds                                              // 464
      //    Modified version of _.debounce() http://underscorejs.org                                                   // 465
      //                                                                                                               // 466
      // Arguments:                                                                                                    // 467
      //    Func (Function): Function to be debounced.                                                                 // 468
      //                                                                                                               // 469
      //    Delay (Integer): Function execution threshold in milliseconds.                                             // 470
      //                                                                                                               // 471
      //    Immediate (Bool): Whether the function should be called at the beginning                                   // 472
      //    of the delay instead of the end. Default is false.                                                         // 473
      //                                                                                                               // 474
      // Returns:                                                                                                      // 475
      //    Lazy_function (Function): Function with debouncing applied.                                                // 476
      debounce : function (func, delay, immediate) {                                                                   // 477
        var timeout, result;                                                                                           // 478
        return function () {                                                                                           // 479
          var context = this, args = arguments;                                                                        // 480
          var later = function () {                                                                                    // 481
            timeout = null;                                                                                            // 482
            if (!immediate) {                                                                                          // 483
              result = func.apply(context, args);                                                                      // 484
            }                                                                                                          // 485
          };                                                                                                           // 486
          var callNow = immediate && !timeout;                                                                         // 487
          clearTimeout(timeout);                                                                                       // 488
          timeout = setTimeout(later, delay);                                                                          // 489
          if (callNow) {                                                                                               // 490
            result = func.apply(context, args);                                                                        // 491
          }                                                                                                            // 492
          return result;                                                                                               // 493
        };                                                                                                             // 494
      },                                                                                                               // 495
                                                                                                                       // 496
      // Description:                                                                                                  // 497
      //    Parses data-options attribute                                                                              // 498
      //                                                                                                               // 499
      // Arguments:                                                                                                    // 500
      //    El (jQuery Object): Element to be parsed.                                                                  // 501
      //                                                                                                               // 502
      // Returns:                                                                                                      // 503
      //    Options (Javascript Object): Contents of the element's data-options                                        // 504
      //    attribute.                                                                                                 // 505
      data_options : function (el, data_attr_name) {                                                                   // 506
        data_attr_name = data_attr_name || 'options';                                                                  // 507
        var opts = {}, ii, p, opts_arr,                                                                                // 508
            data_options = function (el) {                                                                             // 509
              var namespace = Foundation.global.namespace;                                                             // 510
                                                                                                                       // 511
              if (namespace.length > 0) {                                                                              // 512
                return el.data(namespace + '-' + data_attr_name);                                                      // 513
              }                                                                                                        // 514
                                                                                                                       // 515
              return el.data(data_attr_name);                                                                          // 516
            };                                                                                                         // 517
                                                                                                                       // 518
        var cached_options = data_options(el);                                                                         // 519
                                                                                                                       // 520
        if (typeof cached_options === 'object') {                                                                      // 521
          return cached_options;                                                                                       // 522
        }                                                                                                              // 523
                                                                                                                       // 524
        opts_arr = (cached_options || ':').split(';');                                                                 // 525
        ii = opts_arr.length;                                                                                          // 526
                                                                                                                       // 527
        function isNumber (o) {                                                                                        // 528
          return !isNaN (o - 0) && o !== null && o !== '' && o !== false && o !== true;                                // 529
        }                                                                                                              // 530
                                                                                                                       // 531
        function trim (str) {                                                                                          // 532
          if (typeof str === 'string') {                                                                               // 533
            return $.trim(str);                                                                                        // 534
          }                                                                                                            // 535
          return str;                                                                                                  // 536
        }                                                                                                              // 537
                                                                                                                       // 538
        while (ii--) {                                                                                                 // 539
          p = opts_arr[ii].split(':');                                                                                 // 540
          p = [p[0], p.slice(1).join(':')];                                                                            // 541
                                                                                                                       // 542
          if (/true/i.test(p[1])) {                                                                                    // 543
            p[1] = true;                                                                                               // 544
          }                                                                                                            // 545
          if (/false/i.test(p[1])) {                                                                                   // 546
            p[1] = false;                                                                                              // 547
          }                                                                                                            // 548
          if (isNumber(p[1])) {                                                                                        // 549
            if (p[1].indexOf('.') === -1) {                                                                            // 550
              p[1] = parseInt(p[1], 10);                                                                               // 551
            } else {                                                                                                   // 552
              p[1] = parseFloat(p[1]);                                                                                 // 553
            }                                                                                                          // 554
          }                                                                                                            // 555
                                                                                                                       // 556
          if (p.length === 2 && p[0].length > 0) {                                                                     // 557
            opts[trim(p[0])] = trim(p[1]);                                                                             // 558
          }                                                                                                            // 559
        }                                                                                                              // 560
                                                                                                                       // 561
        return opts;                                                                                                   // 562
      },                                                                                                               // 563
                                                                                                                       // 564
      // Description:                                                                                                  // 565
      //    Adds JS-recognizable media queries                                                                         // 566
      //                                                                                                               // 567
      // Arguments:                                                                                                    // 568
      //    Media (String): Key string for the media query to be stored as in                                          // 569
      //    Foundation.media_queries                                                                                   // 570
      //                                                                                                               // 571
      //    Class (String): Class name for the generated <meta> tag                                                    // 572
      register_media : function (media, media_class) {                                                                 // 573
        if (Foundation.media_queries[media] === undefined) {                                                           // 574
          $('head').append('<meta class="' + media_class + '"/>');                                                     // 575
          Foundation.media_queries[media] = removeQuotes($('.' + media_class).css('font-family'));                     // 576
        }                                                                                                              // 577
      },                                                                                                               // 578
                                                                                                                       // 579
      // Description:                                                                                                  // 580
      //    Add custom CSS within a JS-defined media query                                                             // 581
      //                                                                                                               // 582
      // Arguments:                                                                                                    // 583
      //    Rule (String): CSS rule to be appended to the document.                                                    // 584
      //                                                                                                               // 585
      //    Media (String): Optional media query string for the CSS rule to be                                         // 586
      //    nested under.                                                                                              // 587
      add_custom_rule : function (rule, media) {                                                                       // 588
        if (media === undefined && Foundation.stylesheet) {                                                            // 589
          Foundation.stylesheet.insertRule(rule, Foundation.stylesheet.cssRules.length);                               // 590
        } else {                                                                                                       // 591
          var query = Foundation.media_queries[media];                                                                 // 592
                                                                                                                       // 593
          if (query !== undefined) {                                                                                   // 594
            Foundation.stylesheet.insertRule('@media ' +                                                               // 595
              Foundation.media_queries[media] + '{ ' + rule + ' }', Foundation.stylesheet.cssRules.length);            // 596
          }                                                                                                            // 597
        }                                                                                                              // 598
      },                                                                                                               // 599
                                                                                                                       // 600
      // Description:                                                                                                  // 601
      //    Performs a callback function when an image is fully loaded                                                 // 602
      //                                                                                                               // 603
      // Arguments:                                                                                                    // 604
      //    Image (jQuery Object): Image(s) to check if loaded.                                                        // 605
      //                                                                                                               // 606
      //    Callback (Function): Function to execute when image is fully loaded.                                       // 607
      image_loaded : function (images, callback) {                                                                     // 608
        var self = this,                                                                                               // 609
            unloaded = images.length;                                                                                  // 610
                                                                                                                       // 611
        function pictures_has_height(images) {                                                                         // 612
          var pictures_number = images.length;                                                                         // 613
                                                                                                                       // 614
          for (var i = pictures_number - 1; i >= 0; i--) {                                                             // 615
            if(images.attr('height') === undefined) {                                                                  // 616
              return false;                                                                                            // 617
            };                                                                                                         // 618
          };                                                                                                           // 619
                                                                                                                       // 620
          return true;                                                                                                 // 621
        }                                                                                                              // 622
                                                                                                                       // 623
        if (unloaded === 0 || pictures_has_height(images)) {                                                           // 624
          callback(images);                                                                                            // 625
        }                                                                                                              // 626
                                                                                                                       // 627
        images.each(function () {                                                                                      // 628
          single_image_loaded(self.S(this), function () {                                                              // 629
            unloaded -= 1;                                                                                             // 630
            if (unloaded === 0) {                                                                                      // 631
              callback(images);                                                                                        // 632
            }                                                                                                          // 633
          });                                                                                                          // 634
        });                                                                                                            // 635
      },                                                                                                               // 636
                                                                                                                       // 637
      // Description:                                                                                                  // 638
      //    Returns a random, alphanumeric string                                                                      // 639
      //                                                                                                               // 640
      // Arguments:                                                                                                    // 641
      //    Length (Integer): Length of string to be generated. Defaults to random                                     // 642
      //    integer.                                                                                                   // 643
      //                                                                                                               // 644
      // Returns:                                                                                                      // 645
      //    Rand (String): Pseudo-random, alphanumeric string.                                                         // 646
      random_str : function () {                                                                                       // 647
        if (!this.fidx) {                                                                                              // 648
          this.fidx = 0;                                                                                               // 649
        }                                                                                                              // 650
        this.prefix = this.prefix || [(this.name || 'F'), (+new Date).toString(36)].join('-');                         // 651
                                                                                                                       // 652
        return this.prefix + (this.fidx++).toString(36);                                                               // 653
      },                                                                                                               // 654
                                                                                                                       // 655
      // Description:                                                                                                  // 656
      //    Helper for window.matchMedia                                                                               // 657
      //                                                                                                               // 658
      // Arguments:                                                                                                    // 659
      //    mq (String): Media query                                                                                   // 660
      //                                                                                                               // 661
      // Returns:                                                                                                      // 662
      //    (Boolean): Whether the media query passes or not                                                           // 663
      match : function (mq) {                                                                                          // 664
        return window.matchMedia(mq).matches;                                                                          // 665
      },                                                                                                               // 666
                                                                                                                       // 667
      // Description:                                                                                                  // 668
      //    Helpers for checking Foundation default media queries with JS                                              // 669
      //                                                                                                               // 670
      // Returns:                                                                                                      // 671
      //    (Boolean): Whether the media query passes or not                                                           // 672
                                                                                                                       // 673
      is_small_up : function () {                                                                                      // 674
        return this.match(Foundation.media_queries.small);                                                             // 675
      },                                                                                                               // 676
                                                                                                                       // 677
      is_medium_up : function () {                                                                                     // 678
        return this.match(Foundation.media_queries.medium);                                                            // 679
      },                                                                                                               // 680
                                                                                                                       // 681
      is_large_up : function () {                                                                                      // 682
        return this.match(Foundation.media_queries.large);                                                             // 683
      },                                                                                                               // 684
                                                                                                                       // 685
      is_xlarge_up : function () {                                                                                     // 686
        return this.match(Foundation.media_queries.xlarge);                                                            // 687
      },                                                                                                               // 688
                                                                                                                       // 689
      is_xxlarge_up : function () {                                                                                    // 690
        return this.match(Foundation.media_queries.xxlarge);                                                           // 691
      },                                                                                                               // 692
                                                                                                                       // 693
      is_small_only : function () {                                                                                    // 694
        return !this.is_medium_up() && !this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up();           // 695
      },                                                                                                               // 696
                                                                                                                       // 697
      is_medium_only : function () {                                                                                   // 698
        return this.is_medium_up() && !this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up();            // 699
      },                                                                                                               // 700
                                                                                                                       // 701
      is_large_only : function () {                                                                                    // 702
        return this.is_medium_up() && this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up();             // 703
      },                                                                                                               // 704
                                                                                                                       // 705
      is_xlarge_only : function () {                                                                                   // 706
        return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && !this.is_xxlarge_up();              // 707
      },                                                                                                               // 708
                                                                                                                       // 709
      is_xxlarge_only : function () {                                                                                  // 710
        return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && this.is_xxlarge_up();               // 711
      }                                                                                                                // 712
    }                                                                                                                  // 713
  };                                                                                                                   // 714
                                                                                                                       // 715
  $.fn.foundation = function () {                                                                                      // 716
    var args = Array.prototype.slice.call(arguments, 0);                                                               // 717
                                                                                                                       // 718
    return this.each(function () {                                                                                     // 719
      Foundation.init.apply(Foundation, [this].concat(args));                                                          // 720
      return this;                                                                                                     // 721
    });                                                                                                                // 722
  };                                                                                                                   // 723
                                                                                                                       // 724
}(jQuery, window, window.document));                                                                                   // 725
                                                                                                                       // 726
;(function ($, window, document, undefined) {                                                                          // 727
  'use strict';                                                                                                        // 728
                                                                                                                       // 729
  Foundation.libs.abide = {                                                                                            // 730
    name : 'abide',                                                                                                    // 731
                                                                                                                       // 732
    version : '5.5.2',                                                                                                 // 733
                                                                                                                       // 734
    settings : {                                                                                                       // 735
      live_validate : true,                                                                                            // 736
      validate_on_blur : true,                                                                                         // 737
      // validate_on: 'tab', // tab (when user tabs between fields), change (input changes), manual (call custom events) 
      focus_on_invalid : true,                                                                                         // 739
      error_labels : true, // labels with a for="inputId" will recieve an `error` class                                // 740
      error_class : 'error',                                                                                           // 741
      timeout : 1000,                                                                                                  // 742
      patterns : {                                                                                                     // 743
        alpha : /^[a-zA-Z]+$/,                                                                                         // 744
        alpha_numeric : /^[a-zA-Z0-9]+$/,                                                                              // 745
        integer : /^[-+]?\d+$/,                                                                                        // 746
        number : /^[-+]?\d*(?:[\.\,]\d+)?$/,                                                                           // 747
                                                                                                                       // 748
        // amex, visa, diners                                                                                          // 749
        card : /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
        cvv : /^([0-9]){3,4}$/,                                                                                        // 751
                                                                                                                       // 752
        // http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#valid-e-mail-address
        email : /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
                                                                                                                       // 755
        // http://blogs.lse.ac.uk/lti/2008/04/23/a-regular-expression-to-match-any-url/                                // 756
        url: /^(https?|ftp|file|ssh):\/\/([-;:&=\+\$,\w]+@{1})?([-A-Za-z0-9\.]+)+:?(\d+)?((\/[-\+~%\/\.\w]+)?\??([-\+=&;%@\.\w]+)?#?([\w]+)?)?/,
        // abc.de                                                                                                      // 758
        domain : /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,                                   // 759
                                                                                                                       // 760
        datetime : /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
        // YYYY-MM-DD                                                                                                  // 762
        date : /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
        // HH:MM:SS                                                                                                    // 764
        time : /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,                                                             // 765
        dateISO : /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,                                                                 // 766
        // MM/DD/YYYY                                                                                                  // 767
        month_day_year : /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,                               // 768
        // DD/MM/YYYY                                                                                                  // 769
        day_month_year : /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,                               // 770
                                                                                                                       // 771
        // #FFF or #FFFFFF                                                                                             // 772
        color : /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/                                                                  // 773
      },                                                                                                               // 774
      validators : {                                                                                                   // 775
        equalTo : function (el, required, parent) {                                                                    // 776
          var from  = document.getElementById(el.getAttribute(this.add_namespace('data-equalto'))).value,              // 777
              to    = el.value,                                                                                        // 778
              valid = (from === to);                                                                                   // 779
                                                                                                                       // 780
          return valid;                                                                                                // 781
        }                                                                                                              // 782
      }                                                                                                                // 783
    },                                                                                                                 // 784
                                                                                                                       // 785
    timer : null,                                                                                                      // 786
                                                                                                                       // 787
    init : function (scope, method, options) {                                                                         // 788
      this.bindings(method, options);                                                                                  // 789
    },                                                                                                                 // 790
                                                                                                                       // 791
    events : function (scope) {                                                                                        // 792
      var self = this,                                                                                                 // 793
          form = self.S(scope).attr('novalidate', 'novalidate'),                                                       // 794
          settings = form.data(this.attr_name(true) + '-init') || {};                                                  // 795
                                                                                                                       // 796
      this.invalid_attr = this.add_namespace('data-invalid');                                                          // 797
                                                                                                                       // 798
      function validate(originalSelf, e) {                                                                             // 799
        clearTimeout(self.timer);                                                                                      // 800
        self.timer = setTimeout(function () {                                                                          // 801
          self.validate([originalSelf], e);                                                                            // 802
        }.bind(originalSelf), settings.timeout);                                                                       // 803
      }                                                                                                                // 804
                                                                                                                       // 805
                                                                                                                       // 806
      form                                                                                                             // 807
        .off('.abide')                                                                                                 // 808
        .on('submit.fndtn.abide', function (e) {                                                                       // 809
          var is_ajax = /ajax/i.test(self.S(this).attr(self.attr_name()));                                             // 810
          return self.validate(self.S(this).find('input, textarea, select').not(":hidden, [data-abide-ignore]").get(), e, is_ajax);
        })                                                                                                             // 812
        .on('validate.fndtn.abide', function (e) {                                                                     // 813
          if (settings.validate_on === 'manual') {                                                                     // 814
            self.validate([e.target], e);                                                                              // 815
          }                                                                                                            // 816
        })                                                                                                             // 817
        .on('reset', function (e) {                                                                                    // 818
          return self.reset($(this), e);                                                                               // 819
        })                                                                                                             // 820
        .find('input, textarea, select').not(":hidden, [data-abide-ignore]")                                           // 821
          .off('.abide')                                                                                               // 822
          .on('blur.fndtn.abide change.fndtn.abide', function (e) {                                                    // 823
            // old settings fallback                                                                                   // 824
            // will be deprecated with F6 release                                                                      // 825
            if (settings.validate_on_blur && settings.validate_on_blur === true) {                                     // 826
              validate(this, e);                                                                                       // 827
            }                                                                                                          // 828
            // new settings combining validate options into one setting                                                // 829
            if (settings.validate_on === 'change') {                                                                   // 830
              validate(this, e);                                                                                       // 831
            }                                                                                                          // 832
          })                                                                                                           // 833
          .on('keydown.fndtn.abide', function (e) {                                                                    // 834
            // old settings fallback                                                                                   // 835
            // will be deprecated with F6 release                                                                      // 836
            if (settings.live_validate && settings.live_validate === true && e.which != 9) {                           // 837
              validate(this, e);                                                                                       // 838
            }                                                                                                          // 839
            // new settings combining validate options into one setting                                                // 840
            if (settings.validate_on === 'tab' && e.which === 9) {                                                     // 841
              validate(this, e);                                                                                       // 842
            }                                                                                                          // 843
            else if (settings.validate_on === 'change') {                                                              // 844
              validate(this, e);                                                                                       // 845
            }                                                                                                          // 846
          })                                                                                                           // 847
          .on('focus', function (e) {                                                                                  // 848
            if (navigator.userAgent.match(/iPad|iPhone|Android|BlackBerry|Windows Phone|webOS/i)) {                    // 849
              $('html, body').animate({                                                                                // 850
                  scrollTop: $(e.target).offset().top                                                                  // 851
              }, 100);                                                                                                 // 852
            }                                                                                                          // 853
          });                                                                                                          // 854
    },                                                                                                                 // 855
                                                                                                                       // 856
    reset : function (form, e) {                                                                                       // 857
      var self = this;                                                                                                 // 858
      form.removeAttr(self.invalid_attr);                                                                              // 859
                                                                                                                       // 860
      $('[' + self.invalid_attr + ']', form).removeAttr(self.invalid_attr);                                            // 861
      $('.' + self.settings.error_class, form).not('small').removeClass(self.settings.error_class);                    // 862
      $(':input', form).not(':button, :submit, :reset, :hidden, [data-abide-ignore]').val('').removeAttr(self.invalid_attr);
    },                                                                                                                 // 864
                                                                                                                       // 865
    validate : function (els, e, is_ajax) {                                                                            // 866
      var validations = this.parse_patterns(els),                                                                      // 867
          validation_count = validations.length,                                                                       // 868
          form = this.S(els[0]).closest('form'),                                                                       // 869
          submit_event = /submit/.test(e.type);                                                                        // 870
                                                                                                                       // 871
      // Has to count up to make sure the focus gets applied to the top error                                          // 872
      for (var i = 0; i < validation_count; i++) {                                                                     // 873
        if (!validations[i] && (submit_event || is_ajax)) {                                                            // 874
          if (this.settings.focus_on_invalid) {                                                                        // 875
            els[i].focus();                                                                                            // 876
          }                                                                                                            // 877
          form.trigger('invalid.fndtn.abide');                                                                         // 878
          this.S(els[i]).closest('form').attr(this.invalid_attr, '');                                                  // 879
          return false;                                                                                                // 880
        }                                                                                                              // 881
      }                                                                                                                // 882
                                                                                                                       // 883
      if (submit_event || is_ajax) {                                                                                   // 884
        form.trigger('valid.fndtn.abide');                                                                             // 885
      }                                                                                                                // 886
                                                                                                                       // 887
      form.removeAttr(this.invalid_attr);                                                                              // 888
                                                                                                                       // 889
      if (is_ajax) {                                                                                                   // 890
        return false;                                                                                                  // 891
      }                                                                                                                // 892
                                                                                                                       // 893
      return true;                                                                                                     // 894
    },                                                                                                                 // 895
                                                                                                                       // 896
    parse_patterns : function (els) {                                                                                  // 897
      var i = els.length,                                                                                              // 898
          el_patterns = [];                                                                                            // 899
                                                                                                                       // 900
      while (i--) {                                                                                                    // 901
        el_patterns.push(this.pattern(els[i]));                                                                        // 902
      }                                                                                                                // 903
                                                                                                                       // 904
      return this.check_validation_and_apply_styles(el_patterns);                                                      // 905
    },                                                                                                                 // 906
                                                                                                                       // 907
    pattern : function (el) {                                                                                          // 908
      var type = el.getAttribute('type'),                                                                              // 909
          required = typeof el.getAttribute('required') === 'string';                                                  // 910
                                                                                                                       // 911
      var pattern = el.getAttribute('pattern') || '';                                                                  // 912
                                                                                                                       // 913
      if (this.settings.patterns.hasOwnProperty(pattern) && pattern.length > 0) {                                      // 914
        return [el, this.settings.patterns[pattern], required];                                                        // 915
      } else if (pattern.length > 0) {                                                                                 // 916
        return [el, new RegExp(pattern), required];                                                                    // 917
      }                                                                                                                // 918
                                                                                                                       // 919
      if (this.settings.patterns.hasOwnProperty(type)) {                                                               // 920
        return [el, this.settings.patterns[type], required];                                                           // 921
      }                                                                                                                // 922
                                                                                                                       // 923
      pattern = /.*/;                                                                                                  // 924
                                                                                                                       // 925
      return [el, pattern, required];                                                                                  // 926
    },                                                                                                                 // 927
                                                                                                                       // 928
    // TODO: Break this up into smaller methods, getting hard to read.                                                 // 929
    check_validation_and_apply_styles : function (el_patterns) {                                                       // 930
      var i = el_patterns.length,                                                                                      // 931
          validations = [],                                                                                            // 932
          form = this.S(el_patterns[0][0]).closest('[data-' + this.attr_name(true) + ']'),                             // 933
          settings = form.data(this.attr_name(true) + '-init') || {};                                                  // 934
      while (i--) {                                                                                                    // 935
        var el = el_patterns[i][0],                                                                                    // 936
            required = el_patterns[i][2],                                                                              // 937
            value = el.value.trim(),                                                                                   // 938
            direct_parent = this.S(el).parent(),                                                                       // 939
            validator = el.getAttribute(this.add_namespace('data-abide-validator')),                                   // 940
            is_radio = el.type === 'radio',                                                                            // 941
            is_checkbox = el.type === 'checkbox',                                                                      // 942
            label = this.S('label[for="' + el.getAttribute('id') + '"]'),                                              // 943
            valid_length = (required) ? (el.value.length > 0) : true,                                                  // 944
            el_validations = [];                                                                                       // 945
                                                                                                                       // 946
        var parent, valid;                                                                                             // 947
                                                                                                                       // 948
        // support old way to do equalTo validations                                                                   // 949
        if (el.getAttribute(this.add_namespace('data-equalto'))) { validator = 'equalTo' }                             // 950
                                                                                                                       // 951
        if (!direct_parent.is('label')) {                                                                              // 952
          parent = direct_parent;                                                                                      // 953
        } else {                                                                                                       // 954
          parent = direct_parent.parent();                                                                             // 955
        }                                                                                                              // 956
                                                                                                                       // 957
        if (is_radio && required) {                                                                                    // 958
          el_validations.push(this.valid_radio(el, required));                                                         // 959
        } else if (is_checkbox && required) {                                                                          // 960
          el_validations.push(this.valid_checkbox(el, required));                                                      // 961
                                                                                                                       // 962
        } else if (validator) {                                                                                        // 963
          // Validate using each of the specified (space-delimited) validators.                                        // 964
          var validators = validator.split(' ');                                                                       // 965
          var last_valid = true, all_valid = true;                                                                     // 966
          for (var iv = 0; iv < validators.length; iv++) {                                                             // 967
              valid = this.settings.validators[validators[iv]].apply(this, [el, required, parent])                     // 968
              el_validations.push(valid);                                                                              // 969
              all_valid = valid && last_valid;                                                                         // 970
              last_valid = valid;                                                                                      // 971
          }                                                                                                            // 972
          if (all_valid) {                                                                                             // 973
              this.S(el).removeAttr(this.invalid_attr);                                                                // 974
              parent.removeClass('error');                                                                             // 975
              if (label.length > 0 && this.settings.error_labels) {                                                    // 976
                label.removeClass(this.settings.error_class).removeAttr('role');                                       // 977
              }                                                                                                        // 978
              $(el).triggerHandler('valid');                                                                           // 979
          } else {                                                                                                     // 980
              this.S(el).attr(this.invalid_attr, '');                                                                  // 981
              parent.addClass('error');                                                                                // 982
              if (label.length > 0 && this.settings.error_labels) {                                                    // 983
                label.addClass(this.settings.error_class).attr('role', 'alert');                                       // 984
              }                                                                                                        // 985
              $(el).triggerHandler('invalid');                                                                         // 986
          }                                                                                                            // 987
        } else {                                                                                                       // 988
                                                                                                                       // 989
          if (el_patterns[i][1].test(value) && valid_length ||                                                         // 990
            !required && el.value.length < 1 || $(el).attr('disabled')) {                                              // 991
            el_validations.push(true);                                                                                 // 992
          } else {                                                                                                     // 993
            el_validations.push(false);                                                                                // 994
          }                                                                                                            // 995
                                                                                                                       // 996
          el_validations = [el_validations.every(function (valid) {return valid;})];                                   // 997
          if (el_validations[0]) {                                                                                     // 998
            this.S(el).removeAttr(this.invalid_attr);                                                                  // 999
            el.setAttribute('aria-invalid', 'false');                                                                  // 1000
            el.removeAttribute('aria-describedby');                                                                    // 1001
            parent.removeClass(this.settings.error_class);                                                             // 1002
            if (label.length > 0 && this.settings.error_labels) {                                                      // 1003
              label.removeClass(this.settings.error_class).removeAttr('role');                                         // 1004
            }                                                                                                          // 1005
            $(el).triggerHandler('valid');                                                                             // 1006
          } else {                                                                                                     // 1007
            this.S(el).attr(this.invalid_attr, '');                                                                    // 1008
            el.setAttribute('aria-invalid', 'true');                                                                   // 1009
                                                                                                                       // 1010
            // Try to find the error associated with the input                                                         // 1011
            var errorElem = parent.find('small.' + this.settings.error_class, 'span.' + this.settings.error_class);    // 1012
            var errorID = errorElem.length > 0 ? errorElem[0].id : '';                                                 // 1013
            if (errorID.length > 0) {                                                                                  // 1014
              el.setAttribute('aria-describedby', errorID);                                                            // 1015
            }                                                                                                          // 1016
                                                                                                                       // 1017
            // el.setAttribute('aria-describedby', $(el).find('.error')[0].id);                                        // 1018
            parent.addClass(this.settings.error_class);                                                                // 1019
            if (label.length > 0 && this.settings.error_labels) {                                                      // 1020
              label.addClass(this.settings.error_class).attr('role', 'alert');                                         // 1021
            }                                                                                                          // 1022
            $(el).triggerHandler('invalid');                                                                           // 1023
          }                                                                                                            // 1024
        }                                                                                                              // 1025
        validations = validations.concat(el_validations);                                                              // 1026
      }                                                                                                                // 1027
      return validations;                                                                                              // 1028
    },                                                                                                                 // 1029
                                                                                                                       // 1030
    valid_checkbox : function (el, required) {                                                                         // 1031
      var el = this.S(el),                                                                                             // 1032
          valid = (el.is(':checked') || !required || el.get(0).getAttribute('disabled'));                              // 1033
                                                                                                                       // 1034
      if (valid) {                                                                                                     // 1035
        el.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class);                              // 1036
        $(el).triggerHandler('valid');                                                                                 // 1037
      } else {                                                                                                         // 1038
        el.attr(this.invalid_attr, '').parent().addClass(this.settings.error_class);                                   // 1039
        $(el).triggerHandler('invalid');                                                                               // 1040
      }                                                                                                                // 1041
                                                                                                                       // 1042
      return valid;                                                                                                    // 1043
    },                                                                                                                 // 1044
                                                                                                                       // 1045
    valid_radio : function (el, required) {                                                                            // 1046
      var name = el.getAttribute('name'),                                                                              // 1047
          group = this.S(el).closest('[data-' + this.attr_name(true) + ']').find("[name='" + name + "']"),             // 1048
          count = group.length,                                                                                        // 1049
          valid = false,                                                                                               // 1050
          disabled = false;                                                                                            // 1051
                                                                                                                       // 1052
      // Has to count up to make sure the focus gets applied to the top error                                          // 1053
        for (var i=0; i < count; i++) {                                                                                // 1054
            if( group[i].getAttribute('disabled') ){                                                                   // 1055
                disabled=true;                                                                                         // 1056
                valid=true;                                                                                            // 1057
            } else {                                                                                                   // 1058
                if (group[i].checked){                                                                                 // 1059
                    valid = true;                                                                                      // 1060
                } else {                                                                                               // 1061
                    if( disabled ){                                                                                    // 1062
                        valid = false;                                                                                 // 1063
                    }                                                                                                  // 1064
                }                                                                                                      // 1065
            }                                                                                                          // 1066
        }                                                                                                              // 1067
                                                                                                                       // 1068
      // Has to count up to make sure the focus gets applied to the top error                                          // 1069
      for (var i = 0; i < count; i++) {                                                                                // 1070
        if (valid) {                                                                                                   // 1071
          this.S(group[i]).removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class);              // 1072
          $(group[i]).triggerHandler('valid');                                                                         // 1073
        } else {                                                                                                       // 1074
          this.S(group[i]).attr(this.invalid_attr, '').parent().addClass(this.settings.error_class);                   // 1075
          $(group[i]).triggerHandler('invalid');                                                                       // 1076
        }                                                                                                              // 1077
      }                                                                                                                // 1078
                                                                                                                       // 1079
      return valid;                                                                                                    // 1080
    },                                                                                                                 // 1081
                                                                                                                       // 1082
    valid_equal : function (el, required, parent) {                                                                    // 1083
      var from  = document.getElementById(el.getAttribute(this.add_namespace('data-equalto'))).value,                  // 1084
          to    = el.value,                                                                                            // 1085
          valid = (from === to);                                                                                       // 1086
                                                                                                                       // 1087
      if (valid) {                                                                                                     // 1088
        this.S(el).removeAttr(this.invalid_attr);                                                                      // 1089
        parent.removeClass(this.settings.error_class);                                                                 // 1090
        if (label.length > 0 && settings.error_labels) {                                                               // 1091
          label.removeClass(this.settings.error_class);                                                                // 1092
        }                                                                                                              // 1093
      } else {                                                                                                         // 1094
        this.S(el).attr(this.invalid_attr, '');                                                                        // 1095
        parent.addClass(this.settings.error_class);                                                                    // 1096
        if (label.length > 0 && settings.error_labels) {                                                               // 1097
          label.addClass(this.settings.error_class);                                                                   // 1098
        }                                                                                                              // 1099
      }                                                                                                                // 1100
                                                                                                                       // 1101
      return valid;                                                                                                    // 1102
    },                                                                                                                 // 1103
                                                                                                                       // 1104
    valid_oneof : function (el, required, parent, doNotValidateOthers) {                                               // 1105
      var el = this.S(el),                                                                                             // 1106
        others = this.S('[' + this.add_namespace('data-oneof') + ']'),                                                 // 1107
        valid = others.filter(':checked').length > 0;                                                                  // 1108
                                                                                                                       // 1109
      if (valid) {                                                                                                     // 1110
        el.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class);                              // 1111
      } else {                                                                                                         // 1112
        el.attr(this.invalid_attr, '').parent().addClass(this.settings.error_class);                                   // 1113
      }                                                                                                                // 1114
                                                                                                                       // 1115
      if (!doNotValidateOthers) {                                                                                      // 1116
        var _this = this;                                                                                              // 1117
        others.each(function () {                                                                                      // 1118
          _this.valid_oneof.call(_this, this, null, null, true);                                                       // 1119
        });                                                                                                            // 1120
      }                                                                                                                // 1121
                                                                                                                       // 1122
      return valid;                                                                                                    // 1123
    },                                                                                                                 // 1124
                                                                                                                       // 1125
    reflow : function(scope, options) {                                                                                // 1126
      var self = this,                                                                                                 // 1127
          form = self.S('[' + this.attr_name() + ']').attr('novalidate', 'novalidate');                                // 1128
          self.S(form).each(function (idx, el) {                                                                       // 1129
            self.events(el);                                                                                           // 1130
          });                                                                                                          // 1131
    }                                                                                                                  // 1132
  };                                                                                                                   // 1133
}(jQuery, window, window.document));                                                                                   // 1134
                                                                                                                       // 1135
;(function ($, window, document, undefined) {                                                                          // 1136
  'use strict';                                                                                                        // 1137
                                                                                                                       // 1138
  Foundation.libs.accordion = {                                                                                        // 1139
    name : 'accordion',                                                                                                // 1140
                                                                                                                       // 1141
    version : '5.5.2',                                                                                                 // 1142
                                                                                                                       // 1143
    settings : {                                                                                                       // 1144
      content_class : 'content',                                                                                       // 1145
      active_class : 'active',                                                                                         // 1146
      multi_expand : false,                                                                                            // 1147
      toggleable : true,                                                                                               // 1148
      callback : function () {}                                                                                        // 1149
    },                                                                                                                 // 1150
                                                                                                                       // 1151
    init : function (scope, method, options) {                                                                         // 1152
      this.bindings(method, options);                                                                                  // 1153
    },                                                                                                                 // 1154
                                                                                                                       // 1155
    events : function (instance) {                                                                                     // 1156
      var self = this;                                                                                                 // 1157
      var S = this.S;                                                                                                  // 1158
      self.create(this.S(instance));                                                                                   // 1159
                                                                                                                       // 1160
      S(this.scope)                                                                                                    // 1161
      .off('.fndtn.accordion')                                                                                         // 1162
      .on('click.fndtn.accordion', '[' + this.attr_name() + '] > dd > a, [' + this.attr_name() + '] > li > a', function (e) {
        var accordion = S(this).closest('[' + self.attr_name() + ']'),                                                 // 1164
            groupSelector = self.attr_name() + '=' + accordion.attr(self.attr_name()),                                 // 1165
            settings = accordion.data(self.attr_name(true) + '-init') || self.settings,                                // 1166
            target = S('#' + this.href.split('#')[1]),                                                                 // 1167
            aunts = $('> dd, > li', accordion),                                                                        // 1168
            siblings = aunts.children('.' + settings.content_class),                                                   // 1169
            active_content = siblings.filter('.' + settings.active_class);                                             // 1170
                                                                                                                       // 1171
        e.preventDefault();                                                                                            // 1172
                                                                                                                       // 1173
        if (accordion.attr(self.attr_name())) {                                                                        // 1174
          siblings = siblings.add('[' + groupSelector + '] dd > ' + '.' + settings.content_class + ', [' + groupSelector + '] li > ' + '.' + settings.content_class);
          aunts = aunts.add('[' + groupSelector + '] dd, [' + groupSelector + '] li');                                 // 1176
        }                                                                                                              // 1177
                                                                                                                       // 1178
        if (settings.toggleable && target.is(active_content)) {                                                        // 1179
          target.parent('dd, li').toggleClass(settings.active_class, false);                                           // 1180
          target.toggleClass(settings.active_class, false);                                                            // 1181
          S(this).attr('aria-expanded', function(i, attr){                                                             // 1182
              return attr === 'true' ? 'false' : 'true';                                                               // 1183
          });                                                                                                          // 1184
          settings.callback(target);                                                                                   // 1185
          target.triggerHandler('toggled', [accordion]);                                                               // 1186
          accordion.triggerHandler('toggled', [target]);                                                               // 1187
          return;                                                                                                      // 1188
        }                                                                                                              // 1189
                                                                                                                       // 1190
        if (!settings.multi_expand) {                                                                                  // 1191
          siblings.removeClass(settings.active_class);                                                                 // 1192
          aunts.removeClass(settings.active_class);                                                                    // 1193
          aunts.children('a').attr('aria-expanded','false');                                                           // 1194
        }                                                                                                              // 1195
                                                                                                                       // 1196
        target.addClass(settings.active_class).parent().addClass(settings.active_class);                               // 1197
        settings.callback(target);                                                                                     // 1198
        target.triggerHandler('toggled', [accordion]);                                                                 // 1199
        accordion.triggerHandler('toggled', [target]);                                                                 // 1200
        S(this).attr('aria-expanded','true');                                                                          // 1201
      });                                                                                                              // 1202
    },                                                                                                                 // 1203
                                                                                                                       // 1204
    create: function($instance) {                                                                                      // 1205
      var self = this,                                                                                                 // 1206
          accordion = $instance,                                                                                       // 1207
          aunts = $('> .accordion-navigation', accordion),                                                             // 1208
          settings = accordion.data(self.attr_name(true) + '-init') || self.settings;                                  // 1209
                                                                                                                       // 1210
      aunts.children('a').attr('aria-expanded','false');                                                               // 1211
      aunts.has('.' + settings.content_class + '.' + settings.active_class).children('a').attr('aria-expanded','true');
                                                                                                                       // 1213
      if (settings.multi_expand) {                                                                                     // 1214
        $instance.attr('aria-multiselectable','true');                                                                 // 1215
      }                                                                                                                // 1216
    },                                                                                                                 // 1217
                                                                                                                       // 1218
    off : function () {},                                                                                              // 1219
                                                                                                                       // 1220
    reflow : function () {}                                                                                            // 1221
  };                                                                                                                   // 1222
}(jQuery, window, window.document));                                                                                   // 1223
                                                                                                                       // 1224
;(function ($, window, document, undefined) {                                                                          // 1225
  'use strict';                                                                                                        // 1226
                                                                                                                       // 1227
  Foundation.libs.alert = {                                                                                            // 1228
    name : 'alert',                                                                                                    // 1229
                                                                                                                       // 1230
    version : '5.5.2',                                                                                                 // 1231
                                                                                                                       // 1232
    settings : {                                                                                                       // 1233
      callback : function () {}                                                                                        // 1234
    },                                                                                                                 // 1235
                                                                                                                       // 1236
    init : function (scope, method, options) {                                                                         // 1237
      this.bindings(method, options);                                                                                  // 1238
    },                                                                                                                 // 1239
                                                                                                                       // 1240
    events : function () {                                                                                             // 1241
      var self = this,                                                                                                 // 1242
          S = this.S;                                                                                                  // 1243
                                                                                                                       // 1244
      $(this.scope).off('.alert').on('click.fndtn.alert', '[' + this.attr_name() + '] .close', function (e) {          // 1245
        var alertBox = S(this).closest('[' + self.attr_name() + ']'),                                                  // 1246
            settings = alertBox.data(self.attr_name(true) + '-init') || self.settings;                                 // 1247
                                                                                                                       // 1248
        e.preventDefault();                                                                                            // 1249
        if (Modernizr.csstransitions) {                                                                                // 1250
          alertBox.addClass('alert-close');                                                                            // 1251
          alertBox.on('transitionend webkitTransitionEnd oTransitionEnd', function (e) {                               // 1252
            S(this).trigger('close.fndtn.alert').remove();                                                             // 1253
            settings.callback();                                                                                       // 1254
          });                                                                                                          // 1255
        } else {                                                                                                       // 1256
          alertBox.fadeOut(300, function () {                                                                          // 1257
            S(this).trigger('close.fndtn.alert').remove();                                                             // 1258
            settings.callback();                                                                                       // 1259
          });                                                                                                          // 1260
        }                                                                                                              // 1261
      });                                                                                                              // 1262
    },                                                                                                                 // 1263
                                                                                                                       // 1264
    reflow : function () {}                                                                                            // 1265
  };                                                                                                                   // 1266
}(jQuery, window, window.document));                                                                                   // 1267
                                                                                                                       // 1268
;(function ($, window, document, undefined) {                                                                          // 1269
  'use strict';                                                                                                        // 1270
                                                                                                                       // 1271
  Foundation.libs.clearing = {                                                                                         // 1272
    name : 'clearing',                                                                                                 // 1273
                                                                                                                       // 1274
    version : '5.5.2',                                                                                                 // 1275
                                                                                                                       // 1276
    settings : {                                                                                                       // 1277
      templates : {                                                                                                    // 1278
        viewing : '<a href="#" class="clearing-close">&times;</a>' +                                                   // 1279
          '<div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" />' +
          '<p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a>' +                 // 1281
          '<a href="#" class="clearing-main-next"><span></span></a></div>' +                                           // 1282
          '<img class="clearing-preload-next" style="display: none" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" />' +
          '<img class="clearing-preload-prev" style="display: none" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" />'
      },                                                                                                               // 1285
                                                                                                                       // 1286
      // comma delimited list of selectors that, on click, will close clearing,                                        // 1287
      // add 'div.clearing-blackout, div.visible-img' to close on background click                                     // 1288
      close_selectors : '.clearing-close, div.clearing-blackout',                                                      // 1289
                                                                                                                       // 1290
      // Default to the entire li element.                                                                             // 1291
      open_selectors : '',                                                                                             // 1292
                                                                                                                       // 1293
      // Image will be skipped in carousel.                                                                            // 1294
      skip_selector : '',                                                                                              // 1295
                                                                                                                       // 1296
      touch_label : '',                                                                                                // 1297
                                                                                                                       // 1298
      // event initializers and locks                                                                                  // 1299
      init : false,                                                                                                    // 1300
      locked : false                                                                                                   // 1301
    },                                                                                                                 // 1302
                                                                                                                       // 1303
    init : function (scope, method, options) {                                                                         // 1304
      var self = this;                                                                                                 // 1305
      Foundation.inherit(this, 'throttle image_loaded');                                                               // 1306
                                                                                                                       // 1307
      this.bindings(method, options);                                                                                  // 1308
                                                                                                                       // 1309
      if (self.S(this.scope).is('[' + this.attr_name() + ']')) {                                                       // 1310
        this.assemble(self.S('li', this.scope));                                                                       // 1311
      } else {                                                                                                         // 1312
        self.S('[' + this.attr_name() + ']', this.scope).each(function () {                                            // 1313
          self.assemble(self.S('li', this));                                                                           // 1314
        });                                                                                                            // 1315
      }                                                                                                                // 1316
    },                                                                                                                 // 1317
                                                                                                                       // 1318
    events : function (scope) {                                                                                        // 1319
      var self = this,                                                                                                 // 1320
          S = self.S,                                                                                                  // 1321
          $scroll_container = $('.scroll-container');                                                                  // 1322
                                                                                                                       // 1323
      if ($scroll_container.length > 0) {                                                                              // 1324
        this.scope = $scroll_container;                                                                                // 1325
      }                                                                                                                // 1326
                                                                                                                       // 1327
      S(this.scope)                                                                                                    // 1328
        .off('.clearing')                                                                                              // 1329
        .on('click.fndtn.clearing', 'ul[' + this.attr_name() + '] li ' + this.settings.open_selectors,                 // 1330
          function (e, current, target) {                                                                              // 1331
            var current = current || S(this),                                                                          // 1332
                target = target || current,                                                                            // 1333
                next = current.next('li'),                                                                             // 1334
                settings = current.closest('[' + self.attr_name() + ']').data(self.attr_name(true) + '-init'),         // 1335
                image = S(e.target);                                                                                   // 1336
                                                                                                                       // 1337
            e.preventDefault();                                                                                        // 1338
                                                                                                                       // 1339
            if (!settings) {                                                                                           // 1340
              self.init();                                                                                             // 1341
              settings = current.closest('[' + self.attr_name() + ']').data(self.attr_name(true) + '-init');           // 1342
            }                                                                                                          // 1343
                                                                                                                       // 1344
            // if clearing is open and the current image is                                                            // 1345
            // clicked, go to the next image in sequence                                                               // 1346
            if (target.hasClass('visible') &&                                                                          // 1347
              current[0] === target[0] &&                                                                              // 1348
              next.length > 0 && self.is_open(current)) {                                                              // 1349
              target = next;                                                                                           // 1350
              image = S('img', target);                                                                                // 1351
            }                                                                                                          // 1352
                                                                                                                       // 1353
            // set current and target to the clicked li if not otherwise defined.                                      // 1354
            self.open(image, current, target);                                                                         // 1355
            self.update_paddles(target);                                                                               // 1356
          })                                                                                                           // 1357
                                                                                                                       // 1358
        .on('click.fndtn.clearing', '.clearing-main-next',                                                             // 1359
          function (e) { self.nav(e, 'next') })                                                                        // 1360
        .on('click.fndtn.clearing', '.clearing-main-prev',                                                             // 1361
          function (e) { self.nav(e, 'prev') })                                                                        // 1362
        .on('click.fndtn.clearing', this.settings.close_selectors,                                                     // 1363
          function (e) { Foundation.libs.clearing.close(e, this) });                                                   // 1364
                                                                                                                       // 1365
      $(document).on('keydown.fndtn.clearing',                                                                         // 1366
          function (e) { self.keydown(e) });                                                                           // 1367
                                                                                                                       // 1368
      S(window).off('.clearing').on('resize.fndtn.clearing',                                                           // 1369
        function () { self.resize() });                                                                                // 1370
                                                                                                                       // 1371
      this.swipe_events(scope);                                                                                        // 1372
    },                                                                                                                 // 1373
                                                                                                                       // 1374
    swipe_events : function (scope) {                                                                                  // 1375
      var self = this,                                                                                                 // 1376
      S = self.S;                                                                                                      // 1377
                                                                                                                       // 1378
      S(this.scope)                                                                                                    // 1379
        .on('touchstart.fndtn.clearing', '.visible-img', function (e) {                                                // 1380
          if (!e.touches) { e = e.originalEvent; }                                                                     // 1381
          var data = {                                                                                                 // 1382
                start_page_x : e.touches[0].pageX,                                                                     // 1383
                start_page_y : e.touches[0].pageY,                                                                     // 1384
                start_time : (new Date()).getTime(),                                                                   // 1385
                delta_x : 0,                                                                                           // 1386
                is_scrolling : undefined                                                                               // 1387
              };                                                                                                       // 1388
                                                                                                                       // 1389
          S(this).data('swipe-transition', data);                                                                      // 1390
          e.stopPropagation();                                                                                         // 1391
        })                                                                                                             // 1392
        .on('touchmove.fndtn.clearing', '.visible-img', function (e) {                                                 // 1393
          if (!e.touches) {                                                                                            // 1394
            e = e.originalEvent;                                                                                       // 1395
          }                                                                                                            // 1396
          // Ignore pinch/zoom events                                                                                  // 1397
          if (e.touches.length > 1 || e.scale && e.scale !== 1) {                                                      // 1398
            return;                                                                                                    // 1399
          }                                                                                                            // 1400
                                                                                                                       // 1401
          var data = S(this).data('swipe-transition');                                                                 // 1402
                                                                                                                       // 1403
          if (typeof data === 'undefined') {                                                                           // 1404
            data = {};                                                                                                 // 1405
          }                                                                                                            // 1406
                                                                                                                       // 1407
          data.delta_x = e.touches[0].pageX - data.start_page_x;                                                       // 1408
                                                                                                                       // 1409
          if (Foundation.rtl) {                                                                                        // 1410
            data.delta_x = -data.delta_x;                                                                              // 1411
          }                                                                                                            // 1412
                                                                                                                       // 1413
          if (typeof data.is_scrolling === 'undefined') {                                                              // 1414
            data.is_scrolling = !!( data.is_scrolling || Math.abs(data.delta_x) < Math.abs(e.touches[0].pageY - data.start_page_y) );
          }                                                                                                            // 1416
                                                                                                                       // 1417
          if (!data.is_scrolling && !data.active) {                                                                    // 1418
            e.preventDefault();                                                                                        // 1419
            var direction = (data.delta_x < 0) ? 'next' : 'prev';                                                      // 1420
            data.active = true;                                                                                        // 1421
            self.nav(e, direction);                                                                                    // 1422
          }                                                                                                            // 1423
        })                                                                                                             // 1424
        .on('touchend.fndtn.clearing', '.visible-img', function (e) {                                                  // 1425
          S(this).data('swipe-transition', {});                                                                        // 1426
          e.stopPropagation();                                                                                         // 1427
        });                                                                                                            // 1428
    },                                                                                                                 // 1429
                                                                                                                       // 1430
    assemble : function ($li) {                                                                                        // 1431
      var $el = $li.parent();                                                                                          // 1432
                                                                                                                       // 1433
      if ($el.parent().hasClass('carousel')) {                                                                         // 1434
        return;                                                                                                        // 1435
      }                                                                                                                // 1436
                                                                                                                       // 1437
      $el.after('<div id="foundationClearingHolder"></div>');                                                          // 1438
                                                                                                                       // 1439
      var grid = $el.detach(),                                                                                         // 1440
          grid_outerHTML = '';                                                                                         // 1441
                                                                                                                       // 1442
      if (grid[0] == null) {                                                                                           // 1443
        return;                                                                                                        // 1444
      } else {                                                                                                         // 1445
        grid_outerHTML = grid[0].outerHTML;                                                                            // 1446
      }                                                                                                                // 1447
                                                                                                                       // 1448
      var holder = this.S('#foundationClearingHolder'),                                                                // 1449
          settings = $el.data(this.attr_name(true) + '-init'),                                                         // 1450
          data = {                                                                                                     // 1451
            grid : '<div class="carousel">' + grid_outerHTML + '</div>',                                               // 1452
            viewing : settings.templates.viewing                                                                       // 1453
          },                                                                                                           // 1454
          wrapper = '<div class="clearing-assembled"><div>' + data.viewing +                                           // 1455
            data.grid + '</div></div>',                                                                                // 1456
          touch_label = this.settings.touch_label;                                                                     // 1457
                                                                                                                       // 1458
      if (Modernizr.touch) {                                                                                           // 1459
        wrapper = $(wrapper).find('.clearing-touch-label').html(touch_label).end();                                    // 1460
      }                                                                                                                // 1461
                                                                                                                       // 1462
      holder.after(wrapper).remove();                                                                                  // 1463
    },                                                                                                                 // 1464
                                                                                                                       // 1465
    open : function ($image, current, target) {                                                                        // 1466
      var self = this,                                                                                                 // 1467
          body = $(document.body),                                                                                     // 1468
          root = target.closest('.clearing-assembled'),                                                                // 1469
          container = self.S('div', root).first(),                                                                     // 1470
          visible_image = self.S('.visible-img', container),                                                           // 1471
          image = self.S('img', visible_image).not($image),                                                            // 1472
          label = self.S('.clearing-touch-label', container),                                                          // 1473
          error = false,                                                                                               // 1474
          loaded = {};                                                                                                 // 1475
                                                                                                                       // 1476
      // Event to disable scrolling on touch devices when Clearing is activated                                        // 1477
      $('body').on('touchmove', function (e) {                                                                         // 1478
        e.preventDefault();                                                                                            // 1479
      });                                                                                                              // 1480
                                                                                                                       // 1481
      image.error(function () {                                                                                        // 1482
        error = true;                                                                                                  // 1483
      });                                                                                                              // 1484
                                                                                                                       // 1485
      function startLoad() {                                                                                           // 1486
        setTimeout(function () {                                                                                       // 1487
          this.image_loaded(image, function () {                                                                       // 1488
            if (image.outerWidth() === 1 && !error) {                                                                  // 1489
              startLoad.call(this);                                                                                    // 1490
            } else {                                                                                                   // 1491
              cb.call(this, image);                                                                                    // 1492
            }                                                                                                          // 1493
          }.bind(this));                                                                                               // 1494
        }.bind(this), 100);                                                                                            // 1495
      }                                                                                                                // 1496
                                                                                                                       // 1497
      function cb (image) {                                                                                            // 1498
        var $image = $(image);                                                                                         // 1499
        $image.css('visibility', 'visible');                                                                           // 1500
        $image.trigger('imageVisible');                                                                                // 1501
        // toggle the gallery                                                                                          // 1502
        body.css('overflow', 'hidden');                                                                                // 1503
        root.addClass('clearing-blackout');                                                                            // 1504
        container.addClass('clearing-container');                                                                      // 1505
        visible_image.show();                                                                                          // 1506
        this.fix_height(target)                                                                                        // 1507
          .caption(self.S('.clearing-caption', visible_image), self.S('img', target))                                  // 1508
          .center_and_label(image, label)                                                                              // 1509
          .shift(current, target, function () {                                                                        // 1510
            target.closest('li').siblings().removeClass('visible');                                                    // 1511
            target.closest('li').addClass('visible');                                                                  // 1512
          });                                                                                                          // 1513
        visible_image.trigger('opened.fndtn.clearing')                                                                 // 1514
      }                                                                                                                // 1515
                                                                                                                       // 1516
      if (!this.locked()) {                                                                                            // 1517
        visible_image.trigger('open.fndtn.clearing');                                                                  // 1518
        // set the image to the selected thumbnail                                                                     // 1519
        loaded = this.load($image);                                                                                    // 1520
        if (loaded.interchange) {                                                                                      // 1521
          image                                                                                                        // 1522
            .attr('data-interchange', loaded.interchange)                                                              // 1523
            .foundation('interchange', 'reflow');                                                                      // 1524
        } else {                                                                                                       // 1525
          image                                                                                                        // 1526
            .attr('src', loaded.src)                                                                                   // 1527
            .attr('data-interchange', '');                                                                             // 1528
        }                                                                                                              // 1529
        image.css('visibility', 'hidden');                                                                             // 1530
                                                                                                                       // 1531
        startLoad.call(this);                                                                                          // 1532
      }                                                                                                                // 1533
    },                                                                                                                 // 1534
                                                                                                                       // 1535
    close : function (e, el) {                                                                                         // 1536
      e.preventDefault();                                                                                              // 1537
                                                                                                                       // 1538
      var root = (function (target) {                                                                                  // 1539
            if (/blackout/.test(target.selector)) {                                                                    // 1540
              return target;                                                                                           // 1541
            } else {                                                                                                   // 1542
              return target.closest('.clearing-blackout');                                                             // 1543
            }                                                                                                          // 1544
          }($(el))),                                                                                                   // 1545
          body = $(document.body), container, visible_image;                                                           // 1546
                                                                                                                       // 1547
      if (el === e.target && root) {                                                                                   // 1548
        body.css('overflow', '');                                                                                      // 1549
        container = $('div', root).first();                                                                            // 1550
        visible_image = $('.visible-img', container);                                                                  // 1551
        visible_image.trigger('close.fndtn.clearing');                                                                 // 1552
        this.settings.prev_index = 0;                                                                                  // 1553
        $('ul[' + this.attr_name() + ']', root)                                                                        // 1554
          .attr('style', '').closest('.clearing-blackout')                                                             // 1555
          .removeClass('clearing-blackout');                                                                           // 1556
        container.removeClass('clearing-container');                                                                   // 1557
        visible_image.hide();                                                                                          // 1558
        visible_image.trigger('closed.fndtn.clearing');                                                                // 1559
      }                                                                                                                // 1560
                                                                                                                       // 1561
      // Event to re-enable scrolling on touch devices                                                                 // 1562
      $('body').off('touchmove');                                                                                      // 1563
                                                                                                                       // 1564
      return false;                                                                                                    // 1565
    },                                                                                                                 // 1566
                                                                                                                       // 1567
    is_open : function (current) {                                                                                     // 1568
      return current.parent().prop('style').length > 0;                                                                // 1569
    },                                                                                                                 // 1570
                                                                                                                       // 1571
    keydown : function (e) {                                                                                           // 1572
      var clearing = $('.clearing-blackout ul[' + this.attr_name() + ']'),                                             // 1573
          NEXT_KEY = this.rtl ? 37 : 39,                                                                               // 1574
          PREV_KEY = this.rtl ? 39 : 37,                                                                               // 1575
          ESC_KEY = 27;                                                                                                // 1576
                                                                                                                       // 1577
      if (e.which === NEXT_KEY) {                                                                                      // 1578
        this.go(clearing, 'next');                                                                                     // 1579
      }                                                                                                                // 1580
      if (e.which === PREV_KEY) {                                                                                      // 1581
        this.go(clearing, 'prev');                                                                                     // 1582
      }                                                                                                                // 1583
      if (e.which === ESC_KEY) {                                                                                       // 1584
        this.S('a.clearing-close').trigger('click.fndtn.clearing');                                                    // 1585
      }                                                                                                                // 1586
    },                                                                                                                 // 1587
                                                                                                                       // 1588
    nav : function (e, direction) {                                                                                    // 1589
      var clearing = $('ul[' + this.attr_name() + ']', '.clearing-blackout');                                          // 1590
                                                                                                                       // 1591
      e.preventDefault();                                                                                              // 1592
      this.go(clearing, direction);                                                                                    // 1593
    },                                                                                                                 // 1594
                                                                                                                       // 1595
    resize : function () {                                                                                             // 1596
      var image = $('img', '.clearing-blackout .visible-img'),                                                         // 1597
          label = $('.clearing-touch-label', '.clearing-blackout');                                                    // 1598
                                                                                                                       // 1599
      if (image.length) {                                                                                              // 1600
        this.center_and_label(image, label);                                                                           // 1601
        image.trigger('resized.fndtn.clearing')                                                                        // 1602
      }                                                                                                                // 1603
    },                                                                                                                 // 1604
                                                                                                                       // 1605
    // visual adjustments                                                                                              // 1606
    fix_height : function (target) {                                                                                   // 1607
      var lis = target.parent().children(),                                                                            // 1608
          self = this;                                                                                                 // 1609
                                                                                                                       // 1610
      lis.each(function () {                                                                                           // 1611
        var li = self.S(this),                                                                                         // 1612
            image = li.find('img');                                                                                    // 1613
                                                                                                                       // 1614
        if (li.height() > image.outerHeight()) {                                                                       // 1615
          li.addClass('fix-height');                                                                                   // 1616
        }                                                                                                              // 1617
      })                                                                                                               // 1618
      .closest('ul')                                                                                                   // 1619
      .width(lis.length * 100 + '%');                                                                                  // 1620
                                                                                                                       // 1621
      return this;                                                                                                     // 1622
    },                                                                                                                 // 1623
                                                                                                                       // 1624
    update_paddles : function (target) {                                                                               // 1625
      target = target.closest('li');                                                                                   // 1626
      var visible_image = target                                                                                       // 1627
        .closest('.carousel')                                                                                          // 1628
        .siblings('.visible-img');                                                                                     // 1629
                                                                                                                       // 1630
      if (target.next().length > 0) {                                                                                  // 1631
        this.S('.clearing-main-next', visible_image).removeClass('disabled');                                          // 1632
      } else {                                                                                                         // 1633
        this.S('.clearing-main-next', visible_image).addClass('disabled');                                             // 1634
      }                                                                                                                // 1635
                                                                                                                       // 1636
      if (target.prev().length > 0) {                                                                                  // 1637
        this.S('.clearing-main-prev', visible_image).removeClass('disabled');                                          // 1638
      } else {                                                                                                         // 1639
        this.S('.clearing-main-prev', visible_image).addClass('disabled');                                             // 1640
      }                                                                                                                // 1641
    },                                                                                                                 // 1642
                                                                                                                       // 1643
    center_and_label : function (target, label) {                                                                      // 1644
      if (!this.rtl && label.length > 0) {                                                                             // 1645
        label.css({                                                                                                    // 1646
          marginLeft : -(label.outerWidth() / 2),                                                                      // 1647
          marginTop : -(target.outerHeight() / 2)-label.outerHeight()-10                                               // 1648
        });                                                                                                            // 1649
      } else {                                                                                                         // 1650
        label.css({                                                                                                    // 1651
          marginRight : -(label.outerWidth() / 2),                                                                     // 1652
          marginTop : -(target.outerHeight() / 2)-label.outerHeight()-10,                                              // 1653
          left: 'auto',                                                                                                // 1654
          right: '50%'                                                                                                 // 1655
        });                                                                                                            // 1656
      }                                                                                                                // 1657
      return this;                                                                                                     // 1658
    },                                                                                                                 // 1659
                                                                                                                       // 1660
    // image loading and preloading                                                                                    // 1661
                                                                                                                       // 1662
    load : function ($image) {                                                                                         // 1663
      var href,                                                                                                        // 1664
          interchange,                                                                                                 // 1665
          closest_a;                                                                                                   // 1666
                                                                                                                       // 1667
      if ($image[0].nodeName === 'A') {                                                                                // 1668
        href = $image.attr('href');                                                                                    // 1669
        interchange = $image.data('clearing-interchange');                                                             // 1670
      } else {                                                                                                         // 1671
        closest_a = $image.closest('a');                                                                               // 1672
        href = closest_a.attr('href');                                                                                 // 1673
        interchange = closest_a.data('clearing-interchange');                                                          // 1674
      }                                                                                                                // 1675
                                                                                                                       // 1676
      this.preload($image);                                                                                            // 1677
                                                                                                                       // 1678
      return {                                                                                                         // 1679
        'src': href ? href : $image.attr('src'),                                                                       // 1680
        'interchange': href ? interchange : $image.data('clearing-interchange')                                        // 1681
      }                                                                                                                // 1682
    },                                                                                                                 // 1683
                                                                                                                       // 1684
    preload : function ($image) {                                                                                      // 1685
      this                                                                                                             // 1686
        .img($image.closest('li').next(), 'next')                                                                      // 1687
        .img($image.closest('li').prev(), 'prev');                                                                     // 1688
    },                                                                                                                 // 1689
                                                                                                                       // 1690
    img : function (img, sibling_type) {                                                                               // 1691
      if (img.length) {                                                                                                // 1692
        var preload_img = $('.clearing-preload-' + sibling_type),                                                      // 1693
            new_a = this.S('a', img),                                                                                  // 1694
            src,                                                                                                       // 1695
            interchange,                                                                                               // 1696
            image;                                                                                                     // 1697
                                                                                                                       // 1698
        if (new_a.length) {                                                                                            // 1699
          src = new_a.attr('href');                                                                                    // 1700
          interchange = new_a.data('clearing-interchange');                                                            // 1701
        } else {                                                                                                       // 1702
          image = this.S('img', img);                                                                                  // 1703
          src = image.attr('src');                                                                                     // 1704
          interchange = image.data('clearing-interchange');                                                            // 1705
        }                                                                                                              // 1706
                                                                                                                       // 1707
        if (interchange) {                                                                                             // 1708
          preload_img.attr('data-interchange', interchange);                                                           // 1709
        } else {                                                                                                       // 1710
          preload_img.attr('src', src);                                                                                // 1711
          preload_img.attr('data-interchange', '');                                                                    // 1712
        }                                                                                                              // 1713
      }                                                                                                                // 1714
      return this;                                                                                                     // 1715
    },                                                                                                                 // 1716
                                                                                                                       // 1717
    // image caption                                                                                                   // 1718
                                                                                                                       // 1719
    caption : function (container, $image) {                                                                           // 1720
      var caption = $image.attr('data-caption');                                                                       // 1721
                                                                                                                       // 1722
      if (caption) {                                                                                                   // 1723
        container                                                                                                      // 1724
          .html(caption)                                                                                               // 1725
          .show();                                                                                                     // 1726
      } else {                                                                                                         // 1727
        container                                                                                                      // 1728
          .text('')                                                                                                    // 1729
          .hide();                                                                                                     // 1730
      }                                                                                                                // 1731
      return this;                                                                                                     // 1732
    },                                                                                                                 // 1733
                                                                                                                       // 1734
    // directional methods                                                                                             // 1735
                                                                                                                       // 1736
    go : function ($ul, direction) {                                                                                   // 1737
      var current = this.S('.visible', $ul),                                                                           // 1738
          target = current[direction]();                                                                               // 1739
                                                                                                                       // 1740
      // Check for skip selector.                                                                                      // 1741
      if (this.settings.skip_selector && target.find(this.settings.skip_selector).length != 0) {                       // 1742
        target = target[direction]();                                                                                  // 1743
      }                                                                                                                // 1744
                                                                                                                       // 1745
      if (target.length) {                                                                                             // 1746
        this.S('img', target)                                                                                          // 1747
          .trigger('click.fndtn.clearing', [current, target])                                                          // 1748
          .trigger('change.fndtn.clearing');                                                                           // 1749
      }                                                                                                                // 1750
    },                                                                                                                 // 1751
                                                                                                                       // 1752
    shift : function (current, target, callback) {                                                                     // 1753
      var clearing = target.parent(),                                                                                  // 1754
          old_index = this.settings.prev_index || target.index(),                                                      // 1755
          direction = this.direction(clearing, current, target),                                                       // 1756
          dir = this.rtl ? 'right' : 'left',                                                                           // 1757
          left = parseInt(clearing.css('left'), 10),                                                                   // 1758
          width = target.outerWidth(),                                                                                 // 1759
          skip_shift;                                                                                                  // 1760
                                                                                                                       // 1761
      var dir_obj = {};                                                                                                // 1762
                                                                                                                       // 1763
      // we use jQuery animate instead of CSS transitions because we                                                   // 1764
      // need a callback to unlock the next animation                                                                  // 1765
      // needs support for RTL **                                                                                      // 1766
      if (target.index() !== old_index && !/skip/.test(direction)) {                                                   // 1767
        if (/left/.test(direction)) {                                                                                  // 1768
          this.lock();                                                                                                 // 1769
          dir_obj[dir] = left + width;                                                                                 // 1770
          clearing.animate(dir_obj, 300, this.unlock());                                                               // 1771
        } else if (/right/.test(direction)) {                                                                          // 1772
          this.lock();                                                                                                 // 1773
          dir_obj[dir] = left - width;                                                                                 // 1774
          clearing.animate(dir_obj, 300, this.unlock());                                                               // 1775
        }                                                                                                              // 1776
      } else if (/skip/.test(direction)) {                                                                             // 1777
        // the target image is not adjacent to the current image, so                                                   // 1778
        // do we scroll right or not                                                                                   // 1779
        skip_shift = target.index() - this.settings.up_count;                                                          // 1780
        this.lock();                                                                                                   // 1781
                                                                                                                       // 1782
        if (skip_shift > 0) {                                                                                          // 1783
          dir_obj[dir] = -(skip_shift * width);                                                                        // 1784
          clearing.animate(dir_obj, 300, this.unlock());                                                               // 1785
        } else {                                                                                                       // 1786
          dir_obj[dir] = 0;                                                                                            // 1787
          clearing.animate(dir_obj, 300, this.unlock());                                                               // 1788
        }                                                                                                              // 1789
      }                                                                                                                // 1790
                                                                                                                       // 1791
      callback();                                                                                                      // 1792
    },                                                                                                                 // 1793
                                                                                                                       // 1794
    direction : function ($el, current, target) {                                                                      // 1795
      var lis = this.S('li', $el),                                                                                     // 1796
          li_width = lis.outerWidth() + (lis.outerWidth() / 4),                                                        // 1797
          up_count = Math.floor(this.S('.clearing-container').outerWidth() / li_width) - 1,                            // 1798
          target_index = lis.index(target),                                                                            // 1799
          response;                                                                                                    // 1800
                                                                                                                       // 1801
      this.settings.up_count = up_count;                                                                               // 1802
                                                                                                                       // 1803
      if (this.adjacent(this.settings.prev_index, target_index)) {                                                     // 1804
        if ((target_index > up_count) && target_index > this.settings.prev_index) {                                    // 1805
          response = 'right';                                                                                          // 1806
        } else if ((target_index > up_count - 1) && target_index <= this.settings.prev_index) {                        // 1807
          response = 'left';                                                                                           // 1808
        } else {                                                                                                       // 1809
          response = false;                                                                                            // 1810
        }                                                                                                              // 1811
      } else {                                                                                                         // 1812
        response = 'skip';                                                                                             // 1813
      }                                                                                                                // 1814
                                                                                                                       // 1815
      this.settings.prev_index = target_index;                                                                         // 1816
                                                                                                                       // 1817
      return response;                                                                                                 // 1818
    },                                                                                                                 // 1819
                                                                                                                       // 1820
    adjacent : function (current_index, target_index) {                                                                // 1821
      for (var i = target_index + 1; i >= target_index - 1; i--) {                                                     // 1822
        if (i === current_index) {                                                                                     // 1823
          return true;                                                                                                 // 1824
        }                                                                                                              // 1825
      }                                                                                                                // 1826
      return false;                                                                                                    // 1827
    },                                                                                                                 // 1828
                                                                                                                       // 1829
    // lock management                                                                                                 // 1830
                                                                                                                       // 1831
    lock : function () {                                                                                               // 1832
      this.settings.locked = true;                                                                                     // 1833
    },                                                                                                                 // 1834
                                                                                                                       // 1835
    unlock : function () {                                                                                             // 1836
      this.settings.locked = false;                                                                                    // 1837
    },                                                                                                                 // 1838
                                                                                                                       // 1839
    locked : function () {                                                                                             // 1840
      return this.settings.locked;                                                                                     // 1841
    },                                                                                                                 // 1842
                                                                                                                       // 1843
    off : function () {                                                                                                // 1844
      this.S(this.scope).off('.fndtn.clearing');                                                                       // 1845
      this.S(window).off('.fndtn.clearing');                                                                           // 1846
    },                                                                                                                 // 1847
                                                                                                                       // 1848
    reflow : function () {                                                                                             // 1849
      this.init();                                                                                                     // 1850
    }                                                                                                                  // 1851
  };                                                                                                                   // 1852
                                                                                                                       // 1853
}(jQuery, window, window.document));                                                                                   // 1854
                                                                                                                       // 1855
;(function ($, window, document, undefined) {                                                                          // 1856
  'use strict';                                                                                                        // 1857
                                                                                                                       // 1858
  Foundation.libs.dropdown = {                                                                                         // 1859
    name : 'dropdown',                                                                                                 // 1860
                                                                                                                       // 1861
    version : '5.5.2',                                                                                                 // 1862
                                                                                                                       // 1863
    settings : {                                                                                                       // 1864
      active_class : 'open',                                                                                           // 1865
      disabled_class : 'disabled',                                                                                     // 1866
      mega_class : 'mega',                                                                                             // 1867
      align : 'bottom',                                                                                                // 1868
      is_hover : false,                                                                                                // 1869
      hover_timeout : 150,                                                                                             // 1870
      opened : function () {},                                                                                         // 1871
      closed : function () {}                                                                                          // 1872
    },                                                                                                                 // 1873
                                                                                                                       // 1874
    init : function (scope, method, options) {                                                                         // 1875
      Foundation.inherit(this, 'throttle');                                                                            // 1876
                                                                                                                       // 1877
      $.extend(true, this.settings, method, options);                                                                  // 1878
      this.bindings(method, options);                                                                                  // 1879
    },                                                                                                                 // 1880
                                                                                                                       // 1881
    events : function (scope) {                                                                                        // 1882
      var self = this,                                                                                                 // 1883
          S = self.S;                                                                                                  // 1884
                                                                                                                       // 1885
      S(this.scope)                                                                                                    // 1886
        .off('.dropdown')                                                                                              // 1887
        .on('click.fndtn.dropdown', '[' + this.attr_name() + ']', function (e) {                                       // 1888
          var settings = S(this).data(self.attr_name(true) + '-init') || self.settings;                                // 1889
          if (!settings.is_hover || Modernizr.touch) {                                                                 // 1890
            e.preventDefault();                                                                                        // 1891
            if (S(this).parent('[data-reveal-id]').length) {                                                           // 1892
              e.stopPropagation();                                                                                     // 1893
            }                                                                                                          // 1894
            self.toggle($(this));                                                                                      // 1895
          }                                                                                                            // 1896
        })                                                                                                             // 1897
        .on('mouseenter.fndtn.dropdown', '[' + this.attr_name() + '], [' + this.attr_name() + '-content]', function (e) {
          var $this = S(this),                                                                                         // 1899
              dropdown,                                                                                                // 1900
              target;                                                                                                  // 1901
                                                                                                                       // 1902
          clearTimeout(self.timeout);                                                                                  // 1903
                                                                                                                       // 1904
          if ($this.data(self.data_attr())) {                                                                          // 1905
            dropdown = S('#' + $this.data(self.data_attr()));                                                          // 1906
            target = $this;                                                                                            // 1907
          } else {                                                                                                     // 1908
            dropdown = $this;                                                                                          // 1909
            target = S('[' + self.attr_name() + '="' + dropdown.attr('id') + '"]');                                    // 1910
          }                                                                                                            // 1911
                                                                                                                       // 1912
          var settings = target.data(self.attr_name(true) + '-init') || self.settings;                                 // 1913
                                                                                                                       // 1914
          if (S(e.currentTarget).data(self.data_attr()) && settings.is_hover) {                                        // 1915
            self.closeall.call(self);                                                                                  // 1916
          }                                                                                                            // 1917
                                                                                                                       // 1918
          if (settings.is_hover) {                                                                                     // 1919
            self.open.apply(self, [dropdown, target]);                                                                 // 1920
          }                                                                                                            // 1921
        })                                                                                                             // 1922
        .on('mouseleave.fndtn.dropdown', '[' + this.attr_name() + '], [' + this.attr_name() + '-content]', function (e) {
          var $this = S(this);                                                                                         // 1924
          var settings;                                                                                                // 1925
                                                                                                                       // 1926
          if ($this.data(self.data_attr())) {                                                                          // 1927
              settings = $this.data(self.data_attr(true) + '-init') || self.settings;                                  // 1928
          } else {                                                                                                     // 1929
              var target   = S('[' + self.attr_name() + '="' + S(this).attr('id') + '"]'),                             // 1930
                  settings = target.data(self.attr_name(true) + '-init') || self.settings;                             // 1931
          }                                                                                                            // 1932
                                                                                                                       // 1933
          self.timeout = setTimeout(function () {                                                                      // 1934
            if ($this.data(self.data_attr())) {                                                                        // 1935
              if (settings.is_hover) {                                                                                 // 1936
                self.close.call(self, S('#' + $this.data(self.data_attr())));                                          // 1937
              }                                                                                                        // 1938
            } else {                                                                                                   // 1939
              if (settings.is_hover) {                                                                                 // 1940
                self.close.call(self, $this);                                                                          // 1941
              }                                                                                                        // 1942
            }                                                                                                          // 1943
          }.bind(this), settings.hover_timeout);                                                                       // 1944
        })                                                                                                             // 1945
        .on('click.fndtn.dropdown', function (e) {                                                                     // 1946
          var parent = S(e.target).closest('[' + self.attr_name() + '-content]');                                      // 1947
          var links  = parent.find('a');                                                                               // 1948
                                                                                                                       // 1949
          if (links.length > 0 && parent.attr('aria-autoclose') !== 'false') {                                         // 1950
              self.close.call(self, S('[' + self.attr_name() + '-content]'));                                          // 1951
          }                                                                                                            // 1952
                                                                                                                       // 1953
          if (e.target !== document && !$.contains(document.documentElement, e.target)) {                              // 1954
            return;                                                                                                    // 1955
          }                                                                                                            // 1956
                                                                                                                       // 1957
          if (S(e.target).closest('[' + self.attr_name() + ']').length > 0) {                                          // 1958
            return;                                                                                                    // 1959
          }                                                                                                            // 1960
                                                                                                                       // 1961
          if (!(S(e.target).data('revealId')) &&                                                                       // 1962
            (parent.length > 0 && (S(e.target).is('[' + self.attr_name() + '-content]') ||                             // 1963
              $.contains(parent.first()[0], e.target)))) {                                                             // 1964
            e.stopPropagation();                                                                                       // 1965
            return;                                                                                                    // 1966
          }                                                                                                            // 1967
                                                                                                                       // 1968
          self.close.call(self, S('[' + self.attr_name() + '-content]'));                                              // 1969
        })                                                                                                             // 1970
        .on('opened.fndtn.dropdown', '[' + self.attr_name() + '-content]', function () {                               // 1971
          self.settings.opened.call(this);                                                                             // 1972
        })                                                                                                             // 1973
        .on('closed.fndtn.dropdown', '[' + self.attr_name() + '-content]', function () {                               // 1974
          self.settings.closed.call(this);                                                                             // 1975
        });                                                                                                            // 1976
                                                                                                                       // 1977
      S(window)                                                                                                        // 1978
        .off('.dropdown')                                                                                              // 1979
        .on('resize.fndtn.dropdown', self.throttle(function () {                                                       // 1980
          self.resize.call(self);                                                                                      // 1981
        }, 50));                                                                                                       // 1982
                                                                                                                       // 1983
      this.resize();                                                                                                   // 1984
    },                                                                                                                 // 1985
                                                                                                                       // 1986
    close : function (dropdown) {                                                                                      // 1987
      var self = this;                                                                                                 // 1988
      dropdown.each(function (idx) {                                                                                   // 1989
        var original_target = $('[' + self.attr_name() + '=' + dropdown[idx].id + ']') || $('aria-controls=' + dropdown[idx].id + ']');
        original_target.attr('aria-expanded', 'false');                                                                // 1991
        if (self.S(this).hasClass(self.settings.active_class)) {                                                       // 1992
          self.S(this)                                                                                                 // 1993
            .css(Foundation.rtl ? 'right' : 'left', '-99999px')                                                        // 1994
            .attr('aria-hidden', 'true')                                                                               // 1995
            .removeClass(self.settings.active_class)                                                                   // 1996
            .prev('[' + self.attr_name() + ']')                                                                        // 1997
            .removeClass(self.settings.active_class)                                                                   // 1998
            .removeData('target');                                                                                     // 1999
                                                                                                                       // 2000
          self.S(this).trigger('closed.fndtn.dropdown', [dropdown]);                                                   // 2001
        }                                                                                                              // 2002
      });                                                                                                              // 2003
      dropdown.removeClass('f-open-' + this.attr_name(true));                                                          // 2004
    },                                                                                                                 // 2005
                                                                                                                       // 2006
    closeall : function () {                                                                                           // 2007
      var self = this;                                                                                                 // 2008
      $.each(self.S('.f-open-' + this.attr_name(true)), function () {                                                  // 2009
        self.close.call(self, self.S(this));                                                                           // 2010
      });                                                                                                              // 2011
    },                                                                                                                 // 2012
                                                                                                                       // 2013
    open : function (dropdown, target) {                                                                               // 2014
      this                                                                                                             // 2015
        .css(dropdown                                                                                                  // 2016
        .addClass(this.settings.active_class), target);                                                                // 2017
      dropdown.prev('[' + this.attr_name() + ']').addClass(this.settings.active_class);                                // 2018
      dropdown.data('target', target.get(0)).trigger('opened.fndtn.dropdown', [dropdown, target]);                     // 2019
      dropdown.attr('aria-hidden', 'false');                                                                           // 2020
      target.attr('aria-expanded', 'true');                                                                            // 2021
      dropdown.focus();                                                                                                // 2022
      dropdown.addClass('f-open-' + this.attr_name(true));                                                             // 2023
    },                                                                                                                 // 2024
                                                                                                                       // 2025
    data_attr : function () {                                                                                          // 2026
      if (this.namespace.length > 0) {                                                                                 // 2027
        return this.namespace + '-' + this.name;                                                                       // 2028
      }                                                                                                                // 2029
                                                                                                                       // 2030
      return this.name;                                                                                                // 2031
    },                                                                                                                 // 2032
                                                                                                                       // 2033
    toggle : function (target) {                                                                                       // 2034
      if (target.hasClass(this.settings.disabled_class)) {                                                             // 2035
        return;                                                                                                        // 2036
      }                                                                                                                // 2037
      var dropdown = this.S('#' + target.data(this.data_attr()));                                                      // 2038
      if (dropdown.length === 0) {                                                                                     // 2039
        // No dropdown found, not continuing                                                                           // 2040
        return;                                                                                                        // 2041
      }                                                                                                                // 2042
                                                                                                                       // 2043
      this.close.call(this, this.S('[' + this.attr_name() + '-content]').not(dropdown));                               // 2044
                                                                                                                       // 2045
      if (dropdown.hasClass(this.settings.active_class)) {                                                             // 2046
        this.close.call(this, dropdown);                                                                               // 2047
        if (dropdown.data('target') !== target.get(0)) {                                                               // 2048
          this.open.call(this, dropdown, target);                                                                      // 2049
        }                                                                                                              // 2050
      } else {                                                                                                         // 2051
        this.open.call(this, dropdown, target);                                                                        // 2052
      }                                                                                                                // 2053
    },                                                                                                                 // 2054
                                                                                                                       // 2055
    resize : function () {                                                                                             // 2056
      var dropdown = this.S('[' + this.attr_name() + '-content].open');                                                // 2057
      var target = $(dropdown.data("target"));                                                                         // 2058
                                                                                                                       // 2059
      if (dropdown.length && target.length) {                                                                          // 2060
        this.css(dropdown, target);                                                                                    // 2061
      }                                                                                                                // 2062
    },                                                                                                                 // 2063
                                                                                                                       // 2064
    css : function (dropdown, target) {                                                                                // 2065
      var left_offset = Math.max((target.width() - dropdown.width()) / 2, 8),                                          // 2066
          settings = target.data(this.attr_name(true) + '-init') || this.settings,                                     // 2067
          parentOverflow = dropdown.parent().css('overflow-y') || dropdown.parent().css('overflow');                   // 2068
                                                                                                                       // 2069
      this.clear_idx();                                                                                                // 2070
                                                                                                                       // 2071
                                                                                                                       // 2072
                                                                                                                       // 2073
      if (this.small()) {                                                                                              // 2074
        var p = this.dirs.bottom.call(dropdown, target, settings);                                                     // 2075
                                                                                                                       // 2076
        dropdown.attr('style', '').removeClass('drop-left drop-right drop-top').css({                                  // 2077
          position : 'absolute',                                                                                       // 2078
          width : '95%',                                                                                               // 2079
          'max-width' : 'none',                                                                                        // 2080
          top : p.top                                                                                                  // 2081
        });                                                                                                            // 2082
                                                                                                                       // 2083
        dropdown.css(Foundation.rtl ? 'right' : 'left', left_offset);                                                  // 2084
      }                                                                                                                // 2085
      // detect if dropdown is in an overflow container                                                                // 2086
      else if (parentOverflow !== 'visible') {                                                                         // 2087
        var offset = target[0].offsetTop + target[0].offsetHeight;                                                     // 2088
                                                                                                                       // 2089
        dropdown.attr('style', '').css({                                                                               // 2090
          position : 'absolute',                                                                                       // 2091
          top : offset                                                                                                 // 2092
        });                                                                                                            // 2093
                                                                                                                       // 2094
        dropdown.css(Foundation.rtl ? 'right' : 'left', left_offset);                                                  // 2095
      }                                                                                                                // 2096
      else {                                                                                                           // 2097
                                                                                                                       // 2098
        this.style(dropdown, target, settings);                                                                        // 2099
      }                                                                                                                // 2100
                                                                                                                       // 2101
      return dropdown;                                                                                                 // 2102
    },                                                                                                                 // 2103
                                                                                                                       // 2104
    style : function (dropdown, target, settings) {                                                                    // 2105
      var css = $.extend({position : 'absolute'},                                                                      // 2106
        this.dirs[settings.align].call(dropdown, target, settings));                                                   // 2107
                                                                                                                       // 2108
      dropdown.attr('style', '').css(css);                                                                             // 2109
    },                                                                                                                 // 2110
                                                                                                                       // 2111
    // return CSS property object                                                                                      // 2112
    // `this` is the dropdown                                                                                          // 2113
    dirs : {                                                                                                           // 2114
      // Calculate target offset                                                                                       // 2115
      _base : function (t) {                                                                                           // 2116
        var o_p = this.offsetParent(),                                                                                 // 2117
            o = o_p.offset(),                                                                                          // 2118
            p = t.offset();                                                                                            // 2119
                                                                                                                       // 2120
        p.top -= o.top;                                                                                                // 2121
        p.left -= o.left;                                                                                              // 2122
                                                                                                                       // 2123
        //set some flags on the p object to pass along                                                                 // 2124
        p.missRight = false;                                                                                           // 2125
        p.missTop = false;                                                                                             // 2126
        p.missLeft = false;                                                                                            // 2127
        p.leftRightFlag = false;                                                                                       // 2128
                                                                                                                       // 2129
        //lets see if the panel will be off the screen                                                                 // 2130
        //get the actual width of the page and store it                                                                // 2131
        var actualBodyWidth;                                                                                           // 2132
        if (document.getElementsByClassName('row')[0]) {                                                               // 2133
          actualBodyWidth = document.getElementsByClassName('row')[0].clientWidth;                                     // 2134
        } else {                                                                                                       // 2135
          actualBodyWidth = window.innerWidth;                                                                         // 2136
        }                                                                                                              // 2137
                                                                                                                       // 2138
        var actualMarginWidth = (window.innerWidth - actualBodyWidth) / 2;                                             // 2139
        var actualBoundary = actualBodyWidth;                                                                          // 2140
                                                                                                                       // 2141
        if (!this.hasClass('mega')) {                                                                                  // 2142
          //miss top                                                                                                   // 2143
          if (t.offset().top <= this.outerHeight()) {                                                                  // 2144
            p.missTop = true;                                                                                          // 2145
            actualBoundary = window.innerWidth - actualMarginWidth;                                                    // 2146
            p.leftRightFlag = true;                                                                                    // 2147
          }                                                                                                            // 2148
                                                                                                                       // 2149
          //miss right                                                                                                 // 2150
          if (t.offset().left + this.outerWidth() > t.offset().left + actualMarginWidth && t.offset().left - actualMarginWidth > this.outerWidth()) {
            p.missRight = true;                                                                                        // 2152
            p.missLeft = false;                                                                                        // 2153
          }                                                                                                            // 2154
                                                                                                                       // 2155
          //miss left                                                                                                  // 2156
          if (t.offset().left - this.outerWidth() <= 0) {                                                              // 2157
            p.missLeft = true;                                                                                         // 2158
            p.missRight = false;                                                                                       // 2159
          }                                                                                                            // 2160
        }                                                                                                              // 2161
                                                                                                                       // 2162
        return p;                                                                                                      // 2163
      },                                                                                                               // 2164
                                                                                                                       // 2165
      top : function (t, s) {                                                                                          // 2166
        var self = Foundation.libs.dropdown,                                                                           // 2167
            p = self.dirs._base.call(this, t);                                                                         // 2168
                                                                                                                       // 2169
        this.addClass('drop-top');                                                                                     // 2170
                                                                                                                       // 2171
        if (p.missTop == true) {                                                                                       // 2172
          p.top = p.top + t.outerHeight() + this.outerHeight();                                                        // 2173
          this.removeClass('drop-top');                                                                                // 2174
        }                                                                                                              // 2175
                                                                                                                       // 2176
        if (p.missRight == true) {                                                                                     // 2177
          p.left = p.left - this.outerWidth() + t.outerWidth();                                                        // 2178
        }                                                                                                              // 2179
                                                                                                                       // 2180
        if (t.outerWidth() < this.outerWidth() || self.small() || this.hasClass(s.mega_menu)) {                        // 2181
          self.adjust_pip(this, t, s, p);                                                                              // 2182
        }                                                                                                              // 2183
                                                                                                                       // 2184
        if (Foundation.rtl) {                                                                                          // 2185
          return {left : p.left - this.outerWidth() + t.outerWidth(),                                                  // 2186
            top : p.top - this.outerHeight()};                                                                         // 2187
        }                                                                                                              // 2188
                                                                                                                       // 2189
        return {left : p.left, top : p.top - this.outerHeight()};                                                      // 2190
      },                                                                                                               // 2191
                                                                                                                       // 2192
      bottom : function (t, s) {                                                                                       // 2193
        var self = Foundation.libs.dropdown,                                                                           // 2194
            p = self.dirs._base.call(this, t);                                                                         // 2195
                                                                                                                       // 2196
        if (p.missRight == true) {                                                                                     // 2197
          p.left = p.left - this.outerWidth() + t.outerWidth();                                                        // 2198
        }                                                                                                              // 2199
                                                                                                                       // 2200
        if (t.outerWidth() < this.outerWidth() || self.small() || this.hasClass(s.mega_menu)) {                        // 2201
          self.adjust_pip(this, t, s, p);                                                                              // 2202
        }                                                                                                              // 2203
                                                                                                                       // 2204
        if (self.rtl) {                                                                                                // 2205
          return {left : p.left - this.outerWidth() + t.outerWidth(), top : p.top + t.outerHeight()};                  // 2206
        }                                                                                                              // 2207
                                                                                                                       // 2208
        return {left : p.left, top : p.top + t.outerHeight()};                                                         // 2209
      },                                                                                                               // 2210
                                                                                                                       // 2211
      left : function (t, s) {                                                                                         // 2212
        var p = Foundation.libs.dropdown.dirs._base.call(this, t);                                                     // 2213
                                                                                                                       // 2214
        this.addClass('drop-left');                                                                                    // 2215
                                                                                                                       // 2216
        if (p.missLeft == true) {                                                                                      // 2217
          p.left =  p.left + this.outerWidth();                                                                        // 2218
          p.top = p.top + t.outerHeight();                                                                             // 2219
          this.removeClass('drop-left');                                                                               // 2220
        }                                                                                                              // 2221
                                                                                                                       // 2222
        return {left : p.left - this.outerWidth(), top : p.top};                                                       // 2223
      },                                                                                                               // 2224
                                                                                                                       // 2225
      right : function (t, s) {                                                                                        // 2226
        var p = Foundation.libs.dropdown.dirs._base.call(this, t);                                                     // 2227
                                                                                                                       // 2228
        this.addClass('drop-right');                                                                                   // 2229
                                                                                                                       // 2230
        if (p.missRight == true) {                                                                                     // 2231
          p.left = p.left - this.outerWidth();                                                                         // 2232
          p.top = p.top + t.outerHeight();                                                                             // 2233
          this.removeClass('drop-right');                                                                              // 2234
        } else {                                                                                                       // 2235
          p.triggeredRight = true;                                                                                     // 2236
        }                                                                                                              // 2237
                                                                                                                       // 2238
        var self = Foundation.libs.dropdown;                                                                           // 2239
                                                                                                                       // 2240
        if (t.outerWidth() < this.outerWidth() || self.small() || this.hasClass(s.mega_menu)) {                        // 2241
          self.adjust_pip(this, t, s, p);                                                                              // 2242
        }                                                                                                              // 2243
                                                                                                                       // 2244
        return {left : p.left + t.outerWidth(), top : p.top};                                                          // 2245
      }                                                                                                                // 2246
    },                                                                                                                 // 2247
                                                                                                                       // 2248
    // Insert rule to style psuedo elements                                                                            // 2249
    adjust_pip : function (dropdown, target, settings, position) {                                                     // 2250
      var sheet = Foundation.stylesheet,                                                                               // 2251
          pip_offset_base = 8;                                                                                         // 2252
                                                                                                                       // 2253
      if (dropdown.hasClass(settings.mega_class)) {                                                                    // 2254
        pip_offset_base = position.left + (target.outerWidth() / 2) - 8;                                               // 2255
      } else if (this.small()) {                                                                                       // 2256
        pip_offset_base += position.left - 8;                                                                          // 2257
      }                                                                                                                // 2258
                                                                                                                       // 2259
      this.rule_idx = sheet.cssRules.length;                                                                           // 2260
                                                                                                                       // 2261
      //default                                                                                                        // 2262
      var sel_before = '.f-dropdown.open:before',                                                                      // 2263
          sel_after  = '.f-dropdown.open:after',                                                                       // 2264
          css_before = 'left: ' + pip_offset_base + 'px;',                                                             // 2265
          css_after  = 'left: ' + (pip_offset_base - 1) + 'px;';                                                       // 2266
                                                                                                                       // 2267
      if (position.missRight == true) {                                                                                // 2268
        pip_offset_base = dropdown.outerWidth() - 23;                                                                  // 2269
        sel_before = '.f-dropdown.open:before',                                                                        // 2270
        sel_after  = '.f-dropdown.open:after',                                                                         // 2271
        css_before = 'left: ' + pip_offset_base + 'px;',                                                               // 2272
        css_after  = 'left: ' + (pip_offset_base - 1) + 'px;';                                                         // 2273
      }                                                                                                                // 2274
                                                                                                                       // 2275
      //just a case where right is fired, but its not missing right                                                    // 2276
      if (position.triggeredRight == true) {                                                                           // 2277
        sel_before = '.f-dropdown.open:before',                                                                        // 2278
        sel_after  = '.f-dropdown.open:after',                                                                         // 2279
        css_before = 'left:-12px;',                                                                                    // 2280
        css_after  = 'left:-14px;';                                                                                    // 2281
      }                                                                                                                // 2282
                                                                                                                       // 2283
      if (sheet.insertRule) {                                                                                          // 2284
        sheet.insertRule([sel_before, '{', css_before, '}'].join(' '), this.rule_idx);                                 // 2285
        sheet.insertRule([sel_after, '{', css_after, '}'].join(' '), this.rule_idx + 1);                               // 2286
      } else {                                                                                                         // 2287
        sheet.addRule(sel_before, css_before, this.rule_idx);                                                          // 2288
        sheet.addRule(sel_after, css_after, this.rule_idx + 1);                                                        // 2289
      }                                                                                                                // 2290
    },                                                                                                                 // 2291
                                                                                                                       // 2292
    // Remove old dropdown rule index                                                                                  // 2293
    clear_idx : function () {                                                                                          // 2294
      var sheet = Foundation.stylesheet;                                                                               // 2295
                                                                                                                       // 2296
      if (typeof this.rule_idx !== 'undefined') {                                                                      // 2297
        sheet.deleteRule(this.rule_idx);                                                                               // 2298
        sheet.deleteRule(this.rule_idx);                                                                               // 2299
        delete this.rule_idx;                                                                                          // 2300
      }                                                                                                                // 2301
    },                                                                                                                 // 2302
                                                                                                                       // 2303
    small : function () {                                                                                              // 2304
      return matchMedia(Foundation.media_queries.small).matches &&                                                     // 2305
        !matchMedia(Foundation.media_queries.medium).matches;                                                          // 2306
    },                                                                                                                 // 2307
                                                                                                                       // 2308
    off : function () {                                                                                                // 2309
      this.S(this.scope).off('.fndtn.dropdown');                                                                       // 2310
      this.S('html, body').off('.fndtn.dropdown');                                                                     // 2311
      this.S(window).off('.fndtn.dropdown');                                                                           // 2312
      this.S('[data-dropdown-content]').off('.fndtn.dropdown');                                                        // 2313
    },                                                                                                                 // 2314
                                                                                                                       // 2315
    reflow : function () {}                                                                                            // 2316
  };                                                                                                                   // 2317
}(jQuery, window, window.document));                                                                                   // 2318
                                                                                                                       // 2319
;(function ($, window, document, undefined) {                                                                          // 2320
  'use strict';                                                                                                        // 2321
                                                                                                                       // 2322
  Foundation.libs.equalizer = {                                                                                        // 2323
    name : 'equalizer',                                                                                                // 2324
                                                                                                                       // 2325
    version : '5.5.2',                                                                                                 // 2326
                                                                                                                       // 2327
    settings : {                                                                                                       // 2328
      use_tallest : true,                                                                                              // 2329
      before_height_change : $.noop,                                                                                   // 2330
      after_height_change : $.noop,                                                                                    // 2331
      equalize_on_stack : false,                                                                                       // 2332
      act_on_hidden_el: false                                                                                          // 2333
    },                                                                                                                 // 2334
                                                                                                                       // 2335
    init : function (scope, method, options) {                                                                         // 2336
      Foundation.inherit(this, 'image_loaded');                                                                        // 2337
      this.bindings(method, options);                                                                                  // 2338
      this.reflow();                                                                                                   // 2339
    },                                                                                                                 // 2340
                                                                                                                       // 2341
    events : function () {                                                                                             // 2342
      this.S(window).off('.equalizer').on('resize.fndtn.equalizer', function (e) {                                     // 2343
        this.reflow();                                                                                                 // 2344
      }.bind(this));                                                                                                   // 2345
    },                                                                                                                 // 2346
                                                                                                                       // 2347
    equalize : function (equalizer) {                                                                                  // 2348
      var isStacked = false,                                                                                           // 2349
          group = equalizer.data('equalizer'),                                                                         // 2350
          settings = equalizer.data(this.attr_name(true)+'-init') || this.settings,                                    // 2351
          vals,                                                                                                        // 2352
          firstTopOffset;                                                                                              // 2353
                                                                                                                       // 2354
      if (settings.act_on_hidden_el) {                                                                                 // 2355
        vals = group ? equalizer.find('['+this.attr_name()+'-watch="'+group+'"]') : equalizer.find('['+this.attr_name()+'-watch]');
      }                                                                                                                // 2357
      else {                                                                                                           // 2358
        vals = group ? equalizer.find('['+this.attr_name()+'-watch="'+group+'"]:visible') : equalizer.find('['+this.attr_name()+'-watch]:visible');
      }                                                                                                                // 2360
                                                                                                                       // 2361
      if (vals.length === 0) {                                                                                         // 2362
        return;                                                                                                        // 2363
      }                                                                                                                // 2364
                                                                                                                       // 2365
      settings.before_height_change();                                                                                 // 2366
      equalizer.trigger('before-height-change.fndth.equalizer');                                                       // 2367
      vals.height('inherit');                                                                                          // 2368
                                                                                                                       // 2369
      if (settings.equalize_on_stack === false) {                                                                      // 2370
        firstTopOffset = vals.first().offset().top;                                                                    // 2371
        vals.each(function () {                                                                                        // 2372
          if ($(this).offset().top !== firstTopOffset) {                                                               // 2373
            isStacked = true;                                                                                          // 2374
            return false;                                                                                              // 2375
          }                                                                                                            // 2376
        });                                                                                                            // 2377
        if (isStacked) {                                                                                               // 2378
          return;                                                                                                      // 2379
        }                                                                                                              // 2380
      }                                                                                                                // 2381
                                                                                                                       // 2382
      var heights = vals.map(function () { return $(this).outerHeight(false) }).get();                                 // 2383
                                                                                                                       // 2384
      if (settings.use_tallest) {                                                                                      // 2385
        var max = Math.max.apply(null, heights);                                                                       // 2386
        vals.css('height', max);                                                                                       // 2387
      } else {                                                                                                         // 2388
        var min = Math.min.apply(null, heights);                                                                       // 2389
        vals.css('height', min);                                                                                       // 2390
      }                                                                                                                // 2391
                                                                                                                       // 2392
      settings.after_height_change();                                                                                  // 2393
      equalizer.trigger('after-height-change.fndtn.equalizer');                                                        // 2394
    },                                                                                                                 // 2395
                                                                                                                       // 2396
    reflow : function () {                                                                                             // 2397
      var self = this;                                                                                                 // 2398
                                                                                                                       // 2399
      this.S('[' + this.attr_name() + ']', this.scope).each(function () {                                              // 2400
        var $eq_target = $(this),                                                                                      // 2401
            media_query = $eq_target.data('equalizer-mq'),                                                             // 2402
            ignore_media_query = true;                                                                                 // 2403
                                                                                                                       // 2404
        if (media_query) {                                                                                             // 2405
          media_query = 'is_' + media_query.replace(/-/g, '_');                                                        // 2406
          if (Foundation.utils.hasOwnProperty(media_query)) {                                                          // 2407
            ignore_media_query = false;                                                                                // 2408
          }                                                                                                            // 2409
        }                                                                                                              // 2410
                                                                                                                       // 2411
        self.image_loaded(self.S('img', this), function () {                                                           // 2412
          if (ignore_media_query || Foundation.utils[media_query]()) {                                                 // 2413
            self.equalize($eq_target)                                                                                  // 2414
          } else {                                                                                                     // 2415
            var vals = $eq_target.find('[' + self.attr_name() + '-watch]:visible');                                    // 2416
            vals.css('height', 'auto');                                                                                // 2417
          }                                                                                                            // 2418
        });                                                                                                            // 2419
      });                                                                                                              // 2420
    }                                                                                                                  // 2421
  };                                                                                                                   // 2422
})(jQuery, window, window.document);                                                                                   // 2423
                                                                                                                       // 2424
;(function ($, window, document, undefined) {                                                                          // 2425
  'use strict';                                                                                                        // 2426
                                                                                                                       // 2427
  Foundation.libs.interchange = {                                                                                      // 2428
    name : 'interchange',                                                                                              // 2429
                                                                                                                       // 2430
    version : '5.5.2',                                                                                                 // 2431
                                                                                                                       // 2432
    cache : {},                                                                                                        // 2433
                                                                                                                       // 2434
    images_loaded : false,                                                                                             // 2435
    nodes_loaded : false,                                                                                              // 2436
                                                                                                                       // 2437
    settings : {                                                                                                       // 2438
      load_attr : 'interchange',                                                                                       // 2439
                                                                                                                       // 2440
      named_queries : {                                                                                                // 2441
        'default'     : 'only screen',                                                                                 // 2442
        'small'       : Foundation.media_queries['small'],                                                             // 2443
        'small-only'  : Foundation.media_queries['small-only'],                                                        // 2444
        'medium'      : Foundation.media_queries['medium'],                                                            // 2445
        'medium-only' : Foundation.media_queries['medium-only'],                                                       // 2446
        'large'       : Foundation.media_queries['large'],                                                             // 2447
        'large-only'  : Foundation.media_queries['large-only'],                                                        // 2448
        'xlarge'      : Foundation.media_queries['xlarge'],                                                            // 2449
        'xlarge-only' : Foundation.media_queries['xlarge-only'],                                                       // 2450
        'xxlarge'     : Foundation.media_queries['xxlarge'],                                                           // 2451
        'landscape'   : 'only screen and (orientation: landscape)',                                                    // 2452
        'portrait'    : 'only screen and (orientation: portrait)',                                                     // 2453
        'retina'      : 'only screen and (-webkit-min-device-pixel-ratio: 2),' +                                       // 2454
          'only screen and (min--moz-device-pixel-ratio: 2),' +                                                        // 2455
          'only screen and (-o-min-device-pixel-ratio: 2/1),' +                                                        // 2456
          'only screen and (min-device-pixel-ratio: 2),' +                                                             // 2457
          'only screen and (min-resolution: 192dpi),' +                                                                // 2458
          'only screen and (min-resolution: 2dppx)'                                                                    // 2459
      },                                                                                                               // 2460
                                                                                                                       // 2461
      directives : {                                                                                                   // 2462
        replace : function (el, path, trigger) {                                                                       // 2463
          // The trigger argument, if called within the directive, fires                                               // 2464
          // an event named after the directive on the element, passing                                                // 2465
          // any parameters along to the event that you pass to trigger.                                               // 2466
          //                                                                                                           // 2467
          // ex. trigger(), trigger([a, b, c]), or trigger(a, b, c)                                                    // 2468
          //                                                                                                           // 2469
          // This allows you to bind a callback like so:                                                               // 2470
          // $('#interchangeContainer').on('replace', function (e, a, b, c) {                                          // 2471
          //   console.log($(this).html(), a, b, c);                                                                   // 2472
          // });                                                                                                       // 2473
                                                                                                                       // 2474
          if (el !== null && /IMG/.test(el[0].nodeName)) {                                                             // 2475
            var orig_path = el[0].src;                                                                                 // 2476
                                                                                                                       // 2477
            if (new RegExp(path, 'i').test(orig_path)) {                                                               // 2478
              return;                                                                                                  // 2479
            }                                                                                                          // 2480
                                                                                                                       // 2481
            el.attr("src", path);                                                                                      // 2482
                                                                                                                       // 2483
            return trigger(el[0].src);                                                                                 // 2484
          }                                                                                                            // 2485
          var last_path = el.data(this.data_attr + '-last-path'),                                                      // 2486
              self = this;                                                                                             // 2487
                                                                                                                       // 2488
          if (last_path == path) {                                                                                     // 2489
            return;                                                                                                    // 2490
          }                                                                                                            // 2491
                                                                                                                       // 2492
          if (/\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(path)) {                                                      // 2493
            $(el).css('background-image', 'url(' + path + ')');                                                        // 2494
            el.data('interchange-last-path', path);                                                                    // 2495
            return trigger(path);                                                                                      // 2496
          }                                                                                                            // 2497
                                                                                                                       // 2498
          return $.get(path, function (response) {                                                                     // 2499
            el.html(response);                                                                                         // 2500
            el.data(self.data_attr + '-last-path', path);                                                              // 2501
            trigger();                                                                                                 // 2502
          });                                                                                                          // 2503
                                                                                                                       // 2504
        }                                                                                                              // 2505
      }                                                                                                                // 2506
    },                                                                                                                 // 2507
                                                                                                                       // 2508
    init : function (scope, method, options) {                                                                         // 2509
      Foundation.inherit(this, 'throttle random_str');                                                                 // 2510
                                                                                                                       // 2511
      this.data_attr = this.set_data_attr();                                                                           // 2512
      $.extend(true, this.settings, method, options);                                                                  // 2513
      this.bindings(method, options);                                                                                  // 2514
      this.reflow();                                                                                                   // 2515
    },                                                                                                                 // 2516
                                                                                                                       // 2517
    get_media_hash : function () {                                                                                     // 2518
        var mediaHash = '';                                                                                            // 2519
        for (var queryName in this.settings.named_queries ) {                                                          // 2520
            mediaHash += matchMedia(this.settings.named_queries[queryName]).matches.toString();                        // 2521
        }                                                                                                              // 2522
        return mediaHash;                                                                                              // 2523
    },                                                                                                                 // 2524
                                                                                                                       // 2525
    events : function () {                                                                                             // 2526
      var self = this, prevMediaHash;                                                                                  // 2527
                                                                                                                       // 2528
      $(window)                                                                                                        // 2529
        .off('.interchange')                                                                                           // 2530
        .on('resize.fndtn.interchange', self.throttle(function () {                                                    // 2531
            var currMediaHash = self.get_media_hash();                                                                 // 2532
            if (currMediaHash !== prevMediaHash) {                                                                     // 2533
                self.resize();                                                                                         // 2534
            }                                                                                                          // 2535
            prevMediaHash = currMediaHash;                                                                             // 2536
        }, 50));                                                                                                       // 2537
                                                                                                                       // 2538
      return this;                                                                                                     // 2539
    },                                                                                                                 // 2540
                                                                                                                       // 2541
    resize : function () {                                                                                             // 2542
      var cache = this.cache;                                                                                          // 2543
                                                                                                                       // 2544
      if (!this.images_loaded || !this.nodes_loaded) {                                                                 // 2545
        setTimeout($.proxy(this.resize, this), 50);                                                                    // 2546
        return;                                                                                                        // 2547
      }                                                                                                                // 2548
                                                                                                                       // 2549
      for (var uuid in cache) {                                                                                        // 2550
        if (cache.hasOwnProperty(uuid)) {                                                                              // 2551
          var passed = this.results(uuid, cache[uuid]);                                                                // 2552
          if (passed) {                                                                                                // 2553
            this.settings.directives[passed                                                                            // 2554
              .scenario[1]].call(this, passed.el, passed.scenario[0], (function (passed) {                             // 2555
                if (arguments[0] instanceof Array) {                                                                   // 2556
                  var args = arguments[0];                                                                             // 2557
                } else {                                                                                               // 2558
                  var args = Array.prototype.slice.call(arguments, 0);                                                 // 2559
                }                                                                                                      // 2560
                                                                                                                       // 2561
                return function() {                                                                                    // 2562
                  passed.el.trigger(passed.scenario[1], args);                                                         // 2563
                }                                                                                                      // 2564
              }(passed)));                                                                                             // 2565
          }                                                                                                            // 2566
        }                                                                                                              // 2567
      }                                                                                                                // 2568
                                                                                                                       // 2569
    },                                                                                                                 // 2570
                                                                                                                       // 2571
    results : function (uuid, scenarios) {                                                                             // 2572
      var count = scenarios.length;                                                                                    // 2573
                                                                                                                       // 2574
      if (count > 0) {                                                                                                 // 2575
        var el = this.S('[' + this.add_namespace('data-uuid') + '="' + uuid + '"]');                                   // 2576
                                                                                                                       // 2577
        while (count--) {                                                                                              // 2578
          var mq, rule = scenarios[count][2];                                                                          // 2579
          if (this.settings.named_queries.hasOwnProperty(rule)) {                                                      // 2580
            mq = matchMedia(this.settings.named_queries[rule]);                                                        // 2581
          } else {                                                                                                     // 2582
            mq = matchMedia(rule);                                                                                     // 2583
          }                                                                                                            // 2584
          if (mq.matches) {                                                                                            // 2585
            return {el : el, scenario : scenarios[count]};                                                             // 2586
          }                                                                                                            // 2587
        }                                                                                                              // 2588
      }                                                                                                                // 2589
                                                                                                                       // 2590
      return false;                                                                                                    // 2591
    },                                                                                                                 // 2592
                                                                                                                       // 2593
    load : function (type, force_update) {                                                                             // 2594
      if (typeof this['cached_' + type] === 'undefined' || force_update) {                                             // 2595
        this['update_' + type]();                                                                                      // 2596
      }                                                                                                                // 2597
                                                                                                                       // 2598
      return this['cached_' + type];                                                                                   // 2599
    },                                                                                                                 // 2600
                                                                                                                       // 2601
    update_images : function () {                                                                                      // 2602
      var images = this.S('img[' + this.data_attr + ']'),                                                              // 2603
          count = images.length,                                                                                       // 2604
          i = count,                                                                                                   // 2605
          loaded_count = 0,                                                                                            // 2606
          data_attr = this.data_attr;                                                                                  // 2607
                                                                                                                       // 2608
      this.cache = {};                                                                                                 // 2609
      this.cached_images = [];                                                                                         // 2610
      this.images_loaded = (count === 0);                                                                              // 2611
                                                                                                                       // 2612
      while (i--) {                                                                                                    // 2613
        loaded_count++;                                                                                                // 2614
        if (images[i]) {                                                                                               // 2615
          var str = images[i].getAttribute(data_attr) || '';                                                           // 2616
                                                                                                                       // 2617
          if (str.length > 0) {                                                                                        // 2618
            this.cached_images.push(images[i]);                                                                        // 2619
          }                                                                                                            // 2620
        }                                                                                                              // 2621
                                                                                                                       // 2622
        if (loaded_count === count) {                                                                                  // 2623
          this.images_loaded = true;                                                                                   // 2624
          this.enhance('images');                                                                                      // 2625
        }                                                                                                              // 2626
      }                                                                                                                // 2627
                                                                                                                       // 2628
      return this;                                                                                                     // 2629
    },                                                                                                                 // 2630
                                                                                                                       // 2631
    update_nodes : function () {                                                                                       // 2632
      var nodes = this.S('[' + this.data_attr + ']').not('img'),                                                       // 2633
          count = nodes.length,                                                                                        // 2634
          i = count,                                                                                                   // 2635
          loaded_count = 0,                                                                                            // 2636
          data_attr = this.data_attr;                                                                                  // 2637
                                                                                                                       // 2638
      this.cached_nodes = [];                                                                                          // 2639
      this.nodes_loaded = (count === 0);                                                                               // 2640
                                                                                                                       // 2641
      while (i--) {                                                                                                    // 2642
        loaded_count++;                                                                                                // 2643
        var str = nodes[i].getAttribute(data_attr) || '';                                                              // 2644
                                                                                                                       // 2645
        if (str.length > 0) {                                                                                          // 2646
          this.cached_nodes.push(nodes[i]);                                                                            // 2647
        }                                                                                                              // 2648
                                                                                                                       // 2649
        if (loaded_count === count) {                                                                                  // 2650
          this.nodes_loaded = true;                                                                                    // 2651
          this.enhance('nodes');                                                                                       // 2652
        }                                                                                                              // 2653
      }                                                                                                                // 2654
                                                                                                                       // 2655
      return this;                                                                                                     // 2656
    },                                                                                                                 // 2657
                                                                                                                       // 2658
    enhance : function (type) {                                                                                        // 2659
      var i = this['cached_' + type].length;                                                                           // 2660
                                                                                                                       // 2661
      while (i--) {                                                                                                    // 2662
        this.object($(this['cached_' + type][i]));                                                                     // 2663
      }                                                                                                                // 2664
                                                                                                                       // 2665
      return $(window).trigger('resize.fndtn.interchange');                                                            // 2666
    },                                                                                                                 // 2667
                                                                                                                       // 2668
    convert_directive : function (directive) {                                                                         // 2669
                                                                                                                       // 2670
      var trimmed = this.trim(directive);                                                                              // 2671
                                                                                                                       // 2672
      if (trimmed.length > 0) {                                                                                        // 2673
        return trimmed;                                                                                                // 2674
      }                                                                                                                // 2675
                                                                                                                       // 2676
      return 'replace';                                                                                                // 2677
    },                                                                                                                 // 2678
                                                                                                                       // 2679
    parse_scenario : function (scenario) {                                                                             // 2680
      // This logic had to be made more complex since some users were using commas in the url path                     // 2681
      // So we cannot simply just split on a comma                                                                     // 2682
                                                                                                                       // 2683
      var directive_match = scenario[0].match(/(.+),\s*(\w+)\s*$/),                                                    // 2684
      // getting the mq has gotten a bit complicated since we started accounting for several use cases                 // 2685
      // of URLs. For now we'll continue to match these scenarios, but we may consider having these scenarios          // 2686
      // as nested objects or arrays in F6.                                                                            // 2687
      // regex: match everything before close parenthesis for mq                                                       // 2688
      media_query         = scenario[1].match(/(.*)\)/);                                                               // 2689
                                                                                                                       // 2690
      if (directive_match) {                                                                                           // 2691
        var path  = directive_match[1],                                                                                // 2692
        directive = directive_match[2];                                                                                // 2693
                                                                                                                       // 2694
      } else {                                                                                                         // 2695
        var cached_split = scenario[0].split(/,\s*$/),                                                                 // 2696
        path             = cached_split[0],                                                                            // 2697
        directive        = '';                                                                                         // 2698
      }                                                                                                                // 2699
                                                                                                                       // 2700
      return [this.trim(path), this.convert_directive(directive), this.trim(media_query[1])];                          // 2701
    },                                                                                                                 // 2702
                                                                                                                       // 2703
    object : function (el) {                                                                                           // 2704
      var raw_arr = this.parse_data_attr(el),                                                                          // 2705
          scenarios = [],                                                                                              // 2706
          i = raw_arr.length;                                                                                          // 2707
                                                                                                                       // 2708
      if (i > 0) {                                                                                                     // 2709
        while (i--) {                                                                                                  // 2710
          // split array between comma delimited content and mq                                                        // 2711
          // regex: comma, optional space, open parenthesis                                                            // 2712
          var scenario = raw_arr[i].split(/,\s?\(/);                                                                   // 2713
                                                                                                                       // 2714
          if (scenario.length > 1) {                                                                                   // 2715
            var params = this.parse_scenario(scenario);                                                                // 2716
            scenarios.push(params);                                                                                    // 2717
          }                                                                                                            // 2718
        }                                                                                                              // 2719
      }                                                                                                                // 2720
                                                                                                                       // 2721
      return this.store(el, scenarios);                                                                                // 2722
    },                                                                                                                 // 2723
                                                                                                                       // 2724
    store : function (el, scenarios) {                                                                                 // 2725
      var uuid = this.random_str(),                                                                                    // 2726
          current_uuid = el.data(this.add_namespace('uuid', true));                                                    // 2727
                                                                                                                       // 2728
      if (this.cache[current_uuid]) {                                                                                  // 2729
        return this.cache[current_uuid];                                                                               // 2730
      }                                                                                                                // 2731
                                                                                                                       // 2732
      el.attr(this.add_namespace('data-uuid'), uuid);                                                                  // 2733
      return this.cache[uuid] = scenarios;                                                                             // 2734
    },                                                                                                                 // 2735
                                                                                                                       // 2736
    trim : function (str) {                                                                                            // 2737
                                                                                                                       // 2738
      if (typeof str === 'string') {                                                                                   // 2739
        return $.trim(str);                                                                                            // 2740
      }                                                                                                                // 2741
                                                                                                                       // 2742
      return str;                                                                                                      // 2743
    },                                                                                                                 // 2744
                                                                                                                       // 2745
    set_data_attr : function (init) {                                                                                  // 2746
      if (init) {                                                                                                      // 2747
        if (this.namespace.length > 0) {                                                                               // 2748
          return this.namespace + '-' + this.settings.load_attr;                                                       // 2749
        }                                                                                                              // 2750
                                                                                                                       // 2751
        return this.settings.load_attr;                                                                                // 2752
      }                                                                                                                // 2753
                                                                                                                       // 2754
      if (this.namespace.length > 0) {                                                                                 // 2755
        return 'data-' + this.namespace + '-' + this.settings.load_attr;                                               // 2756
      }                                                                                                                // 2757
                                                                                                                       // 2758
      return 'data-' + this.settings.load_attr;                                                                        // 2759
    },                                                                                                                 // 2760
                                                                                                                       // 2761
    parse_data_attr : function (el) {                                                                                  // 2762
      var raw = el.attr(this.attr_name()).split(/\[(.*?)\]/),                                                          // 2763
          i = raw.length,                                                                                              // 2764
          output = [];                                                                                                 // 2765
                                                                                                                       // 2766
      while (i--) {                                                                                                    // 2767
        if (raw[i].replace(/[\W\d]+/, '').length > 4) {                                                                // 2768
          output.push(raw[i]);                                                                                         // 2769
        }                                                                                                              // 2770
      }                                                                                                                // 2771
                                                                                                                       // 2772
      return output;                                                                                                   // 2773
    },                                                                                                                 // 2774
                                                                                                                       // 2775
    reflow : function () {                                                                                             // 2776
      this.load('images', true);                                                                                       // 2777
      this.load('nodes', true);                                                                                        // 2778
    }                                                                                                                  // 2779
                                                                                                                       // 2780
  };                                                                                                                   // 2781
                                                                                                                       // 2782
}(jQuery, window, window.document));                                                                                   // 2783
                                                                                                                       // 2784
;(function ($, window, document, undefined) {                                                                          // 2785
  'use strict';                                                                                                        // 2786
                                                                                                                       // 2787
  var Modernizr = Modernizr || false;                                                                                  // 2788
                                                                                                                       // 2789
  Foundation.libs.joyride = {                                                                                          // 2790
    name : 'joyride',                                                                                                  // 2791
                                                                                                                       // 2792
    version : '5.5.2',                                                                                                 // 2793
                                                                                                                       // 2794
    defaults : {                                                                                                       // 2795
      expose                   : false,     // turn on or off the expose feature                                       // 2796
      modal                    : true,      // Whether to cover page with modal during the tour                        // 2797
      keyboard                 : true,      // enable left, right and esc keystrokes                                   // 2798
      tip_location             : 'bottom',  // 'top' or 'bottom' in relation to parent                                 // 2799
      nub_position             : 'auto',    // override on a per tooltip bases                                         // 2800
      scroll_speed             : 1500,      // Page scrolling speed in milliseconds, 0 = no scroll animation           // 2801
      scroll_animation         : 'linear',  // supports 'swing' and 'linear', extend with jQuery UI.                   // 2802
      timer                    : 0,         // 0 = no timer , all other numbers = timer in milliseconds                // 2803
      start_timer_on_click     : true,      // true or false - true requires clicking the first button start the timer // 2804
      start_offset             : 0,         // the index of the tooltip you want to start on (index of the li)         // 2805
      next_button              : true,      // true or false to control whether a next button is used                  // 2806
      prev_button              : true,      // true or false to control whether a prev button is used                  // 2807
      tip_animation            : 'fade',    // 'pop' or 'fade' in each tip                                             // 2808
      pause_after              : [],        // array of indexes where to pause the tour after                          // 2809
      exposed                  : [],        // array of expose elements                                                // 2810
      tip_animation_fade_speed : 300,       // when tipAnimation = 'fade' this is speed in milliseconds for the transition
      cookie_monster           : false,     // true or false to control whether cookies are used                       // 2812
      cookie_name              : 'joyride', // Name the cookie you'll use                                              // 2813
      cookie_domain            : false,     // Will this cookie be attached to a domain, ie. '.notableapp.com'         // 2814
      cookie_expires           : 365,       // set when you would like the cookie to expire.                           // 2815
      tip_container            : 'body',    // Where will the tip be attached                                          // 2816
      abort_on_close           : true,      // When true, the close event will not fire any callback                   // 2817
      tip_location_patterns    : {                                                                                     // 2818
        top : ['bottom'],                                                                                              // 2819
        bottom : [], // bottom should not need to be repositioned                                                      // 2820
        left : ['right', 'top', 'bottom'],                                                                             // 2821
        right : ['left', 'top', 'bottom']                                                                              // 2822
      },                                                                                                               // 2823
      post_ride_callback     : function () {},    // A method to call once the tour closes (canceled or complete)      // 2824
      post_step_callback     : function () {},    // A method to call after each step                                  // 2825
      pre_step_callback      : function () {},    // A method to call before each step                                 // 2826
      pre_ride_callback      : function () {},    // A method to call before the tour starts (passed index, tip, and cloned exposed element)
      post_expose_callback   : function () {},    // A method to call after an element has been exposed                // 2828
      template : { // HTML segments for tip layout                                                                     // 2829
        link          : '<a href="#close" class="joyride-close-tip">&times;</a>',                                      // 2830
        timer         : '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
        tip           : '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',                      // 2832
        wrapper       : '<div class="joyride-content-wrapper"></div>',                                                 // 2833
        button        : '<a href="#" class="small button joyride-next-tip"></a>',                                      // 2834
        prev_button   : '<a href="#" class="small button joyride-prev-tip"></a>',                                      // 2835
        modal         : '<div class="joyride-modal-bg"></div>',                                                        // 2836
        expose        : '<div class="joyride-expose-wrapper"></div>',                                                  // 2837
        expose_cover  : '<div class="joyride-expose-cover"></div>'                                                     // 2838
      },                                                                                                               // 2839
      expose_add_class : '' // One or more space-separated class names to be added to exposed element                  // 2840
    },                                                                                                                 // 2841
                                                                                                                       // 2842
    init : function (scope, method, options) {                                                                         // 2843
      Foundation.inherit(this, 'throttle random_str');                                                                 // 2844
                                                                                                                       // 2845
      this.settings = this.settings || $.extend({}, this.defaults, (options || method));                               // 2846
                                                                                                                       // 2847
      this.bindings(method, options)                                                                                   // 2848
    },                                                                                                                 // 2849
                                                                                                                       // 2850
    go_next : function () {                                                                                            // 2851
      if (this.settings.$li.next().length < 1) {                                                                       // 2852
        this.end();                                                                                                    // 2853
      } else if (this.settings.timer > 0) {                                                                            // 2854
        clearTimeout(this.settings.automate);                                                                          // 2855
        this.hide();                                                                                                   // 2856
        this.show();                                                                                                   // 2857
        this.startTimer();                                                                                             // 2858
      } else {                                                                                                         // 2859
        this.hide();                                                                                                   // 2860
        this.show();                                                                                                   // 2861
      }                                                                                                                // 2862
    },                                                                                                                 // 2863
                                                                                                                       // 2864
    go_prev : function () {                                                                                            // 2865
      if (this.settings.$li.prev().length < 1) {                                                                       // 2866
        // Do nothing if there are no prev element                                                                     // 2867
      } else if (this.settings.timer > 0) {                                                                            // 2868
        clearTimeout(this.settings.automate);                                                                          // 2869
        this.hide();                                                                                                   // 2870
        this.show(null, true);                                                                                         // 2871
        this.startTimer();                                                                                             // 2872
      } else {                                                                                                         // 2873
        this.hide();                                                                                                   // 2874
        this.show(null, true);                                                                                         // 2875
      }                                                                                                                // 2876
    },                                                                                                                 // 2877
                                                                                                                       // 2878
    events : function () {                                                                                             // 2879
      var self = this;                                                                                                 // 2880
                                                                                                                       // 2881
      $(this.scope)                                                                                                    // 2882
        .off('.joyride')                                                                                               // 2883
        .on('click.fndtn.joyride', '.joyride-next-tip, .joyride-modal-bg', function (e) {                              // 2884
          e.preventDefault();                                                                                          // 2885
          this.go_next()                                                                                               // 2886
        }.bind(this))                                                                                                  // 2887
        .on('click.fndtn.joyride', '.joyride-prev-tip', function (e) {                                                 // 2888
          e.preventDefault();                                                                                          // 2889
          this.go_prev();                                                                                              // 2890
        }.bind(this))                                                                                                  // 2891
                                                                                                                       // 2892
        .on('click.fndtn.joyride', '.joyride-close-tip', function (e) {                                                // 2893
          e.preventDefault();                                                                                          // 2894
          this.end(this.settings.abort_on_close);                                                                      // 2895
        }.bind(this))                                                                                                  // 2896
                                                                                                                       // 2897
        .on('keyup.fndtn.joyride', function (e) {                                                                      // 2898
          // Don't do anything if keystrokes are disabled                                                              // 2899
          // or if the joyride is not being shown                                                                      // 2900
          if (!this.settings.keyboard || !this.settings.riding) {                                                      // 2901
            return;                                                                                                    // 2902
          }                                                                                                            // 2903
                                                                                                                       // 2904
          switch (e.which) {                                                                                           // 2905
            case 39: // right arrow                                                                                    // 2906
              e.preventDefault();                                                                                      // 2907
              this.go_next();                                                                                          // 2908
              break;                                                                                                   // 2909
            case 37: // left arrow                                                                                     // 2910
              e.preventDefault();                                                                                      // 2911
              this.go_prev();                                                                                          // 2912
              break;                                                                                                   // 2913
            case 27: // escape                                                                                         // 2914
              e.preventDefault();                                                                                      // 2915
              this.end(this.settings.abort_on_close);                                                                  // 2916
          }                                                                                                            // 2917
        }.bind(this));                                                                                                 // 2918
                                                                                                                       // 2919
      $(window)                                                                                                        // 2920
        .off('.joyride')                                                                                               // 2921
        .on('resize.fndtn.joyride', self.throttle(function () {                                                        // 2922
          if ($('[' + self.attr_name() + ']').length > 0 && self.settings.$next_tip && self.settings.riding) {         // 2923
            if (self.settings.exposed.length > 0) {                                                                    // 2924
              var $els = $(self.settings.exposed);                                                                     // 2925
                                                                                                                       // 2926
              $els.each(function () {                                                                                  // 2927
                var $this = $(this);                                                                                   // 2928
                self.un_expose($this);                                                                                 // 2929
                self.expose($this);                                                                                    // 2930
              });                                                                                                      // 2931
            }                                                                                                          // 2932
                                                                                                                       // 2933
            if (self.is_phone()) {                                                                                     // 2934
              self.pos_phone();                                                                                        // 2935
            } else {                                                                                                   // 2936
              self.pos_default(false);                                                                                 // 2937
            }                                                                                                          // 2938
          }                                                                                                            // 2939
        }, 100));                                                                                                      // 2940
    },                                                                                                                 // 2941
                                                                                                                       // 2942
    start : function () {                                                                                              // 2943
      var self = this,                                                                                                 // 2944
          $this = $('[' + this.attr_name() + ']', this.scope),                                                         // 2945
          integer_settings = ['timer', 'scrollSpeed', 'startOffset', 'tipAnimationFadeSpeed', 'cookieExpires'],        // 2946
          int_settings_count = integer_settings.length;                                                                // 2947
                                                                                                                       // 2948
      if (!$this.length > 0) {                                                                                         // 2949
        return;                                                                                                        // 2950
      }                                                                                                                // 2951
                                                                                                                       // 2952
      if (!this.settings.init) {                                                                                       // 2953
        this.events();                                                                                                 // 2954
      }                                                                                                                // 2955
                                                                                                                       // 2956
      this.settings = $this.data(this.attr_name(true) + '-init');                                                      // 2957
                                                                                                                       // 2958
      // non configureable settings                                                                                    // 2959
      this.settings.$content_el = $this;                                                                               // 2960
      this.settings.$body = $(this.settings.tip_container);                                                            // 2961
      this.settings.body_offset = $(this.settings.tip_container).position();                                           // 2962
      this.settings.$tip_content = this.settings.$content_el.find('> li');                                             // 2963
      this.settings.paused = false;                                                                                    // 2964
      this.settings.attempts = 0;                                                                                      // 2965
      this.settings.riding = true;                                                                                     // 2966
                                                                                                                       // 2967
      // can we create cookies?                                                                                        // 2968
      if (typeof $.cookie !== 'function') {                                                                            // 2969
        this.settings.cookie_monster = false;                                                                          // 2970
      }                                                                                                                // 2971
                                                                                                                       // 2972
      // generate the tips and insert into dom.                                                                        // 2973
      if (!this.settings.cookie_monster || this.settings.cookie_monster && !$.cookie(this.settings.cookie_name)) {     // 2974
        this.settings.$tip_content.each(function (index) {                                                             // 2975
          var $this = $(this);                                                                                         // 2976
          this.settings = $.extend({}, self.defaults, self.data_options($this));                                       // 2977
                                                                                                                       // 2978
          // Make sure that settings parsed from data_options are integers where necessary                             // 2979
          var i = int_settings_count;                                                                                  // 2980
          while (i--) {                                                                                                // 2981
            self.settings[integer_settings[i]] = parseInt(self.settings[integer_settings[i]], 10);                     // 2982
          }                                                                                                            // 2983
          self.create({$li : $this, index : index});                                                                   // 2984
        });                                                                                                            // 2985
                                                                                                                       // 2986
        // show first tip                                                                                              // 2987
        if (!this.settings.start_timer_on_click && this.settings.timer > 0) {                                          // 2988
          this.show('init');                                                                                           // 2989
          this.startTimer();                                                                                           // 2990
        } else {                                                                                                       // 2991
          this.show('init');                                                                                           // 2992
        }                                                                                                              // 2993
                                                                                                                       // 2994
      }                                                                                                                // 2995
    },                                                                                                                 // 2996
                                                                                                                       // 2997
    resume : function () {                                                                                             // 2998
      this.set_li();                                                                                                   // 2999
      this.show();                                                                                                     // 3000
    },                                                                                                                 // 3001
                                                                                                                       // 3002
    tip_template : function (opts) {                                                                                   // 3003
      var $blank, content;                                                                                             // 3004
                                                                                                                       // 3005
      opts.tip_class = opts.tip_class || '';                                                                           // 3006
                                                                                                                       // 3007
      $blank = $(this.settings.template.tip).addClass(opts.tip_class);                                                 // 3008
      content = $.trim($(opts.li).html()) +                                                                            // 3009
        this.prev_button_text(opts.prev_button_text, opts.index) +                                                     // 3010
        this.button_text(opts.button_text) +                                                                           // 3011
        this.settings.template.link +                                                                                  // 3012
        this.timer_instance(opts.index);                                                                               // 3013
                                                                                                                       // 3014
      $blank.append($(this.settings.template.wrapper));                                                                // 3015
      $blank.first().attr(this.add_namespace('data-index'), opts.index);                                               // 3016
      $('.joyride-content-wrapper', $blank).append(content);                                                           // 3017
                                                                                                                       // 3018
      return $blank[0];                                                                                                // 3019
    },                                                                                                                 // 3020
                                                                                                                       // 3021
    timer_instance : function (index) {                                                                                // 3022
      var txt;                                                                                                         // 3023
                                                                                                                       // 3024
      if ((index === 0 && this.settings.start_timer_on_click && this.settings.timer > 0) || this.settings.timer === 0) {
        txt = '';                                                                                                      // 3026
      } else {                                                                                                         // 3027
        txt = $(this.settings.template.timer)[0].outerHTML;                                                            // 3028
      }                                                                                                                // 3029
      return txt;                                                                                                      // 3030
    },                                                                                                                 // 3031
                                                                                                                       // 3032
    button_text : function (txt) {                                                                                     // 3033
      if (this.settings.tip_settings.next_button) {                                                                    // 3034
        txt = $.trim(txt) || 'Next';                                                                                   // 3035
        txt = $(this.settings.template.button).append(txt)[0].outerHTML;                                               // 3036
      } else {                                                                                                         // 3037
        txt = '';                                                                                                      // 3038
      }                                                                                                                // 3039
      return txt;                                                                                                      // 3040
    },                                                                                                                 // 3041
                                                                                                                       // 3042
    prev_button_text : function (txt, idx) {                                                                           // 3043
      if (this.settings.tip_settings.prev_button) {                                                                    // 3044
        txt = $.trim(txt) || 'Previous';                                                                               // 3045
                                                                                                                       // 3046
        // Add the disabled class to the button if it's the first element                                              // 3047
        if (idx == 0) {                                                                                                // 3048
          txt = $(this.settings.template.prev_button).append(txt).addClass('disabled')[0].outerHTML;                   // 3049
        } else {                                                                                                       // 3050
          txt = $(this.settings.template.prev_button).append(txt)[0].outerHTML;                                        // 3051
        }                                                                                                              // 3052
      } else {                                                                                                         // 3053
        txt = '';                                                                                                      // 3054
      }                                                                                                                // 3055
      return txt;                                                                                                      // 3056
    },                                                                                                                 // 3057
                                                                                                                       // 3058
    create : function (opts) {                                                                                         // 3059
      this.settings.tip_settings = $.extend({}, this.settings, this.data_options(opts.$li));                           // 3060
      var buttonText = opts.$li.attr(this.add_namespace('data-button')) || opts.$li.attr(this.add_namespace('data-text')),
          prevButtonText = opts.$li.attr(this.add_namespace('data-button-prev')) || opts.$li.attr(this.add_namespace('data-prev-text')),
        tipClass = opts.$li.attr('class'),                                                                             // 3063
        $tip_content = $(this.tip_template({                                                                           // 3064
          tip_class : tipClass,                                                                                        // 3065
          index : opts.index,                                                                                          // 3066
          button_text : buttonText,                                                                                    // 3067
          prev_button_text : prevButtonText,                                                                           // 3068
          li : opts.$li                                                                                                // 3069
        }));                                                                                                           // 3070
                                                                                                                       // 3071
      $(this.settings.tip_container).append($tip_content);                                                             // 3072
    },                                                                                                                 // 3073
                                                                                                                       // 3074
    show : function (init, is_prev) {                                                                                  // 3075
      var $timer = null;                                                                                               // 3076
                                                                                                                       // 3077
      // are we paused?                                                                                                // 3078
      if (this.settings.$li === undefined || ($.inArray(this.settings.$li.index(), this.settings.pause_after) === -1)) {
                                                                                                                       // 3080
        // don't go to the next li if the tour was paused                                                              // 3081
        if (this.settings.paused) {                                                                                    // 3082
          this.settings.paused = false;                                                                                // 3083
        } else {                                                                                                       // 3084
          this.set_li(init, is_prev);                                                                                  // 3085
        }                                                                                                              // 3086
                                                                                                                       // 3087
        this.settings.attempts = 0;                                                                                    // 3088
                                                                                                                       // 3089
        if (this.settings.$li.length && this.settings.$target.length > 0) {                                            // 3090
          if (init) { //run when we first start                                                                        // 3091
            this.settings.pre_ride_callback(this.settings.$li.index(), this.settings.$next_tip);                       // 3092
            if (this.settings.modal) {                                                                                 // 3093
              this.show_modal();                                                                                       // 3094
            }                                                                                                          // 3095
          }                                                                                                            // 3096
                                                                                                                       // 3097
          this.settings.pre_step_callback(this.settings.$li.index(), this.settings.$next_tip);                         // 3098
                                                                                                                       // 3099
          if (this.settings.modal && this.settings.expose) {                                                           // 3100
            this.expose();                                                                                             // 3101
          }                                                                                                            // 3102
                                                                                                                       // 3103
          this.settings.tip_settings = $.extend({}, this.settings, this.data_options(this.settings.$li));              // 3104
                                                                                                                       // 3105
          this.settings.timer = parseInt(this.settings.timer, 10);                                                     // 3106
                                                                                                                       // 3107
          this.settings.tip_settings.tip_location_pattern = this.settings.tip_location_patterns[this.settings.tip_settings.tip_location];
                                                                                                                       // 3109
          // scroll and hide bg if not modal                                                                           // 3110
          if (!/body/i.test(this.settings.$target.selector)) {                                                         // 3111
            var joyridemodalbg = $('.joyride-modal-bg');                                                               // 3112
            if (/pop/i.test(this.settings.tipAnimation)) {                                                             // 3113
                joyridemodalbg.hide();                                                                                 // 3114
            } else {                                                                                                   // 3115
                joyridemodalbg.fadeOut(this.settings.tipAnimationFadeSpeed);                                           // 3116
            }                                                                                                          // 3117
            this.scroll_to();                                                                                          // 3118
          }                                                                                                            // 3119
                                                                                                                       // 3120
          if (this.is_phone()) {                                                                                       // 3121
            this.pos_phone(true);                                                                                      // 3122
          } else {                                                                                                     // 3123
            this.pos_default(true);                                                                                    // 3124
          }                                                                                                            // 3125
                                                                                                                       // 3126
          $timer = this.settings.$next_tip.find('.joyride-timer-indicator');                                           // 3127
                                                                                                                       // 3128
          if (/pop/i.test(this.settings.tip_animation)) {                                                              // 3129
                                                                                                                       // 3130
            $timer.width(0);                                                                                           // 3131
                                                                                                                       // 3132
            if (this.settings.timer > 0) {                                                                             // 3133
                                                                                                                       // 3134
              this.settings.$next_tip.show();                                                                          // 3135
                                                                                                                       // 3136
              setTimeout(function () {                                                                                 // 3137
                $timer.animate({                                                                                       // 3138
                  width : $timer.parent().width()                                                                      // 3139
                }, this.settings.timer, 'linear');                                                                     // 3140
              }.bind(this), this.settings.tip_animation_fade_speed);                                                   // 3141
                                                                                                                       // 3142
            } else {                                                                                                   // 3143
              this.settings.$next_tip.show();                                                                          // 3144
                                                                                                                       // 3145
            }                                                                                                          // 3146
                                                                                                                       // 3147
          } else if (/fade/i.test(this.settings.tip_animation)) {                                                      // 3148
                                                                                                                       // 3149
            $timer.width(0);                                                                                           // 3150
                                                                                                                       // 3151
            if (this.settings.timer > 0) {                                                                             // 3152
                                                                                                                       // 3153
              this.settings.$next_tip                                                                                  // 3154
                .fadeIn(this.settings.tip_animation_fade_speed)                                                        // 3155
                .show();                                                                                               // 3156
                                                                                                                       // 3157
              setTimeout(function () {                                                                                 // 3158
                $timer.animate({                                                                                       // 3159
                  width : $timer.parent().width()                                                                      // 3160
                }, this.settings.timer, 'linear');                                                                     // 3161
              }.bind(this), this.settings.tip_animation_fade_speed);                                                   // 3162
                                                                                                                       // 3163
            } else {                                                                                                   // 3164
              this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed);                                  // 3165
            }                                                                                                          // 3166
          }                                                                                                            // 3167
                                                                                                                       // 3168
          this.settings.$current_tip = this.settings.$next_tip;                                                        // 3169
                                                                                                                       // 3170
        // skip non-existant targets                                                                                   // 3171
        } else if (this.settings.$li && this.settings.$target.length < 1) {                                            // 3172
                                                                                                                       // 3173
          this.show(init, is_prev);                                                                                    // 3174
                                                                                                                       // 3175
        } else {                                                                                                       // 3176
                                                                                                                       // 3177
          this.end();                                                                                                  // 3178
                                                                                                                       // 3179
        }                                                                                                              // 3180
      } else {                                                                                                         // 3181
                                                                                                                       // 3182
        this.settings.paused = true;                                                                                   // 3183
                                                                                                                       // 3184
      }                                                                                                                // 3185
                                                                                                                       // 3186
    },                                                                                                                 // 3187
                                                                                                                       // 3188
    is_phone : function () {                                                                                           // 3189
      return matchMedia(Foundation.media_queries.small).matches &&                                                     // 3190
        !matchMedia(Foundation.media_queries.medium).matches;                                                          // 3191
    },                                                                                                                 // 3192
                                                                                                                       // 3193
    hide : function () {                                                                                               // 3194
      if (this.settings.modal && this.settings.expose) {                                                               // 3195
        this.un_expose();                                                                                              // 3196
      }                                                                                                                // 3197
                                                                                                                       // 3198
      if (!this.settings.modal) {                                                                                      // 3199
        $('.joyride-modal-bg').hide();                                                                                 // 3200
      }                                                                                                                // 3201
                                                                                                                       // 3202
      // Prevent scroll bouncing...wait to remove from layout                                                          // 3203
      this.settings.$current_tip.css('visibility', 'hidden');                                                          // 3204
      setTimeout($.proxy(function () {                                                                                 // 3205
        this.hide();                                                                                                   // 3206
        this.css('visibility', 'visible');                                                                             // 3207
      }, this.settings.$current_tip), 0);                                                                              // 3208
      this.settings.post_step_callback(this.settings.$li.index(),                                                      // 3209
        this.settings.$current_tip);                                                                                   // 3210
    },                                                                                                                 // 3211
                                                                                                                       // 3212
    set_li : function (init, is_prev) {                                                                                // 3213
      if (init) {                                                                                                      // 3214
        this.settings.$li = this.settings.$tip_content.eq(this.settings.start_offset);                                 // 3215
        this.set_next_tip();                                                                                           // 3216
        this.settings.$current_tip = this.settings.$next_tip;                                                          // 3217
      } else {                                                                                                         // 3218
        if (is_prev) {                                                                                                 // 3219
          this.settings.$li = this.settings.$li.prev();                                                                // 3220
        } else {                                                                                                       // 3221
          this.settings.$li = this.settings.$li.next();                                                                // 3222
        }                                                                                                              // 3223
        this.set_next_tip();                                                                                           // 3224
      }                                                                                                                // 3225
                                                                                                                       // 3226
      this.set_target();                                                                                               // 3227
    },                                                                                                                 // 3228
                                                                                                                       // 3229
    set_next_tip : function () {                                                                                       // 3230
      this.settings.$next_tip = $('.joyride-tip-guide').eq(this.settings.$li.index());                                 // 3231
      this.settings.$next_tip.data('closed', '');                                                                      // 3232
    },                                                                                                                 // 3233
                                                                                                                       // 3234
    set_target : function () {                                                                                         // 3235
      var cl = this.settings.$li.attr(this.add_namespace('data-class')),                                               // 3236
          id = this.settings.$li.attr(this.add_namespace('data-id')),                                                  // 3237
          $sel = function () {                                                                                         // 3238
            if (id) {                                                                                                  // 3239
              return $(document.getElementById(id));                                                                   // 3240
            } else if (cl) {                                                                                           // 3241
              return $('.' + cl).first();                                                                              // 3242
            } else {                                                                                                   // 3243
              return $('body');                                                                                        // 3244
            }                                                                                                          // 3245
          };                                                                                                           // 3246
                                                                                                                       // 3247
      this.settings.$target = $sel();                                                                                  // 3248
    },                                                                                                                 // 3249
                                                                                                                       // 3250
    scroll_to : function () {                                                                                          // 3251
      var window_half, tipOffset;                                                                                      // 3252
                                                                                                                       // 3253
      window_half = $(window).height() / 2;                                                                            // 3254
      tipOffset = Math.ceil(this.settings.$target.offset().top - window_half + this.settings.$next_tip.outerHeight()); // 3255
                                                                                                                       // 3256
      if (tipOffset != 0) {                                                                                            // 3257
        $('html, body').stop().animate({                                                                               // 3258
          scrollTop : tipOffset                                                                                        // 3259
        }, this.settings.scroll_speed, 'swing');                                                                       // 3260
      }                                                                                                                // 3261
    },                                                                                                                 // 3262
                                                                                                                       // 3263
    paused : function () {                                                                                             // 3264
      return ($.inArray((this.settings.$li.index() + 1), this.settings.pause_after) === -1);                           // 3265
    },                                                                                                                 // 3266
                                                                                                                       // 3267
    restart : function () {                                                                                            // 3268
      this.hide();                                                                                                     // 3269
      this.settings.$li = undefined;                                                                                   // 3270
      this.show('init');                                                                                               // 3271
    },                                                                                                                 // 3272
                                                                                                                       // 3273
    pos_default : function (init) {                                                                                    // 3274
      var $nub = this.settings.$next_tip.find('.joyride-nub'),                                                         // 3275
          nub_width = Math.ceil($nub.outerWidth() / 2),                                                                // 3276
          nub_height = Math.ceil($nub.outerHeight() / 2),                                                              // 3277
          toggle = init || false;                                                                                      // 3278
                                                                                                                       // 3279
      // tip must not be "display: none" to calculate position                                                         // 3280
      if (toggle) {                                                                                                    // 3281
        this.settings.$next_tip.css('visibility', 'hidden');                                                           // 3282
        this.settings.$next_tip.show();                                                                                // 3283
      }                                                                                                                // 3284
                                                                                                                       // 3285
      if (!/body/i.test(this.settings.$target.selector)) {                                                             // 3286
          var topAdjustment = this.settings.tip_settings.tipAdjustmentY ? parseInt(this.settings.tip_settings.tipAdjustmentY) : 0,
              leftAdjustment = this.settings.tip_settings.tipAdjustmentX ? parseInt(this.settings.tip_settings.tipAdjustmentX) : 0;
                                                                                                                       // 3289
          if (this.bottom()) {                                                                                         // 3290
            if (this.rtl) {                                                                                            // 3291
              this.settings.$next_tip.css({                                                                            // 3292
                top : (this.settings.$target.offset().top + nub_height + this.settings.$target.outerHeight() + topAdjustment),
                left : this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth() + leftAdjustment});
            } else {                                                                                                   // 3295
              this.settings.$next_tip.css({                                                                            // 3296
                top : (this.settings.$target.offset().top + nub_height + this.settings.$target.outerHeight() + topAdjustment),
                left : this.settings.$target.offset().left + leftAdjustment});                                         // 3298
            }                                                                                                          // 3299
                                                                                                                       // 3300
            this.nub_position($nub, this.settings.tip_settings.nub_position, 'top');                                   // 3301
                                                                                                                       // 3302
          } else if (this.top()) {                                                                                     // 3303
            if (this.rtl) {                                                                                            // 3304
              this.settings.$next_tip.css({                                                                            // 3305
                top : (this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - nub_height + topAdjustment),
                left : this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth()});
            } else {                                                                                                   // 3308
              this.settings.$next_tip.css({                                                                            // 3309
                top : (this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - nub_height + topAdjustment),
                left : this.settings.$target.offset().left + leftAdjustment});                                         // 3311
            }                                                                                                          // 3312
                                                                                                                       // 3313
            this.nub_position($nub, this.settings.tip_settings.nub_position, 'bottom');                                // 3314
                                                                                                                       // 3315
          } else if (this.right()) {                                                                                   // 3316
                                                                                                                       // 3317
            this.settings.$next_tip.css({                                                                              // 3318
              top : this.settings.$target.offset().top + topAdjustment,                                                // 3319
              left : (this.settings.$target.outerWidth() + this.settings.$target.offset().left + nub_width + leftAdjustment)});
                                                                                                                       // 3321
            this.nub_position($nub, this.settings.tip_settings.nub_position, 'left');                                  // 3322
                                                                                                                       // 3323
          } else if (this.left()) {                                                                                    // 3324
                                                                                                                       // 3325
            this.settings.$next_tip.css({                                                                              // 3326
              top : this.settings.$target.offset().top + topAdjustment,                                                // 3327
              left : (this.settings.$target.offset().left - this.settings.$next_tip.outerWidth() - nub_width + leftAdjustment)});
                                                                                                                       // 3329
            this.nub_position($nub, this.settings.tip_settings.nub_position, 'right');                                 // 3330
                                                                                                                       // 3331
          }                                                                                                            // 3332
                                                                                                                       // 3333
          if (!this.visible(this.corners(this.settings.$next_tip)) && this.settings.attempts < this.settings.tip_settings.tip_location_pattern.length) {
                                                                                                                       // 3335
            $nub.removeClass('bottom')                                                                                 // 3336
              .removeClass('top')                                                                                      // 3337
              .removeClass('right')                                                                                    // 3338
              .removeClass('left');                                                                                    // 3339
                                                                                                                       // 3340
            this.settings.tip_settings.tip_location = this.settings.tip_settings.tip_location_pattern[this.settings.attempts];
                                                                                                                       // 3342
            this.settings.attempts++;                                                                                  // 3343
                                                                                                                       // 3344
            this.pos_default();                                                                                        // 3345
                                                                                                                       // 3346
          }                                                                                                            // 3347
                                                                                                                       // 3348
      } else if (this.settings.$li.length) {                                                                           // 3349
                                                                                                                       // 3350
        this.pos_modal($nub);                                                                                          // 3351
                                                                                                                       // 3352
      }                                                                                                                // 3353
                                                                                                                       // 3354
      if (toggle) {                                                                                                    // 3355
        this.settings.$next_tip.hide();                                                                                // 3356
        this.settings.$next_tip.css('visibility', 'visible');                                                          // 3357
      }                                                                                                                // 3358
                                                                                                                       // 3359
    },                                                                                                                 // 3360
                                                                                                                       // 3361
    pos_phone : function (init) {                                                                                      // 3362
      var tip_height = this.settings.$next_tip.outerHeight(),                                                          // 3363
          tip_offset = this.settings.$next_tip.offset(),                                                               // 3364
          target_height = this.settings.$target.outerHeight(),                                                         // 3365
          $nub = $('.joyride-nub', this.settings.$next_tip),                                                           // 3366
          nub_height = Math.ceil($nub.outerHeight() / 2),                                                              // 3367
          toggle = init || false;                                                                                      // 3368
                                                                                                                       // 3369
      $nub.removeClass('bottom')                                                                                       // 3370
        .removeClass('top')                                                                                            // 3371
        .removeClass('right')                                                                                          // 3372
        .removeClass('left');                                                                                          // 3373
                                                                                                                       // 3374
      if (toggle) {                                                                                                    // 3375
        this.settings.$next_tip.css('visibility', 'hidden');                                                           // 3376
        this.settings.$next_tip.show();                                                                                // 3377
      }                                                                                                                // 3378
                                                                                                                       // 3379
      if (!/body/i.test(this.settings.$target.selector)) {                                                             // 3380
                                                                                                                       // 3381
        if (this.top()) {                                                                                              // 3382
                                                                                                                       // 3383
            this.settings.$next_tip.offset({top : this.settings.$target.offset().top - tip_height - nub_height});      // 3384
            $nub.addClass('bottom');                                                                                   // 3385
                                                                                                                       // 3386
        } else {                                                                                                       // 3387
                                                                                                                       // 3388
          this.settings.$next_tip.offset({top : this.settings.$target.offset().top + target_height + nub_height});     // 3389
          $nub.addClass('top');                                                                                        // 3390
                                                                                                                       // 3391
        }                                                                                                              // 3392
                                                                                                                       // 3393
      } else if (this.settings.$li.length) {                                                                           // 3394
        this.pos_modal($nub);                                                                                          // 3395
      }                                                                                                                // 3396
                                                                                                                       // 3397
      if (toggle) {                                                                                                    // 3398
        this.settings.$next_tip.hide();                                                                                // 3399
        this.settings.$next_tip.css('visibility', 'visible');                                                          // 3400
      }                                                                                                                // 3401
    },                                                                                                                 // 3402
                                                                                                                       // 3403
    pos_modal : function ($nub) {                                                                                      // 3404
      this.center();                                                                                                   // 3405
      $nub.hide();                                                                                                     // 3406
                                                                                                                       // 3407
      this.show_modal();                                                                                               // 3408
    },                                                                                                                 // 3409
                                                                                                                       // 3410
    show_modal : function () {                                                                                         // 3411
      if (!this.settings.$next_tip.data('closed')) {                                                                   // 3412
        var joyridemodalbg =  $('.joyride-modal-bg');                                                                  // 3413
        if (joyridemodalbg.length < 1) {                                                                               // 3414
          var joyridemodalbg = $(this.settings.template.modal);                                                        // 3415
          joyridemodalbg.appendTo('body');                                                                             // 3416
        }                                                                                                              // 3417
                                                                                                                       // 3418
        if (/pop/i.test(this.settings.tip_animation)) {                                                                // 3419
            joyridemodalbg.show();                                                                                     // 3420
        } else {                                                                                                       // 3421
            joyridemodalbg.fadeIn(this.settings.tip_animation_fade_speed);                                             // 3422
        }                                                                                                              // 3423
      }                                                                                                                // 3424
    },                                                                                                                 // 3425
                                                                                                                       // 3426
    expose : function () {                                                                                             // 3427
      var expose,                                                                                                      // 3428
          exposeCover,                                                                                                 // 3429
          el,                                                                                                          // 3430
          origCSS,                                                                                                     // 3431
          origClasses,                                                                                                 // 3432
          randId = 'expose-' + this.random_str(6);                                                                     // 3433
                                                                                                                       // 3434
      if (arguments.length > 0 && arguments[0] instanceof $) {                                                         // 3435
        el = arguments[0];                                                                                             // 3436
      } else if (this.settings.$target && !/body/i.test(this.settings.$target.selector)) {                             // 3437
        el = this.settings.$target;                                                                                    // 3438
      } else {                                                                                                         // 3439
        return false;                                                                                                  // 3440
      }                                                                                                                // 3441
                                                                                                                       // 3442
      if (el.length < 1) {                                                                                             // 3443
        if (window.console) {                                                                                          // 3444
          console.error('element not valid', el);                                                                      // 3445
        }                                                                                                              // 3446
        return false;                                                                                                  // 3447
      }                                                                                                                // 3448
                                                                                                                       // 3449
      expose = $(this.settings.template.expose);                                                                       // 3450
      this.settings.$body.append(expose);                                                                              // 3451
      expose.css({                                                                                                     // 3452
        top : el.offset().top,                                                                                         // 3453
        left : el.offset().left,                                                                                       // 3454
        width : el.outerWidth(true),                                                                                   // 3455
        height : el.outerHeight(true)                                                                                  // 3456
      });                                                                                                              // 3457
                                                                                                                       // 3458
      exposeCover = $(this.settings.template.expose_cover);                                                            // 3459
                                                                                                                       // 3460
      origCSS = {                                                                                                      // 3461
        zIndex : el.css('z-index'),                                                                                    // 3462
        position : el.css('position')                                                                                  // 3463
      };                                                                                                               // 3464
                                                                                                                       // 3465
      origClasses = el.attr('class') == null ? '' : el.attr('class');                                                  // 3466
                                                                                                                       // 3467
      el.css('z-index', parseInt(expose.css('z-index')) + 1);                                                          // 3468
                                                                                                                       // 3469
      if (origCSS.position == 'static') {                                                                              // 3470
        el.css('position', 'relative');                                                                                // 3471
      }                                                                                                                // 3472
                                                                                                                       // 3473
      el.data('expose-css', origCSS);                                                                                  // 3474
      el.data('orig-class', origClasses);                                                                              // 3475
      el.attr('class', origClasses + ' ' + this.settings.expose_add_class);                                            // 3476
                                                                                                                       // 3477
      exposeCover.css({                                                                                                // 3478
        top : el.offset().top,                                                                                         // 3479
        left : el.offset().left,                                                                                       // 3480
        width : el.outerWidth(true),                                                                                   // 3481
        height : el.outerHeight(true)                                                                                  // 3482
      });                                                                                                              // 3483
                                                                                                                       // 3484
      if (this.settings.modal) {                                                                                       // 3485
        this.show_modal();                                                                                             // 3486
      }                                                                                                                // 3487
                                                                                                                       // 3488
      this.settings.$body.append(exposeCover);                                                                         // 3489
      expose.addClass(randId);                                                                                         // 3490
      exposeCover.addClass(randId);                                                                                    // 3491
      el.data('expose', randId);                                                                                       // 3492
      this.settings.post_expose_callback(this.settings.$li.index(), this.settings.$next_tip, el);                      // 3493
      this.add_exposed(el);                                                                                            // 3494
    },                                                                                                                 // 3495
                                                                                                                       // 3496
    un_expose : function () {                                                                                          // 3497
      var exposeId,                                                                                                    // 3498
          el,                                                                                                          // 3499
          expose,                                                                                                      // 3500
          origCSS,                                                                                                     // 3501
          origClasses,                                                                                                 // 3502
          clearAll = false;                                                                                            // 3503
                                                                                                                       // 3504
      if (arguments.length > 0 && arguments[0] instanceof $) {                                                         // 3505
        el = arguments[0];                                                                                             // 3506
      } else if (this.settings.$target && !/body/i.test(this.settings.$target.selector)) {                             // 3507
        el = this.settings.$target;                                                                                    // 3508
      } else {                                                                                                         // 3509
        return false;                                                                                                  // 3510
      }                                                                                                                // 3511
                                                                                                                       // 3512
      if (el.length < 1) {                                                                                             // 3513
        if (window.console) {                                                                                          // 3514
          console.error('element not valid', el);                                                                      // 3515
        }                                                                                                              // 3516
        return false;                                                                                                  // 3517
      }                                                                                                                // 3518
                                                                                                                       // 3519
      exposeId = el.data('expose');                                                                                    // 3520
      expose = $('.' + exposeId);                                                                                      // 3521
                                                                                                                       // 3522
      if (arguments.length > 1) {                                                                                      // 3523
        clearAll = arguments[1];                                                                                       // 3524
      }                                                                                                                // 3525
                                                                                                                       // 3526
      if (clearAll === true) {                                                                                         // 3527
        $('.joyride-expose-wrapper,.joyride-expose-cover').remove();                                                   // 3528
      } else {                                                                                                         // 3529
        expose.remove();                                                                                               // 3530
      }                                                                                                                // 3531
                                                                                                                       // 3532
      origCSS = el.data('expose-css');                                                                                 // 3533
                                                                                                                       // 3534
      if (origCSS.zIndex == 'auto') {                                                                                  // 3535
        el.css('z-index', '');                                                                                         // 3536
      } else {                                                                                                         // 3537
        el.css('z-index', origCSS.zIndex);                                                                             // 3538
      }                                                                                                                // 3539
                                                                                                                       // 3540
      if (origCSS.position != el.css('position')) {                                                                    // 3541
        if (origCSS.position == 'static') {// this is default, no need to set it.                                      // 3542
          el.css('position', '');                                                                                      // 3543
        } else {                                                                                                       // 3544
          el.css('position', origCSS.position);                                                                        // 3545
        }                                                                                                              // 3546
      }                                                                                                                // 3547
                                                                                                                       // 3548
      origClasses = el.data('orig-class');                                                                             // 3549
      el.attr('class', origClasses);                                                                                   // 3550
      el.removeData('orig-classes');                                                                                   // 3551
                                                                                                                       // 3552
      el.removeData('expose');                                                                                         // 3553
      el.removeData('expose-z-index');                                                                                 // 3554
      this.remove_exposed(el);                                                                                         // 3555
    },                                                                                                                 // 3556
                                                                                                                       // 3557
    add_exposed : function (el) {                                                                                      // 3558
      this.settings.exposed = this.settings.exposed || [];                                                             // 3559
      if (el instanceof $ || typeof el === 'object') {                                                                 // 3560
        this.settings.exposed.push(el[0]);                                                                             // 3561
      } else if (typeof el == 'string') {                                                                              // 3562
        this.settings.exposed.push(el);                                                                                // 3563
      }                                                                                                                // 3564
    },                                                                                                                 // 3565
                                                                                                                       // 3566
    remove_exposed : function (el) {                                                                                   // 3567
      var search, i;                                                                                                   // 3568
      if (el instanceof $) {                                                                                           // 3569
        search = el[0]                                                                                                 // 3570
      } else if (typeof el == 'string') {                                                                              // 3571
        search = el;                                                                                                   // 3572
      }                                                                                                                // 3573
                                                                                                                       // 3574
      this.settings.exposed = this.settings.exposed || [];                                                             // 3575
      i = this.settings.exposed.length;                                                                                // 3576
                                                                                                                       // 3577
      while (i--) {                                                                                                    // 3578
        if (this.settings.exposed[i] == search) {                                                                      // 3579
          this.settings.exposed.splice(i, 1);                                                                          // 3580
          return;                                                                                                      // 3581
        }                                                                                                              // 3582
      }                                                                                                                // 3583
    },                                                                                                                 // 3584
                                                                                                                       // 3585
    center : function () {                                                                                             // 3586
      var $w = $(window);                                                                                              // 3587
                                                                                                                       // 3588
      this.settings.$next_tip.css({                                                                                    // 3589
        top : ((($w.height() - this.settings.$next_tip.outerHeight()) / 2) + $w.scrollTop()),                          // 3590
        left : ((($w.width() - this.settings.$next_tip.outerWidth()) / 2) + $w.scrollLeft())                           // 3591
      });                                                                                                              // 3592
                                                                                                                       // 3593
      return true;                                                                                                     // 3594
    },                                                                                                                 // 3595
                                                                                                                       // 3596
    bottom : function () {                                                                                             // 3597
      return /bottom/i.test(this.settings.tip_settings.tip_location);                                                  // 3598
    },                                                                                                                 // 3599
                                                                                                                       // 3600
    top : function () {                                                                                                // 3601
      return /top/i.test(this.settings.tip_settings.tip_location);                                                     // 3602
    },                                                                                                                 // 3603
                                                                                                                       // 3604
    right : function () {                                                                                              // 3605
      return /right/i.test(this.settings.tip_settings.tip_location);                                                   // 3606
    },                                                                                                                 // 3607
                                                                                                                       // 3608
    left : function () {                                                                                               // 3609
      return /left/i.test(this.settings.tip_settings.tip_location);                                                    // 3610
    },                                                                                                                 // 3611
                                                                                                                       // 3612
    corners : function (el) {                                                                                          // 3613
      var w = $(window),                                                                                               // 3614
          window_half = w.height() / 2,                                                                                // 3615
          //using this to calculate since scroll may not have finished yet.                                            // 3616
          tipOffset = Math.ceil(this.settings.$target.offset().top - window_half + this.settings.$next_tip.outerHeight()),
          right = w.width() + w.scrollLeft(),                                                                          // 3618
          offsetBottom =  w.height() + tipOffset,                                                                      // 3619
          bottom = w.height() + w.scrollTop(),                                                                         // 3620
          top = w.scrollTop();                                                                                         // 3621
                                                                                                                       // 3622
      if (tipOffset < top) {                                                                                           // 3623
        if (tipOffset < 0) {                                                                                           // 3624
          top = 0;                                                                                                     // 3625
        } else {                                                                                                       // 3626
          top = tipOffset;                                                                                             // 3627
        }                                                                                                              // 3628
      }                                                                                                                // 3629
                                                                                                                       // 3630
      if (offsetBottom > bottom) {                                                                                     // 3631
        bottom = offsetBottom;                                                                                         // 3632
      }                                                                                                                // 3633
                                                                                                                       // 3634
      return [                                                                                                         // 3635
        el.offset().top < top,                                                                                         // 3636
        right < el.offset().left + el.outerWidth(),                                                                    // 3637
        bottom < el.offset().top + el.outerHeight(),                                                                   // 3638
        w.scrollLeft() > el.offset().left                                                                              // 3639
      ];                                                                                                               // 3640
    },                                                                                                                 // 3641
                                                                                                                       // 3642
    visible : function (hidden_corners) {                                                                              // 3643
      var i = hidden_corners.length;                                                                                   // 3644
                                                                                                                       // 3645
      while (i--) {                                                                                                    // 3646
        if (hidden_corners[i]) {                                                                                       // 3647
          return false;                                                                                                // 3648
        }                                                                                                              // 3649
      }                                                                                                                // 3650
                                                                                                                       // 3651
      return true;                                                                                                     // 3652
    },                                                                                                                 // 3653
                                                                                                                       // 3654
    nub_position : function (nub, pos, def) {                                                                          // 3655
      if (pos === 'auto') {                                                                                            // 3656
        nub.addClass(def);                                                                                             // 3657
      } else {                                                                                                         // 3658
        nub.addClass(pos);                                                                                             // 3659
      }                                                                                                                // 3660
    },                                                                                                                 // 3661
                                                                                                                       // 3662
    startTimer : function () {                                                                                         // 3663
      if (this.settings.$li.length) {                                                                                  // 3664
        this.settings.automate = setTimeout(function () {                                                              // 3665
          this.hide();                                                                                                 // 3666
          this.show();                                                                                                 // 3667
          this.startTimer();                                                                                           // 3668
        }.bind(this), this.settings.timer);                                                                            // 3669
      } else {                                                                                                         // 3670
        clearTimeout(this.settings.automate);                                                                          // 3671
      }                                                                                                                // 3672
    },                                                                                                                 // 3673
                                                                                                                       // 3674
    end : function (abort) {                                                                                           // 3675
      if (this.settings.cookie_monster) {                                                                              // 3676
        $.cookie(this.settings.cookie_name, 'ridden', {expires : this.settings.cookie_expires, domain : this.settings.cookie_domain});
      }                                                                                                                // 3678
                                                                                                                       // 3679
      if (this.settings.timer > 0) {                                                                                   // 3680
        clearTimeout(this.settings.automate);                                                                          // 3681
      }                                                                                                                // 3682
                                                                                                                       // 3683
      if (this.settings.modal && this.settings.expose) {                                                               // 3684
        this.un_expose();                                                                                              // 3685
      }                                                                                                                // 3686
                                                                                                                       // 3687
      // Unplug keystrokes listener                                                                                    // 3688
      $(this.scope).off('keyup.joyride')                                                                               // 3689
                                                                                                                       // 3690
      this.settings.$next_tip.data('closed', true);                                                                    // 3691
      this.settings.riding = false;                                                                                    // 3692
                                                                                                                       // 3693
      $('.joyride-modal-bg').hide();                                                                                   // 3694
      this.settings.$current_tip.hide();                                                                               // 3695
                                                                                                                       // 3696
      if (typeof abort === 'undefined' || abort === false) {                                                           // 3697
        this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip);                       // 3698
        this.settings.post_ride_callback(this.settings.$li.index(), this.settings.$current_tip);                       // 3699
      }                                                                                                                // 3700
                                                                                                                       // 3701
      $('.joyride-tip-guide').remove();                                                                                // 3702
    },                                                                                                                 // 3703
                                                                                                                       // 3704
    off : function () {                                                                                                // 3705
      $(this.scope).off('.joyride');                                                                                   // 3706
      $(window).off('.joyride');                                                                                       // 3707
      $('.joyride-close-tip, .joyride-next-tip, .joyride-modal-bg').off('.joyride');                                   // 3708
      $('.joyride-tip-guide, .joyride-modal-bg').remove();                                                             // 3709
      clearTimeout(this.settings.automate);                                                                            // 3710
      this.settings = {};                                                                                              // 3711
    },                                                                                                                 // 3712
                                                                                                                       // 3713
    reflow : function () {}                                                                                            // 3714
  };                                                                                                                   // 3715
}(jQuery, window, window.document));                                                                                   // 3716
                                                                                                                       // 3717
;(function ($, window, document, undefined) {                                                                          // 3718
  'use strict';                                                                                                        // 3719
                                                                                                                       // 3720
  Foundation.libs['magellan-expedition'] = {                                                                           // 3721
    name : 'magellan-expedition',                                                                                      // 3722
                                                                                                                       // 3723
    version : '5.5.2',                                                                                                 // 3724
                                                                                                                       // 3725
    settings : {                                                                                                       // 3726
      active_class : 'active',                                                                                         // 3727
      threshold : 0, // pixels from the top of the expedition for it to become fixes                                   // 3728
      destination_threshold : 20, // pixels from the top of destination for it to be considered active                 // 3729
      throttle_delay : 30, // calculation throttling to increase framerate                                             // 3730
      fixed_top : 0, // top distance in pixels assigend to the fixed element on scroll                                 // 3731
      offset_by_height : true,  // whether to offset the destination by the expedition height. Usually you want this to be true, unless your expedition is on the side.
      duration : 700, // animation duration time                                                                       // 3733
      easing : 'swing' // animation easing                                                                             // 3734
    },                                                                                                                 // 3735
                                                                                                                       // 3736
    init : function (scope, method, options) {                                                                         // 3737
      Foundation.inherit(this, 'throttle');                                                                            // 3738
      this.bindings(method, options);                                                                                  // 3739
    },                                                                                                                 // 3740
                                                                                                                       // 3741
    events : function () {                                                                                             // 3742
      var self = this,                                                                                                 // 3743
          S = self.S,                                                                                                  // 3744
          settings = self.settings;                                                                                    // 3745
                                                                                                                       // 3746
      // initialize expedition offset                                                                                  // 3747
      self.set_expedition_position();                                                                                  // 3748
                                                                                                                       // 3749
      S(self.scope)                                                                                                    // 3750
        .off('.magellan')                                                                                              // 3751
        .on('click.fndtn.magellan', '[' + self.add_namespace('data-magellan-arrival') + '] a[href*=#]', function (e) { // 3752
          var sameHost = ((this.hostname === location.hostname) || !this.hostname),                                    // 3753
              samePath = self.filterPathname(location.pathname) === self.filterPathname(this.pathname),                // 3754
              testHash = this.hash.replace(/(:|\.|\/)/g, '\\$1'),                                                      // 3755
              anchor = this;                                                                                           // 3756
                                                                                                                       // 3757
          if (sameHost && samePath && testHash) {                                                                      // 3758
            e.preventDefault();                                                                                        // 3759
            var expedition = $(this).closest('[' + self.attr_name() + ']'),                                            // 3760
                settings = expedition.data('magellan-expedition-init'),                                                // 3761
                hash = this.hash.split('#').join(''),                                                                  // 3762
                target = $('a[name="' + hash + '"]');                                                                  // 3763
                                                                                                                       // 3764
            if (target.length === 0) {                                                                                 // 3765
              target = $('#' + hash);                                                                                  // 3766
                                                                                                                       // 3767
            }                                                                                                          // 3768
                                                                                                                       // 3769
            // Account for expedition height if fixed position                                                         // 3770
            var scroll_top = target.offset().top - settings.destination_threshold + 1;                                 // 3771
            if (settings.offset_by_height) {                                                                           // 3772
              scroll_top = scroll_top - expedition.outerHeight();                                                      // 3773
            }                                                                                                          // 3774
            $('html, body').stop().animate({                                                                           // 3775
              'scrollTop' : scroll_top                                                                                 // 3776
            }, settings.duration, settings.easing, function () {                                                       // 3777
              if (history.pushState) {                                                                                 // 3778
                        history.pushState(null, null, anchor.pathname + '#' + hash);                                   // 3779
              }                                                                                                        // 3780
                    else {                                                                                             // 3781
                        location.hash = anchor.pathname + '#' + hash;                                                  // 3782
                    }                                                                                                  // 3783
            });                                                                                                        // 3784
          }                                                                                                            // 3785
        })                                                                                                             // 3786
        .on('scroll.fndtn.magellan', self.throttle(this.check_for_arrivals.bind(this), settings.throttle_delay));      // 3787
    },                                                                                                                 // 3788
                                                                                                                       // 3789
    check_for_arrivals : function () {                                                                                 // 3790
      var self = this;                                                                                                 // 3791
      self.update_arrivals();                                                                                          // 3792
      self.update_expedition_positions();                                                                              // 3793
    },                                                                                                                 // 3794
                                                                                                                       // 3795
    set_expedition_position : function () {                                                                            // 3796
      var self = this;                                                                                                 // 3797
      $('[' + this.attr_name() + '=fixed]', self.scope).each(function (idx, el) {                                      // 3798
        var expedition = $(this),                                                                                      // 3799
            settings = expedition.data('magellan-expedition-init'),                                                    // 3800
            styles = expedition.attr('styles'), // save styles                                                         // 3801
            top_offset, fixed_top;                                                                                     // 3802
                                                                                                                       // 3803
        expedition.attr('style', '');                                                                                  // 3804
        top_offset = expedition.offset().top + settings.threshold;                                                     // 3805
                                                                                                                       // 3806
        //set fixed-top by attribute                                                                                   // 3807
        fixed_top = parseInt(expedition.data('magellan-fixed-top'));                                                   // 3808
        if (!isNaN(fixed_top)) {                                                                                       // 3809
          self.settings.fixed_top = fixed_top;                                                                         // 3810
        }                                                                                                              // 3811
                                                                                                                       // 3812
        expedition.data(self.data_attr('magellan-top-offset'), top_offset);                                            // 3813
        expedition.attr('style', styles);                                                                              // 3814
      });                                                                                                              // 3815
    },                                                                                                                 // 3816
                                                                                                                       // 3817
    update_expedition_positions : function () {                                                                        // 3818
      var self = this,                                                                                                 // 3819
          window_top_offset = $(window).scrollTop();                                                                   // 3820
                                                                                                                       // 3821
      $('[' + this.attr_name() + '=fixed]', self.scope).each(function () {                                             // 3822
        var expedition = $(this),                                                                                      // 3823
            settings = expedition.data('magellan-expedition-init'),                                                    // 3824
            styles = expedition.attr('style'), // save styles                                                          // 3825
            top_offset = expedition.data('magellan-top-offset');                                                       // 3826
                                                                                                                       // 3827
        //scroll to the top distance                                                                                   // 3828
        if (window_top_offset + self.settings.fixed_top >= top_offset) {                                               // 3829
          // Placeholder allows height calculations to be consistent even when                                         // 3830
          // appearing to switch between fixed/non-fixed placement                                                     // 3831
          var placeholder = expedition.prev('[' + self.add_namespace('data-magellan-expedition-clone') + ']');         // 3832
          if (placeholder.length === 0) {                                                                              // 3833
            placeholder = expedition.clone();                                                                          // 3834
            placeholder.removeAttr(self.attr_name());                                                                  // 3835
            placeholder.attr(self.add_namespace('data-magellan-expedition-clone'), '');                                // 3836
            expedition.before(placeholder);                                                                            // 3837
          }                                                                                                            // 3838
          expedition.css({position :'fixed', top : settings.fixed_top}).addClass('fixed');                             // 3839
        } else {                                                                                                       // 3840
          expedition.prev('[' + self.add_namespace('data-magellan-expedition-clone') + ']').remove();                  // 3841
          expedition.attr('style', styles).css('position', '').css('top', '').removeClass('fixed');                    // 3842
        }                                                                                                              // 3843
      });                                                                                                              // 3844
    },                                                                                                                 // 3845
                                                                                                                       // 3846
    update_arrivals : function () {                                                                                    // 3847
      var self = this,                                                                                                 // 3848
          window_top_offset = $(window).scrollTop();                                                                   // 3849
                                                                                                                       // 3850
      $('[' + this.attr_name() + ']', self.scope).each(function () {                                                   // 3851
        var expedition = $(this),                                                                                      // 3852
            settings = expedition.data(self.attr_name(true) + '-init'),                                                // 3853
            offsets = self.offsets(expedition, window_top_offset),                                                     // 3854
            arrivals = expedition.find('[' + self.add_namespace('data-magellan-arrival') + ']'),                       // 3855
            active_item = false;                                                                                       // 3856
        offsets.each(function (idx, item) {                                                                            // 3857
          if (item.viewport_offset >= item.top_offset) {                                                               // 3858
            var arrivals = expedition.find('[' + self.add_namespace('data-magellan-arrival') + ']');                   // 3859
            arrivals.not(item.arrival).removeClass(settings.active_class);                                             // 3860
            item.arrival.addClass(settings.active_class);                                                              // 3861
            active_item = true;                                                                                        // 3862
            return true;                                                                                               // 3863
          }                                                                                                            // 3864
        });                                                                                                            // 3865
                                                                                                                       // 3866
        if (!active_item) {                                                                                            // 3867
          arrivals.removeClass(settings.active_class);                                                                 // 3868
        }                                                                                                              // 3869
      });                                                                                                              // 3870
    },                                                                                                                 // 3871
                                                                                                                       // 3872
    offsets : function (expedition, window_offset) {                                                                   // 3873
      var self = this,                                                                                                 // 3874
          settings = expedition.data(self.attr_name(true) + '-init'),                                                  // 3875
          viewport_offset = window_offset;                                                                             // 3876
                                                                                                                       // 3877
      return expedition.find('[' + self.add_namespace('data-magellan-arrival') + ']').map(function (idx, el) {         // 3878
        var name = $(this).data(self.data_attr('magellan-arrival')),                                                   // 3879
            dest = $('[' + self.add_namespace('data-magellan-destination') + '=' + name + ']');                        // 3880
        if (dest.length > 0) {                                                                                         // 3881
          var top_offset = dest.offset().top - settings.destination_threshold;                                         // 3882
          if (settings.offset_by_height) {                                                                             // 3883
            top_offset = top_offset - expedition.outerHeight();                                                        // 3884
          }                                                                                                            // 3885
          top_offset = Math.floor(top_offset);                                                                         // 3886
          return {                                                                                                     // 3887
            destination : dest,                                                                                        // 3888
            arrival : $(this),                                                                                         // 3889
            top_offset : top_offset,                                                                                   // 3890
            viewport_offset : viewport_offset                                                                          // 3891
          }                                                                                                            // 3892
        }                                                                                                              // 3893
      }).sort(function (a, b) {                                                                                        // 3894
        if (a.top_offset < b.top_offset) {                                                                             // 3895
          return -1;                                                                                                   // 3896
        }                                                                                                              // 3897
        if (a.top_offset > b.top_offset) {                                                                             // 3898
          return 1;                                                                                                    // 3899
        }                                                                                                              // 3900
        return 0;                                                                                                      // 3901
      });                                                                                                              // 3902
    },                                                                                                                 // 3903
                                                                                                                       // 3904
    data_attr : function (str) {                                                                                       // 3905
      if (this.namespace.length > 0) {                                                                                 // 3906
        return this.namespace + '-' + str;                                                                             // 3907
      }                                                                                                                // 3908
                                                                                                                       // 3909
      return str;                                                                                                      // 3910
    },                                                                                                                 // 3911
                                                                                                                       // 3912
    off : function () {                                                                                                // 3913
      this.S(this.scope).off('.magellan');                                                                             // 3914
      this.S(window).off('.magellan');                                                                                 // 3915
    },                                                                                                                 // 3916
                                                                                                                       // 3917
    filterPathname : function (pathname) {                                                                             // 3918
      pathname = pathname || '';                                                                                       // 3919
      return pathname                                                                                                  // 3920
          .replace(/^\//,'')                                                                                           // 3921
          .replace(/(?:index|default).[a-zA-Z]{3,4}$/,'')                                                              // 3922
          .replace(/\/$/,'');                                                                                          // 3923
    },                                                                                                                 // 3924
                                                                                                                       // 3925
    reflow : function () {                                                                                             // 3926
      var self = this;                                                                                                 // 3927
      // remove placeholder expeditions used for height calculation purposes                                           // 3928
      $('[' + self.add_namespace('data-magellan-expedition-clone') + ']', self.scope).remove();                        // 3929
    }                                                                                                                  // 3930
  };                                                                                                                   // 3931
}(jQuery, window, window.document));                                                                                   // 3932
                                                                                                                       // 3933
;(function ($, window, document, undefined) {                                                                          // 3934
  'use strict';                                                                                                        // 3935
                                                                                                                       // 3936
  Foundation.libs.offcanvas = {                                                                                        // 3937
    name : 'offcanvas',                                                                                                // 3938
                                                                                                                       // 3939
    version : '5.5.2',                                                                                                 // 3940
                                                                                                                       // 3941
    settings : {                                                                                                       // 3942
      open_method : 'move',                                                                                            // 3943
      close_on_click : false                                                                                           // 3944
    },                                                                                                                 // 3945
                                                                                                                       // 3946
    init : function (scope, method, options) {                                                                         // 3947
      this.bindings(method, options);                                                                                  // 3948
    },                                                                                                                 // 3949
                                                                                                                       // 3950
    events : function () {                                                                                             // 3951
      var self = this,                                                                                                 // 3952
          S = self.S,                                                                                                  // 3953
          move_class = '',                                                                                             // 3954
          right_postfix = '',                                                                                          // 3955
          left_postfix = '';                                                                                           // 3956
                                                                                                                       // 3957
      if (this.settings.open_method === 'move') {                                                                      // 3958
        move_class = 'move-';                                                                                          // 3959
        right_postfix = 'right';                                                                                       // 3960
        left_postfix = 'left';                                                                                         // 3961
      } else if (this.settings.open_method === 'overlap_single') {                                                     // 3962
        move_class = 'offcanvas-overlap-';                                                                             // 3963
        right_postfix = 'right';                                                                                       // 3964
        left_postfix = 'left';                                                                                         // 3965
      } else if (this.settings.open_method === 'overlap') {                                                            // 3966
        move_class = 'offcanvas-overlap';                                                                              // 3967
      }                                                                                                                // 3968
                                                                                                                       // 3969
      S(this.scope).off('.offcanvas')                                                                                  // 3970
        .on('click.fndtn.offcanvas', '.left-off-canvas-toggle', function (e) {                                         // 3971
          self.click_toggle_class(e, move_class + right_postfix);                                                      // 3972
          if (self.settings.open_method !== 'overlap') {                                                               // 3973
            S('.left-submenu').removeClass(move_class + right_postfix);                                                // 3974
          }                                                                                                            // 3975
          $('.left-off-canvas-toggle').attr('aria-expanded', 'true');                                                  // 3976
        })                                                                                                             // 3977
        .on('click.fndtn.offcanvas', '.left-off-canvas-menu a', function (e) {                                         // 3978
          var settings = self.get_settings(e);                                                                         // 3979
          var parent = S(this).parent();                                                                               // 3980
                                                                                                                       // 3981
          if (settings.close_on_click && !parent.hasClass('has-submenu') && !parent.hasClass('back')) {                // 3982
            self.hide.call(self, move_class + right_postfix, self.get_wrapper(e));                                     // 3983
            parent.parent().removeClass(move_class + right_postfix);                                                   // 3984
          } else if (S(this).parent().hasClass('has-submenu')) {                                                       // 3985
            e.preventDefault();                                                                                        // 3986
            S(this).siblings('.left-submenu').toggleClass(move_class + right_postfix);                                 // 3987
          } else if (parent.hasClass('back')) {                                                                        // 3988
            e.preventDefault();                                                                                        // 3989
            parent.parent().removeClass(move_class + right_postfix);                                                   // 3990
          }                                                                                                            // 3991
          $('.left-off-canvas-toggle').attr('aria-expanded', 'true');                                                  // 3992
        })                                                                                                             // 3993
        .on('click.fndtn.offcanvas', '.right-off-canvas-toggle', function (e) {                                        // 3994
          self.click_toggle_class(e, move_class + left_postfix);                                                       // 3995
          if (self.settings.open_method !== 'overlap') {                                                               // 3996
            S('.right-submenu').removeClass(move_class + left_postfix);                                                // 3997
          }                                                                                                            // 3998
          $('.right-off-canvas-toggle').attr('aria-expanded', 'true');                                                 // 3999
        })                                                                                                             // 4000
        .on('click.fndtn.offcanvas', '.right-off-canvas-menu a', function (e) {                                        // 4001
          var settings = self.get_settings(e);                                                                         // 4002
          var parent = S(this).parent();                                                                               // 4003
                                                                                                                       // 4004
          if (settings.close_on_click && !parent.hasClass('has-submenu') && !parent.hasClass('back')) {                // 4005
            self.hide.call(self, move_class + left_postfix, self.get_wrapper(e));                                      // 4006
            parent.parent().removeClass(move_class + left_postfix);                                                    // 4007
          } else if (S(this).parent().hasClass('has-submenu')) {                                                       // 4008
            e.preventDefault();                                                                                        // 4009
            S(this).siblings('.right-submenu').toggleClass(move_class + left_postfix);                                 // 4010
          } else if (parent.hasClass('back')) {                                                                        // 4011
            e.preventDefault();                                                                                        // 4012
            parent.parent().removeClass(move_class + left_postfix);                                                    // 4013
          }                                                                                                            // 4014
          $('.right-off-canvas-toggle').attr('aria-expanded', 'true');                                                 // 4015
        })                                                                                                             // 4016
        .on('click.fndtn.offcanvas', '.exit-off-canvas', function (e) {                                                // 4017
          self.click_remove_class(e, move_class + left_postfix);                                                       // 4018
          S('.right-submenu').removeClass(move_class + left_postfix);                                                  // 4019
          if (right_postfix) {                                                                                         // 4020
            self.click_remove_class(e, move_class + right_postfix);                                                    // 4021
            S('.left-submenu').removeClass(move_class + left_postfix);                                                 // 4022
          }                                                                                                            // 4023
          $('.right-off-canvas-toggle').attr('aria-expanded', 'true');                                                 // 4024
        })                                                                                                             // 4025
        .on('click.fndtn.offcanvas', '.exit-off-canvas', function (e) {                                                // 4026
          self.click_remove_class(e, move_class + left_postfix);                                                       // 4027
          $('.left-off-canvas-toggle').attr('aria-expanded', 'false');                                                 // 4028
          if (right_postfix) {                                                                                         // 4029
            self.click_remove_class(e, move_class + right_postfix);                                                    // 4030
            $('.right-off-canvas-toggle').attr('aria-expanded', 'false');                                              // 4031
          }                                                                                                            // 4032
        });                                                                                                            // 4033
    },                                                                                                                 // 4034
                                                                                                                       // 4035
    toggle : function (class_name, $off_canvas) {                                                                      // 4036
      $off_canvas = $off_canvas || this.get_wrapper();                                                                 // 4037
      if ($off_canvas.is('.' + class_name)) {                                                                          // 4038
        this.hide(class_name, $off_canvas);                                                                            // 4039
      } else {                                                                                                         // 4040
        this.show(class_name, $off_canvas);                                                                            // 4041
      }                                                                                                                // 4042
    },                                                                                                                 // 4043
                                                                                                                       // 4044
    show : function (class_name, $off_canvas) {                                                                        // 4045
      $off_canvas = $off_canvas || this.get_wrapper();                                                                 // 4046
      $off_canvas.trigger('open.fndtn.offcanvas');                                                                     // 4047
      $off_canvas.addClass(class_name);                                                                                // 4048
    },                                                                                                                 // 4049
                                                                                                                       // 4050
    hide : function (class_name, $off_canvas) {                                                                        // 4051
      $off_canvas = $off_canvas || this.get_wrapper();                                                                 // 4052
      $off_canvas.trigger('close.fndtn.offcanvas');                                                                    // 4053
      $off_canvas.removeClass(class_name);                                                                             // 4054
    },                                                                                                                 // 4055
                                                                                                                       // 4056
    click_toggle_class : function (e, class_name) {                                                                    // 4057
      e.preventDefault();                                                                                              // 4058
      var $off_canvas = this.get_wrapper(e);                                                                           // 4059
      this.toggle(class_name, $off_canvas);                                                                            // 4060
    },                                                                                                                 // 4061
                                                                                                                       // 4062
    click_remove_class : function (e, class_name) {                                                                    // 4063
      e.preventDefault();                                                                                              // 4064
      var $off_canvas = this.get_wrapper(e);                                                                           // 4065
      this.hide(class_name, $off_canvas);                                                                              // 4066
    },                                                                                                                 // 4067
                                                                                                                       // 4068
    get_settings : function (e) {                                                                                      // 4069
      var offcanvas  = this.S(e.target).closest('[' + this.attr_name() + ']');                                         // 4070
      return offcanvas.data(this.attr_name(true) + '-init') || this.settings;                                          // 4071
    },                                                                                                                 // 4072
                                                                                                                       // 4073
    get_wrapper : function (e) {                                                                                       // 4074
      var $off_canvas = this.S(e ? e.target : this.scope).closest('.off-canvas-wrap');                                 // 4075
                                                                                                                       // 4076
      if ($off_canvas.length === 0) {                                                                                  // 4077
        $off_canvas = this.S('.off-canvas-wrap');                                                                      // 4078
      }                                                                                                                // 4079
      return $off_canvas;                                                                                              // 4080
    },                                                                                                                 // 4081
                                                                                                                       // 4082
    reflow : function () {}                                                                                            // 4083
  };                                                                                                                   // 4084
}(jQuery, window, window.document));                                                                                   // 4085
                                                                                                                       // 4086
;(function ($, window, document, undefined) {                                                                          // 4087
  'use strict';                                                                                                        // 4088
                                                                                                                       // 4089
  var noop = function () {};                                                                                           // 4090
                                                                                                                       // 4091
  var Orbit = function (el, settings) {                                                                                // 4092
    // Don't reinitialize plugin                                                                                       // 4093
    if (el.hasClass(settings.slides_container_class)) {                                                                // 4094
      return this;                                                                                                     // 4095
    }                                                                                                                  // 4096
                                                                                                                       // 4097
    var self = this,                                                                                                   // 4098
        container,                                                                                                     // 4099
        slides_container = el,                                                                                         // 4100
        number_container,                                                                                              // 4101
        bullets_container,                                                                                             // 4102
        timer_container,                                                                                               // 4103
        idx = 0,                                                                                                       // 4104
        animate,                                                                                                       // 4105
        timer,                                                                                                         // 4106
        locked = false,                                                                                                // 4107
        adjust_height_after = false;                                                                                   // 4108
                                                                                                                       // 4109
    self.slides = function () {                                                                                        // 4110
      return slides_container.children(settings.slide_selector);                                                       // 4111
    };                                                                                                                 // 4112
                                                                                                                       // 4113
    self.slides().first().addClass(settings.active_slide_class);                                                       // 4114
                                                                                                                       // 4115
    self.update_slide_number = function (index) {                                                                      // 4116
      if (settings.slide_number) {                                                                                     // 4117
        number_container.find('span:first').text(parseInt(index) + 1);                                                 // 4118
        number_container.find('span:last').text(self.slides().length);                                                 // 4119
      }                                                                                                                // 4120
      if (settings.bullets) {                                                                                          // 4121
        bullets_container.children().removeClass(settings.bullets_active_class);                                       // 4122
        $(bullets_container.children().get(index)).addClass(settings.bullets_active_class);                            // 4123
      }                                                                                                                // 4124
    };                                                                                                                 // 4125
                                                                                                                       // 4126
    self.update_active_link = function (index) {                                                                       // 4127
      var link = $('[data-orbit-link="' + self.slides().eq(index).attr('data-orbit-slide') + '"]');                    // 4128
      link.siblings().removeClass(settings.bullets_active_class);                                                      // 4129
      link.addClass(settings.bullets_active_class);                                                                    // 4130
    };                                                                                                                 // 4131
                                                                                                                       // 4132
    self.build_markup = function () {                                                                                  // 4133
      slides_container.wrap('<div class="' + settings.container_class + '"></div>');                                   // 4134
      container = slides_container.parent();                                                                           // 4135
      slides_container.addClass(settings.slides_container_class);                                                      // 4136
                                                                                                                       // 4137
      if (settings.stack_on_small) {                                                                                   // 4138
        container.addClass(settings.stack_on_small_class);                                                             // 4139
      }                                                                                                                // 4140
                                                                                                                       // 4141
      if (settings.navigation_arrows) {                                                                                // 4142
        container.append($('<a href="#"><span></span></a>').addClass(settings.prev_class));                            // 4143
        container.append($('<a href="#"><span></span></a>').addClass(settings.next_class));                            // 4144
      }                                                                                                                // 4145
                                                                                                                       // 4146
      if (settings.timer) {                                                                                            // 4147
        timer_container = $('<div>').addClass(settings.timer_container_class);                                         // 4148
        timer_container.append('<span>');                                                                              // 4149
        timer_container.append($('<div>').addClass(settings.timer_progress_class));                                    // 4150
        timer_container.addClass(settings.timer_paused_class);                                                         // 4151
        container.append(timer_container);                                                                             // 4152
      }                                                                                                                // 4153
                                                                                                                       // 4154
      if (settings.slide_number) {                                                                                     // 4155
        number_container = $('<div>').addClass(settings.slide_number_class);                                           // 4156
        number_container.append('<span></span> ' + settings.slide_number_text + ' <span></span>');                     // 4157
        container.append(number_container);                                                                            // 4158
      }                                                                                                                // 4159
                                                                                                                       // 4160
      if (settings.bullets) {                                                                                          // 4161
        bullets_container = $('<ol>').addClass(settings.bullets_container_class);                                      // 4162
        container.append(bullets_container);                                                                           // 4163
        bullets_container.wrap('<div class="orbit-bullets-container"></div>');                                         // 4164
        self.slides().each(function (idx, el) {                                                                        // 4165
          var bullet = $('<li>').attr('data-orbit-slide', idx).on('click', self.link_bullet);;                         // 4166
          bullets_container.append(bullet);                                                                            // 4167
        });                                                                                                            // 4168
      }                                                                                                                // 4169
                                                                                                                       // 4170
    };                                                                                                                 // 4171
                                                                                                                       // 4172
    self._goto = function (next_idx, start_timer) {                                                                    // 4173
      // if (locked) {return false;}                                                                                   // 4174
      if (next_idx === idx) {return false;}                                                                            // 4175
      if (typeof timer === 'object') {timer.restart();}                                                                // 4176
      var slides = self.slides();                                                                                      // 4177
                                                                                                                       // 4178
      var dir = 'next';                                                                                                // 4179
      locked = true;                                                                                                   // 4180
      if (next_idx < idx) {dir = 'prev';}                                                                              // 4181
      if (next_idx >= slides.length) {                                                                                 // 4182
        if (!settings.circular) {                                                                                      // 4183
          return false;                                                                                                // 4184
        }                                                                                                              // 4185
        next_idx = 0;                                                                                                  // 4186
      } else if (next_idx < 0) {                                                                                       // 4187
        if (!settings.circular) {                                                                                      // 4188
          return false;                                                                                                // 4189
        }                                                                                                              // 4190
        next_idx = slides.length - 1;                                                                                  // 4191
      }                                                                                                                // 4192
                                                                                                                       // 4193
      var current = $(slides.get(idx));                                                                                // 4194
      var next = $(slides.get(next_idx));                                                                              // 4195
                                                                                                                       // 4196
      current.css('zIndex', 2);                                                                                        // 4197
      current.removeClass(settings.active_slide_class);                                                                // 4198
      next.css('zIndex', 4).addClass(settings.active_slide_class);                                                     // 4199
                                                                                                                       // 4200
      slides_container.trigger('before-slide-change.fndtn.orbit');                                                     // 4201
      settings.before_slide_change();                                                                                  // 4202
      self.update_active_link(next_idx);                                                                               // 4203
                                                                                                                       // 4204
      var callback = function () {                                                                                     // 4205
        var unlock = function () {                                                                                     // 4206
          idx = next_idx;                                                                                              // 4207
          locked = false;                                                                                              // 4208
          if (start_timer === true) {timer = self.create_timer(); timer.start();}                                      // 4209
          self.update_slide_number(idx);                                                                               // 4210
          slides_container.trigger('after-slide-change.fndtn.orbit', [{slide_number : idx, total_slides : slides.length}]);
          settings.after_slide_change(idx, slides.length);                                                             // 4212
        };                                                                                                             // 4213
        if (slides_container.outerHeight() != next.outerHeight() && settings.variable_height) {                        // 4214
          slides_container.animate({'height': next.outerHeight()}, 250, 'linear', unlock);                             // 4215
        } else {                                                                                                       // 4216
          unlock();                                                                                                    // 4217
        }                                                                                                              // 4218
      };                                                                                                               // 4219
                                                                                                                       // 4220
      if (slides.length === 1) {callback(); return false;}                                                             // 4221
                                                                                                                       // 4222
      var start_animation = function () {                                                                              // 4223
        if (dir === 'next') {animate.next(current, next, callback);}                                                   // 4224
        if (dir === 'prev') {animate.prev(current, next, callback);}                                                   // 4225
      };                                                                                                               // 4226
                                                                                                                       // 4227
      if (next.outerHeight() > slides_container.outerHeight() && settings.variable_height) {                           // 4228
        slides_container.animate({'height': next.outerHeight()}, 250, 'linear', start_animation);                      // 4229
      } else {                                                                                                         // 4230
        start_animation();                                                                                             // 4231
      }                                                                                                                // 4232
    };                                                                                                                 // 4233
                                                                                                                       // 4234
    self.next = function (e) {                                                                                         // 4235
      e.stopImmediatePropagation();                                                                                    // 4236
      e.preventDefault();                                                                                              // 4237
      self._goto(idx + 1);                                                                                             // 4238
    };                                                                                                                 // 4239
                                                                                                                       // 4240
    self.prev = function (e) {                                                                                         // 4241
      e.stopImmediatePropagation();                                                                                    // 4242
      e.preventDefault();                                                                                              // 4243
      self._goto(idx - 1);                                                                                             // 4244
    };                                                                                                                 // 4245
                                                                                                                       // 4246
    self.link_custom = function (e) {                                                                                  // 4247
      e.preventDefault();                                                                                              // 4248
      var link = $(this).attr('data-orbit-link');                                                                      // 4249
      if ((typeof link === 'string') && (link = $.trim(link)) != '') {                                                 // 4250
        var slide = container.find('[data-orbit-slide=' + link + ']');                                                 // 4251
        if (slide.index() != -1) {self._goto(slide.index());}                                                          // 4252
      }                                                                                                                // 4253
    };                                                                                                                 // 4254
                                                                                                                       // 4255
    self.link_bullet = function (e) {                                                                                  // 4256
      var index = $(this).attr('data-orbit-slide');                                                                    // 4257
      if ((typeof index === 'string') && (index = $.trim(index)) != '') {                                              // 4258
        if (isNaN(parseInt(index))) {                                                                                  // 4259
          var slide = container.find('[data-orbit-slide=' + index + ']');                                              // 4260
          if (slide.index() != -1) {self._goto(slide.index() + 1);}                                                    // 4261
        } else {                                                                                                       // 4262
          self._goto(parseInt(index));                                                                                 // 4263
        }                                                                                                              // 4264
      }                                                                                                                // 4265
                                                                                                                       // 4266
    }                                                                                                                  // 4267
                                                                                                                       // 4268
    self.timer_callback = function () {                                                                                // 4269
      self._goto(idx + 1, true);                                                                                       // 4270
    }                                                                                                                  // 4271
                                                                                                                       // 4272
    self.compute_dimensions = function () {                                                                            // 4273
      var current = $(self.slides().get(idx));                                                                         // 4274
      var h = current.outerHeight();                                                                                   // 4275
      if (!settings.variable_height) {                                                                                 // 4276
        self.slides().each(function(){                                                                                 // 4277
          if ($(this).outerHeight() > h) { h = $(this).outerHeight(); }                                                // 4278
        });                                                                                                            // 4279
      }                                                                                                                // 4280
      slides_container.height(h);                                                                                      // 4281
    };                                                                                                                 // 4282
                                                                                                                       // 4283
    self.create_timer = function () {                                                                                  // 4284
      var t = new Timer(                                                                                               // 4285
        container.find('.' + settings.timer_container_class),                                                          // 4286
        settings,                                                                                                      // 4287
        self.timer_callback                                                                                            // 4288
      );                                                                                                               // 4289
      return t;                                                                                                        // 4290
    };                                                                                                                 // 4291
                                                                                                                       // 4292
    self.stop_timer = function () {                                                                                    // 4293
      if (typeof timer === 'object') {                                                                                 // 4294
        timer.stop();                                                                                                  // 4295
      }                                                                                                                // 4296
    };                                                                                                                 // 4297
                                                                                                                       // 4298
    self.toggle_timer = function () {                                                                                  // 4299
      var t = container.find('.' + settings.timer_container_class);                                                    // 4300
      if (t.hasClass(settings.timer_paused_class)) {                                                                   // 4301
        if (typeof timer === 'undefined') {timer = self.create_timer();}                                               // 4302
        timer.start();                                                                                                 // 4303
      } else {                                                                                                         // 4304
        if (typeof timer === 'object') {timer.stop();}                                                                 // 4305
      }                                                                                                                // 4306
    };                                                                                                                 // 4307
                                                                                                                       // 4308
    self.init = function () {                                                                                          // 4309
      self.build_markup();                                                                                             // 4310
      if (settings.timer) {                                                                                            // 4311
        timer = self.create_timer();                                                                                   // 4312
        Foundation.utils.image_loaded(this.slides().children('img'), timer.start);                                     // 4313
      }                                                                                                                // 4314
      animate = new FadeAnimation(settings, slides_container);                                                         // 4315
      if (settings.animation === 'slide') {                                                                            // 4316
        animate = new SlideAnimation(settings, slides_container);                                                      // 4317
      }                                                                                                                // 4318
                                                                                                                       // 4319
      container.on('click', '.' + settings.next_class, self.next);                                                     // 4320
      container.on('click', '.' + settings.prev_class, self.prev);                                                     // 4321
                                                                                                                       // 4322
      if (settings.next_on_click) {                                                                                    // 4323
        container.on('click', '.' + settings.slides_container_class + ' [data-orbit-slide]', self.link_bullet);        // 4324
      }                                                                                                                // 4325
                                                                                                                       // 4326
      container.on('click', self.toggle_timer);                                                                        // 4327
      if (settings.swipe) {                                                                                            // 4328
        container.on('touchstart.fndtn.orbit', function (e) {                                                          // 4329
          if (!e.touches) {e = e.originalEvent;}                                                                       // 4330
          var data = {                                                                                                 // 4331
            start_page_x : e.touches[0].pageX,                                                                         // 4332
            start_page_y : e.touches[0].pageY,                                                                         // 4333
            start_time : (new Date()).getTime(),                                                                       // 4334
            delta_x : 0,                                                                                               // 4335
            is_scrolling : undefined                                                                                   // 4336
          };                                                                                                           // 4337
          container.data('swipe-transition', data);                                                                    // 4338
          e.stopPropagation();                                                                                         // 4339
        })                                                                                                             // 4340
        .on('touchmove.fndtn.orbit', function (e) {                                                                    // 4341
          if (!e.touches) {                                                                                            // 4342
            e = e.originalEvent;                                                                                       // 4343
          }                                                                                                            // 4344
          // Ignore pinch/zoom events                                                                                  // 4345
          if (e.touches.length > 1 || e.scale && e.scale !== 1) {                                                      // 4346
            return;                                                                                                    // 4347
          }                                                                                                            // 4348
                                                                                                                       // 4349
          var data = container.data('swipe-transition');                                                               // 4350
          if (typeof data === 'undefined') {data = {};}                                                                // 4351
                                                                                                                       // 4352
          data.delta_x = e.touches[0].pageX - data.start_page_x;                                                       // 4353
                                                                                                                       // 4354
          if ( typeof data.is_scrolling === 'undefined') {                                                             // 4355
            data.is_scrolling = !!( data.is_scrolling || Math.abs(data.delta_x) < Math.abs(e.touches[0].pageY - data.start_page_y) );
          }                                                                                                            // 4357
                                                                                                                       // 4358
          if (!data.is_scrolling && !data.active) {                                                                    // 4359
            e.preventDefault();                                                                                        // 4360
            var direction = (data.delta_x < 0) ? (idx + 1) : (idx - 1);                                                // 4361
            data.active = true;                                                                                        // 4362
            self._goto(direction);                                                                                     // 4363
          }                                                                                                            // 4364
        })                                                                                                             // 4365
        .on('touchend.fndtn.orbit', function (e) {                                                                     // 4366
          container.data('swipe-transition', {});                                                                      // 4367
          e.stopPropagation();                                                                                         // 4368
        })                                                                                                             // 4369
      }                                                                                                                // 4370
      container.on('mouseenter.fndtn.orbit', function (e) {                                                            // 4371
        if (settings.timer && settings.pause_on_hover) {                                                               // 4372
          self.stop_timer();                                                                                           // 4373
        }                                                                                                              // 4374
      })                                                                                                               // 4375
      .on('mouseleave.fndtn.orbit', function (e) {                                                                     // 4376
        if (settings.timer && settings.resume_on_mouseout) {                                                           // 4377
          timer.start();                                                                                               // 4378
        }                                                                                                              // 4379
      });                                                                                                              // 4380
                                                                                                                       // 4381
      $(document).on('click', '[data-orbit-link]', self.link_custom);                                                  // 4382
      $(window).on('load resize', self.compute_dimensions);                                                            // 4383
      Foundation.utils.image_loaded(this.slides().children('img'), self.compute_dimensions);                           // 4384
      Foundation.utils.image_loaded(this.slides().children('img'), function () {                                       // 4385
        container.prev('.' + settings.preloader_class).css('display', 'none');                                         // 4386
        self.update_slide_number(0);                                                                                   // 4387
        self.update_active_link(0);                                                                                    // 4388
        slides_container.trigger('ready.fndtn.orbit');                                                                 // 4389
      });                                                                                                              // 4390
    };                                                                                                                 // 4391
                                                                                                                       // 4392
    self.init();                                                                                                       // 4393
  };                                                                                                                   // 4394
                                                                                                                       // 4395
  var Timer = function (el, settings, callback) {                                                                      // 4396
    var self = this,                                                                                                   // 4397
        duration = settings.timer_speed,                                                                               // 4398
        progress = el.find('.' + settings.timer_progress_class),                                                       // 4399
        start,                                                                                                         // 4400
        timeout,                                                                                                       // 4401
        left = -1;                                                                                                     // 4402
                                                                                                                       // 4403
    this.update_progress = function (w) {                                                                              // 4404
      var new_progress = progress.clone();                                                                             // 4405
      new_progress.attr('style', '');                                                                                  // 4406
      new_progress.css('width', w + '%');                                                                              // 4407
      progress.replaceWith(new_progress);                                                                              // 4408
      progress = new_progress;                                                                                         // 4409
    };                                                                                                                 // 4410
                                                                                                                       // 4411
    this.restart = function () {                                                                                       // 4412
      clearTimeout(timeout);                                                                                           // 4413
      el.addClass(settings.timer_paused_class);                                                                        // 4414
      left = -1;                                                                                                       // 4415
      self.update_progress(0);                                                                                         // 4416
    };                                                                                                                 // 4417
                                                                                                                       // 4418
    this.start = function () {                                                                                         // 4419
      if (!el.hasClass(settings.timer_paused_class)) {return true;}                                                    // 4420
      left = (left === -1) ? duration : left;                                                                          // 4421
      el.removeClass(settings.timer_paused_class);                                                                     // 4422
      start = new Date().getTime();                                                                                    // 4423
      progress.animate({'width' : '100%'}, left, 'linear');                                                            // 4424
      timeout = setTimeout(function () {                                                                               // 4425
        self.restart();                                                                                                // 4426
        callback();                                                                                                    // 4427
      }, left);                                                                                                        // 4428
      el.trigger('timer-started.fndtn.orbit')                                                                          // 4429
    };                                                                                                                 // 4430
                                                                                                                       // 4431
    this.stop = function () {                                                                                          // 4432
      if (el.hasClass(settings.timer_paused_class)) {return true;}                                                     // 4433
      clearTimeout(timeout);                                                                                           // 4434
      el.addClass(settings.timer_paused_class);                                                                        // 4435
      var end = new Date().getTime();                                                                                  // 4436
      left = left - (end - start);                                                                                     // 4437
      var w = 100 - ((left / duration) * 100);                                                                         // 4438
      self.update_progress(w);                                                                                         // 4439
      el.trigger('timer-stopped.fndtn.orbit');                                                                         // 4440
    };                                                                                                                 // 4441
  };                                                                                                                   // 4442
                                                                                                                       // 4443
  var SlideAnimation = function (settings, container) {                                                                // 4444
    var duration = settings.animation_speed;                                                                           // 4445
    var is_rtl = ($('html[dir=rtl]').length === 1);                                                                    // 4446
    var margin = is_rtl ? 'marginRight' : 'marginLeft';                                                                // 4447
    var animMargin = {};                                                                                               // 4448
    animMargin[margin] = '0%';                                                                                         // 4449
                                                                                                                       // 4450
    this.next = function (current, next, callback) {                                                                   // 4451
      current.animate({marginLeft : '-100%'}, duration);                                                               // 4452
      next.animate(animMargin, duration, function () {                                                                 // 4453
        current.css(margin, '100%');                                                                                   // 4454
        callback();                                                                                                    // 4455
      });                                                                                                              // 4456
    };                                                                                                                 // 4457
                                                                                                                       // 4458
    this.prev = function (current, prev, callback) {                                                                   // 4459
      current.animate({marginLeft : '100%'}, duration);                                                                // 4460
      prev.css(margin, '-100%');                                                                                       // 4461
      prev.animate(animMargin, duration, function () {                                                                 // 4462
        current.css(margin, '100%');                                                                                   // 4463
        callback();                                                                                                    // 4464
      });                                                                                                              // 4465
    };                                                                                                                 // 4466
  };                                                                                                                   // 4467
                                                                                                                       // 4468
  var FadeAnimation = function (settings, container) {                                                                 // 4469
    var duration = settings.animation_speed;                                                                           // 4470
    var is_rtl = ($('html[dir=rtl]').length === 1);                                                                    // 4471
    var margin = is_rtl ? 'marginRight' : 'marginLeft';                                                                // 4472
                                                                                                                       // 4473
    this.next = function (current, next, callback) {                                                                   // 4474
      next.css({'margin' : '0%', 'opacity' : '0.01'});                                                                 // 4475
      next.animate({'opacity' :'1'}, duration, 'linear', function () {                                                 // 4476
        current.css('margin', '100%');                                                                                 // 4477
        callback();                                                                                                    // 4478
      });                                                                                                              // 4479
    };                                                                                                                 // 4480
                                                                                                                       // 4481
    this.prev = function (current, prev, callback) {                                                                   // 4482
      prev.css({'margin' : '0%', 'opacity' : '0.01'});                                                                 // 4483
      prev.animate({'opacity' : '1'}, duration, 'linear', function () {                                                // 4484
        current.css('margin', '100%');                                                                                 // 4485
        callback();                                                                                                    // 4486
      });                                                                                                              // 4487
    };                                                                                                                 // 4488
  };                                                                                                                   // 4489
                                                                                                                       // 4490
  Foundation.libs = Foundation.libs || {};                                                                             // 4491
                                                                                                                       // 4492
  Foundation.libs.orbit = {                                                                                            // 4493
    name : 'orbit',                                                                                                    // 4494
                                                                                                                       // 4495
    version : '5.5.2',                                                                                                 // 4496
                                                                                                                       // 4497
    settings : {                                                                                                       // 4498
      animation : 'slide',                                                                                             // 4499
      timer_speed : 10000,                                                                                             // 4500
      pause_on_hover : true,                                                                                           // 4501
      resume_on_mouseout : false,                                                                                      // 4502
      next_on_click : true,                                                                                            // 4503
      animation_speed : 500,                                                                                           // 4504
      stack_on_small : false,                                                                                          // 4505
      navigation_arrows : true,                                                                                        // 4506
      slide_number : true,                                                                                             // 4507
      slide_number_text : 'of',                                                                                        // 4508
      container_class : 'orbit-container',                                                                             // 4509
      stack_on_small_class : 'orbit-stack-on-small',                                                                   // 4510
      next_class : 'orbit-next',                                                                                       // 4511
      prev_class : 'orbit-prev',                                                                                       // 4512
      timer_container_class : 'orbit-timer',                                                                           // 4513
      timer_paused_class : 'paused',                                                                                   // 4514
      timer_progress_class : 'orbit-progress',                                                                         // 4515
      slides_container_class : 'orbit-slides-container',                                                               // 4516
      preloader_class : 'preloader',                                                                                   // 4517
      slide_selector : '*',                                                                                            // 4518
      bullets_container_class : 'orbit-bullets',                                                                       // 4519
      bullets_active_class : 'active',                                                                                 // 4520
      slide_number_class : 'orbit-slide-number',                                                                       // 4521
      caption_class : 'orbit-caption',                                                                                 // 4522
      active_slide_class : 'active',                                                                                   // 4523
      orbit_transition_class : 'orbit-transitioning',                                                                  // 4524
      bullets : true,                                                                                                  // 4525
      circular : true,                                                                                                 // 4526
      timer : true,                                                                                                    // 4527
      variable_height : false,                                                                                         // 4528
      swipe : true,                                                                                                    // 4529
      before_slide_change : noop,                                                                                      // 4530
      after_slide_change : noop                                                                                        // 4531
    },                                                                                                                 // 4532
                                                                                                                       // 4533
    init : function (scope, method, options) {                                                                         // 4534
      var self = this;                                                                                                 // 4535
      this.bindings(method, options);                                                                                  // 4536
    },                                                                                                                 // 4537
                                                                                                                       // 4538
    events : function (instance) {                                                                                     // 4539
      var orbit_instance = new Orbit(this.S(instance), this.S(instance).data('orbit-init'));                           // 4540
      this.S(instance).data(this.name + '-instance', orbit_instance);                                                  // 4541
    },                                                                                                                 // 4542
                                                                                                                       // 4543
    reflow : function () {                                                                                             // 4544
      var self = this;                                                                                                 // 4545
                                                                                                                       // 4546
      if (self.S(self.scope).is('[data-orbit]')) {                                                                     // 4547
        var $el = self.S(self.scope);                                                                                  // 4548
        var instance = $el.data(self.name + '-instance');                                                              // 4549
        instance.compute_dimensions();                                                                                 // 4550
      } else {                                                                                                         // 4551
        self.S('[data-orbit]', self.scope).each(function (idx, el) {                                                   // 4552
          var $el = self.S(el);                                                                                        // 4553
          var opts = self.data_options($el);                                                                           // 4554
          var instance = $el.data(self.name + '-instance');                                                            // 4555
          instance.compute_dimensions();                                                                               // 4556
        });                                                                                                            // 4557
      }                                                                                                                // 4558
    }                                                                                                                  // 4559
  };                                                                                                                   // 4560
                                                                                                                       // 4561
}(jQuery, window, window.document));                                                                                   // 4562
                                                                                                                       // 4563
;(function ($, window, document, undefined) {                                                                          // 4564
  'use strict';                                                                                                        // 4565
                                                                                                                       // 4566
  Foundation.libs.reveal = {                                                                                           // 4567
    name : 'reveal',                                                                                                   // 4568
                                                                                                                       // 4569
    version : '5.5.2',                                                                                                 // 4570
                                                                                                                       // 4571
    locked : false,                                                                                                    // 4572
                                                                                                                       // 4573
    settings : {                                                                                                       // 4574
      animation : 'fadeAndPop',                                                                                        // 4575
      animation_speed : 250,                                                                                           // 4576
      close_on_background_click : true,                                                                                // 4577
      close_on_esc : true,                                                                                             // 4578
      dismiss_modal_class : 'close-reveal-modal',                                                                      // 4579
      multiple_opened : false,                                                                                         // 4580
      bg_class : 'reveal-modal-bg',                                                                                    // 4581
      root_element : 'body',                                                                                           // 4582
      open : function(){},                                                                                             // 4583
      opened : function(){},                                                                                           // 4584
      close : function(){},                                                                                            // 4585
      closed : function(){},                                                                                           // 4586
      on_ajax_error: $.noop,                                                                                           // 4587
      bg : $('.reveal-modal-bg'),                                                                                      // 4588
      css : {                                                                                                          // 4589
        open : {                                                                                                       // 4590
          'opacity' : 0,                                                                                               // 4591
          'visibility' : 'visible',                                                                                    // 4592
          'display' : 'block'                                                                                          // 4593
        },                                                                                                             // 4594
        close : {                                                                                                      // 4595
          'opacity' : 1,                                                                                               // 4596
          'visibility' : 'hidden',                                                                                     // 4597
          'display' : 'none'                                                                                           // 4598
        }                                                                                                              // 4599
      }                                                                                                                // 4600
    },                                                                                                                 // 4601
                                                                                                                       // 4602
    init : function (scope, method, options) {                                                                         // 4603
      $.extend(true, this.settings, method, options);                                                                  // 4604
      this.bindings(method, options);                                                                                  // 4605
    },                                                                                                                 // 4606
                                                                                                                       // 4607
    events : function (scope) {                                                                                        // 4608
      var self = this,                                                                                                 // 4609
          S = self.S;                                                                                                  // 4610
                                                                                                                       // 4611
      S(this.scope)                                                                                                    // 4612
        .off('.reveal')                                                                                                // 4613
        .on('click.fndtn.reveal', '[' + this.add_namespace('data-reveal-id') + ']:not([disabled])', function (e) {     // 4614
          e.preventDefault();                                                                                          // 4615
                                                                                                                       // 4616
          if (!self.locked) {                                                                                          // 4617
            var element = S(this),                                                                                     // 4618
                ajax = element.data(self.data_attr('reveal-ajax')),                                                    // 4619
                replaceContentSel = element.data(self.data_attr('reveal-replace-content'));                            // 4620
                                                                                                                       // 4621
            self.locked = true;                                                                                        // 4622
                                                                                                                       // 4623
            if (typeof ajax === 'undefined') {                                                                         // 4624
              self.open.call(self, element);                                                                           // 4625
            } else {                                                                                                   // 4626
              var url = ajax === true ? element.attr('href') : ajax;                                                   // 4627
              self.open.call(self, element, {url : url}, { replaceContentSel : replaceContentSel });                   // 4628
            }                                                                                                          // 4629
          }                                                                                                            // 4630
        });                                                                                                            // 4631
                                                                                                                       // 4632
      S(document)                                                                                                      // 4633
        .on('click.fndtn.reveal', this.close_targets(), function (e) {                                                 // 4634
          e.preventDefault();                                                                                          // 4635
          if (!self.locked) {                                                                                          // 4636
            var settings = S('[' + self.attr_name() + '].open').data(self.attr_name(true) + '-init') || self.settings, // 4637
                bg_clicked = S(e.target)[0] === S('.' + settings.bg_class)[0];                                         // 4638
                                                                                                                       // 4639
            if (bg_clicked) {                                                                                          // 4640
              if (settings.close_on_background_click) {                                                                // 4641
                e.stopPropagation();                                                                                   // 4642
              } else {                                                                                                 // 4643
                return;                                                                                                // 4644
              }                                                                                                        // 4645
            }                                                                                                          // 4646
                                                                                                                       // 4647
            self.locked = true;                                                                                        // 4648
            self.close.call(self, bg_clicked ? S('[' + self.attr_name() + '].open:not(.toback)') : S(this).closest('[' + self.attr_name() + ']'));
          }                                                                                                            // 4650
        });                                                                                                            // 4651
                                                                                                                       // 4652
      if (S('[' + self.attr_name() + ']', this.scope).length > 0) {                                                    // 4653
        S(this.scope)                                                                                                  // 4654
          // .off('.reveal')                                                                                           // 4655
          .on('open.fndtn.reveal', this.settings.open)                                                                 // 4656
          .on('opened.fndtn.reveal', this.settings.opened)                                                             // 4657
          .on('opened.fndtn.reveal', this.open_video)                                                                  // 4658
          .on('close.fndtn.reveal', this.settings.close)                                                               // 4659
          .on('closed.fndtn.reveal', this.settings.closed)                                                             // 4660
          .on('closed.fndtn.reveal', this.close_video);                                                                // 4661
      } else {                                                                                                         // 4662
        S(this.scope)                                                                                                  // 4663
          // .off('.reveal')                                                                                           // 4664
          .on('open.fndtn.reveal', '[' + self.attr_name() + ']', this.settings.open)                                   // 4665
          .on('opened.fndtn.reveal', '[' + self.attr_name() + ']', this.settings.opened)                               // 4666
          .on('opened.fndtn.reveal', '[' + self.attr_name() + ']', this.open_video)                                    // 4667
          .on('close.fndtn.reveal', '[' + self.attr_name() + ']', this.settings.close)                                 // 4668
          .on('closed.fndtn.reveal', '[' + self.attr_name() + ']', this.settings.closed)                               // 4669
          .on('closed.fndtn.reveal', '[' + self.attr_name() + ']', this.close_video);                                  // 4670
      }                                                                                                                // 4671
                                                                                                                       // 4672
      return true;                                                                                                     // 4673
    },                                                                                                                 // 4674
                                                                                                                       // 4675
    // PATCH #3: turning on key up capture only when a reveal window is open                                           // 4676
    key_up_on : function (scope) {                                                                                     // 4677
      var self = this;                                                                                                 // 4678
                                                                                                                       // 4679
      // PATCH #1: fixing multiple keyup event trigger from single key press                                           // 4680
      self.S('body').off('keyup.fndtn.reveal').on('keyup.fndtn.reveal', function ( event ) {                           // 4681
        var open_modal = self.S('[' + self.attr_name() + '].open'),                                                    // 4682
            settings = open_modal.data(self.attr_name(true) + '-init') || self.settings ;                              // 4683
        // PATCH #2: making sure that the close event can be called only while unlocked,                               // 4684
        //           so that multiple keyup.fndtn.reveal events don't prevent clean closing of the reveal window.      // 4685
        if ( settings && event.which === 27  && settings.close_on_esc && !self.locked) { // 27 is the keycode for the Escape key
          self.close.call(self, open_modal);                                                                           // 4687
        }                                                                                                              // 4688
      });                                                                                                              // 4689
                                                                                                                       // 4690
      return true;                                                                                                     // 4691
    },                                                                                                                 // 4692
                                                                                                                       // 4693
    // PATCH #3: turning on key up capture only when a reveal window is open                                           // 4694
    key_up_off : function (scope) {                                                                                    // 4695
      this.S('body').off('keyup.fndtn.reveal');                                                                        // 4696
      return true;                                                                                                     // 4697
    },                                                                                                                 // 4698
                                                                                                                       // 4699
    open : function (target, ajax_settings) {                                                                          // 4700
      var self = this,                                                                                                 // 4701
          modal;                                                                                                       // 4702
                                                                                                                       // 4703
      if (target) {                                                                                                    // 4704
        if (typeof target.selector !== 'undefined') {                                                                  // 4705
          // Find the named node; only use the first one found, since the rest of the code assumes there's only one node
          modal = self.S('#' + target.data(self.data_attr('reveal-id'))).first();                                      // 4707
        } else {                                                                                                       // 4708
          modal = self.S(this.scope);                                                                                  // 4709
                                                                                                                       // 4710
          ajax_settings = target;                                                                                      // 4711
        }                                                                                                              // 4712
      } else {                                                                                                         // 4713
        modal = self.S(this.scope);                                                                                    // 4714
      }                                                                                                                // 4715
                                                                                                                       // 4716
      var settings = modal.data(self.attr_name(true) + '-init');                                                       // 4717
      settings = settings || this.settings;                                                                            // 4718
                                                                                                                       // 4719
                                                                                                                       // 4720
      if (modal.hasClass('open') && target.attr('data-reveal-id') == modal.attr('id')) {                               // 4721
        return self.close(modal);                                                                                      // 4722
      }                                                                                                                // 4723
                                                                                                                       // 4724
      if (!modal.hasClass('open')) {                                                                                   // 4725
        var open_modal = self.S('[' + self.attr_name() + '].open');                                                    // 4726
                                                                                                                       // 4727
        if (typeof modal.data('css-top') === 'undefined') {                                                            // 4728
          modal.data('css-top', parseInt(modal.css('top'), 10))                                                        // 4729
            .data('offset', this.cache_offset(modal));                                                                 // 4730
        }                                                                                                              // 4731
                                                                                                                       // 4732
        modal.attr('tabindex','0').attr('aria-hidden','false');                                                        // 4733
                                                                                                                       // 4734
        this.key_up_on(modal);    // PATCH #3: turning on key up capture only when a reveal window is open             // 4735
                                                                                                                       // 4736
        // Prevent namespace event from triggering twice                                                               // 4737
        modal.on('open.fndtn.reveal', function(e) {                                                                    // 4738
          if (e.namespace !== 'fndtn.reveal') return;                                                                  // 4739
        });                                                                                                            // 4740
                                                                                                                       // 4741
        modal.on('open.fndtn.reveal').trigger('open.fndtn.reveal');                                                    // 4742
                                                                                                                       // 4743
        if (open_modal.length < 1) {                                                                                   // 4744
          this.toggle_bg(modal, true);                                                                                 // 4745
        }                                                                                                              // 4746
                                                                                                                       // 4747
        if (typeof ajax_settings === 'string') {                                                                       // 4748
          ajax_settings = {                                                                                            // 4749
            url : ajax_settings                                                                                        // 4750
          };                                                                                                           // 4751
        }                                                                                                              // 4752
                                                                                                                       // 4753
        if (typeof ajax_settings === 'undefined' || !ajax_settings.url) {                                              // 4754
          if (open_modal.length > 0) {                                                                                 // 4755
            if (settings.multiple_opened) {                                                                            // 4756
              self.to_back(open_modal);                                                                                // 4757
            } else {                                                                                                   // 4758
              self.hide(open_modal, settings.css.close);                                                               // 4759
            }                                                                                                          // 4760
          }                                                                                                            // 4761
                                                                                                                       // 4762
          this.show(modal, settings.css.open);                                                                         // 4763
        } else {                                                                                                       // 4764
          var old_success = typeof ajax_settings.success !== 'undefined' ? ajax_settings.success : null;               // 4765
          $.extend(ajax_settings, {                                                                                    // 4766
            success : function (data, textStatus, jqXHR) {                                                             // 4767
              if ( $.isFunction(old_success) ) {                                                                       // 4768
                var result = old_success(data, textStatus, jqXHR);                                                     // 4769
                if (typeof result == 'string') {                                                                       // 4770
                  data = result;                                                                                       // 4771
                }                                                                                                      // 4772
              }                                                                                                        // 4773
                                                                                                                       // 4774
              if (typeof options !== 'undefined' && typeof options.replaceContentSel !== 'undefined') {                // 4775
                modal.find(options.replaceContentSel).html(data);                                                      // 4776
              } else {                                                                                                 // 4777
                modal.html(data);                                                                                      // 4778
              }                                                                                                        // 4779
                                                                                                                       // 4780
              self.S(modal).foundation('section', 'reflow');                                                           // 4781
              self.S(modal).children().foundation();                                                                   // 4782
                                                                                                                       // 4783
              if (open_modal.length > 0) {                                                                             // 4784
                if (settings.multiple_opened) {                                                                        // 4785
                  self.to_back(open_modal);                                                                            // 4786
                } else {                                                                                               // 4787
                  self.hide(open_modal, settings.css.close);                                                           // 4788
                }                                                                                                      // 4789
              }                                                                                                        // 4790
              self.show(modal, settings.css.open);                                                                     // 4791
            }                                                                                                          // 4792
          });                                                                                                          // 4793
                                                                                                                       // 4794
          // check for if user initalized with error callback                                                          // 4795
          if (settings.on_ajax_error !== $.noop) {                                                                     // 4796
            $.extend(ajax_settings, {                                                                                  // 4797
              error : settings.on_ajax_error                                                                           // 4798
            });                                                                                                        // 4799
          }                                                                                                            // 4800
                                                                                                                       // 4801
          $.ajax(ajax_settings);                                                                                       // 4802
        }                                                                                                              // 4803
      }                                                                                                                // 4804
      self.S(window).trigger('resize');                                                                                // 4805
    },                                                                                                                 // 4806
                                                                                                                       // 4807
    close : function (modal) {                                                                                         // 4808
      var modal = modal && modal.length ? modal : this.S(this.scope),                                                  // 4809
          open_modals = this.S('[' + this.attr_name() + '].open'),                                                     // 4810
          settings = modal.data(this.attr_name(true) + '-init') || this.settings,                                      // 4811
          self = this;                                                                                                 // 4812
                                                                                                                       // 4813
      if (open_modals.length > 0) {                                                                                    // 4814
                                                                                                                       // 4815
        modal.removeAttr('tabindex','0').attr('aria-hidden','true');                                                   // 4816
                                                                                                                       // 4817
        this.locked = true;                                                                                            // 4818
        this.key_up_off(modal);   // PATCH #3: turning on key up capture only when a reveal window is open             // 4819
                                                                                                                       // 4820
        modal.trigger('close.fndtn.reveal');                                                                           // 4821
                                                                                                                       // 4822
        if ((settings.multiple_opened && open_modals.length === 1) || !settings.multiple_opened || modal.length > 1) { // 4823
          self.toggle_bg(modal, false);                                                                                // 4824
          self.to_front(modal);                                                                                        // 4825
        }                                                                                                              // 4826
                                                                                                                       // 4827
        if (settings.multiple_opened) {                                                                                // 4828
          self.hide(modal, settings.css.close, settings);                                                              // 4829
          self.to_front($($.makeArray(open_modals).reverse()[1]));                                                     // 4830
        } else {                                                                                                       // 4831
          self.hide(open_modals, settings.css.close, settings);                                                        // 4832
        }                                                                                                              // 4833
      }                                                                                                                // 4834
    },                                                                                                                 // 4835
                                                                                                                       // 4836
    close_targets : function () {                                                                                      // 4837
      var base = '.' + this.settings.dismiss_modal_class;                                                              // 4838
                                                                                                                       // 4839
      if (this.settings.close_on_background_click) {                                                                   // 4840
        return base + ', .' + this.settings.bg_class;                                                                  // 4841
      }                                                                                                                // 4842
                                                                                                                       // 4843
      return base;                                                                                                     // 4844
    },                                                                                                                 // 4845
                                                                                                                       // 4846
    toggle_bg : function (modal, state) {                                                                              // 4847
      if (this.S('.' + this.settings.bg_class).length === 0) {                                                         // 4848
        this.settings.bg = $('<div />', {'class': this.settings.bg_class})                                             // 4849
          .appendTo('body').hide();                                                                                    // 4850
      }                                                                                                                // 4851
                                                                                                                       // 4852
      var visible = this.settings.bg.filter(':visible').length > 0;                                                    // 4853
      if ( state != visible ) {                                                                                        // 4854
        if ( state == undefined ? visible : !state ) {                                                                 // 4855
          this.hide(this.settings.bg);                                                                                 // 4856
        } else {                                                                                                       // 4857
          this.show(this.settings.bg);                                                                                 // 4858
        }                                                                                                              // 4859
      }                                                                                                                // 4860
    },                                                                                                                 // 4861
                                                                                                                       // 4862
    show : function (el, css) {                                                                                        // 4863
      // is modal                                                                                                      // 4864
      if (css) {                                                                                                       // 4865
        var settings = el.data(this.attr_name(true) + '-init') || this.settings,                                       // 4866
            root_element = settings.root_element,                                                                      // 4867
            context = this;                                                                                            // 4868
                                                                                                                       // 4869
        if (el.parent(root_element).length === 0) {                                                                    // 4870
          var placeholder = el.wrap('<div style="display: none;" />').parent();                                        // 4871
                                                                                                                       // 4872
          el.on('closed.fndtn.reveal.wrapped', function () {                                                           // 4873
            el.detach().appendTo(placeholder);                                                                         // 4874
            el.unwrap().unbind('closed.fndtn.reveal.wrapped');                                                         // 4875
          });                                                                                                          // 4876
                                                                                                                       // 4877
          el.detach().appendTo(root_element);                                                                          // 4878
        }                                                                                                              // 4879
                                                                                                                       // 4880
        var animData = getAnimationData(settings.animation);                                                           // 4881
        if (!animData.animate) {                                                                                       // 4882
          this.locked = false;                                                                                         // 4883
        }                                                                                                              // 4884
        if (animData.pop) {                                                                                            // 4885
          css.top = $(window).scrollTop() - el.data('offset') + 'px';                                                  // 4886
          var end_css = {                                                                                              // 4887
            top: $(window).scrollTop() + el.data('css-top') + 'px',                                                    // 4888
            opacity: 1                                                                                                 // 4889
          };                                                                                                           // 4890
                                                                                                                       // 4891
          return setTimeout(function () {                                                                              // 4892
            return el                                                                                                  // 4893
              .css(css)                                                                                                // 4894
              .animate(end_css, settings.animation_speed, 'linear', function () {                                      // 4895
                context.locked = false;                                                                                // 4896
                el.trigger('opened.fndtn.reveal');                                                                     // 4897
              })                                                                                                       // 4898
              .addClass('open');                                                                                       // 4899
          }, settings.animation_speed / 2);                                                                            // 4900
        }                                                                                                              // 4901
                                                                                                                       // 4902
        if (animData.fade) {                                                                                           // 4903
          css.top = $(window).scrollTop() + el.data('css-top') + 'px';                                                 // 4904
          var end_css = {opacity: 1};                                                                                  // 4905
                                                                                                                       // 4906
          return setTimeout(function () {                                                                              // 4907
            return el                                                                                                  // 4908
              .css(css)                                                                                                // 4909
              .animate(end_css, settings.animation_speed, 'linear', function () {                                      // 4910
                context.locked = false;                                                                                // 4911
                el.trigger('opened.fndtn.reveal');                                                                     // 4912
              })                                                                                                       // 4913
              .addClass('open');                                                                                       // 4914
          }, settings.animation_speed / 2);                                                                            // 4915
        }                                                                                                              // 4916
                                                                                                                       // 4917
        return el.css(css).show().css({opacity : 1}).addClass('open').trigger('opened.fndtn.reveal');                  // 4918
      }                                                                                                                // 4919
                                                                                                                       // 4920
      var settings = this.settings;                                                                                    // 4921
                                                                                                                       // 4922
      // should we animate the background?                                                                             // 4923
      if (getAnimationData(settings.animation).fade) {                                                                 // 4924
        return el.fadeIn(settings.animation_speed / 2);                                                                // 4925
      }                                                                                                                // 4926
                                                                                                                       // 4927
      this.locked = false;                                                                                             // 4928
                                                                                                                       // 4929
      return el.show();                                                                                                // 4930
    },                                                                                                                 // 4931
                                                                                                                       // 4932
    to_back : function(el) {                                                                                           // 4933
      el.addClass('toback');                                                                                           // 4934
    },                                                                                                                 // 4935
                                                                                                                       // 4936
    to_front : function(el) {                                                                                          // 4937
      el.removeClass('toback');                                                                                        // 4938
    },                                                                                                                 // 4939
                                                                                                                       // 4940
    hide : function (el, css) {                                                                                        // 4941
      // is modal                                                                                                      // 4942
      if (css) {                                                                                                       // 4943
        var settings = el.data(this.attr_name(true) + '-init'),                                                        // 4944
            context = this;                                                                                            // 4945
        settings = settings || this.settings;                                                                          // 4946
                                                                                                                       // 4947
        var animData = getAnimationData(settings.animation);                                                           // 4948
        if (!animData.animate) {                                                                                       // 4949
          this.locked = false;                                                                                         // 4950
        }                                                                                                              // 4951
        if (animData.pop) {                                                                                            // 4952
          var end_css = {                                                                                              // 4953
            top: - $(window).scrollTop() - el.data('offset') + 'px',                                                   // 4954
            opacity: 0                                                                                                 // 4955
          };                                                                                                           // 4956
                                                                                                                       // 4957
          return setTimeout(function () {                                                                              // 4958
            return el                                                                                                  // 4959
              .animate(end_css, settings.animation_speed, 'linear', function () {                                      // 4960
                context.locked = false;                                                                                // 4961
                el.css(css).trigger('closed.fndtn.reveal');                                                            // 4962
              })                                                                                                       // 4963
              .removeClass('open');                                                                                    // 4964
          }, settings.animation_speed / 2);                                                                            // 4965
        }                                                                                                              // 4966
                                                                                                                       // 4967
        if (animData.fade) {                                                                                           // 4968
          var end_css = {opacity : 0};                                                                                 // 4969
                                                                                                                       // 4970
          return setTimeout(function () {                                                                              // 4971
            return el                                                                                                  // 4972
              .animate(end_css, settings.animation_speed, 'linear', function () {                                      // 4973
                context.locked = false;                                                                                // 4974
                el.css(css).trigger('closed.fndtn.reveal');                                                            // 4975
              })                                                                                                       // 4976
              .removeClass('open');                                                                                    // 4977
          }, settings.animation_speed / 2);                                                                            // 4978
        }                                                                                                              // 4979
                                                                                                                       // 4980
        return el.hide().css(css).removeClass('open').trigger('closed.fndtn.reveal');                                  // 4981
      }                                                                                                                // 4982
                                                                                                                       // 4983
      var settings = this.settings;                                                                                    // 4984
                                                                                                                       // 4985
      // should we animate the background?                                                                             // 4986
      if (getAnimationData(settings.animation).fade) {                                                                 // 4987
        return el.fadeOut(settings.animation_speed / 2);                                                               // 4988
      }                                                                                                                // 4989
                                                                                                                       // 4990
      return el.hide();                                                                                                // 4991
    },                                                                                                                 // 4992
                                                                                                                       // 4993
    close_video : function (e) {                                                                                       // 4994
      var video = $('.flex-video', e.target),                                                                          // 4995
          iframe = $('iframe', video);                                                                                 // 4996
                                                                                                                       // 4997
      if (iframe.length > 0) {                                                                                         // 4998
        iframe.attr('data-src', iframe[0].src);                                                                        // 4999
        iframe.attr('src', iframe.attr('src'));                                                                        // 5000
        video.hide();                                                                                                  // 5001
      }                                                                                                                // 5002
    },                                                                                                                 // 5003
                                                                                                                       // 5004
    open_video : function (e) {                                                                                        // 5005
      var video = $('.flex-video', e.target),                                                                          // 5006
          iframe = video.find('iframe');                                                                               // 5007
                                                                                                                       // 5008
      if (iframe.length > 0) {                                                                                         // 5009
        var data_src = iframe.attr('data-src');                                                                        // 5010
        if (typeof data_src === 'string') {                                                                            // 5011
          iframe[0].src = iframe.attr('data-src');                                                                     // 5012
        } else {                                                                                                       // 5013
          var src = iframe[0].src;                                                                                     // 5014
          iframe[0].src = undefined;                                                                                   // 5015
          iframe[0].src = src;                                                                                         // 5016
        }                                                                                                              // 5017
        video.show();                                                                                                  // 5018
      }                                                                                                                // 5019
    },                                                                                                                 // 5020
                                                                                                                       // 5021
    data_attr : function (str) {                                                                                       // 5022
      if (this.namespace.length > 0) {                                                                                 // 5023
        return this.namespace + '-' + str;                                                                             // 5024
      }                                                                                                                // 5025
                                                                                                                       // 5026
      return str;                                                                                                      // 5027
    },                                                                                                                 // 5028
                                                                                                                       // 5029
    cache_offset : function (modal) {                                                                                  // 5030
      var offset = modal.show().height() + parseInt(modal.css('top'), 10) + modal.scrollY;                             // 5031
                                                                                                                       // 5032
      modal.hide();                                                                                                    // 5033
                                                                                                                       // 5034
      return offset;                                                                                                   // 5035
    },                                                                                                                 // 5036
                                                                                                                       // 5037
    off : function () {                                                                                                // 5038
      $(this.scope).off('.fndtn.reveal');                                                                              // 5039
    },                                                                                                                 // 5040
                                                                                                                       // 5041
    reflow : function () {}                                                                                            // 5042
  };                                                                                                                   // 5043
                                                                                                                       // 5044
  /*                                                                                                                   // 5045
   * getAnimationData('popAndFade') // {animate: true,  pop: true,  fade: true}                                        // 5046
   * getAnimationData('fade')       // {animate: true,  pop: false, fade: true}                                        // 5047
   * getAnimationData('pop')        // {animate: true,  pop: true,  fade: false}                                       // 5048
   * getAnimationData('foo')        // {animate: false, pop: false, fade: false}                                       // 5049
   * getAnimationData(null)         // {animate: false, pop: false, fade: false}                                       // 5050
   */                                                                                                                  // 5051
  function getAnimationData(str) {                                                                                     // 5052
    var fade = /fade/i.test(str);                                                                                      // 5053
    var pop = /pop/i.test(str);                                                                                        // 5054
    return {                                                                                                           // 5055
      animate : fade || pop,                                                                                           // 5056
      pop : pop,                                                                                                       // 5057
      fade : fade                                                                                                      // 5058
    };                                                                                                                 // 5059
  }                                                                                                                    // 5060
}(jQuery, window, window.document));                                                                                   // 5061
                                                                                                                       // 5062
;(function ($, window, document, undefined) {                                                                          // 5063
  'use strict';                                                                                                        // 5064
                                                                                                                       // 5065
  Foundation.libs.slider = {                                                                                           // 5066
    name : 'slider',                                                                                                   // 5067
                                                                                                                       // 5068
    version : '5.5.2',                                                                                                 // 5069
                                                                                                                       // 5070
    settings : {                                                                                                       // 5071
      start : 0,                                                                                                       // 5072
      end : 100,                                                                                                       // 5073
      step : 1,                                                                                                        // 5074
      precision : null,                                                                                                // 5075
      initial : null,                                                                                                  // 5076
      display_selector : '',                                                                                           // 5077
      vertical : false,                                                                                                // 5078
      trigger_input_change : false,                                                                                    // 5079
      on_change : function () {}                                                                                       // 5080
    },                                                                                                                 // 5081
                                                                                                                       // 5082
    cache : {},                                                                                                        // 5083
                                                                                                                       // 5084
    init : function (scope, method, options) {                                                                         // 5085
      Foundation.inherit(this, 'throttle');                                                                            // 5086
      this.bindings(method, options);                                                                                  // 5087
      this.reflow();                                                                                                   // 5088
    },                                                                                                                 // 5089
                                                                                                                       // 5090
    events : function () {                                                                                             // 5091
      var self = this;                                                                                                 // 5092
                                                                                                                       // 5093
      $(this.scope)                                                                                                    // 5094
        .off('.slider')                                                                                                // 5095
        .on('mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider',                                 // 5096
        '[' + self.attr_name() + ']:not(.disabled, [disabled]) .range-slider-handle', function (e) {                   // 5097
          if (!self.cache.active) {                                                                                    // 5098
            e.preventDefault();                                                                                        // 5099
            self.set_active_slider($(e.target));                                                                       // 5100
          }                                                                                                            // 5101
        })                                                                                                             // 5102
        .on('mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider', function (e) {                   // 5103
          if (!!self.cache.active) {                                                                                   // 5104
            e.preventDefault();                                                                                        // 5105
            if ($.data(self.cache.active[0], 'settings').vertical) {                                                   // 5106
              var scroll_offset = 0;                                                                                   // 5107
              if (!e.pageY) {                                                                                          // 5108
                scroll_offset = window.scrollY;                                                                        // 5109
              }                                                                                                        // 5110
              self.calculate_position(self.cache.active, self.get_cursor_position(e, 'y') + scroll_offset);            // 5111
            } else {                                                                                                   // 5112
              self.calculate_position(self.cache.active, self.get_cursor_position(e, 'x'));                            // 5113
            }                                                                                                          // 5114
          }                                                                                                            // 5115
        })                                                                                                             // 5116
        .on('mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider', function (e) {                        // 5117
          self.remove_active_slider();                                                                                 // 5118
        })                                                                                                             // 5119
        .on('change.fndtn.slider', function (e) {                                                                      // 5120
          self.settings.on_change();                                                                                   // 5121
        });                                                                                                            // 5122
                                                                                                                       // 5123
      self.S(window)                                                                                                   // 5124
        .on('resize.fndtn.slider', self.throttle(function (e) {                                                        // 5125
          self.reflow();                                                                                               // 5126
        }, 300));                                                                                                      // 5127
                                                                                                                       // 5128
      // update slider value as users change input value                                                               // 5129
      this.S('[' + this.attr_name() + ']').each(function () {                                                          // 5130
        var slider = $(this),                                                                                          // 5131
            handle = slider.children('.range-slider-handle')[0],                                                       // 5132
            settings = self.initialize_settings(handle);                                                               // 5133
                                                                                                                       // 5134
        if (settings.display_selector != '') {                                                                         // 5135
          $(settings.display_selector).each(function(){                                                                // 5136
            if (this.hasOwnProperty('value')) {                                                                        // 5137
              $(this).change(function(){                                                                               // 5138
                // is there a better way to do this?                                                                   // 5139
                slider.foundation("slider", "set_value", $(this).val());                                               // 5140
              });                                                                                                      // 5141
            }                                                                                                          // 5142
          });                                                                                                          // 5143
        }                                                                                                              // 5144
      });                                                                                                              // 5145
    },                                                                                                                 // 5146
                                                                                                                       // 5147
    get_cursor_position : function (e, xy) {                                                                           // 5148
      var pageXY = 'page' + xy.toUpperCase(),                                                                          // 5149
          clientXY = 'client' + xy.toUpperCase(),                                                                      // 5150
          position;                                                                                                    // 5151
                                                                                                                       // 5152
      if (typeof e[pageXY] !== 'undefined') {                                                                          // 5153
        position = e[pageXY];                                                                                          // 5154
      } else if (typeof e.originalEvent[clientXY] !== 'undefined') {                                                   // 5155
        position = e.originalEvent[clientXY];                                                                          // 5156
      } else if (e.originalEvent.touches && e.originalEvent.touches[0] && typeof e.originalEvent.touches[0][clientXY] !== 'undefined') {
        position = e.originalEvent.touches[0][clientXY];                                                               // 5158
      } else if (e.currentPoint && typeof e.currentPoint[xy] !== 'undefined') {                                        // 5159
        position = e.currentPoint[xy];                                                                                 // 5160
      }                                                                                                                // 5161
                                                                                                                       // 5162
      return position;                                                                                                 // 5163
    },                                                                                                                 // 5164
                                                                                                                       // 5165
    set_active_slider : function ($handle) {                                                                           // 5166
      this.cache.active = $handle;                                                                                     // 5167
    },                                                                                                                 // 5168
                                                                                                                       // 5169
    remove_active_slider : function () {                                                                               // 5170
      this.cache.active = null;                                                                                        // 5171
    },                                                                                                                 // 5172
                                                                                                                       // 5173
    calculate_position : function ($handle, cursor_x) {                                                                // 5174
      var self = this,                                                                                                 // 5175
          settings = $.data($handle[0], 'settings'),                                                                   // 5176
          handle_l = $.data($handle[0], 'handle_l'),                                                                   // 5177
          handle_o = $.data($handle[0], 'handle_o'),                                                                   // 5178
          bar_l = $.data($handle[0], 'bar_l'),                                                                         // 5179
          bar_o = $.data($handle[0], 'bar_o');                                                                         // 5180
                                                                                                                       // 5181
      requestAnimationFrame(function () {                                                                              // 5182
        var pct;                                                                                                       // 5183
                                                                                                                       // 5184
        if (Foundation.rtl && !settings.vertical) {                                                                    // 5185
          pct = self.limit_to(((bar_o + bar_l - cursor_x) / bar_l), 0, 1);                                             // 5186
        } else {                                                                                                       // 5187
          pct = self.limit_to(((cursor_x - bar_o) / bar_l), 0, 1);                                                     // 5188
        }                                                                                                              // 5189
                                                                                                                       // 5190
        pct = settings.vertical ? 1 - pct : pct;                                                                       // 5191
                                                                                                                       // 5192
        var norm = self.normalized_value(pct, settings.start, settings.end, settings.step, settings.precision);        // 5193
                                                                                                                       // 5194
        self.set_ui($handle, norm);                                                                                    // 5195
      });                                                                                                              // 5196
    },                                                                                                                 // 5197
                                                                                                                       // 5198
    set_ui : function ($handle, value) {                                                                               // 5199
      var settings = $.data($handle[0], 'settings'),                                                                   // 5200
          handle_l = $.data($handle[0], 'handle_l'),                                                                   // 5201
          bar_l = $.data($handle[0], 'bar_l'),                                                                         // 5202
          norm_pct = this.normalized_percentage(value, settings.start, settings.end),                                  // 5203
          handle_offset = norm_pct * (bar_l - handle_l) - 1,                                                           // 5204
          progress_bar_length = norm_pct * 100,                                                                        // 5205
          $handle_parent = $handle.parent(),                                                                           // 5206
          $hidden_inputs = $handle.parent().children('input[type=hidden]');                                            // 5207
                                                                                                                       // 5208
      if (Foundation.rtl && !settings.vertical) {                                                                      // 5209
        handle_offset = -handle_offset;                                                                                // 5210
      }                                                                                                                // 5211
                                                                                                                       // 5212
      handle_offset = settings.vertical ? -handle_offset + bar_l - handle_l + 1 : handle_offset;                       // 5213
      this.set_translate($handle, handle_offset, settings.vertical);                                                   // 5214
                                                                                                                       // 5215
      if (settings.vertical) {                                                                                         // 5216
        $handle.siblings('.range-slider-active-segment').css('height', progress_bar_length + '%');                     // 5217
      } else {                                                                                                         // 5218
        $handle.siblings('.range-slider-active-segment').css('width', progress_bar_length + '%');                      // 5219
      }                                                                                                                // 5220
                                                                                                                       // 5221
      $handle_parent.attr(this.attr_name(), value).trigger('change.fndtn.slider');                                     // 5222
                                                                                                                       // 5223
      $hidden_inputs.val(value);                                                                                       // 5224
      if (settings.trigger_input_change) {                                                                             // 5225
          $hidden_inputs.trigger('change.fndtn.slider');                                                               // 5226
      }                                                                                                                // 5227
                                                                                                                       // 5228
      if (!$handle[0].hasAttribute('aria-valuemin')) {                                                                 // 5229
        $handle.attr({                                                                                                 // 5230
          'aria-valuemin' : settings.start,                                                                            // 5231
          'aria-valuemax' : settings.end                                                                               // 5232
        });                                                                                                            // 5233
      }                                                                                                                // 5234
      $handle.attr('aria-valuenow', value);                                                                            // 5235
                                                                                                                       // 5236
      if (settings.display_selector != '') {                                                                           // 5237
        $(settings.display_selector).each(function () {                                                                // 5238
          if (this.hasAttribute('value')) {                                                                            // 5239
            $(this).val(value);                                                                                        // 5240
          } else {                                                                                                     // 5241
            $(this).text(value);                                                                                       // 5242
          }                                                                                                            // 5243
        });                                                                                                            // 5244
      }                                                                                                                // 5245
                                                                                                                       // 5246
    },                                                                                                                 // 5247
                                                                                                                       // 5248
    normalized_percentage : function (val, start, end) {                                                               // 5249
      return Math.min(1, (val - start) / (end - start));                                                               // 5250
    },                                                                                                                 // 5251
                                                                                                                       // 5252
    normalized_value : function (val, start, end, step, precision) {                                                   // 5253
      var range = end - start,                                                                                         // 5254
          point = val * range,                                                                                         // 5255
          mod = (point - (point % step)) / step,                                                                       // 5256
          rem = point % step,                                                                                          // 5257
          round = ( rem >= step * 0.5 ? step : 0);                                                                     // 5258
      return ((mod * step + round) + start).toFixed(precision);                                                        // 5259
    },                                                                                                                 // 5260
                                                                                                                       // 5261
    set_translate : function (ele, offset, vertical) {                                                                 // 5262
      if (vertical) {                                                                                                  // 5263
        $(ele)                                                                                                         // 5264
          .css('-webkit-transform', 'translateY(' + offset + 'px)')                                                    // 5265
          .css('-moz-transform', 'translateY(' + offset + 'px)')                                                       // 5266
          .css('-ms-transform', 'translateY(' + offset + 'px)')                                                        // 5267
          .css('-o-transform', 'translateY(' + offset + 'px)')                                                         // 5268
          .css('transform', 'translateY(' + offset + 'px)');                                                           // 5269
      } else {                                                                                                         // 5270
        $(ele)                                                                                                         // 5271
          .css('-webkit-transform', 'translateX(' + offset + 'px)')                                                    // 5272
          .css('-moz-transform', 'translateX(' + offset + 'px)')                                                       // 5273
          .css('-ms-transform', 'translateX(' + offset + 'px)')                                                        // 5274
          .css('-o-transform', 'translateX(' + offset + 'px)')                                                         // 5275
          .css('transform', 'translateX(' + offset + 'px)');                                                           // 5276
      }                                                                                                                // 5277
    },                                                                                                                 // 5278
                                                                                                                       // 5279
    limit_to : function (val, min, max) {                                                                              // 5280
      return Math.min(Math.max(val, min), max);                                                                        // 5281
    },                                                                                                                 // 5282
                                                                                                                       // 5283
    initialize_settings : function (handle) {                                                                          // 5284
      var settings = $.extend({}, this.settings, this.data_options($(handle).parent())),                               // 5285
          decimal_places_match_result;                                                                                 // 5286
                                                                                                                       // 5287
      if (settings.precision === null) {                                                                               // 5288
        decimal_places_match_result = ('' + settings.step).match(/\.([\d]*)/);                                         // 5289
        settings.precision = decimal_places_match_result && decimal_places_match_result[1] ? decimal_places_match_result[1].length : 0;
      }                                                                                                                // 5291
                                                                                                                       // 5292
      if (settings.vertical) {                                                                                         // 5293
        $.data(handle, 'bar_o', $(handle).parent().offset().top);                                                      // 5294
        $.data(handle, 'bar_l', $(handle).parent().outerHeight());                                                     // 5295
        $.data(handle, 'handle_o', $(handle).offset().top);                                                            // 5296
        $.data(handle, 'handle_l', $(handle).outerHeight());                                                           // 5297
      } else {                                                                                                         // 5298
        $.data(handle, 'bar_o', $(handle).parent().offset().left);                                                     // 5299
        $.data(handle, 'bar_l', $(handle).parent().outerWidth());                                                      // 5300
        $.data(handle, 'handle_o', $(handle).offset().left);                                                           // 5301
        $.data(handle, 'handle_l', $(handle).outerWidth());                                                            // 5302
      }                                                                                                                // 5303
                                                                                                                       // 5304
      $.data(handle, 'bar', $(handle).parent());                                                                       // 5305
      return $.data(handle, 'settings', settings);                                                                     // 5306
    },                                                                                                                 // 5307
                                                                                                                       // 5308
    set_initial_position : function ($ele) {                                                                           // 5309
      var settings = $.data($ele.children('.range-slider-handle')[0], 'settings'),                                     // 5310
          initial = ((typeof settings.initial == 'number' && !isNaN(settings.initial)) ? settings.initial : Math.floor((settings.end - settings.start) * 0.5 / settings.step) * settings.step + settings.start),
          $handle = $ele.children('.range-slider-handle');                                                             // 5312
      this.set_ui($handle, initial);                                                                                   // 5313
    },                                                                                                                 // 5314
                                                                                                                       // 5315
    set_value : function (value) {                                                                                     // 5316
      var self = this;                                                                                                 // 5317
      $('[' + self.attr_name() + ']', this.scope).each(function () {                                                   // 5318
        $(this).attr(self.attr_name(), value);                                                                         // 5319
      });                                                                                                              // 5320
      if (!!$(this.scope).attr(self.attr_name())) {                                                                    // 5321
        $(this.scope).attr(self.attr_name(), value);                                                                   // 5322
      }                                                                                                                // 5323
      self.reflow();                                                                                                   // 5324
    },                                                                                                                 // 5325
                                                                                                                       // 5326
    reflow : function () {                                                                                             // 5327
      var self = this;                                                                                                 // 5328
      self.S('[' + this.attr_name() + ']').each(function () {                                                          // 5329
        var handle = $(this).children('.range-slider-handle')[0],                                                      // 5330
            val = $(this).attr(self.attr_name());                                                                      // 5331
        self.initialize_settings(handle);                                                                              // 5332
                                                                                                                       // 5333
        if (val) {                                                                                                     // 5334
          self.set_ui($(handle), parseFloat(val));                                                                     // 5335
        } else {                                                                                                       // 5336
          self.set_initial_position($(this));                                                                          // 5337
        }                                                                                                              // 5338
      });                                                                                                              // 5339
    }                                                                                                                  // 5340
  };                                                                                                                   // 5341
                                                                                                                       // 5342
}(jQuery, window, window.document));                                                                                   // 5343
                                                                                                                       // 5344
;(function ($, window, document, undefined) {                                                                          // 5345
  'use strict';                                                                                                        // 5346
                                                                                                                       // 5347
  Foundation.libs.tab = {                                                                                              // 5348
    name : 'tab',                                                                                                      // 5349
                                                                                                                       // 5350
    version : '5.5.2',                                                                                                 // 5351
                                                                                                                       // 5352
    settings : {                                                                                                       // 5353
      active_class : 'active',                                                                                         // 5354
      callback : function () {},                                                                                       // 5355
      deep_linking : false,                                                                                            // 5356
      scroll_to_content : true,                                                                                        // 5357
      is_hover : false                                                                                                 // 5358
    },                                                                                                                 // 5359
                                                                                                                       // 5360
    default_tab_hashes : [],                                                                                           // 5361
                                                                                                                       // 5362
    init : function (scope, method, options) {                                                                         // 5363
      var self = this,                                                                                                 // 5364
          S = this.S;                                                                                                  // 5365
                                                                                                                       // 5366
	  // Store the default active tabs which will be referenced when the                                                  // 5367
	  // location hash is absent, as in the case of navigating the tabs and                                               // 5368
	  // returning to the first viewing via the browser Back button.                                                      // 5369
	  S('[' + this.attr_name() + '] > .active > a', this.scope).each(function () {                                        // 5370
	    self.default_tab_hashes.push(this.hash);                                                                          // 5371
	  });                                                                                                                 // 5372
                                                                                                                       // 5373
      // store the initial href, which is used to allow correct behaviour of the                                       // 5374
      // browser back button when deep linking is turned on.                                                           // 5375
      self.entry_location = window.location.href;                                                                      // 5376
                                                                                                                       // 5377
      this.bindings(method, options);                                                                                  // 5378
      this.handle_location_hash_change();                                                                              // 5379
    },                                                                                                                 // 5380
                                                                                                                       // 5381
    events : function () {                                                                                             // 5382
      var self = this,                                                                                                 // 5383
          S = this.S;                                                                                                  // 5384
                                                                                                                       // 5385
      var usual_tab_behavior =  function (e, target) {                                                                 // 5386
          var settings = S(target).closest('[' + self.attr_name() + ']').data(self.attr_name(true) + '-init');         // 5387
          if (!settings.is_hover || Modernizr.touch) {                                                                 // 5388
            e.preventDefault();                                                                                        // 5389
            e.stopPropagation();                                                                                       // 5390
            self.toggle_active_tab(S(target).parent());                                                                // 5391
          }                                                                                                            // 5392
        };                                                                                                             // 5393
                                                                                                                       // 5394
      S(this.scope)                                                                                                    // 5395
        .off('.tab')                                                                                                   // 5396
        // Key event: focus/tab key                                                                                    // 5397
        .on('keydown.fndtn.tab', '[' + this.attr_name() + '] > * > a', function(e) {                                   // 5398
          var el = this;                                                                                               // 5399
          var keyCode = e.keyCode || e.which;                                                                          // 5400
            // if user pressed tab key                                                                                 // 5401
            if (keyCode == 9) {                                                                                        // 5402
              e.preventDefault();                                                                                      // 5403
              // TODO: Change usual_tab_behavior into accessibility function?                                          // 5404
              usual_tab_behavior(e, el);                                                                               // 5405
            }                                                                                                          // 5406
        })                                                                                                             // 5407
        // Click event: tab title                                                                                      // 5408
        .on('click.fndtn.tab', '[' + this.attr_name() + '] > * > a', function(e) {                                     // 5409
          var el = this;                                                                                               // 5410
          usual_tab_behavior(e, el);                                                                                   // 5411
        })                                                                                                             // 5412
        // Hover event: tab title                                                                                      // 5413
        .on('mouseenter.fndtn.tab', '[' + this.attr_name() + '] > * > a', function (e) {                               // 5414
          var settings = S(this).closest('[' + self.attr_name() + ']').data(self.attr_name(true) + '-init');           // 5415
          if (settings.is_hover) {                                                                                     // 5416
            self.toggle_active_tab(S(this).parent());                                                                  // 5417
          }                                                                                                            // 5418
        });                                                                                                            // 5419
                                                                                                                       // 5420
      // Location hash change event                                                                                    // 5421
      S(window).on('hashchange.fndtn.tab', function (e) {                                                              // 5422
        e.preventDefault();                                                                                            // 5423
        self.handle_location_hash_change();                                                                            // 5424
      });                                                                                                              // 5425
    },                                                                                                                 // 5426
                                                                                                                       // 5427
    handle_location_hash_change : function () {                                                                        // 5428
                                                                                                                       // 5429
      var self = this,                                                                                                 // 5430
          S = this.S;                                                                                                  // 5431
                                                                                                                       // 5432
      S('[' + this.attr_name() + ']', this.scope).each(function () {                                                   // 5433
        var settings = S(this).data(self.attr_name(true) + '-init');                                                   // 5434
        if (settings.deep_linking) {                                                                                   // 5435
          // Match the location hash to a label                                                                        // 5436
          var hash;                                                                                                    // 5437
          if (settings.scroll_to_content) {                                                                            // 5438
            hash = self.scope.location.hash;                                                                           // 5439
          } else {                                                                                                     // 5440
            // prefix the hash to prevent anchor scrolling                                                             // 5441
            hash = self.scope.location.hash.replace('fndtn-', '');                                                     // 5442
          }                                                                                                            // 5443
          if (hash != '') {                                                                                            // 5444
            // Check whether the location hash references a tab content div or                                         // 5445
            // another element on the page (inside or outside the tab content div)                                     // 5446
            var hash_element = S(hash);                                                                                // 5447
            if (hash_element.hasClass('content') && hash_element.parent().hasClass('tabs-content')) {                  // 5448
              // Tab content div                                                                                       // 5449
              self.toggle_active_tab($('[' + self.attr_name() + '] > * > a[href=' + hash + ']').parent());             // 5450
            } else {                                                                                                   // 5451
              // Not the tab content div. If inside the tab content, find the                                          // 5452
              // containing tab and toggle it as active.                                                               // 5453
              var hash_tab_container_id = hash_element.closest('.content').attr('id');                                 // 5454
              if (hash_tab_container_id != undefined) {                                                                // 5455
                self.toggle_active_tab($('[' + self.attr_name() + '] > * > a[href=#' + hash_tab_container_id + ']').parent(), hash);
              }                                                                                                        // 5457
            }                                                                                                          // 5458
          } else {                                                                                                     // 5459
            // Reference the default tab hashes which were initialized in the init function                            // 5460
            for (var ind = 0; ind < self.default_tab_hashes.length; ind++) {                                           // 5461
              self.toggle_active_tab($('[' + self.attr_name() + '] > * > a[href=' + self.default_tab_hashes[ind] + ']').parent());
            }                                                                                                          // 5463
          }                                                                                                            // 5464
        }                                                                                                              // 5465
       });                                                                                                             // 5466
     },                                                                                                                // 5467
                                                                                                                       // 5468
    toggle_active_tab : function (tab, location_hash) {                                                                // 5469
      var self = this,                                                                                                 // 5470
          S = self.S,                                                                                                  // 5471
          tabs = tab.closest('[' + this.attr_name() + ']'),                                                            // 5472
          tab_link = tab.find('a'),                                                                                    // 5473
          anchor = tab.children('a').first(),                                                                          // 5474
          target_hash = '#' + anchor.attr('href').split('#')[1],                                                       // 5475
          target = S(target_hash),                                                                                     // 5476
          siblings = tab.siblings(),                                                                                   // 5477
          settings = tabs.data(this.attr_name(true) + '-init'),                                                        // 5478
          interpret_keyup_action = function (e) {                                                                      // 5479
            // Light modification of Heydon Pickering's Practical ARIA Examples: http://heydonworks.com/practical_aria_examples/js/a11y.js
                                                                                                                       // 5481
            // define current, previous and next (possible) tabs                                                       // 5482
                                                                                                                       // 5483
            var $original = $(this);                                                                                   // 5484
            var $prev = $(this).parents('li').prev().children('[role="tab"]');                                         // 5485
            var $next = $(this).parents('li').next().children('[role="tab"]');                                         // 5486
            var $target;                                                                                               // 5487
                                                                                                                       // 5488
            // find the direction (prev or next)                                                                       // 5489
                                                                                                                       // 5490
            switch (e.keyCode) {                                                                                       // 5491
              case 37:                                                                                                 // 5492
                $target = $prev;                                                                                       // 5493
                break;                                                                                                 // 5494
              case 39:                                                                                                 // 5495
                $target = $next;                                                                                       // 5496
                break;                                                                                                 // 5497
              default:                                                                                                 // 5498
                $target = false                                                                                        // 5499
                  break;                                                                                               // 5500
            }                                                                                                          // 5501
                                                                                                                       // 5502
            if ($target.length) {                                                                                      // 5503
              $original.attr({                                                                                         // 5504
                'tabindex' : '-1',                                                                                     // 5505
                'aria-selected' : null                                                                                 // 5506
              });                                                                                                      // 5507
              $target.attr({                                                                                           // 5508
                'tabindex' : '0',                                                                                      // 5509
                'aria-selected' : true                                                                                 // 5510
              }).focus();                                                                                              // 5511
            }                                                                                                          // 5512
                                                                                                                       // 5513
            // Hide panels                                                                                             // 5514
                                                                                                                       // 5515
            $('[role="tabpanel"]')                                                                                     // 5516
              .attr('aria-hidden', 'true');                                                                            // 5517
                                                                                                                       // 5518
            // Show panel which corresponds to target                                                                  // 5519
                                                                                                                       // 5520
            $('#' + $(document.activeElement).attr('href').substring(1))                                               // 5521
              .attr('aria-hidden', null);                                                                              // 5522
                                                                                                                       // 5523
          },                                                                                                           // 5524
          go_to_hash = function(hash) {                                                                                // 5525
            // This function allows correct behaviour of the browser's back button when deep linking is enabled. Without it
            // the user would get continually redirected to the default hash.                                          // 5527
            var is_entry_location = window.location.href === self.entry_location,                                      // 5528
                default_hash = settings.scroll_to_content ? self.default_tab_hashes[0] : is_entry_location ? window.location.hash :'fndtn-' + self.default_tab_hashes[0].replace('#', '')
                                                                                                                       // 5530
            if (!(is_entry_location && hash === default_hash)) {                                                       // 5531
              window.location.hash = hash;                                                                             // 5532
            }                                                                                                          // 5533
          };                                                                                                           // 5534
                                                                                                                       // 5535
      // allow usage of data-tab-content attribute instead of href                                                     // 5536
      if (anchor.data('tab-content')) {                                                                                // 5537
        target_hash = '#' + anchor.data('tab-content').split('#')[1];                                                  // 5538
        target = S(target_hash);                                                                                       // 5539
      }                                                                                                                // 5540
                                                                                                                       // 5541
      if (settings.deep_linking) {                                                                                     // 5542
                                                                                                                       // 5543
        if (settings.scroll_to_content) {                                                                              // 5544
                                                                                                                       // 5545
          // retain current hash to scroll to content                                                                  // 5546
          go_to_hash(location_hash || target_hash);                                                                    // 5547
                                                                                                                       // 5548
          if (location_hash == undefined || location_hash == target_hash) {                                            // 5549
            tab.parent()[0].scrollIntoView();                                                                          // 5550
          } else {                                                                                                     // 5551
            S(target_hash)[0].scrollIntoView();                                                                        // 5552
          }                                                                                                            // 5553
        } else {                                                                                                       // 5554
          // prefix the hashes so that the browser doesn't scroll down                                                 // 5555
          if (location_hash != undefined) {                                                                            // 5556
            go_to_hash('fndtn-' + location_hash.replace('#', ''));                                                     // 5557
          } else {                                                                                                     // 5558
            go_to_hash('fndtn-' + target_hash.replace('#', ''));                                                       // 5559
          }                                                                                                            // 5560
        }                                                                                                              // 5561
      }                                                                                                                // 5562
                                                                                                                       // 5563
      // WARNING: The activation and deactivation of the tab content must                                              // 5564
      // occur after the deep linking in order to properly refresh the browser                                         // 5565
      // window (notably in Chrome).                                                                                   // 5566
      // Clean up multiple attr instances to done once                                                                 // 5567
      tab.addClass(settings.active_class).triggerHandler('opened');                                                    // 5568
      tab_link.attr({'aria-selected' : 'true',  tabindex : 0});                                                        // 5569
      siblings.removeClass(settings.active_class)                                                                      // 5570
      siblings.find('a').attr({'aria-selected' : 'false',  tabindex : -1});                                            // 5571
      target.siblings().removeClass(settings.active_class).attr({'aria-hidden' : 'true',  tabindex : -1});             // 5572
      target.addClass(settings.active_class).attr('aria-hidden', 'false').removeAttr('tabindex');                      // 5573
      settings.callback(tab);                                                                                          // 5574
      target.triggerHandler('toggled', [target]);                                                                      // 5575
      tabs.triggerHandler('toggled', [tab]);                                                                           // 5576
                                                                                                                       // 5577
      tab_link.off('keydown').on('keydown', interpret_keyup_action );                                                  // 5578
    },                                                                                                                 // 5579
                                                                                                                       // 5580
    data_attr : function (str) {                                                                                       // 5581
      if (this.namespace.length > 0) {                                                                                 // 5582
        return this.namespace + '-' + str;                                                                             // 5583
      }                                                                                                                // 5584
                                                                                                                       // 5585
      return str;                                                                                                      // 5586
    },                                                                                                                 // 5587
                                                                                                                       // 5588
    off : function () {},                                                                                              // 5589
                                                                                                                       // 5590
    reflow : function () {}                                                                                            // 5591
  };                                                                                                                   // 5592
}(jQuery, window, window.document));                                                                                   // 5593
                                                                                                                       // 5594
;(function ($, window, document, undefined) {                                                                          // 5595
  'use strict';                                                                                                        // 5596
                                                                                                                       // 5597
  Foundation.libs.tooltip = {                                                                                          // 5598
    name : 'tooltip',                                                                                                  // 5599
                                                                                                                       // 5600
    version : '5.5.2',                                                                                                 // 5601
                                                                                                                       // 5602
    settings : {                                                                                                       // 5603
      additional_inheritable_classes : [],                                                                             // 5604
      tooltip_class : '.tooltip',                                                                                      // 5605
      append_to : 'body',                                                                                              // 5606
      touch_close_text : 'Tap To Close',                                                                               // 5607
      disable_for_touch : false,                                                                                       // 5608
      hover_delay : 200,                                                                                               // 5609
      show_on : 'all',                                                                                                 // 5610
      tip_template : function (selector, content) {                                                                    // 5611
        return '<span data-selector="' + selector + '" id="' + selector + '" class="'                                  // 5612
          + Foundation.libs.tooltip.settings.tooltip_class.substring(1)                                                // 5613
          + '" role="tooltip">' + content + '<span class="nub"></span></span>';                                        // 5614
      }                                                                                                                // 5615
    },                                                                                                                 // 5616
                                                                                                                       // 5617
    cache : {},                                                                                                        // 5618
                                                                                                                       // 5619
    init : function (scope, method, options) {                                                                         // 5620
      Foundation.inherit(this, 'random_str');                                                                          // 5621
      this.bindings(method, options);                                                                                  // 5622
    },                                                                                                                 // 5623
                                                                                                                       // 5624
    should_show : function (target, tip) {                                                                             // 5625
      var settings = $.extend({}, this.settings, this.data_options(target));                                           // 5626
                                                                                                                       // 5627
      if (settings.show_on === 'all') {                                                                                // 5628
        return true;                                                                                                   // 5629
      } else if (this.small() && settings.show_on === 'small') {                                                       // 5630
        return true;                                                                                                   // 5631
      } else if (this.medium() && settings.show_on === 'medium') {                                                     // 5632
        return true;                                                                                                   // 5633
      } else if (this.large() && settings.show_on === 'large') {                                                       // 5634
        return true;                                                                                                   // 5635
      }                                                                                                                // 5636
      return false;                                                                                                    // 5637
    },                                                                                                                 // 5638
                                                                                                                       // 5639
    medium : function () {                                                                                             // 5640
      return matchMedia(Foundation.media_queries['medium']).matches;                                                   // 5641
    },                                                                                                                 // 5642
                                                                                                                       // 5643
    large : function () {                                                                                              // 5644
      return matchMedia(Foundation.media_queries['large']).matches;                                                    // 5645
    },                                                                                                                 // 5646
                                                                                                                       // 5647
    events : function (instance) {                                                                                     // 5648
      var self = this,                                                                                                 // 5649
          S = self.S;                                                                                                  // 5650
                                                                                                                       // 5651
      self.create(this.S(instance));                                                                                   // 5652
                                                                                                                       // 5653
      function _startShow(elt, $this, immediate) {                                                                     // 5654
        if (elt.timer) {                                                                                               // 5655
          return;                                                                                                      // 5656
        }                                                                                                              // 5657
                                                                                                                       // 5658
        if (immediate) {                                                                                               // 5659
          elt.timer = null;                                                                                            // 5660
          self.showTip($this);                                                                                         // 5661
        } else {                                                                                                       // 5662
          elt.timer = setTimeout(function () {                                                                         // 5663
            elt.timer = null;                                                                                          // 5664
            self.showTip($this);                                                                                       // 5665
          }.bind(elt), self.settings.hover_delay);                                                                     // 5666
        }                                                                                                              // 5667
      }                                                                                                                // 5668
                                                                                                                       // 5669
      function _startHide(elt, $this) {                                                                                // 5670
        if (elt.timer) {                                                                                               // 5671
          clearTimeout(elt.timer);                                                                                     // 5672
          elt.timer = null;                                                                                            // 5673
        }                                                                                                              // 5674
                                                                                                                       // 5675
        self.hide($this);                                                                                              // 5676
      }                                                                                                                // 5677
                                                                                                                       // 5678
      $(this.scope)                                                                                                    // 5679
        .off('.tooltip')                                                                                               // 5680
        .on('mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip',  // 5681
          '[' + this.attr_name() + ']', function (e) {                                                                 // 5682
          var $this = S(this),                                                                                         // 5683
              settings = $.extend({}, self.settings, self.data_options($this)),                                        // 5684
              is_touch = false;                                                                                        // 5685
                                                                                                                       // 5686
          if (Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type) && S(e.target).is('a')) {                    // 5687
            return false;                                                                                              // 5688
          }                                                                                                            // 5689
                                                                                                                       // 5690
          if (/mouse/i.test(e.type) && self.ie_touch(e)) {                                                             // 5691
            return false;                                                                                              // 5692
          }                                                                                                            // 5693
                                                                                                                       // 5694
          if ($this.hasClass('open')) {                                                                                // 5695
            if (Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type)) {                                         // 5696
              e.preventDefault();                                                                                      // 5697
            }                                                                                                          // 5698
            self.hide($this);                                                                                          // 5699
          } else {                                                                                                     // 5700
            if (settings.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type)) {           // 5701
              return;                                                                                                  // 5702
            } else if (!settings.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type)) {   // 5703
              e.preventDefault();                                                                                      // 5704
              S(settings.tooltip_class + '.open').hide();                                                              // 5705
              is_touch = true;                                                                                         // 5706
              // close other open tooltips on touch                                                                    // 5707
              if ($('.open[' + self.attr_name() + ']').length > 0) {                                                   // 5708
               var prevOpen = S($('.open[' + self.attr_name() + ']')[0]);                                              // 5709
               self.hide(prevOpen);                                                                                    // 5710
              }                                                                                                        // 5711
            }                                                                                                          // 5712
                                                                                                                       // 5713
            if (/enter|over/i.test(e.type)) {                                                                          // 5714
              _startShow(this, $this);                                                                                 // 5715
                                                                                                                       // 5716
            } else if (e.type === 'mouseout' || e.type === 'mouseleave') {                                             // 5717
              _startHide(this, $this);                                                                                 // 5718
            } else {                                                                                                   // 5719
              _startShow(this, $this, true);                                                                           // 5720
            }                                                                                                          // 5721
          }                                                                                                            // 5722
        })                                                                                                             // 5723
        .on('mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip', '[' + this.attr_name() + '].open', function (e) {
          if (/mouse/i.test(e.type) && self.ie_touch(e)) {                                                             // 5725
            return false;                                                                                              // 5726
          }                                                                                                            // 5727
                                                                                                                       // 5728
          if ($(this).data('tooltip-open-event-type') == 'touch' && e.type == 'mouseleave') {                          // 5729
            return;                                                                                                    // 5730
          } else if ($(this).data('tooltip-open-event-type') == 'mouse' && /MSPointerDown|touchstart/i.test(e.type)) { // 5731
            self.convert_to_touch($(this));                                                                            // 5732
          } else {                                                                                                     // 5733
            _startHide(this, $(this));                                                                                 // 5734
          }                                                                                                            // 5735
        })                                                                                                             // 5736
        .on('DOMNodeRemoved DOMAttrModified', '[' + this.attr_name() + ']:not(a)', function (e) {                      // 5737
          _startHide(this, S(this));                                                                                   // 5738
        });                                                                                                            // 5739
    },                                                                                                                 // 5740
                                                                                                                       // 5741
    ie_touch : function (e) {                                                                                          // 5742
      // How do I distinguish between IE11 and Windows Phone 8?????                                                    // 5743
      return false;                                                                                                    // 5744
    },                                                                                                                 // 5745
                                                                                                                       // 5746
    showTip : function ($target) {                                                                                     // 5747
      var $tip = this.getTip($target);                                                                                 // 5748
      if (this.should_show($target, $tip)) {                                                                           // 5749
        return this.show($target);                                                                                     // 5750
      }                                                                                                                // 5751
      return;                                                                                                          // 5752
    },                                                                                                                 // 5753
                                                                                                                       // 5754
    getTip : function ($target) {                                                                                      // 5755
      var selector = this.selector($target),                                                                           // 5756
          settings = $.extend({}, this.settings, this.data_options($target)),                                          // 5757
          tip = null;                                                                                                  // 5758
                                                                                                                       // 5759
      if (selector) {                                                                                                  // 5760
        tip = this.S('span[data-selector="' + selector + '"]' + settings.tooltip_class);                               // 5761
      }                                                                                                                // 5762
                                                                                                                       // 5763
      return (typeof tip === 'object') ? tip : false;                                                                  // 5764
    },                                                                                                                 // 5765
                                                                                                                       // 5766
    selector : function ($target) {                                                                                    // 5767
      var dataSelector = $target.attr(this.attr_name()) || $target.attr('data-selector');                              // 5768
                                                                                                                       // 5769
      if (typeof dataSelector != 'string') {                                                                           // 5770
        dataSelector = this.random_str(6);                                                                             // 5771
        $target                                                                                                        // 5772
          .attr('data-selector', dataSelector)                                                                         // 5773
          .attr('aria-describedby', dataSelector);                                                                     // 5774
      }                                                                                                                // 5775
                                                                                                                       // 5776
      return dataSelector;                                                                                             // 5777
    },                                                                                                                 // 5778
                                                                                                                       // 5779
    create : function ($target) {                                                                                      // 5780
      var self = this,                                                                                                 // 5781
          settings = $.extend({}, this.settings, this.data_options($target)),                                          // 5782
          tip_template = this.settings.tip_template;                                                                   // 5783
                                                                                                                       // 5784
      if (typeof settings.tip_template === 'string' && window.hasOwnProperty(settings.tip_template)) {                 // 5785
        tip_template = window[settings.tip_template];                                                                  // 5786
      }                                                                                                                // 5787
                                                                                                                       // 5788
      var $tip = $(tip_template(this.selector($target), $('<div></div>').html($target.attr('title')).html())),         // 5789
          classes = this.inheritable_classes($target);                                                                 // 5790
                                                                                                                       // 5791
      $tip.addClass(classes).appendTo(settings.append_to);                                                             // 5792
                                                                                                                       // 5793
      if (Modernizr.touch) {                                                                                           // 5794
        $tip.append('<span class="tap-to-close">' + settings.touch_close_text + '</span>');                            // 5795
        $tip.on('touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip', function (e) {                                 // 5796
          self.hide($target);                                                                                          // 5797
        });                                                                                                            // 5798
      }                                                                                                                // 5799
                                                                                                                       // 5800
      $target.removeAttr('title').attr('title', '');                                                                   // 5801
    },                                                                                                                 // 5802
                                                                                                                       // 5803
    reposition : function (target, tip, classes) {                                                                     // 5804
      var width, nub, nubHeight, nubWidth, column, objPos;                                                             // 5805
                                                                                                                       // 5806
      tip.css('visibility', 'hidden').show();                                                                          // 5807
                                                                                                                       // 5808
      width = target.data('width');                                                                                    // 5809
      nub = tip.children('.nub');                                                                                      // 5810
      nubHeight = nub.outerHeight();                                                                                   // 5811
      nubWidth = nub.outerHeight();                                                                                    // 5812
                                                                                                                       // 5813
      if (this.small()) {                                                                                              // 5814
        tip.css({'width' : '100%'});                                                                                   // 5815
      } else {                                                                                                         // 5816
        tip.css({'width' : (width) ? width : 'auto'});                                                                 // 5817
      }                                                                                                                // 5818
                                                                                                                       // 5819
      objPos = function (obj, top, right, bottom, left, width) {                                                       // 5820
        return obj.css({                                                                                               // 5821
          'top' : (top) ? top : 'auto',                                                                                // 5822
          'bottom' : (bottom) ? bottom : 'auto',                                                                       // 5823
          'left' : (left) ? left : 'auto',                                                                             // 5824
          'right' : (right) ? right : 'auto'                                                                           // 5825
        }).end();                                                                                                      // 5826
      };                                                                                                               // 5827
                                                                                                                       // 5828
      objPos(tip, (target.offset().top + target.outerHeight() + 10), 'auto', 'auto', target.offset().left);            // 5829
                                                                                                                       // 5830
      if (this.small()) {                                                                                              // 5831
        objPos(tip, (target.offset().top + target.outerHeight() + 10), 'auto', 'auto', 12.5, $(this.scope).width());   // 5832
        tip.addClass('tip-override');                                                                                  // 5833
        objPos(nub, -nubHeight, 'auto', 'auto', target.offset().left);                                                 // 5834
      } else {                                                                                                         // 5835
        var left = target.offset().left;                                                                               // 5836
        if (Foundation.rtl) {                                                                                          // 5837
          nub.addClass('rtl');                                                                                         // 5838
          left = target.offset().left + target.outerWidth() - tip.outerWidth();                                        // 5839
        }                                                                                                              // 5840
                                                                                                                       // 5841
        objPos(tip, (target.offset().top + target.outerHeight() + 10), 'auto', 'auto', left);                          // 5842
        // reset nub from small styles, if they've been applied                                                        // 5843
        if (nub.attr('style')) {                                                                                       // 5844
          nub.removeAttr('style');                                                                                     // 5845
        }                                                                                                              // 5846
                                                                                                                       // 5847
        tip.removeClass('tip-override');                                                                               // 5848
        if (classes && classes.indexOf('tip-top') > -1) {                                                              // 5849
          if (Foundation.rtl) {                                                                                        // 5850
            nub.addClass('rtl');                                                                                       // 5851
          }                                                                                                            // 5852
          objPos(tip, (target.offset().top - tip.outerHeight()), 'auto', 'auto', left)                                 // 5853
            .removeClass('tip-override');                                                                              // 5854
        } else if (classes && classes.indexOf('tip-left') > -1) {                                                      // 5855
          objPos(tip, (target.offset().top + (target.outerHeight() / 2) - (tip.outerHeight() / 2)), 'auto', 'auto', (target.offset().left - tip.outerWidth() - nubHeight))
            .removeClass('tip-override');                                                                              // 5857
          nub.removeClass('rtl');                                                                                      // 5858
        } else if (classes && classes.indexOf('tip-right') > -1) {                                                     // 5859
          objPos(tip, (target.offset().top + (target.outerHeight() / 2) - (tip.outerHeight() / 2)), 'auto', 'auto', (target.offset().left + target.outerWidth() + nubHeight))
            .removeClass('tip-override');                                                                              // 5861
          nub.removeClass('rtl');                                                                                      // 5862
        }                                                                                                              // 5863
      }                                                                                                                // 5864
                                                                                                                       // 5865
      tip.css('visibility', 'visible').hide();                                                                         // 5866
    },                                                                                                                 // 5867
                                                                                                                       // 5868
    small : function () {                                                                                              // 5869
      return matchMedia(Foundation.media_queries.small).matches &&                                                     // 5870
        !matchMedia(Foundation.media_queries.medium).matches;                                                          // 5871
    },                                                                                                                 // 5872
                                                                                                                       // 5873
    inheritable_classes : function ($target) {                                                                         // 5874
      var settings = $.extend({}, this.settings, this.data_options($target)),                                          // 5875
          inheritables = ['tip-top', 'tip-left', 'tip-bottom', 'tip-right', 'radius', 'round'].concat(settings.additional_inheritable_classes),
          classes = $target.attr('class'),                                                                             // 5877
          filtered = classes ? $.map(classes.split(' '), function (el, i) {                                            // 5878
            if ($.inArray(el, inheritables) !== -1) {                                                                  // 5879
              return el;                                                                                               // 5880
            }                                                                                                          // 5881
          }).join(' ') : '';                                                                                           // 5882
                                                                                                                       // 5883
      return $.trim(filtered);                                                                                         // 5884
    },                                                                                                                 // 5885
                                                                                                                       // 5886
    convert_to_touch : function ($target) {                                                                            // 5887
      var self = this,                                                                                                 // 5888
          $tip = self.getTip($target),                                                                                 // 5889
          settings = $.extend({}, self.settings, self.data_options($target));                                          // 5890
                                                                                                                       // 5891
      if ($tip.find('.tap-to-close').length === 0) {                                                                   // 5892
        $tip.append('<span class="tap-to-close">' + settings.touch_close_text + '</span>');                            // 5893
        $tip.on('click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose', function (e) {
          self.hide($target);                                                                                          // 5895
        });                                                                                                            // 5896
      }                                                                                                                // 5897
                                                                                                                       // 5898
      $target.data('tooltip-open-event-type', 'touch');                                                                // 5899
    },                                                                                                                 // 5900
                                                                                                                       // 5901
    show : function ($target) {                                                                                        // 5902
      var $tip = this.getTip($target);                                                                                 // 5903
                                                                                                                       // 5904
      if ($target.data('tooltip-open-event-type') == 'touch') {                                                        // 5905
        this.convert_to_touch($target);                                                                                // 5906
      }                                                                                                                // 5907
                                                                                                                       // 5908
      this.reposition($target, $tip, $target.attr('class'));                                                           // 5909
      $target.addClass('open');                                                                                        // 5910
      $tip.fadeIn(150);                                                                                                // 5911
    },                                                                                                                 // 5912
                                                                                                                       // 5913
    hide : function ($target) {                                                                                        // 5914
      var $tip = this.getTip($target);                                                                                 // 5915
      $tip.fadeOut(150, function () {                                                                                  // 5916
        $tip.find('.tap-to-close').remove();                                                                           // 5917
        $tip.off('click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose');                                         // 5918
        $target.removeClass('open');                                                                                   // 5919
      });                                                                                                              // 5920
    },                                                                                                                 // 5921
                                                                                                                       // 5922
    off : function () {                                                                                                // 5923
      var self = this;                                                                                                 // 5924
      this.S(this.scope).off('.fndtn.tooltip');                                                                        // 5925
      this.S(this.settings.tooltip_class).each(function (i) {                                                          // 5926
        $('[' + self.attr_name() + ']').eq(i).attr('title', $(this).text());                                           // 5927
      }).remove();                                                                                                     // 5928
    },                                                                                                                 // 5929
                                                                                                                       // 5930
    reflow : function () {}                                                                                            // 5931
  };                                                                                                                   // 5932
}(jQuery, window, window.document));                                                                                   // 5933
                                                                                                                       // 5934
;(function ($, window, document, undefined) {                                                                          // 5935
  'use strict';                                                                                                        // 5936
                                                                                                                       // 5937
  Foundation.libs.topbar = {                                                                                           // 5938
    name : 'topbar',                                                                                                   // 5939
                                                                                                                       // 5940
    version : '5.5.2',                                                                                                 // 5941
                                                                                                                       // 5942
    settings : {                                                                                                       // 5943
      index : 0,                                                                                                       // 5944
      start_offset : 0,                                                                                                // 5945
      sticky_class : 'sticky',                                                                                         // 5946
      custom_back_text : true,                                                                                         // 5947
      back_text : 'Back',                                                                                              // 5948
      mobile_show_parent_link : true,                                                                                  // 5949
      is_hover : true,                                                                                                 // 5950
      scrolltop : true, // jump to top when sticky nav menu toggle is clicked                                          // 5951
      sticky_on : 'all',                                                                                               // 5952
      dropdown_autoclose: true                                                                                         // 5953
    },                                                                                                                 // 5954
                                                                                                                       // 5955
    init : function (section, method, options) {                                                                       // 5956
      Foundation.inherit(this, 'add_custom_rule register_media throttle');                                             // 5957
      var self = this;                                                                                                 // 5958
                                                                                                                       // 5959
      self.register_media('topbar', 'foundation-mq-topbar');                                                           // 5960
                                                                                                                       // 5961
      this.bindings(method, options);                                                                                  // 5962
                                                                                                                       // 5963
      self.S('[' + this.attr_name() + ']', this.scope).each(function () {                                              // 5964
        var topbar = $(this),                                                                                          // 5965
            settings = topbar.data(self.attr_name(true) + '-init'),                                                    // 5966
            section = self.S('section, .top-bar-section', this);                                                       // 5967
        topbar.data('index', 0);                                                                                       // 5968
        var topbarContainer = topbar.parent();                                                                         // 5969
        if (topbarContainer.hasClass('fixed') || self.is_sticky(topbar, topbarContainer, settings) ) {                 // 5970
          self.settings.sticky_class = settings.sticky_class;                                                          // 5971
          self.settings.sticky_topbar = topbar;                                                                        // 5972
          topbar.data('height', topbarContainer.outerHeight());                                                        // 5973
          topbar.data('stickyoffset', topbarContainer.offset().top);                                                   // 5974
        } else {                                                                                                       // 5975
          topbar.data('height', topbar.outerHeight());                                                                 // 5976
        }                                                                                                              // 5977
                                                                                                                       // 5978
        if (!settings.assembled) {                                                                                     // 5979
          self.assemble(topbar);                                                                                       // 5980
        }                                                                                                              // 5981
                                                                                                                       // 5982
        if (settings.is_hover) {                                                                                       // 5983
          self.S('.has-dropdown', topbar).addClass('not-click');                                                       // 5984
        } else {                                                                                                       // 5985
          self.S('.has-dropdown', topbar).removeClass('not-click');                                                    // 5986
        }                                                                                                              // 5987
                                                                                                                       // 5988
        // Pad body when sticky (scrolled) or fixed.                                                                   // 5989
        self.add_custom_rule('.f-topbar-fixed { padding-top: ' + topbar.data('height') + 'px }');                      // 5990
                                                                                                                       // 5991
        if (topbarContainer.hasClass('fixed')) {                                                                       // 5992
          self.S('body').addClass('f-topbar-fixed');                                                                   // 5993
        }                                                                                                              // 5994
      });                                                                                                              // 5995
                                                                                                                       // 5996
    },                                                                                                                 // 5997
                                                                                                                       // 5998
    is_sticky : function (topbar, topbarContainer, settings) {                                                         // 5999
      var sticky     = topbarContainer.hasClass(settings.sticky_class);                                                // 6000
      var smallMatch = matchMedia(Foundation.media_queries.small).matches;                                             // 6001
      var medMatch   = matchMedia(Foundation.media_queries.medium).matches;                                            // 6002
      var lrgMatch   = matchMedia(Foundation.media_queries.large).matches;                                             // 6003
                                                                                                                       // 6004
      if (sticky && settings.sticky_on === 'all') {                                                                    // 6005
        return true;                                                                                                   // 6006
      }                                                                                                                // 6007
      if (sticky && this.small() && settings.sticky_on.indexOf('small') !== -1) {                                      // 6008
        if (smallMatch && !medMatch && !lrgMatch) { return true; }                                                     // 6009
      }                                                                                                                // 6010
      if (sticky && this.medium() && settings.sticky_on.indexOf('medium') !== -1) {                                    // 6011
        if (smallMatch && medMatch && !lrgMatch) { return true; }                                                      // 6012
      }                                                                                                                // 6013
      if (sticky && this.large() && settings.sticky_on.indexOf('large') !== -1) {                                      // 6014
        if (smallMatch && medMatch && lrgMatch) { return true; }                                                       // 6015
      }                                                                                                                // 6016
                                                                                                                       // 6017
       return false;                                                                                                   // 6018
    },                                                                                                                 // 6019
                                                                                                                       // 6020
    toggle : function (toggleEl) {                                                                                     // 6021
      var self = this,                                                                                                 // 6022
          topbar;                                                                                                      // 6023
                                                                                                                       // 6024
      if (toggleEl) {                                                                                                  // 6025
        topbar = self.S(toggleEl).closest('[' + this.attr_name() + ']');                                               // 6026
      } else {                                                                                                         // 6027
        topbar = self.S('[' + this.attr_name() + ']');                                                                 // 6028
      }                                                                                                                // 6029
                                                                                                                       // 6030
      var settings = topbar.data(this.attr_name(true) + '-init');                                                      // 6031
                                                                                                                       // 6032
      var section = self.S('section, .top-bar-section', topbar);                                                       // 6033
                                                                                                                       // 6034
      if (self.breakpoint()) {                                                                                         // 6035
        if (!self.rtl) {                                                                                               // 6036
          section.css({left : '0%'});                                                                                  // 6037
          $('>.name', section).css({left : '100%'});                                                                   // 6038
        } else {                                                                                                       // 6039
          section.css({right : '0%'});                                                                                 // 6040
          $('>.name', section).css({right : '100%'});                                                                  // 6041
        }                                                                                                              // 6042
                                                                                                                       // 6043
        self.S('li.moved', section).removeClass('moved');                                                              // 6044
        topbar.data('index', 0);                                                                                       // 6045
                                                                                                                       // 6046
        topbar                                                                                                         // 6047
          .toggleClass('expanded')                                                                                     // 6048
          .css('height', '');                                                                                          // 6049
      }                                                                                                                // 6050
                                                                                                                       // 6051
      if (settings.scrolltop) {                                                                                        // 6052
        if (!topbar.hasClass('expanded')) {                                                                            // 6053
          if (topbar.hasClass('fixed')) {                                                                              // 6054
            topbar.parent().addClass('fixed');                                                                         // 6055
            topbar.removeClass('fixed');                                                                               // 6056
            self.S('body').addClass('f-topbar-fixed');                                                                 // 6057
          }                                                                                                            // 6058
        } else if (topbar.parent().hasClass('fixed')) {                                                                // 6059
          if (settings.scrolltop) {                                                                                    // 6060
            topbar.parent().removeClass('fixed');                                                                      // 6061
            topbar.addClass('fixed');                                                                                  // 6062
            self.S('body').removeClass('f-topbar-fixed');                                                              // 6063
                                                                                                                       // 6064
            window.scrollTo(0, 0);                                                                                     // 6065
          } else {                                                                                                     // 6066
            topbar.parent().removeClass('expanded');                                                                   // 6067
          }                                                                                                            // 6068
        }                                                                                                              // 6069
      } else {                                                                                                         // 6070
        if (self.is_sticky(topbar, topbar.parent(), settings)) {                                                       // 6071
          topbar.parent().addClass('fixed');                                                                           // 6072
        }                                                                                                              // 6073
                                                                                                                       // 6074
        if (topbar.parent().hasClass('fixed')) {                                                                       // 6075
          if (!topbar.hasClass('expanded')) {                                                                          // 6076
            topbar.removeClass('fixed');                                                                               // 6077
            topbar.parent().removeClass('expanded');                                                                   // 6078
            self.update_sticky_positioning();                                                                          // 6079
          } else {                                                                                                     // 6080
            topbar.addClass('fixed');                                                                                  // 6081
            topbar.parent().addClass('expanded');                                                                      // 6082
            self.S('body').addClass('f-topbar-fixed');                                                                 // 6083
          }                                                                                                            // 6084
        }                                                                                                              // 6085
      }                                                                                                                // 6086
    },                                                                                                                 // 6087
                                                                                                                       // 6088
    timer : null,                                                                                                      // 6089
                                                                                                                       // 6090
    events : function (bar) {                                                                                          // 6091
      var self = this,                                                                                                 // 6092
          S = this.S;                                                                                                  // 6093
                                                                                                                       // 6094
      S(this.scope)                                                                                                    // 6095
        .off('.topbar')                                                                                                // 6096
        .on('click.fndtn.topbar', '[' + this.attr_name() + '] .toggle-topbar', function (e) {                          // 6097
          e.preventDefault();                                                                                          // 6098
          self.toggle(this);                                                                                           // 6099
        })                                                                                                             // 6100
        .on('click.fndtn.topbar contextmenu.fndtn.topbar', '.top-bar .top-bar-section li a[href^="#"],[' + this.attr_name() + '] .top-bar-section li a[href^="#"]', function (e) {
            var li = $(this).closest('li'),                                                                            // 6102
                topbar = li.closest('[' + self.attr_name() + ']'),                                                     // 6103
                settings = topbar.data(self.attr_name(true) + '-init');                                                // 6104
                                                                                                                       // 6105
            if (settings.dropdown_autoclose && settings.is_hover) {                                                    // 6106
              var hoverLi = $(this).closest('.hover');                                                                 // 6107
              hoverLi.removeClass('hover');                                                                            // 6108
            }                                                                                                          // 6109
            if (self.breakpoint() && !li.hasClass('back') && !li.hasClass('has-dropdown')) {                           // 6110
              self.toggle();                                                                                           // 6111
            }                                                                                                          // 6112
                                                                                                                       // 6113
        })                                                                                                             // 6114
        .on('click.fndtn.topbar', '[' + this.attr_name() + '] li.has-dropdown', function (e) {                         // 6115
          var li = S(this),                                                                                            // 6116
              target = S(e.target),                                                                                    // 6117
              topbar = li.closest('[' + self.attr_name() + ']'),                                                       // 6118
              settings = topbar.data(self.attr_name(true) + '-init');                                                  // 6119
                                                                                                                       // 6120
          if (target.data('revealId')) {                                                                               // 6121
            self.toggle();                                                                                             // 6122
            return;                                                                                                    // 6123
          }                                                                                                            // 6124
                                                                                                                       // 6125
          if (self.breakpoint()) {                                                                                     // 6126
            return;                                                                                                    // 6127
          }                                                                                                            // 6128
                                                                                                                       // 6129
          if (settings.is_hover && !Modernizr.touch) {                                                                 // 6130
            return;                                                                                                    // 6131
          }                                                                                                            // 6132
                                                                                                                       // 6133
          e.stopImmediatePropagation();                                                                                // 6134
                                                                                                                       // 6135
          if (li.hasClass('hover')) {                                                                                  // 6136
            li                                                                                                         // 6137
              .removeClass('hover')                                                                                    // 6138
              .find('li')                                                                                              // 6139
              .removeClass('hover');                                                                                   // 6140
                                                                                                                       // 6141
            li.parents('li.hover')                                                                                     // 6142
              .removeClass('hover');                                                                                   // 6143
          } else {                                                                                                     // 6144
            li.addClass('hover');                                                                                      // 6145
                                                                                                                       // 6146
            $(li).siblings().removeClass('hover');                                                                     // 6147
                                                                                                                       // 6148
            if (target[0].nodeName === 'A' && target.parent().hasClass('has-dropdown')) {                              // 6149
              e.preventDefault();                                                                                      // 6150
            }                                                                                                          // 6151
          }                                                                                                            // 6152
        })                                                                                                             // 6153
        .on('click.fndtn.topbar', '[' + this.attr_name() + '] .has-dropdown>a', function (e) {                         // 6154
          if (self.breakpoint()) {                                                                                     // 6155
                                                                                                                       // 6156
            e.preventDefault();                                                                                        // 6157
                                                                                                                       // 6158
            var $this = S(this),                                                                                       // 6159
                topbar = $this.closest('[' + self.attr_name() + ']'),                                                  // 6160
                section = topbar.find('section, .top-bar-section'),                                                    // 6161
                dropdownHeight = $this.next('.dropdown').outerHeight(),                                                // 6162
                $selectedLi = $this.closest('li');                                                                     // 6163
                                                                                                                       // 6164
            topbar.data('index', topbar.data('index') + 1);                                                            // 6165
            $selectedLi.addClass('moved');                                                                             // 6166
                                                                                                                       // 6167
            if (!self.rtl) {                                                                                           // 6168
              section.css({left : -(100 * topbar.data('index')) + '%'});                                               // 6169
              section.find('>.name').css({left : 100 * topbar.data('index') + '%'});                                   // 6170
            } else {                                                                                                   // 6171
              section.css({right : -(100 * topbar.data('index')) + '%'});                                              // 6172
              section.find('>.name').css({right : 100 * topbar.data('index') + '%'});                                  // 6173
            }                                                                                                          // 6174
                                                                                                                       // 6175
            topbar.css('height', $this.siblings('ul').outerHeight(true) + topbar.data('height'));                      // 6176
          }                                                                                                            // 6177
        });                                                                                                            // 6178
                                                                                                                       // 6179
      S(window).off('.topbar').on('resize.fndtn.topbar', self.throttle(function () {                                   // 6180
          self.resize.call(self);                                                                                      // 6181
      }, 50)).trigger('resize.fndtn.topbar').load(function () {                                                        // 6182
          // Ensure that the offset is calculated after all of the pages resources have loaded                         // 6183
          S(this).trigger('resize.fndtn.topbar');                                                                      // 6184
      });                                                                                                              // 6185
                                                                                                                       // 6186
      S('body').off('.topbar').on('click.fndtn.topbar', function (e) {                                                 // 6187
        var parent = S(e.target).closest('li').closest('li.hover');                                                    // 6188
                                                                                                                       // 6189
        if (parent.length > 0) {                                                                                       // 6190
          return;                                                                                                      // 6191
        }                                                                                                              // 6192
                                                                                                                       // 6193
        S('[' + self.attr_name() + '] li.hover').removeClass('hover');                                                 // 6194
      });                                                                                                              // 6195
                                                                                                                       // 6196
      // Go up a level on Click                                                                                        // 6197
      S(this.scope).on('click.fndtn.topbar', '[' + this.attr_name() + '] .has-dropdown .back', function (e) {          // 6198
        e.preventDefault();                                                                                            // 6199
                                                                                                                       // 6200
        var $this = S(this),                                                                                           // 6201
            topbar = $this.closest('[' + self.attr_name() + ']'),                                                      // 6202
            section = topbar.find('section, .top-bar-section'),                                                        // 6203
            settings = topbar.data(self.attr_name(true) + '-init'),                                                    // 6204
            $movedLi = $this.closest('li.moved'),                                                                      // 6205
            $previousLevelUl = $movedLi.parent();                                                                      // 6206
                                                                                                                       // 6207
        topbar.data('index', topbar.data('index') - 1);                                                                // 6208
                                                                                                                       // 6209
        if (!self.rtl) {                                                                                               // 6210
          section.css({left : -(100 * topbar.data('index')) + '%'});                                                   // 6211
          section.find('>.name').css({left : 100 * topbar.data('index') + '%'});                                       // 6212
        } else {                                                                                                       // 6213
          section.css({right : -(100 * topbar.data('index')) + '%'});                                                  // 6214
          section.find('>.name').css({right : 100 * topbar.data('index') + '%'});                                      // 6215
        }                                                                                                              // 6216
                                                                                                                       // 6217
        if (topbar.data('index') === 0) {                                                                              // 6218
          topbar.css('height', '');                                                                                    // 6219
        } else {                                                                                                       // 6220
          topbar.css('height', $previousLevelUl.outerHeight(true) + topbar.data('height'));                            // 6221
        }                                                                                                              // 6222
                                                                                                                       // 6223
        setTimeout(function () {                                                                                       // 6224
          $movedLi.removeClass('moved');                                                                               // 6225
        }, 300);                                                                                                       // 6226
      });                                                                                                              // 6227
                                                                                                                       // 6228
      // Show dropdown menus when their items are focused                                                              // 6229
      S(this.scope).find('.dropdown a')                                                                                // 6230
        .focus(function () {                                                                                           // 6231
          $(this).parents('.has-dropdown').addClass('hover');                                                          // 6232
        })                                                                                                             // 6233
        .blur(function () {                                                                                            // 6234
          $(this).parents('.has-dropdown').removeClass('hover');                                                       // 6235
        });                                                                                                            // 6236
    },                                                                                                                 // 6237
                                                                                                                       // 6238
    resize : function () {                                                                                             // 6239
      var self = this;                                                                                                 // 6240
      self.S('[' + this.attr_name() + ']').each(function () {                                                          // 6241
        var topbar = self.S(this),                                                                                     // 6242
            settings = topbar.data(self.attr_name(true) + '-init');                                                    // 6243
                                                                                                                       // 6244
        var stickyContainer = topbar.parent('.' + self.settings.sticky_class);                                         // 6245
        var stickyOffset;                                                                                              // 6246
                                                                                                                       // 6247
        if (!self.breakpoint()) {                                                                                      // 6248
          var doToggle = topbar.hasClass('expanded');                                                                  // 6249
          topbar                                                                                                       // 6250
            .css('height', '')                                                                                         // 6251
            .removeClass('expanded')                                                                                   // 6252
            .find('li')                                                                                                // 6253
            .removeClass('hover');                                                                                     // 6254
                                                                                                                       // 6255
            if (doToggle) {                                                                                            // 6256
              self.toggle(topbar);                                                                                     // 6257
            }                                                                                                          // 6258
        }                                                                                                              // 6259
                                                                                                                       // 6260
        if (self.is_sticky(topbar, stickyContainer, settings)) {                                                       // 6261
          if (stickyContainer.hasClass('fixed')) {                                                                     // 6262
            // Remove the fixed to allow for correct calculation of the offset.                                        // 6263
            stickyContainer.removeClass('fixed');                                                                      // 6264
                                                                                                                       // 6265
            stickyOffset = stickyContainer.offset().top;                                                               // 6266
            if (self.S(document.body).hasClass('f-topbar-fixed')) {                                                    // 6267
              stickyOffset -= topbar.data('height');                                                                   // 6268
            }                                                                                                          // 6269
                                                                                                                       // 6270
            topbar.data('stickyoffset', stickyOffset);                                                                 // 6271
            stickyContainer.addClass('fixed');                                                                         // 6272
          } else {                                                                                                     // 6273
            stickyOffset = stickyContainer.offset().top;                                                               // 6274
            topbar.data('stickyoffset', stickyOffset);                                                                 // 6275
          }                                                                                                            // 6276
        }                                                                                                              // 6277
                                                                                                                       // 6278
      });                                                                                                              // 6279
    },                                                                                                                 // 6280
                                                                                                                       // 6281
    breakpoint : function () {                                                                                         // 6282
      return !matchMedia(Foundation.media_queries['topbar']).matches;                                                  // 6283
    },                                                                                                                 // 6284
                                                                                                                       // 6285
    small : function () {                                                                                              // 6286
      return matchMedia(Foundation.media_queries['small']).matches;                                                    // 6287
    },                                                                                                                 // 6288
                                                                                                                       // 6289
    medium : function () {                                                                                             // 6290
      return matchMedia(Foundation.media_queries['medium']).matches;                                                   // 6291
    },                                                                                                                 // 6292
                                                                                                                       // 6293
    large : function () {                                                                                              // 6294
      return matchMedia(Foundation.media_queries['large']).matches;                                                    // 6295
    },                                                                                                                 // 6296
                                                                                                                       // 6297
    assemble : function (topbar) {                                                                                     // 6298
      var self = this,                                                                                                 // 6299
          settings = topbar.data(this.attr_name(true) + '-init'),                                                      // 6300
          section = self.S('section, .top-bar-section', topbar);                                                       // 6301
                                                                                                                       // 6302
      // Pull element out of the DOM for manipulation                                                                  // 6303
      section.detach();                                                                                                // 6304
                                                                                                                       // 6305
      self.S('.has-dropdown>a', section).each(function () {                                                            // 6306
        var $link = self.S(this),                                                                                      // 6307
            $dropdown = $link.siblings('.dropdown'),                                                                   // 6308
            url = $link.attr('href'),                                                                                  // 6309
            $titleLi;                                                                                                  // 6310
                                                                                                                       // 6311
        if (!$dropdown.find('.title.back').length) {                                                                   // 6312
                                                                                                                       // 6313
          if (settings.mobile_show_parent_link == true && url) {                                                       // 6314
            $titleLi = $('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link hide-for-medium-up"><a class="parent-link js-generated" href="' + url + '">' + $link.html() +'</a></li>');
          } else {                                                                                                     // 6316
            $titleLi = $('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>');            // 6317
          }                                                                                                            // 6318
                                                                                                                       // 6319
          // Copy link to subnav                                                                                       // 6320
          if (settings.custom_back_text == true) {                                                                     // 6321
            $('h5>a', $titleLi).html(settings.back_text);                                                              // 6322
          } else {                                                                                                     // 6323
            $('h5>a', $titleLi).html('&laquo; ' + $link.html());                                                       // 6324
          }                                                                                                            // 6325
          $dropdown.prepend($titleLi);                                                                                 // 6326
        }                                                                                                              // 6327
      });                                                                                                              // 6328
                                                                                                                       // 6329
      // Put element back in the DOM                                                                                   // 6330
      section.appendTo(topbar);                                                                                        // 6331
                                                                                                                       // 6332
      // check for sticky                                                                                              // 6333
      this.sticky();                                                                                                   // 6334
                                                                                                                       // 6335
      this.assembled(topbar);                                                                                          // 6336
    },                                                                                                                 // 6337
                                                                                                                       // 6338
    assembled : function (topbar) {                                                                                    // 6339
      topbar.data(this.attr_name(true), $.extend({}, topbar.data(this.attr_name(true)), {assembled : true}));          // 6340
    },                                                                                                                 // 6341
                                                                                                                       // 6342
    height : function (ul) {                                                                                           // 6343
      var total = 0,                                                                                                   // 6344
          self = this;                                                                                                 // 6345
                                                                                                                       // 6346
      $('> li', ul).each(function () {                                                                                 // 6347
        total += self.S(this).outerHeight(true);                                                                       // 6348
      });                                                                                                              // 6349
                                                                                                                       // 6350
      return total;                                                                                                    // 6351
    },                                                                                                                 // 6352
                                                                                                                       // 6353
    sticky : function () {                                                                                             // 6354
      var self = this;                                                                                                 // 6355
                                                                                                                       // 6356
      this.S(window).on('scroll', function () {                                                                        // 6357
        self.update_sticky_positioning();                                                                              // 6358
      });                                                                                                              // 6359
    },                                                                                                                 // 6360
                                                                                                                       // 6361
    update_sticky_positioning : function () {                                                                          // 6362
      var klass = '.' + this.settings.sticky_class,                                                                    // 6363
          $window = this.S(window),                                                                                    // 6364
          self = this;                                                                                                 // 6365
                                                                                                                       // 6366
      if (self.settings.sticky_topbar && self.is_sticky(this.settings.sticky_topbar,this.settings.sticky_topbar.parent(), this.settings)) {
        var distance = this.settings.sticky_topbar.data('stickyoffset') + this.settings.start_offset;                  // 6368
        if (!self.S(klass).hasClass('expanded')) {                                                                     // 6369
          if ($window.scrollTop() > (distance)) {                                                                      // 6370
            if (!self.S(klass).hasClass('fixed')) {                                                                    // 6371
              self.S(klass).addClass('fixed');                                                                         // 6372
              self.S('body').addClass('f-topbar-fixed');                                                               // 6373
            }                                                                                                          // 6374
          } else if ($window.scrollTop() <= distance) {                                                                // 6375
            if (self.S(klass).hasClass('fixed')) {                                                                     // 6376
              self.S(klass).removeClass('fixed');                                                                      // 6377
              self.S('body').removeClass('f-topbar-fixed');                                                            // 6378
            }                                                                                                          // 6379
          }                                                                                                            // 6380
        }                                                                                                              // 6381
      }                                                                                                                // 6382
    },                                                                                                                 // 6383
                                                                                                                       // 6384
    off : function () {                                                                                                // 6385
      this.S(this.scope).off('.fndtn.topbar');                                                                         // 6386
      this.S(window).off('.fndtn.topbar');                                                                             // 6387
    },                                                                                                                 // 6388
                                                                                                                       // 6389
    reflow : function () {}                                                                                            // 6390
  };                                                                                                                   // 6391
}(jQuery, window, window.document));                                                                                   // 6392
                                                                                                                       // 6393
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 6428
}).call(this);                                                       // 6429
                                                                     // 6430
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['juliancwirko:zf5'] = {};

})();
