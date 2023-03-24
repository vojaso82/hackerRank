function runningTime(arr) {
  let sum = 0;
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        sum++;
      } else break;
    }
  }
  return sum;
}
