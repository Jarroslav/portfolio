<?php

/**
 * Services Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create class attribute allowing for custom "className" and "align" values.
$className = 'services';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}

// Load values and assign defaults.
$beetrootLink = 'http://beetroot.local/wp-content/uploads/2020/12/sprite.svg';

$services_tile_1_title = get_field('services_tile_1_title' ) ?: 'Your title here...';
$services_tile_1_description = get_field('services_tile_1_description' ) ?: 'Your description here...';

$services_tile_2_title = get_field('services_tile_2_title' ) ?: 'Your title here...';
$services_tile_2_description = get_field('services_tile_2_description' ) ?: 'Your description here...';

$services_tile_3_title = get_field('services_tile_3_title' ) ?: 'Your title here...';
$services_tile_3_description = get_field('services_tile_3_description' ) ?: 'Your description here...';
$services_tile_3_author = get_field('services_tile_3_author' ) ?: 'Author';
$services_tile_3_background = get_field('services_tile_3_background' ) ?: 295;

$services_tile_4_title = get_field('services_tile_4_title' ) ?: 'Your title here...';
$services_tile_4_description = get_field('services_tile_4_description' ) ?: 'Your description here...';

$services_tile_5_title = get_field('services_tile_5_title' ) ?: 'Your title here...';
$services_tile_5_description = get_field('services_tile_5_description' ) ?: 'Your description here...';

?>

<section id="services"
         class="<?php echo esc_attr($className); ?> container page-section">

    <div class="services__graph-des">
        <div class="services__item">
            <svg class="svg-logo svg-logo--dark">
                <use xlink:href="<?php echo $beetrootLink ?>#design-logo"></use>
            </svg>
            <h3 class="services__item-title">
                <?php echo $services_tile_1_title; ?>
            </h3>
            <p class="services__item-text">
                <?php echo $services_tile_1_description; ?>
            </p>
        </div>
    </div>

    <div class="services__web-dev">
        <div class="services__item">
            <svg class="svg-logo svg-logo--dark">
                <use xlink:href="<?php echo $beetrootLink ?>#square-logo"></use>
            </svg>
            <h3 class="services__item-title">
                <?php echo $services_tile_2_title; ?>
            </h3>
            <p class="services__item-text">
                <?php echo $services_tile_2_description; ?>
            </p>
        </div>
    </div>

    <div class="services__services"
         style="background-image: url(<?php echo $services_tile_3_background; ?>);">
        <div class="services__item services__item--white">
            <svg class="svg-logo svg-logo--white">
                <use xlink:href="<?php echo $beetrootLink ?>#scroll-logo"></use>
            </svg>
            <h2 class="title">
                <?php echo $services_tile_3_title; ?>
            </h2>
            <blockquote class="services__item-blockquote">
                <?php echo $services_tile_3_description; ?>
            </blockquote>
            <p class="services__item-blockquote-author">
                <?php echo $services_tile_3_author; ?>
            </p>
        </div>
    </div>

    <div class="services__mark">
        <div class="services__item">
            <svg class="svg-logo svg-logo--dark">
                <use xlink:href="<?php echo $beetrootLink ?>#globe-logo"></use>
            </svg>
            <h3 class="services__item-title">
                <?php echo $services_tile_4_title; ?>
            </h3>
            <p class="services__item-text">
                <?php echo $services_tile_4_description; ?>
            </p>
        </div>
    </div>

    <div class="services__mob-dev">
        <div class="services__item">
            <svg class="svg-logo svg-logo--dark">
                <use xlink:href="<?php echo $beetrootLink ?>#smartphone-logo"></use>
            </svg>
            <h3 class="services__item-title">
                <?php echo $services_tile_5_title; ?>
            </h3>
            <p class="services__item-text">
                <?php echo $services_tile_5_description; ?>
            </p>
        </div>
    </div>

</section><!--/.services-->
