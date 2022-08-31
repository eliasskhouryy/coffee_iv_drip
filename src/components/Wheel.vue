<template>
	<div class="WheelSection">
		<div class="topPart">
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
	</div>
</template>

<script>
export default {
	name: 'WheelSection',
	props: {
		msg: String,
	},
};
</script>

<style scoped lang="scss">
$red: #e0785f;
$white: #f4f1de;
$lightBlue: #e8f0ff;
$darkBlue: #3d405b;
$green: #81b29a;
$beige: #f2cc8f;
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');

* {
	box-sizing: border-box;
	color: $darkBlue;
	font-family: 'Raleway', sans-serif;
}

$red: #e0785f;
$white: #f4f1de;
$lightBlue: #e8f0ff;
$darkBlue: #3d405b;
$green: #81b29a;
$beige: #f2cc8f;

.WheelSection {
	overflow-x: scroll;
	.topPart {
		h1 {
			color: $darkBlue;
		}
		img.bigImage {
			width: 100%;
			height: 50vh;
			object-fit: fit;
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
		padding-left: 10px;
		.item {
			display: inline-block;
			box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
			margin: 10px 10px 10px 0;

			img {
				display: inline-block;
				height: 150px;
				width: 150px;
				object-fit: contain;
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
				line-height: 18px;
			}
		}
	}
}
</style>
