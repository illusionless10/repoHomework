function spinalCase(str) {
    let result = str.replace(/([a-z])([A-Z])|[_\s]/g, '$1-$2').toLowerCase();
    return result;
}