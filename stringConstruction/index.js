function stringConstruction(s) {
  if (s.length === 0) return 0;

  let count = 0;
  let sb = "";
  let ch = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (sb.includes(ch[i]) == false) {
      sb = sb + ch[i];
      count++;
      continue;
    }
  }
  return count;
}
