import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

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
    imageContainerStyle,
    labelContainerStyle,
    statusContainerStyle,
    labelStyle,
    statusStyle
  } = styles;

  return (
    <View style={cardStyle}>
      {/* Dynamically load images from server? */}
      <View style={imageContainerStyle}>
        <Image source={image} style={{ height: "100%", width: "auto" }} />
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={labelContainerStyle}>
          <Text style={labelStyle}>{label}</Text>
          {notificationCount === 0 ? null : <Notification notificationCount={notificationCount} />}
        </View>
        <View style={statusContainerStyle}>
          <Text style={statusStyle}>{status}</Text>
        </View>
      </View>
    </View>
  )
}

interface NotificationProps {
  notificationCount: number;
}

const Notification: React.FC<NotificationProps> = ({ notificationCount }) => {
  const { notificationStyle } = styles;
  return (
    <View>
      {/* Insert notification icon here */}
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
  imageContainerStyle: {
    borderRadius: 12,
    flex: 4,
    overflow: "hidden"
  },
  cardInfoStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  labelContainerStyle: {
    flex: 2,
    color: "#000000",
    borderColor: "red",
    borderWidth: 1
  },
  statusContainerStyle: {
    flex: 1,
    borderColor: "red",
    borderWidth: 1
  },
  labelStyle: {
    fontWeight: "bold",
    fontSize: 22,
    letterSpacing: 0.5,
    textAlign: "left"
  },
  statusStyle: {
    textAlign: "right",
    color: "rgba(0, 0, 0, 0.5)",
    fontSize: 14
  },
  notificationStyle: {
    fontSize: 15
  }
});

export { Card };