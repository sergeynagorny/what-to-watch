import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";

import {createAPI} from "./api.js";
import {history as BrowserHistory} from "./history";

import reducer from "./reducer/reducer.js";
import {Operation as DataOperation} from "./reducer/data/data";
import {ActionCreator as UserActionCreator, AuthorizationStatus} from "./reducer/user/user";

import App from "./components/app/app";


const onUnauthorized = (error) => {
  store.dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
  if (error.config.url !== `/login`) {
    BrowserHistory.push(`/login`);
  }
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);


const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>,
      document.querySelector(`#root`)
  );
};

Promise.all([
  store.dispatch(DataOperation.loadPromo()),
  store.dispatch(DataOperation.loadFilms()),
]).then(() => init());

