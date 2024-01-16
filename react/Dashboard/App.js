import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Homepage from "./assets/Homepage/Homepage";
//import styles from "./assets/styles/App.module.css";
//import styles from "./App.css";

export default function App() {
  return (
    <View style={style.header}>
      <Homepage></Homepage>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
