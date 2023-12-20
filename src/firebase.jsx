// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
	apiKey: "AIzaSyB7zCQdfeW_HpkHigQ-7bywLx1n27QX8j8",
	authDomain: "clone-frontend-c916a.firebaseapp.com",
	projectId: "clone-frontend-c916a",
	storageBucket: "clone-frontend-c916a.appspot.com",
	messagingSenderId: "577507152877",
	appId: "1:577507152877:web:14b08d17a366dc62fe4de4",
	measurementId: "G-33GRZS6BHW",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth, db };
export default firebase;

