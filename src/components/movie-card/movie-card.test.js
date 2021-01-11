import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";


const film = {
  title: `What We Do in the Shadows`,
  poster: `img/what-we-do-in-the-shadows.jpg`,
};

it(`Should MovieCard render correctly`, () => {
  const tree = renderer.create(
      <MovieCard
        film={film}
        onMovieCardHover={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});