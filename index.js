let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
document
  .querySelector(".img1")
  .setAttribute("src", "./images/dice" + randomNumber1 + ".png");
document
  .querySelector(".img2")
  .setAttribute("src", "./images/dice" + randomNumber2 + ".png");
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩player 1 won";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = "player 2 won🚩";
} else {
  document.querySelector("h1").textContent = "tie";
}
