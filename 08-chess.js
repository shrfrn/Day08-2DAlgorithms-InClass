// var board = [
//     ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
//     ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
//     ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
// ]
var gBoard = [
    ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
    ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'],
]

console.table(board)

board[4][4] = board[6][4]
console.table(board)

board[6][4] = ' '
console.table(board)