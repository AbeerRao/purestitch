import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAOIkBnXudIXkipfkNvFqqu07YrMDM1ReA",
    authDomain: "purestitch-ncrypt.firebaseapp.com",
    projectId: "purestitch-ncrypt",
    storageBucket: "purestitch-ncrypt.appspot.com",
    messagingSenderId: "430007853975",
    appId: "1:430007853975:web:1e9316c1d768697eaf9ad2"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db }