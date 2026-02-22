const boardEl = document.getElementById("board");
const statusEl = document.getElementById("status");
const formEl = document.getElementById("player-form");
const playerXInput = document.getElementById("player-x");
const playerOInput = document.getElementById("player-o");

const emptyBoard = () => Array.from({ length: 9 }, () => "");
