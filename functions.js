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