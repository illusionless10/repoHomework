function flatten(arr){
    return arr.reduce( (obj, item) => {
      return obj.concat(Array.isArray(item) ? flatten(item) : item)
    }, [])
}
function steamrollArray(arr) {
    let result = flatten(arr)
    return result;
}