function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let charFrom = alphabet.indexOf(str.charAt(0));
    let charTo = alphabet.indexOf(str.charAt(str.length - 1)) + 1;
    let result = alphabet.slice(charFrom, charTo).split('');
    for (let i = 0; i < str.length; i++){
      if (result.includes(str.charAt(i))){
        result.splice(result.indexOf(str.charAt(i)), 1)
      }
    }
    if (!result.length){
      return undefined
    }
    return result.join('')
}