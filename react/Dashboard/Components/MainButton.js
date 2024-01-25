import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { default as style, colors } from "../assets/styles/Styles";

import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function MainButton(props) {
  return (
    <View style={style.nextButtonContainer}>
      <TouchableOpacity
        style={style.nextButton}
        onPress={
          props.type === "back"
            ? () => props.navigation.goBack()
            : () => props.navigation.navigate("Profile")
        }
      >
        <Text
          style={{
            fontSize: "20px",
            color: colors.primary,
            fontFamily: "PoppinsMedium",
          }}
        >
          {props.children}
        </Text>
        <AntDesign
          name={props.type === "next" ? "arrowright" : "arrowleft"}
          size={27}
          color={colors.primary}
          style={{ position: "absolute", right: "40px" }}
        />
      </TouchableOpacity>
    </View>
  );
}
