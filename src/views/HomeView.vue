<template>
	<div>
		<NavBar />
		<div class="home">
			<div class="box page1">
				<TopPage />
				<DripListInfo />
			</div>
			<div class="box page2">
				<WheelSection />
			</div>
			<div class="box page3">
				<ReviewList />
				<EmailForm />
			</div>
			<button>Subscribe</button>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import TopPage from '@/components/TopPage.vue';
import WheelSection from '@/components/Wheel.vue';
// import DripListInfo from '@/components/DripListInfo.vue';
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
	},
	data: function () {
		return {
			variable1: '',
		};
	},
	methods: {
		buttonShower: function () {},
	},
};
</script>

<style scoped lang="scss">
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
		right: 0px;
		bottom: 30px;
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		z-index: 10;
		height: 30px;
		border-radius: 5px;
		border: none;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}
}
</style>
