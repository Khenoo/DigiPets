import React from "react";
import {
  View,
  Image,
  StyleSheet,
} from "react-native";

import Background from "../components/Background/background";
import PixelButton from "../components/PixelButton/pixelButton";

export default function Digievoluir({ navigation }) {
  return (
    <Background
      image={require("../../assets/fundodigievoluir.png")}
      style={styles.background}
    >
      <View style={styles.container}>

        <View style={styles.petContainer}>
          <Image
            source={require("../../assets/botamon.png")}
            style={styles.pet}
            resizeMode="contain"
          />
        </View>

        <View style={styles.actions}>

          <PixelButton
            title="DIGIREGREDIR"
            onPress={() => {}}
            style={styles.regredir}
          />

          <PixelButton
            title="DIGIEVOLUIR"
            onPress={() => {}}
            style={styles.evoluir}
          />

          <PixelButton
            title="VOLTAR"
            onPress={() => navigation.goBack()}
            style={styles.voltar}
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

  petContainer: {
    position: "absolute",
    top: "31%",
    left: 0,
    right: 0,
    height: "47%",
    justifyContent: "center",
    alignItems: "center",
  },

  pet: {
    width: 270,
    height: 270,
  },

  actions: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: "3%",
    height: "22%",
  },

  regredir: {
    position: "absolute",
    width: "42%",
    height: 65,
    minHeight: 0,
    left: "5%",
    top: 0,
  },

  evoluir: {
    position: "absolute",
    width: "42%",
    height: 65,
    minHeight: 0,
    right: "5%",
    top: 0,
  },

  voltar: {
    position: "absolute",
    width: 125,
    height: 60,
    minHeight: 0,
    alignSelf: "center",
    bottom: 0,
  },
});