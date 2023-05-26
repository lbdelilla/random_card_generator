import "./style.css";

const suit = ["♥", "♦", "♠", "♣"];
const value = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
let upsymbol = document.querySelector(".up");
let downsymbol = document.querySelector(".down");
let number = document.querySelector(".number");

window.onload = () => {
  function generateCard() {
    let pickSuit = suit[Math.floor(Math.random() * (suit.length - 1))];
    let pickValue = value[Math.floor(Math.random() * (value.length - 1))];
    upsymbol.innerHTML = pickSuit;
    downsymbol.innerHTML = pickSuit;
    number.innerHTML = pickValue;

    pickSuit === "♥" || pickSuit === "♦"
      ? ((upsymbol.style.color = "red"), (downsymbol.style.color = "red"))
      : ((upsymbol.style.color = "black"), (downsymbol.style.color = "black"));
  }
  document.querySelector(".btn").addEventListener("click", function() {
    generateCard();
  });
  setInterval(generateCard, 10000);
};
