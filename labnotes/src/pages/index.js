import styles from "../styles/index.module.css"
import { useRouter } from 'next/router'

export default function Index() {
  const router = useRouter()
  return (
    <div className={styles.all}>
    <div className={styles.container}>
      <h2 className={styles.text}>Welcome to </h2>
      <h2 className={styles.text}><img className={styles.logo} src="/img/lapiz.png" alt=""></img> Lab Notes!</h2>
      </div>
      <div className={styles.content}>
        <img className={styles.bear} src="/img/osito.gif" alt=""></img>
      
      <button onClick={()=>router.push('/Login')} className={styles.btn}>START✏️</button>
      
   </div>
   </div>
   

  )
}


