import Ember from 'ember';
import DS from 'ember-data';

const electron = requireNode('electron');
const mainProcess = electron.remote.require('./electron');
const filesystem = mainProcess.filesystem;

export default DS.Adapter.extend({

  findAll() {
    return filesystem.all();
  },

  findRecord(store, type, id){
    return filesystem.find(id);
  },

  createRecord(store, type, record){
  	let data = this.serialize(record, {includeId: true});
  	return filesystem.write(data.id, data.content);
  },

  updateRecord(store, type, record) {
    let data = this.serialize(record, { includeId: true});
    return filesystem.write(data.id, data.content);
  },

  

});
