var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var number1 = [0,1,2,3,4,5,6,7,8,9]
var symbols = ["!","@", "#", "$", "^"]

var pass = document.getElementById("password")
var pass2 = document.password

pass2.addEventListener("submit", randomPasswordGenerator)

function randomPasswordGenerator(e) {
    e.preventDefault()
    console.log(e)
    var all = alphabet.concat(number1).concat(symbols)
    var password = []
    for (var i = 0; i < 5; i++ ) {
    password.push(all[Math.floor(Math.random() * all.length)])
    }
    pass.textContent = password.join('')
    console.log(pass)
}