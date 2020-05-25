import React from "react";
import { View, Text, StyleSheet, Image, Platform } from "react-native";
import Icons from "../../assets/icons";

type StatusType = "Active" | "Inactive"

interface CardProps {
  image: any;
  label: string;
  notificationCount: number;
  status: StatusType;
}

const Card: React.FC<CardProps> = ({ image, label, notificationCount, status }) => {
  const {
    cardStyle,
    contentContainerStyle,
    imageContainerStyle,
    labelContainerStyle,
    notificationContainerStyle,
    labelStyle,
    statusStyle
  } = styles;

  return (
    <View style={cardStyle}>
      {/* Dynamically load images from server? */}
      <View style={imageContainerStyle}>
        <Image source={image} style={{ height: "100%", width: "auto" }} />
      </View>
      <View style={contentContainerStyle}>
        <View style={labelContainerStyle}>
          <Text style={labelStyle}>{label}</Text>
          <Text style={statusStyle}>{status}</Text>
        </View>
        <View style={notificationContainerStyle}>
          {notificationCount === 0 ? null : <Notification notificationCount={notificationCount} />}
        </View>
      </View>
    </View>
  )
}

interface NotificationProps {
  notificationCount: number;
}

const Notification: React.FC<NotificationProps> = ({ notificationCount }) => {
  const { notificationStyle, notificationBellStyle } = styles;
  return (
    <View style={{ flexDirection: "row" }}>
      <View>
        <Image source={Icons.notificationBell} style={notificationBellStyle} />
      </View>
      <Text style={notificationStyle}>
        {notificationCount + " notification" + (notificationCount === 1 ? "" : "s")}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    flex: 1,
    padding: 20,
  },
  contentContainerStyle: {
    flex: 1
  },
  imageContainerStyle: {
    borderRadius: 12,
    flex: 5,
    overflow: "hidden",
    elevation: Platform.OS === "android" ? 20 : 0
  },
  labelContainerStyle: {
    flex: 1,
    color: "#000000",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  notificationContainerStyle: {
    flex: 1
  },
  notificationBellStyle: {
    height: 25,
    width: 25
  },
  labelStyle: {
    fontWeight: "bold",
    fontSize: 22,
    letterSpacing: 0.5,
    textAlign: "left",
    textAlignVertical: Platform.OS === "android" ? "bottom" : undefined
  },
  statusStyle: {
    textAlign: "right",
    color: "rgba(0, 0, 0, 0.5)",
    fontSize: 15,
    textAlignVertical: Platform.OS === "android" ? "bottom" : undefined
  },
  notificationStyle: {
    fontSize: 15,
    marginLeft: 3,
    textAlignVertical: Platform.OS === "android" ? "center" : undefined
  }
});

export { Card };