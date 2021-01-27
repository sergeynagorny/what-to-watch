import React from "react";
import PropTypes from "prop-types";
import CatalogGenres from "../catalog-genres/catalog-genres.jsx";
import CatalogList from "../catalog-list/catalog-list.jsx";
import AppFooter from "../app-footer/app-footer.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import withCardHover from "../../hocs/with-card-hover/with-card-hover.js";

const CatalogGenresWrapped = withActiveItem(CatalogGenres);
const CatalogListWrapped = withActiveItem(withCardHover(CatalogList));


const Catalog = (props) => {
  const {
    films,
    count,
    allGenres,
    activeGenre,
    onCatalogButtonClick,
    onCatalogGenresButtonClick,
    renderShowMoreButton,
  } = props;

  const filmsShown = films.slice(0, count);
  const isCatalogButtonShowing = count <= films.length;

  return (
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <CatalogGenresWrapped
          allGenres={allGenres}
          defaultActiveItem={activeGenre}
          onCatalogGenresButtonClick={onCatalogGenresButtonClick}
        />

        <CatalogListWrapped
          films={filmsShown}
          defaultActiveItem={-1}
        />

        {renderShowMoreButton(onCatalogButtonClick)}

        {/* {isCatalogButtonShowing ? _renderCatalogButton(onCatalogButtonClick) : ``} */}

      </section>

      <AppFooter />

    </div>
  );
};

Catalog.propTypes = {
  films: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
  allGenres: PropTypes.array.isRequired,
  activeGenre: PropTypes.string.isRequired,
  onCatalogButtonClick: PropTypes.func.isRequired,
  onCatalogGenresButtonClick: PropTypes.func.isRequired,
  renderShowMoreButton: PropTypes.func.isRequired,
};

export default Catalog;
