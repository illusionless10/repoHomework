function gcd(a, b) {
    return !b ? a : gcd(b, a % b);
}

function lcm(a, b){
return (a * b) / gcd(a, b)
}

function smallestCommons(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let result = min;
    for (let i = min; i <= max; i++){
      result = lcm(i, result)
    }
    return result;
}