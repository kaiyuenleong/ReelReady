import React from "react";
import { render } from "react-native-testing-library";

import ForgotPassword from "../../src/screens/ForgotPassword";

describe('<ForgotPassword />', () => {
  it('renders correctly', () => {
    const tree = render(<ForgotPassword />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})