var input = "bookkeeper larry";
// Create a function that randomly removes a letter.
function removeDuplicate(str) {
    var arr = str.split('');
    var other = [];
    for (var i = 0; i < arr.length; i++) {
        if (other.indexOf(arr[i])== -1) other.push(arr[i]);  
    }
    return other.join('');
}
console.log(removeDuplicate(input))