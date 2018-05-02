import React from 'react';

import {makeMove, newGame, gameMessage} from '../logic';

import Message from './message';
import Tile from './tile';

/*
The main game App! It should have a TicTacToe game state in its component state,
and use the Tile and Message components to render the game.
Then the `makeMove` function from the logic layer should be used to update the
game state as the tiles are being clicked.
The user should also be able to reset the game.
The App component should render an outer element with a `container` CSS class,
and all tiles in an element with a `board` CSS class.
*/

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            game: newGame()
        }
    }
    playerMove(i, value){
        if (value === 1 || value === 2) return;

        const newState = makeMove(this.state.game, i);
        this.setState({ game: newState });
    }

    resetGame() {
        this.setState(this.state.game = newGame());
    }


    render(){
        return (
            <div className="container">
                <div className="board">
                    {this.state.game.board.map((tile, index) => (
                        <Tile key={index} value={tile} move={() => this.playerMove(index, tile)}/>
                    ))}
                </div>
                <div className="messageBoard">
                    <Message showMessage={this.state.game}/>
                    <button onClick={() => this.resetGame()}>Reset</button>
                </div>
            </div>

        );
    }
}