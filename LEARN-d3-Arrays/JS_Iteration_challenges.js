 
// Duplicate Array
// Write a Javascript function mergeArray that merges two arrays and removes all duplicate elements.
// mergeArray([1, 2, 3], [2, 30, 1]) should return [1, 2, 3, 30]

function mergeArray(arr1, arr2) {
  let uniqArray = [];
  arr1.forEach(num => {
    if (!uniqArray.includes(num)) {
      uniqArray.push(num);
    }
  });
  arr2.forEach(num => {
    if (!uniqArray.includes(num)) {
      uniqArray.push(num);
    }
  });
  return uniqArray;
}

// Pre - fill
// Write a Javascript function called fillArray to create a specified number of elements with a pre- filled numeric values in an array.
// fillArray(6, 0) should return [0, 0, 0, 0, 0, 0]
// fillArray(4, 11) should return [11, 11, 11, 11]

function fillArray(length, content) {
  console.log(filledArr = new Array(length).fill(content));
}

// Clean Function
// Write a Javascript function to filter false, null, 0 and blank values from an array.
// filterArrayValues([58, '', 'abcd', true, null, false, 0]) should return [58, "abcd", true]

function clean(arr) {
  let filteredArr = arr.filter(el => el !== false && el !== 0 && el !== null && el !== ' ');
  return filteredArr;
}

// Sum Target
// Write a Javascript function to find a pair of elements (indices of the two numbers) from a given array whose sum equals a specific target number.
// findPair(50, [10, 20, 10, 40, 50, 60, 70]) should return [0, 3] or [2, 3](one or the other or both)
// findPair(50, [25, 25, 10]) should return [0, 1] or [1, 0](but not both)

function findPair(target, arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = (i + 1); j < arr.length-1; j++) {
      if (arr[i] + arr[j] === target) {
        result.push([i, j]);
      }
    }
  }
  return result;
}