import React from "react";
import PropTypes from "prop-types";
import withLoading from "../../../../hocs/with-loading/with-loading";


const getSplitReviews = (array) => {
  return array.reduce((acc, item, index) => {
    acc[index % 2].push(item);
    return acc;
  }, [[], []]);
};

const TabsReviews = (props) => {
  const {reviews} = props;

  const splitReviews = getSplitReviews(reviews);

  return (
    <div className="movie-card__reviews movie-card__row">

      {splitReviews.map((reviewsGroup, index) =>
        <div key={index} className="movie-card__reviews-col">

          {reviewsGroup.map((review) => {
            const {description, author, score, date} = review;

            return (
              <div key={author} className="review">
                <blockquote className="review__quote">
                  <p className="review__text">{description}</p>

                  <footer className="review__details">
                    <cite className="review__author">{author}</cite>
                    <time className="review__date" dateTime={date.toISOString()}>{date.toDateString()}</time>
                  </footer>
                </blockquote>

                <div className="review__rating">{score}</div>
              </div>
            );
          })}

        </div>
      )}
    </div>
  );
};

TabsReviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  })).isRequired,
};


export default withLoading(TabsReviews);

