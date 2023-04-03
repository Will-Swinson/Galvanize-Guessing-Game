let randomNum = function (n) {
  return Math.trunc(Math.random() * n) + 1;
};

let guessCheck = function (string) {
  if (string === "") {
    return NaN;
  } else if (string === null) {
    return null;
  } else {
    return Number(string);
  }
};

let numCheck = function (message) {
  let number = guessCheck(prompt(message));

  while (!Number.isInteger(number) && number !== null) {
    number = guessCheck(prompt(`That is not a whole number, guess again! 🔢`));
  }
  return number;
};

let playAgain = function (message) {
  let yesOrNo = prompt(message);
  if (yesOrNo.toLowerCase() === "yes") {
    number = "";
    play();
  } else if (yesOrNo.toLowerCase() === "no" || yesOrNo === null) {
    alert(`Thanks for playing`);
    number = "";
  }
};

const users = {};

let play = function () {
  let previousGuesses;
  let secrectNum = randomNum(10);
  console.log(secrectNum);

  let user = prompt(`Hello what is your name?`);

  let addUsers = function (user) {
    if (users[user] > 0) {
      previousGuesses = users[user];
    } else {
      users[user] = numTries;
    }
    return previousGuesses;
  };

  let addTry = function () {
    numTries++;
    numTriesArr.push(number);
  };

  let scoreCompare = function () {
    if (typeof previousGuesses === "undefined") {
      previousGuesses = 0;
    }
    let guessDiff = Math.abs(previousGuesses - numTries);
    if (previousGuesses > numTries) {
      alert(
        `Congrats ${user}, you took ${numTries}: (${numTriesArr.join(
          ","
        )}) ${guessDiff} less ${guessDiff > 1 ? "tries" : "try"} than before! `
      );
    } else if (previousGuesses < numTries) {
      alert(
        `Congrats ${user}, you took ${numTries}: (${numTriesArr.join(
          ","
        )}) ${guessDiff} more ${guessDiff > 1 ? "tries" : "try"} than before!`
      );
    } else {
      alert(
        `Congrats ${user}, you took ${numTries}: (${numTriesArr.join(
          ","
        )}) with the same ${
          guessDiff > 1 ? "tries" : "try"
        } attempts as before! `
      );
    }

    users[user] = numTries;
  };

  if (user === null) {
    return;
  }

  number = numCheck(`Guess a number 1 - 10, ${user}`);

  let numTries = 0;
  let numTriesArr = [];

  while (number !== secrectNum) {
    if (number === undefined || number === null) {
      return;
    } else if (number < secrectNum) {
      addTry();
      number = numCheck(
        `${user} that was close, but try a little higher next time! 👆`
      );
    } else if (number > secrectNum) {
      addTry();
      number = numCheck(
        `${user} that was close, but try a little lower next time! 👇`
      );
    }
  }

  while (number === secrectNum) {
    debugger;
    addTry();
    console.log(previousGuesses);
    console.log(users);
    addUsers(user);
    console.log(users);
    console.log(previousGuesses);
    console.log(numTries);

    scoreCompare();
    playAgain("Would you like to play again Yes or No?", user);
  }
  console.log(numTries, numTriesArr);
  console.log(users[user]);
};

console.log(play());
