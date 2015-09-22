(function(){
Template.__checkName("private");
Template["private"] = new Template("Template.private", (function() {
  var view = this;
  return HTML.Raw('<div class="container">\n    <div class="text-center">\n      <h1>This is private stuff!</h1>\n    </div>\n  </div>');
}));

}).call(this);
