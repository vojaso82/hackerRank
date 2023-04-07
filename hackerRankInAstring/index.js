function hackerrankInString(s) {
  const example = "hackerrank".split("");
  const input = s.split("");
  if (input.length < example.length) {
    return "NO";
  }
  const result = example.every((item) => {
    const index = input.indexOf(item);
    input.splice(0, index + 1);
    return index !== -1;
  });
  return result ? "YES" : "NO";
}
