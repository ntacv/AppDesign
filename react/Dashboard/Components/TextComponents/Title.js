//import styles from "../../assets/styles/Styles.js";

import Josefin from "../../assets/styles/fonts/Josefin.ttf";

import { StyleSheet, Text, View } from "react-native";

export default function Title(props) {
  return (
    <View>
      <Text style={{ color: props.color, ...style.h1 }}>{props.children}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  h1: {
    textAlign: "center",
    fontFamily: Josefin,
    fontSize: 24,
    fontWeight: "bold",
  },
});
