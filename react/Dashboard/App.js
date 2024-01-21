import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useFonts from "expo-font";
import * as Font from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import Homepage from "./Components/Homepage/Homepage";
import Profile from "./Components/Profile/Profile";
import { default as style, colors } from "./assets/styles/Styles.js";
//import styles from "./assets/styles/App.module.css";
//import styles from "./App.css";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    Josefin: require("./assets/fonts/Josefin.ttf"),
    Montserrat: require("./assets/fonts/Montserrat.ttf"),
  });

  return (
    <View
      style={{ width: "100%", height: "100%", backgroundColor: colors.light }}
    >
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Homepage" component={Homepage} />
          <Stack.Screen name="Profil" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
