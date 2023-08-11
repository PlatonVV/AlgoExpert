function sortedSquaredArrayFirst(array) {
   const squaredArray = new Array(array.length).fill(0);
    for (let idx = 0; idx < array.length; idx++) {
        const value = array[idx];
        squaredArray[idx] = value * value;
    }
    return squaredArray.sort((a , b) => a-b)
}

function sortedSquaredArraySecond(array) {
    const sortedSquares = new Array(array.length).fill(0);
    let smallestIdx = 0
    let largestIdx = array.length - 1
    for (let idx = array.length - 1; idx >= 0; idx--) {
        const smallestValue = array[smallestIdx]
        const largestValue = array[largestIdx]
        if (Math.abs(smallestValue) > Math.abs(largestValue)) {
            sortedSquares[idx] = smallestValue * smallestValue
            smallestIdx++;
        } else {
            sortedSquares[idx] = largestArrayValue * largestArrayValue;
            largestIdx--;
        }
    }
    return sortedSquares
}
