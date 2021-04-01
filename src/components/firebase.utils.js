import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyDladrcEIze2yV3ibEbcw8RhHQhL6d6vOc",
    authDomain: "clothing-db-75803.firebaseapp.com",
    databaseURL: "https://clothing-db-75803-default-rtdb.firebaseio.com",
    projectId: "clothing-db-75803",
    storageBucket: "clothing-db-75803.appspot.com",
    messagingSenderId: "665026325050",
    appId: "1:665026325050:web:7518f3fbbdefa1770a6303",
    measurementId: "G-WFZQ8ZBP6D"
}

firebase.initializeApp(firebaseConfig)


export const auth= firebase.auth();

export const firestore= firebase.firestore();

export const  googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export const signInWithGoogle = ()=>{auth.signInWithPopup(googleAuthProvider)}



export const  createUserData = async (AuthUser, otherInformation)=>{
  if(!AuthUser) return;
  
  const UserRef = firestore.doc(`users/${AuthUser.uid}`)
  
  const userObj = await UserRef.get()
  
  if(!userObj.exists){
    
    const createdAt = new Date()
    
    const userData= {
      uid:AuthUser.uid,
      displayName:AuthUser.displayName,
      email:AuthUser.email,
      createdAt,
      ...otherInformation
    }
    UserRef.set(
      userData
    ) 
  } 
  
  return UserRef
}


export default firebase


