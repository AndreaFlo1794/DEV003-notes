import { useRouter } from 'next/router'
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
        < div className="container" >
            <a><button onClick={() => router.push(`/Dashboard`)} >Create Note</button></a>

            <div>
                {notes.map((content) => (
          < div  key = { content.id } >
            <h5 >{content.title}</h5>
            <p>{content.description}</p>
            <button  onClick={()=>router.push(`/notes/${content.id}`)}>View</button>
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
      // doc.data() is never undefined for query doc snapshots
      docs.push({...doc.data(), id: doc.id,})
    })
    return{
      props:{
        notes: docs
      }
    }
  }