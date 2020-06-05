import React from "react";
import { Image, View } from "react-native";
import { Gradient } from "../components/common";
import { Images } from "../../assets/images";

const Splash: React.FC = () => {
  return (
    <Gradient>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={Images.logoWithText}
          resizeMode="contain"
          style={{ height: 250, width: 250 }}
        />
      </View>
    </Gradient>
  )
}

export default Splash;