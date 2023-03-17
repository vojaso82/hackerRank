function marsExploration(s) {
  let result = 0;
  for (let i = 0; i < s.length; i += 3) {
    if (s.charAt(i) != "S") {
      result++;
    }
    if (s.charAt(i + 1) != "O") {
      result++;
    }
    if (s.charAt(i + 2) != "S") {
      result++;
    }
  }
  return result;
}
