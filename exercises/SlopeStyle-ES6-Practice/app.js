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


function returnFirst(items){
    const [firstItem] = items /*change this line to be es6*/
    return firstItem
}
console.log(returnFirst([1,2,3,4,5]))

