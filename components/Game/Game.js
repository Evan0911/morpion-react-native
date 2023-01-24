import React from 'react';
import { Button, Text, View } from 'react-native';
import { Grid } from '../Grid';
import { calculateWinner } from '../../hooks';

export const Game = () => {

    const [squares, setSquares] = React.useState(Array(9).fill(""));
    const [xIsNext, setXIsNext] = React.useState(true);
    const [displayText, setDisplayText] = React.useState("Au tour de : X");

    const handleClick = (i) => {
        const squaresCopy = [...squares];
        if (calculateWinner(squaresCopy) || squaresCopy[i] !== "") {
            return;
        }
        squaresCopy[i] = xIsNext ? 'X' : 'O';
        setSquares(squaresCopy);
        calculateWinner(squaresCopy) ? setDisplayText(`Le gagnant est : ${xIsNext ? 'X' : 'O'}`) : setDisplayText(`Au tour de : ${xIsNext ? 'O' : 'X'}`);;
        setXIsNext(!xIsNext);
    }

    return (
        <>
            <Text>{displayText}</Text>
            <Grid
                onClick={(i) => () => handleClick(i)}
                squares={squares}
            />
        </>
    );
};