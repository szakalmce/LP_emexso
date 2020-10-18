$(document).ready(function () {
    $('.owl-one').owlCarousel({
        loop:true,
        margin:5,
        nav: false,
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            700:{
                items: 1,
                margin: 60,
            },
            767: {
                items: 2,
                margin: 0,
            },
            1000:{
                items:3
            }
        }
    })
    $('.owl-two').owlCarousel({
        loop:true,
        margin:30,
        nav: true,
        dots: false,
        autoplay: true,
        navText: ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            700:{
                items: 1,
                margin: 60,
            },
            767: {
                items: 2,
                margin: 0,
            },
            1000:{
                items:3
            }
        }
    })
})

// NAVBAR

    // btn visibility

const navbarToggler = document.querySelector('.navbar-toggler');
const navbarBtn = document.querySelector('.btn-navbar')


navbarToggler.addEventListener('click', () => {
    navbarBtn.classList.toggle('d-block');
})

    // navbar fixed 

const navbar = document.querySelector('.navbar');



window.addEventListener('scroll', function (e) {

let navbarH = navbar.scrollHeight;

    if (window.scrollY >= navbarH) {
        navbar.classList.add('fixed-top2');

    } else {
        navbar.classList.remove('fixed-top2');
    }
    // console.log(window.scrollY);
    // console.log(navbarH)
})


