const AppDispatcher = require('../dispatcher/AppDispatcher');
const AppConstants = require('../constants/AppConstants');
const EventEmitter = require('events').EventEmitter;
const assign = require('object-assign');
const AppAPI = require('../utils/AppAPI');

const CHANGE_EVENT = 'change';
const movies = [];
const selected = '';

const AppStores = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.remve(CHANGE_EVENT, callback)
  }
});

AppDispatcher.register((playload) => {
  const action = playload.action;

  switch(action.actionType) {

  }

  return true;
});

module.exports = AppStores;
