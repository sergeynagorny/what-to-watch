import React, {forwardRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {AppRoute} from "../../const";
import {Operation as ReviewsOperation} from "../../reducer/reviews/reviews";
import {getActiveFilm} from "../../reducer/data/selectors";

import withAddReviewForm from "../../hocs/with-add-review-form/with-add-review-form";
import AppHeader from "../app-header/app-header";


const AddReviewScreen = forwardRef((props, ref) => {
  const {film, history, formData, handleInputChange, onReviewSubmit} = props;
  const {
    id,
    title,
    background: {image, color},
    image: {poster}
  } = film;


  return (
    <section className="movie-card movie-card--full"
      style={{
        backgroundColor: color,
      }}
    >
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={image} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <AppHeader>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.MOVIE}/${id}`} href="movie-page.html" className="breadcrumbs__link">{title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
        </AppHeader>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={poster} alt={`${title} poster`} width="218" height="327" />
        </div>
      </div>
      <div className="add-review">
        <form action="#" className="add-review__form"
          ref={ref}
          onChange={(evt) => {
            handleInputChange(evt);
          }}
          onSubmit={(evt) => {
            evt.preventDefault();
            onReviewSubmit(formData, () => {
              history.goBack();
            });
          }}
        >
          <div className="rating">
            <div className="rating__stars">
              <input className="rating__input" id="star-1" type="radio" name="rating" value="1" />
              <label className="rating__label" htmlFor="star-1">Rating 1</label>

              <input className="rating__input" id="star-2" type="radio" name="rating" value="2" />
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input className="rating__input" id="star-3" type="radio" name="rating" value="3" defaultChecked={true} />
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input className="rating__input" id="star-4" type="radio" name="rating" value="4" />
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input className="rating__input" id="star-5" type="radio" name="rating" value="5" />
              <label className="rating__label" htmlFor="star-5">Rating 5</label>
            </div>
          </div>

          <div className="add-review__text"
            style={{
              backgroundColor: color,
              boxShadow: `0px 5px 20px 0 rgba(0, 0, 0, 0.25)`,
            }}
          >
            <textarea
              className="add-review__textarea" name="review" id="review" placeholder="Review text"></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>
    </section>
  );
});

AddReviewScreen.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.shape({
      poster: PropTypes.string.isRequired,
    }).isRequired,
    background: PropTypes.shape({
      color: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  history: PropTypes.object.isRequired,
  formData: PropTypes.object.isRequired,
  onReviewSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  film: getActiveFilm(state),
});

const mapDispatchToProps = (dispatch) => ({
  onReviewSubmit: (data, callback) => {
    dispatch(ReviewsOperation.sendReview(data, callback));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withAddReviewForm(AddReviewScreen));

export {AddReviewScreen};

AddReviewScreen.displayName = `AddReviewScreen`;
