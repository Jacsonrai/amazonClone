import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD2kpBC3A1TFerG8KtOmwv6P9bPDzg3dRg",
  authDomain: "clone-fa187.firebaseapp.com",
  databaseURL: "https://clone-fa187.firebaseio.com",
  projectId: "clone-fa187",
  storageBucket: "clone-fa187.appspot.com",
  messagingSenderId: "1062082570492",
  appId: "1:1062082570492:web:d92acef882f11af2a74f79",
  measurementId: "G-4BTPJ4G0SG"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth= firebase.auth();

export{db,auth}
