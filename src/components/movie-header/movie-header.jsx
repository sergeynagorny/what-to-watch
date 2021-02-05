import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";
import {connect} from "react-redux";
import {ActionCreator as DataActionCreator} from "../../reducer/data/data";
import {getActiveFilm} from "../../reducer/data/selectors";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {AuthorizationStatus} from "../../reducer/user/user";


const MovieHeader = (props) => {
  const {film, authorizationStatus, onAddToMyLisButtonClick, children, history} = props;
  const {
    id,
    title,
    genre,
    released,
    isFavorite
  } = film;

  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{title}</h2>

      <p className="movie-card__meta">

        <span className="movie-card__genre">
          {genre}
        </span>

        <span className="movie-card__year">
          {released}
        </span>

      </p>

      <div className="movie-card__buttons">
        <Link to={`${AppRoute.MOVIE}/${id}${AppRoute.PLAY}`} className="btn btn--play movie-card__button" type="button">
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </Link>
        <button
          className="btn btn--list movie-card__button"
          type="button"
          onClick={() => {
            /**
             * synthetic fix for broken server
             * otherwise, i would use AXIOS interceptor
             */
            if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
              history.push(AppRoute.LOGIN);
            } else {
              onAddToMyLisButtonClick(film, isFavorite);
            }
          }}
        >
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref={isFavorite ? `#in-list` : `#add`}></use>
          </svg>
          <span>My list</span>
        </button>
        {children}
      </div>
    </div>
  );
};

MovieHeader.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  onAddToMyLisButtonClick: PropTypes.func.isRequired,
  children: PropTypes.element,
};

const mapStateToProps = (state) => ({
  film: getActiveFilm(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onAddToMyLisButtonClick: (film, prop) => {
    dispatch(DataActionCreator.updateFilmById(film, prop));
  },
});

export {MovieHeader};

export default connect(mapStateToProps, mapDispatchToProps)(MovieHeader);

