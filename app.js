const player1='X';
const player2='O';

var player = player1;
$("#currentPlayer").text("Player 1");

const $buttons = $(".btn-square-md")
$buttons.on("click", (event) => {
    const $clickedButton = $(event.target);
    $clickedButton.prop("disabled", true);
    $clickedButton.text(player);
    playGame(player);
});

function playGame(player) {
    var winner = false;
    const $buttons = $(".btn-square-md")
    $buttons.on("click", (event) => {
        const $clickedButton = $(event.target);
        $clickedButton.prop("disabled", true);
        $clickedButton.text(player);
    });

    if ($("#currentPlayer").text() === "Player 1") {
        player = player2
        $("#currentPlayer").text("Player 2");
    } else {
        $("#currentPlayer").text("Player 1");
        player = player1
    }
   
    // row 1
    if (($("#r1c1").text() !== " ") && 
        ($("#r1c1").text() === $("#r1c2").text() && $("#r1c2").text() === $("#r1c3").text())) {
        winner = $("#r1c1").text()
        return winner;
    // row 2
    } else 
    if ($("#r2c1").text() !== " " &&
        ($("#r2c1").text() === $("#r2c2").text() && $("#r2c2").text() === $("#r2c3").text())) {
        winner = $("#r2c1").text()
        return winner;
    // row 3
    } else 
    if ($("#r3c1").text() !== " " &&
        ($("#r3c1").text() === $("#r3c2").text() && $("#3c2").text() === $("#r3c3").text())) {
        winner = $("#r3c1").text()
        return winner;
    // col 1
    } else
    if ($("#r1c1").text() !== " " &&
        ($("#r1c1").text() === $("#r2c1").text() && $("#r2c1").text() === $("#r3c1").text())) {
        winner = $("#r1c1").text()
        return winner;
    // col 2
    } else
        if ($("#r1c2").text() !== " " &&
            ($("#r1c2").text() === $("#r2c2").text() && $("#r2c2").text() === $("#r3c2").text())) {
            winner = $("#r1c2").text()
            return winner;
    // col 3
    } else
        if ($("#r1c3").text() !== " " &&
            ($("#r1c3").text() === $("#r2c3").text() && $("#r2c3").text() === $("#r3c3").text())) {
            winner = $("#r1c3").text()
            return winner;
    // diagonal top-left bottom-right
    } else
        if ($("#r1c1").text() !== " " &&
            ($("#r1c1").text() === $("#r2c2").text() && $("#r2c2").text() === $("#r3c1").text())) {
            winner = $("#r1c1").text()
            return winner;
    // diagonal bottom-left top-right
    } else
        if ($("#r1c3").text() !== " " &&
            ($("#r1c3").text() === $("#r2c2").text() && $("#r2c2").text() === $("#r1c3").text())) {
            winner = $("#r1c3").text()
            return winner;
    // no winner
    } else  
            if ($("#r1c1").text() && $("#r1c2").text() && $("#r1c3"), $("#r2c1").text() && $("#r2c2").text() && $("#r2c3").text() && $("#r3c1").text() && $("#r3c2").text() && $("#r3c3").text() !== " ") {
        winner = "tie"
        return winner;
    }

    if (winner === "X") {
        alert("Player 1 Wins!")
    } else if (winner = "O") {
        alert("Player 2 Wins!")
    } else if (winner="tie") {
        alert("There was a tie!")
    }
 
};

$("#clear").on("click", (event) => {
    $(".btn-square-md").text("");
    $(".btn-square-md").prop("disabled", false);
});