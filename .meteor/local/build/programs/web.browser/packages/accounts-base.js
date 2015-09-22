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
var ECMAScript = Package.ecmascript.ECMAScript;
var DDPRateLimiter = Package['ddp-rate-limiter'].DDPRateLimiter;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var Random = Package.random.Random;
var Hook = Package['callback-hook'].Hook;
var DDP = Package['ddp-client'].DDP;
var Mongo = Package.mongo.Mongo;
var babelHelpers = Package['babel-runtime'].babelHelpers;
var Promise = Package.promise.Promise;
var Map = Package['ecmascript-collections'].Map;
var Set = Package['ecmascript-collections'].Set;

/* Package-scope variables */
var AccountsCommon, EXPIRE_TOKENS_INTERVAL_MS, CONNECTION_CLOSE_DELAY_MS, AccountsClient, AccountsTest, Accounts;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/accounts-base/accounts_common.js                                                                         //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
/**                                                                                                                  //
 * @summary Super-constructor for AccountsClient and AccountsServer.                                                 //
 * @locus Anywhere                                                                                                   //
 * @class AccountsCommon                                                                                             //
 * @instancename accountsClientOrServer                                                                              //
 * @param options {Object} an object with fields:                                                                    //
 * - connection {Object} Optional DDP connection to reuse.                                                           //
 * - ddpUrl {String} Optional URL for creating a new DDP connection.                                                 //
 */                                                                                                                  //
