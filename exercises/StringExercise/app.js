// Make a functions that will return any given string into all caps followed by the same string all lowercase.

// var myStr = "Hello" 
//     console.log(myStr.toUpperCase() + myStr.toLowerCase())


// Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().

// function myNum(n) {
//     return(Math.floor(n.length / 2));
// }
// myNum("Hello World")

// Make a function that uses slice() and your other functions you've written to return the first half of the string

// function myStr(a) {
//     var res = a.slice(0, myNum(a));
//     return res
// }
// console.log(myStr("Hello World"))

// Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased.
// function capitalizeFirstHalf(a) {
//     let fisrtHalf = a.slice(0, a.length / 2);
//     let secondHalf = a.slice(a.length / 2).toLowerCase();
//     return fisrtHalf.toUpperCase() + secondHalf;
// }
// console.log(capitalizeFirstHalf('Hello World'))

// Make a function that takes any string and capitalizes any character that follows a space.
function myStr(a) {
    a = a.toUpperCase();
    a = a.split();
    for (var i = 0; i < a.length; i++) {
        a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
        return a.join(" ");
    }
}
console.log("hey friends! practice practice practice!")