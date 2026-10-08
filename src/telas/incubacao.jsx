import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";

import Background from "../components/Background/background";
import ProgressBar from "../components/ProgressBar/progressBar";

export default function Incubacao({ navigation }) {
  const [progress, setProgress] = useState(75);

  function continuarIncubacao() {
    setProgress(100);

    setTimeout(() => {
      navigation.replace("home");
    }, 300);
  }

  return (
    <Background
      image={require("../../assets/fundohomeeincubar.png")}
      style={styles.background}
    >
      <View style={styles.container}>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            BARRA DE PROGRESSO
          </Text>
        </View>

        <Pressable
          onPress={continuarIncubacao}
          style={styles.eggButton}
        >
          <Image
            source={require("../../assets/digiovo.png")}
            style={styles.egg}
            resizeMode="contain"
          />
        </Pressable>

        <View style={styles.progressContainer}>
          <ProgressBar progress={progress} />
        </View>

      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 100,
    paddingHorizontal: 35,
  },

  titleContainer: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 18,
    paddingHorizontal: 25,
    width: "100%",
    alignItems: "center",
  },

  title: {
    color: "#000000",
    fontSize: 24,
    fontWeight: "900",
    textAlign: "center",
  },

  eggButton: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  egg: {
    width: 220,
    height: 220,
  },

  progressContainer: {
    width: "80%",
    marginBottom: 80,
  },
});