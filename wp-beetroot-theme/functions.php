<?php

	show_admin_bar( false );

/**
 * Add styles and scripts
 */
function connect_style() {

    /**
     * 3rd party styles
     *
     */
    wp_enqueue_style( 'google-fonts', 'https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400&display=swap' );
    wp_enqueue_style( 'normalize', 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css' );
    wp_enqueue_style( 'bootstrap-grid', get_template_directory_uri() .'/assets/css/bootstrap-grid.css' );

    /**
     * 3rd party scripts
     * Connect another version of jQuery
     */
	wp_enqueue_script( 'slick', 'http://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', array('jquery'), '1.8.1', true );

    /**
     * My styles
     */
    wp_enqueue_style( 'hidden-buttons', get_template_directory_uri() . '/template-parts/part-hidden-buttons.css', array(), '1.0.0' );
    wp_enqueue_style( 'svg', get_template_directory_uri() . '/assets/css/svg.css', array(), '1.0.0' );
    wp_enqueue_style( 'style', get_stylesheet_uri(), array(), '1.0.0' );

    /**
     * My scripts
     */
    wp_enqueue_script( 'main-script', get_template_directory_uri() . '/assets/js/script.js', array('jquery'), '1.0', true);
    wp_enqueue_script( 'navbar-scroll-script', get_template_directory_uri() . '/assets/js/navbar-scroll.js', array('jquery'), '1.0', true);
    wp_enqueue_script( 'map-script', get_template_directory_uri() . '/assets/js/map.js', array('jquery'), '1.0', true);
    wp_enqueue_script( 'fade-in-out-buttons-script', get_template_directory_uri() . '/assets/js/fade-in-out-buttons.js', array('jquery'), '1.0', true);
    wp_enqueue_script( 'mobile-menu-script', get_template_directory_uri() . '/assets/js/mobile-menu.js', array('jquery'), '1.0', true);
    wp_enqueue_script( 'beetroot-navigation-bar-script', get_template_directory_uri() . '/assets/js/beetroot-navigation-bar.js', array('jquery'), '1.0', true);

}
add_action( 'wp_enqueue_scripts', 'connect_style' );

/**
 * Add custom blocks
 */
function my_acf_init_block_types() {

    // Check function exists.
    if( function_exists('acf_register_block_type') ) {

	    // register a home block.
	    acf_register_block_type(array(
		    'name'              => 'home',
		    'title'             => __('Home'),
		    'description'       => __('A custom home block.'),
		    'render_template'   => 'template-parts/blocks/block-home/part-home.php',
		    'category'          => 'formatting',
		    'icon'              => 'admin-comments',
		    'mode'              => 'preview',
		    'keywords'          => array( 'acf', 'home' ),
		    'enqueue_style'     => get_template_directory_uri() . '/template-parts/blocks/block-home/part-home.css',

	    ));

        // register an about block.
        acf_register_block_type(array(
            'name'              => 'about',
            'title'             => __('About'),
            'description'       => __('A custom about block.'),
            'render_template'   => 'template-parts/blocks/block-about/part-about.php',
            'category'          => 'formatting',
            'icon'              => 'admin-comments',
            'mode'              => 'preview',
            'keywords'          => array( 'acf', 'about' ),
            'enqueue_style'     => get_template_directory_uri() . '/template-parts/blocks/block-about/part-about.css',

        ));

        // register an services block.
        acf_register_block_type(array(
            'name'              => 'services',
            'title'             => __('Services'),
            'description'       => __('A custom services block.'),
            'render_template'   => 'template-parts/blocks/block-services/part-services.php',
            'category'          => 'formatting',
            'icon'              => 'admin-comments',
            'mode'              => 'preview',
            'keywords'          => array( 'acf', 'services' ),
            'enqueue_style'     => get_template_directory_uri() . '/template-parts/blocks/block-services/part-services.css',
        ));

        // register a works block.
	    acf_register_block_type(array(
		    'name'              => 'works',
		    'title'             => __('Works'),
		    'description'       => __('A custom works-slider block.'),
		    'render_template'   => 'template-parts/blocks/block-works/part-works.php',
		    'category'          => 'formatting',
		    'icon' 				=> 'images-alt2',
		    'align'				=> 'full',
		    'keywords'          => array( 'acf', 'works' ),
		    'enqueue_assets' 	=> function(){
			    wp_enqueue_style( 'slick', 'http://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css', array(), '1.8.1' );
			    wp_enqueue_style( 'slick-theme', 'http://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css', array(), '1.8.1' );
			    wp_enqueue_script( 'slick', 'http://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', array('jquery'), '1.8.1', true );

			    wp_enqueue_style( 'works-slider', get_template_directory_uri() . '/template-parts/blocks/block-works/part-works.css', array(), '1.0.0' );
			    wp_enqueue_script( 'works-block-slider', get_template_directory_uri() . '/template-parts/blocks/block-works/part-works.js', array(), '1.0.0', true );
		    },
	    ));

        // register a team block.
        acf_register_block_type(array(
            'name'              => 'team',
            'title'             => __('Team'),
            'description'       => __('A custom team block.'),
            'render_template'   => 'template-parts/blocks/block-team/part-team.php',
            'category'          => 'formatting',
            'icon' 				=> 'images-alt2',
            'align'				=> 'full',
            'keywords'          => array( 'acf', 'team' ),
            'enqueue_assets'    => function() {
	            wp_enqueue_style( 'slick', 'http://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css', array(), '1.8.1' );
	            wp_enqueue_style( 'slick-theme', 'http://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css', array(), '1.8.1' );
	            wp_enqueue_script( 'slick', 'http://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', array('jquery'), '1.8.1', true );

	            wp_enqueue_style( 'team-slider', get_template_directory_uri() . '/template-parts/blocks/block-team/part-team.css', array(), '1.0.0' );
	            wp_enqueue_script( 'team-block-slider', get_template_directory_uri() . '/template-parts/blocks/block-team/part-team.js', array(), '1.0.0', true );
	            wp_enqueue_style( 'svg-style', get_template_directory_uri() . '/assets/css/svg.css', array(), '1.0.0' );
            },
        ));

    }
}
add_action('acf/init', 'my_acf_init_block_types');

/**
 * Register a mobile menu
 */
function wdm_register_mobile_menu() {
	add_theme_support( 'nav-menus' );
	register_nav_menus( array('mobile-menu' => __( 'Mobile Menu', 'wdm' )) );
}
add_action( 'init', 'wdm_register_mobile_menu' );

/**
 * load the JS file (mobile menu)
 */
function wdm_mm_toggle_scripts() {
	wp_enqueue_script( 'wdm-mm-toggle', get_stylesheet_directory_uri() . '/assets/js/mobile-menu-toggle.js', array('jquery') );
}
add_action( 'wp_enqueue_scripts', 'wdm_mm_toggle_scripts' );

/**
 * Adding svg extension
 */
function svg_mime_types($mime_types){
	$mime_types['svg'] = 'image/svg+xml';
	return $mime_types;
}
add_filter('upload_mimes', 'svg_mime_types', 1, 1);