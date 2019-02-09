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

// var LawfulGoodIndex = wizards.findIndex(function(wizard) {
//     return wizard.alignment === "lawful good"
// }) 
// console.log(LawfulGoodIndex)

// var everyAlive = wizards.every(function(wizard) {
//     return wizard.isAlive = true
// })
// console.log(everyAlive)

// var atLeastOneGood = wizards.some(function(wizard){
//     return wizard.alignment === "neutral good"
// })
// console.log(atLeastOneGood)

wizards.find(function(wizard) {
    if (wizard.alignment === "neutral good") {
        wizard.isAlive = false
    }
})
console.log(wizards)

wizards.some