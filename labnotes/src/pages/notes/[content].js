import styles from "../../styles/content.module.css"
import Image from "next/image"
import lapiz from "../../../public/img/lapiz.png"
import editar from "../../../public/img/editar.png"
import eliminar from "../../../public/img/eliminar.png"
import actualizar from "../../../public/img/actualizar.png"
import regresar from "../../../public/img/regresar.png"
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
        confirm('¿Desea eliminar esta nota?')
    }

    return (
        <div className={styles.background}>
            <header>
                <Image className={styles.logo} src={lapiz} alt=""/>
                <p className={styles.logoTitle}>Lab Notes</p>
                <div className={styles.divlogos}>
                <Image onClick={() => router.push('/AllNotes')} className={styles.back} src={regresar}alt="" />
                </div>
            </header>
            <div className={styles.container}>
                <div className={styles.content}>
                    <p className={styles.title}>{notes.title}</p>
                    <p className={styles.description}>{notes.description}</p>
                </div>
                <div className={styles.contentImg}>
                    <Image className={styles.img} onClick={deleteNotes} src={eliminar} alt="" />
                    <Image className={styles.img} src={editar} alt=""/>
                    <Image className={styles.img} src={actualizar} alt=""/>
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