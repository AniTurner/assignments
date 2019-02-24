var form = document.myForm

form.addEventListener("submit", function(e){
    e.preventDefault()
    
    var firstName = form.firstName
    var lastName = form.lastName
    var age = form.age
    var gender = form.gender
    var travelingTo = form.travelingTo
    var restriction = form.restriction

    var result = []
    for (var i = 0; i < restriction.length; i++) {
        if (restriction[i].checked) {
            result.push(restriction[i].value)
            
        }
    }

    console.log(result)
    alert("First Name: " + firstName.value +  "\nLast Name: " + lastName.value + "\nAge: " + age.value + "\nGender: " + gender.value + "\nDestination: " + travelingTo.value + "\nDiatary Restrictions: " + result) 
    
}) 