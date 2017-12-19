//HiLo Game
function hiLoGame() {
  let secretNumber = Math.floor(Math.random() * 100);
  let i = 1
  let name = prompt("Please enter your name")
  while (i < 8) {
    let guess = prompt("Enter a number 1 - 100");

      if (isNaN(guess)) {
        console.log("Only numbers between 1 and 100")
      } else if (guess < 0 || guess > 100){
        console.log("Only numbers between 1 and 100")
      } else if (guess < secretNumber) {
        console.log("Number is too low");
      } else if (guess > secretNumber) {
        console.log("Number is too high");
      } else {
        console.log(`${name} You're a Winner!`);
      };
      i++;
    }
  console.log(`${name} You're a Loser!`);
};
