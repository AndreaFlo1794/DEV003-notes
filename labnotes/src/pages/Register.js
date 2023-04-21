import { useState } from "react"
import { useRouter } from 'next/router'
import styles from "../styles/Register.module.css"
import { signUp } from "labnotes/firebase/auth"



export default function Register() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleRegister = (event) => {
    event.preventDefault()
    console.log(password, email)
    //funcion sign in 
    signUp(email, password).then(() => {
      router.push('/Login')
      // si estan correctos debe llevarme a Dashboard;
    }).catch((error) => {
      const errorCode = error.code;
      if(errorCode === 'auth/invalid-email'){
        alert('Correo o contraseña inválida 😵')
      }
  })
  }

  return (
    <div>
      <header className={styles.header} >
        <img className={styles.img} src="/img/lapiz.png" alt=""></img>
        Lab Notes
      </header>
      <form className={styles.form}>

        <label className={styles.label} htmlFor="user">Username: </label>
        <input className={styles.input} type="text" id="first" name="user" placeholder="............." required />

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
        required />

        <button onClick={handleRegister} className={styles.btnRegister} type="submit">Register</button>

      </form>
    </div>
    

  )
}
