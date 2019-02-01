var lyrics = ["This", "hit", "that", "ice", "cold", 
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];
var newLyrics = []

// // First function: returns contents of the array, lyrics, to the console as a string, including necessary spaces.
// function mylyrics(lyrics) {

//     return(lyrics)
// }    console.log(lyrics.join(' ');
// mylyrics()

// Second function: returns lyrics backwards ("pretty so I'm myself kiss Gotta...").
// function revLyrics(arr) {
//     var reversed = arr.reverse().join(' ')
//     return reversed
// } console.log(revLyrics(lyrics))

// Third function: returns a string of just every other word, (e.g. "this that cold Pfeiffer...").
function otherLyrics(arr) {
    for(var i = 0; i < arr.length; i+=2){
        newLyrics.push(arr[i])
        return otherLyrics(arr)
        
    }
} console.log(arr)


