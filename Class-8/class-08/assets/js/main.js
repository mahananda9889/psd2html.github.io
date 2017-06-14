(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
        
        $(".staff-active").owlCarousel({
            items:4,
            autoplay:true,
            nav: true,
            loop: true,
            margin: 30,
            navText:['<i class="fa fa-long-arrow-left"</i>','<i class="fa fa-long-arrow-right"</i>']
            
        });



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	