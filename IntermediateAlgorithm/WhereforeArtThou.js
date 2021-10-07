function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
    let key1 = Object.getOwnPropertyNames(source)
    for (let i = 0; i < collection.length; i++){
      let result = true;
      let key2 = Object.getOwnPropertyNames(collection[i])
      if (key1.length <= key2.length){
        for (let j of key1){
          if (collection[i][j] !== source[j]){
            result = false;
            break;
          }
        }
      }
      if (result){
        arr.push(collection[i])
        result = false
      }
    }
    // Only change code above this line
    return arr;
}