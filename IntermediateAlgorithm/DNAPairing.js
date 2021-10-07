function pairElement(str) {
    let newArr = str.split('');
    let result = [];
    for (let i = 0; i < newArr.length; i++){
      if (newArr[i] == "A"){
        result.splice(newArr.length - 1, 0, [newArr[i], "T"])
      }
      else if (newArr[i] == "T"){
        result.splice(newArr.length - 1, 0, [newArr[i], "A"])
      }
      else if (newArr[i] == "C"){
        result.splice(newArr.length - 1, 0, [newArr[i], "G"])
      }
      else {
        result.splice(newArr.length - 1, 0, [newArr[i], "C"])
      }
    }
    return result;
}