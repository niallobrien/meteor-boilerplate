(function(){
Template.__checkName("main");
Template["main"] = new Template("Template.main", (function() {
  var view = this;
  return HTML.Raw('<div class="container">\n    <div class="text-center">\n      <h1>Hello World!</h1>\n    </div>\n  </div>');
}));

}).call(this);
