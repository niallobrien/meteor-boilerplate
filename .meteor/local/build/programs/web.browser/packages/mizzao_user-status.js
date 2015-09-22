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
var Accounts = Package['accounts-base'].Accounts;
var AccountsClient = Package['accounts-base'].AccountsClient;
var _ = Package.underscore._;
var Mongo = Package.mongo.Mongo;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var TimeSync = Package['mizzao:timesync'].TimeSync;

/* Package-scope variables */
var __coffeescriptShare, MonitorInternals, UserStatus;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/mizzao_user-status/packages/mizzao_user-status.js                                 //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
(function () {                                                                                // 1
                                                                                              // 2
/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// packages/mizzao:user-status/monitor.coffee.js                                           //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
                                                                                              // 10
/*                                                                                            // 11
  The idle monitor watches for mouse, keyboard, and blur events,                              // 12
  and reports idle status to the server.                                                      // 13
                                                                                              // 14
  It uses TimeSync to report accurate time.                                                   // 15
                                                                                              // 16
  Everything is reactive, of course!                                                          // 17
 */                                                                                           // 18
var activityDep, focused, idle, idleDep, isIdle, isMonitoring, lastActivity, lastActivityTime, monitor, monitorDep, monitorId, start, stop, touch;                              
                                                                                              // 20
monitorId = null;                                                                             // 21
                                                                                              // 22
idle = false;                                                                                 // 23
                                                                                              // 24
lastActivityTime = void 0;                                                                    // 25
                                                                                              // 26
monitorDep = new Deps.Dependency;                                                             // 27
                                                                                              // 28
idleDep = new Deps.Dependency;                                                                // 29
                                                                                              // 30
activityDep = new Deps.Dependency;                                                            // 31
                                                                                              // 32
focused = true;                                                                               // 33
                                                                                              // 34
MonitorInternals = {                                                                          // 35
  idleThreshold: null,                                                                        // 36
  idleOnBlur: false,                                                                          // 37
  computeState: function(lastActiveTime, currentTime, isWindowFocused) {                      // 38
    var inactiveTime;                                                                         // 39
    inactiveTime = currentTime - lastActiveTime;                                              // 40
    if (MonitorInternals.idleOnBlur && !isWindowFocused) {                                    // 41
      return true;                                                                            // 42
    }                                                                                         // 43
    if (inactiveTime > MonitorInternals.idleThreshold) {                                      // 44
      return true;                                                                            // 45
    } else {                                                                                  // 46
      return false;                                                                           // 47
    }                                                                                         // 48
  },                                                                                          // 49
  connectionChange: function(isConnected, wasConnected) {                                     // 50
    if (isConnected && !wasConnected && idle) {                                               // 51
      return MonitorInternals.reportIdle(lastActivityTime);                                   // 52
    }                                                                                         // 53
  },                                                                                          // 54
  onWindowBlur: function() {                                                                  // 55
    focused = false;                                                                          // 56
    return monitor();                                                                         // 57
  },                                                                                          // 58
  onWindowFocus: function() {                                                                 // 59
    focused = true;                                                                           // 60
    return monitor(true);                                                                     // 61
  },                                                                                          // 62
  reportIdle: function(time) {                                                                // 63
    return Meteor.call("user-status-idle", time);                                             // 64
  },                                                                                          // 65
  reportActive: function(time) {                                                              // 66
    return Meteor.call("user-status-active", time);                                           // 67
  }                                                                                           // 68
};                                                                                            // 69
                                                                                              // 70
start = function(settings) {                                                                  // 71
  var interval;                                                                               // 72
  if (!TimeSync.isSynced()) {                                                                 // 73
    throw new Error("Can't start idle monitor until synced to server");                       // 74
  }                                                                                           // 75
  if (monitorId) {                                                                            // 76
    throw new Error("Idle monitor is already active. Stop it first.");                        // 77
  }                                                                                           // 78
  settings = settings || {};                                                                  // 79
  MonitorInternals.idleThreshold = settings.threshold || 60000;                               // 80
  interval = Math.max(settings.interval || 1000, 1000);                                       // 81
  MonitorInternals.idleOnBlur = settings.idleOnBlur != null ? settings.idleOnBlur : false;    // 82
  monitorId = Meteor.setInterval(monitor, interval);                                          // 83
  monitorDep.changed();                                                                       // 84
  if (lastActivityTime == null) {                                                             // 85
    lastActivityTime = Deps.nonreactive(function() {                                          // 86
      return TimeSync.serverTime();                                                           // 87
    });                                                                                       // 88
    activityDep.changed();                                                                    // 89
  }                                                                                           // 90
  monitor();                                                                                  // 91
};                                                                                            // 92
                                                                                              // 93
stop = function() {                                                                           // 94
  if (!monitorId) {                                                                           // 95
    throw new Error("Idle monitor is not running.");                                          // 96
  }                                                                                           // 97
  Meteor.clearInterval(monitorId);                                                            // 98
  monitorId = null;                                                                           // 99
  lastActivityTime = void 0;                                                                  // 100
  monitorDep.changed();                                                                       // 101
  if (idle) {                                                                                 // 102
    idle = false;                                                                             // 103
    idleDep.changed();                                                                        // 104
    MonitorInternals.reportActive(Deps.nonreactive(function() {                               // 105
      return TimeSync.serverTime();                                                           // 106
    }));                                                                                      // 107
  }                                                                                           // 108
};                                                                                            // 109
                                                                                              // 110
monitor = function(setAction) {                                                               // 111
  var currentTime, newIdle;                                                                   // 112
  if (!monitorId) {                                                                           // 113
    return;                                                                                   // 114
  }                                                                                           // 115
  currentTime = Deps.nonreactive(function() {                                                 // 116
    return TimeSync.serverTime();                                                             // 117
  });                                                                                         // 118
  if (currentTime == null) {                                                                  // 119
    return;                                                                                   // 120
  }                                                                                           // 121
  if (setAction && (focused || !MonitorInternals.idleOnBlur)) {                               // 122
    lastActivityTime = currentTime;                                                           // 123
    activityDep.changed();                                                                    // 124
  }                                                                                           // 125
  newIdle = MonitorInternals.computeState(lastActivityTime, currentTime, focused);            // 126
  if (newIdle !== idle) {                                                                     // 127
    idle = newIdle;                                                                           // 128
    idleDep.changed();                                                                        // 129
  }                                                                                           // 130
};                                                                                            // 131
                                                                                              // 132
touch = function() {                                                                          // 133
  if (!monitorId) {                                                                           // 134
    Meteor._debug("Cannot touch as idle monitor is not running.");                            // 135
    return;                                                                                   // 136
  }                                                                                           // 137
  return monitor(true);                                                                       // 138
};                                                                                            // 139
                                                                                              // 140
isIdle = function() {                                                                         // 141
  idleDep.depend();                                                                           // 142
  return idle;                                                                                // 143
};                                                                                            // 144
                                                                                              // 145
isMonitoring = function() {                                                                   // 146
  monitorDep.depend();                                                                        // 147
  return monitorId != null;                                                                   // 148
};                                                                                            // 149
                                                                                              // 150
lastActivity = function() {                                                                   // 151
  if (!isMonitoring()) {                                                                      // 152
    return;                                                                                   // 153
  }                                                                                           // 154
  activityDep.depend();                                                                       // 155
  return lastActivityTime;                                                                    // 156
};                                                                                            // 157
                                                                                              // 158
Meteor.startup(function() {                                                                   // 159
  var wasConnected;                                                                           // 160
  $(window).on("click keydown", function() {                                                  // 161
    return monitor(true);                                                                     // 162
  });                                                                                         // 163
  $(window).blur(MonitorInternals.onWindowBlur);                                              // 164
  $(window).focus(MonitorInternals.onWindowFocus);                                            // 165
  if (Meteor.isCordova) {                                                                     // 166
    document.addEventListener("pause", MonitorInternals.onWindowBlur);                        // 167
    document.addEventListener("resume", MonitorInternals.onWindowFocus);                      // 168
  }                                                                                           // 169
  focused = document.hasFocus();                                                              // 170
  Deps.autorun(function() {                                                                   // 171
    if (!isMonitoring()) {                                                                    // 172
      return;                                                                                 // 173
    }                                                                                         // 174
    if (isIdle()) {                                                                           // 175
      MonitorInternals.reportIdle(lastActivityTime);                                          // 176
    } else {                                                                                  // 177
      MonitorInternals.reportActive(lastActivityTime);                                        // 178
    }                                                                                         // 179
  });                                                                                         // 180
  wasConnected = Meteor.status().connected;                                                   // 181
  return Deps.autorun(function() {                                                            // 182
    var connected;                                                                            // 183
    connected = Meteor.status().connected;                                                    // 184
    MonitorInternals.connectionChange(connected, wasConnected);                               // 185
    wasConnected = connected;                                                                 // 186
  });                                                                                         // 187
});                                                                                           // 188
                                                                                              // 189
UserStatus = {                                                                                // 190
  startMonitor: start,                                                                        // 191
  stopMonitor: stop,                                                                          // 192
  pingMonitor: touch,                                                                         // 193
  isIdle: isIdle,                                                                             // 194
  isMonitoring: isMonitoring,                                                                 // 195
  lastActivity: lastActivity                                                                  // 196
};                                                                                            // 197
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              // 199
}).call(this);                                                                                // 200
                                                                                              // 201
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['mizzao:user-status'] = {
  UserStatus: UserStatus,
  MonitorInternals: MonitorInternals
};

})();
