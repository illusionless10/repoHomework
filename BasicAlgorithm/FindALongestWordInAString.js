function findLongestWordLength(str) {
    let longest = "";
    let strArr = str.split(" ");
    let length = 0;
    for (let i = 0; i < strArr.length; i++){
      if (strArr[i].length >= length){
        length = strArr[i].length;
        longest = strArr[i];
      }
    }
    return longest.length;
}