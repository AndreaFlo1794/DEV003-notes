import { useState } from "react"
import { useRouter } from 'next/router'
import Image  from 'next/image'
import lapiz from "../../public/img/lapiz.png"
import styles from "../styles/Login.module.css"
import { signIn, registerGoogle } from "labnotes/firebase/auth"



// controlled inputs vs uncontrolled input

export default function Login() {

 
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  

  const handleLogin = (event) => {
    event.preventDefault()
    
    //funcion sign in 
    signIn(email, password).then(() => {
      router.push('/Dashboard')
      alert('Bienvenido a LabNotes')
      // si estan correctos debe llevarme a Dashboard;
    }).catch((error) => {
      const errorCode = error.code;
  })

  }

  const google = (event) => {
    event.preventDefault()
    registerGoogle().then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const user = result.user;
      console.log(user);
      // IdP data available using getAdditionalUserInfo(result)
      router.push('/Dashboard');
      alert('Bienvenido a LabNotes 🥳');
    }).catch((error) => {
      console.log(error);
    })
    }

  return (
    <div>
      <header className={styles.header}>
        <Image className={styles.img} src={lapiz} alt="" />
        Lab Notes
      </header>
      <div className={styles.div}>
        <form className={styles.form}>
          <label className={styles.label} htmlFor="user">Email: </label>
          <input 
            className={styles.input} 
            type="text" 
            id="first" 
            name="user" 
            placeholder="............." 
            onChange={(e) => setEmail(e.target.value)}
            required />

          <label className={styles.label} htmlFor="Password">Password: </label>
          <input 
            className={styles.input} 
            type="password" 
            id="last" 
            name="password" 
            placeholder="............." 
            onChange={(e) => setPassword(e.target.value)}
            required 
          />

          <button onClick={handleLogin} type="submit" className={styles.btnLogin} >Login</button>
        </form>
        <div className={styles.containerGoogle}>
        <button onClick={google} type="button" className={styles.btnGoogle}> <img className={styles.logoGoogle} src="/img/googleL.png" alt=""></img> Sign in with Google</button>
        </div>
        <a className={styles.ahref} href="/Register">Registrate aquí</a>
        
      </div>
    </div>
    

  )
}
