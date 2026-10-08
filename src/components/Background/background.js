import { ImageBackground, StyleSheet } from "react-native";

export default function Background({ style, image, children }) {
  return (
    <ImageBackground
      source={image}
      style={style ? style : styles.container}
      resizeMode="cover"
    >
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});