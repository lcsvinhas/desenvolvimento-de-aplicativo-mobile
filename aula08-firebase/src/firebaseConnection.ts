import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBw_a-DT3vRX7oZpl3-aGykbibPAhsqqjs",
    authDomain: "aula-firebase-e587b.firebaseapp.com",
    projectId: "aula-firebase-e587b",
    storageBucket: "aula-firebase-e587b.firebasestorage.app",
    messagingSenderId: "280087781094",
    appId: "1:280087781094:web:28194c54cd46f25a156527"
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }