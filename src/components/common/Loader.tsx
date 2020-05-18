import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";

const Loader = () => {
  const { loaderStyle } = styles;

  return (
    <View style={loaderStyle}>
      <ActivityIndicator />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export { Loader };