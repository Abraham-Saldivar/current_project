import { Button, View } from "react-native";
import { ScrollView, StyleSheet } from "react-native";
import { Text, TextInput, Alert, ActivityIndicator } from "react-native";
import { useEffect, useReducer, useState } from "react";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import React from "react";
function TodoList() {
  const [valueOne, setValueOne] = useState(null);
  const [valueTwo, setValueTwo] = useState(null);
  const [totalSum, setTotalSum] = useState(null);
  const [loading, setLoading] = useState(false);

  function addValues() {
    try {
      const totalSum = Number(valueOne) + Number(valueTwo);
      setTotalSum(totalSum);

      console.log(totalSum);

      Alert.alert("Total", `The total sum of the numbers is: ${totalSum}`, [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    } catch (e) {
      console.log(e);
    }
  }

  // TODO I need to make sure that I get the loading screen done by today, https://stackoverflow.com/questions/51763303/show-loader-when-button-is-clicked-in-react-native

  return (
    <ScrollView>
      <View>
        <Text> Please add the first item you would like to compute.</Text>
        <TextInput
          style={stylesInput.input}
          onChangeText={(val) => setValueOne(val)}
          keyboardType="numeric"
          placeholder="This is the first item."
          clearButtonMode="unless-editing"
          keyboardAppearance="dark"
          returnKeyType="done"
          selectionColor={"orange"}
        />
        <Text> Please add the second item you would like to compute.</Text>
        <TextInput
          style={stylesInput.input}
          onChangeText={(val) => setValueTwo(val)}
          keyboardType="numeric"
          placeholder="This is the first item."
          clearButtonMode="unless-editing"
          keyboardAppearance="dark"
          enablesReturnKeyAutomatically={true}
          returnKeyType="done"
          selectionColor={"orange"}
        />
      </View>
      <View></View>

      {valueOne === null || valueTwo === null ? null : (
        <Button title="Add the two numbers" onPress={addValues} />
      )}
    </ScrollView>
  );
}
const stylesInput = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TodoList;

// TODO: This is to add notes
//! This is a warning
//? This is a question
//* This is something important
