(function(){if (Meteor.isServer) {
  Meteor.startup(function() {
    BrowserPolicy.framing.disallow()
    BrowserPolicy.content.disallowInlineScripts()
    BrowserPolicy.content.disallowEval()
    BrowserPolicy.content.allowInlineStyles()
    BrowserPolicy.content.allowFontDataUrl()

    var trusted = [
      'fonts.googleapis.com',
      'fonts.gstatic.com',
      '*.google-analytics.com'
    ]

    _.each(trusted, function(origin) {
      origin = "https://" + origin
      BrowserPolicy.content.allowOriginForAll(origin)
    })

  })
}
}).call(this);

//# sourceMappingURL=browser-policy.js.map
