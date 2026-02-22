const boardEl = document.getElementById("board");
const statusEl = document.getElementById("status");
const formEl = document.getElementById("player-form");
const playerXInput = document.getElementById("player-x");
const playerOInput = document.getElementById("player-o");

const emptyBoard = () => Array.from({ length: 9 }, () => "");

let board = emptyBoard();
let currentPlayer = "X";
let gameOver = false;
let players = {
  X: "Player X",
  O: "Player O",
};


const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function renderBoard() {
  boardEl.innerHTML = "";
  board.forEach((value, index) => {
    const button = document.createElement("button");
    button.className = "cell";
    button.textContent = value;
    button.disabled = gameOver || value !== "";
    button.addEventListener("click", () => handleMove(index));
    boardEl.appendChild(button);
  });
}

function updateStatus(text) {
  statusEl.textContent = text;
}

function currentPlayerName() {
  return players[currentPlayer] || `Player ${currentPlayer}`;
}

function handleMove(index) {
  if (gameOver || board[index] !== "") {
    return;
  }

  board[index] = currentPlayer;
  const winner = getWinner();

  if (winner) {
    gameOver = true;
    updateStatus(`${players[winner]} wins!`);
  } else if (board.every((cell) => cell !== "")) {
    gameOver = true;
    updateStatus("Tie game!");
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    updateStatus(`${currentPlayerName()} turn`);
  }

  renderBoard();
}  

function getWinner() {
  for (const [a, b, c] of winningLines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}