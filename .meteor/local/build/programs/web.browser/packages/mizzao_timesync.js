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
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var HTTP = Package.http.HTTP;

/* Package-scope variables */
var TimeSync, SyncInternals;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////
//                                                                                      //
// packages/mizzao_timesync/packages/mizzao_timesync.js                                 //
//                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////
                                                                                        //
(function () {                                                                          // 1
                                                                                        // 2
///////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                               //     // 4
// packages/mizzao:timesync/timesync-client.js                                   //     // 5
//                                                                               //     // 6
///////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                 //     // 8
//IE8 doesn't have Date.now()                                                    // 1   // 9
Date.now = Date.now || function() { return +new Date; };                         // 2   // 10
                                                                                 // 3   // 11
TimeSync = {                                                                     // 4   // 12
  loggingEnabled: true                                                           // 5   // 13
};                                                                               // 6   // 14
                                                                                 // 7   // 15
function log(/* arguments */) {                                                  // 8   // 16
  if (TimeSync.loggingEnabled) {                                                 // 9   // 17
    Meteor._debug.apply(this, arguments);                                        // 10  // 18
  }                                                                              // 11  // 19
}                                                                                // 12  // 20
                                                                                 // 13  // 21
var defaultInterval = 1000;                                                      // 14  // 22
                                                                                 // 15  // 23
// Internal values, exported for testing                                         // 16  // 24
SyncInternals = {                                                                // 17  // 25
  offset: undefined,                                                             // 18  // 26
  roundTripTime: undefined,                                                      // 19  // 27
  offsetDep: new Deps.Dependency(),                                              // 20  // 28
  timeTick: {},                                                                  // 21  // 29
                                                                                 // 22  // 30
  timeCheck: function (lastTime, currentTime, interval, tolerance) {             // 23  // 31
    if (Math.abs(currentTime - lastTime - interval) < tolerance) {               // 24  // 32
      // Everything is A-OK                                                      // 25  // 33
      return true;                                                               // 26  // 34
    }                                                                            // 27  // 35
    // We're no longer in sync.                                                  // 28  // 36
    return false;                                                                // 29  // 37
  }                                                                              // 30  // 38
};                                                                               // 31  // 39
                                                                                 // 32  // 40
SyncInternals.timeTick[defaultInterval] = new Deps.Dependency();                 // 33  // 41
                                                                                 // 34  // 42
var maxAttempts = 5;                                                             // 35  // 43
var attempts = 0;                                                                // 36  // 44
                                                                                 // 37  // 45
/*                                                                               // 38  // 46
  This is an approximation of                                                    // 39  // 47
  http://en.wikipedia.org/wiki/Network_Time_Protocol                             // 40  // 48
                                                                                 // 41  // 49
  If this turns out to be more accurate under the connect handlers,              // 42  // 50
  we should try taking multiple measurements.                                    // 43  // 51
 */                                                                              // 44  // 52
                                                                                 // 45  // 53
// Only use Meteor.absoluteUrl for Cordova; see                                  // 46  // 54
// https://github.com/meteor/meteor/issues/4696                                  // 47  // 55
// https://github.com/mizzao/meteor-timesync/issues/30                           // 48  // 56
var syncUrl = "/_timesync";                                                      // 49  // 57
if (Meteor.isCordova) {                                                          // 50  // 58
  syncUrl = Meteor.absoluteUrl("_timesync");                                     // 51  // 59
}                                                                                // 52  // 60
                                                                                 // 53  // 61
var updateOffset = function() {                                                  // 54  // 62
  var t0 = Date.now();                                                           // 55  // 63
                                                                                 // 56  // 64
  HTTP.get(syncUrl, function(err, response) {                                    // 57  // 65
    var t3 = Date.now(); // Grab this now                                        // 58  // 66
    if (err) {                                                                   // 59  // 67
      //  We'll still use our last computed offset if is defined                 // 60  // 68
      log("Error syncing to server time: ", err);                                // 61  // 69
      if (++attempts <= maxAttempts)                                             // 62  // 70
        Meteor.setTimeout(TimeSync.resync, 1000);                                // 63  // 71
      else                                                                       // 64  // 72
        log("Max number of time sync attempts reached. Giving up.");             // 65  // 73
      return;                                                                    // 66  // 74
    }                                                                            // 67  // 75
                                                                                 // 68  // 76
    attempts = 0; // It worked                                                   // 69  // 77
                                                                                 // 70  // 78
    var ts = parseInt(response.content);                                         // 71  // 79
    SyncInternals.offset = Math.round(((ts - t0) + (ts - t3)) / 2);              // 72  // 80
    SyncInternals.roundTripTime = t3 - t0; // - (ts - ts) which is 0             // 73  // 81
    SyncInternals.offsetDep.changed();                                           // 74  // 82
  });                                                                            // 75  // 83
};                                                                               // 76  // 84
                                                                                 // 77  // 85
// Reactive variable for server time that updates every second.                  // 78  // 86
TimeSync.serverTime = function(clientTime, interval) {                           // 79  // 87
  check(interval, Match.Optional(Match.Integer));                                // 80  // 88
  // If we don't know the offset, we can't provide the server time.              // 81  // 89
  if ( !TimeSync.isSynced() ) return undefined;                                  // 82  // 90
  // If a client time is provided, we don't need to depend on the tick.          // 83  // 91
  if ( !clientTime ) getTickDependency(interval || defaultInterval).depend();    // 84  // 92
                                                                                 // 85  // 93
  // SyncInternals.offsetDep.depend(); implicit as we call isSynced()            // 86  // 94
  // Convert Date argument to epoch as necessary                                 // 87  // 95
  return (+clientTime || Date.now()) + SyncInternals.offset;                     // 88  // 96
};                                                                               // 89  // 97
                                                                                 // 90  // 98
// Reactive variable for the difference between server and client time.          // 91  // 99
TimeSync.serverOffset = function() {                                             // 92  // 100
  SyncInternals.offsetDep.depend();                                              // 93  // 101
  return SyncInternals.offset;                                                   // 94  // 102
};                                                                               // 95  // 103
                                                                                 // 96  // 104
TimeSync.roundTripTime = function() {                                            // 97  // 105
  SyncInternals.offsetDep.depend();                                              // 98  // 106
  return SyncInternals.roundTripTime;                                            // 99  // 107
};                                                                               // 100
                                                                                 // 101
TimeSync.isSynced = function() {                                                 // 102
  SyncInternals.offsetDep.depend();                                              // 103
  return SyncInternals.offset !== undefined;                                     // 104
};                                                                               // 105
                                                                                 // 106
var resyncIntervalId = null;                                                     // 107
                                                                                 // 108
TimeSync.resync = function() {                                                   // 109
  if (resyncIntervalId !== null) Meteor.clearInterval(resyncIntervalId);         // 110
  updateOffset();                                                                // 111
  resyncIntervalId = Meteor.setInterval(updateOffset, 600000);                   // 112
};                                                                               // 113
                                                                                 // 114
// Run this as soon as we load, even before Meteor.startup()                     // 115
// Run again whenever we reconnect after losing connection                       // 116
var wasConnected = false;                                                        // 117
                                                                                 // 118
Deps.autorun(function() {                                                        // 119
  var connected = Meteor.status().connected;                                     // 120
  if ( connected && !wasConnected ) TimeSync.resync();                           // 121
  wasConnected = connected;                                                      // 122
});                                                                              // 123
                                                                                 // 124
// Resync if unexpected change by more than a few seconds. This needs to be      // 125
// somewhat lenient, or a CPU-intensive operation can trigger a re-sync even     // 126
// when the offset is still accurate. In any case, we're not going to be able to // 127
// catch very small system-initiated NTP adjustments with this, anyway.          // 128
var tickCheckTolerance = 5000;                                                   // 129
                                                                                 // 130
var lastClientTime = Date.now();                                                 // 131
                                                                                 // 132
// Set up a new interval for any amount of reactivity.                           // 133
function getTickDependency(interval) {                                           // 134
                                                                                 // 135
  if ( !SyncInternals.timeTick[interval] ) {                                     // 136
    var dep  = new Deps.Dependency();                                            // 137
                                                                                 // 138
    Meteor.setInterval(function() {                                              // 139
      dep.changed();                                                             // 140
    }, interval);                                                                // 141
                                                                                 // 142
    SyncInternals.timeTick[interval] = dep;                                      // 143
  }                                                                              // 144
                                                                                 // 145
  return SyncInternals.timeTick[interval];                                       // 146
}                                                                                // 147
                                                                                 // 148
// Set up special interval for the default tick, which also watches for re-sync  // 149
Meteor.setInterval(function() {                                                  // 150
  var currentClientTime = Date.now();                                            // 151
                                                                                 // 152
  if ( SyncInternals.timeCheck(                                                  // 153
    lastClientTime, currentClientTime, defaultInterval, tickCheckTolerance) ) {  // 154
    // No problem here, just keep ticking along                                  // 155
    SyncInternals.timeTick[defaultInterval].changed();                           // 156
  }                                                                              // 157
  else {                                                                         // 158
    // resync on major client clock changes                                      // 159
    // based on http://stackoverflow.com/a/3367542/1656818                       // 160
    log("Clock discrepancy detected. Attempting re-sync.");                      // 161
    // Refuse to compute server time.                                            // 162
    SyncInternals.offset = undefined;                                            // 163
    SyncInternals.offsetDep.changed();                                           // 164
    TimeSync.resync();                                                           // 165
  }                                                                              // 166
                                                                                 // 167
  lastClientTime = currentClientTime;                                            // 168
}, defaultInterval);                                                             // 169
                                                                                 // 170
                                                                                 // 171
///////////////////////////////////////////////////////////////////////////////////     // 180
                                                                                        // 181
}).call(this);                                                                          // 182
                                                                                        // 183
//////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['mizzao:timesync'] = {
  TimeSync: TimeSync,
  SyncInternals: SyncInternals
};

})();
