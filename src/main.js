import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueGtag from 'vue-gtag';

Vue.config.productionTip = false;

Vue.use(VueGtag, {
	config: { id: "G-99S6JH47NV" }
})

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app');

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
