import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";

import {AppRoute} from "../../const.js";
import {history as browserHistory} from "../../history";

import {Operation as UserOperation} from "../../reducer/user/user";
import {Operation as DataOperation} from "../../reducer/data/data";
import {ActionCreator as DataActionCreator} from "../../reducer/data/data";
import {getFilms, getPromoId, getActiveFilm, getFavoriteFilms} from '../../reducer/data/selectors';

import MainScreen from "../../components/main-screen/main-screen";
import MovieScreen from "../movie-screen/movie-screen";
import AuthScreen from "../auth-screen/auth-screen";
import Player from "../player/player";
import MyList from "../my-list/my-list";
import PrivateRoute from "../private-route/private-route";
import AddReviewScreen from "../add-review-screen/add-review-screen.jsx";


const App = (props) => {
  const {
    films,
    promoId,
    activeFilm,
    favoriteFilms,
    login,
    loadFavoriteFilms,
    setActiveFilm,
  } = props;


  return (
    <BrowserRouter history={browserHistory}>
      <Switch>

        <Route
          exact path={AppRoute.LOGIN}
          render={(props) =>
            <AuthScreen
              {...props}
              onSubmit={login}
            />
          }
        />

        <Route
          exact path={AppRoute.ROOT}
          render={({history}) => {
            setActiveFilm(films, promoId);

            return (
              <MainScreen
                history={history}
              />
            );
          }
          }
        />

        <Route
          path={AppRoute.MOVIE + AppRoute.ID + AppRoute.PLAY}
          render={({match, history}) => {
            setActiveFilm(films, match.params.id);

            return (
              <Player
                film={activeFilm}
                onExitButtonClick={() => {
                  history.goBack();
                }}
              />
            );
          }}
        />

        <PrivateRoute
          exact={false}
          path={AppRoute.MOVIE + AppRoute.ID + AppRoute.ADD_REVIEW}
          render={({match, history}) => {
            setActiveFilm(films, match.params.id);

            return (
              <AddReviewScreen
                history={history}
              />
            );
          }
          }
        />

        <Route
          path={AppRoute.MOVIE + AppRoute.ID}
          render={({match, history}) => {
            setActiveFilm(films, match.params.id);

            return (
              <MovieScreen
                history={history}
              />
            );
          }}
        />

        <PrivateRoute
          path={AppRoute.MY_LIST}
          exact={true}
          render={() =>
            <MyList
              films={favoriteFilms}
              isLoading={favoriteFilms}
              dispatch={() => {
                loadFavoriteFilms();
              }}
            />
          }
        />

        <Route
          render={() =>
            <h1>404</h1>
          }
        />

      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.array.isRequired,
  promoId: PropTypes.number.isRequired,
  activeFilm: PropTypes.object,
  favoriteFilms: PropTypes.array,

  login: PropTypes.func.isRequired,
  setActiveFilm: PropTypes.func.isRequired,
  loadFavoriteFilms: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
  promoId: getPromoId(state),
  activeFilm: getActiveFilm(state),
  favoriteFilms: getFavoriteFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  setActiveFilm: (films, id) => {
    dispatch(DataActionCreator.setActiveFilm(films, id));
  },
  loadFavoriteFilms: () => {
    dispatch(DataOperation.loadFavoriteFilms());
  },
  login: (authData, callback) => {
    dispatch(UserOperation.login(authData, callback));
    dispatch(DataOperation.loadUserFilms());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

export {App};
