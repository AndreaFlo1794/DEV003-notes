import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider,
    signOut 
} from 'firebase/auth';
import { app } from "./firebaseconfig";

const auth = getAuth(app);

export const signUp = (email, password) => { 
return createUserWithEmailAndPassword(auth, email, password)}

export const signIn = (email, password) => {
   return signInWithEmailAndPassword(auth, email, password) }


export const status = (state) => {
    return onAuthStateChanged(auth, state);
  }
  

export const logOut = () =>{
    return signOut(auth)    
}

export function registerGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }
  export { GoogleAuthProvider };