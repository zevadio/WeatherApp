import React from "react";
import {StyleSheet, SafeAreaView, FlatList, Text, StatusBar, ImageBackground } from "react-native";
import ListItem from "../components/ListItem";

const DATA = [
    {
    dt_txt: "2022-08-30 12:00:00",
    main: {
      temp_min: 292.84,
      temp_max: 295.45
    },
    weather: [
      {
        main: "Clear"
      }
    ],
    },
    {
        dt_txt: "2022-08-30 15:00:00",
        main: {
          temp_min: 292.84,
          temp_max: 295.45
        },
        weather: [
          {
            main: "Clear"
          }
        ],
        },
        {
            dt_txt: "2022-08-30 18:00:00",
            main: {
              temp_min: 292.84,
              temp_max: 295.45
            },
            weather: [
              {
                main: "Clear"
              }
            ],
            }   
]


const Empty = () => {
    <View> <Text> No data could be retrieved at this stage! Try again later </Text></View>
}
const UpcomingWeather = () => {
    const renderItem = ({item}) => (
        <ListItem condition={item.weather[0].main} dt_txt={item.dt_txt} temp_min={item.main.temp_min} temp_max={item.main.temp_max}/>
    )
  return(
    <SafeAreaView style={styles.container}>
        <ImageBackground 
            source={require("../../assets/cloud.jpg")} 
            style={styles.images}>
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item => item.dt_txt)}
            ListEmptyComponent={<Empty />}
        />
        </ImageBackground>
    </SafeAreaView> 
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "red",
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 5,
    backgroundColor: "pink"
  },
  temp: {
    color: "white",
    fontSize: 20
  },
  date: {
    color: "white",
    fontSize: 15
  },
  images: {
    flex: 1,
},
});

export default UpcomingWeather;


