import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyALYrHPVWsaArVtgysfJgEsVzVQoyaVbEY",
  authDomain: "netflix-youva.firebaseapp.com",
  projectId: "netflix-youva",
  storageBucket: "netflix-youva.appspot.com",
  messagingSenderId: "820854933904",
  appId: "1:820854933904:web:0efe7ab10f33d414940b15",
  measurementId: "G-H28X080D48"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
