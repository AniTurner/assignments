// Write a function that takes two arrays as parameters. The first array will be an array of people's names, and the second array will be the alphabet. Using a for loop within a for loop, create and return array that looks like this:

var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(people, alphabet){
    var result = []
    for (var i = 0; i < people.length; i++) {
        result.push(people[i])
        for (var j = 0; j < alphabet.length; j++) {
            result.push(alphabet[j].toUpperCase())
        }
    }
    return result.join(' ')
}
console.log(forception(people,alphabet))
