// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
/*
I: Write a functin called fizzBuzz that prints the numbers from 1 to 100 
For multiples of three print "Fizz" instead of the number
For the multiples of five print "Buzz"
For numbers which are multiples of both three and five print "FizzBuzz"
O: N/A
C: N/A
E: N/A
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
//Lets loop through numbers from 1 to 100
for (var i = 1; i <= 100; i++) 
    //Now lets check if the number is a multiple of both three and five
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      //And then check if the number is a multiple of three
      console.log("Fizz");
    } else if (i % 5 === 0) {
      //And then check if the number is a multiple of five
      console.log("Buzz");
    } else {
      //Finally lets print the number itself
      console.log(i);


    // YOUR CODE GOES ABOVE HERE //
}

}



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}