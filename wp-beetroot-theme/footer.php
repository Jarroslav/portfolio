<?php
    $beetrootLink = 'http://beetroot.local/wp-content/uploads/2020/12/sprite.svg';
?>
        <footer class="footer">
            <div class="container footer-content">
                <div class="all-rights"><?php the_field( 'footer_all_rights' );?></div>
                <ul class="footer__list">
                    <li class="footer__item">
                        <a href="<?php the_field( 'footer_link_behance' );?>" >
                            <svg class="social-networks-logo">
                                <use xlink:href="<?php echo $beetrootLink ?>#behance-logo"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="footer__item">
                        <a href="<?php the_field( 'footer_link_linkedin' );?>" class="footer-links__link">
                            <svg class="social-networks-logo">
                                <use xlink:href="<?php echo $beetrootLink ?>#linkedIn-logo"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="footer__item">
                        <a href="<?php the_field( 'footer_link_g_plus' );?>" class="footer-links__link">
                            <svg class="social-networks-logo">
                                <use xlink:href="<?php echo $beetrootLink ?>#google-plus-logo"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="footer__item">
                        <a href="<?php the_field( 'footer_link_facebook' );?>" class="footer-links__link">
                            <svg class="social-networks-logo">
                                <use xlink:href="<?php echo $beetrootLink ?>#facebook-logo"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="footer__item">
                        <a href="<?php the_field( 'footer_link_twitter' );?>" class="footer-links__link">
                            <svg class="social-networks-logo">
                                <use xlink:href="<?php echo $beetrootLink ?>#twitter-logo"></use>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </footer><!--/.footer-->
        <?php wp_footer(); ?>
    </body>
</html>