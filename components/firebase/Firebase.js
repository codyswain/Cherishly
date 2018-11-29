import * as firebase from 'firebase'
import 'firebase/firestore';

class FireBase {
  constructor() {
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

    // Random thing required by firestore
    const settings = {timestampsInSnapshots: true};
    firestore.settings(settings);
  };

  // downloadData = () => {
  //   //Download data here
  //   console.log("Download data function called")
  // };

  //NEW FIREBASE STUFF
  downloadData = (collectionId, documentId) => {
     var ref = firebase.firestore().collection(collectionId).doc(documentId);

     ref.get().then(function(doc) {
         if (doc.exists) {
             console.log("Document data:", doc.data());
             return doc.data();
         } else {
             // doc.data() will be undefined in this case
             console.log("No such document!");
             return null;
         }
     }).catch(function(error) {
         console.log("Error getting document:", error);
         return null;
     });
   };

  uploadData = (collectionId, documentId, data) => {
    firebase.firestore().collection(collectionId).doc(documentId).set({
      data,
    })
  };
}

Fire = new FireBase();
export default Fire;