import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import shuffle from "../utils/array";

const AnswerBox = (props) => {
  return (
    <TouchableOpacity onPress={props.click}>
      <View style={styles.answer_box}>
        <Text>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function WordsQuestion(props) {
  var answers = [];
  props.answers.map((item) => {
    answers.push(
      <AnswerBox key={item} name={item} click={props.onClick}></AnswerBox>
    );
  });
  answers = shuffle(answers);
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: props.uri,
          height: 200,
          width: 200,
        }}
      />
      <View style={styles.answers_container}>{answers}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 10,
  },
  answers_container: {
    width: "100%",
    marginTop: 40,
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  answer_box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 100,
    margin: 10,
    backgroundColor: "#C4C4C4",
  },
});
