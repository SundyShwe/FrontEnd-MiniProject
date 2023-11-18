let isX = true;
let winner = null;
const gameBoxes = Array(9).fill(null);
const boxes = document.querySelectorAll(".box");
const gameStatus = document.querySelector(".game-status");
const resetBtn = document.querySelector(".btn");
boxes.forEach((box, i) => {
  box.addEventListener("click", (e) => {
    if (winner || gameBoxes[i]) return;
    gameBoxes[i] = isX ? "X" : "O";
    box.textContent = gameBoxes[i];
    isX = !isX;
    winner = checkWinner();
    if (winner) {
      gameStatus.textContent = " Winner : " + winner;
      resetBtn.style.display = "block";
    } else gameStatus.textContent = isX ? "Next Player : X" : "Next Player : O";
  });
});

function checkWinner() {
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningPatterns.length; i++) {
    const [a, b, c] = winningPatterns[i];
    if (gameBoxes[a] === gameBoxes[b] && gameBoxes[b] === gameBoxes[c] && gameBoxes[c] !== null) {
      return gameBoxes[a];
    }
  }
  return null;
}

resetBtn.addEventListener("click", (e) => {
  gameBoxes.fill(null);
  isX = true;
  winner = null;
  boxes.forEach((box) => (box.textContent = ""));
  gameStatus.textContent = null;
  resetBtn.style.display = "none";
});
