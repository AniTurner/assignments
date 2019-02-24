// The "submit" event refreshed your brower by default
// use "e.preventDefault" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function
 var myForm = document.getElementById("submit-me")
 var other = document.getElementById("age")
 myForm.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(other.value)
 })