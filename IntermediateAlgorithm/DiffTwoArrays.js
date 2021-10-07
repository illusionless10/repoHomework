function diffArray(arr1, arr2) {
    for (let i = arr1.length - 1; i >= 0; i--){
      for (let j = arr2.length - 1; j >= 0; j--){
        if (arr1[i] == arr2[j]){
          arr1.splice(i, 1);
          arr2.splice(j, 1);
        }
      }
    }
    let newArr = [...arr2, ...arr1];
    return newArr;
}