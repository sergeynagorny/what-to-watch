import React, {Fragment} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getUserAvatar, getAuthorizationStatus} from "../../reducer/user/selectors";
import {AuthorizationStatus} from "../../reducer/user/user";
import {AppHeaderType, AppRoute} from "../../const";
import {Link} from "react-router-dom";

import AppLogo from "../app-logo/app-logo";


const renderTitle = (title) => {
  return (
    <h1 className="page-title user-page__title">{title}</h1>
  );
};

const renderUserBlock = (status, avatar) => {
  switch (status) {
    case AuthorizationStatus.NO_AUTH:
      return (
        <div className="user-block">
          <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>
        </div>
      );

    case AuthorizationStatus.AUTH:
      return (
        <Link to={AppRoute.MY_LIST} className="user-block">
          <div className="user-block__avatar">
            <img src={`${avatar}`} alt="User avatar" width={63} height={63} />
          </div>
        </Link>
      );
  }

  return null;
};

const AppHeader = (props) => {
  const {
    authorizationStatus,
    avatar,
    title,
    children,
    isUserBlockVisible,
    type,
  } = props;

  return (
    <Fragment>
      <h1 className="visually-hidden">WTW</h1>

      <header className={`page-header ${type}__head`} >

        <AppLogo />

        {children}

        {title ? renderTitle(title) : ``}

        {isUserBlockVisible ? renderUserBlock(authorizationStatus, avatar) : ``}

      </header>
    </Fragment >
  );
};

AppHeader.defaultProps = {
  isUserBlockVisible: true,
  type: AppHeaderType.MOVIE_CARD,
};

AppHeader.propTypes = {
  avatar: PropTypes.string,
  authorizationStatus: PropTypes.string.isRequired,
  isUserBlockVisible: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.element,
};

const mapStateToProps = (state) => ({
  avatar: getUserAvatar(state),
  authorizationStatus: getAuthorizationStatus(state),
});

export {AppHeader};

export default connect(mapStateToProps)(AppHeader);
