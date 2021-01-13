import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card";


configure({
  adapter: new Adapter()
});

const film = {
  id: 1,
  title: `What We Do in the Shadows`,
  poster: `img/what-we-do-in-the-shadows.jpg`,
};

it(`When hovering card passed to callback is consistent with "activeFilm" MovieList state`, () => {
  const onMovieCardHover = jest.fn();

  const movieCard = shallow(
      <MovieCard
        film={film}
        onMovieCardMouseEnter={onMovieCardHover}
        onMovieCardMouseLeave={() => { }}
        renderPlayer={() => { }}
      />
  );

  movieCard.simulate(`mouseenter`);

  expect(onMovieCardHover).toHaveBeenCalledTimes(1);
  expect(onMovieCardHover).toHaveBeenCalledWith(film.id);
});
