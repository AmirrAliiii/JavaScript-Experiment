# Learning Experiment Game


## About
-----------

This game was created as a learning experiment to gain experience with JavaScript.



## How to Run
--------------

To run this game, follow these steps:

1. Clone the repository to your local machine using `git clone`.
2. Navigate to the repository directory using `cd`.
3. Run the game using the command `python main.py` (assuming the game has a `main.py` file).

## Game Explanation
-----------------

### Game Overview

The game is a simple number guessing game designed for two players. The game generates a random number between 1 and 100, and players take turns trying to guess the number.

### Gameplay

Here's a step-by-step explanation of how the game works:

1. The game starts when the player clicks the "Click me!" button (with the id "b1").
2. When the button is clicked, the game generates a random number between 1 and 100 and sets the `running` variable to `true`.
3. The game then prompts the current player (Player 1 or Player 2) to guess a number between 1 and 100 using a `window.prompt` dialog box.
4. The player enters their guess, and the game checks if the input is a valid number. If it's not, the game displays an error message and prompts the player to try again.
5. If the input is a valid number, the game checks if the guess is higher or lower than the generated random number. If it's higher, the game displays a "Too high, try again" message. If it's lower, the game displays a "Too low, try again" message.
6. If the player guesses the correct number, the game displays a congratulatory message with the total number of attempts taken to guess the number.
7. The game then updates the player's score by adding the number of attempts to their total score.
8. The game switches to the next player (Player 2 or Player 1) and repeats the process.
9. The game continues until the players decide to stop playing.
10. When the players click the "Show Result" button (with the id "ControlBtn"), the game displays the total number of attempts taken by each player and declares the player with the lower score as the winner.

### Player's Goal

The player's goal is to guess the generated random number in as few attempts as possible. The player with the lower total score (i.e., the player who guessed the number in fewer attempts) wins the game.
