<?php

/**
 * Slider Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'works-slider-' . $block['id'];
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
$beetrootLink = 'http://beetroot.local/wp-content/uploads/2020/12/sprite.svg';

$works_title = get_field('works_title') ?: 'Your title here...';
$works_button_text = get_field('works_button_text') ?: 'View gallery';
$works_background = get_field('works_background') ?: 295;
$works_gallery_link = get_field( 'works_gallery_link' );

?>
<section id="works" class="works container-fluid page-section"
         style="background-image: url(<?php echo esc_attr($works_background); ?>);">
    <svg class="svg-logo svg-logo--white">
        <use xlink:href="<?php echo $beetrootLink ?>#pen-logo"></use>
    </svg>
    <h2 class="title"><?php echo $works_title; ?></h2>

    <div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?> works-slider">
		<?php if( have_rows('slides') ): ?>
            <div class="slides work-slides">
				<?php while( have_rows('slides') ): the_row();
					$image = get_sub_field('works_image');
					?>
                    <div class="works-img">
						<?php echo wp_get_attachment_image( $image['id'], 'full' ); ?>
                    </div>
				<?php endwhile; ?>
            </div>
		<?php else: ?>
            <p>Please add some slides.</p>
		<?php endif; ?>
    </div>
    <a href="<?php echo $works_gallery_link?>" class="learn-button"><?php echo $works_button_text ?></a>
</section><!--/.works-->