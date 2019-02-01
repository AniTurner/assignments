var form = document.add
var form1 = document.subtract
var form2 = document.multiply


form.addEventListener("submit", function(e){
    e.preventDefault()
    var addOne = form.number1.value;
    var addTwo = form.number2.value;
    var span = document.getElementById("answer")
    span.textContent = parseInt(addOne) + parseInt(addTwo)
    
})
 
form1.addEventListener("submit", function(e){
    e.preventDefault()
    var subtractOne = form1.number3.value;
    var subractTwo = form1.number4.value;
    var span1 = document.getElementById("answer2")
    span1.textContent = parseInt(subtractOne) - parseInt(subractTwo)
})
form2.addEventListener("submit", function(e){
    e.preventDefault()
    var multiplyOne = form2.number5.value;
    var multiplyTwo = form2.number6.value;
    var span2 = document.getElementById("answer3")
    span2.textContent = parseInt(multiplyOne) / parseInt(multiplyTwo)
})