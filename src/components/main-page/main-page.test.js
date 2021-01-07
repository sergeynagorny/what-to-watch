import React from "react";
import renderer from "react-test-renderer";
import MainPage from "./main-page.jsx";


it(`Should MainPage render correctly`, () => {
  const tree = renderer
    .create(
        <MainPage
          movieTitles={[]}
          onShowMoreButtonClick={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
