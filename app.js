const gameModule =  (function () {
    
    
    function handleClick (e){
        const clickedSquare = e.target
        console.log(clickedSquare)

    }

    return { handleClick }

})()

// function handleClick(e) {
//     const clickedSquare = e.target
//     console.log(clickedSquare)

// }

document.querySelectorAll('.board-square').forEach(square => square.addEventListener('click', gameModule.handleClick));

// console.log(square)