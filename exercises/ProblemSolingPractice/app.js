// Write a function that takes an array of numbers and returns the largest (without using Math.max())

// function largestNum(arr) {
//     var arrValue = arr[0];
//     for (var i=1; i < arr.length; i++) {
//             if(arr[i] > arrValue) {
//                 arrValue = arr[i];
//             }
//         }
//         return arrValue;
//     }
// console.log(largestNum([3,5,2,8,1]))

// Write a function that takes an array of words and a character and return each word that has that letter present.

// function wordArr(arr,ch) {
//     var newWordArr = []
//     for(var i =0; i < arr.length; i++ ) {
//         if(arr[i].includes(ch)) {
//             newWordArr.push(arr[i])
//         }
//     }return newWordArr;
// } console.log(wordArr(["#3", "$$$", "C%4!", "Hey!"], "!"))


//Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

function divisible(num1, num2) {
    for (var i = 0; i < num1.length; i++) {
        if(num1 / num2) {
            return true
        } else {
            return false
        }
    }  
}