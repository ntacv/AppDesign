//import styles from "../../assets/styles/Styles.js";

import { StyleSheet, Text, View } from "react-native";

export default function Title() {
  return (
    <View>
      <Text style={style.h1}>Dashboard</Text>
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    textAlign: "center",
    backgroundColor: "blue",
    color: "red",
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
