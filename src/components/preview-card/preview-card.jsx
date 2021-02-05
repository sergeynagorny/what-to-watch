import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {AppRoute, smoothScrollToTop} from "../../const";
import withTrailerPlayer from "../../hocs/with-trailer-player/with-trailer-player";


const PreviewCard = (props) => {
  const {id, title, onPreviewCardMouseEnter, onPreviewCardMouseLeave, children} = props;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={() => {
        onPreviewCardMouseEnter(id);
      }}
      onMouseLeave={() => {
        onPreviewCardMouseLeave();
      }}>
      <div className="small-movie-card__image">
        {children}
      </div>
      <h3 className="small-movie-card__title">
        <Link
          to={`${AppRoute.MOVIE}/${id}`}
          className="small-movie-card__link" href="movie-page.html"
          onClick={smoothScrollToTop}
        >
          {title}
        </Link>
      </h3>
    </article>
  );
};

PreviewCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onPreviewCardMouseLeave: PropTypes.func.isRequired,
  onPreviewCardMouseEnter: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default withTrailerPlayer(PreviewCard);

