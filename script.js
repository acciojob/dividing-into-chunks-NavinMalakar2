const arr = [1, 2, 3, 4, 1, 0, 2, 2];

function divide(arr, maxSum) {
  const result = [];
  let currentChunk = []
  let currentSum = 0;

  for (let num of arr) {
    if (currentSum + num <= maxSum) {
      currentChunk.push(num);
      currentSum += num;
    } else {
      result.push(currentChunk);
      currentChunk = [num];
      currentSum = num;
    }
  }

  // Add last chunk if not empty
  if (currentChunk.length > 0) {
    result.push(currentChunk);
  }

  return result;
}


const maxSum = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, maxSum)));
