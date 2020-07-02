import React from "react";
import { render } from "react-native-testing-library";

import Splash from "../../src/screens/Splash";

describe('<Splash />', () => {
  it('renders correctly', () => {
    const tree = render(<Splash />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})