AccountsCommon = (function () {                                                                                      // 10
  function AccountsCommon(options) {                                                                                 // 11
    babelHelpers.classCallCheck(this, AccountsCommon);                                                               //
                                                                                                                     //
    // Currently this is read directly by packages like accounts-password                                            //
    // and accounts-ui-unstyled.                                                                                     //
    this._options = {};                                                                                              // 14
                                                                                                                     //
    // Note that setting this.connection = null causes this.users to be a                                            //
    // LocalCollection, which is not what we want.                                                                   //
    this.connection = undefined;                                                                                     // 18
    this._initConnection(options || {});                                                                             // 19
                                                                                                                     //
    // There is an allow call in accounts_server.js that restricts writes to                                         //
    // this collection.                                                                                              //
    this.users = new Mongo.Collection("users", {                                                                     // 23
      _preventAutopublish: true,                                                                                     // 24
      connection: this.connection                                                                                    // 25
    });                                                                                                              //
                                                                                                                     //
    // Callback exceptions are printed with Meteor._debug and ignored.                                               //
    this._onLoginHook = new Hook({                                                                                   // 29
      bindEnvironment: false,                                                                                        // 30
      debugPrintExceptions: "onLogin callback"                                                                       // 31
    });                                                                                                              //
                                                                                                                     //
    this._onLoginFailureHook = new Hook({                                                                            // 34
      bindEnvironment: false,                                                                                        // 35
      debugPrintExceptions: "onLoginFailure callback"                                                                // 36
    });                                                                                                              //
  }                                                                                                                  //
                                                                                                                     //
  /**                                                                                                                //
   * @summary Get the current user id, or `null` if no user is logged in. A reactive data source.                    //
   * @locus Anywhere but publish functions                                                                           //
   */                                                                                                                //
                                                                                                                     //
  AccountsCommon.prototype.userId = (function () {                                                                   // 10
    function userId() {                                                                                              // 44
      throw new Error("userId method not implemented");                                                              // 45
    }                                                                                                                //
                                                                                                                     //
    return userId;                                                                                                   //
  })();                                                                                                              //
                                                                                                                     //
  /**                                                                                                                //
   * @summary Get the current user record, or `null` if no user is logged in. A reactive data source.                //
   * @locus Anywhere but publish functions                                                                           //
   */                                                                                                                //
                                                                                                                     //
  AccountsCommon.prototype.user = (function () {                                                                     // 10
    function user() {                                                                                                // 52
      var userId = this.userId();                                                                                    // 53
      return userId ? this.users.findOne(userId) : null;                                                             // 54
    }                                                                                                                //
                                                                                                                     //
    return user;                                                                                                     //
  })();                                                                                                              //
                                                                                                                     //
  // Set up config for the accounts system. Call this on both the client                                             //
  // and the server.                                                                                                 //
  //                                                                                                                 //
  // Note that this method gets overridden on AccountsServer.prototype, but                                          //
  // the overriding method calls the overridden method.                                                              //
  //                                                                                                                 //
  // XXX we should add some enforcement that this is called on both the                                              //
  // client and the server. Otherwise, a user can                                                                    //
  // 'forbidClientAccountCreation' only on the client and while it looks                                             //
  // like their app is secure, the server will still accept createUser                                               //
  // calls. https://github.com/meteor/meteor/issues/828                                                              //
  //                                                                                                                 //
  // @param options {Object} an object with fields:                                                                  //
  // - sendVerificationEmail {Boolean}                                                                               //
  //     Send email address verification emails to new users created from                                            //
  //     client signups.                                                                                             //
  // - forbidClientAccountCreation {Boolean}                                                                         //
  //     Do not allow clients to create accounts directly.                                                           //
  // - restrictCreationByEmailDomain {Function or String}                                                            //
  //     Require created users to have an email matching the function or                                             //
  //     having the string as domain.                                                                                //
  // - loginExpirationInDays {Number}                                                                                //
  //     Number of days since login until a user is logged out (login token                                          //
  //     expires).                                                                                                   //
                                                                                                                     //
  /**                                                                                                                //
   * @summary Set global accounts options.                                                                           //
   * @locus Anywhere                                                                                                 //
   * @param {Object} options                                                                                         //
   * @param {Boolean} options.sendVerificationEmail New users with an email address will receive an address verification email.
   * @param {Boolean} options.forbidClientAccountCreation Calls to [`createUser`](#accounts_createuser) from the client will be rejected. In addition, if you are using [accounts-ui](#accountsui), the "Create account" link will not be available.
   * @param {String | Function} options.restrictCreationByEmailDomain If set to a string, only allows new users if the domain part of their email address matches the string. If set to a function, only allows new users if the function returns true.  The function is passed the full email address of the proposed new user.  Works with password-based sign-in and external services that expose email addresses (Google, Facebook, GitHub). All existing users still can log in after enabling this option. Example: `Accounts.config({ restrictCreationByEmailDomain: 'school.edu' })`.
   * @param {Number} options.loginExpirationInDays The number of days from when a user logs in until their token expires and they are logged out. Defaults to 90. Set to `null` to disable login expiration.
   * @param {String} options.oauthSecretKey When using the `oauth-encryption` package, the 16 byte key using to encrypt sensitive account credentials in the database, encoded in base64.  This option may only be specifed on the server.  See packages/oauth-encryption/README.md for details.
   */                                                                                                                //
                                                                                                                     //
  AccountsCommon.prototype.config = (function () {                                                                   // 10
    function config(options) {                                                                                       // 92
      var self = this;                                                                                               // 93
                                                                                                                     //
      // We don't want users to accidentally only call Accounts.config on the                                        //
      // client, where some of the options will have partial effects (eg removing                                    //
      // the "create account" button from accounts-ui if forbidClientAccountCreation                                 //
      // is set, or redirecting Google login to a specific-domain page) without                                      //
      // having their full effects.                                                                                  //
      if (Meteor.isServer) {                                                                                         // 100
        __meteor_runtime_config__.accountsConfigCalled = true;                                                       // 101
      } else if (!__meteor_runtime_config__.accountsConfigCalled) {                                                  //
        // XXX would be nice to "crash" the client and replace the UI with an error                                  //
        // message, but there's no trivial way to do this.                                                           //
        Meteor._debug("Accounts.config was called on the client but not on the " + "server; some configuration options may not take effect.");
      }                                                                                                              //
                                                                                                                     //
      // We need to validate the oauthSecretKey option at the time                                                   //
      // Accounts.config is called. We also deliberately don't store the                                             //
      // oauthSecretKey in Accounts._options.                                                                        //
      if (_.has(options, "oauthSecretKey")) {                                                                        // 112
        if (Meteor.isClient) throw new Error("The oauthSecretKey option may only be specified on the server");       // 113
        if (!Package["oauth-encryption"]) throw new Error("The oauth-encryption package must be loaded to set oauthSecretKey");
        Package["oauth-encryption"].OAuthEncryption.loadKey(options.oauthSecretKey);                                 // 117
        options = _.omit(options, "oauthSecretKey");                                                                 // 118
      }                                                                                                              //
                                                                                                                     //
      // validate option keys                                                                                        //
      var VALID_KEYS = ["sendVerificationEmail", "forbidClientAccountCreation", "restrictCreationByEmailDomain", "loginExpirationInDays"];
      _.each(_.keys(options), function (key) {                                                                       // 124
        if (!_.contains(VALID_KEYS, key)) {                                                                          // 125
          throw new Error("Accounts.config: Invalid key: " + key);                                                   // 126
        }                                                                                                            //
      });                                                                                                            //
                                                                                                                     //
      // set values in Accounts._options                                                                             //
      _.each(VALID_KEYS, function (key) {                                                                            // 131
        if (key in options) {                                                                                        // 132
          if (key in self._options) {                                                                                // 133
            throw new Error("Can't set `" + key + "` more than once");                                               // 134
          }                                                                                                          //
          self._options[key] = options[key];                                                                         // 136
        }                                                                                                            //
      });                                                                                                            //
    }                                                                                                                //
                                                                                                                     //
    return config;                                                                                                   //
  })();                                                                                                              //
                                                                                                                     //
  /**                                                                                                                //
   * @summary Register a callback to be called after a login attempt succeeds.                                       //
   * @locus Anywhere                                                                                                 //
   * @param {Function} func The callback to be called when login is successful.                                      //
   */                                                                                                                //
                                                                                                                     //
  AccountsCommon.prototype.onLogin = (function () {                                                                  // 10
    function onLogin(func) {                                                                                         // 146
      return this._onLoginHook.register(func);                                                                       // 147
    }                                                                                                                //
                                                                                                                     //
    return onLogin;                                                                                                  //
  })();                                                                                                              //
                                                                                                                     //
  /**                                                                                                                //
   * @summary Register a callback to be called after a login attempt fails.                                          //
   * @locus Anywhere                                                                                                 //
   * @param {Function} func The callback to be called after the login has failed.                                    //
   */                                                                                                                //
                                                                                                                     //
  AccountsCommon.prototype.onLoginFailure = (function () {                                                           // 10
    function onLoginFailure(func) {                                                                                  // 155
      return this._onLoginFailureHook.register(func);                                                                // 156
    }                                                                                                                //
                                                                                                                     //
    return onLoginFailure;                                                                                           //
  })();                                                                                                              //
                                                                                                                     //
  AccountsCommon.prototype._initConnection = (function () {                                                          // 10
    function _initConnection(options) {                                                                              // 159
      if (!Meteor.isClient) {                                                                                        // 160
        return;                                                                                                      // 161
      }                                                                                                              //
                                                                                                                     //
      // The connection used by the Accounts system. This is the connection                                          //
      // that will get logged in by Meteor.login(), and this is the                                                  //
      // connection whose login state will be reflected by Meteor.userId().                                          //
      //                                                                                                             //
      // It would be much preferable for this to be in accounts_client.js,                                           //
      // but it has to be here because it's needed to create the                                                     //
      // Meteor.users collection.                                                                                    //
                                                                                                                     //
      if (options.connection) {                                                                                      // 172
        this.connection = options.connection;                                                                        // 173
      } else if (options.ddpUrl) {                                                                                   //
        this.connection = DDP.connect(options.ddpUrl);                                                               // 175
      } else if (typeof __meteor_runtime_config__ !== "undefined" && __meteor_runtime_config__.ACCOUNTS_CONNECTION_URL) {
        // Temporary, internal hook to allow the server to point the client                                          //
        // to a different authentication server. This is for a very                                                  //
        // particular use case that comes up when implementing a oauth                                               //
        // server. Unsupported and may go away at any point in time.                                                 //
        //                                                                                                           //
        // We will eventually provide a general way to use account-base                                              //
        // against any DDP connection, not just one special one.                                                     //
        this.connection = DDP.connect(__meteor_runtime_config__.ACCOUNTS_CONNECTION_URL);                            // 185
      } else {                                                                                                       //
        this.connection = Meteor.connection;                                                                         // 188
      }                                                                                                              //
    }                                                                                                                //
                                                                                                                     //
    return _initConnection;                                                                                          //
  })();                                                                                                              //
                                                                                                                     //
  AccountsCommon.prototype._getTokenLifetimeMs = (function () {                                                      // 10
    function _getTokenLifetimeMs() {                                                                                 // 192
      return (this._options.loginExpirationInDays || DEFAULT_LOGIN_EXPIRATION_DAYS) * 24 * 60 * 60 * 1000;           // 193
    }                                                                                                                //
                                                                                                                     //
    return _getTokenLifetimeMs;                                                                                      //
  })();                                                                                                              //
                                                                                                                     //
  AccountsCommon.prototype._tokenExpiration = (function () {                                                         // 10
    function _tokenExpiration(when) {                                                                                // 197
      // We pass when through the Date constructor for backwards compatibility;                                      //
      // `when` used to be a number.                                                                                 //
      return new Date(new Date(when).getTime() + this._getTokenLifetimeMs());                                        // 200
    }                                                                                                                //
                                                                                                                     //
    return _tokenExpiration;                                                                                         //
  })();                                                                                                              //
                                                                                                                     //
  AccountsCommon.prototype._tokenExpiresSoon = (function () {                                                        // 10
    function _tokenExpiresSoon(when) {                                                                               // 203
      var minLifetimeMs = .1 * this._getTokenLifetimeMs();                                                           // 204
      var minLifetimeCapMs = MIN_TOKEN_LIFETIME_CAP_SECS * 1000;                                                     // 205
      if (minLifetimeMs > minLifetimeCapMs) minLifetimeMs = minLifetimeCapMs;                                        // 206
      return new Date() > new Date(when) - minLifetimeMs;                                                            // 208
    }                                                                                                                //
                                                                                                                     //
    return _tokenExpiresSoon;                                                                                        //
  })();                                                                                                              //
                                                                                                                     //
  return AccountsCommon;                                                                                             //
})();                                                                                                                //
                                                                                                                     //
var Ap = AccountsCommon.prototype;                                                                                   // 212
                                                                                                                     //
// Note that Accounts is defined separately in accounts_client.js and                                                //
// accounts_server.js.                                                                                               //
                                                                                                                     //
/**                                                                                                                  //
 * @summary Get the current user id, or `null` if no user is logged in. A reactive data source.                      //
 * @locus Anywhere but publish functions                                                                             //
 */                                                                                                                  //
Meteor.userId = function () {                                                                                        // 221
  return Accounts.userId();                                                                                          // 222
};                                                                                                                   //
                                                                                                                     //
