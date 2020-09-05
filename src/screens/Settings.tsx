import React, { Component } from "react";
import { View } from "react-native";
import { SettingsScreenRouteProp, SettingsScreenNavigationProp } from "../navigator/types";
import { Gradient, Button } from "../components/common";
import styles from "../styles/Settings";

import deviceStorage from "../services/deviceStorage";

interface SettingsProps {
  route: SettingsScreenRouteProp;
  navigation: SettingsScreenNavigationProp;
}

class Settings extends Component<SettingsProps> {
  onLogout = async () => {
    // Need to integrate logout functionality with Redux
    await deviceStorage.deleteItem("token_id");
  }

  render() {
    return (
      <Gradient>
        <View style={styles.contentContainer}>
          <Button onPress={this.onLogout}>LOGOUT</Button>
        </View>
      </Gradient>
    )
  }
}

export default Settings;
