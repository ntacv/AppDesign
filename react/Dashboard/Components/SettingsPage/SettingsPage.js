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

  return (
    <View style={{ backgroundColor: colors.light }}>
      <View style={style.header}>
        <View style={style.iconsHeader}>
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
        <View style={{ width: "80%" }}>
          <Title color={colors.light}>Settings</Title>
        </View>
        <br />
      </View>
      <View style={style.contentBack}>
        <View style={style.content}>
          <br />
          <br />
          <Text>{txt}</Text>
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
          <br />
          <br />
          <TouchableOpacity
            style={style.nextButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={{ fontSize: "25px", color: colors.primary }}>
              Back
            </Text>
            <AntDesign
              name="arrowleft"
              size={24}
              color={colors.primary}
              style={{ position: "absolute", right: "40px" }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
