let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(word) {
  // Start coding here
  return word.length >= 5;
}

let wordAtLeast5 = words.filter(get5CharWords)

console.log(wordAtLeast5); // Output: ["apple", "elephant"]



