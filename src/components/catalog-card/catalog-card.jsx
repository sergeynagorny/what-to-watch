import React from "react";
import PropTypes from "prop-types";


const CatalogCard = (props) => {
  const {id, title, onCatalogCardMouseEnter, onCatalogCardMouseLeave, children} = props;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={() => {
        onCatalogCardMouseEnter(id);
      }}
      onMouseLeave={() => {
        onCatalogCardMouseLeave();
      }}>
      <div className="small-movie-card__image">
        {children}
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

CatalogCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onCatalogCardMouseLeave: PropTypes.func.isRequired,
  onCatalogCardMouseEnter: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default CatalogCard;
