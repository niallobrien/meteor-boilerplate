'use strict'

FlowRouter.route('/', {
  name: "home",
  //action: function(params, queryParams) {
  action: function() {
    BlazeLayout.render( 'masterLayout', Meteor.app.layout())
  }
})

FlowRouter.route('/private', {
  name: "private",
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action: function() {
    BlazeLayout.render('masterLayout', Meteor.app.layout({main: "private"}))
  }
})

FlowRouter.notFound = {
  action: function() {
    BlazeLayout.render('masterLayout', Meteor.app.layout({main: 'pageNotFound'}))
  }
}

//Routes
AccountsTemplates.configureRoute('changePwd')
AccountsTemplates.configureRoute('forgotPwd')
AccountsTemplates.configureRoute('resetPwd')
AccountsTemplates.configureRoute('signIn')
AccountsTemplates.configureRoute('signUp')
AccountsTemplates.configureRoute('verifyEmail')
