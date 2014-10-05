(function ( $ ) {

    $.fn.animateIn = function(){
    
        var el = $(this);
        var height = $(window).innerHeight();
        
        el.css('opacity', '0');
 
        
        $(window).scroll(function(){
            
            el.each(function(){
                
                el.css('opacity', '100');
                
                var scrollTop  = $(window).scrollTop();
                var obj = $(this);
                var offset = obj.offset();
                var top = offset.top;
                var distance = (top - scrollTop);
                
                if( distance < height && $(this).hasClass('animated') === false ){
                    var data = $(this).data('animate');          
                    $(this).addClass('animated ' + data);
                    return true;
                }
                
            });

        });/* End of scroll event */    
        
    };

}( jQuery ));


