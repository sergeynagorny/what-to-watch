import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";

import Catalog from "../catalog/catalog.jsx";
import Player from "../player/player.jsx";
import MovieCard from "../movie-card/movie-card";

import {ActionCreator} from "../../reducer.js";
import {MovieCardType} from "../../const.js";
import filmDetails from "../../mocks/film-details.js";
import filmReviews from "../../mocks/film-reviews.js";

import withShowMoreButton from "../../hocs/with-show-more-button/with-show-more-button.js";
import withMoviePlayer from "../../hocs/with-movie-player/with-movie-player";
const PlayerWrapped = withMoviePlayer(Player);

const CatalogWrapped = withShowMoreButton(Catalog);

const showMoreButtonClickHandler = () => { };

class App extends PureComponent {
  render() {
    const {
      filmsShownCount,
      filmsByGenre,
      allGenres,
      activeGenre,
      onCatalogButtonClick,
      onCatalogGenresButtonClick,
    } = this.props;

    return (
      <BrowserRouter>
        <Switch>

          <Route exact path="/">
            <MovieCard
              type={MovieCardType.PREVIEW}
              film={filmDetails}
              onShowMoreButtonClick={showMoreButtonClickHandler}
            />
            <CatalogWrapped
              films={filmsByGenre}
              count={filmsShownCount}
              allGenres={allGenres}
              activeGenre={activeGenre}
              onCatalogButtonClick={onCatalogButtonClick}
              onCatalogGenresButtonClick={onCatalogGenresButtonClick}
            />
          </Route>

          <Route exact path="/movie-page">
            <MovieCard
              type={MovieCardType.FULL}
              film={filmDetails}
              reviews={filmReviews}
              onShowMoreButtonClick={showMoreButtonClickHandler}
            />
            <CatalogWrapped
              films={filmsByGenre}
              count={filmsShownCount}
              allGenres={allGenres}
              activeGenre={activeGenre}
              onCatalogButtonClick={onCatalogButtonClick}
              onCatalogGenresButtonClick={onCatalogGenresButtonClick}
            />
          </Route>

          <Route exact path="/movie-page/details">

          </Route>

          <Route exact path="/movie-page/reviews">

          </Route>

          <Route exact path="/play">
            <PlayerWrapped
              src={filmDetails.src}
              title={filmDetails.title}
              poster={filmDetails.background.image}
            />
          </Route>

        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  films: PropTypes.array.isRequired,
  filmsShownCount: PropTypes.number.isRequired,
  filmsByGenre: PropTypes.array.isRequired,
  allGenres: PropTypes.array.isRequired,
  activeGenre: PropTypes.string.isRequired,
  onCatalogButtonClick: PropTypes.func.isRequired,
  onCatalogGenresButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.films,
  filmsByGenre: state.filmsByGenre,
  filmsShownCount: state.filmsShownCount,
  allGenres: state.allGenres,
  activeGenre: state.activeGenre,
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
