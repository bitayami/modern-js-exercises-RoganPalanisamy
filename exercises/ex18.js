/*One classic method for composing secret messages is called a square code. In this activity, we will be creating our own Square Code algorithm.

Square Code
In Square Code, the spaces are removed from the english text and the characters are written into a square (or rectangle). For example, the sentence "If man was meant to stay on the ground god would have given us roots" is 54 characters long, once the spaces are removed, so it is written into a rectangle with 7 rows and 8 columns.

    ifmanwas
    meanttos
    tayonthe
    groundgo
    dwouldha
    vegivenu
    sroots
The square root of 54 (Math.sqrt(54)) is 7.3484692283495345. If we round this number up (Math.ceil(Math.sqrt(54))), we get 8. If we use that for the number of characters on each line (the number of columns), then our text will be close to a square shape.

The message is then coded by reading down the columns going left to right. For example, the message above is coded as:

imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau

And that's the output of the algorithm. We can then reverse the process to decrypt the text and read the original message.

Instruction
Create a function named squareCode that will receive a message, and return the secret square code version of the message.
*/

const squareCode = function (message) {
  // Put your solution here
  // const cleanMessage = message.replace(/ /g, "");
  // const length = cleanMessage.length;
  // const columns = Math.ceil(Math.sqrt(length));
  // let encoded = "";
  // for (let i = 0; i < columns; i++) {
  //   for (let j = i; j < length; j += columns) {
  //     encoded += cleanMessage[j];
  //   }
  //   if (i < columns - 1) {
  //     encoded += " ";
  //   }
  // }
  // return encoded;

  //use Es6+ features
  const cleanMessage = message.replace(/ /g, "");
  const cols = Math.ceil(Math.sqrt(cleanMessage.length));

  return Array.from({ length: cols }, (_, i) => {
    return Array.from(cleanMessage).filter((_, j) => j % cols === i).join("");
  }).join(" ");

};

console.log(squareCode("chill out")); // clu hlt io
console.log(squareCode("feed the dog")); // fto ehg ee dd
console.log(squareCode("have a nice day")); // hae and via ecy
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
); // imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau

module.exports = squareCode;
