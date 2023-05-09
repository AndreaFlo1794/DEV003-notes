import Image from "next/image";
import styles from "../../styles/Header.module.css";
import lapiz from "../../../public/img/lapiz.png";

export default function Header() {
  return (
    <header>
      <Image className={styles.logo} src={lapiz} alt="" />
      <p className={styles.logoTitle}>Lab Notes</p>
    </header>
  );
}