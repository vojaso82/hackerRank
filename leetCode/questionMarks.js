// Questions Marks
// Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers,
// letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers
// that add up to 10. If so, then your program should return the string true, otherwise it should return the string false.
// If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.

// For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3\
// question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.
// Examples
// Input: "aa6?9"
// Output: false

function QuestionsMarks(str) {
  let num1, num2;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[0-9]/)) {
      if (!num1) {
        num1 = parseInt(str[i]);
      } else if (!num2) {
        num2 = parseInt(str[i]);
        if (num1 + num2 === 10) {
          if (count !== 3) {
            return false;
          }
          count = 0;
          num1 = null;
          num2 = null;
        } else {
          num1 = num2;
          num2 = null;
          count = 0;
        }
      }
    } else if (str[i] === "?") {
      count++;
    }
  }
  return count === 3;
}

// keep this function call here
console.log(QuestionsMarks(readline()));
