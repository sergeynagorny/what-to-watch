import React from "react";


const ACTIVE_ITEM_CLASS = `catalog__genres-item--active`;

const CatalogGenres = (props) => {
  const {activeGenre, allGenres, onCatalogGenresButtonClick} = props;

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

export default CatalogGenres;
