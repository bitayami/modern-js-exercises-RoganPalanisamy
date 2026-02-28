/*Caze Maker II
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.

Instruction
Create a function named makeCaze that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
Our function should be able to handle all of these cases.

For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.

*/

const makeCaze = function (input, caze) {
  // Put your solution here
  // let result = input;
  // if (Array.isArray(caze)) {
  //   caze.forEach((c) => {
  //     result = makeCaze(result, c);
  //   });
  // } else {
  //   switch (caze) {
  //     case "camel":
  //       result = result.replace(/ (\w)/g, (_, c) => c.toUpperCase());
  //       break;
  //     case "pascal":
  //       result = result.replace(/(^\w| \w)/g, (_, c) => c.trim().toUpperCase());
  //       break;
  //     case "snake":
  //       result = result.replace(/ /g, "_");
  //       break;
  //     case "kebab":
  //       result = result.replace(/ /g, "-");
  //       break;
  //     case "title":
  //       result = result.replace(/(^\w| \w)/g, (_, c) => c.toUpperCase());
  //       break;
  //     case "vowel":
  //       result = result.replace(/[aeiou]/gi, (c) => c.toUpperCase());
  //       break;
  //     case "consonant":
  //       result = result.replace(/[^aeiou\s]/gi, (c) => c.toUpperCase());
  //       break;
  //     case "upper":
  //       result = result.toUpperCase();
  //       break;
  //     case "lower":
  //       result = result.toLowerCase();
  //       break;
  //   }
  // }
  // return result;

  //use Es6+ features
  if (Array.isArray(caze)) {
    return caze.reduce((result, c) => makeCaze(result, c), input);  
  } else {  
    switch (caze) {
      case "camel":
        return input.replace(/ (\w)/g, (_, c) => c.toUpperCase());    
      case "pascal":
        return input.replace(/(^\w| \w)/g, (_, c) => c.trim().toUpperCase());
      case "snake":
        return input.replace(/ /g, "_");
      case "kebab":
        return input.replace(/ /g, "-");
      case "title":
        return input.replace(/(^\w| \w)/g, (_, c) => c.toUpperCase());
      case "vowel":
        return input.replace(/[aeiou]/gi, (c) => c.toUpperCase());
      case "consonant":
        return input.replace(/[^aeiou\s]/gi, (c) => c.toUpperCase());
      case "upper":
        return input.toUpperCase();
      case "lower":
        return input.toLowerCase();
    }
  } 

};

console.log(makeCaze("this is a string", "camel")); // thisIsAString
console.log(makeCaze("this is a string", "pascal")); // ThisIsAString
console.log(makeCaze("this is a string", "snake")); // this_is_a_string
console.log(makeCaze("this is a string", "kebab")); // this-is-a-string
console.log(makeCaze("this is a string", "title")); // This Is A String
console.log(makeCaze("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCaze("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCaze("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING

module.exports = makeCaze;
