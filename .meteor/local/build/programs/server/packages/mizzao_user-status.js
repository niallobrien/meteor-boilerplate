(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var Accounts = Package['accounts-base'].Accounts;
var AccountsServer = Package['accounts-base'].AccountsServer;
var _ = Package.underscore._;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;

/* Package-scope variables */
var __coffeescriptShare, UserStatus, StatusInternals;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/mizzao_user-status/packages/mizzao_user-status.js                                                    //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
(function () {                                                                                                   // 1
                                                                                                                 // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// packages/mizzao:user-status/status.coffee.js                                                               //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
                                                                                                                 // 10
/*                                                                                                               // 11
  Apparently, the new api.export takes care of issues here. No need to attach to global namespace.               // 12
  See http://shiggyenterprises.wordpress.com/2013/09/09/meteor-packages-in-coffeescript-0-6-5/                   // 13
                                                                                                                 // 14
  We may want to make UserSessions a server collection to take advantage of indices.                             // 15
  Will implement if someone has enough online users to warrant it.                                               // 16
 */                                                                                                              // 17
var UserConnections, activeSession, addSession, idleSession, loginSession, onStartup, removeSession, statusEvents, tryLogoutSession;                             
                                                                                                                 // 19
UserConnections = new Mongo.Collection("user_status_sessions", {                                                 // 20
  connection: null                                                                                               // 21
});                                                                                                              // 22
                                                                                                                 // 23
statusEvents = new (Npm.require('events').EventEmitter)();                                                       // 24
                                                                                                                 // 25
                                                                                                                 // 26
/*                                                                                                               // 27
  Multiplex login/logout events to status.online                                                                 // 28
                                                                                                                 // 29
  'online' field is "true" if user is online, and "false" otherwise                                              // 30
                                                                                                                 // 31
  'idle' field is tri-stated:                                                                                    // 32
  - "true" if user is online and not idle                                                                        // 33
  - "false" if user is online and idle                                                                           // 34
  - null if user is offline                                                                                      // 35
 */                                                                                                              // 36
                                                                                                                 // 37
statusEvents.on("connectionLogin", function(advice) {                                                            // 38
  var conns, update;                                                                                             // 39
  update = {                                                                                                     // 40
    $set: {                                                                                                      // 41
      'status.online': true,                                                                                     // 42
      'status.lastLogin': {                                                                                      // 43
        date: advice.loginTime,                                                                                  // 44
        ipAddr: advice.ipAddr,                                                                                   // 45
        userAgent: advice.userAgent                                                                              // 46
      }                                                                                                          // 47
    }                                                                                                            // 48
  };                                                                                                             // 49
  conns = UserConnections.find({                                                                                 // 50
    userId: advice.userId                                                                                        // 51
  }).fetch();                                                                                                    // 52
  if (!_.every(conns, function(c) {                                                                              // 53
    return c.idle;                                                                                               // 54
  })) {                                                                                                          // 55
    update.$set['status.idle'] = false;                                                                          // 56
    update.$unset = {                                                                                            // 57
      'status.lastActivity': null                                                                                // 58
    };                                                                                                           // 59
  }                                                                                                              // 60
  Meteor.users.update(advice.userId, update);                                                                    // 61
});                                                                                                              // 62
                                                                                                                 // 63
statusEvents.on("connectionLogout", function(advice) {                                                           // 64
  var conns;                                                                                                     // 65
  conns = UserConnections.find({                                                                                 // 66
    userId: advice.userId                                                                                        // 67
  }).fetch();                                                                                                    // 68
  if (conns.length === 0) {                                                                                      // 69
    Meteor.users.update(advice.userId, {                                                                         // 70
      $set: {                                                                                                    // 71
        'status.online': false                                                                                   // 72
      },                                                                                                         // 73
      $unset: {                                                                                                  // 74
        'status.idle': null,                                                                                     // 75
        'status.lastActivity': null                                                                              // 76
      }                                                                                                          // 77
    });                                                                                                          // 78
  } else if (_.every(conns, function(c) {                                                                        // 79
    return c.idle;                                                                                               // 80
  })) {                                                                                                          // 81
                                                                                                                 // 82
    /*                                                                                                           // 83
      All remaining connections are idle:                                                                        // 84
      - If the last active connection quit, then we should go idle with the most recent activity                 // 85
                                                                                                                 // 86
      - If an idle connection quit, nothing should happen; specifically, if the                                  // 87
        most recently active idle connection quit, we shouldn't tick the value backwards.                        // 88
        This may result in a no-op so we can be smart and skip the update.                                       // 89
     */                                                                                                          // 90
    if (advice.lastActivity != null) {                                                                           // 91
      return;                                                                                                    // 92
    }                                                                                                            // 93
    Meteor.users.update(advice.userId, {                                                                         // 94
      $set: {                                                                                                    // 95
        'status.idle': true,                                                                                     // 96
        'status.lastActivity': _.max(_.pluck(conns, "lastActivity"))                                             // 97
      }                                                                                                          // 98
    });                                                                                                          // 99
  }                                                                                                              // 100
});                                                                                                              // 101
                                                                                                                 // 102
                                                                                                                 // 103
/*                                                                                                               // 104
  Multiplex idle/active events to status.idle                                                                    // 105
  TODO: Hopefully this is quick because it's all in memory, but we can use indices if it turns out to be slow    // 106
                                                                                                                 // 107
  TODO: There is a race condition when switching between tabs, leaving the user inactive while idle goes from one tab to the other.
  It can probably be smoothed out.                                                                               // 109
 */                                                                                                              // 110
                                                                                                                 // 111
statusEvents.on("connectionIdle", function(advice) {                                                             // 112
  var conns;                                                                                                     // 113
  conns = UserConnections.find({                                                                                 // 114
    userId: advice.userId                                                                                        // 115
  }).fetch();                                                                                                    // 116
  if (!_.every(conns, function(c) {                                                                              // 117
    return c.idle;                                                                                               // 118
  })) {                                                                                                          // 119
    return;                                                                                                      // 120
  }                                                                                                              // 121
  Meteor.users.update(advice.userId, {                                                                           // 122
    $set: {                                                                                                      // 123
      'status.idle': true,                                                                                       // 124
      'status.lastActivity': _.max(_.pluck(conns, "lastActivity"))                                               // 125
    }                                                                                                            // 126
  });                                                                                                            // 127
});                                                                                                              // 128
                                                                                                                 // 129
statusEvents.on("connectionActive", function(advice) {                                                           // 130
  Meteor.users.update(advice.userId, {                                                                           // 131
    $set: {                                                                                                      // 132
      'status.idle': false                                                                                       // 133
    },                                                                                                           // 134
    $unset: {                                                                                                    // 135
      'status.lastActivity': null                                                                                // 136
    }                                                                                                            // 137
  });                                                                                                            // 138
});                                                                                                              // 139
                                                                                                                 // 140
onStartup = function(selector) {                                                                                 // 141
  if (selector == null) {                                                                                        // 142
    selector = {};                                                                                               // 143
  }                                                                                                              // 144
  return Meteor.users.update(selector, {                                                                         // 145
    $set: {                                                                                                      // 146
      "status.online": false                                                                                     // 147
    },                                                                                                           // 148
    $unset: {                                                                                                    // 149
      "status.idle": null,                                                                                       // 150
      "status.lastActivity": null                                                                                // 151
    }                                                                                                            // 152
  }, {                                                                                                           // 153
    multi: true                                                                                                  // 154
  });                                                                                                            // 155
};                                                                                                               // 156
                                                                                                                 // 157
                                                                                                                 // 158
/*                                                                                                               // 159
  Local session modifification functions - also used in testing                                                  // 160
 */                                                                                                              // 161
                                                                                                                 // 162
addSession = function(connection) {                                                                              // 163
  UserConnections.upsert(connection.id, {                                                                        // 164
    $set: {                                                                                                      // 165
      ipAddr: connection.clientAddress,                                                                          // 166
      userAgent: connection.httpHeaders['user-agent']                                                            // 167
    }                                                                                                            // 168
  });                                                                                                            // 169
};                                                                                                               // 170
                                                                                                                 // 171
loginSession = function(connection, date, userId) {                                                              // 172
  UserConnections.upsert(connection.id, {                                                                        // 173
    $set: {                                                                                                      // 174
      userId: userId,                                                                                            // 175
      loginTime: date                                                                                            // 176
    }                                                                                                            // 177
  });                                                                                                            // 178
  statusEvents.emit("connectionLogin", {                                                                         // 179
    userId: userId,                                                                                              // 180
    connectionId: connection.id,                                                                                 // 181
    ipAddr: connection.clientAddress,                                                                            // 182
    userAgent: connection.httpHeaders['user-agent'],                                                             // 183
    loginTime: date                                                                                              // 184
  });                                                                                                            // 185
};                                                                                                               // 186
                                                                                                                 // 187
tryLogoutSession = function(connection, date) {                                                                  // 188
  var conn;                                                                                                      // 189
  if ((conn = UserConnections.findOne({                                                                          // 190
    _id: connection.id,                                                                                          // 191
    userId: {                                                                                                    // 192
      $exists: true                                                                                              // 193
    }                                                                                                            // 194
  })) == null) {                                                                                                 // 195
    return false;                                                                                                // 196
  }                                                                                                              // 197
  UserConnections.upsert(connection.id, {                                                                        // 198
    $unset: {                                                                                                    // 199
      userId: null,                                                                                              // 200
      loginTime: null                                                                                            // 201
    }                                                                                                            // 202
  });                                                                                                            // 203
  return statusEvents.emit("connectionLogout", {                                                                 // 204
    userId: conn.userId,                                                                                         // 205
    connectionId: connection.id,                                                                                 // 206
    lastActivity: conn.lastActivity,                                                                             // 207
    logoutTime: date                                                                                             // 208
  });                                                                                                            // 209
};                                                                                                               // 210
                                                                                                                 // 211
removeSession = function(connection, date) {                                                                     // 212
  tryLogoutSession(connection, date);                                                                            // 213
  UserConnections.remove(connection.id);                                                                         // 214
};                                                                                                               // 215
                                                                                                                 // 216
idleSession = function(connection, date, userId) {                                                               // 217
  UserConnections.update(connection.id, {                                                                        // 218
    $set: {                                                                                                      // 219
      idle: true,                                                                                                // 220
      lastActivity: date                                                                                         // 221
    }                                                                                                            // 222
  });                                                                                                            // 223
  statusEvents.emit("connectionIdle", {                                                                          // 224
    userId: userId,                                                                                              // 225
    connectionId: connection.id,                                                                                 // 226
    lastActivity: date                                                                                           // 227
  });                                                                                                            // 228
};                                                                                                               // 229
                                                                                                                 // 230
activeSession = function(connection, date, userId) {                                                             // 231
  UserConnections.update(connection.id, {                                                                        // 232
    $set: {                                                                                                      // 233
      idle: false                                                                                                // 234
    },                                                                                                           // 235
    $unset: {                                                                                                    // 236
      lastActivity: null                                                                                         // 237
    }                                                                                                            // 238
  });                                                                                                            // 239
  statusEvents.emit("connectionActive", {                                                                        // 240
    userId: userId,                                                                                              // 241
    connectionId: connection.id,                                                                                 // 242
    lastActivity: date                                                                                           // 243
  });                                                                                                            // 244
};                                                                                                               // 245
                                                                                                                 // 246
                                                                                                                 // 247
/*                                                                                                               // 248
  Handlers for various client-side events                                                                        // 249
 */                                                                                                              // 250
                                                                                                                 // 251
Meteor.startup(onStartup);                                                                                       // 252
                                                                                                                 // 253
Meteor.onConnection(function(connection) {                                                                       // 254
  addSession(connection);                                                                                        // 255
  return connection.onClose(function() {                                                                         // 256
    return removeSession(connection, new Date());                                                                // 257
  });                                                                                                            // 258
});                                                                                                              // 259
                                                                                                                 // 260
Accounts.onLogin(function(info) {                                                                                // 261
  return loginSession(info.connection, new Date(), info.user._id);                                               // 262
});                                                                                                              // 263
                                                                                                                 // 264
Meteor.publish(null, function() {                                                                                // 265
  if (this._session == null) {                                                                                   // 266
    return [];                                                                                                   // 267
  }                                                                                                              // 268
  if (this.userId == null) {                                                                                     // 269
    tryLogoutSession(this._session.connectionHandle, new Date());                                                // 270
  }                                                                                                              // 271
  return [];                                                                                                     // 272
});                                                                                                              // 273
                                                                                                                 // 274
Meteor.methods({                                                                                                 // 275
  "user-status-idle": function(timestamp) {                                                                      // 276
    var date;                                                                                                    // 277
    check(timestamp, Match.OneOf(null, void 0, Date, Number));                                                   // 278
    date = timestamp != null ? new Date(timestamp) : new Date();                                                 // 279
    idleSession(this.connection, date, this.userId);                                                             // 280
  },                                                                                                             // 281
  "user-status-active": function(timestamp) {                                                                    // 282
    var date;                                                                                                    // 283
    check(timestamp, Match.OneOf(null, void 0, Date, Number));                                                   // 284
    date = timestamp != null ? new Date(timestamp) : new Date();                                                 // 285
    activeSession(this.connection, date, this.userId);                                                           // 286
  }                                                                                                              // 287
});                                                                                                              // 288
                                                                                                                 // 289
UserStatus = {                                                                                                   // 290
  connections: UserConnections,                                                                                  // 291
  events: statusEvents                                                                                           // 292
};                                                                                                               // 293
                                                                                                                 // 294
StatusInternals = {                                                                                              // 295
  onStartup: onStartup,                                                                                          // 296
  addSession: addSession,                                                                                        // 297
  removeSession: removeSession,                                                                                  // 298
  loginSession: loginSession,                                                                                    // 299
  tryLogoutSession: tryLogoutSession,                                                                            // 300
  idleSession: idleSession,                                                                                      // 301
  activeSession: activeSession                                                                                   // 302
};                                                                                                               // 303
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 // 305
}).call(this);                                                                                                   // 306
                                                                                                                 // 307
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['mizzao:user-status'] = {
  UserStatus: UserStatus,
  StatusInternals: StatusInternals
};

})();

//# sourceMappingURL=mizzao_user-status.js.map
