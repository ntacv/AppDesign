import React, { useContext } from "react";
import { View, Text } from "react-native";
import { colors } from "../../assets/styles/Styles";

import { Ionicons } from "@expo/vector-icons";

import { ThemeContext } from "../../Components/Context/ThemeContext.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CardInfo(props) {
  const { theme, setTheme, colors } = useContext(ThemeContext);
  return (
    <View
      style={{
        backgroundColor:
          theme === "light" ? colors.primaryLight : colors.dark_cards,
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
        <Ionicons
          name={props.name}
          size={32}
          color={theme === "light" ? colors.primary : colors.light}
        />
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
          {props.name === "calendar"
            ? "Agenda"
            : props.name === "time"
            ? "Local time"
            : "Location"}
        </Text>
        <Text
          style={{
            color: colors.primary,
            fontFamily: "Poppins",
            fontSize: "13px",
          }}
        >
          {props.children}
        </Text>
      </View>
    </View>
  );
}
