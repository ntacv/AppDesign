import { StyleSheet } from "react-native";

export const colors = {
  primary: "#166FFF",
  primaryOpaque: "#9FBFF4",
  primaryLight: "#E5EFFF",
  secondary: "red",
  light: "white",
  dark: "black",
  green: "#6AEE67",
};

export default StyleSheet.create({
  homepage: {
    color: colors.secondary,
    textAlign: "center",
  },

  h1: {
    color: colors.light,
    fontFamily: "Montserrat",
    fontSize: "40px",
    fontWeight: "bold",
    textAlign: "center",
  },

  text: {
    color: colors.light,
    fontFamily: "monospace",
  },

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
    opacity: 0.4,
  },
  imageProfile: {
    width: "100px",
    height: "100px",
    borderRadius: "30px",
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
    width: "70%",
    height: "50px",
    borderRadius: "50px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconsHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
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
