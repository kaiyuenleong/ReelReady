import React from "react";
import renderer from "react-test-renderer";

import Splash from "../../src/screens/Splash";

describe('<Splash />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Splash />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})