/*
We'll be adding only the numbers in the array which match the given condition.

Instruction
Create a function named conditionalSum that will be given an array of numbers and a condition, in this case odd or even. Given this condition, add up only the values which match that condition. If no values match the condition, return 0.

*/

const conditionalSum = function (values, condition) {
  // Your code here
  // let sum = 0;
  // for (let i = 0; i < values.length; i++) {
  //   if (condition === "even" && values[i] % 2 === 0) {
  //     sum += values[i];
  //   } else if (condition === "odd" && values[i] % 2 !== 0) {
  //     sum += values[i];
  //   }
  // }
  // return sum;

  //use Es6+ features

  const result = values.reduce((acc, val) => {
    if (condition === "even" && val % 2 === 0) {
      return acc + val;
    } else if (condition === "odd" && val % 2 !== 0) {
      return acc + val;
    }
    return acc;
  }, 0);
  return result;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even")); // 6
console.log(conditionalSum([1, 2, 3, 4, 5], "odd")); // 9
console.log(conditionalSum([13, 88, 12, 44, 99], "even")); // 144
console.log(conditionalSum([], "odd")); // 0

module.exports = conditionalSum;
