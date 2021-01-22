import React from "react";
import PropTypes from "prop-types";

import {MovieTab} from "../../const.js";
import TabsOverview from "./blocks/tabs-overview/tabs-overview.jsx";
import TabsDetails from "./blocks/tabs-details/tabs-details.jsx";
import TabsReviews from "./blocks/tabs-reviews/tabs-reviews.jsx";

const ACTIVE_TAB_CLASS = `movie-nav__item--active`;


const MovieTabs = (props) => {
  const {allTabs, activeItem, itemClickHandler, film, reviews} = props;

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
          <TabsReviews reviews={reviews} />
        );
    }

    return null;
  };

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">

          {allTabs.map((tab) => {
            const activeClass = tab === activeItem ? `${ACTIVE_TAB_CLASS}` : ``;

            return (
              <li className={`movie-nav__item ${activeClass}`}
                key={tab}
              >
                <a className="movie-nav__link" href="#"
                  onClick={(evt) => {
                    evt.preventDefault();
                    itemClickHandler(tab);
                  }}
                >
                  {tab}
                </a>
              </li>
            );
          })}

        </ul>
      </nav>

      {renderActiveTab()}

    </div >
  );
};

MovieTabs.propTypes = {
  film: PropTypes.object.isRequired,
  reviews: PropTypes.array.isRequired,
  allTabs: PropTypes.array.isRequired,
  activeItem: PropTypes.string.isRequired,
  itemClickHandler: PropTypes.func.isRequired,
};

export default MovieTabs;
