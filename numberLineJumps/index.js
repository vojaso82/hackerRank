function kangaroo(x1, v1, x2, v2) {
  let firstKangaroo = x1 + v1;
  let secondKangaroo = x2 + v2;
  let trueFalse = false;
  let maxLimit = 10000;
  for (let i = 0; i <= maxLimit; i++) {
    if (firstKangaroo == secondKangaroo) {
      trueFalse = true;
      break;
    } else {
      firstKangaroo += v1;
      secondKangaroo += v2;
    }
  }
  return trueFalse ? "YES" : "NO";
}
