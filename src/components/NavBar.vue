<template>
	<nav>
		<div class="hamburger-menu">
			<input id="menu__toggle" type="checkbox" />
			<label class="menu__btn" for="menu__toggle">
				<span></span>
			</label>
			<ul class="menu__box">
				<li><a href="">Home</a></li>
				<li><a href="">Home</a></li>
				<li><a href="">Home</a></li>
				<li><a href="">Home</a></li>
			</ul>
			<h3 id="heading-txt">Bean Dripper</h3>
			<img id="heading-icon" src="../assets/bean-icon.png" alt="coffee bean icon" />
		</div>
	</nav>
</template>

<script>
export default {
	name: 'nav-bar',
};
</script>

<style scoped lang="scss">
$red: #e0785f;
$white: #f4f1de;
$lightBlue: #e8f0ff;
$darkBlue: #3d405b;
$green: #81b29a;
$beige: #f2cc8f;

nav {
	position: fixed;
	top: 0;
	left: 0;
	background-color: $lightBlue;
	width: 100%;
	padding: 30px;

	a {
		text-decoration: none;
	}
	#heading-icon {
		vertical-align: middle;
	}
	#heading-txt {
		margin-top: 0;
		padding-top: 0;
	}
	#menu__toggle {
		opacity: 0;
	}
	#menu__toggle:checked + .menu__btn > span {
		transform: rotate(45deg);
	}
	#menu__toggle:checked + .menu__btn > span::before {
		top: 0;
		transform: rotate(0deg);
	}
	#menu__toggle:checked + .menu__btn > span::after {
		top: 0;
		transform: rotate(90deg);
	}
	#menu__toggle:checked ~ .menu__box {
		left: 0 !important;
	}
	.menu__btn {
		position: fixed;
		top: 40px;
		left: 35px;
		width: 26px;
		height: 26px;
		cursor: pointer;
		z-index: 1;
		display: inline-block;
	}
	.menu__btn > span,
	.menu__btn > span::before,
	.menu__btn > span::after {
		display: block;
		position: absolute;
		width: 100%;
		height: 2px;
		background-color: $darkBlue;
		color: $darkBlue;
		transition-duration: 0.25s;
	}
	.menu__btn > span::before {
		content: '';
		top: -8px;
	}
	.menu__btn > span::after {
		content: '';
		top: 8px;
	}
	.menu__box {
		display: block;
		position: fixed;
		top: 0;
		left: -100%;
		width: 300px;
		height: 100%;
		margin: 0;
		padding: 80px 0;
		list-style: none;
		background-color: white;
		box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
		transition-duration: 0.25s;
	}
	.menu__item {
		display: block;

		color: $darkBlue;

		font-size: 20px;
		font-weight: 300;
		text-decoration: none;
		transition-duration: 0.25s;
	}
	.menu__item:hover {
		background-color: #eaffd0;
		color: $darkBlue;
	}
	h3 {
		display: inline-block;
		margin: 0;
		vertical-align: top;
		font-size: 20px;
	}
	img {
		display: inline-block;
		width: 30px;
	}
}
</style>
