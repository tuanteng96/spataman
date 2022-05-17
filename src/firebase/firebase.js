import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAKWz1pAVYszjhpyrsbTn_-S5ZeRJMxhRQ",
    authDomain: "spataman-52483.firebaseapp.com",
    projectId: "spataman-52483",
    storageBucket: "spataman-52483.appspot.com",
    messagingSenderId: "228929242352",
    appId: "1:228929242352:web:45a1ca12322d736dc16e35",
    measurementId: "G-VL0EQVBXNE"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
export { auth, database };