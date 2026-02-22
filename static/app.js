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