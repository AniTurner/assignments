//Given an array of strings, find the 3 adjacent elements with the longest combined length. Return them in the form of an array.

function combined(arr){
    // Find the 3 adjacent elements with longest combined length

    let result = ["","",""]
    for(let i = 0; i < arr.length - 2; i++ ){
        if(arr[i].length + arr[i+1].length + arr[i+2].length > result[0].length + result[1].length + result[2].length){
        result.splice(0, 3 , arr[i], arr[i + 1], arr[i + 2])
        }
    }
    return result
    
}

console.log(combined(["this", "is", "an", "array"]))
console.log(combined(["coding", "is", "awesome", "and", "challenging"]))

// Output:  ["is", "an", "array"]
    // they have the longest combined length of any 3 adjacent elements. (9 characters)
    // In contract, ["this", "is", "an"] only has a combined length of 8 characters
