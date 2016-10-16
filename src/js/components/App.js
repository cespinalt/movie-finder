const React = require('react');
const Component = require('react').Component;
const AppActions = require('../actions/AppActions');
const AppStores = require('../stores/AppStores');
const SearchForm = require('./SearchForm.jsx');
const MovieResults = require('./MovieResults.jsx');

function getAppState() {
  return {
    movies: AppStores.getMovieResults()
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = getAppState();
  }

  componentDidMount() {
      AppStores.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    AppStores.removeChangeListener(this._onChange.bind(this));
  }

  _onChange() {
    this.setState(getAppState());
  }

  render() {
    let movies;
    if (this.state.movies.length === 0) {
      movies = '';
    } else {
      movies = <MovieResults movies={this.state.movies} />;
    }
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="well">
              <SearchForm />
            </div>
            {movies}
          </div>
        </div>
      </div>
    )
  }

}

module.exports = App;
