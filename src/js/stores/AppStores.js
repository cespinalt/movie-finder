const AppDispatcher = require('../dispatcher/AppDispatcher');
const AppConstants = require('../constants/AppConstants');
const EventEmitter = require('events').EventEmitter;
const assign = require('object-assign');
const AppAPI = require('../utils/AppAPI');

const CHANGE_EVENT = 'change';
let _movies = [];
const _selected = '';

const AppStores = assign({}, EventEmitter.prototype, {
  setMovieResults: function(movies) {
    _movies = movies;
  },
  getMovieResults: function() {
    return _movies;
  },
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
    case AppConstants.SEARCH_MOVIES:
      AppAPI.searchMovies(action.movie);
      AppStores.emit(CHANGE_EVENT);
    break;

    case AppConstants.RECEIVE_MOVIES_RESULTS:
      AppStores.setMovieResults(action.movies);
      AppStores.emit(CHANGE_EVENT);
    break;
  }

  return true;
});

module.exports = AppStores;
