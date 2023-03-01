function permutationEquation(p) {
  return p.map((array, item) => p.indexOf(p.indexOf(item + 1) + 1) + 1);
}
