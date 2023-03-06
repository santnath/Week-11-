
const play = $('#play');
const instructions = $('#instructions');
const boardGame = $('#boardGame');
const destroy = $('#destroy');
//allows the buttons to have a function of making board or destroying it
play.on("mousedown", () => {
    makeBoard();
    startGame();
})
destroy.on("mousedown", () =>{
    deleteBoard();
})
// makes the tic taq toe board
const makeBoard = () => {
    let count = 1;

    for (let r = 0; r < 3; r++) {
        let row = $(`<div/>`);
        for (let c = 0; c < 3; c++) {
            let button = $(`<button/>`, {
                id: `${count}`, 
                class: `slot`
            });
            row.append($(button).clone().text(``));
            count++;
        }
        $(boardGame).append(row);
    }
}

//deletes the board
const deleteBoard = () => {
    $(".slot").remove();
    instructions.remove();
    $('#popup').remove();
    let box =document.createElement("div");
    box.id = "popup";
}   

// rules the game follows to determine the winner. 
const startGame = () => {
    let player1 = {};
    let player2 = {};

    const X = "X";
    const O = "O";
    const firstMove = Math.random() < 0.5 ? X : O;
    currentPlayer = firstMove;
    let move = 0;
    let slots = new Array(9);
    let winner1 = false;
    let winner2 = false;
    let winner3 = false;
    let winner4 = false;
    instructions.prepend(`First move goes to: ${firstMove}`);
   // this will create the id for the individual boxes that the X O go in 
    $(`.slot`).on("mousedown", (e) => {
        console.log(e.target.id);
        playerMove(e.target.id);
    })
    // this lets the player click a box to put an X/O and move turn to other player
    const playerMove = (slot) => {
        move++;
        let click = $(`#${slot}`);
        click.text(currentPlayer);
        slots[slot-1] == currentPlayer;
        currentPlayer = currentPlayer === X ? O : X;
        click.off("mousedown");
        instructions.text(`It is ${currentPlayer}'s turn!`);
        gameLogic(); 
    }
    // This defines how to determine a winner.
    const gameLogic = () => {
        let slot1 = document.getElementById(1).outerText;
        let slot2 = document.getElementById(2).outerText;
        let slot3 = document.getElementById(3).outerText;
        let slot4 = document.getElementById(4).outerText;
        let slot5 = document.getElementById(5).outerText;
        let slot6 = document.getElementById(6).outerText;
        let slot7 = document.getElementById(7).outerText;
        let slot8 = document.getElementById(8).outerText;
        let slot9 = document.getElementById(9).outerText;
        
        let win1 = slot1 + slot2 + slot3;
        let win2 = slot4 + slot5 + slot6;
        let win3 = slot7 + slot8 + slot9;
        let win4 = slot1 + slot4 + slot7;
        let win5 = slot2 + slot5 + slot8;
        let win6 = slot3 + slot6 + slot9;
        let win7 = slot3 + slot5 + slot7;
        let win8 = slot1 + slot5 + slot9;

        if(win1 == `OOO`){
            $('#popup').append(`Player O wins`);
        }else if (win2 == `OOO`){
            $('#popup').append(`Player O wins`);
        }else if(win3== `OOO`){
            $('#popup').append(`Player O wins`);
        }else if(win4== `OOO`){
            $('#popup').append(`Player O wins`);
        }else if (win5 == `OOO`){
            $('#popup').append(`Player O wins`);
        }else if(win6== `OOO`){
            $('#popup').append(`Player O wins`);
        }else if(win7== `OOO`){
            $('#popup').append(`Player O wins`);
        }else if (win8 == `OOO`){
            $('#popup').append(`Player O wins`);
        }else if(win1 == `XXX`){
            $('#popup').append(`Player X wins`);
        }else if(win2 == `XXX`){
            $('#popup').append(`Player X wins`);
        }else if(win3 == `XXX`){
            $('#popup').append(`Player X wins`);
        }else if(win4 == `XXX`){
            $('#popup').append(`Player X wins`);
        }else if(win5 == `XXX`){
            $('#popup').append(`Player X wins`);
        }else if(win6 == `XXX`){
            $('#popup').append(`Player X wins`);
        }else if(win7 == `XXX`){
            $('#popup').append(`Player X wins`);
        }else if(win8 == `XXX`){
            $('#popup').append(`Player X wins`);
        }

    }
}