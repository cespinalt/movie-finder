const React = require('react');
const Component = require('react').Component;
const AppActions = require('../actions/AppActions');
const AppStores = require('../stores/AppStores');
const SearchForm = require('./SearchForm.jsx');

function getAppState() {
  return {
    movies: AppStores.getMovieResults()
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    console.log(this.state.movies);
    return(
      <div className="container">
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2">
            <div className="well">
              <SearchForm />
            </div>
          </div>
        </div>
      </div>
    )
  }

}

module.exports = App;
