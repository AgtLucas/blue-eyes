/**
 * Home View
 *
 */

var HomeView = Backbone.View.extend({

  tagName: "section",

  className: "main-content",

  initialize: function() {
    this.listenTon(this.model, "change", this.render);
  },

  render: function() {

  }

});