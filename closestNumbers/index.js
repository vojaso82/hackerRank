function closestNumbers(arr) {
  arr.sort((a, b) => a - b);
  let minDiff = Infinity;
  let pairs = [];
  for (let i = 1; i < arr.length; i++) {
    const diff = Math.abs(arr[i] - arr[i - 1]);
    if (diff < minDiff) {
      minDiff = diff;
      pairs = [[arr[i - 1], arr[i]]];
    } else if (diff === minDiff) {
      pairs.push([arr[i - 1], arr[i]]);
    }
  }
  return pairs.flat();
}
