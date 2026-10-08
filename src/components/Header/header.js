import { View, Text, StyleSheet } from "react-native";

export default function Header({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 2,
    borderBottomColor: "#D9D9D9",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
});
