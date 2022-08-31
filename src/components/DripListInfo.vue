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
