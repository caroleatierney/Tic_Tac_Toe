const player1 = 'X';
const player2 = 'O';

// const imgJ = document.querySelector("img");
// const imgJ = $("#img-r1c1");
// imgJ.src = "./images/Jocie";
// const jBetta = imgJ.src
// const player1 = imgJ;

// const imgC = document.querySelector("img");
// imgC.src = "./images/Carole";
// const player2 = imgC;

let winner = false;
let player = player1;

$("#currentPlayer").text("Player 1");

const $buttons = $(".btn-square-md")
$buttons.on("click", (event) => {
    // const imgJ = document.querySelector("#img-r1c1");
    // const imgJ = $("#img-r1c1");
    // imgJ.src = "./images/Jocie.png";
    const $clickedButton = $(event.target);
    $clickedButton.prop("disabled", true);
    $clickedButton.text(player);
    // document.querySelector("#img-r1c1").text(imgJ.src)
    // $clickedButton.text(imgJ.src);

    // $("#r1c1").replaceWith("<img src='loading.gif'>");
    // watch video

    // var element = document.getElementById('#r1c1');
    // element.setAttribute('type', 'image');
    // element.setAttribute('src', './images/Jocie.png');
    $("#r1c1").attr("href", "./images/Jocie.png");

    let r1c1 = $("#button-r1c1").text();
    let r1c2 = $("#button-r1c2").text();
    let r1c3 = $("#button-r1c3").text();
    let r2c1 = $("#button-r2c1").text();
    let r2c2 = $("#button-r2c2").text();
    let r2c3 = $("#button-r2c3").text();
    let r3c1 = $("#button-r3c1").text();
    let r3c2 = $("#button-r3c2").text();
    let r3c3 = $("#button-r3c3").text();
    playGame(player, r1c1, r1c2, r1c3, r2c1, r2c2, r2c3, r3c1, r3c2, r3c3)
    // display winner or tie
    if (winner === "X") {
        $("#currentPlayer").text("");
        $(".btn-square-md").prop("disabled", true);
        $("#winner").text("Player 1 Wins!")
    } else if (winner === "O") {
        $("#currentPlayer").text("");
        $(".btn-square-md").prop("disabled", true);
        $("#winner").text("Player 2 Wins!")
    } else if (winner === "tie") {
        $("#currentPlayer").text("");
        $(".btn-square-md").prop("disabled", true);
        $("#winner").text("There was a tie!")
    } else if ($("#currentPlayer").text() === "Player 1") {
        $("#currentPlayer").text("Player 2");
        player = player2;
    } else {
        $("#currentPlayer").text("Player 1");
        player = player1
    }
});

function playGame(player, r1c1, r1c2, r1c3, r2c1, r2c2, r2c3, r3c1, r3c2, r3c3) {

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
    } else if (r1c1 && r1c2 && r1c3 && r2c1 && r2c2 && r2c3 && r3c1 && r3c2 && r3c3 !== " ") {
        winner = "tie"
    }
};

$("#clear").on("click", (event) => {
    $(".btn-square-md").text("");
    $(".btn-square-md").prop("disabled", false);
});





/**
 * 
 * winning combinations:
 * 
 */
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
]

let gameBoard = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

