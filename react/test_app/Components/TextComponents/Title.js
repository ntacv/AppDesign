//import styles from "../../assets/styles/Styles.js";

import { StyleSheet, Text, View } from "react-native";

import { default as style, colors } from "../../assets/styles/Styles.js";

export default function Title(props) {
  return (
    <View>
      <Text
        style={{
          ...style.h1,
          color: props.color ? props.color : colors.primary,
          fontSize: props.fontSize ? props.fontSize : "40px",
        }}
      >
        {props.children}
      </Text>
    </View>
  );
}
