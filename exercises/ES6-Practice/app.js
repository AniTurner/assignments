//Replace all the vars with let and const. Alter the code however necessary to make sure this continues to work (so the pet's name isn't "John").
//John is the pet owner, and his name should be stored differently than the other names.

// let name = "John"
// const age = 101
// const pets = ["cat", "dog"]
// const petObjects = []

// function runForLoop() {
//     for (let i = 0; i < pets.length; i++) {
//          const pet = { type: pets[i] }
//         if (pets[i] === "cat") {
//            name = "fluffy"
//         } else {
//            name = "spot"
//         }
//         pet.name = name
//         petObjects.push(pet)
//     }
//     return name
// }

// console.log(runForLoop())


// Re-write this .map() using an arrow function:
// Be aware that if JavaScript sees a { directly after the => it will think it's starting a function, and not starting an object, so the : will be an unexpected symbol.

// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }

//TO THIS FUNCTION:

// const mapVegetables = (arr) => arr.map((carrot) => ({type: "carrot", name: carrot}))

// console.log(mapVegetables(carrots))


//Re-write this .filter() using an arrow function:
//TO THIS FUNCTION:
// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// const filterForFriendly = (arr) => arr.filter((person) => (!!person.friendly))

// console.log(filterForFriendly(people))

//Re-write the following functions to be arrow functions:

// const doMathSum = (a, b) => a + b

// const produceProduct = (a, b) => a * b

// console.log(doMathSum(2,2))
// console.log(produceProduct(4,2))


//Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:

// Hi Kat Stark, how does it feel to be 40?

const printString = (firstName, lastName, age) => `Hi ${firstName} ${lastName}, how does it feel to be ${age}`

console.log(printString("bob", "stark", 50))

//Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 const filterForDogs = (arr) => arr.filter((animal => (animal.type === "dog")))

 console.log(filterForDogs(animals))
 
 