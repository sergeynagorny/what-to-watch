import {extend} from "../../utils.js";


const adapter = (review) => {
  return {
    author: review[`user`][`name`],
    score: review[`rating`],
    description: review[`comment`],
    date: new Date(review[`date`])
  };
};

const initialState = {
  reviews: null,
};

const ActionType = {
  LOAD_REVIEWS: `LOAD_REVIEWS`,
};

const ActionCreator = {
  loadReviews: (reviews) => {
    return {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews !== null ? reviews.map((review) => adapter(review)) : null,
    };
  },
};

const Operation = {
  loadReviews: (id) => (dispatch, getState, api) => {
    dispatch(ActionCreator.loadReviews(null));
    return api.get(`/comments/${id}`)
      .then((response) => {
        dispatch(ActionCreator.loadReviews(response.data));
      });
  },
  sendReview: (data, callback) => () => {
    /**
     * This callback should be called by AXIOS interceptor
     * But the server does not respond correctly
     * So this is just emulation,
     */
    setTimeout(() => {
      callback();
    }, 200);
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
  }

  return state;
};


export {ActionType, ActionCreator, Operation, reducer};
