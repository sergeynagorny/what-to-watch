import React from "react";
import renderer from "react-test-renderer";
import TabsOverview from "./tabs-overview.jsx";


const mock = {
  film: {
    id: 1,
    description: [`In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.`, `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`],
    director: [`Wes Andreson`],
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`],
    rating: {
      score: 8.9,
      count: 240,
    },
  },
};

it(`Should TabsOverview render correctly`, () => {
  const {film} = mock;

  const tree = renderer.create(
      <TabsOverview
        film={film}
      />, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
