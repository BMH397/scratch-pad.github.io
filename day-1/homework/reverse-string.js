// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

/*
I: String as its only input 
O: Returns a new string representing the input string reversed 
C: N/A
E: N/A 
*/
function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    
      //Lets create an empty string to collect the output
      var reversed = '';
      //Now lets loop through the input string from the end to the beginning
      for (let i = input.length - 1; i >= 0; i--) {
          //And then add each character to the reversed string
          reversed += input[i];
      }
      //Finally return the reversed string
      return reversed;
    
    
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}