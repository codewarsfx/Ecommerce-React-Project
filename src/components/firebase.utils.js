import firebase from 'firebase/app' 
import 'firebase/auth'
import 'firebase/database'

try{

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

}

catch(error){
  console.log('error occured while initializing firebase app',error)
}



 


 //firebase code for authorization

 export const auth= firebase.auth() 

 const provider= new firebase.auth.GoogleAuthProvider()

 provider.setCustomParameters({prompt:'select_account'})

 export const signInWithGoogle=()=>auth.signInWithPopup(provider)

//  --------------------end of auth code ---------------


//setting up database
 export const database = firebase.database();



 export const createUserData =async (authUser,otherData) =>{
     if(!authUser) return;

     const userRef = database.ref(`users/${authUser.uid}`);

     userRef.on('value',(snapshot)=>{

       if(snapshot.val()) return;
       const createdAt= new Date()
       userRef.set({
         name: authUser.displayName ,
         email:authUser.email,
         createdAt,
         ...otherData
       })

     })
     return userRef
}

  export default firebase

  



