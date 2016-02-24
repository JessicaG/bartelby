import Ember from 'ember';

export default Ember.Controller.extend({
	newNoteTitle: null,
	newNoteContent: null,
	actions: {
		createNote(){
			this.store.createRecord('note', {
				id: this.get('newNoteTitle'),
				content: this.get('newNoteContent')
			}).save().then(() => {
				this.set('newNoteTitle', null);
				this.set('newNoteContent', null);
			});
		}
  }
});
