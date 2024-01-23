//import { useState } from "react-native";
import { createContext, useState } from "react";
const ThemeContext = createContext();

function ThemeProvider(props) {
  const [theme, setTheme] = useState("light");
  console.log("theme: " + theme);

  const lightColors = {
    primary: "#166FFF",
    primaryOpaque: "#9FBFF4",
    primaryLight: "#E5EFFF",
    secondary: "red",
    light: "white",
    dark: "black",
    green: "#6AEE67",
  };
  const darkColors = {
    primary: "#E5EFFF",
    primaryOpaque: "#9FBFF4",
    primaryLight: "#166FFF",
    secondary: "red",
    light: "black",
    dark: "white",
    green: "#6AEE67",
  };

  //const isDark = Appearance.getColorScheme() === "dark";
  //const colorsTheme = isDark ? darkColors : lightColors;
  var colorsTheme = "light";

  const isTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    if (theme === "light") {
      colorsTheme = "light";
    } else {
      colorsTheme = "dark";
    }
    console.log("colorsTheme: " + colorsTheme);
  };

  const setDarkMode = () => {
    setTheme("dark");
    console.log("setTheme dark");
  };
  const setLightMode = () => {
    setTheme("light");
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };

//export const colors = theme === "light" ? lightColors : darkColors;
