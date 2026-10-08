import { View, StyleSheet } from "react-native";

export default function ProgressBar({ progress }) {
  return (
    <View style={styles.background}>
      <View
        style={[ styles.progress,{
            width: `${progress}%`,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: 18,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    overflow: "hidden",
  },

  progress: {
    height: "100%",
    backgroundColor: "#53D769",
  },
});