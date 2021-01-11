import React from "react";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page";


const showMoreButtonClickHandler = () => { };

const App = (props) => {
  const {films} = props;

  return (
    <MainPage
      films={films}
      onShowMoreButtonClick={showMoreButtonClickHandler}
    />
  );
};

App.propTypes = {
  films: PropTypes.array.isRequired,
};

export default App;
