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

  downloadData = () => {
    //Download data here
    /*let ref = firebase.firestore().collection('posts');
    ref.orderBy('date', 'desc');
    const querySnapshot = ref.get();
    const data = [];
    querySnapshot.forEach(function(doc) {
      if (doc.exists){
        const post = doc.data() || {};
        data.push(post);
      }
    })
    console.log(data);
    console.log("hello IS MSL KAJWEL;KFJWEL;FJAELW;KFJ L;KJ ");*/
  };

  uploadData = (collectionId, documentId, data) => {
    firebase.firestore().collection(collectionId).doc(documentId).set({
      data,
    })
  };
}

Fire = new FireBase();
export default Fire;