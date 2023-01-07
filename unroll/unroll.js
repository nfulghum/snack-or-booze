const square = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];


const unroll = (squareArray, arr = []) => {
    // remove the first row from the array and place in new array and refactor squareArray
    // 1,2,3,4 // 6, 7
    for (let i = 0; i < squareArray.length; i++) {
        arr.push(squareArray[0][i])
    }
    squareArray.shift();

    // loop through the array and remove the last element from each row in the array
    // 8,12,16, 11
    for (let j = 0; j < squareArray.length; j++) {
        arr.push(squareArray[j][squareArray.length])
        squareArray[j].pop()
    }


    // remove the remaining of the last row of the array in reverse
    // 15,14,13, 10
    for (let k = squareArray.length - 1; k >= 0; k--) {
        arr.push(squareArray[squareArray.length - 1][k])
    }
    squareArray.pop();

    // remove the first elements in the remaining rows
    // 9, 5
    for (let l = squareArray.length - 1; l >= 0; l--) {
        arr.push(squareArray[l][0])
        squareArray[l].shift()
    }

    // restart loops if any remaining
    if (squareArray.length > 0) {
        return unroll(squareArray, arr)
    }
    return arr
}

module.exports = unroll;
