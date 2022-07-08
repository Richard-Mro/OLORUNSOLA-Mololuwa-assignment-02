// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */
function sumOfNumbers(arrayOfNumbers) {
    let sum = 0;
for(let i = 0; i<= arrayOfNumbers.length-1; i++){
      sum += arrayOfNumbers[i];
   }
   return sum;
}

assignment.sumOfNumbers=sumOfNumbers;

/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
assignment.sumOfNumbers = sumOfNumbers;

function celsiusToFahrenheit(arrayOfNumbers) {
  let divisor = 9/5;
   for(let i = 0; i < arrayOfNumbers.length; i++){
     let multiplication = arrayOfNumbers[i] * divisor;
     let fahrenheit = multiplication + 32;
   let roundedValue = Math.round(fahrenheit);
      arrayOfNumbers[i] = roundedValue;
   }
   return arrayOfNumbers;
  }
assignment.celsiusToFahrenheit = celsiusToFahrenheit;
  
 


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

