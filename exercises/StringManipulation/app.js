var ask = require('readline-sync');
console.log('Hello! My name is KingKong. Help me get to know you!\n');
var firstName = ask.question('What is your first name? ');
console.log('Hi ' + firstName + '! \n');
var lastName = ask.question("Can I have your last name?")
console.log('Awesome! Welcome ' + firstName + ' ' + lastName + '.')
var favColor = ask.question("What is your favorite color?\n")
console.log('No way! ' + favColor.toUpperCase() + " is my favorite color, too!!!")
var info = ask.question('Ok! I do not know much about you. Tell me your favorite joke?')
console.log('Cool, the joke is ' + info.length + " characters long.")
animals = ['elephant', 'dog', 'zebra', 'cat', 'lion', 'hippo']
var animal = ask.keyInSelect(animals, "which animal do you like?")
countries = ['france', 'germany', 'england', 'spain', 'usa']
var country = ask.keyInSelect(countries, 'Which place do you like?')
console.log('It looks like you like ' + animals[animal].concat(countries[country]) + ".")
var family = ask.question("Now, tell me what you like about your family?")
console.log('Cool, I got ' + family.slice(family.length / 2) + ". Is that correct?")
var number = ask.question("Okay, my bad. Give me a number, I will try again.")
console.log("Okay, here is what you said: " + family.slice(number))
