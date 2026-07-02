import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "REPLACE_WITH_API_KEY",
  authDomain: "REPLACE_WITH_AUTH_DOMAIN",
  projectId: "REPLACE_WITH_PROJECT_ID",
  storageBucket: "REPLACE_WITH_STORAGE_BUCKET",
  messagingSenderId: "REPLACE_WITH_MESSAGING_SENDER_ID",
  appId: "REPLACE_WITH_APP_ID"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

export async function saveContact({ name, email, message }) {
  const col = collection(db, 'contacts')
  const docRef = await addDoc(col, { name, email, message, createdAt: serverTimestamp() })
  return docRef.id
}
