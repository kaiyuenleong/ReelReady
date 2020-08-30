import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Platform } from "react-native";
import Icons from "../../assets/icons";
import Plus from "../../assets/icons/plus.svg";

type StatusType = "Active" | "Inactive"

interface CardProps {
  image?: string;
  label?: string;
  notificationCount?: number;
  status?: StatusType;
  
  newSet?: boolean;
}

const Card: React.FC<CardProps> = ({ image, label, notificationCount, status, newSet }) => {
  const {
    cardStyle,
    cardStyleNewSet,
    contentContainerStyle,
    imageContainerStyle,
    imageContainerValidImageStyle,
    labelContainerStyle,
    notificationContainerStyle,
    labelStyle,
    statusStyle
  } = styles;

  if (newSet) {
    return (
      <View style={[cardStyle, cardStyleNewSet]}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity>
            <Plus height={75} width={75} />
          </TouchableOpacity>
        </View>
      </View>
    )
  } else {
    return (
      <View style={cardStyle}>
        {image && image.length > 0 ? (
          <View style={[imageContainerStyle, imageContainerValidImageStyle]}>
            <Image source={{ uri: image }} style={{ height: "100%", width: "auto" }} />
          </View>
        ) :
          <View style={[imageContainerStyle, { justifyContent: "center", alignItems: "center" }]}>
            <Text>No Cover Image Found</Text>
          </View>
        }
        <View style={contentContainerStyle}>
          <View style={labelContainerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <Text style={statusStyle}>{status}</Text>
          </View>
          <View style={notificationContainerStyle}>
            <Notification notificationCount={notificationCount ? notificationCount : 0} />
          </View>
        </View>
      </View>
    )
  }
}

interface NotificationProps {
  notificationCount: number;
}

const Notification: React.FC<NotificationProps> = ({ notificationCount }) => {
  const { notificationStyle, notificationBellStyle } = styles;
  const plural = notificationCount === 1 ? " notification" : " notifications";

  return (
    <View style={{ flexDirection: "row" }}>
      <View>
        <Image 
          source={(notificationCount > 0 ? Icons.notificationBellActive : Icons.notificationBellInactive)}
          style={notificationBellStyle}
        />
      </View>
      <Text style={notificationStyle}>
        {(notificationCount === 0 ? "No" : notificationCount) + plural}
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
  cardStyleNewSet: {
    opacity: 0.25,
  },
  contentContainerStyle: {
    flex: 1
  },
  imageContainerStyle: {
    flex: 5,
  },
  imageContainerValidImageStyle: {
    elevation: Platform.OS === "android" ? 20 : 0,
    overflow: "hidden",
    borderRadius: 12,
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