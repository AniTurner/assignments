//1) Sort an array from smallest number to largest

function leastToGreatest(arr) {
    var sorted = arr.sort(function(a,b){
        return a-b 
    })
  } 
  
  console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90] 
  