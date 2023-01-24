import React from "react";
import { Button, StyleSheet, Text } from "react-native";

export const Case = (props) => {
    return (
        <>
            <Button title={props.value} onPress={props.onClick} style={styles.case}/>
        </>
    );
}

const styles = StyleSheet.create({
    case: {
        width: 200,
        height: 200,
    }
})