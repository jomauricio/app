import React from "react";
import { Text, StyleSheet, TouchableHighlight } from "react-native";

const style = StyleSheet.create({
    butao: {
        fontSize: 28,
        fontWeight: "bold",
        backgroundColor: "gray",
        width: 95,
        height: 95,
        borderColor: "black",
        borderWidth: 1,
        textAlign: "center",
        padding: 20
    }
})


export default props => {

    return (

        <TouchableHighlight onPress={() => {}}>
            <Text style={style.butao}>{props.valor}</Text>
        </TouchableHighlight>
    )
}