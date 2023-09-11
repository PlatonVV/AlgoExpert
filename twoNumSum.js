// O(n^2) time | O(1) space
function twoNumberSumFirst (array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    const firstNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const secondNum = array[j];
      if (firstNum + secondNum === targetSum) {
        return [firstNum, secondNum];
      }
    }
  }
  return [];
}

// 0(n) time | 0(1) space
function twoNumberSumSecond(array, targetSum) {
  const nums = {};
  for (const num of array) {
    let possibleMatch = targetSum - num;
    if (possibleMatch in nums) {
      return [possibleMatch, num];
    } else {
      nums[num] = true;
    }
  }
  return [];
}

function twoNumberSumThird(array, targetSum) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  return [];
}
