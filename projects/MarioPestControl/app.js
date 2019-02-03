var form = document.name

form.addEventListener("input", function(e){
    e.preventDefault()
    var addOne = form.number1.value;
    var addTwo = form.number2.value;
    var addThree = form.number3.value;
    var span = document.getElementById("answer")
    span.textContent = (parseInt(addOne) * 5) + (parseInt(addTwo) * 7) + (parseInt(addThree) * 11)
})




