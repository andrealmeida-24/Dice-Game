"use strict";
const playerOneName = document.getElementById("player1-text");
const playerTwoName = document.getElementById("player2-text");
const diceOneImage = document.getElementById("dice1");
const diceTwoImage = document.getElementById("dice2");
const buttonRollDice = document.getElementById("roll-dice-button");
const buttonEditNames = document.getElementById("edit-names-button");

//Prompt Function
const promptNames = function () {
  let nameOne = prompt("Please enter player's 1 name!");
  if (nameOne != null) {
    playerOneName.innerText = nameOne;
  }

  let nameTwo = prompt("Please enter player's 2 name!");
  if (nameTwo != null) {
    playerTwoName.innerText = nameTwo;
  }
};

//Dice Photo Logic
const getDiceImage = function (val, img, imgID) {
  if (val === 1) {
    img.innerHTML = `<img id='dice-photo-p${imgID}' src='dice${val}.jpg' />`;
  } else if (val === 2) {
    img.innerHTML = `<img id='dice-photo-p${imgID}' src='dice${val}.jpg' />`;
  } else if (val === 3) {
    img.innerHTML = `<img id='dice-photo-p${imgID}' src='dice${val}.jpg' />`;
  } else if (val === 4) {
    img.innerHTML = `<img id='dice-photo-p${imgID}' src='dice${val}.jpg' />`;
  } else if (val === 5) {
    img.innerHTML = `<img id='dice-photo-p${imgID}' src='dice${val}.jpg' />`;
  } else {
    img.innerHTML = `<img id='dice-photo-p${imgID}' src='dice6.jpg' />`;
  }
};

//Function roll the dice
const rollTheDice = function () {
  const diceOneMath = Math.trunc(Math.random() * 6) + 1;
  const diceTwoMath = Math.trunc(Math.random() * 6) + 1;

  getDiceImage(diceOneMath, diceOneImage, 1);
  getDiceImage(diceTwoMath, diceTwoImage, 2);
};

window.addEventListener("load", promptNames());
