import {extend} from "../../utils.js";


const adapter = (film) => {
  return {
    id: film[`id`],
    title: film[`name`],
    description: film[`description`],
    director: film[`director`],
    starring: film[`starring`],
    rating: {
      score: (film[`rating`] / 2), // Hotfix for more credibility
      count: film[`scores_count`],
    },
    runtime: film[`run_time`],
    released: film[`released`],
    genre: film[`genre`],
    isFavorite: film[`is_favorite`],
    image: {
      poster: film[`poster_image`],
      preview: film[`preview_image`],
    },
    background: {
      image: film[`background_image`],
      color: film[`background_color`]
    },
    src: {
      movie: film[`video_link`],
      trailer: film[`preview_video_link`],
    },
  };
};

const initialState = {
  activeFilm: null,
  films: null,
  promo: null,
  favoriteFilms: null,
};

const ActionType = {
  SET_ACTIVE_FILM: `SET_ACTIVE_FILM`,
  SET_FILMS: `SET_FILMS`,
  SET_PROMO: `LOAD_PROMO`,
  SET_FAVORITE_FILMS: `SET_FAVORITE_FILMS`,
  UPDATE_FILM_BY_ID: `UPDATE_FILM_BY_ID`,
  UPDATE_FILMS: `UPDATE_FILMS`,
};

const ActionCreator = {
  setActiveFilm: (films, id) => {
    return {
      type: ActionType.SET_ACTIVE_FILM,
      payload: films.find((film) => film.id === Number(id)),
    };
  },

  setFilms: (films) => {
    return {
      type: ActionType.SET_FILMS,
      payload: films.map((film) => adapter(film)),
    };
  },

  setPromo: (promo) => {
    return {
      type: ActionType.SET_PROMO,
      payload: adapter(promo),
    };
  },

  setFavoriteFilms: () => {
    return {
      type: ActionType.SET_FAVORITE_FILMS,
      payload: null,
    };
  },

  updateFilms: () => { // Mock function
    return {
      type: ActionType.UPDATE_FILMS,
      payload: null,
    };
  },

  updateFilmById: (film, isFavorite) => { // Mock function
    return {
      type: ActionType.UPDATE_FILM_BY_ID,
      payload: extend(film, {isFavorite: !isFavorite}),
    };
  },
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.setFilms(response.data));
      });
  },

  loadPromo: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreator.setPromo(response.data));
      });
  },

  loadUserFilms: () => (dispatch) => { // Mock function
    dispatch(ActionCreator.updateFilms());
  },

  loadFavoriteFilms: () => (dispatch) => { // Mock function
    dispatch(ActionCreator.setFavoriteFilms());
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_FILM:
      return extend(state, {
        activeFilm: action.payload,
      });

    case ActionType.SET_FILMS:
      return extend(state, {
        films: action.payload,
      });

    case ActionType.SET_PROMO:
      return extend(state, {
        promo: action.payload,
      });


    case ActionType.UPDATE_FILMS: // Mock function
      return extend(state, {
        films: generateMockFavoriteFilms(state.films),
      });

    case ActionType.SET_FAVORITE_FILMS: // Mock function
      return extend(state, {
        favoriteFilms: getMockFavoriteFilms(state.films),
      });

    case ActionType.UPDATE_FILM_BY_ID: // Mock function
      return extend(state, {
        films: updateFilmById(state.films, action.payload),
      });
  }

  return state;
};

const updateFilmById = (films, payload) => {
  return films.map((film) => film.id === payload.id ? payload : film);
};

const generateMockFavoriteFilms = (films) => {
  return films.map((film) => extend(film, {isFavorite: Boolean(Math.random() < 0.2)}));
};

const getMockFavoriteFilms = (films) => {
  return films.filter((film) => film.isFavorite === true);
};

export {ActionType, ActionCreator, Operation, reducer};

