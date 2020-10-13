import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAz1OcCx5ObJCrT-M9RpHFs-3PBMdg_UHQ",
  authDomain: "clone-f6639.firebaseapp.com",
  databaseURL: "https://clone-f6639.firebaseio.com",
  projectId: "clone-f6639",
  storageBucket: "clone-f6639.appspot.com",
  messagingSenderId: "228290331971",
  appId: "1:228290331971:web:1bd76fedb91b1dde949bf6",
  measurementId: "G-79NB0S3LY2"
});



const auth = firebase.auth();

export { auth };
