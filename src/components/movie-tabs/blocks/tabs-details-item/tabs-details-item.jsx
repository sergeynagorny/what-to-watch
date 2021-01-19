import React from "react";
import PropTypes from "prop-types";


const TabsDetailsItem = (props) => {
  const {name, children} = props;

  return (
    <p className="movie-card__details-item">
      <strong className="movie-card__details-name">{name}</strong>
      <span
        className="movie-card__details-value"
        style={{
          whiteSpace: `pre-line`,
        }}>
        {children}
      </span>
    </p>
  );
};

TabsDetailsItem.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default TabsDetailsItem;
