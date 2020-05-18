import React, { Component } from "react";
import { Text, View } from "react-native";
import { Gradient } from "../components/common";

interface HomeProps {

}

interface HomeState {

}

class Home extends Component<HomeProps, HomeState> {
  render() {
    return (
      <Gradient>
        <View>
          <Text>Home Screen</Text>
        </View>
      </Gradient>
    )
  }
}

export default Home;
