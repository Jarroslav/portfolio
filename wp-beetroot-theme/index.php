<?php get_header(); ?>
    <main class="main">

        <?php while ( have_posts() ) : the_post(); ?>
            <?php the_content(); ?>
	        <?php get_template_part( 'template-parts/part', 'hidden-buttons' )?>
        <?php endwhile; ?>

    </main><!--/.main-->
<?php get_footer(); ?>
