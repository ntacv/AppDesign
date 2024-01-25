import React from "react";
import { View, Text } from "react-native";
import { colors } from "../../assets/styles/Styles";

import { Ionicons } from "@expo/vector-icons";

export default function CardInfo(props) {
  return (
    <View
      style={{
        backgroundColor: colors.primaryLight,
        width: "100%",
        borderRadius: "20px",
        padding: "10px",
        display: "grid",
        gridTemplateColumns: "1fr 4fr",
      }}
    >
      <View
        style={{
          backgroundColor: colors.primaryOpaque,
          width: "50px",
          height: "50px",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* 
        location-sharp
        time
        calendar-outline 
        */}
        <Ionicons name={props.name} size={24} color={colors.primary} />
      </View>
      <View>
        <Text style={{ color: colors.primary, textTransform: "uppercase" }}>
          {props.name}
        </Text>
        <Text>{props.children}</Text>
      </View>
    </View>
  );
}
