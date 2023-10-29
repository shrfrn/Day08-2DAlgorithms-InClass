'use strict'

var gNums = getNums(7)

function drawNum() {
    return gNums.pop()
}

function shuffle(items) {
    var randIdx, temp, i

    for (i = items.length - 1; i > 0; i--) {
        randIdx = getRandomInt(0, items.length - 1);

        temp = items[i];
        items[i] = items[randIdx];
        items[randIdx] = temp;
    }
    return items;
}

///////////////////////////////////////////////////////////////////////////////

var gNums2 = getNums(7)
console.log('gNums2', gNums2)

var num = drawNum2()
console.log('Num is:', num)
console.log('gNums2', gNums2)

function drawNum2() {
    var idx = getRandomInt(0, gNums2.length)
    var num = gNums2[idx]
    
    gNums2.splice(idx, 1)
    return num
}


/////////////////////////////////////////////////////////////////////////////////

function getNums(count) {
    var nums = []
    for (var i = 1; i <= count; i++) {
        nums.push(i)
    }
    return nums
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is inclusive and the minimum is inclusive 
}