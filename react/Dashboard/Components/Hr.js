import React from "react";
import { View } from "react-native";
import { colors } from "../assets/styles/Styles";

export default function Hr() {
  return (
    <View
      style={{
        borderBottomColor: "rgba(159, 191, 244, 0.50)",
        borderBottomWidth: 1,
        width: "100%",
        marginTop: "30px",
        marginBottom: "30px",
      }}
    />
  );
}
