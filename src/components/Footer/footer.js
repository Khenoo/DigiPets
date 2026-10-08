import { View, StyleSheet } from "react-native";
import Background from "../Background/background";

export default function Footer({ image, children }) {
  return (
    <Background image={image} style={styles.container} >
      {children}
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 170,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 20,
  },
});