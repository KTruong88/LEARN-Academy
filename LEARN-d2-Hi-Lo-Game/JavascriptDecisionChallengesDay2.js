// What number's bigger?
function greaterNum(x, y) {
  if (x > y) {
    return x;
  } else if (y > x) {
    return y;
  } else {
    console.log('Numbers are equal');
   }
};

// The World Translator
function helloWorld(code) {
  if (code === 'es') {
    console.log('Hola Mundo');
  } else if (code === 'de') {
    console.log('Herro Werld');
  } else {
    console.log('Hello World');
  }
};

// The Grade Assigner
function assignGrade(score){
  if (score >= 90) {
    console.log("a");
  } else if (score >= 80 && score < 90) {
      console.log("b");
  } else if (score >= 70 && score < 80) {
      console.log("c");
  } else if (score >= 60 && score < 70) {
      console.log("d");
  } else {
    console.log("f");
  }
};

// The Pluralizer
function pluralizer(noun, number) {
  if (number > 1) {
    console.log(`${noun}s`);
  } else {
    console.log(noun);
  }
};

// The Odd and Even
function oddEven() {
  for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }

  }
};

//The Fizz Buzz
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      console.log('FizzBuzz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else {
      console.log(i);
    }
  }
};
