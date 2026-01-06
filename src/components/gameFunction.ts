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