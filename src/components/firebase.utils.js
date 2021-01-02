import firebase from 'firebase/app' //these is always needed 
import 'firebase/auth'
import 'firebase/firestore'



const config={
    apiKey: "AIzaSyDladrcEIze2yV3ibEbcw8RhHQhL6d6vOc",
    authDomain: "clothing-db-75803.firebaseapp.com",
    projectId: "clothing-db-75803",
    storageBucket: "clothing-db-75803.appspot.com",
    messagingSenderId: "665026325050",
    appId: "1:665026325050:web:7518f3fbbdefa1770a6303",
    measurementId: "G-WFZQ8ZBP6D"
  }

  firebase.initializeApp(config)

  export const auth= firebase.auth()
  export const firestore= firebase.firestore()

  const provider= new firebase.auth.GoogleAuthProvider()

  provider.setCustomParameters({prompt:'select_account'})


  export const signInWithGoogle=()=>auth.signInWithPopup(provider)

  export default firebase

