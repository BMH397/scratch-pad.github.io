// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */
/*
I: String
O: Return its length 
C: N/A 
E: N/A 


/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */



function length(string) {
    // YOUR CODE BELOW HERE //
   //lets return the length 
    return string.length;
    

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
/* I: String 
O: Return a new string to forced to lowercase 
C: N/A 
E: N/A
*/ 
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    //Use the toLowerCase method to change the string to lowercase
  return string.toLowerCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
/*
I: String  
O: Return a new string forced to uppercase 
C: N/A 
E: N/A
*/
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
//Use the touppercase method to change the string to uppercase 

return string.toUpperCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
/*
I: String  
O: Return a new string forced to dash-case.
C: Use dash-case 
E: N/A
*/


function toDashCase(string) {
    // YOUR CODE BELOW HERE //

  //Chnage the string to lowercase
  var lowerCaseString = string.toLowerCase();
  //Change spaces with dashes
  var dashCaseString = lowerCaseString.replace(/ /g, '-');
  return dashCaseString;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */

/*
I: String 
O: Return true if the string begins with the character false if otherwise
C: How can you use Array access to your advantage here?
E: N/A
*/
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
//Change both the string and the character to lowercase :)
var lowerCaseString = string.toLowerCase();
var lowerCaseChar = char.toLowerCase();
//See if the first character of the string is the same as the given character
return lowerCaseString[0] === lowerCaseChar;
}
    

    // YOUR CODE ABOVE HERE //


/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
/*
I: String
O: Return true if the string ends with the character false otherwise 
C: The function is case insensitive
E: N/A
*/
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //

     //Change both the string and the character to lowercase!!
  var lowerCaseString = string.toLowerCase();
  var lowerCaseChar = char.toLowerCase();
  //See if the last character of the string is the same as the character
  return lowerCaseString[lowerCaseString.length - 1] === lowerCaseChar;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
/*
I: 2 strings
O: Return the Strings concatenated into one
C: Use the + operator 
E: N/A
*/
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

  //Lets use the + operator to combine the two strings easy! 
  return stringOne + stringTwo;
}

    // YOUR CODE ABOVE HERE //


/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
/*
I: Any number of Strings 
O: Return all of them joined together 
C: N/A
E: N/A 
*/
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
//Lets join all the strings in the array together
return args.join('');

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
/*
I: 2 strings 
O: Return the longest of the two 
C: Compare???
E: N/A
*/
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

  //Lets compare the lengths of the two strings
  if (stringOne.length > stringTwo.length) {
    return stringOne;
  } else {
    return stringTwo;
  }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
/*
I: 2 strings
O: Return 1 if the first is higher in alphabetical order than the second, return -1 if etc
C: Compare strings else if???
E: N/A 
*/

function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
  //Lets compare the two strings with if and else!!!
   //Now lets compare the two strings with if and else
   if (stringOne < stringTwo) {
    return 1;  //And the first string is less than 
  } else if (stringOne > stringTwo) {
    return -1; //Now the second string is less than 
  } else {
    return 0;  // Strings are equal
  }

    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
/*
I: 2 strings 
O: Return 1 if the first is lower in alphabetical order than the second return -1 if the second is lower 
C: How can we compare strings??? 
E: N/A
*/
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
//Lets compare the two strings with if and else 
if (stringOne < stringTwo) {
    return 1;
  } else if (stringOne > stringTwo) {
    return -1;
  } else {
    return 0;
  }
}



    // YOUR CODE ABOVE HERE //



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}