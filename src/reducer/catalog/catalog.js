import {extend} from "../../utils.js";

const DEFAULT_GENRE = `All genres`;
const SHOWN_FILMS_COUNT_ON_INIT = 8;
const SHOWN_FILMS_COUNT_BY_BUTTON = 8;


const initialState = {
  activeGenre: DEFAULT_GENRE,
  shownFilmsCount: SHOWN_FILMS_COUNT_ON_INIT,
};

const ActionType = {
  SET_ACTIVE_GENRE: `SET_ACTIVE_GENRE`,
  SET_SHOWN_FILMS_COUNT: `SET_SHOWN_FILMS_COUNT`,
  RESET: `RESET`,
};

const ActionCreator = {
  setActiveGenre: (genre) => {
    return {
      type: ActionType.SET_ACTIVE_GENRE,
      payload: genre,
    };
  },

  setShownFilmsCount: () => {
    return {
      type: ActionType.SET_SHOWN_FILMS_COUNT,
      payload: SHOWN_FILMS_COUNT_BY_BUTTON,
    };
  },

  resetCatalog: () => {
    return {
      type: ActionType.RESET,
      payload: null,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
      });

    case ActionType.SET_SHOWN_FILMS_COUNT:
      return extend(state, {
        shownFilmsCount: state.shownFilmsCount + action.payload,
      });

    case ActionType.RESET:
      return extend(state, initialState);
  }

  return state;
};

export {ActionType, ActionCreator, reducer};
