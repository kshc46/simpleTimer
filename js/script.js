var min = 5;
var sec = "00";

/* when start is clicked, timer starts with this function */
$("#start").on("click", function() {
  var duration = 60 * min;
  var timer = duration, minutes, seconds;
    var counter = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        
        /* adds 0 to the front of the timer if < 10 */
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        $("#time").html(minutes + ":" + seconds);
      
        /* stops and clears timer */
        if (--timer < 0) {
          timer = duration;
          clearInterval(counter);            
        }
      
        $("#stop").on("click", function() {
          clearInterval(counter);
        });
    }, 1000);
});

/* adds to the clock */
$("#plus").on("click", function() {
  min += 1;
  $("#time").html("0" + min + ":" + sec)
});

/* subtracts from the clock */
$("#minus").on("click", function() {
  min -= 1;
  $("#time").html("0" + min + ":" + sec)
});

