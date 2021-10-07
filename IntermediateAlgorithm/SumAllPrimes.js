function sumPrimes(num) {
    let prime = 3;
    let sum = 2;
    let newArr = [2];
    if (num < 2){
      return "prime number must be greater than 2"
    }
    else {
      while (prime <= num){
        if (newArr.every( value => prime % value)){
          sum += prime;
          newArr.push(prime);
          prime += 2;
        }
        else {
          prime += 2;
        }
      }
    }
    return sum
}