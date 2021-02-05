import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {ActionCreator as CatalogActionCreator} from "../../reducer/catalog/catalog";
import {AppRoute} from "../../const";
import {smoothScrollToTop} from "../../utils";


const AppLogo = (props) => {
  const {onLogoButtonClick, className} = props;

  return (
    <div className="logo">
      <Link to={AppRoute.ROOT}
        className={`logo__link ${className}`}
        onClick={() => {
          onLogoButtonClick();
          smoothScrollToTop();
        }}
      >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
};

AppLogo.propTypes = {
  onLogoButtonClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  onLogoButtonClick: () => {
    dispatch(CatalogActionCreator.resetCatalog());
  }
});

export default connect(null, mapDispatchToProps)(AppLogo);

export {AppLogo};

