<template>
	<div class="Review">
		<div class="review-header" >
			<h3>Bean dripper reviews</h3>
			<p> Unsure? Check out what others say! </p>
		</div>
		<div class="container">
			<section class="review-item" id="review-one">
				<p class="review-flavour" >Fish:</p>
				<p class="review-underline-txt">Sleepy Dose</p>
				<p class="review-rating">&#9733;&#9733;&#9733;&#9733;</p>
				<p class="review-content">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				</p>
			</section>
			<section class="review-item" id="review-two">
				<p class="review-flavour" >Party Animeow:</p>
				<p class="review-underline-txt">High like a kite dose</p>
				<p class="review-rating">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
				<p class="review-content">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				</p>
			</section>
			<section class="review-item" id="review-two">
				<p class="review-flavour" >Craig:</p>
				<p class="review-underline-txt">Go Hard Dose</p>
				<p class="review-rating">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
				<p class="review-content">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				</p>
			</section>
		</div>
	</div>
</template>

<script>
export default {
	name: 'review-list',
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
	
.Review {
	font-family: 'Raleway', sans-serif;
	overflow-x: scroll;
	white-space: nowrap;
	color: $darkBlue;
	text-align: left;
	padding-left: 1rem;
	.review-header {
		h3 {
			line-height: 23px;
			font-style: bold;
			font-weight: 700;
			font-size: 20px;
			line-height: 23px;
		}
	}
	.review-content {
		font-style: italic;
	}

	.review-underline-txt {
		text-decoration: underline;
		font-weight: 300;
		font-size: 16px;
		line-height: 19px;
	}

	.review-flavour {
		font-weight: 800;
	}
	.container {
		overflow-x: auto;
		overflow-y: hidden;
		.review-item {
			display: inline-block;
			width: 250px;
			vertical-align: top;
			white-space: initial;
			margin-right: 1rem;
		}
	}
}
</style>
