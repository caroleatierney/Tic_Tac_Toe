const player1='X';
const player2='O';

let winner = false;
let player = player1;

$("#currentPlayer").text("Player 1 Jormunga X");

const $cells = $(".grid-item")
$cells.on("click", (event) => {
    const $clickedCell = $(event.target);

    // Only allow cell to update once with value X or O
    if ($clickedCell.text() === "") {
        $clickedCell.text(player);

        // Need to work out the kinks to display the image adjusted for sell size with border and X or O over it
        // this is at least putting the image there - Note cell one id is naturally 0
        // const img = document.createElement('img');
        // let cellId = $clickedCell.index();
        // console.log("cell id", cellId)
        // img.src = "./images/Carole.png";
        // $("#cell-1").append(img);

    } else {
        leave; // dont proceed in event logic
    }

    // each time someone plays, set the variables for the clucnky if statement compare
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
    
    // display winner
    if (winner === "X") {
        $("#currentPlayer").text("");
        $("#winner").text("Player 1 Wins!")
    } else if (winner === "O") {
        $("#currentPlayer").text("");
        $("#winner").text("Player 2 Wins!")
    // display tie
    } else if (winner === "tie") {
        $("#currentPlayer").text("");
        $("#winner").text("There was a tie!")
    // switch current player
    } else if ($("#currentPlayer").text() === "Player 1 Jormunga X") {
        $("#currentPlayer").text("Player 2 Malachi O");
        player = player2;
    } else {
        $("#currentPlayer").text("Player 1 Jormunga X");
        player = player1
    }
});

function playGame(player,r1c1, r1c2, r1c3, r2c1, r2c2, r2c3, r3c1, r3c2, r3c3) {
    // Clunky if statements until I can figure out grid logic

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

// clear game button
$("#clear").on("click", (event) => {
    $(".grid-item").text("");
    player = player1;
    $("#currentPlayer").text("Player 1 Jormunga X");
    winner = false;
    $("#winner").text("")
});