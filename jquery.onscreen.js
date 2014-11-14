/*
 *	jQuery On Screen Plugin
 *
 *	Copyright (c) Dan Betcher
 *	https://www.twitter.com/danbetcher
 *
 *	Documentation:
 *	https://github.com/danbetcher/jquery-onscreen
 *
 *	Licensed under the MIT license.
 *	http://en.wikipedia.org/wiki/MIT_License
 */
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