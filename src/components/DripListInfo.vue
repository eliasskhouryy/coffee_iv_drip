<template>
	<div class="dripListInfo">
		<h3>Wonder what's in our power drip list?</h3>
	</div>
</template>

<script>
export default {
	name: 'DripListInfo',
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
   background-color: $beige; 
   color: $darkBlue;
   font-family: 'Raleway', sans-serif;
}
.dripListInfo {
	h3 {
		padding: 20px;
		padding-left: 10px;
		text-align: left;
		font-size: 20px;
		font-weight: 500;
	}
}
</style>