/**                                                                                                                  //
 * @summary Get the current user record, or `null` if no user is logged in. A reactive data source.                  //
 * @locus Anywhere but publish functions                                                                             //
 */                                                                                                                  //
Meteor.user = function () {                                                                                          // 229
  return Accounts.user();                                                                                            // 230
};                                                                                                                   //
                                                                                                                     //
// how long (in days) until a login token expires                                                                    //
var DEFAULT_LOGIN_EXPIRATION_DAYS = 90;                                                                              // 234
// Clients don't try to auto-login with a token that is going to expire within                                       //
// .1 * DEFAULT_LOGIN_EXPIRATION_DAYS, capped at MIN_TOKEN_LIFETIME_CAP_SECS.                                        //
// Tries to avoid abrupt disconnects from expiring tokens.                                                           //
var MIN_TOKEN_LIFETIME_CAP_SECS = 3600; // one hour                                                                  // 238
// how often (in milliseconds) we check for expired tokens                                                           //
EXPIRE_TOKENS_INTERVAL_MS = 600 * 1000; // 10 minutes                                                                // 240
// how long we wait before logging out clients when Meteor.logoutOtherClients is                                     //
// called                                                                                                            //
CONNECTION_CLOSE_DELAY_MS = 10 * 1000;                                                                               // 243
                                                                                                                     //
// loginServiceConfiguration and ConfigError are maintained for backwards compatibility                              //
Meteor.startup(function () {                                                                                         // 246
  var ServiceConfiguration = Package['service-configuration'].ServiceConfiguration;                                  // 247
  Ap.loginServiceConfiguration = ServiceConfiguration.configurations;                                                // 249
  Ap.ConfigError = ServiceConfiguration.ConfigError;                                                                 // 250
});                                                                                                                  //
                                                                                                                     //
// Thrown when the user cancels the login process (eg, closes an oauth                                               //
// popup, declines retina scan, etc)                                                                                 //
var lceName = 'Accounts.LoginCancelledError';                                                                        // 255
Ap.LoginCancelledError = Meteor.makeErrorType(lceName, function (description) {                                      // 256
  this.message = description;                                                                                        // 259
});                                                                                                                  //
Ap.LoginCancelledError.prototype.name = lceName;                                                                     // 262
                                                                                                                     //
// This is used to transmit specific subclass errors over the wire. We should                                        //
// come up with a more generic way to do this (eg, with some sort of symbolic                                        //
// error code rather than a number).                                                                                 //
Ap.LoginCancelledError.numericError = 0x8acdc2f;                                                                     // 267
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/accounts-base/accounts_rate_limit.js                                                                     //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var Ap = AccountsCommon.prototype;                                                                                   // 1
var defaultRateLimiterRuleId;                                                                                        // 2
// Removes default rate limiting rule                                                                                //
Ap.removeDefaultRateLimit = function () {                                                                            // 4
  var resp = DDPRateLimiter.removeRule(defaultRateLimiterRuleId);                                                    // 5
  defaultRateLimiterRuleId = null;                                                                                   // 6
  return resp;                                                                                                       // 7
};                                                                                                                   //
                                                                                                                     //
// Add a default rule of limiting logins, creating new users and password reset                                      //
// to 5 times every 10 seconds per connection.                                                                       //
Ap.addDefaultRateLimit = function () {                                                                               // 12
  if (!defaultRateLimiterRuleId) {                                                                                   // 13
    defaultRateLimiterRuleId = DDPRateLimiter.addRule({                                                              // 14
      userId: null,                                                                                                  // 15
      clientAddress: null,                                                                                           // 16
      type: 'method',                                                                                                // 17
      name: function (name) {                                                                                        // 18
        return _.contains(['login', 'createUser', 'resetPassword', 'forgotPassword'], name);                         // 19
      },                                                                                                             //
      connectionId: function (connectionId) {                                                                        // 22
        return true;                                                                                                 // 23
      }                                                                                                              //
    }, 5, 10000);                                                                                                    //
  }                                                                                                                  //
};                                                                                                                   //
                                                                                                                     //
Ap.addDefaultRateLimit();                                                                                            // 29
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/accounts-base/accounts_client.js                                                                         //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
/**                                                                                                                  //
 * @summary Constructor for the `Accounts` object on the client.                                                     //
 * @locus Client                                                                                                     //
 * @class                                                                                                            //
 * @extends AccountsCommon                                                                                           //
 * @instancename accountsClient                                                                                      //
 * @param {Object} options an object with fields:                                                                    //
 * @param {Object} options.connection Optional DDP connection to reuse.                                              //
 * @param {String} options.ddpUrl Optional URL for creating a new DDP connection.                                    //
 */                                                                                                                  //
