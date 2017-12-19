var eightBallAnswers = ["Yup!", "Fuhgeddaboudit", "Maybe", "Ask: what would your mother do?", "Ask: what would an Australian do, then do the opposite", "Your answer here"]


var render = function() {
  var index = function() {
    return Math.floor(Math.random() * 6)
  }
  var question = document.getElementById('submitButton').value
    document.getElementById('userQuestion').innerHTML = question
    document.getElementById('eightBallAnswer').innerHTML = eightBallAnswers[index()] + <img src='https://static.pexels.com/photos/91227/pexels-photo-91227.jpeg'>
}
