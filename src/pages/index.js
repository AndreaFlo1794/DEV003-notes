import styles from "../styles/index.module.css"
import Image  from 'next/image'
import osito from "../../public/img/osito.gif"
import lapiz from "../../public/img/lapiz.png"
import { useRouter } from 'next/router'

export default function Index() {
  const router = useRouter()
  return (
    <div className={styles.all}>
    <div className={styles.container}>
      <h2 className={styles.text}>Welcome to </h2>
      <h2 className={styles.text}><Image className={styles.logo} src={lapiz} alt="" /> Lab Notes!</h2>
      </div>
      <div className={styles.content}>
        <Image className={styles.bear} src={osito} alt="" />
      
      <button onClick={()=>router.push('/Login')} className={styles.btn}>START✏️</button>
      
   </div>
   </div>
   

  )
}


