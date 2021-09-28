function titleCase(str) {
    let strArr = str.toLowerCase().split(" ");
    let result = strArr.map( val => {
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase())
    })
    return result.join(" ")
}