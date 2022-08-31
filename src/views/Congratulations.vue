<template>
	<div class="post-submit-page">
		<div id="post-submit-container">
			<h1>Congratulations!</h1>
			<img src="../assets//smelling-coffee-cat.jpg" alt="cat smelling a mug of coffee" />
			<p id="strong-txt">You are officially one of our bean drippers!</p>
			<p id="smaller">Please check your email for your subscripton confirmation!</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'congrat-ulations',
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
	font-family: 'Raleway', sans-serif;
	color: $darkBlue;
	background-color: $beige;
	text-align: center;
	margin: 0;
	padding: 0;
}
h1 {
	padding-top: 1rem;
	padding-bottom: 1rem;
	font-weight: 700;
	font-style: bold;
	font-size: 20px;
}
.post-submit-page {
	min-height: 100vh;
}
img {
	padding-bottom: 1rem;
}
#strong-txt {
	padding-bottom: 1rem;
	font-weight: 700;
	font-size: 16px;
}

#smaller {
	font-weight: 500;
	font-size: 14px;
}
</style>
