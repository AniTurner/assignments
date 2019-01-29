//Preliminaries
// Write a for loop that prints to the console the numbers 0 through 9.
// var nums = 10;
// for (var i = 0; i <= 9; i++) {
//     console.log(i)
// }

// // Write a for loop that prints to the console 9 through 0.
// var nums = 10,
//     reverse = false;

// for (i = 0; i < nums; i++) {
//     if (reverse) console.log(num-i)
//     else console.log(i)
// }
// // Write a for loop that prints these fruits to the console.
// var fruit = ["banana", "orange", "apple", "kiwi"]
// for (var i = 0; i < fruit.length; i++ ){
//     console.log(fruit[i])
// }

// Write a for loop that will push the numbers 0 through 9 to an array.
// var num = []
// for (i = 0; i <= 9; i++) {
//     num.push(i)
// }
// console.log(num)

// Write a for loop that prints to the console only even numbers 0 through 100.
// var num = []
// for (var i = 0; i <= 100; i+=2) {
//     num.push(i)
// }
// console.log(num)

// Write a for loop that will push every other fruit to an array.

// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// var otherFruit = []
// for (var i = 0; i < fruit.length; i+=2) {
//     otherFruit.push(fruit[i])
// }
// console.log(otherFruit)

// // Write a loop that will print out all the names of the people of the people array
// var peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
//   ]
//   for (var i = 0; i < peopleArray.length; i++){
//       console.log(peopleArray[i].name)
//   }

// Write a loop that pushes the names into a names array, and the occupations into an occupations array.

// var namesArray = []
// var occupationArray = []

// for (var i = 0; i < peopleArray.length; i++) {
//     namesArray.push(peopleArray[i].name)
//     occupationArray.push(peopleArray[i].occupation)
// }
// console.log(namesArray)
// console.log(occupationArray)

// Write a loop that pushes every other name to an array starting with "Harrison Ford", and every other occupation to another array starting with "Singer".
// var harrisonFord = []
// var singer = []

// for (i = 0; i < peopleArray.length; i+=2) {
//     harrisonFord.push(peopleArray[i].name)
//     singer.push(peopleArray[i].occupation)
// }
// console.log(harrisonFord)
// console.log(singer)

// var num1 = []
// var num = [0,0,0]
// for (var i = 0; i < 3; i++) {
//     num1.push(num)
// }
// console.log(num1)

// var num1 = []
// // var num = [0,0,0]
// for (var i = 0; i < 3; i++) {
//     num1.push([i, i, i])
// }
// console.log(num1)

var grid = [ [ 0, 1, 2 ], [ 0, 1, 2 ], [ 0, 1, 2 ] ]
var num1 = []
for (var i = 0; i < 3; i++) {
    num1[i]= []
    for (var j = 0; j < 3; j++) {
        num1[i].push("x") 
    }
}
console.log(num1)

