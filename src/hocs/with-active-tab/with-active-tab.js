import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {MovieTab} from "../../const.js";
import TabsOverview from "../../components/movie-tabs/blocks/tabs-overview/tabs-overview.jsx";
import TabsDetails from "../../components/movie-tabs/blocks/tabs-details/tabs-details.jsx";
import TabsReviews from "../../components/movie-tabs/blocks/tabs-reviews/tabs-reviews.jsx";


const withActiveTab = (Component) => {
  class WithActiveTab extends PureComponent {
    constructor(props) {
      super(props);

      this.tabClickHandler = this.tabClickHandler.bind(this);

      this.state = {
        activeTab: MovieTab.OVERVIEW,
      };
    }

    tabClickHandler(currentTab) {
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
        <Component
          tabs={Object.values(MovieTab)}
          activeTab={activeTab}
          tabClickHandler={this.tabClickHandler}
        >
          {this._renderTabContent()}
        </Component>
      );
    }
  }

  WithActiveTab.propTypes = {
    film: PropTypes.object.isRequired,
    reviews: PropTypes.array.isRequired,
  };

  return WithActiveTab;
};

export default withActiveTab;
