<?php

/**
 * Home Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create class attribute allowing for custom "className" and "align" values.
$className = 'about';
if( !empty($block['className']) ) {
	$className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
	$className .= ' align' . $block['align'];
}

// Load values and assign defaults.
$home_title = get_field('home_title') ?: 'Your title here...';
$home_description = get_field('home_description') ?: 'Your description here...';
$home_background = get_field('home_background') ?: 295;

?>
<section id="home" class="home page-section"
         style="background-image: url(<?php echo $home_background?>);">
    <hgroup class="container-fluid header__bottom">
        <h1 class="home-title"><?php echo $home_title ?></h1>
        <h3 class="home-description"><?php echo $home_description?></h3>
    </hgroup>
</section><!--/.home-->
