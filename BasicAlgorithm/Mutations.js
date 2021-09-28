function mutation(arr) {
    let newArr = [];
    let char1 = "";
    let char2 = "";
    for (let i = 0; i < arr[1].length; i++){
      for (let j = 0; j < arr[0].length; j++){
        char1 = arr[1][i].toLowerCase();
        char2 = arr[0][j].toLowerCase();
        if (char1 == char2){
          newArr.push(char1);
          j = arr[0].length
        }
      }
    }
    if (newArr.length == arr[1].length){
      return true
    }
    else {
      return false
    }
}