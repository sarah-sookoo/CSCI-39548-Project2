/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.
In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/


// MAP //
Array.prototype.myMap = function(callbackFn) {
    // Place your code here.
    var result = [];
    let i;

    for(i=0; i<this.length; i++){
      result.push(callbackFn(this[i]))
    }

    return result;
  };

  // FILTER //
  Array.prototype.myFilter = function(callbackFn) {
    // Place your code here.
    var result = [];
    let i = 0;

    for (i=0; i<this.length; i++){
      if (callbackFn(this[i]) == true){
        result.push(this[i])
      }
    }
    return result;
  };

  // SOME //
  Array.prototype.mySome = function(callbackFn) { 
    //at least 1 is true -> return true, if none is true -> return false
    // Place your code here.
    let i = 0;

    for (i=0; i<this.length; i++){
      if (callbackFn(this[i]) == true){
        return true;
      }
    }
    return false;
};

  // EVERY //
  Array.prototype.myEvery = function(callbackFn) {
    // Place your code here.
    //if at least 1 is false -> return false, if none is false -> return true
    let i = 0;
    for (i=0; i<this.length; i++){
      if (callbackFn(this[i]) == false){
        return false;
      }
    }
    return true;
};

  // REDUCE //
  Array.prototype.myReduce = function(callbackFn) {
    // Place your code here.
    let sum = 0;
    let i = 0;
    for (i=0; i<this.length; i++){
      sum += callbackFn(this[i]);
    }
    return sum;
  };

    // INCLUDES //
    Array.prototype.myIncludes = function(searchElement) {
        // Place your code here.
        let i = 0;
        for (i=0; i<this.length; i++){
          if (this[i] == searchElement){
            return true;
          }
        }
        return false;
      };

  // INDEXOF //
  Array.prototype.myIndexOf = function(searchElement) {
    // Place your code here.
    let i = 0;
    for (i=0; i<this.length; i++){
      if (this[i] == searchElement){
        return i;
      }
    }
    return -1;
  };