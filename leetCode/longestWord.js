// Longest Word
// Have the function LongestWord(sen) take the sen parameter being passed and
//  return the longest word in the string. If there are two or more words that
//  are the same length, return the first word from the string with that length.
//   Ignore punctuation and assume sen will not be empty. Words may also contain
//   numbers, for example "Hello world123 567"
// Examples
// Input: "fun&!! time"
// Output: time
// Input: "I love dogs"
// Output: love

function LongestWord(sen) {
  const words = sen.match(/\b\w+\b/g);
  let longestWord = "";
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

// keep this function call here
console.log(LongestWord(readline()));
