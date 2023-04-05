function findMedian(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  let median = Math.floor(sortedArr.length / 2);
  if (sortedArr.length % 2) {
    return sortedArr[median];
  } else {
    return (sortedArr[median - 1] + sortedArr[median]) / 2.0;
  }
}
