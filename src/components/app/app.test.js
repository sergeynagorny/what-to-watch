import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";


const films = [
  {
    title: `What We Do in the Shadows`,
    poster: `img/what-we-do-in-the-shadows.jpg`,
  },
  {
    title: `Pulp Fiction`,
    poster: `img/pulp-fiction.jpg`,
  }
];

it(`Should App render correctly`, () => {
  const tree = renderer.create(
      <App
        films={films}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
