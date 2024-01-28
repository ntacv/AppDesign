import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

import Title from "../../Components/TextComponents/Title.js";
import icon_back from "../../assets/adaptive-icon.png";

import profilPicture from "../../assets/images/profile.jpg";
import { AntDesign } from "@expo/vector-icons";

import styled from "styled-components/native";

import { default as style_raw } from "../../assets/styles/Styles.js";
import MainButton from "../MainButton.js";

import { useContext } from "react";
import { ThemeContext } from "../../Components/Context/ThemeContext.js";

const Text_centered = styled.Text`
  font-size: 18px;
  color: green;
  font-weight: 500;
`;

export default function Homepage({ navigation }) {
  const { theme, setTheme, colors } = useContext(ThemeContext);

  var colors_raw = "green";
  const style = style_raw; //({ colors_raw });

  return (
    <View style={{ backgroundColor: colors.light, height: "100vh" }}>
      <View
        style={{
          height: "550px",
          backgroundColor: colors.primaryDark,
          ...style.header,
        }}
      >
        <Image source={profilPicture} style={style.imageBackground} />
        <View style={style.flexCenter}>
          <Title color={colors.light}>Dashboard</Title>
          <Text
            style={{
              color: colors.light,
              fontSize: "18px",
              fontFamily: "PoppinsLight",
            }}
          >
            For ordinary people
          </Text>
        </View>
      </View>
      <View style={style.description}>
        <Title fontSize={"25px"} fontFamily={"SFdisplay"}>
          Welcome to Dashboard
        </Title>
        <br></br>
        <Text
          style={{
            textAlign: "center",
            color: colors.primary,
            fontSize: "17px",
            fontFamily: "Poppins",
            lineHeight: "25px",
          }}
        >
          A platform for ordinary people with ideas that can can the world. Meet
          people, join groups, chat online and be a part of creating next big
          thing.
        </Text>
      </View>

      <MainButton type="next" navigation={navigation}>
        Next
      </MainButton>
    </View>
  );
}
