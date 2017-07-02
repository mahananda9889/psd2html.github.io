(function ($) {
	"use strict";

    jQuery(document).ready(function($){
            
        $(".project-menu li").on('click', function(){
            var selector = $(this).attr('data-filter');
            
            $(".project-filter").isotop({
                filter: selector,
            });
        });
      
        $(".project-filter").isotop();

    });
    jQuery(window).load(function(){

        
    });

}(jQuery));	