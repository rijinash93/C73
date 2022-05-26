

import firebase from "firebase";
require("@firebase/firestore");

 var firebaseConfig = {
  apiKey: "AIzaSyDOHDwU6tievE6zkktiwV0Lqj1lxwXoxro",
  authDomain: "c-71-new.firebaseapp.com",
  projectId: "c-71-new",
  storageBucket: "c-71-new.appspot.com",
  messagingSenderId: "1084360812519",
  appId: "1:1084360812519:web:9652854039cce729d77f42"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();