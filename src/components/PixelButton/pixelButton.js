import { Pressable, Text, StyleSheet, ImageBackground } from "react-native";

export default function PixelButton({
  image,
  title,
  onPress,
  style,
  textStyle,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, style]}
    >
      {image ? (
        <ImageBackground
          source={image}
          resizeMode="contain"
          style={styles.imageBackground}
        >
          <Text style={[styles.text, textStyle]}>
            {title}
          </Text>
        </ImageBackground>
      ) : (
        <Text style={[styles.text, textStyle]}>
          {title}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 58,
    minWidth: 110,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },

  imageBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "900",
    textAlign: "center",
  },
});