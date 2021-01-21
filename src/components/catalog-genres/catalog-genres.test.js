import React from "react";
import renderer from "react-test-renderer";
import CatalogGenres from "./catalog-genres.jsx";


it(`Should CatalogGenres render correctly`, () => {
  const tree = renderer.create(
      <CatalogGenres
        allGenres={[`Comedy`]}
        activeGenre={`Comedy`}
        onCatalogGenresButtonClick={() => { }}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
