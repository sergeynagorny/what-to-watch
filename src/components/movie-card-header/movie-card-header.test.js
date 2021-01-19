import React from "react";
import renderer from "react-test-renderer";
import MovieCardHeader from "./movie-card-header.jsx";

const mock = {
  film: {
    title: `The Grand Budapest Hotel`,
    genre: [`Comedy`],
    released: new Date(`2014-2-6`),
  },
};


it(`Should MovieCardHeader render correctly`, () => {
  const {film} = mock;

  const tree = renderer.create(
      <MovieCardHeader
        film={film}
      />,
      {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});


