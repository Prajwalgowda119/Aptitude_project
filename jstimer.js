 // Variables to store start time, elapsed time, and timer interval
 let startTime;
 let elapsedTime = 0;
 let timerInterval;
 
 // Function to start or stop the stopwatch
 function startStop() {
     if (timerInterval) {
         // If the timer is running, stop it
         clearInterval(timerInterval);
         timerInterval = null;
     } else {
         // If the timer is stopped, start it
         startTime = Date.now() - elapsedTime;
         timerInterval = setInterval(updateTime, 10); // Update time every 10 milliseconds
     }
 }
 
 // Function to update the display with elapsed time
 function updateTime() {
     const elapsedTimeMillis = Date.now() - startTime;
     const minutes = Math.floor(elapsedTimeMillis / (1000 * 60));
     const seconds = Math.floor((elapsedTimeMillis % (1000 * 60)) / 1000);
     const milliseconds = Math.floor((elapsedTimeMillis % 1000) / 10);
 
     // Display the elapsed time in the format "00:00:00"
     const displayTime = `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;
     document.getElementById("display").innerText = displayTime;
 }
 
 // Function to reset the stopwatch
 function reset() {
     clearInterval(timerInterval);
     timerInterval = null;
     elapsedTime = 0;
     document.getElementById("display").innerText = "00:00:00";
 }
 
 // Function to pad single-digit numbers with leading zeros
 function padTime(num) {
     return num < 10 ? `0${num}` : num;
 }
 