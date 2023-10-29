var gMat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

printPrimaryDiagonal(gMat)
printSecondaryDiagonal(gMat)

function printPrimaryDiagonal(squareMat) {
    for (var d = 0; d < squareMat.length; d++) {
        var item = squareMat[d][d]
        console.log(item)
    }
}
function printSecondaryDiagonal(squareMat) {
    for (var d = 0; d < squareMat.length; d++) {
        var item = squareMat[d][squareMat.length - d - 1]
        console.log(item)
    }
}
