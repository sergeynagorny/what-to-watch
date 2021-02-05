import {extend} from "../../utils.js";


const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userData: {
    id: null,
    name: null,
    email: null,
    avatar: null,
  },
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_USER_DATA: `SET_USER_DATA`,
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },
  setUserData: (data) => {
    return {
      type: ActionType.SET_USER_DATA,
      payload: {
        id: data.id,
        email: data.email,
        name: data.name,
        avatar: data.avatar_url,
      },
    };
  },
};

const Operation = {
  login: (authData, callback) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.setUserData(response.data));
      }).then(() => callback());
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });

    case ActionType.SET_USER_DATA:
      return extend(state, {
        userData: action.payload,
      });
  }

  return state;
};


export {ActionType, ActionCreator, AuthorizationStatus, Operation, reducer};
