
// ---------- A tictactoe gaming library! ------------

/*
A game is an object with...
- state: a string describing the current state:
  - 'plr1': It is player 1's turn to play
  - 'plr2': It is player 2's turn to play
  - 'plr1won': Game over, the first player won
  - 'plr2won': Game over, the second player won
  - 'draw': Game over, nobody won
- board: An array of 9 numbers, each of which are either:
  - 0: An empty square
  - 1: Player 1 has a marker here
  - 2: Player 2 has a marker here
- line: an array of all positions involved in the win, otherwise empty array (STRETCH TASK)
The board array goes from top left to bottom right. For example, the array
[0,1,2,1,2,0,1,0,2] represents this board:
  .---.---.---.
  |   | 1 | 2 |
  |---+---+---|
  | 1 | 2 |   |
  |---+---+---|
  | 1 |   | 2 |
  '---'---'---'
*/

/*
The newGame function will return a valid new game object.
*/

export const newGame = () => ({
    winner: 0,
    player: 'plr1',
    board: [0,0,0,0,0,0,0,0,0],
    line: []
});

/*
The makeMove function should be called with...
- game: A valid game object
- pos: A number 0-8 corresponding to where we want to play
It will return a new game object. If the move was invalid
(because the position was already taken or the game is over),
an unchanged game will be returned.
*/

export const makeMove = (game, pos) => {
    // ...to be implemented!
    const currentPlayer = game.player === 'plr1' ? 1 : 2;
    const newBoard = game.board.map((tile, index) => pos === index ? currentPlayer : tile);
    const winPatterns = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
    let playerPosIndexes = [];
    for (let i=0; i < newBoard.length; i++ ){
        if ( newBoard[i] === currentPlayer ){
            playerPosIndexes.push( i );
        }
    }
    let playerWon = false;

    /*function calculateWinner(squares){
    for(let i = 0; i < winPatterns.length; i++) {
        const [a, b, c] = winPatterns[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }
    }*/
    console.log(game.board + " " + " "  + game.player + " " + " " + newBoard + " " + " " +currentPlayer + " " + playerWon);
    return {winner: playerWon === true ? currentPlayer : 0, board: newBoard, player: game.player === 'plr1' ? 'plr2' : 'plr1', line:[]};
};



/*export const didIWin = (game, pos) => {
    const currentPlayer = game.player;
    const winPatterns = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
    const currentPlayerTiles = game.board.filter((tile, index) => currentPlayer
};*/