import React, { Component } from "react";
import { Text, View } from "react-native";

interface HomeProps {

}

interface HomeState {

}

class Home extends Component<HomeProps, HomeState> {
  render() {
    return (
      <View>
        <Text>Home Screen</Text>
      </View>
    )
  }
}

export default Home;
