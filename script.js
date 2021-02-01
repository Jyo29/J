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
