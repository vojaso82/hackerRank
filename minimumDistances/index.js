function minimumDistances(a) {
  let distance = [];
  for (let i = 0; i < a.length; i++) {
    if (a.indexOf(a[i]) !== a.lastIndexOf(a[i])) {
      let minDistance = a.lastIndexOf(a[i]) - a.indexOf(a[i]);
      distance.push(minDistance);
    }
  }
  if (distance.length === 0) {
    return -1;
  } else {
    distance.sort(function (a, b) {
      return a - b;
    });
    return distance[0];
  }
}
