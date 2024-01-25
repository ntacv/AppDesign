import { StyleSheet, Appearance } from "react-native";
import Theme from "../../App.js";
import useTheme from "../../App.js";
import { useContext, useState } from "react";
import {
  ThemeContext,
  colors as ThemeColor,
  colorsTheme,
} from "../../Components/Context/ThemeContext.js";

export const lightColors = {
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
export const darkColors = {
  primary: "#E5EFFF",
  primaryOpaque: "#9FBFF4",
  primaryLight: "#166FFF",
  secondary: "red",
  light: "black",
  dark: "white",
  green: "#6AEE67",
  //
  dark_back: "#011029",
  dark_cards: "#00235C",
};

export const colors = lightColors;

export default StyleSheet.create({
  homepage: {
    color: colors.secondary,
    textAlign: "center",
  },

  h1: {
    color: colors.light,
    fontFamily: "Poppins",
    fontSize: "35px",
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: "0.02em",
  },

  text: {},

  header: {
    width: "100%",
    borderBottomRightRadius: "70px",
    overflow: "hidden",
    backgroundColor: colors.primary,
    color: colors.light,
    display: "flex",
    alignItems: "center",
  },
  contentBack: {
    width: "100%",
    backgroundColor: colors.primary,
  },
  content: {
    backgroundColor: colors.light,
    borderTopLeftRadius: "70px",
    overflow: "hidden",
  },

  imageBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.3,
  },
  imageProfile: {
    width: "100px",
    height: "100px",
    borderRadius: "27px",
    overflow: "hidden",
  },

  flexCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },

  description: {
    padding: "50px",
    textAlign: "center",
  },

  nextButton: {
    backgroundColor: colors.primaryOpaque,
    margin: "auto",
    width: "60%",
    height: "50px",
    borderRadius: "50px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  nextButtonContainer: {
    position: "absolute",
    bottom: "40px",
    width: "100%",
    height: "50px",
  },

  iconButton: {
    position: "absolute",
    top: "-30px",
    left: "-60px",
    backgroundColor: "rgba(0, 0, 0, 0)",
    width: "140px",
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  iconButtonRight: {
    left: "auto",
    right: "-60px",
  },

  iconsHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    marginTop: "30px",
  },
  activityIcon: {
    backgroundColor: colors.green,
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    position: "absolute",
    right: "5px",
    top: "5px",
  },
  activityIconBack: {
    backgroundColor: colors.primary,
    width: "30px",
    height: "30px",
    right: "0px",
    top: "0px",
  },
});
