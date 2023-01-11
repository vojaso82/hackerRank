function plusMinus(arr) {
  let positiveValue = arr.filter((number) => number > 0).length / arr.length;
  let negativeValue = arr.filter((number) => number < 0).length / arr.length;
  let zeronums = arr.filter((number) => number == 0).length / arr.length;
  return console.log(
    positiveValue.toFixed(6) +
      "\n" +
      negativeValue.toFixed(6) +
      "\n" +
      zeronums.toFixed(6)
  );
}
