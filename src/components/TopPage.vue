<template>
	<div class="topPage">
		<div class="topPart">
			<h1>Coffee IV drip</h1>
			<img class="bigImage" src="../assets/main-cat-iv.png" alt="Coffeeholic cat with bean-iv drip" />
		</div>

		<div class="title">
			<h3>Why IV Coffee Drip?</h3>
		</div>

		<div class="wheel banner">
			<div class="slide-item">
				<div class="slide-img">
					<img src="../assets/yunosleep-meme-cat.png" alt="y u no sleep meme cat" />
				</div>
				<div class="slide-txt">
					<p>Sick of the coffee taste?</p>
				</div>
			</div>
			<div class="slide-item">
				<div class="slide-img">
					<img src="../assets/yunosleep-meme-cat.png" alt="y u no sleep meme cat" />
				</div>
				<div class="slide-txt">
					<p>Sick of the coffee taste?</p>
				</div>
			</div>
			<div class="slide-item">
				<div class="slide-img">
					<img src="../assets/yunosleep-meme-cat.png" alt="y u no sleep meme cat" />
				</div>
				<div class="slide-txt">
					<p>Sick of the coffee taste?</p>
				</div>
			</div>
		</div>
		<div class="title hidden">
			<h3>Why IV Coffee Drip?</h3>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TopPage',
	props: {
		msg: String,
	},
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
		color: $darkBlue;
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
