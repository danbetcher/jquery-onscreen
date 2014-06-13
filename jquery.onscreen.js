/*! https://github.com/danbetcher/jquery-onscreen by @danbetcher */
;(function ( $ ) {
    $.fn.onScreen = function(){
    
        // Generate a viewport object
        var viewport = {
            top : $(window).scrollTop(),
            left : $(window).scrollLeft()
        };
    
        // Set the values of the viewport object
        viewport.right = viewport.left + $(window).width();
        viewport.bottom = viewport.top + $(window).height();
    
        // Generate bounding box object
        var bounds = this.offset();
    
        // Set the values of the bounding box
        bounds.right = bounds.left + this.outerWidth();
        bounds.bottom = bounds.top + this.outerHeight();
    
        return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

    };
}( jQuery ));