<template>
	<div>
		<NavBar />
		<div class="home">
			<div class="box page1">
				<TopPage />
			</div>
			<div class="box page2">
				<ReviewList />
			</div>
			<div class="box page3">
				<EmailForm />
			</div>
			<button>Subscribe</button>
		</div>
	</div>
	a6c0f7d72fa769e97ae208ed20568345f27
</template>

<script>
// @ is an alias to /src
import TopPage from '@/components/TopPage.vue';
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
	margin-top: 50px;
	.box {
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
