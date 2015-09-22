(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var _ = Package.underscore._;
var EJSON = Package.ejson.EJSON;

/* Package-scope variables */
var SubsManager;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                 //
// packages/meteorhacks_subs-manager/packages/meteorhacks_subs-manager.js                          //
//                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                   //
(function () {                                                                                     // 1
                                                                                                   // 2
//////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                          //     // 4
// packages/meteorhacks:subs-manager/lib/sub_manager.js                                     //     // 5
//                                                                                          //     // 6
//////////////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                            //     // 8
var FastRender = null;                                                                      // 1   // 9
if(Package['meteorhacks:fast-render']) {                                                    // 2   // 10
  FastRender = Package['meteorhacks:fast-render'].FastRender;                               // 3   // 11
}                                                                                           // 4   // 12
                                                                                            // 5   // 13
SubsManager = function (options) {                                                          // 6   // 14
  var self = this;                                                                          // 7   // 15
  self.options = options || {};                                                             // 8   // 16
  // maxiumum number of subscriptions are cached                                            // 9   // 17
  self.options.cacheLimit = self.options.cacheLimit || 10;                                  // 10  // 18
  // maximum time, subscription stay in the cache                                           // 11  // 19
  self.options.expireIn = self.options.expireIn || 5;                                       // 12  // 20
                                                                                            // 13  // 21
  self._cacheMap = {};                                                                      // 14  // 22
  self._cacheList = [];                                                                     // 15  // 23
  self._ready = false;                                                                      // 16  // 24
  self.dep = new Deps.Dependency();                                                         // 17  // 25
                                                                                            // 18  // 26
  self.computation = self._registerComputation();                                           // 19  // 27
};                                                                                          // 20  // 28
                                                                                            // 21  // 29
SubsManager.prototype.subscribe = function() {                                              // 22  // 30
  var self = this;                                                                          // 23  // 31
  if(Meteor.isClient) {                                                                     // 24  // 32
    var args = _.toArray(arguments);                                                        // 25  // 33
    this._addSub(args);                                                                     // 26  // 34
                                                                                            // 27  // 35
    return {                                                                                // 28  // 36
      ready: function() {                                                                   // 29  // 37
        self.dep.depend();                                                                  // 30  // 38
        return self._ready;                                                                 // 31  // 39
      }                                                                                     // 32  // 40
    };                                                                                      // 33  // 41
  } else {                                                                                  // 34  // 42
    // to support fast-render                                                               // 35  // 43
    if(Meteor.subscribe) {                                                                  // 36  // 44
      return Meteor.subscribe.apply(Meteor, arguments);                                     // 37  // 45
    }                                                                                       // 38  // 46
  }                                                                                         // 39  // 47
};                                                                                          // 40  // 48
                                                                                            // 41  // 49
SubsManager.prototype._addSub = function(args) {                                            // 42  // 50
  var self = this;                                                                          // 43  // 51
  var hash = EJSON.stringify(args);                                                         // 44  // 52
  var subName = args[0];                                                                    // 45  // 53
  var paramsKey = EJSON.stringify(args.slice(1));                                           // 46  // 54
                                                                                            // 47  // 55
  if(!self._cacheMap[hash]) {                                                               // 48  // 56
    var sub = {                                                                             // 49  // 57
      args: args,                                                                           // 50  // 58
      hash: hash                                                                            // 51  // 59
    };                                                                                      // 52  // 60
                                                                                            // 53  // 61
    this._handleError(sub);                                                                 // 54  // 62
                                                                                            // 55  // 63
    self._cacheMap[hash] = sub;                                                             // 56  // 64
    self._cacheList.push(sub);                                                              // 57  // 65
                                                                                            // 58  // 66
    // if fast-render comes with this subscription                                          // 59  // 67
    // we need to fake the ready message at first                                           // 60  // 68
    // This is because we are delaying the actual subscription evaluation                   // 61  // 69
    // May be FastRender needs to send full list of subscription args to the client         // 62  // 70
    // But, for now this is something working                                               // 63  // 71
    if(FastRender && FastRender._subscriptions && FastRender._subscriptions[subName]) {     // 64  // 72
      self._ready = self._ready && FastRender._subscriptions[subName][paramsKey];           // 65  // 73
    } else {                                                                                // 66  // 74
      self._ready = false;                                                                  // 67  // 75
    }                                                                                       // 68  // 76
                                                                                            // 69  // 77
    // to notify the global ready()                                                         // 70  // 78
    self._notifyChanged();                                                                  // 71  // 79
                                                                                            // 72  // 80
    // no need to interfere with the current computation                                    // 73  // 81
    self._reRunSubs();                                                                      // 74  // 82
  }                                                                                         // 75  // 83
                                                                                            // 76  // 84
  // add the current sub to the top of the list                                             // 77  // 85
  var sub = self._cacheMap[hash];                                                           // 78  // 86
  sub.updated = (new Date).getTime();                                                       // 79  // 87
                                                                                            // 80  // 88
  var index = _.indexOf(self._cacheList, sub);                                              // 81  // 89
  self._cacheList.splice(index, 1);                                                         // 82  // 90
  self._cacheList.push(sub);                                                                // 83  // 91
};                                                                                          // 84  // 92
                                                                                            // 85  // 93
SubsManager.prototype._reRunSubs = function() {                                             // 86  // 94
  var self = this;                                                                          // 87  // 95
                                                                                            // 88  // 96
  if(Deps.currentComputation) {                                                             // 89  // 97
    Deps.afterFlush(function() {                                                            // 90  // 98
      self.computation.invalidate();                                                        // 91  // 99
    });                                                                                     // 92  // 100
  } else {                                                                                  // 93  // 101
    self.computation.invalidate();                                                          // 94  // 102
  }                                                                                         // 95  // 103
};                                                                                          // 96  // 104
                                                                                            // 97  // 105
SubsManager.prototype._notifyChanged = function() {                                         // 98  // 106
  var self = this;                                                                          // 99  // 107
  if(Deps.currentComputation) {                                                             // 100
    setTimeout(function() {                                                                 // 101
      self.dep.changed();                                                                   // 102
    }, 0);                                                                                  // 103
  } else {                                                                                  // 104
    self.dep.changed();                                                                     // 105
  }                                                                                         // 106
};                                                                                          // 107
                                                                                            // 108
SubsManager.prototype._applyCacheLimit = function () {                                      // 109
  var self = this;                                                                          // 110
  var overflow = self._cacheList.length - self.options.cacheLimit;                          // 111
  if(overflow > 0) {                                                                        // 112
    var removedSubs = self._cacheList.splice(0, overflow);                                  // 113
    _.each(removedSubs, function(sub) {                                                     // 114
      delete self._cacheMap[sub.hash];                                                      // 115
    });                                                                                     // 116
  }                                                                                         // 117
};                                                                                          // 118
                                                                                            // 119
SubsManager.prototype._applyExpirations = function() {                                      // 120
  var self = this;                                                                          // 121
  var newCacheList = [];                                                                    // 122
                                                                                            // 123
  var expirationTime = (new Date).getTime() - self.options.expireIn * 60 * 1000;            // 124
  _.each(self._cacheList, function(sub) {                                                   // 125
    if(sub.updated >= expirationTime) {                                                     // 126
      newCacheList.push(sub);                                                               // 127
    } else {                                                                                // 128
      delete self._cacheMap[sub.hash];                                                      // 129
    }                                                                                       // 130
  });                                                                                       // 131
                                                                                            // 132
  self._cacheList = newCacheList;                                                           // 133
};                                                                                          // 134
                                                                                            // 135
SubsManager.prototype._registerComputation = function() {                                   // 136
  var self = this;                                                                          // 137
  var computation = Deps.autorun(function() {                                               // 138
    self._applyExpirations();                                                               // 139
    self._applyCacheLimit();                                                                // 140
                                                                                            // 141
    var ready = true;                                                                       // 142
    _.each(self._cacheList, function(sub) {                                                 // 143
      sub.ready = Meteor.subscribe.apply(Meteor, sub.args).ready();                         // 144
      ready = ready && sub.ready;                                                           // 145
    });                                                                                     // 146
                                                                                            // 147
    if(ready) {                                                                             // 148
      self._ready = true;                                                                   // 149
      self._notifyChanged();                                                                // 150
    }                                                                                       // 151
  });                                                                                       // 152
                                                                                            // 153
  return computation;                                                                       // 154
};                                                                                          // 155
                                                                                            // 156
SubsManager.prototype._createIdentifier = function(args) {                                  // 157
  var tmpArgs = _.map(args, function(value) {                                               // 158
    if(typeof value == "string") {                                                          // 159
      return '"' + value + '"';                                                             // 160
    } else {                                                                                // 161
      return value;                                                                         // 162
    }                                                                                       // 163
  });                                                                                       // 164
                                                                                            // 165
  return tmpArgs.join(', ');                                                                // 166
};                                                                                          // 167
                                                                                            // 168
SubsManager.prototype._handleError = function(sub) {                                        // 169
  var args = sub.args;                                                                      // 170
  var lastElement = _.last(args);                                                           // 171
  sub.identifier = this._createIdentifier(args);                                            // 172
                                                                                            // 173
  if(!lastElement) {                                                                        // 174
    args.push({onError: errorHandlingLogic});                                               // 175
  } else if(typeof lastElement == "function") {                                             // 176
    args.pop();                                                                             // 177
    args.push({onReady: lastElement, onError: errorHandlingLogic});                         // 178
  } else if(typeof lastElement.onError == "function") {                                     // 179
    var originalOnError = lastElement.onError;                                              // 180
    lastElement.onError = function(err) {                                                   // 181
      errorHandlingLogic(err);                                                              // 182
      originalOnError(err);                                                                 // 183
    };                                                                                      // 184
  } else if(typeof lastElement.onReady == "function") {                                     // 185
    lastElement.onError = errorHandlingLogic;                                               // 186
  } else {                                                                                  // 187
    args.push({onError: errorHandlingLogic});                                               // 188
  }                                                                                         // 189
                                                                                            // 190
  function errorHandlingLogic (err) {                                                       // 191
    console.log("Error invoking SubsManager.subscribe(%s): ", sub.identifier , err.reason); // 192
    // expire this sub right away.                                                          // 193
    // Then expiration machanism will take care of the sub removal                          // 194
    sub.updated = new Date(1);                                                              // 195
  }                                                                                         // 196
};                                                                                          // 197
                                                                                            // 198
SubsManager.prototype.reset = function() {                                                  // 199
  var self = this;                                                                          // 200
  var oldComputation = self.computation;                                                    // 201
  self.computation = self._registerComputation();                                           // 202
                                                                                            // 203
  // invalidate the new compuation and it will fire new subscriptions                       // 204
  self.computation.invalidate();                                                            // 205
                                                                                            // 206
  // after above invalidation completed, fire stop the old computation                      // 207
  // which then send unsub messages                                                         // 208
  // mergeBox will correct send changed data and there'll be no flicker                     // 209
  Deps.afterFlush(function() {                                                              // 210
    oldComputation.stop();                                                                  // 211
  });                                                                                       // 212
};                                                                                          // 213
                                                                                            // 214
SubsManager.prototype.clear = function() {                                                  // 215
  this._cacheList = [];                                                                     // 216
  this._cacheMap = [];                                                                      // 217
  this._reRunSubs();                                                                        // 218
};                                                                                          // 219
                                                                                            // 220
SubsManager.prototype.ready = function() {                                                  // 221
  this.dep.depend();                                                                        // 222
                                                                                            // 223
  // if there are no items in the cacheList we are not ready yet.                           // 224
  if(this._cacheList.length === 0) {                                                        // 225
    return false;                                                                           // 226
  }                                                                                         // 227
  return this._ready;                                                                       // 228
};                                                                                          // 229
//////////////////////////////////////////////////////////////////////////////////////////////     // 238
                                                                                                   // 239
}).call(this);                                                                                     // 240
                                                                                                   // 241
/////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteorhacks:subs-manager'] = {
  SubsManager: SubsManager
};

})();

//# sourceMappingURL=meteorhacks_subs-manager.js.map
