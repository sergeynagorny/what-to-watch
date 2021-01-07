import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MainPage from "./main-page";


Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should «Show More» button be pressed`, () => {
  const onShowMoreButtonClick = jest.fn();

  const mainPage = shallow(
      <MainPage
        movieTitles={[]}
        onShowMoreButtonClick={onShowMoreButtonClick}
      />
  );

  const showMoreButton = mainPage.find(`button.catalog__button`);
  showMoreButton.simulate(`click`);

  expect(onShowMoreButtonClick).toHaveBeenCalledTimes(1);
});
