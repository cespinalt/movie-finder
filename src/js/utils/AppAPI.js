const AppActions = require('../actions/AppActions');
const axios = require('axios');

module.exports = {
  searchMovies: (movie) => {
    axios.get('http://www.omdbapi.com/', {
      params: {
        s: movie.title,
      }
    })
    .then(res => {
      if(!res.data.Error) {
        AppActions.receiveMovieResults(res.data.Search);
      }
    })
    .catch(err => {
      console.log(err);
    });
  }
};
