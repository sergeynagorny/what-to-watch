import React from "react";
import PropTypes from "prop-types";


const MovieCard = (props) => {
  const {film, onMovieCardHover} = props;
  const {title, poster} = film;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={() => {
        onMovieCardHover(film);
      }}>
      <div className="small-movie-card__image">
        <img width="280" height="175"
          src={poster}
          alt={title}
        />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  }).isRequired,
  onMovieCardHover: PropTypes.func.isRequired,
};

export default MovieCard;
