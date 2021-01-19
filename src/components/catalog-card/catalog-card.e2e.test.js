import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CatalogCard from "./catalog-card.jsx";


configure({
  adapter: new Adapter()
});

const film = {
  id: 1,
  title: `What We Do in the Shadows`,
  poster: `img/what-we-do-in-the-shadows.jpg`,
};

it(`When hovering card passed to callback is consistent with "activeFilm" CatalogList state`, () => {
  const onCatalogCardHover = jest.fn();

  const catalogCard = shallow(
      <CatalogCard
        film={film}
        onCatalogCardMouseEnter={onCatalogCardHover}
        onCatalogCardMouseLeave={() => { }}
        renderPlayer={() => { }}
      />
  );

  catalogCard.simulate(`mouseenter`);

  expect(onCatalogCardHover).toHaveBeenCalledTimes(1);
  expect(onCatalogCardHover).toHaveBeenCalledWith(film.id);
});
