import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCUAlRHAWsCjDcFCB0XcVSOoniIktTZThE",
  authDomain: "oden-blog.firebaseapp.com",
  projectId: "oden-blog",
  storageBucket: "oden-blog.appspot.com",
  messagingSenderId: "782739818390",
  appId: "1:782739818390:web:bf84dc2c90ddf3b3523fb7",
  measurementId: "G-CCG60LKGRY",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
