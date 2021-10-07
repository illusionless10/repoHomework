function convertHTML(str) {
    let HTMLEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt",
      '"': "&quot;",
      "'": "&apos;"
    }
    let newArr = str.split('')
    for (let k in HTMLEntities){
      for (let i = 0; i < newArr.length; i++){
        if (newArr[i] === k){
          newArr[i] = HTMLEntities[k]
        }
      }
    }
    return newArr.join('')
}