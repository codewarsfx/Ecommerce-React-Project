import firebase from 'firebase/app' 
import 'firebase/auth'
import 'firebase/database'

const config={
    apiKey: "AIzaSyDladrcEIze2yV3ibEbcw8RhHQhL6d6vOc",
    authDomain: "clothing-db-75803.firebaseapp.com",
    databaseURL: "https://clothing-db-75803-default-rtdb.firebaseio.com",
    projectId: "clothing-db-75803",
    storageBucket: "clothing-db-75803.appspot.com",
    messagingSenderId: "665026325050",
    appId: "1:665026325050:web:7518f3fbbdefa1770a6303",
    measurementId: "G-WFZQ8ZBP6D"
  };


 firebase.initializeApp(config)

 export const auth= firebase.auth()

 const provider= new firebase.auth.GoogleAuthProvider()

 provider.setCustomParameters({prompt:'select_account'})

 export const signInWithGoogle=()=>auth.signInWithPopup(provider)

 export const  database = firebase.database();

 export const createUserData =async (authUser,otherData)=>{

  if (!authUser) return;
  database.ref(`users/${authUser.uid}`).set({
      name:authUser.displayName,
      email:authUser.email,
      date: new Date(),
      ...otherData
    })
}

  export default firebase

  



