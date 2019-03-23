import { shallow } from "enzyme";
import React from "react";
import Product from "./Product";

let output;

beforeEach(() => {
  const mockProps = {
    product: {
      id: 1,
      img: "imageSample",
      title: "titleOfProduct",
      price: 100,
      inCart: false
    }
  };
  output = shallow(<Product {...mockProps} />);
});

it("renders Product without crashing", () => {
  expect(output).toMatchSnapshot();
});
