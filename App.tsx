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

interface AppState {
  jwt: string | null;
}

class App extends Component<AppProps, AppState> {
  private _isAuthenticated: boolean;

  constructor(props: AppProps) {
    super(props);
    this.state = {
      jwt: null
    };
    this._isAuthenticated = false;
  }

  async componentDidMount() {
    const jwt = await DeviceStorage.retrieveItem("token_id");

    if (jwt) {
      this._isAuthenticated = true;
      this.setState({
        jwt: jwt
      }, this.sendToken);
    }
  }

  sendToken = () => {
    axios.post(API_URL, {
      headers: {
        authorization: `Bearer ${this.state.jwt}` 
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
        <AppNavigator isAuthenticated={this._isAuthenticated} jwt={this.state.jwt} />
      </Provider>
    )
  }
}

export default App;