import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
} from "react-native";
//import styles from "../styles/Styles";
import Title from "../../Components/TextComponents/Title.js";
import icon_back from "../../assets/adaptive-icon.png";

import style_file from "../styles/Styles.js";

const primaryColor = "blue";
const primaryOpaque = "rgba(0, 0, 255, 0.5)";

export default function Homepage() {
  return (
    <ScrollView>
      <View style={style_file.header}>
        <Image source={icon_back} style={style_file.imageBackground} />
        <View style={style_file.flexCenter}>
          <Title>Dashboard</Title>
          <Text style={style_file.text}>For ordinary people</Text>
        </View>
      </View>
      <View>
        <Title>Welcome to Dashboard</Title>
        <Text>Hello bro</Text>
      </View>

      <View style={style_file.startButton}>
        <Button title="Next" color={primaryOpaque} />
      </View>
    </ScrollView>
  );
}
