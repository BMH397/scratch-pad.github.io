// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 * 
 * HINT: There is a method that can help with this.
 */
/*
I: Input value 
O: Return true if the value is an array false if otherwise 
C:
E:
*/
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
      //Lets use Array.isArray to check if the value is an array
  return Array.isArray(value);
}
    
    
    // YOUR CODE ABOVE HERE //


/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 * 
 */
/*
I: Input value 
O: Return true if the value is an object intended as a collection false if otherwise 
C: N/A
E: N/A
*/
function isObject(value) {
    // YOUR CODE BELOW HERE //
    
 //Lets check if the value is an object but not null an array or a date
 
 return value !== null && typeof value === 'object' && !Array.isArray(value) && !(value instanceof Date);
} //Check to see if the value is not null //If the value is an object //If the value is not an array //If the value is not a date
    
    
    // YOUR CODE ABOVE HERE //




/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
/*
I: Input value 
O: Return true if is either an array or an object intended as a collection and false if otherwise 
C: N/A
E: N/A
*/

function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    //First lets check if the value is an Array
    if (Array.isArray(value)) {
        return true;
    }
    //And now lets check if the value is an Object but not null date or function)
    if (value !== null && typeof value === 'object' && !(value instanceof Date) && !(value instanceof Function)) {
        return true;
    }
    //Finally if neither return false
    return false;
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
/*
I: Input value 
O: Return the type of value as a string 
C: N/A
E: N/A
*/
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    //First lets check if the value is null
    if (value === null) {
        return "null";
    }
    //Now were gonna check if the value is an Array
    if (Array.isArray(value)) {
        return "array";
    }
    //After that check if the value is a Date
    if (value instanceof Date) {
        return "date";
    }
    //Now use typeof for other types
    let type = typeof value;
    //And then handle the "object" case specifically
    if (type === "object") {
        return "object";
    }
    return type;
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}