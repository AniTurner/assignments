// Log to the console every Wizard in the array using forEach().

// var wizards = ["Edwin Odesseiron", "Harry Potter", "Ronny the Bear", "Gandalf the Grey"] 

// wizards.forEach(function(wizard) {
//     console.log(wizards)
// })

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

