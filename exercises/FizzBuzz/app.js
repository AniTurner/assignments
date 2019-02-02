// Write a for loop that plays the FizzBuzz game. Your output should count 1 to 100 and replace everything divisible by 3 with "fizz", everything divisible by 5 with "Buzz", and everything divisible by both 3 and 5 with "FizzBuzz"

var num = 100;
for (var i = 1; i <= 100; i++) {
    var fizzBuzzNum = []
    fizzBuzzNum.push(i)
    if(i % 3 === 0 && i % 5 === 0) {
        fizzBuzzNum.push('FizzBuzz')
    } else if (i % 3 === 0) {
        fizzBuzzNum.push('fizz')
    } else if (i % 5 === 0){
        fizzBuzzNum.push('buzz')
    } else {
        fizzBuzzNum.push(i)
    }
    console.log(fizzBuzzNum)
} 