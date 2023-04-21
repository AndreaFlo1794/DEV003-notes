import {
  getFirestore,
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
  getDoc,
  deleteDoc,
  updateDoc,
  serverTimestamp,
} from 'firebase/firestore';


// -------------Función para identificar el usuario------------
const db = getFirestore(app);

export const currentUserInfo = () => auth.currentUser;

// -----------------Firestore----------------------
// Función que guarda los post de un usuario

export const addANewPost = (customer, postUser, uidUser) => addDoc(collection(db, 'posts'), {
  customer,
  postUser,
  uidUser,
  today: serverTimestamp(),
  like: [],
});
export const printPost = (callback) => onSnapshot(query(collection(db, 'posts'), orderBy('today', 'desc')), callback);

// Función para actualizar datos
export const updateInfo = (displayName) => updateProfile(auth.currentUser, displayName);

// Función para eliminar post
export const deletePost = (docId) => deleteDoc(doc(db, 'posts', docId));

// Función para editar post
export const editPost = (docId, postUser) => updateDoc(doc(db, 'posts', docId), { postUser });

export const getPost = (docId) => getDoc(doc(db, 'posts', docId));


