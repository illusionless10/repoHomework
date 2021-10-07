var Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let fullName = firstAndLast;
    
    this.getFullName = function() {
      return fullName;
    };
    
    this.getFirstName = function() {
      return fullName.match(/^[a-zA-Z]+/).join('');
    };
    
    this.getLastName = function() {
      return fullName.match(/([\sa-zA-Z]+)(?<=(?:\s\1){1})/g).join('');
    };
    
    this.setFirstName = function(firstName) {
      fullName = fullName.replace(/^[a-zA-Z]+/, firstName);
    };
    
    this.setLastName = function(lastName) {
      fullName = fullName.replace(/([\sa-zA-Z]+)(?<=(?:\s\1){1})/g, lastName);
    };
    
    this.setFullName = function(newName) {
      fullName = newName;
    };
};