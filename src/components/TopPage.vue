<template>
	<div class="topPage">
		<div class="topPart">
			<h1>Coffee IV drip</h1>
			<img class="bigImage" src="../assets/main-cat-iv.png" alt="Coffeeholic cat with bean-iv drip" />
		</div>

		<div class="title hidden">
			<h3>Why IV Coffee Drip?</h3>
		</div>
		<VueSlickCarousel v-bind="settings" class="carousel">
			<div>
				<img src="../assets/yunosleep-meme-cat.png" alt="y u no sleep meme cat" />
				<p>Sick of the coffee taste?</p>
			</div>
			<div>
				<img src="../assets/yunosleep-meme-cat.png" alt="y u no sleep meme cat" />
				<p>Sick of the coffee taste?</p>
			</div>
			<div>
				<img src="../assets/yunosleep-meme-cat.png" alt="y u no sleep meme cat" />
				<p>Sick of the coffee taste?</p>
			</div>
			<div>
				<img src="../assets/yunosleep-meme-cat.png" alt="y u no sleep meme cat" />
				<p>Sick of the coffee taste?</p>
			</div>
			<div>
				<img src="../assets/yunosleep-meme-cat.png" alt="y u no sleep meme cat" />
				<p>Sick of the coffee taste?</p>
			</div>
		</VueSlickCarousel>
	</div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';

export default {
	name: 'TopPage',
	props: {
		msg: String,
	},
	data: function () {
		return {
			settings: {
				dots: true,
				arrows: true,
				infinite: false,
				speed: 500,
				slidesToShow: 4,
				slidesToScroll: 4,
				initialSlide: 0,
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3,
							infinite: true,
							dots: true,
						},
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
							initialSlide: 2,
						},
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						},
					},
				],
			},
		};
	},
	components: { VueSlickCarousel },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$red: #e0785f;
$white: #f4f1de;
$lightBlue: #e8f0ff;
$darkBlue: #3d405b;
$green: #81b29a;
$beige: #f2cc8f;

.carousel {
	margin-top: 50px;
	margin-bottom: 10px;
	margin-left: 20px;
}

.topPage {
	.topPart {
		h1 {
			color: $darkBlue;
		}
		img.bigImage {
			width: 100%;
			height: 50vh;
			object-fit: fill;
		}
	}

	.title {
		display: inline-block;
		width: 100%;
		background-color: $beige;
		text-align: center;
		color: $darkBlue !important;
		padding: 15px 0;
		margin: auto 0;
		vertical-align: middle;
		&.hidden {
			color: $beige;
		}
		h3 {
			display: inline-block;
			vertical-align: middle;
			margin: auto 0;
		}
	}

	.banner {
		padding-top: 1em;
		display: inline-block;
		margin: 0;
		padding: 0;
		width: 100%;
	}

	.wheel {
		overflow-x: auto;
		overflow-y: hidden;
		width: 100%;
		display: flex;
		flex: none;
		flex-flow: row nowrap;
		scroll-snap-type: x mandatory;
	}
	.slide-item {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		min-width: 100%;
		scroll-snap-align: center;

		img {
			max-width: 100%;
			height: auto;
		}
		.slide-txt {
			display: grid;
			align-items: center;
			padding: 42px;
		}
	}
}
</style>
