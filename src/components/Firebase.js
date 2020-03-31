import firebase from 'firebase/app'
import 'firebase/firebase-firestore'
import 'firebase/firebase-auth'

const config={
    apiKey: "AIzaSyA-v_1PmMYcKJdd32IV0Y4YHUVH7jwRuY8",
    authDomain: "e-clothing-fad17.firebaseapp.com",
    databaseURL: "https://e-clothing-fad17.firebaseio.com",
    projectId: "e-clothing-fad17",
    storageBucket: "e-clothing-fad17.appspot.com",
    messagingSenderId: "975037310740",
    appId: "1:975037310740:web:191cd59488d79d5ca30401",
    measurementId: "G-L8EC4LCYGW"
  }

  export const createUserProfileDocument=async (userAuth,additionalData)=>{
    if(!userAuth) return
    
    const userRef=firestore.doc('user/'+userAuth.uid);
    const snapShot=await userRef.get();

    if(!snapShot.exists){
      const {displayName,email}=userAuth;
      const createdAt=new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
        console(error.message);
      }

    }
  }

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase