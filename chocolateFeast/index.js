function chocolateFeast(n, c, m) {
  let sum = 0;
  let value = Math.floor(n / c);

  while (true) {
    let focus = value + (sum % m);
    sum += value;
    if (focus < m) break;
    value = Math.floor(focus / m);
  }
  return sum;
}
