import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueGtag from 'vue-gtag';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

Vue.config.productionTip = false;
Vue.use(VueSlickCarousel);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueGtag, {
	config: { id: 'G-99S6JH47NV' },
});

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app');

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
