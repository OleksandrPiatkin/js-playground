import * as constants from './scripts/constants.js';
import * as functions from './scripts/functions.js';

//1) Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2:
console.log( 'Create a function that multiplies all numeric property values of obj by 2', 
            '\n\n Original object:\n', constants.MENU, 
            '\n\n Arter using the multiplyNumeric() function:\n', functions.multiplyNumeric(constants.MENU, 2), '\n\n\n' );

//2) Create an object calculator with three methods:
//  read() prompts for two values and saves them as object properties.
//  sum() returns the sum of saved values.
//  mul() multiplies saved values and returns the result.
constants.calcBtn.addEventListener('click', () => {
  functions.calculator.read();
  console.log( '\nsum() is:\n', functions.calculator.sum(), 
              '\n\nmul() is:\n', functions.calculator.mul());
});


