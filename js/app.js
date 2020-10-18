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

// FORM VALID

const form = document.querySelector('.contact__form');
const formSpans = document.querySelectorAll('.form-group span');
const formInputs = document.querySelectorAll('.form-group input');
const formtextarea = document.querySelector('textarea');
const formGroup = document.querySelectorAll('.contact__form .form-group')



form.addEventListener('submit', (e) => {
    e.preventDefault();
    let validForm = false;

    formGroup.forEach(function (e) {
        let element = e.childNodes[3];

        let elName = element.name;

        if (element.value == '') {
            addError(element, ' is required', elName);
            element.nextElementSibling.style.opacity = '1';
        } else {
            element.nextElementSibling.style.opacity = '0';
            validForm = true;
        }
    });

    function addError(el, mes, n) {

        let span = el.nextElementSibling;
        span.setAttribute('style', 'color: red; font-weight: bold')
        span.innerHTML = n.toUpperCase() + mes;
        
    }

    if (validForm == true) {
        console.log('elo')
    }
    
});

