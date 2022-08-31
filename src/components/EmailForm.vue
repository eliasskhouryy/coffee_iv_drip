<template>
	<div class="pre-submit-page">
		<form action="/congratulations" onSubmit="onSubmit">
			<section>
				<h3>Subscribe to our newsletter</h3>
				<p>And be the first to recieve exclusive offers on special powers.</p>
			</section>
			<select name="" id="">
				<option value="">Daily</option>
				<option value="">Weekly</option>
				<option value="">Monthly</option>
				<option value="">Quaterly</option>
			</select>
			<label>
				Full Name
				<input type="text" placeholder="John Jones" v-model="name" required minlength="3" />
			</label>
			<label>
				Email:
				<input type="email" placeholder="john@ga.co" v-model="email" required />
			</label>
			<input class="button" type="submit" />
			<!-- <label> By clicking this, you agree to our Terms of Service and Policy</label>
			<input type="checkbox" id="agreement-checkbox" name="agreement" /> -->
		</form>
	</div>
</template>

<script>
import db from '../firestoreInit';
export default {
	name: 'email-form',
	data: function () {
		return {
			email: '',
			name: '',
		};
	},
	methods: {
		onSubmit: function () {
			this.$gtag.event('sign-up');
			db.collection('users')
				.add({
					name: this.name,
					email: this.email,
				})
				.then((this.email = ''), (this.name = ''));
			alert('sign up successful');
		},
	},
};
</script>

<style lang="scss" scoped>
$red: #e0785f;
$white: #f4f1de;
$lightBlue: #e8f0ff;
$darkBlue: #3d405b;
$green: #81b29a;
$beige: #f2cc8f;
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');

* {
	color: $darkBlue;
    font-family: 'Raleway', sans-serif;
}
form {
	background-color: $beige;
	width: 100vw;
	padding: 30px;
	padding-bottom: 100px;
	display: inline-block;
	vertical-align: bottom;
	margin-bottom: 0;
	text-align: left;

	select {
		display: block;
		margin-bottom: 10px;
		padding: 5px;
		border: 0.5px solid $darkBlue;
		border-radius: 5px;
	}

	select:focus {
		width: 50px;
	}

	input {
		display: block;
		margin-bottom: 10px;
		width: 95%;
		padding: 7px;
		border: 0.5px solid $darkBlue;
		border-radius: 5px;
	}
	input.button {
		width: 100px;
		margin: 0 auto;
		background-color: $darkBlue;
		color: $white;
		border: 0;
		padding: 8px 14px;
		border-radius: 5px;
		font-weight: 700;
	}
	// #agreement-checkbox {
	// 	float: right;
	// }
}
</style>
