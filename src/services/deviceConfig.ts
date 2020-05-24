import { Dimensions } from "react-native";

const deviceConfig = {
  getWindowWidth(): number {
    return Dimensions.get("window").width;
  },
  getWindowHeight(): number {
    return Dimensions.get("window").height;
  }
}

export default deviceConfig;