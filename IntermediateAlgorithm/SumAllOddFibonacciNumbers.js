function sumFibs(num) {
  let a = 1;
  let b = 0;
  let temp
  let sum = 1;
  let i = 1
  while (i){
    temp = a;
    a += b;
    b = temp;
    if (a % 2 == 1){
      sum += a
    }
    if (a > num){
      sum -= a;
      i--
    }
  }
  return sum
}