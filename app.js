const game =  (function () {
    
    let gameBoard = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "X";
    let gameActive = true;
    let winningPlayer =''

    const gameStatusMessage = document.getElementById('game-status');
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


    function handleClick (e){
        const clickedSquare = e.target
        const clickedSquareNumber = parseInt(clickedSquare.getAttribute('data-key'));

        if (gameBoard[clickedSquareNumber] !== "" || !gameActive) {
            return;
        }
        //Must call function to:
        // add marker to gameboard and change player marker (x) 
        // check if there is a win

        // call function to check the result 
        checkResult(clickedSquareNumber)

        // call function to add marker to gameboard
        addMarker(clickedSquare)
    }

    // Function to add player marker to gameboard
    function addMarker(clickedSquare){
        clickedSquare.innerHTML = currentPlayer

        // Change player marker 
        if (currentPlayer === 'X'){
            currentPlayer = 'O'
        } else {
            currentPlayer = 'X'
        }
        
        // change player turn text if game is still active
        if (gameActive) {
            gameStatusMessage.innerText = currentPlayerTurn();
        }        
    }

    // function to check if the game has been won
    function checkResult(clickedSquareNumber){

        gameBoard[clickedSquareNumber] = currentPlayer
        console.log(gameBoard)
        let gameWon = false;

        for (let i = 0; i <= 7; i++) {
            let a = gameBoard[winningCombos[i][0]];
            let b = gameBoard[winningCombos[i][1]];
            let c = gameBoard[winningCombos[i][2]];

            if (!a || !b || !c) {
                continue;
            }
            if (a === b && b === c) {
                gameWon = true;
                console.log(a)
                winningPlayer = a
                break;
            }
        }

        // message if game has been won
        if(gameWon){
            gameStatusMessage.innerText =`${winningPlayer} won the game!` // change the message to someone winning
            gameActive = false // game become inactive
        }

        // message if game is a tie 
        if (gameBoard.includes('') === false){
            gameStatusMessage.innerText = `It's a tie game!`
            gameActive = false
        }
    }

    function restart(){
        gameBoard = ["", "", "", "", "", "", "", "", ""];
        document.querySelectorAll('.board-square').forEach(square => square.innerText = "");
        gameActive = true;
        currentPlayer = "X";
        gameStatusMessage.innerText = currentPlayerTurn();

    }

    return { handleClick, restart }

})()


document.querySelectorAll('.board-square').forEach(square => square.addEventListener('click', game.handleClick));
document.getElementById('restart-game').addEventListener('click', game.restart);
