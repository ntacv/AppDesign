import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useFonts from "expo-font";
import * as Font from "expo-font";
import { StyleSheet, Text, View, useColorScheme, useState } from "react-native";
import { useContext } from "react";
import Homepage from "./Components/Homepage/Homepage";
import Profile from "./Components/Profile/Profile";
import SettingsPage from "./Components/SettingsPage/SettingsPage.js";
import { default as style, colors, isTheme } from "./assets/styles/Styles.js";
//import styles from "./assets/styles/App.module.css";
//import styles from "./App.css";

import { ThemeProvider } from "./Components/Context/ThemeContext.js";

const Stack = createNativeStackNavigator();

// const Theme = (theme) => {
//   console.log("Theme: " + theme);
//   if (theme === "light") {
//     colors.light = "#fff";
//     colors.primary = "#000";
//     colors.primaryOpaque = "rgba(0, 0, 0, 0.5)";
//   } else if (theme === "dark") {
//     colors.light = "#000";
//     colors.primary = "#fff";
//     colors.primaryOpaque = "rgba(255, 255, 255, 0.5)";
//   }
// };

export default function App() {
  //const [Theme, setTheme] = useState("light");

  //const useTheme = useColorScheme();
  //const isDarkMode = useTheme === "dark";
  //console.log("Theme: " + useTheme);

  const [fontsLoaded] = Font.useFonts({
    Josefin: require("./assets/fonts/Josefin.ttf"),
    PoppinsMedium: require("./assets/fonts/Poppins/Poppins-Medium.ttf"),
    Poppins: require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
    PoppinsLight: require("./assets/fonts/Poppins/Poppins-Light.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    SFdisplay: require("./assets/fonts/SFdisplay/SFdisplay.ttf"),
    Montserrat: require("./assets/fonts/Montserrat.ttf"),
  });

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Homepage" component={Homepage} />
            <Stack.Screen name="Settings" component={SettingsPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </View>
  );
}
