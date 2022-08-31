import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DashBoard from '../views/DashBoard.vue';
import CongratUlations from '../views/CongratUlations.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/dashboard',
		name: 'dash-board',
		component: DashBoard,
	},
	{
		path: '/congratulations',
		name: 'congrat-ulations',
		component: CongratUlations,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
