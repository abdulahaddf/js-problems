// function radianToDegree(radian) {
//     if(typeof radian != 'number'){
//         return "Provide valid input"
//     }
//   const PI = 3.14159265359;
//   const degree = (radian * (180 / PI)).toFixed(2);
//   return degree;
// }

// function isJavaScriptFile(fileName){
//     if(typeof fileName != 'string' || fileName.length == 0){
//         return "Provide valid input"
//     }
//    if(fileName.endsWith('.js')){
//     return true;
//    }else{
//    return false;
//    }
   
// }

// function isBestFriend(objectOne, objectTwo) {
//     if (
//       objectOne.name == objectTwo.friend &&
//       objectTwo.name == objectOne.friend
//     ) {
//       return true;
//     } else {
//       return false;
//     }
//   }

///////////////////////////////problem 1////////////////////
// function mindGame(positiveNumber) {
//     if (isNaN(positiveNumber)) {
//         return "Error: Input must be a number.";
//       }
//   if (positiveNumber <= 0) {
//     return "Enter positive number";
//   }
//   multiplication = positiveNumber * 3;
//   addition = multiplication + 10;
//   divition = addition / 2;
//   subtruction = divition - 5;
//   return subtruction;
// }
// let result = mindGame("df");
// console.log(result);


///////////////////////////////problem 2////////////////////
// function evenOdd(string) {
//     if (typeof string != "string") {
//       return "Error: Input must be a string.";
//     }
//     if (string.length % 2 == 0) {
//       return "Even";
//     } else {
//       return "Odd";
//     }
//   }
// let result = evenOdd("Batcddgh7");
// console.log(result);


///////////////////////////////problem 3////////////////////
// function isLGSeven(number) {
//     if (isNaN(number)) {
//         return "Error: Input must be a number.";
//       }
//   else {
//     let difference = number - 7;
//   if (difference < 7) {
//     return difference;
//   } else {
//     let double = number * 2;
//     return double;
//   }
//   }
// }
// let result = isLGSeven("df");
// console.log(result);

///////////////////////////////problem 4////////////////////
// function findingBadData(numbers) {
//     if (!Array.isArray(numbers)) {
//         return "Error: Input must be an array.";
//       }
    
//  let badData = 0;
//  for (let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     console.log(element);
//         if (element < 0) {
//         badData = badData + 1  ;   
//    }  
//  }
//  return badData;
// }
// let result = findingBadData(2);
// console.log( result);


///////////////////////////////problem 5////////////////////
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
let result = gemsToDiamond(1, 1, "df" );
console.log(result);
    
