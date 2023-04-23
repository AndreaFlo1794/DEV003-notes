import {
  getFirestore,
  addDoc,
  collection,
  doc,
  getDoc,
  deleteDoc,
  updateDoc, 
  
} from 'firebase/firestore';

import { app } from "./firebaseconfig";
// -------------Función para identificar el usuario------------
const db = getFirestore(app);

export const currentUserInfo = () => auth.currentUser;

// -----------------Firestore----------------------
// Función que guarda los post de un usuario

export const addANewPost = (title, description) => addDoc(collection(db, 'notes'), {
  title,
  description,
  today: new Date().toISOString()
});


// Función para actualizar datos
export const updateInfo = (displayName) => updateProfile(auth.currentUser, displayName);

// Función para eliminar post
export const deleteNote = (content) => deleteDoc(doc(db, 'notes', content));

// Función para editar post
export const editDoc = (docId, postUser) => updateDoc(doc(db, 'posts', docId), { postUser });

export const getNote = (content) => getDoc(doc(db, 'notes', content));


