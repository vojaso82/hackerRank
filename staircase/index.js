function staircase(n) {
  let line = "";
  for (let i = 1; i < n + 1; i++) {
    line += Array(n - i)
      .fill(" ")
      .join("");
    line += Array(i).fill("#").join("");
    console.log(line);
    line = "";
  }
}
