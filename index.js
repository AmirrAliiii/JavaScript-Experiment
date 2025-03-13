const min = 1;
const max = 100;
let running = false;

let WhosTurn = 1;
let player1LineContent = "Player 1 Attemps: ";
let player2LineContent = "Player 2 Attemps: ";
let player1Attempts = 0;
let player2Attempts = 0;
const StartBtn = document.getElementById("b1");
StartBtn.addEventListener("click", () => {
  running = true;

  let attempts = 0;
  const random = Math.floor(Math.random() * (max - min + 1) + min);
  let guess;

  while (running) {
    guess = window.prompt(
      `Guess a number between ${min} and ${max} the anwer ${random}`
    );
    guess = Number(guess);

    if (isNaN(guess)) {
      window.alert("Please enter a number");
    } else if (guess < min || guess > max) {
      window.alert("Please enter a number between 1 and 100");
    } else {
      attempts++;
      if (guess > random) {
        window.alert("Too high, try again");
      }
      if (guess < random) {
        window.alert("Too low, try again");
      }
      if (guess == random) {
        window.alert(
          `You guessed it right congratulations! \n The number was ${random} \n Total attempts ${attempts}`
        );
        if (WhosTurn === 1) {
          player1LineContent = document.getElementById("player1").textContent =
            player1LineContent + `${attempts} , `;
          player1Attempts += attempts;
        } else {
          player2LineContent = document.getElementById("player2").textContent =
            player2LineContent + `${attempts} , `;
          player2Attempts += attempts;
        }
        running = false;
        WhosTurn = (WhosTurn + 1) % 2 === 0 ? 2 : 1;
        // or WhosTurn = 3 - WhosTurn;
      }
    }
    console.log(player1Attempts);
    console.log(player2Attempts);
  }
});

const ShowResultBtn = document.getElementById("ControlBtn");
ShowResultBtn.addEventListener("click", () => {
  window.alert(
    `Player 1 Attempts: ${player1Attempts} \n Player 2 Attempts: ${player2Attempts}`
  );
  player1Attempts > player2Attempts
    ? window.alert("Player 2 won")
    : window.alert("Player 1 won");
});
