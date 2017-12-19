var randomNumber = function() {
  return Math.ceil(Math.random() * 100)
}
var secretNumber = randomNumber();
var counter = 0
var userGuess = function() {
  var userGuess = document.getElementById('userInput').value
    if (userGuess <= 100 && userGuess >= 1) {
      if (counter < 7) {
        if (userGuess < secretNumber) {
          alert('Your guess is too low!');
          counter++;
        } else if (userGuess > secretNumber) {
          alert('Your guess is too high!');
          counter++;
        } else {
          alert('You guessed the number! You Win!!');
        }
      } else {
        alert('Game over, man!');
      }
      } else {
      alert("Pick a number between 1 and 100");
    }
}
