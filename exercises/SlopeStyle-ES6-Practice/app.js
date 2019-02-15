//----------SLOPES STYLE ES6 PRACTICE------------------------------------//

// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

// function collectAnimals(...animals) {  
//     console.log(animals)
// }

// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]

//----------------------------------------------------------------------------//
//Write a function that returns a food object with the array names as properties using Object Literals:

// function combineFruit(fruit, sweets, vegetables){
//     const food = {fruit, sweets, vegetables}
//     return {food}
// }

// console.log(combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrit"]))

//----------------------------------------------------------------------------//
//Use destructuring to fill in the blanks and use the property names as variables:

// const vacation = {  
//     location: "Burly Idaho",
//     duration: "2 weeks"
//   };
  
//   function parseSentence(){
//     const {location, duration} = vacation
//     return `We're going to have a good time in ${location} for ${duration}`
//   }
// console.log(parseSentence())
//----------------------------------------------------------------------------//
//Use destructuring to make this code ES6:


// function returnFirst(items){
//     const [firstItem] = items 
//     return firstItem
// }
// console.log(returnFirst([1,2,3,4,5]))

//----------------------------------------------------------------------------//
//Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//     const [firstFav, secondFav, thirdFav] = favoriteActivities
//     return `My top three favorite activities are,${firstFav },${secondFav} , and ${thirdFav}`
// }
// console.log(returnFavorites(favoriteActivities))

//----------------------------------------------------------------------------//
//Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to

// function combineAnimals(arr1, arr2, arr3) {  
//     return [...arr1,...arr2,...arr3]
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))

// ["dog", "cat", "mouse", "jackolope", "platypus"]

//----------------------------------------------------------------------------//

//Try to make the following function more ES6xy:

// const product = (a, b, c, d, e) => {
//     let numbers = [a,b,c,d,e]
//     return numbers.reduce((acc, number) => {
//       return acc * number;
//     }, 1)}
  

// console.log(product(1,2,3,4,5))

//----------------------------------------------------------------------------//
//Make the following function more ES6xy. Use at least both the rest and spread operators:

// const unshift = (array, a, b, c, d, e) =>  
//      {return [...array, a, b, c, d, e]}
  
// console.log(unshift(["blue", "red", "yellow", "pink"],"a", "b","c", "d", "e"))


//----------------------------------------------------------------------------//
//Write some destructuring code to help this function out. Use object literals to simplify it:

