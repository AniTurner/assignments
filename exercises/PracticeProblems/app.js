// Make a function that takes a string and returns that string reversed.
// var name = "Hello World"
// function myStr(str) {
//     var reversed = [];
//     reversed = name.split("").reverse().join("")
    
//     return reversed
// }
// console.log(myStr("Hello World"))

// Make a function that takes a string and returns true if the string could be a number else return false.

// function num(str) {
//     if (Number(str)) {
//         return 'True';
//     } 
//     return 'False';
// }
// console.log(num("3"))

// Make a function that takes a number and returns true if the number is even else return false.

// let isEven = function(num) {
//     if (num % 2 === 0) {
//         return true
//     }
//    return false
// }
// console.log(isEven(3))

// Make a function that takes an array and returns the average of the array.
// let averageArray = function(arr){
//     var count = 0;
//     for (var i = 0; i < arr.length; i++) {
//         count += arr [i]
        
//     }
//     return count / arr.length
// }
// console.log(averageArray([1,2,3]))
// console.log(averageArray([5,-10,10,20]))

// Make a function that takes two arrays and returns a single array of the items from the arrays added alternatingly.

let combineArrays = function(arr1, arr2) {
    emptyArr = []
    for(var i = 0; i < arr1.length; i++) {
        emptyArr.push(arr1[i], arr2[i])
    }
    return emptyArr
}
console.log(combineArrays(["a", "b", "c"],[1,2,3]))