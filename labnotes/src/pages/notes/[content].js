import {getFirestore, doc, getDoc} from 'firebase/firestore'
import { useRouter } from 'next/router'
import { app } from 'labnotes/firebase/firebaseconfig'
import { deleteNote } from "labnotes/firebase/firestore"
const db = getFirestore(app)

export default function NotesReview({notes}) {

    const {query} = useRouter()
    const router = useRouter()

    const deleteNotes = ()=>{
        const {content} = query
        deleteNote(content)
        alert('¿Desea eliminar esta nota?')
    }

  return (
    <div>
      <div>
            <div>
                    <div >
                    <p>{notes.title}$</p>
                    <p>{notes.description}</p>
                    <button  onClick={deleteNotes}>Delete</button>
                    <button  onClick={()=>router.push('/AllNotes')}>Come Back!</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export async function getServerSideProps({query: {content}}){
    const docRef = doc(db, 'notes', content)
    const docSnap = await getDoc(docRef)
    const notes = docSnap.data()

    return{
        props:{
            notes:notes
        }
    }
}