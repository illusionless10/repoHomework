function myReplace(str, before, after) {
    let regex = /^[A-Z]/;
    if (regex.test(before.charAt(0))){
      let result = str.replace(before, after.replace(/^[a-z]/, after.charAt(0).toUpperCase()));
      return result
    }
    else {
      let result = str.replace(before, after.replace(regex, after.charAt(0).toLowerCase()));
      return result
    }
}