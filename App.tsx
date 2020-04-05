import React, { Component } from "react";
import AppNavigator from "./src/navigator/AppNavigator";
import firebase from "firebase";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./src/reducers";


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyD53-D5psNsakbZqnu8p7RMJtvsmbE20Mc',
      authDomain: 'reelready-86d2b.firebaseapp.com',
      databaseURL: 'https://reelready-86d2b.firebaseio.com',
      projectId: 'reelready-86d2b',
      storageBucket: 'reelready-86d2b.appspot.com',
      messagingSenderId: '977003535664',
      appId: '1:977003535664:web:b03d8180de94aca2'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}

export default App;