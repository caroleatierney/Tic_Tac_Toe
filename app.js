const player1='X';
const player2='O';

let winner = false;
let player = player1;

$("#currentPlayer").text("Player 1 Jormunga X");

const $cells = $(".grid-item")
$cells.on("click", (event) => {
    const $clickedCell = $(event.target);

    // Only allow cell to update once
    if ($clickedCell.text() === "") {
        $clickedCell.text(player);
    } else {
        leave; // dont proceed in event logic
    }
    
    // $clickedCell.img.attr("src", "./images/Jocie.png");
    // $("#r1c1").replaceWith("<img src='loading.gif'>");
    // var element = document.getElementById('#r1c1');
    // element.setAttribute('type', 'image');
    // element.setAttribute('src', './images/Jocie.png');
    // $("#r1c1").attr("href", "./images/Jocie.png");

    let r1c1 = $("#cell-1").text();
    let r1c2 = $("#cell-2").text();
    let r1c3 = $("#cell-3").text();
    let r2c1 = $("#cell-4").text();
    let r2c2 = $("#cell-5").text();
    let r2c3 = $("#cell-6").text(); 
    let r3c1 = $("#cell-7").text();
    let r3c2 = $("#cell-8").text();
    let r3c3 = $("#cell-9").text();

    playGame(player, r1c1, r1c2, r1c3, r2c1, r2c2, r2c3, r3c1, r3c2, r3c3)
    
    // display winner or tie
    if (winner === "X") {
        $("#currentPlayer").text("");
        $("#winner").text("Player 1 Wins!")
    } else if (winner === "O") {
        $("#currentPlayer").text("");
        $("#winner").text("Player 2 Wins!")
    } else if (winner === "tie") {
        $("#currentPlayer").text("");
        $("#winner").text("There was a tie!")
    } else if ($("#currentPlayer").text() === "Player 1 Jormunga X") {
        $("#currentPlayer").text("Player 2 Malachi O");
        player = player2;
    } else {
        $("#currentPlayer").text("Player 1 Jormunga X");
        player = player1
    }
});

function playGame(player,r1c1, r1c2, r1c3, r2c1, r2c2, r2c3, r3c1, r3c2, r3c3) {

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
    // row 1
    if ((r1c1 !== "") && (r1c1 === r1c2 && r1c2 === r1c3)) {
        winner = r1c1
    // row 2
    } else if ((r2c1 !== "") && (r2c1 === r2c2 && r2c2 === r2c3)) {
        winner = r2c1
    // row 3
    } else if ((r3c1 !== "") && (r3c1 === r3c2 && r3c2 === r3c3)) {
        winner = r3c1
    // col 1
    } else if ((r1c1 !== "") && (r1c1 === r2c1 && r2c1 === r3c1)) {
        winner = r1c1
    // col 2
    } else if ((r1c2 !== "") && (r1c2 === r2c2 && r2c2 === r3c2)) {
        winner = r1c2
    // col 3
    } else if ((r1c3 !== "") && (r1c3 === r2c3 && r2c3 === r3c3)) {
        winner = r1c3
    // diagonal top-left bottom-right
    } else if ((r1c1 !== "") && (r1c1 === r2c2 && r2c2 === r3c3)) {
        winner = r1c1
    // diagonal bottom-left top-right
    } else if ((r3c1 !== "") && (r3c1 === r2c2 && r2c2 === r1c3)) {
        winner = r3c1
    // no winner - all spaces played
    } else if (r1c1 && r1c2 && r1c3 && r2c1 && r2c2 && r2c3 && r3c1 && r3c2 && r3c3 !== "") {
        winner = "tie"
    }
};

$("#clear").on("click", (event) => {
    $(".grid-item").text("");
    player = player1;
    $("#currentPlayer").text("Player 1 Jormunga X");
    winner = false;
    $("#winner").text("")
});