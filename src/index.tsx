import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import AppNavigator from "./navigator/AppNavigator";

import { loginUserSuccess } from "./actions/LoginActions";
import DeviceStorage from "./services/deviceStorage";
import { API_URL } from "./services/API";

import Splash from "./screens/Splash";

// Passed from parent component
interface SelfProps {}

// Action creators from redux
interface SelfDispatchProps {
  loginUserSuccess: any;
}

// State props from redux
interface SelfStateProps {
  isAuthenticated: boolean;
}

interface SelfState {
  isLoading: boolean;
}

type AppContainerProps = SelfProps & SelfDispatchProps & SelfStateProps;
type AppContainerState = SelfState;

class AppContainer extends Component<AppContainerProps, AppContainerState> {
  constructor(props: AppContainerProps) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  async componentDidMount() {
    const jwt = await DeviceStorage.retrieveItem("token_id");

    if (jwt) {
      await this.validateToken(jwt);
      this.props.loginUserSuccess();
    }
    this.setState({ isLoading: false });
  }

  validateToken = (jwt: string) => {
    return new Promise(function(resolve, reject) {
      axios.post("http://192.168.0.5:3000/validate", {}, {
        headers: {
          authorization: `Bearer ${jwt}` 
        }
      }).then((res) => {
        resolve();
      }).catch((error) => {
        reject(error);
      });
    })
  }

  render() {
    if (this.state.isLoading) {
      return <Splash />
    } else {
      return <AppNavigator isAuthenticated={this.props.isAuthenticated} />
    }
  }
} 

const mapStateToProps = ({ login }: any) => {
  const { isAuthenticated } = login;
  return { isAuthenticated };
}

export default connect<SelfProps, SelfDispatchProps, SelfStateProps>(mapStateToProps, { loginUserSuccess })(AppContainer);