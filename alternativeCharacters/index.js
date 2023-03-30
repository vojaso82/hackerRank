function alternatingCharacters(s) {
  let arrayOfS = s.split("").length;
  let res = 0;
  for (let i = 0; i < arrayOfS - 1; i++) {
    if (s[i] === s[i + 1]) {
      res++;
    }
  }
  return res;
}
