function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    for (let i = 0; i < arr.length; i++){
      arr[i].orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(arr[i]["avgAlt"] + earthRadius, 3) / GM));
      delete arr[i].avgAlt
    }
    return arr;
}