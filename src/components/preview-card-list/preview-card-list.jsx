import React from "react";
import PropTypes from "prop-types";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import withPreviewCards from "../../hocs/with-preview-cards/with-preview-cards";


const PreviewCardList = (props) => {
  const {children} = props;

  return (
    <div className="catalog__movies-list">
      {children}
    </div>
  );
};

PreviewCardList.propTypes = {
  children: PropTypes.array.isRequired,
};


export default withActiveItem(withPreviewCards(PreviewCardList));
