import React from "react";
import { SafeAreaView, Text, View, StyleSheet, ImageBackground, StatusBar } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const City = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/city.jpg")}
        style={styles.imageLayout}
      >
        <View style={styles.content}>
          <Text style={styles.cityName}>Lisboa</Text>
          <Text style={styles.countryName}>Portugal</Text>
          <View style={styles.popWrapper}>
            <FontAwesome5 name="city" size={50} color="red" />
            <Text style={styles.popText}> Pop: 8000</Text>
          </View>
          <View style={styles.riseSetWrapper}>
            <Feather name="sunrise" size={50} color="green" />
            <Text style={styles.riseSetText}>10:46:48am</Text>
            <Feather name="sunset" size={50} color="blue" />
            <Text style={styles.riseSetText}>17:21:48pm</Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  imageLayout: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  cityName: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  countryName: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  popWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  popText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  riseSetWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});

export default City;
