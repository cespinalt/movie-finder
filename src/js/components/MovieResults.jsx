const React = require('react');
const Component = require('react').Component;
const Movie = require('./Movie.jsx');

class MovieResults extends Component {
    render() {
      return(
        <div>
          <h3 className="text-center"></h3>
          {this.props.movies.map((movie, i) => {
            return <Movie key={i} movie={movie} />
          })}
        </div>
      )
    }
}

module.exports = MovieResults;
