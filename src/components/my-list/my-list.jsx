import React from "react";
import PropTypes from "prop-types";

import {AppHeaderType} from "../../const";

import AppHeader from "../app-header/app-header";
import AppFooter from "../app-footer/app-footer";
import PreviewCardList from "../preview-card-list/preview-card-list";
import withLoading from "../../hocs/with-loading/with-loading";


const MyList = (props) => {
  const {films} = props;

  return (
    <div className="user-page">
      <AppHeader
        type={AppHeaderType.USER_PAGE}
        title={`My List`}
      />
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <PreviewCardList
          films={films}
        />
      </section>
      <AppFooter />
    </div>

  );
};

MyList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default withLoading(MyList);

