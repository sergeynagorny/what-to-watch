import React from "react";
import renderer from "react-test-renderer";
import AppFooter from "./app-footer.jsx";


it(`Should AppFooter render correctly`, () => {
  const tree = renderer.create(
      <AppFooter/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
