import styles from "../styles/Dashboard.module.css"
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
  const sendInfo = (e)=>{
    e.preventDefault();
    //console.log(dato);
    if(title !== ''){
    addANewPost(title, description);
    Form.reset();
  }else{
    alert('No has escrito nada, revisa por favor 😿');
}
  }

  const handleSignOut = () => {
    logOut().then(() => {
        router.push('/Login')
    });
} 
  return (

      <div>
       <div className='container'>
       <img onClick={handleSignOut} className={styles.logOut} src="/img/cerrar-sesion.png" alt=""></img>
      <div>
        <form onSubmit={sendInfo} name='Form'>
            <div>
                <input type="text" placeholder='Title'  
                name='Title' onChange={(e) => setTitle(e.target.value)} required  />
            </div>

            <div>
                <textarea type="text" placeholder='Description' 
                name='Description'  onChange={(e) => setDescription(e.target.value)} required />
            </div>

            <button onClick={()=>router.push(`/AllNotes`)}>
               Guardar
            </button>
        </form>
      </div>
    </div>
    </div>
  )
}
