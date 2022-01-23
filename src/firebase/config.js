import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBCzrMS17amNAPr0MvLGAA8B_a4sGbGB_A",
  authDomain: "spacezee-2277d.firebaseapp.com",
  databaseURL: "https://spacezee-2277d-default-rtdb.firebaseio.com",
  projectId: "spacezee-2277d",
  storageBucket: "spacezee-2277d.appspot.com",
  messagingSenderId: "770145968617",
  appId: "1:770145968617:web:f4aa25f118500912382b78",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const timestamp = firebase.firestore.Timestamp;
export { db, auth, storage, timestamp };
