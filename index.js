const min = 1;
const max = 100;
const random = Math.floor(Math.random() * (max - min + 1) + min);
let guess;
let running = true;
let attempts = 0;

while (running);
{
  guess = window.prompt(`Guess a number between ${min} and ${max}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("Please enter a number");
  } else if (guess < min || guess > max) {
    window.alert("Please enter a number between 1 and 100");
  } else if (guess > random) {
    window.alert("Too high, try again");
  } else if (guess < random) {
    window.alert("Too low, try again");
  } else if (guess == random) {
    window.alert(
      `You guessed it right congratulations! \n The number was ${random} \n Total attempts ${attempts}`
    );
    running = false;
  }
}
