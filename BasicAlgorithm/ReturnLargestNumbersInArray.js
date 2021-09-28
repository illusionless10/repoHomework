function largestOfFour(arr) {
    let newArr = [];
    let largest = 0;
    for (let i = 0; i < arr.length; i++){
      largest = arr[i][0]
      for (let j = 1; j < arr[i].length; j++){
        if (arr[i][j] > largest){
          largest = arr[i][j]
        }
      }
      newArr.push(largest)
    }
    return newArr;
}