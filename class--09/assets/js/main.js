(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".homepage-slides").owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            autoplay: false,
            dots: true,
            navText:['<i class="zmdi zmdi-long-arrow-left"></i>','<i class="zmdi zmdi-long-arrow-right"></i>']
        });
        
        $(".case-studies-carousel").owlCarousel({
            items: 3,
            loop: true,
            nav: false,
            autoplay: false,
            dots: true,
            margin: 30
        });


        $(".testimonial-carousel").owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            autoplay: false,
            dots: true,
        });


        $(".logo-carousel").owlCarousel({
            items: 6,
            loop: true,
            nav: false,
            autoplay: true,
            dots: false,
            margin: 30
        });



        $(".single-testimonial-item-caroudel").owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            autoplay: true,
            dots: false,
            margin: 0
        });



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	