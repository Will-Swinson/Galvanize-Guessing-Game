// Feature 1: Guess once.
// Using alert and prompt, write a program that asks the user to guess a number and then tells them if they were correct, or if they should have guessed higher or lower.

// Main Function

// Inputs:

// (Number) Guess

// Example Output:

// (String) “Higher”, if Guess is lower than the secret number

// Or

// (String) “Lower”, if Guess is higher than the secret number

// Or

// (String) “Correct!” , if Guess is equal to the secret number

// let guessFunction = function () {};
let secretNum = Math.trunc(Math.random() * 20) + 1;
let user = prompt("What is your name?");
let numOfCounter = 0;
let numGuessArr = [];
let guess = prompt("Guess a number, you guess right you win a prize! 😎");
let number = Number(guess);
// let guess = Number.isInteger(number);

while (true) {
  !number ? (number = number) : numGuessArr.push(number);
  if (!Number.isInteger(number) || guess === "") {
    alert("You're not that guy pal 🤢");
    guess = prompt("Guess a number, you guess right you win a prize! 😎");
    number = Number(guess);
    numOfCounter +
  } else if (number === secretNum) {
    guess = prompt(`Congrats ${user}! Previous Guesses:${numGuessArr.join(
      ","
    )} The number was ${secretNum}, you win 😎🎁`);
    number = Number(guess);
    numOfCounter += 1;
    break;
  } else if (number > secretNum) {
    guess =  prompt(`Close ${user}, but might wanna try lower next time 📉`)
    number = Number(guess);
    numOfCounter += 1;
  } else if (number < secretNum) {
    guess =  prompt(`Close ${user}, but might wanna try higher next time 📈`)
    number = Number(guess);
    numOfCounter += 1;
  }
}

console.log(numGuessArr);
console.log(numOfCounter);
