import Ember from 'ember';

export default Ember.Component.extend({

  showRendered: false,

  renderedNote: Ember.computed('note.content', 'showRendered', function () {
    var content = this.get('note.content').toUpperCase();
    return this.get('showRendered') ? Ember.Handlebars.SafeString(content) : content;
  })

});
