function countApplesAndOranges(s, t, a, b, apples, oranges) {
  console.log(apples.filter((d) => s - a <= d && d <= t - a).length);
  console.log(oranges.filter((d) => s - b <= d && d <= t - b).length);
}
