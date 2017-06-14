(function ($) {
	"use strict";

    jQuery(document).ready(function($){


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



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	