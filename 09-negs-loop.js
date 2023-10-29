var FOOD = '🍕'

var gBoard = [
    [' ', ' ', '🍕', ' ', ' ', '🍕'],
    [' ', '🍕', ' ', ' ', ' ', ' '],
    ['🍕', ' ', ' ', '🍕', ' ', ' '],
    [' ', '🍕', '🤪', ' ', ' ', ' '],
    ['🍕', ' ', '🍕', ' ', '🍕', ' '],
    [' ', ' ', ' ', ' ', ' ', ' '],
]

console.table(gBoard)

gPos = { i: 3, j: 2 }
console.log('gPos: ', gPos)
console.log('gBoard[gPos.i][gPos.j]: ', gBoard[gPos.i][gPos.j])

var foodCount = countFoodAround(gBoard, gPos.i, gPos.j)
console.log('foodCount: ', foodCount)

// Start like this
function countFoodAround(mat, rowIdx, colIdx){
    var foodCount = 0
    for(var i = rowIdx - 1; i <= rowIdx + 1; i++){
        for(var j = colIdx - 1; j <= colIdx + 1; j++){
            var currCell = mat[i][j]
            console.log('mat[',i, '][',j,']', currCell)
            if(currCell === FOOD) foodCount++
        }
    }
    return foodCount
}
// Skip the central cell (AKA the player)
function countFoodAround(mat, rowIdx, colIdx){
    var foodCount = 0
    
    for(var i = rowIdx - 1; i <= rowIdx + 1; i++){
        for(var j = colIdx - 1; j <= colIdx + 1; j++){
            if(i === rowIdx && j === colIdx) continue

            var currCell = mat[i][j]
            console.log('mat[',i, '][',j,']', currCell)
            if(currCell === FOOD) foodCount++
        }
    }
    return foodCount
}
// Skip edges
function countFoodAround(mat, rowIdx, colIdx){
    var foodCount = 0

    for(var i = rowIdx - 1; i <= rowIdx + 1; i++){
        if(i < 0 || i >= mat.length) continue
        for(var j = colIdx - 1; j <= colIdx + 1; j++){
            if(j < 0 || j >= mat[i].length) continue
            if(i === rowIdx && j === colIdx) continue

            var currCell = mat[i][j]
            console.log('mat[',i, '][',j,']', currCell)
            if(currCell === FOOD) foodCount++
        }
    }
    return foodCount
}