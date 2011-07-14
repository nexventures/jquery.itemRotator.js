/**
 *  jQuery rotator for a containing element with children
 *    - it rotates all children elements of the container using nice customizable effects
 *  @author Chris Pappas <cpappas@hepcom.ca>
 *  @version 0.1
 */
;
(function($) {
    $.fn.itemSlider = function(options) {

        var settings = {
            'fadeOutDuration': 400,
            'fadeInDuration': 600,
            'slideUpDuration': 800,
            'slideDownDuration': 600,
            'displayDuration': 5000
        };

        return this.each(function() {

            // merge defaults with explicity set options
            if (options) {
                $.extend(settings, options);
            }
            
            var $c = $(this);
            
            setTimeout(function() {
                rotateElement($c);
            }, settings.displayDuration);
            
            function rotateElement($container) {
                var $i = $container.find(":first");

                if ($i) {

                    if ($i.children()) {
                        $i.children().fadeOut(settings.fadeOutDuration);
                    }

                    $i.slideUp(settings.slideUpDuration).queue(function() {
                        $i.remove().appendTo($container).show();

                        if ($i.children()) {
                            $i.children().fadeIn(settings.fadeInDuration);
                        }

                    });
                } // end if
                
                setTimeout(function() {
                    rotateElement($container);
                }, settings.displayDuration);
                
            } // end function rotateElement

        });

    };
})(jQuery);