AccountsClient = (function (_AccountsCommon) {                                                                       // 11
  babelHelpers.inherits(AccountsClient, _AccountsCommon);                                                            //
                                                                                                                     //
  function AccountsClient(options) {                                                                                 // 12
    babelHelpers.classCallCheck(this, AccountsClient);                                                               //
                                                                                                                     //
    _AccountsCommon.call(this, options);                                                                             // 13
                                                                                                                     //
    this._loggingIn = false;                                                                                         // 15
    this._loggingInDeps = new Tracker.Dependency();                                                                  // 16
                                                                                                                     //
    this._loginServicesHandle = this.connection.subscribe("meteor.loginServiceConfiguration");                       // 18
                                                                                                                     //
    this._pageLoadLoginCallbacks = [];                                                                               // 21
    this._pageLoadLoginAttemptInfo = null;                                                                           // 22
                                                                                                                     //
    // Defined in url_client.js.                                                                                     //
    this._initUrlMatching();                                                                                         // 25
                                                                                                                     //
    // Defined in localstorage_token.js.                                                                             //
    this._initLocalStorage();                                                                                        // 28
  }                                                                                                                  //
                                                                                                                     //
  ///                                                                                                                //
  /// CURRENT USER                                                                                                   //
  ///                                                                                                                //
                                                                                                                     //
  // @override                                                                                                       //
                                                                                                                     //
  AccountsClient.prototype.userId = (function () {                                                                   // 11
    function userId() {                                                                                              // 36
      return this.connection.userId();                                                                               // 37
    }                                                                                                                //
                                                                                                                     //
    return userId;                                                                                                   //
  })();                                                                                                              //
                                                                                                                     //
  // This is mostly just called within this file, but Meteor.loginWithPassword                                       //
  // also uses it to make loggingIn() be true during the beginPasswordExchange                                       //
  // method call too.                                                                                                //
                                                                                                                     //
  AccountsClient.prototype._setLoggingIn = (function () {                                                            // 11
    function _setLoggingIn(x) {                                                                                      // 43
      if (this._loggingIn !== x) {                                                                                   // 44
        this._loggingIn = x;                                                                                         // 45
        this._loggingInDeps.changed();                                                                               // 46
      }                                                                                                              //
    }                                                                                                                //
                                                                                                                     //
    return _setLoggingIn;                                                                                            //
  })();                                                                                                              //
                                                                                                                     //
  /**                                                                                                                //
   * @summary True if a login method (such as `Meteor.loginWithPassword`, `Meteor.loginWithFacebook`, or `Accounts.createUser`) is currently in progress. A reactive data source.
   * @locus Client                                                                                                   //
   */                                                                                                                //
                                                                                                                     //
  AccountsClient.prototype.loggingIn = (function () {                                                                // 11
    function loggingIn() {                                                                                           // 54
      this._loggingInDeps.depend();                                                                                  // 55
      return this._loggingIn;                                                                                        // 56
    }                                                                                                                //
                                                                                                                     //
    return loggingIn;                                                                                                //
  })();                                                                                                              //
                                                                                                                     //
  /**                                                                                                                //
   * @summary Log the user out.                                                                                      //
   * @locus Client                                                                                                   //
   * @param {Function} [callback] Optional callback. Called with no arguments on success, or with a single `Error` argument on failure.
   */                                                                                                                //
                                                                                                                     //
  AccountsClient.prototype.logout = (function () {                                                                   // 11
    function logout(callback) {                                                                                      // 64
      var self = this;                                                                                               // 65
      self.connection.apply('logout', [], {                                                                          // 66
        wait: true                                                                                                   // 67
      }, function (error, result) {                                                                                  //
        if (error) {                                                                                                 // 69
          callback && callback(error);                                                                               // 70
        } else {                                                                                                     //
          self.makeClientLoggedOut();                                                                                // 72
          callback && callback();                                                                                    // 73
        }                                                                                                            //
      });                                                                                                            //
    }                                                                                                                //
                                                                                                                     //
    return logout;                                                                                                   //
  })();                                                                                                              //
                                                                                                                     //
  /**                                                                                                                //
   * @summary Log out other clients logged in as the current user, but does not log out the client that calls this function.
   * @locus Client                                                                                                   //
   * @param {Function} [callback] Optional callback. Called with no arguments on success, or with a single `Error` argument on failure.
   */                                                                                                                //
                                                                                                                     //
  AccountsClient.prototype.logoutOtherClients = (function () {                                                       // 11
    function logoutOtherClients(callback) {                                                                          // 83
      var self = this;                                                                                               // 84
                                                                                                                     //
      // We need to make two method calls: one to replace our current token,                                         //
      // and another to remove all tokens except the current one. We want to                                         //
      // call these two methods one after the other, without any other                                               //
      // methods running between them. For example, we don't want `logout`                                           //
      // to be called in between our two method calls (otherwise the second                                          //
      // method call would return an error). Another example: we don't want                                          //
      // logout to be called before the callback for `getNewToken`;                                                  //
      // otherwise we would momentarily log the user out and then write a                                            //
      // new token to localStorage.                                                                                  //
      //                                                                                                             //
      // To accomplish this, we make both calls as wait methods, and queue                                           //
      // them one after the other, without spinning off the event loop in                                            //
      // between. Even though we queue `removeOtherTokens` before                                                    //
      // `getNewToken`, we won't actually send the `removeOtherTokens` call                                          //
      // until the `getNewToken` callback has finished running, because they                                         //
      // are both wait methods.                                                                                      //
      self.connection.apply('getNewToken', [], { wait: true }, function (err, result) {                              // 102
        if (!err) {                                                                                                  // 107
          self._storeLoginToken(self.userId(), result.token, result.tokenExpires);                                   // 108
        }                                                                                                            //
      });                                                                                                            //
                                                                                                                     //
      self.connection.apply('removeOtherTokens', [], { wait: true }, function (err) {                                // 117
        callback && callback(err);                                                                                   // 122
      });                                                                                                            //
    }                                                                                                                //
                                                                                                                     //
    return logoutOtherClients;                                                                                       //
  })();                                                                                                              //
                                                                                                                     //
  return AccountsClient;                                                                                             //
})(AccountsCommon);                                                                                                  //
                                                                                                                     //
var Ap = AccountsClient.prototype;                                                                                   // 128
                                                                                                                     //
/**                                                                                                                  //
 * @summary True if a login method (such as `Meteor.loginWithPassword`, `Meteor.loginWithFacebook`, or `Accounts.createUser`) is currently in progress. A reactive data source.
 * @locus Client                                                                                                     //
 */                                                                                                                  //
Meteor.loggingIn = function () {                                                                                     // 134
  return Accounts.loggingIn();                                                                                       // 135
};                                                                                                                   //
                                                                                                                     //
///                                                                                                                  //
/// LOGIN METHODS                                                                                                    //
///                                                                                                                  //
                                                                                                                     //
