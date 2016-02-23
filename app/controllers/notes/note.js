import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveNote() {
      this.get('model').save();
    },
    
    changeValue (val) {
      this.set('value', value)
    }
  }
});
