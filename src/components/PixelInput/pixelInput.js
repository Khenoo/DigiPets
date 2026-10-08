import { TextInput, StyleSheet } from "react-native";

export default function PixelInput(props) {
  return (
    <TextInput
      {...props}
      style={[styles.input, props.style]}
      placeholderTextColor="#222"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingVertical: 14,
    marginBottom: 22,
    fontSize: 18,
    fontWeight: "800",
    color: "#000000",
    textAlign: "center",
  },
});