import React from "react";
import { View, Text } from "react-native";
import { colors } from "../../assets/styles/Styles";
import CardInfo from "./CardInfo";

export default function CardGroup(props) {
  return (
    <View
      style={{
        display: "flex",
        gap: "20px",
        flexDirection: "column",
        width: "80%",
        margin: "auto",
      }}
    >
      <CardInfo name={"location"}>Cape Town</CardInfo>
      <CardInfo name={"time"}>12 : 40 PM</CardInfo>
      <CardInfo name={"calendar"}>Next meeting in 15 min</CardInfo>
    </View>
  );
}
