<template>
	<div>
		<NavBar />
		<div class="home">
			<div class="box page1">
				<TopPage />
			</div>
			<div class="box page2">
				<DripListInfo />

				<WheelSection />
			</div>
			<div class="box page3">
				<ReviewList />
				<EmailForm />
			</div>
			<button @click="buttonShower">Subscribe</button>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import TopPage from '@/components/TopPage.vue';
import WheelSection from '@/components/Wheel.vue';
import DripListInfo from '@/components/DripListInfo.vue';
import EmailForm from '@/components/EmailForm.vue';
import NavBar from '@/components/NavBar.vue';
import ReviewList from '@/components/ReviewList.vue';

export default {
	name: 'HomeView',
	components: {
		NavBar,
		TopPage,
		EmailForm,
		ReviewList,
		WheelSection,
		DripListInfo,
	},
	data: function () {
		return {
			variable1: '',
		};
	},
	methods: {
		buttonShower: function () {
			window.scrollTo(0, document.body.scrollHeight);
		},
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

* {
	box-sizing: border-box;
}

.home {
	margin-top: 100px;
	.box {
		margin-top: 100px;

		height: 100vh;
		max-width: 100vw;
	}
	button {
		position: fixed;
		right: 20px;
		bottom: 20px;

		z-index: 10;
		border-radius: 5px;
		border: none;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
		background-color: $darkBlue;
		color: $white;
		padding: 8px 14px;
		font-weight: 600;
	}
}
</style>
