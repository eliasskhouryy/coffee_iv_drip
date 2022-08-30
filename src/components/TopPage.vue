<template>
	<div class="topPage">
		<div class="topPart">
			<h1> Coffee IV drip </h1>
			<img class="bigImage" src="../assets/main-cat-iv.png" alt="Coffeeholic cat with bean-iv drip" />
		</div>

		<div class="title">
			<h3>Why IV Coffee Drip?</h3>
		</div>

		<div class="banner" >
		<h1> test </h1>
			<div id="banner-img">
				<img src="../assets/yunosleep-meme-cat.png" alt="y u no sleep meme cat" />
			</div>
			<div></div>
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
			object-fit: contain;
			margin: 0 auto;
		}
	}

	.title {
		background-color: $beige;
		text-align: center;
		color: $darkBlue;
		border-radius: 5px;
		padding: 1px 0;
	}

	.wheel {
		overflow-x: auto;
		overflow-y: hidden;
		white-space: nowrap;
		.item {
			display: inline-block;
			box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
			margin: 10px 10px 10px 0;

			img {
				display: inline-block;
				height: 150px;
				width: 150px;
				padding: 10px;
				margin: auto auto;
			}
			p {
				padding: 10px;
				height: 150px;
				width: 150px;
				display: inline-block;
				vertical-align: top;
				white-space: initial;
			}
		}
	}
}
</style>
