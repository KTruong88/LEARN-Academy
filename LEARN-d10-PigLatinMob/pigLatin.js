// Incredible Pig Latin Translator
// Authors: Group 3 aka "The Dream Team"


var vowels = ["a", "e", "i", "o", "u", "A", "E","I","O","U"]; // set our list of vowels

// function to pigLatinify
function pigLatinify(){
  var input = document.getElementById("inputField").value //set input variable
  var inputArray = input.split(" "); // split the string input into indexed Array
  var pigLatin = []; // empty array for pigLatinified words
  for(let i=0; i < inputArray.length; i++){
    let checkedWord = inputArray[i] // setting checkedWord to each word in the Array
    // iterate through every letter to check for "qu"
    for (let c=0; c < checkedWord.length; c++){
      if (checkedWord[c] === 'q' && checkedWord[c+1] === 'u') {
          let beg = checkedWord.slice(0, checkedWord.indexOf(checkedWord[c+2]));
          let end = checkedWord.slice(c+2);
          let newWord = end + beg +"ay";
          pigLatin.push(newWord);
          break;
      }
    // check for first-letter vowel
      else if (vowels.includes(checkedWord[0])) {
          let newWord = checkedWord + "way"
          pigLatin.push(newWord);
          break;
      }
    //check for first letter consanant
      else {
          let spliced = checkedWord.slice(0,1);
          let ord = checkedWord.slice(1);
          let newWord = ord + spliced +"ay";
          pigLatin.push(newWord);
          break;
      }
    }
  }
  var result = pigLatin.join(" ") // join the final array of new pig latinified words into one string
  document.getElementById('outcome').innerHTML = result // place outcome/result string of piglatinified words to the html
}
