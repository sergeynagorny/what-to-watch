import React from "react";
import PropTypes from "prop-types";
import AppHeader from "../app-header/app-header";
import {AppHeaderType} from "../../const";
import AppFooter from "../app-footer/app-footer";
import withSignInForm from "../../hocs/with-sign-in-form/with-sign-in-form";


const AuthScreen = (props) => {
  const {children} = props;

  return (
    <div className="user-page">
      <AppHeader
        type={AppHeaderType.USER_PAGE}
        title={`Sign in`}
        isUserBlockVisible={false}
      />
      <div className="sign-in user-page__content">
        {children}
      </div>
      <AppFooter />
    </div>

  );
};

AuthScreen.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withSignInForm(AuthScreen);
