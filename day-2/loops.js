// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
/*
I: Array 
O: Loop forward over the array and print its values
C: N/A
E: N/A
*/
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  // Loop forward over the array
  for (let i = 0; i < array.length; i++) {
    // Print each value to the console
    console.log(array[i]);
  
  
  // YOUR CODE ABOVE HERE //
}
}
/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
/*
I: Array 
O: Loop backwards over the array and print its values using console.log()
C:
E:
*/
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
    //So lets loop backward over the array
    for (let i = array.length - 1; i >= 0; i--) {
      //And then print each value to the console
      console.log(array[i]);
    }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
/*
I: Input object 
O: Return an array containing the object keys 
C: N/A
E: N/A
*/
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  //Now lets get an array containing the object keys
  return Object.keys(object);
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
/*
I: Input object
O: Loop over the object and print its keys using console.log()
C: N/A 
E: N/A
*/
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  //Now lets loop over the object
  for (let key in object) {
    //And print each key to the console
    console.log(key);
  
  
  // YOUR CODE ABOVE HERE //
}
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
/*
I: Input Object 
O: Return an array containing the objects values 
C: N/A 
E: N/A
*/
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  //Lets make an array containing the object's values
  return Object.values(object);
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
/*
I: Input Object 
O: Loop over the obect and print its values using console.log()
C:
E:
*/
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //Okay now loop over the object
  for (let key in object) {
    //And then print each value to the console
    console.log(object[key]);
  
  
  
  // YOUR CODE ABOVE HERE //
}
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
/*
I: Input Object 
O: Return the number of key/value pairs stored within that object 
C: N/A
E: N/A
*/
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  //Now lets get the number of key value pairs in the object
  return Object.keys(object).length;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
/*
I: Input object 
O: We loop over the object in reverse and print its values using console.log()
C: N/A
E: N/A
*/
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  var keys = Object.keys(object);
  
  //Now lets loop through the keys in reverse order
  for (let i = keys.length - 1; i >= 0; i--) {
    //And then print each value to the console
    console.log(object[keys[i]]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}