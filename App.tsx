import React, { Component } from "react";
import AppNavigator from "./src/navigator/AppNavigator";
import DeviceStorage from "./src/services/deviceStorage";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./src/reducers";
import axios from "axios";

import { API_URL } from "./src/services/API";

interface AppProps {}

class App extends Component<AppProps> {
  private _isAuthenticated: boolean;
  private _jwt: string | undefined;

  constructor(props: AppProps) {
    super(props);
    this._isAuthenticated = false;
    this._jwt = undefined;
  }

  async componentDidMount() {
    const jwt = await DeviceStorage.retrieveItem("token_id");

    if (jwt) {
      this._isAuthenticated = true;
      this._jwt = jwt;
      this.sendToken();
    }
  }

  sendToken = () => {
    axios.post(API_URL, {
      headers: {
        authorization: `Bearer ${this._jwt}` 
      }
    }).then((res) => {
      console.log(res);
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <AppNavigator isAuthenticated={this._isAuthenticated} />
      </Provider>
    )
  }
}

export default App;