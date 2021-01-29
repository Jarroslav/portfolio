<?php

/**
 * About Block Template.
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
$beetrootLink = 'http://beetroot.local/wp-content/uploads/2020/12/sprite.svg';

$about_title_left_side = get_field('about_title_left_side') ?: 'Your title here...';
$about_title_left_side_background = get_field('about_title_left_side_background') ?: 295;
$about_title_right_side = get_field('about_title_right_side') ?: 'Your title here...';
$about_text_content = get_field('about_text_content') ?: 'Your text content here...';
$about_button_tagline = get_field('about_button_tagline') ?: 'Click me';

?>
<section id="about"
         class="<?php echo esc_attr($className); ?> container page-section">

    <div class="about__img about__left-side left-side"
         style="background-image: url(<?php echo $about_title_left_side_background ?>);">
        <svg class="svg-logo svg-logo--white left-side__svg">
            <use xlink:href="<?php echo $beetrootLink ?>#about-logo"></use>
        </svg>
        <h2 class="title">
            <?php echo $about_title_left_side ?>
        </h2>
    </div>

    <div class="about__right-side">
        <h2 class="title about__right-side--title">
            <?php echo $about_title_right_side ?>
        </h2>

        <?php echo $about_text_content ?>

        <button class="learn-button">
            <?php echo $about_button_tagline ?>
        </button>
    </div>

</section><!--/.about-->
