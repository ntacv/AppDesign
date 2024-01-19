import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Homepage from "./assets/Homepage/Homepage";
import style_file from "./assets/styles/Styles.js";
//import styles from "./assets/styles/App.module.css";
//import styles from "./App.css";

export default function App() {
  return (
    <View style={{ width: "100%" }}>
      <Homepage style={style_file.homepage}></Homepage>
    </View>
  );
}
