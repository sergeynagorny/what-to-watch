import React from "react";
import renderer from "react-test-renderer";
import CatalogCard from "./catalog-card.jsx";


const film = {
  id: 1,
  title: `What We Do in the Shadows`,
  poster: `img/what-we-do-in-the-shadows.jpg`,
};

it(`Should CatalogCard render correctly`, () => {
  const tree = renderer.create(
      <CatalogCard
        film={film}
        onCatalogCardMouseEnter={() => {}}
        onCatalogCardMouseLeave={() => {}}
        renderPlayer={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
