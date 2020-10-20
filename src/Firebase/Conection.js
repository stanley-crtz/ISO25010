import firebase from 'firebase/app'
import 'firebase/firebase-firestore'

const fb = firebase.initializeApp({
    apiKey: "AIzaSyD_eHTL_P5aogCyhrHgY9oH7Ct66va_q38",
    authDomain: "iso25010.firebaseapp.com",
    databaseURL: "https://iso25010.firebaseio.com",
    projectId: "iso25010",
    storageBucket: "iso25010.appspot.com",
    messagingSenderId: "1042200466759",
    appId: "1:1042200466759:web:7134c926f5091e8939e862"
})

export const db = fb.firestore()