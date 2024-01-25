import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
  Linking,
} from "react-native";

import Hr from "../../Components/Hr.js";
import CardInfo from "../../Components/Cards/CardInfo.js";
import CardGroup from "../../Components/Cards/CardGroup.js";
import Title from "../../Components/TextComponents/Title.js";
import icon_back from "../../assets/adaptive-icon.png";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import profilPicture from "../../assets/images/profile.jpg";

import { default as style, colors } from "../../assets/styles/Styles.js";
import MainButton from "../MainButton.js";

const email = "mailto://nta.ckn@gmail.com";

export default function Profile({ navigation }) {
  //console.log(colors);
  return (
    <View
      style={{
        backgroundColor: colors.light,
        height: "100vh",
      }}
    >
      <View style={style.header}>
        <View style={style.iconsHeader}>
          <MaterialIcons
            name="settings"
            size={36}
            color={colors.primaryOpaque}
          />
          <MaterialCommunityIcons
            name="bell"
            size={32}
            color={colors.primaryOpaque}
          />
          <TouchableOpacity
            style={style.iconButton}
            onPress={() => navigation.navigate("Settings")}
          ></TouchableOpacity>
          <TouchableOpacity
            style={{ ...style.iconButton, ...style.iconButtonRight }}
          ></TouchableOpacity>
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
          <Title color={colors.light}>Nathan Chouk</Title>
          <TouchableOpacity onPress={() => Linking.openURL(email)}>
            <Text
              style={{
                color: colors.primaryOpaque,
                textAlign: "center",
                fontFamily: "Poppins",
              }}
            >
              nta.ckn@gmail.com
            </Text>
          </TouchableOpacity>
          <Hr />
          <Text
            style={{
              color: colors.primaryOpaque,
              textAlign: "center",
              fontFamily: "Poppins",
              fontSize: "14px",
            }}
          >
            This is my bio and thank you for taking time to read it as it means
            a lot to me.
          </Text>
        </View>
        <br />
        <br />
        <br />
      </View>
      <View style={style.contentBack}>
        <View style={style.content}>
          <br />
          <br />
          <br />
          <CardGroup />
          <br />
          <br />
        </View>
      </View>

      <MainButton type="back" navigation={navigation}>
        Back
      </MainButton>
    </View>
  );
}
