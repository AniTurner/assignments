// Create a function that takes two numbers as arguments and return their sum.

// function addition(a, b) {
//     return a + b
// }    
// console.log(addition(2,3))
// console.log(addition(-3,-6))
// console.log(addition(7,3))

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

// function increment(a) {
//     return a + 1
// }
// console.log(increment(0))
// console.log(increment(9))
// console.log(increment(-3))


/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
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

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
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

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
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

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// Create a function that takes a base number and an exponent number and returns the calculation.

// function calculateExponent(num1, num2) {
//     return Math.pow(num1,num2)
// }
// console.log(calculateExponent(5, 5))
// console.log(calculateExponent(10, 10))
// console.log(calculateExponent(3, 3))

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.

// function isEvenOrOdd(num) {
//     if (num % 2 === 0) {
//         return "even"
//     }
//     return "odd"
// }
// console.log(isEvenOrOdd(3))
// console.log(isEvenOrOdd(146))
// console.log(isEvenOrOdd(19))

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//Create a function that takes a number (from 1 to 12) and return its corresponding month name as a string.

// function month_name(num) {
//     if (num === 1) {
//         return "January"
//     } else if (num === 2) {
//         return "February"
//     } else if (num === 3) {
//         return "March"
//     } else if (num === 4) {
//         return "April"
//     } else if (num === 5) {
//         return "May"
//     } else if (num === 6) {
//         return "June"
//     } else if (num === 7) {
//         return "July"
//     } else if (num === 8) {
//         return "August"
//     } else if (num === 9) {
//         return "September"
//     } else if (num === 10) {
//         return "October"
//     } else if (num === 11) {
//         return "November"
//     } else if (num === 12) {
//         return "December"
//     } else {
//         return "not a number"
//     }
// }
// console.log(month_name(3))
// console.log(month_name(12))
// console.log(month_name(6))

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//Create a function that accepts an array and returns the last item in the array.

// function getLastItem(arr) {
//     return arr.pop()
// }
// console.log(getLastItem([1, 2, 3]))
// console.log(getLastItem(['cat', 'dog', 'duck']))
// console.log(getLastItem([true, false, true]))

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//Create a function that takes a string and returns the word count. The string will be a sentence.

// function countWords(str) {
//     var newStr = str.split(' ')
//     return newStr.length
// }
// console.log(countWords("Just an example here move along"))
// console.log(countWords("This is a test"))
// console.log(countWords("What an easy task, right"))

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//Create a function that takes an array of students and returns an array of student names.

// function getStudentNames(arr, item) {
//     var namesOnly = []
//     for (var i = 0; i < arr.length; i++) {
//         namesOnly.push(arr[i].name)
//         }
//         return namesOnly
//     }
// console.log(getStudentNames([{ name: 'Steve'}, { name: 'Mike'}, { name: 'John'}]))

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//Create a function that reverses a boolean value and returns the string "boolean expected" if another variable type is given.

// function reverse(bool) {
//     if(bool === true ) {
//         return (false)
//     } else if (bool === false) {
//         return (true)
//     } else if (bool != true && bool != false) {
//         return ("boolean expected")
//     }
// }

// console.log(reverse(true)),
// console.log(reverse(false)),
// console.log(reverse(0)),
// console.log(reverse(null))


/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//Create a function that takes an array of numbers and return the first and last elements as a new array.

// function firstLast(arr) {
//     return [arr.shift(), arr.pop()]
// }

// console.log(firstLast([5, 10, 15, 20, 25]))  //[5, 25]

// console.log(firstLast(["edabit", 13, null, false, true])) //["edabit", true]

// console.log(firstLast([undefined, 4, "6", "hello", null])) // [undefined, null]

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//Create a function that takes an array of numbers. Return the largest number in the array.

// function findLargestNum(arr) {
//     return Math.max(...arr)
// }

// console.log(findLargestNum([4, 5, 1, 3])) // ➞ 5

// console.log(findLargestNum([300, 200, 600, 150])) // ➞ 600

// console.log(findLargestNum([1000, 1001, 857, 1])) // ➞ 1001

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//Create a function that returns the number of argument it was called with.

function numArgs(...arr) {
  return arr.length
}

console.log(numArgs()) // ➞ 0

console.log(numArgs("foo")) // ➞ 1

console.log(numArgs("foo", "bar")) // ➞ 2

console.log(numArgs(true, false)) // ➞ 2

console.log(numArgs({})) // ➞ 1