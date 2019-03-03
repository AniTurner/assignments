//Given a string including parentheses, write a function that returns true if every opening parentheses has a closing parentheses.

function balanceParentheses(str){
    // Your code here
    let arr = [];

    let open = {
        '(': ')'
    };

    let closed = {
        ')': true
    }
    for (let i = 0; i < str.length; i++) {
        let character = str[i];
        if (open[character]) {
            arr.push(character);
        } else if (closed[character]) {
            if (open[arr.pop()] !== character) 
            return false;
        }
           
        
    }
    return arr.length === 0;
}

console.log(balanceParentheses("()()")) // Output: true
console.log(balanceParentheses("(())")) // Output:  true
console.log(balanceParentheses("()))")) // Output:  false