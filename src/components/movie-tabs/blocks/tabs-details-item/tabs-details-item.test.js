import React from "react";
import renderer from "react-test-renderer";
import TabsDetailsItem from "./tabs-details-item.jsx";


it(`Should TabsDetailsItem render correctly`, () => {
  const tree = renderer.create(
      <TabsDetailsItem
        name={`name`}
      >
        {`children`}
      </TabsDetailsItem>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
