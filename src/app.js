function initVue() {
    new Vue({
        el:"#app",

        data:{
            module1:"position1",
            module2:"position2",
            module3:"position3",
            module4:"hide",
            dot1:"active",
            dot2:"",
            dot3:"",
            dot4:"",
            countdown:"",
            links:[
                {
                    nome:"Home",
                    drop:[
                        "MaxCoach Education",
                        "Course Portal",
                        "Distant Learning",
                        "Multimedia Pedagogy",
                        "Modern Schooling",
                        "Remote Training",
                        "Health Coaching",
                        "Gym Coaching",
                        "Business",
                        "Artist",
                        "Kitchen Coach",
                        "Motivation",
                        "Dancing",
                        "Guitar",
                        "Yoga",
                        "Photography",
                        "Personal Finance",
                    ],
                    image: "img/homepages-mega-menu-image-alt.jpg"
                },
                {
                    nome:"Pages",
                    drop:[
                        "Start Here",
                        "Success Story",
                        "About me",
                        "About us",
                        "About us 01",
                        "About us 02",
                        "About us 03",
                        "Contact me",
                        "Contact us",
                        "Purchase Guide",
                        "Privacy Policy",
                        "Terms of Service"
                    ],
                    image: false
                },
                {
                    nome:"Courses",
                    drop:[
                        "Courses Grid 01",
                        "Courses Grid 02",
                        "Courses Grid 03",
                        "Membership Levels",
                        "Become a Teacher",
                        "Profile",
                        "Checkout",
                        "Single Layout"
                    ],
                    image: false
                },
                {
                    nome:"Features",
                    drop:[
                        "Events",
                        "Zoom Meetings"
                    ],
                    image: false
                },
                {
                    nome:"Blog",
                    drop:[
                        "Blog Grid",
                        "Blog Masonry",
                        "Blog Classic",
                        "Blog List"
                    ],
                    image: false
                },
                {
                    nome:"Shop",
                    drop:[
                        "Shop Left Sidebar",
                        "Shop Right Sidebar",
                        "Cart",
                        "Wishlist",
                        "Single Product"
                    ],
                    image: false
                }

            ],
            socials:[
                {
                    icon:"fa-twitter",
                    name:"twitter"
                 },
                 {
                    icon:"fa-facebook",
                    name:"facebook"
                },
                {
                    icon:"fa-instagram",
                    name:"instagram"
                },
                {
                    icon:"fa-linkedin",
                    name:"linkedin"
                }
            ],
            explore:["Start here","Success story","Blog","Courses","Contact us"],
            information:["Membership","Purchase guide","Privacy policy","Terms of services"]

        },

        methods:{

            carousel: function (ind) {
                if (ind == 0) {
                    this.module1 = "position1";
                    this.module2 = "position2";
                    this.module3 = "position3";
                    this.module4 = "hide";
                    this.dot1 = "active";
                    this.dot2 = "";
                    this.dot3 = "";
                    this.dot4 = "";
                }else if (ind == 1) {
                    this.module1 = "hide";
                    this.module2 = "position1";
                    this.module3 = "position2";
                    this.module4 = "position3";
                    this.dot1 = "";
                    this.dot2 = "active";
                    this.dot3 = "";
                    this.dot4 = "";
                }else if (ind == 2) {
                    this.module1 = "position3";
                    this.module2 = "hide";
                    this.module3 = "position1";
                    this.module4 = "position2";
                    this.dot1 = "";
                    this.dot2 = "";
                    this.dot3 = "active";
                    this.dot4 = "";
                }else if (ind == 3) {
                    this.module1 = "position2";
                    this.module2 = "position3";
                    this.module3 = "hide";
                    this.module4 = "position1";
                    this.dot1 = "";
                    this.dot2 = "";
                    this.dot3 = "";
                    this.dot4 = "active";
                }
            },

            //se il numero è minore di 10 aggiunge uno 0
            addZero: function (num) {
                if (num < 10) {
                    return "0" + num;
                }else {
                    return num;
                }
            }
        },
        mounted:function () {
            // imposta la data di fine countdown
            const countDownDate = new Date("Apr 30, 2021 18:00:00").getTime();

            // aggiorna il timer ogni secondo
            const x = setInterval(()=> {

              // prende la data attuale
              const now = new Date().getTime();

              // calcola il tempo mancante
              const distance = countDownDate - now;


              // converte i valori
              const days = this.addZero(Math.floor(distance / (1000 * 60 * 60 * 24)));
              const hours = this.addZero(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
              const minutes = this.addZero(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
              const seconds = this.addZero(Math.floor((distance % (1000 * 60)) / 1000));

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

function follow() {
    $('.jumbotron').mousemove(function(event){
        let positionX = event.pageX;
        let positionY = event.pageY;

        $('#hero4').get(0).style.setProperty("bottom", 25 +(positionY/8)+"px");
        $('#hero4').get(0).style.setProperty("right", 120 +(positionX/8)+"px");

        $('#hero2').get(0).style.setProperty("bottom", 120 +(-positionY/8)+"px");
        $('#hero2').get(0).style.setProperty("left", 250 +(-positionX/8)+"px");

        $('#hero1').get(0).style.setProperty("bottom", 120 +(positionY/10)+"px");
        $('#hero1').get(0).style.setProperty("left", 230 +(positionX/10)+"px");




 });
}

function init() {
    initVue();
    scroll();
    follow();
}

$(init);
