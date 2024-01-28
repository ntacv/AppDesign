import React, { useContext } from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";

import useTheme from "../../App.js";
import { Ionicons } from "@expo/vector-icons";
import txt from "../../App.js";

import { ThemeContext } from "../../Components/Context/ThemeContext.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CardButton(props) {
  const { theme, setTheme, colors } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      onPress={() => {
        console.log("touched " + theme);
        Alert.alert("Light");
        //Theme(props.theme);
        setTheme(props.theme);
      }}
      style={{
        backgroundColor:
          theme === "light" ? colors.primaryLight : colors.dark_cards,
        width: "40%",
        height: "70px",
        borderRadius: "20px",
        padding: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <View
        style={{
          backgroundColor: colors.primaryOpaque,
          width: "40px",
          height: "40px",
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
        <Ionicons
          name={props.theme === "light" ? "bulb" : "bed"}
          size={24}
          color={theme === "light" ? colors.primary : colors.light}
        />
      </View>
      <View style={{ display: "flex", justifyContent: "center" }}>
        <Text
          style={{
            color: theme === "light" ? colors.primary : colors.light,
            textTransform: "uppercase",
            fontSize: "12px",
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
