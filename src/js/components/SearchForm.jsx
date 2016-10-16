const React = require('react');
const Component = require('react').Component;
const AppActions = require('../actions/AppActions');
const AppStores = require('../stores/AppStores');

class SearchForm extends Component {
  render() {
    return(
      <div className="search-form">
        <h1 className="text-center">Search For A Movie</h1>
        <form onSubmit={this.onSubmitHandler.bind(this)}>
          <div className="form-group">
            <input className="form-control" ref="title"
            placeholder="Enter a movie title..." />
          </div>
          <button className="btn btn-primary btn-block">Search Movies</button>
        </form>
      </div>
    )
  }

  onSubmitHandler(e) {
    e.preventDefault();
    const movie = {
      title: this.refs.title.value,
    }

    AppActions.searchMovies(movie);
  }

}

module.exports = SearchForm;
