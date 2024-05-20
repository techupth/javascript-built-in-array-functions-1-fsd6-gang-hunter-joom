let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  // Start coding here
  return words.length >= 5;
}

let Atleastthreewords = words.filter(get5CharWords)
console.log(Atleastthreewords)


//const result = get5CharWords(words);
//console.log(result); // Output: ["apple", "elephant"]
