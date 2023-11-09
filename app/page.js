import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <div>
      <div>
        <Link href="/pages/upload"><button>UPLOAD</button></Link>
        <Link href="/pages/gallery"><button>GALLERY2</button></Link>
      </div>
        <div>
          
        </div>
      </div>
    </main>
  )
}
