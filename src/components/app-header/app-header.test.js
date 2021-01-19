import React from "react";
import renderer from "react-test-renderer";
import AppHeader from "./app-header.jsx";


it(`Should AppHeader render correctly`, () => {
  const tree = renderer.create(
      <AppHeader/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
