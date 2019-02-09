var ask = require('readline-sync');

var firstNumber = ask.question('Please enter your first number:');
console.log(firstNumber)
var secondNumber = ask.question('Please enter your second number:');

symbols = ["add","subtract", "multiply", "divide" ]
action = ask.keyInSelect(symbols, 'What would you like to do?');
console.log(action)

if(action === 0) {
    console.log("Your result is: ", parseInt(firstNumber) + parseInt(secondNumber))
}
if(action === 1) {
    console.log("Your result is: ", parseInt(firstNumber) - parseInt(secondNumber))
}
if(action === 2) {
    console.log("Your result is: ", parseInt(firstNumber) * parseInt(secondNumber))
}
if(action === 3) {
    console.log("Your result is: ", parseInt(firstNumber) / parseInt(secondNumber))
}