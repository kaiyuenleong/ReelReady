import { AsyncStorage } from "react-native";

const deviceStorage = {
  async saveItem(key: any, value: any) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch(error) {
      // dev only
      console.log('AsyncStorage Error: ' + error.message);
    }
  }
};

export default deviceStorage;