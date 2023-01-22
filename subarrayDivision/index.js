function birthday(s, d, m) {
  let sum = 0;
  const reducer = (a, b) => a + b;
  for (let i = 0; i < s.length - m + 1; i++) {
    if (s.slice(i, i + m).reduce(reducer) == d) sum++;
  }
  return sum;
}
