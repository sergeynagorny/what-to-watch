import React from "react";
import renderer from "react-test-renderer";
import TabsDetails from "./tabs-details.jsx";


const mock = {
  film: {
    director: [`Wes Andreson`],
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`],
    genre: [`Comedy`],
    released: new Date(`2014-2-6`),
    runtime: 112,
  },
};

it(`Should TabsDetails render correctly`, () => {
  const {film, reviews} = mock;

  const tree = renderer.create(
      <TabsDetails
        film={film}
        reviews={reviews}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
