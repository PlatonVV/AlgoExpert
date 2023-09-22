// time 0(n^2) space 0(1)
function twoNumberSum1(array, targetSum) {
  for (i = 0; i < array.length - 1; i++) {
    const firstNum = array[i]
    for (j = i + 1; j < array.length; j++) {
      const secondNum = array[j]
      if (firstNum + secondNum === targetSum) {
        return [firstNum, secondNum]
      }
    }
  }
  return []
}

// time O(n) space O(n)
function twoNumberSum2(array, targetSum) {
  const nums = {}
  for (const num of array) {
    const potentialMatch = targetSum - num
    if (potentialMatch in nums) {
      return [potentialMatch, num]
    } else {
      nums[num] = true
    }
  }
  return []
}

function twoNumberSum(array, targetSum) {
}