import styles from "../styles/AllNotes.module.css"
import Image from "next/image"
import lapiz from "../../public/img/lapiz.png"
import mas from "../../public/img/mas.png"
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
        <Image className={styles.logo} src={lapiz} alt=""/>
        <p className={styles.logoTitle}>Lab Notes</p>
        <div className={styles.divlogos}>
        <Image onClick={() => router.push('/Dashboard')} className={styles.plus} src={mas} alt="" />
        </div>
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
  const querySnapshot = await getDocs(collection(db, "notes"), orderBy("today", "desc"))
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