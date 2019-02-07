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
        if(num1 % num2 === 0) {
            return true
        } else {
            return false
        }
    }  
console.log(divisible(4,2))
console.log(divisible(9,3))
console.log(divisible(15,4))