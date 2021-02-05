import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getActiveFilm} from "../../reducer/data/selectors";

import AppHeader from "../app-header/app-header";
import MovieHeader from "../movie-header/movie-header";
import Catalog from "../catalog/catalog";
import AppFooter from "../app-footer/app-footer";


const MainScreen = (props) => {
  const {film, history} = props;
  const {
    title,
    background: {image},
    image: {poster}
  } = film;

  return (
    <Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={image} alt={title} />
        </div>
        <h1 className="visually-hidden">WTW</h1>

        <AppHeader />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={poster} alt={`${title} poster`} width={218} height={327} />
            </div>

            <MovieHeader
              history={history}
            />

          </div>
        </div>
      </section>
      <div className="page-content">
        <Catalog />

        <AppFooter />
      </div>
    </Fragment>
  );
};


MainScreen.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.shape({
      poster: PropTypes.string.isRequired,
    }).isRequired,
    background: PropTypes.shape({
      image: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  film: getActiveFilm(state),
});

export default connect(mapStateToProps)(MainScreen);

export {MainScreen};
