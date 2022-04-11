arr = [
  [-4, 3, -8, -2],
  [2, 9, 1, -5],
  [-7, -2, -6, -4],
];

const sumAverage = (arr = []) => {
  const sum = arr.reduce((a, b) => a + b);
  return sum / arr.length;
};

let averageWithin = (arr = []) => {
  const result = arr.map((element) => sumAverage(element));
  return result;
};
console.log(averageWithin(arr));

const initialValue = 0;
const sumOfAverage = averageWithin(arr).reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
console.log(sumOfAverage);
console.log(Math.floor(sumOfAverage));
