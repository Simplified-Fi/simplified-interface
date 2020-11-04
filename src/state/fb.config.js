import * as firebase from "firebase/app";



const firebaseConfig = {
    apiKey: "AIzaSyD3tR9D98j8zotD0CvD1QOtZ9_T7mbnLgs",
    authDomain: "reactivetest-7315d.firebaseapp.com",
    databaseURL: "https://reactivetest-7315d.firebaseio.com",
    projectId: "reactivetest-7315d",
    storageBucket: "reactivetest-7315d.appspot.com",
    messagingSenderId: "182149592880",
    appId: "1:182149592880:web:cc5ca41209d4a51f5b7af5",
    measurementId: "G-YD6NF0W4QJ"
};

var fire = firebase.initializeApp(firebaseConfig);

export default fire;