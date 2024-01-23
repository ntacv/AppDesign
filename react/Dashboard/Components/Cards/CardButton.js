import React, { useContext } from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import { colors } from "../../assets/styles/Styles";

import useTheme from "../../App.js";
import { Ionicons } from "@expo/vector-icons";
import txt from "../../App.js";

import { ThemeContext } from "../../Components/Context/ThemeContext.js";

export default function CardInfo(props) {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      onPress={() => {
        console.log("touched " + theme);
        Alert.alert("Light");
        //Theme(props.theme);
        setTheme(props.theme);
      }}
      style={{
        backgroundColor: colors.primaryLight,
        width: "40%",
        borderRadius: "20px",
        padding: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <View
        style={{
          backgroundColor: colors.primaryOpaque,
          width: "30px",
          height: "30px",
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
      <View style={{ display: "flex", justifyContent: "center" }}>
        <Text
          style={{
            color: colors.primary,
            textTransform: "uppercase",
            fontSize: "15px",
            fontFamily: "PoppinsBold",
          }}
        >
          {props.name}
        </Text>
        <Text
          style={{
            color: colors.primary,
            fontFamily: "PoppinsMedium",
            fontSize: "20px",
            textTransform: "uppercase",
          }}
        >
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
