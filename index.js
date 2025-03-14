const min = 1;
const max = 100;
let running = false;
let player1Name = "Player 1";
let player2Name = "Player 2";
let WhosTurn = 1;
let player1LineContent = `${player1Name} Attemps: `;
let player2LineContent = `${player2Name} Attemps: `;
let player1Attempts = 0;
let player2Attempts = 0;

const AssignNameBtn = document.getElementById("AssignNameBtn");
AssignNameBtn.addEventListener("click", () => {
  player1Name = window.prompt("Enter Player 1 Name");
  player1LineContent = `${player1Name} Attemps: `;
  document.getElementById("player1").textContent = player1LineContent;
  player2Name = window.prompt("Enter Player 2 Name");
  player2LineContent = `${player2Name} Attemps: `;
  document.getElementById("player2").textContent = player2LineContent;
});

const StartBtn = document.getElementById("b1");
StartBtn.addEventListener("click", () => {
  running = true;

  let attempts = 0;
  const random = Math.floor(Math.random() * (max - min + 1) + min);
  let guess;
  console.log(`The Number is ${random}`);

  while (running) {
    guess = window.prompt(`Guess a number between ${min} and ${max}`);
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
  }
});

const ShowResultBtn = document.getElementById("ControlBtn");
ShowResultBtn.addEventListener("click", () => {
  window.alert(
    `${player1Name} Attempts: ${player1Attempts} \n ${player2Name} Attempts: ${player2Attempts}`
  );

  if (player1Attempts > player2Attempts) {
    document.getElementById("div1").style.border = "5px solid #ff0000";
    document.getElementById("div1").style.transition = "border 3s ease-in-out";
  } else {
    document.getElementById("div1").style.border = "5px solid #00ff00";
    document.getElementById("div1").style.transition = "border 3s ease-in-out";
  }
  setTimeout(() => {
    document.getElementById("div1").style.border = "1px solid #eaeaea";
  }, 3000);

  player1Attempts > player2Attempts
    ? window.alert(`${player2Name} won`)
    : window.alert(`${player1Name} won`);
});
