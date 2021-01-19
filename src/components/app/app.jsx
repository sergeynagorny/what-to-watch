import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MovieCard from "../movie-card/movie-card";
import Catalog from "../catalog/catalog.jsx";
import {MovieCardType} from "../../const.js";

import films from "../../mocks/films.js";
import filmDetails from "../../mocks/film-details.js";
import filmReviews from "../../mocks/film-reviews.js";

const showMoreButtonClickHandler = () => { };

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>

          <Route exact path="/">
            <MovieCard
              type={MovieCardType.PREVIEW}
              film={filmDetails}
              onShowMoreButtonClick={showMoreButtonClickHandler}
            />
            <Catalog films={films} />
          </Route>

          <Route exact path="/movie-page">
            <MovieCard
              type={MovieCardType.FULL}
              film={filmDetails}
              reviews={filmReviews}
              onShowMoreButtonClick={showMoreButtonClickHandler}
            />
            <Catalog films={films} />
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

export default App;
