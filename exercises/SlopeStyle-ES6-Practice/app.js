// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

// function collectAnimals(...animals) {  
//     console.log(animals)
// }

// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]

//Write a function that returns a food object with the array names as properties using Object Literals:

function combineFruit(fruit, sweets, vegetables){
    const food = {fruit, sweets, vegetables}
    return {food}
}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrit"]))

    