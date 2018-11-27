import firebase from ‘firebase’;

const config = {
    apiKey: "AIzaSyAO8BB0W6mXDr3ihvkMn-uJjopgfsf_qow",
    authDomain: "cherishly-412dd.firebaseapp.com",
    databaseURL: "https://cherishly-412dd.firebaseio.com",
    projectId: "cherishly-412dd",
    storageBucket: "cherishly-412dd.appspot.com",
    messagingSenderId: "378187715149"
  };
  
firebase.initializeApp(config);

export default firebase;