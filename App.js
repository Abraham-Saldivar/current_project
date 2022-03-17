import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import WelcomeScreen from "./Components/WelcomeScreen";
import { useEffect, useState, useRef } from "react";
import TodoList from "./Components/TodoList";

function App() {
  const [isDisplayed, setIsDisplayed] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setIsDisplayed(false);
    }, 3000);
    () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          {isDisplayed && (
            <>
              <WelcomeScreen style={styles.container} />
            </>
          )}
          <StatusBar style="auto" />
        </View>
        {isDisplayed ? null : <TodoList />}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddbea9",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
