import React, { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CurrentWeather from "./src/screens/CurrentWeather";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";
import { Feather } from "@expo/vector-icons";
import * as Location from "expo-location";
import { WEATHER_API_KEY } from "@env";

const App = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [weather, setWeather] = useState([])
  const Tab = createBottomTabNavigator()
  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])

  const fetchWeatherData = async() => {
    try {
      const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
      const data = await res.json()
      setWeather(data)
    } catch (e) {
      setError("Couldn't fetch weather")
    } finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    (async() => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== "granted") {
        setError("Permission to access location was denied.")
        return
      } 
      let location = await Location.getCurrentPositionAsync({})
      setLat(location.coords.latitute)
      setLon(location.coords.longitude)
      await fetchWeatherData()
    })()
}, [lat,lon])

  if (loading) {
    return (
      <View style={styles.container}>
       <ActivityIndicator size="large" color="blue" /> 
      </View>
    );
  }
  return (
  <NavigationContainer>
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: "tomato",
      tabBarInactiveTintColor: "grey",
    }}>
      <Tab.Screen name="Current Weather" component={CurrentWeather} options={{
        tabBarIcon: ({ focused }) => (<Feather name={"droplet"} size={25} color={focused ? "tomato" : "black"}/>)
      }} />
      <Tab.Screen name="Upcoming Weather" component={UpcomingWeather} options={{
        tabBarIcon: ({ focused }) => (<Feather name={"clock"} size={25} color={focused ? "tomato" : "black"}/>)
      }} />
      <Tab.Screen name="City" component={City} options={{
        tabBarIcon: ({ focused }) => (<Feather name={"home"} size={25} color={focused ? "tomato" : "black"}/>)
      }} />
    </Tab.Navigator>
  </NavigationContainer>
)};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
  container:{
    justifyContent:"center", 
    flex:1,
  }
});

export default App;