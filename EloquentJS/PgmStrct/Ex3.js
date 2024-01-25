/*
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
*/

function createChessboard(widHight){
    let chessboard = ''
    for(let row  = 0 ; row <= widHight ; row++){
        for(let col = 0; col<= widHight; col++){
            chessboard += (row + col) % 2 === 0 ? " ": "#";
        }
        chessboard += "\n";
    }
    return chessboard
}

console.log(createChessboard(8));