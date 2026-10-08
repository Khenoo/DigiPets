import React from "react";
import {
  View,
  Image,
  StyleSheet,
} from "react-native";

import PixelButton from "../components/PixelButton/pixelButton";

export default function Batalha({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.scene}>

        <Image
          source={require("../../assets/fundobatalha.png")}
          style={styles.background}
          resizeMode="cover"
        />

        <Image
          source={require("../../assets/botamon.png")}
          style={styles.enemy}
          resizeMode="contain"
        />

        <Image
          source={require("../../assets/botamon.png")}
          style={styles.player}
          resizeMode="contain"
        />

      </View>

      <View style={styles.actions}>

        <PixelButton
          title="ATACAR"
          onPress={() => {}}
          style={styles.attack}
        />

        <PixelButton
          title="DEFENDER"
          onPress={() => {}}
          style={styles.defend}
        />

        <PixelButton
          title="FUGIR"
          onPress={() => navigation.goBack()}
          style={styles.run}
        />

        <PixelButton
          title="CURAR"
          onPress={() => {}}
          style={styles.heal}
        />

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0A1D",
  },

  scene: {
    height: "61%",
    position: "relative",
    overflow: "hidden",
  },

  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  enemy: {
    position: "absolute",
    width: 110,
    height: 110,
    top: "13%",
    right: "12%",
    transform: [
      { scaleX: -1 },
    ],
  },

  player: {
    position: "absolute",
    width: 170,
    height: 170,
    left: "5%",
    bottom: "4%",
  },

  actions: {
    flex: 1,
    position: "relative",
  },

  attack: {
    position: "absolute",
    width: 160,
    height: 68,
    minHeight: 0,
    top: "12%",
    alignSelf: "center",
  },

  defend: {
    position: "absolute",
    width: 155,
    height: 68,
    minHeight: 0,
    left: "15%",
    top: "43%",
  },

  run: {
    position: "absolute",
    width: 155,
    height: 68,
    minHeight: 0,
    right: "15%",
    top: "43%",
  },

  heal: {
    position: "absolute",
    width: 160,
    height: 68,
    minHeight: 0,
    bottom: "9%",
    alignSelf: "center",
  },
});