<template>
	<div class="topPage">
		<div class="topPart">
			<img class="bigImage" src="../assets/main.jpg" alt="Coffeeholic" />
		</div>
		<div class="title">
			<h3>Why IV Coffee Drip?</h3>
		</div>
		<div class="wheel">
			<div class="item">
				<img src="https://i.pinimg.com/originals/b9/58/fe/b958fef3d6f8c001e321f2fe19dbdc81.jpg" alt="" class="smallImage" />
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem ad harum fugit tempora reprehenderit</p>
			</div>
			<div class="item">
				<img src="https://i.pinimg.com/originals/b9/58/fe/b958fef3d6f8c001e321f2fe19dbdc81.jpg" alt="" class="smallImage" />
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem ad harum fugit tempora reprehenderit</p>
			</div>
			<div class="item">
				<img src="https://i.pinimg.com/originals/b9/58/fe/b958fef3d6f8c001e321f2fe19dbdc81.jpg" alt="" class="smallImage" />
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem ad harum fugit tempora reprehenderit</p>
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
	overflow-x: scroll;
	color: $darkBlue;
	.topPart {
		img.bigImage {
			width: 100%;
			height: 50vh;
			object-fit: contain;
			margin: 0 auto;
		}
	}

	.title {
		background-color: $darkBlue;
		color: white;
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
