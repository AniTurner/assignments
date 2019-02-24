// Write a function that accepts a string as input. 
// Write a loop and add each letter of the string to an array. 
// Then return the that new array.


// var myStr = "Hello"

// function myArr() {
//     for (var i = 0; i < myStr.length; i++) {
//         var emptyArr = []
//         emptyArr.push(myStr.split(""))
//     }
//     return emptyArr
// } console.log(myArr())

// Write a function that accepts a string and a single character as inputs. 
// Write a loop that iterates over the string, and returns the position of the first occurrence of the specified character. 
// If the character is not found, tell that to the user by returning "Character not found!".

// var myStr = "Hello"
// function myArr(myStr,ch) {
//     for (var i = 0; i < myStr.length; i++) {
//         if (myStr[i] === ch) {
//             return i;
//         }
//     } 
//     return "not found";
// }
// console.log(myArr(myStr, "e"))

// Write a function that accepts an array of numbers as a parameter.
// Return "Found 42!" when the number 42 is found, return "42 not found!" if it is not in the array.
// var myNum = [1, 22, 10]
// function myNumArr(myNum) {
//     for (var i = 0; i < myNum.length; i++) {
//         if (myNum[i] === 42) {
//             return "found 42!"
//         }
//     }
//     return "42 not found"
// }
// console.log(myNumArr([1, 42, 50]))
// console.log(myNumArr([55, 3, 11]))

// Write a function that accepts 10 numbers in an array and then prints out the smallest number out of the ten without using Math.min()
// --- if I want the largest number I would do largest = -Infinity

// var myMin = [3, 8, 22, 1, 52]
// function myMinArr(myMin) {
//     var smallest = Infinity;
//     for (var i = 0; i < myMin.length; i++) {
//         if (myMin[i] < smallest) {
//             smallest = myMin[i];
//         }
//     }
//     return smallest
// } console.log(myMinArr(myMin))