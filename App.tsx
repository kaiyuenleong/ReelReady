import React, { Component } from "react";
import AppNavigator from "./src/navigator/AppNavigator";
import DeviceStorage from "./src/services/deviceStorage";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./src/reducers";

interface AppProps {}

class App extends Component<AppProps> {
  private jwt: string | null;
  private isAuthenticated: boolean;

  constructor(props: AppProps) {
    super(props);
    this.jwt = "";
    this.isAuthenticated = false;
  }

  async componentDidMount() {
    this.jwt = await DeviceStorage.retrieveItem("token_id");

    if (this.jwt) {
      this.isAuthenticated = true;
    }
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <AppNavigator isAuthenticated={this.isAuthenticated} />
      </Provider>
    )
  }
}

export default App;