// The function mindGame takes in a positive number as input and performs some arithmetic operations on it and the final result is returned as the output.
function mindGame(positiveNumber) {
    if (isNaN(positiveNumber)) {
        return "Error: Input must be a number.";
      }
  if (positiveNumber <= 0) {
    return "Enter positive number";
  }
  multiplication = positiveNumber * 3;
  addition = multiplication + 10;
  divition = addition / 2;
  subtruction = divition - 5;
  return subtruction;
}


// The function evenOdd takes in a string as input and returns the string "Even" or "Odd" depending on the length of the string.

function evenOdd(string) {
    if (typeof string != "string") {
      return "Error: Input must be a string.";
    }
    if (string.length % 2 == 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }


// the function isLGSeven takes a number as input. If the difference between the number and seven is less than 7, it returns the difference.Otherwise it returns double of the input number.

function isLGSeven(number) {
    if (isNaN(number)) {
        return "Error: Input must be a number.";
      }
  else {
    let difference = number - 7;
  if (difference < 7) {
    return difference;
  } 
  else {
    let double = number * 2;
    return double;
  }
  }
}


// the function finingBadData takes array as input which contains some positive and negative numbers. it returns all the negative numbers as bad data.
function findingBadData(numbers) {
    if (!Array.isArray(numbers)) {
        return "Error: Input must be an array.";
      }

  let badData = 0;
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element < 0) {
      badData = badData + 1;
    }
  }
  return badData;
}


//The function gemsToDiamond takes some numbers as number of gem and it converts them to Diamond with the given power of gem. if returns the total number of diamond if the total number is greater than 2000 , it subtracts 2000 and returns the rest number.
   function gemsToDiamond(gem1, gem2, gem3) {
    if (isNaN(gem1) || isNaN(gem2) || isNaN(gem3)) {
        return "Error: Input must be a number.";
      }
    let diamond1 = gem1 *21;
    let diamond2 = gem2 *32;
    let diamond3 = gem3 *43;
    let total = diamond1 + diamond2 + diamond3;
    if (total > 2000) {
        let restDiamonds = total - 2000;
        return restDiamonds;
        
    }
    return total;
}