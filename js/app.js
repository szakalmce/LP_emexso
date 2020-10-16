$(document).ready(function () {
    $('.owl-one').owlCarousel({
        loop:true,
        margin:10,
        nav: false,
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
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
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })
})

