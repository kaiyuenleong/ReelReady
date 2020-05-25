import React from "react";
import { Text, View } from "react-native";
import { Gradient } from "../components/common";

const Splash: React.FC = () => {
  return (
    <Gradient>
      <View>
        <Text>Splash Screen</Text>
      </View>
    </Gradient>
  )
}

export default Splash;