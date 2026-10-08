import React from "react";
import {
  View,
  Image,
  StyleSheet,
} from "react-native";

import Background from "../components/Background/background";
import PixelButton from "../components/PixelButton/pixelButton";

export default function Home({ navigation }) {
  return (
    <Background
      image={require("../../assets/fundohomeeincubar.png")}
      style={styles.background}
    >
      <View style={styles.container}>

        <View style={styles.bottomPanel} />

        <View style={styles.petContainer}>
          <Image
            source={require("../../assets/botamon.png")}
            style={styles.pet}
            resizeMode="contain"
          />
        </View>

        <View style={styles.actions}>

          <PixelButton
            title="LUTAR"
            onPress={() => navigation.navigate("batalha")}
            style={[styles.actionButton, styles.lutar]}
          />

          <PixelButton
            title="TREINAR"
            onPress={() => {}}
            style={[styles.actionButton, styles.treinar]}
          />

          <PixelButton
            title="DESCANSAR"
            onPress={() => {}}
            style={[styles.actionButton, styles.descansar]}
          />

          <PixelButton
            title="BRINCAR"
            onPress={() => {}}
            style={[styles.actionButton, styles.brincar]}
          />

          <PixelButton
            title="EVOLUIR"
            onPress={() => navigation.navigate("digievoluir")}
            style={[styles.actionButton, styles.evoluir]}
          />

          <PixelButton
            title="COMER"
            onPress={() => {}}
            style={[styles.actionButton, styles.comer]}
          />

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
    position: "relative",
  },

  bottomPanel: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "34%",
    backgroundColor: "#0B0A1D",
  },

  petContainer: {
    position: "absolute",
    top: "7%",
    left: 0,
    right: 0,
    height: "48%",
    alignItems: "center",
    justifyContent: "center",
  },

  pet: {
    width: 190,
    height: 190,
  },

  actions: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "36%",
  },

  actionButton: {
    position: "absolute",
    width: "29%",
    height: 64,
    minHeight: 0,
    paddingHorizontal: 5,
  },

  lutar: {
    left: "4%",
    top: "5%",
  },

  treinar: {
    right: "4%",
    top: "5%",
  },

  descansar: {
    left: "35.5%",
    top: "35%",
    width: "29%",
  },

  brincar: {
    right: "4%",
    top: "35%",
  },

  evoluir: {
    left: "4%",
    top: "67%",
  },

  comer: {
    right: "4%",
    top: "67%",
  },
});