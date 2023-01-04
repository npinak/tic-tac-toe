const gameModule =  (function () {
    
    const gameBoard = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "X";
    gameActive = true;

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

        // call function to add marker to gameboard
        addMarker(clickedSquare)

        // call function to check the result 
        checkResult(clickedSquareNumber)
        



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
    }

    function checkResult(clickedSquareNumber){

        gameBoard[clickedSquareNumber] = currentPlayer
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
                break;
            }
        }

        if(gameWon){
            alert("you won the game!!")
        }
    }


    return { handleClick }

})()


document.querySelectorAll('.board-square').forEach(square => square.addEventListener('click', gameModule.handleClick));

// console.log(square)