//  WIZARD BATTLE PRACTICE //

// Use forEach(), find(), findIndex(), some(), and every()


// Log to the console every Wizard in the array using forEach().
// Using the following array, complete the following tasks in order.
// Some tasks will change the behaviour of later tasks

var wizards = [
    {
      name: "Edwin Odesseiron",
      age: 37,
      alignment: "lawful evil"
    },
    {
      name: "Harry Potter",
      age: 21,
      alignment: "neutral good"
    },
    {
      name: "Hermony Granger",
      age: 21,
      alignment: "lawful good"
    },
    {
      name: "Ronny the Bear",
      age: 21,
      alignment: "neutral good"
    },
    {
      name: "Gandalf",
      age: 100,
      alignment: "neutral good"
    }
  ]
  console.log("wizards")

// Log to the console every wizard's name.
  wizards.forEach(function (wizard) {
    console.log(wizard);
  })

// Add an isAlive property to every wizard, setting it to true.
wizards.forEach(function(wizard) {
  wizard.isAlive = true
})
console.log(wizards)

// Make a new array of all the wizards that are "neutral good".
var neutralGoodWizards = []

wizards.forEach(function(wizard) {
  if (wizard.alignment === "neutral good") {
    neutralGoodWizards.push(wizard)
  }
})
console.log(neutralGoodWizards)

// Find Index of a wizard that is "lawful good".
wizards.findIndex(function(wizard) {
  return wizard.alignment === "lawful good"
})
console.log(wizards)

// Return a Boolean that states whether or not all the wizards are alive.
wizards.every(function(wizard) {
  return wizard.isAlive === true;
})
console.log(wizards)

// Return a Boolean that states whether or not at least one wizard is "neutral good".
wizards.some(function(wizard) {
  return wizard.alignment === "neutral good"
})
console.log(wizards)

// Check every alignment for every wizard. Kill every "neutral good" wizard. Modify every "neutral good" wizard isAlive property to false.
wizard.find(function(wizard) {
  if (wizard.alignment === "neutral good")
    wizard.isAlive = false
})
console.log(wizards)

// Return a Boolean that states whether or not all the wizards are alive.
wizards.every(function(wizard) {
  return (wizard.isAlive)
})
console.log(wizards)

// Return a Boolean that states whether or not some of the wizards are alive.
wizards.some(function(wizard) {
  return (wizard.isAlive)
})
console.log(wizards)


//   var names = wizards.forEach(function(wizard) {
//     console.log(wizard.name)  
// })

// wizards.map((name) => {
//     name.isAlive = 'true';
//     return name
// })
// console.log(wizards)

// var neutralGoodWizards = []
// wizards.forEach(function(wizard) {
//     if (wizard.alignment === "neutral good") {
//         return neutralGoodWizards.push(wizard)
//     }
// }) 
// console.log(neutralGoodWizards)

// wizards.findIndex(function(wizard) {
//     return wizard.alignment === "lawful good"
// }) 
// console.log(wizards)

isStillAlive = wizards.every(function(wizard) {
    return wizard.isAlive = true
})
// console.log(isStillAlive)

// var neutralGood = wizards.some(function(wizard){
//     return wizard.alignment === "neutral good"
// })
// console.log(neutralGood)

wizards.find(function(wizard) {
    if (wizard.alignment === "neutral good") {
        wizard.isAlive = false
    }
})
console.log(wizards)

// var isAliveAnymore = wizards.every(function(wizard) {
//     wizard.isAlive 
// })
// console.log(isAliveAnymore)

// var isAliveAnymore = wizards.some(function(wizard) {
//     wizard.isAlive
// })
// console.log(wizards)

