import React from "react";
import renderer from "react-test-renderer";
import TabsReviews from "./tabs-reviews.jsx";


const mock = {
  reviews: [
    {
      author: `Kate Muir`,
      score: 8.9,
      description: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
      date: new Date(`December 24, 2016`),
    },
  ]
};

it(`Should TabsReviews render correctly`, () => {
  const {reviews} = mock;

  const tree = renderer.create(
      <TabsReviews
        reviews={reviews}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
