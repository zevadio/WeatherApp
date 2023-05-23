import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect = () => {
        console.log(`Our count value is: ${count}`);
    }

    const increaseCount = () => {
        setCount(count + 1);
    };

    const decreaseCount = () => {
        setCount(count - 1);
    };

    return (
        <View style={styles.container}>
            <Text> This is our counter: {count} </Text>
            <Button title="Increase" color="green" onPress={increaseCount} /> 
            <Button title="Decrease" color="green" onPress={decreaseCount} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    }
});

export default Counter;