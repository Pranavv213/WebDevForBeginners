const start = document.getElementById("start_button");
const stop = document.getElementById("stop_button");
const reset = document.getElementById("reset_button");
const stopwatch_Text = document.querySelector("#stopwatch_innerdiv_top");
start.addEventListener("click", start_timer);
stop.addEventListener("click", stop_timer);
reset.addEventListener("click", reset_timer);

let start_increment;
let sec = 0;
let min = 0;
let hour = 0;
let count = 0;

function start_timer() {
  if (count == 0) {count++;
    start_increment = setInterval(incrementTime, 1000);

   
    
  }
  
}

function stop_timer() {
  clearInterval(start_increment);
  count = 0;
}

function reset_timer() {
 sec=00;
 min=0;
 hour=0;
 stopwatch_Text.innerHTML = "00:00:00";
}

function pad(unit) {
    return(("0")+unit).length>2?unit:"0"+unit; 
}

function incrementTime() {
    if (sec < 59) {
      sec++;
    } else {
      min++;
      sec = 0;
    }
    if (min >= 60) {
      hour++;
      min = 0;
    }
    sec = pad(sec);
    min= pad(min);
    hour= pad(hour);
    stopwatch_Text.innerHTML = hour + ":" + min + ":" + sec;
  }