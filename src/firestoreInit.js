import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDpFmNst3Uy7Cc8yazlVQV3jkgEf57LIUg',
	authDomain: 'coffeedrip-65d9f.firebaseapp.com',
	projectId: 'coffeedrip-65d9f',
	storageBucket: 'coffeedrip-65d9f.appspot.com',
	messagingSenderId: '85884013953',
	appId: '1:85884013953:web:a3d3e796e319c14921ec80',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
