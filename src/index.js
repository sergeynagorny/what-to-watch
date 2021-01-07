import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";


const movieTitles = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Pulp Fiction`];

const init = () => {
  ReactDOM.render(
      <App
        movieTitles={movieTitles}
      />,
      document.querySelector(`#root`)
  );
};

init();
