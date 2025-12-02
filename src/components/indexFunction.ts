function startGame() {
  console.log("Game Started");
  window.location.href = '/gameboard';
}

if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    if (button) {
      button.addEventListener('click', startGame);
    }
  });
}