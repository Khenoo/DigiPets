import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";

import Background from "../components/Background/background";
import PixelButton from "../components/PixelButton/pixelButton";

export default function SeleOvo({ navigation }) {
  return (
    <Background
      image={require("../../assets/fundoescolherovo.png")}
      style={styles.background}
    >
      <View style={styles.container}>

        <View style={styles.eggArea}>

          <Pressable style={styles.arrowLeft}>
            <Text style={styles.arrow}>‹</Text>
          </Pressable>

          <Image
            source={require("../../assets/digiovo.png")}
            style={styles.egg}
            resizeMode="contain"
          />

          <Pressable style={styles.arrowRight}>
            <Text style={styles.arrow}>›</Text>
          </Pressable>

        </View>

        <PixelButton
          title="SELECIONAR OVO"
          onPress={() => navigation.navigate("incubacao")}
          style={styles.button}
        />

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
    justifyContent: "space-between",
    paddingHorizontal: 35,
    paddingTop: 90,
    paddingBottom: 100,
  },

  eggArea: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  egg: {
    width: 210,
    height: 210,
  },

  arrowLeft: {
    position: "absolute",
    left: 15,
    zIndex: 5,
  },

  arrowRight: {
    position: "absolute",
    right: 15,
    zIndex: 5,
  },

  arrow: {
    color: "#000000",
    fontSize: 100,
    fontWeight: "900",
    lineHeight: 100,
  },

  button: {
    width: "100%",
    height: 72,
  },
});