function uniteUnique(arr) {
    let newArr = [];
    for (let i = 0; i < arguments.length; i++){
      newArr.push(...arguments[i]);
    }
    let str = newArr.join('');
    let result = str.replace(/(\d)(?<=(?:.*\1){2})/g, '')
    return result.split('').map( val => Number(val))
}