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

/* Package-scope variables */
var Cookie;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////
//                                                                                      //
// packages/chuangbo_cookie/packages/chuangbo_cookie.js                                 //
//                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////
                                                                                        //
(function () {                                                                          // 1
                                                                                        // 2
///////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                               //     // 4
// packages/chuangbo:cookie/cookie.js                                            //     // 5
//                                                                               //     // 6
///////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                 //     // 8
Cookie = {};                                                                     // 1   // 9
                                                                                 // 2   // 10
(function(exports) {                                                             // 3   // 11
                                                                                 // 4   // 12
    // Cookie                                                                    // 5   // 13
    // -------------                                                             // 6   // 14
    // Thanks to:                                                                // 7   // 15
    //  - http://www.nczonline.net/blog/2009/05/05/http-cookies-explained/       // 8   // 16
    //  - http://developer.yahoo.com/yui/3/cookie/                               // 9   // 17
                                                                                 // 10  // 18
                                                                                 // 11  // 19
    var Cookie = exports;                                                        // 12  // 20
                                                                                 // 13  // 21
    var decode = decodeURIComponent;                                             // 14  // 22
    var encode = encodeURIComponent;                                             // 15  // 23
                                                                                 // 16  // 24
                                                                                 // 17  // 25
    /**                                                                          // 18  // 26
     * Returns the cookie value for the given name.                              // 19  // 27
     *                                                                           // 20  // 28
     * @param {String} name The name of the cookie to retrieve.                  // 21  // 29
     *                                                                           // 22  // 30
     * @param {Function|Object} options (Optional) An object containing one or   // 23  // 31
     *     more cookie options: raw (true/false) and converter (a function).     // 24  // 32
     *     The converter function is run on the value before returning it. The   // 25  // 33
     *     function is not used if the cookie doesn't exist. The function can be // 26  // 34
     *     passed instead of the options object for conveniently. When raw is    // 27  // 35
     *     set to true, the cookie value is not URI decoded.                     // 28  // 36
     *                                                                           // 29  // 37
     * @return {*} If no converter is specified, returns a string or undefined   // 30  // 38
     *     if the cookie doesn't exist. If the converter is specified, returns   // 31  // 39
     *     the value returned from the converter.                                // 32  // 40
     */                                                                          // 33  // 41
    Cookie.get = function(name, options) {                                       // 34  // 42
        validateCookieName(name);                                                // 35  // 43
                                                                                 // 36  // 44
        if (typeof options === 'function') {                                     // 37  // 45
            options = { converter: options };                                    // 38  // 46
        }                                                                        // 39  // 47
        else {                                                                   // 40  // 48
            options = options || {};                                             // 41  // 49
        }                                                                        // 42  // 50
                                                                                 // 43  // 51
        var cookies = parseCookieString(document.cookie, !options['raw']);       // 44  // 52
        return (options.converter || same)(cookies[name]);                       // 45  // 53
    };                                                                           // 46  // 54
                                                                                 // 47  // 55
                                                                                 // 48  // 56
    /**                                                                          // 49  // 57
     * Sets a cookie with a given name and value.                                // 50  // 58
     *                                                                           // 51  // 59
     * @param {string} name The name of the cookie to set.                       // 52  // 60
     *                                                                           // 53  // 61
     * @param {*} value The value to set for the cookie.                         // 54  // 62
     *                                                                           // 55  // 63
     * @param {Object} options (Optional) An object containing one or more       // 56  // 64
     *     cookie options: path (a string), domain (a string),                   // 57  // 65
     *     expires (number or a Date object), secure (true/false),               // 58  // 66
     *     and raw (true/false). Setting raw to true indicates that the cookie   // 59  // 67
     *     should not be URI encoded before being set.                           // 60  // 68
     *                                                                           // 61  // 69
     * @return {string} The created cookie string.                               // 62  // 70
     */                                                                          // 63  // 71
    Cookie.set = function(name, value, options) {                                // 64  // 72
        validateCookieName(name);                                                // 65  // 73
                                                                                 // 66  // 74
        options = options || {};                                                 // 67  // 75
        var expires = options['expires'];                                        // 68  // 76
        var domain = options['domain'];                                          // 69  // 77
        var path = options['path'];                                              // 70  // 78
                                                                                 // 71  // 79
        if (!options['raw']) {                                                   // 72  // 80
            value = encode(String(value));                                       // 73  // 81
        }                                                                        // 74  // 82
                                                                                 // 75  // 83
        var text = name + '=' + value;                                           // 76  // 84
                                                                                 // 77  // 85
        // expires                                                               // 78  // 86
        var date = expires;                                                      // 79  // 87
        if (typeof date === 'number') {                                          // 80  // 88
            date = new Date();                                                   // 81  // 89
            date.setDate(date.getDate() + expires);                              // 82  // 90
        }                                                                        // 83  // 91
        if (date instanceof Date) {                                              // 84  // 92
            text += '; expires=' + date.toUTCString();                           // 85  // 93
        }                                                                        // 86  // 94
                                                                                 // 87  // 95
        // domain                                                                // 88  // 96
        if (isNonEmptyString(domain)) {                                          // 89  // 97
            text += '; domain=' + domain;                                        // 90  // 98
        }                                                                        // 91  // 99
                                                                                 // 92  // 100
        // path                                                                  // 93  // 101
        if (isNonEmptyString(path)) {                                            // 94  // 102
            text += '; path=' + path;                                            // 95  // 103
        }                                                                        // 96  // 104
                                                                                 // 97  // 105
        // secure                                                                // 98  // 106
        if (options['secure']) {                                                 // 99  // 107
            text += '; secure';                                                  // 100
        }                                                                        // 101
                                                                                 // 102
        document.cookie = text;                                                  // 103
        return text;                                                             // 104
    };                                                                           // 105
                                                                                 // 106
                                                                                 // 107
    /**                                                                          // 108
     * Removes a cookie from the machine by setting its expiration date to       // 109
     * sometime in the past.                                                     // 110
     *                                                                           // 111
     * @param {string} name The name of the cookie to remove.                    // 112
     *                                                                           // 113
     * @param {Object} options (Optional) An object containing one or more       // 114
     *     cookie options: path (a string), domain (a string),                   // 115
     *     and secure (true/false). The expires option will be overwritten       // 116
     *     by the method.                                                        // 117
     *                                                                           // 118
     * @return {string} The created cookie string.                               // 119
     */                                                                          // 120
    Cookie.remove = function(name, options) {                                    // 121
        options = options || {};                                                 // 122
        options['expires'] = new Date(0);                                        // 123
        return this.set(name, '', options);                                      // 124
    };                                                                           // 125
                                                                                 // 126
                                                                                 // 127
    function parseCookieString(text, shouldDecode) {                             // 128
        var cookies = {};                                                        // 129
                                                                                 // 130
        if (isString(text) && text.length > 0) {                                 // 131
                                                                                 // 132
            var decodeValue = shouldDecode ? decode : same;                      // 133
            var cookieParts = text.split(/;\s/g);                                // 134
            var cookieName;                                                      // 135
            var cookieValue;                                                     // 136
            var cookieNameValue;                                                 // 137
                                                                                 // 138
            for (var i = 0, len = cookieParts.length; i < len; i++) {            // 139
                                                                                 // 140
                // Check for normally-formatted cookie (name-value)              // 141
                cookieNameValue = cookieParts[i].match(/([^=]+)=/i);             // 142
                if (cookieNameValue instanceof Array) {                          // 143
                    try {                                                        // 144
                        cookieName = decode(cookieNameValue[1]);                 // 145
                        cookieValue = decodeValue(cookieParts[i]                 // 146
                                .substring(cookieNameValue[1].length + 1));      // 147
                    } catch (ex) {                                               // 148
                        // Intentionally ignore the cookie -                     // 149
                        // the encoding is wrong                                 // 150
                    }                                                            // 151
                } else {                                                         // 152
                    // Means the cookie does not have an "=", so treat it as     // 153
                    // a boolean flag                                            // 154
                    cookieName = decode(cookieParts[i]);                         // 155
                    cookieValue = '';                                            // 156
                }                                                                // 157
                                                                                 // 158
                if (cookieName) {                                                // 159
                    cookies[cookieName] = cookieValue;                           // 160
                }                                                                // 161
            }                                                                    // 162
                                                                                 // 163
        }                                                                        // 164
                                                                                 // 165
        return cookies;                                                          // 166
    }                                                                            // 167
                                                                                 // 168
                                                                                 // 169
    // Helpers                                                                   // 170
                                                                                 // 171
    function isString(o) {                                                       // 172
        return typeof o === 'string';                                            // 173
    }                                                                            // 174
                                                                                 // 175
    function isNonEmptyString(s) {                                               // 176
        return isString(s) && s !== '';                                          // 177
    }                                                                            // 178
                                                                                 // 179
    function validateCookieName(name) {                                          // 180
        if (!isNonEmptyString(name)) {                                           // 181
            throw new TypeError('Cookie name must be a non-empty string');       // 182
        }                                                                        // 183
    }                                                                            // 184
                                                                                 // 185
    function same(s) {                                                           // 186
        return s;                                                                // 187
    }                                                                            // 188
                                                                                 // 189
})(Cookie);                                                                      // 190
                                                                                 // 191
///////////////////////////////////////////////////////////////////////////////////     // 200
                                                                                        // 201
}).call(this);                                                                          // 202
                                                                                        // 203
//////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['chuangbo:cookie'] = {
  Cookie: Cookie
};

})();
