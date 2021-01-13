import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MainPage from "./main-page";


Enzyme.configure({
  adapter: new Adapter(),
});

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
  {
    id: 3,
    title: `No Country for Old Men`,
    poster: `img/no-country-for-old-men.jpg`,
  },
  {
    id: 4,
    title: `Moonrise Kingdom`,
    poster: `img/moonrise-kingdom.jpg`,
  },
  {
    id: 5,
    title: `Orlando`,
    poster: `img/orlando.jpg`,
  },
];


it(`Should "Show More" button be pressed`, () => {
  const onShowMoreButtonClick = jest.fn();

  const mainPage = shallow(
      <MainPage
        films={films}
        onShowMoreButtonClick={onShowMoreButtonClick}
      />
  );

  const showMoreButton = mainPage.find(`button.catalog__button`);
  showMoreButton.simulate(`click`);

  expect(onShowMoreButtonClick).toHaveBeenCalledTimes(1);
});
