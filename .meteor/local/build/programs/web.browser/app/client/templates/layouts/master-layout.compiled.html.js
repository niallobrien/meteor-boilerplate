(function(){
Template.__checkName("masterLayout");
Template["masterLayout"] = new Template("Template.masterLayout", (function() {
  var view = this;
  return [ HTML.DIV({
    id: "content"
  }, "\n    ", Blaze._TemplateWith(function() {
    return {
      template: Spacebars.call(view.lookup("nav"))
    };
  }, function() {
    return Spacebars.include(function() {
      return Spacebars.call(Template.__dynamic);
    });
  }), "\n    ", Blaze._TemplateWith(function() {
    return {
      template: Spacebars.call(view.lookup("main"))
    };
  }, function() {
    return Spacebars.include(function() {
      return Spacebars.call(Template.__dynamic);
    });
  }), "\n  "), "\n  ", Blaze._TemplateWith(function() {
    return {
      template: Spacebars.call(view.lookup("footer"))
    };
  }, function() {
    return Spacebars.include(function() {
      return Spacebars.call(Template.__dynamic);
    });
  }) ];
}));

}).call(this);
