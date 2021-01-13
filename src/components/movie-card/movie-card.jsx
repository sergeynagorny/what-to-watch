import React from "react";
import PropTypes from "prop-types";

const MovieCard = (props) => {
  const {film, onMovieCardMouseLeave, onMovieCardMouseEnter, renderPlayer} = props;
  const {id, title} = film;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={() => {
        onMovieCardMouseEnter(id);
      }}
      onMouseLeave={() => {
        onMovieCardMouseLeave();
      }}>
      <div className="small-movie-card__image">
        {renderPlayer()}
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onMovieCardMouseLeave: PropTypes.func.isRequired,
  onMovieCardMouseEnter: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

export default MovieCard;
