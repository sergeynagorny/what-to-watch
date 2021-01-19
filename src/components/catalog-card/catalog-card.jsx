import React from "react";
import PropTypes from "prop-types";

const CatalogCard = (props) => {
  const {film, onCatalogCardMouseEnter, onCatalogCardMouseLeave, renderPlayer} = props;
  const {id, title} = film;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={() => {
        onCatalogCardMouseEnter(id);
      }}
      onMouseLeave={() => {
        onCatalogCardMouseLeave();
      }}>
      <div className="small-movie-card__image">
        {renderPlayer()}
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

CatalogCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onCatalogCardMouseLeave: PropTypes.func.isRequired,
  onCatalogCardMouseEnter: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

export default CatalogCard;
