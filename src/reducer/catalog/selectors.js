import NameSpace from "../name-space.js";
const NAME_SPACE = NameSpace.CATALOG;
import {getFilms, getActiveFilmGenre} from "../data/selectors.js";
import {createSelector} from "reselect";
// import {shuffleArray} from "../../utils";


const DEFAULT_GENRE = `All genres`;
const SHOWN_SIMILAR_FILMS_COUNT = 4;


export const getActiveGenre = (state) => {
  return state[NAME_SPACE].activeGenre;
};

export const getShownFilmsCount = (state) => {
  return state[NAME_SPACE].shownFilmsCount;
};

export const getSimilarFilms = createSelector(
    getFilms,
    getActiveFilmGenre,
    (films, activeFilmGenre) => {
      return films.filter((film) => film.genre === activeFilmGenre).slice(0, SHOWN_SIMILAR_FILMS_COUNT);
    }
);

export const getAllGenres = createSelector(
    getFilms,
    (films) => {
      return [DEFAULT_GENRE, ...new Set(films.map((film) => film.genre))];
    }
);

export const getFilmsByGenre = createSelector(
    getFilms,
    getActiveGenre,
    (films, activeGenre) => {
      return films.filter((film) => activeGenre === film.genre || activeGenre === DEFAULT_GENRE);
    }
);
