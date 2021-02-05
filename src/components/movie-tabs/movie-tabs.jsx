import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {MovieTab} from "../../const";
import {Operation as ReviewsOperation} from "../../reducer/reviews/reviews";
import {getActiveFilm} from "../../reducer/data/selectors";
import {getReviews} from "../../reducer/reviews/selectors";

import TabsOverview from "./blocks/tabs-overview/tabs-overview";
import TabsDetails from "./blocks/tabs-details/tabs-details";
import TabsReviews from "./blocks/tabs-reviews/tabs-reviews";
import withActiveItem from "../../hocs/with-active-item/with-active-item";

const ACTIVE_TAB_CLASS = `movie-nav__item--active`;


const MovieTabs = (props) => {
  const {
    allTabs,
    activeItem,
    itemClickHandler,
    film,
    reviews,
    loadReviews,
  } = props;


  const renderActiveTab = () => {
    switch (activeItem) {
      case MovieTab.OVERVIEW:
        return (
          <TabsOverview film={film} />
        );

      case MovieTab.DETAILS:
        return (
          <TabsDetails film={film} />
        );

      case MovieTab.REVIEWS:
        return (
          <TabsReviews
            reviews={reviews}
            isLoading={reviews}
            dispatch={() => {
              loadReviews(film.id);
            }}
          />
        );
    }

    return null;
  };

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">

          {allTabs.map((tab) => (
            <li className={`movie-nav__item ${tab === activeItem ? `${ACTIVE_TAB_CLASS}` : ``}`} key={tab}>
              <a className="movie-nav__link" href="#"
                onClick={(evt) => {
                  evt.preventDefault();
                  itemClickHandler(tab);
                }}
              >
                {tab}
              </a>
            </li>
          ))}

        </ul>
      </nav>

      {renderActiveTab()}

    </div >
  );
};

MovieTabs.propTypes = {
  film: PropTypes.object.isRequired,
  reviews: PropTypes.array,
  allTabs: PropTypes.array.isRequired,
  activeItem: PropTypes.string.isRequired,
  itemClickHandler: PropTypes.func.isRequired,
  loadReviews: PropTypes.func.isRequired,
};

MovieTabs.defaultProps = {
  allTabs: Object.values(MovieTab),
  activeItem: MovieTab.OVERVIEW,
};

const mapStateToProps = (state) => ({
  film: getActiveFilm(state),
  reviews: getReviews(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadReviews: (id) => {
    dispatch(ReviewsOperation.loadReviews(id));
  },
});

export {MovieTabs};

export default connect(mapStateToProps, (mapDispatchToProps))(withActiveItem(MovieTabs));
