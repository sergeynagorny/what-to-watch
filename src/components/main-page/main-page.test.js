import React from "react";
import renderer from "react-test-renderer";
import MainPage from "./main-page.jsx";


const films = [
  {
    id: 1,
    title: `What We Do in the Shadows`,
    poster: `img/what-we-do-in-the-shadows.jpg`,
  },
  {
    id: 2,
    title: `Pulp Fiction`,
    poster: `img/pulp-fiction.jpg`,
  },
];

it(`Should MainPage render correctly`, () => {
  const tree = renderer.create(
      <MainPage
        films={films}
        onShowMoreButtonClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
