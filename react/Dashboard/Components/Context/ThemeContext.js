//import { useState } from "react-native";
import { createContext, useState, useMemo, useEffect } from "react";
import { lightColors, darkColors } from "../../assets/styles/Styles";

import AsyncStrorage from "@react-native-async-storage/async-storage";

const THEME_KEY = "THEME_STATE";
const ThemeContext = createContext();

function ThemeProvider(props) {
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(true);

  console.log("theme: " + theme);

  //load preference AsyncStorage
  useEffect(() => {
    async function loadTheme() {
      const storedTheme = await AsyncStrorage.getItem(THEME_KEY);
      console.log("storedTheme: " + storedTheme);
      setTheme(storedTheme || "light");

      setLoading(false);
    }
    loadTheme();
  }, []);

  //save preference AsyncStorage
  useEffect(() => {
    async function saveTheme() {
      await AsyncStrorage.setItem(THEME_KEY, theme);
    }
    saveTheme();
  }, [theme]);

  //const isDark = Appearance.getColorScheme() === "dark";
  //const colorsTheme = isDark ? darkColors : lightColors;
  //var colorsTheme = "light";

  const lightColors = {
    primary: "#166FFF",
    primaryOpaque: "#9FBFF4",
    primaryLight: "#E5EFFF",
    primaryDark: "#1055C4",
    secondary: "red",
    light: "white",
    dark: "black",
    green: "#6AEE67",
    //
    dark_back: "#011029",
    dark_cards: "#00235C",
  };
  const darkColors = {
    primary: "#E5EFFF",
    primaryOpaque: "#9FBFF4",
    primaryLight: "#166FFF",
    secondary: "red",
    light: "#011029",
    dark: "white",
    green: "#6AEE67",
    //
    dark_back: "#011029",
    dark_cards: "#00235C",
  };

  const colors = theme === "light" ? lightColors : darkColors;

  return (
    <ThemeContext.Provider value={{ theme, setTheme, colors }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };

//export const colors = theme === "light" ? lightColors : darkColors;
