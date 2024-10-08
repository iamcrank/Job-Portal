import {auth} from "./firebase.config";
import {createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword} from "firebase/auth";


export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password );
};

export const doSignInWithEmailAndPassword = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password );
};

export const doSignInWithGoogle = async() => {
  const provider = new GoogleAuthProvider();
  const result  = await signInWithPopup(auth, provider);

  return result
}

export const  dpSignOut = () => {
  return auth.signOut();
}