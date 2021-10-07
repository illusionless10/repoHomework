function binaryAgent(str) {
    let binaryArr = str.split(' ');
    return binaryArr.map( el => String.fromCharCode(parseInt(el, 2))).join('')
}