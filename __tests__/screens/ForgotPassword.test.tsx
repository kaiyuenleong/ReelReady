import React from "react";
import renderer from "react-test-renderer";

import ForgotPassword from "../../src/screens/ForgotPassword";

describe('<ForgotPassword />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ForgotPassword />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})