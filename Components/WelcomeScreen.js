import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { useState } from "react";
import CircularProgress from "react-native-circular-progress-indicator";
function WelcomeScreen() {
  const [value, setValue] = useState(0);

  return (
    <ScrollView>
      <View style={styles.container}>
        <CircularProgress
          radius={100}
          value={100}
          textColor="#222"
          fontSize={20}
          valueSuffix={"%"}
          inActiveStrokeColor={"#2ecc71"}
          inActiveStrokeOpacity={0.2}
          inActiveStrokeWidth={6}
          duration={3000}
          onAnimationComplete={() => setValue(50)}
        />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddbea9",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 250,
  },
});

export default WelcomeScreen;
