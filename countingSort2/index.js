function countingSort(arr) {
  const temp = Array.from(Array(100)).fill(0);
  arr.forEach((a) => {
    temp[a]++;
  });
  return temp.reduce((result, count, i) => {
    for (let j = 0; j < count; j++) {
      result.push(i);
    }
    return result;
  }, []);
}
