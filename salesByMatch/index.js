function sockMerchant(n, ar) {
  let sum = 0;
  ar.sort();
  for (let i = 0; i < n; i++) {
    if (ar[i] === ar[i + 1]) {
      i++;
      sum++;
    }
  }
  return sum;
}
