var timer;
var form = document.form;

form.addEventListener("submit", startTimer)

function startTimer(e) {
    e.preventDefault()
    clearInterval(timer)
    //displaying timer in every one second
    timer = setInterval(showtimer, 1000)
}

function showtimer() {
    var timer_month = document.getElementById('month').value
    var timer_day = document.getElementById('day').value
    var timer_year = document.getElementById('year').value


    //show countdown timer only if month selected
    if (document.getElementById('month').value !== 'Select a month...') {
        document.getElementById('countdown').style["display"] = "flex"

        //Arrange alues in Date Time Format
        var end = new Date(`${timer_month}, ${timer_day}, ${timer_year}`);
        //Get current Date time
        var now = new Date().getTime();
        //Total miliseconds in one second
        var second = 1000;
        //total seconds in a minute
        var minute = 1000 * 60;
        //total minutes in an hour
        var hour = 1000 * 60 * 60;
        //total hours in a day
        var day = 1000 * 60 * 60 * 24;

        var remain = (end - now)
        if (remain < 0) {
            clearInterval(timer);
            document.getElementById("timer_value")
            return
        }

        //get remaining days
        var days = Math.floor(remain / day);
        var hours = Math.floor((remain % day) / hour)
        var minutes = Math.floor((remain % hour) / minute)
        var seconds = Math.floor((remain % minute) / second)

        //get values to display
        document.getElementById("day-display").innerHTML = days;
        document.getElementById("hour-display").innerHTML = hours;
        document.getElementById("minute-display").innerHTML = minutes;
        document.getElementById("second-display").innerHTML = seconds;
    }

}