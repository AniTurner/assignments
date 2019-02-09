// 1) Turn an array of numbers into a total of all the numbers

// function total(arr) {
//     var totals = arr.reduce(function(final,num) {
//         return final += num
//     })
//     return totals
//  }
//  console.log(total([1,2,3])); // 6
 
//  2) Turn an array of numbers into a long string of all those numbers.

// function stringConcat(arr) {
//     var allStrings = arr.reduce(function(string,num) {
//         return string + num
//     }, "") 
//     return allStrings
//  }
 
//  console.log(stringConcat([1,2,3])); // "123"

 //3) Turn an array of voter objects into a count of how many people voted
//  function totalVotes(arr) {
//     var allVotes = arr.reduce(function (votes, person){
//         if(person.voted === true) {
//            votes++
//         }
//         return votes
//     },0) 
//     return allVotes
//  }
 
//  var voters = [
//      {name:'Bob' , age: 30, voted: true},
//      {name:'Jake' , age: 32, voted: true},
//      {name:'Kate' , age: 25, voted: false},
//      {name:'Sam' , age: 20, voted: false},
//      {name:'Phil' , age: 21, voted: true},
//      {name:'Ed' , age:55, voted:true},
//      {name:'Tami' , age: 54, voted:true},
//      {name: 'Mary', age: 31, voted: false},
//      {name: 'Becky', age: 43, voted: false},
//      {name: 'Joey', age: 41, voted: true},
//      {name: 'Jeff', age: 30, voted: true},
//      {name: 'Zack', age: 19, voted: false}
//  ];
//  console.log(totalVotes(voters)); // 7
 
//  4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

// function shoppingSpree(arr) {
//     var total = arr.reduce(function(totalPrice, individual) {
//         return individual.price += totalPrice
//     }, 0) 
//     return total 
//  }
 
 
//  var wishlist = [
//      { title: "Tesla Model S", price: 90000 },
//      { title: "4 carat diamond ring", price: 45000 },
//      { title: "Fancy hacky Sack", price: 5 },
//      { title: "Gold fidgit spinner", price: 2000 },
//      { title: "A second Tesla Model S", price: 90000 }
//  ];
 
//  console.log(shoppingSpree(wishlist)); // 227005

//5) Given an array of arrays, flatten them into a single array

// function flatten(arr) {
//     var all = arr.reduce(function(a,b) {
//         return a.concat(b)
//     })   
//     return all
//  } 
 
//  var arrays = [
//      ["1", "2", "3"],
//      [true],
//      [4, 5, 6]
//  ];
 
//  console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];
 


 //6) Given an array of potential voters, return an object representing the results of the vote
 var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
    var allVotes = arr.reduce(function(final, person){
        if(person.age >= 18 && person.age <= 25) {
            final.youth++;
            if(person.voted){
                final.youngVotes++
            }
        }
        if(person.age >= 26 && person.age <= 35) {
            final.mids++;
            if(person.voted) {
                final.midVotes++
            }
        }
        if(person.age >= 36 && person.age <= 55) {
            final.olds++;
            if(person.voted) {
                final.oldVotes++
            }
        }
        return final
    }, {youngVotes: 0, 
        youth: 0, 
        midVotes:0, 
        mids: 0, 
        oldVotes: 0, 
        olds: 0}) 
    return allVotes
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4 
}
*/