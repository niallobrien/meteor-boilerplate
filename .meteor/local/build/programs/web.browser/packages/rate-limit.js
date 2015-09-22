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
var _ = Package.underscore._;
var Random = Package.random.Random;

/* Package-scope variables */
var RateLimiter;

(function(){

//////////////////////////////////////////////////////////////////////////////////
//                                                                              //
// packages/rate-limit/rate-limit.js                                            //
//                                                                              //
//////////////////////////////////////////////////////////////////////////////////
                                                                                //
// Default time interval (in milliseconds) to reset rate limit counters         // 1
var DEFAULT_INTERVAL_TIME_IN_MILLISECONDS = 1000;                               // 2
// Default number of events allowed per time interval                           // 3
var DEFAULT_REQUESTS_PER_INTERVAL = 10;                                         // 4
                                                                                // 5
// A rule is defined by an options object that contains two fields,             // 6
// `numRequestsAllowed` which is the number of events allowed per interval, and
// an `intervalTime` which is the amount of time in milliseconds before the     // 8
// rate limit restarts its internal counters, and by a matchers object. A       // 9
// matchers object is a POJO that contains a set of keys with values that       // 10
// define the entire set of inputs that match for each key. The values can      // 11
// either be null (optional), a primitive or a function that returns a boolean  // 12
// of whether the provided input's value matches for this key.                  // 13
//                                                                              // 14
// Rules are uniquely assigned an `id` and they store a dictionary of counters,
// which are records used to keep track of inputs that match the rule. If a     // 16
// counter reaches the `numRequestsAllowed` within a given `intervalTime`, a    // 17
// rate limit is reached and future inputs that map to that counter will        // 18
// result in errors being returned to the client.                               // 19
var Rule = function (options, matchers) {                                       // 20
  var self = this;                                                              // 21
                                                                                // 22
  self.id = Random.id();                                                        // 23
                                                                                // 24
  self.options = options;                                                       // 25
                                                                                // 26
  self._matchers = matchers;                                                    // 27
                                                                                // 28
  self._lastResetTime = new Date().getTime();                                   // 29
                                                                                // 30
  // Dictionary of input keys to counters                                       // 31
  self.counters = {};                                                           // 32
};                                                                              // 33
                                                                                // 34
_.extend(Rule.prototype, {                                                      // 35
  // Determine if this rule applies to the given input by comparing all         // 36
  // rule.matchers. If the match fails, search short circuits instead of        // 37
  // iterating through all matchers.                                            // 38
  match: function (input) {                                                     // 39
    var self = this;                                                            // 40
    var ruleMatches = true;                                                     // 41
    return _.every(self._matchers, function (matcher, key) {                    // 42
      if (matcher !== null) {                                                   // 43
        if (!(_.has(input,key))) {                                              // 44
          return false;                                                         // 45
        } else {                                                                // 46
          if (typeof matcher === 'function') {                                  // 47
            if (!(matcher(input[key]))) {                                       // 48
              return false;                                                     // 49
            }                                                                   // 50
          } else {                                                              // 51
            if (matcher !== input[key]) {                                       // 52
              return false;                                                     // 53
            }                                                                   // 54
          }                                                                     // 55
        }                                                                       // 56
      }                                                                         // 57
      return true;                                                              // 58
    });                                                                         // 59
  },                                                                            // 60
                                                                                // 61
  // Generates unique key string for provided input by concatenating all the    // 62
  // keys in the matcher with the corresponding values in the input.            // 63
  // Only called if rule matches input.                                         // 64
  _generateKeyString: function (input) {                                        // 65
    var self = this;                                                            // 66
    var returnString = "";                                                      // 67
    _.each(self._matchers, function (matcher, key) {                            // 68
      if (matcher !== null) {                                                   // 69
        if (typeof matcher === 'function') {                                    // 70
          if (matcher(input[key])) {                                            // 71
            returnString += key + input[key];                                   // 72
          }                                                                     // 73
        } else {                                                                // 74
          returnString += key + input[key];                                     // 75
        }                                                                       // 76
      }                                                                         // 77
    });                                                                         // 78
    return returnString;                                                        // 79
  },                                                                            // 80
                                                                                // 81
  // Applies the provided input and returns the key string, time since counters
  // were last reset and time to next reset.                                    // 83
  apply: function (input) {                                                     // 84
    var self = this;                                                            // 85
    var keyString = self._generateKeyString(input);                             // 86
    var timeSinceLastReset = new Date().getTime() - self._lastResetTime;        // 87
    var timeToNextReset = self.options.intervalTime - timeSinceLastReset;       // 88
    return {                                                                    // 89
      key: keyString,                                                           // 90
      timeSinceLastReset: timeSinceLastReset,                                   // 91
      timeToNextReset: timeToNextReset                                          // 92
    };                                                                          // 93
  },                                                                            // 94
  // Reset counter dictionary for this specific rule. Called once the           // 95
  // timeSinceLastReset has exceeded the intervalTime. _lastResetTime is        // 96
  // set to be the current time in milliseconds.                                // 97
  resetCounter: function () {                                                   // 98
    var self = this;                                                            // 99
                                                                                // 100
    // Delete the old counters dictionary to allow for garbage collection       // 101
    self.counters = {};                                                         // 102
    self._lastResetTime = new Date().getTime();                                 // 103
  }                                                                             // 104
});                                                                             // 105
                                                                                // 106
// Initialize rules to be an empty dictionary.                                  // 107
RateLimiter = function () {                                                     // 108
  var self = this;                                                              // 109
                                                                                // 110
  // Dictionary of all rules associated with this RateLimiter, keyed by their   // 111
  // id. Each rule object stores the rule pattern, number of events allowed,    // 112
  // last reset time and the rule reset interval in milliseconds.               // 113
  self.rules = {};                                                              // 114
};                                                                              // 115
                                                                                // 116
/**                                                                             // 117
 * Checks if this input has exceeded any rate limits.                           // 118
 * @param  {object} input dictionary containing key-value pairs of attributes   // 119
 * that match to rules                                                          // 120
 * @return {object} Returns object of following structure                       // 121
 * { 'allowed': boolean - is this input allowed                                 // 122
 *   'timeToReset': integer | Infinity - returns time until counters are reset  // 123
 *                   in milliseconds                                            // 124
 *   'numInvocationsLeft': integer | Infinity - returns number of calls left    // 125
 *   before limit is reached                                                    // 126
 * }                                                                            // 127
 * If multiple rules match, the least number of invocations left is returned.   // 128
 * If the rate limit has been reached, the longest timeToReset is returned.     // 129
 */                                                                             // 130
RateLimiter.prototype.check = function (input) {                                // 131
  var self = this;                                                              // 132
  var reply = {                                                                 // 133
    allowed: true,                                                              // 134
    timeToReset: 0,                                                             // 135
    numInvocationsLeft: Infinity                                                // 136
  };                                                                            // 137
                                                                                // 138
  var matchedRules = self._findAllMatchingRules(input);                         // 139
  _.each(matchedRules, function (rule) {                                        // 140
    var ruleResult = rule.apply(input);                                         // 141
    var numInvocations = rule.counters[ruleResult.key];                         // 142
                                                                                // 143
    if (ruleResult.timeToNextReset < 0) {                                       // 144
      // Reset all the counters since the rule has reset                        // 145
      rule.resetCounter();                                                      // 146
      ruleResult.timeSinceLastReset = new Date().getTime() -                    // 147
        rule._lastResetTime;                                                    // 148
      ruleResult.timeToNextReset = rule.options.intervalTime;                   // 149
      numInvocations = 0;                                                       // 150
    }                                                                           // 151
                                                                                // 152
    if (numInvocations > rule.options.numRequestsAllowed) {                     // 153
      // Only update timeToReset if the new time would be longer than the       // 154
      // previously set time. This is to ensure that if this input triggers     // 155
      // multiple rules, we return the longest period of time until they can    // 156
      // successfully make another call                                         // 157
      if (reply.timeToReset < ruleResult.timeToNextReset) {                     // 158
        reply.timeToReset = ruleResult.timeToNextReset;                         // 159
      };                                                                        // 160
      reply.allowed = false;                                                    // 161
      reply.numInvocationsLeft = 0;                                             // 162
    } else {                                                                    // 163
      // If this is an allowed attempt and we haven't failed on any of the      // 164
      // other rules that match, update the reply field.                        // 165
      if (rule.options.numRequestsAllowed - numInvocations <                    // 166
        reply.numInvocationsLeft && reply.allowed) {                            // 167
        reply.timeToReset = ruleResult.timeToNextReset;                         // 168
        reply.numInvocationsLeft = rule.options.numRequestsAllowed -            // 169
          numInvocations;                                                       // 170
      }                                                                         // 171
    }                                                                           // 172
  });                                                                           // 173
  return reply;                                                                 // 174
};                                                                              // 175
                                                                                // 176
/**                                                                             // 177
 * Adds a rule to dictionary of rules that are checked against on every call.   // 178
 * Only inputs that pass all of the rules will be allowed. Returns unique rule  // 179
 * id that can be passed to `removeRule`.                                       // 180
 * @param {object} rule    Input dictionary defining certain attributes and     // 181
 * rules associated with them.                                                  // 182
 * Each attribute's value can either be a value, a function or null. All        // 183
 * functions must return a boolean of whether the input is matched by that      // 184
 * attribute's rule or not                                                      // 185
 * @param {integer} numRequestsAllowed Optional. Number of events allowed per   // 186
 * interval. Default = 10.                                                      // 187
 * @param {integer} intervalTime Optional. Number of milliseconds before        // 188
 * rule's counters are reset. Default = 1000.                                   // 189
 * @return {string} Returns unique rule id                                      // 190
 */                                                                             // 191
RateLimiter.prototype.addRule = function (rule, numRequestsAllowed,             // 192
  intervalTime) {                                                               // 193
  var self = this;                                                              // 194
                                                                                // 195
  var options = {                                                               // 196
    numRequestsAllowed: numRequestsAllowed || DEFAULT_REQUESTS_PER_INTERVAL,    // 197
    intervalTime: intervalTime || DEFAULT_INTERVAL_TIME_IN_MILLISECONDS         // 198
  };                                                                            // 199
                                                                                // 200
  var newRule = new Rule(options, rule);                                        // 201
  this.rules[newRule.id] = newRule;                                             // 202
  return newRule.id;                                                            // 203
};                                                                              // 204
                                                                                // 205
/**                                                                             // 206
 * Increment counters in every rule that match to this input                    // 207
 * @param  {object} input Dictionary object containing attributes that may      // 208
 * match to rules                                                               // 209
 */                                                                             // 210
RateLimiter.prototype.increment = function (input) {                            // 211
  var self = this;                                                              // 212
                                                                                // 213
  // Only increment rule counters that match this input                         // 214
  var matchedRules = self._findAllMatchingRules(input);                         // 215
  _.each(matchedRules, function (rule) {                                        // 216
    var ruleResult = rule.apply(input);                                         // 217
                                                                                // 218
    if (ruleResult.timeSinceLastReset > rule.options.intervalTime) {            // 219
      // Reset all the counters since the rule has reset                        // 220
      rule.resetCounter();                                                      // 221
    }                                                                           // 222
                                                                                // 223
    // Check whether the key exists, incrementing it if so or otherwise         // 224
    // adding the key and setting its value to 1                                // 225
    if (_.has(rule.counters, ruleResult.key))                                   // 226
      rule.counters[ruleResult.key]++;                                          // 227
    else                                                                        // 228
      rule.counters[ruleResult.key] = 1;                                        // 229
  });                                                                           // 230
};                                                                              // 231
                                                                                // 232
// Returns an array of all rules that apply to provided input                   // 233
RateLimiter.prototype._findAllMatchingRules = function (input) {                // 234
  var self = this;                                                              // 235
                                                                                // 236
  return _.filter(self.rules, function(rule) {                                  // 237
    return rule.match(input);                                                   // 238
  });                                                                           // 239
};                                                                              // 240
/**                                                                             // 241
 * Provides a mechanism to remove rules from the rate limiter. Returns boolean  // 242
 * about success.                                                               // 243
 * @param  {string} id Rule id returned from #addRule                           // 244
 * @return {boolean} Returns true if rule was found and deleted, else false.    // 245
 */                                                                             // 246
RateLimiter.prototype.removeRule = function (id) {                              // 247
  var self = this;                                                              // 248
  if (self.rules[id]) {                                                         // 249
    delete self.rules[id];                                                      // 250
    return true;                                                                // 251
  } else {                                                                      // 252
    return false;                                                               // 253
  }                                                                             // 254
};                                                                              // 255
                                                                                // 256
//////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rate-limit'] = {
  RateLimiter: RateLimiter
};

})();
