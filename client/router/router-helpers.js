'use strict'
// Router & Layout helper(s)
Meteor.app = {
  layout: function(source) {
    var layoutObj = {
      nav: 'nav',
      footer: 'footer',
      main: 'main'
    }

      if (typeof source === 'undefined' || null) {
      return layoutObj
    }

    for (var property in source) {
      if ( source.hasOwnProperty(property) ) {
        var sourceProperty = source[ property ]
        layoutObj[ property ] = sourceProperty
      }
    }
    return layoutObj
  }
}
