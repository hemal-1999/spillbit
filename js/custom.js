/*
===========================
            WOW JS
===========================
*/
$(document).ready(function(){
    new WOW().init();
});

/*
===============================================
                    Counter Up
===============================================
*/
$(document).ready(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 4000
    });
});


/*
===============================================
                    Mixit Up
===============================================
*/
$(function() {
    $('.work-mixin').mixItUp().sort();
});

/*
===============================================
                    owl carousel
===============================================
*/
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        autoplay:true,
        autoplayTimeout:4000,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
});