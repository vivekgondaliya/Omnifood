$(document).ready(function(){
    
    /* Sticky Navigation */
    $('.js--section-features').waypoint(function(direction){
       if(direction == "down"){
           $('nav').addClass('sticky');
       } else {
           $('nav').removeClass('sticky');
       }
    },{
        offset: '60px;'    
    });
    
    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function(){
        $('html, body').animate(
            {
                scrollTop : $('.js--section-plans').offset().top
            }, 1000);
    });
    
    $('.js--scroll-to-start').click(function(){
        $('html, body').animate(
            {
                scrollTop : $('.js--section-features').offset().top
            }, 1000);
    });
    
    /* Navigation Scroll */
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    /* Animate */
    $('.js--wp-features').waypoint(function(direction){
        $('.js--wp-features').addClass('animated fadeIn');
    }, {
        offset :"50%;"
    });

    $('.js--wp-app-screen').waypoint(function(direction){
        $('.js--wp-app-screen').addClass('animated fadeInUp');
    }, {
        offset :"50%;"
    });
    
    $('.js--wp-cities').waypoint(function(direction){
        $('.js--wp-cities').addClass('animated fadeIn');
    }, {
        offset :"50%;"
    });
    
    $('.js--wp-premium-plan').waypoint(function(direction){
        $('.js--wp-premium-plan').addClass('animated pulse');
    }, {
        offset :"50%;"
    });

});