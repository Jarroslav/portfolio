(function($){

    /**
     * initializeBlock
     *
     * Adds custom JavaScript to the block HTML.
     *
     * @date    15/4/19
     * @since   1.0.0
     *
     * @param   object $block The block jQuery element.
     * @param   object attributes The block attributes (only available when editing).
     * @return  void
     */
    const initializeTeamBlock = function( $block ) {
        $block.find('.team-slides').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            adaptiveHeight: true,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1300,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        adaptiveHeight: true,
                        centerPadding: '40px',
                        slidesToShow: 2,
                        respondTo: 'slider'
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        adaptiveHeight: true,
                        centerPadding: '40px',
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        variableWidth: true,
                        adaptiveHeight: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ],
        });
    }

    // Initialize each block on page load (front end).
    $(document).ready(function(){
        $('.team-slider').each(function(){
            initializeTeamBlock( $(this) );
        });
    });

    // Initialize dynamic block preview (editor).
    if( window.acf ) {
        window.acf.addAction( 'render_block_preview/type=team', initializeTeamBlock );
    }

})(jQuery);