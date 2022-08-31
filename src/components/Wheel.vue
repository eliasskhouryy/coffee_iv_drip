<template>
	<div>
		<br />
		<div class="WheelSection">
			<div class="topPart">
				<div class="wheel">
					<div class="item">
						<h4>Deadline Dose</h4>

						<img src="../assets/catpost2.png" alt="" class="smallImage" />
						<p>What was sleep ever good for?</p>
					</div>
					<div class="item">
						<h4>R.I.P Dose</h4>
						<img src="../assets/catpost1.png" alt="" class="smallImage" />
						<p>Fake death for 2 days.</p>
					</div>

					<div class="item">
						<h4>Invisible Dose</h4>

						<img src="../assets/catpost3.png" alt="" class="smallImage" />
						<p>Perfect for stalking</p>
					</div>
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
	.wheel {
		overflow-x: auto;
		overflow-y: hidden;
		white-space: nowrap;
		padding-left: 10px;
		.item {
			display: inline-block;
			margin: 10px 10px 10px 0;
			vertical-align: top;

			h4 {
				text-align: left;
				font-size: 18px;
			}

			img {
				display: inline-block;
				height: 230px;
				width: 230px;
				margin: auto auto;
				box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
			}
			p {
				padding-top: 10px;
				width: 230px;
				display: block;
				white-space: initial;
				line-height: 18px;
				text-align: left;
			}
		}
	}
}
</style>
