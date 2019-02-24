//Create a function that accepts the pirate's inscription.
//Create an array to store all repeated words.
//Only list the repeated words once in the new array.
//Return the new array.
const str = ["Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."]

function repeatedWords(str) {

    const arr = str.toLowerCase().split(" ").sort().join("").match(/(.)\1+/g);
    result = []
    if (arr != null) {
        arr.forEach((elem) => {
          result.push(elem[0]);
        });
      }
    
    return result
}
console.log(repeatedWords(result))