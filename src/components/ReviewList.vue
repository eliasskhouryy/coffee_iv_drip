<template>
	<div class="Review">
		<h3>Reviews</h3>
		<div class="container">
			<section class="review-item" id="review-one">
				<p class="review-name">Katie Lane</p>
				<p class="review-rating">&#9733;&#9733;&#9733;&#9733;</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				</p>
			</section>
			<section class="review-item" id="review-two">
				<p class="review-name">John Andrews</p>
				<p class="review-rating">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				</p>
			</section>
			<section class="review-item" id="review-two">
				<p class="review-name">Andrea Smithers</p>
				<p class="review-rating">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
				<p>
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
.Review {
	overflow-x: scroll;
	white-space: nowrap;

	.container {
		overflow-x: auto;
		overflow-y: hidden;
		.review-item {
			background-color: pink;
			display: inline-block;
			width: 250px;
			vertical-align: top;
			white-space: initial;
			padding: 10px;

			margin-right: 10px;
			box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
			margin: 10px 10px 10px 0;
		}
	}
}
</style>
