function getIndexToIns(arr, num) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
      if (arr[i] < num){
        newArr.push(arr[i])
      }
    }
    return newArr.length
}