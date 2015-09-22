(function(){
Template.__checkName("pageNotFound");
Template["pageNotFound"] = new Template("Template.pageNotFound", (function() {
  var view = this;
  return HTML.Raw('<div class="container">\n    <h1>\n        Houston, we have a problem!!!\n    </h1>\n    <br>\n    <h3>\n        The page you\'re looking for was not found.\n      <br>\n        If you got here from an old permalink, it might be that something changed in the mean while...\n    </h3>\n  </div>');
}));

}).call(this);
