function funnyString(s) {
  let sReverse = s.split("").reverse().join("");
  for (let i = 1; i < s.length; i++) {
    let difference = Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
    let differenceR = Math.abs(
      sReverse.charCodeAt(i) - sReverse.charCodeAt(i - 1)
    );
    if (difference !== differenceR) {
      return "Not Funny";
    }
  }
  return "Funny";
}
