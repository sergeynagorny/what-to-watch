import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import TabsOverview from "./blocks/tabs-overview/tabs-overview.jsx";
import TabsDetails from "./blocks/tabs-details/tabs-details.jsx";
import TabsReviews from "./blocks/tabs-reviews/tabs-reviews.jsx";
import {MovieTab} from "../../const.js";


const ACTIVE_TAB_CLASS = `movie-nav__item--active`;

class MovieTabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: MovieTab.OVERVIEW,
    };
  }

  _tabClickHandler(currentTab) {
    this.setState({
      activeTab: currentTab,
    });
  }

  _renderTabContent() {
    const {film, reviews} = this.props;

    switch (this.state.activeTab) {
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
  }

  render() {
    const {activeTab} = this.state;

    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {Object.values(MovieTab).map((tab) => {
              const activeClass = tab === activeTab ? `${ACTIVE_TAB_CLASS}` : ``;

              return (
                <li key={tab} className={`movie-nav__item ${activeClass}`}>
                  <a className="movie-nav__link" href="#"
                    onClick={(evt) => {
                      evt.preventDefault();
                      this._tabClickHandler(tab);
                    }}>
                    {tab}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        {this._renderTabContent()}
      </div>
    );
  }
}

MovieTabs.propTypes = {
  film: PropTypes.object.isRequired,
  reviews: PropTypes.array.isRequired,
};

export default MovieTabs;
