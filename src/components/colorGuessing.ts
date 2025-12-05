let correctCombo: string[] = ['', '', '', ''];
let options: string[] = ['red', 'blue', 'green', 'yellow'];
let attemptCol: number = 0;
let attemptRow: number = 0;
let userGuesses: string[][] = 
[['', '', '', ''], 
 ['', '', '', ''], 
 ['', '', '', ''], 
 ['', '', '', '']]; 
//2d array, each row is an attempt.

function correctAnswerGeneration(): void{
    for (let i = 0; i < 4; i++) {
        let correctI = Math.ceil(Math.random() * options.length);
        correctCombo[i] = options[correctI - 1];
    }
    console.log(correctCombo);
}

function guessColor(guess: string): void {
    userGuesses[attemptRow][attemptCol] = guess; 
    console.log(`${guess} guess for ${attemptRow}, ${attemptCol}`);
    attemptCol++; //increment guess
    if (attemptCol >= 4) {
        if (attemptRow >= 4) {
            alert("No more attempts left!");
            return;
        }else{
            checkAnswer();
            attemptRow++; //handle guess grid traversal
            if(attemptRow >= 4){
                console.log('game over');
                return;
            }
            attemptCol = 0;
        }
    }
}

function checkAnswer(): void {
    let correctCount: number = 0;
    for (let i = 0; i < 4; i++) {
        if (userGuesses[attemptRow][i] === correctCombo[i]) {
            console.log(`Correct color in correct position`);
            correctCount++;
        } else if (correctCombo.includes(userGuesses[attemptRow][i])) {
            console.log(`Correct color but wrong position`);
        }else{
            console.log('u suck, wrong color wrong spot buddy');
        }
        if(correctCount === 4){
            alert("You Win!");
            return;
        }
    }
}

if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    const blue = document.querySelector('#guess-blue');
    if (blue) {
      blue.addEventListener('click', () => guessColor('blue'));
    }
    const red = document.querySelector('#guess-red');
    if (red) {
      red.addEventListener('click', () => guessColor('red'));
    }
    const green = document.querySelector('#guess-green');
    if (green) {
      green.addEventListener('click', () => guessColor('green'));
    }
    const yellow = document.querySelector('#guess-yellow');
    if (yellow) {
      yellow.addEventListener('click', () => guessColor('yellow'));
    }
  });
}

correctAnswerGeneration(); //generate correct combination on load