// make the box disapear when the user clicks it
var myBox = document.getElementsByClassName("red-box")
// console.log(myBox)
// function sayHello(){
//     console.log()
// }
myBox[0].addEventListener("click", function() {
    myBox[0].style = "background-color:white"
    console.log(myBox)
})
