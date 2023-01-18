function birthdayCakeCandles(candles) {
  const maxHeight = candles.reduce((a, b) => Math.max(a, b));
  return candles.filter((each) => each == maxHeight).length;
}
