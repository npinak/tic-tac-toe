// Game Module containing all code except for two event listeners at bottom
// All variables and functions private except for the 2 called by event listeners
let gameModule = (function () {
    
    const gameStatusMessage = document.getElementById('game-status');
    let gameActive = true;
    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    const winningMessage = () => `${currentPlayer} wins!`
    const tieMessage = "It's a tie";
    const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
    gameStatusMessage.innerText = currentPlayerTurn();

    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    // main public function for gameplay
    function handleClick(e) {
        const clickedSquare = e.target;
        const clickedSquareNumber = parseInt(clickedSquare.getAttribute('data-key'));

        if (gameBoard[clickedSquareNumber] !== "" || !gameActive) {
            return;
        }

        handlePlay(clickedSquare, clickedSquareNumber);
        handleResult();
    }


    // add player selection to gameboard and add the marker to the gameboard
    function handlePlay(clickedSquare, clickedSquareNumber) { //(clickedElement, squareIndex)
        gameBoard[clickedSquareNumber] = currentPlayer;
        clickedSquare.innerText = currentPlayer;
        if (currentPlayer === "X") {
            clickedSquare.style.color = '#219EBC'; // #### change colors ####
        } else {
            clickedSquare.style.color = '#FB8500'; // #### change colors ####
        }
    }

   

})();

//
document.querySelectorAll('.board-square').forEach(square => square.addEventListener('click', gameModule.handleClick));
document.getElementById('restart-game').addEventListener('click', gameModule.restartGame);