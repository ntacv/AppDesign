import React from "react";
import { View, Text } from "react-native";
import { colors } from "../../assets/styles/Styles";
import CardInfo from "./CardInfo";

export default function CardGroup(props) {
  return (
    <TouchableOpacity
      style={style.nextButton}
      onPress={() => navigation.navigate("Profil")}
    >
      <Text style={{ fontSize: "25px", color: colors.primary }}>Next</Text>
      <AntDesign
        name="arrowright"
        size={24}
        color={colors.primary}
        style={{ position: "absolute", right: "40px" }}
      />
    </TouchableOpacity>
  );
}
