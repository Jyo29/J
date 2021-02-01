$(document).ready(function(){
    $(window).scroll(function(){if (this.scrollY > 20){
        $('.navbar').addClass('sticky');

    }else{
    $('.navbar').removeClass('sticky');
    }
    if(this.scrollY > 500){
        $('.scroll-up-btn').addClass('show');
       }else{
           $('.scroll-up-btn').removeClass('show');
       }
    });
    
    
    //slide up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });


//toggle menu/navbar script
    $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass('active');//when clicked on menu button it shws menu i tablet form
    $('.menu-btn i').toggleClass('active');//when clicked on menu button, it flips to x 
    });

    //typing animation script

    /*var typed = new Typed(".typing",{
        strings: ['Web Developer','Coder','Infrastructure Engineer','Servicenow Developer' ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2",{
        strings: ['Web Developer','Coder','Infrastructure Engineer','Servicenow Developer' ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
//owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items:2,
                nav: flase
            },
            1000:{
                items:3,
                nav: false
            }
        }
    });*/

    let mousecursor = document.querySelector('.cursor');
    let navlinks = document.querySelector('.navbar .menu li');

    window.addEventListener('mousemove',cursor);

    function cursor (e) {
        mousecursor.style.top = e.pageY + "px";
        mousecursor.style.left = e.pageX + "px";

    }

    navlinks.forEach(link => {
        link.addEventListener("mouseover", () => {
        mousecursor.classList.add("link-grow");
        });

        link.addEventListener("mouseleave", () => {
        mousecursor.classList.remove("link-grow");
        });
    });
});