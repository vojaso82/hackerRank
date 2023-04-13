function workbook(n, k, arr) {
  let specialProblems = 0;
  let pageNumber = 1;

  for (let i = 0; i < n; i++) {
    const problemsInChapter = arr[i];
    let problemsOnPage = 0;

    for (let j = 1; j <= problemsInChapter; j++) {
      if (j === pageNumber) {
        specialProblems++;
      }
      problemsOnPage++;
      if (problemsOnPage === k || j === problemsInChapter) {
        pageNumber++;
        problemsOnPage = 0;
      }
    }
  }
  return specialProblems;
}
