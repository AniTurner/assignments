
let timer;
let form = document.form;

form.addEventListener("submit", function (e) {
    e.preventDefault()
   clearInterval(timer) 
   var timer_month = document.getElementById('month').value
   var timer_day = document.getElementById('day').value
   var timer_year = document.getElementById('year').value

   var timer_hour = document.getElementById('hour').value
   if(timer_hour == "") {
       timer_hour = 0
   }

   var timer_min = document.getElementById('min').value
   if(timer_min == "") {
       timer_min = 0
   }

   var timer_date = timer_month + timer_day + timer_year + timer_hour + timer_min;
   //Arrange alues in Date Time Format
   var end = new Date(timer_date);
   //Get current Date time
   var now = new Date();
   //Total miliseconds in one second
   var second = 1000;
   //total seconds in a minute
   var minute = second * 60;
   //total minutes in an hour
   var hour = minute * 60;
   //total hours in a day
   var day = hour * 24;


   function showtimer() {
    //Get the difference between current and entered date time 
    var remain = (end - now)
    if (remain < 0) {
        clearInterval(timer);
        document.getElementById("timer_value")
        return 
    }

       //get remaining days
       var days = Math.floor(remain / day);
       var hours = Math.floor((remain % day) / hour )
       var minutes = Math.floor((remain % hour) / minute )
       var seconds = Math.floor((remain % minute) / second )
   
       document.getElementById("timer_value").innerHTML = days + 'Days';
       document.getElementById("timer_value").innerHTML += hours + 'Hours';
       document.getElementById("timer_value").innerHTML += minutes + 'Minutes';
       document.getElementById("timer_value").innerHTML += seconds + 'Seconds';
    }
    //display timer in every one second
    timer = setInterval(showtimer, 1000) 
})


