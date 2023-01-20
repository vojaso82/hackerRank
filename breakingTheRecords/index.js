function breakingRecords(scores) {
  let highestScore = scores[0];
  let lowestScore = scores[0];
  let highestCount = 0;
  let lowestCount = 0;

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > highestScore) {
      highestScore = scores[i];
      highestCount += 1;
    } else if (scores[i] < lowestScore) {
      lowestScore = scores[i];
      lowestCount += 1;
    }
  }
  return [highestCount, lowestCount];
}
