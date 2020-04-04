import React, { Component } from "react";
import AppNavigator from "./src/navigator/AppNavigator";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

class App extends Component {
  render() {
    return (
      <AppNavigator />
    )
  }
}

export default App;