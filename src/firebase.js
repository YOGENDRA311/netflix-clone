import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDBp_dDk2A_yEtEPq_fNDSf2-BLTzvT5AE",
  authDomain: "netflix-clone-6887a.firebaseapp.com",
  projectId: "netflix-clone-6887a",
  storageBucket: "netflix-clone-6887a.appspot.com",
  messagingSenderId: "242485870115",
  appId: "1:242485870115:web:5ef05bfac308014eec3b96",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
