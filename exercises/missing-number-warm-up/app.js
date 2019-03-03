//Write a function that returns the missing number from an unsorted array of numbers.

    //Create a function that identifies the range of numbers within a given array.
    //Have the function return all numbers missing within the range.


function findMissingNo(arr){
    //Find and return the missing number(s)
    let sorrtedArr = arr.sort((a,b) => {
        return a-b 
    })
   for (let i = 0; i < arr.length; i++) {
       if(sorrtedArr[i+1] - sorrtedArr[i] !=1) {
           return sorrtedArr[i] + 1
       }
   } 
}

console.log(findMissingNo([3,5,4,8,1,2,7]))  //Output: 6
console.log(findMissingNo([2,1,3,5]))        //Output: 4
console.log(findMissingNo([12,10, 9]))       //Output: 11
console.log(findMissingNo([-3,0,-2,3,2,-1])) //Output: 1


        
       
    