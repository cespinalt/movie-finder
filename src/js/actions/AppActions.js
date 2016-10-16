const AppDispatcher = require('../dispatcher/AppDispatcher');
const AppConstants = require('../constants/AppConstants');

const AppActions = {
  searchMovies: movie => {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SEARCH_MOVIES,
      movie,
    });
  },
  receiveMovieResults: movies => {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_MOVIES_RESULTS,
      movies,
    })
  }
};

module.exports = AppActions;
