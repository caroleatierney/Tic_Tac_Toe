// $("button-r1c1").hide();

// can you just use button for class?
const player1='X';
const player2='O';
let winner = false;

let clickedCells = [];

var player = player1;

$("#currentPlayer").text("Player 1");

playGame(player);

// $("#currentPlayer").text("player test");

// current player
// the winner is
// or tie
// button to clear all values

function playGame(player) {


    let i = 1;
    const $buttons = $("button")
    $buttons.on("click", (event) => {

        // console.log("event", event);
        const $clickedButton = $(event.target);
        $clickedButton.prop("disabled", true);
        $clickedButton.text(player);
        // console.log('clicked text', $clickedButton.text)

        console.log(("CURRENT", $("#currentPlayer").text));

        if ($("#currentPlayer").text === "Player 1") {
        // if (newPlayer === player1) {
            $("#currentPlayer").text("Player 2");
        } else {
            $("#currentPlayer").text("Player 1");
        }


        player = isThereAWinner(player)
        // alert(player)
        if (winner === true) {
            // show winner and leave
        }
    });
}

function isThereAWinner(player) {

// Create the array of winners

    // console.log($("#button-r1c1").val());

    // var email = $("#button-r1c1").val();
    // alert(email);

    // console.log($("#button-r1c2").text)
    // console.log($("#button-r1c3").val())
    // console.log($('#email').val());

    if ($("#button-r1c1") === $("#button-r1c2") === $("#button-r1c3")) {
        //  "(winner === true) {
        // return winner = false;
        alert("the winner is")
        return winner
    } else {
        return newPlayer = (player === player1) ? player2 : player1;
    }
}