/*In this exercise we will be writing an algorithm, to detect if two queens on a chess board can attack each other.

Queen Threat Detector
A game of chess is played on an 8 column by 8 row board. In the game of chess, a queen can attack pieces which are on the same row, column, or diagonal.

Chess Board Queen

In JavaScript, we can represent a chessboard using an 8 by 8 array (8 arrays within an array). For this exercise, our chess board will have 2 queens, and nothing else. A 1 in the array represents a queen on the corresponding square, and a O in the array represents an unoccupied square.

So the following chess board:

chess board example

Would be represented in JavaScript like this:

[
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
Our first challenge will be to write a function that generates a chess board like this. We will then write a function to detect weather or not the two queens are positioned so that they attack each other.
*/

function generateBoard (whiteQueen, blackQueen) {
  // Put your solution here
  // const board = [];
  // for (let r = 0; r < 8; r ++) {
  //   const row = [];
  //   for (let c = 0; c < 8; c++) {

  //     if ((r === whiteQueen[0] && c === whiteQueen[1]) || (r === blackQueen[0] && c === blackQueen[1])) {
  //       row.push(1);
  //     }
  //     else {
  //       row.push(0);
  //     }
  //   }
  //   board.push(row);
  // }
  // return board;

  //use Es6+ features
  return Array.from({ length: 8 }, (_, r) =>
    Array.from({ length: 8 }, (_, c) =>{
      const isWhiteQueen = r === whiteQueen[0] && c === whiteQueen[1];
      const isBlackQueen = r === blackQueen[0] && c === blackQueen[1];
      return (isWhiteQueen || isBlackQueen) ? 1 : 0;
    })
  );
};

const queenThreat = function (board) {
  // Your code here
  // let whiteQueen = null;
  // let blackQueen = null;  
  // for (let y = 0; y < board.length; y++) {
  //   for (let x = 0; x < board[y].length; x++) {
  //     if (board[y][x] === 1) {
  //       if (!whiteQueen) {
  //         whiteQueen = [x, y];
  //       }
  //       else {
  //         blackQueen = [x, y];
  //       }
  //     }
  //   }
  // }
  // if (whiteQueen[0] === blackQueen[0] || whiteQueen[1] === blackQueen[1]) {
  //   return true;
  // }
  // if (Math.abs(whiteQueen[0] - blackQueen[0]) === Math.abs(whiteQueen[1] - blackQueen[1])) {
  //   return true;
  // }
  // return false;

  //use Es6+ features
  const queen = board.flatMap((row, r) => 
    row.map((cell, c) => cell === 1 ? [c, r] : null))
  .filter(Boolean);

  const [q1, q2] = queen;

  // const [r1, c1] = q1;
  // const [r2, c2] = q2;

  // const sameRow = r1 === r2;
  // const sameCol = c1 === c2;
  // const sameDiagonal = Math.abs(c1 - c2) === Math.abs(r1 - r2);

  const sameRow = q1[1] === q2[1];
  const sameCol = q1[0] === q2[0];
  const sameDiagonal = Math.abs(q1[0] - q2[0]) === Math.abs(q1[1] - q2[1]);

  return sameRow || sameCol || sameDiagonal;
};



let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
// Expected Output
// [
//   [0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [1, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0]
// ]
// true
// Input
whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
// Expected Output
// [
//   [1, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0]
// ]
// false
// Instruction
// Create a function generateBoard which will return a nested array representing the board, containing the location of two queens.
// Create a function called queenThreat that will indicate whether or not the two queens are positioned so that they attack each other.

module.exports = { queenThreat, generateBoard };