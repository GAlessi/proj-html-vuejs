function initVue() {
    new Vue({
        el:"#app",

        data:{
            countdown:"",
            links:["Home", "Pages", "Courses", "Features", "Blog", "Shop"],
            socials:["fa-twitter", "fa-facebook", "fa-instagram", "fa-linkedin"],
            explore:["Start here","Success story","Blog","Courses","Contact us"],
            information:["Membership","Purchase guide","Privacy policy","Terms of services"]

        },

        methods:{

        },
        mounted:function () {
            // imposta la data di fine countdown
            var countDownDate = new Date("Apr 30, 2021 18:00:00").getTime();

            // aggiorna il timer ogni secondo
            var x = setInterval(()=> {

              // prende la data attuale
              var now = new Date().getTime();

              // calcola il tempo mancante
              var distance = countDownDate - now;

              // converte i valori
              var days = Math.floor(distance / (1000 * 60 * 60 * 24));
              var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              var seconds = Math.floor((distance % (1000 * 60)) / 1000);

              // aggiorna il valore del data
              this.countdown = days + ": " + hours + ": " + minutes + ": " + seconds;

              // stampa "expired" in caoìso il countdown sia finito
              if (distance < 0) {
                clearInterval(x);
                this.countdown = "EXPIRED";
              }
            }, 1000);
        }
    });

}
function scroll() {
    $(document).bind('scroll', function () {
    if ($(document).scrollTop() > 130) {
        $('nav').addClass('fixed');
    } else {
        $('nav').removeClass('fixed');
    }
});
}

function init() {
    initVue();
    scroll();
}

$(init);
