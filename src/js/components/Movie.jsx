const React = require('react');
const Component = require('react').Component;

class Movie extends Component {
  render() {
    const movie = this.props.movie;
    const link = `http://www.imdb.com/title/${movie.imdbID}`
    return(
      <div className="well clearfix">
        <div className="col-md-4">
          <img className="thumbnail img-responsive" src={movie.Poster} />
        </div>

        <div className="col-md-8">
          <h4>{movie.Title}</h4>

          <ul className="list-group">
            <li className="list-group-item">Year Release: {movie.Year}</li>
            <li className="list-group-item">IMDB ID: {movie.imdbID}</li>
          </ul>

          <a className="btn btn-primary" target="_blank"
            href={link}>View on IMDB</a>
        </div>
      </div>
    )
  }
}

module.exports = Movie;
