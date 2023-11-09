import Link from 'next/link'
import styles from './styles/home.module.css'

export default function Home() {
  return (
    <main>
      <div>
      <div className={styles.row}>
        <Link href="/pages/upload"><button className={styles.button1}>UPLOAD</button></Link>
        <Link href="/pages/gallery"><button className={styles.button2}>GALLERY2</button></Link>
      </div>
        <div>
          
        </div>
      </div>
    </main>
  )
}
