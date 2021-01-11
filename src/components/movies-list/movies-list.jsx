import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card";

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.movieCardHoverHandler = this.movieCardHoverHandler.bind(this);

    this.state = {
      activeFilm: null,
    };
  }

  movieCardHoverHandler(film) {
    this.setState({
      activeFilm: film,
    });
  }


  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">

        {films.map((film) =>
          <MovieCard
            key={film.title}
            film={film}
            onMovieCardHover={this.movieCardHoverHandler}
          />
        )}

      </div>
    );
  }
}


MoviesList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default MoviesList;
