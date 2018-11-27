import * as firebase from 'firebase'
import 'firebase/firestore';

export const init = () => {
  let config = {
    apiKey: "AIzaSyAO8BB0W6mXDr3ihvkMn-uJjopgfsf_qow",
    authDomain: "cherishly-412dd.firebaseapp.com",
    databaseURL: "https://cherishly-412dd.firebaseio.com",
    projectId: "cherishly-412dd",
    storageBucket: "cherishly-412dd.appspot.com",
    messagingSenderId: "378187715149"
  }
  if (!firebase.apps.length) {
  	firebase.initializeApp(config) 
	}
	const firestore = firebase.firestore();
	const settings = {timestampsInSnapshots: true};
	firestore.settings(settings);
}

export const putData = () => {
  return (
  	firebase.firestore().collection("sample").doc("Test").set({
	    name: "Los Angeles",
	    state: "CA",
	    country: "USA"
		})
	);
}