import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Feather } from "@expo/vector-icons";


const styles = StyleSheet.create({
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
      }
    });

    
const ListItem = (props) => {
    const { dt_txt, temp_min, temp_max, condition } = props
    return (
        <View style={styles.item}>
            <Feather name={"sun"} size={50} color={"white"}/>
            <Text style={styles.date}> {dt_txt} </Text>
            <Text style={styles.temp}> {temp_min} </Text>
            <Text style={styles.temp}> {temp_max} </Text>
        </View>
    )
}

export default ListItem;
