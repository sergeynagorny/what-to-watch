import React from "react";
import PropTypes from "prop-types";
import TabsDetailsItem from "../tabs-details-item/tabs-details-item.jsx";
import {convertMinutesToDuration} from "../../../../utils.js";
import {TabsDetailsItemName} from "../../../../const.js";


const TabsDetails = (props) => {
  const {film} = props;
  const {director, starring, runtime, genre, released} = film;

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">

        <TabsDetailsItem name={TabsDetailsItemName.DIRECTOR}>
          {director}
        </TabsDetailsItem>

        <TabsDetailsItem name={TabsDetailsItemName.STARRING}>
          {starring.map((item) => item).join(`, \n`)}
        </TabsDetailsItem>

      </div>

      <div className="movie-card__text-col">

        <TabsDetailsItem name={TabsDetailsItemName.RUNTIME}>
          {convertMinutesToDuration(runtime)}
        </TabsDetailsItem>

        <TabsDetailsItem name={TabsDetailsItemName.GENRE}>
          {genre}
        </TabsDetailsItem>

        <TabsDetailsItem name={TabsDetailsItemName.RELEASED}>
          {String(released)}
        </TabsDetailsItem>

      </div>
    </div>
  );
};

TabsDetails.propTypes = {
  film: PropTypes.shape({
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired,
    runtime: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
  }).isRequired,
};

export default TabsDetails;
