function magicEightBallGame() {
  let answers = [
    'Yup!', 
    'Fuhgeddaboudit',
    'Maybe', 
    'What would your mother do?',
    'What would an Australian do, then do the opposite',
    'Your answer here'
  ];

  while (true) {
    let question = prompt('You may ask a question');
    if (question === 'STOP') {
      break;
    }
    let randomAnswer = Math.floor(Math.random() * 6);
    alert(answers[randomAnswer]);
  } 
}