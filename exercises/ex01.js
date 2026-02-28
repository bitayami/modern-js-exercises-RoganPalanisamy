/*
In this exercise, we will be given an array of 2 or more numbers. 
We will then have to find the two largest numbers in that array, and sum them together.

Instruction
Create a function named sumLargestNumbers that will receive an array of numbers and return the sum of the two largest numbers in that array.
*/

const sumLargestNumbers = function (data) {
  // let largest = -Infinity;
  // let secondLargest = -Infinity;
  // for (let i = 0; i < data.length; i++) {
  //   if (data[i] > largest) {
  //     secondLargest = largest;
  //     largest = data[i];
  //   } else if (data[i] > secondLargest) {
  //     secondLargest = data[i];
  //   }
  // }
  // return largest + secondLargest;

  // use Es6+ features
  const [first, second] = [...data].sort((a , b)=> b - a)
  return first + second;
};

console.log(sumLargestNumbers([1, 10])); // 11
console.log(sumLargestNumbers([1, 2, 3])); // 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // 126
console.log(sumLargestNumbers([-10, -4, -34, -6, -92, -2])); // -6

module.exports = sumLargestNumbers;

