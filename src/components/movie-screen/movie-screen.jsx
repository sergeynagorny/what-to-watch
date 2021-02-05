import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {AppRoute, MovieTab} from "../../const.js";
import {Operation as DataOperation} from "../../reducer/data/data";
import {getFilms, getActiveFilm} from "../../reducer/data/selectors";
import {getSimilarFilms} from "../../reducer/catalog/selectors";

import AppHeader from "../app-header/app-header";
import MovieHeader from "../movie-header/movie-header";
import AppFooter from "../app-footer/app-footer";
import PreviewCardList from "../preview-card-list/preview-card-list";
import MovieTabs from "../movie-tabs/movie-tabs";


const MovieScreen = (props) => {
  const {film, similarFilms, history} = props;
  const {
    id,
    title,
    background: {image, color},
    image: {poster}
  } = film;


  return (
    <Fragment>
      <section className="movie-card movie-card--full"
        style={{
          backgroundColor: color,
        }}
      >
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={image} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <AppHeader />

          <div className="movie-card__wrap">
            <MovieHeader history={history}>
              <Link to={`${AppRoute.MOVIE}/${id}${AppRoute.ADD_REVIEW}`} className="btn movie-card__button">
                Add review
              </Link>
            </MovieHeader>
          </div>

        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={poster} alt={`${title} poster`} width={218} height={327} />
            </div>

            <MovieTabs
              key={id + title}
              activeItem={MovieTab.OVERVIEW}
            />

          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <PreviewCardList
            films={similarFilms}
          />

        </section>

        <AppFooter />

      </div>
    </Fragment>
  );
};

MovieScreen.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.shape({
      poster: PropTypes.string.isRequired,
    }).isRequired,
    background: PropTypes.shape({
      image: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  history: PropTypes.object.isRequired,
  similarFilms: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  film: getActiveFilm(state),
  films: getFilms(state),
  similarFilms: getSimilarFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteFilms: () => {
    dispatch(DataOperation.loadFavoriteFilms());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieScreen);

export {MovieScreen};
