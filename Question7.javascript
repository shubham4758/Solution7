7.// Solution

javascript:-

const arr = [1, 2, 3, 4, 5];

const reversedArr = arr.reduce((acc, current) => {
  // Add the current element to the beginning of the accumulator array
  acc.unshift(current);
  return acc;
}, []);

console.log(reversedArr); // Output: [5, 4, 3, 2, 1]
