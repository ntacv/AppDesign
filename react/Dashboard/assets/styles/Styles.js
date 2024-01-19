import { StyleSheet } from "react-native";

import Josefin from "./fonts/Josefin.ttf";

export default StyleSheet.create({
  homepage: {
    color: "red",
    textAlign: "center",
  },

  h1: {
    fontSize: 24,
    fontWeight: "bold",
  },

  text: {
    color: "white",
    fontFamily: "monospace",
  },

  header: {
    width: "100%",
    height: "600px",
    borderBottomRightRadius: "50px",
    overflow: "hidden",
    backgroundColor: "blue",
    color: "white",
    display: "flex",
    alignItems: "center",
  },

  imageBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.4,
  },

  flexCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },

  startButton: {
    margin: "auto",
    width: "70%",
    borderRadius: "50px",
    overflow: "hidden",
  },
});
