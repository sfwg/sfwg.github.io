$(function(){
    
    "use strict";
    
    var mainNav = $('.av-main-header nav .av-main-nav');
    
    mainNav.clone().removeClass().addClass('av-mobile-nav').prependTo('.av-main-header');
    
    $('.av-mobile-toggle').on('click', function(e){
        e.preventDefault();
        $('.av-mobile-nav').slideToggle('slow');
    });
    
    /* Sticky navegation */
    
    $('.av-main-header').waypoint( 'sticky' );
    
    
    /* Scroll it */
    $.scrollIt({
      upKey: 38,             // key code to navigate to the next section
      downKey: 40,           // key code to navigate to the previous section
      easing: 'linear',      // the easing function for animation
      scrollTime: 1000,       // how long (in ms) the animation takes
      activeClass: 'active', // class given to the active nav element
      onPageChange: null,    // function(pageIndex) that is called when page is changed
      topOffset: -50           // offste (in px) for fixed top navigation
    });
    
    /* Stellar */
    $.stellar({
      horizontalOffset: 0,
      verticalOffset: 0
    });
    
    /* Count up */
    var options = {
      useEasing : true,
      useGrouping : true,
      separator : ',',
      decimal : '.'
    }

    $('.av-milestone .av-milestone-info').each(function(){
        var id = $(this).attr('id');
        var end = $(this).html();
        var milestone = new countUp(id, 0, end, 0, 2, options);
        milestone.start();
    });

    /* Owl Carousel */
    
    $(".av-client-carousel").owlCarousel({
          autoPlay: 3000, //Set AutoPlay to 3 seconds
          items : 2
    });
    
    /* Lightbox */
    
    
    /* Contact Form */
    $('form').submit(function(e) {
      e.preventDefault();
      var params = $(this).serialize();
      var url = 'https://limitless-harbor-2404.herokuapp.com/create'
      $.post(url, params, function(response) {
        var $form = $('form');
        $form.parent().append("<h2>Thanks for contacting us! We'll be in touch</h2>")
        $form.hide();
        console.log(response);
      });
    });
});