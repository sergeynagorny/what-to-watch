import React from "react";
import PropTypes from "prop-types";


const ACTIVE_ITEM_CLASS = `catalog__genres-item--active`;

const CatalogGenres = (props) => {

  const {
    allGenres,
    activeGenre,
    onCatalogGenresButtonClick
  } = props;

  return (
    <ul className="catalog__genres-list">
      {allGenres.map((genre) => {
        const activeClass = genre === activeGenre ? `${ACTIVE_ITEM_CLASS}` : ``;

        return (
          <li key={genre} className={`catalog__genres-item ${activeClass}`}>
            <a href="#" className="catalog__genres-link"
              onClick={(evt) => {
                evt.preventDefault();
                onCatalogGenresButtonClick(genre);
              }}
            >
              {genre}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

CatalogGenres.propTypes = {
  allGenres: PropTypes.array.isRequired,
  activeGenre: PropTypes.string.isRequired,
  onCatalogGenresButtonClick: PropTypes.func.isRequired,
};

export default CatalogGenres;
