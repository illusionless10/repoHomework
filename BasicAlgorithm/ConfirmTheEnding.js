function confirmEnding(str, target) {
    let sliceStr = str.substr(str.length - target.length, target.length)
    if (sliceStr == target){
      return true
    }
    return false
}