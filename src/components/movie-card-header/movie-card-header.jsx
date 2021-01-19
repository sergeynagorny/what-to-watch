import React from "react";
import PropTypes from "prop-types";


const MovieCardHeader = (props) => {
  const {film} = props;
  const {title, genre, released} = film;

  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{title}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">
          {genre.map((item) => item).join(`, `)}
        </span>
        <span className="movie-card__year">
          {String(released.getFullYear())}
        </span>
      </p>

      <div className="movie-card__buttons">
        <button className="btn btn--play movie-card__button" type="button">
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </button>
        <button className="btn btn--list movie-card__button" type="button">
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#add"></use>
          </svg>
          <span>My list</span>
        </button>
        <button className="btn btn--list movie-card__button" type="button">
          <span>Add review</span>
        </button>
      </div>
    </div>
  );
};

MovieCardHeader.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.array.isRequired,
    released: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
};

export default MovieCardHeader;
