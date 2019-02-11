// Create a function that takes two numbers as arguments and return their sum.

// function addition(a, b) {
//     return a + b
// }    
// console.log(addition(2,3))
// console.log(addition(-3,-6))
// console.log(addition(7,3))

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

// function increment(a) {
//     return a + 1
// }
// console.log(increment(0))
// console.log(increment(9))
// console.log(increment(-3))

//Write both a function expression and a function declaration
    //You cannot use console.log() in the function when it's done
    //Function must return a value
    //Console.log the called function to see the returned value

// function myNum(a,b) {
//     return a * b
// }
// console.log(myNum(2,4))

// var myNum = function() {
//     var a = 3
//     var b = 2
//     return a * b
// }
// console.log(myNum())

// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
// function strLength(a,b) {
//     if (a.length === b.length){
//         return true
//     }
//     return false
// } 
// console.log(strLength("AB", "CD"))
// console.log(strLength("ABC", "DE"))
// console.log(strLength("hello", "edabit"))

// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

// function lessThanOrEqualToZero(num) {
//     if (num <= 0) {
//         return true
//     }
//     return false
// }
// console.log(lessThanOrEqualToZero(5))
// console.log(lessThanOrEqualToZero(0))
// console.log(lessThanOrEqualToZero(-2))
// console.log(lessThanOrEqualToZero(1))

// Create a function that takes a base number and an exponent number and returns the calculation.

function calculateExponent(num1, num2) {
    return Math.pow(num1,num2)
}
console.log(calculateExponent(5, 5))
console.log(calculateExponent(10, 10))
console.log(calculateExponent(3, 3))