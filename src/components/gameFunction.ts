  let guesses = 12;
  let count = 0;
  let postionOneCorrect = false;
  let postionTwoCorrect = false;
  let postionThreeCorrect = false;
  let postionFourCorrect = false;

  let colorOneCorrect = false;
  let colorTwoCorrect = false;
  let colorThreeCorrect = false;
  let colorFourCorrect = false;

  type color = "red" | "blue" | "green" | "yellow";
  interface guessPostion {
    placeOne: color;
    placeTwo: color;
    placeThree: color;
    placeFour: color;
  }
  let answer: color[] = [];

	
  // function to generate a random 4 color code to guess with a postion related to each one
//   function generateRandomColorCode() : color[] {
//     for (let i = 0; i < 4; i++) {
//                 answer[i] = color[random.number(0,3)]
//                 return answer
//             }
//   }

//   let answerColorCode = generateRandomColorCode();

//   function checkGuess() {
//     // check if guess is correct color and postion if so set postionCorrect to true
//     if (guesses[0].placeOne === answerColorCode.placeOne) {
//       postionOneCorrect = true;
//     }
//     if (guesses[0].placeTwo === answerColorCode.placeTwo) {
//       postionTwoCorrect = true;
//     }
//     if (guesses[0].placeThree === answerColorCode.placeThree) {
//       postionThreeCorrect = true;
//     }
//     if (guesses[0].placeFour === answerColorCode.placeFour) {
//       postionFourCorrect = true;
//     }
//     // check to see if the guessed color is in the answer at all
//     if (answerColorCode.includes(guesses[0].placeOne)) {
//       colorOneCorrect = true;
//     }
//     if (answerColorCode.includes(guesses[0].placeTwo)) {
//       colorTwoCorrect = true;
//     }
//     if (answerColorCode.includes(guesses[0].placeThree)) {
//       colorThreeCorrect = true;
//     }
//     if (answerColorCode.includes(guesses[0].placeFour)) {
//       colorFourCorrect = true;
//     }
//     count++;
//   }
