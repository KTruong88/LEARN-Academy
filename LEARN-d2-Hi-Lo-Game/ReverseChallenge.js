function reverseFive(sentence) {
  words = sentence.split(" ");
  result = words.map(rejoin_words => {
    if (rejoin_words.length >= 5) {
      return rejoin_words = rejoin_words.split("").reverse().join("");
    } else {
      return rejoin_words;
    }
  })
  console.log(result.join(' '));
};
