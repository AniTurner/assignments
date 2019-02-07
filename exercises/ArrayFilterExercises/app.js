//Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

// function fiveAndGreaterOnly(arr) {
//     var greaterOnly = arr.filter(function(number) {
//         if(number >= 5) {
//             return number
//         }
//     }) 
//     return greaterOnly
// }
// console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]
  
//Given an array of numbers, return a new array that only includes the even numbers.

// function evensOnly(arr) {
//     var evenNumbers = arr.filter(function(number) {
//         if(number % 2 === 0) {
//             return number
//         }
//     }) 
//     return evenNumbers
// }
//   // test
//   console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

//Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

// function fiveCharactersOrFewerOnly(arr) {
//     var strings = arr.filter(function(character) {
//         if(character.length <= 5) {
//             return character
//         }
//     })
//     return strings
//   }
//   // test
//   console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]

//Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

// function peopleWhoBelongToTheIlluminati(arr){
//     var belongToClub = arr.filter(function(person){
//         if(person.member === true) {
//             return person
//         }
//     })
//     return belongToClub
//   }
//   // test
//   console.log(peopleWhoBelongToTheIlluminati([
//       {
//           name: "Angelina Jolie",
//           member: true
//       },
//       {
//           name: "Eric Jones",
//           member: false
//       },
//       {
//           name: "Paris Hilton",
//           member: true
//       },
//       {
//           name: "Kayne West",
//           member: false
//       },
//       {
//           name: "Bob Ziroll",
//           member: true
//       }
//   ]));

// Filter out all the people who are not old enough to see The Matrix (younger than 18)

// function ofAge(arr){
//     var tooYoung = arr.filter(function(person) {
//         if(person.age < 18) {
//             return person
//         }
//     })
//     return tooYoung
// }
//   // test
//   console.log(ofAge([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ]));