// Call a login method on the server.                                                                                //
//                                                                                                                   //
// A login method is a method which on success calls `this.setUserId(id)` and                                        //
// `Accounts._setLoginToken` on the server and returns an object with fields                                         //
// 'id' (containing the user id), 'token' (containing a resume token), and                                           //
// optionally `tokenExpires`.                                                                                        //
//                                                                                                                   //
// This function takes care of:                                                                                      //
//   - Updating the Meteor.loggingIn() reactive data source                                                          //
//   - Calling the method in 'wait' mode                                                                             //
//   - On success, saving the resume token to localStorage                                                           //
//   - On success, calling Accounts.connection.setUserId()                                                           //
//   - Setting up an onReconnect handler which logs in with                                                          //
//     the resume token                                                                                              //
//                                                                                                                   //
// Options:                                                                                                          //
// - methodName: The method to call (default 'login')                                                                //
// - methodArguments: The arguments for the method                                                                   //
// - validateResult: If provided, will be called with the result of the                                              //
//                 method. If it throws, the client will not be logged in (and                                       //
//                 its error will be passed to the callback).                                                        //
// - userCallback: Will be called with no arguments once the user is fully                                           //
//                 logged in, or with the error on error.                                                            //
//                                                                                                                   //
Ap.callLoginMethod = function (options) {                                                                            // 166
  var self = this;                                                                                                   // 167
                                                                                                                     //
  options = _.extend({                                                                                               // 169
    methodName: 'login',                                                                                             // 170
    methodArguments: [{}],                                                                                           // 171
    _suppressLoggingIn: false                                                                                        // 172
  }, options);                                                                                                       //
                                                                                                                     //
  // Set defaults for callback arguments to no-op functions; make sure we                                            //
  // override falsey values too.                                                                                     //
  _.each(['validateResult', 'userCallback'], function (f) {                                                          // 177
    if (!options[f]) options[f] = function () {};                                                                    // 178
  });                                                                                                                //
                                                                                                                     //
  // Prepare callbacks: user provided and onLogin/onLoginFailure hooks.                                              //
  var loginCallbacks = _.once(function (error) {                                                                     // 183
    if (!error) {                                                                                                    // 184
      self._onLoginHook.each(function (callback) {                                                                   // 185
        callback();                                                                                                  // 186
        return true;                                                                                                 // 187
      });                                                                                                            //
    } else {                                                                                                         //
      self._onLoginFailureHook.each(function (callback) {                                                            // 190
        callback();                                                                                                  // 191
        return true;                                                                                                 // 192
      });                                                                                                            //
    }                                                                                                                //
    options.userCallback.apply(this, arguments);                                                                     // 195
  });                                                                                                                //
                                                                                                                     //
  var reconnected = false;                                                                                           // 198
                                                                                                                     //
  // We want to set up onReconnect as soon as we get a result token back from                                        //
  // the server, without having to wait for subscriptions to rerun. This is                                          //
  // because if we disconnect and reconnect between getting the result and                                           //
  // getting the results of subscription rerun, we WILL NOT re-send this                                             //
  // method (because we never re-send methods whose results we've received)                                          //
  // but we WILL call loggedInAndDataReadyCallback at "reconnect quiesce"                                            //
  // time. This will lead to makeClientLoggedIn(result.id) even though we                                            //
  // haven't actually sent a login method!                                                                           //
  //                                                                                                                 //
  // But by making sure that we send this "resume" login in that case (and                                           //
  // calling makeClientLoggedOut if it fails), we'll end up with an accurate                                         //
  // client-side userId. (It's important that livedata_connection guarantees                                         //
  // that the "reconnect quiesce"-time call to loggedInAndDataReadyCallback                                          //
  // will occur before the callback from the resume login call.)                                                     //
  var onResultReceived = function (err, result) {                                                                    // 214
    if (err || !result || !result.token) {                                                                           // 215
      // Leave onReconnect alone if there was an error, so that if the user was                                      //
      // already logged in they will still get logged in on reconnect.                                               //
      // See issue #4970.                                                                                            //
    } else {                                                                                                         //
        self.connection.onReconnect = function () {                                                                  // 220
          reconnected = true;                                                                                        // 221
          // If our token was updated in storage, use the latest one.                                                //
          var storedToken = self._storedLoginToken();                                                                // 223
          if (storedToken) {                                                                                         // 224
            result = {                                                                                               // 225
              token: storedToken,                                                                                    // 226
              tokenExpires: self._storedLoginTokenExpires()                                                          // 227
            };                                                                                                       //
          }                                                                                                          //
          if (!result.tokenExpires) result.tokenExpires = self._tokenExpiration(new Date());                         // 230
          if (self._tokenExpiresSoon(result.tokenExpires)) {                                                         // 232
            self.makeClientLoggedOut();                                                                              // 233
          } else {                                                                                                   //
            self.callLoginMethod({                                                                                   // 235
              methodArguments: [{ resume: result.token }],                                                           // 236
              // Reconnect quiescence ensures that the user doesn't see an                                           //
              // intermediate state before the login method finishes. So we don't                                    //
              // need to show a logging-in animation.                                                                //
              _suppressLoggingIn: true,                                                                              // 240
              userCallback: function (error) {                                                                       // 241
                var storedTokenNow = self._storedLoginToken();                                                       // 242
                if (error) {                                                                                         // 243
                  // If we had a login error AND the current stored token is the                                     //
                  // one that we tried to log in with, then declare ourselves                                        //
                  // logged out. If there's a token in storage but it's not the                                      //
                  // token that we tried to log in with, we don't know anything                                      //
                  // about whether that token is valid or not, so do nothing. The                                    //
                  // periodic localStorage poll will decide if we are logged in or                                   //
                  // out with this token, if it hasn't already. Of course, even                                      //
                  // with this check, another tab could insert a new valid token                                     //
                  // immediately before we clear localStorage here, which would                                      //
                  // lead to both tabs being logged out, but by checking the token                                   //
                  // in storage right now we hope to make that unlikely to happen.                                   //
                  //                                                                                                 //
                  // If there is no token in storage right now, we don't have to                                     //
                  // do anything; whatever code removed the token from storage was                                   //
                  // responsible for calling `makeClientLoggedOut()`, or the                                         //
                  // periodic localStorage poll will call `makeClientLoggedOut`                                      //
                  // eventually if another tab wiped the token from storage.                                         //
                  if (storedTokenNow && storedTokenNow === result.token) {                                           // 261
                    self.makeClientLoggedOut();                                                                      // 262
                  }                                                                                                  //
                }                                                                                                    //
                // Possibly a weird callback to call, but better than nothing if                                     //
                // there is a reconnect between "login result received" and "data                                    //
                // ready".                                                                                           //
                loginCallbacks(error);                                                                               // 268
              } });                                                                                                  //
          }                                                                                                          //
        };                                                                                                           //
      }                                                                                                              //
  };                                                                                                                 //
                                                                                                                     //
  // This callback is called once the local cache of the current-user                                                //
  // subscription (and all subscriptions, in fact) are guaranteed to be up to                                        //
  // date.                                                                                                           //
  var loggedInAndDataReadyCallback = function (error, result) {                                                      // 278
    // If the login method returns its result but the connection is lost                                             //
    // before the data is in the local cache, it'll set an onReconnect (see                                          //
    // above). The onReconnect will try to log in using the token, and *it*                                          //
    // will call userCallback via its own version of this                                                            //
    // loggedInAndDataReadyCallback. So we don't have to do anything here.                                           //
    if (reconnected) return;                                                                                         // 284
                                                                                                                     //
    // Note that we need to call this even if _suppressLoggingIn is true,                                            //
    // because it could be matching a _setLoggingIn(true) from a                                                     //
    // half-completed pre-reconnect login method.                                                                    //
    self._setLoggingIn(false);                                                                                       // 290
    if (error || !result) {                                                                                          // 291
      error = error || new Error("No result from call to " + options.methodName);                                    // 292
      loginCallbacks(error);                                                                                         // 294
      return;                                                                                                        // 295
    }                                                                                                                //
    try {                                                                                                            // 297
      options.validateResult(result);                                                                                // 298
    } catch (e) {                                                                                                    //
      loginCallbacks(e);                                                                                             // 300
      return;                                                                                                        // 301
    }                                                                                                                //
                                                                                                                     //
    // Make the client logged in. (The user data should already be loaded!)                                          //
    self.makeClientLoggedIn(result.id, result.token, result.tokenExpires);                                           // 305
    loginCallbacks();                                                                                                // 306
  };                                                                                                                 //
                                                                                                                     //
  if (!options._suppressLoggingIn) self._setLoggingIn(true);                                                         // 309
  self.connection.apply(options.methodName, options.methodArguments, { wait: true, onResultReceived: onResultReceived }, loggedInAndDataReadyCallback);
};                                                                                                                   //
                                                                                                                     //
Ap.makeClientLoggedOut = function () {                                                                               // 318
  this._unstoreLoginToken();                                                                                         // 319
  this.connection.setUserId(null);                                                                                   // 320
  this.connection.onReconnect = null;                                                                                // 321
};                                                                                                                   //
                                                                                                                     //
Ap.makeClientLoggedIn = function (userId, token, tokenExpires) {                                                     // 324
  this._storeLoginToken(userId, token, tokenExpires);                                                                // 325
  this.connection.setUserId(userId);                                                                                 // 326
};                                                                                                                   //
                                                                                                                     //
/**                                                                                                                  //
 * @summary Log the user out.                                                                                        //
 * @locus Client                                                                                                     //
 * @param {Function} [callback] Optional callback. Called with no arguments on success, or with a single `Error` argument on failure.
 */                                                                                                                  //
Meteor.logout = function (callback) {                                                                                // 334
  return Accounts.logout(callback);                                                                                  // 335
};                                                                                                                   //
                                                                                                                     //
/**                                                                                                                  //
 * @summary Log out other clients logged in as the current user, but does not log out the client that calls this function.
 * @locus Client                                                                                                     //
 * @param {Function} [callback] Optional callback. Called with no arguments on success, or with a single `Error` argument on failure.
 */                                                                                                                  //
Meteor.logoutOtherClients = function (callback) {                                                                    // 343
  return Accounts.logoutOtherClients(callback);                                                                      // 344
};                                                                                                                   //
                                                                                                                     //
///                                                                                                                  //
/// LOGIN SERVICES                                                                                                   //
///                                                                                                                  //
                                                                                                                     //
// A reactive function returning whether the loginServiceConfiguration                                               //
// subscription is ready. Used by accounts-ui to hide the login button                                               //
// until we have all the configuration loaded                                                                        //
//                                                                                                                   //
Ap.loginServicesConfigured = function () {                                                                           // 356
  return this._loginServicesHandle.ready();                                                                          // 357
};                                                                                                                   //
                                                                                                                     //
