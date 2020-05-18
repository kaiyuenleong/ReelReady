import { AsyncStorage } from "react-native";

const deviceStorage = {
  async saveItem(key: any, value: any) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch(error) {
      // dev only
      console.log('AsyncStorage SaveItem Error: ' + error.message);
    }
  },

  async retrieveItem(key: any) {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value) {
        return value;
      } else {
        return null;
      }
    } catch(error) {
      // dev only
      console.log('AsyncStorage RetrieveItem Error: ' + error.message);
      return null;
    }
  },

  async deleteItem(key: any) {
    try {
      await AsyncStorage.removeItem(key);
    } catch(error) {
      // dev only
      console.log('AsyncStorage DeleteItem Error: ' + error.message);
    }
  }
};

export default deviceStorage;