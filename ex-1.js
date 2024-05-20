let words = ["hello", "world"];

function getWordLengths(words) {
  // Start coding here
  return words.map(word => word.length);
}

const result = getWordLengths(words);

console.log(result); 



// function getWordLengths(words) {
//   const lengths = [];
//   for (let i = 0; i < words.length; i++) {
//     lengths.push(words[i].length);
//   }
//   return lengths;
// }

// const Text = getWordLengths(words);

// console.log(Text);