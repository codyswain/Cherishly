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

  downloadData = async (collectionId, documentId) => {
     var ref = firebase.firestore().collection(collectionId).doc(documentId);
     try{

     doc = await ref.get()
      if (doc.exists) {
             //console.log("Document data:", doc.data());
             return doc.data();
         } else {
             // doc.data() will be undefined in this case
             console.log("No such document!");
             return null;
         }
       }
     
   
   catch(e) {
    console.log(e)
   }
   };

   downloadPosts = async () => {
     var ref = firebase.firestore().collection('posts').orderBy('date', 'desc');

     try {
       posts = await ref.get()
       if (true){
         return posts.docs.map(doc => doc.data())
       } else {
         console.log("no such document");
         return null;
       }
     }
     catch (e) {
       console.log(e);
     }
   };

   downloadComments = async (postID) => {
    console.log(postID)
    var ref = firebase.firestore().collection('posts').doc(postID).collection('comments').orderBy('msec')

    try {
      comments = await ref.get()
      if (true) {
        return comments.docs.map(doc => doc.data())
      } else {
        console.log("No such document!");
             return null;
      }
    }
    catch(e) {
      console.log(e);
    }
   };

   makeComment = async (postID, text) => {
    var ref = firebase.firestore().collection('posts').doc(postID).collection('comments');
    var now = new Date();
    var month = now.getMonth() + 1
    var day = now.getDate()
    var dateString = '' + month.toString() + '/' + day.toString()

    await ref.add({
      name: "Jane Allen",
      text: text,
      date: dateString,
      msec: now.getTime()
    }).then(function(docRef) {
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
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