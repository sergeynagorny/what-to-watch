import {extend} from "./utils.js";
import films from "./mocks/films";

const FILMS_SHOWN_COUNT_ON_INIT = 4;
const FILMS_SHOWN_COUNT_BY_BUTTON = 4;
const DEFAULT_GENRE = `All genres`;
const allGenres = [DEFAULT_GENRE, ...new Set(films.map((item) => item.genre))];

const initialState = {
  allGenres,
  activeGenre: DEFAULT_GENRE,
  films,
  filmsByGenre: films,
  filmsShownCount: FILMS_SHOWN_COUNT_ON_INIT,
};

const getFilmsByGenre = (genre) => {
  if (genre === DEFAULT_GENRE) {
    return films;
  } else {
    return initialState.films.filter((film) => genre === film.genre);
  }
};

const ActionType = {
  SET_GENRE: `SET_ACTIVE_GENRE`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
  ADD_FILMS_SHOWN_COUNT: `ADD_FILMS_SHOWN_COUNT`,
  RESET_FILMS_SHOWN_COUNT: `RESET_FILMS_SHOWN_COUNT`,
};

const ActionCreator = {
  setGenre: (genre) => ({
    type: ActionType.SET_GENRE,
    payload: genre,
  }),

  getFilmsByGenre: (genre) => ({
    type: ActionType.GET_FILMS_BY_GENRE,
    payload: getFilmsByGenre(genre),
  }),

  addFilmsShownCount: () => ({
    type: ActionType.ADD_FILMS_SHOWN_COUNT,
    payload: FILMS_SHOWN_COUNT_BY_BUTTON,
  }),

  resetFilmsShownCount: () => ({
    type: ActionType.RESET_FILMS_SHOWN_COUNT,
    payload: FILMS_SHOWN_COUNT_ON_INIT,
  }),
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.SET_GENRE:
      return extend(state, {
        activeGenre: action.payload,
      });

    case ActionType.GET_FILMS_BY_GENRE:
      return extend(state, {
        filmsByGenre: action.payload,
      });

    case ActionType.ADD_FILMS_SHOWN_COUNT:
      return extend(state, {
        filmsShownCount: state.filmsShownCount + action.payload,
      });

    case ActionType.RESET_FILMS_SHOWN_COUNT:
      return extend(state, {
        filmsShownCount: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
