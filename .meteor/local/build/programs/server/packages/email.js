(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var _ = Package.underscore._;

/* Package-scope variables */
var Email, EmailTest, EmailInternals;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// packages/email/email.js                                                                                 //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
var Future = Npm.require('fibers/future');                                                                 // 1
var urlModule = Npm.require('url');                                                                        // 2
                                                                                                           // 3
Email = {};                                                                                                // 4
EmailTest = {};                                                                                            // 5
                                                                                                           // 6
EmailInternals = {                                                                                         // 7
  NpmModules: {                                                                                            // 8
    mailcomposer: {                                                                                        // 9
      version: Npm.require('mailcomposer/package.json').version,                                           // 10
      module: Npm.require('mailcomposer')                                                                  // 11
    }                                                                                                      // 12
  }                                                                                                        // 13
};                                                                                                         // 14
                                                                                                           // 15
var MailComposer = EmailInternals.NpmModules.mailcomposer.module.MailComposer;                             // 16
                                                                                                           // 17
var makePool = function (mailUrlString) {                                                                  // 18
  var mailUrl = urlModule.parse(mailUrlString);                                                            // 19
  if (mailUrl.protocol !== 'smtp:')                                                                        // 20
    throw new Error("Email protocol in $MAIL_URL (" +                                                      // 21
                    mailUrlString + ") must be 'smtp'");                                                   // 22
                                                                                                           // 23
  var port = +(mailUrl.port);                                                                              // 24
  var auth = false;                                                                                        // 25
  if (mailUrl.auth) {                                                                                      // 26
    var parts = mailUrl.auth.split(':', 2);                                                                // 27
    auth = {user: parts[0] && decodeURIComponent(parts[0]),                                                // 28
            pass: parts[1] && decodeURIComponent(parts[1])};                                               // 29
  }                                                                                                        // 30
                                                                                                           // 31
  var simplesmtp = Npm.require('simplesmtp');                                                              // 32
  var pool = simplesmtp.createClientPool(                                                                  // 33
    port,  // Defaults to 25                                                                               // 34
    mailUrl.hostname,  // Defaults to "localhost"                                                          // 35
    { secureConnection: (port === 465),                                                                    // 36
      // XXX allow maxConnections to be configured?                                                        // 37
      auth: auth });                                                                                       // 38
                                                                                                           // 39
  pool._future_wrapped_sendMail = _.bind(Future.wrap(pool.sendMail), pool);                                // 40
  return pool;                                                                                             // 41
};                                                                                                         // 42
                                                                                                           // 43
var getPool = _.once(function () {                                                                         // 44
  // We delay this check until the first call to Email.send, in case someone                               // 45
  // set process.env.MAIL_URL in startup code.                                                             // 46
  var url = process.env.MAIL_URL;                                                                          // 47
  if (! url)                                                                                               // 48
    return null;                                                                                           // 49
  return makePool(url);                                                                                    // 50
});                                                                                                        // 51
                                                                                                           // 52
var next_devmode_mail_id = 0;                                                                              // 53
var output_stream = process.stdout;                                                                        // 54
                                                                                                           // 55
// Testing hooks                                                                                           // 56
EmailTest.overrideOutputStream = function (stream) {                                                       // 57
  next_devmode_mail_id = 0;                                                                                // 58
  output_stream = stream;                                                                                  // 59
};                                                                                                         // 60
                                                                                                           // 61
EmailTest.restoreOutputStream = function () {                                                              // 62
  output_stream = process.stdout;                                                                          // 63
};                                                                                                         // 64
                                                                                                           // 65
var devModeSend = function (mc) {                                                                          // 66
  var devmode_mail_id = next_devmode_mail_id++;                                                            // 67
                                                                                                           // 68
  var stream = output_stream;                                                                              // 69
                                                                                                           // 70
  // This approach does not prevent other writers to stdout from interleaving.                             // 71
  stream.write("====== BEGIN MAIL #" + devmode_mail_id + " ======\n");                                     // 72
  stream.write("(Mail not sent; to enable sending, set the MAIL_URL " +                                    // 73
               "environment variable.)\n");                                                                // 74
  mc.streamMessage();                                                                                      // 75
  mc.pipe(stream, {end: false});                                                                           // 76
  var future = new Future;                                                                                 // 77
  mc.on('end', function () {                                                                               // 78
    stream.write("====== END MAIL #" + devmode_mail_id + " ======\n");                                     // 79
    future['return']();                                                                                    // 80
  });                                                                                                      // 81
  future.wait();                                                                                           // 82
};                                                                                                         // 83
                                                                                                           // 84
var smtpSend = function (pool, mc) {                                                                       // 85
  pool._future_wrapped_sendMail(mc).wait();                                                                // 86
};                                                                                                         // 87
                                                                                                           // 88
/**                                                                                                        // 89
 * Mock out email sending (eg, during a test.) This is private for now.                                    // 90
 *                                                                                                         // 91
 * f receives the arguments to Email.send and should return true to go                                     // 92
 * ahead and send the email (or at least, try subsequent hooks), or                                        // 93
 * false to skip sending.                                                                                  // 94
 */                                                                                                        // 95
var sendHooks = [];                                                                                        // 96
EmailTest.hookSend = function (f) {                                                                        // 97
  sendHooks.push(f);                                                                                       // 98
};                                                                                                         // 99
                                                                                                           // 100
// Old comment below                                                                                       // 101
/**                                                                                                        // 102
 * Send an email.                                                                                          // 103
 *                                                                                                         // 104
 * Connects to the mail server configured via the MAIL_URL environment                                     // 105
 * variable. If unset, prints formatted message to stdout. The "from" option                               // 106
 * is required, and at least one of "to", "cc", and "bcc" must be provided;                                // 107
 * all other options are optional.                                                                         // 108
 *                                                                                                         // 109
 * @param options                                                                                          // 110
 * @param options.from {String} RFC5322 "From:" address                                                    // 111
 * @param options.to {String|String[]} RFC5322 "To:" address[es]                                           // 112
 * @param options.cc {String|String[]} RFC5322 "Cc:" address[es]                                           // 113
 * @param options.bcc {String|String[]} RFC5322 "Bcc:" address[es]                                         // 114
 * @param options.replyTo {String|String[]} RFC5322 "Reply-To:" address[es]                                // 115
 * @param options.subject {String} RFC5322 "Subject:" line                                                 // 116
 * @param options.text {String} RFC5322 mail body (plain text)                                             // 117
 * @param options.html {String} RFC5322 mail body (HTML)                                                   // 118
 * @param options.headers {Object} custom RFC5322 headers (dictionary)                                     // 119
 */                                                                                                        // 120
                                                                                                           // 121
// New API doc comment below                                                                               // 122
/**                                                                                                        // 123
 * @summary Send an email. Throws an `Error` on failure to contact mail server                             // 124
 * or if mail server returns an error. All fields should match                                             // 125
 * [RFC5322](http://tools.ietf.org/html/rfc5322) specification.                                            // 126
 * @locus Server                                                                                           // 127
 * @param {Object} options                                                                                 // 128
 * @param {String} options.from "From:" address (required)                                                 // 129
 * @param {String|String[]} options.to,cc,bcc,replyTo                                                      // 130
 *   "To:", "Cc:", "Bcc:", and "Reply-To:" addresses                                                       // 131
 * @param {String} [options.subject]  "Subject:" line                                                      // 132
 * @param {String} [options.text|html] Mail body (in plain text and/or HTML)                               // 133
 * @param {Object} [options.headers] Dictionary of custom headers                                          // 134
 * @param {Object[]} [options.attachments] Array of attachment objects, as                                 // 135
 * described in the [mailcomposer documentation](https://github.com/andris9/mailcomposer#add-attachments).
 * @param {MailComposer} [options.mailComposer] A [MailComposer](https://github.com/andris9/mailcomposer)  // 137
 * object representing the message to be sent. Overrides all other options. You                            // 138
 * can access the `mailcomposer` npm module at                                                             // 139
 * `EmailInternals.NpmModules.mailcomposer.module`.                                                        // 140
 */                                                                                                        // 141
Email.send = function (options) {                                                                          // 142
  for (var i = 0; i < sendHooks.length; i++)                                                               // 143
    if (! sendHooks[i](options))                                                                           // 144
      return;                                                                                              // 145
                                                                                                           // 146
  var mc;                                                                                                  // 147
  if (options.mailComposer) {                                                                              // 148
    mc = options.mailComposer;                                                                             // 149
  } else {                                                                                                 // 150
    mc = new MailComposer();                                                                               // 151
                                                                                                           // 152
    // setup message data                                                                                  // 153
    mc.setMessageOption({                                                                                  // 154
      from: options.from,                                                                                  // 155
      to: options.to,                                                                                      // 156
      cc: options.cc,                                                                                      // 157
      bcc: options.bcc,                                                                                    // 158
      replyTo: options.replyTo,                                                                            // 159
      subject: options.subject,                                                                            // 160
      text: options.text,                                                                                  // 161
      html: options.html                                                                                   // 162
    });                                                                                                    // 163
                                                                                                           // 164
    _.each(options.headers, function (value, name) {                                                       // 165
      mc.addHeader(name, value);                                                                           // 166
    });                                                                                                    // 167
                                                                                                           // 168
    _.each(options.attachments, function(attachment){                                                      // 169
      mc.addAttachment(attachment);                                                                        // 170
    });                                                                                                    // 171
  }                                                                                                        // 172
                                                                                                           // 173
  var pool = getPool();                                                                                    // 174
  if (pool) {                                                                                              // 175
    smtpSend(pool, mc);                                                                                    // 176
  } else {                                                                                                 // 177
    devModeSend(mc);                                                                                       // 178
  }                                                                                                        // 179
};                                                                                                         // 180
                                                                                                           // 181
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package.email = {
  Email: Email,
  EmailInternals: EmailInternals,
  EmailTest: EmailTest
};

})();

//# sourceMappingURL=email.js.map
