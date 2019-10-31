import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import App, { Pagination } from "./App";

it("renders without crashing", () => {
  shallow(<App />);
});

describe("App", () => {
  test("snapshot renders", () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe("Counter", () => {
  test("snapshot renders", () => {
    const component = renderer.create(<Pagination cursor={1} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
