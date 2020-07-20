import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function ScreenHeader(props) {
  if (!props.back && !props.hearts) {
    styles.text = { ...styles.text, width: "93%" };
  }

  return (
    <View style={styles.container}>
      {props.back && (
        <Image
          style={styles.back_icon}
          source={require("../../assets/icons/icons-back.png")}
        />
      )}
      <Text style={styles.text}>{props.title}</Text>
      {props.hearts && (
        <View style={styles.heart_container}>
          <Image
            style={styles.heart_icon}
            source={require(props.hearts < 4
              ? "../../assets/icons/icons-empty-heart.png"
              : "../../assets/icons/icons-full-heart.png")}
          />
          <Image
            style={styles.heart_icon}
            source={require(props.hearts < 3
              ? "../../assets/icons/icons-empty-heart.png"
              : "../../assets/icons/icons-full-heart.png")}
          />
          <Image
            style={styles.heart_icon}
            source={require(props.hearts < 2
              ? "../../assets/icons/icons-empty-heart.png"
              : "../../assets/icons/icons-full-heart.png")}
          />
        </View>
      )}
      <Image
        style={styles.settings_icon}
        source={require("../../assets/icons/icons-kebab.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  heart_container: {
    display: "flex",
    flexDirection: "row",
  },
  heart_icon: {
    height: 25,
    width: 29,
  },
  back_icon: {
    height: 40,
    width: 40,
  },
  settings_icon: {
    height: 41,
    width: 36,
  },
  text: {
    textAlign: "center",
    width: "60%",
  },
});
