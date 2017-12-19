// Arrays of Numbers
// Create an array with five decimal numbers, and use it for the following:
// Create a function that finds the highest number.
// highestNumber([1, 4, 2]) should return 4
// highestNumber([-1, -2, -4]) should return -1

function highestNumber(arr) {
  let max = arr[0];
  arr.forEach(num => {
    if (num > max) {
      max = num;
    }
  })
  return max;
}

// Create a function that finds the lowest number.
// lowestNumber([1, 4, 2]) should return 1
// lowestNumber([-1, -2, -4]) should return -4

function lowestNumber(arr) {
  let min = arr[0];
  arr.forEach(num => {
    if (num < min) {
      min = num;
    }
  })
  return min;
}

// Create a function that finds the smallest number (the closest to zero).
// smallestNumber([1, 4, 2]) should return 1
// smallestNumber([0.1, 0.01, 0.001]) should return 0.001
// smallestNumber([-1, -2, -4]) should return -1
// smallestNumber([0.1, -0.001]) should return -0.001

function closestToZero(arr) {
  let current = arr[0];
  arr.forEach(num => {
    if (Math.abs(num) < Math.abs(current)) {
      current = num;
    }
  })
  return current;
}

// Create a function that calculate the sum.
// sum([1, 2, 3]) should return 6
// sum([]) should return 0

function summer(arr) {
  let total = arr.reduce(
    (acc, num) => acc + num,
    0
  );
  return total;
}

// Create a function that calculate the mean value.
// mean([1, 2, 3]) should return 2

function mean(arr) {
  let total = arr.reduce(
    (acc, num) => acc + num,
    0
  );
  return (total/arr.length);
}

// Create a function that finds the index of the highest number.
// indexHighestNumber([1, 4, 2]) should return 1
// indexHighestNumber([-1, -2, -4]) should return 0

function idxOfHighestNumber(arr) {
  let max = arr[0];
  arr.forEach(num => {
    if (num > max) {
      max = num;
    }
  })
  return arr.indexOf(max);
}

// Arrays of Strings
// Create an array with your siblings names, and an array with your parents names.
// Sort your siblings names in alphabetical order.
// Sort your parents names in reverse alphabetical order.
// Sort all the names in alphabetical order.

let siblings = ['Kathy', 'Joseph', 'Zahib'];
let parents = ['David', 'Nu'];

siblings.sort();
parents.sort().reverse();

let everyOne = siblings.concat(parents);
everyOne.sort();

// Advanced Functions
// Create a function that returns an array with only the even elements from the array.
// evenElements([1, 2, 3, 4]) should return [2, 4]

function evens(arr) {
  let noOdds = arr.filter(num => 
    num % 2 === 0);
  return noOdds;
}