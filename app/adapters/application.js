import Ember from 'ember';
import DS from 'ember-data';

// let fakeData = [
//   { id: 'hello.md', content: 'This is a note.' },
//   { id: 'byebye.md', content: 'This is another note.' },
// ];
const electron = requireNode('electron');
const mainProcess = electron.remote.require('./electron');
const filesystem = mainProcess.filesystem;

export default DS.Adapter.extend({

  findAll() {
    return filesystem.all();
  },

  createRecord(store, type, record){
  	let data = this.serialize(record, {includeId: true});
  	return filesystem.write(data.id, data.content);
   }

});