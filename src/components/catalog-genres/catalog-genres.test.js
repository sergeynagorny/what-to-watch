import React from "react";
import renderer from "react-test-renderer";
import CatalogGenres from "./catalog-genres.jsx";


it(`Should CatalogGenres render correctly`, () => {
  const tree = renderer.create(
      <CatalogGenres/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
