import { moduleForModel, test } from 'ember-qunit';

moduleForModel('note', 'Unit | Model | note', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});


test('it can create a new note', function(assert) {
	let note = this.createRecord();
	assert.valid(note);
});