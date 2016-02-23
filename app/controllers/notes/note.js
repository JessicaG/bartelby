import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    changeValue (val) {
      this.set('value', value)
    },
    saveNote() {
      this.get('model').save();
    }
  }
});
