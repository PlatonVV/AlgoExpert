// time O(n), space O(1)

function isValidSubsequence(array, sequence) {
 let arrIdx = 0
  let seqIdx = 0
  while (arrIdx < array.length && seqIdx < sequence.length) {
   if (array[arrIdx] === sequence[seqIdx]) {
     seqIdx++;
   } arrIdx++;
  }
  return seqIdx === sequence.length
}
