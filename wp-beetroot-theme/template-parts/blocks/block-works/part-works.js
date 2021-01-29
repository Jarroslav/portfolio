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
    const initializeWorksBlock = function( $block ) {
        $block.find('.work-slides').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1300,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1,
                        respondTo: 'slider'
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        variableWidth: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ],
        });
    }

    // Initialize each block on page load (front end).
    $(document).ready(function(){
        $('.works-slider').each(function(){
            initializeWorksBlock( $(this) );
        });
    });

    // Initialize dynamic block preview (editor).
    if( window.acf ) {
        window.acf.addAction( 'render_block_preview/type=works', initializeWorksBlock );
    }

})(jQuery);