function isPalindrome(str) {
    reversed = str.toLowerCase().replace(/\W/g, '')
       if (reversed === str) {
        return false
       } else {
           return true
       }
    }
    




console.log(isPalindrome('Star Rats')); //true
console.log(isPalindrome("palindrome"));  // false
console.log(isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!"));  // true
