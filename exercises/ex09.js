/*
In this exercise, we will be converting a normal string into camelCase text.

Case Maker
We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.

Instruction
Create a function named camelCase that will convert a string to camel case, and return the result.
*/

const camelCase = function (input) {
  // Your code here
  // let camelCased = "";
  // for (let i = 0; i < input.length; i++) {
  //   if (input[i] === " ") {
  //     camelCased += input[i + 1].toUpperCase();
  //     i++;
  //   } else {
  //     camelCased += input[i];
  //   }
  // }
  // return camelCased;

  //use Es6+ features
  // const words = input.split(" ");
  // const camelCased = words.map((word, index) => {
  //   if (index === 0) {
  //     return word;
  //   }
  //   return word.charAt(0).toUpperCase() + word.slice(1);
  // }).join("");
  // return camelCased;

  return input.split(" ").map((word, index) => {
    if (index === 0) {
      return word;
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join("");
};

console.log(camelCase("this is a string")); // thisIsAString
console.log(camelCase("loopy cornerstone")); //loopyCornerstone
console.log(camelCase("supercalifragalisticexpialidocious")); // supercalifragalisticexpialidocious

module.exports = camelCase;
