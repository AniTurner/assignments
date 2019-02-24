
// Write a function that returns the number of times that the string "code" appears anywhere in the given string, except we'll accept any letter for "d", so "cope" and "cooe" would also count.

// Return the count, including any substitutions for the letter "d".

////////////////////////Using a foor loop//////////////////////////
function countCode(string) {
    var count = 0;
    for (var i=0; i < string.length; i++) {
        if(string[i]+ string[i +1] + string[i+3] === "coe"){
            count++
        }
    }

    return count;
}
console.log(countCode("aaacodebbb"))
console.log(countCode("codexxcode"))
console.log(countCode("cozexxcope"))

////////////////////////USING AJAX///////////////////////

function countCode(string) {
    return string.match(/co.e/g).length
}
console.log(countCode("aaacodebbb"))
console.log(countCode("codexxcode"))
console.log(countCode("cozexxcope"))

//look for co
// . = skip a character
// g => global character
// ajax only works for strings