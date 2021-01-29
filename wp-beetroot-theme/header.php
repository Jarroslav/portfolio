<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="Yaroslav Krivushenko" />

    <link rel="icon"
          type="image/png"
          href="https://cdn.frankerfacez.com/emoticon/162146/1"
    />
    <link rel="preconnect"
          href="https://fonts.gstatic.com"
    />

    <title><?php echo get_bloginfo( 'description' ); ?></title>

    <script defer
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAKroTMWIT7zuBNgdLOxDGjnZfUeV7c4Lw&callback=initMap">
    </script>


    <?php wp_head(); ?>

</head>
<body <?php body_class(); ?>>
    <?php wp_body_open ();?>
        <header class="header container-fluid">
            <div class="header__top">
                <div class="header__logo">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="54px" height="72px">
                        <path fill-rule="evenodd" class="logo-svg"
                              d="M29.714,52.981 C29.206,58.539 28.174,63.426 26.295,67.698 C25.672,69.114 24.539,70.465 24.016,72.000
                                  C23.940,72.000 23.864,72.000 23.788,72.000 C23.788,71.622 23.788,71.245 23.788,70.868 C24.216,70.203
                                  24.007,69.293 24.244,68.377 C25.372,64.020 25.457,58.207 23.560,54.566 C20.320,48.345 13.832,50.438
                                  7.379,47.773 C4.851,46.730 2.994,44.583 1.681,42.339 C1.225,41.057 0.769,39.773 0.313,38.490
                                  C-0.403,35.785 0.251,32.291 0.997,30.339 C4.104,22.208 11.869,18.630 21.281,23.094 C21.281,22.868
                                  21.281,22.641 21.281,22.415 C20.474,21.319 20.736,19.682 20.369,18.113 C19.384,13.894 18.625,0.046
                                  23.332,-0.000 C24.609,0.926 27.063,0.885 27.207,2.943 C26.831,3.348 26.809,3.512 26.751,4.302
                                  C26.827,4.302 26.903,4.302 26.979,4.302 C26.979,4.226 26.979,4.151 26.979,4.075 C27.960,3.045
                                  28.229,0.705 29.942,0.453 C31.310,1.673 33.625,1.916 34.044,4.075 C32.902,5.521 31.775,8.049
                                  31.309,9.962 C31.461,9.962 31.613,9.962 31.765,9.962 C33.193,8.085 39.077,2.711 41.793,3.169
                                  C42.597,4.461 43.427,5.738 43.844,7.472 C42.409,7.981 41.749,9.367 40.653,10.189 C36.654,13.188
                                  33.422,17.563 30.853,21.962 C31.081,21.962 31.309,21.962 31.537,21.962 C33.106,20.742 39.510,20.151
                                  42.249,20.830 C49.471,22.622 51.501,25.101 53.188,32.377 C53.423,33.388 53.732,35.769 53.416,37.132
                                  C51.233,46.574 46.626,51.341 37.007,53.434 C34.436,53.993 31.873,53.097 29.714,52.981 Z"
                        />
                    </svg>
                </div>

                <div class="mobile-menu__hamburger">
                    <span class="mobile-menu__span"></span>
                </div><!-- /.burger menu -->

                <?php wp_nav_menu( array(
                        'wp-content/themes/beetroot-theme'  => 'navigation_menu',
                        'menu_id'                           => 'beetroot-navigation',
                        'container'                         => 'nav',
                        'container_class'                   => 'beetroot-navigation',
                        'fallback_cb'                       => false,
                ) ); ?>

                <?php
                if ( function_exists('has_nav_menu') && has_nav_menu('mobile-menu') ) {
	                wp_nav_menu( array(
		                'depth'             => 6,
		                'sort_column'       => 'menu_order',
		                'container'         => 'nav',
		                'container_class'   => 'mobile-menu__navbar',
		                'menu_id'           => 'main-nav',
		                'menu_class'        => 'mobile-menu__list',
		                'theme_location'    => 'mobile-menu',
	                ) );
                } else {
	                echo "<ul class='mobile-menu__list'> <li style='color:#ff0000'>Mobile Menu has not been set</li> </ul>";
                }
                ?>

            </div>
        </header><!--/.header-->
