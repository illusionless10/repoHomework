function dropElements(arr, func) {
    let index = arr.findIndex(func)
    let result = [];
    if (index >= 0){
      for (let i = index; i < arr.length; i++){
      result.push(arr[i])
      }
    }
    return result;
}