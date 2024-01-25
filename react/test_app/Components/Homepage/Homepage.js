import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext.js";

import Title from "../../Components/TextComponents/Title.js";
import icon_back from "../../assets/adaptive-icon.png";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components/native";
import { default as style, colors } from "../../assets/styles/Styles.js";

const Text_centered = styled.Text`
  font-size: 18px;
  color: green;
  font-weight: 500;
`;

export default function Homepage({ navigation }) {
  const { theme, setTheme } = useContext(ThemeContext);
  const style = StyleSheet.create({});
  return (
    <View style={{ backgroundColor: colors.light }}>
      <View style={{ height: "600px", ...style.header }}>
        <Image source={icon_back} style={style.imageBackground} />

        <View style={style.flexCenter}>
          <Title color={colors.light}>Dashboard</Title>
          <Text style={style.text}>For ordinary people</Text>
        </View>
      </View>
      <View style={style.description}>
        <Title fontSize={"25px"}>Welcome to Dashboard</Title>
        <br></br>
        <Text style={{ textAlign: "center", color: colors.primary }}>
          A platform for ordinary people with ideas that can can the world. Meet
          people, join groups, chat online and be a part of creating next big
          thing.
        </Text>
      </View>

      <View>
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
      </View>
    </View>
  );
}
