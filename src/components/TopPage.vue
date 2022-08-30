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
			<div class="banner img">
				<img class="img-small" src="../assets/yunosleep-meme-cat.png" alt="y u no sleep meme cat" />
			</div>
			<div class="banner" id="txt">
				<p> Sick of the coffee taste? </p>
			</div>
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
		}
	}

	.title {
		width: 100%;
		background-color: $beige;
		text-align: center;
		color: $darkBlue;
		padding: 1px 0;
	}

	.banner {
		padding-top: 1em;
		display: inline-block;
		margin: 0;
		padding: 0;
		width: 100%;
	}
	p {
		background-color: pink;
		margin-bottom: 5em;
	}
	.img-small {
	float: left;
	}
}
</style>
