<?php

/**
 * Team Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create class attribute allowing for custom "className" and "align" values.
$id = 'team-slider-' . $block['id'];
if( !empty($block['anchor']) ) {
	$id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'slider';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}
if( $is_preview ) {
	$className .= ' is-admin';
}

// Load values and assign defaults.
$team_title = get_field('team_title') ?: 'Your title here...';
$team_members_page = 'http://beetroot.local/team/members';
$beetrootLink = 'http://beetroot.local/wp-content/uploads/2020/12/sprite.svg';

?>
<section id="team" class="team container-fluid page-section">

    <svg class="svg-logo svg-logo--dark">
        <use xlink:href="<?php echo $beetrootLink ?>#team-logo"></use>
    </svg>
    <h2 class="title title--dark"><?php echo $team_title ?></h2>

    <div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?> container team-slider">
        <?php if( have_rows('team_slides') ): ?>
            <div class="slides team-slides">
                <?php while( have_rows('team_slides' ) ): the_row();
                    $team_member_picture = get_sub_field('team_member_picture' );
                    $team_member_name = get_sub_field('team_member_name' );
                    $team_member_position = get_sub_field('team_member_position' );

                    $team_member_behance = get_sub_field('team_member_behance' );
                    $team_member_linkedin = get_sub_field('team_member_linkedin' );
                    $team_member_g_plus = get_sub_field('team_member_g_plus' );
                    $team_member_facebook = get_sub_field('team_member_facebook' );
                    $team_member_twitter = get_sub_field('team_member_twitter' );
                    ?>
                    <div>
                        <div class="team-slider__container">
                            <div class="team-slider__top-bg"></div>
                            <a href="<?php echo $team_members_page?>">
                                <div class="team-slider__img-container team-slider__img">
		                            <?php echo wp_get_attachment_image( $team_member_picture['id'], 'full' ); ?>
                                </div>
                            </a>
                            <h4 class="services__item-title services__item-title--lilac-color"><?php echo $team_member_name ?></h4>
                            <p class="team-slider__subtitle"><?php echo $team_member_position ?></p>
                            <ul class="team-slider__links">
                                <li class="team-slider__item">
                                    <a href="<?php echo $team_member_behance ?>">
                                        <svg class="social-networks-logo">
                                            <use xlink:href="<?php echo $beetrootLink ?>#behance-logo"></use>
                                        </svg>
                                    </a>
                                </li>
                                <li class="team-slider__item">
                                    <a href="<?php echo $team_member_linkedin ?>">
                                        <svg class="social-networks-logo">
                                            <use xlink:href="<?php echo $beetrootLink ?>#linkedIn-logo"></use>
                                        </svg>
                                    </a>
                                </li>
                                <li class="team-slider__item">
                                    <a href="<?php echo $team_member_g_plus ?>">
                                        <svg class="social-networks-logo">
                                            <use xlink:href="<?php echo $beetrootLink ?>#google-plus-logo"></use>
                                        </svg>
                                    </a>
                                </li>
                                <li class="team-slider__item">
                                    <a href="<?php echo $team_member_facebook ?>">
                                        <svg class="social-networks-logo">
                                            <use xlink:href="<?php echo $beetrootLink ?>#facebook-logo"></use>
                                        </svg>
                                    </a>
                                </li>
                                <li class="team-slider__item">
                                    <a href="<?php echo $team_member_twitter ?>">
                                        <svg class="social-networks-logo">
                                            <use xlink:href="<?php echo $beetrootLink ?>#twitter-logo"></use>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                <?php endwhile; ?>
            </div>
        <?php else: ?>
            <p>Please add some slides.</p>
        <?php endif; ?>
    </div>

</section><!--/.team-->