// Some login services such as the redirect login flow or the resume                                                 //
// login handler can log the user in at page load time.  The                                                         //
// Meteor.loginWithX functions have a callback argument, but the                                                     //
// callback function instance won't be in memory any longer if the                                                   //
// page was reloaded.  The `onPageLoadLogin` function allows a                                                       //
// callback to be registered for the case where the login was                                                        //
// initiated in a previous VM, and we now have the result of the login                                               //
// attempt in a new VM.                                                                                              //
                                                                                                                     //
// Register a callback to be called if we have information about a                                                   //
// login attempt at page load time.  Call the callback immediately if                                                //
// we already have the page load login attempt info, otherwise stash                                                 //
// the callback to be called if and when we do get the attempt info.                                                 //
//                                                                                                                   //
Ap.onPageLoadLogin = function (f) {                                                                                  // 375
  if (this._pageLoadLoginAttemptInfo) {                                                                              // 376
    f(this._pageLoadLoginAttemptInfo);                                                                               // 377
  } else {                                                                                                           //
    this._pageLoadLoginCallbacks.push(f);                                                                            // 379
  }                                                                                                                  //
};                                                                                                                   //
                                                                                                                     //
// Receive the information about the login attempt at page load time.                                                //
// Call registered callbacks, and also record the info in case                                                       //
// someone's callback hasn't been registered yet.                                                                    //
//                                                                                                                   //
Ap._pageLoadLogin = function (attemptInfo) {                                                                         // 388
  if (this._pageLoadLoginAttemptInfo) {                                                                              // 389
    Meteor._debug("Ignoring unexpected duplicate page load login attempt info");                                     // 390
    return;                                                                                                          // 391
  }                                                                                                                  //
                                                                                                                     //
  _.each(this._pageLoadLoginCallbacks, function (callback) {                                                         // 394
    callback(attemptInfo);                                                                                           // 395
  });                                                                                                                //
                                                                                                                     //
  this._pageLoadLoginCallbacks = [];                                                                                 // 398
  this._pageLoadLoginAttemptInfo = attemptInfo;                                                                      // 399
};                                                                                                                   //
                                                                                                                     //
///                                                                                                                  //
/// HANDLEBARS HELPERS                                                                                               //
///                                                                                                                  //
                                                                                                                     //
// If our app has a Blaze, register the {{currentUser}} and {{loggingIn}}                                            //
// global helpers.                                                                                                   //
if (Package.blaze) {                                                                                                 // 409
  /**                                                                                                                //
   * @global                                                                                                         //
   * @name  currentUser                                                                                              //
   * @isHelper true                                                                                                  //
   * @summary Calls [Meteor.user()](#meteor_user). Use `{{#if currentUser}}` to check whether the user is logged in.
   */                                                                                                                //
  Package.blaze.Blaze.Template.registerHelper('currentUser', function () {                                           // 416
    return Meteor.user();                                                                                            // 417
  });                                                                                                                //
                                                                                                                     //
  /**                                                                                                                //
   * @global                                                                                                         //
   * @name  loggingIn                                                                                                //
   * @isHelper true                                                                                                  //
   * @summary Calls [Meteor.loggingIn()](#meteor_loggingin).                                                         //
   */                                                                                                                //
  Package.blaze.Blaze.Template.registerHelper('loggingIn', function () {                                             // 426
    return Meteor.loggingIn();                                                                                       // 427
  });                                                                                                                //
}                                                                                                                    //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/accounts-base/url_client.js                                                                              //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var Ap = AccountsClient.prototype;                                                                                   // 1
                                                                                                                     //
// All of the special hash URLs we support for accounts interactions                                                 //
var accountsPaths = ["reset-password", "verify-email", "enroll-account"];                                            // 4
                                                                                                                     //
var savedHash = window.location.hash;                                                                                // 6
                                                                                                                     //
Ap._initUrlMatching = function () {                                                                                  // 8
  // By default, allow the autologin process to happen.                                                              //
  this._autoLoginEnabled = true;                                                                                     // 10
                                                                                                                     //
  // We only support one callback per URL.                                                                           //
  this._accountsCallbacks = {};                                                                                      // 13
                                                                                                                     //
  // Try to match the saved value of window.location.hash.                                                           //
  this._attemptToMatchHash();                                                                                        // 16
};                                                                                                                   //
                                                                                                                     //
// Separate out this functionality for testing                                                                       //
                                                                                                                     //
Ap._attemptToMatchHash = function () {                                                                               // 21
  attemptToMatchHash(this, savedHash, defaultSuccessHandler);                                                        // 22
};                                                                                                                   //
                                                                                                                     //
// Note that both arguments are optional and are currently only passed by                                            //
// accounts_url_tests.js.                                                                                            //
function attemptToMatchHash(accounts, hash, success) {                                                               // 27
  _.each(accountsPaths, function (urlPart) {                                                                         // 28
    var token;                                                                                                       // 29
                                                                                                                     //
    var tokenRegex = new RegExp("^\\#\\/" + urlPart + "\\/(.*)$");                                                   // 31
    var match = hash.match(tokenRegex);                                                                              // 32
                                                                                                                     //
    if (match) {                                                                                                     // 34
      token = match[1];                                                                                              // 35
                                                                                                                     //
      // XXX COMPAT WITH 0.9.3                                                                                       //
      if (urlPart === "reset-password") {                                                                            // 38
        accounts._resetPasswordToken = token;                                                                        // 39
      } else if (urlPart === "verify-email") {                                                                       //
        accounts._verifyEmailToken = token;                                                                          // 41
      } else if (urlPart === "enroll-account") {                                                                     //
        accounts._enrollAccountToken = token;                                                                        // 43
      }                                                                                                              //
    } else {                                                                                                         //
      return;                                                                                                        // 46
    }                                                                                                                //
                                                                                                                     //
    // If no handlers match the hash, then maybe it's meant to be consumed                                           //
    // by some entirely different code, so we only clear it the first time                                           //
    // a handler successfully matches. Note that later handlers reuse the                                            //
    // savedHash, so clearing window.location.hash here will not interfere                                           //
    // with their needs.                                                                                             //
    window.location.hash = "";                                                                                       // 54
                                                                                                                     //
    // Do some stuff with the token we matched                                                                       //
    success.call(accounts, token, urlPart);                                                                          // 57
  });                                                                                                                //
}                                                                                                                    //
                                                                                                                     //
function defaultSuccessHandler(token, urlPart) {                                                                     // 61
  var self = this;                                                                                                   // 62
                                                                                                                     //
  // put login in a suspended state to wait for the interaction to finish                                            //
  self._autoLoginEnabled = false;                                                                                    // 65
                                                                                                                     //
  // wait for other packages to register callbacks                                                                   //
  Meteor.startup(function () {                                                                                       // 68
    // if a callback has been registered for this kind of token, call it                                             //
    if (self._accountsCallbacks[urlPart]) {                                                                          // 70
      self._accountsCallbacks[urlPart](token, function () {                                                          // 71
        self._enableAutoLogin();                                                                                     // 72
      });                                                                                                            //
    }                                                                                                                //
  });                                                                                                                //
}                                                                                                                    //
                                                                                                                     //
// Export for testing                                                                                                //
AccountsTest = {                                                                                                     // 79
  attemptToMatchHash: function (hash, success) {                                                                     // 80
    return attemptToMatchHash(Accounts, hash, success);                                                              // 81
  }                                                                                                                  //
};                                                                                                                   //
                                                                                                                     //
