var gBoard
var gIsUserMove

init()

function init(){
    
    gIsUserMove = true
    gBoard = createBoard()
    console.table(gBoard)

    playGame()
}
function createBoard(){
    var board = []
    for(var i = 0; i < 3; i++){
        board[i] = []
        for(var j = 0; j < 3; j++){
            board[i][j] = ''
        }
    }
    return board
}
function playGame(){
    var isGameOn = true
    var cellCount = gBoard.length ** 2
    var moveCount = 0

    while(isGameOn){

        var pos = playMove()
        var symbol = gIsUserMove ? 'X' : 'O'
        var isVictory = checkVictory(pos, symbol)
        
        console.table(gBoard)
        moveCount++
        
        if(isVictory) {
            console.log('victory!', gIsUserMove ? 'user' : 'computer')
            isGameOn = false
        } else if(moveCount === cellCount) {
            console.log('tie!')
            isGameOn = false
        }
        gIsUserMove = !gIsUserMove
    }
}
function playMove(){
    var pos
    if(gIsUserMove){
        pos = getUserMove()
    } else{
        pos = getComputerMove()
    }
    return pos
}
function getUserMove(){
    var foundPos = false

    // Start without the while loop...
    while(!foundPos){
        var moveStr = prompt('Enter your move (i,j)...')
        var pos = getPos(moveStr)

        if(pos.i < 0 || pos.i > gBoard.length || pos.j < 0 || pos.j > gBoard[0].length){
            console.log('Pos out of range')
            continue
        }
        if(gBoard[pos.i][pos.j]){
            console.log('Pos not vacant')
            continue
        }
        gBoard[pos.i][pos.j] = 'X'
        foundPos = true
    }
    return pos
}
function getPos(moveStr){
    var coords = moveStr.split(',')
    return { i: +coords[0], j: +coords[1] }
}
function getComputerMove(){
    var pos = findEmptyPos()
    if(pos) gBoard[pos.i][pos.j] = 'O'
    return pos
}
function findEmptyPos(){
    for(var i = 0; i < gBoard.length; i++){
        for(var j = 0; j < gBoard[i].length; j++){
            if(!gBoard[i][j]) return { i, j }
        }
    }
    return null
}
function checkVictory(lastPos, symbol){
    console.log('lastPos: ', lastPos)
    if(countInRow(lastPos.i, symbol) === 3) return true
    if(countInCol(lastPos.j, symbol) === 3) return true
    
    if(lastPos.i === lastPos.j)
        if(countInPrimaryDiagonal(symbol) === 3) return true
    
    if(lastPos.i + lastPos.j === gBoard.legth - 1)
        if(countInSecondaryDiagonal(symbol) === 3) return true

    return false
}
function countInRow(rowIdx, symbol){
    var count = 0
    for(var j = 0; j < gBoard[rowIdx].length; j++){
        if(gBoard[rowIdx][j] === symbol) count++
    }
    return count
}
function countInCol(colIdx, symbol){
    var count = 0
    for(var i = 0; i < gBoard.length; i++){
        if(gBoard[i][colIdx] === symbol) count++
    }
    return count
}
function countInPrimaryDiagonal(symbol){
    var count = 0
    for(var d = 0; d < gBoard.length; d++){
        if(gBoard[d][d] === symbol) count++
    }
    return count
}
function countInSecondaryDiagonal(symbol){
    var count = 0
    for(var i = 0; i < gBoard.length; i++){
        if(gBoard[i][gBoard.length - i - 1] === symbol) count++
    }
    return count
}

// Implement these functions

// createBoard()

// getUserMove()
// getPos(moveStr)

// getComputerMove()
// findEmptyPos()

// playMove()

// checkVictory(lastPos, symbol)
// countInRow(rowIdx, symbol)
// countInCol(colIdx, symbol)
// countInPrimaryDiagonal(symbol)
// countInSecondaryDiagonal(symbol)

// init()
// playGame()