import React from "react";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page";


const App = (props) => {
  const {movieTitles} = props;

  return (
    <MainPage
      movieTitles={movieTitles}
    />
  );
};

App.propTypes = {
  movieTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;
