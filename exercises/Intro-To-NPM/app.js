var readline = require("readline-sync")

// var name = readline.question("What is your name?")
// console.log("Hello " + name)

// var answer = readline.keyInYNStrict("Do you like Node? ")
// console.log(answer)

var animals = ['Elephant', 'Buffalo', 'Lion']
var animalNotSelected = true;
while(animalNotSelected){
    var favAnimals = readline.keyInSelect(animals, 'What is your favorite animal?')
    if(favAnimals === -1) {
        console.log("Choose an animal, don't cancel")
    } else {
console.log('I like' + animals[favAnimals] + 's too!')
