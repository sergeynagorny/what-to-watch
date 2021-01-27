import React from "react";
import PropTypes from "prop-types";


const CatalogList = (props) => {
  const {children} = props;

  return (
    <div className="catalog__movies-list">
      {children}
    </div>
  );
};

CatalogList.propTypes = {
  children: PropTypes.array.isRequired,
};

export default CatalogList;
