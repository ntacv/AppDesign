import { useContext, useState } from "react";
import { ThemeContext } from "../../Components/Context/ThemeContext.js";
import { lightColors, darkColors } from "../../assets/styles/Styles.js";

export default function useTheme() {
  const { theme, setTheme } = useContext(ThemeContext);
  //console.log("theme: " + theme);

  //const isDark = Appearance.getColorScheme() === "dark";
  //const colorsTheme = isDark ? darkColors : lightColors;
  //var colorsTheme = "light";

  const isTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    if (theme === "light") {
      colorsTheme = "light";
    } else {
      colorsTheme = "dark";
    }
    //console.log("colorsTheme: " + colorsTheme);
  };

  const setDarkMode = () => {
    setTheme("dark");
    //console.log("setTheme dark");
  };
  const setLightMode = () => {
    setTheme("light");
  };

  return { theme, setTheme, isTheme, setDarkMode, setLightMode };
}
