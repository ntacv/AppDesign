import React from "react";
import { View } from "react-native";
import { colors } from "../assets/styles/Styles";

export default function Hr() {
  return (
    <View
      style={{
        borderBottomColor: colors.primaryOpaque,
        borderBottomWidth: 1,
        width: "100%",
        marginTop: "30px",
        marginBottom: "30px",
      }}
    />
  );
}
