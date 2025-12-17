const clicker = document.getElementById("clicker");
const counterDisplay = document.getElementById("clicks");
let counter = 0;
clicker.addEventListener("click", () => {
  counter++;
  counterDisplay.textContent = counter;
});
