// Promise Wrapping
// Given you have the following two functions, try to rewite them in new functions that return a promise.Be aware that this is not a realistic or even a useful example, because the work that these functions are doing does not actually require a promise - we are doing this exercise just to practice the syntax.

// function reverseText(text, callback) {
//   let splitText = text.split("")
//   let reverseArray = splitText.reverse()
//   callback(reverseArray.join(""))
// }

function splitText(str) {
  return new Promise((resolve, reject) => {
    if (typeof str === 'string') {
      resolve(str.split(''));
    } else {
      reject('Input must be a string');
    }
  })
}
function reverseArray(arr) {
  return new Promise((resolve, reject) => {
    if (typeof arr === 'object') {
      resolve(arr.reverse());
    } else {
      reject('Input must be an array');
    }
  })
}
function joinArray(arr) {
  return new Promise((resolve, reject) => {
    if (typeof arr === 'object') {
      resolve(arr.join(''));
    } else {
      reject('Input must be an array');
    }
  })
}
function capitalizeText(str) {
  return new Promise((resolve, reject) => {
    if (typeof str === 'string') {
      resolve(str.toUpperCase());
    } else {
      reject('Input must be a string');
    }
  })
}
function error() {
  console.log('Input must be a string');
}
function reverseTextAndCapitalize(str) {
  splitText(str)
  .then(result => reverseArray(result))
  .then(nextResult => joinArray(nextResult))
  .then(newResult => capitalizeText(newResult))
  .then(finalResult => {
    console.log(finalResult);
  })
  .catch(error => {
    console.log('Error: ' + error);
  })
}