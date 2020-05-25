import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform } from "react-native";

interface HomeHeaderProps {
  username: string;
  onSeeAll: () => void;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({ username, onSeeAll }) => {
  const { contentContainerStyle, subContainerStyle, welcomeTextStyle, selectSetTextStyle, seeAllTextStyle } = styles;
  
  return (
    <View style={contentContainerStyle}>
      <View style={subContainerStyle}>
        <Text style={welcomeTextStyle}>Welcome, {username}.</Text>
      </View>
      <View style={subContainerStyle}>
        <Text style={selectSetTextStyle}>Select Set</Text>
        <TouchableOpacity onPress={onSeeAll}>
          <Text style={seeAllTextStyle}>See All</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 1,
    width: 350,
    marginBottom: 20
  },
  subContainerStyle: {
    flexDirection: "row",
    flex: 1,
  },
  welcomeTextStyle: {
    fontSize: 14,
    letterSpacing: 0.3,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlignVertical: Platform.OS === "android" ? "bottom" : undefined
  },
  selectSetTextStyle: {
    fontSize: 34,
    letterSpacing: 0.6,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlignVertical: Platform.OS === "android" ? "bottom" : undefined,
    flex: 3
  },
  seeAllTextStyle: {
    fontSize: 15,
    fontWeight: "400",
    color: "#FFFFFF",
    textAlign: "right",
    lineHeight: 30,
    textAlignVertical: Platform.OS === "android" ? "bottom" : undefined,
    flex: 1
  }
});

export { HomeHeader };
