"use strict";

console.log("klik tæller starter...");

//Variabler
const countDisplay = document.querySelector("#counter");
const clickButton = document.querySelector("#click-button");
const resetButton = document.querySelector("#reset-button");
const clearButton = document.querySelector("#clear-button");

//variabel til tælleren på 0
let count = 0;

//tjek i consollen
console.log(countDisplay);
console.log(clickButton);
console.log(resetButton);

/* 
//læg 1 til tælleren, når der klikkes
clickButton.addEventListener("click", function () {
  count = count + 1;
  countDisplay.textContent = count;

  //farveskift ved tællerværdi 10
  if (count > 10) {
    countDisplay.style.color = "red";
  }
  if (count === 10) {
    console.log("Du har nu nået 10 klik");
  }
});



//nulstil tæller
resetButton.addEventListener("click", function () {
  count = 0;
  countDisplay.textContent = count;
  countDisplay.style.color = "#ffd700";
});



// træk 1 fra tælleren, når der klikkes
clearButton.addEventListener("click", function () {
  if (count > 0) {
    count = count -1;
    countDisplay.textContent = count;
  };
  if (count <= 10) {
    countDisplay.style.color = "#ffd700";
  }
});
 */

//Forsimplet - funktioner til hver knap

function plusCount() {
  count = count + 1;
  countDisplay.textContent = count;
  //farveskift ved tællerværdi 10
  if (count > 10) {
    countDisplay.style.color = "red";
  }
  if (count === 10) {
    console.log("Du har nu nået 10 klik");
  }
}

function minusCount() {
  if (count > 0) {
    count = count - 1;
    countDisplay.textContent = count;
  }
  if (count <= 10) {
    countDisplay.style.color = "#ffd700";
  }
}

function deleteCount() {
  count = 0;
  countDisplay.textContent = count;
  countDisplay.style.color = "#ffd700";
}

clickButton.addEventListener("click", plusCount);
clearButton.addEventListener("click", minusCount);
resetButton.addEventListener("click", deleteCount);