// XXX these should be moved to accounts-password eventually. Right now                                              //
// this is prevented by the need to set autoLoginEnabled=false, but in                                               //
// some bright future we won't need to do that anymore.                                                              //
                                                                                                                     //
/**                                                                                                                  //
 * @summary Register a function to call when a reset password link is clicked                                        //
 * in an email sent by                                                                                               //
 * [`Accounts.sendResetPasswordEmail`](#accounts_sendresetpasswordemail).                                            //
 * This function should be called in top-level code, not inside                                                      //
 * `Meteor.startup()`.                                                                                               //
 * @memberof! Accounts                                                                                               //
 * @name onResetPasswordLink                                                                                         //
 * @param  {Function} callback The function to call. It is given two arguments:                                      //
 *                                                                                                                   //
 * 1. `token`: A password reset token that can be passed to                                                          //
 * [`Accounts.resetPassword`](#accounts_resetpassword).                                                              //
 * 2. `done`: A function to call when the password reset UI flow is complete. The normal                             //
 * login process is suspended until this function is called, so that the                                             //
 * password for user A can be reset even if user B was logged in.                                                    //
 * @locus Client                                                                                                     //
 */                                                                                                                  //
Ap.onResetPasswordLink = function (callback) {                                                                       // 106
  if (this._accountsCallbacks["reset-password"]) {                                                                   // 107
    Meteor._debug("Accounts.onResetPasswordLink was called more than once. " + "Only one callback added will be executed.");
  }                                                                                                                  //
                                                                                                                     //
  this._accountsCallbacks["reset-password"] = callback;                                                              // 112
};                                                                                                                   //
                                                                                                                     //
/**                                                                                                                  //
 * @summary Register a function to call when an email verification link is                                           //
 * clicked in an email sent by                                                                                       //
 * [`Accounts.sendVerificationEmail`](#accounts_sendverificationemail).                                              //
 * This function should be called in top-level code, not inside                                                      //
 * `Meteor.startup()`.                                                                                               //
 * @memberof! Accounts                                                                                               //
 * @name onEmailVerificationLink                                                                                     //
 * @param  {Function} callback The function to call. It is given two arguments:                                      //
 *                                                                                                                   //
 * 1. `token`: An email verification token that can be passed to                                                     //
 * [`Accounts.verifyEmail`](#accounts_verifyemail).                                                                  //
 * 2. `done`: A function to call when the email verification UI flow is complete.                                    //
 * The normal login process is suspended until this function is called, so                                           //
 * that the user can be notified that they are verifying their email before                                          //
 * being logged in.                                                                                                  //
 * @locus Client                                                                                                     //
 */                                                                                                                  //
Ap.onEmailVerificationLink = function (callback) {                                                                   // 133
  if (this._accountsCallbacks["verify-email"]) {                                                                     // 134
    Meteor._debug("Accounts.onEmailVerificationLink was called more than once. " + "Only one callback added will be executed.");
  }                                                                                                                  //
                                                                                                                     //
  this._accountsCallbacks["verify-email"] = callback;                                                                // 139
};                                                                                                                   //
                                                                                                                     //
/**                                                                                                                  //
 * @summary Register a function to call when an account enrollment link is                                           //
 * clicked in an email sent by                                                                                       //
 * [`Accounts.sendEnrollmentEmail`](#accounts_sendenrollmentemail).                                                  //
 * This function should be called in top-level code, not inside                                                      //
 * `Meteor.startup()`.                                                                                               //
 * @memberof! Accounts                                                                                               //
 * @name onEnrollmentLink                                                                                            //
 * @param  {Function} callback The function to call. It is given two arguments:                                      //
 *                                                                                                                   //
 * 1. `token`: A password reset token that can be passed to                                                          //
 * [`Accounts.resetPassword`](#accounts_resetpassword) to give the newly                                             //
 * enrolled account a password.                                                                                      //
 * 2. `done`: A function to call when the enrollment UI flow is complete.                                            //
 * The normal login process is suspended until this function is called, so that                                      //
 * user A can be enrolled even if user B was logged in.                                                              //
 * @locus Client                                                                                                     //
 */                                                                                                                  //
Ap.onEnrollmentLink = function (callback) {                                                                          // 160
  if (this._accountsCallbacks["enroll-account"]) {                                                                   // 161
    Meteor._debug("Accounts.onEnrollmentLink was called more than once. " + "Only one callback added will be executed.");
  }                                                                                                                  //
                                                                                                                     //
  this._accountsCallbacks["enroll-account"] = callback;                                                              // 166
};                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/accounts-base/localstorage_token.js                                                                      //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var Ap = AccountsClient.prototype;                                                                                   // 1
                                                                                                                     //
// This file deals with storing a login token and user id in the                                                     //
// browser's localStorage facility. It polls local storage every few                                                 //
// seconds to synchronize login state between multiple tabs in the same                                              //
// browser.                                                                                                          //
                                                                                                                     //
// Login with a Meteor access token. This is the only public function                                                //
// here.                                                                                                             //
Meteor.loginWithToken = function (token, callback) {                                                                 // 10
  return Accounts.loginWithToken(token, callback);                                                                   // 11
};                                                                                                                   //
                                                                                                                     //
Ap.loginWithToken = function (token, callback) {                                                                     // 14
  this.callLoginMethod({                                                                                             // 15
    methodArguments: [{                                                                                              // 16
      resume: token                                                                                                  // 17
    }],                                                                                                              //
    userCallback: callback                                                                                           // 19
  });                                                                                                                //
};                                                                                                                   //
                                                                                                                     //
// Semi-internal API. Call this function to re-enable auto login after                                               //
// if it was disabled at startup.                                                                                    //
Ap._enableAutoLogin = function () {                                                                                  // 25
  this._autoLoginEnabled = true;                                                                                     // 26
  this._pollStoredLoginToken();                                                                                      // 27
};                                                                                                                   //
                                                                                                                     //
///                                                                                                                  //
/// STORING                                                                                                          //
///                                                                                                                  //
                                                                                                                     //
// Call this from the top level of the test file for any test that does                                              //
// logging in and out, to protect multiple tabs running the same tests                                               //
// simultaneously from interfering with each others' localStorage.                                                   //
Ap._isolateLoginTokenForTest = function () {                                                                         // 38
  this.LOGIN_TOKEN_KEY = this.LOGIN_TOKEN_KEY + Random.id();                                                         // 39
  this.USER_ID_KEY = this.USER_ID_KEY + Random.id();                                                                 // 40
};                                                                                                                   //
                                                                                                                     //
Ap._storeLoginToken = function (userId, token, tokenExpires) {                                                       // 43
  Meteor._localStorage.setItem(this.USER_ID_KEY, userId);                                                            // 44
  Meteor._localStorage.setItem(this.LOGIN_TOKEN_KEY, token);                                                         // 45
  if (!tokenExpires) tokenExpires = this._tokenExpiration(new Date());                                               // 46
  Meteor._localStorage.setItem(this.LOGIN_TOKEN_EXPIRES_KEY, tokenExpires);                                          // 48
                                                                                                                     //
  // to ensure that the localstorage poller doesn't end up trying to                                                 //
  // connect a second time                                                                                           //
  this._lastLoginTokenWhenPolled = token;                                                                            // 52
};                                                                                                                   //
                                                                                                                     //
