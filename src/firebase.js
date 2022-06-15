import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAg9jAyZ-ib5tzc7_4KlmRlsVRXIkkux5Y",
  authDomain: "team9-fbf49.firebaseapp.com",
  projectId: "team9-fbf49",
  storageBucket: "team9-fbf49.appspot.com",
  messagingSenderId: "62270488742",
  appId: "1:62270488742:web:abfd2178b470db19727467",
  measurementId: "G-ZZSSK1R3QZ",
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
