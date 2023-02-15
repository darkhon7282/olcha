import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAujmdDS3Be69CHILrJs8yQMS578hC6FiE",
    authDomain: "gabriel-63999.firebaseapp.com",
    projectId: "gabriel-63999",
    storageBucket: "gabriel-63999.appspot.com",
    messagingSenderId: "457827613948",
    appId: "1:457827613948:web:2d590329e603803e586b79",
    measurementId: "G-9TZ6BR2T55"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

