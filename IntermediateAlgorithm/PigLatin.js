function translatePigLatin(str) {
    let regex = /^[bcdfghjklmnpqrstvwxyz]+/i
    if (regex.test(str)){
      return str.replace(regex, '') + str.match(regex) + "ay"
    }
    return str + "way"
}