import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCbX4-vHdYSce3J9NwRwqSAfYnVdM6ABuA",
    authDomain: "patron-eth.firebaseapp.com",
    databaseURL: "https://patron-eth.firebaseio.com",
    projectId: "patron-eth",
    storageBucket: "",
    messagingSenderId: "64179913372",
    appId: "1:64179913372:web:a94d8809b69717e8"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;
