function divisibleSumPairs(n, k, ar) {
  let counter = 0;
  for (let i = 0; i < n; i++) {
    ar.slice(i + 1).filter((item) => {
      if ((item + ar[i]) % k === 0) {
        counter++;
      }
    });
  }
  return counter;
}
