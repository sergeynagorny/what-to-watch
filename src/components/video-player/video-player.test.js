import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player";

const film = {
  id: 1,
  title: `What We Do in the Shadows`,
  poster: `img/what-we-do-in-the-shadows.jpg`,
};

it(`Should VideoPlayer render correctly`, () => {
  const tree = renderer.create(
      <VideoPlayer film={film}/>,
      {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
