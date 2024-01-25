import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
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

export default function Profile({ navigation }) {
  //console.log(colors);
  return (
    <View style={{ backgroundColor: colors.light }}>
      <View style={style.header}>
        <View style={style.iconsHeader}>
          <Text>hello</Text>
          <TouchableOpacity
            style={style.iconButton}
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons
              name="settings"
              size={30}
              color={colors.primaryOpaque}
            />
          </TouchableOpacity>
          <MaterialCommunityIcons
            name="bell"
            size={30}
            color={colors.primaryOpaque}
          />
        </View>
        <br></br>
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
          <Text style={{ color: colors.primaryOpaque, textAlign: "center" }}>
            nta.ckn@gmail.com
          </Text>
          <Hr />
          <Text style={{ color: colors.primaryOpaque, textAlign: "center" }}>
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
