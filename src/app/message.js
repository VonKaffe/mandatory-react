/*
The Message component expects to be passed...
- state: a game state string (plr1,plr2,plr1won,plr2won,draw)
The component will then render an appropriate message.
*/

import React from 'react';

export default function Message(props){
    let newMessage;
    const gameMessage = {
        player1: "It is player 1's turn to play",
        player2: "It is player 2's turn to play",
        player1won: "Game over, the first player won",
        player2won: "Game over, the second player won",
        draw: "Game over, nobody won"
    };
    console.log (props);

    if (props.showMessage.winner === 1 || props.showMessage.winner === 2){
        props.showMessage.winner === 1 ? newMessage = gameMessage.player1won : newMessage = gameMessage.player2won
    }
    else if (!props.showMessage.board.includes(0)){
        newMessage = gameMessage.draw;
    }
    else {
        props.showMessage.player === "plr1" ? newMessage = gameMessage.player1 : newMessage = gameMessage.player2
    }


    return (
        <h2>{newMessage}</h2>
    );
}