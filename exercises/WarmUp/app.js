//1. Write a function that takes a string as an parameter/argument and returns
//that string uppercased.


function upperCaseMe(str){
    return str.toUpperCase()
}

console.log(upperCaseMe("good morning!")) // GOOD MORNING!



// 2. Write a function that takes a string and returns that string reversed.

function reverseMe(str){
    var reversed = str.split('').reverse().join('')
    return reversed
}

console.log(reverseMe("What do I spell backwards?")) // ?sdrawkcab lleps I od tahW



/*
3. Write a function that takes a string and a number.
Return the string slice from index 0 to that argument number.
*/

function sliceMe(str, num){
    return str.slice(0, num)
}

console.log(sliceMe("This is the string to slice.", 10)) // This is th```
// Message Input

// Message js-january-2


//Make a function that takes a string and return that string where the first half is capatilized, and the second half is lower cased. (If the string length is odd, capatalize the short of the first half)

function capatilizeAndLowercase(str) {
    var middle = Math.floor(str.length / 2)
    var str1 = str.slice(0, middle).toUpperCase()
    var str2 = str/slice(middle, str.length).toLowerCase()
    return str1 + str2

}
console.log(capatilizeAndLowercase("Hello")) // => "HEllo"
console.log(capatilizeAndLowercase("Hello World"))


//Make a function that takes a string and capitalized my haracter that follows a space.
function capitalize(str) {
    var splitWords = str.split(' ');
    for ( var i = 0; i < splitWords.length; i++) {
        splitWords[i] = splitWords[i].charAt(0).toUpperCase() + splitWprds[i].slice(1);
    }
    return splitWords.join(' ')
}