import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth, onAuthStateChanged } from 'firebase/auth'
import { collection, getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDI0ulZTACgZcH1R4A4rs8XC_TKl5cL1XI',
  authDomain: 'todolist-app-67a38.firebaseapp.com',
  projectId: 'todolist-app-67a38',
  storageBucket: 'todolist-app-67a38.appspot.com',
  messagingSenderId: '1085511004982',
  appId: '1:1085511004982:web:93d79a4524a83602a4b997',
  measurementId: 'G-70LBNJ5BLL',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const tasksCollection = collection(db, 'tasks')
export const provider = new GoogleAuthProvider()
export const auth = getAuth()
