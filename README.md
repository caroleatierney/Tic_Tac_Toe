# Week-11-JQuery_and_AJAX

#MVP
- Using any of the tools you've worked with so far, create a game of Tic-Tac-Toe.
- Create a Tic-Tac-Toe game grid using your HTML element of choice.
- When a cell in the grid is clicked, an X or O should appear in that spot depending on whose turn it is.
- A heading should say whether it is X's or O's turn and change with each move made.
- A button should be available to clear the grid and restart the game.
- When a player has won, or the board is full and the game results in a draw, a Bootstrap alert or similar - Bootstrap component should appear across the screen announcing the winner.

### MVP is done, but would like to add the fish images to the cell with the X or O overlaying it

### Need to practice CSS grid update logic

Something like this...
const winningCombos = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,5,9],
    [3,5,7],
    [1,4,7],
    [2,5,8],
    [3,6,9]
]

const gameBoard = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]