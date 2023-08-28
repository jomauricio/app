import React from "react";
import { StyleSheet, Text, View } from "react-native";

const style = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "flex-end",
        height: 50
    },
    textDisplay:{
        fontSize: 36
    }
})


export default props => {
    return (
        <View style={style.display}>
            <Text style={style.textDisplay}>5828,20</Text>
        </View>
    )
}