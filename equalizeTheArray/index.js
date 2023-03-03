function equalizeArray(arr) {
  let max = 0;
  arr.reduce((target, value, index) => {
    target[value] = (target[value] || 0) + 1;
    target[value] > max && (max = target[value]);

    return target;
  }, []);

  return arr.length - max;
}
