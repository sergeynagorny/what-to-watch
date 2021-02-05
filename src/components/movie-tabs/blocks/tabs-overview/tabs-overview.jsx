import React, {Fragment} from "react";
import PropTypes from "prop-types";


const STARRING_POSTSCRIPT = `and other`;

const getNamesList = (names) => {
  return names.length > 4 ? names.slice(0, 4).map((name) => name).join(`, `) + ` ` + STARRING_POSTSCRIPT : names.map((item) => item).join(`, `);
};

const TabsOverview = (props) => {
  const {film} = props;
  const {id, description, director, starring, rating} = film;
  const {score, count} = rating;

  return (
    <Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{score}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">Very good</span>
          <span className="movie-rating__count">{count} ratings</span>
        </p>
      </div>
      <div className="movie-card__text">
        {description}
        <p className="movie-card__director"><strong>Director: {director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {getNamesList(starring)}</strong></p>
      </div>
    </Fragment>
  );
};

TabsOverview.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rating: PropTypes.shape({
      score: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired,
  }).isRequired,
};

export default TabsOverview;
