const min = 1;
const max = 100;

document.getElementById("MyButn").onclick = function () {
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById("MyLabel").innerHTML = randomNumber;
};
