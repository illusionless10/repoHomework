function sumAll(arr) {
  let range = Math.abs((arr[0] - arr[1])) + 1;
  let sum = (arr[0] + arr[1]) * range / 2
  return sum
}