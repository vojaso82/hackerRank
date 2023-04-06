function twoStrings(s1, s2) {
  if (
    s1.length >= 1 &&
    s1.length <= 100000 &&
    s2.length >= 1 &&
    s2.length <= 100000
  ) {
    return s1.split("").some((el) => s2.includes(el)) ? "YES" : "NO";
  } else {
    return "NO";
  }
}
