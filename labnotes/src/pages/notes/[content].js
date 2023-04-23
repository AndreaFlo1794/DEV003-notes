import styles from "../../styles/content.module.css"
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { useRouter } from 'next/router'
import { app } from 'labnotes/firebase/firebaseconfig'
import { deleteNote } from "labnotes/firebase/firestore"
const db = getFirestore(app)

export default function NotesReview({ notes }) {

    const { query } = useRouter()
    const router = useRouter()

    const deleteNotes = () => {
        const { content } = query
        deleteNote(content)
        alert('¿Desea eliminar esta nota?')
    }

    return (
        <div className={styles.background}>
            <header>
                <img className={styles.logo} src="/img/lapiz.png" alt=""></img>
                <p className={styles.logoTitle}>Lab Notes</p>
                <img onClick={() => router.push('/AllNotes')} className={styles.back} src="/img/regresar.png" alt=""></img>
            </header>
            <div className={styles.container}>
                <div className={styles.content}>
                    <p className={styles.title}>{notes.title}</p>
                    <p className={styles.description}>{notes.description}</p>
                </div>
                <div className={styles.contentImg}>
                    <img className={styles.img} onClick={deleteNotes} src="/img/eliminar.png" alt=""></img>
                    <img className={styles.img} src="/img/editar.png" alt=""></img>
                    <img className={styles.img} src="/img/actualizar.png" alt=""></img>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps({ query: { content } }) {
    const docRef = doc(db, 'notes', content)
    const docSnap = await getDoc(docRef)
    const notes = docSnap.data()

    return {
        props: {
            notes: notes
        }
    }
}