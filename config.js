import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyB5Dgz0RSE6RZzNo2oMvjWcfIN0Ro0WmRA",
    authDomain: "e-ride-e8c85.firebaseapp.com",
    projectId: "e-ride-e8c85",
    storageBucket: "e-ride-e8c85.appspot.com",
    messagingSenderId: "882619712926",
    appId: "1:882619712926:web:474eef292c59b3796a028f"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
