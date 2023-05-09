import styles from "../styles/Dashboard.module.css"
import Image  from 'next/image'
import cerrar from "../../public/img/cerrar-sesion.png"
import cheque from "../../public/img/cheque.png"
import Header from "./components/Header";
import { useState } from "react"
import { useRouter } from 'next/router'
import { logOut } from "labnotes/firebase/auth"
import { addANewPost } from "labnotes/firebase/firestore"


// const db = getFirestore(firebaseApp);

export default function Dashboard() {

  const router = useRouter();
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')


  //esta funcion es para guardar la info en firebase
  const sendInfo = (e) => {
    e.preventDefault();
    //console.log(dato);
    addANewPost(title, description);
    Form.reset();
  }

  const sendInfoTwo = (e) => {
    e.preventDefault();

    addANewPost(title, description);
    FormTwo.reset();
  }

  const handleSignOut = () => {
    logOut().then(() => {
      router.push('/Login')
    });
  }
  return (
    <div className={styles.background}>
      <Header />
        <div className={styles.divlogos}>
        <Image onClick={handleSignOut} className={styles.logOut} src={cerrar} alt=""/>
        <Image onClick={()=>router.push('/AllNotes')} className={styles.favorite} src={cheque} alt=""/>
        </div>
      
      {/* <h4> Hola! {user?.email} </h4> */}
      <div className={styles.container}>
          <div className={styles.divnote}>
            <form onSubmit={sendInfo} name='Form'>
              <div>
                <input
                  type="text"
                  placeholder='Title'
                  name='Title'
                  className={styles.noteTitle}
                  onChange={(e) => setTitle(e.target.value)}
                  required />
              </div>

              <div>
                <textarea
                  type="text"
                  placeholder='Description'
                  name='Description'
                  className={styles.noteDescription}
                  onChange={(e) => setDescription(e.target.value)}
                  required />
                  <img className={styles.gif} src="/img/notes.gif" alt=""></img>
              </div>
              <button className={styles.save}>Save</button>
            </form>
          </div>
          </div>
        </div>
    
  )
}
