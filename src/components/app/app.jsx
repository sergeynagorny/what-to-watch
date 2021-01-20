import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";

import Catalog from "../catalog/catalog.jsx";
import MovieCard from "../movie-card/movie-card";

import {ActionCreator} from "../../reducer.js";
import {MovieCardType} from "../../const.js";
import filmDetails from "../../mocks/film-details.js";
import filmReviews from "../../mocks/film-reviews.js";

const showMoreButtonClickHandler = () => { };

class App extends PureComponent {
  render() {
    const {films, filmsShownCount, filmsByGenre, allGenres, activeGenre, onCatalogGenresButtonClick, onCatalogButtonClick} = this.props;

    return (
      <BrowserRouter>
        <Switch>

          <Route exact path="/">
            <MovieCard
              type={MovieCardType.PREVIEW}
              film={filmDetails}
              onShowMoreButtonClick={showMoreButtonClickHandler}
            />
            <Catalog
              onCatalogGenresButtonClick={onCatalogGenresButtonClick}
              onCatalogButtonClick={onCatalogButtonClick}
              activeGenre={activeGenre}
              films={filmsByGenre}
              allGenres={allGenres}
              count={filmsShownCount}
            />
          </Route>

          <Route exact path="/movie-page">
            <MovieCard
              type={MovieCardType.FULL}
              film={filmDetails}
              reviews={filmReviews}
              onShowMoreButtonClick={showMoreButtonClickHandler}
            />
            <Catalog
              onCatalogGenresButtonClick={onCatalogGenresButtonClick}
              onCatalogButtonClick={onCatalogButtonClick}
              activeGenre={activeGenre}
              films={filmsByGenre}
              allGenres={allGenres}
              count={filmsShownCount}
            />
          </Route>

          <Route exact path="/movie-page/details">

          </Route>

          <Route exact path="/movie-page/reviews">

          </Route>

        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  films: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  activeGenre: state.activeGenre,
  films: state.films,
  allGenres: state.allGenres,
  filmsByGenre: state.filmsByGenre,
  filmsShownCount: state.filmsShownCount,
});

const mapDispatchToProps = (dispatch) => ({
  onCatalogButtonClick: () => {
    dispatch(ActionCreator.addFilmsShownCount());
  },
  onCatalogGenresButtonClick: (genre) => {
    dispatch(ActionCreator.getFilmsByGenre(genre));
    dispatch(ActionCreator.setGenre(genre));
    dispatch(ActionCreator.resetFilmsShownCount());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
