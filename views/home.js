/**
 * Home View
 *
 */
 
'use strict'; 

var HomeView = Backbone.View.extend({

  tagName: "section",

  className: "main-content",

  initialize: function() {
    this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    // TODO:
    // this.$el.attr();
  }

});
