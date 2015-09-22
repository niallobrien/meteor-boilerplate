(function(){
Template.__checkName("nav");
Template["nav"] = new Template("Template.nav", (function() {
  var view = this;
  return HTML.NAV({
    "class": "top-bar",
    "data-topbar": "",
    role: "navigation"
  }, "\n  ", HTML.UL({
    "class": "title-area"
  }, "\n    ", HTML.LI({
    "class": "name"
  }, "\n      ", HTML.H1(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "home");
    }
  }, "Home")), "\n    "), "\n     ", HTML.Raw('<!-- Remove the class "menu-icon" to get rid of menu icon. Take out "Menu" to just have icon alone -->'), "\n    ", HTML.Raw('<li class="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>'), "\n  "), "\n\n  ", HTML.SECTION({
    "class": "top-bar-section"
  }, "\n    ", HTML.Raw("<!-- Right Nav Section -->"), "\n    ", HTML.UL({
    "class": "right"
  }, "\n      ", HTML.LI({
    "class": "active"
  }, Spacebars.include(view.lookupTemplate("atNavButton"))), "\n    "), "\n\n    ", HTML.Raw("<!-- Left Nav Section -->"), "\n    ", HTML.UL({
    "class": "left"
  }, "\n      ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "private");
    }
  }, "Private")), "\n    "), "\n  "), "\n");
}));

}).call(this);
