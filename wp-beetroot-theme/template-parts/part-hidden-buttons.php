<?php
$beetrootLink = 'http://beetroot.local/wp-content/uploads/2020/12/sprite.svg';
?>

<div class="right-buttons">
	<div class="our-address">
		<div class="our-address__img">
            <svg class="our-contact-logo">
                <use xlink:href="<?php echo $beetrootLink ?>#address-logo"></use>
            </svg>
		</div>
		<div class="our-address__text"><?php the_field( 'our_address' );?></div>
	</div>
	<div class="call-us">
		<div class="call-us__img">
            <svg class="our-contact-logo">
                <use xlink:href="<?php echo $beetrootLink ?>#call-us-logo"></use>
            </svg>
		</div>
		<div class="call-us__text">
			<a class="call-us__link" href="tel:+<?php the_field( 'our_phone' );?>"><?php the_field( 'our_phone' );?></a>
		</div>
	</div>
</div>

<button id="up-scroll-btn" class="">^</button>