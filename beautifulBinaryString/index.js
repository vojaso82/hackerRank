function beautifulBinaryString(b) {
  let sum = 0;
  for (let i = 1; i < b.length - 1; i++) {
    if (b[i - 1] === "0" && b[i] === "1" && b[i + 1] === "0") {
      sum++;
      i += 2;
    }
  }
  return sum;
}
