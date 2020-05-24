import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface HomeHeaderProps {
  username: string;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({ username }) => {
  const { contentContainerStyle, welcomeTextStyle } = styles;
  
  return (
    <View>
      <View>
        <Text style={welcomeTextStyle}>Welcome, {username}.</Text>
      </View>
      <View style={contentContainerStyle}>
        <Text>Select Set</Text>
        <Text>See All</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexDirection: "row",
    borderColor: "red",
    borderWidth: 1
  },
  welcomeTextStyle: {
    fontSize: 14,
    letterSpacing: 0.3,
    fontWeight: "bold",
    color: "#FFFFFF"
  }
});

export default HomeHeader;
