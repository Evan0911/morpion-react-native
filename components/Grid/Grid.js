import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Case } from "../Case";

export const Grid = (props) => {

    return (<>
        <View>
            <View style={styles.row}>
                <Case onClick={props.onClick(0)} value={props.squares[0]} />
                <Case onClick={props.onClick(1)} value={props.squares[1]} />
                <Case onClick={props.onClick(2)} value={props.squares[2]}/>
            </View>
            <View style={styles.row}>
                <Case onClick={props.onClick(3)} value={props.squares[3]}/>
                <Case onClick={props.onClick(4)} value={props.squares[4]}/>
                <Case onClick={props.onClick(5)} value={props.squares[5]}/>
            </View>
            <View style={styles.row}>
                <Case onClick={props.onClick(6)} value={props.squares[6]}/>
                <Case onClick={props.onClick(7)} value={props.squares[7]}/>
                <Case onClick={props.onClick(8)} value={props.squares[8]}/>
            </View>
        </View>
    </>);
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
    },
})