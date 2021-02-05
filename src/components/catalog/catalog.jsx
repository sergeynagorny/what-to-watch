import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getFilmsByGenre, getActiveGenre, getAllGenres, getShownFilmsCount} from "../../reducer/catalog/selectors.js";
import {ActionCreator as CatalogActionCreator} from "../../reducer/catalog/catalog";

import CatalogGenres from "../catalog-genres/catalog-genres.jsx";
import PreviewCardList from "../preview-card-list/preview-card-list.jsx";


const renderShowMoreButton = (callback) => (
  <div className="catalog__more">
    <button className="catalog__button" type="button"
      onClick={callback}
    >
      Show more
    </button>
  </div>
);

const Catalog = (props) => {
  const {
    films,
    activeGenre,
    allGenres,
    onGenresItemClick,
    onShowMoreButtonClick,
    shownFilmsCount,
  } = props;

  const isShowMoreButtonVisible = shownFilmsCount < films.length;

  return (
    <div className="page-content">
      <section className="catalog">

        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <CatalogGenres
          allGenres={allGenres}
          activeGenre={activeGenre}
          itemClickHandler={onGenresItemClick}
        />

        <PreviewCardList
          films={films.slice(0, shownFilmsCount)}
        />

        {isShowMoreButtonVisible ? renderShowMoreButton(onShowMoreButtonClick) : ``}

      </section>
    </div>
  );
};


Catalog.propTypes = {
  films: PropTypes.array.isRequired,
  allGenres: PropTypes.array.isRequired,
  activeGenre: PropTypes.string.isRequired,
  shownFilmsCount: PropTypes.number.isRequired,
  onGenresItemClick: PropTypes.func.isRequired,
  onShowMoreButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  films: getFilmsByGenre(state),
  allGenres: getAllGenres(state),
  activeGenre: getActiveGenre(state),
  shownFilmsCount: getShownFilmsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenresItemClick: (genre) => {
    dispatch(CatalogActionCreator.setActiveGenre(genre));
  },
  onShowMoreButtonClick: () => {
    dispatch(CatalogActionCreator.setShownFilmsCount());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);

export {Catalog};

