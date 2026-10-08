import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import Background from "../components/Background/background";
import PixelInput from "../components/PixelInput/pixelInput";
import PixelButton from "../components/PixelButton/pixelButton";

export default function Login({ navigation }) {
  return (
    <Background
      image={require("../../assets/fundologin.png")}
      style={styles.background}
    >
      <View style={styles.container}>

        <View style={styles.logoContainer}>
          <Text style={styles.logoTop}>DIGI</Text>
          <Text style={styles.logoBottom}>PET</Text>
        </View>

        <View style={styles.form}>
          <PixelInput
            placeholder="NOME DE USUÁRIO"
            autoCapitalize="none"
          />

          <PixelInput
            placeholder="SENHA"
            secureTextEntry
          />

          <PixelButton
            title="LOGAR"
            onPress={() => navigation.navigate("seleovo")}
            style={styles.loginButton}
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
    paddingHorizontal: 35,
    paddingTop: 45,
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 80,
  },

  logoTop: {
    color: "#FFFFFF",
    fontSize: 78,
    fontWeight: "900",
    lineHeight: 75,
    letterSpacing: -5,
  },

  logoBottom: {
    color: "#FFFFFF",
    fontSize: 78,
    fontWeight: "900",
    lineHeight: 75,
    letterSpacing: -5,
  },

  form: {
    width: "100%",
  },

  loginButton: {
    width: 165,
    height: 70,
    alignSelf: "center",
    marginTop: 5,
  },
});