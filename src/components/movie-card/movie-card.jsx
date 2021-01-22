import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCardHeader from "../movie-card-header/movie-card-header";
import AppHeader from "../app-header/app-header";
import MovieTabs from "../movie-tabs/movie-tabs";
import {MovieCardType} from "../../const.js";
import {MovieTab} from "../../const.js";


import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
const MovieTabsWrapper = withActiveItem(MovieTabs);
// import withActiveTab from "../../hocs/with-active-tab/with-active-tab.js";
// const MovieTabsWrapped = withActiveTab(MovieTabs);

class MovieCard extends PureComponent {
  _renderPosterImg(poster, title) {
    return (
      <img src={poster} alt={title + ` poster`} width="218" height="327" />
    );
  }

  _renderBackgroundImg(image, title) {
    return <img src={image} alt={title} />;
  }

  _renderCardPreview(film) {
    const {background: {image}, poster, title} = film;

    return (
      <section className="movie-card">
        <div className="movie-card__bg">
          {this._renderBackgroundImg(image, title)}
        </div>
        <AppHeader />
        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              {this._renderPosterImg(poster, title)}
            </div>
            <MovieCardHeader film={film} />
          </div>
        </div>
      </section>
    );
  }

  _renderCardFull(film, reviews) {
    const {background: {color, image}, poster, title} = film;

    return (
      <section
        className="movie-card movie-card--full"
        style={{
          backgroundColor: color,
        }}
      >
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            {this._renderBackgroundImg(image, title)}
          </div>

          <AppHeader />

          <div className="movie-card__wrap">
            <MovieCardHeader film={film} />
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              {this._renderPosterImg(poster, title)}
            </div>
            <MovieTabsWrapper
              film={film}
              reviews={reviews}
              allTabs={Object.values(MovieTab)}
              defaultActiveItem={MovieTab.OVERVIEW}
            />
          </div>
        </div>

      </section>
    );
  }

  render() {
    const {film, reviews, type} = this.props;

    switch (type) {
      case MovieCardType.FULL:
        return this._renderCardFull(film, reviews);

      case MovieCardType.PREVIEW:
        return this._renderCardPreview(film);
    }

    return (
      <div></div>
    );
  }
}

MovieCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    background: PropTypes.shape({
      color: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  type: PropTypes.string.isRequired,
  reviews: PropTypes.array,
};

export default MovieCard;
