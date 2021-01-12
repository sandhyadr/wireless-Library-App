import * as firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyC3bevG5SyIj3NELnClxAPYgE_StZJ_Cm8",
    authDomain: "willydb-9ea1f.firebaseapp.com",
    databaseURL: "https://willydb-9ea1f.firebaseio.com",
    projectId: "willydb-9ea1f",
    storageBucket: "willydb-9ea1f.appspot.com",
    messagingSenderId: "691745411587",
    appId: "1:691745411587:web:fb1509c4277cc8f9aef436"
  };
// Initialize Firebase
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();
