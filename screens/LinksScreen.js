import React from "react";
import { ScrollView, StyleSheet, View, TextInput, Text } from "react-native";
import { ExpoLinksView, } from "@expo/samples";

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.col}>
        <View style={styles.row}>
        <Text style={{height: 40}}>First</Text>
          <TextInput
            style={{height: 40}}
            placeholder="Type here to translate!"
            
          />
        </View>

      </View>

      
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: "Links"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  row: {
    flexDirection: 'row',
  },
  col: {
    flexDirection: 'column',
  }
});
