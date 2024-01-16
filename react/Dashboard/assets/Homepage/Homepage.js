import { StyleSheet, Text, View } from "react-native";
//import styles from "../styles/Styles";
import Title from "../../Components/TextComponents/Title.js";

export default function Homepage() {
  return (
    <View style={style.header}>
      <Title>Title</Title>
      <Text style={style.header}>Homepage</Text>
      <Text>Homepage</Text>
    </View>
  );
}

//style
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
