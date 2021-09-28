function truncateString(str, num) {
    if (str.length > num){
      let newStr = str.slice(0, num)
      return newStr + "..."
    }
    else return str
}