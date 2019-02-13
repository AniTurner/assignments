(function() {
    var display = document.getElementById('count-display-clicks')
    var btn = document.getElementById('count-btn')
    var countdown = document.getElementById("countdown")

    var count = localStorage.count || 0;
    var countDownNum = 10
    var countID;

    if(count > 0) {
        count = 0
        localStorage.count = 0
    }
    countdown.textContent = countDownNum

    display.textContent = count
//Stop Countdown callback function
    function stopTimer() {
        clearInterval(countID)
    }

//Countdown function
    function countDown() {
        countDownNum --
        countdown.textContent = countDownNum
    }

//Click event to count
    btn.addEventListener('click', increment)

//Callback for click event
    function increment() {
         if(!countID) {
            countID = setInterval(countDown, 1000)
            setTimeout(stopTimer, 10999)
        }
        if(countDownNum > 0) {
            count++
            localStorage.count = count //save current count in local storage
            display.textContent = count
        }
    }

})()


// window.addEventListener('click', function(){
//     count++
//     localStorage.count = count
//     display.textContent = count
    
// })


