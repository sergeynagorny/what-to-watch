import NameSpace from "../name-space.js";
const NAME_SPACE = NameSpace.DATA;


export const getActiveFilm = (state) => {
  return state[NAME_SPACE].activeFilm;
};

export const getActiveFilmGenre = (state) => {
  return state[NAME_SPACE].activeFilm.genre;
};

export const getFilms = (state) => {
  return state[NAME_SPACE].films;
};

export const getFilmById = (state) => {
  return state[NAME_SPACE].films;
};

export const getFavoriteFilms = (state) => {
  return state[NAME_SPACE].favoriteFilms;
};

export const getPromo = (state) => {
  return state[NAME_SPACE].promo;
};

export const getPromoId = (state) => {
  return state[NAME_SPACE].promo.id;
};

export const isFilmsLoaded = (state) => {
  return state[NAME_SPACE].isFilmsLoaded;
};

export const isPromoLoaded = (state) => {
  return state[NAME_SPACE].isPromoLoaded;
};
