import React from "react";
import {GenresList} from "../../const.js";


// const ACTIVE_ITEM_CLASS = `catalog__genres-item--active`;

const CatalogGenres = () => {
  return (
    <ul className="catalog__genres-list">
      {Object.values(GenresList).map((genre) =>
        <li key={genre} className="catalog__genres-item">
          <a href="#" className="catalog__genres-link"
            onClick={(evt) => {
              evt.preventDefault();
            }}
          >
            {genre}
          </a>
        </li>
      )}
    </ul>
  );
};

export default CatalogGenres;
