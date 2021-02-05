import React from "react";
import renderer from "react-test-renderer";
import MovieHeader from "./movie-header";

const mock = {
  film: {
    title: `The Grand Budapest Hotel`,
    genre: [`Comedy`],
    released: new Date(`2014-2-6`),
  },
};


it(`Should MovieHeader render correctly`, () => {
  const {film} = mock;

  const tree = renderer.create(
      <MovieHeader
        film={film}
      />,
      {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});


