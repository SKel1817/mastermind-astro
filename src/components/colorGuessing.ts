let correctCombo: string[] = ['', '', '', ''];
let options: string[] = ['red', 'blue', 'green', 'yellow'];
let attemptCol: number = 0;
let attemptRow: number = 0;
let userGuesses: string[][] = 
[['', '', '', ''], 
 ['', '', '', ''], 
 ['', '', '', ''], 
 ['', '', '', ''],
 ['', '', '', ''],
 ['', '', '', ''],
 ['', '', '', ''],
 ['', '', '', ''],
 ['', '', '', ''],
 ['', '', '', ''],
 ['', '', '', ''],
 ['', '', '', '']]; 
//2d array, each row is an attempt.

// Add color helpers to update the UI pegs and row state
const COLOR_CLASSES = new Set(options);

function updateUIForGuess(rowIndex: number, colIndex: number, color: string): void {
  const row = document.querySelector(`.guess-row[data-row="${rowIndex}"]`) as HTMLElement | null;
  if (!row) return;
  const peg = row.querySelector(`.guess-peg[data-col="${colIndex}"]`) as HTMLElement | null;
  if (!peg) return;
  // Remove any existing color classes then apply the new color
  COLOR_CLASSES.forEach(c => peg.classList.remove(c));
  peg.classList.add(color);
  // Also store it in a data attribute if you want to read it elsewhere
  peg.setAttribute('data-color', color);
}

function setActiveRow(rowIndex: number): void {
  document.querySelectorAll('.guess-row').forEach(r => r.classList.remove('active'));
  const row = document.querySelector(`.guess-row[data-row="${rowIndex}"]`) as HTMLElement | null;
  if (row) row.classList.add('active');
}

function setFeedbackPegState(rowIndex: number, pegIndex: number, state: 'exact' | 'partial' | 'none'): void {
  const row = document.querySelector(`.guess-row[data-row="${rowIndex}"]`) as HTMLElement | null;
  if (!row) return;
  const feedbackPegs = row.querySelectorAll('.feedback-peg');
  const peg = feedbackPegs[pegIndex] as HTMLElement | undefined;
  if (!peg) return;
  peg.classList.remove('exact', 'partial');
  if (state !== 'none') peg.classList.add(state);
}

function correctAnswerGeneration(): void{
    for (let i = 0; i < 4; i++) {
        let correctI = Math.ceil(Math.random() * options.length);
        correctCombo[i] = options[correctI - 1];
    }
    console.log(correctCombo);
}

function guessColor(guess: string): void {
    userGuesses[attemptRow][attemptCol] = guess;
    // Update the UI peg for this guess
    updateUIForGuess(attemptRow, attemptCol, guess);

    console.log(`${guess} guess for ${attemptRow}, ${attemptCol}`);
    attemptCol++; //increment guess
    if (attemptCol >= 4) {
        if (attemptRow >= 12) {
            alert("No more attempts left!");
            return;
        }else{
            checkAnswer();
            attemptRow++; //handle guess grid traversal
            if(attemptRow >= 12){
                console.log('game over');
                return;
            }
            console.log('next row');
            attemptCol = 0;
            // Highlight the next active row
            setActiveRow(attemptRow);
        }
    }
}

function checkAnswer(): void {
    let correctCount: number = 0;
    for (let i = 0; i < 4; i++) {
        const guess = userGuesses[attemptRow][i];
        if (guess === correctCombo[i]) {
            console.log(`Correct color in correct position (index ${i})`);
            setFeedbackPegState(attemptRow, i, 'exact');
            correctCount++;
        } else if (correctCombo.includes(guess)) {
            console.log(`Correct color but wrong position (index ${i})`);
            setFeedbackPegState(attemptRow, i, 'partial');
        } else {
            console.log('Wrong color and position');
            setFeedbackPegState(attemptRow, i, 'none');
        }
    }
    if(correctCount === 4){
        alert("You Win!");
        return;
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

    // Initialize the first active row on load
    setActiveRow(0);
  });
}

correctAnswerGeneration(); //generate correct combination on load