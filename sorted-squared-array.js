function sortedSquaredArrayFirst(array) {
    const squaredArray = new Array(array.length).fill(0)
    for (let idx = 0; idx < array.length; idx++) {
        const value = array[idx]
        squaredArray[idx] = value * value
    }
    return squaredArray.sort((a,b) => a - b)
}

function sortedSquaredArraySecond(array) {
    const squaredArray = new Array(array.length).fill(0)
    let smallerValueIdx = 0
    let largerValueIdx = array.length - 1
    for (let idx = array.length - 1; idx >= 0; idx--) {
        const smallerValue = array[smallerValueIdx]
        const largerValue = array[largerValueIdx]
        if (Math.abs(smallerValue) > Math.abs(largerValue)) {
            squaredArray[idx] = smallerValue * smallerValue
            smallerValueIdx++;
        } else {
            squaredArray[idx] = largerValue * largerValue
            largerValueIdx--;
        }
    }
    return squaredArray
}