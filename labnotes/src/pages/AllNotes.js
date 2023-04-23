import styles from "../styles/AllNotes.module.css"
import { useRouter } from 'next/router'
import { format } from 'date-fns';
import { app } from "../firebase/firebaseconfig";
import {
  collection,
  getDocs,
  getFirestore, orderBy
} from 'firebase/firestore';

// -------------Función para identificar el usuario------------
const db = getFirestore(app);


export default function AllNotes({ notes }) {
  const router = useRouter()

  return (
    <div className={styles.background}>
      <header>
        <img className={styles.logo} src="/img/lapiz.png" alt=""></img>
        <p className={styles.logoTitle}>Lab Notes</p>
        <img onClick={() => router.push('/Dashboard')} className={styles.plus} src="/img/mas.png" alt=""></img>
      </header>
      <div className={styles.all}>
        {notes.map((content) => (
          < div className={styles.container} key={content.id} >
            <div className={styles.date}>{content.today && format(new Date(content.today), 'dd/MM/yyyy hh:mm')}</div>
            <div className={styles.text}>{content.title}</div>
            <button className={styles.btn} onClick={() => router.push(`/notes/${content.id}`)}>View</button>
          </div>
        ))}
      </div>
    </div >


  )

}

export const getServerSideProps = async (context) => {
  const querySnapshot = await getDocs(collection(db, "notes"))
  const docs = []
  querySnapshot.forEach((doc) => {
    docs.push({ ...doc.data(), id: doc.id })
  })
  return {
    props: {
      notes: docs
    }
  }
}