Ap._unstoreLoginToken = function () {                                                                                // 55
  Meteor._localStorage.removeItem(this.USER_ID_KEY);                                                                 // 56
  Meteor._localStorage.removeItem(this.LOGIN_TOKEN_KEY);                                                             // 57
  Meteor._localStorage.removeItem(this.LOGIN_TOKEN_EXPIRES_KEY);                                                     // 58
                                                                                                                     //
  // to ensure that the localstorage poller doesn't end up trying to                                                 //
  // connect a second time                                                                                           //
  this._lastLoginTokenWhenPolled = null;                                                                             // 62
};                                                                                                                   //
                                                                                                                     //
// This is private, but it is exported for now because it is used by a                                               //
// test in accounts-password.                                                                                        //
//                                                                                                                   //
Ap._storedLoginToken = function () {                                                                                 // 68
  return Meteor._localStorage.getItem(this.LOGIN_TOKEN_KEY);                                                         // 69
};                                                                                                                   //
                                                                                                                     //
Ap._storedLoginTokenExpires = function () {                                                                          // 72
  return Meteor._localStorage.getItem(this.LOGIN_TOKEN_EXPIRES_KEY);                                                 // 73
};                                                                                                                   //
                                                                                                                     //
Ap._storedUserId = function () {                                                                                     // 76
  return Meteor._localStorage.getItem(this.USER_ID_KEY);                                                             // 77
};                                                                                                                   //
                                                                                                                     //
Ap._unstoreLoginTokenIfExpiresSoon = function () {                                                                   // 80
  var tokenExpires = this._storedLoginTokenExpires();                                                                // 81
  if (tokenExpires && this._tokenExpiresSoon(new Date(tokenExpires))) {                                              // 82
    this._unstoreLoginToken();                                                                                       // 83
  }                                                                                                                  //
};                                                                                                                   //
                                                                                                                     //
///                                                                                                                  //
/// AUTO-LOGIN                                                                                                       //
///                                                                                                                  //
                                                                                                                     //
Ap._initLocalStorage = function () {                                                                                 // 91
  var self = this;                                                                                                   // 92
                                                                                                                     //
  // Key names to use in localStorage                                                                                //
  self.LOGIN_TOKEN_KEY = "Meteor.loginToken";                                                                        // 95
  self.LOGIN_TOKEN_EXPIRES_KEY = "Meteor.loginTokenExpires";                                                         // 96
  self.USER_ID_KEY = "Meteor.userId";                                                                                // 97
                                                                                                                     //
  var rootUrlPathPrefix = __meteor_runtime_config__.ROOT_URL_PATH_PREFIX;                                            // 99
  if (rootUrlPathPrefix || this.connection !== Meteor.connection) {                                                  // 100
    // We want to keep using the same keys for existing apps that do not                                             //
    // set a custom ROOT_URL_PATH_PREFIX, so that most users will not have                                           //
    // to log in again after an app updates to a version of Meteor that                                              //
    // contains this code, but it's generally preferable to namespace the                                            //
    // keys so that connections from distinct apps to distinct DDP URLs                                              //
    // will be distinct in Meteor._localStorage.                                                                     //
    var namespace = ":" + this.connection._stream.rawUrl;                                                            // 107
    if (rootUrlPathPrefix) {                                                                                         // 108
      namespace += ":" + rootUrlPathPrefix;                                                                          // 109
    }                                                                                                                //
    self.LOGIN_TOKEN_KEY += namespace;                                                                               // 111
    self.LOGIN_TOKEN_EXPIRES_KEY += namespace;                                                                       // 112
    self.USER_ID_KEY += namespace;                                                                                   // 113
  }                                                                                                                  //
                                                                                                                     //
  if (self._autoLoginEnabled) {                                                                                      // 116
    // Immediately try to log in via local storage, so that any DDP                                                  //
    // messages are sent after we have established our user account                                                  //
    self._unstoreLoginTokenIfExpiresSoon();                                                                          // 119
    var token = self._storedLoginToken();                                                                            // 120
    if (token) {                                                                                                     // 121
      // On startup, optimistically present us as logged in while the                                                //
      // request is in flight. This reduces page flicker on startup.                                                 //
      var userId = self._storedUserId();                                                                             // 124
      userId && self.connection.setUserId(userId);                                                                   // 125
      self.loginWithToken(token, function (err) {                                                                    // 126
        if (err) {                                                                                                   // 127
          Meteor._debug("Error logging in with token: " + err);                                                      // 128
          self.makeClientLoggedOut();                                                                                // 129
        }                                                                                                            //
                                                                                                                     //
        self._pageLoadLogin({                                                                                        // 132
          type: "resume",                                                                                            // 133
          allowed: !err,                                                                                             // 134
          error: err,                                                                                                // 135
          methodName: "login",                                                                                       // 136
          // XXX This is duplicate code with loginWithToken, but                                                     //
          // loginWithToken can also be called at other times besides                                                //
          // page load.                                                                                              //
          methodArguments: [{ resume: token }]                                                                       // 140
        });                                                                                                          //
      });                                                                                                            //
    }                                                                                                                //
  }                                                                                                                  //
                                                                                                                     //
  // Poll local storage every 3 seconds to login if someone logged in in                                             //
  // another tab                                                                                                     //
  self._lastLoginTokenWhenPolled = token;                                                                            // 148
                                                                                                                     //
  if (self._pollIntervalTimer) {                                                                                     // 150
    // Unlikely that _initLocalStorage will be called more than once for                                             //
    // the same AccountsClient instance, but just in case...                                                         //
    clearInterval(self._pollIntervalTimer);                                                                          // 153
  }                                                                                                                  //
                                                                                                                     //
  self._pollIntervalTimer = setInterval(function () {                                                                // 156
    self._pollStoredLoginToken();                                                                                    // 157
  }, 3000);                                                                                                          //
};                                                                                                                   //
                                                                                                                     //
Ap._pollStoredLoginToken = function () {                                                                             // 161
  var self = this;                                                                                                   // 162
                                                                                                                     //
  if (!self._autoLoginEnabled) {                                                                                     // 164
    return;                                                                                                          // 165
  }                                                                                                                  //
                                                                                                                     //
  var currentLoginToken = self._storedLoginToken();                                                                  // 168
                                                                                                                     //
  // != instead of !== just to make sure undefined and null are treated the same                                     //
  if (self._lastLoginTokenWhenPolled != currentLoginToken) {                                                         // 171
    if (currentLoginToken) {                                                                                         // 172
      self.loginWithToken(currentLoginToken, function (err) {                                                        // 173
        if (err) {                                                                                                   // 174
          self.makeClientLoggedOut();                                                                                // 175
        }                                                                                                            //
      });                                                                                                            //
    } else {                                                                                                         //
      self.logout();                                                                                                 // 179
    }                                                                                                                //
  }                                                                                                                  //
                                                                                                                     //
  self._lastLoginTokenWhenPolled = currentLoginToken;                                                                // 183
};                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/accounts-base/globals_client.js                                                                          //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
/**                                                                                                                  //
 * @namespace Accounts                                                                                               //
 * @summary The namespace for all client-side accounts-related methods.                                              //
 */                                                                                                                  //
Accounts = new AccountsClient();                                                                                     // 5
                                                                                                                     //
/**                                                                                                                  //
 * @summary A [Mongo.Collection](#collections) containing user documents.                                            //
 * @locus Anywhere                                                                                                   //
 * @type {Mongo.Collection}                                                                                          //
 */                                                                                                                  //
Meteor.users = Accounts.users;                                                                                       // 12
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['accounts-base'] = {
  Accounts: Accounts,
  AccountsClient: AccountsClient,
  AccountsTest: AccountsTest
};

})();
