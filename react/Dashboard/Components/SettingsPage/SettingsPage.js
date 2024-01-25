import {
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

import Hr from "../Hr.js";
import CardInfo from "../Cards/CardInfo.js";
import CardGroup from "../Cards/CardGroup.js";
import CardButton from "../Cards/CardButton.js";
import MainButton from "../MainButton.js";
import Title from "../TextComponents/Title.js";
import icon_back from "../../assets/adaptive-icon.png";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Theme from "../../App.js";
import { ThemeContext } from "../../Components/Context/ThemeContext.js";

import profilPicture from "../../assets/images/profile.jpg";

import { default as style, colors } from "../../assets/styles/Styles.js";
import { useContext } from "react";

export default function Profile({ navigation }) {
  //console.log(colors);

  const { theme, setTheme } = useContext(ThemeContext);

  var txt = theme;

  const lightColors = {
    primary: "#166FFF",
    primaryOpaque: "#9FBFF4",
    primaryLight: "#E5EFFF",
    primaryDark: "#1055C4",
    secondary: "red",
    light: "white",
    dark: "black",
    green: "#6AEE67",
    //
    dark_back: "#011029",
    dark_cards: "#00235C",
  };
  const darkColors = {
    primary: "#E5EFFF",
    primaryOpaque: "#9FBFF4",
    primaryLight: "#166FFF",
    secondary: "red",
    light: "#011029",
    dark: "white",
    green: "#6AEE67",
    //
    dark_back: "#011029",
    dark_cards: "#00235C",
  };

  const colors = theme === "light" ? lightColors : darkColors;

  return (
    <View style={{ backgroundColor: colors.light, height: "100vh" }}>
      <View style={style.header}>
        <View style={{ opacity: 0, ...style.iconsHeader }}>
          <MaterialIcons
            name="settings"
            size={33}
            color={colors.primaryOpaque}
          />
          <MaterialCommunityIcons
            name="bell"
            size={30}
            color={colors.primaryOpaque}
          />
        </View>
        <br />
        <View>
          <Image source={profilPicture} style={style.imageProfile} />
          <View
            style={{ ...style.activityIcon, ...style.activityIconBack }}
          ></View>
          <View style={style.activityIcon}></View>
        </View>
        <br></br>
        <View style={{ width: "80%" }}>
          <Title color={colors.light}>Settings</Title>
          <Hr />
          <Text
            style={{
              color: colors.primaryOpaque,
              textAlign: "center",
              fontFamily: "Poppins",
              fontSize: "14px",
            }}
          >
            Settings to change the theme of the app
          </Text>
        </View>
        <br />
        <br />
        <br />
      </View>
      <View style={style.contentBack}>
        <View
          style={{
            backgroundColor:
              theme === "light" ? colors.light : colors.dark_back,
            borderTopLeftRadius: "70px",
            overflow: "hidden",
          }}
        >
          <br />
          <br />
          <br />
          <View
            style={{
              width: "80%",
              margin: "auto",
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "row",
            }}
          >
            <CardButton theme={"light"}>Light</CardButton>
            <CardButton theme={"dark"}>Dark</CardButton>
          </View>
          <br />
          <br />
        </View>
      </View>
      <MainButton type={"back"} navigation={navigation}>
        Back
      </MainButton>
    </View>
  );
}
