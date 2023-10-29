const ROW_COUNT = 3
const COL_COUNT = 3
const EMPTY = ''

var gIsUserMove

var gBoard

init()
function init(){
    gIsUserMove = true
    gBoard = createBoard()
    
    console.table(gBoard)
    playGame()
}

function createBoard() {
    var mat = []
    for (var i = 0; i < ROW_COUNT; i++) {
        mat[i] = []
        for (var j = 0; j < COL_COUNT; j++) {
            mat[i][j] = EMPTY
        }
    }
    return mat
}
function playGame(){
    var isVictory = false
    var isGameOn = true
    var moveCount = ROW_COUNT * COL_COUNT
    while(isGameOn) {
        var pos = playMove()
        moveCount--
    
        var symbol = gIsUserMove ? 'X' : 'O'
    
        console.table(gBoard)
        isVictory = checkVictory(pos, symbol)
        if(isVictory){
            console.log(symbol === 'X' ? 'User' : 'Comuter', 'won!!')
            isGameOn = false
        } else if(moveCount === 0){
            console.log('Game over - board is full...');
            isGameOn = false
        }
        gIsUserMove = !gIsUserMove
    }
}

function playMove(){
    var pos

    if(gIsUserMove){
        pos = getUserMove()
    } else {
        pos = getComputerMove()
    }
    return pos
}

function getUserMove(){
    var posFound = false
    
    while(!posFound){

        var moveStr = prompt()
        var pos = getPos(moveStr)
        
        if(pos.i < 0 || pos.i >= ROW_COUNT || pos.j < 0 || pos.j >= COL_COUNT){
            console.log('Out of range!')
            continue
        }
        if(gBoard[pos.i][pos.j] !== EMPTY){
            console.log('Cell Ocupied!')
            continue
        }
        posFound = true
        gBoard[pos.i][pos.j] = 'X'
    }
    return pos
}
function getPos(moveStr){ // moveStr = 1,2
    var coords = moveStr.split(',')
    return { i: coords[0], j: coords[1] }
}

function getComputerMove(){
    var pos = findEmptyPos()
    gBoard[pos.i][pos.j] = 'O'
    return pos
}
function findEmptyPos(){
    for(var i = 0; i < gBoard.length; i++){
        for(var j = 0; j < gBoard[i].length; j++){
            if(gBoard[i][j] === EMPTY) return { i, j }
        }
    }
    return null
}


function checkVictory(lastPos, symbol){
    console.log('pos: ', lastPos)
    console.log('symbol: ', symbol)
    return false
}
// countInRow(rowIdx, symbol)
// countInCol(colIdx, symbol)
// countInPrimaryDiagonal(symbol)
// countInSecondaryDiagonal(symbol)

// init()
