function init() {
    new Vue({
        el:"#app",

        data:{
            countdown:"time"
        },

        methods:{

        },
        mounted:function () {
            // Set the date we're counting down to
            var countDownDate = new Date("Apr 30, 2021 18:00:00").getTime();

            // Update the count down every 1 second
            var x = setInterval(function() {

              // Get today's date and time
              var now = new Date().getTime();

              // Find the distance between now and the count down date
              var distance = countDownDate - now;

              // Time calculations for days, hours, minutes and seconds
              var days = Math.floor(distance / (1000 * 60 * 60 * 24));
              var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              var seconds = Math.floor((distance % (1000 * 60)) / 1000);

              // Output the result in an element with id="demo"
              this.countdown = days + ": " + hours + ": " + minutes + ": " + seconds;

              // If the count down is over, write some text
              if (distance < 0) {
                clearInterval(x);
                this.countdown = "EXPIRED";
              }
            }, 1000);

        }
    });
}

document.addEventListener("DOMContentLoaded", init);
