import styles from "../styles/Dashboard.module.css"
import { useState } from "react"
import { useRouter } from 'next/router'
import { logOut, status } from "labnotes/firebase/auth"

export default function Dashboard() {
    const router = useRouter()
    const [user, setUser] = useState({})
    const [task, setTask] = useState()

    status((currentUser) => {
        setUser(currentUser);
    });
    const handleChange = (e) => {
        setTask(e.target.value );
    }

    const handleSignOut = () => {
        logOut().then(() => {
            router.push('/Login')
        });
    }

    return (
        <div className={styles.background}>
            <header className={styles.header}>
                <img className={styles.logo} src="/img/lapiz.png" alt=""></img>
                <p className={styles.logoTitle}>Lab Notes</p>
                <img onClick={handleSignOut} className={styles.logOut} src="/img/cerrar-sesion.png" alt=""></img>
            </header>
            <h4> Hola! {user?.email} </h4>

            <div className={styles.container}>
                <div className={styles.divnote}>
                    <div className={styles.btnUp}>
                        <img src="/img/editar.png" alt=""></img>
                        <img src="/img/eliminar.png" alt=""></img>
                    </div>
                    <input onChange={handleChange} className={styles.inputnotetitle} type="text" id="first" name="user" placeholder="Title" required />
                    <input className={styles.inputnotedescription} type="text" id="first" name="user" placeholder="Description" required />
                    <div>
                        <img className={styles.save} src="/img/disquete.png" alt=""></img>
                    </div>
                </div>
                <div className={styles.divnotetwo}>
                    <div className={styles.btnUp}>
                        <img src="/img/editar.png" alt=""></img>
                        <img src="/img/eliminar.png" alt=""></img>
                    </div>

                    <input className={styles.inputnotetwotitle} type="text" id="first" name="user" placeholder="Title" required />
                    <input className={styles.inputnotetwodescription} type="text" id="first" name="user" placeholder="Description" required />
                    <div>
                        <img className={styles.save} src="/img/disquete.png" alt=""></img>
                    </div>
                </div>
            </div>
        </div>

    )
}


