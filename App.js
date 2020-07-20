import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import ScreenHeader from "./src/components/screen_header";
import WordsQuestion from "./src/components/words_question";
import dogsGet from "./src/modules/dogs";
let dogs = [];
export default function App() {
  const [lives, setLives] = useState(4);
  const [dog, setDog] = useState({
    pic: "",
    name: {
      english: "",
      arabic_1: "",
      arabic_2: "",
    },
  });

  useEffect(() => {
    dogsGet().then((result) => {
      dogs = result;
      setDog(dogs[0]);
    });
  }, []);

  const nextQuestion = (answer) => {
    if (answer !== dog["name"]["arabic_1"]) {
      setLives(lives - 1);
      setDog(dogs[1]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader back={true} hearts={lives} title={"0"} />
      <WordsQuestion
        uri={dog.pic}
        answers={[dog["name"]["arabic_1"], "bb", "cc", "dd"]}
        onClick={nextQuestion}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    paddingTop: 25,
  },
});
